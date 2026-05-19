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
        `COOKIES:\n${cookieList}\n\n` +
            `LOCAL STORAGE:\n${storageList}\n\n` +
            `SERVICE WORKERS:\n${swList}`;
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
    const codeText = "await fin.System.clearCacheData({\n" +
        "    dataTypes: ['serviceWorkers']\n" +
        "});";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDRCxNQUFNLFlBQVksRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGVBQWUsQ0FBQyxLQUFhO0lBQ3JDLElBQUksY0FBYyxFQUFFLENBQUM7UUFDcEIsY0FBYyxDQUFDLFdBQVcsR0FBRyxHQUFHLEtBQUssTUFBTSxDQUFDO0lBQzdDLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNsZWFyLWNhY2hlLWRhdGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWNsZWFyLWNhY2hlLWRhdGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtY2xlYXItY2FjaGUtZGF0YS8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSB1bmljb3JuL25vLWRvY3VtZW50LWNvb2tpZSAqL1xuaW1wb3J0IHR5cGUgeyBPcGVuRmluIH0gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRpbml0RG9tKCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG59KTtcblxubGV0IGxvZ2dpbmdFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xubGV0IHN0YXRlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gY29tcG9uZW50cyBhbmQgd2lyZSB1cCBldmVudCBoYW5kbGVycy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0bG9nZ2luZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNsb2dnaW5nXCIpO1xuXHRzdGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNjdXJyZW50LXN0YXRlXCIpO1xuXG5cdGNvbnN0IGJ0bkxvZ2dpbmdDbGVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTG9nZ2luZ0NsZWFyXCIpO1xuXHRpZiAoYnRuTG9nZ2luZ0NsZWFyKSB7XG5cdFx0YnRuTG9nZ2luZ0NsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRpZiAobG9nZ2luZ0VsZW1lbnQpIHtcblx0XHRcdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gU2V0dXAgYnV0dG9uc1xuXHR3aXJlKFwiYnRuLWNyZWF0ZS1jb29raWVzXCIsIGNyZWF0ZVRlc3RDb29raWVzKTtcblx0d2lyZShcImJ0bi1jcmVhdGUtbG9jYWwtc3RvcmFnZVwiLCBjcmVhdGVUZXN0TG9jYWxTdG9yYWdlKTtcblx0d2lyZShcImJ0bi1yZWdpc3Rlci1zZXJ2aWNlLXdvcmtlclwiLCByZWdpc3RlclRlc3RTZXJ2aWNlV29ya2VyKTtcblx0d2lyZShcImJ0bi1yZWZyZXNoLXN0YXRlXCIsIHJlZnJlc2hTdGF0ZSk7XG5cblx0Ly8gQ2xlYXIgYnV0dG9uc1xuXHR3aXJlKFwiYnRuLWNsZWFyLWNvb2tpZXMtb25seVwiLCBjbGVhckNvb2tpZXNPbmx5KTtcblx0d2lyZShcImJ0bi1jbGVhci1sb2NhbHN0b3JhZ2Utb25seVwiLCBjbGVhckxvY2FsU3RvcmFnZU9ubHkpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLXNlcnZpY2Utd29ya2Vyc1wiLCBjbGVhclNlcnZpY2VXb3JrZXJzKTtcblx0d2lyZShcImJ0bi1jbGVhci1jb29raWVzLWFuZC1zdG9yYWdlXCIsIGNsZWFyQ29va2llc0FuZFN0b3JhZ2UpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLWFsbFwiLCBjbGVhckFsbERhdGEpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLWh0dHAtY2FjaGVcIiwgY2xlYXJIdHRwQ2FjaGUpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLWNhY2hlLWxlZ2FjeVwiLCBjbGVhckNhY2hlTGVnYWN5KTtcblxuXHQvLyBTaG93IGluaXRpYWwgc3RhdGVcblx0YXdhaXQgcmVmcmVzaFN0YXRlKCk7XG59XG5cbi8qKlxuICogV2lyZSBhIGJ1dHRvbiBjbGljayB0byBhbiBhc3luYyBoYW5kbGVyLlxuICogQHBhcmFtIGlkIFRoZSBidXR0b24gZWxlbWVudCBpZC5cbiAqIEBwYXJhbSBoYW5kbGVyIFRoZSBhc3luYyBmdW5jdGlvbiB0byBjYWxsIG9uIGNsaWNrLlxuICovXG5mdW5jdGlvbiB3aXJlKGlkOiBzdHJpbmcsIGhhbmRsZXI6ICgpID0+IFByb21pc2U8dm9pZD4pOiB2b2lkIHtcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihgIyR7aWR9YCk7XG5cdGlmIChlbCkge1xuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBoYW5kbGVyKCkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKSk7XG5cdH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgZm91ciB0ZXN0IGNvb2tpZXMgd2l0aCBkaXN0aW5jdCBrZXlzIHNvIHRoZXkgYXJlIHZpc2libGVcbiAqIGluIHRoZSBDdXJyZW50IFN0YXRlIHBhbmVsIGJlZm9yZSBhbmQgYWZ0ZXIgY2xlYXIgb3BlcmF0aW9ucy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVzdENvb2tpZXMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGRvY3VtZW50LmNvb2tpZSA9IFwic2Vzc2lvbl9pZD1hYmMxMjM7IHBhdGg9L1wiO1xuXHRkb2N1bWVudC5jb29raWUgPSBcInVzZXJfcHJlZj1kYXJrX21vZGU7IHBhdGg9L1wiO1xuXHRkb2N1bWVudC5jb29raWUgPSBcInRyYWNraW5nX2lkPXh5ejc4OTsgcGF0aD0vXCI7XG5cdGRvY3VtZW50LmNvb2tpZSA9IFwibGFuZ3VhZ2U9ZW4tVVM7IHBhdGg9L1wiO1xuXG5cdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcIkNyZWF0ZWQgNCB0ZXN0IGNvb2tpZXM6XFxuXCIgK1xuXHRcdFx0XCIgIHNlc3Npb25faWQ9YWJjMTIzXFxuXCIgK1xuXHRcdFx0XCIgIHVzZXJfcHJlZj1kYXJrX21vZGVcXG5cIiArXG5cdFx0XHRcIiAgdHJhY2tpbmdfaWQ9eHl6Nzg5XFxuXCIgK1xuXHRcdFx0XCIgIGxhbmd1YWdlPWVuLVVTXCJcblx0KTtcblx0YXdhaXQgcmVmcmVzaFN0YXRlKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGZvdXIgbG9jYWxTdG9yYWdlIGVudHJpZXMgd2l0aCBkaXN0aW5jdCBrZXlzLlxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVUZXN0TG9jYWxTdG9yYWdlKCk6IFByb21pc2U8dm9pZD4ge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFwcF9zZXR0aW5nc1wiLCBKU09OLnN0cmluZ2lmeSh7IHRoZW1lOiBcImRhcmtcIiwgZm9udFNpemU6IDE0IH0pKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYWNoZWRfdXNlclwiLCBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IFwiVGVzdCBVc2VyXCIsIGlkOiA0MiB9KSk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdF92aXNpdGVkXCIsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmVhdHVyZV9mbGFnc1wiLCBKU09OLnN0cmluZ2lmeSh7IGJldGE6IHRydWUsIG5ld1VJOiBmYWxzZSB9KSk7XG5cblx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFwiQ3JlYXRlZCA0IGxvY2FsU3RvcmFnZSBlbnRyaWVzOlxcblwiICtcblx0XHRcdFwiICBhcHBfc2V0dGluZ3NcXG5cIiArXG5cdFx0XHRcIiAgY2FjaGVkX3VzZXJcXG5cIiArXG5cdFx0XHRcIiAgbGFzdF92aXNpdGVkXFxuXCIgK1xuXHRcdFx0XCIgIGZlYXR1cmVfZmxhZ3NcIlxuXHQpO1xuXHRhd2FpdCByZWZyZXNoU3RhdGUoKTtcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBhIG1pbmltYWwgc2VydmljZSB3b3JrZXIgc28gaXQgaXMgdmlzaWJsZSBpbiB0aGVcbiAqIEN1cnJlbnQgU3RhdGUgcGFuZWwuIFRoZSBzdy5qcyBmaWxlIGlzIGEgbm8tb3Agd29ya2VyIHNlcnZlZFxuICogZnJvbSB0aGUgcHVibGljIHJvb3QuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVGVzdFNlcnZpY2VXb3JrZXIoKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc3cuanNcIik7XG5cdFx0Y29uc3Qgd29ya2VyU3RhdGUgPVxuXHRcdFx0cmVnaXN0cmF0aW9uLmFjdGl2ZT8uc3RhdGUgPz8gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc/LnN0YXRlID8/IFwiaW5zdGFsbGluZ1wiO1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShcblx0XHRcdGBTZXJ2aWNlIHdvcmtlciByZWdpc3RlcmVkOlxcbiAgU2NvcGU6ICR7cmVnaXN0cmF0aW9uLnNjb3BlfVxcbiAgU3RhdGU6ICR7d29ya2VyU3RhdGV9YFxuXHRcdCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBGYWlsZWQgdG8gcmVnaXN0ZXIgc2VydmljZSB3b3JrZXI6XFxuICAke2Vycm9yfWApO1xuXHR9XG5cdGF3YWl0IHJlZnJlc2hTdGF0ZSgpO1xufVxuXG4vKipcbiAqIFJlYWQgYW5kIGRpc3BsYXkgdGhlIGN1cnJlbnQgY29va2llcywgbG9jYWxTdG9yYWdlIGVudHJpZXMsIGFuZFxuICogc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9ucy4gQ2FsbGVkIGF1dG9tYXRpY2FsbHkgYWZ0ZXIgZXZlcnlcbiAqIGNyZWF0ZSBvciBjbGVhciBvcGVyYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKCFzdGF0ZUVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBDb29raWVzXG5cdGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWU7XG5cdGNvbnN0IGNvb2tpZUxpc3QgPSBjb29raWVzXG5cdFx0PyBjb29raWVzXG5cdFx0XHRcdC5zcGxpdChcIjsgXCIpXG5cdFx0XHRcdC5tYXAoKGMpID0+IGAgICR7Y31gKVxuXHRcdFx0XHQuam9pbihcIlxcblwiKVxuXHRcdDogXCIgIChub25lKVwiO1xuXG5cdC8vIExvY2FsU3RvcmFnZVxuXHRjb25zdCBzdG9yYWdlS2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG5cdGNvbnN0IHN0b3JhZ2VMaXN0ID1cblx0XHRzdG9yYWdlS2V5cy5sZW5ndGggPiAwXG5cdFx0XHQ/IHN0b3JhZ2VLZXlzLm1hcCgoaykgPT4gYCAgJHtrfSA9ICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oayl9YCkuam9pbihcIlxcblwiKVxuXHRcdFx0OiBcIiAgKG5vbmUpXCI7XG5cblx0Ly8gU2VydmljZSBXb3JrZXJzXG5cdGxldCBzd0xpc3QgPSBcIiAgKG5vbmUpXCI7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9ucyA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbnMoKTtcblx0XHRpZiAocmVnaXN0cmF0aW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRzd0xpc3QgPSByZWdpc3RyYXRpb25zXG5cdFx0XHRcdC5tYXAoKHIpID0+IHtcblx0XHRcdFx0XHRjb25zdCBzdGF0ZSA9IHIuYWN0aXZlPy5zdGF0ZSA/PyByLmluc3RhbGxpbmc/LnN0YXRlID8/IFwiaW5zdGFsbGluZ1wiO1xuXHRcdFx0XHRcdHJldHVybiBgICBTY29wZTogJHtyLnNjb3BlfSB8IFN0YXRlOiAke3N0YXRlfWA7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5qb2luKFwiXFxuXCIpO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0c3dMaXN0ID0gXCIgICh1bmF2YWlsYWJsZSlcIjtcblx0fVxuXG5cdHN0YXRlRWxlbWVudC50ZXh0Q29udGVudCA9XG5cdFx0YENPT0tJRVM6XFxuJHtjb29raWVMaXN0fVxcblxcbmAgK1xuXHRcdGBMT0NBTCBTVE9SQUdFOlxcbiR7c3RvcmFnZUxpc3R9XFxuXFxuYCArXG5cdFx0YFNFUlZJQ0UgV09SS0VSUzpcXG4ke3N3TGlzdH1gO1xufVxuXG4vKipcbiAqIENsZWFyIG9ubHkgY29va2llcyBmb3IgdGhlIGxvY2FsaG9zdCBvcmlnaW4uXG4gKiBsb2NhbFN0b3JhZ2UgYW5kIHNlcnZpY2Ugd29ya2VycyBzaG91bGQgcmVtYWluIHZpc2libGUgaW4gdGhlIHN0YXRlIHBhbmVsLlxuICovXG5hc3luYyBmdW5jdGlvbiBjbGVhckNvb2tpZXNPbmx5KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBvcHRpb25zOiBPcGVuRmluLkNsZWFyRGF0YU9wdGlvbnMgPSB7XG5cdFx0ZGF0YVR5cGVzOiBbXCJjb29raWVzXCJdLFxuXHRcdG9yaWdpbnM6IFtcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MFwiXVxuXHR9O1xuXG5cdGNvbnN0IGNvZGVUZXh0ID1cblx0XHRcImF3YWl0IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEoe1xcblwiICtcblx0XHRcIiAgICBkYXRhVHlwZXM6IFsnY29va2llcyddLFxcblwiICtcblx0XHRcIiAgICBvcmlnaW5zOiBbJ2h0dHA6Ly9sb2NhbGhvc3Q6NTA1MCddXFxuXCIgK1xuXHRcdFwifSk7XCI7XG5cblx0YXdhaXQgZXhlY3V0ZUNsZWFyKFxuXHRcdCgpID0+IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEob3B0aW9ucyksXG5cdFx0Y29kZVRleHQsXG5cdFx0XCJDbGVhcmVkIGNvb2tpZXMgZm9yIGxvY2FsaG9zdDo1MDUwLlxcbmxvY2FsU3RvcmFnZSBhbmQgc2VydmljZSB3b3JrZXJzIHNob3VsZCByZW1haW4uXCJcblx0KTtcbn1cblxuLyoqXG4gKiBDbGVhciBvbmx5IGxvY2FsU3RvcmFnZSBmb3IgdGhlIGxvY2FsaG9zdCBvcmlnaW4uXG4gKiBDb29raWVzIGFuZCBzZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIHJlbWFpbiB2aXNpYmxlIGluIHRoZSBzdGF0ZSBwYW5lbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2VPbmx5KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBvcHRpb25zOiBPcGVuRmluLkNsZWFyRGF0YU9wdGlvbnMgPSB7XG5cdFx0ZGF0YVR5cGVzOiBbXCJsb2NhbFN0b3JhZ2VcIl0sXG5cdFx0b3JpZ2luczogW1wiaHR0cDovL2xvY2FsaG9zdDo1MDUwXCJdXG5cdH07XG5cblx0Y29uc3QgY29kZVRleHQgPVxuXHRcdFwiYXdhaXQgZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YSh7XFxuXCIgK1xuXHRcdFwiICAgIGRhdGFUeXBlczogWydsb2NhbFN0b3JhZ2UnXSxcXG5cIiArXG5cdFx0XCIgICAgb3JpZ2luczogWydodHRwOi8vbG9jYWxob3N0OjUwNTAnXVxcblwiICtcblx0XHRcIn0pO1wiO1xuXG5cdGF3YWl0IGV4ZWN1dGVDbGVhcihcblx0XHQoKSA9PiBmaW4uU3lzdGVtLmNsZWFyQ2FjaGVEYXRhKG9wdGlvbnMpLFxuXHRcdGNvZGVUZXh0LFxuXHRcdFwiQ2xlYXJlZCBsb2NhbFN0b3JhZ2UgZm9yIGxvY2FsaG9zdDo1MDUwLlxcbkNvb2tpZXMgYW5kIHNlcnZpY2Ugd29ya2VycyBzaG91bGQgcmVtYWluLlwiXG5cdCk7XG59XG5cbi8qKlxuICogQ2xlYXIgYWxsIHNlcnZpY2Ugd29ya2VycyBhY3Jvc3MgYWxsIG9yaWdpbnMuXG4gKiBDb29raWVzIGFuZCBsb2NhbFN0b3JhZ2Ugc2hvdWxkIHJlbWFpbiB2aXNpYmxlIGluIHRoZSBzdGF0ZSBwYW5lbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xlYXJTZXJ2aWNlV29ya2VycygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgb3B0aW9uczogT3BlbkZpbi5DbGVhckRhdGFPcHRpb25zID0ge1xuXHRcdGRhdGFUeXBlczogW1wic2VydmljZVdvcmtlcnNcIl1cblx0fTtcblxuXHRjb25zdCBjb2RlVGV4dCA9XG5cdFx0XCJhd2FpdCBmaW4uU3lzdGVtLmNsZWFyQ2FjaGVEYXRhKHtcXG5cIiArXG5cdFx0XCIgICAgZGF0YVR5cGVzOiBbJ3NlcnZpY2VXb3JrZXJzJ11cXG5cIiArXG5cdFx0XCJ9KTtcIjtcblxuXHRhd2FpdCBleGVjdXRlQ2xlYXIoXG5cdFx0KCkgPT4gZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YShvcHRpb25zKSxcblx0XHRjb2RlVGV4dCxcblx0XHRcIkNsZWFyZWQgc2VydmljZSB3b3JrZXJzIGFjcm9zcyBhbGwgb3JpZ2lucy5cXG5Db29raWVzIGFuZCBsb2NhbFN0b3JhZ2Ugc2hvdWxkIHJlbWFpbi5cIlxuXHQpO1xufVxuXG4vKipcbiAqIENsZWFyIGNvb2tpZXMgYW5kIGxvY2FsU3RvcmFnZSB0b2dldGhlciBmb3IgdGhlIGxvY2FsaG9zdCBvcmlnaW4uXG4gKiBTZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIHJlbWFpbiB2aXNpYmxlIGluIHRoZSBzdGF0ZSBwYW5lbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xlYXJDb29raWVzQW5kU3RvcmFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgb3B0aW9uczogT3BlbkZpbi5DbGVhckRhdGFPcHRpb25zID0ge1xuXHRcdGRhdGFUeXBlczogW1wiY29va2llc1wiLCBcImxvY2FsU3RvcmFnZVwiXSxcblx0XHRvcmlnaW5zOiBbXCJodHRwOi8vbG9jYWxob3N0OjUwNTBcIl1cblx0fTtcblxuXHRjb25zdCBjb2RlVGV4dCA9XG5cdFx0XCJhd2FpdCBmaW4uU3lzdGVtLmNsZWFyQ2FjaGVEYXRhKHtcXG5cIiArXG5cdFx0XCIgICAgZGF0YVR5cGVzOiBbJ2Nvb2tpZXMnLCAnbG9jYWxTdG9yYWdlJ10sXFxuXCIgK1xuXHRcdFwiICAgIG9yaWdpbnM6IFsnaHR0cDovL2xvY2FsaG9zdDo1MDUwJ11cXG5cIiArXG5cdFx0XCJ9KTtcIjtcblxuXHRhd2FpdCBleGVjdXRlQ2xlYXIoXG5cdFx0KCkgPT4gZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YShvcHRpb25zKSxcblx0XHRjb2RlVGV4dCxcblx0XHRcIkNsZWFyZWQgY29va2llcyBhbmQgbG9jYWxTdG9yYWdlIGZvciBsb2NhbGhvc3Q6NTA1MC5cXG5TZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIHJlbWFpbi5cIlxuXHQpO1xufVxuXG4vKipcbiAqIENsZWFyIGFsbCBicm93c2luZyBkYXRhIHdpdGggbm8gb3B0aW9ucyDigJQgdGhlIGJyb2FkZXN0IHBvc3NpYmxlIGNsZWFyLlxuICogRXZlcnl0aGluZyBpbiB0aGUgc3RhdGUgcGFuZWwgc2hvdWxkIGRpc2FwcGVhci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xlYXJBbGxEYXRhKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBjb2RlVGV4dCA9IFwiYXdhaXQgZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YSgpO1wiO1xuXG5cdGF3YWl0IGV4ZWN1dGVDbGVhcihcblx0XHQoKSA9PiBmaW4uU3lzdGVtLmNsZWFyQ2FjaGVEYXRhKCksXG5cdFx0Y29kZVRleHQsXG5cdFx0XCJDbGVhcmVkIGFsbCBicm93c2luZyBkYXRhIGFjcm9zcyBhbGwgb3JpZ2lucy5cXG5BbGwgY29va2llcywgbG9jYWxTdG9yYWdlLCBhbmQgc2VydmljZSB3b3JrZXJzIHNob3VsZCBiZSBnb25lLlwiXG5cdCk7XG59XG5cbi8qKlxuICogQ2xlYXIgb25seSB0aGUgSFRUUCBjYWNoZSB1c2luZyB0aGUgdjQ0IGNvbnZlbmllbmNlIG1ldGhvZC5cbiAqIENvb2tpZXMsIGxvY2FsU3RvcmFnZSwgYW5kIHNlcnZpY2Ugd29ya2VycyBzaG91bGQgYWxsIHJlbWFpbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xlYXJIdHRwQ2FjaGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGNvZGVUZXh0ID0gXCJhd2FpdCBmaW4uU3lzdGVtLmNsZWFySFRUUENhY2hlKCk7XCI7XG5cblx0YXdhaXQgZXhlY3V0ZUNsZWFyKFxuXHRcdCgpID0+IGZpbi5TeXN0ZW0uY2xlYXJIVFRQQ2FjaGUoKSxcblx0XHRjb2RlVGV4dCxcblx0XHRcIkNsZWFyZWQgSFRUUCBjYWNoZSBvbmx5IChIVE1MLCBDU1MsIEpTLCBpbWFnZXMpLlxcbkNvb2tpZXMsIGxvY2FsU3RvcmFnZSwgYW5kIHNlcnZpY2Ugd29ya2VycyBzaG91bGQgYWxsIHJlbWFpbi5cIlxuXHQpO1xufVxuXG4vKipcbiAqIENsZWFyIHVzaW5nIHRoZSBsZWdhY3kgY2xlYXJDYWNoZSBBUEkgZm9yIGNvbXBhcmlzb24uXG4gKiBObyBvcmlnaW4gdGFyZ2V0aW5nIGlzIHBvc3NpYmxlIOKAlCBhZmZlY3RzIGV2ZXJ5dGhpbmcuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFyQ2FjaGVMZWdhY3koKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0YXBwY2FjaGU6IHRydWUsXG5cdFx0Y2FjaGU6IHRydWUsXG5cdFx0Y29va2llczogdHJ1ZSxcblx0XHRsb2NhbFN0b3JhZ2U6IHRydWVcblx0fTtcblxuXHRjb25zdCBjb2RlVGV4dCA9XG5cdFx0XCJhd2FpdCBmaW4uU3lzdGVtLmNsZWFyQ2FjaGUoe1xcblwiICtcblx0XHRcIiAgICBhcHBjYWNoZTogdHJ1ZSxcXG5cIiArXG5cdFx0XCIgICAgY2FjaGU6IHRydWUsXFxuXCIgK1xuXHRcdFwiICAgIGNvb2tpZXM6IHRydWUsXFxuXCIgK1xuXHRcdFwiICAgIGxvY2FsU3RvcmFnZTogdHJ1ZVxcblwiICtcblx0XHRcIn0pO1wiO1xuXG5cdGF3YWl0IGV4ZWN1dGVDbGVhcihcblx0XHRhc3luYyAoKSA9PiBmaW4uU3lzdGVtLmNsZWFyQ2FjaGUob3B0aW9ucyksXG5cdFx0Y29kZVRleHQsXG5cdFx0XCJMZWdhY3kgQVBJOiBjbGVhcmVkIGFsbCB0eXBlcyBhY3Jvc3MgQUxMIG9yaWdpbnMuXFxuTm8gb3JpZ2luIHRhcmdldGluZyBhdmFpbGFibGUgd2l0aCB0aGlzIEFQSS5cIlxuXHQpO1xufVxuXG4vKipcbiAqIEV4ZWN1dGUgYSBjbGVhciBvcGVyYXRpb24sIGxvZyB0aGUgcmVzdWx0LCBhbmQgcmVmcmVzaCB0aGUgc3RhdGUgcGFuZWwuXG4gKiBAcGFyYW0gY2xlYXJGbiBUaGUgYXN5bmMgZnVuY3Rpb24gdGhhdCBwZXJmb3JtcyB0aGUgY2xlYXIuXG4gKiBAcGFyYW0gY29kZVRleHQgVGhlIGNvZGUgc25pcHBldCB0byBkaXNwbGF5IGluIHRoZSBsb2cuXG4gKiBAcGFyYW0gc3VjY2Vzc01zZyBBIGRlc2NyaXB0aW9uIG9mIHdoYXQgc2hvdWxkIGhhdmUgaGFwcGVuZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVDbGVhcihcblx0Y2xlYXJGbjogKCkgPT4gUHJvbWlzZTx2b2lkPixcblx0Y29kZVRleHQ6IHN0cmluZyxcblx0c3VjY2Vzc01zZzogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBjbGVhckZuKCk7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBDb2RlIGV4ZWN1dGVkOlxcblxcbiR7Y29kZVRleHR9XFxuXFxuUmVzdWx0OiBTdWNjZXNzXFxuXFxuJHtzdWNjZXNzTXNnfWApO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgQ29kZSBleGVjdXRlZDpcXG5cXG4ke2NvZGVUZXh0fVxcblxcblJlc3VsdDogRXJyb3JcXG5cXG4ke2Vycm9yfWApO1xuXHR9XG5cdGF3YWl0IHJlZnJlc2hTdGF0ZSgpO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBlbnRyeSBpbiB0byB0aGUgbG9nZ2luZyB3aW5kb3cuXG4gKiBAcGFyYW0gZW50cnkgVGhlIGVudHJ5IHRvIGFkZC5cbiAqL1xuZnVuY3Rpb24gbG9nZ2luZ0FkZEVudHJ5KGVudHJ5OiBzdHJpbmcpOiB2b2lkIHtcblx0aWYgKGxvZ2dpbmdFbGVtZW50KSB7XG5cdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtlbnRyeX1cXG5cXG5gO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=