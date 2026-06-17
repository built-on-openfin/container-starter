/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/storage.ts"
/*!*******************************!*\
  !*** ./client/src/storage.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearFocusedWindowStack: () => (/* binding */ clearFocusedWindowStack),
/* harmony export */   clearHistory: () => (/* binding */ clearHistory),
/* harmony export */   getActiveViews: () => (/* binding */ getActiveViews),
/* harmony export */   getFocusedWindowStack: () => (/* binding */ getFocusedWindowStack),
/* harmony export */   getHistory: () => (/* binding */ getHistory),
/* harmony export */   getLastFocusedWindow: () => (/* binding */ getLastFocusedWindow),
/* harmony export */   onStorageChanged: () => (/* binding */ onStorageChanged),
/* harmony export */   pushFocusedWindow: () => (/* binding */ pushFocusedWindow),
/* harmony export */   recordVisit: () => (/* binding */ recordVisit),
/* harmony export */   removeFocusedWindow: () => (/* binding */ removeFocusedWindow),
/* harmony export */   removeHistoryEntry: () => (/* binding */ removeHistoryEntry),
/* harmony export */   setActiveViews: () => (/* binding */ setActiveViews),
/* harmony export */   setHistory: () => (/* binding */ setHistory),
/* harmony export */   updateHistoryFavicon: () => (/* binding */ updateHistoryFavicon),
/* harmony export */   updateHistoryTitle: () => (/* binding */ updateHistoryTitle)
/* harmony export */ });
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
// -- Navigation History (localStorage) --
/**
 * Load all history entries.
 * @returns The array of history entries.
 */
function getHistory() {
    try {
        const raw = localStorage.getItem(HISTORY_KEY);
        return raw ? JSON.parse(raw) : [];
    }
    catch {
        return [];
    }
}
/**
 * Save history entries, replacing the current set.
 * @param entries The entries to persist.
 */
function setHistory(entries) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(entries));
}
/**
 * Record a visit to the given URL. Increments visitCount if already present,
 * otherwise creates a new entry. Evicts the oldest entries when the cap is reached.
 * @param url The URL that was visited.
 */
