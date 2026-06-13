import type OpenFin from "@openfin/core";
import {
	getHistory,
	removeHistoryEntry,
	clearHistory as storageClearHistory,
	getActiveViews,
	getLastFocusedWindow,
	onStorageChanged
} from "./storage";

/**
 * URL Navigator UI -- provides a Chrome-like address bar with autocomplete,
 * history browsing, and the ability to open URLs in new or existing windows.
 *
 * Reads navigation history, active view state, and last focused window from
 * the storage module (persisted by the platform provider). Listens to storage
 * change events to reactively update the UI -- no direct OpenFin event listeners
 * are needed in this module.
 */

const MAX_SUGGESTIONS = 8;
const COLLAPSED_HEIGHT = 225;
const EXPANDED_HEIGHT = 550;

let urlInput: HTMLInputElement | null = null;
let autocompleteList: HTMLElement | null = null;
let historyListElement: HTMLElement | null = null;
let selectedSuggestionIndex = -1;

document.addEventListener("DOMContentLoaded", () => {
	initDom();
	onStorageChanged((key) => {
		if (key === "history" || key === "activeViews") {
			const panel = document.querySelector<HTMLElement>("#history-panel");
			if (panel && panel.style.display !== "none") {
				renderHistory();
			}
		}
	});
});

// -- DOM initialization --

/**
 * Initialize the DOM components and wire up event handlers.
 */
function initDom(): void {
	urlInput = document.querySelector<HTMLInputElement>("#url-input");
	autocompleteList = document.querySelector<HTMLElement>("#autocomplete-list");
	historyListElement = document.querySelector<HTMLElement>("#history-list");

	if (urlInput) {
		urlInput.addEventListener("keydown", handleInputKeyDown);
		urlInput.addEventListener("input", handleInputChange);
		urlInput.addEventListener("focus", handleInputChange);
		urlInput.addEventListener("blur", () => {
			setTimeout(() => {
				hideAutocomplete();
			}, 150);
		});
	}

	const btnGo = document.querySelector<HTMLButtonElement>("#btn-go");
	if (btnGo) {
		btnGo.addEventListener("click", () => {
			navigateToInput().catch(console.error);
		});
	}

	initLaunchMenu();

	const btnClearHistory = document.querySelector<HTMLButtonElement>("#btn-clear-history");
	if (btnClearHistory) {
		btnClearHistory.addEventListener("click", () => {
			storageClearHistory();
			renderHistory();
		});
	}

	const btnToggleHistory = document.querySelector<HTMLButtonElement>("#btn-toggle-history");
	if (btnToggleHistory) {
		btnToggleHistory.addEventListener("click", () => {
			toggleHistoryPanel().catch(console.error);
		});
	}

	const btnMinimize = document.querySelector<HTMLButtonElement>("#btn-minimize");
	if (btnMinimize) {
		btnMinimize.addEventListener("click", () => {
			// eslint-disable-next-line newline-per-chained-call
			fin.Window.getCurrentSync().minimize().catch(console.error);
		});
	}

	const btnClose = document.querySelector<HTMLButtonElement>("#btn-close");
	if (btnClose) {
		btnClose.addEventListener("click", () => {
			// eslint-disable-next-line newline-per-chained-call
			fin.Platform.getCurrentSync().quit().catch(console.error);
		});
	}

	renderHistory();
}

// -- History panel toggle --

/**
 * Toggle the history panel visibility and resize the window accordingly.
 */
async function toggleHistoryPanel(): Promise<void> {
	const panel = document.querySelector<HTMLElement>("#history-panel");
	const btn = document.querySelector<HTMLButtonElement>("#btn-toggle-history");
	if (!panel) {
		return;
	}

	const isVisible = panel.style.display !== "none";
	const win = fin.Window.getCurrentSync();
	const bounds = await win.getBounds();

	if (isVisible) {
		panel.style.display = "none";
		btn?.classList.remove("active");
		await win.resizeTo(bounds.width, COLLAPSED_HEIGHT, "top-left");
	} else {
		panel.style.display = "flex";
		btn?.classList.add("active");
		renderHistory();
		await win.resizeTo(bounds.width, EXPANDED_HEIGHT, "top-left");
	}
}

// -- Launch menu --

/**
 * Initialize the launch menu dropdown for choosing where to open a URL.
 */
