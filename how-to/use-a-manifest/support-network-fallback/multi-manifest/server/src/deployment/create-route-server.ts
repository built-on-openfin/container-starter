import express, { type Application, type Response } from "express";
import path from "path";
import { otherRoute, SWITCHER_MANIFEST_PATH, type RouteConfig } from "../../../shared/route-config";
import { createHealthHandler, type HealthSources } from "./health";
import { buildPlatformManifest, buildSwitcherManifest } from "./manifests";

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
 * @param route The route this server is.
 * @param sources Where the health status comes from.
 * @returns The express application.
 */
export function createRouteServer(route: RouteConfig, sources: HealthSources): Application {
	const app = express();
	const other = otherRoute(route.id);

	app.get("/manifest.fin.json", (req, res) =>
		sendManifest(res, buildPlatformManifest(route, other, "normal"))
	);
	app.get("/fresh/manifest.fin.json", (req, res) =>
		sendManifest(res, buildPlatformManifest(route, other, "fresh"))
	);
	app.get(SWITCHER_MANIFEST_PATH, (req, res) => sendManifest(res, buildSwitcherManifest(route)));
	app.get("/health", createHealthHandler(sources));
	app.use(express.static(PUBLIC_DIR, { index: false }));

	return app;
}
