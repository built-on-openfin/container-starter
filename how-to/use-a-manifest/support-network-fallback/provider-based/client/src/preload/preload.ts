/**
 * The preload script. The manifest declares it once, from the public route, for the provider window
 * and as the default for every window and view, so it runs on every page the platform loads.
 *
 * The provider window starts on the gateway and is then navigated to the chosen route's provider, and the
 * preload runs again on each page. So it does nothing on the gateway pages, and everywhere else:
 * 1. Runs its public part. This covers a preload that can come from the public route.
 * 2. Loads a destination part from the page's own route (internal or public). This covers a preload whose
 * code has to come from the route the page was loaded from.
 */
import {
	GATEWAY_PATH,
	GATEWAY_ROUTE,
	PREFERENCE_PAGE_PATH,
	PRELOAD_DESTINATION_PATH,
	routeForOrigin,
	routeOrigin
} from "../../../shared/route-config";
import { writePreloadMarker, type PreloadMarker } from "./marker";

/**
 * Write a line to the console.
 * @param message What happened.
 */
function log(message: string): void {
	console.log(`[preload] ${message}`);
}

/**
 * Check whether the page is one of the gateway pages.
 * @returns True on the gateway or the preference page.
 */
function isGatewayPage(): boolean {
	return (
		location.origin === routeOrigin(GATEWAY_ROUTE) &&
		(location.pathname === GATEWAY_PATH || location.pathname === PREFERENCE_PAGE_PATH)
	);
}

/**
 * Load the destination part from the page's own route, if the page is on one of the two routes.
 * @param marker The marker to update.
 */
async function loadDestinationPart(marker: PreloadMarker): Promise<void> {
	const route = routeForOrigin(location.origin);
	if (!route) {
		log(
			`${location.origin} is not the internal or public route, so the destination part is skipped. ` +
				"Only the two routes serve it, so pages from any other origin cannot load it."
		);
		writePreloadMarker({ ...marker, destination: `skipped, ${location.origin} is not a known route` });
		return;
	}

	const url = `${location.origin}${PRELOAD_DESTINATION_PATH}`;
	log(
		`Loading the destination part from the ${route.id} route: ${url}. A real deployment would need a reason ` +
			"to require code from the destination route rather than the public route; it is shown here in case " +
			"that is a requirement."
	);
	try {
		const destination = (await import(/* webpackIgnore: true */ url)) as { loadedFrom?: string };
		writePreloadMarker({ ...marker, destination: `loaded from ${destination.loadedFrom ?? url}` });
	} catch (error) {
		log(`The destination part failed to load: ${error instanceof Error ? error.message : String(error)}`);
		writePreloadMarker({ ...marker, destination: "failed to load" });
	}
}

/**
 * Run the preload.
 */
async function run(): Promise<void> {
	if (isGatewayPage()) {
		log("Gateway page, doing nothing.");
		return;
	}

	log(
		`Public part running on ${location.href}. It is served from the public route, outside /gateway/: ` +
			"the runtime downloads preload scripts itself, so the gateway's service worker never sees the request " +
			"and placing it in /gateway/ would not cache it."
	);
	const marker: PreloadMarker = { publicPart: true, destination: "loading" };
	writePreloadMarker(marker);

	await loadDestinationPart(marker);
}

run().catch((error) => log(`Failed: ${String(error)}`));
