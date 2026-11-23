/**
 * Test tool only. Sits in front of a route's deployment app and breaks it on request.
 * It never changes the deployment app itself.
 */
import type { Application } from "express";
import http from "http";
import type { Socket } from "net";
import type { RouteId } from "../../../shared/route-config";
import { recordHealthRequest, type SimulatorState } from "./state";

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
