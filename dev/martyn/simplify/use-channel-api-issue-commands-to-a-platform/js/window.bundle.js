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
        await init();
    }
    catch (error) {
        console.error(error);
    }
});
let lastCreatedView;
let channelClient;
async function init() {
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
async function launchPlatform() {
    try {
        await fin.System.launchManifest("http://localhost:5050/platform.fin.json");
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
async function requestView() {
    try {
        // you have the option of letting the connected app to provide view options or maybe you will provide a more restrictive option where they can just specify an id of a view to load
        // and the platform app does a lookup.
        lastCreatedView = await channelClient.dispatch("createView", {
            viewOptions: {
                url: "http://localhost:5050/html/app.html",
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
async function requestViewInLastWindow() {
    try {
        // you have the option of letting the connected app to provide view options or maybe you will provide a more restrictive option where they can just specify an id of a view to load
        // and the platform app does a lookup.
        lastCreatedView = await channelClient.dispatch("createView", {
            viewOptions: {
                url: "http://localhost:5050/html/app.html",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMzRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1jaGFubmVsLWFwaS1pc3N1ZS1jb21tYW5kcy10by1hLXBsYXRmb3JtLy4vY2xpZW50L3NyYy93aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXQoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbmxldCBsYXN0Q3JlYXRlZFZpZXc6XG5cdHwge1xuXHRcdFx0dmlldzogc3RyaW5nO1xuXHRcdFx0d2luZG93OiBzdHJpbmc7XG5cdCAgfVxuXHR8IHVuZGVmaW5lZDtcbmxldCBjaGFubmVsQ2xpZW50OiBPcGVuRmluLkNoYW5uZWxDbGllbnQ7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGxhdW5jaFBsYXRmb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXVuY2gtcGxhdGZvcm1cIik7XG5cdGNvbnN0IHJlcXVlc3RWaWV3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXF1ZXN0LXZpZXdcIik7XG5cdGNvbnN0IHJlcXVlc3RWaWV3SW5TYW1lV2luZG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXF1ZXN0LXZpZXctc2FtZS13aW5kb3dcIik7XG5cdGlmIChsYXVuY2hQbGF0Zm9ybUJ1dHRvbikge1xuXHRcdGxhdW5jaFBsYXRmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsYXVuY2hQbGF0Zm9ybSk7XG5cdH1cblx0aWYgKHJlcXVlc3RWaWV3QnV0dG9uKSB7XG5cdFx0cmVxdWVzdFZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcXVlc3RWaWV3KTtcblx0fVxuXHRpZiAocmVxdWVzdFZpZXdJblNhbWVXaW5kb3dCdXR0b24pIHtcblx0XHRyZXF1ZXN0Vmlld0luU2FtZVdpbmRvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVxdWVzdFZpZXdJbkxhc3RXaW5kb3cpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaFBsYXRmb3JtKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGZpbi5TeXN0ZW0ubGF1bmNoTWFuaWZlc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvcGxhdGZvcm0uZmluLmpzb25cIik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGxhdW5jaGluZyB0YXJnZXQgcGxhdGZvcm0gYXBwOlwiLCBlcnJvcik7XG5cdH1cblx0dHJ5IHtcblx0XHRjaGFubmVsQ2xpZW50ID0gYXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KFwicGxhdGZvcm0tY29tbWFuZFwiLCB7XG5cdFx0XHRwYXlsb2FkOiB7IHRva2VuOiBcImFuIGV4YW1wbGUgdG9rZW5cIiB9XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGxhdW5jaGluZyB0YXJnZXQgcGxhdGZvcm0gYXBwOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Ly8geW91IGhhdmUgdGhlIG9wdGlvbiBvZiBsZXR0aW5nIHRoZSBjb25uZWN0ZWQgYXBwIHRvIHByb3ZpZGUgdmlldyBvcHRpb25zIG9yIG1heWJlIHlvdSB3aWxsIHByb3ZpZGUgYSBtb3JlIHJlc3RyaWN0aXZlIG9wdGlvbiB3aGVyZSB0aGV5IGNhbiBqdXN0IHNwZWNpZnkgYW4gaWQgb2YgYSB2aWV3IHRvIGxvYWRcblx0XHQvLyBhbmQgdGhlIHBsYXRmb3JtIGFwcCBkb2VzIGEgbG9va3VwLlxuXHRcdGxhc3RDcmVhdGVkVmlldyA9IGF3YWl0IGNoYW5uZWxDbGllbnQuZGlzcGF0Y2goXCJjcmVhdGVWaWV3XCIsIHtcblx0XHRcdHZpZXdPcHRpb25zOiB7XG5cdFx0XHRcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvaHRtbC9hcHAuaHRtbFwiLFxuXHRcdFx0XHRjdXN0b21EYXRhOiB7XG5cdFx0XHRcdFx0ZGF0ZU5vdzogRGF0ZS5ub3coKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGlzc3VpbmcgY29tbWFuZCB0byBwbGF0Zm9ybTpcIiwgZXJyb3IpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RWaWV3SW5MYXN0V2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdC8vIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgbGV0dGluZyB0aGUgY29ubmVjdGVkIGFwcCB0byBwcm92aWRlIHZpZXcgb3B0aW9ucyBvciBtYXliZSB5b3Ugd2lsbCBwcm92aWRlIGEgbW9yZSByZXN0cmljdGl2ZSBvcHRpb24gd2hlcmUgdGhleSBjYW4ganVzdCBzcGVjaWZ5IGFuIGlkIG9mIGEgdmlldyB0byBsb2FkXG5cdFx0Ly8gYW5kIHRoZSBwbGF0Zm9ybSBhcHAgZG9lcyBhIGxvb2t1cC5cblx0XHRsYXN0Q3JlYXRlZFZpZXcgPSBhd2FpdCBjaGFubmVsQ2xpZW50LmRpc3BhdGNoKFwiY3JlYXRlVmlld1wiLCB7XG5cdFx0XHR2aWV3T3B0aW9uczoge1xuXHRcdFx0XHR1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2h0bWwvYXBwLmh0bWxcIixcblx0XHRcdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0XHRcdGRhdGVOb3c6IERhdGUubm93KClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHRhcmdldDogbGFzdENyZWF0ZWRWaWV3XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGlzc3VpbmcgY29tbWFuZCB0byBwbGF0Zm9ybTpcIiwgZXJyb3IpO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=