function initLaunchMenu(): void {
	const btnTrigger = document.querySelector<HTMLButtonElement>("#btn-launch-menu");
	const menu = document.querySelector<HTMLElement>("#launch-menu");
	const lastWindowItem = document.querySelector<HTMLElement>("#launch-last-window");

	if (!btnTrigger || !menu) {
		return;
	}

	btnTrigger.addEventListener("click", () => {
		const isOpen = menu.classList.contains("visible");
		if (isOpen) {
			menu.classList.remove("visible");
			btnTrigger.classList.remove("active");
		} else {
			lastWindowItem?.classList.toggle("disabled", !getLastFocusedWindow());
			menu.classList.add("visible");
			btnTrigger.classList.add("active");
		}
	});

	document.addEventListener("click", (e) => {
		const launchGroup = btnTrigger.parentElement;
		if (launchGroup && !launchGroup.contains(e.target as Node)) {
			menu.classList.remove("visible");
			btnTrigger.classList.remove("active");
		}
	});

	menu.addEventListener("click", async (e) => {
		const item = (e.target as HTMLElement).closest<HTMLElement>(".launch-menu-item");
		if (!item || item.classList.contains("disabled")) {
			return;
		}

		const action = item.dataset.action;
		const url = resolveInputUrl();
		if (!url) {
			return;
		}

		menu.classList.remove("visible");
		btnTrigger.classList.remove("active");
		hideAutocomplete();

		if (action === "new-window") {
			await openInNewWindow(url);
			if (urlInput) {
				urlInput.value = "";
			}
		} else if (action === "last-window") {
			await openInLastFocusedWindow(url);
			if (urlInput) {
				urlInput.value = "";
			}
		}
	});
}

// -- Input handling --

/**
 * Handle keyboard events on the URL input for Enter and arrow key navigation.
 * @param e The keyboard event.
 */
function handleInputKeyDown(e: KeyboardEvent): void {
	const items = autocompleteList?.querySelectorAll<HTMLElement>(".autocomplete-item");
	const suggestions: NodeListOf<HTMLElement> = items ?? document.querySelectorAll<HTMLElement>(".noop");

	if (e.key === "ArrowDown") {
		e.preventDefault();
		selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, suggestions.length - 1);
		updateSuggestionHighlight(suggestions);
	} else if (e.key === "ArrowUp") {
		e.preventDefault();
		selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
		updateSuggestionHighlight(suggestions);
	} else if (e.key === "Enter") {
		e.preventDefault();
		if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
			const selected = suggestions[selectedSuggestionIndex];
			const url = selected.dataset.url;
			if (url && urlInput) {
				urlInput.value = url;
			}
		}
		navigateToInput().catch(console.error);
	} else if (e.key === "Escape") {
		hideAutocomplete();
	}
}

/**
 * Handle input changes to show/update the autocomplete dropdown.
 * Requires at least 2 characters before showing suggestions.
 */
function handleInputChange(): void {
	const query = urlInput?.value.trim() ?? "";
	if (query.length < 2) {
		hideAutocomplete();
		return;
	}
	showSuggestions(query);
}

// -- Navigation --

/**
 * Resolve the current input value to a navigable URL.
 * @returns The resolved URL, or null if input is empty.
 */
function resolveInputUrl(): string | null {
	if (!urlInput) {
		return null;
	}

	let url = urlInput.value.trim();
	if (!url) {
		return null;
	}

	if (/^https?:\/\//i.test(url)) {
		// Already has a protocol -- use as-is.
	} else if (looksLikeUrl(url)) {
		url = `https://${url}`;
	} else {
		url = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
	}

	return url;
}

/**
 * Navigate to the URL currently in the input field by opening a new platform window.
 */
async function navigateToInput(): Promise<void> {
	const url = resolveInputUrl();
	if (!url || !urlInput) {
		return;
	}

	urlInput.value = url;
	hideAutocomplete();

	try {
		await openInNewWindow(url);
		urlInput.value = "";
	} catch (err) {
		console.error("Failed to create window:", err);
	}
}

/**
 * Open a URL in a brand new platform window containing a single view.
 * @param url The URL to navigate to.
 */
async function openInNewWindow(url: string): Promise<void> {
	const platform = fin.Platform.getCurrentSync();
	await platform.createWindow({
		layout: {
			content: [
				{
					type: "stack",
					content: [
						{
							type: "component",
							componentName: "view",
							componentState: {
								url
							}
						}
					]
				}
			]
		}
	} as OpenFin.WindowCreationOptions);
}

/**
 * Open a URL as a new view in the last focused window (read from storage).
 * Falls back to opening a new window if no last focused window is stored.
 * @param url The URL to navigate to.
 */
async function openInLastFocusedWindow(url: string): Promise<void> {
	const identity = getLastFocusedWindow();

	if (identity) {
		const platform = fin.Platform.getCurrentSync();
		const targetWin = fin.Window.wrapSync(identity);
		await platform.createView({ url } as OpenFin.ViewCreationOptions, identity);
		const state = await targetWin.getState();
		if (state === "minimized") {
			await targetWin.restore();
		}
		await targetWin.setAsForeground();
	} else {
		await openInNewWindow(url);
	}
}

// -- View switching --

