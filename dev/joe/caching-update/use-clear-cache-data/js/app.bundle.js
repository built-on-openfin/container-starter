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
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", () => {
    initDom().catch((error) => console.error(error));
});
let loggingElement = null;
let stateElement = null;
/**
 * Initialize the DOM components and wire up event handlers.
 */
async function initDom() {
    loggingElement = document.querySelector("#logging");
    stateElement = document.querySelector("#current-state");
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
function wire(id, handler) {
    const el = document.querySelector(`#${id}`);
    if (el) {
        el.addEventListener("click", async () => handler().catch((err) => console.error(err)));
    }
}
/**
 * Create four test cookies with distinct keys so they are visible
 * in the Current State panel before and after clear operations.
 */
async function createTestCookies() {
    document.cookie = "session_id=abc123; path=/";
    document.cookie = "user_pref=dark_mode; path=/";
    document.cookie = "tracking_id=xyz789; path=/";
    document.cookie = "language=en-US; path=/";
    loggingAddEntry("Created 4 test cookies:\n" +
        "  session_id=abc123\n" +
        "  user_pref=dark_mode\n" +
        "  tracking_id=xyz789\n" +
        "  language=en-US");
    await refreshState();
}
/**
 * Create four localStorage entries with distinct keys.
 */
async function createTestLocalStorage() {
    localStorage.setItem("app_settings", JSON.stringify({ theme: "dark", fontSize: 14 }));
    localStorage.setItem("cached_user", JSON.stringify({ name: "Test User", id: 42 }));
    localStorage.setItem("last_visited", new Date().toISOString());
    localStorage.setItem("feature_flags", JSON.stringify({ beta: true, newUI: false }));
    loggingAddEntry("Created 4 localStorage entries:\n" +
        "  app_settings\n" +
        "  cached_user\n" +
        "  last_visited\n" +
        "  feature_flags");
    await refreshState();
}
/**
 * Register a minimal service worker so it is visible in the
 * Current State panel. The sw.js file is a no-op worker served
 * from the public root.
 */
async function registerTestServiceWorker() {
    try {
        const registration = await navigator.serviceWorker.register("/sw.js");
        const workerState = registration.active?.state ?? registration.installing?.state ?? "installing";
        loggingAddEntry(`Service worker registered:\n  Scope: ${registration.scope}\n  State: ${workerState}`);
    }
    catch (error) {
        loggingAddEntry(`Failed to register service worker:\n  ${error}`);
    }
    await refreshState();
}
/**
 * Read and display the current cookies, localStorage entries, and
 * service worker registrations. Called automatically after every
 * create or clear operation.
 */
async function refreshState() {
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
    const storageList = storageKeys.length > 0
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
    }
    catch {
        swList = "  (unavailable)";
    }
    stateElement.textContent =
        `COOKIES:\n${cookieList}\n\nLOCAL STORAGE:\n${storageList}\n\nSERVICE WORKERS:\n${swList}`;
}
/**
 * Clear only cookies for the localhost origin.
 * localStorage and service workers should remain visible in the state panel.
 */
async function clearCookiesOnly() {
    const options = {
        dataTypes: ["cookies"],
        origins: ["https://built-on-openfin.github.io/container-starter/dev/joe/caching-update/use-clear-cache-data"]
    };
    const codeText = "await fin.System.clearCacheData({\n" +
        "    dataTypes: ['cookies'],\n" +
        "    origins: ['https://built-on-openfin.github.io/container-starter/dev/joe/caching-update/use-clear-cache-data']\n" +
        "});";
    await executeClear(() => fin.System.clearCacheData(options), codeText, "Cleared cookies for localhost:5050.\nlocalStorage and service workers should remain.");
}
/**
 * Clear only localStorage for the localhost origin.
 * Cookies and service workers should remain visible in the state panel.
 */
async function clearLocalStorageOnly() {
    const options = {
        dataTypes: ["localStorage"],
        origins: ["https://built-on-openfin.github.io/container-starter/dev/joe/caching-update/use-clear-cache-data"]
    };
    const codeText = "await fin.System.clearCacheData({\n" +
        "    dataTypes: ['localStorage'],\n" +
        "    origins: ['https://built-on-openfin.github.io/container-starter/dev/joe/caching-update/use-clear-cache-data']\n" +
        "});";
    await executeClear(() => fin.System.clearCacheData(options), codeText, "Cleared localStorage for localhost:5050.\nCookies and service workers should remain.");
}
/**
 * Clear all service workers across all origins.
 * Cookies and localStorage should remain visible in the state panel.
 */
