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
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initialize the DOM components.
 */
async function initDom() {
    const btnOpenDynamicWindow = document.querySelector("#btn-open-dynamic-window");
    if (btnOpenDynamicWindow) {
        btnOpenDynamicWindow.addEventListener("click", async (e) => openDynamicApplicationWindow());
    }
    const btnOpenManifestWindow = document.querySelector("#btn-open-manifest-window");
    if (btnOpenManifestWindow) {
        btnOpenManifestWindow.addEventListener("click", async (e) => openManifestApplicationWindow());
    }
    const btnOpenDataWindow = document.querySelector("#btn-open-data-window");
    if (btnOpenDataWindow) {
        btnOpenDataWindow.addEventListener("click", async (e) => openDataWindow());
    }
    const btnOpenDataPlatformWindow = document.querySelector("#btn-open-data-platform-window");
    if (btnOpenDataPlatformWindow) {
        btnOpenDataPlatformWindow.addEventListener("click", openDataPlatformWindow);
    }
}
/**
 * Open a window using dynamic options.
 * @returns The window.
 */
async function openDynamicApplicationWindow() {
    const winOption = {
        name: "child",
        defaultWidth: 800,
        defaultHeight: 800,
        url: "https://cdn.openfin.co/docs/javascript/stable/tutorial-Window.create.html",
        frame: true,
        autoShow: true
    };
    return fin.Window.create(winOption);
}
/**
 * Open a window using a manifest.
 */
async function openManifestApplicationWindow() {
    try {
        await fin.Application.startFromManifest("https://built-on-openfin.github.io/container-starter/dev/nick/v43-updates/create-window/app.fin.json");
        console.log("App is running");
    }
    catch (err) {
        console.error(err);
    }
}
/**
 * Open a window and pass it custom data.
 * @returns The window.
 */
async function openDataWindow() {
    const winOption = {
        name: "child-data",
        defaultWidth: 800,
        defaultHeight: 800,
        url: "https://built-on-openfin.github.io/container-starter/dev/nick/v43-updates/create-window/html/window.html",
        frame: true,
        autoShow: true,
        customData: {
            dateNow: Date.now()
        }
    };
    return fin.Window.create(winOption);
}
/**
 * Open a platform window using options.
 */
