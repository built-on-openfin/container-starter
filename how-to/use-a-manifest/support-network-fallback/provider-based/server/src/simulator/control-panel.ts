/**
 * Test tool only. The control panel API and page used to set each route's state.
 */
import express, { type Application } from "express";
import path from "path";
import {
	GATEWAY_ROUTE,
	MANIFEST_PATH,
	routeOrigin,
	isRouteId,
	type RouteId
} from "../../../shared/route-config";
import { ROUTE_MODES, setRouteMode, type SimulatorState } from "./state";

// Compiled to server/build/server/src/simulator, five levels below the sample folder.
const CONTROL_PAGE = path.resolve(__dirname, "..", "..", "..", "..", "..", "public", "control", "index.html");

/**
 * Build the launch details for the one manifest, which is on the public route.
 * @returns The manifest URL, the fin:// link and the direct RVM commands for Windows and macOS.
 */
export function launchDetails(): {
	manifestUrl: string;
	finLink: string;
	rvmCommand: string;
	macRvmCommand: string;
} {
	const manifestUrl = `${routeOrigin(GATEWAY_ROUTE)}${MANIFEST_PATH}`;
	return {
		manifestUrl,
		finLink: `fin://${GATEWAY_ROUTE.host}:${GATEWAY_ROUTE.port}${MANIFEST_PATH}`,
		rvmCommand: `"%LOCALAPPDATA%\\OpenFin\\OpenFinRVM.exe" --config=${manifestUrl}`,
		macRvmCommand: `/Applications/OpenFinRVM.app/Contents/MacOS/OpenFinRVM --config="${manifestUrl}"`
	};
}

/**
 * Create the control panel app.
 * @param state The simulator state.
 * @param onRouteChanged Called after a route's mode changes, so its listener can be started or stopped.
 * @returns The express application.
 */
export function createControlPanel(
	state: SimulatorState,
	onRouteChanged: (id: RouteId) => void
): Application {
	const app = express();
	app.use(express.json());

	app.get("/", (req, res) => res.sendFile(CONTROL_PAGE));

	app.get("/api/state", (req, res) => {
		res.json({ modes: state.modes, allModes: ROUTE_MODES });
	});

	app.post("/api/route/:id", (req, res) => {
		const id = req.params.id;
		if (!isRouteId(id)) {
			res.status(404).json({ error: "unknown route" });
			return;
		}
		setRouteMode(state, id, (req.body as { mode?: unknown }).mode);
		onRouteChanged(id);
		res.json({ mode: state.modes[id] });
	});

	app.get("/api/log", (req, res) => {
		const since = Number(req.query.since ?? 0);
		res.json(state.log.filter((entry) => entry.id > since));
	});

	app.get("/api/launch-url", (req, res) => {
		res.json(launchDetails());
	});

	return app;
}