async function clearServiceWorkers() {
    const options = {
        dataTypes: ["serviceWorkers"]
    };
    const codeText = `await fin.System.clearCacheData({
    dataTypes: ['serviceWorkers']
});`;
    await executeClear(() => fin.System.clearCacheData(options), codeText, "Cleared service workers across all origins.\nCookies and localStorage should remain.");
}
/**
 * Clear cookies and localStorage together for the localhost origin.
 * Service workers should remain visible in the state panel.
 */
async function clearCookiesAndStorage() {
    const options = {
        dataTypes: ["cookies", "localStorage"],
        origins: ["https://built-on-openfin.github.io/container-starter/dev/joe/caching-update/use-clear-cache-data"]
    };
    const codeText = "await fin.System.clearCacheData({\n" +
        "    dataTypes: ['cookies', 'localStorage'],\n" +
        "    origins: ['https://built-on-openfin.github.io/container-starter/dev/joe/caching-update/use-clear-cache-data']\n" +
        "});";
    await executeClear(() => fin.System.clearCacheData(options), codeText, "Cleared cookies and localStorage for localhost:5050.\nService workers should remain.");
}
/**
 * Clear all browsing data with no options — the broadest possible clear.
 * Everything in the state panel should disappear.
 */
async function clearAllData() {
    const codeText = "await fin.System.clearCacheData();";
    await executeClear(() => fin.System.clearCacheData(), codeText, "Cleared all browsing data across all origins.\nAll cookies, localStorage, and service workers should be gone.");
}
/**
 * Clear only the HTTP cache using the v44 convenience method.
 * Cookies, localStorage, and service workers should all remain.
 */
async function clearHttpCache() {
    const codeText = "await fin.System.clearHTTPCache();";
    await executeClear(() => fin.System.clearHTTPCache(), codeText, "Cleared HTTP cache only (HTML, CSS, JS, images).\nCookies, localStorage, and service workers should all remain.");
}
/**
 * Clear using the legacy clearCache API for comparison.
 * No origin targeting is possible — affects everything.
 */
async function clearCacheLegacy() {
    const options = {
        appcache: true,
        cache: true,
        cookies: true,
        localStorage: true
    };
    const codeText = "await fin.System.clearCache({\n" +
        "    appcache: true,\n" +
        "    cache: true,\n" +
        "    cookies: true,\n" +
        "    localStorage: true\n" +
        "});";
    await executeClear(async () => fin.System.clearCache(options), codeText, "Legacy API: cleared all types across ALL origins.\nNo origin targeting available with this API.");
}
/**
 * Execute a clear operation, log the result, and refresh the state panel.
 * @param clearFn The async function that performs the clear.
 * @param codeText The code snippet to display in the log.
 * @param successMsg A description of what should have happened.
 */
