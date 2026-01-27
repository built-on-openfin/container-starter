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
        await fin.System.launchManifest("https://built-on-openfin.github.io/container-starter/main/use-channel-api-issue-commands-to-a-platform/platform.fin.json");
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
                url: "https://built-on-openfin.github.io/container-starter/main/use-channel-api-issue-commands-to-a-platform/html/app.html",
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
                url: "https://built-on-openfin.github.io/container-starter/main/use-channel-api-issue-commands-to-a-platform/html/app.html",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsUUFBUSxDQUFDLFlBQVksRUFBRTtZQUM1RCxXQUFXLEVBQUU7Z0JBQ1osR0FBRyxFQUFFLHFDQUFxQztnQkFDMUMsVUFBVSxFQUFFO29CQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2lCQUNuQjthQUNEO1lBQ0QsTUFBTSxFQUFFLGVBQWU7U0FDdkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vLi9jbGllbnQvc3JjL3dpbmRvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdERvbSgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxubGV0IGxhc3RDcmVhdGVkVmlldzpcblx0fCB7XG5cdFx0XHR2aWV3OiBzdHJpbmc7XG5cdFx0XHR3aW5kb3c6IHN0cmluZztcblx0ICB9XG5cdHwgdW5kZWZpbmVkO1xubGV0IGNoYW5uZWxDbGllbnQ6IE9wZW5GaW4uQ2hhbm5lbENsaWVudDtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGxhdW5jaFBsYXRmb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXVuY2gtcGxhdGZvcm1cIik7XG5cdGNvbnN0IHJlcXVlc3RWaWV3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXF1ZXN0LXZpZXdcIik7XG5cdGNvbnN0IHJlcXVlc3RWaWV3SW5TYW1lV2luZG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXF1ZXN0LXZpZXctc2FtZS13aW5kb3dcIik7XG5cdGlmIChsYXVuY2hQbGF0Zm9ybUJ1dHRvbikge1xuXHRcdGxhdW5jaFBsYXRmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsYXVuY2hQbGF0Zm9ybSk7XG5cdH1cblx0aWYgKHJlcXVlc3RWaWV3QnV0dG9uKSB7XG5cdFx0cmVxdWVzdFZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcXVlc3RWaWV3KTtcblx0fVxuXHRpZiAocmVxdWVzdFZpZXdJblNhbWVXaW5kb3dCdXR0b24pIHtcblx0XHRyZXF1ZXN0Vmlld0luU2FtZVdpbmRvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVxdWVzdFZpZXdJbkxhc3RXaW5kb3cpO1xuXHR9XG59XG5cbi8qKlxuICogTGF1bmNoIGEgcGxhdGZvcm0gZnJvbSBhIG1hbmlmZXN0LlxuICovXG5hc3luYyBmdW5jdGlvbiBsYXVuY2hQbGF0Zm9ybSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBmaW4uU3lzdGVtLmxhdW5jaE1hbmlmZXN0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL3BsYXRmb3JtLmZpbi5qc29uXCIpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsYXVuY2hpbmcgdGFyZ2V0IHBsYXRmb3JtIGFwcDpcIiwgZXJyb3IpO1xuXHR9XG5cdHRyeSB7XG5cdFx0Y2hhbm5lbENsaWVudCA9IGF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLkNoYW5uZWwuY29ubmVjdChcInBsYXRmb3JtLWNvbW1hbmRcIiwge1xuXHRcdFx0cGF5bG9hZDogeyB0b2tlbjogXCJhbiBleGFtcGxlIHRva2VuXCIgfVxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsYXVuY2hpbmcgdGFyZ2V0IHBsYXRmb3JtIGFwcDpcIiwgZXJyb3IpO1xuXHR9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgdmlldyB1c2luZyBhIGNoYW5uZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdC8vIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgbGV0dGluZyB0aGUgY29ubmVjdGVkIGFwcCB0byBwcm92aWRlIHZpZXcgb3B0aW9ucyBvciBtYXliZSB5b3Ugd2lsbCBwcm92aWRlIGEgbW9yZSByZXN0cmljdGl2ZSBvcHRpb24gd2hlcmUgdGhleSBjYW4ganVzdCBzcGVjaWZ5IGFuIGlkIG9mIGEgdmlldyB0byBsb2FkXG5cdFx0Ly8gYW5kIHRoZSBwbGF0Zm9ybSBhcHAgZG9lcyBhIGxvb2t1cC5cblx0XHRsYXN0Q3JlYXRlZFZpZXcgPSBhd2FpdCBjaGFubmVsQ2xpZW50LmRpc3BhdGNoKFwiY3JlYXRlVmlld1wiLCB7XG5cdFx0XHR2aWV3T3B0aW9uczoge1xuXHRcdFx0XHR1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2h0bWwvYXBwLmh0bWxcIixcblx0XHRcdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0XHRcdGRhdGVOb3c6IERhdGUubm93KClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpc3N1aW5nIGNvbW1hbmQgdG8gcGxhdGZvcm06XCIsIGVycm9yKTtcblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHZpZXcgdXNpbmcgYSBjaGFubmVsIHdpdGggYSBzcGVjaWZpYyB0YXJnZXQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RWaWV3SW5MYXN0V2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdC8vIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgbGV0dGluZyB0aGUgY29ubmVjdGVkIGFwcCB0byBwcm92aWRlIHZpZXcgb3B0aW9ucyBvciBtYXliZSB5b3Ugd2lsbCBwcm92aWRlIGEgbW9yZSByZXN0cmljdGl2ZSBvcHRpb24gd2hlcmUgdGhleSBjYW4ganVzdCBzcGVjaWZ5IGFuIGlkIG9mIGEgdmlldyB0byBsb2FkXG5cdFx0Ly8gYW5kIHRoZSBwbGF0Zm9ybSBhcHAgZG9lcyBhIGxvb2t1cC5cblx0XHRsYXN0Q3JlYXRlZFZpZXcgPSBhd2FpdCBjaGFubmVsQ2xpZW50LmRpc3BhdGNoKFwiY3JlYXRlVmlld1wiLCB7XG5cdFx0XHR2aWV3T3B0aW9uczoge1xuXHRcdFx0XHR1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2h0bWwvYXBwLmh0bWxcIixcblx0XHRcdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0XHRcdGRhdGVOb3c6IERhdGUubm93KClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRhcmdldDogbGFzdENyZWF0ZWRWaWV3XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGlzc3VpbmcgY29tbWFuZCB0byBwbGF0Zm9ybTpcIiwgZXJyb3IpO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9