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
    if (entries.length === 0) {
        hideAutocomplete();
        return;
    }
    selectedSuggestionIndex = -1;
    autocompleteList.innerHTML = "";
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
    resizeForAutocomplete(entries.length).catch(console.error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ3RDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYWNrLW5hdmlnYXRpb24td2l0aGluLWEtcGxhdGZvcm0vLi9jbGllbnQvc3JjL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFjay1uYXZpZ2F0aW9uLXdpdGhpbi1hLXBsYXRmb3JtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cmFjay1uYXZpZ2F0aW9uLXdpdGhpbi1hLXBsYXRmb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyYWNrLW5hdmlnYXRpb24td2l0aGluLWEtcGxhdGZvcm0vLi9jbGllbnQvc3JjL3VybC1uYXZpZ2F0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG4vKipcbiAqIFN0b3JhZ2UgYWJzdHJhY3Rpb24gZm9yIHRoZSBuYXZpZ2F0aW9uIHRyYWNrZXIuXG4gKlxuICogQ2VudHJhbGl6ZXMgYWxsIHBlcnNpc3RlbmNlIChoaXN0b3J5LCBhY3RpdmUgdmlld3MsIGZvY3VzZWQgd2luZG93IHN0YWNrKVxuICogYmVoaW5kIGEgc2ltcGxlIEFQSS4gVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gdXNlcyBsb2NhbFN0b3JhZ2UgKHBlcnNpc3RlbnQpXG4gKiBhbmQgc2Vzc2lvblN0b3JhZ2UgKHBlci1zZXNzaW9uKS4gVG8gc3dhcCBpbiBhIGRpZmZlcmVudCBiYWNrZW5kIChlLmcuIGEgcmVtb3RlXG4gKiBzZXJ2aWNlKSwgcmVwbGFjZSBvciB3cmFwIHRoZSBmdW5jdGlvbnMgZXhwb3J0ZWQgZnJvbSB0aGlzIG1vZHVsZS5cbiAqL1xuXG5jb25zdCBISVNUT1JZX0tFWSA9IFwibmF2aWdhdGlvbkhpc3RvcnlcIjtcbmNvbnN0IEFDVElWRV9WSUVXU19LRVkgPSBcImFjdGl2ZVZpZXdzXCI7XG5jb25zdCBGT0NVU0VEX1dJTkRPV19TVEFDS19LRVkgPSBcImZvY3VzZWRXaW5kb3dTdGFja1wiO1xuXG5jb25zdCBNQVhfSElTVE9SWV9FTlRSSUVTID0gNTAwO1xuY29uc3QgTUFYX0ZPQ1VTRURfU1RBQ0sgPSA1O1xuXG4vKipcbiAqIEEgc2luZ2xlIG5hdmlnYXRpb24gaGlzdG9yeSBlbnRyeS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5RW50cnkge1xuXHQvKiogVGhlIG5hdmlnYXRlZCBVUkwuICovXG5cdHVybDogc3RyaW5nO1xuXHQvKiogVGhlIHBhZ2UgdGl0bGUgY2FwdHVyZWQgZnJvbSB0aGUgdmlldy4gKi9cblx0dGl0bGU6IHN0cmluZztcblx0LyoqIFRoZSBwYWdlIGZhdmljb24gVVJMIGNhcHR1cmVkIGZyb20gdGhlIHZpZXcuICovXG5cdGZhdmljb246IHN0cmluZztcblx0LyoqIFVuaXggdGltZXN0YW1wIG9mIHRoZSBtb3N0IHJlY2VudCB2aXNpdC4gKi9cblx0dGltZXN0YW1wOiBudW1iZXI7XG5cdC8qKiBUb3RhbCBudW1iZXIgb2YgdGltZXMgdGhpcyBVUkwgaGFzIGJlZW4gdmlzaXRlZC4gKi9cblx0dmlzaXRDb3VudDogbnVtYmVyO1xufVxuXG4vLyAtLSBOYXZpZ2F0aW9uIEhpc3RvcnkgKGxvY2FsU3RvcmFnZSkgLS1cblxuLyoqXG4gKiBMb2FkIGFsbCBoaXN0b3J5IGVudHJpZXMuXG4gKiBAcmV0dXJucyBUaGUgYXJyYXkgb2YgaGlzdG9yeSBlbnRyaWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGlzdG9yeSgpOiBIaXN0b3J5RW50cnlbXSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oSElTVE9SWV9LRVkpO1xuXHRcdHJldHVybiByYXcgPyAoSlNPTi5wYXJzZShyYXcpIGFzIEhpc3RvcnlFbnRyeVtdKSA6IFtdO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gW107XG5cdH1cbn1cblxuLyoqXG4gKiBTYXZlIGhpc3RvcnkgZW50cmllcywgcmVwbGFjaW5nIHRoZSBjdXJyZW50IHNldC5cbiAqIEBwYXJhbSBlbnRyaWVzIFRoZSBlbnRyaWVzIHRvIHBlcnNpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRIaXN0b3J5KGVudHJpZXM6IEhpc3RvcnlFbnRyeVtdKTogdm9pZCB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKEhJU1RPUllfS0VZLCBKU09OLnN0cmluZ2lmeShlbnRyaWVzKSk7XG59XG5cbi8qKlxuICogUmVjb3JkIGEgdmlzaXQgdG8gdGhlIGdpdmVuIFVSTC4gSW5jcmVtZW50cyB2aXNpdENvdW50IGlmIGFscmVhZHkgcHJlc2VudCxcbiAqIG90aGVyd2lzZSBjcmVhdGVzIGEgbmV3IGVudHJ5LiBFdmljdHMgdGhlIG9sZGVzdCBlbnRyaWVzIHdoZW4gdGhlIGNhcCBpcyByZWFjaGVkLlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRoYXQgd2FzIHZpc2l0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRWaXNpdCh1cmw6IHN0cmluZyk6IHZvaWQge1xuXHRjb25zdCBlbnRyaWVzID0gZ2V0SGlzdG9yeSgpO1xuXHRjb25zdCBleGlzdGluZyA9IGVudHJpZXMuZmluZCgoZSkgPT4gZS51cmwgPT09IHVybCk7XG5cblx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0ZXhpc3RpbmcudmlzaXRDb3VudCsrO1xuXHRcdGV4aXN0aW5nLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cdH0gZWxzZSB7XG5cdFx0ZW50cmllcy5wdXNoKHsgdXJsLCB0aXRsZTogXCJcIiwgZmF2aWNvbjogXCJcIiwgdGltZXN0YW1wOiBEYXRlLm5vdygpLCB2aXNpdENvdW50OiAxIH0pO1xuXHR9XG5cblx0aWYgKGVudHJpZXMubGVuZ3RoID4gTUFYX0hJU1RPUllfRU5UUklFUykge1xuXHRcdGVudHJpZXMuc29ydCgoYSwgYikgPT4gYi50aW1lc3RhbXAgLSBhLnRpbWVzdGFtcCk7XG5cdFx0ZW50cmllcy5sZW5ndGggPSBNQVhfSElTVE9SWV9FTlRSSUVTO1xuXHR9XG5cblx0c2V0SGlzdG9yeShlbnRyaWVzKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHRpdGxlIG9mIGFuIGV4aXN0aW5nIGhpc3RvcnkgZW50cnkuXG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgd2hvc2UgdGl0bGUgc2hvdWxkIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gdGl0bGUgVGhlIG5ldyBwYWdlIHRpdGxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSGlzdG9yeVRpdGxlKHVybDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IGVudHJpZXMgPSBnZXRIaXN0b3J5KCk7XG5cdGNvbnN0IGV4aXN0aW5nID0gZW50cmllcy5maW5kKChlKSA9PiBlLnVybCA9PT0gdXJsKTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHRleGlzdGluZy50aXRsZSA9IHRpdGxlO1xuXHRcdHNldEhpc3RvcnkoZW50cmllcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIGZhdmljb24gb2YgYW4gZXhpc3RpbmcgaGlzdG9yeSBlbnRyeS5cbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB3aG9zZSBmYXZpY29uIHNob3VsZCBiZSB1cGRhdGVkLlxuICogQHBhcmFtIGZhdmljb24gVGhlIGZhdmljb24gVVJMLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSGlzdG9yeUZhdmljb24odXJsOiBzdHJpbmcsIGZhdmljb246IHN0cmluZyk6IHZvaWQge1xuXHRjb25zdCBlbnRyaWVzID0gZ2V0SGlzdG9yeSgpO1xuXHRjb25zdCBleGlzdGluZyA9IGVudHJpZXMuZmluZCgoZSkgPT4gZS51cmwgPT09IHVybCk7XG5cblx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0ZXhpc3RpbmcuZmF2aWNvbiA9IGZhdmljb247XG5cdFx0c2V0SGlzdG9yeShlbnRyaWVzKTtcblx0fVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIHNpbmdsZSBoaXN0b3J5IGVudHJ5IGJ5IFVSTC5cbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIaXN0b3J5RW50cnkodXJsOiBzdHJpbmcpOiB2b2lkIHtcblx0Y29uc3QgZW50cmllcyA9IGdldEhpc3RvcnkoKS5maWx0ZXIoKGUpID0+IGUudXJsICE9PSB1cmwpO1xuXHRzZXRIaXN0b3J5KGVudHJpZXMpO1xufVxuXG4vKipcbiAqIENsZWFyIGFsbCBuYXZpZ2F0aW9uIGhpc3RvcnkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckhpc3RvcnkoKTogdm9pZCB7XG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEhJU1RPUllfS0VZKTtcbn1cblxuLy8gLS0gQWN0aXZlIFZpZXdzIChsb2NhbFN0b3JhZ2UpIC0tXG5cbi8qKlxuICogTG9hZCB0aGUgYWN0aXZlIHZpZXdzIG1hcCAodmlldyBuYW1lIC0+IGN1cnJlbnQgVVJMKS5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCBtYXBwaW5nIHZpZXcgbmFtZXMgdG8gdGhlaXIgY3VycmVudCBVUkxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlVmlld3MoKTogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEFDVElWRV9WSUVXU19LRVkpO1xuXHRcdHJldHVybiByYXcgPyAoSlNPTi5wYXJzZShyYXcpIGFzIHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9KSA6IHt9O1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4ge307XG5cdH1cbn1cblxuLyoqXG4gKiBTYXZlIHRoZSBhY3RpdmUgdmlld3MgbWFwLlxuICogQHBhcmFtIHZpZXdzIEFuIG9iamVjdCBtYXBwaW5nIHZpZXcgbmFtZXMgdG8gdGhlaXIgY3VycmVudCBVUkxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlVmlld3Modmlld3M6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFDVElWRV9WSUVXU19LRVksIEpTT04uc3RyaW5naWZ5KHZpZXdzKSk7XG59XG5cbi8vIC0tIEZvY3VzZWQgV2luZG93IFN0YWNrIChsb2NhbFN0b3JhZ2UsIGNsZWFyZWQgb24gcGxhdGZvcm0gc3RhcnR1cCkgLS1cblxuLyoqXG4gKiBMb2FkIHRoZSBmb2N1c2VkIHdpbmRvdyBzdGFjayAobW9zdCByZWNlbnQgZmlyc3QpLlxuICogQHJldHVybnMgQXJyYXkgb2Ygd2luZG93IGlkZW50aXRpZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2N1c2VkV2luZG93U3RhY2soKTogT3BlbkZpbi5JZGVudGl0eVtdIHtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShGT0NVU0VEX1dJTkRPV19TVEFDS19LRVkpO1xuXHRcdHJldHVybiByYXcgPyAoSlNPTi5wYXJzZShyYXcpIGFzIE9wZW5GaW4uSWRlbnRpdHlbXSkgOiBbXTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59XG5cbi8qKlxuICogUHVzaCBhIHdpbmRvdyB0byB0aGUgdG9wIG9mIHRoZSBmb2N1cyBzdGFjay5cbiAqIERlZHVwbGljYXRlcyBhbmQgY2FwcyB0aGUgc3RhY2sgYXQgdGhlIGNvbmZpZ3VyZWQgbWF4aW11bS5cbiAqIEBwYXJhbSBpZGVudGl0eSBUaGUgd2luZG93IGlkZW50aXR5IHRvIHB1c2guXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoRm9jdXNlZFdpbmRvdyhpZGVudGl0eTogT3BlbkZpbi5JZGVudGl0eSk6IHZvaWQge1xuXHRsZXQgc3RhY2sgPSBnZXRGb2N1c2VkV2luZG93U3RhY2soKS5maWx0ZXIoKHcpID0+IHcubmFtZSAhPT0gaWRlbnRpdHkubmFtZSk7XG5cdHN0YWNrLnVuc2hpZnQoaWRlbnRpdHkpO1xuXHRpZiAoc3RhY2subGVuZ3RoID4gTUFYX0ZPQ1VTRURfU1RBQ0spIHtcblx0XHRzdGFjayA9IHN0YWNrLnNsaWNlKDAsIE1BWF9GT0NVU0VEX1NUQUNLKTtcblx0fVxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShGT0NVU0VEX1dJTkRPV19TVEFDS19LRVksIEpTT04uc3RyaW5naWZ5KHN0YWNrKSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgd2luZG93IGZyb20gdGhlIGZvY3VzIHN0YWNrIChlLmcuIHdoZW4gaXQgaXMgY2xvc2VkKS5cbiAqIEBwYXJhbSB3aW5kb3dOYW1lIFRoZSBuYW1lIG9mIHRoZSB3aW5kb3cgdG8gcmVtb3ZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9jdXNlZFdpbmRvdyh3aW5kb3dOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0Y29uc3Qgc3RhY2sgPSBnZXRGb2N1c2VkV2luZG93U3RhY2soKS5maWx0ZXIoKHcpID0+IHcubmFtZSAhPT0gd2luZG93TmFtZSk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKEZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWSwgSlNPTi5zdHJpbmdpZnkoc3RhY2spKTtcbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgZm9jdXNlZCB3aW5kb3cgc3RhY2sgKGNhbGxlZCBvbiBwbGF0Zm9ybSBzdGFydHVwIHRvIHJlc2V0IHN0YXRlKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRm9jdXNlZFdpbmRvd1N0YWNrKCk6IHZvaWQge1xuXHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShGT0NVU0VEX1dJTkRPV19TVEFDS19LRVkpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbW9zdCByZWNlbnRseSBmb2N1c2VkIHdpbmRvdyBpZGVudGl0eSwgb3IgbnVsbCBpZiB0aGUgc3RhY2sgaXMgZW1wdHkuXG4gKiBAcmV0dXJucyBUaGUgd2luZG93IGlkZW50aXR5IGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdEZvY3VzZWRXaW5kb3coKTogT3BlbkZpbi5JZGVudGl0eSB8IG51bGwge1xuXHRjb25zdCBzdGFjayA9IGdldEZvY3VzZWRXaW5kb3dTdGFjaygpO1xuXHRyZXR1cm4gc3RhY2subGVuZ3RoID4gMCA/IHN0YWNrWzBdIDogbnVsbDtcbn1cblxuLy8gLS0gQ2hhbmdlIG5vdGlmaWNhdGlvbnMgLS1cblxuLyoqIFRoZSBzdG9yYWdlIGtleXMgdGhhdCBtYXkgdHJpZ2dlciBjaGFuZ2Ugbm90aWZpY2F0aW9ucy4gKi9cbmV4cG9ydCB0eXBlIFN0b3JhZ2VLZXkgPSBcImhpc3RvcnlcIiB8IFwiYWN0aXZlVmlld3NcIiB8IFwiZm9jdXNlZFdpbmRvd1N0YWNrXCI7XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0aGF0IGZpcmVzIHdoZW4gc3RvcmFnZSBpcyBtb2RpZmllZCBieSBhbm90aGVyIHNhbWUtb3JpZ2luIHdpbmRvdy5cbiAqIFVzZXMgdGhlIGJyb3dzZXIncyBcInN0b3JhZ2VcIiBldmVudCB3aGljaCBmaXJlcyBvbiBvdGhlciB3aW5kb3dzIHNoYXJpbmcgdGhlIHNhbWUgb3JpZ2luLlxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxlZCB3aXRoIHRoZSBsb2dpY2FsIGtleSBuYW1lIHRoYXQgY2hhbmdlZC5cbiAqIEByZXR1cm5zIEEgY2xlYW51cCBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGxpc3RlbmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25TdG9yYWdlQ2hhbmdlZChjYWxsYmFjazogKGtleTogU3RvcmFnZUtleSkgPT4gdm9pZCk6ICgpID0+IHZvaWQge1xuXHRjb25zdCBrZXlNYXA6IHsgW3Jhd0tleTogc3RyaW5nXTogU3RvcmFnZUtleSB9ID0ge1xuXHRcdFtISVNUT1JZX0tFWV06IFwiaGlzdG9yeVwiLFxuXHRcdFtBQ1RJVkVfVklFV1NfS0VZXTogXCJhY3RpdmVWaWV3c1wiLFxuXHRcdFtGT0NVU0VEX1dJTkRPV19TVEFDS19LRVldOiBcImZvY3VzZWRXaW5kb3dTdGFja1wiXG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgc3RvcmFnZSBldmVudHMgYW5kIG1hcHMgcmF3IGtleXMgdG8gbG9naWNhbCBrZXkgbmFtZXMuXG5cdCAqIEBwYXJhbSBldmVudCBUaGUgc3RvcmFnZSBldmVudCBmcm9tIGFub3RoZXIgd2luZG93LlxuXHQgKi9cblx0ZnVuY3Rpb24gaGFuZGxlcihldmVudDogU3RvcmFnZUV2ZW50KTogdm9pZCB7XG5cdFx0aWYgKGV2ZW50LmtleSAmJiBrZXlNYXBbZXZlbnQua2V5XSkge1xuXHRcdFx0Y2FsbGJhY2soa2V5TWFwW2V2ZW50LmtleV0pO1xuXHRcdH1cblx0fVxuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBoYW5kbGVyKTtcblx0cmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBoYW5kbGVyKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5pbXBvcnQge1xuXHRnZXRIaXN0b3J5LFxuXHRyZW1vdmVIaXN0b3J5RW50cnksXG5cdGNsZWFySGlzdG9yeSBhcyBzdG9yYWdlQ2xlYXJIaXN0b3J5LFxuXHRnZXRBY3RpdmVWaWV3cyxcblx0Z2V0TGFzdEZvY3VzZWRXaW5kb3csXG5cdG9uU3RvcmFnZUNoYW5nZWRcbn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG4vKipcbiAqIFVSTCBOYXZpZ2F0b3IgVUkgLS0gcHJvdmlkZXMgYSBDaHJvbWUtbGlrZSBhZGRyZXNzIGJhciB3aXRoIGF1dG9jb21wbGV0ZSxcbiAqIGhpc3RvcnkgYnJvd3NpbmcsIGFuZCB0aGUgYWJpbGl0eSB0byBvcGVuIFVSTHMgaW4gbmV3IG9yIGV4aXN0aW5nIHdpbmRvd3MuXG4gKlxuICogUmVhZHMgbmF2aWdhdGlvbiBoaXN0b3J5LCBhY3RpdmUgdmlldyBzdGF0ZSwgYW5kIGxhc3QgZm9jdXNlZCB3aW5kb3cgZnJvbVxuICogdGhlIHN0b3JhZ2UgbW9kdWxlIChwZXJzaXN0ZWQgYnkgdGhlIHBsYXRmb3JtIHByb3ZpZGVyKS4gTGlzdGVucyB0byBzdG9yYWdlXG4gKiBjaGFuZ2UgZXZlbnRzIHRvIHJlYWN0aXZlbHkgdXBkYXRlIHRoZSBVSSAtLSBubyBkaXJlY3QgT3BlbkZpbiBldmVudCBsaXN0ZW5lcnNcbiAqIGFyZSBuZWVkZWQgaW4gdGhpcyBtb2R1bGUuXG4gKi9cblxuY29uc3QgTUFYX1NVR0dFU1RJT05TID0gODtcbmNvbnN0IENPTExBUFNFRF9IRUlHSFQgPSAyMjU7XG5jb25zdCBFWFBBTkRFRF9IRUlHSFQgPSA1NTA7XG5cbmxldCB1cmxJbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsO1xubGV0IGF1dG9jb21wbGV0ZUxpc3Q6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5sZXQgaGlzdG9yeUxpc3RFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xubGV0IHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID0gLTE7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0aW5pdERvbSgpO1xuXHRvblN0b3JhZ2VDaGFuZ2VkKChrZXkpID0+IHtcblx0XHRpZiAoa2V5ID09PSBcImhpc3RvcnlcIiB8fCBrZXkgPT09IFwiYWN0aXZlVmlld3NcIikge1xuXHRcdFx0Y29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNoaXN0b3J5LXBhbmVsXCIpO1xuXHRcdFx0aWYgKHBhbmVsICYmIHBhbmVsLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG5cdFx0XHRcdHJlbmRlckhpc3RvcnkoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufSk7XG5cbi8vIC0tIERPTSBpbml0aWFsaXphdGlvbiAtLVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBjb21wb25lbnRzIGFuZCB3aXJlIHVwIGV2ZW50IGhhbmRsZXJzLlxuICovXG5mdW5jdGlvbiBpbml0RG9tKCk6IHZvaWQge1xuXHR1cmxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjdXJsLWlucHV0XCIpO1xuXHRhdXRvY29tcGxldGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjYXV0b2NvbXBsZXRlLWxpc3RcIik7XG5cdGhpc3RvcnlMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2hpc3RvcnktbGlzdFwiKTtcblxuXHRpZiAodXJsSW5wdXQpIHtcblx0XHR1cmxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVJbnB1dEtleURvd24pO1xuXHRcdHVybElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBoYW5kbGVJbnB1dENoYW5nZSk7XG5cdFx0dXJsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGhhbmRsZUlucHV0Q2hhbmdlKTtcblx0XHR1cmxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0aGlkZUF1dG9jb21wbGV0ZSgpO1xuXHRcdFx0fSwgMTUwKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuLWdvXCIpO1xuXHRpZiAoYnRuR28pIHtcblx0XHRidG5Hby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0bmF2aWdhdGVUb0lucHV0KCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0TGF1bmNoTWVudSgpO1xuXG5cdGNvbnN0IGJ0bkNsZWFySGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1jbGVhci1oaXN0b3J5XCIpO1xuXHRpZiAoYnRuQ2xlYXJIaXN0b3J5KSB7XG5cdFx0YnRuQ2xlYXJIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRzdG9yYWdlQ2xlYXJIaXN0b3J5KCk7XG5cdFx0XHRyZW5kZXJIaXN0b3J5KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Ub2dnbGVIaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuLXRvZ2dsZS1oaXN0b3J5XCIpO1xuXHRpZiAoYnRuVG9nZ2xlSGlzdG9yeSkge1xuXHRcdGJ0blRvZ2dsZUhpc3RvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHRvZ2dsZUhpc3RvcnlQYW5lbCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuTWluaW1pemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tbWluaW1pemVcIik7XG5cdGlmIChidG5NaW5pbWl6ZSkge1xuXHRcdGJ0bk1pbmltaXplLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3bGluZS1wZXItY2hhaW5lZC1jYWxsXG5cdFx0XHRmaW4uV2luZG93LmdldEN1cnJlbnRTeW5jKCkubWluaW1pemUoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuLWNsb3NlXCIpO1xuXHRpZiAoYnRuQ2xvc2UpIHtcblx0XHRidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ld2xpbmUtcGVyLWNoYWluZWQtY2FsbFxuXHRcdFx0ZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCkucXVpdCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVySGlzdG9yeSgpO1xufVxuXG4vLyAtLSBIaXN0b3J5IHBhbmVsIHRvZ2dsZSAtLVxuXG4vKipcbiAqIFRvZ2dsZSB0aGUgaGlzdG9yeSBwYW5lbCB2aXNpYmlsaXR5IGFuZCByZXNpemUgdGhlIHdpbmRvdyBhY2NvcmRpbmdseS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gdG9nZ2xlSGlzdG9yeVBhbmVsKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2hpc3RvcnktcGFuZWxcIik7XG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi10b2dnbGUtaGlzdG9yeVwiKTtcblx0aWYgKCFwYW5lbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlzVmlzaWJsZSA9IHBhbmVsLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiO1xuXHRjb25zdCB3aW4gPSBmaW4uV2luZG93LmdldEN1cnJlbnRTeW5jKCk7XG5cdGNvbnN0IGJvdW5kcyA9IGF3YWl0IHdpbi5nZXRCb3VuZHMoKTtcblxuXHRpZiAoaXNWaXNpYmxlKSB7XG5cdFx0cGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdGJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHRhd2FpdCB3aW4ucmVzaXplVG8oYm91bmRzLndpZHRoLCBDT0xMQVBTRURfSEVJR0hULCBcInRvcC1sZWZ0XCIpO1xuXHR9IGVsc2Uge1xuXHRcdHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHRidG4/LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0cmVuZGVySGlzdG9yeSgpO1xuXHRcdGF3YWl0IHdpbi5yZXNpemVUbyhib3VuZHMud2lkdGgsIEVYUEFOREVEX0hFSUdIVCwgXCJ0b3AtbGVmdFwiKTtcblx0fVxufVxuXG4vLyAtLSBMYXVuY2ggbWVudSAtLVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGxhdW5jaCBtZW51IGRyb3Bkb3duIGZvciBjaG9vc2luZyB3aGVyZSB0byBvcGVuIGEgVVJMLlxuICovXG5mdW5jdGlvbiBpbml0TGF1bmNoTWVudSgpOiB2b2lkIHtcblx0Y29uc3QgYnRuVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1sYXVuY2gtbWVudVwiKTtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2xhdW5jaC1tZW51XCIpO1xuXHRjb25zdCBsYXN0V2luZG93SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2xhdW5jaC1sYXN0LXdpbmRvd1wiKTtcblxuXHRpZiAoIWJ0blRyaWdnZXIgfHwgIW1lbnUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRidG5UcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgaXNPcGVuID0gbWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmxlXCIpO1xuXHRcdGlmIChpc09wZW4pIHtcblx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG5cdFx0XHRidG5UcmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxhc3RXaW5kb3dJdGVtPy5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIiwgIWdldExhc3RGb2N1c2VkV2luZG93KCkpO1xuXHRcdFx0bWVudS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcblx0XHRcdGJ0blRyaWdnZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNvbnN0IGxhdW5jaEdyb3VwID0gYnRuVHJpZ2dlci5wYXJlbnRFbGVtZW50O1xuXHRcdGlmIChsYXVuY2hHcm91cCAmJiAhbGF1bmNoR3JvdXAuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkpIHtcblx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG5cdFx0XHRidG5UcmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0fVxuXHR9KTtcblxuXHRtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdGNvbnN0IGl0ZW0gPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3Q8SFRNTEVsZW1lbnQ+KFwiLmxhdW5jaC1tZW51LWl0ZW1cIik7XG5cdFx0aWYgKCFpdGVtIHx8IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhY3Rpb24gPSBpdGVtLmRhdGFzZXQuYWN0aW9uO1xuXHRcdGNvbnN0IHVybCA9IHJlc29sdmVJbnB1dFVybCgpO1xuXHRcdGlmICghdXJsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcblx0XHRidG5UcmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0aGlkZUF1dG9jb21wbGV0ZSgpO1xuXG5cdFx0aWYgKGFjdGlvbiA9PT0gXCJuZXctd2luZG93XCIpIHtcblx0XHRcdGF3YWl0IG9wZW5Jbk5ld1dpbmRvdyh1cmwpO1xuXHRcdFx0aWYgKHVybElucHV0KSB7XG5cdFx0XHRcdHVybElucHV0LnZhbHVlID0gXCJcIjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJsYXN0LXdpbmRvd1wiKSB7XG5cdFx0XHRhd2FpdCBvcGVuSW5MYXN0Rm9jdXNlZFdpbmRvdyh1cmwpO1xuXHRcdFx0aWYgKHVybElucHV0KSB7XG5cdFx0XHRcdHVybElucHV0LnZhbHVlID0gXCJcIjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuXG4vLyAtLSBJbnB1dCBoYW5kbGluZyAtLVxuXG4vKipcbiAqIEhhbmRsZSBrZXlib2FyZCBldmVudHMgb24gdGhlIFVSTCBpbnB1dCBmb3IgRW50ZXIgYW5kIGFycm93IGtleSBuYXZpZ2F0aW9uLlxuICogQHBhcmFtIGUgVGhlIGtleWJvYXJkIGV2ZW50LlxuICovXG5mdW5jdGlvbiBoYW5kbGVJbnB1dEtleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuXHRjb25zdCBpdGVtcyA9IGF1dG9jb21wbGV0ZUxpc3Q/LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmF1dG9jb21wbGV0ZS1pdGVtXCIpO1xuXHRjb25zdCBzdWdnZXN0aW9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBpdGVtcyA/PyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ub29wXCIpO1xuXG5cdGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleCA9IE1hdGgubWluKHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ICsgMSwgc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMSk7XG5cdFx0dXBkYXRlU3VnZ2VzdGlvbkhpZ2hsaWdodChzdWdnZXN0aW9ucyk7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID0gTWF0aC5tYXgoc2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggLSAxLCAtMSk7XG5cdFx0dXBkYXRlU3VnZ2VzdGlvbkhpZ2hsaWdodChzdWdnZXN0aW9ucyk7XG5cdH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoc2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggPj0gMCAmJiBzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleCA8IHN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuXHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBzdWdnZXN0aW9uc1tzZWxlY3RlZFN1Z2dlc3Rpb25JbmRleF07XG5cdFx0XHRjb25zdCB1cmwgPSBzZWxlY3RlZC5kYXRhc2V0LnVybDtcblx0XHRcdGlmICh1cmwgJiYgdXJsSW5wdXQpIHtcblx0XHRcdFx0dXJsSW5wdXQudmFsdWUgPSB1cmw7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG5hdmlnYXRlVG9JbnB1dCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHR9IGVsc2UgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG5cdFx0aGlkZUF1dG9jb21wbGV0ZSgpO1xuXHR9XG59XG5cbi8qKlxuICogSGFuZGxlIGlucHV0IGNoYW5nZXMgdG8gc2hvdy91cGRhdGUgdGhlIGF1dG9jb21wbGV0ZSBkcm9wZG93bi5cbiAqIFJlcXVpcmVzIGF0IGxlYXN0IDIgY2hhcmFjdGVycyBiZWZvcmUgc2hvd2luZyBzdWdnZXN0aW9ucy5cbiAqL1xuZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoKTogdm9pZCB7XG5cdGNvbnN0IHF1ZXJ5ID0gdXJsSW5wdXQ/LnZhbHVlLnRyaW0oKSA/PyBcIlwiO1xuXHRpZiAocXVlcnkubGVuZ3RoIDwgMikge1xuXHRcdGhpZGVBdXRvY29tcGxldGUoKTtcblx0XHRyZXR1cm47XG5cdH1cblx0c2hvd1N1Z2dlc3Rpb25zKHF1ZXJ5KTtcbn1cblxuLy8gLS0gTmF2aWdhdGlvbiAtLVxuXG4vKipcbiAqIFJlc29sdmUgdGhlIGN1cnJlbnQgaW5wdXQgdmFsdWUgdG8gYSBuYXZpZ2FibGUgVVJMLlxuICogQHJldHVybnMgVGhlIHJlc29sdmVkIFVSTCwgb3IgbnVsbCBpZiBpbnB1dCBpcyBlbXB0eS5cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUlucHV0VXJsKCk6IHN0cmluZyB8IG51bGwge1xuXHRpZiAoIXVybElucHV0KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgdXJsID0gdXJsSW5wdXQudmFsdWUudHJpbSgpO1xuXHRpZiAoIXVybCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QodXJsKSkge1xuXHRcdC8vIEFscmVhZHkgaGFzIGEgcHJvdG9jb2wgLS0gdXNlIGFzLWlzLlxuXHR9IGVsc2UgaWYgKGxvb2tzTGlrZVVybCh1cmwpKSB7XG5cdFx0dXJsID0gYGh0dHBzOi8vJHt1cmx9YDtcblx0fSBlbHNlIHtcblx0XHR1cmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudCh1cmwpfWA7XG5cdH1cblxuXHRyZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIE5hdmlnYXRlIHRvIHRoZSBVUkwgY3VycmVudGx5IGluIHRoZSBpbnB1dCBmaWVsZCBieSBvcGVuaW5nIGEgbmV3IHBsYXRmb3JtIHdpbmRvdy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVUb0lucHV0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB1cmwgPSByZXNvbHZlSW5wdXRVcmwoKTtcblx0aWYgKCF1cmwgfHwgIXVybElucHV0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dXJsSW5wdXQudmFsdWUgPSB1cmw7XG5cdGhpZGVBdXRvY29tcGxldGUoKTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IG9wZW5Jbk5ld1dpbmRvdyh1cmwpO1xuXHRcdHVybElucHV0LnZhbHVlID0gXCJcIjtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgd2luZG93OlwiLCBlcnIpO1xuXHR9XG59XG5cbi8qKlxuICogT3BlbiBhIFVSTCBpbiBhIGJyYW5kIG5ldyBwbGF0Zm9ybSB3aW5kb3cgY29udGFpbmluZyBhIHNpbmdsZSB2aWV3LlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIG5hdmlnYXRlIHRvLlxuICovXG5hc3luYyBmdW5jdGlvbiBvcGVuSW5OZXdXaW5kb3codXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0YXdhaXQgcGxhdGZvcm0uY3JlYXRlV2luZG93KHtcblx0XHRsYXlvdXQ6IHtcblx0XHRcdGNvbnRlbnQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHR5cGU6IFwic3RhY2tcIixcblx0XHRcdFx0XHRjb250ZW50OiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29tcG9uZW50XCIsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudE5hbWU6IFwidmlld1wiLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnRTdGF0ZToge1xuXHRcdFx0XHRcdFx0XHRcdHVybFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHR9IGFzIE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zKTtcbn1cblxuLyoqXG4gKiBPcGVuIGEgVVJMIGFzIGEgbmV3IHZpZXcgaW4gdGhlIGxhc3QgZm9jdXNlZCB3aW5kb3cgKHJlYWQgZnJvbSBzdG9yYWdlKS5cbiAqIEZhbGxzIGJhY2sgdG8gb3BlbmluZyBhIG5ldyB3aW5kb3cgaWYgbm8gbGFzdCBmb2N1c2VkIHdpbmRvdyBpcyBzdG9yZWQuXG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gbmF2aWdhdGUgdG8uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG9wZW5Jbkxhc3RGb2N1c2VkV2luZG93KHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGlkZW50aXR5ID0gZ2V0TGFzdEZvY3VzZWRXaW5kb3coKTtcblxuXHRpZiAoaWRlbnRpdHkpIHtcblx0XHRjb25zdCBwbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRcdGNvbnN0IHRhcmdldFdpbiA9IGZpbi5XaW5kb3cud3JhcFN5bmMoaWRlbnRpdHkpO1xuXHRcdGF3YWl0IHBsYXRmb3JtLmNyZWF0ZVZpZXcoeyB1cmwgfSBhcyBPcGVuRmluLlZpZXdDcmVhdGlvbk9wdGlvbnMsIGlkZW50aXR5KTtcblx0XHRjb25zdCBzdGF0ZSA9IGF3YWl0IHRhcmdldFdpbi5nZXRTdGF0ZSgpO1xuXHRcdGlmIChzdGF0ZSA9PT0gXCJtaW5pbWl6ZWRcIikge1xuXHRcdFx0YXdhaXQgdGFyZ2V0V2luLnJlc3RvcmUoKTtcblx0XHR9XG5cdFx0YXdhaXQgdGFyZ2V0V2luLnNldEFzRm9yZWdyb3VuZCgpO1xuXHR9IGVsc2Uge1xuXHRcdGF3YWl0IG9wZW5Jbk5ld1dpbmRvdyh1cmwpO1xuXHR9XG59XG5cbi8vIC0tIFZpZXcgc3dpdGNoaW5nIC0tXG5cbi8qKlxuICogRmluZCB0aGUgaWRlbnRpdHkgb2YgYW4gYWN0aXZlIHZpZXcgY3VycmVudGx5IGRpc3BsYXlpbmcgdGhlIGdpdmVuIFVSTCwgb3IgbnVsbCBpZiBub25lLlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIHNlYXJjaCBmb3IgYW1vbmcgYWN0aXZlIHZpZXdzLlxuICogQHJldHVybnMgVGhlIHZpZXcgaWRlbnRpdHkgaWYgZm91bmQsIG90aGVyd2lzZSBudWxsLlxuICovXG5mdW5jdGlvbiBmaW5kQWN0aXZlVmlld0ZvclVybCh1cmw6IHN0cmluZyk6IE9wZW5GaW4uSWRlbnRpdHkgfCBudWxsIHtcblx0Y29uc3QgYWN0aXZlVmlld3MgPSBnZXRBY3RpdmVWaWV3cygpO1xuXHRmb3IgKGNvbnN0IFt2aWV3TmFtZSwgdmlld1VybF0gb2YgT2JqZWN0LmVudHJpZXMoYWN0aXZlVmlld3MpKSB7XG5cdFx0aWYgKHZpZXdVcmwgPT09IHVybCkge1xuXHRcdFx0cmV0dXJuIHsgdXVpZDogZmluLm1lLnV1aWQsIG5hbWU6IHZpZXdOYW1lIH07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEZvY3VzIGFuIGV4aXN0aW5nIHZpZXcgYW5kIGJyaW5nIGl0cyBwYXJlbnQgd2luZG93IHRvIGZyb250LlxuICogQHBhcmFtIGlkZW50aXR5IFRoZSBpZGVudGl0eSBvZiB0aGUgdmlldyB0byBmb2N1cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc3dpdGNoVG9WaWV3KGlkZW50aXR5OiBPcGVuRmluLklkZW50aXR5KTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHZpZXcgPSBmaW4uVmlldy53cmFwU3luYyhpZGVudGl0eSk7XG5cdGNvbnN0IHdpbiA9IGF3YWl0IHZpZXcuZ2V0Q3VycmVudFdpbmRvdygpO1xuXHRjb25zdCBzdGF0ZSA9IGF3YWl0IHdpbi5nZXRTdGF0ZSgpO1xuXHRpZiAoc3RhdGUgPT09IFwibWluaW1pemVkXCIpIHtcblx0XHRhd2FpdCB3aW4ucmVzdG9yZSgpO1xuXHR9XG5cdGF3YWl0IHZpZXcuZm9jdXMoKTtcblx0YXdhaXQgd2luLnNldEFzRm9yZWdyb3VuZCgpO1xufVxuXG4vLyAtLSBBdXRvY29tcGxldGUgLS1cblxuLyoqXG4gKiBTaG93IGF1dG9jb21wbGV0ZSBzdWdnZXN0aW9ucyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkgYWdhaW5zdCBib3RoIFVSTCBhbmQgdGl0bGUuXG4gKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCB0ZXh0IHRvIGZpbHRlciBoaXN0b3J5IGJ5LlxuICovXG5mdW5jdGlvbiBzaG93U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuXHRpZiAoIWF1dG9jb21wbGV0ZUxpc3QpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsb3dlclF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgZW50cmllcyA9IGdldEhpc3RvcnkoKVxuXHRcdC5maWx0ZXIoKGUpID0+IGUudXJsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSkgfHwgZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpKVxuXHRcdC5zb3J0KChhLCBiKSA9PiBiLnZpc2l0Q291bnQgLSBhLnZpc2l0Q291bnQpXG5cdFx0LnNsaWNlKDAsIE1BWF9TVUdHRVNUSU9OUyk7XG5cblx0aWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0aGlkZUF1dG9jb21wbGV0ZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID0gLTE7XG5cdGF1dG9jb21wbGV0ZUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRjb25zdCBoYXNMYXN0V2luZG93ID0gQm9vbGVhbihnZXRMYXN0Rm9jdXNlZFdpbmRvdygpKTtcblxuXHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRpdGVtLmNsYXNzTmFtZSA9IFwiYXV0b2NvbXBsZXRlLWl0ZW1cIjtcblx0XHRpdGVtLmRhdGFzZXQudXJsID0gZW50cnkudXJsO1xuXG5cdFx0aWYgKGVudHJ5LmZhdmljb24pIHtcblx0XHRcdGNvbnN0IGZhdmljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0ZmF2aWNvbkltZy5jbGFzc05hbWUgPSBcImF1dG9jb21wbGV0ZS1mYXZpY29uXCI7XG5cdFx0XHRmYXZpY29uSW1nLnNyYyA9IGVudHJ5LmZhdmljb247XG5cdFx0XHRmYXZpY29uSW1nLmFsdCA9IFwiXCI7XG5cdFx0XHRpdGVtLmFwcGVuZChmYXZpY29uSW1nKTtcblx0XHR9XG5cblx0XHRjb25zdCB0ZXh0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0ZXh0Q29sLmNsYXNzTmFtZSA9IFwiYXV0b2NvbXBsZXRlLXRleHRcIjtcblxuXHRcdGlmIChlbnRyeS50aXRsZSkge1xuXHRcdFx0Y29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHR0aXRsZVNwYW4uY2xhc3NOYW1lID0gXCJhdXRvY29tcGxldGUtdGl0bGVcIjtcblx0XHRcdHRpdGxlU3Bhbi5pbm5lckhUTUwgPSBoaWdobGlnaHRNYXRjaChlbnRyeS50aXRsZSwgcXVlcnkpO1xuXHRcdFx0dGV4dENvbC5hcHBlbmQodGl0bGVTcGFuKTtcblx0XHR9XG5cblx0XHRjb25zdCB1cmxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0dXJsU3Bhbi5jbGFzc05hbWUgPSBcInVybFwiO1xuXHRcdHVybFNwYW4uaW5uZXJIVE1MID0gaGlnaGxpZ2h0TWF0Y2goZW50cnkudXJsLCBxdWVyeSk7XG5cdFx0dGV4dENvbC5hcHBlbmQodXJsU3Bhbik7XG5cblx0XHRjb25zdCBjb3VudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRjb3VudFNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpdC1jb3VudFwiO1xuXHRcdGNvdW50U3Bhbi50ZXh0Q29udGVudCA9IGAke2VudHJ5LnZpc2l0Q291bnR9IHZpc2l0JHtlbnRyeS52aXNpdENvdW50ICE9PSAxID8gXCJzXCIgOiBcIlwifWA7XG5cblx0XHRjb25zdCBhY3RpdmVWaWV3ID0gZmluZEFjdGl2ZVZpZXdGb3JVcmwoZW50cnkudXJsKTtcblxuXHRcdGl0ZW0uYXBwZW5kKHRleHRDb2wsIGNvdW50U3Bhbik7XG5cblx0XHRpZiAoYWN0aXZlVmlldykge1xuXHRcdFx0Y29uc3Qgc3dpdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdHN3aXRjaEJ0bi5jbGFzc05hbWUgPSBcImJ0bi1zd2l0Y2gtdGFiXCI7XG5cdFx0XHRzd2l0Y2hCdG4udGV4dENvbnRlbnQgPSBcIlN3aXRjaCB0byB0YWJcIjtcblx0XHRcdHN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0aGlkZUF1dG9jb21wbGV0ZSgpO1xuXHRcdFx0XHRzd2l0Y2hUb1ZpZXcoYWN0aXZlVmlldykuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0XHR9KTtcblx0XHRcdGl0ZW0uYXBwZW5kKHN3aXRjaEJ0bik7XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0xhc3RXaW5kb3cpIHtcblx0XHRcdGNvbnN0IG9wZW5MYXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdG9wZW5MYXN0QnRuLmNsYXNzTmFtZSA9IFwiYnRuLW9wZW4tbGFzdFwiO1xuXHRcdFx0b3Blbkxhc3RCdG4udGl0bGUgPSBcIk9wZW4gaW4gbGFzdCBmb2N1c2VkIHdpbmRvd1wiO1xuXHRcdFx0b3Blbkxhc3RCdG4uaW5uZXJIVE1MID0gW1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3F1b3Rlc1xuXHRcdFx0XHQnPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPicsXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcXVvdGVzXG5cdFx0XHRcdCc8cGF0aCBkPVwiTTEgM2ExIDEgMCAwIDEgMS0xaDV2MUgydjloNXYxSDJhMSAxIDAgMCAxLTEtMVYzem03LTFoNWExIDEgMCAwIDEgMSAxdjlhMSAxIDAgMCAxLTEgMUg4di0xaDVWM0g4VjJ6XCIvPicsXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcXVvdGVzXG5cdFx0XHRcdCc8cGF0aCBkPVwiTTUgOC41YS41LjUgMCAwIDEgLjUtLjVoNWEuNS41IDAgMCAxIDAgMWgtNWEuNS41IDAgMCAxLS41LS41elwiLz48L3N2Zz4nXG5cdFx0XHRdLmpvaW4oXCJcIik7XG5cdFx0XHRvcGVuTGFzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0aGlkZUF1dG9jb21wbGV0ZSgpO1xuXHRcdFx0XHRhd2FpdCBvcGVuSW5MYXN0Rm9jdXNlZFdpbmRvdyhlbnRyeS51cmwpO1xuXHRcdFx0XHRpZiAodXJsSW5wdXQpIHtcblx0XHRcdFx0XHR1cmxJbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0aXRlbS5hcHBlbmQob3Blbkxhc3RCdG4pO1xuXHRcdH1cblxuXHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYgKHVybElucHV0KSB7XG5cdFx0XHRcdHVybElucHV0LnZhbHVlID0gZW50cnkudXJsO1xuXHRcdFx0fVxuXHRcdFx0bmF2aWdhdGVUb0lucHV0KCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0fSk7XG5cblx0XHRhdXRvY29tcGxldGVMaXN0LmFwcGVuZChpdGVtKTtcblx0fVxuXG5cdGF1dG9jb21wbGV0ZUxpc3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0cmVzaXplRm9yQXV0b2NvbXBsZXRlKGVudHJpZXMubGVuZ3RoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbn1cblxuLyoqXG4gKiBIaWRlIHRoZSBhdXRvY29tcGxldGUgZHJvcGRvd24uXG4gKi9cbmZ1bmN0aW9uIGhpZGVBdXRvY29tcGxldGUoKTogdm9pZCB7XG5cdGlmIChhdXRvY29tcGxldGVMaXN0KSB7XG5cdFx0YXV0b2NvbXBsZXRlTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0YXV0b2NvbXBsZXRlTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXHR9XG5cdHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID0gLTE7XG5cdGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjaGlzdG9yeS1wYW5lbFwiKTtcblx0Y29uc3QgaGlzdG9yeVZpc2libGUgPSBwYW5lbCAmJiBwYW5lbC5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcblx0aWYgKCFoaXN0b3J5VmlzaWJsZSkge1xuXHRcdHJlc2l6ZVRvQ29sbGFwc2VkKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXNpemUgdGhlIHdpbmRvdyB0byBhY2NvbW1vZGF0ZSBhdXRvY29tcGxldGUgcmVzdWx0cy5cbiAqIEBwYXJhbSBpdGVtQ291bnQgVGhlIG51bWJlciBvZiBhdXRvY29tcGxldGUgaXRlbXMgYmVpbmcgc2hvd24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUZvckF1dG9jb21wbGV0ZShpdGVtQ291bnQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB3aW4gPSBmaW4uV2luZG93LmdldEN1cnJlbnRTeW5jKCk7XG5cdGNvbnN0IGJvdW5kcyA9IGF3YWl0IHdpbi5nZXRCb3VuZHMoKTtcblx0Y29uc3QgaXRlbUhlaWdodCA9IDQyO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG5cdGNvbnN0IHRhcmdldEhlaWdodCA9IENPTExBUFNFRF9IRUlHSFQgKyBNYXRoLm1pbihpdGVtQ291bnQsIE1BWF9TVUdHRVNUSU9OUykgKiBpdGVtSGVpZ2h0O1xuXHRjb25zdCBuZXdIZWlnaHQgPSBNYXRoLm1heCh0YXJnZXRIZWlnaHQsIGJvdW5kcy5oZWlnaHQpO1xuXHRpZiAobmV3SGVpZ2h0ICE9PSBib3VuZHMuaGVpZ2h0KSB7XG5cdFx0YXdhaXQgd2luLnJlc2l6ZVRvKGJvdW5kcy53aWR0aCwgbmV3SGVpZ2h0LCBcInRvcC1sZWZ0XCIpO1xuXHR9XG59XG5cbi8qKlxuICogUmVzaXplIHRoZSB3aW5kb3cgYmFjayB0byBjb2xsYXBzZWQgaGVpZ2h0LlxuICovXG5hc3luYyBmdW5jdGlvbiByZXNpemVUb0NvbGxhcHNlZCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgd2luID0gZmluLldpbmRvdy5nZXRDdXJyZW50U3luYygpO1xuXHRjb25zdCBib3VuZHMgPSBhd2FpdCB3aW4uZ2V0Qm91bmRzKCk7XG5cdGlmIChib3VuZHMuaGVpZ2h0ICE9PSBDT0xMQVBTRURfSEVJR0hUKSB7XG5cdFx0YXdhaXQgd2luLnJlc2l6ZVRvKGJvdW5kcy53aWR0aCwgQ09MTEFQU0VEX0hFSUdIVCwgXCJ0b3AtbGVmdFwiKTtcblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgdmlzdWFsIGhpZ2hsaWdodCBvbiBhdXRvY29tcGxldGUgc3VnZ2VzdGlvbnMgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gKiBAcGFyYW0gc3VnZ2VzdGlvbnMgVGhlIGxpc3Qgb2Ygc3VnZ2VzdGlvbiBlbGVtZW50cyB0byB1cGRhdGUuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVN1Z2dlc3Rpb25IaWdobGlnaHQoc3VnZ2VzdGlvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc3VnZ2VzdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRzdWdnZXN0aW9uc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIiwgaSA9PT0gc2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXgpO1xuXHR9XG5cblx0aWYgKHNlbGVjdGVkU3VnZ2VzdGlvbkluZGV4ID49IDAgJiYgc2VsZWN0ZWRTdWdnZXN0aW9uSW5kZXggPCBzdWdnZXN0aW9ucy5sZW5ndGgpIHtcblx0XHRjb25zdCBzZWxlY3RlZCA9IHN1Z2dlc3Rpb25zW3NlbGVjdGVkU3VnZ2VzdGlvbkluZGV4XTtcblx0XHRpZiAodXJsSW5wdXQpIHtcblx0XHRcdHVybElucHV0LnZhbHVlID0gc2VsZWN0ZWQuZGF0YXNldC51cmwgPz8gXCJcIjtcblx0XHR9XG5cdH1cbn1cblxuLy8gLS0gVXRpbGl0eSAtLVxuXG4vKipcbiAqIFJldHVybiBhbiBIVE1MIHN0cmluZyB3aXRoIGFsbCBvY2N1cnJlbmNlcyBvZiBxdWVyeSBoaWdobGlnaHRlZCB3aXRoIGEgPG1hcms+IHRhZy5cbiAqIEBwYXJhbSB0ZXh0IFRoZSBvcmlnaW5hbCB0ZXh0IHRvIGRpc3BsYXkuXG4gKiBAcGFyYW0gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeSB0byBoaWdobGlnaHQgd2l0aGluIHRoZSB0ZXh0LlxuICogQHJldHVybnMgSFRNTCBzdHJpbmcgd2l0aCBtYXRjaGVzIHdyYXBwZWQgaW4gPG1hcms+IHRhZ3MuXG4gKi9cbmZ1bmN0aW9uIGhpZ2hsaWdodE1hdGNoKHRleHQ6IHN0cmluZywgcXVlcnk6IHN0cmluZyk6IHN0cmluZyB7XG5cdGlmICghcXVlcnkpIHtcblx0XHRyZXR1cm4gZXNjYXBlSHRtbCh0ZXh0KTtcblx0fVxuXHRjb25zdCBlc2NhcGVkID0gZXNjYXBlSHRtbCh0ZXh0KTtcblx0Y29uc3QgZXNjYXBlZFF1ZXJ5ID0gZXNjYXBlSHRtbChxdWVyeSk7XG5cdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgKCR7ZXNjYXBlZFF1ZXJ5LnJlcGxhY2UoL1skKCkqKy4/W1xcXFxcXF1ee3x9XS9nLCBcIlxcXFwkJlwiKX0pYCwgXCJnaVwiKTtcblx0cmV0dXJuIGVzY2FwZWQucmVwbGFjZShyZWdleCwgXCI8bWFyaz4kMTwvbWFyaz5cIik7XG59XG5cbi8qKlxuICogRXNjYXBlIEhUTUwgc3BlY2lhbCBjaGFyYWN0ZXJzIHRvIHByZXZlbnQgWFNTIHdoZW4gdXNpbmcgaW5uZXJIVE1MLlxuICogQHBhcmFtIHN0ciBUaGUgcmF3IHN0cmluZyB0byBlc2NhcGUuXG4gKiBAcmV0dXJucyBUaGUgSFRNTC1zYWZlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHI6IHN0cmluZyk6IHN0cmluZyB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXdsaW5lLXBlci1jaGFpbmVkLWNhbGxcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvPi9nLCBcIiZndDtcIikucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIik7XG59XG5cbi8qKlxuICogSGV1cmlzdGljIGNoZWNrIGZvciB3aGV0aGVyIGFuIGlucHV0IHN0cmluZyBsb29rcyBsaWtlIGEgVVJMIHJhdGhlciB0aGFuIGEgc2VhcmNoIHF1ZXJ5LlxuICogQHBhcmFtIGlucHV0IFRoZSByYXcgdXNlciBpbnB1dCB0byBldmFsdWF0ZS5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGlucHV0IGFwcGVhcnMgdG8gYmUgYSBVUkwsIGZhbHNlIGlmIGl0IGxvb2tzIGxpa2UgYSBzZWFyY2ggcXVlcnkuXG4gKi9cbmZ1bmN0aW9uIGxvb2tzTGlrZVVybChpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdGlmIChpbnB1dC5pbmNsdWRlcyhcIiBcIikpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIC9eXFxTK1xcLlthLXpdezIsfShcXC8uKik/JC9pLnRlc3QoaW5wdXQpO1xufVxuXG4vLyAtLSBIaXN0b3J5IHBhbmVsIHJlbmRlcmluZyAtLVxuXG4vKipcbiAqIFJlbmRlciB0aGUgZnVsbCBoaXN0b3J5IGxpc3QgaW4gdGhlIGhpc3RvcnkgcGFuZWwsIHNvcnRlZCBieSBtb3N0IHJlY2VudCBmaXJzdC5cbiAqL1xuZnVuY3Rpb24gcmVuZGVySGlzdG9yeSgpOiB2b2lkIHtcblx0aWYgKCFoaXN0b3J5TGlzdEVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBlbnRyaWVzID0gZ2V0SGlzdG9yeSgpLnNvcnQoKGEsIGIpID0+IGIudGltZXN0YW1wIC0gYS50aW1lc3RhbXApO1xuXHRoaXN0b3J5TGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHJvdy5jbGFzc05hbWUgPSBcImhpc3RvcnktZW50cnlcIjtcblxuXHRcdGlmIChlbnRyeS5mYXZpY29uKSB7XG5cdFx0XHRjb25zdCBmYXZpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHRcdGZhdmljb25JbWcuY2xhc3NOYW1lID0gXCJoaXN0b3J5LWZhdmljb25cIjtcblx0XHRcdGZhdmljb25JbWcuc3JjID0gZW50cnkuZmF2aWNvbjtcblx0XHRcdGZhdmljb25JbWcuYWx0ID0gXCJcIjtcblx0XHRcdHJvdy5hcHBlbmQoZmF2aWNvbkltZyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGV4dENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dGV4dENvbC5jbGFzc05hbWUgPSBcImhpc3RvcnktdGV4dFwiO1xuXHRcdHRleHRDb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGlmICh1cmxJbnB1dCkge1xuXHRcdFx0XHR1cmxJbnB1dC52YWx1ZSA9IGVudHJ5LnVybDtcblx0XHRcdH1cblx0XHRcdG5hdmlnYXRlVG9JbnB1dCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKGVudHJ5LnRpdGxlKSB7XG5cdFx0XHRjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0XHR0aXRsZUVsLmNsYXNzTmFtZSA9IFwiaGlzdG9yeS10aXRsZVwiO1xuXHRcdFx0dGl0bGVFbC50ZXh0Q29udGVudCA9IGVudHJ5LnRpdGxlO1xuXHRcdFx0dGV4dENvbC5hcHBlbmQodGl0bGVFbCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHR1cmxFbC5jbGFzc05hbWUgPSBcImhpc3RvcnktdXJsXCI7XG5cdFx0dXJsRWwudGV4dENvbnRlbnQgPSBlbnRyeS51cmw7XG5cdFx0dXJsRWwudGl0bGUgPSBlbnRyeS51cmw7XG5cdFx0dGV4dENvbC5hcHBlbmQodXJsRWwpO1xuXG5cdFx0Y29uc3QgbWV0YUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0bWV0YUVsLmNsYXNzTmFtZSA9IFwiaGlzdG9yeS1tZXRhXCI7XG5cdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKGVudHJ5LnRpbWVzdGFtcCk7XG5cdFx0bWV0YUVsLnRleHRDb250ZW50ID0gYCR7ZW50cnkudmlzaXRDb3VudH0gdmlzaXQke2VudHJ5LnZpc2l0Q291bnQgIT09IDEgPyBcInNcIiA6IFwiXCJ9IFxcdTAwQjcgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAke2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YDtcblxuXHRcdGNvbnN0IGRlbGV0ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0ZGVsZXRlRWwuY2xhc3NOYW1lID0gXCJoaXN0b3J5LWRlbGV0ZVwiO1xuXHRcdGRlbGV0ZUVsLnRleHRDb250ZW50ID0gXCJcXHUwMEQ3XCI7XG5cdFx0ZGVsZXRlRWwudGl0bGUgPSBcIlJlbW92ZSBmcm9tIGhpc3RvcnlcIjtcblx0XHRkZWxldGVFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0cmVtb3ZlSGlzdG9yeUVudHJ5KGVudHJ5LnVybCk7XG5cdFx0XHRyZW5kZXJIaXN0b3J5KCk7XG5cdFx0fSk7XG5cblx0XHRyb3cuYXBwZW5kKHRleHRDb2wsIG1ldGFFbCwgZGVsZXRlRWwpO1xuXHRcdGhpc3RvcnlMaXN0RWxlbWVudC5hcHBlbmQocm93KTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9