async function openDataPlatformWindow() {
    const viewOption = {
        name: "childview-data",
        url: "https://built-on-openfin.github.io/container-starter/dev/nick/v43-updates/create-window/html/window.html",
        customData: {
            dateNow: Date.now()
        }
    };
    await fin.Platform.getCurrentSync().createView(viewOption);
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ25CO0tBQ0QsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLHNCQUFzQjtJQUNwQyxNQUFNLFVBQVUsR0FBd0M7UUFDdkQsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixHQUFHLEVBQUUsd0NBQXdDO1FBQzdDLFVBQVUsRUFBRTtZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ25CO0tBQ3NDLENBQUM7SUFDekMsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbGljYXRpb24td2luZG93LWNyZWF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwcGxpY2F0aW9uLXdpbmRvdy1jcmVhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwcGxpY2F0aW9uLXdpbmRvdy1jcmVhdGlvbi8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBjb21wb25lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBidG5PcGVuRHluYW1pY1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW9wZW4tZHluYW1pYy13aW5kb3dcIik7XG5cdGlmIChidG5PcGVuRHluYW1pY1dpbmRvdykge1xuXHRcdGJ0bk9wZW5EeW5hbWljV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZTogRXZlbnQpID0+IG9wZW5EeW5hbWljQXBwbGljYXRpb25XaW5kb3coKSk7XG5cdH1cblxuXHRjb25zdCBidG5PcGVuTWFuaWZlc3RXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1vcGVuLW1hbmlmZXN0LXdpbmRvd1wiKTtcblx0aWYgKGJ0bk9wZW5NYW5pZmVzdFdpbmRvdykge1xuXHRcdGJ0bk9wZW5NYW5pZmVzdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuTWFuaWZlc3RBcHBsaWNhdGlvbldpbmRvdygpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bk9wZW5EYXRhV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1kYXRhLXdpbmRvd1wiKTtcblx0aWYgKGJ0bk9wZW5EYXRhV2luZG93KSB7XG5cdFx0YnRuT3BlbkRhdGFXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gb3BlbkRhdGFXaW5kb3coKSk7XG5cdH1cblxuXHRjb25zdCBidG5PcGVuRGF0YVBsYXRmb3JtV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1kYXRhLXBsYXRmb3JtLXdpbmRvd1wiKTtcblx0aWYgKGJ0bk9wZW5EYXRhUGxhdGZvcm1XaW5kb3cpIHtcblx0XHRidG5PcGVuRGF0YVBsYXRmb3JtV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRGF0YVBsYXRmb3JtV2luZG93KTtcblx0fVxufVxuXG4vKipcbiAqIE9wZW4gYSB3aW5kb3cgdXNpbmcgZHluYW1pYyBvcHRpb25zLlxuICogQHJldHVybnMgVGhlIHdpbmRvdy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb3BlbkR5bmFtaWNBcHBsaWNhdGlvbldpbmRvdygpOiBQcm9taXNlPE9wZW5GaW4uV2luZG93PiB7XG5cdGNvbnN0IHdpbk9wdGlvbiA9IHtcblx0XHRuYW1lOiBcImNoaWxkXCIsXG5cdFx0ZGVmYXVsdFdpZHRoOiA4MDAsXG5cdFx0ZGVmYXVsdEhlaWdodDogODAwLFxuXHRcdHVybDogXCJodHRwczovL2Nkbi5vcGVuZmluLmNvL2RvY3MvamF2YXNjcmlwdC9zdGFibGUvdHV0b3JpYWwtV2luZG93LmNyZWF0ZS5odG1sXCIsXG5cdFx0ZnJhbWU6IHRydWUsXG5cdFx0YXV0b1Nob3c6IHRydWVcblx0fTtcblx0cmV0dXJuIGZpbi5XaW5kb3cuY3JlYXRlKHdpbk9wdGlvbik7XG59XG5cbi8qKlxuICogT3BlbiBhIHdpbmRvdyB1c2luZyBhIG1hbmlmZXN0LlxuICovXG5hc3luYyBmdW5jdGlvbiBvcGVuTWFuaWZlc3RBcHBsaWNhdGlvbldpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBmaW4uQXBwbGljYXRpb24uc3RhcnRGcm9tTWFuaWZlc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvYXBwLmZpbi5qc29uXCIpO1xuXHRcdGNvbnNvbGUubG9nKFwiQXBwIGlzIHJ1bm5pbmdcIik7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0fVxufVxuXG4vKipcbiAqIE9wZW4gYSB3aW5kb3cgYW5kIHBhc3MgaXQgY3VzdG9tIGRhdGEuXG4gKiBAcmV0dXJucyBUaGUgd2luZG93LlxuICovXG5hc3luYyBmdW5jdGlvbiBvcGVuRGF0YVdpbmRvdygpOiBQcm9taXNlPE9wZW5GaW4uV2luZG93PiB7XG5cdGNvbnN0IHdpbk9wdGlvbiA9IHtcblx0XHRuYW1lOiBcImNoaWxkLWRhdGFcIixcblx0XHRkZWZhdWx0V2lkdGg6IDgwMCxcblx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9odG1sL3dpbmRvdy5odG1sXCIsXG5cdFx0ZnJhbWU6IHRydWUsXG5cdFx0YXV0b1Nob3c6IHRydWUsXG5cdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0ZGF0ZU5vdzogRGF0ZS5ub3coKVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGZpbi5XaW5kb3cuY3JlYXRlKHdpbk9wdGlvbik7XG59XG5cbi8qKlxuICogT3BlbiBhIHBsYXRmb3JtIHdpbmRvdyB1c2luZyBvcHRpb25zLlxuICovXG5hc3luYyBmdW5jdGlvbiBvcGVuRGF0YVBsYXRmb3JtV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB2aWV3T3B0aW9uOiBPcGVuRmluLlBsYXRmb3JtVmlld0NyZWF0aW9uT3B0aW9ucyA9IHtcblx0XHRuYW1lOiBcImNoaWxkdmlldy1kYXRhXCIsXG5cdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9odG1sL3dpbmRvdy5odG1sXCIsXG5cdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0ZGF0ZU5vdzogRGF0ZS5ub3coKVxuXHRcdH1cblx0fSBhcyBPcGVuRmluLlBsYXRmb3JtVmlld0NyZWF0aW9uT3B0aW9ucztcblx0YXdhaXQgZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCkuY3JlYXRlVmlldyh2aWV3T3B0aW9uKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=