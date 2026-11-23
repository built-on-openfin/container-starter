import {
	otherRoute,
	routeForOrigin,
	routeOrigin,
	type RouteConfig,
	type RouteId
} from "../../shared/route-config";

/**
 * Everything the client needs to know about one route.
 */
export interface RouteInfo {
	/**
	 * The route id.
	 */
	id: RouteId;

	/**
	 * The route origin, for example http://localhost:5080.
	 */
	origin: string;

	/**
	 * The host name the route stands in for.
	 */
	displayHost: string;

	/**
	 * The badge colour.
	 */
	color: string;

	/**
	 * The /health endpoint on this route.
	 */
	healthUrl: string;
}

/**
 * The routes as seen by the running platform.
 */
export interface ResolvedRoutes {
	/**
	 * The route the platform is running on.
	 */
	current: RouteInfo;

	/**
	 * The route that could be switched to.
	 */
	other: RouteInfo;

	/**
	 * True when the current route is the preferred one.
	 */
	preferred: boolean;
}

/**
 * Build the route info for a route.
 * @param route The route.
 * @returns The route info.
 */
function toRouteInfo(route: RouteConfig): RouteInfo {
	const origin = routeOrigin(route);
	return {
		id: route.id,
		origin,
		displayHost: route.displayHost,
		color: route.color,
		healthUrl: `${origin}/health`
	};
}

/**
 * Work out the current route and the other route from the provider's own origin. The gateway navigated
 * the provider window to the chosen route's provider, so its origin is the current route.
 * @param providerOrigin The provider's location.origin.
 * @returns The resolved routes, or a message if the origin is not a known route.
 */
export function resolveRoutes(providerOrigin: string): { routes?: ResolvedRoutes; problem?: string } {
	const current = routeForOrigin(providerOrigin);
	if (!current) {
		return { problem: `The provider origin ${providerOrigin} is not a known route.` };
	}
	return {
		routes: {
			current: toRouteInfo(current),
			other: toRouteInfo(otherRoute(current.id)),
			preferred: current.preferred
		}
	};
}