async function executeClear(clearFn, codeText, successMsg) {
    try {
        await clearFn();
        loggingAddEntry(`Code executed:\n\n${codeText}\n\nResult: Success\n\n${successMsg}`);
    }
    catch (error) {
        loggingAddEntry(`Code executed:\n\n${codeText}\n\nResult: Error\n\n${error}`);
    }
    await refreshState();
}
/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry) {
    if (loggingElement) {
        loggingElement.textContent = `${entry}\n\n`;
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3RCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGVBQWUsQ0FBQyxLQUFhO0lBQ3JDLElBQUksY0FBYyxFQUFFLENBQUM7UUFDcEIsY0FBYyxDQUFDLFdBQVcsR0FBRyxHQUFHLEtBQUssTUFBTSxDQUFDO0lBQzdDLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNsZWFyLWNhY2hlLWRhdGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWNsZWFyLWNhY2hlLWRhdGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtY2xlYXItY2FjaGUtZGF0YS8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSB1bmljb3JuL25vLWRvY3VtZW50LWNvb2tpZSAqL1xuaW1wb3J0IHR5cGUgeyBPcGVuRmluIH0gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRpbml0RG9tKCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG59KTtcblxubGV0IGxvZ2dpbmdFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xubGV0IHN0YXRlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gY29tcG9uZW50cyBhbmQgd2lyZSB1cCBldmVudCBoYW5kbGVycy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0bG9nZ2luZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNsb2dnaW5nXCIpO1xuXHRzdGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNjdXJyZW50LXN0YXRlXCIpO1xuXG5cdGNvbnN0IGJ0bkxvZ2dpbmdDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTG9nZ2luZ0NsZWFyXCIpO1xuXHRpZiAoYnRuTG9nZ2luZ0NsZWFyKSB7XG5cdFx0YnRuTG9nZ2luZ0NsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRpZiAobG9nZ2luZ0VsZW1lbnQpIHtcblx0XHRcdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gU2V0dXAgYnV0dG9uc1xuXHR3aXJlKFwiYnRuLWNyZWF0ZS1jb29raWVzXCIsIGNyZWF0ZVRlc3RDb29raWVzKTtcblx0d2lyZShcImJ0bi1jcmVhdGUtbG9jYWwtc3RvcmFnZVwiLCBjcmVhdGVUZXN0TG9jYWxTdG9yYWdlKTtcblx0d2lyZShcImJ0bi1yZWdpc3Rlci1zZXJ2aWNlLXdvcmtlclwiLCByZWdpc3RlclRlc3RTZXJ2aWNlV29ya2VyKTtcblx0d2lyZShcImJ0bi1yZWZyZXNoLXN0YXRlXCIsIHJlZnJlc2hTdGF0ZSk7XG5cblx0Ly8gQ2xlYXIgYnV0dG9uc1xuXHR3aXJlKFwiYnRuLWNsZWFyLWNvb2tpZXMtb25seVwiLCBjbGVhckNvb2tpZXNPbmx5KTtcblx0d2lyZShcImJ0bi1jbGVhci1sb2NhbHN0b3JhZ2Utb25seVwiLCBjbGVhckxvY2FsU3RvcmFnZU9ubHkpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLXNlcnZpY2Utd29ya2Vyc1wiLCBjbGVhclNlcnZpY2VXb3JrZXJzKTtcblx0d2lyZShcImJ0bi1jbGVhci1jb29raWVzLWFuZC1zdG9yYWdlXCIsIGNsZWFyQ29va2llc0FuZFN0b3JhZ2UpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLWFsbFwiLCBjbGVhckFsbERhdGEpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLWh0dHAtY2FjaGVcIiwgY2xlYXJIdHRwQ2FjaGUpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLWNhY2hlLWxlZ2FjeVwiLCBjbGVhckNhY2hlTGVnYWN5KTtcblxuXHQvLyBTaG93IGluaXRpYWwgc3RhdGVcblx0YXdhaXQgcmVmcmVzaFN0YXRlKCk7XG59XG5cbi8qKlxuICogV2lyZSBhIGJ1dHRvbiBjbGljayB0byBhbiBhc3luYyBoYW5kbGVyLlxuICogQHBhcmFtIGlkIFRoZSBidXR0b24gZWxlbWVudCBpZC5cbiAqIEBwYXJhbSBoYW5kbGVyIFRoZSBhc3luYyBmdW5jdGlvbiB0byBjYWxsIG9uIGNsaWNrLlxuICovXG5mdW5jdGlvbiB3aXJlKGlkOiBzdHJpbmcsIGhhbmRsZXI6ICgpID0+IFByb21pc2U8dm9pZD4pOiB2b2lkIHtcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihgIyR7aWR9YCk7XG5cdGlmIChlbCkge1xuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBoYW5kbGVyKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKSk7XG5cdH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgZm91ciB0ZXN0IGNvb2tpZXMgd2l0aCBkaXN0aW5jdCBrZXlzIHNvIHRoZXkgYXJlIHZpc2libGVcbiAqIGluIHRoZSBDdXJyZW50IFN0YXRlIHBhbmVsIGJlZm9yZSBhbmQgYWZ0ZXIgY2xlYXIgb3BlcmF0aW9ucy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVzdENvb2tpZXMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGRvY3VtZW50LmNvb2tpZSA9IFwic2Vzc2lvbl9pZD1hYmMxMjM7IHBhdGg9L1wiO1xuXHRkb2N1bWVudC5jb29raWUgPSBcInVzZXJfcHJlZj1kYXJrX21vZGU7IHBhdGg9L1wiO1xuXHRkb2N1bWVudC5jb29raWUgPSBcInRyYWNraW5nX2lkPXh5ejc4OTsgcGF0aD0vXCI7XG5cdGRvY3VtZW50LmNvb2tpZSA9IFwibGFuZ3VhZ2U9ZW4tVVM7IHBhdGg9L1wiO1xuXG5cdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcIkNyZWF0ZWQgNCB0ZXN0IGNvb2tpZXM6XFxuXCIgK1xuXHRcdFx0XCIgIHNlc3Npb25faWQ9YWJjMTIzXFxuXCIgK1xuXHRcdFx0XCIgIHVzZXJfcHJlZj1kYXJrX21vZGVcXG5cIiArXG5cdFx0XHRcIiAgdHJhY2tpbmdfaWQ9eHl6Nzg5XFxuXCIgK1xuXHRcdFx0XCIgIGxhbmd1YWdlPWVuLVVTXCJcblx0KTtcblx0YXdhaXQgcmVmcmVzaFN0YXRlKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGZvdXIgbG9jYWxTdG9yYWdlIGVudHJpZXMgd2l0aCBkaXN0aW5jdCBrZXlzLlxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVUZXN0TG9jYWxTdG9yYWdlKCk6IFByb21pc2U8dm9pZD4ge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFwcF9zZXR0aW5nc1wiLCBKU09OLnN0cmluZ2lmeSh7IHRoZW1lOiBcImRhcmtcIiwgZm9udFNpemU6IDE0IH0pKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYWNoZWRfdXNlclwiLCBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IFwiVGVzdCBVc2VyXCIsIGlkOiA0MiB9KSk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdF92aXNpdGVkXCIsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmVhdHVyZV9mbGFnc1wiLCBKU09OLnN0cmluZ2lmeSh7IGJldGE6IHRydWUsIG5ld1VJOiBmYWxzZSB9KSk7XG5cblx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFwiQ3JlYXRlZCA0IGxvY2FsU3RvcmFnZSBlbnRyaWVzOlxcblwiICtcblx0XHRcdFwiICBhcHBfc2V0dGluZ3NcXG5cIiArXG5cdFx0XHRcIiAgY2FjaGVkX3VzZXJcXG5cIiArXG5cdFx0XHRcIiAgbGFzdF92aXNpdGVkXFxuXCIgK1xuXHRcdFx0XCIgIGZlYXR1cmVfZmxhZ3NcIlxuXHQpO1xuXHRhd2FpdCByZWZyZXNoU3RhdGUoKTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBhIG1pbmltYWwgc2VydmljZSB3b3JrZXIgc28gaXQgaXMgdmlzaWJsZSBpbiB0aGVcbiAqIEN1cnJlbnQgU3RhdGUgcGFuZWwuIFRoZSBzdy5qcyBmaWxlIGlzIGEgbm8tb3Agd29ya2VyIHNlcnZlZFxuICogZnJvbSB0aGUgcHVibGljIHJvb3QuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVGVzdFNlcnZpY2VXb3JrZXIoKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc3cuanNcIik7XG5cdFx0Y29uc3Qgd29ya2VyU3RhdGUgPSByZWdpc3RyYXRpb24uYWN0aXZlPy5zdGF0ZSA/PyByZWdpc3RyYXRpb24uaW5zdGFsbGluZz8uc3RhdGUgPz8gXCJpbnN0YWxsaW5nXCI7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBTZXJ2aWNlIHdvcmtlciByZWdpc3RlcmVkOlxcbiAgU2NvcGU6ICR7cmVnaXN0cmF0aW9uLnNjb3BlfVxcbiAgU3RhdGU6ICR7d29ya2VyU3RhdGV9YCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBGYWlsZWQgdG8gcmVnaXN0ZXIgc2VydmljZSB3b3JrZXI6XFxuICAke2Vycm9yfWApO1xuXHR9XG5cdGF3YWl0IHJlZnJlc2hTdGF0ZSgpO1xufVxuXG4vKipcbiAqIFJlYWQgYW5kIGRpc3BsYXkgdGhlIGN1cnJlbnQgY29va2llcywgbG9jYWxTdG9yYWdlIGVudHJpZXMsIGFuZFxuICogc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9ucy4gQ2FsbGVkIGF1dG9tYXRpY2FsbHkgYWZ0ZXIgZXZlcnlcbiAqIGNyZWF0ZSBvciBjbGVhciBvcGVyYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKCFzdGF0ZUVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBDb29raWVzXG5cdGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWU7XG5cdGNvbnN0IGNvb2tpZUxpc3QgPSBjb29raWVzXG5cdFx0PyBjb29raWVzXG5cdFx0XHRcdC5zcGxpdChcIjsgXCIpXG5cdFx0XHRcdC5tYXAoKGMpID0+IGAgICR7Y31gKVxuXHRcdFx0XHQuam9pbihcIlxcblwiKVxuXHRcdDogXCIgIChub25lKVwiO1xuXG5cdC8vIExvY2FsU3RvcmFnZVxuXHRjb25zdCBzdG9yYWdlS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG5cdGNvbnN0IHN0b3JhZ2VMaXN0ID1cblx0XHRzdG9yYWdlS2V5cy5sZW5ndGggPiAwXG5cdFx0XHQ/IHN0b3JhZ2VLZXlzLm1hcCgoaykgPT4gYCAgJHtrfSA9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oayl9YCkuam9pbihcIlxcblwiKVxuXHRcdFx0OiBcIiAgKG5vbmUpXCI7XG5cblx0Ly8gU2VydmljZSBXb3JrZXJzXG5cdGxldCBzd0xpc3QgPSBcIiAgKG5vbmUpXCI7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbnMoKTtcblx0XHRpZiAocmVnaXN0cmF0aW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRzd0xpc3QgPSByZWdpc3RyYXRpb25zXG5cdFx0XHRcdC5tYXAoKHIpID0+IHtcblx0XHRcdFx0XHRjb25zdCBzdGF0ZSA9IHIuYWN0aXZlPy5zdGF0ZSA/PyByLmluc3RhbGxpbmc/LnN0YXRlID8/IFwiaW5zdGFsbGluZ1wiO1xuXHRcdFx0XHRcdHJldHVybiBgICBTY29wZTogJHtyLnNjb3BlfSB8IFN0YXRlOiAke3N0YXRlfWA7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5qb2luKFwiXFxuXCIpO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0c3dMaXN0ID0gXCIgICh1bmF2YWlsYWJsZSlcIjtcblx0fVxuXG5cdHN0YXRlRWxlbWVudC50ZXh0Q29udGVudCA9XG5cdFx0YENPT0tJRVM6XFxuJHtjb29raWVMaXN0fVxcblxcbkxPQ0FMIFNUT1JBR0U6XFxuJHtzdG9yYWdlTGlzdH1cXG5cXG5TRVJWSUNFIFdPUktFUlM6XFxuJHtzd0xpc3R9YDtcbn1cblxuLyoqXG4gKiBDbGVhciBvbmx5IGNvb2tpZXMgZm9yIHRoZSBsb2NhbGhvc3Qgb3JpZ2luLlxuICogbG9jYWxTdG9yYWdlIGFuZCBzZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIHJlbWFpbiB2aXNpYmxlIGluIHRoZSBzdGF0ZSBwYW5lbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xlYXJDb29raWVzT25seSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgb3B0aW9uczogT3BlbkZpbi5DbGVhckRhdGFPcHRpb25zID0ge1xuXHRcdGRhdGFUeXBlczogW1wiY29va2llc1wiXSxcblx0XHRvcmlnaW5zOiBbXCJodHRwOi8vbG9jYWxob3N0OjUwNTBcIl1cblx0fTtcblxuXHRjb25zdCBjb2RlVGV4dCA9XG5cdFx0XCJhd2FpdCBmaW4uU3lzdGVtLmNsZWFyQ2FjaGVEYXRhKHtcXG5cIiArXG5cdFx0XCIgICAgZGF0YVR5cGVzOiBbJ2Nvb2tpZXMnXSxcXG5cIiArXG5cdFx0XCIgICAgb3JpZ2luczogWydodHRwOi8vbG9jYWxob3N0OjUwNTAnXVxcblwiICtcblx0XHRcIn0pO1wiO1xuXG5cdGF3YWl0IGV4ZWN1dGVDbGVhcihcblx0XHQoKSA9PiBmaW4uU3lzdGVtLmNsZWFyQ2FjaGVEYXRhKG9wdGlvbnMpLFxuXHRcdGNvZGVUZXh0LFxuXHRcdFwiQ2xlYXJlZCBjb29raWVzIGZvciBsb2NhbGhvc3Q6NTA1MC5cXG5sb2NhbFN0b3JhZ2UgYW5kIHNlcnZpY2Ugd29ya2VycyBzaG91bGQgcmVtYWluLlwiXG5cdCk7XG59XG5cbi8qKlxuICogQ2xlYXIgb25seSBsb2NhbFN0b3JhZ2UgZm9yIHRoZSBsb2NhbGhvc3Qgb3JpZ2luLlxuICogQ29va2llcyBhbmQgc2VydmljZSB3b3JrZXJzIHNob3VsZCByZW1haW4gdmlzaWJsZSBpbiB0aGUgc3RhdGUgcGFuZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlT25seSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgb3B0aW9uczogT3BlbkZpbi5DbGVhckRhdGFPcHRpb25zID0ge1xuXHRcdGRhdGFUeXBlczogW1wibG9jYWxTdG9yYWdlXCJdLFxuXHRcdG9yaWdpbnM6IFtcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MFwiXVxuXHR9O1xuXG5cdGNvbnN0IGNvZGVUZXh0ID1cblx0XHRcImF3YWl0IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEoe1xcblwiICtcblx0XHRcIiAgICBkYXRhVHlwZXM6IFsnbG9jYWxTdG9yYWdlJ10sXFxuXCIgK1xuXHRcdFwiICAgIG9yaWdpbnM6IFsnaHR0cDovL2xvY2FsaG9zdDo1MDUwJ11cXG5cIiArXG5cdFx0XCJ9KTtcIjtcblxuXHRhd2FpdCBleGVjdXRlQ2xlYXIoXG5cdFx0KCkgPT4gZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YShvcHRpb25zKSxcblx0XHRjb2RlVGV4dCxcblx0XHRcIkNsZWFyZWQgbG9jYWxTdG9yYWdlIGZvciBsb2NhbGhvc3Q6NTA1MC5cXG5Db29raWVzIGFuZCBzZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIHJlbWFpbi5cIlxuXHQpO1xufVxuXG4vKipcbiAqIENsZWFyIGFsbCBzZXJ2aWNlIHdvcmtlcnMgYWNyb3NzIGFsbCBvcmlnaW5zLlxuICogQ29va2llcyBhbmQgbG9jYWxTdG9yYWdlIHNob3VsZCByZW1haW4gdmlzaWJsZSBpbiB0aGUgc3RhdGUgcGFuZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFyU2VydmljZVdvcmtlcnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG9wdGlvbnM6IE9wZW5GaW4uQ2xlYXJEYXRhT3B0aW9ucyA9IHtcblx0XHRkYXRhVHlwZXM6IFtcInNlcnZpY2VXb3JrZXJzXCJdXG5cdH07XG5cblx0Y29uc3QgY29kZVRleHQgPSBgYXdhaXQgZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YSh7XG4gICAgZGF0YVR5cGVzOiBbJ3NlcnZpY2VXb3JrZXJzJ11cbn0pO2A7XG5cblx0YXdhaXQgZXhlY3V0ZUNsZWFyKFxuXHRcdCgpID0+IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEob3B0aW9ucyksXG5cdFx0Y29kZVRleHQsXG5cdFx0XCJDbGVhcmVkIHNlcnZpY2Ugd29ya2VycyBhY3Jvc3MgYWxsIG9yaWdpbnMuXFxuQ29va2llcyBhbmQgbG9jYWxTdG9yYWdlIHNob3VsZCByZW1haW4uXCJcblx0KTtcbn1cblxuLyoqXG4gKiBDbGVhciBjb29raWVzIGFuZCBsb2NhbFN0b3JhZ2UgdG9nZXRoZXIgZm9yIHRoZSBsb2NhbGhvc3Qgb3JpZ2luLlxuICogU2VydmljZSB3b3JrZXJzIHNob3VsZCByZW1haW4gdmlzaWJsZSBpbiB0aGUgc3RhdGUgcGFuZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFyQ29va2llc0FuZFN0b3JhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG9wdGlvbnM6IE9wZW5GaW4uQ2xlYXJEYXRhT3B0aW9ucyA9IHtcblx0XHRkYXRhVHlwZXM6IFtcImNvb2tpZXNcIiwgXCJsb2NhbFN0b3JhZ2VcIl0sXG5cdFx0b3JpZ2luczogW1wiaHR0cDovL2xvY2FsaG9zdDo1MDUwXCJdXG5cdH07XG5cblx0Y29uc3QgY29kZVRleHQgPVxuXHRcdFwiYXdhaXQgZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YSh7XFxuXCIgK1xuXHRcdFwiICAgIGRhdGFUeXBlczogWydjb29raWVzJywgJ2xvY2FsU3RvcmFnZSddLFxcblwiICtcblx0XHRcIiAgICBvcmlnaW5zOiBbJ2h0dHA6Ly9sb2NhbGhvc3Q6NTA1MCddXFxuXCIgK1xuXHRcdFwifSk7XCI7XG5cblx0YXdhaXQgZXhlY3V0ZUNsZWFyKFxuXHRcdCgpID0+IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEob3B0aW9ucyksXG5cdFx0Y29kZVRleHQsXG5cdFx0XCJDbGVhcmVkIGNvb2tpZXMgYW5kIGxvY2FsU3RvcmFnZSBmb3IgbG9jYWxob3N0OjUwNTAuXFxuU2VydmljZSB3b3JrZXJzIHNob3VsZCByZW1haW4uXCJcblx0KTtcbn1cblxuLyoqXG4gKiBDbGVhciBhbGwgYnJvd3NpbmcgZGF0YSB3aXRoIG5vIG9wdGlvbnMg4oCUIHRoZSBicm9hZGVzdCBwb3NzaWJsZSBjbGVhci5cbiAqIEV2ZXJ5dGhpbmcgaW4gdGhlIHN0YXRlIHBhbmVsIHNob3VsZCBkaXNhcHBlYXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFyQWxsRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY29kZVRleHQgPSBcImF3YWl0IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEoKTtcIjtcblxuXHRhd2FpdCBleGVjdXRlQ2xlYXIoXG5cdFx0KCkgPT4gZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YSgpLFxuXHRcdGNvZGVUZXh0LFxuXHRcdFwiQ2xlYXJlZCBhbGwgYnJvd3NpbmcgZGF0YSBhY3Jvc3MgYWxsIG9yaWdpbnMuXFxuQWxsIGNvb2tpZXMsIGxvY2FsU3RvcmFnZSwgYW5kIHNlcnZpY2Ugd29ya2VycyBzaG91bGQgYmUgZ29uZS5cIlxuXHQpO1xufVxuXG4vKipcbiAqIENsZWFyIG9ubHkgdGhlIEhUVFAgY2FjaGUgdXNpbmcgdGhlIHY0NCBjb252ZW5pZW5jZSBtZXRob2QuXG4gKiBDb29raWVzLCBsb2NhbFN0b3JhZ2UsIGFuZCBzZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIGFsbCByZW1haW4uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFySHR0cENhY2hlKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBjb2RlVGV4dCA9IFwiYXdhaXQgZmluLlN5c3RlbS5jbGVhckhUVFBDYWNoZSgpO1wiO1xuXG5cdGF3YWl0IGV4ZWN1dGVDbGVhcihcblx0XHQoKSA9PiBmaW4uU3lzdGVtLmNsZWFySFRUUENhY2hlKCksXG5cdFx0Y29kZVRleHQsXG5cdFx0XCJDbGVhcmVkIEhUVFAgY2FjaGUgb25seSAoSFRNTCwgQ1NTLCBKUywgaW1hZ2VzKS5cXG5Db29raWVzLCBsb2NhbFN0b3JhZ2UsIGFuZCBzZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIGFsbCByZW1haW4uXCJcblx0KTtcbn1cblxuLyoqXG4gKiBDbGVhciB1c2luZyB0aGUgbGVnYWN5IGNsZWFyQ2FjaGUgQVBJIGZvciBjb21wYXJpc29uLlxuICogTm8gb3JpZ2luIHRhcmdldGluZyBpcyBwb3NzaWJsZSDigJQgYWZmZWN0cyBldmVyeXRoaW5nLlxuICovXG5hc3luYyBmdW5jdGlvbiBjbGVhckNhY2hlTGVnYWN5KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdGFwcGNhY2hlOiB0cnVlLFxuXHRcdGNhY2hlOiB0cnVlLFxuXHRcdGNvb2tpZXM6IHRydWUsXG5cdFx0bG9jYWxTdG9yYWdlOiB0cnVlXG5cdH07XG5cblx0Y29uc3QgY29kZVRleHQgPVxuXHRcdFwiYXdhaXQgZmluLlN5c3RlbS5jbGVhckNhY2hlKHtcXG5cIiArXG5cdFx0XCIgICAgYXBwY2FjaGU6IHRydWUsXFxuXCIgK1xuXHRcdFwiICAgIGNhY2hlOiB0cnVlLFxcblwiICtcblx0XHRcIiAgICBjb29raWVzOiB0cnVlLFxcblwiICtcblx0XHRcIiAgICBsb2NhbFN0b3JhZ2U6IHRydWVcXG5cIiArXG5cdFx0XCJ9KTtcIjtcblxuXHRhd2FpdCBleGVjdXRlQ2xlYXIoXG5cdFx0YXN5bmMgKCkgPT4gZmluLlN5c3RlbS5jbGVhckNhY2hlKG9wdGlvbnMpLFxuXHRcdGNvZGVUZXh0LFxuXHRcdFwiTGVnYWN5IEFQSTogY2xlYXJlZCBhbGwgdHlwZXMgYWNyb3NzIEFMTCBvcmlnaW5zLlxcbk5vIG9yaWdpbiB0YXJnZXRpbmcgYXZhaWxhYmxlIHdpdGggdGhpcyBBUEkuXCJcblx0KTtcbn1cblxuLyoqXG4gKiBFeGVjdXRlIGEgY2xlYXIgb3BlcmF0aW9uLCBsb2cgdGhlIHJlc3VsdCwgYW5kIHJlZnJlc2ggdGhlIHN0YXRlIHBhbmVsLlxuICogQHBhcmFtIGNsZWFyRm4gVGhlIGFzeW5jIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgdGhlIGNsZWFyLlxuICogQHBhcmFtIGNvZGVUZXh0IFRoZSBjb2RlIHNuaXBwZXQgdG8gZGlzcGxheSBpbiB0aGUgbG9nLlxuICogQHBhcmFtIHN1Y2Nlc3NNc2cgQSBkZXNjcmlwdGlvbiBvZiB3aGF0IHNob3VsZCBoYXZlIGhhcHBlbmVkLlxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlQ2xlYXIoXG5cdGNsZWFyRm46ICgpID0+IFByb21pc2U8dm9pZD4sXG5cdGNvZGVUZXh0OiBzdHJpbmcsXG5cdHN1Y2Nlc3NNc2c6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgY2xlYXJGbigpO1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgQ29kZSBleGVjdXRlZDpcXG5cXG4ke2NvZGVUZXh0fVxcblxcblJlc3VsdDogU3VjY2Vzc1xcblxcbiR7c3VjY2Vzc01zZ31gKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYENvZGUgZXhlY3V0ZWQ6XFxuXFxuJHtjb2RlVGV4dH1cXG5cXG5SZXN1bHQ6IEVycm9yXFxuXFxuJHtlcnJvcn1gKTtcblx0fVxuXHRhd2FpdCByZWZyZXNoU3RhdGUoKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgZW50cnkgaW4gdG8gdGhlIGxvZ2dpbmcgd2luZG93LlxuICogQHBhcmFtIGVudHJ5IFRoZSBlbnRyeSB0byBhZGQuXG4gKi9cbmZ1bmN0aW9uIGxvZ2dpbmdBZGRFbnRyeShlbnRyeTogc3RyaW5nKTogdm9pZCB7XG5cdGlmIChsb2dnaW5nRWxlbWVudCkge1xuXHRcdGxvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZW50cnl9XFxuXFxuYDtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9