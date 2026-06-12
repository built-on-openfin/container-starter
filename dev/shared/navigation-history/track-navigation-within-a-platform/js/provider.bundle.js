/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
const STORAGE_KEY = "navigationHistory";
const MAX_ENTRIES = 500;
const MAX_SUGGESTIONS = 8;
/**
 * Maps a view name to the most recently navigated URL for that view,
 * so that page-title-updated events can be associated with the correct history entry.
 */
const viewUrlMap = new Map();
let urlInput = null;
let autocompleteList = null;
let historyListElement = null;
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
async function initPlatform() {
    await fin.Platform.init({});
    const app = await fin.Application.getCurrent();
    await app.on("view-url-changed", (event) => {
        if (!event.isInPage && event.viewIdentity?.name) {
            viewUrlMap.set(event.viewIdentity.name, event.url);
            recordVisit(event.url);
            renderHistory();
        }
    });
    await app.on("view-page-title-updated", (event) => {
        if (event.viewIdentity?.name) {
            const url = viewUrlMap.get(event.viewIdentity.name);
            if (url && event.title) {
                updateTitle(url, event.title);
                renderHistory();
            }
        }
    });
    await app.on("view-destroyed", (event) => {
        if (event.viewIdentity?.name) {
            viewUrlMap.delete(event.viewIdentity.name);
        }
    });
}
/**
 * Initialize the DOM components and wire up event handlers.
 */
function initDom() {
    urlInput = document.querySelector("#url-input");
    autocompleteList = document.querySelector("#autocomplete-list");
    historyListElement = document.querySelector("#history-list");
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
    const btnGo = document.querySelector("#btn-go");
    if (btnGo) {
        btnGo.addEventListener("click", () => {
            navigateToInput().catch(console.error);
        });
    }
    const btnClearHistory = document.querySelector("#btn-clear-history");
    if (btnClearHistory) {
        btnClearHistory.addEventListener("click", clearHistory);
    }
    renderHistory();
}
/**
 * Handle keyboard events on the URL input for Enter and arrow key navigation.
 * @param e The keyboard event.
 */
function handleInputKeyDown(e) {
    const items = autocompleteList?.querySelectorAll(".autocomplete-item");
    const suggestions = items ?? document.querySelectorAll(".noop");
    if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, suggestions.length - 1);
        updateSuggestionHighlight(suggestions);
    }
    else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
        updateSuggestionHighlight(suggestions);
    }
    else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
            const selected = suggestions[selectedSuggestionIndex];
            const url = selected.dataset.url;
            if (url && urlInput) {
                urlInput.value = url;
            }
        }
        navigateToInput().catch(console.error);
    }
    else if (e.key === "Escape") {
        hideAutocomplete();
    }
}
/**
 * Handle input changes to show/update the autocomplete dropdown.
 * Requires at least 2 characters before showing suggestions to avoid
 * overly broad matches on single common letters.
 */
function handleInputChange() {
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
async function navigateToInput() {
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
        });
        urlInput.value = "";
    }
    catch (err) {
        console.error("Failed to create window:", err);
    }
}
// -- History / localStorage helpers --
/**
 * Load all history entries from localStorage.
 * @returns The array of history entries.
 */
function loadHistory() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    }
    catch {
        return [];
    }
}
/**
 * Save history entries to localStorage.
 * @param entries The entries to persist.
 */
function saveHistory(entries) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
/**
 * Record a visit to the given URL. If it already exists, increment visitCount and update timestamp.
 * Otherwise add a new entry. Evicts oldest entries when the cap is reached.
 * @param url The URL that was visited.
 */
