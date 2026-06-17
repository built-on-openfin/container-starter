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
    stateElement.textContent = `COOKIES:\n${cookieList}\n\nLOCAL STORAGE:\n${storageList}\n\nSERVICE WORKERS:\n${swList}`;
}
/**
 * Clear only cookies for the localhost origin.
 * localStorage and service workers should remain visible in the state panel.
 */
async function clearCookiesOnly() {
    const options = {
        dataTypes: ["cookies"],
        origins: ["https://built-on-openfin.github.io/container-starter/snyk-fix-f55c7771874d13c20231469377595494/use-clear-cache-data"]
    };
    const codeText = "await fin.System.clearCacheData({\n" +
        "    dataTypes: ['cookies'],\n" +
        "    origins: ['https://built-on-openfin.github.io/container-starter/snyk-fix-f55c7771874d13c20231469377595494/use-clear-cache-data']\n" +
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
        origins: ["https://built-on-openfin.github.io/container-starter/snyk-fix-f55c7771874d13c20231469377595494/use-clear-cache-data"]
    };
    const codeText = "await fin.System.clearCacheData({\n" +
        "    dataTypes: ['localStorage'],\n" +
        "    origins: ['https://built-on-openfin.github.io/container-starter/snyk-fix-f55c7771874d13c20231469377595494/use-clear-cache-data']\n" +
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
        origins: ["https://built-on-openfin.github.io/container-starter/snyk-fix-f55c7771874d13c20231469377595494/use-clear-cache-data"]
    };
    const codeText = "await fin.System.clearCacheData({\n" +
        "    dataTypes: ['cookies', 'localStorage'],\n" +
        "    origins: ['https://built-on-openfin.github.io/container-starter/snyk-fix-f55c7771874d13c20231469377595494/use-clear-cache-data']\n" +
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdEIsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsZUFBZSxDQUFDLEtBQWE7SUFDckMsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNwQixjQUFjLENBQUMsV0FBVyxHQUFHLEdBQUcsS0FBSyxNQUFNLENBQUM7SUFDN0MsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY2xlYXItY2FjaGUtZGF0YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtY2xlYXItY2FjaGUtZGF0YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1jbGVhci1jYWNoZS1kYXRhLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIHVuaWNvcm4vbm8tZG9jdW1lbnQtY29va2llICovXG5pbXBvcnQgdHlwZSB7IE9wZW5GaW4gfSBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdGluaXREb20oKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbn0pO1xuXG5sZXQgbG9nZ2luZ0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5sZXQgc3RhdGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBjb21wb25lbnRzIGFuZCB3aXJlIHVwIGV2ZW50IGhhbmRsZXJzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRsb2dnaW5nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2xvZ2dpbmdcIik7XG5cdHN0YXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2N1cnJlbnQtc3RhdGVcIik7XG5cblx0Y29uc3QgYnRuTG9nZ2luZ0NsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Mb2dnaW5nQ2xlYXJcIik7XG5cdGlmIChidG5Mb2dnaW5nQ2xlYXIpIHtcblx0XHRidG5Mb2dnaW5nQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGlmIChsb2dnaW5nRWxlbWVudCkge1xuXHRcdFx0XHRsb2dnaW5nRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBTZXR1cCBidXR0b25zXG5cdHdpcmUoXCJidG4tY3JlYXRlLWNvb2tpZXNcIiwgY3JlYXRlVGVzdENvb2tpZXMpO1xuXHR3aXJlKFwiYnRuLWNyZWF0ZS1sb2NhbC1zdG9yYWdlXCIsIGNyZWF0ZVRlc3RMb2NhbFN0b3JhZ2UpO1xuXHR3aXJlKFwiYnRuLXJlZ2lzdGVyLXNlcnZpY2Utd29ya2VyXCIsIHJlZ2lzdGVyVGVzdFNlcnZpY2VXb3JrZXIpO1xuXHR3aXJlKFwiYnRuLXJlZnJlc2gtc3RhdGVcIiwgcmVmcmVzaFN0YXRlKTtcblxuXHQvLyBDbGVhciBidXR0b25zXG5cdHdpcmUoXCJidG4tY2xlYXItY29va2llcy1vbmx5XCIsIGNsZWFyQ29va2llc09ubHkpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLWxvY2Fsc3RvcmFnZS1vbmx5XCIsIGNsZWFyTG9jYWxTdG9yYWdlT25seSk7XG5cdHdpcmUoXCJidG4tY2xlYXItc2VydmljZS13b3JrZXJzXCIsIGNsZWFyU2VydmljZVdvcmtlcnMpO1xuXHR3aXJlKFwiYnRuLWNsZWFyLWNvb2tpZXMtYW5kLXN0b3JhZ2VcIiwgY2xlYXJDb29raWVzQW5kU3RvcmFnZSk7XG5cdHdpcmUoXCJidG4tY2xlYXItYWxsXCIsIGNsZWFyQWxsRGF0YSk7XG5cdHdpcmUoXCJidG4tY2xlYXItaHR0cC1jYWNoZVwiLCBjbGVhckh0dHBDYWNoZSk7XG5cdHdpcmUoXCJidG4tY2xlYXItY2FjaGUtbGVnYWN5XCIsIGNsZWFyQ2FjaGVMZWdhY3kpO1xuXG5cdC8vIFNob3cgaW5pdGlhbCBzdGF0ZVxuXHRhd2FpdCByZWZyZXNoU3RhdGUoKTtcbn1cblxuLyoqXG4gKiBXaXJlIGEgYnV0dG9uIGNsaWNrIHRvIGFuIGFzeW5jIGhhbmRsZXIuXG4gKiBAcGFyYW0gaWQgVGhlIGJ1dHRvbiBlbGVtZW50IGlkLlxuICogQHBhcmFtIGhhbmRsZXIgVGhlIGFzeW5jIGZ1bmN0aW9uIHRvIGNhbGwgb24gY2xpY2suXG4gKi9cbmZ1bmN0aW9uIHdpcmUoaWQ6IHN0cmluZywgaGFuZGxlcjogKCkgPT4gUHJvbWlzZTx2b2lkPik6IHZvaWQge1xuXHRjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KGAjJHtpZH1gKTtcblx0aWYgKGVsKSB7XG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IGhhbmRsZXIoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpKTtcblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBmb3VyIHRlc3QgY29va2llcyB3aXRoIGRpc3RpbmN0IGtleXMgc28gdGhleSBhcmUgdmlzaWJsZVxuICogaW4gdGhlIEN1cnJlbnQgU3RhdGUgcGFuZWwgYmVmb3JlIGFuZCBhZnRlciBjbGVhciBvcGVyYXRpb25zLlxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVUZXN0Q29va2llcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0ZG9jdW1lbnQuY29va2llID0gXCJzZXNzaW9uX2lkPWFiYzEyMzsgcGF0aD0vXCI7XG5cdGRvY3VtZW50LmNvb2tpZSA9IFwidXNlcl9wcmVmPWRhcmtfbW9kZTsgcGF0aD0vXCI7XG5cdGRvY3VtZW50LmNvb2tpZSA9IFwidHJhY2tpbmdfaWQ9eHl6Nzg5OyBwYXRoPS9cIjtcblx0ZG9jdW1lbnQuY29va2llID0gXCJsYW5ndWFnZT1lbi1VUzsgcGF0aD0vXCI7XG5cblx0bG9nZ2luZ0FkZEVudHJ5KFxuXHRcdFwiQ3JlYXRlZCA0IHRlc3QgY29va2llczpcXG5cIiArXG5cdFx0XHRcIiAgc2Vzc2lvbl9pZD1hYmMxMjNcXG5cIiArXG5cdFx0XHRcIiAgdXNlcl9wcmVmPWRhcmtfbW9kZVxcblwiICtcblx0XHRcdFwiICB0cmFja2luZ19pZD14eXo3ODlcXG5cIiArXG5cdFx0XHRcIiAgbGFuZ3VhZ2U9ZW4tVVNcIlxuXHQpO1xuXHRhd2FpdCByZWZyZXNoU3RhdGUoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgZm91ciBsb2NhbFN0b3JhZ2UgZW50cmllcyB3aXRoIGRpc3RpbmN0IGtleXMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRlc3RMb2NhbFN0b3JhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXBwX3NldHRpbmdzXCIsIEpTT04uc3RyaW5naWZ5KHsgdGhlbWU6IFwiZGFya1wiLCBmb250U2l6ZTogMTQgfSkpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhY2hlZF91c2VyXCIsIEpTT04uc3RyaW5naWZ5KHsgbmFtZTogXCJUZXN0IFVzZXJcIiwgaWQ6IDQyIH0pKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0X3Zpc2l0ZWRcIiwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmZWF0dXJlX2ZsYWdzXCIsIEpTT04uc3RyaW5naWZ5KHsgYmV0YTogdHJ1ZSwgbmV3VUk6IGZhbHNlIH0pKTtcblxuXHRsb2dnaW5nQWRkRW50cnkoXG5cdFx0XCJDcmVhdGVkIDQgbG9jYWxTdG9yYWdlIGVudHJpZXM6XFxuXCIgK1xuXHRcdFx0XCIgIGFwcF9zZXR0aW5nc1xcblwiICtcblx0XHRcdFwiICBjYWNoZWRfdXNlclxcblwiICtcblx0XHRcdFwiICBsYXN0X3Zpc2l0ZWRcXG5cIiArXG5cdFx0XHRcIiAgZmVhdHVyZV9mbGFnc1wiXG5cdCk7XG5cdGF3YWl0IHJlZnJlc2hTdGF0ZSgpO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbWluaW1hbCBzZXJ2aWNlIHdvcmtlciBzbyBpdCBpcyB2aXNpYmxlIGluIHRoZVxuICogQ3VycmVudCBTdGF0ZSBwYW5lbC4gVGhlIHN3LmpzIGZpbGUgaXMgYSBuby1vcCB3b3JrZXIgc2VydmVkXG4gKiBmcm9tIHRoZSBwdWJsaWMgcm9vdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJUZXN0U2VydmljZVdvcmtlcigpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZWdpc3RyYXRpb24gPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi9zdy5qc1wiKTtcblx0XHRjb25zdCB3b3JrZXJTdGF0ZSA9IHJlZ2lzdHJhdGlvbi5hY3RpdmU/LnN0YXRlID8/IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nPy5zdGF0ZSA/PyBcImluc3RhbGxpbmdcIjtcblx0XHRsb2dnaW5nQWRkRW50cnkoYFNlcnZpY2Ugd29ya2VyIHJlZ2lzdGVyZWQ6XFxuICBTY29wZTogJHtyZWdpc3RyYXRpb24uc2NvcGV9XFxuICBTdGF0ZTogJHt3b3JrZXJTdGF0ZX1gKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYEZhaWxlZCB0byByZWdpc3RlciBzZXJ2aWNlIHdvcmtlcjpcXG4gICR7ZXJyb3J9YCk7XG5cdH1cblx0YXdhaXQgcmVmcmVzaFN0YXRlKCk7XG59XG5cbi8qKlxuICogUmVhZCBhbmQgZGlzcGxheSB0aGUgY3VycmVudCBjb29raWVzLCBsb2NhbFN0b3JhZ2UgZW50cmllcywgYW5kXG4gKiBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb25zLiBDYWxsZWQgYXV0b21hdGljYWxseSBhZnRlciBldmVyeVxuICogY3JlYXRlIG9yIGNsZWFyIG9wZXJhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFN0YXRlKCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoIXN0YXRlRWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIENvb2tpZXNcblx0Y29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZTtcblx0Y29uc3QgY29va2llTGlzdCA9IGNvb2tpZXNcblx0XHQ/IGNvb2tpZXNcblx0XHRcdFx0LnNwbGl0KFwiOyBcIilcblx0XHRcdFx0Lm1hcCgoYykgPT4gYCAgJHtjfWApXG5cdFx0XHRcdC5qb2luKFwiXFxuXCIpXG5cdFx0OiBcIiAgKG5vbmUpXCI7XG5cblx0Ly8gTG9jYWxTdG9yYWdlXG5cdGNvbnN0IHN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcblx0Y29uc3Qgc3RvcmFnZUxpc3QgPVxuXHRcdHN0b3JhZ2VLZXlzLmxlbmd0aCA+IDBcblx0XHRcdD8gc3RvcmFnZUtleXMubWFwKChrKSA9PiBgICAke2t9ID0gJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKX1gKS5qb2luKFwiXFxuXCIpXG5cdFx0XHQ6IFwiICAobm9uZSlcIjtcblxuXHQvLyBTZXJ2aWNlIFdvcmtlcnNcblx0bGV0IHN3TGlzdCA9IFwiICAobm9uZSlcIjtcblx0dHJ5IHtcblx0XHRjb25zdCByZWdpc3RyYXRpb25zID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9ucygpO1xuXHRcdGlmIChyZWdpc3RyYXRpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdHN3TGlzdCA9IHJlZ2lzdHJhdGlvbnNcblx0XHRcdFx0Lm1hcCgocikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHN0YXRlID0gci5hY3RpdmU/LnN0YXRlID8/IHIuaW5zdGFsbGluZz8uc3RhdGUgPz8gXCJpbnN0YWxsaW5nXCI7XG5cdFx0XHRcdFx0cmV0dXJuIGAgIFNjb3BlOiAke3Iuc2NvcGV9IHwgU3RhdGU6ICR7c3RhdGV9YDtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmpvaW4oXCJcXG5cIik7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRzd0xpc3QgPSBcIiAgKHVuYXZhaWxhYmxlKVwiO1xuXHR9XG5cblx0c3RhdGVFbGVtZW50LnRleHRDb250ZW50ID0gYENPT0tJRVM6XFxuJHtjb29raWVMaXN0fVxcblxcbkxPQ0FMIFNUT1JBR0U6XFxuJHtzdG9yYWdlTGlzdH1cXG5cXG5TRVJWSUNFIFdPUktFUlM6XFxuJHtzd0xpc3R9YDtcbn1cblxuLyoqXG4gKiBDbGVhciBvbmx5IGNvb2tpZXMgZm9yIHRoZSBsb2NhbGhvc3Qgb3JpZ2luLlxuICogbG9jYWxTdG9yYWdlIGFuZCBzZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIHJlbWFpbiB2aXNpYmxlIGluIHRoZSBzdGF0ZSBwYW5lbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xlYXJDb29raWVzT25seSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgb3B0aW9uczogT3BlbkZpbi5DbGVhckRhdGFPcHRpb25zID0ge1xuXHRcdGRhdGFUeXBlczogW1wiY29va2llc1wiXSxcblx0XHRvcmlnaW5zOiBbXCJodHRwOi8vbG9jYWxob3N0OjUwNTBcIl1cblx0fTtcblxuXHRjb25zdCBjb2RlVGV4dCA9XG5cdFx0XCJhd2FpdCBmaW4uU3lzdGVtLmNsZWFyQ2FjaGVEYXRhKHtcXG5cIiArXG5cdFx0XCIgICAgZGF0YVR5cGVzOiBbJ2Nvb2tpZXMnXSxcXG5cIiArXG5cdFx0XCIgICAgb3JpZ2luczogWydodHRwOi8vbG9jYWxob3N0OjUwNTAnXVxcblwiICtcblx0XHRcIn0pO1wiO1xuXG5cdGF3YWl0IGV4ZWN1dGVDbGVhcihcblx0XHQoKSA9PiBmaW4uU3lzdGVtLmNsZWFyQ2FjaGVEYXRhKG9wdGlvbnMpLFxuXHRcdGNvZGVUZXh0LFxuXHRcdFwiQ2xlYXJlZCBjb29raWVzIGZvciBsb2NhbGhvc3Q6NTA1MC5cXG5sb2NhbFN0b3JhZ2UgYW5kIHNlcnZpY2Ugd29ya2VycyBzaG91bGQgcmVtYWluLlwiXG5cdCk7XG59XG5cbi8qKlxuICogQ2xlYXIgb25seSBsb2NhbFN0b3JhZ2UgZm9yIHRoZSBsb2NhbGhvc3Qgb3JpZ2luLlxuICogQ29va2llcyBhbmQgc2VydmljZSB3b3JrZXJzIHNob3VsZCByZW1haW4gdmlzaWJsZSBpbiB0aGUgc3RhdGUgcGFuZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlT25seSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgb3B0aW9uczogT3BlbkZpbi5DbGVhckRhdGFPcHRpb25zID0ge1xuXHRcdGRhdGFUeXBlczogW1wibG9jYWxTdG9yYWdlXCJdLFxuXHRcdG9yaWdpbnM6IFtcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MFwiXVxuXHR9O1xuXG5cdGNvbnN0IGNvZGVUZXh0ID1cblx0XHRcImF3YWl0IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEoe1xcblwiICtcblx0XHRcIiAgICBkYXRhVHlwZXM6IFsnbG9jYWxTdG9yYWdlJ10sXFxuXCIgK1xuXHRcdFwiICAgIG9yaWdpbnM6IFsnaHR0cDovL2xvY2FsaG9zdDo1MDUwJ11cXG5cIiArXG5cdFx0XCJ9KTtcIjtcblxuXHRhd2FpdCBleGVjdXRlQ2xlYXIoXG5cdFx0KCkgPT4gZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YShvcHRpb25zKSxcblx0XHRjb2RlVGV4dCxcblx0XHRcIkNsZWFyZWQgbG9jYWxTdG9yYWdlIGZvciBsb2NhbGhvc3Q6NTA1MC5cXG5Db29raWVzIGFuZCBzZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIHJlbWFpbi5cIlxuXHQpO1xufVxuXG4vKipcbiAqIENsZWFyIGFsbCBzZXJ2aWNlIHdvcmtlcnMgYWNyb3NzIGFsbCBvcmlnaW5zLlxuICogQ29va2llcyBhbmQgbG9jYWxTdG9yYWdlIHNob3VsZCByZW1haW4gdmlzaWJsZSBpbiB0aGUgc3RhdGUgcGFuZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFyU2VydmljZVdvcmtlcnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG9wdGlvbnM6IE9wZW5GaW4uQ2xlYXJEYXRhT3B0aW9ucyA9IHtcblx0XHRkYXRhVHlwZXM6IFtcInNlcnZpY2VXb3JrZXJzXCJdXG5cdH07XG5cblx0Y29uc3QgY29kZVRleHQgPSBgYXdhaXQgZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YSh7XG4gICAgZGF0YVR5cGVzOiBbJ3NlcnZpY2VXb3JrZXJzJ11cbn0pO2A7XG5cblx0YXdhaXQgZXhlY3V0ZUNsZWFyKFxuXHRcdCgpID0+IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEob3B0aW9ucyksXG5cdFx0Y29kZVRleHQsXG5cdFx0XCJDbGVhcmVkIHNlcnZpY2Ugd29ya2VycyBhY3Jvc3MgYWxsIG9yaWdpbnMuXFxuQ29va2llcyBhbmQgbG9jYWxTdG9yYWdlIHNob3VsZCByZW1haW4uXCJcblx0KTtcbn1cblxuLyoqXG4gKiBDbGVhciBjb29raWVzIGFuZCBsb2NhbFN0b3JhZ2UgdG9nZXRoZXIgZm9yIHRoZSBsb2NhbGhvc3Qgb3JpZ2luLlxuICogU2VydmljZSB3b3JrZXJzIHNob3VsZCByZW1haW4gdmlzaWJsZSBpbiB0aGUgc3RhdGUgcGFuZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFyQ29va2llc0FuZFN0b3JhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG9wdGlvbnM6IE9wZW5GaW4uQ2xlYXJEYXRhT3B0aW9ucyA9IHtcblx0XHRkYXRhVHlwZXM6IFtcImNvb2tpZXNcIiwgXCJsb2NhbFN0b3JhZ2VcIl0sXG5cdFx0b3JpZ2luczogW1wiaHR0cDovL2xvY2FsaG9zdDo1MDUwXCJdXG5cdH07XG5cblx0Y29uc3QgY29kZVRleHQgPVxuXHRcdFwiYXdhaXQgZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YSh7XFxuXCIgK1xuXHRcdFwiICAgIGRhdGFUeXBlczogWydjb29raWVzJywgJ2xvY2FsU3RvcmFnZSddLFxcblwiICtcblx0XHRcIiAgICBvcmlnaW5zOiBbJ2h0dHA6Ly9sb2NhbGhvc3Q6NTA1MCddXFxuXCIgK1xuXHRcdFwifSk7XCI7XG5cblx0YXdhaXQgZXhlY3V0ZUNsZWFyKFxuXHRcdCgpID0+IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEob3B0aW9ucyksXG5cdFx0Y29kZVRleHQsXG5cdFx0XCJDbGVhcmVkIGNvb2tpZXMgYW5kIGxvY2FsU3RvcmFnZSBmb3IgbG9jYWxob3N0OjUwNTAuXFxuU2VydmljZSB3b3JrZXJzIHNob3VsZCByZW1haW4uXCJcblx0KTtcbn1cblxuLyoqXG4gKiBDbGVhciBhbGwgYnJvd3NpbmcgZGF0YSB3aXRoIG5vIG9wdGlvbnMg4oCUIHRoZSBicm9hZGVzdCBwb3NzaWJsZSBjbGVhci5cbiAqIEV2ZXJ5dGhpbmcgaW4gdGhlIHN0YXRlIHBhbmVsIHNob3VsZCBkaXNhcHBlYXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFyQWxsRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY29kZVRleHQgPSBcImF3YWl0IGZpbi5TeXN0ZW0uY2xlYXJDYWNoZURhdGEoKTtcIjtcblxuXHRhd2FpdCBleGVjdXRlQ2xlYXIoXG5cdFx0KCkgPT4gZmluLlN5c3RlbS5jbGVhckNhY2hlRGF0YSgpLFxuXHRcdGNvZGVUZXh0LFxuXHRcdFwiQ2xlYXJlZCBhbGwgYnJvd3NpbmcgZGF0YSBhY3Jvc3MgYWxsIG9yaWdpbnMuXFxuQWxsIGNvb2tpZXMsIGxvY2FsU3RvcmFnZSwgYW5kIHNlcnZpY2Ugd29ya2VycyBzaG91bGQgYmUgZ29uZS5cIlxuXHQpO1xufVxuXG4vKipcbiAqIENsZWFyIG9ubHkgdGhlIEhUVFAgY2FjaGUgdXNpbmcgdGhlIHY0NCBjb252ZW5pZW5jZSBtZXRob2QuXG4gKiBDb29raWVzLCBsb2NhbFN0b3JhZ2UsIGFuZCBzZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIGFsbCByZW1haW4uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsZWFySHR0cENhY2hlKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBjb2RlVGV4dCA9IFwiYXdhaXQgZmluLlN5c3RlbS5jbGVhckhUVFBDYWNoZSgpO1wiO1xuXG5cdGF3YWl0IGV4ZWN1dGVDbGVhcihcblx0XHQoKSA9PiBmaW4uU3lzdGVtLmNsZWFySFRUUENhY2hlKCksXG5cdFx0Y29kZVRleHQsXG5cdFx0XCJDbGVhcmVkIEhUVFAgY2FjaGUgb25seSAoSFRNTCwgQ1NTLCBKUywgaW1hZ2VzKS5cXG5Db29raWVzLCBsb2NhbFN0b3JhZ2UsIGFuZCBzZXJ2aWNlIHdvcmtlcnMgc2hvdWxkIGFsbCByZW1haW4uXCJcblx0KTtcbn1cblxuLyoqXG4gKiBDbGVhciB1c2luZyB0aGUgbGVnYWN5IGNsZWFyQ2FjaGUgQVBJIGZvciBjb21wYXJpc29uLlxuICogTm8gb3JpZ2luIHRhcmdldGluZyBpcyBwb3NzaWJsZSDigJQgYWZmZWN0cyBldmVyeXRoaW5nLlxuICovXG5hc3luYyBmdW5jdGlvbiBjbGVhckNhY2hlTGVnYWN5KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBvcHRpb25zID0ge1xuXHRcdGFwcGNhY2hlOiB0cnVlLFxuXHRcdGNhY2hlOiB0cnVlLFxuXHRcdGNvb2tpZXM6IHRydWUsXG5cdFx0bG9jYWxTdG9yYWdlOiB0cnVlXG5cdH07XG5cblx0Y29uc3QgY29kZVRleHQgPVxuXHRcdFwiYXdhaXQgZmluLlN5c3RlbS5jbGVhckNhY2hlKHtcXG5cIiArXG5cdFx0XCIgICAgYXBwY2FjaGU6IHRydWUsXFxuXCIgK1xuXHRcdFwiICAgIGNhY2hlOiB0cnVlLFxcblwiICtcblx0XHRcIiAgICBjb29raWVzOiB0cnVlLFxcblwiICtcblx0XHRcIiAgICBsb2NhbFN0b3JhZ2U6IHRydWVcXG5cIiArXG5cdFx0XCJ9KTtcIjtcblxuXHRhd2FpdCBleGVjdXRlQ2xlYXIoXG5cdFx0YXN5bmMgKCkgPT4gZmluLlN5c3RlbS5jbGVhckNhY2hlKG9wdGlvbnMpLFxuXHRcdGNvZGVUZXh0LFxuXHRcdFwiTGVnYWN5IEFQSTogY2xlYXJlZCBhbGwgdHlwZXMgYWNyb3NzIEFMTCBvcmlnaW5zLlxcbk5vIG9yaWdpbiB0YXJnZXRpbmcgYXZhaWxhYmxlIHdpdGggdGhpcyBBUEkuXCJcblx0KTtcbn1cblxuLyoqXG4gKiBFeGVjdXRlIGEgY2xlYXIgb3BlcmF0aW9uLCBsb2cgdGhlIHJlc3VsdCwgYW5kIHJlZnJlc2ggdGhlIHN0YXRlIHBhbmVsLlxuICogQHBhcmFtIGNsZWFyRm4gVGhlIGFzeW5jIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgdGhlIGNsZWFyLlxuICogQHBhcmFtIGNvZGVUZXh0IFRoZSBjb2RlIHNuaXBwZXQgdG8gZGlzcGxheSBpbiB0aGUgbG9nLlxuICogQHBhcmFtIHN1Y2Nlc3NNc2cgQSBkZXNjcmlwdGlvbiBvZiB3aGF0IHNob3VsZCBoYXZlIGhhcHBlbmVkLlxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlQ2xlYXIoXG5cdGNsZWFyRm46ICgpID0+IFByb21pc2U8dm9pZD4sXG5cdGNvZGVUZXh0OiBzdHJpbmcsXG5cdHN1Y2Nlc3NNc2c6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgY2xlYXJGbigpO1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgQ29kZSBleGVjdXRlZDpcXG5cXG4ke2NvZGVUZXh0fVxcblxcblJlc3VsdDogU3VjY2Vzc1xcblxcbiR7c3VjY2Vzc01zZ31gKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYENvZGUgZXhlY3V0ZWQ6XFxuXFxuJHtjb2RlVGV4dH1cXG5cXG5SZXN1bHQ6IEVycm9yXFxuXFxuJHtlcnJvcn1gKTtcblx0fVxuXHRhd2FpdCByZWZyZXNoU3RhdGUoKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgZW50cnkgaW4gdG8gdGhlIGxvZ2dpbmcgd2luZG93LlxuICogQHBhcmFtIGVudHJ5IFRoZSBlbnRyeSB0byBhZGQuXG4gKi9cbmZ1bmN0aW9uIGxvZ2dpbmdBZGRFbnRyeShlbnRyeTogc3RyaW5nKTogdm9pZCB7XG5cdGlmIChsb2dnaW5nRWxlbWVudCkge1xuXHRcdGxvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZW50cnl9XFxuXFxuYDtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9