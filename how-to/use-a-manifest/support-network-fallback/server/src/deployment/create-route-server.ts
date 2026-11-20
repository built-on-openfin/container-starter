import express, { type Application, type Response } from "express";
import { readFile } from "fs/promises";
import path from "path";
import {
	otherRoute,
	routeOrigin,
	SWITCHER_MANIFEST_PATH,
	type RouteConfig
} from "../../../shared/route-config";
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
	// The runtime rejects a relative startup_app url, so the file holds an {origin} token that each
	// route replaces with its own origin.
	app.get(SWITCHER_MANIFEST_PATH, async (req, res, next) => {
		try {
			const template = await readFile(path.join(PUBLIC_DIR, SWITCHER_MANIFEST_PATH), "utf8");
			sendManifest(res, JSON.parse(template.replaceAll("{origin}", routeOrigin(route))));
		} catch (error) {
			next(error);
		}
	});
	app.get("/health", createHealthHandler(sources));
	app.use(express.static(PUBLIC_DIR, { index: false }));

	return app;
}
