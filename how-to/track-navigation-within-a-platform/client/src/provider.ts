import type OpenFin from "@openfin/core";
import {
	recordVisit,
	updateHistoryTitle,
	updateHistoryFavicon,
	setActiveViews,
	pushFocusedWindow,
	removeFocusedWindow,
	clearFocusedWindowStack
} from "./storage";

/**
 * This provider demonstrates how to track view navigation within an OpenFin platform.
 *
 * It uses Application-level propagated events to capture all view URL changes, page title
 * updates, and favicon updates across the entire platform with minimal code. History is
 * persisted via the storage module so it survives restarts.
 *
 * The UI for browsing and searching history is handled separately in url-navigator.ts.
 */

/** Windows that should not be tracked as the "last focused window". */
const EXCLUDED_WINDOW_NAMES = ["url-navigator"];

/**
 * Maps a view name to the most recently navigated URL for that view,
 * so that page-title-updated and page-favicon-updated events can be
 * associated with the correct history entry.
 */
const viewUrlMap = new Map<string, string>();

document.addEventListener("DOMContentLoaded", () => {
	initPlatform().catch((error) => console.error(error));
});

/**
 * Initialize the platform provider and listen for navigation events globally.
 *
 * Uses Application-level propagated events so that all view navigations, title changes,
 * and favicon updates are captured with single listeners -- no per-view setup or cleanup
 * is needed.
 *
 * Events used:
 * - view-url-changed: Fires when any view navigates (including SPA pushState/replaceState).
 * - view-page-title-updated: Fires when a view's document.title changes.
 * - view-page-favicon-updated: Fires when a page's favicon URLs are discovered.
 * - view-destroyed: Fires when a view is closed (used for cleanup).
 * - window-focused: Fires when any window gains focus (tracks last focused window).
 * - window-closed: Fires when a window is closed (cleans up focused stack).
 *
 * Alternative: for per-view tracking with finer control (e.g. selectively tracking
 * only certain views), override createView in fin.Platform.init({ overrideCallback })
 * and attach url-changed / page-title-updated listeners to individual views,
 * removing them on "destroyed".
 */
async function initPlatform(): Promise<void> {
	await fin.Platform.init({});

	// Reset per-session state on startup.
	clearFocusedWindowStack();

	const app = await fin.Application.getCurrent();

	// Track URL changes from all views (includes SPA navigation via pushState).
	await app.on("view-url-changed", (event: { url: string; viewIdentity: OpenFin.Identity }) => {
		if (event.viewIdentity?.name) {
			viewUrlMap.set(event.viewIdentity.name, event.url);
			persistActiveViews();
			recordVisit(event.url);
		}
	});

	// Capture page titles and associate them with the view's current URL.
	await app.on("view-page-title-updated", (event: { title: string; viewIdentity: OpenFin.Identity }) => {
		if (event.viewIdentity?.name) {
			const url = viewUrlMap.get(event.viewIdentity.name);
			if (url && event.title) {
				updateHistoryTitle(url, event.title);
			}
		}
	});

	// Capture favicons and associate them with the view's current URL.
	await app.on(
		"view-page-favicon-updated",
		(event: { favicons: string[]; viewIdentity: OpenFin.Identity }) => {
			if (event.viewIdentity?.name && event.favicons?.length > 0) {
				const url = viewUrlMap.get(event.viewIdentity.name);
				if (url) {
					updateHistoryFavicon(url, event.favicons[0]);
				}
			}
		}
	);

	// Clean up the view-to-URL mapping when a view is closed.
	await app.on("view-destroyed", (event: { viewIdentity: OpenFin.Identity }) => {
		if (event.viewIdentity?.name) {
			viewUrlMap.delete(event.viewIdentity.name);
			persistActiveViews();
		}
	});

	// Track a stack of recently focused windows (excluding UI-only windows).
	// When the top window is closed, the next one becomes the "last focused".
	await app.on("window-focused", (event: { name: string; uuid: string }) => {
		if (event.name && !EXCLUDED_WINDOW_NAMES.includes(event.name)) {
			pushFocusedWindow({ uuid: event.uuid, name: event.name });
		}
	});

	// Remove a closed window from the focus stack.
	// If the primary UI window (url-navigator) is closed, quit the platform.
	await app.on("window-closed", (event: { name: string }) => {
		if (event.name === "url-navigator") {
			// eslint-disable-next-line newline-per-chained-call
			fin.Platform.getCurrentSync().quit().catch(console.error);
			return;
		}
		if (event.name) {
			removeFocusedWindow(event.name);
		}
	});
}

/**
 * Persist the current view-to-URL map so other windows can read which views are active.
 */
function persistActiveViews(): void {
	const obj: { [name: string]: string } = {};
	for (const [name, url] of viewUrlMap.entries()) {
		obj[name] = url;
	}
	setActiveViews(obj);
}
