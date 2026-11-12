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
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./client/src/storage.ts");

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
const viewUrlMap = new Map();
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
async function initPlatform() {
    await fin.Platform.init({});
    // Reset per-session state on startup.
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.clearFocusedWindowStack)();
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setActiveViews)({});
    const app = await fin.Application.getCurrent();
    // Track URL changes from all views (includes SPA navigation via pushState).
    await app.on("view-url-changed", (event) => {
        if (event.viewIdentity?.name) {
            viewUrlMap.set(event.viewIdentity.name, event.url);
            persistActiveViews();
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.recordVisit)(event.url);
        }
    });
    // Capture page titles and associate them with the view's current URL.
    await app.on("view-page-title-updated", (event) => {
        if (event.viewIdentity?.name) {
            const url = viewUrlMap.get(event.viewIdentity.name);
            if (url && event.title) {
                (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateHistoryTitle)(url, event.title);
            }
        }
    });
    // Capture favicons and associate them with the view's current URL.
    await app.on("view-page-favicon-updated", (event) => {
        if (event.viewIdentity?.name && event.favicons?.length > 0) {
            const url = viewUrlMap.get(event.viewIdentity.name);
            if (url) {
                (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateHistoryFavicon)(url, event.favicons[0]);
            }
        }
    });
    // Clean up the view-to-URL mapping when a view is closed.
    await app.on("view-destroyed", (event) => {
        if (event.viewIdentity?.name) {
            viewUrlMap.delete(event.viewIdentity.name);
            persistActiveViews();
        }
    });
    // Track a stack of recently focused windows (excluding UI-only windows).
    // When the top window is closed, the next one becomes the "last focused".
    await app.on("window-focused", (event) => {
        if (event.name && !EXCLUDED_WINDOW_NAMES.includes(event.name)) {
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.pushFocusedWindow)({ uuid: event.uuid, name: event.name });
        }
    });
    // Remove a closed window from the focus stack.
    // If the primary UI window (url-navigator) is closed, quit the platform.
    await app.on("window-closed", (event) => {
        if (event.name === "url-navigator") {
            // eslint-disable-next-line newline-per-chained-call
            fin.Platform.getCurrentSync().quit().catch(console.error);
            return;
        }
        if (event.name) {
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.removeFocusedWindow)(event.name);
        }
    });
}
/**
 * Persist the current view-to-URL map so other windows can read which views are active.
 */