function recordVisit(url) {
    const entries = getHistory();
    const existing = entries.find((e) => e.url === url);
    if (existing) {
        existing.visitCount++;
        existing.timestamp = Date.now();
    }
    else {
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
function updateHistoryTitle(url, title) {
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
function updateHistoryFavicon(url, favicon) {
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
function removeHistoryEntry(url) {
    const entries = getHistory().filter((e) => e.url !== url);
    setHistory(entries);
}
/**
 * Clear all navigation history.
 */
function clearHistory() {
    localStorage.removeItem(HISTORY_KEY);
}
// -- Active Views (localStorage) --
/**
 * Load the active views map (view name -> current URL).
 * @returns An object mapping view names to their current URLs.
 */
function getActiveViews() {
    try {
        const raw = localStorage.getItem(ACTIVE_VIEWS_KEY);
        return raw ? JSON.parse(raw) : {};
    }
    catch {
        return {};
    }
}
/**
 * Save the active views map.
 * @param views An object mapping view names to their current URLs.
 */
function setActiveViews(views) {
    localStorage.setItem(ACTIVE_VIEWS_KEY, JSON.stringify(views));
}
// -- Focused Window Stack (localStorage, cleared on platform startup) --
/**
 * Load the focused window stack (most recent first).
 * @returns Array of window identities.
 */
function getFocusedWindowStack() {
    try {
        const raw = localStorage.getItem(FOCUSED_WINDOW_STACK_KEY);
        return raw ? JSON.parse(raw) : [];
    }
    catch {
        return [];
    }
}
/**
 * Push a window to the top of the focus stack.
 * Deduplicates and caps the stack at the configured maximum.
 * @param identity The window identity to push.
 */
function pushFocusedWindow(identity) {
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
function removeFocusedWindow(windowName) {
    const stack = getFocusedWindowStack().filter((w) => w.name !== windowName);
    localStorage.setItem(FOCUSED_WINDOW_STACK_KEY, JSON.stringify(stack));
}
/**
 * Clear the focused window stack (called on platform startup to reset state).
 */
function clearFocusedWindowStack() {
    localStorage.removeItem(FOCUSED_WINDOW_STACK_KEY);
}
/**
 * Get the most recently focused window identity, or null if the stack is empty.
 * @returns The window identity at the top of the stack.
 */
function getLastFocusedWindow() {
    const stack = getFocusedWindowStack();
    return stack.length > 0 ? stack[0] : null;
}
/**
 * Register a callback that fires when storage is modified by another same-origin window.
 * Uses the browser's "storage" event which fires on other windows sharing the same origin.
 * @param callback Called with the logical key name that changed.
 * @returns A cleanup function that removes the listener.
 */
function onStorageChanged(callback) {
    const keyMap = {
        [HISTORY_KEY]: "history",
        [ACTIVE_VIEWS_KEY]: "activeViews",
        [FOCUSED_WINDOW_STACK_KEY]: "focusedWindowStack"
    };
    /**
     * Handles storage events and maps raw keys to logical key names.
     * @param event The storage event from another window.
     */
    function handler(event) {
        if (event.key && keyMap[event.key]) {
            callback(keyMap[event.key]);
        }
    }
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./client/src/url-navigator.ts ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./client/src/storage.ts");

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
let urlInput = null;
let autocompleteList = null;
let historyListElement = null;
let selectedSuggestionIndex = -1;
let stashedQuery = "";
document.addEventListener("DOMContentLoaded", () => {
    initDom();
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.onStorageChanged)((key) => {
        if (key === "history" || key === "activeViews") {
            const panel = document.querySelector("#history-panel");
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
    initLaunchMenu();
    const btnClearHistory = document.querySelector("#btn-clear-history");
    if (btnClearHistory) {
        btnClearHistory.addEventListener("click", () => {
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.clearHistory)();
            renderHistory();
        });
    }
    const btnToggleHistory = document.querySelector("#btn-toggle-history");
    if (btnToggleHistory) {
        btnToggleHistory.addEventListener("click", () => {
            toggleHistoryPanel().catch(console.error);
        });
    }
    const btnMinimize = document.querySelector("#btn-minimize");
    if (btnMinimize) {
        btnMinimize.addEventListener("click", () => {
            // eslint-disable-next-line newline-per-chained-call
            fin.Window.getCurrentSync().minimize().catch(console.error);
        });
    }
    const btnClose = document.querySelector("#btn-close");
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
async function toggleHistoryPanel() {
    const panel = document.querySelector("#history-panel");
    const btn = document.querySelector("#btn-toggle-history");
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
    }
    else {
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
function initLaunchMenu() {
    const btnTrigger = document.querySelector("#btn-launch-menu");
    const menu = document.querySelector("#launch-menu");
    const lastWindowItem = document.querySelector("#launch-last-window");
    if (!btnTrigger || !menu) {
        return;
    }
    btnTrigger.addEventListener("click", () => {
        const isOpen = menu.classList.contains("visible");
        if (isOpen) {
            menu.classList.remove("visible");
            btnTrigger.classList.remove("active");
        }
        else {
            lastWindowItem?.classList.toggle("disabled", !(0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLastFocusedWindow)());
            menu.classList.add("visible");
            btnTrigger.classList.add("active");
        }
    });
    document.addEventListener("click", (e) => {
        const launchGroup = btnTrigger.parentElement;
        if (launchGroup && !launchGroup.contains(e.target)) {
            menu.classList.remove("visible");
            btnTrigger.classList.remove("active");
        }
    });
    menu.addEventListener("click", async (e) => {
        const item = e.target.closest(".launch-menu-item");
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
        }
        else if (action === "last-window") {
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
function handleInputKeyDown(e) {
    const items = autocompleteList?.querySelectorAll(".autocomplete-item");
    const suggestions = items ?? document.querySelectorAll(".noop");
    if (e.key === "ArrowDown") {
        e.preventDefault();
        if (selectedSuggestionIndex === -1 && urlInput) {
            stashedQuery = urlInput.value;
        }
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
        if (selectedSuggestionIndex >= 0) {
            selectedSuggestionIndex = -1;
            updateSuggestionHighlight(suggestions);
        }
        else {
            hideAutocomplete();
        }
    }
}
/**
 * Handle input changes to show/update the autocomplete dropdown.
 * Requires at least 2 characters before showing suggestions.
 */
function handleInputChange() {
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
function resolveInputUrl() {
    if (!urlInput) {
        return null;
    }
    let url = urlInput.value.trim();
    if (!url) {
        return null;
    }
    if (/^https?:\/\//i.test(url)) {
        // Already has a protocol -- use as-is.
    }
    else if (looksLikeUrl(url)) {
        url = `https://${url}`;
    }
    else {
        url = `https://www.google.com/search?q=${encodeURIComponent(url)}`;
    }
    return url;
}
/**
 * Navigate to the URL currently in the input field by opening a new platform window.
 */
async function navigateToInput() {
    const url = resolveInputUrl();
    if (!url || !urlInput) {
        return;
    }
    urlInput.value = url;
    hideAutocomplete();
    try {
        await openInNewWindow(url);
        urlInput.value = "";
    }
    catch (err) {
        console.error("Failed to create window:", err);
    }
}
/**
 * Open a URL in a brand new platform window containing a single view.
 * @param url The URL to navigate to.
 */
async function openInNewWindow(url) {
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
}
/**
 * Open a URL as a new view in the last focused window (read from storage).
 * Falls back to opening a new window if no last focused window is stored.
 * @param url The URL to navigate to.
 */
async function openInLastFocusedWindow(url) {
    const identity = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLastFocusedWindow)();
    if (identity) {
        const platform = fin.Platform.getCurrentSync();
        const targetWin = fin.Window.wrapSync(identity);
        await platform.createView({ url }, identity);
        const state = await targetWin.getState();
        if (state === "minimized") {
            await targetWin.restore();
        }
        await targetWin.setAsForeground();
    }
    else {
        await openInNewWindow(url);
    }
}
// -- View switching --
/**
 * Find the identity of an active view currently displaying the given URL, or null if none.
 * @param url The URL to search for among active views.
 * @returns The view identity if found, otherwise null.
 */
function findActiveViewForUrl(url) {
    const activeViews = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getActiveViews)();
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
async function switchToView(identity) {
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
function showSuggestions(query) {
    if (!autocompleteList) {
        return;
    }
    const lowerQuery = query.toLowerCase();
    const entries = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getHistory)()
        .filter((e) => e.url.toLowerCase().includes(lowerQuery) || e.title.toLowerCase().includes(lowerQuery))
        .sort((a, b) => b.visitCount - a.visitCount)
        .slice(0, MAX_SUGGESTIONS);
    const isSearchQuery = !looksLikeUrl(query) && !/^https?:\/\//i.test(query);
    if (entries.length === 0 && !isSearchQuery) {
        hideAutocomplete();
        return;
    }
    selectedSuggestionIndex = -1;
    autocompleteList.innerHTML = "";
    // If the query doesn't look like a URL, add a "Search Google" option at the top and pre-select it.
    if (isSearchQuery) {
        selectedSuggestionIndex = 0;
        stashedQuery = query;
        const searchItem = document.createElement("div");
        searchItem.className = "autocomplete-item autocomplete-search selected";
        searchItem.dataset.url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        const searchIcon = document.createElement("span");
        searchIcon.className = "autocomplete-search-icon";
        searchIcon.innerHTML =
            // eslint-disable-next-line @typescript-eslint/quotes
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
                // eslint-disable-next-line @typescript-eslint/quotes
                'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                // eslint-disable-next-line @typescript-eslint/quotes
                '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
        searchItem.append(searchIcon);
        const searchText = document.createElement("span");
        searchText.className = "autocomplete-search-label";
        searchText.innerHTML = `Search Google for <strong>${escapeHtml(query)}</strong>`;
        searchItem.append(searchText);
        searchItem.addEventListener("mousedown", (e) => {
            e.preventDefault();
            if (urlInput) {
                urlInput.value = query;
            }
            navigateToInput().catch(console.error);
        });
        autocompleteList.append(searchItem);
    }
    const hasLastWindow = Boolean((0,_storage__WEBPACK_IMPORTED_MODULE_0__.getLastFocusedWindow)());
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
    const totalItems = entries.length + (isSearchQuery ? 1 : 0);
    resizeForAutocomplete(totalItems).catch(console.error);
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
    const panel = document.querySelector("#history-panel");
    const historyVisible = panel && panel.style.display !== "none";
    if (!historyVisible) {
        resizeToCollapsed().catch(console.error);
    }
}
/**
 * Resize the window to accommodate autocomplete results.
 * @param itemCount The number of autocomplete items being shown.
 */
async function resizeForAutocomplete(itemCount) {
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
async function resizeToCollapsed() {
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
    else if (selectedSuggestionIndex === -1 && urlInput) {
        urlInput.value = stashedQuery;
    }
}
// -- Utility --
/**
 * Return an HTML string with all occurrences of query highlighted with a <mark> tag.
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
    // eslint-disable-next-line newline-per-chained-call
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
/**
 * Heuristic check for whether an input string looks like a URL rather than a search query.
 * @param input The raw user input to evaluate.
 * @returns True if the input appears to be a URL, false if it looks like a search query.
 */
function looksLikeUrl(input) {
    if (input.includes(" ")) {
        return false;
    }
    return /^\S+\.[a-z]{2,}(\/.*)?$/i.test(input);
}
// -- History panel rendering --
/**
 * Render the full history list in the history panel, sorted by most recent first.
 */
function renderHistory() {
    if (!historyListElement) {
        return;
    }
    const entries = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getHistory)().sort((a, b) => b.timestamp - a.timestamp);
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
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.removeHistoryEntry)(entry.url);
            renderHistory();
        });
        row.append(textCol, metaEl, deleteEl);
        historyListElement.append(row);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ2xDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsU0FBUyxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQztRQUV0SixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELFFBQVEsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDdEMsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDaEMsUUFBUSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztRQUN2QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN2Qyw0REFBa0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsYUFBYSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS8uL2NsaWVudC9zcmMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly90cmFjay1uYXZpZ2F0aW9uLXdpdGhpbi1hLXBsYXRmb3JtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RyYWNrLW5hdmlnYXRpb24td2l0aGluLWEtcGxhdGZvcm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyYWNrLW5hdmlnYXRpb24td2l0aGluLWEtcGxhdGZvcm0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cmFjay1uYXZpZ2F0aW9uLXdpdGhpbi1hLXBsYXRmb3JtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS8uL2NsaWVudC9zcmMvdXJsLW5hdmlnYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbi8qKlxuICogU3RvcmFnZSBhYnN0cmFjdGlvbiBmb3IgdGhlIG5hdmlnYXRpb24gdHJhY2tlci5cbiAqXG4gKiBDZW50cmFsaXplcyBhbGwgcGVyc2lzdGVuY2UgKGhpc3RvcnksIGFjdGl2ZSB2aWV3cywgZm9jdXNlZCB3aW5kb3cgc3RhY2spXG4gKiBiZWhpbmQgYSBzaW1wbGUgQVBJLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiB1c2VzIGxvY2FsU3RvcmFnZSAocGVyc2lzdGVudClcbiAqIGFuZCBzZXNzaW9uU3RvcmFnZSAocGVyLXNlc3Npb24pLiBUbyBzd2FwIGluIGEgZGlmZmVyZW50IGJhY2tlbmQgKGUuZy4gYSByZW1vdGVcbiAqIHNlcnZpY2UpLCByZXBsYWNlIG9yIHdyYXAgdGhlIGZ1bmN0aW9ucyBleHBvcnRlZCBmcm9tIHRoaXMgbW9kdWxlLlxuICovXG5cbmNvbnN0IEhJU1RPUllfS0VZID0gXCJuYXZpZ2F0aW9uSGlzdG9yeVwiO1xuY29uc3QgQUNUSVZFX1ZJRVdTX0tFWSA9IFwiYWN0aXZlVmlld3NcIjtcbmNvbnN0IEZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWSA9IFwiZm9jdXNlZFdpbmRvd1N0YWNrXCI7XG5cbmNvbnN0IE1BWF9ISVNUT1JZX0VOVFJJRVMgPSA1MDA7XG5jb25zdCBNQVhfRk9DVVNFRF9TVEFDSyA9IDU7XG5cbi8qKlxuICogQSBzaW5nbGUgbmF2aWdhdGlvbiBoaXN0b3J5IGVudHJ5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlFbnRyeSB7XG5cdC8qKiBUaGUgbmF2aWdhdGVkIFVSTC4gKi9cblx0dXJsOiBzdHJpbmc7XG5cdC8qKiBUaGUgcGFnZSB0aXRsZSBjYXB0dXJlZCBmcm9tIHRoZSB2aWV3LiAqL1xuXHR0aXRsZTogc3RyaW5nO1xuXHQvKiogVGhlIHBhZ2UgZmF2aWNvbiBVUkwgY2FwdHVyZWQgZnJvbSB0aGUgdmlldy4gKi9cblx0ZmF2aWNvbjogc3RyaW5nO1xuXHQvKiogVW5peCB0aW1lc3RhbXAgb2YgdGhlIG1vc3QgcmVjZW50IHZpc2l0LiAqL1xuXHR0aW1lc3RhbXA6IG51bWJlcjtcblx0LyoqIFRvdGFsIG51bWJlciBvZiB0aW1lcyB0aGlzIFVSTCBoYXMgYmVlbiB2aXNpdGVkLiAqL1xuXHR2aXNpdENvdW50OiBudW1iZXI7XG59XG5cbi8vIC0tIE5hdmlnYXRpb24gSGlzdG9yeSAobG9jYWxTdG9yYWdlKSAtLVxuXG4vKipcbiAqIExvYWQgYWxsIGhpc3RvcnkgZW50cmllcy5cbiAqIEByZXR1cm5zIFRoZSBhcnJheSBvZiBoaXN0b3J5IGVudHJpZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIaXN0b3J5KCk6IEhpc3RvcnlFbnRyeVtdIHtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShISVNUT1JZX0tFWSk7XG5cdFx0cmV0dXJuIHJhdyA/IChKU09OLnBhcnNlKHJhdykgYXMgSGlzdG9yeUVudHJ5W10pIDogW107XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufVxuXG4vKipcbiAqIFNhdmUgaGlzdG9yeSBlbnRyaWVzLCByZXBsYWNpbmcgdGhlIGN1cnJlbnQgc2V0LlxuICogQHBhcmFtIGVudHJpZXMgVGhlIGVudHJpZXMgdG8gcGVyc2lzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEhpc3RvcnkoZW50cmllczogSGlzdG9yeUVudHJ5W10pOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oSElTVE9SWV9LRVksIEpTT04uc3RyaW5naWZ5KGVudHJpZXMpKTtcbn1cblxuLyoqXG4gKiBSZWNvcmQgYSB2aXNpdCB0byB0aGUgZ2l2ZW4gVVJMLiBJbmNyZW1lbnRzIHZpc2l0Q291bnQgaWYgYWxyZWFkeSBwcmVzZW50LFxuICogb3RoZXJ3aXNlIGNyZWF0ZXMgYSBuZXcgZW50cnkuIEV2aWN0cyB0aGUgb2xkZXN0IGVudHJpZXMgd2hlbiB0aGUgY2FwIGlzIHJlYWNoZWQuXG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdGhhdCB3YXMgdmlzaXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZFZpc2l0KHVybDogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IGVudHJpZXMgPSBnZXRIaXN0b3J5KCk7XG5cdGNvbnN0IGV4aXN0aW5nID0gZW50cmllcy5maW5kKChlKSA9PiBlLnVybCA9PT0gdXJsKTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHRleGlzdGluZy52aXNpdENvdW50Kys7XG5cdFx0ZXhpc3RpbmcudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblx0fSBlbHNlIHtcblx0XHRlbnRyaWVzLnB1c2goeyB1cmwsIHRpdGxlOiBcIlwiLCBmYXZpY29uOiBcIlwiLCB0aW1lc3RhbXA6IERhdGUubm93KCksIHZpc2l0Q291bnQ6IDEgfSk7XG5cdH1cblxuXHRpZiAoZW50cmllcy5sZW5ndGggPiBNQVhfSElTVE9SWV9FTlRSSUVTKSB7XG5cdFx0ZW50cmllcy5zb3J0KChhLCBiKSA9PiBiLnRpbWVzdGFtcCAtIGEudGltZXN0YW1wKTtcblx0XHRlbnRyaWVzLmxlbmd0aCA9IE1BWF9ISVNUT1JZX0VOVFJJRVM7XG5cdH1cblxuXHRzZXRIaXN0b3J5KGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgdGl0bGUgb2YgYW4gZXhpc3RpbmcgaGlzdG9yeSBlbnRyeS5cbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB3aG9zZSB0aXRsZSBzaG91bGQgYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0aXRsZSBUaGUgbmV3IHBhZ2UgdGl0bGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIaXN0b3J5VGl0bGUodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcblx0Y29uc3QgZW50cmllcyA9IGdldEhpc3RvcnkoKTtcblx0Y29uc3QgZXhpc3RpbmcgPSBlbnRyaWVzLmZpbmQoKGUpID0+IGUudXJsID09PSB1cmwpO1xuXG5cdGlmIChleGlzdGluZykge1xuXHRcdGV4aXN0aW5nLnRpdGxlID0gdGl0bGU7XG5cdFx0c2V0SGlzdG9yeShlbnRyaWVzKTtcblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgZmF2aWNvbiBvZiBhbiBleGlzdGluZyBoaXN0b3J5IGVudHJ5LlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHdob3NlIGZhdmljb24gc2hvdWxkIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gZmF2aWNvbiBUaGUgZmF2aWNvbiBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIaXN0b3J5RmF2aWNvbih1cmw6IHN0cmluZywgZmF2aWNvbjogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IGVudHJpZXMgPSBnZXRIaXN0b3J5KCk7XG5cdGNvbnN0IGV4aXN0aW5nID0gZW50cmllcy5maW5kKChlKSA9PiBlLnVybCA9PT0gdXJsKTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHRleGlzdGluZy5mYXZpY29uID0gZmF2aWNvbjtcblx0XHRzZXRIaXN0b3J5KGVudHJpZXMpO1xuXHR9XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgc2luZ2xlIGhpc3RvcnkgZW50cnkgYnkgVVJMLlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIHJlbW92ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhpc3RvcnlFbnRyeSh1cmw6IHN0cmluZyk6IHZvaWQge1xuXHRjb25zdCBlbnRyaWVzID0gZ2V0SGlzdG9yeSgpLmZpbHRlcigoZSkgPT4gZS51cmwgIT09IHVybCk7XG5cdHNldEhpc3RvcnkoZW50cmllcyk7XG59XG5cbi8qKlxuICogQ2xlYXIgYWxsIG5hdmlnYXRpb24gaGlzdG9yeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFySGlzdG9yeSgpOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oSElTVE9SWV9LRVkpO1xufVxuXG4vLyAtLSBBY3RpdmUgVmlld3MgKGxvY2FsU3RvcmFnZSkgLS1cblxuLyoqXG4gKiBMb2FkIHRoZSBhY3RpdmUgdmlld3MgbWFwICh2aWV3IG5hbWUgLT4gY3VycmVudCBVUkwpLlxuICogQHJldHVybnMgQW4gb2JqZWN0IG1hcHBpbmcgdmlldyBuYW1lcyB0byB0aGVpciBjdXJyZW50IFVSTHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVWaWV3cygpOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQUNUSVZFX1ZJRVdTX0tFWSk7XG5cdFx0cmV0dXJuIHJhdyA/IChKU09OLnBhcnNlKHJhdykgYXMgeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0pIDoge307XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiB7fTtcblx0fVxufVxuXG4vKipcbiAqIFNhdmUgdGhlIGFjdGl2ZSB2aWV3cyBtYXAuXG4gKiBAcGFyYW0gdmlld3MgQW4gb2JqZWN0IG1hcHBpbmcgdmlldyBuYW1lcyB0byB0aGVpciBjdXJyZW50IFVSTHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVWaWV3cyh2aWV3czogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oQUNUSVZFX1ZJRVdTX0tFWSwgSlNPTi5zdHJpbmdpZnkodmlld3MpKTtcbn1cblxuLy8gLS0gRm9jdXNlZCBXaW5kb3cgU3RhY2sgKGxvY2FsU3RvcmFnZSwgY2xlYXJlZCBvbiBwbGF0Zm9ybSBzdGFydHVwKSAtLVxuXG4vKipcbiAqIExvYWQgdGhlIGZvY3VzZWQgd2luZG93IHN0YWNrIChtb3N0IHJlY2VudCBmaXJzdCkuXG4gKiBAcmV0dXJucyBBcnJheSBvZiB3aW5kb3cgaWRlbnRpdGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZvY3VzZWRXaW5kb3dTdGFjaygpOiBPcGVuRmluLklkZW50aXR5W10ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWSk7XG5cdFx0cmV0dXJuIHJhdyA/IChKU09OLnBhcnNlKHJhdykgYXMgT3BlbkZpbi5JZGVudGl0eVtdKSA6IFtdO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gW107XG5cdH1cbn1cblxuLyoqXG4gKiBQdXNoIGEgd2luZG93IHRvIHRoZSB0b3Agb2YgdGhlIGZvY3VzIHN0YWNrLlxuICogRGVkdXBsaWNhdGVzIGFuZCBjYXBzIHRoZSBzdGFjayBhdCB0aGUgY29uZmlndXJlZCBtYXhpbXVtLlxuICogQHBhcmFtIGlkZW50aXR5IFRoZSB3aW5kb3cgaWRlbnRpdHkgdG8gcHVzaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2hGb2N1c2VkV2luZG93KGlkZW50aXR5OiBPcGVuRmluLklkZW50aXR5KTogdm9pZCB7XG5cdGxldCBzdGFjayA9IGdldEZvY3VzZWRXaW5kb3dTdGFjaygpLmZpbHRlcigodykgPT4gdy5uYW1lICE9PSBpZGVudGl0eS5uYW1lKTtcblx0c3RhY2sudW5zaGlmdChpZGVudGl0eSk7XG5cdGlmIChzdGFjay5sZW5ndGggPiBNQVhfRk9DVVNFRF9TVEFDSykge1xuXHRcdHN0YWNrID0gc3RhY2suc2xpY2UoMCwgTUFYX0ZPQ1VTRURfU1RBQ0spO1xuXHR9XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKEZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWSwgSlNPTi5zdHJpbmdpZnkoc3RhY2spKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSB3aW5kb3cgZnJvbSB0aGUgZm9jdXMgc3RhY2sgKGUuZy4gd2hlbiBpdCBpcyBjbG9zZWQpLlxuICogQHBhcmFtIHdpbmRvd05hbWUgVGhlIG5hbWUgb2YgdGhlIHdpbmRvdyB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2N1c2VkV2luZG93KHdpbmRvd05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRjb25zdCBzdGFjayA9IGdldEZvY3VzZWRXaW5kb3dTdGFjaygpLmZpbHRlcigodykgPT4gdy5uYW1lICE9PSB3aW5kb3dOYW1lKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oRk9DVVNFRF9XSU5ET1dfU1RBQ0tfS0VZLCBKU09OLnN0cmluZ2lmeShzdGFjaykpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBmb2N1c2VkIHdpbmRvdyBzdGFjayAoY2FsbGVkIG9uIHBsYXRmb3JtIHN0YXJ0dXAgdG8gcmVzZXQgc3RhdGUpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb2N1c2VkV2luZG93U3RhY2soKTogdm9pZCB7XG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBtb3N0IHJlY2VudGx5IGZvY3VzZWQgd2luZG93IGlkZW50aXR5LCBvciBudWxsIGlmIHRoZSBzdGFjayBpcyBlbXB0eS5cbiAqIEByZXR1cm5zIFRoZSB3aW5kb3cgaWRlbnRpdHkgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0Rm9jdXNlZFdpbmRvdygpOiBPcGVuRmluLklkZW50aXR5IHwgbnVsbCB7XG5cdGNvbnN0IHN0YWNrID0gZ2V0Rm9jdXNlZFdpbmRvd1N0YWNrKCk7XG5cdHJldHVybiBzdGFjay5sZW5ndGggPiAwID8gc3RhY2tbMF0gOiBudWxsO1xufVxuXG4vLyAtLSBDaGFuZ2Ugbm90aWZpY2F0aW9ucyAtLVxuXG4vKiogVGhlIHN0b3JhZ2Uga2V5cyB0aGF0IG1heSB0cmlnZ2VyIGNoYW5nZSBub3RpZmljYXRpb25zLiAqL1xuZXhwb3J0IHR5cGUgU3RvcmFnZUtleSA9IFwiaGlzdG9yeVwiIHwgXCJhY3RpdmVWaWV3c1wiIHwgXCJmb2N1c2VkV2luZG93U3RhY2tcIjtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRoYXQgZmlyZXMgd2hlbiBzdG9yYWdlIGlzIG1vZGlmaWVkIGJ5IGFub3RoZXIgc2FtZS1vcmlnaW4gd2luZG93LlxuICogVXNlcyB0aGUgYnJvd3NlcidzIFwic3RvcmFnZVwiIGV2ZW50IHdoaWNoIGZpcmVzIG9uIG90aGVyIHdpbmRvd3Mgc2hhcmluZyB0aGUgc2FtZSBvcmlnaW4uXG4gKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGVkIHdpdGggdGhlIGxvZ2ljYWwga2V5IG5hbWUgdGhhdCBjaGFuZ2VkLlxuICogQHJldHVybnMgQSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgbGlzdGVuZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvblN0b3JhZ2VDaGFuZ2VkKGNhbGxiYWNrOiAoa2V5OiBTdG9yYWdlS2V5KSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG5cdGNvbnN0IGtleU1hcDogeyBbcmF3S2V5OiBzdHJpbmddOiBTdG9yYWdlS2V5IH0gPSB7XG5cdFx0W0hJU1RPUllfS0VZXTogXCJoaXN0b3J5XCIsXG5cdFx0W0FDVElWRV9WSUVXU19LRVldOiBcImFjdGl2ZVZpZXdzXCIsXG5cdFx0W0ZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWV06IFwiZm9jdXNlZFdpbmRvd1N0YWNrXCJcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyBzdG9yYWdlIGV2ZW50cyBhbmQgbWFwcyByYXcga2V5cyB0byBsb2dpY2FsIGtleSBuYW1lcy5cblx0ICogQHBhcmFtIGV2ZW50IFRoZSBzdG9yYWdlIGV2ZW50IGZyb20gYW5vdGhlciB3aW5kb3cuXG5cdCAqL1xuXHRmdW5jdGlvbiBoYW5kbGVyKGV2ZW50OiBTdG9yYWdlRXZlbnQpOiB2b2lkIHtcblx0XHRpZiAoZXZlbnQua2V5ICYmIGtleU1hcFtldmVudC5rZXldKSB7XG5cdFx0XHRjYWxsYmFjayhrZXlNYXBbZXZlbnQua2V5XSk7XG5cdFx0fVxuXHR9XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGhhbmRsZXIpO1xuXHRyZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGhhbmRsZXIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcbmltcG9ydCB7XG5cdGdldEhpc3RvcnksXG5cdHJlbW92ZUhpc3RvcnlFbnRyeSxcblx0Y2xlYXJIaXN0b3J5IGFzIHN0b3JhZ2VDbGVhckhpc3RvcnksXG5cdGdldEFjdGl2ZVZpZXdzLFxuXHRnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcblx0b25TdG9yYWdlQ2hhbmdlZFxufSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbi8qKlxuICogVVJMIE5hdmlnYXRvciBVSSAtLSBwcm92aWRlcyBhIENocm9tZS1saWtlIGFkZHJlc3MgYmFyIHdpdGggYXV0b2NvbXBsZXRlLFxuICogaGlzdG9yeSBicm93c2luZywgYW5kIHRoZSBhYmlsaXR5IHRvIG9wZW4gVVJMcyBpbiBuZXcgb3IgZXhpc3Rpbmcgd2luZG93cy5cbiAqXG4gKiBSZWFkcyBuYXZpZ2F0aW9uIGhpc3RvcnksIGFjdGl2ZSB2aWV3IHN0YXRlLCBhbmQgbGFzdCBmb2N1c2VkIHdpbmRvdyBmcm9tXG4gKiB0aGUgc3RvcmFnZSBtb2R1bGUgKHBlcnNpc3RlZCBieSB0aGUgcGxhdGZvcm0gcHJvdmlkZXIpLiBMaXN0ZW5zIHRvIHN0b3JhZ2VcbiAqIGNoYW5nZSBldmVudHMgdG8gcmVhY3RpdmVseSB1cGRhdGUgdGhlIFVJIC0tIG5vIGRpcmVjdCBPcGVuRmluIGV2ZW50IGxpc3RlbmVyc1xuICogYXJlIG5lZWRlZCBpbiB0aGlzIG1vZHVsZS5cbiAqL1xuXG5jb25zdCBNQVhfU1VHR0VTVElPTlMgPSA4O1xuY29uc3QgQ09MTEFQU0VEX0hFSUdIVCA9IDIyNTtcbmNvbnN0IEVYUEFOREVEX0hFSUdIVCA9IDU1MDtcblxubGV0IHVybElucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5sZXQgYXV0b2NvbXBsZXRlTGlzdDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbmxldCBoaXN0b3J5TGlzdEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5sZXQgc2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggPSAtMTtcbmxldCBzdGFzaGVkUXVlcnkgPSBcIlwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdGluaXREb20oKTtcblx0b25TdG9yYWdlQ2hhbmdlZCgoa2V5KSA9PiB7XG5cdFx0aWYgKGtleSA9PT0gXCJoaXN0b3J5XCIgfHwga2V5ID09PSBcImFjdGl2ZVZpZXdzXCIpIHtcblx0XHRcdGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjaGlzdG9yeS1wYW5lbFwiKTtcblx0XHRcdGlmIChwYW5lbCAmJiBwYW5lbC5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuXHRcdFx0XHRyZW5kZXJIaXN0b3J5KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG4vLyAtLSBET00gaW5pdGlhbGl6YXRpb24gLS1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gY29tcG9uZW50cyBhbmQgd2lyZSB1cCBldmVudCBoYW5kbGVycy5cbiAqL1xuZnVuY3Rpb24gaW5pdERvbSgpOiB2b2lkIHtcblx0dXJsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3VybC1pbnB1dFwiKTtcblx0YXV0b2NvbXBsZXRlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2F1dG9jb21wbGV0ZS1saXN0XCIpO1xuXHRoaXN0b3J5TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNoaXN0b3J5LWxpc3RcIik7XG5cblx0aWYgKHVybElucHV0KSB7XG5cdFx0dXJsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlSW5wdXRLZXlEb3duKTtcblx0XHR1cmxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXRDaGFuZ2UpO1xuXHRcdHVybElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBoYW5kbGVJbnB1dENoYW5nZSk7XG5cdFx0dXJsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGhpZGVBdXRvY29tcGxldGUoKTtcblx0XHRcdH0sIDE1MCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5HbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1nb1wiKTtcblx0aWYgKGJ0bkdvKSB7XG5cdFx0YnRuR28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdG5hdmlnYXRlVG9JbnB1dCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdExhdW5jaE1lbnUoKTtcblxuXHRjb25zdCBidG5DbGVhckhpc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tY2xlYXItaGlzdG9yeVwiKTtcblx0aWYgKGJ0bkNsZWFySGlzdG9yeSkge1xuXHRcdGJ0bkNsZWFySGlzdG9yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0c3RvcmFnZUNsZWFySGlzdG9yeSgpO1xuXHRcdFx0cmVuZGVySGlzdG9yeSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuVG9nZ2xlSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi10b2dnbGUtaGlzdG9yeVwiKTtcblx0aWYgKGJ0blRvZ2dsZUhpc3RvcnkpIHtcblx0XHRidG5Ub2dnbGVIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHR0b2dnbGVIaXN0b3J5UGFuZWwoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk1pbmltaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuLW1pbmltaXplXCIpO1xuXHRpZiAoYnRuTWluaW1pemUpIHtcblx0XHRidG5NaW5pbWl6ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ld2xpbmUtcGVyLWNoYWluZWQtY2FsbFxuXHRcdFx0ZmluLldpbmRvdy5nZXRDdXJyZW50U3luYygpLm1pbmltaXplKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1jbG9zZVwiKTtcblx0aWYgKGJ0bkNsb3NlKSB7XG5cdFx0YnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXdsaW5lLXBlci1jaGFpbmVkLWNhbGxcblx0XHRcdGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpLnF1aXQoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlckhpc3RvcnkoKTtcbn1cblxuLy8gLS0gSGlzdG9yeSBwYW5lbCB0b2dnbGUgLS1cblxuLyoqXG4gKiBUb2dnbGUgdGhlIGhpc3RvcnkgcGFuZWwgdmlzaWJpbGl0eSBhbmQgcmVzaXplIHRoZSB3aW5kb3cgYWNjb3JkaW5nbHkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHRvZ2dsZUhpc3RvcnlQYW5lbCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNoaXN0b3J5LXBhbmVsXCIpO1xuXHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tdG9nZ2xlLWhpc3RvcnlcIik7XG5cdGlmICghcGFuZWwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc1Zpc2libGUgPSBwYW5lbC5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcblx0Y29uc3Qgd2luID0gZmluLldpbmRvdy5nZXRDdXJyZW50U3luYygpO1xuXHRjb25zdCBib3VuZHMgPSBhd2FpdCB3aW4uZ2V0Qm91bmRzKCk7XG5cblx0aWYgKGlzVmlzaWJsZSkge1xuXHRcdHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRidG4/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0YXdhaXQgd2luLnJlc2l6ZVRvKGJvdW5kcy53aWR0aCwgQ09MTEFQU0VEX0hFSUdIVCwgXCJ0b3AtbGVmdFwiKTtcblx0fSBlbHNlIHtcblx0XHRwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdFx0YnRuPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdHJlbmRlckhpc3RvcnkoKTtcblx0XHRhd2FpdCB3aW4ucmVzaXplVG8oYm91bmRzLndpZHRoLCBFWFBBTkRFRF9IRUlHSFQsIFwidG9wLWxlZnRcIik7XG5cdH1cbn1cblxuLy8gLS0gTGF1bmNoIG1lbnUgLS1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBsYXVuY2ggbWVudSBkcm9wZG93biBmb3IgY2hvb3Npbmcgd2hlcmUgdG8gb3BlbiBhIFVSTC5cbiAqL1xuZnVuY3Rpb24gaW5pdExhdW5jaE1lbnUoKTogdm9pZCB7XG5cdGNvbnN0IGJ0blRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tbGF1bmNoLW1lbnVcIik7XG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNsYXVuY2gtbWVudVwiKTtcblx0Y29uc3QgbGFzdFdpbmRvd0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNsYXVuY2gtbGFzdC13aW5kb3dcIik7XG5cblx0aWYgKCFidG5UcmlnZ2VyIHx8ICFtZW51KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YnRuVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IGlzT3BlbiA9IG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzaWJsZVwiKTtcblx0XHRpZiAoaXNPcGVuKSB7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuXHRcdFx0YnRuVHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYXN0V2luZG93SXRlbT8uY2xhc3NMaXN0LnRvZ2dsZShcImRpc2FibGVkXCIsICFnZXRMYXN0Rm9jdXNlZFdpbmRvdygpKTtcblx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG5cdFx0XHRidG5UcmlnZ2VyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0fVxuXHR9KTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRjb25zdCBsYXVuY2hHcm91cCA9IGJ0blRyaWdnZXIucGFyZW50RWxlbWVudDtcblx0XHRpZiAobGF1bmNoR3JvdXAgJiYgIWxhdW5jaEdyb3VwLmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpKSB7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuXHRcdFx0YnRuVHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0fSk7XG5cblx0bWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRjb25zdCBpdGVtID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0PEhUTUxFbGVtZW50PihcIi5sYXVuY2gtbWVudS1pdGVtXCIpO1xuXHRcdGlmICghaXRlbSB8fCBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWN0aW9uID0gaXRlbS5kYXRhc2V0LmFjdGlvbjtcblx0XHRjb25zdCB1cmwgPSByZXNvbHZlSW5wdXRVcmwoKTtcblx0XHRpZiAoIXVybCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG5cdFx0YnRuVHJpZ2dlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdGhpZGVBdXRvY29tcGxldGUoKTtcblxuXHRcdGlmIChhY3Rpb24gPT09IFwibmV3LXdpbmRvd1wiKSB7XG5cdFx0XHRhd2FpdCBvcGVuSW5OZXdXaW5kb3codXJsKTtcblx0XHRcdGlmICh1cmxJbnB1dCkge1xuXHRcdFx0XHR1cmxJbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09IFwibGFzdC13aW5kb3dcIikge1xuXHRcdFx0YXdhaXQgb3BlbkluTGFzdEZvY3VzZWRXaW5kb3codXJsKTtcblx0XHRcdGlmICh1cmxJbnB1dCkge1xuXHRcdFx0XHR1cmxJbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuLy8gLS0gSW5wdXQgaGFuZGxpbmcgLS1cblxuLyoqXG4gKiBIYW5kbGUga2V5Ym9hcmQgZXZlbnRzIG9uIHRoZSBVUkwgaW5wdXQgZm9yIEVudGVyIGFuZCBhcnJvdyBrZXkgbmF2aWdhdGlvbi5cbiAqIEBwYXJhbSBlIFRoZSBrZXlib2FyZCBldmVudC5cbiAqL1xuZnVuY3Rpb24gaGFuZGxlSW5wdXRLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcblx0Y29uc3QgaXRlbXMgPSBhdXRvY29tcGxldGVMaXN0Py5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5hdXRvY29tcGxldGUtaXRlbVwiKTtcblx0Y29uc3Qgc3VnZ2VzdGlvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gaXRlbXMgPz8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIubm9vcFwiKTtcblxuXHRpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID09PSAtMSAmJiB1cmxJbnB1dCkge1xuXHRcdFx0c3Rhc2hlZFF1ZXJ5ID0gdXJsSW5wdXQudmFsdWU7XG5cdFx0fVxuXHRcdHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID0gTWF0aC5taW4oc2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggKyAxLCBzdWdnZXN0aW9ucy5sZW5ndGggLSAxKTtcblx0XHR1cGRhdGVTdWdnZXN0aW9uSGlnaGxpZ2h0KHN1Z2dlc3Rpb25zKTtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggPSBNYXRoLm1heChzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleCAtIDEsIC0xKTtcblx0XHR1cGRhdGVTdWdnZXN0aW9uSGlnaGxpZ2h0KHN1Z2dlc3Rpb25zKTtcblx0fSBlbHNlIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmIChzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleCA+PSAwICYmIHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4IDwgc3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZCA9IHN1Z2dlc3Rpb25zW3NlbGVjdGVkU3VnZ2VzdGlvbkluZGV4XTtcblx0XHRcdGNvbnN0IHVybCA9IHNlbGVjdGVkLmRhdGFzZXQudXJsO1xuXHRcdFx0aWYgKHVybCAmJiB1cmxJbnB1dCkge1xuXHRcdFx0XHR1cmxJbnB1dC52YWx1ZSA9IHVybDtcblx0XHRcdH1cblx0XHR9XG5cdFx0bmF2aWdhdGVUb0lucHV0KCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcblx0XHRpZiAoc2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggPj0gMCkge1xuXHRcdFx0c2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggPSAtMTtcblx0XHRcdHVwZGF0ZVN1Z2dlc3Rpb25IaWdobGlnaHQoc3VnZ2VzdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoaWRlQXV0b2NvbXBsZXRlKCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogSGFuZGxlIGlucHV0IGNoYW5nZXMgdG8gc2hvdy91cGRhdGUgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93bi5cbiAqIFJlcXVpcmVzIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBiZWZvcmUgc2hvd2luZyBzdWdnZXN0aW9ucy5cbiAqL1xuZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoKTogdm9pZCB7XG5cdGNvbnN0IHF1ZXJ5ID0gdXJsSW5wdXQ/LnZhbHVlLnRyaW0oKSA/PyBcIlwiO1xuXHRpZiAocXVlcnkubGVuZ3RoIDwgMikge1xuXHRcdGhpZGVBdXRvY29tcGxldGUoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0c2hvd1N1Z2dlc3Rpb25zKHF1ZXJ5KTtcbn1cblxuLy8gLS0gTmF2aWdhdGlvbiAtLVxuXG4vKipcbiAqIFJlc29sdmUgdGhlIGN1cnJlbnQgaW5wdXQgdmFsdWUgdG8gYSBuYXZpZ2FibGUgVVJMLlxuICogQHJldHVybnMgVGhlIHJlc29sdmVkIFVSTCwgb3IgbnVsbCBpZiBpbnB1dCBpcyBlbXB0eS5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUlucHV0VXJsKCk6IHN0cmluZyB8IG51bGwge1xuXHRpZiAoIXVybElucHV0KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgdXJsID0gdXJsSW5wdXQudmFsdWUudHJpbSgpO1xuXHRpZiAoIXVybCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QodXJsKSkge1xuXHRcdC8vIEFscmVhZHkgaGFzIGEgcHJvdG9jb2wgLS0gdXNlIGFzLWlzLlxuXHR9IGVsc2UgaWYgKGxvb2tzTGlrZVVybCh1cmwpKSB7XG5cdFx0dXJsID0gYGh0dHBzOi8vJHt1cmx9YDtcblx0fSBlbHNlIHtcblx0XHR1cmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudCh1cmwpfWA7XG5cdH1cblxuXHRyZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIE5hdmlnYXRlIHRvIHRoZSBVUkwgY3VycmVudGx5IGluIHRoZSBpbnB1dCBmaWVsZCBieSBvcGVuaW5nIGEgbmV3IHBsYXRmb3JtIHdpbmRvdy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVUb0lucHV0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB1cmwgPSByZXNvbHZlSW5wdXRVcmwoKTtcblx0aWYgKCF1cmwgfHwgIXVybElucHV0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dXJsSW5wdXQudmFsdWUgPSB1cmw7XG5cdGhpZGVBdXRvY29tcGxldGUoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IG9wZW5Jbk5ld1dpbmRvdyh1cmwpO1xuXHRcdHVybElucHV0LnZhbHVlID0gXCJcIjtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgd2luZG93OlwiLCBlcnIpO1xuXHR9XG59XG5cbi8qKlxuICogT3BlbiBhIFVSTCBpbiBhIGJyYW5kIG5ldyBwbGF0Zm9ybSB3aW5kb3cgY29udGFpbmluZyBhIHNpbmdsZSB2aWV3LlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIG5hdmlnYXRlIHRvLlxuICovXG5hc3luYyBmdW5jdGlvbiBvcGVuSW5OZXdXaW5kb3codXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0YXdhaXQgcGxhdGZvcm0uY3JlYXRlV2luZG93KHtcblx0XHRsYXlvdXQ6IHtcblx0XHRcdGNvbnRlbnQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHR5cGU6IFwic3RhY2tcIixcblx0XHRcdFx0XHRjb250ZW50OiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29tcG9uZW50XCIsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudE5hbWU6IFwidmlld1wiLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnRTdGF0ZToge1xuXHRcdFx0XHRcdFx0XHRcdHVybFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHR9IGFzIE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zKTtcbn1cblxuLyoqXG4gKiBPcGVuIGEgVVJMIGFzIGEgbmV3IHZpZXcgaW4gdGhlIGxhc3QgZm9jdXNlZCB3aW5kb3cgKHJlYWQgZnJvbSBzdG9yYWdlKS5cbiAqIEZhbGxzIGJhY2sgdG8gb3BlbmluZyBhIG5ldyB3aW5kb3cgaWYgbm8gbGFzdCBmb2N1c2VkIHdpbmRvdyBpcyBzdG9yZWQuXG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gbmF2aWdhdGUgdG8uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG9wZW5Jbkxhc3RGb2N1c2VkV2luZG93KHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGlkZW50aXR5ID0gZ2V0TGFzdEZvY3VzZWRXaW5kb3coKTtcblxuXHRpZiAoaWRlbnRpdHkpIHtcblx0XHRjb25zdCBwbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRcdGNvbnN0IHRhcmdldFdpbiA9IGZpbi5XaW5kb3cud3JhcFN5bmMoaWRlbnRpdHkpO1xuXHRcdGF3YWl0IHBsYXRmb3JtLmNyZWF0ZVZpZXcoeyB1cmwgfSBhcyBPcGVuRmluLlZpZXdDcmVhdGlvbk9wdGlvbnMsIGlkZW50aXR5KTtcblx0XHRjb25zdCBzdGF0ZSA9IGF3YWl0IHRhcmdldFdpbi5nZXRTdGF0ZSgpO1xuXHRcdGlmIChzdGF0ZSA9PT0gXCJtaW5pbWl6ZWRcIikge1xuXHRcdFx0YXdhaXQgdGFyZ2V0V2luLnJlc3RvcmUoKTtcblx0XHR9XG5cdFx0YXdhaXQgdGFyZ2V0V2luLnNldEFzRm9yZWdyb3VuZCgpO1xuXHR9IGVsc2Uge1xuXHRcdGF3YWl0IG9wZW5Jbk5ld1dpbmRvdyh1cmwpO1xuXHR9XG59XG5cbi8vIC0tIFZpZXcgc3dpdGNoaW5nIC0tXG5cbi8qKlxuICogRmluZCB0aGUgaWRlbnRpdHkgb2YgYW4gYWN0aXZlIHZpZXcgY3VycmVudGx5IGRpc3BsYXlpbmcgdGhlIGdpdmVuIFVSTCwgb3IgbnVsbCBpZiBub25lLlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIHNlYXJjaCBmb3IgYW1vbmcgYWN0aXZlIHZpZXdzLlxuICogQHJldHVybnMgVGhlIHZpZXcgaWRlbnRpdHkgaWYgZm91bmQsIG90aGVyd2lzZSBudWxsLlxuICovXG5mdW5jdGlvbiBmaW5kQWN0aXZlVmlld0ZvclVybCh1cmw6IHN0cmluZyk6IE9wZW5GaW4uSWRlbnRpdHkgfCBudWxsIHtcblx0Y29uc3QgYWN0aXZlVmlld3MgPSBnZXRBY3RpdmVWaWV3cygpO1xuXHRmb3IgKGNvbnN0IFt2aWV3TmFtZSwgdmlld1VybF0gb2YgT2JqZWN0LmVudHJpZXMoYWN0aXZlVmlld3MpKSB7XG5cdFx0aWYgKHZpZXdVcmwgPT09IHVybCkge1xuXHRcdFx0cmV0dXJuIHsgdXVpZDogZmluLm1lLnV1aWQsIG5hbWU6IHZpZXdOYW1lIH07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEZvY3VzIGFuIGV4aXN0aW5nIHZpZXcgYW5kIGJyaW5nIGl0cyBwYXJlbnQgd2luZG93IHRvIGZyb250LlxuICogQHBhcmFtIGlkZW50aXR5IFRoZSBpZGVudGl0eSBvZiB0aGUgdmlldyB0byBmb2N1cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc3dpdGNoVG9WaWV3KGlkZW50aXR5OiBPcGVuRmluLklkZW50aXR5KTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHZpZXcgPSBmaW4uVmlldy53cmFwU3luYyhpZGVudGl0eSk7XG5cdGNvbnN0IHdpbiA9IGF3YWl0IHZpZXcuZ2V0Q3VycmVudFdpbmRvdygpO1xuXHRjb25zdCBzdGF0ZSA9IGF3YWl0IHdpbi5nZXRTdGF0ZSgpO1xuXHRpZiAoc3RhdGUgPT09IFwibWluaW1pemVkXCIpIHtcblx0XHRhd2FpdCB3aW4ucmVzdG9yZSgpO1xuXHR9XG5cdGF3YWl0IHZpZXcuZm9jdXMoKTtcblx0YXdhaXQgd2luLnNldEFzRm9yZWdyb3VuZCgpO1xufVxuXG4vLyAtLSBBdXRvY29tcGxldGUgLS1cblxuLyoqXG4gKiBTaG93IGF1dG9jb21wbGV0ZSBzdWdnZXN0aW9ucyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkgYWdhaW5zdCBib3RoIFVSTCBhbmQgdGl0bGUuXG4gKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCB0ZXh0IHRvIGZpbHRlciBoaXN0b3J5IGJ5LlxuICovXG5mdW5jdGlvbiBzaG93U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuXHRpZiAoIWF1dG9jb21wbGV0ZUxpc3QpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsb3dlclF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgZW50cmllcyA9IGdldEhpc3RvcnkoKVxuXHRcdC5maWx0ZXIoKGUpID0+IGUudXJsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSkgfHwgZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpKVxuXHRcdC5zb3J0KChhLCBiKSA9PiBiLnZpc2l0Q291bnQgLSBhLnZpc2l0Q291bnQpXG5cdFx0LnNsaWNlKDAsIE1BWF9TVUdHRVNUSU9OUyk7XG5cblx0Y29uc3QgaXNTZWFyY2hRdWVyeSA9ICFsb29rc0xpa2VVcmwocXVlcnkpICYmICEvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHF1ZXJ5KTtcblx0aWYgKGVudHJpZXMubGVuZ3RoID09PSAwICYmICFpc1NlYXJjaFF1ZXJ5KSB7XG5cdFx0aGlkZUF1dG9jb21wbGV0ZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID0gLTE7XG5cdGF1dG9jb21wbGV0ZUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHQvLyBJZiB0aGUgcXVlcnkgZG9lc24ndCBsb29rIGxpa2UgYSBVUkwsIGFkZCBhIFwiU2VhcmNoIEdvb2dsZVwiIG9wdGlvbiBhdCB0aGUgdG9wIGFuZCBwcmUtc2VsZWN0IGl0LlxuXHRpZiAoaXNTZWFyY2hRdWVyeSkge1xuXHRcdHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID0gMDtcblx0XHRzdGFzaGVkUXVlcnkgPSBxdWVyeTtcblx0XHRjb25zdCBzZWFyY2hJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRzZWFyY2hJdGVtLmNsYXNzTmFtZSA9IFwiYXV0b2NvbXBsZXRlLWl0ZW0gYXV0b2NvbXBsZXRlLXNlYXJjaCBzZWxlY3RlZFwiO1xuXHRcdHNlYXJjaEl0ZW0uZGF0YXNldC51cmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YDtcblxuXHRcdGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRzZWFyY2hJY29uLmNsYXNzTmFtZSA9IFwiYXV0b2NvbXBsZXRlLXNlYXJjaC1pY29uXCI7XG5cdFx0c2VhcmNoSWNvbi5pbm5lckhUTUwgPVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9xdW90ZXNcblx0XHRcdCc8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiICcgK1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9xdW90ZXNcblx0XHRcdCdzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+JyArXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3F1b3Rlc1xuXHRcdFx0JzxjaXJjbGUgY3g9XCIxMVwiIGN5PVwiMTFcIiByPVwiOFwiLz48bGluZSB4MT1cIjIxXCIgeTE9XCIyMVwiIHgyPVwiMTYuNjVcIiB5Mj1cIjE2LjY1XCIvPjwvc3ZnPic7XG5cdFx0c2VhcmNoSXRlbS5hcHBlbmQoc2VhcmNoSWNvbik7XG5cblx0XHRjb25zdCBzZWFyY2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0c2VhcmNoVGV4dC5jbGFzc05hbWUgPSBcImF1dG9jb21wbGV0ZS1zZWFyY2gtbGFiZWxcIjtcblx0XHRzZWFyY2hUZXh0LmlubmVySFRNTCA9IGBTZWFyY2ggR29vZ2xlIGZvciA8c3Ryb25nPiR7ZXNjYXBlSHRtbChxdWVyeSl9PC9zdHJvbmc+YDtcblx0XHRzZWFyY2hJdGVtLmFwcGVuZChzZWFyY2hUZXh0KTtcblxuXHRcdHNlYXJjaEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYgKHVybElucHV0KSB7XG5cdFx0XHRcdHVybElucHV0LnZhbHVlID0gcXVlcnk7XG5cdFx0XHR9XG5cdFx0XHRuYXZpZ2F0ZVRvSW5wdXQoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblxuXHRcdGF1dG9jb21wbGV0ZUxpc3QuYXBwZW5kKHNlYXJjaEl0ZW0pO1xuXHR9XG5cblx0Y29uc3QgaGFzTGFzdFdpbmRvdyA9IEJvb2xlYW4oZ2V0TGFzdEZvY3VzZWRXaW5kb3coKSk7XG5cblx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0Y29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0aXRlbS5jbGFzc05hbWUgPSBcImF1dG9jb21wbGV0ZS1pdGVtXCI7XG5cdFx0aXRlbS5kYXRhc2V0LnVybCA9IGVudHJ5LnVybDtcblxuXHRcdGlmIChlbnRyeS5mYXZpY29uKSB7XG5cdFx0XHRjb25zdCBmYXZpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdGZhdmljb25JbWcuY2xhc3NOYW1lID0gXCJhdXRvY29tcGxldGUtZmF2aWNvblwiO1xuXHRcdFx0ZmF2aWNvbkltZy5zcmMgPSBlbnRyeS5mYXZpY29uO1xuXHRcdFx0ZmF2aWNvbkltZy5hbHQgPSBcIlwiO1xuXHRcdFx0aXRlbS5hcHBlbmQoZmF2aWNvbkltZyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGV4dENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGV4dENvbC5jbGFzc05hbWUgPSBcImF1dG9jb21wbGV0ZS10ZXh0XCI7XG5cblx0XHRpZiAoZW50cnkudGl0bGUpIHtcblx0XHRcdGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0dGl0bGVTcGFuLmNsYXNzTmFtZSA9IFwiYXV0b2NvbXBsZXRlLXRpdGxlXCI7XG5cdFx0XHR0aXRsZVNwYW4uaW5uZXJIVE1MID0gaGlnaGxpZ2h0TWF0Y2goZW50cnkudGl0bGUsIHF1ZXJ5KTtcblx0XHRcdHRleHRDb2wuYXBwZW5kKHRpdGxlU3Bhbik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdHVybFNwYW4uY2xhc3NOYW1lID0gXCJ1cmxcIjtcblx0XHR1cmxTcGFuLmlubmVySFRNTCA9IGhpZ2hsaWdodE1hdGNoKGVudHJ5LnVybCwgcXVlcnkpO1xuXHRcdHRleHRDb2wuYXBwZW5kKHVybFNwYW4pO1xuXG5cdFx0Y29uc3QgY291bnRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0Y291bnRTcGFuLmNsYXNzTmFtZSA9IFwidmlzaXQtY291bnRcIjtcblx0XHRjb3VudFNwYW4udGV4dENvbnRlbnQgPSBgJHtlbnRyeS52aXNpdENvdW50fSB2aXNpdCR7ZW50cnkudmlzaXRDb3VudCAhPT0gMSA/IFwic1wiIDogXCJcIn1gO1xuXG5cdFx0Y29uc3QgYWN0aXZlVmlldyA9IGZpbmRBY3RpdmVWaWV3Rm9yVXJsKGVudHJ5LnVybCk7XG5cblx0XHRpdGVtLmFwcGVuZCh0ZXh0Q29sLCBjb3VudFNwYW4pO1xuXG5cdFx0aWYgKGFjdGl2ZVZpZXcpIHtcblx0XHRcdGNvbnN0IHN3aXRjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRzd2l0Y2hCdG4uY2xhc3NOYW1lID0gXCJidG4tc3dpdGNoLXRhYlwiO1xuXHRcdFx0c3dpdGNoQnRuLnRleHRDb250ZW50ID0gXCJTd2l0Y2ggdG8gdGFiXCI7XG5cdFx0XHRzd2l0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGhpZGVBdXRvY29tcGxldGUoKTtcblx0XHRcdFx0c3dpdGNoVG9WaWV3KGFjdGl2ZVZpZXcpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdFx0fSk7XG5cdFx0XHRpdGVtLmFwcGVuZChzd2l0Y2hCdG4pO1xuXHRcdH1cblxuXHRcdGlmIChoYXNMYXN0V2luZG93KSB7XG5cdFx0XHRjb25zdCBvcGVuTGFzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRvcGVuTGFzdEJ0bi5jbGFzc05hbWUgPSBcImJ0bi1vcGVuLWxhc3RcIjtcblx0XHRcdG9wZW5MYXN0QnRuLnRpdGxlID0gXCJPcGVuIGluIGxhc3QgZm9jdXNlZCB3aW5kb3dcIjtcblx0XHRcdG9wZW5MYXN0QnRuLmlubmVySFRNTCA9IFtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9xdW90ZXNcblx0XHRcdFx0Jzxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj4nLFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3F1b3Rlc1xuXHRcdFx0XHQnPHBhdGggZD1cIk0xIDNhMSAxIDAgMCAxIDEtMWg1djFIMnY5aDV2MUgyYTEgMSAwIDAgMS0xLTFWM3ptNy0xaDVhMSAxIDAgMCAxIDEgMXY5YTEgMSAwIDAgMS0xIDFIOHYtMWg1VjNIOFYyelwiLz4nLFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3F1b3Rlc1xuXHRcdFx0XHQnPHBhdGggZD1cIk01IDguNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAwIDFoLTVhLjUuNSAwIDAgMS0uNS0uNXpcIi8+PC9zdmc+J1xuXHRcdFx0XS5qb2luKFwiXCIpO1xuXHRcdFx0b3Blbkxhc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGhpZGVBdXRvY29tcGxldGUoKTtcblx0XHRcdFx0YXdhaXQgb3BlbkluTGFzdEZvY3VzZWRXaW5kb3coZW50cnkudXJsKTtcblx0XHRcdFx0aWYgKHVybElucHV0KSB7XG5cdFx0XHRcdFx0dXJsSW5wdXQudmFsdWUgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGl0ZW0uYXBwZW5kKG9wZW5MYXN0QnRuKTtcblx0XHR9XG5cblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmICh1cmxJbnB1dCkge1xuXHRcdFx0XHR1cmxJbnB1dC52YWx1ZSA9IGVudHJ5LnVybDtcblx0XHRcdH1cblx0XHRcdG5hdmlnYXRlVG9JbnB1dCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXG5cdFx0YXV0b2NvbXBsZXRlTGlzdC5hcHBlbmQoaXRlbSk7XG5cdH1cblxuXHRhdXRvY29tcGxldGVMaXN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdGNvbnN0IHRvdGFsSXRlbXMgPSBlbnRyaWVzLmxlbmd0aCArIChpc1NlYXJjaFF1ZXJ5ID8gMSA6IDApO1xuXHRyZXNpemVGb3JBdXRvY29tcGxldGUodG90YWxJdGVtcykuY2F0Y2goY29uc29sZS5lcnJvcik7XG59XG5cbi8qKlxuICogSGlkZSB0aGUgYXV0b2NvbXBsZXRlIGRyb3Bkb3duLlxuICovXG5mdW5jdGlvbiBoaWRlQXV0b2NvbXBsZXRlKCk6IHZvaWQge1xuXHRpZiAoYXV0b2NvbXBsZXRlTGlzdCkge1xuXHRcdGF1dG9jb21wbGV0ZUxpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdGF1dG9jb21wbGV0ZUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblx0fVxuXHRzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleCA9IC0xO1xuXHRjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2hpc3RvcnktcGFuZWxcIik7XG5cdGNvbnN0IGhpc3RvcnlWaXNpYmxlID0gcGFuZWwgJiYgcGFuZWwuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG5cdGlmICghaGlzdG9yeVZpc2libGUpIHtcblx0XHRyZXNpemVUb0NvbGxhcHNlZCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHR9XG59XG5cbi8qKlxuICogUmVzaXplIHRoZSB3aW5kb3cgdG8gYWNjb21tb2RhdGUgYXV0b2NvbXBsZXRlIHJlc3VsdHMuXG4gKiBAcGFyYW0gaXRlbUNvdW50IFRoZSBudW1iZXIgb2YgYXV0b2NvbXBsZXRlIGl0ZW1zIGJlaW5nIHNob3duLlxuICovXG5hc3luYyBmdW5jdGlvbiByZXNpemVGb3JBdXRvY29tcGxldGUoaXRlbUNvdW50OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgd2luID0gZmluLldpbmRvdy5nZXRDdXJyZW50U3luYygpO1xuXHRjb25zdCBib3VuZHMgPSBhd2FpdCB3aW4uZ2V0Qm91bmRzKCk7XG5cdGNvbnN0IGl0ZW1IZWlnaHQgPSA0Mjtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1peGVkLW9wZXJhdG9yc1xuXHRjb25zdCB0YXJnZXRIZWlnaHQgPSBDT0xMQVBTRURfSEVJR0hUICsgTWF0aC5taW4oaXRlbUNvdW50LCBNQVhfU1VHR0VTVElPTlMpICogaXRlbUhlaWdodDtcblx0Y29uc3QgbmV3SGVpZ2h0ID0gTWF0aC5tYXgodGFyZ2V0SGVpZ2h0LCBib3VuZHMuaGVpZ2h0KTtcblx0aWYgKG5ld0hlaWdodCAhPT0gYm91bmRzLmhlaWdodCkge1xuXHRcdGF3YWl0IHdpbi5yZXNpemVUbyhib3VuZHMud2lkdGgsIG5ld0hlaWdodCwgXCJ0b3AtbGVmdFwiKTtcblx0fVxufVxuXG4vKipcbiAqIFJlc2l6ZSB0aGUgd2luZG93IGJhY2sgdG8gY29sbGFwc2VkIGhlaWdodC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVzaXplVG9Db2xsYXBzZWQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHdpbiA9IGZpbi5XaW5kb3cuZ2V0Q3VycmVudFN5bmMoKTtcblx0Y29uc3QgYm91bmRzID0gYXdhaXQgd2luLmdldEJvdW5kcygpO1xuXHRpZiAoYm91bmRzLmhlaWdodCAhPT0gQ09MTEFQU0VEX0hFSUdIVCkge1xuXHRcdGF3YWl0IHdpbi5yZXNpemVUbyhib3VuZHMud2lkdGgsIENPTExBUFNFRF9IRUlHSFQsIFwidG9wLWxlZnRcIik7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHZpc3VhbCBoaWdobGlnaHQgb24gYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb25zIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uLlxuICogQHBhcmFtIHN1Z2dlc3Rpb25zIFRoZSBsaXN0IG9mIHN1Z2dlc3Rpb24gZWxlbWVudHMgdG8gdXBkYXRlLlxuICovXG5mdW5jdGlvbiB1cGRhdGVTdWdnZXN0aW9uSGlnaGxpZ2h0KHN1Z2dlc3Rpb25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50Pik6IHZvaWQge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN1Z2dlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0c3VnZ2VzdGlvbnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIsIGkgPT09IHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4KTtcblx0fVxuXG5cdGlmIChzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleCA+PSAwICYmIHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4IDwgc3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSBzdWdnZXN0aW9uc1tzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleF07XG5cdFx0aWYgKHVybElucHV0KSB7XG5cdFx0XHR1cmxJbnB1dC52YWx1ZSA9IHNlbGVjdGVkLmRhdGFzZXQudXJsID8/IFwiXCI7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID09PSAtMSAmJiB1cmxJbnB1dCkge1xuXHRcdHVybElucHV0LnZhbHVlID0gc3Rhc2hlZFF1ZXJ5O1xuXHR9XG59XG5cbi8vIC0tIFV0aWxpdHkgLS1cblxuLyoqXG4gKiBSZXR1cm4gYW4gSFRNTCBzdHJpbmcgd2l0aCBhbGwgb2NjdXJyZW5jZXMgb2YgcXVlcnkgaGlnaGxpZ2h0ZWQgd2l0aCBhIDxtYXJrPiB0YWcuXG4gKiBAcGFyYW0gdGV4dCBUaGUgb3JpZ2luYWwgdGV4dCB0byBkaXNwbGF5LlxuICogQHBhcmFtIHF1ZXJ5IFRoZSBzZWFyY2ggcXVlcnkgdG8gaGlnaGxpZ2h0IHdpdGhpbiB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIEhUTUwgc3RyaW5nIHdpdGggbWF0Y2hlcyB3cmFwcGVkIGluIDxtYXJrPiB0YWdzLlxuICovXG5mdW5jdGlvbiBoaWdobGlnaHRNYXRjaCh0ZXh0OiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRpZiAoIXF1ZXJ5KSB7XG5cdFx0cmV0dXJuIGVzY2FwZUh0bWwodGV4dCk7XG5cdH1cblx0Y29uc3QgZXNjYXBlZCA9IGVzY2FwZUh0bWwodGV4dCk7XG5cdGNvbnN0IGVzY2FwZWRRdWVyeSA9IGVzY2FwZUh0bWwocXVlcnkpO1xuXHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCgke2VzY2FwZWRRdWVyeS5yZXBsYWNlKC9bJCgpKisuP1tcXFxcXFxdXnt8fV0vZywgXCJcXFxcJCZcIil9KWAsIFwiZ2lcIik7XG5cdHJldHVybiBlc2NhcGVkLnJlcGxhY2UocmVnZXgsIFwiPG1hcms+JDE8L21hcms+XCIpO1xufVxuXG4vKipcbiAqIEVzY2FwZSBIVE1MIHNwZWNpYWwgY2hhcmFjdGVycyB0byBwcmV2ZW50IFhTUyB3aGVuIHVzaW5nIGlubmVySFRNTC5cbiAqIEBwYXJhbSBzdHIgVGhlIHJhdyBzdHJpbmcgdG8gZXNjYXBlLlxuICogQHJldHVybnMgVGhlIEhUTUwtc2FmZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3bGluZS1wZXItY2hhaW5lZC1jYWxsXG5cdHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpO1xufVxuXG4vKipcbiAqIEhldXJpc3RpYyBjaGVjayBmb3Igd2hldGhlciBhbiBpbnB1dCBzdHJpbmcgbG9va3MgbGlrZSBhIFVSTCByYXRoZXIgdGhhbiBhIHNlYXJjaCBxdWVyeS5cbiAqIEBwYXJhbSBpbnB1dCBUaGUgcmF3IHVzZXIgaW5wdXQgdG8gZXZhbHVhdGUuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBpbnB1dCBhcHBlYXJzIHRvIGJlIGEgVVJMLCBmYWxzZSBpZiBpdCBsb29rcyBsaWtlIGEgc2VhcmNoIHF1ZXJ5LlxuICovXG5mdW5jdGlvbiBsb29rc0xpa2VVcmwoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRpZiAoaW5wdXQuaW5jbHVkZXMoXCIgXCIpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiAvXlxcUytcXC5bYS16XXsyLH0oXFwvLiopPyQvaS50ZXN0KGlucHV0KTtcbn1cblxuLy8gLS0gSGlzdG9yeSBwYW5lbCByZW5kZXJpbmcgLS1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGZ1bGwgaGlzdG9yeSBsaXN0IGluIHRoZSBoaXN0b3J5IHBhbmVsLCBzb3J0ZWQgYnkgbW9zdCByZWNlbnQgZmlyc3QuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckhpc3RvcnkoKTogdm9pZCB7XG5cdGlmICghaGlzdG9yeUxpc3RFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZW50cmllcyA9IGdldEhpc3RvcnkoKS5zb3J0KChhLCBiKSA9PiBiLnRpbWVzdGFtcCAtIGEudGltZXN0YW1wKTtcblx0aGlzdG9yeUxpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG5cblx0Zm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG5cdFx0Y29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRyb3cuY2xhc3NOYW1lID0gXCJoaXN0b3J5LWVudHJ5XCI7XG5cblx0XHRpZiAoZW50cnkuZmF2aWNvbikge1xuXHRcdFx0Y29uc3QgZmF2aWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0XHRmYXZpY29uSW1nLmNsYXNzTmFtZSA9IFwiaGlzdG9yeS1mYXZpY29uXCI7XG5cdFx0XHRmYXZpY29uSW1nLnNyYyA9IGVudHJ5LmZhdmljb247XG5cdFx0XHRmYXZpY29uSW1nLmFsdCA9IFwiXCI7XG5cdFx0XHRyb3cuYXBwZW5kKGZhdmljb25JbWcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRleHRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRleHRDb2wuY2xhc3NOYW1lID0gXCJoaXN0b3J5LXRleHRcIjtcblx0XHR0ZXh0Q29sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRpZiAodXJsSW5wdXQpIHtcblx0XHRcdFx0dXJsSW5wdXQudmFsdWUgPSBlbnRyeS51cmw7XG5cdFx0XHR9XG5cdFx0XHRuYXZpZ2F0ZVRvSW5wdXQoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblxuXHRcdGlmIChlbnRyeS50aXRsZSkge1xuXHRcdFx0Y29uc3QgdGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdFx0dGl0bGVFbC5jbGFzc05hbWUgPSBcImhpc3RvcnktdGl0bGVcIjtcblx0XHRcdHRpdGxlRWwudGV4dENvbnRlbnQgPSBlbnRyeS50aXRsZTtcblx0XHRcdHRleHRDb2wuYXBwZW5kKHRpdGxlRWwpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHVybEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0dXJsRWwuY2xhc3NOYW1lID0gXCJoaXN0b3J5LXVybFwiO1xuXHRcdHVybEVsLnRleHRDb250ZW50ID0gZW50cnkudXJsO1xuXHRcdHVybEVsLnRpdGxlID0gZW50cnkudXJsO1xuXHRcdHRleHRDb2wuYXBwZW5kKHVybEVsKTtcblxuXHRcdGNvbnN0IG1ldGFFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdG1ldGFFbC5jbGFzc05hbWUgPSBcImhpc3RvcnktbWV0YVwiO1xuXHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShlbnRyeS50aW1lc3RhbXApO1xuXHRcdG1ldGFFbC50ZXh0Q29udGVudCA9IGAke2VudHJ5LnZpc2l0Q291bnR9IHZpc2l0JHtlbnRyeS52aXNpdENvdW50ICE9PSAxID8gXCJzXCIgOiBcIlwifSBcXHUwMEI3ICR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX0gJHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfWA7XG5cblx0XHRjb25zdCBkZWxldGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGRlbGV0ZUVsLmNsYXNzTmFtZSA9IFwiaGlzdG9yeS1kZWxldGVcIjtcblx0XHRkZWxldGVFbC50ZXh0Q29udGVudCA9IFwiXFx1MDBEN1wiO1xuXHRcdGRlbGV0ZUVsLnRpdGxlID0gXCJSZW1vdmUgZnJvbSBoaXN0b3J5XCI7XG5cdFx0ZGVsZXRlRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHJlbW92ZUhpc3RvcnlFbnRyeShlbnRyeS51cmwpO1xuXHRcdFx0cmVuZGVySGlzdG9yeSgpO1xuXHRcdH0pO1xuXG5cdFx0cm93LmFwcGVuZCh0ZXh0Q29sLCBtZXRhRWwsIGRlbGV0ZUVsKTtcblx0XHRoaXN0b3J5TGlzdEVsZW1lbnQuYXBwZW5kKHJvdyk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==