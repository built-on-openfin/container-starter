/**
 * The single place to change versions, ports, hosts and identities.
 * Both the server and the client import this file, so the two routes cannot drift apart.
 */

/**
 * The two routes to the same platform.
 */
export type RouteId = "internal" | "public";

/**
 * The manifest identity. "fresh" is only used for the first-launch scenario.
 */
export type Identity = "normal" | "fresh";

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
	 * The preferred route is the one the shortcut targets, so only its manifest has a shortcut block.
	 */
	preferred: boolean;
}

export const ROUTES: { [id in RouteId]: RouteConfig } = {
	internal: {
		id: "internal",
		host: "localhost",
		port: 5050,
		displayHost: "app.example.internal",
		color: "#2b6cd6",
		preferred: true
	},
	public: {
		id: "public",
		host: "127.0.0.1",
		port: 5051,
		displayHost: "app.example.com",
		color: "#e07b22",
		preferred: false
	}
};

export const CONTROL_PORT = 5052;

export const PLATFORM_UUID = "support-network-fallback";
export const FRESH_PLATFORM_UUID = "support-network-fallback-fresh";

// public/switcher/switcher.fin.json repeats the runtime version, arguments and license key; keep them in step.
export const SECURITY_REALM = "support-network-fallback";
export const RUNTIME_VERSION = "43.142.101.2";
export const RUNTIME_ARGUMENTS = `--v=1 --inspect --enable-mesh --security-realm=${SECURITY_REALM}`;
export const LICENSE_KEY = "openfin-demo-license-key";

export const STATUS_CHANNEL = "support-network-fallback/status";
export const APP_PATH = "/app.html";
export const APP_VIEW_NAME = "support-network-fallback-app";

export const PROVIDER_PATH = "/provider.html";

// public/switcher/switcher.fin.json repeats the switcher uuid and page; keep them in step.
export const SWITCHER_UUID = "support-network-fallback-switcher";
export const SWITCHER_MANIFEST_PATH = "/switcher/switcher.fin.json";
export const SWITCHER_PAGE_PATH = "/switcher/switcher.html";

export const HEALTH_POLL_INTERVAL_MS = 5000;
export const HEALTH_TIMEOUT_MS = 2000;

/**
 * Get the origin of a route, for example http://localhost:5050.
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
 * Get the platform uuid for an identity.
 * @param identity The identity.
 * @returns The platform uuid.
 */
export function platformUuidFor(identity: Identity): string {
	return identity === "fresh" ? FRESH_PLATFORM_UUID : PLATFORM_UUID;
}

/**
 * Get the manifest path for an identity.
 * @param identity The identity.
 * @returns The path of the platform manifest on a route.
 */
export function manifestPathFor(identity: Identity): string {
	return identity === "fresh" ? "/fresh/manifest.fin.json" : "/manifest.fin.json";
}
