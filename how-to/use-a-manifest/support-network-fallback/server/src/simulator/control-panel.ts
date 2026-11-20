/**
 * Test tool only. The control panel API and page used to set each route's state.
 */
import express, { type Application } from "express";
import path from "path";
import { manifestPathFor, routeOrigin, ROUTES, type RouteId } from "../../../shared/route-config";
import { ROUTE_MODES, setRouteMode, type SimulatorState } from "./state";

// Compiled to server/build/server/src/simulator, five levels below the sample folder.
const CONTROL_PAGE = path.resolve(__dirname, "..", "..", "..", "..", "..", "public", "control", "index.html");

/**
 * Narrow a request parameter to a route id.
 * @param value The parameter.
 * @returns The route id, or undefined if it is not one.
 */
function toRouteId(value: unknown): RouteId | undefined {
	return value === "internal" || value === "public" ? value : undefined;
}

/**
 * Build the launch details for a route and identity.
 * @param route The route to launch from.
 * @param identity The identity to launch.
 * @returns The manifest URL, the fin:// link and the direct RVM command.
 */
export function launchDetails(
	route: RouteId,
	identity: "normal" | "fresh"
): { manifestUrl: string; finLink: string; rvmCommand: string } {
	const config = ROUTES[route];
	const manifestUrl = `${routeOrigin(config)}${manifestPathFor(identity)}`;
	return {
		manifestUrl,
		finLink: `fin://${config.host}:${config.port}${manifestPathFor(identity)}`,
		rvmCommand: `"%LOCALAPPDATA%\\OpenFin\\OpenFinRVM.exe" --config=${manifestUrl}`
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
		const id = toRouteId(req.params.id);
		if (!id) {
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
		const route = toRouteId(req.query.route) ?? "internal";
		const identity = req.query.identity === "fresh" ? "fresh" : "normal";
		res.json(launchDetails(route, identity));
	});

	return app;
}