/**
 * Find the identity of an active view currently displaying the given URL, or null if none.
 * @param url The URL to search for among active views.
 * @returns The view identity if found, otherwise null.
 */
function findActiveViewForUrl(url: string): OpenFin.Identity | null {
	const activeViews = getActiveViews();
	for (const [viewName, viewUrl] of Object.entries(activeViews)) {
		if (viewUrl === url) {
			return { uuid: fin.me.uuid, name: viewName };
		}
	}
	return null;
}

/**
 * Focus an existing view and bring its parent window to front.
 * @param identity The identity of the view to focus.
 */
async function switchToView(identity: OpenFin.Identity): Promise<void> {
	const view = fin.View.wrapSync(identity);
	const win = await view.getCurrentWindow();
	const state = await win.getState();
	if (state === "minimized") {
		await win.restore();
	}
	await view.focus();
	await win.setAsForeground();
}

// -- Autocomplete --

/**
 * Show autocomplete suggestions matching the given query against both URL and title.
 * @param query The search text to filter history by.
 */
function showSuggestions(query: string): void {
	if (!autocompleteList) {
		return;
	}

	const lowerQuery = query.toLowerCase();
	const entries = getHistory()
		.filter((e) => e.url.toLowerCase().includes(lowerQuery) || e.title.toLowerCase().includes(lowerQuery))
		.sort((a, b) => b.visitCount - a.visitCount)
		.slice(0, MAX_SUGGESTIONS);

	if (entries.length === 0) {
		hideAutocomplete();
		return;
	}

	selectedSuggestionIndex = -1;
	autocompleteList.innerHTML = "";

	const hasLastWindow = Boolean(getLastFocusedWindow());

	for (const entry of entries) {
		const item = document.createElement("div");
		item.className = "autocomplete-item";
		item.dataset.url = entry.url;

		if (entry.favicon) {
			const faviconImg = document.createElement("img");
			faviconImg.className = "autocomplete-favicon";
			faviconImg.src = entry.favicon;
			faviconImg.alt = "";
			item.append(faviconImg);
		}

		const textCol = document.createElement("div");
		textCol.className = "autocomplete-text";

		if (entry.title) {
			const titleSpan = document.createElement("span");
			titleSpan.className = "autocomplete-title";
			titleSpan.innerHTML = highlightMatch(entry.title, query);
			textCol.append(titleSpan);
		}

		const urlSpan = document.createElement("span");
		urlSpan.className = "url";
		urlSpan.innerHTML = highlightMatch(entry.url, query);
		textCol.append(urlSpan);

		const countSpan = document.createElement("span");
		countSpan.className = "visit-count";
		countSpan.textContent = `${entry.visitCount} visit${entry.visitCount !== 1 ? "s" : ""}`;

		const activeView = findActiveViewForUrl(entry.url);

		item.append(textCol, countSpan);

		if (activeView) {
			const switchBtn = document.createElement("button");
			switchBtn.className = "btn-switch-tab";
			switchBtn.textContent = "Switch to tab";
			switchBtn.addEventListener("mousedown", (e) => {
				e.preventDefault();
				e.stopPropagation();
				hideAutocomplete();
				switchToView(activeView).catch(console.error);
			});
			item.append(switchBtn);
		}

		if (hasLastWindow) {
			const openLastBtn = document.createElement("button");
			openLastBtn.className = "btn-open-last";
			openLastBtn.title = "Open in last focused window";
			openLastBtn.innerHTML = [
				// eslint-disable-next-line @typescript-eslint/quotes
				'<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">',
				// eslint-disable-next-line @typescript-eslint/quotes
				'<path d="M1 3a1 1 0 0 1 1-1h5v1H2v9h5v1H2a1 1 0 0 1-1-1V3zm7-1h5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8v-1h5V3H8V2z"/>',
				// eslint-disable-next-line @typescript-eslint/quotes
				'<path d="M5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg>'
			].join("");
			openLastBtn.addEventListener("mousedown", async (e) => {
				e.preventDefault();
				e.stopPropagation();
				hideAutocomplete();
				await openInLastFocusedWindow(entry.url);
				if (urlInput) {
					urlInput.value = "";
				}
			});
			item.append(openLastBtn);
		}

		item.addEventListener("mousedown", (e) => {
			e.preventDefault();
			if (urlInput) {
				urlInput.value = entry.url;
			}
			navigateToInput().catch(console.error);
		});

		autocompleteList.append(item);
	}

	autocompleteList.style.display = "block";
	resizeForAutocomplete(entries.length).catch(console.error);
}

/**
 * Hide the autocomplete dropdown.
 */
function hideAutocomplete(): void {
	if (autocompleteList) {
		autocompleteList.style.display = "none";
		autocompleteList.innerHTML = "";
	}
	selectedSuggestionIndex = -1;
	const panel = document.querySelector<HTMLElement>("#history-panel");
	const historyVisible = panel && panel.style.display !== "none";
	if (!historyVisible) {
		resizeToCollapsed().catch(console.error);
	}
}

