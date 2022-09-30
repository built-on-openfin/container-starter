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
    launchPlatformButton.addEventListener("click", launchPlatform);
    requestViewButton.addEventListener("click", requestView);
    requestViewInSameWindowButton.addEventListener("click", requestViewInLastWindow);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS8uL2NsaWVudC9zcmMvd2luZG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge307XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0KCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG5sZXQgbGFzdENyZWF0ZWRWaWV3O1xubGV0IGNoYW5uZWxDbGllbnQ6IE9wZW5GaW4uQ2hhbm5lbENsaWVudDtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgbGF1bmNoUGxhdGZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhdW5jaC1wbGF0Zm9ybVwiKTtcblx0Y29uc3QgcmVxdWVzdFZpZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlcXVlc3Qtdmlld1wiKTtcblx0Y29uc3QgcmVxdWVzdFZpZXdJblNhbWVXaW5kb3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlcXVlc3Qtdmlldy1zYW1lLXdpbmRvd1wiKTtcblx0bGF1bmNoUGxhdGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxhdW5jaFBsYXRmb3JtKTtcblx0cmVxdWVzdFZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcXVlc3RWaWV3KTtcblx0cmVxdWVzdFZpZXdJblNhbWVXaW5kb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlcXVlc3RWaWV3SW5MYXN0V2luZG93KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbGF1bmNoUGxhdGZvcm0oKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLlN5c3RlbS5sYXVuY2hNYW5pZmVzdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9wbGF0Zm9ybS5maW4uanNvblwiKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgbGF1bmNoaW5nIHRhcmdldCBwbGF0Zm9ybSBhcHA6XCIsIGVycm9yKTtcblx0fVxuXHR0cnkge1xuXHRcdGNoYW5uZWxDbGllbnQgPSBhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QoXCJwbGF0Zm9ybS1jb21tYW5kXCIsIHtcblx0XHRcdHBheWxvYWQ6IHsgdG9rZW46IFwiYW4gZXhhbXBsZSB0b2tlblwiIH1cblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgbGF1bmNoaW5nIHRhcmdldCBwbGF0Zm9ybSBhcHA6XCIsIGVycm9yKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0VmlldygpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHQvLyB5b3UgaGF2ZSB0aGUgb3B0aW9uIG9mIGxldHRpbmcgdGhlIGNvbm5lY3RlZCBhcHAgdG8gcHJvdmlkZSB2aWV3IG9wdGlvbnMgb3IgbWF5YmUgeW91IHdpbGwgcHJvdmlkZSBhIG1vcmUgcmVzdHJpY3RpdmUgb3B0aW9uIHdoZXJlIHRoZXkgY2FuIGp1c3Qgc3BlY2lmeSBhbiBpZCBvZiBhIHZpZXcgdG8gbG9hZFxuXHRcdC8vIGFuZCB0aGUgcGxhdGZvcm0gYXBwIGRvZXMgYSBsb29rdXAuXG5cdFx0bGFzdENyZWF0ZWRWaWV3ID0gYXdhaXQgY2hhbm5lbENsaWVudC5kaXNwYXRjaChcImNyZWF0ZVZpZXdcIiwge1xuXHRcdFx0dmlld09wdGlvbnM6IHtcblx0XHRcdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9odG1sL2FwcC5odG1sXCIsXG5cdFx0XHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdFx0XHRkYXRlTm93OiBEYXRlLm5vdygpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgaXNzdWluZyBjb21tYW5kIHRvIHBsYXRmb3JtOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFZpZXdJbkxhc3RXaW5kb3coKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Ly8geW91IGhhdmUgdGhlIG9wdGlvbiBvZiBsZXR0aW5nIHRoZSBjb25uZWN0ZWQgYXBwIHRvIHByb3ZpZGUgdmlldyBvcHRpb25zIG9yIG1heWJlIHlvdSB3aWxsIHByb3ZpZGUgYSBtb3JlIHJlc3RyaWN0aXZlIG9wdGlvbiB3aGVyZSB0aGV5IGNhbiBqdXN0IHNwZWNpZnkgYW4gaWQgb2YgYSB2aWV3IHRvIGxvYWRcblx0XHQvLyBhbmQgdGhlIHBsYXRmb3JtIGFwcCBkb2VzIGEgbG9va3VwLlxuXHRcdGxhc3RDcmVhdGVkVmlldyA9IGF3YWl0IGNoYW5uZWxDbGllbnQuZGlzcGF0Y2goXCJjcmVhdGVWaWV3XCIsIHtcblx0XHRcdHZpZXdPcHRpb25zOiB7XG5cdFx0XHRcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvaHRtbC9hcHAuaHRtbFwiLFxuXHRcdFx0XHRjdXN0b21EYXRhOiB7XG5cdFx0XHRcdFx0ZGF0ZU5vdzogRGF0ZS5ub3coKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dGFyZ2V0OiBsYXN0Q3JlYXRlZFZpZXdcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgaXNzdWluZyBjb21tYW5kIHRvIHBsYXRmb3JtOlwiLCBlcnJvcik7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==