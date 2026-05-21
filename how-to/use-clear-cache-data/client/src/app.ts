/* eslint-disable unicorn/no-document-cookie */
import type { OpenFin } from "@openfin/core";

document.addEventListener("DOMContentLoaded", () => {
	initDom().catch((error) => console.error(error));
});

let loggingElement: HTMLElement | null = null;
let stateElement: HTMLElement | null = null;

/**
 * Initialize the DOM components and wire up event handlers.
 */
async function initDom(): Promise<void> {
	loggingElement = document.querySelector<HTMLElement>("#logging");
	stateElement = document.querySelector<HTMLElement>("#current-state");

	const btnLoggingClear = document.querySelector("#btnLoggingClear");
	if (btnLoggingClear) {
		btnLoggingClear.addEventListener("click", () => {
			if (loggingElement) {
				loggingElement.textContent = "";
			}
		});
	}

	// Setup buttons
	wire("btn-create-cookies", createTestCookies);
	wire("btn-create-local-storage", createTestLocalStorage);
	wire("btn-register-service-worker", registerTestServiceWorker);
	wire("btn-refresh-state", refreshState);

	// Clear buttons
	wire("btn-clear-cookies-only", clearCookiesOnly);
	wire("btn-clear-localstorage-only", clearLocalStorageOnly);
	wire("btn-clear-service-workers", clearServiceWorkers);
	wire("btn-clear-cookies-and-storage", clearCookiesAndStorage);
	wire("btn-clear-all", clearAllData);
	wire("btn-clear-http-cache", clearHttpCache);
	wire("btn-clear-cache-legacy", clearCacheLegacy);

	// Show initial state
	await refreshState();
}

/**
 * Wire a button click to an async handler.
 * @param id The button element id.
 * @param handler The async function to call on click.
 */
function wire(id: string, handler: () => Promise<void>): void {
	const el = document.querySelector<HTMLButtonElement>(`#${id}`);
	if (el) {
		el.addEventListener("click", async () => handler().catch((err) => console.error(err)));
	}
}

/**
 * Create four test cookies with distinct keys so they are visible
 * in the Current State panel before and after clear operations.
 */
async function createTestCookies(): Promise<void> {
	document.cookie = "session_id=abc123; path=/";
	document.cookie = "user_pref=dark_mode; path=/";
	document.cookie = "tracking_id=xyz789; path=/";
	document.cookie = "language=en-US; path=/";

	loggingAddEntry(
		"Created 4 test cookies:\n" +
			"  session_id=abc123\n" +
			"  user_pref=dark_mode\n" +
			"  tracking_id=xyz789\n" +
			"  language=en-US"
	);
	await refreshState();
}

/**
 * Create four localStorage entries with distinct keys.
 */
async function createTestLocalStorage(): Promise<void> {
	localStorage.setItem("app_settings", JSON.stringify({ theme: "dark", fontSize: 14 }));
	localStorage.setItem("cached_user", JSON.stringify({ name: "Test User", id: 42 }));
	localStorage.setItem("last_visited", new Date().toISOString());
	localStorage.setItem("feature_flags", JSON.stringify({ beta: true, newUI: false }));

	loggingAddEntry(
		"Created 4 localStorage entries:\n" +
			"  app_settings\n" +
			"  cached_user\n" +
			"  last_visited\n" +
			"  feature_flags"
	);
	await refreshState();
}

/**
 * Register a minimal service worker so it is visible in the
 * Current State panel. The sw.js file is a no-op worker served
 * from the public root.
 */
async function registerTestServiceWorker(): Promise<void> {
	try {
		const registration = await navigator.serviceWorker.register("/sw.js");
		const workerState = registration.active?.state ?? registration.installing?.state ?? "installing";
		loggingAddEntry(`Service worker registered:\n  Scope: ${registration.scope}\n  State: ${workerState}`);
	} catch (error) {
		loggingAddEntry(`Failed to register service worker:\n  ${error}`);
	}
	await refreshState();
}

/**
 * Read and display the current cookies, localStorage entries, and
 * service worker registrations. Called automatically after every
 * create or clear operation.
 */
async function refreshState(): Promise<void> {
	if (!stateElement) {
		return;
	}

	// Cookies
	const cookies = document.cookie;
	const cookieList = cookies
		? cookies
				.split("; ")
				.map((c) => `  ${c}`)
				.join("\n")
		: "  (none)";

	// LocalStorage
	const storageKeys = Object.keys(localStorage);
	const storageList =
		storageKeys.length > 0
			? storageKeys.map((k) => `  ${k} = ${localStorage.getItem(k)}`).join("\n")
			: "  (none)";

	// Service Workers
	let swList = "  (none)";
	try {
		const registrations = await navigator.serviceWorker.getRegistrations();
		if (registrations.length > 0) {
			swList = registrations
				.map((r) => {
					const state = r.active?.state ?? r.installing?.state ?? "installing";
					return `  Scope: ${r.scope} | State: ${state}`;
				})
				.join("\n");
		}
	} catch {
		swList = "  (unavailable)";
	}

	stateElement.textContent = `COOKIES:\n${cookieList}\n\nLOCAL STORAGE:\n${storageList}\n\nSERVICE WORKERS:\n${swList}`;
}

