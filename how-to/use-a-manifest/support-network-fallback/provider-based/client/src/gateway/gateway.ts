/**
 * The gateway. It is the manifest's providerUrl, served by the public route and cached by a service
 * worker. It chooses a route and navigates the provider window to that route's provider.
 *
 * Decision order:
 * 1. The first choice is a stored preference, set by the in-app switcher before a restart, or otherwise
 * the preferred (internal) route. The preference is cleared once read.
 * 2. The first choice is used if its /health check passes. Otherwise the other route is used if its
 * /health check passes.
 * 3. If neither passes, the gateway does not navigate. It shows its own window with Retry and Close, so
 * the user is not left with a provider page that cannot load.
 */
import {
	HEALTH_TIMEOUT_MS,
	PREFERENCE_KEY,
	ROUTES,
	isRouteId,
	otherRoute,
	preferredRoute,
	routeOrigin,
	type RouteConfig,
	type RouteId
} from "../../../shared/route-config";
import { checkHealth } from "../health-check";
import { providerUrlFor, type GatewayDecision } from "./decision";

const SERVICE_WORKER_URL = "/gateway/sw.js";
const SERVICE_WORKER_SCOPE = "/gateway/";
const SERVICE_WORKER_WAIT_MS = 3000;
const UNAVAILABLE_WIDTH = 480;
const UNAVAILABLE_HEIGHT = 280;

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
 * Registration and activation share one time limit, because a stalled fetch of the service worker script
 * would otherwise leave registration pending. It never throws, so a service worker problem never stops
 * the gateway choosing a route.
 * @returns A description of the service worker's state, for the log.
 */
async function registerServiceWorker(): Promise<string> {
	if (!("serviceWorker" in navigator)) {
		return "service workers are not available";
	}
	const servedBy = navigator.serviceWorker.controller
		? "page served through the service worker"
		: "page not controlled yet";
	const setup = navigator.serviceWorker
		.register(SERVICE_WORKER_URL, { scope: SERVICE_WORKER_SCOPE })
		.then(async () => navigator.serviceWorker.ready)
		.then(
			() => "service worker active",
			(error) => `registration failed: ${error instanceof Error ? error.message : String(error)}`
		);
	let timer: number | undefined;
	const state = await Promise.race([
		setup,
		new Promise<string>((resolve) => {
			timer = window.setTimeout(
				() => resolve(`service worker not active within ${SERVICE_WORKER_WAIT_MS} ms`),
				SERVICE_WORKER_WAIT_MS
			);
		})
	]);
	window.clearTimeout(timer);
	return `${servedBy}, ${state}`;
}

/**
 * Check a route's /health.
 * @param route The route.
 * @returns Whether it is healthy, and what was found, for the log.
 */
async function check(route: RouteConfig): Promise<{ healthy: boolean; found: string }> {
	setStatus(`Checking ${route.displayHost}...`);
	const result = await checkHealth(`${routeOrigin(route)}/health`, HEALTH_TIMEOUT_MS);
	return { healthy: result.healthy, found: `${route.displayHost} is ${result.detail}` };
}

/**
 * Choose the route: the first choice if it is healthy, otherwise the other route if it is healthy.
 * @param preference The stored preference, if there was one.
 * @returns The decision, or undefined and what was found if neither route is healthy.
 */
async function decide(
	preference: RouteId | undefined
): Promise<{ decision?: Omit<GatewayDecision, "serviceWorker">; found: string }> {
	const first = preference ? ROUTES[preference] : preferredRoute();
	const firstCheck = await check(first);
	if (firstCheck.healthy) {
		const detail = preference
			? `stored preference for ${first.displayHost}, and ${firstCheck.found}`
			: firstCheck.found;
		return {
			decision: { route: first.id, selectedBy: preference ? "preference" : "health", detail },
			found: detail
		};
	}

	const second = otherRoute(first.id);
	const secondCheck = await check(second);
	const found = `${firstCheck.found}; ${secondCheck.found}`;
	if (secondCheck.healthy) {
		return { decision: { route: second.id, selectedBy: "fallback", detail: found }, found };
	}
	return { found };
}

/**
 * Show the gateway window with a message, because neither route can be used.
 * @param found What the checks found.
 */
async function showUnavailable(found: string): Promise<void> {
	setStatus(`Neither route is available: ${found}.`);
	const section = document.querySelector<HTMLElement>("#unavailable");
	if (section) {
		section.hidden = false;
	}
	const win = fin.Window.getCurrentSync();
	await win.resizeTo(UNAVAILABLE_WIDTH, UNAVAILABLE_HEIGHT, "top-left");
	await win.center();
	await win.show();
}

/**
 * Decide and navigate, or show the unavailable message.
 * @param preference The stored preference, if there was one.
 * @param serviceWorker The service worker state, for the log.
 */
async function run(preference: RouteId | undefined, serviceWorker: Promise<string>): Promise<void> {
	const [{ decision, found }, serviceWorkerState] = await Promise.all([decide(preference), serviceWorker]);
	if (!decision) {
		await showUnavailable(found);
		return;
	}
	const full: GatewayDecision = { ...decision, serviceWorker: serviceWorkerState };
	setStatus(
		`Using ${ROUTES[full.route].displayHost} (${full.selectedBy}: ${full.detail}). Service worker: ${serviceWorkerState}.`
	);
	location.replace(providerUrlFor(full));
}

/**
 * Start the gateway. The service worker is registered while the health checks run.
 */
async function init(): Promise<void> {
	const preference = takePreference();
	const serviceWorker = registerServiceWorker();

	document.querySelector("#retry")?.addEventListener("click", async () => {
		const section = document.querySelector<HTMLElement>("#unavailable");
		if (section) {
			section.hidden = true;
		}
		await fin.Window.getCurrentSync().hide();
		await run(preference, serviceWorker);
	});
	document.querySelector("#close")?.addEventListener("click", async () => {
		await fin.Application.getCurrentSync().quit();
	});

	await run(preference, serviceWorker);
}

window.addEventListener("DOMContentLoaded", () => {
	init().catch((error) => setStatus(`The gateway failed: ${String(error)}`));
});
