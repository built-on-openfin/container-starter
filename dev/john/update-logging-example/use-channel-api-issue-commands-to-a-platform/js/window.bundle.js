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
/*!******************************!*\
  !*** ./client/src/window.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
let lastCreatedView;
let channelClient;
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    const launchPlatformButton = document.querySelector("#launch-platform");
    const requestViewButton = document.querySelector("#request-view");
    const requestViewInSameWindowButton = document.querySelector("#request-view-same-window");
    if (launchPlatformButton) {
        launchPlatformButton.addEventListener("click", launchPlatform);
    }
    if (requestViewButton) {
        requestViewButton.addEventListener("click", requestView);
    }
    if (requestViewInSameWindowButton) {
        requestViewInSameWindowButton.addEventListener("click", requestViewInLastWindow);
    }
}
/**
 * Launch a platform from a manifest.
 */
async function launchPlatform() {
    try {
        await fin.System.launchManifest("https://built-on-openfin.github.io/container-starter/dev/john/update-logging-example/use-channel-api-issue-commands-to-a-platform/platform.fin.json");
    }
    catch (error) {
        console.error("Error launching target platform app:", error);
    }
    try {
        channelClient = await fin.InterApplicationBus.Channel.connect("platform-command", {
            payload: { token: "an example token" }
        });
    }
    catch (error) {
        console.error("Error launching target platform app:", error);
    }
}
/**
 * Create a view using a channel.
 */
async function requestView() {
    try {
        // you have the option of letting the connected app to provide view options or maybe you will provide a more restrictive option where they can just specify an id of a view to load
        // and the platform app does a lookup.
        lastCreatedView = await channelClient.dispatch("createView", {
            viewOptions: {
                url: "https://built-on-openfin.github.io/container-starter/dev/john/update-logging-example/use-channel-api-issue-commands-to-a-platform/html/app.html",
                customData: {
                    dateNow: Date.now()
                }
            }
        });
    }
    catch (error) {
        console.error("Error issuing command to platform:", error);
    }
}
/**
 * Create a view using a channel with a specific target.
 */
