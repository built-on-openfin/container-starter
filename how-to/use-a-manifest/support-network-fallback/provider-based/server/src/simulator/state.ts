/**
 * Test tool only. In-memory state that the control panel edits and the fault layer reads.
 */
import type { HealthStatus } from "../../../shared/health-contract";
import type { RouteId } from "../../../shared/route-config";
import type { HealthSources } from "../deployment/health";

/**
 * The states the control panel can put a route in.
 * - healthy: /health reports healthy.
 * - unhealthy: /health reports unhealthy, everything else works.
 * - server-error: every request returns HTTP 500.
 * - down: the listener is closed, so connections are refused.
 */
export type RouteMode = "healthy" | "unhealthy" | "server-error" | "down";

export const ROUTE_MODES: RouteMode[] = ["healthy", "unhealthy", "server-error", "down"];

/**
 * One /health request seen by the fault layer.
 */
export interface HealthRequestEntry {
	/**
	 * Sequence number, so the control panel can ask for newer entries.
	 */
	id: number;

	/**
	 * When the request arrived.
	 */
	time: string;

	/**
	 * The route that received it.
	 */
	route: RouteId;

	/**
	 * The route's mode at the time.
	 */
	mode: RouteMode;

	/**
	 * The HTTP status sent.
	 */
	status: number;
}

/**
 * Everything the simulator holds.
 */
export interface SimulatorState {
	/**
	 * The mode of each route.
	 */
	modes: { [id in RouteId]: RouteMode };

	/**
	 * The last 200 /health requests, oldest first.
	 */
	log: HealthRequestEntry[];

	/**
	 * The next log entry id.
	 */
	nextLogId: number;
}

const LOG_SIZE = 200;

/**
 * Create the starting state: both routes healthy.
 * @returns The state.
 */
export function createSimulatorState(): SimulatorState {
	return { modes: { internal: "healthy", public: "healthy" }, log: [], nextLogId: 1 };
}

/**
 * Set the mode of a route, ignoring unknown modes.
 * @param state The simulator state.
 * @param id The route.
 * @param mode The new mode.
 */
export function setRouteMode(state: SimulatorState, id: RouteId, mode: unknown): void {
	const match = ROUTE_MODES.find((known) => known === mode);
	if (match) {
		state.modes[id] = match;
	}
}

/**
 * Add a /health request to the log, dropping the oldest when full.
 * @param state The simulator state.
 * @param entry The entry without its id.
 */
export function recordHealthRequest(state: SimulatorState, entry: Omit<HealthRequestEntry, "id">): void {
	state.log.push({ id: state.nextLogId++, ...entry });
	if (state.log.length > LOG_SIZE) {
		state.log.splice(0, state.log.length - LOG_SIZE);
	}
}

/**
 * The status the deployment's /health handler reports for a route.
 * @param state The simulator state.
 * @param id The route.
 * @returns The sources to pass to createRouteServer.
 */
export function healthSourcesFor(state: SimulatorState, id: RouteId): HealthSources {
	return {
		status: (): HealthStatus => (state.modes[id] === "unhealthy" ? "unhealthy" : "healthy")
	};
}