function recordVisit(url) {
    const entries = loadHistory();
    const existing = entries.find((e) => e.url === url);
    if (existing) {
        existing.visitCount++;
        existing.timestamp = Date.now();
    }
    else {
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
function updateTitle(url, title) {
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
function removeHistoryEntry(url) {
    const entries = loadHistory().filter((e) => e.url !== url);
    saveHistory(entries);
    renderHistory();
}
/**
 * Clear all navigation history.
 */
function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
}
// -- Autocomplete --
/**
 * Show autocomplete suggestions matching the given query against both URL and title,
 * sorted by visit count. Displays title and URL like Chrome's omnibox.
 * @param query The search text to filter history by.
 */
function showSuggestions(query) {
    if (!autocompleteList) {
        return;
    }
    const lowerQuery = query.toLowerCase();
    const entries = loadHistory()
        .filter((e) => e.url.toLowerCase().includes(lowerQuery) || e.title.toLowerCase().includes(lowerQuery))
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
function highlightMatch(text, query) {
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
function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
/**
 * Hide the autocomplete dropdown.
 */
function hideAutocomplete() {
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
function updateSuggestionHighlight(suggestions) {
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
function renderHistory() {
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ2xDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsU0FBUyxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztRQUV0SixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELFFBQVEsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDdEMsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDaEMsUUFBUSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztRQUN2QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN2QyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFjay1uYXZpZ2F0aW9uLXdpdGhpbi1hLXBsYXRmb3JtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuY29uc3QgU1RPUkFHRV9LRVkgPSBcIm5hdmlnYXRpb25IaXN0b3J5XCI7XG5jb25zdCBNQVhfRU5UUklFUyA9IDUwMDtcbmNvbnN0IE1BWF9TVUdHRVNUSU9OUyA9IDg7XG5cbi8qKlxuICogQSBzaW5nbGUgbmF2aWdhdGlvbiBoaXN0b3J5IGVudHJ5IHBlcnNpc3RlZCB0byBsb2NhbFN0b3JhZ2UuXG4gKi9cbmludGVyZmFjZSBIaXN0b3J5RW50cnkge1xuXHQvKiogVGhlIG5hdmlnYXRlZCBVUkwuICovXG5cdHVybDogc3RyaW5nO1xuXHQvKiogVGhlIHBhZ2UgdGl0bGUgY2FwdHVyZWQgZnJvbSB0aGUgdmlldy4gKi9cblx0dGl0bGU6IHN0cmluZztcblx0LyoqIFVuaXggdGltZXN0YW1wIG9mIHRoZSBtb3N0IHJlY2VudCB2aXNpdC4gKi9cblx0dGltZXN0YW1wOiBudW1iZXI7XG5cdC8qKiBUb3RhbCBudW1iZXIgb2YgdGltZXMgdGhpcyBVUkwgaGFzIGJlZW4gdmlzaXRlZC4gKi9cblx0dmlzaXRDb3VudDogbnVtYmVyO1xufVxuXG4vKipcbiAqIE1hcHMgYSB2aWV3IG5hbWUgdG8gdGhlIG1vc3QgcmVjZW50bHkgbmF2aWdhdGVkIFVSTCBmb3IgdGhhdCB2aWV3LFxuICogc28gdGhhdCBwYWdlLXRpdGxlLXVwZGF0ZWQgZXZlbnRzIGNhbiBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIGNvcnJlY3QgaGlzdG9yeSBlbnRyeS5cbiAqL1xuY29uc3Qgdmlld1VybE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbmxldCB1cmxJbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsO1xubGV0IGF1dG9jb21wbGV0ZUxpc3Q6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5sZXQgaGlzdG9yeUxpc3RFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xubGV0IHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID0gLTE7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0aW5pdERvbSgpO1xuXHRpbml0UGxhdGZvcm0oKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHBsYXRmb3JtIHByb3ZpZGVyIGFuZCBsaXN0ZW4gZm9yIG5hdmlnYXRpb24gZXZlbnRzIGdsb2JhbGx5LlxuICogVXNlcyBBcHBsaWNhdGlvbi1sZXZlbCBwcm9wYWdhdGVkIGV2ZW50cyBzbyB0aGF0IGFsbCB2aWV3IG5hdmlnYXRpb25zIGFuZCB0aXRsZVxuICogY2hhbmdlcyBhcmUgY2FwdHVyZWQgd2l0aCBzaW5nbGUgbGlzdGVuZXJzIGFuZCBubyBwZXItdmlldyBjbGVhbnVwIGlzIG5lZWRlZC5cbiAqXG4gKiBBbHRlcm5hdGl2ZTogZm9yIHBlci12aWV3IHRyYWNraW5nIHdpdGggZmluZXIgY29udHJvbCAoZS5nLiBzZWxlY3RpdmVseSB0cmFja2luZ1xuICogb25seSBjZXJ0YWluIHZpZXdzKSwgb3ZlcnJpZGUgY3JlYXRlVmlldyBpbiBmaW4uUGxhdGZvcm0uaW5pdCh7IG92ZXJyaWRlQ2FsbGJhY2sgfSlcbiAqIGFuZCBhdHRhY2ggdXJsLWNoYW5nZWQgLyBwYWdlLXRpdGxlLXVwZGF0ZWQgbGlzdGVuZXJzIHRvIGluZGl2aWR1YWwgdmlld3MsXG4gKiByZW1vdmluZyB0aGVtIG9uIFwiZGVzdHJveWVkXCIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRQbGF0Zm9ybSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0YXdhaXQgZmluLlBsYXRmb3JtLmluaXQoe30pO1xuXG5cdGNvbnN0IGFwcCA9IGF3YWl0IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50KCk7XG5cblx0YXdhaXQgYXBwLm9uKFxuXHRcdFwidmlldy11cmwtY2hhbmdlZFwiLFxuXHRcdChldmVudDogeyB1cmw6IHN0cmluZzsgaXNJblBhZ2U6IGJvb2xlYW47IHZpZXdJZGVudGl0eTogT3BlbkZpbi5JZGVudGl0eSB9KSA9PiB7XG5cdFx0XHRpZiAoIWV2ZW50LmlzSW5QYWdlICYmIGV2ZW50LnZpZXdJZGVudGl0eT8ubmFtZSkge1xuXHRcdFx0XHR2aWV3VXJsTWFwLnNldChldmVudC52aWV3SWRlbnRpdHkubmFtZSwgZXZlbnQudXJsKTtcblx0XHRcdFx0cmVjb3JkVmlzaXQoZXZlbnQudXJsKTtcblx0XHRcdFx0cmVuZGVySGlzdG9yeSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcblxuXHRhd2FpdCBhcHAub24oXG5cdFx0XCJ2aWV3LXBhZ2UtdGl0bGUtdXBkYXRlZFwiLFxuXHRcdChldmVudDogeyB0aXRsZTogc3RyaW5nOyB2aWV3SWRlbnRpdHk6IE9wZW5GaW4uSWRlbnRpdHkgfSkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LnZpZXdJZGVudGl0eT8ubmFtZSkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSB2aWV3VXJsTWFwLmdldChldmVudC52aWV3SWRlbnRpdHkubmFtZSk7XG5cdFx0XHRcdGlmICh1cmwgJiYgZXZlbnQudGl0bGUpIHtcblx0XHRcdFx0XHR1cGRhdGVUaXRsZSh1cmwsIGV2ZW50LnRpdGxlKTtcblx0XHRcdFx0XHRyZW5kZXJIaXN0b3J5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdCk7XG5cblx0YXdhaXQgYXBwLm9uKFwidmlldy1kZXN0cm95ZWRcIiwgKGV2ZW50OiB7IHZpZXdJZGVudGl0eTogT3BlbkZpbi5JZGVudGl0eSB9KSA9PiB7XG5cdFx0aWYgKGV2ZW50LnZpZXdJZGVudGl0eT8ubmFtZSkge1xuXHRcdFx0dmlld1VybE1hcC5kZWxldGUoZXZlbnQudmlld0lkZW50aXR5Lm5hbWUpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGNvbXBvbmVudHMgYW5kIHdpcmUgdXAgZXZlbnQgaGFuZGxlcnMuXG4gKi9cbmZ1bmN0aW9uIGluaXREb20oKTogdm9pZCB7XG5cdHVybElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiN1cmwtaW5wdXRcIik7XG5cdGF1dG9jb21wbGV0ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNhdXRvY29tcGxldGUtbGlzdFwiKTtcblx0aGlzdG9yeUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjaGlzdG9yeS1saXN0XCIpO1xuXG5cdGlmICh1cmxJbnB1dCkge1xuXHRcdHVybElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUlucHV0S2V5RG93bik7XG5cdFx0dXJsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0Q2hhbmdlKTtcblx0XHR1cmxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgaGFuZGxlSW5wdXRDaGFuZ2UpO1xuXHRcdHVybElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRoaWRlQXV0b2NvbXBsZXRlKCk7XG5cdFx0XHR9LCAxNTApO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuR28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tZ29cIik7XG5cdGlmIChidG5Hbykge1xuXHRcdGJ0bkdvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRuYXZpZ2F0ZVRvSW5wdXQoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNsZWFySGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1jbGVhci1oaXN0b3J5XCIpO1xuXHRpZiAoYnRuQ2xlYXJIaXN0b3J5KSB7XG5cdFx0YnRuQ2xlYXJIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckhpc3RvcnkpO1xuXHR9XG5cblx0cmVuZGVySGlzdG9yeSgpO1xufVxuXG4vKipcbiAqIEhhbmRsZSBrZXlib2FyZCBldmVudHMgb24gdGhlIFVSTCBpbnB1dCBmb3IgRW50ZXIgYW5kIGFycm93IGtleSBuYXZpZ2F0aW9uLlxuICogQHBhcmFtIGUgVGhlIGtleWJvYXJkIGV2ZW50LlxuICovXG5mdW5jdGlvbiBoYW5kbGVJbnB1dEtleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXHRjb25zdCBpdGVtcyA9IGF1dG9jb21wbGV0ZUxpc3Q/LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmF1dG9jb21wbGV0ZS1pdGVtXCIpO1xuXHRjb25zdCBzdWdnZXN0aW9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBpdGVtcyA/PyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ub29wXCIpO1xuXG5cdGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleCA9IE1hdGgubWluKHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ICsgMSwgc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSk7XG5cdFx0dXBkYXRlU3VnZ2VzdGlvbkhpZ2hsaWdodChzdWdnZXN0aW9ucyk7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID0gTWF0aC5tYXgoc2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggLSAxLCAtMSk7XG5cdFx0dXBkYXRlU3VnZ2VzdGlvbkhpZ2hsaWdodChzdWdnZXN0aW9ucyk7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoc2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggPj0gMCAmJiBzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleCA8IHN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBzdWdnZXN0aW9uc1tzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleF07XG5cdFx0XHRjb25zdCB1cmwgPSBzZWxlY3RlZC5kYXRhc2V0LnVybDtcblx0XHRcdGlmICh1cmwgJiYgdXJsSW5wdXQpIHtcblx0XHRcdFx0dXJsSW5wdXQudmFsdWUgPSB1cmw7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG5hdmlnYXRlVG9JbnB1dCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHR9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG5cdFx0aGlkZUF1dG9jb21wbGV0ZSgpO1xuXHR9XG59XG5cbi8qKlxuICogSGFuZGxlIGlucHV0IGNoYW5nZXMgdG8gc2hvdy91cGRhdGUgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93bi5cbiAqIFJlcXVpcmVzIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBiZWZvcmUgc2hvd2luZyBzdWdnZXN0aW9ucyB0byBhdm9pZFxuICogb3Zlcmx5IGJyb2FkIG1hdGNoZXMgb24gc2luZ2xlIGNvbW1vbiBsZXR0ZXJzLlxuICovXG5mdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZSgpOiB2b2lkIHtcblx0Y29uc3QgcXVlcnkgPSB1cmxJbnB1dD8udmFsdWUudHJpbSgpID8/IFwiXCI7XG5cdGlmIChxdWVyeS5sZW5ndGggPCAyKSB7XG5cdFx0aGlkZUF1dG9jb21wbGV0ZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXHRzaG93U3VnZ2VzdGlvbnMocXVlcnkpO1xufVxuXG4vKipcbiAqIE5hdmlnYXRlIHRvIHRoZSBVUkwgY3VycmVudGx5IGluIHRoZSBpbnB1dCBmaWVsZCBieSBvcGVuaW5nIGEgbmV3IHBsYXRmb3JtIHdpbmRvdyB3aXRoIGEgdmlldy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVUb0lucHV0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoIXVybElucHV0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHVybCA9IHVybElucHV0LnZhbHVlLnRyaW0oKTtcblx0aWYgKCF1cmwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIS9eaHR0cHM/OlxcL1xcLy9pLnRlc3QodXJsKSkge1xuXHRcdHVybCA9IGBodHRwczovLyR7dXJsfWA7XG5cdFx0dXJsSW5wdXQudmFsdWUgPSB1cmw7XG5cdH1cblxuXHRoaWRlQXV0b2NvbXBsZXRlKCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBwbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRcdGF3YWl0IHBsYXRmb3JtLmNyZWF0ZVdpbmRvdyh7XG5cdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0Y29udGVudDogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6IFwic3RhY2tcIixcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29tcG9uZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50TmFtZTogXCJ2aWV3XCIsXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50U3RhdGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHVybFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH0gYXMgT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMpO1xuXG5cdFx0dXJsSW5wdXQudmFsdWUgPSBcIlwiO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSB3aW5kb3c6XCIsIGVycik7XG5cdH1cbn1cblxuLy8gLS0gSGlzdG9yeSAvIGxvY2FsU3RvcmFnZSBoZWxwZXJzIC0tXG5cbi8qKlxuICogTG9hZCBhbGwgaGlzdG9yeSBlbnRyaWVzIGZyb20gbG9jYWxTdG9yYWdlLlxuICogQHJldHVybnMgVGhlIGFycmF5IG9mIGhpc3RvcnkgZW50cmllcy5cbiAqL1xuZnVuY3Rpb24gbG9hZEhpc3RvcnkoKTogSGlzdG9yeUVudHJ5W10ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcblx0XHRyZXR1cm4gcmF3ID8gKEpTT04ucGFyc2UocmF3KSBhcyBIaXN0b3J5RW50cnlbXSkgOiBbXTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59XG5cbi8qKlxuICogU2F2ZSBoaXN0b3J5IGVudHJpZXMgdG8gbG9jYWxTdG9yYWdlLlxuICogQHBhcmFtIGVudHJpZXMgVGhlIGVudHJpZXMgdG8gcGVyc2lzdC5cbiAqL1xuZnVuY3Rpb24gc2F2ZUhpc3RvcnkoZW50cmllczogSGlzdG9yeUVudHJ5W10pOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KGVudHJpZXMpKTtcbn1cblxuLyoqXG4gKiBSZWNvcmQgYSB2aXNpdCB0byB0aGUgZ2l2ZW4gVVJMLiBJZiBpdCBhbHJlYWR5IGV4aXN0cywgaW5jcmVtZW50IHZpc2l0Q291bnQgYW5kIHVwZGF0ZSB0aW1lc3RhbXAuXG4gKiBPdGhlcndpc2UgYWRkIGEgbmV3IGVudHJ5LiBFdmljdHMgb2xkZXN0IGVudHJpZXMgd2hlbiB0aGUgY2FwIGlzIHJlYWNoZWQuXG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdGhhdCB3YXMgdmlzaXRlZC5cbiAqL1xuZnVuY3Rpb24gcmVjb3JkVmlzaXQodXJsOiBzdHJpbmcpOiB2b2lkIHtcblx0Y29uc3QgZW50cmllcyA9IGxvYWRIaXN0b3J5KCk7XG5cdGNvbnN0IGV4aXN0aW5nID0gZW50cmllcy5maW5kKChlKSA9PiBlLnVybCA9PT0gdXJsKTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHRleGlzdGluZy52aXNpdENvdW50Kys7XG5cdFx0ZXhpc3RpbmcudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblx0fSBlbHNlIHtcblx0XHRlbnRyaWVzLnB1c2goeyB1cmwsIHRpdGxlOiBcIlwiLCB0aW1lc3RhbXA6IERhdGUubm93KCksIHZpc2l0Q291bnQ6IDEgfSk7XG5cdH1cblxuXHRpZiAoZW50cmllcy5sZW5ndGggPiBNQVhfRU5UUklFUykge1xuXHRcdGVudHJpZXMuc29ydCgoYSwgYikgPT4gYi50aW1lc3RhbXAgLSBhLnRpbWVzdGFtcCk7XG5cdFx0ZW50cmllcy5sZW5ndGggPSBNQVhfRU5UUklFUztcblx0fVxuXG5cdHNhdmVIaXN0b3J5KGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgdGl0bGUgb2YgYW4gZXhpc3RpbmcgaGlzdG9yeSBlbnRyeSBmb3IgdGhlIGdpdmVuIFVSTC5cbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB3aG9zZSB0aXRsZSBzaG91bGQgYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0aXRsZSBUaGUgbmV3IHBhZ2UgdGl0bGUuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVRpdGxlKHVybDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IGVudHJpZXMgPSBsb2FkSGlzdG9yeSgpO1xuXHRjb25zdCBleGlzdGluZyA9IGVudHJpZXMuZmluZCgoZSkgPT4gZS51cmwgPT09IHVybCk7XG5cblx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0ZXhpc3RpbmcudGl0bGUgPSB0aXRsZTtcblx0XHRzYXZlSGlzdG9yeShlbnRyaWVzKTtcblx0fVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIHNpbmdsZSBlbnRyeSBmcm9tIGhpc3RvcnkgYnkgVVJMLlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIHJlbW92ZS5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlSGlzdG9yeUVudHJ5KHVybDogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IGVudHJpZXMgPSBsb2FkSGlzdG9yeSgpLmZpbHRlcigoZSkgPT4gZS51cmwgIT09IHVybCk7XG5cdHNhdmVIaXN0b3J5KGVudHJpZXMpO1xuXHRyZW5kZXJIaXN0b3J5KCk7XG59XG5cbi8qKlxuICogQ2xlYXIgYWxsIG5hdmlnYXRpb24gaGlzdG9yeS5cbiAqL1xuZnVuY3Rpb24gY2xlYXJIaXN0b3J5KCk6IHZvaWQge1xuXHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTVE9SQUdFX0tFWSk7XG5cdHJlbmRlckhpc3RvcnkoKTtcbn1cblxuLy8gLS0gQXV0b2NvbXBsZXRlIC0tXG5cbi8qKlxuICogU2hvdyBhdXRvY29tcGxldGUgc3VnZ2VzdGlvbnMgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5IGFnYWluc3QgYm90aCBVUkwgYW5kIHRpdGxlLFxuICogc29ydGVkIGJ5IHZpc2l0IGNvdW50LiBEaXNwbGF5cyB0aXRsZSBhbmQgVVJMIGxpa2UgQ2hyb21lJ3Mgb21uaWJveC5cbiAqIEBwYXJhbSBxdWVyeSBUaGUgc2VhcmNoIHRleHQgdG8gZmlsdGVyIGhpc3RvcnkgYnkuXG4gKi9cbmZ1bmN0aW9uIHNob3dTdWdnZXN0aW9ucyhxdWVyeTogc3RyaW5nKTogdm9pZCB7XG5cdGlmICghYXV0b2NvbXBsZXRlTGlzdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxvd2VyUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBlbnRyaWVzID0gbG9hZEhpc3RvcnkoKVxuXHRcdC5maWx0ZXIoXG5cdFx0XHQoZSkgPT5cblx0XHRcdFx0ZS51cmwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fCBlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSlcblx0XHQpXG5cdFx0LnNvcnQoKGEsIGIpID0+IGIudmlzaXRDb3VudCAtIGEudmlzaXRDb3VudClcblx0XHQuc2xpY2UoMCwgTUFYX1NVR0dFU1RJT05TKTtcblxuXHRpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcblx0XHRoaWRlQXV0b2NvbXBsZXRlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0c2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggPSAtMTtcblx0YXV0b2NvbXBsZXRlTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuXHRcdGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGl0ZW0uY2xhc3NOYW1lID0gXCJhdXRvY29tcGxldGUtaXRlbVwiO1xuXHRcdGl0ZW0uZGF0YXNldC51cmwgPSBlbnRyeS51cmw7XG5cblx0XHRjb25zdCB0ZXh0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0ZXh0Q29sLmNsYXNzTmFtZSA9IFwiYXV0b2NvbXBsZXRlLXRleHRcIjtcblxuXHRcdGlmIChlbnRyeS50aXRsZSkge1xuXHRcdFx0Y29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHR0aXRsZVNwYW4uY2xhc3NOYW1lID0gXCJhdXRvY29tcGxldGUtdGl0bGVcIjtcblx0XHRcdHRpdGxlU3Bhbi5pbm5lckhUTUwgPSBoaWdobGlnaHRNYXRjaChlbnRyeS50aXRsZSwgcXVlcnkpO1xuXHRcdFx0dGV4dENvbC5hcHBlbmQodGl0bGVTcGFuKTtcblx0XHR9XG5cblx0XHRjb25zdCB1cmxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0dXJsU3Bhbi5jbGFzc05hbWUgPSBcInVybFwiO1xuXHRcdHVybFNwYW4uaW5uZXJIVE1MID0gaGlnaGxpZ2h0TWF0Y2goZW50cnkudXJsLCBxdWVyeSk7XG5cdFx0dGV4dENvbC5hcHBlbmQodXJsU3Bhbik7XG5cblx0XHRjb25zdCBjb3VudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRjb3VudFNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpdC1jb3VudFwiO1xuXHRcdGNvdW50U3Bhbi50ZXh0Q29udGVudCA9IGAke2VudHJ5LnZpc2l0Q291bnR9IHZpc2l0JHtlbnRyeS52aXNpdENvdW50ICE9PSAxID8gXCJzXCIgOiBcIlwifWA7XG5cblx0XHRpdGVtLmFwcGVuZCh0ZXh0Q29sLCBjb3VudFNwYW4pO1xuXG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAodXJsSW5wdXQpIHtcblx0XHRcdFx0dXJsSW5wdXQudmFsdWUgPSBlbnRyeS51cmw7XG5cdFx0XHR9XG5cdFx0XHRuYXZpZ2F0ZVRvSW5wdXQoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblxuXHRcdGF1dG9jb21wbGV0ZUxpc3QuYXBwZW5kKGl0ZW0pO1xuXHR9XG5cblx0YXV0b2NvbXBsZXRlTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBIVE1MIHN0cmluZyB3aXRoIGFsbCBvY2N1cnJlbmNlcyBvZiBxdWVyeSBoaWdobGlnaHRlZCB3aXRoIGEgPG1hcms+IHRhZy5cbiAqIFRoZSBpbnB1dCB0ZXh0IGlzIEhUTUwtZXNjYXBlZCBmaXJzdCB0byBwcmV2ZW50IGluamVjdGlvbi5cbiAqIEBwYXJhbSB0ZXh0IFRoZSBvcmlnaW5hbCB0ZXh0IHRvIGRpc3BsYXkuXG4gKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeSB0byBoaWdobGlnaHQgd2l0aGluIHRoZSB0ZXh0LlxuICogQHJldHVybnMgSFRNTCBzdHJpbmcgd2l0aCBtYXRjaGVzIHdyYXBwZWQgaW4gPG1hcms+IHRhZ3MuXG4gKi9cbmZ1bmN0aW9uIGhpZ2hsaWdodE1hdGNoKHRleHQ6IHN0cmluZywgcXVlcnk6IHN0cmluZyk6IHN0cmluZyB7XG5cdGlmICghcXVlcnkpIHtcblx0XHRyZXR1cm4gZXNjYXBlSHRtbCh0ZXh0KTtcblx0fVxuXHRjb25zdCBlc2NhcGVkID0gZXNjYXBlSHRtbCh0ZXh0KTtcblx0Y29uc3QgZXNjYXBlZFF1ZXJ5ID0gZXNjYXBlSHRtbChxdWVyeSk7XG5cdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgKCR7ZXNjYXBlZFF1ZXJ5LnJlcGxhY2UoL1skKCkqKy4/W1xcXFxcXF1ee3x9XS9nLCBcIlxcXFwkJlwiKX0pYCwgXCJnaVwiKTtcblx0cmV0dXJuIGVzY2FwZWQucmVwbGFjZShyZWdleCwgXCI8bWFyaz4kMTwvbWFyaz5cIik7XG59XG5cbi8qKlxuICogRXNjYXBlIEhUTUwgc3BlY2lhbCBjaGFyYWN0ZXJzIHRvIHByZXZlbnQgWFNTIHdoZW4gdXNpbmcgaW5uZXJIVE1MLlxuICogQHBhcmFtIHN0ciBUaGUgcmF3IHN0cmluZyB0byBlc2NhcGUuXG4gKiBAcmV0dXJucyBUaGUgSFRNTC1zYWZlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG5cdHJldHVybiBzdHJcblx0XHQucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpXG5cdFx0LnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXG5cdFx0LnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpXG5cdFx0LnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpO1xufVxuXG4vKipcbiAqIEhpZGUgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93bi5cbiAqL1xuZnVuY3Rpb24gaGlkZUF1dG9jb21wbGV0ZSgpOiB2b2lkIHtcblx0aWYgKGF1dG9jb21wbGV0ZUxpc3QpIHtcblx0XHRhdXRvY29tcGxldGVMaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRhdXRvY29tcGxldGVMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cdH1cblx0c2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggPSAtMTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHZpc3VhbCBoaWdobGlnaHQgb24gYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb25zIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICogQHBhcmFtIHN1Z2dlc3Rpb25zIFRoZSBsaXN0IG9mIHN1Z2dlc3Rpb24gZWxlbWVudHMgdG8gdXBkYXRlLlxuICovXG5mdW5jdGlvbiB1cGRhdGVTdWdnZXN0aW9uSGlnaGxpZ2h0KHN1Z2dlc3Rpb25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50Pik6IHZvaWQge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN1Z2dlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0c3VnZ2VzdGlvbnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIsIGkgPT09IHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4KTtcblx0fVxuXG5cdGlmIChzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleCA+PSAwICYmIHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4IDwgc3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSBzdWdnZXN0aW9uc1tzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleF07XG5cdFx0aWYgKHVybElucHV0KSB7XG5cdFx0XHR1cmxJbnB1dC52YWx1ZSA9IHNlbGVjdGVkLmRhdGFzZXQudXJsID8/IFwiXCI7XG5cdFx0fVxuXHR9XG59XG5cbi8vIC0tIEhpc3RvcnkgcGFuZWwgcmVuZGVyaW5nIC0tXG5cbi8qKlxuICogUmVuZGVyIHRoZSBmdWxsIGhpc3RvcnkgbGlzdCBpbiB0aGUgaGlzdG9yeSBwYW5lbCwgc29ydGVkIGJ5IG1vc3QgcmVjZW50IGZpcnN0LlxuICogU2hvd3MgdGl0bGUgKGlmIGF2YWlsYWJsZSkgcHJvbWluZW50bHkgd2l0aCB0aGUgVVJMIGJlbmVhdGggaXQuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckhpc3RvcnkoKTogdm9pZCB7XG5cdGlmICghaGlzdG9yeUxpc3RFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZW50cmllcyA9IGxvYWRIaXN0b3J5KCkuc29ydCgoYSwgYikgPT4gYi50aW1lc3RhbXAgLSBhLnRpbWVzdGFtcCk7XG5cdGhpc3RvcnlMaXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuXHRcdGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0cm93LmNsYXNzTmFtZSA9IFwiaGlzdG9yeS1lbnRyeVwiO1xuXG5cdFx0Y29uc3QgdGV4dENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGV4dENvbC5jbGFzc05hbWUgPSBcImhpc3RvcnktdGV4dFwiO1xuXHRcdHRleHRDb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGlmICh1cmxJbnB1dCkge1xuXHRcdFx0XHR1cmxJbnB1dC52YWx1ZSA9IGVudHJ5LnVybDtcblx0XHRcdH1cblx0XHRcdG5hdmlnYXRlVG9JbnB1dCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKGVudHJ5LnRpdGxlKSB7XG5cdFx0XHRjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHR0aXRsZUVsLmNsYXNzTmFtZSA9IFwiaGlzdG9yeS10aXRsZVwiO1xuXHRcdFx0dGl0bGVFbC50ZXh0Q29udGVudCA9IGVudHJ5LnRpdGxlO1xuXHRcdFx0dGV4dENvbC5hcHBlbmQodGl0bGVFbCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHR1cmxFbC5jbGFzc05hbWUgPSBcImhpc3RvcnktdXJsXCI7XG5cdFx0dXJsRWwudGV4dENvbnRlbnQgPSBlbnRyeS51cmw7XG5cdFx0dXJsRWwudGl0bGUgPSBlbnRyeS51cmw7XG5cdFx0dGV4dENvbC5hcHBlbmQodXJsRWwpO1xuXG5cdFx0Y29uc3QgbWV0YUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0bWV0YUVsLmNsYXNzTmFtZSA9IFwiaGlzdG9yeS1tZXRhXCI7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGVudHJ5LnRpbWVzdGFtcCk7XG5cdFx0bWV0YUVsLnRleHRDb250ZW50ID0gYCR7ZW50cnkudmlzaXRDb3VudH0gdmlzaXQke2VudHJ5LnZpc2l0Q291bnQgIT09IDEgPyBcInNcIiA6IFwiXCJ9IFxcdTAwQjcgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAke2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YDtcblxuXHRcdGNvbnN0IGRlbGV0ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0ZGVsZXRlRWwuY2xhc3NOYW1lID0gXCJoaXN0b3J5LWRlbGV0ZVwiO1xuXHRcdGRlbGV0ZUVsLnRleHRDb250ZW50ID0gXCJcXHUwMEQ3XCI7XG5cdFx0ZGVsZXRlRWwudGl0bGUgPSBcIlJlbW92ZSBmcm9tIGhpc3RvcnlcIjtcblx0XHRkZWxldGVFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0cmVtb3ZlSGlzdG9yeUVudHJ5KGVudHJ5LnVybCk7XG5cdFx0fSk7XG5cblx0XHRyb3cuYXBwZW5kKHRleHRDb2wsIG1ldGFFbCwgZGVsZXRlRWwpO1xuXHRcdGhpc3RvcnlMaXN0RWxlbWVudC5hcHBlbmQocm93KTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9