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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFjay1uYXZpZ2F0aW9uLXdpdGhpbi1hLXBsYXRmb3JtLy4vY2xpZW50L3NyYy9zdG9yYWdlLnRzIiwid2VicGFjazovL3RyYWNrLW5hdmlnYXRpb24td2l0aGluLWEtcGxhdGZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHJhY2stbmF2aWdhdGlvbi13aXRoaW4tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyYWNrLW5hdmlnYXRpb24td2l0aGluLWEtcGxhdGZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmFjay1uYXZpZ2F0aW9uLXdpdGhpbi1hLXBsYXRmb3JtLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbi8qKlxuICogU3RvcmFnZSBhYnN0cmFjdGlvbiBmb3IgdGhlIG5hdmlnYXRpb24gdHJhY2tlci5cbiAqXG4gKiBDZW50cmFsaXplcyBhbGwgcGVyc2lzdGVuY2UgKGhpc3RvcnksIGFjdGl2ZSB2aWV3cywgZm9jdXNlZCB3aW5kb3cgc3RhY2spXG4gKiBiZWhpbmQgYSBzaW1wbGUgQVBJLiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiB1c2VzIGxvY2FsU3RvcmFnZSAocGVyc2lzdGVudClcbiAqIGFuZCBzZXNzaW9uU3RvcmFnZSAocGVyLXNlc3Npb24pLiBUbyBzd2FwIGluIGEgZGlmZmVyZW50IGJhY2tlbmQgKGUuZy4gYSByZW1vdGVcbiAqIHNlcnZpY2UpLCByZXBsYWNlIG9yIHdyYXAgdGhlIGZ1bmN0aW9ucyBleHBvcnRlZCBmcm9tIHRoaXMgbW9kdWxlLlxuICovXG5cbmNvbnN0IEhJU1RPUllfS0VZID0gXCJuYXZpZ2F0aW9uSGlzdG9yeVwiO1xuY29uc3QgQUNUSVZFX1ZJRVdTX0tFWSA9IFwiYWN0aXZlVmlld3NcIjtcbmNvbnN0IEZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWSA9IFwiZm9jdXNlZFdpbmRvd1N0YWNrXCI7XG5cbmNvbnN0IE1BWF9ISVNUT1JZX0VOVFJJRVMgPSA1MDA7XG5jb25zdCBNQVhfRk9DVVNFRF9TVEFDSyA9IDU7XG5cbi8qKlxuICogQSBzaW5nbGUgbmF2aWdhdGlvbiBoaXN0b3J5IGVudHJ5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhpc3RvcnlFbnRyeSB7XG5cdC8qKiBUaGUgbmF2aWdhdGVkIFVSTC4gKi9cblx0dXJsOiBzdHJpbmc7XG5cdC8qKiBUaGUgcGFnZSB0aXRsZSBjYXB0dXJlZCBmcm9tIHRoZSB2aWV3LiAqL1xuXHR0aXRsZTogc3RyaW5nO1xuXHQvKiogVGhlIHBhZ2UgZmF2aWNvbiBVUkwgY2FwdHVyZWQgZnJvbSB0aGUgdmlldy4gKi9cblx0ZmF2aWNvbjogc3RyaW5nO1xuXHQvKiogVW5peCB0aW1lc3RhbXAgb2YgdGhlIG1vc3QgcmVjZW50IHZpc2l0LiAqL1xuXHR0aW1lc3RhbXA6IG51bWJlcjtcblx0LyoqIFRvdGFsIG51bWJlciBvZiB0aW1lcyB0aGlzIFVSTCBoYXMgYmVlbiB2aXNpdGVkLiAqL1xuXHR2aXNpdENvdW50OiBudW1iZXI7XG59XG5cbi8vIC0tIE5hdmlnYXRpb24gSGlzdG9yeSAobG9jYWxTdG9yYWdlKSAtLVxuXG4vKipcbiAqIExvYWQgYWxsIGhpc3RvcnkgZW50cmllcy5cbiAqIEByZXR1cm5zIFRoZSBhcnJheSBvZiBoaXN0b3J5IGVudHJpZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIaXN0b3J5KCk6IEhpc3RvcnlFbnRyeVtdIHtcblx0dHJ5IHtcblx0XHRjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShISVNUT1JZX0tFWSk7XG5cdFx0cmV0dXJuIHJhdyA/IChKU09OLnBhcnNlKHJhdykgYXMgSGlzdG9yeUVudHJ5W10pIDogW107XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBbXTtcblx0fVxufVxuXG4vKipcbiAqIFNhdmUgaGlzdG9yeSBlbnRyaWVzLCByZXBsYWNpbmcgdGhlIGN1cnJlbnQgc2V0LlxuICogQHBhcmFtIGVudHJpZXMgVGhlIGVudHJpZXMgdG8gcGVyc2lzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEhpc3RvcnkoZW50cmllczogSGlzdG9yeUVudHJ5W10pOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oSElTVE9SWV9LRVksIEpTT04uc3RyaW5naWZ5KGVudHJpZXMpKTtcbn1cblxuLyoqXG4gKiBSZWNvcmQgYSB2aXNpdCB0byB0aGUgZ2l2ZW4gVVJMLiBJbmNyZW1lbnRzIHZpc2l0Q291bnQgaWYgYWxyZWFkeSBwcmVzZW50LFxuICogb3RoZXJ3aXNlIGNyZWF0ZXMgYSBuZXcgZW50cnkuIEV2aWN0cyB0aGUgb2xkZXN0IGVudHJpZXMgd2hlbiB0aGUgY2FwIGlzIHJlYWNoZWQuXG4gKiBAcGFyYW0gdXJsIFRoZSBVUkwgdGhhdCB3YXMgdmlzaXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZFZpc2l0KHVybDogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IGVudHJpZXMgPSBnZXRIaXN0b3J5KCk7XG5cdGNvbnN0IGV4aXN0aW5nID0gZW50cmllcy5maW5kKChlKSA9PiBlLnVybCA9PT0gdXJsKTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHRleGlzdGluZy52aXNpdENvdW50Kys7XG5cdFx0ZXhpc3RpbmcudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblx0fSBlbHNlIHtcblx0XHRlbnRyaWVzLnB1c2goeyB1cmwsIHRpdGxlOiBcIlwiLCBmYXZpY29uOiBcIlwiLCB0aW1lc3RhbXA6IERhdGUubm93KCksIHZpc2l0Q291bnQ6IDEgfSk7XG5cdH1cblxuXHRpZiAoZW50cmllcy5sZW5ndGggPiBNQVhfSElTVE9SWV9FTlRSSUVTKSB7XG5cdFx0ZW50cmllcy5zb3J0KChhLCBiKSA9PiBiLnRpbWVzdGFtcCAtIGEudGltZXN0YW1wKTtcblx0XHRlbnRyaWVzLmxlbmd0aCA9IE1BWF9ISVNUT1JZX0VOVFJJRVM7XG5cdH1cblxuXHRzZXRIaXN0b3J5KGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgdGl0bGUgb2YgYW4gZXhpc3RpbmcgaGlzdG9yeSBlbnRyeS5cbiAqIEBwYXJhbSB1cmwgVGhlIFVSTCB3aG9zZSB0aXRsZSBzaG91bGQgYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0aXRsZSBUaGUgbmV3IHBhZ2UgdGl0bGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIaXN0b3J5VGl0bGUodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcblx0Y29uc3QgZW50cmllcyA9IGdldEhpc3RvcnkoKTtcblx0Y29uc3QgZXhpc3RpbmcgPSBlbnRyaWVzLmZpbmQoKGUpID0+IGUudXJsID09PSB1cmwpO1xuXG5cdGlmIChleGlzdGluZykge1xuXHRcdGV4aXN0aW5nLnRpdGxlID0gdGl0bGU7XG5cdFx0c2V0SGlzdG9yeShlbnRyaWVzKTtcblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgZmF2aWNvbiBvZiBhbiBleGlzdGluZyBoaXN0b3J5IGVudHJ5LlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHdob3NlIGZhdmljb24gc2hvdWxkIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gZmF2aWNvbiBUaGUgZmF2aWNvbiBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIaXN0b3J5RmF2aWNvbih1cmw6IHN0cmluZywgZmF2aWNvbjogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IGVudHJpZXMgPSBnZXRIaXN0b3J5KCk7XG5cdGNvbnN0IGV4aXN0aW5nID0gZW50cmllcy5maW5kKChlKSA9PiBlLnVybCA9PT0gdXJsKTtcblxuXHRpZiAoZXhpc3RpbmcpIHtcblx0XHRleGlzdGluZy5mYXZpY29uID0gZmF2aWNvbjtcblx0XHRzZXRIaXN0b3J5KGVudHJpZXMpO1xuXHR9XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgc2luZ2xlIGhpc3RvcnkgZW50cnkgYnkgVVJMLlxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIHJlbW92ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUhpc3RvcnlFbnRyeSh1cmw6IHN0cmluZyk6IHZvaWQge1xuXHRjb25zdCBlbnRyaWVzID0gZ2V0SGlzdG9yeSgpLmZpbHRlcigoZSkgPT4gZS51cmwgIT09IHVybCk7XG5cdHNldEhpc3RvcnkoZW50cmllcyk7XG59XG5cbi8qKlxuICogQ2xlYXIgYWxsIG5hdmlnYXRpb24gaGlzdG9yeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFySGlzdG9yeSgpOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oSElTVE9SWV9LRVkpO1xufVxuXG4vLyAtLSBBY3RpdmUgVmlld3MgKGxvY2FsU3RvcmFnZSkgLS1cblxuLyoqXG4gKiBMb2FkIHRoZSBhY3RpdmUgdmlld3MgbWFwICh2aWV3IG5hbWUgLT4gY3VycmVudCBVUkwpLlxuICogQHJldHVybnMgQW4gb2JqZWN0IG1hcHBpbmcgdmlldyBuYW1lcyB0byB0aGVpciBjdXJyZW50IFVSTHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVWaWV3cygpOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQUNUSVZFX1ZJRVdTX0tFWSk7XG5cdFx0cmV0dXJuIHJhdyA/IChKU09OLnBhcnNlKHJhdykgYXMgeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0pIDoge307XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiB7fTtcblx0fVxufVxuXG4vKipcbiAqIFNhdmUgdGhlIGFjdGl2ZSB2aWV3cyBtYXAuXG4gKiBAcGFyYW0gdmlld3MgQW4gb2JqZWN0IG1hcHBpbmcgdmlldyBuYW1lcyB0byB0aGVpciBjdXJyZW50IFVSTHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVWaWV3cyh2aWV3czogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oQUNUSVZFX1ZJRVdTX0tFWSwgSlNPTi5zdHJpbmdpZnkodmlld3MpKTtcbn1cblxuLy8gLS0gRm9jdXNlZCBXaW5kb3cgU3RhY2sgKGxvY2FsU3RvcmFnZSwgY2xlYXJlZCBvbiBwbGF0Zm9ybSBzdGFydHVwKSAtLVxuXG4vKipcbiAqIExvYWQgdGhlIGZvY3VzZWQgd2luZG93IHN0YWNrIChtb3N0IHJlY2VudCBmaXJzdCkuXG4gKiBAcmV0dXJucyBBcnJheSBvZiB3aW5kb3cgaWRlbnRpdGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZvY3VzZWRXaW5kb3dTdGFjaygpOiBPcGVuRmluLklkZW50aXR5W10ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWSk7XG5cdFx0cmV0dXJuIHJhdyA/IChKU09OLnBhcnNlKHJhdykgYXMgT3BlbkZpbi5JZGVudGl0eVtdKSA6IFtdO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gW107XG5cdH1cbn1cblxuLyoqXG4gKiBQdXNoIGEgd2luZG93IHRvIHRoZSB0b3Agb2YgdGhlIGZvY3VzIHN0YWNrLlxuICogRGVkdXBsaWNhdGVzIGFuZCBjYXBzIHRoZSBzdGFjayBhdCB0aGUgY29uZmlndXJlZCBtYXhpbXVtLlxuICogQHBhcmFtIGlkZW50aXR5IFRoZSB3aW5kb3cgaWRlbnRpdHkgdG8gcHVzaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2hGb2N1c2VkV2luZG93KGlkZW50aXR5OiBPcGVuRmluLklkZW50aXR5KTogdm9pZCB7XG5cdGxldCBzdGFjayA9IGdldEZvY3VzZWRXaW5kb3dTdGFjaygpLmZpbHRlcigodykgPT4gdy5uYW1lICE9PSBpZGVudGl0eS5uYW1lKTtcblx0c3RhY2sudW5zaGlmdChpZGVudGl0eSk7XG5cdGlmIChzdGFjay5sZW5ndGggPiBNQVhfRk9DVVNFRF9TVEFDSykge1xuXHRcdHN0YWNrID0gc3RhY2suc2xpY2UoMCwgTUFYX0ZPQ1VTRURfU1RBQ0spO1xuXHR9XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKEZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWSwgSlNPTi5zdHJpbmdpZnkoc3RhY2spKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSB3aW5kb3cgZnJvbSB0aGUgZm9jdXMgc3RhY2sgKGUuZy4gd2hlbiBpdCBpcyBjbG9zZWQpLlxuICogQHBhcmFtIHdpbmRvd05hbWUgVGhlIG5hbWUgb2YgdGhlIHdpbmRvdyB0byByZW1vdmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2N1c2VkV2luZG93KHdpbmRvd05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRjb25zdCBzdGFjayA9IGdldEZvY3VzZWRXaW5kb3dTdGFjaygpLmZpbHRlcigodykgPT4gdy5uYW1lICE9PSB3aW5kb3dOYW1lKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oRk9DVVNFRF9XSU5ET1dfU1RBQ0tfS0VZLCBKU09OLnN0cmluZ2lmeShzdGFjaykpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBmb2N1c2VkIHdpbmRvdyBzdGFjayAoY2FsbGVkIG9uIHBsYXRmb3JtIHN0YXJ0dXAgdG8gcmVzZXQgc3RhdGUpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb2N1c2VkV2luZG93U3RhY2soKTogdm9pZCB7XG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBtb3N0IHJlY2VudGx5IGZvY3VzZWQgd2luZG93IGlkZW50aXR5LCBvciBudWxsIGlmIHRoZSBzdGFjayBpcyBlbXB0eS5cbiAqIEByZXR1cm5zIFRoZSB3aW5kb3cgaWRlbnRpdHkgYXQgdGhlIHRvcCBvZiB0aGUgc3RhY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0Rm9jdXNlZFdpbmRvdygpOiBPcGVuRmluLklkZW50aXR5IHwgbnVsbCB7XG5cdGNvbnN0IHN0YWNrID0gZ2V0Rm9jdXNlZFdpbmRvd1N0YWNrKCk7XG5cdHJldHVybiBzdGFjay5sZW5ndGggPiAwID8gc3RhY2tbMF0gOiBudWxsO1xufVxuXG4vLyAtLSBDaGFuZ2Ugbm90aWZpY2F0aW9ucyAtLVxuXG4vKiogVGhlIHN0b3JhZ2Uga2V5cyB0aGF0IG1heSB0cmlnZ2VyIGNoYW5nZSBub3RpZmljYXRpb25zLiAqL1xuZXhwb3J0IHR5cGUgU3RvcmFnZUtleSA9IFwiaGlzdG9yeVwiIHwgXCJhY3RpdmVWaWV3c1wiIHwgXCJmb2N1c2VkV2luZG93U3RhY2tcIjtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRoYXQgZmlyZXMgd2hlbiBzdG9yYWdlIGlzIG1vZGlmaWVkIGJ5IGFub3RoZXIgc2FtZS1vcmlnaW4gd2luZG93LlxuICogVXNlcyB0aGUgYnJvd3NlcidzIFwic3RvcmFnZVwiIGV2ZW50IHdoaWNoIGZpcmVzIG9uIG90aGVyIHdpbmRvd3Mgc2hhcmluZyB0aGUgc2FtZSBvcmlnaW4uXG4gKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGVkIHdpdGggdGhlIGxvZ2ljYWwga2V5IG5hbWUgdGhhdCBjaGFuZ2VkLlxuICogQHJldHVybnMgQSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgbGlzdGVuZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvblN0b3JhZ2VDaGFuZ2VkKGNhbGxiYWNrOiAoa2V5OiBTdG9yYWdlS2V5KSA9PiB2b2lkKTogKCkgPT4gdm9pZCB7XG5cdGNvbnN0IGtleU1hcDogeyBbcmF3S2V5OiBzdHJpbmddOiBTdG9yYWdlS2V5IH0gPSB7XG5cdFx0W0hJU1RPUllfS0VZXTogXCJoaXN0b3J5XCIsXG5cdFx0W0FDVElWRV9WSUVXU19LRVldOiBcImFjdGl2ZVZpZXdzXCIsXG5cdFx0W0ZPQ1VTRURfV0lORE9XX1NUQUNLX0tFWV06IFwiZm9jdXNlZFdpbmRvd1N0YWNrXCJcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyBzdG9yYWdlIGV2ZW50cyBhbmQgbWFwcyByYXcga2V5cyB0byBsb2dpY2FsIGtleSBuYW1lcy5cblx0ICogQHBhcmFtIGV2ZW50IFRoZSBzdG9yYWdlIGV2ZW50IGZyb20gYW5vdGhlciB3aW5kb3cuXG5cdCAqL1xuXHRmdW5jdGlvbiBoYW5kbGVyKGV2ZW50OiBTdG9yYWdlRXZlbnQpOiB2b2lkIHtcblx0XHRpZiAoZXZlbnQua2V5ICYmIGtleU1hcFtldmVudC5rZXldKSB7XG5cdFx0XHRjYWxsYmFjayhrZXlNYXBbZXZlbnQua2V5XSk7XG5cdFx0fVxuXHR9XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGhhbmRsZXIpO1xuXHRyZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGhhbmRsZXIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcbmltcG9ydCB7XG5cdHJlY29yZFZpc2l0LFxuXHR1cGRhdGVIaXN0b3J5VGl0bGUsXG5cdHVwZGF0ZUhpc3RvcnlGYXZpY29uLFxuXHRzZXRBY3RpdmVWaWV3cyxcblx0cHVzaEZvY3VzZWRXaW5kb3csXG5cdHJlbW92ZUZvY3VzZWRXaW5kb3csXG5cdGNsZWFyRm9jdXNlZFdpbmRvd1N0YWNrXG59IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLyoqXG4gKiBUaGlzIHByb3ZpZGVyIGRlbW9uc3RyYXRlcyBob3cgdG8gdHJhY2sgdmlldyBuYXZpZ2F0aW9uIHdpdGhpbiBhbiBPcGVuRmluIHBsYXRmb3JtLlxuICpcbiAqIEl0IHVzZXMgQXBwbGljYXRpb24tbGV2ZWwgcHJvcGFnYXRlZCBldmVudHMgdG8gY2FwdHVyZSBhbGwgdmlldyBVUkwgY2hhbmdlcywgcGFnZSB0aXRsZVxuICogdXBkYXRlcywgYW5kIGZhdmljb24gdXBkYXRlcyBhY3Jvc3MgdGhlIGVudGlyZSBwbGF0Zm9ybSB3aXRoIG1pbmltYWwgY29kZS4gSGlzdG9yeSBpc1xuICogcGVyc2lzdGVkIHZpYSB0aGUgc3RvcmFnZSBtb2R1bGUgc28gaXQgc3Vydml2ZXMgcmVzdGFydHMuXG4gKlxuICogVGhlIFVJIGZvciBicm93c2luZyBhbmQgc2VhcmNoaW5nIGhpc3RvcnkgaXMgaGFuZGxlZCBzZXBhcmF0ZWx5IGluIHVybC1uYXZpZ2F0b3IudHMuXG4gKi9cblxuLyoqIFdpbmRvd3MgdGhhdCBzaG91bGQgbm90IGJlIHRyYWNrZWQgYXMgdGhlIFwibGFzdCBmb2N1c2VkIHdpbmRvd1wiLiAqL1xuY29uc3QgRVhDTFVERURfV0lORE9XX05BTUVTID0gW1widXJsLW5hdmlnYXRvclwiXTtcblxuLyoqXG4gKiBNYXBzIGEgdmlldyBuYW1lIHRvIHRoZSBtb3N0IHJlY2VudGx5IG5hdmlnYXRlZCBVUkwgZm9yIHRoYXQgdmlldyxcbiAqIHNvIHRoYXQgcGFnZS10aXRsZS11cGRhdGVkIGFuZCBwYWdlLWZhdmljb24tdXBkYXRlZCBldmVudHMgY2FuIGJlXG4gKiBhc3NvY2lhdGVkIHdpdGggdGhlIGNvcnJlY3QgaGlzdG9yeSBlbnRyeS5cbiAqL1xuY29uc3Qgdmlld1VybE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0aW5pdFBsYXRmb3JtKCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBwbGF0Zm9ybSBwcm92aWRlciBhbmQgbGlzdGVuIGZvciBuYXZpZ2F0aW9uIGV2ZW50cyBnbG9iYWxseS5cbiAqXG4gKiBVc2VzIEFwcGxpY2F0aW9uLWxldmVsIHByb3BhZ2F0ZWQgZXZlbnRzIHNvIHRoYXQgYWxsIHZpZXcgbmF2aWdhdGlvbnMsIHRpdGxlIGNoYW5nZXMsXG4gKiBhbmQgZmF2aWNvbiB1cGRhdGVzIGFyZSBjYXB0dXJlZCB3aXRoIHNpbmdsZSBsaXN0ZW5lcnMgLS0gbm8gcGVyLXZpZXcgc2V0dXAgb3IgY2xlYW51cFxuICogaXMgbmVlZGVkLlxuICpcbiAqIEV2ZW50cyB1c2VkOlxuICogLSB2aWV3LXVybC1jaGFuZ2VkOiBGaXJlcyB3aGVuIGFueSB2aWV3IG5hdmlnYXRlcyAoaW5jbHVkaW5nIFNQQSBwdXNoU3RhdGUvcmVwbGFjZVN0YXRlKS5cbiAqIC0gdmlldy1wYWdlLXRpdGxlLXVwZGF0ZWQ6IEZpcmVzIHdoZW4gYSB2aWV3J3MgZG9jdW1lbnQudGl0bGUgY2hhbmdlcy5cbiAqIC0gdmlldy1wYWdlLWZhdmljb24tdXBkYXRlZDogRmlyZXMgd2hlbiBhIHBhZ2UncyBmYXZpY29uIFVSTHMgYXJlIGRpc2NvdmVyZWQuXG4gKiAtIHZpZXctZGVzdHJveWVkOiBGaXJlcyB3aGVuIGEgdmlldyBpcyBjbG9zZWQgKHVzZWQgZm9yIGNsZWFudXApLlxuICogLSB3aW5kb3ctZm9jdXNlZDogRmlyZXMgd2hlbiBhbnkgd2luZG93IGdhaW5zIGZvY3VzICh0cmFja3MgbGFzdCBmb2N1c2VkIHdpbmRvdykuXG4gKiAtIHdpbmRvdy1jbG9zZWQ6IEZpcmVzIHdoZW4gYSB3aW5kb3cgaXMgY2xvc2VkIChjbGVhbnMgdXAgZm9jdXNlZCBzdGFjaykuXG4gKlxuICogQWx0ZXJuYXRpdmU6IGZvciBwZXItdmlldyB0cmFja2luZyB3aXRoIGZpbmVyIGNvbnRyb2wgKGUuZy4gc2VsZWN0aXZlbHkgdHJhY2tpbmdcbiAqIG9ubHkgY2VydGFpbiB2aWV3cyksIG92ZXJyaWRlIGNyZWF0ZVZpZXcgaW4gZmluLlBsYXRmb3JtLmluaXQoeyBvdmVycmlkZUNhbGxiYWNrIH0pXG4gKiBhbmQgYXR0YWNoIHVybC1jaGFuZ2VkIC8gcGFnZS10aXRsZS11cGRhdGVkIGxpc3RlbmVycyB0byBpbmRpdmlkdWFsIHZpZXdzLFxuICogcmVtb3ZpbmcgdGhlbSBvbiBcImRlc3Ryb3llZFwiLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0UGxhdGZvcm0oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5pbml0KHt9KTtcblxuXHQvLyBSZXNldCBwZXItc2Vzc2lvbiBzdGF0ZSBvbiBzdGFydHVwLlxuXHRjbGVhckZvY3VzZWRXaW5kb3dTdGFjaygpO1xuXG5cdGNvbnN0IGFwcCA9IGF3YWl0IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50KCk7XG5cblx0Ly8gVHJhY2sgVVJMIGNoYW5nZXMgZnJvbSBhbGwgdmlld3MgKGluY2x1ZGVzIFNQQSBuYXZpZ2F0aW9uIHZpYSBwdXNoU3RhdGUpLlxuXHRhd2FpdCBhcHAub24oXCJ2aWV3LXVybC1jaGFuZ2VkXCIsIChldmVudDogeyB1cmw6IHN0cmluZzsgdmlld0lkZW50aXR5OiBPcGVuRmluLklkZW50aXR5IH0pID0+IHtcblx0XHRpZiAoZXZlbnQudmlld0lkZW50aXR5Py5uYW1lKSB7XG5cdFx0XHR2aWV3VXJsTWFwLnNldChldmVudC52aWV3SWRlbnRpdHkubmFtZSwgZXZlbnQudXJsKTtcblx0XHRcdHBlcnNpc3RBY3RpdmVWaWV3cygpO1xuXHRcdFx0cmVjb3JkVmlzaXQoZXZlbnQudXJsKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIENhcHR1cmUgcGFnZSB0aXRsZXMgYW5kIGFzc29jaWF0ZSB0aGVtIHdpdGggdGhlIHZpZXcncyBjdXJyZW50IFVSTC5cblx0YXdhaXQgYXBwLm9uKFwidmlldy1wYWdlLXRpdGxlLXVwZGF0ZWRcIiwgKGV2ZW50OiB7IHRpdGxlOiBzdHJpbmc7IHZpZXdJZGVudGl0eTogT3BlbkZpbi5JZGVudGl0eSB9KSA9PiB7XG5cdFx0aWYgKGV2ZW50LnZpZXdJZGVudGl0eT8ubmFtZSkge1xuXHRcdFx0Y29uc3QgdXJsID0gdmlld1VybE1hcC5nZXQoZXZlbnQudmlld0lkZW50aXR5Lm5hbWUpO1xuXHRcdFx0aWYgKHVybCAmJiBldmVudC50aXRsZSkge1xuXHRcdFx0XHR1cGRhdGVIaXN0b3J5VGl0bGUodXJsLCBldmVudC50aXRsZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBDYXB0dXJlIGZhdmljb25zIGFuZCBhc3NvY2lhdGUgdGhlbSB3aXRoIHRoZSB2aWV3J3MgY3VycmVudCBVUkwuXG5cdGF3YWl0IGFwcC5vbihcblx0XHRcInZpZXctcGFnZS1mYXZpY29uLXVwZGF0ZWRcIixcblx0XHQoZXZlbnQ6IHsgZmF2aWNvbnM6IHN0cmluZ1tdOyB2aWV3SWRlbnRpdHk6IE9wZW5GaW4uSWRlbnRpdHkgfSkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LnZpZXdJZGVudGl0eT8ubmFtZSAmJiBldmVudC5mYXZpY29ucz8ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSB2aWV3VXJsTWFwLmdldChldmVudC52aWV3SWRlbnRpdHkubmFtZSk7XG5cdFx0XHRcdGlmICh1cmwpIHtcblx0XHRcdFx0XHR1cGRhdGVIaXN0b3J5RmF2aWNvbih1cmwsIGV2ZW50LmZhdmljb25zWzBdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0KTtcblxuXHQvLyBDbGVhbiB1cCB0aGUgdmlldy10by1VUkwgbWFwcGluZyB3aGVuIGEgdmlldyBpcyBjbG9zZWQuXG5cdGF3YWl0IGFwcC5vbihcInZpZXctZGVzdHJveWVkXCIsIChldmVudDogeyB2aWV3SWRlbnRpdHk6IE9wZW5GaW4uSWRlbnRpdHkgfSkgPT4ge1xuXHRcdGlmIChldmVudC52aWV3SWRlbnRpdHk/Lm5hbWUpIHtcblx0XHRcdHZpZXdVcmxNYXAuZGVsZXRlKGV2ZW50LnZpZXdJZGVudGl0eS5uYW1lKTtcblx0XHRcdHBlcnNpc3RBY3RpdmVWaWV3cygpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gVHJhY2sgYSBzdGFjayBvZiByZWNlbnRseSBmb2N1c2VkIHdpbmRvd3MgKGV4Y2x1ZGluZyBVSS1vbmx5IHdpbmRvd3MpLlxuXHQvLyBXaGVuIHRoZSB0b3Agd2luZG93IGlzIGNsb3NlZCwgdGhlIG5leHQgb25lIGJlY29tZXMgdGhlIFwibGFzdCBmb2N1c2VkXCIuXG5cdGF3YWl0IGFwcC5vbihcIndpbmRvdy1mb2N1c2VkXCIsIChldmVudDogeyBuYW1lOiBzdHJpbmc7IHV1aWQ6IHN0cmluZyB9KSA9PiB7XG5cdFx0aWYgKGV2ZW50Lm5hbWUgJiYgIUVYQ0xVREVEX1dJTkRPV19OQU1FUy5pbmNsdWRlcyhldmVudC5uYW1lKSkge1xuXHRcdFx0cHVzaEZvY3VzZWRXaW5kb3coeyB1dWlkOiBldmVudC51dWlkLCBuYW1lOiBldmVudC5uYW1lIH0pO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gUmVtb3ZlIGEgY2xvc2VkIHdpbmRvdyBmcm9tIHRoZSBmb2N1cyBzdGFjay5cblx0Ly8gSWYgdGhlIHByaW1hcnkgVUkgd2luZG93ICh1cmwtbmF2aWdhdG9yKSBpcyBjbG9zZWQsIHF1aXQgdGhlIHBsYXRmb3JtLlxuXHRhd2FpdCBhcHAub24oXCJ3aW5kb3ctY2xvc2VkXCIsIChldmVudDogeyBuYW1lOiBzdHJpbmcgfSkgPT4ge1xuXHRcdGlmIChldmVudC5uYW1lID09PSBcInVybC1uYXZpZ2F0b3JcIikge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ld2xpbmUtcGVyLWNoYWluZWQtY2FsbFxuXHRcdFx0ZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCkucXVpdCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZXZlbnQubmFtZSkge1xuXHRcdFx0cmVtb3ZlRm9jdXNlZFdpbmRvdyhldmVudC5uYW1lKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIFBlcnNpc3QgdGhlIGN1cnJlbnQgdmlldy10by1VUkwgbWFwIHNvIG90aGVyIHdpbmRvd3MgY2FuIHJlYWQgd2hpY2ggdmlld3MgYXJlIGFjdGl2ZS5cbiAqL1xuZnVuY3Rpb24gcGVyc2lzdEFjdGl2ZVZpZXdzKCk6IHZvaWQge1xuXHRjb25zdCBvYmo6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cdGZvciAoY29uc3QgW25hbWUsIHVybF0gb2Ygdmlld1VybE1hcC5lbnRyaWVzKCkpIHtcblx0XHRvYmpbbmFtZV0gPSB1cmw7XG5cdH1cblx0c2V0QWN0aXZlVmlld3Mob2JqKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==