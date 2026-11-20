/**
 * Test tool only. Sits in front of a route's deployment app and breaks it on request.
 * It never changes the deployment app itself.
 */
import type { Application } from "express";
import http from "http";
import type { Socket } from "net";
import { otherRoute, ROUTES, type RouteId } from "../../../shared/route-config";
import { buildPlatformManifest } from "../deployment/manifests";
import { recordHealthRequest, type RouteMode, type SimulatorState } from "./state";

// Nothing listens here, so a provider URL on this port is refused while the route itself stays up.
// It must not be on Chromium's unsafe-port list, which rules out 5060 and 5061.
const REFUSED_PROVIDER_PORT_OFFSET = 20;

/**
 * Apply the provider-only modes. The manifest and /health keep working in all of them.
 * - provider-500: /provider.html returns HTTP 500.
 * - provider-reset: /provider.html closes the connection without answering.
 * - provider-refused: the manifest points providerUrl at a port with no listener.
 * @param routeId The route.
 * @param mode The route's mode.
 * @param req The request.
 * @param res The response.
 * @returns True if the request was handled here.
 */
function breakProvider(
	routeId: RouteId,
	mode: RouteMode,
	req: http.IncomingMessage,
	res: http.ServerResponse
): boolean {
	const requestPath = req.url?.split("?")[0];
	if (requestPath === "/provider.html" && mode === "provider-500") {
		res.writeHead(500, { "Content-Type": "text/plain", "Cache-Control": "no-store" });
		res.end("Provider error");
		return true;
	}
	if (requestPath === "/provider.html" && mode === "provider-reset") {
		req.socket.destroy();
		return true;
	}
	const isManifest = requestPath === "/manifest.fin.json" || requestPath === "/fresh/manifest.fin.json";
	if (isManifest && mode === "provider-refused") {
		const route = ROUTES[routeId];
		const identity = requestPath.startsWith("/fresh/") ? "fresh" : "normal";
		const manifest = buildPlatformManifest(route, otherRoute(routeId), identity);
		const platform = manifest.platform as { providerUrl: string };
		const refusedPort = route.port + REFUSED_PROVIDER_PORT_OFFSET;
		platform.providerUrl = `http://${route.host}:${refusedPort}/provider.html`;
		res.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-store" });
		res.end(JSON.stringify(manifest));
		return true;
	}
	return false;
}

/**
 * Controls the listener of one wrapped route.
 */
export interface FaultedServer {
	/**
	 * Remember the address and start listening unless the route is down.
	 * @param host The host to listen on.
	 * @param port The port to listen on.
	 */
	listen(host: string, port: number): void;

	/**
	 * Start or stop the listener to match the current mode.
	 */
	apply(): void;
}

/**
 * Wrap a deployment app in the fault layer.
 * @param routeId The route being wrapped.
 * @param app The deployment app.
 * @param state The simulator state that holds the mode.
 * @returns Controls for the listener.
 */
export function wrapWithFaults(routeId: RouteId, app: Application, state: SimulatorState): FaultedServer {
	let server: http.Server | undefined;
	let address: { host: string; port: number } | undefined;
	const sockets = new Set<Socket>();

	/**
	 * Handle one request: log /health requests, and answer 500 in server-error mode.
	 * @param req The request.
	 * @param res The response.
	 */
	function handle(req: http.IncomingMessage, res: http.ServerResponse): void {
		const mode = state.modes[routeId];
		if (req.url?.startsWith("/health")) {
			const time = new Date().toISOString();
			res.on("finish", () =>
				recordHealthRequest(state, { time, route: routeId, mode, status: res.statusCode })
			);
		}
		if (mode === "server-error") {
			res.writeHead(500, { "Content-Type": "text/plain", "Cache-Control": "no-store" });
			res.end("Server error");
			return;
		}
		if (breakProvider(routeId, mode, req, res)) {
			return;
		}
		app(req, res);
	}

	/**
	 * Start listening, if not already.
	 */
	function start(): void {
		if (server !== undefined || address === undefined) {
			return;
		}
		server = http.createServer(handle);
		server.on("connection", (socket: Socket) => {
			sockets.add(socket);
			socket.on("close", () => sockets.delete(socket));
		});
		server.listen(address.port, address.host);
	}

	/**
	 * Stop listening and drop open connections, which looks like an unreachable host.
	 */
	function stop(): void {
		if (!server) {
			return;
		}
		server.close();
		for (const socket of sockets) {
			socket.destroy();
		}
		sockets.clear();
		server = undefined;
	}

	/**
	 * Start or stop the listener to match the mode.
	 */
	function apply(): void {
		if (state.modes[routeId] === "down") {
			stop();
		} else {
			start();
		}
	}

	return {
		listen: (host: string, port: number): void => {
			address = { host, port };
			apply();
		},
		apply
	};
}