function persistActiveViews() {
    const obj = {};
    for (const [name, url] of viewUrlMap.entries()) {
        obj[name] = url;
    }
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setActiveViews)(obj);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUNELHdEQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYWNrLW5hdmlnYXRpb24td2l0aGluLWEtcGxhdGZvcm0vLi9jbGllbnQvc3JjL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cmFjay1uYXZpZ2F0aW9uLXdpdGhpbi1hLXBsYXRmb3JtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cmFjay1uYXZpZ2F0aW9uLXdpdGhpbi1hLXBsYXRmb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyYWNrLW5hdmlnYXRpb24td2l0aGluLWEtcGxhdGZvcm0vLi9jbGllbnQvc3JjL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuLyoqXG4gKiBTdG9yYWdlIGFic3RyYWN0aW9uIGZvciB0aGUgbmF2aWdhdGlvbiB0cmFja2VyLlxuICpcbiAqIENlbnRyYWxpemVzIGFsbCBwZXJzaXN0ZW5jZSAoaGlzdG9yeSwgYWN0aXZlIHZpZXdzLCBmb2N1c2VkIHdpbmRvdyBzdGFjaylcbiAqIGJlaGluZCBhIHNpbXBsZSBBUEkuIFRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIHVzZXMgbG9jYWxTdG9yYWdlIChwZXJzaXN0ZW50KVxuICogYW5kIHNlc3Npb25TdG9yYWdlIChwZXItc2Vzc2lvbikuIFRvIHN3YXAgaW4gYSBkaWZmZXJlbnQgYmFja2VuZCAoZS5nLiBhIHJlbW90ZVxuICogc2VydmljZSksIHJlcGxhY2Ugb3Igd3JhcCB0aGUgZnVuY3Rpb25zIGV4cG9ydGVkIGZyb20gdGhpcyBtb2R1bGUuXG4gKi9cblxuY29uc3QgSElTVE9SWV9LRVkgPSBcIm5hdmlnYXRpb25IaXN0b3J5XCI7XG5jb25zdCBBQ1RJVkVfVklFV1NfS0VZID0gXCJhY3RpdmVWaWV3c1wiO1xuY29uc3QgRk9DVVNFRF9XSU5ET1dfU1RBQ0tfS0VZID0gXCJmb2N1c2VkV2luZG93U3RhY2tcIjtcblxuY29uc3QgTUFYX0hJU1RPUllfRU5UUklFUyA9IDUwMDtcbmNvbnN0IE1BWF9GT0NVU0VEX1NUQUNLID0gNTtcblxuLyoqXG4gKiBBIHNpbmdsZSBuYXZpZ2F0aW9uIGhpc3RvcnkgZW50cnkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yeUVudHJ5IHtcblx0LyoqIFRoZSBuYXZpZ2F0ZWQgVVJMLiAqL1xuXHR1cmw6IHN0cmluZztcblx0LyoqIFRoZSBwYWdlIHRpdGxlIGNhcHR1cmVkIGZyb20gdGhlIHZpZXcuICovXG5cdHRpdGxlOiBzdHJpbmc7XG5cdC8qKiBUaGUgcGFnZSBmYXZpY29uIFVSTCBjYXB0dXJlZCBmcm9tIHRoZSB2aWV3LiAqL1xuXHRmYXZpY29uOiBzdHJpbmc7XG5cdC8qKiBVbml4IHRpbWVzdGFtcCBvZiB0aGUgbW9zdCByZWNlbnQgdmlzaXQuICovXG5cdHRpbWVzdGFtcDogbnVtYmVyO1xuXHQvKiogVG90YWwgbnVtYmVyIG9mIHRpbWVzIHRoaXMgVVJMIGhhcyBiZWVuIHZpc2l0ZWQuICovXG5cdHZpc2l0Q291bnQ6IG51bWJlcjtcbn1cblxuLy8gLS0gTmF2aWdhdGlvbiBIaXN0b3J5IChsb2NhbFN0b3JhZ2UpIC0tXG5cbi8qKlxuICogTG9hZCBhbGwgaGlzdG9yeSBlbnRyaWVzLlxuICogQHJldHVybnMgVGhlIGFycmF5IG9mIGhpc3RvcnkgZW50cmllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEhpc3RvcnkoKTogSGlzdG9yeUVudHJ5W10ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEhJU1RPUllfS0VZKTtcblx0XHRyZXR1cm4gcmF3ID8gKEpTT04ucGFyc2UocmF3KSBhcyBIaXN0b3J5RW50cnlbXSkgOiBbXTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59XG5cbi8qKlxuICogU2F2ZSBoaXN0b3J5IGVudHJpZXMsIHJlcGxhY2luZyB0aGUgY3VycmVudCBzZXQuXG4gKiBAcGFyYW0gZW50cmllcyBUaGUgZW50cmllcyB0byBwZXJzaXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SGlzdG9yeShlbnRyaWVzOiBIaXN0b3J5RW50cnlbXSk6IHZvaWQge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShISVNUT1JZX0tFWSwgSlNPTi5zdHJpbmdpZnkoZW50cmllcykpO1xufVxuXG4vKipcbiAqIFJlY29yZCBhIHZpc2l0IHRvIHRoZSBnaXZlbiBVUkwuIEluY3JlbWVudHMgdmlzaXRDb3VudCBpZiBhbHJlYWR5IHByZXNlbnQsXG4gKiBvdGhlcndpc2UgY3JlYXRlcyBhIG5ldyBlbnRyeS4gRXZpY3RzIHRoZSBvbGRlc3QgZW50cmllcyB3aGVuIHRoZSBjYXAgaXMgcmVhY2hlZC5cbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0aGF0IHdhcyB2aXNpdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkVmlzaXQodXJsOiBzdHJpbmcpOiB2b2lkIHtcblx0Y29uc3QgZW50cmllcyA9IGdldEhpc3RvcnkoKTtcblx0Y29uc3QgZXhpc3RpbmcgPSBlbnRyaWVzLmZpbmQoKGUpID0+IGUudXJsID09PSB1cmwpO1xuXG5cdGlmIChleGlzdGluZykge1xuXHRcdGV4aXN0aW5nLnZpc2l0Q291bnQrKztcblx0XHRleGlzdGluZy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXHR9IGVsc2Uge1xuXHRcdGVudHJpZXMucHVzaCh7IHVybCwgdGl0bGU6IFwiXCIsIGZhdmljb246IFwiXCIsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSwgdmlzaXRDb3VudDogMSB9KTtcblx0fVxuXG5cdGlmIChlbnRyaWVzLmxlbmd0aCA+IE1BWF9ISVNUT1JZX0VOVFJJRVMpIHtcblx0XHRlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGIudGltZXN0YW1wIC0gYS50aW1lc3RhbXApO1xuXHRcdGVudHJpZXMubGVuZ3RoID0gTUFYX0hJU1RPUllfRU5UUklFUztcblx0fVxuXG5cdHNldEhpc3RvcnkoZW50cmllcyk7XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSB0aXRsZSBvZiBhbiBleGlzdGluZyBoaXN0b3J5IGVudHJ5LlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHdob3NlIHRpdGxlIHNob3VsZCBiZSB1cGRhdGVkLlxuICogQHBhcmFtIHRpdGxlIFRoZSBuZXcgcGFnZSB0aXRsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhpc3RvcnlUaXRsZSh1cmw6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IHZvaWQge1xuXHRjb25zdCBlbnRyaWVzID0gZ2V0SGlzdG9yeSgpO1xuXHRjb25zdCBleGlzdGluZyA9IGVudHJpZXMuZmluZCgoZSkgPT4gZS51cmwgPT09IHVybCk7XG5cblx0aWYgKGV4aXN0aW5nKSB7XG5cdFx0ZXhpc3RpbmcudGl0bGUgPSB0aXRsZTtcblx0XHRzZXRIaXN0b3J5KGVudHJpZXMpO1xuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBmYXZpY29uIG9mIGFuIGV4aXN0aW5nIGhpc3RvcnkgZW50cnkuXG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgd2hvc2UgZmF2aWNvbiBzaG91bGQgYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSBmYXZpY29uIFRoZSBmYXZpY29uIFVSTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhpc3RvcnlGYXZpY29uKHVybDogc3RyaW5nLCBmYXZpY29uOiBzdHJpbmcpOiB2b2lkIHtcblx0Y29uc3QgZW50cmllcyA9IGdldEhpc3RvcnkoKTtcblx0Y29uc3QgZXhpc3RpbmcgPSBlbnRyaWVzLmZpbmQoKGUpID0+IGUudXJsID09PSB1cmwpO1xuXG5cdGlmIChleGlzdGluZykge1xuXHRcdGV4aXN0aW5nLmZhdmljb24gPSBmYXZpY29uO1xuXHRcdHNldEhpc3RvcnkoZW50cmllcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBzaW5nbGUgaGlzdG9yeSBlbnRyeSBieSBVUkwuXG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdG8gcmVtb3ZlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSGlzdG9yeUVudHJ5KHVybDogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IGVudHJpZXMgPSBnZXRIaXN0b3J5KCkuZmlsdGVyKChlKSA9PiBlLnVybCAhPT0gdXJsKTtcblx0c2V0SGlzdG9yeShlbnRyaWVzKTtcbn1cblxuLyoqXG4gKiBDbGVhciBhbGwgbmF2aWdhdGlvbiBoaXN0b3J5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJIaXN0b3J5KCk6IHZvaWQge1xuXHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShISVNUT1JZX0tFWSk7XG59XG5cbi8vIC0tIEFjdGl2ZSBWaWV3cyAobG9jYWxTdG9yYWdlKSAtLVxuXG4vKipcbiAqIExvYWQgdGhlIGFjdGl2ZSB2aWV3cyBtYXAgKHZpZXcgbmFtZSAtPiBjdXJyZW50IFVSTCkuXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgbWFwcGluZyB2aWV3IG5hbWVzIHRvIHRoZWlyIGN1cnJlbnQgVVJMcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZVZpZXdzKCk6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9IHtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBQ1RJVkVfVklFV1NfS0VZKTtcblx0XHRyZXR1cm4gcmF3ID8gKEpTT04ucGFyc2UocmF3KSBhcyB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSkgOiB7fTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59XG5cbi8qKlxuICogU2F2ZSB0aGUgYWN0aXZlIHZpZXdzIG1hcC5cbiAqIEBwYXJhbSB2aWV3cyBBbiBvYmplY3QgbWFwcGluZyB2aWV3IG5hbWVzIHRvIHRoZWlyIGN1cnJlbnQgVVJMcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZVZpZXdzKHZpZXdzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShBQ1RJVkVfVklFV1NfS0VZLCBKU09OLnN0cmluZ2lmeSh2aWV3cykpO1xufVxuXG4vLyAtLSBGb2N1c2VkIFdpbmRvdyBTdGFjayAobG9jYWxTdG9yYWdlLCBjbGVhcmVkIG9uIHBsYXRmb3JtIHN0YXJ0dXApIC0tXG5cbi8qKlxuICogTG9hZCB0aGUgZm9jdXNlZCB3aW5kb3cgc3RhY2sgKG1vc3QgcmVjZW50IGZpcnN0KS5cbiAqIEByZXR1cm5zIEFycmF5IG9mIHdpbmRvdyBpZGVudGl0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9jdXNlZFdpbmRvd1N0YWNrKCk6IE9wZW5GaW4uSWRlbnRpdHlbXSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oRk9DVVNFRF9XSU5ET1dfU1RBQ0tfS0VZKTtcblx0XHRyZXR1cm4gcmF3ID8gKEpTT04ucGFyc2UocmF3KSBhcyBPcGVuRmluLklkZW50aXR5W10pIDogW107XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufVxuXG4vKipcbiAqIFB1c2ggYSB3aW5kb3cgdG8gdGhlIHRvcCBvZiB0aGUgZm9jdXMgc3RhY2suXG4gKiBEZWR1cGxpY2F0ZXMgYW5kIGNhcHMgdGhlIHN0YWNrIGF0IHRoZSBjb25maWd1cmVkIG1heGltdW0uXG4gKiBAcGFyYW0gaWRlbnRpdHkgVGhlIHdpbmRvdyBpZGVudGl0eSB0byBwdXNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVzaEZvY3VzZWRXaW5kb3coaWRlbnRpdHk6IE9wZW5GaW4uSWRlbnRpdHkpOiB2b2lkIHtcblx0bGV0IHN0YWNrID0gZ2V0Rm9jdXNlZFdpbmRvd1N0YWNrKCkuZmlsdGVyKCh3KSA9PiB3Lm5hbWUgIT09IGlkZW50aXR5Lm5hbWUpO1xuXHRzdGFjay51bnNoaWZ0KGlkZW50aXR5KTtcblx0aWYgKHN0YWNrLmxlbmd0aCA+IE1BWF9GT0NVU0VEX1NUQUNLKSB7XG5cdFx0c3RhY2sgPSBzdGFjay5zbGljZSgwLCBNQVhfRk9DVVNFRF9TVEFDSyk7XG5cdH1cblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oRk9DVVNFRF9XSU5ET1dfU1RBQ0tfS0VZLCBKU09OLnN0cmluZ2lmeShzdGFjaykpO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIHdpbmRvdyBmcm9tIHRoZSBmb2N1cyBzdGFjayAoZS5nLiB3aGVuIGl0IGlzIGNsb3NlZCkuXG4gKiBAcGFyYW0gd2luZG93TmFtZSBUaGUgbmFtZSBvZiB0aGUgd2luZG93IHRvIHJlbW92ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvY3VzZWRXaW5kb3cod2luZG93TmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IHN0YWNrID0gZ2V0Rm9jdXNlZFdpbmRvd1N0YWNrKCkuZmlsdGVyKCh3KSA9PiB3Lm5hbWUgIT09IHdpbmRvd05hbWUpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShGT0NVU0VEX1dJTkRPV19TVEFDS19LRVksIEpTT04uc3RyaW5naWZ5KHN0YWNrKSk7XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIGZvY3VzZWQgd2luZG93IHN0YWNrIChjYWxsZWQgb24gcGxhdGZvcm0gc3RhcnR1cCB0byByZXNldCBzdGF0ZSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckZvY3VzZWRXaW5kb3dTdGFjaygpOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oRk9DVVNFRF9XSU5ET1dfU1RBQ0tfS0VZKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1vc3QgcmVjZW50bHkgZm9jdXNlZCB3aW5kb3cgaWRlbnRpdHksIG9yIG51bGwgaWYgdGhlIHN0YWNrIGlzIGVtcHR5LlxuICogQHJldHVybnMgVGhlIHdpbmRvdyBpZGVudGl0eSBhdCB0aGUgdG9wIG9mIHRoZSBzdGFjay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RGb2N1c2VkV2luZG93KCk6IE9wZW5GaW4uSWRlbnRpdHkgfCBudWxsIHtcblx0Y29uc3Qgc3RhY2sgPSBnZXRGb2N1c2VkV2luZG93U3RhY2soKTtcblx0cmV0dXJuIHN0YWNrLmxlbmd0aCA+IDAgPyBzdGFja1swXSA6IG51bGw7XG59XG5cbi8vIC0tIENoYW5nZSBub3RpZmljYXRpb25zIC0tXG5cbi8qKiBUaGUgc3RvcmFnZSBrZXlzIHRoYXQgbWF5IHRyaWdnZXIgY2hhbmdlIG5vdGlmaWNhdGlvbnMuICovXG5leHBvcnQgdHlwZSBTdG9yYWdlS2V5ID0gXCJoaXN0b3J5XCIgfCBcImFjdGl2ZVZpZXdzXCIgfCBcImZvY3VzZWRXaW5kb3dTdGFja1wiO1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdGhhdCBmaXJlcyB3aGVuIHN0b3JhZ2UgaXMgbW9kaWZpZWQgYnkgYW5vdGhlciBzYW1lLW9yaWdpbiB3aW5kb3cuXG4gKiBVc2VzIHRoZSBicm93c2VyJ3MgXCJzdG9yYWdlXCIgZXZlbnQgd2hpY2ggZmlyZXMgb24gb3RoZXIgd2luZG93cyBzaGFyaW5nIHRoZSBzYW1lIG9yaWdpbi5cbiAqIEBwYXJhbSBjYWxsYmFjayBDYWxsZWQgd2l0aCB0aGUgbG9naWNhbCBrZXkgbmFtZSB0aGF0IGNoYW5nZWQuXG4gKiBAcmV0dXJucyBBIGNsZWFudXAgZnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBsaXN0ZW5lci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uU3RvcmFnZUNoYW5nZWQoY2FsbGJhY2s6IChrZXk6IFN0b3JhZ2VLZXkpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcblx0Y29uc3Qga2V5TWFwOiB7IFtyYXdLZXk6IHN0cmluZ106IFN0b3JhZ2VLZXkgfSA9IHtcblx0XHRbSElTVE9SWV9LRVldOiBcImhpc3RvcnlcIixcblx0XHRbQUNUSVZFX1ZJRVdTX0tFWV06IFwiYWN0aXZlVmlld3NcIixcblx0XHRbRk9DVVNFRF9XSU5ET1dfU1RBQ0tfS0VZXTogXCJmb2N1c2VkV2luZG93U3RhY2tcIlxuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHN0b3JhZ2UgZXZlbnRzIGFuZCBtYXBzIHJhdyBrZXlzIHRvIGxvZ2ljYWwga2V5IG5hbWVzLlxuXHQgKiBAcGFyYW0gZXZlbnQgVGhlIHN0b3JhZ2UgZXZlbnQgZnJvbSBhbm90aGVyIHdpbmRvdy5cblx0ICovXG5cdGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IFN0b3JhZ2VFdmVudCk6IHZvaWQge1xuXHRcdGlmIChldmVudC5rZXkgJiYga2V5TWFwW2V2ZW50LmtleV0pIHtcblx0XHRcdGNhbGxiYWNrKGtleU1hcFtldmVudC5rZXldKTtcblx0XHR9XG5cdH1cblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgaGFuZGxlcik7XG5cdHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgaGFuZGxlcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuaW1wb3J0IHtcblx0cmVjb3JkVmlzaXQsXG5cdHVwZGF0ZUhpc3RvcnlUaXRsZSxcblx0dXBkYXRlSGlzdG9yeUZhdmljb24sXG5cdHNldEFjdGl2ZVZpZXdzLFxuXHRwdXNoRm9jdXNlZFdpbmRvdyxcblx0cmVtb3ZlRm9jdXNlZFdpbmRvdyxcblx0Y2xlYXJGb2N1c2VkV2luZG93U3RhY2tcbn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG4vKipcbiAqIFRoaXMgcHJvdmlkZXIgZGVtb25zdHJhdGVzIGhvdyB0byB0cmFjayB2aWV3IG5hdmlnYXRpb24gd2l0aGluIGFuIE9wZW5GaW4gcGxhdGZvcm0uXG4gKlxuICogSXQgdXNlcyBBcHBsaWNhdGlvbi1sZXZlbCBwcm9wYWdhdGVkIGV2ZW50cyB0byBjYXB0dXJlIGFsbCB2aWV3IFVSTCBjaGFuZ2VzLCBwYWdlIHRpdGxlXG4gKiB1cGRhdGVzLCBhbmQgZmF2aWNvbiB1cGRhdGVzIGFjcm9zcyB0aGUgZW50aXJlIHBsYXRmb3JtIHdpdGggbWluaW1hbCBjb2RlLiBIaXN0b3J5IGlzXG4gKiBwZXJzaXN0ZWQgdmlhIHRoZSBzdG9yYWdlIG1vZHVsZSBzbyBpdCBzdXJ2aXZlcyByZXN0YXJ0cy5cbiAqXG4gKiBUaGUgVUkgZm9yIGJyb3dzaW5nIGFuZCBzZWFyY2hpbmcgaGlzdG9yeSBpcyBoYW5kbGVkIHNlcGFyYXRlbHkgaW4gdXJsLW5hdmlnYXRvci50cy5cbiAqL1xuXG4vKiogV2luZG93cyB0aGF0IHNob3VsZCBub3QgYmUgdHJhY2tlZCBhcyB0aGUgXCJsYXN0IGZvY3VzZWQgd2luZG93XCIuICovXG5jb25zdCBFWENMVURFRF9XSU5ET1dfTkFNRVMgPSBbXCJ1cmwtbmF2aWdhdG9yXCJdO1xuXG4vKipcbiAqIE1hcHMgYSB2aWV3IG5hbWUgdG8gdGhlIG1vc3QgcmVjZW50bHkgbmF2aWdhdGVkIFVSTCBmb3IgdGhhdCB2aWV3LFxuICogc28gdGhhdCBwYWdlLXRpdGxlLXVwZGF0ZWQgYW5kIHBhZ2UtZmF2aWNvbi11cGRhdGVkIGV2ZW50cyBjYW4gYmVcbiAqIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29ycmVjdCBoaXN0b3J5IGVudHJ5LlxuICovXG5jb25zdCB2aWV3VXJsTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRpbml0UGxhdGZvcm0oKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHBsYXRmb3JtIHByb3ZpZGVyIGFuZCBsaXN0ZW4gZm9yIG5hdmlnYXRpb24gZXZlbnRzIGdsb2JhbGx5LlxuICpcbiAqIFVzZXMgQXBwbGljYXRpb24tbGV2ZWwgcHJvcGFnYXRlZCBldmVudHMgc28gdGhhdCBhbGwgdmlldyBuYXZpZ2F0aW9ucywgdGl0bGUgY2hhbmdlcyxcbiAqIGFuZCBmYXZpY29uIHVwZGF0ZXMgYXJlIGNhcHR1cmVkIHdpdGggc2luZ2xlIGxpc3RlbmVycyAtLSBubyBwZXItdmlldyBzZXR1cCBvciBjbGVhbnVwXG4gKiBpcyBuZWVkZWQuXG4gKlxuICogRXZlbnRzIHVzZWQ6XG4gKiAtIHZpZXctdXJsLWNoYW5nZWQ6IEZpcmVzIHdoZW4gYW55IHZpZXcgbmF2aWdhdGVzIChpbmNsdWRpbmcgU1BBIHB1c2hTdGF0ZS9yZXBsYWNlU3RhdGUpLlxuICogLSB2aWV3LXBhZ2UtdGl0bGUtdXBkYXRlZDogRmlyZXMgd2hlbiBhIHZpZXcncyBkb2N1bWVudC50aXRsZSBjaGFuZ2VzLlxuICogLSB2aWV3LXBhZ2UtZmF2aWNvbi11cGRhdGVkOiBGaXJlcyB3aGVuIGEgcGFnZSdzIGZhdmljb24gVVJMcyBhcmUgZGlzY292ZXJlZC5cbiAqIC0gdmlldy1kZXN0cm95ZWQ6IEZpcmVzIHdoZW4gYSB2aWV3IGlzIGNsb3NlZCAodXNlZCBmb3IgY2xlYW51cCkuXG4gKiAtIHdpbmRvdy1mb2N1c2VkOiBGaXJlcyB3aGVuIGFueSB3aW5kb3cgZ2FpbnMgZm9jdXMgKHRyYWNrcyBsYXN0IGZvY3VzZWQgd2luZG93KS5cbiAqIC0gd2luZG93LWNsb3NlZDogRmlyZXMgd2hlbiBhIHdpbmRvdyBpcyBjbG9zZWQgKGNsZWFucyB1cCBmb2N1c2VkIHN0YWNrKS5cbiAqXG4gKiBBbHRlcm5hdGl2ZTogZm9yIHBlci12aWV3IHRyYWNraW5nIHdpdGggZmluZXIgY29udHJvbCAoZS5nLiBzZWxlY3RpdmVseSB0cmFja2luZ1xuICogb25seSBjZXJ0YWluIHZpZXdzKSwgb3ZlcnJpZGUgY3JlYXRlVmlldyBpbiBmaW4uUGxhdGZvcm0uaW5pdCh7IG92ZXJyaWRlQ2FsbGJhY2sgfSlcbiAqIGFuZCBhdHRhY2ggdXJsLWNoYW5nZWQgLyBwYWdlLXRpdGxlLXVwZGF0ZWQgbGlzdGVuZXJzIHRvIGluZGl2aWR1YWwgdmlld3MsXG4gKiByZW1vdmluZyB0aGVtIG9uIFwiZGVzdHJveWVkXCIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRQbGF0Zm9ybSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0YXdhaXQgZmluLlBsYXRmb3JtLmluaXQoe30pO1xuXG5cdC8vIFJlc2V0IHBlci1zZXNzaW9uIHN0YXRlIG9uIHN0YXJ0dXAuXG5cdGNsZWFyRm9jdXNlZFdpbmRvd1N0YWNrKCk7XG5cdHNldEFjdGl2ZVZpZXdzKHt9KTtcblxuXHRjb25zdCBhcHAgPSBhd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudCgpO1xuXG5cdC8vIFRyYWNrIFVSTCBjaGFuZ2VzIGZyb20gYWxsIHZpZXdzIChpbmNsdWRlcyBTUEEgbmF2aWdhdGlvbiB2aWEgcHVzaFN0YXRlKS5cblx0YXdhaXQgYXBwLm9uKFwidmlldy11cmwtY2hhbmdlZFwiLCAoZXZlbnQ6IHsgdXJsOiBzdHJpbmc7IHZpZXdJZGVudGl0eTogT3BlbkZpbi5JZGVudGl0eSB9KSA9PiB7XG5cdFx0aWYgKGV2ZW50LnZpZXdJZGVudGl0eT8ubmFtZSkge1xuXHRcdFx0dmlld1VybE1hcC5zZXQoZXZlbnQudmlld0lkZW50aXR5Lm5hbWUsIGV2ZW50LnVybCk7XG5cdFx0XHRwZXJzaXN0QWN0aXZlVmlld3MoKTtcblx0XHRcdHJlY29yZFZpc2l0KGV2ZW50LnVybCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBDYXB0dXJlIHBhZ2UgdGl0bGVzIGFuZCBhc3NvY2lhdGUgdGhlbSB3aXRoIHRoZSB2aWV3J3MgY3VycmVudCBVUkwuXG5cdGF3YWl0IGFwcC5vbihcInZpZXctcGFnZS10aXRsZS11cGRhdGVkXCIsIChldmVudDogeyB0aXRsZTogc3RyaW5nOyB2aWV3SWRlbnRpdHk6IE9wZW5GaW4uSWRlbnRpdHkgfSkgPT4ge1xuXHRcdGlmIChldmVudC52aWV3SWRlbnRpdHk/Lm5hbWUpIHtcblx0XHRcdGNvbnN0IHVybCA9IHZpZXdVcmxNYXAuZ2V0KGV2ZW50LnZpZXdJZGVudGl0eS5uYW1lKTtcblx0XHRcdGlmICh1cmwgJiYgZXZlbnQudGl0bGUpIHtcblx0XHRcdFx0dXBkYXRlSGlzdG9yeVRpdGxlKHVybCwgZXZlbnQudGl0bGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Ly8gQ2FwdHVyZSBmYXZpY29ucyBhbmQgYXNzb2NpYXRlIHRoZW0gd2l0aCB0aGUgdmlldydzIGN1cnJlbnQgVVJMLlxuXHRhd2FpdCBhcHAub24oXG5cdFx0XCJ2aWV3LXBhZ2UtZmF2aWNvbi11cGRhdGVkXCIsXG5cdFx0KGV2ZW50OiB7IGZhdmljb25zOiBzdHJpbmdbXTsgdmlld0lkZW50aXR5OiBPcGVuRmluLklkZW50aXR5IH0pID0+IHtcblx0XHRcdGlmIChldmVudC52aWV3SWRlbnRpdHk/Lm5hbWUgJiYgZXZlbnQuZmF2aWNvbnM/Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdmlld1VybE1hcC5nZXQoZXZlbnQudmlld0lkZW50aXR5Lm5hbWUpO1xuXHRcdFx0XHRpZiAodXJsKSB7XG5cdFx0XHRcdFx0dXBkYXRlSGlzdG9yeUZhdmljb24odXJsLCBldmVudC5mYXZpY29uc1swXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdCk7XG5cblx0Ly8gQ2xlYW4gdXAgdGhlIHZpZXctdG8tVVJMIG1hcHBpbmcgd2hlbiBhIHZpZXcgaXMgY2xvc2VkLlxuXHRhd2FpdCBhcHAub24oXCJ2aWV3LWRlc3Ryb3llZFwiLCAoZXZlbnQ6IHsgdmlld0lkZW50aXR5OiBPcGVuRmluLklkZW50aXR5IH0pID0+IHtcblx0XHRpZiAoZXZlbnQudmlld0lkZW50aXR5Py5uYW1lKSB7XG5cdFx0XHR2aWV3VXJsTWFwLmRlbGV0ZShldmVudC52aWV3SWRlbnRpdHkubmFtZSk7XG5cdFx0XHRwZXJzaXN0QWN0aXZlVmlld3MoKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIFRyYWNrIGEgc3RhY2sgb2YgcmVjZW50bHkgZm9jdXNlZCB3aW5kb3dzIChleGNsdWRpbmcgVUktb25seSB3aW5kb3dzKS5cblx0Ly8gV2hlbiB0aGUgdG9wIHdpbmRvdyBpcyBjbG9zZWQsIHRoZSBuZXh0IG9uZSBiZWNvbWVzIHRoZSBcImxhc3QgZm9jdXNlZFwiLlxuXHRhd2FpdCBhcHAub24oXCJ3aW5kb3ctZm9jdXNlZFwiLCAoZXZlbnQ6IHsgbmFtZTogc3RyaW5nOyB1dWlkOiBzdHJpbmcgfSkgPT4ge1xuXHRcdGlmIChldmVudC5uYW1lICYmICFFWENMVURFRF9XSU5ET1dfTkFNRVMuaW5jbHVkZXMoZXZlbnQubmFtZSkpIHtcblx0XHRcdHB1c2hGb2N1c2VkV2luZG93KHsgdXVpZDogZXZlbnQudXVpZCwgbmFtZTogZXZlbnQubmFtZSB9KTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIFJlbW92ZSBhIGNsb3NlZCB3aW5kb3cgZnJvbSB0aGUgZm9jdXMgc3RhY2suXG5cdC8vIElmIHRoZSBwcmltYXJ5IFVJIHdpbmRvdyAodXJsLW5hdmlnYXRvcikgaXMgY2xvc2VkLCBxdWl0IHRoZSBwbGF0Zm9ybS5cblx0YXdhaXQgYXBwLm9uKFwid2luZG93LWNsb3NlZFwiLCAoZXZlbnQ6IHsgbmFtZTogc3RyaW5nIH0pID0+IHtcblx0XHRpZiAoZXZlbnQubmFtZSA9PT0gXCJ1cmwtbmF2aWdhdG9yXCIpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuZXdsaW5lLXBlci1jaGFpbmVkLWNhbGxcblx0XHRcdGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpLnF1aXQoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGV2ZW50Lm5hbWUpIHtcblx0XHRcdHJlbW92ZUZvY3VzZWRXaW5kb3coZXZlbnQubmFtZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBQZXJzaXN0IHRoZSBjdXJyZW50IHZpZXctdG8tVVJMIG1hcCBzbyBvdGhlciB3aW5kb3dzIGNhbiByZWFkIHdoaWNoIHZpZXdzIGFyZSBhY3RpdmUuXG4gKi9cbmZ1bmN0aW9uIHBlcnNpc3RBY3RpdmVWaWV3cygpOiB2b2lkIHtcblx0Y29uc3Qgb2JqOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXHRmb3IgKGNvbnN0IFtuYW1lLCB1cmxdIG9mIHZpZXdVcmxNYXAuZW50cmllcygpKSB7XG5cdFx0b2JqW25hbWVdID0gdXJsO1xuXHR9XG5cdHNldEFjdGl2ZVZpZXdzKG9iaik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=