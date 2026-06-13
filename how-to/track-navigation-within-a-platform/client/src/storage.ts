import type OpenFin from "@openfin/core";

/**
 * Storage abstraction for the navigation tracker.
 *
 * Centralizes all persistence (history, active views, focused window stack)
 * behind a simple API. The default implementation uses localStorage (persistent)
 * and sessionStorage (per-session). To swap in a different backend (e.g. a remote
 * service), replace or wrap the functions exported from this module.
 */

const HISTORY_KEY = "navigationHistory";
const ACTIVE_VIEWS_KEY = "activeViews";
const FOCUSED_WINDOW_STACK_KEY = "focusedWindowStack";

const MAX_HISTORY_ENTRIES = 500;
const MAX_FOCUSED_STACK = 5;

/**
 * A single navigation history entry.
 */
export interface HistoryEntry {
	/** The navigated URL. */
	url: string;
	/** The page title captured from the view. */
	title: string;
	/** The page favicon URL captured from the view. */
	favicon: string;
	/** Unix timestamp of the most recent visit. */
	timestamp: number;
	/** Total number of times this URL has been visited. */
	visitCount: number;
}

// -- Navigation History (localStorage) --

/**
 * Load all history entries.
 * @returns The array of history entries.
 */
export function getHistory(): HistoryEntry[] {
	try {
		const raw = localStorage.getItem(HISTORY_KEY);
		return raw ? (JSON.parse(raw) as HistoryEntry[]) : [];
	} catch {
		return [];
	}
}

/**
 * Save history entries, replacing the current set.
 * @param entries The entries to persist.
 */
export function setHistory(entries: HistoryEntry[]): void {
	localStorage.setItem(HISTORY_KEY, JSON.stringify(entries));
}

/**
 * Record a visit to the given URL. Increments visitCount if already present,
 * otherwise creates a new entry. Evicts the oldest entries when the cap is reached.
 * @param url The URL that was visited.
 */
export function recordVisit(url: string): void {
	const entries = getHistory();
	const existing = entries.find((e) => e.url === url);

	if (existing) {
		existing.visitCount++;
		existing.timestamp = Date.now();
	} else {
		entries.push({ url, title: "", favicon: "", timestamp: Date.now(), visitCount: 1 });
	}

	if (entries.length > MAX_HISTORY_ENTRIES) {
		entries.sort((a, b) => b.timestamp - a.timestamp);
		entries.length = MAX_HISTORY_ENTRIES;
	}

	setHistory(entries);
}

/**
 * Update the title of an existing history entry.
 * @param url The URL whose title should be updated.
 * @param title The new page title.
 */
export function updateHistoryTitle(url: string, title: string): void {
	const entries = getHistory();
	const existing = entries.find((e) => e.url === url);

	if (existing) {
		existing.title = title;
		setHistory(entries);
	}
}

/**
 * Update the favicon of an existing history entry.
 * @param url The URL whose favicon should be updated.
 * @param favicon The favicon URL.
 */
export function updateHistoryFavicon(url: string, favicon: string): void {
	const entries = getHistory();
	const existing = entries.find((e) => e.url === url);

	if (existing) {
		existing.favicon = favicon;
		setHistory(entries);
	}
}

/**
 * Remove a single history entry by URL.
 * @param url The URL to remove.
 */
export function removeHistoryEntry(url: string): void {
	const entries = getHistory().filter((e) => e.url !== url);
	setHistory(entries);
}

/**
 * Clear all navigation history.
 */
export function clearHistory(): void {
	localStorage.removeItem(HISTORY_KEY);
}

// -- Active Views (localStorage) --

/**
 * Load the active views map (view name -> current URL).
 * @returns An object mapping view names to their current URLs.
 */
export function getActiveViews(): { [name: string]: string } {
	try {
		const raw = localStorage.getItem(ACTIVE_VIEWS_KEY);
		return raw ? (JSON.parse(raw) as { [name: string]: string }) : {};
	} catch {
		return {};
	}
}

/**
 * Save the active views map.
 * @param views An object mapping view names to their current URLs.
 */
export function setActiveViews(views: { [name: string]: string }): void {
	localStorage.setItem(ACTIVE_VIEWS_KEY, JSON.stringify(views));
}

// -- Focused Window Stack (localStorage, cleared on platform startup) --

/**
 * Load the focused window stack (most recent first).
 * @returns Array of window identities.
 */
export function getFocusedWindowStack(): OpenFin.Identity[] {
	try {
		const raw = localStorage.getItem(FOCUSED_WINDOW_STACK_KEY);
		return raw ? (JSON.parse(raw) as OpenFin.Identity[]) : [];
	} catch {
		return [];
	}
}

/**
 * Push a window to the top of the focus stack.
 * Deduplicates and caps the stack at the configured maximum.
 * @param identity The window identity to push.
 */
export function pushFocusedWindow(identity: OpenFin.Identity): void {
	let stack = getFocusedWindowStack().filter((w) => w.name !== identity.name);
	stack.unshift(identity);
	if (stack.length > MAX_FOCUSED_STACK) {
		stack = stack.slice(0, MAX_FOCUSED_STACK);
	}
	localStorage.setItem(FOCUSED_WINDOW_STACK_KEY, JSON.stringify(stack));
}

/**
 * Remove a window from the focus stack (e.g. when it is closed).
 * @param windowName The name of the window to remove.
 */
export function removeFocusedWindow(windowName: string): void {
	const stack = getFocusedWindowStack().filter((w) => w.name !== windowName);
	localStorage.setItem(FOCUSED_WINDOW_STACK_KEY, JSON.stringify(stack));
}

/**
 * Clear the focused window stack (called on platform startup to reset state).
 */
export function clearFocusedWindowStack(): void {
	localStorage.removeItem(FOCUSED_WINDOW_STACK_KEY);
}

/**
 * Get the most recently focused window identity, or null if the stack is empty.
 * @returns The window identity at the top of the stack.
 */
export function getLastFocusedWindow(): OpenFin.Identity | null {
	const stack = getFocusedWindowStack();
	return stack.length > 0 ? stack[0] : null;
}

// -- Change notifications --

/** The storage keys that may trigger change notifications. */
export type StorageKey = "history" | "activeViews" | "focusedWindowStack";

/**
 * Register a callback that fires when storage is modified by another same-origin window.
 * Uses the browser's "storage" event which fires on other windows sharing the same origin.
 * @param callback Called with the logical key name that changed.
 * @returns A cleanup function that removes the listener.
 */
export function onStorageChanged(callback: (key: StorageKey) => void): () => void {
	const keyMap: { [rawKey: string]: StorageKey } = {
		[HISTORY_KEY]: "history",
		[ACTIVE_VIEWS_KEY]: "activeViews",
		[FOCUSED_WINDOW_STACK_KEY]: "focusedWindowStack"
	};

	/**
	 * Handles storage events and maps raw keys to logical key names.
	 * @param event The storage event from another window.
	 */
	function handler(event: StorageEvent): void {
		if (event.key && keyMap[event.key]) {
			callback(keyMap[event.key]);
		}
	}

	window.addEventListener("storage", handler);
	return () => window.removeEventListener("storage", handler);
}
