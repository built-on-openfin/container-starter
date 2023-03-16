/******/ (() => { // webpackBootstrap
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
    showPlatformDevToolsButton.addEventListener("click", showPlatformDevTools);
    showWindowDevToolsButton.addEventListener("click", showWindowDevTools);
    showViewDevToolsButton.addEventListener("click", showViewDevTools);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxJQUFJO1FBQ0gsTUFBTSxJQUFJLEVBQUUsQ0FBQztLQUNiO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JCO0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLFVBQVUsSUFBSTtJQUNsQixNQUFNLDBCQUEwQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNoRixNQUFNLHdCQUF3QixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM1RSxNQUFNLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUV4RSwwQkFBMEIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUMzRSx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN2RSxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRUQsS0FBSyxVQUFVLG9CQUFvQjtJQUNsQyxJQUFJO1FBQ0gsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDakMsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEUsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDdEQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDaEU7QUFDRixDQUFDO0FBRUQsS0FBSyxVQUFVLGtCQUFrQjtJQUNoQyxJQUFJO1FBQ0gsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNqRCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pEO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzlEO0FBQ0YsQ0FBQztBQUVELEtBQUssVUFBVSxnQkFBZ0I7SUFDOUIsSUFBSTtRQUNILE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2pDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5QztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM1RDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcHJlbG9hZHMtaGVsbG8td29ybGQvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc2hvd1BsYXRmb3JtRGV2VG9vbHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXRmb3JtLWRldnRvb2xzXCIpO1xuXHRjb25zdCBzaG93V2luZG93RGV2VG9vbHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbmRvdy1kZXZ0b29sc1wiKTtcblx0Y29uc3Qgc2hvd1ZpZXdEZXZUb29sc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlldy1kZXZ0b29sc1wiKTtcblxuXHRzaG93UGxhdGZvcm1EZXZUb29sc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1BsYXRmb3JtRGV2VG9vbHMpO1xuXHRzaG93V2luZG93RGV2VG9vbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dXaW5kb3dEZXZUb29scyk7XG5cdHNob3dWaWV3RGV2VG9vbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dWaWV3RGV2VG9vbHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93UGxhdGZvcm1EZXZUb29scygpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBpZGVudGl0eSA9IGZpbi5tZS5pZGVudGl0eTtcblx0XHRjb25zdCBwbGF0Zm9ybUlkZW50aXR5ID0geyB1dWlkOiBpZGVudGl0eS51dWlkLCBuYW1lOiBpZGVudGl0eS51dWlkIH07XG5cdFx0YXdhaXQgZmluLlN5c3RlbS5zaG93RGV2ZWxvcGVyVG9vbHMocGxhdGZvcm1JZGVudGl0eSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHNob3dpbmcgcGxhdGZvcm0gZGV2ZWxvcGVyIHRvb2xzOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hvd1dpbmRvd0RldlRvb2xzKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGlkZW50aXR5ID0gZmluLm1lLmlkZW50aXR5O1xuXHRcdGNvbnN0IHZpZXcgPSBmaW4uVmlldy53cmFwU3luYyhpZGVudGl0eSk7XG5cdFx0Y29uc3QgaG9zdFdpbmRvdyA9IGF3YWl0IHZpZXcuZ2V0Q3VycmVudFdpbmRvdygpO1xuXHRcdGF3YWl0IGZpbi5TeXN0ZW0uc2hvd0RldmVsb3BlclRvb2xzKGhvc3RXaW5kb3cuaWRlbnRpdHkpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzaG93aW5nIHdpbmRvdyBkZXZlbG9wZXIgdG9vbHM6XCIsIGVycm9yKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93Vmlld0RldlRvb2xzKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGlkZW50aXR5ID0gZmluLm1lLmlkZW50aXR5O1xuXHRcdGF3YWl0IGZpbi5TeXN0ZW0uc2hvd0RldmVsb3BlclRvb2xzKGlkZW50aXR5KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hvd2luZyB2aWV3IGRldmVsb3BlciB0b29sczpcIiwgZXJyb3IpO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=