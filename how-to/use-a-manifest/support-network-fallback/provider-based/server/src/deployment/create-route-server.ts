import express, { type Application, type Response } from "express";
import path from "path";
import { GATEWAY_ROUTE, MANIFEST_PATH, type RouteConfig } from "../../../shared/route-config";
import { createHealthHandler, type HealthSources } from "./health";
import { buildPlatformManifest } from "./manifests";

// Compiled to server/build/server/src/deployment, five levels below the sample folder.
const PUBLIC_DIR = path.resolve(__dirname, "..", "..", "..", "..", "..", "public");

/**
 * Send a manifest that must never be cached by the browser or a proxy.
 * @param res The response.
 * @param manifest The manifest to send.
 */
function sendManifest(res: Response, manifest: unknown): void {
	res.set("Cache-Control", "no-store");
	res.json(manifest);
}

/**
 * Create the server for one route: what a real deployment of the platform would serve.
 * It knows nothing about the simulator; its health status comes in through the sources argument.
 *
 * Both routes serve the provider, the app view and /health. Only the public route serves the manifest
 * and the gateway, so installing and launching never depend on the internal route.
 * @param route The route this server is.
 * @param sources Where the health status comes from.
 * @returns The express application.
 */
export function createRouteServer(route: RouteConfig, sources: HealthSources): Application {
	const app = express();
	const servesGateway = route.id === GATEWAY_ROUTE.id;

	if (servesGateway) {
		app.get(MANIFEST_PATH, (req, res) => sendManifest(res, buildPlatformManifest()));
	} else {
		app.use("/gateway", (req, res) => res.sendStatus(404));
	}
	app.get("/health", createHealthHandler(sources));
	app.use(
		express.static(PUBLIC_DIR, {
			index: false,
			setHeaders: (res, filePath) => {
				// The browser checks for a new service worker on each registration, so it must not be cached.
				if (path.basename(filePath) === "sw.js") {
					res.set("Cache-Control", "no-cache");
				}
			}
		})
	);

	return app;
}
