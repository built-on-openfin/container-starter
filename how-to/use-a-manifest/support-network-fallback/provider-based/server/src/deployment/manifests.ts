import {
	GATEWAY_PATH,
	GATEWAY_ROUTE,
	LICENSE_KEY,
	PLATFORM_UUID,
	preferredRoute,
	routeOrigin,
	RUNTIME_ARGUMENTS,
	RUNTIME_VERSION
} from "../../../shared/route-config";

/**
 * Build the platform manifest. There is only one, served from the public route.
 *
 * The provider starts at the gateway page on the public route, which chooses the internal or public
 * provider and navigates to it. The manifest has no snapshot, because the views must load from the
 * route the gateway chose; the provider builds the window from its own origin.
 *
 * offlineAccess lets the RVM start from its cached copy if the public route is briefly unreachable.
 * @returns The manifest.
 */
export function buildPlatformManifest(): { [key: string]: unknown } {
	const origin = routeOrigin(GATEWAY_ROUTE);
	const name = "Support Network Fallback (provider-based)";

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
			autoShow: false
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
