import {
	GATEWAY_PATH,
	GATEWAY_ROUTE,
	LICENSE_KEY,
	PLATFORM_UUID,
	PRELOAD_PATH,
	preferredRoute,
	routeOrigin,
	RUNTIME_ARGUMENTS,
	RUNTIME_VERSION
} from "../../../shared/route-config";

/**
 * The secured APIs the provider uses to register the custom scheme on Windows.
 * client/src/launch-params.ts repeats the scheme name; keep them in step.
 * @returns The platform permissions.
 */
function customSchemePermissions(): { [key: string]: unknown } {
	const scheme = { enabled: true, protocols: ["here-sample-network-fallback"] };
	return { System: { registerCustomProtocol: scheme, getCustomProtocolState: scheme } };
}

/**
 * Build the platform manifest. There is only one, served from the public route.
 *
 * The provider starts at the gateway page on the public route, which chooses the internal or public
 * provider and navigates to it. The manifest has no snapshot, because the views must load from the
 * route the gateway chose; the provider builds the window from its own origin.
 *
 * offlineAccess lets the RVM start from its cached copy if the public route is briefly unreachable.
 *
 * The preload is declared for the provider window and as the default for every window and view, always
 * from the public route. Domain settings can only enable or disable a declared preload, not add one.
 * @returns The manifest.
 */
export function buildPlatformManifest(): { [key: string]: unknown } {
	const origin = routeOrigin(GATEWAY_ROUTE);
	const name = "Network Fallback Provider-Based";
	const preloadScripts = [{ url: `${origin}${PRELOAD_PATH}` }];

	return {
		licenseKey: LICENSE_KEY,
		runtime: {
			version: RUNTIME_VERSION,
			arguments: RUNTIME_ARGUMENTS
		},
		offlineAccess: true,
		platform: {
			uuid: PLATFORM_UUID,
			name,
			icon: `${origin}/favicon.ico`,
			providerUrl: `${origin}${GATEWAY_PATH}`,
			autoShow: false,
			enableJumpList: true,
			permissions: customSchemePermissions(),
			preloadScripts,
			defaultWindowOptions: { preloadScripts },
			defaultViewOptions: { preloadScripts }
		},
		shortcut: {
			company: "Example Co",
			name,
			description: `Starts ${name}, preferring ${preferredRoute().displayHost}`,
			icon: `${origin}/favicon.ico`,
			target: ["start-menu"]
		}
	};
}
