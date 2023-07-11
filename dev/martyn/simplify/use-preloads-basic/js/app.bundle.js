/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await init();
    }
    catch (error) {
        console.error(error);
    }
});
async function init() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3hELElBQUk7UUFDSCxNQUFNLElBQUksRUFBRSxDQUFDO0tBQ2I7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckI7QUFDRixDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssVUFBVSxJQUFJO0lBQ2xCLE1BQU0sMEJBQTBCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hGLE1BQU0sd0JBQXdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzVFLE1BQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXhFLElBQUksMEJBQTBCLEVBQUU7UUFDL0IsMEJBQTBCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7S0FDM0U7SUFDRCxJQUFJLHdCQUF3QixFQUFFO1FBQzdCLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3ZFO0lBQ0QsSUFBSSxzQkFBc0IsRUFBRTtRQUMzQixzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztLQUNuRTtBQUNGLENBQUM7QUFFRCxLQUFLLFVBQVUsb0JBQW9CO0lBQ2xDLElBQUk7UUFDSCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxNQUFNLGdCQUFnQixHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RSxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUN0RDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNoRTtBQUNGLENBQUM7QUFFRCxLQUFLLFVBQVUsa0JBQWtCO0lBQ2hDLElBQUk7UUFDSCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2pELE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDekQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUNBQXVDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDOUQ7QUFDRixDQUFDO0FBRUQsS0FBSyxVQUFVLGdCQUFnQjtJQUM5QixJQUFJO1FBQ0gsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDakMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzVEO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wcmVsb2Fkcy1oZWxsby13b3JsZC8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0KCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzaG93UGxhdGZvcm1EZXZUb29sc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhdGZvcm0tZGV2dG9vbHNcIik7XG5cdGNvbnN0IHNob3dXaW5kb3dEZXZUb29sc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2luZG93LWRldnRvb2xzXCIpO1xuXHRjb25zdCBzaG93Vmlld0RldlRvb2xzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3LWRldnRvb2xzXCIpO1xuXG5cdGlmIChzaG93UGxhdGZvcm1EZXZUb29sc0J1dHRvbikge1xuXHRcdHNob3dQbGF0Zm9ybURldlRvb2xzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UGxhdGZvcm1EZXZUb29scyk7XG5cdH1cblx0aWYgKHNob3dXaW5kb3dEZXZUb29sc0J1dHRvbikge1xuXHRcdHNob3dXaW5kb3dEZXZUb29sc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1dpbmRvd0RldlRvb2xzKTtcblx0fVxuXHRpZiAoc2hvd1ZpZXdEZXZUb29sc0J1dHRvbikge1xuXHRcdHNob3dWaWV3RGV2VG9vbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dWaWV3RGV2VG9vbHMpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dQbGF0Zm9ybURldlRvb2xzKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGlkZW50aXR5ID0gZmluLm1lLmlkZW50aXR5O1xuXHRcdGNvbnN0IHBsYXRmb3JtSWRlbnRpdHkgPSB7IHV1aWQ6IGlkZW50aXR5LnV1aWQsIG5hbWU6IGlkZW50aXR5LnV1aWQgfTtcblx0XHRhd2FpdCBmaW4uU3lzdGVtLnNob3dEZXZlbG9wZXJUb29scyhwbGF0Zm9ybUlkZW50aXR5KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hvd2luZyBwbGF0Zm9ybSBkZXZlbG9wZXIgdG9vbHM6XCIsIGVycm9yKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93V2luZG93RGV2VG9vbHMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgaWRlbnRpdHkgPSBmaW4ubWUuaWRlbnRpdHk7XG5cdFx0Y29uc3QgdmlldyA9IGZpbi5WaWV3LndyYXBTeW5jKGlkZW50aXR5KTtcblx0XHRjb25zdCBob3N0V2luZG93ID0gYXdhaXQgdmlldy5nZXRDdXJyZW50V2luZG93KCk7XG5cdFx0YXdhaXQgZmluLlN5c3RlbS5zaG93RGV2ZWxvcGVyVG9vbHMoaG9zdFdpbmRvdy5pZGVudGl0eSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHNob3dpbmcgd2luZG93IGRldmVsb3BlciB0b29sczpcIiwgZXJyb3IpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dWaWV3RGV2VG9vbHMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgaWRlbnRpdHkgPSBmaW4ubWUuaWRlbnRpdHk7XG5cdFx0YXdhaXQgZmluLlN5c3RlbS5zaG93RGV2ZWxvcGVyVG9vbHMoaWRlbnRpdHkpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzaG93aW5nIHZpZXcgZGV2ZWxvcGVyIHRvb2xzOlwiLCBlcnJvcik7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==