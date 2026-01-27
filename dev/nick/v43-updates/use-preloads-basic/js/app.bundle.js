/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vdXNlLXByZWxvYWRzLWhlbGxvLXdvcmxkLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzaG93UGxhdGZvcm1EZXZUb29sc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhdGZvcm0tZGV2dG9vbHNcIik7XG5cdGNvbnN0IHNob3dXaW5kb3dEZXZUb29sc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZG93LWRldnRvb2xzXCIpO1xuXHRjb25zdCBzaG93Vmlld0RldlRvb2xzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3LWRldnRvb2xzXCIpO1xuXG5cdGlmIChzaG93UGxhdGZvcm1EZXZUb29sc0J1dHRvbikge1xuXHRcdHNob3dQbGF0Zm9ybURldlRvb2xzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UGxhdGZvcm1EZXZUb29scyk7XG5cdH1cblx0aWYgKHNob3dXaW5kb3dEZXZUb29sc0J1dHRvbikge1xuXHRcdHNob3dXaW5kb3dEZXZUb29sc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1dpbmRvd0RldlRvb2xzKTtcblx0fVxuXHRpZiAoc2hvd1ZpZXdEZXZUb29sc0J1dHRvbikge1xuXHRcdHNob3dWaWV3RGV2VG9vbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dWaWV3RGV2VG9vbHMpO1xuXHR9XG59XG5cbi8qKlxuICogU2hvdyB0aGUgZGV2ZWxvcGVyIHRvb2xzIGZvciB0aGUgcGxhdGZvcm0uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dQbGF0Zm9ybURldlRvb2xzKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGlkZW50aXR5ID0gZmluLm1lLmlkZW50aXR5O1xuXHRcdGNvbnN0IHBsYXRmb3JtSWRlbnRpdHkgPSB7IHV1aWQ6IGlkZW50aXR5LnV1aWQsIG5hbWU6IGlkZW50aXR5LnV1aWQgfTtcblx0XHRhd2FpdCBmaW4uU3lzdGVtLnNob3dEZXZlbG9wZXJUb29scyhwbGF0Zm9ybUlkZW50aXR5KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hvd2luZyBwbGF0Zm9ybSBkZXZlbG9wZXIgdG9vbHM6XCIsIGVycm9yKTtcblx0fVxufVxuXG4vKipcbiAqIFNob3cgdGhlIGRldmVsb3AgdG9vbHMgZm9yIHRoZSB3aW5kb3cuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dXaW5kb3dEZXZUb29scygpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBpZGVudGl0eSA9IGZpbi5tZS5pZGVudGl0eTtcblx0XHRjb25zdCB2aWV3ID0gZmluLlZpZXcud3JhcFN5bmMoaWRlbnRpdHkpO1xuXHRcdGNvbnN0IGhvc3RXaW5kb3cgPSBhd2FpdCB2aWV3LmdldEN1cnJlbnRXaW5kb3coKTtcblx0XHRhd2FpdCBmaW4uU3lzdGVtLnNob3dEZXZlbG9wZXJUb29scyhob3N0V2luZG93LmlkZW50aXR5KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hvd2luZyB3aW5kb3cgZGV2ZWxvcGVyIHRvb2xzOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBkZXZlbG9wZXIgdG9vbHMgZm9yIHRoZSB2aWV3LlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93Vmlld0RldlRvb2xzKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGlkZW50aXR5ID0gZmluLm1lLmlkZW50aXR5O1xuXHRcdGF3YWl0IGZpbi5TeXN0ZW0uc2hvd0RldmVsb3BlclRvb2xzKGlkZW50aXR5KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hvd2luZyB2aWV3IGRldmVsb3BlciB0b29sczpcIiwgZXJyb3IpO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9