/**
 * Resize the window to accommodate autocomplete results.
 * @param itemCount The number of autocomplete items being shown.
 */
async function resizeForAutocomplete(itemCount: number): Promise<void> {
	const win = fin.Window.getCurrentSync();
	const bounds = await win.getBounds();
	const itemHeight = 42;
	// eslint-disable-next-line no-mixed-operators
	const targetHeight = COLLAPSED_HEIGHT + Math.min(itemCount, MAX_SUGGESTIONS) * itemHeight;
	const newHeight = Math.max(targetHeight, bounds.height);
	if (newHeight !== bounds.height) {
		await win.resizeTo(bounds.width, newHeight, "top-left");
	}
}

/**
 * Resize the window back to collapsed height.
 */
async function resizeToCollapsed(): Promise<void> {
	const win = fin.Window.getCurrentSync();
	const bounds = await win.getBounds();
	if (bounds.height !== COLLAPSED_HEIGHT) {
		await win.resizeTo(bounds.width, COLLAPSED_HEIGHT, "top-left");
	}
}

/**
 * Update the visual highlight on autocomplete suggestions for keyboard navigation.
 * @param suggestions The list of suggestion elements to update.
 */
function updateSuggestionHighlight(suggestions: NodeListOf<HTMLElement>): void {
	for (let i = 0; i < suggestions.length; i++) {
		suggestions[i].classList.toggle("selected", i === selectedSuggestionIndex);
	}

	if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
		const selected = suggestions[selectedSuggestionIndex];
		if (urlInput) {
			urlInput.value = selected.dataset.url ?? "";
		}
	}
}

// -- Utility --

/**
 * Return an HTML string with all occurrences of query highlighted with a <mark> tag.
 * @param text The original text to display.
 * @param query The search query to highlight within the text.
 * @returns HTML string with matches wrapped in <mark> tags.
 */
function highlightMatch(text: string, query: string): string {
	if (!query) {
		return escapeHtml(text);
	}
	const escaped = escapeHtml(text);
	const escapedQuery = escapeHtml(query);
	const regex = new RegExp(`(${escapedQuery.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&")})`, "gi");
	return escaped.replace(regex, "<mark>$1</mark>");
}

/**
 * Escape HTML special characters to prevent XSS when using innerHTML.
 * @param str The raw string to escape.
 * @returns The HTML-safe string.
 */
function escapeHtml(str: string): string {
	// eslint-disable-next-line newline-per-chained-call
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * Heuristic check for whether an input string looks like a URL rather than a search query.
 * @param input The raw user input to evaluate.
 * @returns True if the input appears to be a URL, false if it looks like a search query.
 */
function looksLikeUrl(input: string): boolean {
	if (input.includes(" ")) {
		return false;
	}
	return /^\S+\.[a-z]{2,}(\/.*)?$/i.test(input);
}

// -- History panel rendering --

/**
 * Render the full history list in the history panel, sorted by most recent first.
 */
function renderHistory(): void {
	if (!historyListElement) {
		return;
	}

	const entries = getHistory().sort((a, b) => b.timestamp - a.timestamp);
	historyListElement.innerHTML = "";

	for (const entry of entries) {
		const row = document.createElement("div");
		row.className = "history-entry";

		if (entry.favicon) {
			const faviconImg = document.createElement("img");
			faviconImg.className = "history-favicon";
			faviconImg.src = entry.favicon;
			faviconImg.alt = "";
			row.append(faviconImg);
		}

		const textCol = document.createElement("div");
		textCol.className = "history-text";
		textCol.addEventListener("click", () => {
			if (urlInput) {
				urlInput.value = entry.url;
			}
			navigateToInput().catch(console.error);
		});

		if (entry.title) {
			const titleEl = document.createElement("span");
			titleEl.className = "history-title";
			titleEl.textContent = entry.title;
			textCol.append(titleEl);
		}

		const urlEl = document.createElement("span");
		urlEl.className = "history-url";
		urlEl.textContent = entry.url;
		urlEl.title = entry.url;
		textCol.append(urlEl);

		const metaEl = document.createElement("span");
		metaEl.className = "history-meta";
		const date = new Date(entry.timestamp);
		metaEl.textContent = `${entry.visitCount} visit${entry.visitCount !== 1 ? "s" : ""} \u00B7 ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

		const deleteEl = document.createElement("span");
		deleteEl.className = "history-delete";
		deleteEl.textContent = "\u00D7";
		deleteEl.title = "Remove from history";
		deleteEl.addEventListener("click", () => {
			removeHistoryEntry(entry.url);
			renderHistory();
		});

		row.append(textCol, metaEl, deleteEl);
		historyListElement.append(row);
	}
}
