/**
 * The single place to change versions, ports, hosts and paths.
 * Both the server and the client import this file, so the two routes cannot drift apart.
 */
import runtimeConfig from "./runtime.fin.json";

/**
 * The two routes to the same platform.
 */
export type RouteId = "internal" | "public";

/**
 * Describes one route (one deployment of the platform).
 */
export interface RouteConfig {
	/**
	 * The route id.
	 */
	id: RouteId;

	/**
	 * The local host name used by the sample. Different host names keep cookies and storage separate.
	 */
	host: string;

	/**
	 * The local port used by the sample.
	 */
	port: number;

	/**
	 * The host name this route stands in for in a real deployment.
	 */
	displayHost: string;

	/**
	 * The badge colour shown in the app view.
	 */
	color: string;

	/**
	 * The preferred route is the one the gateway chooses whenever it is healthy.
	 */
	preferred: boolean;
}

// The multi-manifest approach uses 5050 to 5052, and 5070 for its provider-refused experiment.
// 5060 and 5061 are on Chromium's unsafe-port list.
export const ROUTES: { [id in RouteId]: RouteConfig } = {
	internal: {
		id: "internal",
		host: "localhost",
		port: 5080,
		displayHost: "app.example.internal",
		color: "#2b6cd6",
		preferred: true
	},
	public: {
		id: "public",
		host: "127.0.0.1",
		port: 5081,
		displayHost: "app.example.com",
		color: "#e07b22",
		preferred: false
	}
};

export const CONTROL_PORT = 5082;

/**
 * The route that serves the manifest, the gateway and the preference page. Installing and launching
 * depend only on this route.
 */
export const GATEWAY_ROUTE: RouteConfig = ROUTES.public;

export const PLATFORM_UUID = "support-network-fallback-provider";
export const SECURITY_REALM = "support-network-fallback-provider";
// The version lives in runtime.fin.json because scripts/update-versions.js updates runtime.version in
// every *.fin.json file.
export const RUNTIME_VERSION = runtimeConfig.runtime.version;
export const RUNTIME_ARGUMENTS = `--v=1 --inspect --enable-mesh --security-realm=${SECURITY_REALM}`;
export const LICENSE_KEY = "openfin-demo-license-key";

export const MANIFEST_PATH = "/manifest.fin.json";
export const GATEWAY_PATH = "/gateway/index.html";
export const PREFERENCE_PAGE_PATH = "/gateway/preference.html";
export const PROVIDER_PATH = "/provider.html";
export const APP_PATH = "/app.html";
export const APP_VIEW_NAME = "support-network-fallback-provider-app";
export const PRELOAD_PATH = "/js/preload.bundle.js";
export const PRELOAD_DESTINATION_PATH = "/preload/destination.js";

export const STATUS_CHANNEL = "support-network-fallback-provider/status";
export const PREFERENCE_CHANNEL = "support-network-fallback-provider/preference";
export const PREFERENCE_KEY = "support-network-fallback-provider/preferred-route";
export const PREFERENCE_WINDOW_NAME = "support-network-fallback-provider-preference";

export const HEALTH_POLL_INTERVAL_MS = 5000;
export const HEALTH_TIMEOUT_MS = 2000;

/**
 * Get the origin of a route, for example http://localhost:5080.
 * @param route The route.
 * @returns The origin.
 */
export function routeOrigin(route: RouteConfig): string {
	return `http://${route.host}:${route.port}`;
}

/**
 * Get the route that is not the given one.
 * @param id The route id.
 * @returns The other route.
 */
export function otherRoute(id: RouteId): RouteConfig {
	return id === "internal" ? ROUTES.public : ROUTES.internal;
}

/**
 * Get the preferred route.
 * @returns The route marked as preferred.
 */
export function preferredRoute(): RouteConfig {
	return ROUTES.internal.preferred ? ROUTES.internal : ROUTES.public;
}

/**
 * Find the route served from an origin.
 * @param origin The origin, for example location.origin.
 * @returns The route, or undefined if the origin is not a known route.
 */
export function routeForOrigin(origin: string): RouteConfig | undefined {
	return Object.values(ROUTES).find((route) => routeOrigin(route) === origin);
}

/**
 * Check whether a value is a route id.
 * @param value The value.
 * @returns True for "internal" or "public".
 */
export function isRouteId(value: unknown): value is RouteId {
	return value === "internal" || value === "public";
}
