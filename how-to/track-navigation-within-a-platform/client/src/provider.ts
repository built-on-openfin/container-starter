import type OpenFin from "@openfin/core";

const STORAGE_KEY = "navigationHistory";
const MAX_ENTRIES = 500;
const MAX_SUGGESTIONS = 8;

/**
 * A single navigation history entry persisted to localStorage.
 */
interface HistoryEntry {
	/** The navigated URL. */
	url: string;
	/** The page title captured from the view. */
	title: string;
	/** Unix timestamp of the most recent visit. */
	timestamp: number;
	/** Total number of times this URL has been visited. */
	visitCount: number;
}

/**
 * Maps a view name to the most recently navigated URL for that view,
 * so that page-title-updated events can be associated with the correct history entry.
 */
const viewUrlMap = new Map<string, string>();

let urlInput: HTMLInputElement | null = null;
let autocompleteList: HTMLElement | null = null;
let historyListElement: HTMLElement | null = null;
let selectedSuggestionIndex = -1;

document.addEventListener("DOMContentLoaded", () => {
	initDom();
	initPlatform().catch((error) => console.error(error));
});

/**
 * Initialize the platform provider and listen for navigation events globally.
 * Uses Application-level propagated events so that all view navigations and title
 * changes are captured with single listeners and no per-view cleanup is needed.
 *
 * Alternative: for per-view tracking with finer control (e.g. selectively tracking
 * only certain views), override createView in fin.Platform.init({ overrideCallback })
 * and attach url-changed / page-title-updated listeners to individual views,
 * removing them on "destroyed".
 */
async function initPlatform(): Promise<void> {
	await fin.Platform.init({});

	const app = await fin.Application.getCurrent();

	await app.on(
		"view-url-changed",
		(event: { url: string; isInPage: boolean; viewIdentity: OpenFin.Identity }) => {
			if (!event.isInPage && event.viewIdentity?.name) {
				viewUrlMap.set(event.viewIdentity.name, event.url);
				recordVisit(event.url);
				renderHistory();
			}
		}
	);

	await app.on(
		"view-page-title-updated",
		(event: { title: string; viewIdentity: OpenFin.Identity }) => {
			if (event.viewIdentity?.name) {
				const url = viewUrlMap.get(event.viewIdentity.name);
				if (url && event.title) {
					updateTitle(url, event.title);
					renderHistory();
				}
			}
		}
	);

	await app.on("view-destroyed", (event: { viewIdentity: OpenFin.Identity }) => {
		if (event.viewIdentity?.name) {
			viewUrlMap.delete(event.viewIdentity.name);
		}
	});
}

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

	const btnClearHistory = document.querySelector<HTMLButtonElement>("#btn-clear-history");
	if (btnClearHistory) {
		btnClearHistory.addEventListener("click", clearHistory);
	}

	renderHistory();
}

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
 * Requires at least 2 characters before showing suggestions to avoid
 * overly broad matches on single common letters.
 */
function handleInputChange(): void {
	const query = urlInput?.value.trim() ?? "";
	if (query.length < 2) {
		hideAutocomplete();
		return;
	}
	showSuggestions(query);
}

/**
 * Navigate to the URL currently in the input field by opening a new platform window with a view.
 */
async function navigateToInput(): Promise<void> {
	if (!urlInput) {
		return;
	}

	let url = urlInput.value.trim();
	if (!url) {
		return;
	}

	if (!/^https?:\/\//i.test(url)) {
		url = `https://${url}`;
		urlInput.value = url;
	}

	hideAutocomplete();

	try {
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

		urlInput.value = "";
	} catch (err) {
		console.error("Failed to create window:", err);
	}
}

// -- History / localStorage helpers --

/**
 * Load all history entries from localStorage.
 * @returns The array of history entries.
 */
function loadHistory(): HistoryEntry[] {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? (JSON.parse(raw) as HistoryEntry[]) : [];
	} catch {
		return [];
	}
}

/**
 * Save history entries to localStorage.
 * @param entries The entries to persist.
 */
function saveHistory(entries: HistoryEntry[]): void {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

/**
 * Record a visit to the given URL. If it already exists, increment visitCount and update timestamp.
 * Otherwise add a new entry. Evicts oldest entries when the cap is reached.
 * @param url The URL that was visited.
 */
function recordVisit(url: string): void {
	const entries = loadHistory();
	const existing = entries.find((e) => e.url === url);

	if (existing) {
		existing.visitCount++;
		existing.timestamp = Date.now();
	} else {
		entries.push({ url, title: "", timestamp: Date.now(), visitCount: 1 });
	}

	if (entries.length > MAX_ENTRIES) {
		entries.sort((a, b) => b.timestamp - a.timestamp);
		entries.length = MAX_ENTRIES;
	}

	saveHistory(entries);
}

/**
 * Update the title of an existing history entry for the given URL.
 * @param url The URL whose title should be updated.
 * @param title The new page title.
 */
function updateTitle(url: string, title: string): void {
	const entries = loadHistory();
	const existing = entries.find((e) => e.url === url);

	if (existing) {
		existing.title = title;
		saveHistory(entries);
	}
}

/**
 * Remove a single entry from history by URL.
 * @param url The URL to remove.
 */
function removeHistoryEntry(url: string): void {
	const entries = loadHistory().filter((e) => e.url !== url);
	saveHistory(entries);
	renderHistory();
}

/**
 * Clear all navigation history.
 */
function clearHistory(): void {
	localStorage.removeItem(STORAGE_KEY);
	renderHistory();
}

// -- Autocomplete --

/**
 * Show autocomplete suggestions matching the given query against both URL and title,
 * sorted by visit count. Displays title and URL like Chrome's omnibox.
 * @param query The search text to filter history by.
 */
function showSuggestions(query: string): void {
	if (!autocompleteList) {
		return;
	}

	const lowerQuery = query.toLowerCase();
	const entries = loadHistory()
		.filter(
			(e) =>
				e.url.toLowerCase().includes(lowerQuery) || e.title.toLowerCase().includes(lowerQuery)
		)
		.sort((a, b) => b.visitCount - a.visitCount)
		.slice(0, MAX_SUGGESTIONS);

	if (entries.length === 0) {
		hideAutocomplete();
		return;
	}

	selectedSuggestionIndex = -1;
	autocompleteList.innerHTML = "";

	for (const entry of entries) {
		const item = document.createElement("div");
		item.className = "autocomplete-item";
		item.dataset.url = entry.url;

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

		item.append(textCol, countSpan);

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
}

/**
 * Return an HTML string with all occurrences of query highlighted with a <mark> tag.
 * The input text is HTML-escaped first to prevent injection.
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
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
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

// -- History panel rendering --

/**
 * Render the full history list in the history panel, sorted by most recent first.
 * Shows title (if available) prominently with the URL beneath it.
 */
function renderHistory(): void {
	if (!historyListElement) {
		return;
	}

	const entries = loadHistory().sort((a, b) => b.timestamp - a.timestamp);
	historyListElement.innerHTML = "";

	for (const entry of entries) {
		const row = document.createElement("div");
		row.className = "history-entry";

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
		});

		row.append(textCol, metaEl, deleteEl);
		historyListElement.append(row);
	}
}
