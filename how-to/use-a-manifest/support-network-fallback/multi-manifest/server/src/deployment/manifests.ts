import {
	APP_PATH,
	APP_VIEW_NAME,
	LICENSE_KEY,
	PROVIDER_PATH,
	RUNTIME_ARGUMENTS,
	RUNTIME_VERSION,
	SWITCHER_PAGE_PATH,
	SWITCHER_UUID,
	manifestPathFor,
	platformUuidFor,
	routeOrigin,
	type Identity,
	type RouteConfig
} from "../../../shared/route-config";

/**
 * The secured APIs the provider uses to register the custom scheme on Windows. Both routes' manifests
 * ask for them, so whichever route runs last owns the scheme.
 * client/src/launch-params.ts repeats the scheme name; keep them in step.
 * @returns The platform permissions.
 */
function customSchemePermissions(): { [key: string]: unknown } {
	const scheme = { enabled: true, protocols: ["here-sample-network-fallback"] };
	return { System: { registerCustomProtocol: scheme, getCustomProtocolState: scheme } };
}

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
	const name = identity === "fresh" ? "Support Network Fallback - Fresh" : "Support Network Fallback";

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
			providerUrl: `${origin}${PROVIDER_PATH}`,
			autoShow: false,
			enableJumpList: true,
			permissions: customSchemePermissions()
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
											name: APP_VIEW_NAME,
											url: `${origin}${APP_PATH}`
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

/**
 * Build the switcher manifest for a route. It uses the same runtime version and arguments as the platform
 * manifests, so it runs in the same runtime process and can reach the hand-over channels.
 * @param route The route serving this manifest.
 * @returns The manifest.
 */
export function buildSwitcherManifest(route: RouteConfig): { [key: string]: unknown } {
	const origin = routeOrigin(route);
	return {
		licenseKey: LICENSE_KEY,
		runtime: {
			version: RUNTIME_VERSION,
			arguments: RUNTIME_ARGUMENTS
		},
		// eslint-disable-next-line camelcase -- the runtime requires this manifest key name.
		startup_app: {
			uuid: SWITCHER_UUID,
			name: SWITCHER_UUID,
			url: `${origin}${SWITCHER_PAGE_PATH}`,
			icon: `${origin}/favicon.ico`,
			autoShow: true,
			defaultWidth: 460,
			defaultHeight: 300,
			defaultCentered: true,
			resizable: false,
			saveWindowState: false
		}
	};
}
