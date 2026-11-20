import type OpenFin from "@openfin/core";
import {
	FRESH_PLATFORM_UUID,
	ROUTES,
	SWITCHER_MANIFEST_PATH,
	routeOrigin,
	type Identity,
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
	 * The route origin, for example http://localhost:5050.
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
	 * The platform manifest for the running identity on this route.
	 */
	manifestUrl: string;

	/**
	 * The /health endpoint on this route.
	 */
	healthUrl: string;

	/**
	 * The switcher app manifest on this route.
	 */
	switcherUrl: string;
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
	 * The route to fall back or switch to, if one is configured.
	 */
	other?: RouteInfo;

	/**
	 * True when the running manifest has a shortcut block, which marks the preferred route.
	 */
	preferred: boolean;

	/**
	 * The running identity.
	 */
	identity: Identity;

	/**
	 * The running platform uuid.
	 */
	platformUuid: string;
}

/**
 * The Manifest type does not declare fallbackManifests, so extend it locally.
 */
export type ManifestWithFallback = OpenFin.Manifest & { fallbackManifests?: { manifest: string }[] };

/**
 * Build the route info for an origin and manifest URL.
 * @param origin The route origin.
 * @param manifestUrl The platform manifest URL on that origin.
 * @returns The route info, or undefined if the origin is not one of the known routes.
 */
function toRouteInfo(origin: string, manifestUrl: string): RouteInfo | undefined {
	const config = Object.values(ROUTES).find((route) => routeOrigin(route) === origin);
	if (!config) {
		return undefined;
	}
	return {
		id: config.id,
		origin,
		displayHost: config.displayHost,
		color: config.color,
		manifestUrl,
		healthUrl: `${origin}/health`,
		switcherUrl: `${origin}${SWITCHER_MANIFEST_PATH}`
	};
}

/**
 * Work out the current route, the other route and whether this route is preferred.
 *
 * - Current route: the provider's own origin, because each route hosts its own provider.
 * - Other route: the origin of the first fallbackManifests entry. Both routes use the same paths.
 * - Preferred: the running manifest has a shortcut block.
 *
 * This is the only place that reads fallbackManifests or the provider origin.
 * @param manifest The running manifest from getManifest().
 * @param providerOrigin The provider's location.origin.
 * @param manifestUrl The running manifest URL from getInfo().
 * @returns The resolved routes, and a message if no other route is configured.
 */
export function resolveRoutes(
	manifest: ManifestWithFallback,
	providerOrigin: string,
	manifestUrl: string
): { routes?: ResolvedRoutes; problem?: string } {
	const current = toRouteInfo(providerOrigin, manifestUrl);
	if (!current) {
		return { problem: `The provider origin ${providerOrigin} is not a known route.` };
	}

	const platformUuid = manifest.platform?.uuid ?? "";
	const routes: ResolvedRoutes = {
		current,
		preferred: manifest.shortcut !== undefined,
		identity: platformUuid === FRESH_PLATFORM_UUID ? "fresh" : "normal",
		platformUuid
	};

	const fallbackUrl = manifest.fallbackManifests?.[0]?.manifest;
	if (!fallbackUrl) {
		return { routes, problem: "No other route configured (the manifest has no fallbackManifests)." };
	}

	routes.other = toRouteInfo(new URL(fallbackUrl).origin, fallbackUrl);
	if (!routes.other) {
		return { routes, problem: `The fallback manifest ${fallbackUrl} is not on a known route.` };
	}
	return { routes };
}
