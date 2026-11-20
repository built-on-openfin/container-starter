import {
	LICENSE_KEY,
	RUNTIME_ARGUMENTS,
	RUNTIME_VERSION,
	manifestPathFor,
	platformUuidFor,
	routeOrigin,
	type Identity,
	type RouteConfig
} from "../../../shared/route-config";

/**
 * Build the platform manifest for a route.
 *
 * Each route hosts its own provider and view. If a route is unreachable the platform cannot start from it,
 * and that failure is what makes the RVM try the fallbackManifests list (it needs a cached copy of this
 * manifest to read the list, which is why offlineAccess is on).
 * @param route The route serving this manifest.
 * @param other The other route, used for the fallback list.
 * @param identity The normal identity, or the fresh identity used for the first-launch scenario.
 * @returns The manifest.
 */
export function buildPlatformManifest(
	route: RouteConfig,
	other: RouteConfig,
	identity: Identity
): { [key: string]: unknown } {
	const origin = routeOrigin(route);
	const name = identity === "fresh" ? "Support Network Fallback (fresh)" : "Support Network Fallback";

	const manifest: { [key: string]: unknown } = {
		licenseKey: LICENSE_KEY,
		runtime: {
			version: RUNTIME_VERSION,
			arguments: RUNTIME_ARGUMENTS
		},
		offlineAccess: true,
		fallbackManifests: [{ manifest: `${routeOrigin(other)}${manifestPathFor(identity)}` }],
		platform: {
			uuid: platformUuidFor(identity),
			name,
			icon: `${origin}/favicon.ico`,
			providerUrl: `${origin}/provider.html`,
			autoShow: false
		},
		snapshot: {
			windows: [
				{
					defaultWidth: 860,
					defaultHeight: 760,
					defaultCentered: true,
					layout: {
						content: [
							{
								type: "stack",
								content: [
									{
										type: "component",
										componentName: "view",
										componentState: {
											name: "support-network-fallback-app",
											url: `${origin}/app.html`
										},
										title: name
									}
								]
							}
						]
					}
				}
			]
		}
	};

	// Only the preferred route's normal manifest has a shortcut block, so the shortcut the RVM creates
	// always targets the preferred manifest. A fallback launch uses the public manifest, which has none,
	// so it does not change the shortcut.
	if (route.preferred && identity === "normal") {
		manifest.shortcut = {
			company: "Example Co",
			name,
			description: `Starts ${name}, preferring ${route.displayHost}`,
			icon: `${origin}/favicon.ico`,
			target: ["start-menu"]
		};
	}

	return manifest;
}
