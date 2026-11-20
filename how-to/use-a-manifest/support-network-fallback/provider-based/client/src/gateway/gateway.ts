/**
 * The gateway. It is the manifest's providerUrl, served by the public route and cached by a service
 * worker. It chooses a route and navigates the provider window to that route's provider.
 *
 * Decision order:
 * 1. A stored preference, set by the in-app switcher before a restart. It is cleared once read.
 * 2. Otherwise the preferred (internal) route.
 * The chosen route is used if it is the public route, which is assumed to be available, or if its
 * /health check passes. Otherwise the gateway falls back to the public route.
 */
import {
	GATEWAY_ROUTE,
	HEALTH_TIMEOUT_MS,
	PREFERENCE_KEY,
	ROUTES,
	isRouteId,
	preferredRoute,
	routeOrigin,
	type RouteId
} from "../../../shared/route-config";
import { checkHealth } from "../health-check";
import { providerUrlFor, type GatewayDecision } from "./decision";

const SERVICE_WORKER_URL = "/gateway/sw.js";
const SERVICE_WORKER_SCOPE = "/gateway/";
const SERVICE_WORKER_WAIT_MS = 3000;

/**
 * Show a line of status on the page and in the console.
 * @param text The status.
 */
function setStatus(text: string): void {
	console.log(`[gateway] ${text}`);
	const element = document.querySelector("#status");
	if (element) {
		element.textContent = text;
	}
}

/**
 * Read the stored preference and clear it, so it only applies to one start.
 * @returns The preferred route, if one was stored.
 */
function takePreference(): RouteId | undefined {
	const value = localStorage.getItem(PREFERENCE_KEY);
	localStorage.removeItem(PREFERENCE_KEY);
	return isRouteId(value) ? value : undefined;
}

/**
 * Register the service worker that caches the gateway, and wait briefly for it to be active.
 * It never throws, so a service worker problem never stops the gateway choosing a route.
 * @returns A description of the service worker's state, for the log.
 */
async function registerServiceWorker(): Promise<string> {
	if (!("serviceWorker" in navigator)) {
		return "service workers are not available";
	}
	const servedBy = navigator.serviceWorker.controller
		? "page served through the service worker"
		: "page not controlled yet";
	try {
		await navigator.serviceWorker.register(SERVICE_WORKER_URL, { scope: SERVICE_WORKER_SCOPE });
		let timer: number | undefined;
		const state = await Promise.race([
			navigator.serviceWorker.ready.then(() => "active"),
			new Promise<string>((resolve) => {
				timer = window.setTimeout(
					() => resolve(`not active within ${SERVICE_WORKER_WAIT_MS} ms`),
					SERVICE_WORKER_WAIT_MS
				);
			})
		]);
		window.clearTimeout(timer);
		return `${servedBy}, service worker ${state}`;
	} catch (error) {
		return `${servedBy}, registration failed: ${error instanceof Error ? error.message : String(error)}`;
	}
}

/**
 * Choose the route.
 * @returns The decision, without the service worker state.
 */
async function decide(): Promise<Omit<GatewayDecision, "serviceWorker">> {
	const preference = takePreference();
	const candidate = preference ? ROUTES[preference] : preferredRoute();
	const selectedBy = preference ? "preference" : "health";

	if (candidate.id === GATEWAY_ROUTE.id) {
		return {
			route: candidate.id,
			selectedBy,
			detail: preference
				? `stored preference for ${candidate.displayHost}`
				: `${candidate.displayHost} is the default`
		};
	}

	setStatus(`Checking ${candidate.displayHost}...`);
	const result = await checkHealth(`${routeOrigin(candidate)}/health`, HEALTH_TIMEOUT_MS);
	const found = `${candidate.displayHost} is ${result.detail}`;
	if (result.healthy) {
		return {
			route: candidate.id,
			selectedBy,
			detail: preference ? `stored preference for ${candidate.displayHost}, and ${found}` : found
		};
	}
	return { route: GATEWAY_ROUTE.id, selectedBy: "fallback", detail: found };
}

/**
 * Decide and navigate. The service worker is registered while the health check runs.
 */
async function init(): Promise<void> {
	const [decision, serviceWorker] = await Promise.all([decide(), registerServiceWorker()]);
	const full: GatewayDecision = { ...decision, serviceWorker };
	setStatus(
		`Using ${ROUTES[full.route].displayHost} (${full.selectedBy}: ${full.detail}). Service worker: ${serviceWorker}.`
	);
	location.replace(providerUrlFor(full));
}

window.addEventListener("DOMContentLoaded", () => {
	init().catch((error) => setStatus(`The gateway failed: ${String(error)}`));
});