/**
 * Clear only cookies for the localhost origin.
 * localStorage and service workers should remain visible in the state panel.
 */
async function clearCookiesOnly(): Promise<void> {
	const options: OpenFin.ClearDataOptions = {
		dataTypes: ["cookies"],
		origins: ["http://localhost:5050"]
	};

	const codeText =
		"await fin.System.clearCacheData({\n" +
		"    dataTypes: ['cookies'],\n" +
		"    origins: ['http://localhost:5050']\n" +
		"});";

	await executeClear(
		async () => fin.System.clearCacheData(options),
		codeText,
		"Cleared cookies for localhost:5050.\nlocalStorage and service workers should remain."
	);
}

/**
 * Clear only localStorage for the localhost origin.
 * Cookies and service workers should remain visible in the state panel.
 */
async function clearLocalStorageOnly(): Promise<void> {
	const options: OpenFin.ClearDataOptions = {
		dataTypes: ["localStorage"],
		origins: ["http://localhost:5050"]
	};

	const codeText =
		"await fin.System.clearCacheData({\n" +
		"    dataTypes: ['localStorage'],\n" +
		"    origins: ['http://localhost:5050']\n" +
		"});";

	await executeClear(
		async () => fin.System.clearCacheData(options),
		codeText,
		"Cleared localStorage for localhost:5050.\nCookies and service workers should remain."
	);
}

/**
 * Clear all service workers across all origins.
 * Cookies and localStorage should remain visible in the state panel.
 */
async function clearServiceWorkers(): Promise<void> {
	const options: OpenFin.ClearDataOptions = {
		dataTypes: ["serviceWorkers"]
	};

	const codeText = `await fin.System.clearCacheData({
    dataTypes: ['serviceWorkers']
});`;

	await executeClear(
		async () => fin.System.clearCacheData(options),
		codeText,
		"Cleared service workers across all origins.\nCookies and localStorage should remain."
	);
}

/**
 * Clear cookies and localStorage together for the localhost origin.
 * Service workers should remain visible in the state panel.
 */
async function clearCookiesAndStorage(): Promise<void> {
	const options: OpenFin.ClearDataOptions = {
		dataTypes: ["cookies", "localStorage"],
		origins: ["http://localhost:5050"]
	};

	const codeText =
		"await fin.System.clearCacheData({\n" +
		"    dataTypes: ['cookies', 'localStorage'],\n" +
		"    origins: ['http://localhost:5050']\n" +
		"});";

	await executeClear(
		async () => fin.System.clearCacheData(options),
		codeText,
		"Cleared cookies and localStorage for localhost:5050.\nService workers should remain."
	);
}

/**
 * Clear all browsing data with no options — the broadest possible clear.
 * Everything in the state panel should disappear.
 */
async function clearAllData(): Promise<void> {
	const codeText = "await fin.System.clearCacheData();";

	await executeClear(
		async () => fin.System.clearCacheData(),
		codeText,
		"Cleared all browsing data across all origins.\nAll cookies, localStorage, and service workers should be gone."
	);
}

/**
 * Clear only the HTTP cache using the v44 convenience method.
 * Cookies, localStorage, and service workers should all remain.
 */
async function clearHttpCache(): Promise<void> {
	const codeText = "await fin.System.clearHTTPCache();";

	await executeClear(
		async () => fin.System.clearHTTPCache(),
		codeText,
		"Cleared HTTP cache only (HTML, CSS, JS, images).\nCookies, localStorage, and service workers should all remain."
	);
}

/**
 * Clear using the legacy clearCache API for comparison.
 * No origin targeting is possible — affects everything.
 */
async function clearCacheLegacy(): Promise<void> {
	const options = {
		appcache: true,
		cache: true,
		cookies: true,
		localStorage: true
	};

	const codeText =
		"await fin.System.clearCache({\n" +
		"    appcache: true,\n" +
		"    cache: true,\n" +
		"    cookies: true,\n" +
		"    localStorage: true\n" +
		"});";

	await executeClear(
		async () => fin.System.clearCache(options),
		codeText,
		"Legacy API: cleared all types across ALL origins.\nNo origin targeting available with this API."
	);
}

/**
 * Execute a clear operation, log the result, and refresh the state panel.
 * @param clearFn The async function that performs the clear.
 * @param codeText The code snippet to display in the log.
 * @param successMsg A description of what should have happened.
 */
async function executeClear(
	clearFn: () => Promise<void>,
	codeText: string,
	successMsg: string
): Promise<void> {
	try {
		await clearFn();
		loggingAddEntry(`Code executed:\n\n${codeText}\n\nResult: Success\n\n${successMsg}`);
	} catch (error) {
		loggingAddEntry(`Code executed:\n\n${codeText}\n\nResult: Error\n\n${error}`);
	}
	await refreshState();
}

/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry: string): void {
	if (loggingElement) {
		loggingElement.textContent = `${entry}\n\n`;
	}
}
