/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    const showPlatformDevToolsButton = document.querySelector("#platform-devtools");
    const showWindowDevToolsButton = document.querySelector("#window-devtools");
    const showViewDevToolsButton = document.querySelector("#view-devtools");
    if (showPlatformDevToolsButton) {
        showPlatformDevToolsButton.addEventListener("click", showPlatformDevTools);
    }
    if (showWindowDevToolsButton) {
        showWindowDevToolsButton.addEventListener("click", showWindowDevTools);
    }
    if (showViewDevToolsButton) {
        showViewDevToolsButton.addEventListener("click", showViewDevTools);
    }
}
/**
 * Show the developer tools for the platform.
 */
async function showPlatformDevTools() {
    try {
        const identity = fin.me.identity;
        const platformIdentity = { uuid: identity.uuid, name: identity.uuid };
        await fin.System.showDeveloperTools(platformIdentity);
    }
    catch (error) {
        console.error("Error showing platform developer tools:", error);
    }
}
/**
 * Show the develop tools for the window.
 */
async function showWindowDevTools() {
    try {
        const identity = fin.me.identity;
        const view = fin.View.wrapSync(identity);
        const hostWindow = await view.getCurrentWindow();
        await fin.System.showDeveloperTools(hostWindow.identity);
    }
    catch (error) {
        console.error("Error showing window developer tools:", error);
    }
}
/**
 * Show the developer tools for the view.
 */
async function showViewDevTools() {
    try {
        const identity = fin.me.identity;
        await fin.System.showDeveloperTools(identity);
    }
    catch (error) {
        console.error("Error showing view developer tools:", error);
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3VzZS1wcmVsb2Fkcy1oZWxsby13b3JsZC8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc2hvd1BsYXRmb3JtRGV2VG9vbHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXRmb3JtLWRldnRvb2xzXCIpO1xuXHRjb25zdCBzaG93V2luZG93RGV2VG9vbHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmRvdy1kZXZ0b29sc1wiKTtcblx0Y29uc3Qgc2hvd1ZpZXdEZXZUb29sc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlldy1kZXZ0b29sc1wiKTtcblxuXHRpZiAoc2hvd1BsYXRmb3JtRGV2VG9vbHNCdXR0b24pIHtcblx0XHRzaG93UGxhdGZvcm1EZXZUb29sc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1BsYXRmb3JtRGV2VG9vbHMpO1xuXHR9XG5cdGlmIChzaG93V2luZG93RGV2VG9vbHNCdXR0b24pIHtcblx0XHRzaG93V2luZG93RGV2VG9vbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dXaW5kb3dEZXZUb29scyk7XG5cdH1cblx0aWYgKHNob3dWaWV3RGV2VG9vbHNCdXR0b24pIHtcblx0XHRzaG93Vmlld0RldlRvb2xzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Vmlld0RldlRvb2xzKTtcblx0fVxufVxuXG4vKipcbiAqIFNob3cgdGhlIGRldmVsb3BlciB0b29scyBmb3IgdGhlIHBsYXRmb3JtLlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93UGxhdGZvcm1EZXZUb29scygpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBpZGVudGl0eSA9IGZpbi5tZS5pZGVudGl0eTtcblx0XHRjb25zdCBwbGF0Zm9ybUlkZW50aXR5ID0geyB1dWlkOiBpZGVudGl0eS51dWlkLCBuYW1lOiBpZGVudGl0eS51dWlkIH07XG5cdFx0YXdhaXQgZmluLlN5c3RlbS5zaG93RGV2ZWxvcGVyVG9vbHMocGxhdGZvcm1JZGVudGl0eSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHNob3dpbmcgcGxhdGZvcm0gZGV2ZWxvcGVyIHRvb2xzOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBkZXZlbG9wIHRvb2xzIGZvciB0aGUgd2luZG93LlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93V2luZG93RGV2VG9vbHMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgaWRlbnRpdHkgPSBmaW4ubWUuaWRlbnRpdHk7XG5cdFx0Y29uc3QgdmlldyA9IGZpbi5WaWV3LndyYXBTeW5jKGlkZW50aXR5KTtcblx0XHRjb25zdCBob3N0V2luZG93ID0gYXdhaXQgdmlldy5nZXRDdXJyZW50V2luZG93KCk7XG5cdFx0YXdhaXQgZmluLlN5c3RlbS5zaG93RGV2ZWxvcGVyVG9vbHMoaG9zdFdpbmRvdy5pZGVudGl0eSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHNob3dpbmcgd2luZG93IGRldmVsb3BlciB0b29sczpcIiwgZXJyb3IpO1xuXHR9XG59XG5cbi8qKlxuICogU2hvdyB0aGUgZGV2ZWxvcGVyIHRvb2xzIGZvciB0aGUgdmlldy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd1ZpZXdEZXZUb29scygpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBpZGVudGl0eSA9IGZpbi5tZS5pZGVudGl0eTtcblx0XHRhd2FpdCBmaW4uU3lzdGVtLnNob3dEZXZlbG9wZXJUb29scyhpZGVudGl0eSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHNob3dpbmcgdmlldyBkZXZlbG9wZXIgdG9vbHM6XCIsIGVycm9yKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9