async function requestViewInLastWindow() {
    try {
        // you have the option of letting the connected app to provide view options or maybe you will provide a more restrictive option where they can just specify an id of a view to load
        // and the platform app does a lookup.
        lastCreatedView = await channelClient.dispatch("createView", {
            viewOptions: {
                url: "https://built-on-openfin.github.io/container-starter/dev/john/update-logging-example/use-channel-api-issue-commands-to-a-platform/html/app.html",
                customData: {
                    dateNow: Date.now()
                }
            },
            target: lastCreatedView
        });
    }
    catch (error) {
        console.error("Error issuing command to platform:", error);
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQyxZQUFZLEVBQUU7WUFDNUQsV0FBVyxFQUFFO2dCQUNaLEdBQUcsRUFBRSxxQ0FBcUM7Z0JBQzFDLFVBQVUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtpQkFDbkI7YUFDRDtZQUNELE1BQU0sRUFBRSxlQUFlO1NBQ3ZCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtLy4vY2xpZW50L3NyYy93aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbmxldCBsYXN0Q3JlYXRlZFZpZXc6XG5cdHwge1xuXHRcdFx0dmlldzogc3RyaW5nO1xuXHRcdFx0d2luZG93OiBzdHJpbmc7XG5cdCAgfVxuXHR8IHVuZGVmaW5lZDtcbmxldCBjaGFubmVsQ2xpZW50OiBPcGVuRmluLkNoYW5uZWxDbGllbnQ7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBsYXVuY2hQbGF0Zm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGF1bmNoLXBsYXRmb3JtXCIpO1xuXHRjb25zdCByZXF1ZXN0Vmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVxdWVzdC12aWV3XCIpO1xuXHRjb25zdCByZXF1ZXN0Vmlld0luU2FtZVdpbmRvd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVxdWVzdC12aWV3LXNhbWUtd2luZG93XCIpO1xuXHRpZiAobGF1bmNoUGxhdGZvcm1CdXR0b24pIHtcblx0XHRsYXVuY2hQbGF0Zm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGF1bmNoUGxhdGZvcm0pO1xuXHR9XG5cdGlmIChyZXF1ZXN0Vmlld0J1dHRvbikge1xuXHRcdHJlcXVlc3RWaWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXF1ZXN0Vmlldyk7XG5cdH1cblx0aWYgKHJlcXVlc3RWaWV3SW5TYW1lV2luZG93QnV0dG9uKSB7XG5cdFx0cmVxdWVzdFZpZXdJblNhbWVXaW5kb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcXVlc3RWaWV3SW5MYXN0V2luZG93KTtcblx0fVxufVxuXG4vKipcbiAqIExhdW5jaCBhIHBsYXRmb3JtIGZyb20gYSBtYW5pZmVzdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbGF1bmNoUGxhdGZvcm0oKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLlN5c3RlbS5sYXVuY2hNYW5pZmVzdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9wbGF0Zm9ybS5maW4uanNvblwiKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgbGF1bmNoaW5nIHRhcmdldCBwbGF0Zm9ybSBhcHA6XCIsIGVycm9yKTtcblx0fVxuXHR0cnkge1xuXHRcdGNoYW5uZWxDbGllbnQgPSBhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QoXCJwbGF0Zm9ybS1jb21tYW5kXCIsIHtcblx0XHRcdHBheWxvYWQ6IHsgdG9rZW46IFwiYW4gZXhhbXBsZSB0b2tlblwiIH1cblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgbGF1bmNoaW5nIHRhcmdldCBwbGF0Zm9ybSBhcHA6XCIsIGVycm9yKTtcblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHZpZXcgdXNpbmcgYSBjaGFubmVsLlxuICovXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0VmlldygpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHQvLyB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIGxldHRpbmcgdGhlIGNvbm5lY3RlZCBhcHAgdG8gcHJvdmlkZSB2aWV3IG9wdGlvbnMgb3IgbWF5YmUgeW91IHdpbGwgcHJvdmlkZSBhIG1vcmUgcmVzdHJpY3RpdmUgb3B0aW9uIHdoZXJlIHRoZXkgY2FuIGp1c3Qgc3BlY2lmeSBhbiBpZCBvZiBhIHZpZXcgdG8gbG9hZFxuXHRcdC8vIGFuZCB0aGUgcGxhdGZvcm0gYXBwIGRvZXMgYSBsb29rdXAuXG5cdFx0bGFzdENyZWF0ZWRWaWV3ID0gYXdhaXQgY2hhbm5lbENsaWVudC5kaXNwYXRjaChcImNyZWF0ZVZpZXdcIiwge1xuXHRcdFx0dmlld09wdGlvbnM6IHtcblx0XHRcdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9odG1sL2FwcC5odG1sXCIsXG5cdFx0XHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdFx0XHRkYXRlTm93OiBEYXRlLm5vdygpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgaXNzdWluZyBjb21tYW5kIHRvIHBsYXRmb3JtOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSB2aWV3IHVzaW5nIGEgY2hhbm5lbCB3aXRoIGEgc3BlY2lmaWMgdGFyZ2V0LlxuICovXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0Vmlld0luTGFzdFdpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHQvLyB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIGxldHRpbmcgdGhlIGNvbm5lY3RlZCBhcHAgdG8gcHJvdmlkZSB2aWV3IG9wdGlvbnMgb3IgbWF5YmUgeW91IHdpbGwgcHJvdmlkZSBhIG1vcmUgcmVzdHJpY3RpdmUgb3B0aW9uIHdoZXJlIHRoZXkgY2FuIGp1c3Qgc3BlY2lmeSBhbiBpZCBvZiBhIHZpZXcgdG8gbG9hZFxuXHRcdC8vIGFuZCB0aGUgcGxhdGZvcm0gYXBwIGRvZXMgYSBsb29rdXAuXG5cdFx0bGFzdENyZWF0ZWRWaWV3ID0gYXdhaXQgY2hhbm5lbENsaWVudC5kaXNwYXRjaChcImNyZWF0ZVZpZXdcIiwge1xuXHRcdFx0dmlld09wdGlvbnM6IHtcblx0XHRcdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9odG1sL2FwcC5odG1sXCIsXG5cdFx0XHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdFx0XHRkYXRlTm93OiBEYXRlLm5vdygpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0YXJnZXQ6IGxhc3RDcmVhdGVkVmlld1xuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpc3N1aW5nIGNvbW1hbmQgdG8gcGxhdGZvcm06XCIsIGVycm9yKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9