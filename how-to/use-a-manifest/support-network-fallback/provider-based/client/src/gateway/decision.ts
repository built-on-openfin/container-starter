/**
 * What the gateway decided, carried to the chosen provider in its query string so the provider can log it.
 */
import { PROVIDER_PATH, ROUTES, routeOrigin, type RouteId } from "../../../shared/route-config";

/**
 * Why the gateway chose a route.
 * - preference: the user chose this route with the in-app switcher before the last restart.
 * - health: the preferred route passed its health check.
 * - fallback: the preferred or stored route failed its health check, so the gateway used the other route.
 */
export type SelectedBy = "preference" | "health" | "fallback";

/**
 * The gateway's decision.
 */
export interface GatewayDecision {
	/**
	 * The chosen route.
	 */
	route: RouteId;

	/**
	 * Why it was chosen.
	 */
	selectedBy: SelectedBy;

	/**
	 * What the gateway found, for the log.
	 */
	detail: string;

	/**
	 * The state of the gateway's service worker, for the log.
	 */
	serviceWorker: string;
}

/**
 * Build the URL of the chosen provider, with the decision in its query string.
 * @param decision The decision.
 * @returns The provider URL.
 */
export function providerUrlFor(decision: GatewayDecision): string {
	const query = new URLSearchParams({
		selectedBy: decision.selectedBy,
		detail: decision.detail,
		serviceWorker: decision.serviceWorker
	});
	return `${routeOrigin(ROUTES[decision.route])}${PROVIDER_PATH}?${query.toString()}`;
}

/**
 * Read the decision from the provider's query string.
 * @param search The provider's location.search.
 * @returns The decision without the route (the provider knows its own route), or undefined if the
 * provider was not opened by the gateway.
 */
export function readGatewayDecision(search: string): Omit<GatewayDecision, "route"> | undefined {
	const query = new URLSearchParams(search);
	const selectedBy = query.get("selectedBy");
	if (selectedBy !== "preference" && selectedBy !== "health" && selectedBy !== "fallback") {
		return undefined;
	}
	return {
		selectedBy,
		detail: query.get("detail") ?? "",
		serviceWorker: query.get("serviceWorker") ?? ""
	};
}
