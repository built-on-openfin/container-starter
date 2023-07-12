/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", async () => {
    await initDom();
});
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    const openView = document.querySelector("#open-view");
    if (openView) {
        openView.addEventListener("click", (e) => {
            const win = window.open("https://www.google.com");
            logWindowResult(win);
        });
    }
    const openViewTarget = document.querySelector("#open-view-target");
    const viewTargets = [
        "https://www.examples.com/category/business/advertising",
        "https://www.examples.com/category/business/agenda",
        "https://www.examples.com/category/business/agreement"
    ];
    let viewTargetIndex = 0;
    if (openViewTarget) {
        openViewTarget.addEventListener("click", (e) => {
            const win = window.open(viewTargets[viewTargetIndex++ % viewTargets.length], "examples", "blah=foo");
            logWindowResult(win);
        });
    }
    const openWindow = document.querySelector("#open-window");
    if (openWindow) {
        openWindow.addEventListener("click", (e) => {
            const win = window.open("https://www.bing.com");
            logWindowResult(win);
        });
    }
    const openWindowTarget = document.querySelector("#open-window-target");
    const windowTargets = [
        "https://www.examples.com/category/education/case-study",
        "https://www.examples.com/category/education/essays",
        "https://www.examples.com/category/education/finance"
    ];
    let windowTargetIndex = 0;
    if (openWindowTarget) {
        openWindowTarget.addEventListener("click", (e) => {
            const win = window.open(windowTargets[windowTargetIndex++ % windowTargets.length], "examples2");
            logWindowResult(win);
        });
    }
    const openBrowser = document.querySelector("#open-browser");
    if (openBrowser) {
        openBrowser.addEventListener("click", (e) => {
            const win = window.open("https://www.microsoft.com");
            logWindowResult(win);
        });
    }
    const openBlocked = document.querySelector("#open-blocked");
    if (openBlocked) {
        openBlocked.addEventListener("click", (e) => {
            const win = window.open("https://www.apple.com");
            logWindowResult(win);
        });
    }
}
/**
 * Display a result when the window content has loaded.
 * @param win The window to wire up the event.
 */
function logWindowResult(win) {
    try {
        if (win) {
            win.addEventListener("DOMContentLoaded", () => {
                console.log("Window Location", win.location);
            });
        }
    }
    catch (err) {
        console.error("Error logging window results", err);
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztJQUM1RCxJQUFJLFdBQVcsRUFBRTtRQUNoQixXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2pELGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztLQUNIO0FBQ0YsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsZUFBZSxDQUFDLEdBQXVCO0lBQy9DLElBQUk7UUFDSCxJQUFJLEdBQUcsRUFBRTtZQUNSLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1NBQ0g7S0FDRDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY29udGVudC1jcmVhdGlvbi1ydWxlcy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0YXdhaXQgaW5pdERvbSgpO1xufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBvcGVuVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi12aWV3XCIpO1xuXHRpZiAob3BlblZpZXcpIHtcblx0XHRvcGVuVmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbVwiKTtcblx0XHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgb3BlblZpZXdUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tdmlldy10YXJnZXRcIik7XG5cdGNvbnN0IHZpZXdUYXJnZXRzID0gW1xuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2J1c2luZXNzL2FkdmVydGlzaW5nXCIsXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvYnVzaW5lc3MvYWdlbmRhXCIsXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvYnVzaW5lc3MvYWdyZWVtZW50XCJcblx0XTtcblxuXHRsZXQgdmlld1RhcmdldEluZGV4ID0gMDtcblx0aWYgKG9wZW5WaWV3VGFyZ2V0KSB7XG5cdFx0b3BlblZpZXdUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB3aW4gPSB3aW5kb3cub3Blbih2aWV3VGFyZ2V0c1t2aWV3VGFyZ2V0SW5kZXgrKyAlIHZpZXdUYXJnZXRzLmxlbmd0aF0sIFwiZXhhbXBsZXNcIiwgXCJibGFoPWZvb1wiKTtcblx0XHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgb3BlbldpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi13aW5kb3dcIik7XG5cdGlmIChvcGVuV2luZG93KSB7XG5cdFx0b3BlbldpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuYmluZy5jb21cIik7XG5cdFx0XHRsb2dXaW5kb3dSZXN1bHQod2luKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IG9wZW5XaW5kb3dUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4td2luZG93LXRhcmdldFwiKTtcblx0Y29uc3Qgd2luZG93VGFyZ2V0cyA9IFtcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9lZHVjYXRpb24vY2FzZS1zdHVkeVwiLFxuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2VkdWNhdGlvbi9lc3NheXNcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9lZHVjYXRpb24vZmluYW5jZVwiXG5cdF07XG5cblx0bGV0IHdpbmRvd1RhcmdldEluZGV4ID0gMDtcblx0aWYgKG9wZW5XaW5kb3dUYXJnZXQpIHtcblx0XHRvcGVuV2luZG93VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4od2luZG93VGFyZ2V0c1t3aW5kb3dUYXJnZXRJbmRleCsrICUgd2luZG93VGFyZ2V0cy5sZW5ndGhdLCBcImV4YW1wbGVzMlwiKTtcblx0XHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgb3BlbkJyb3dzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tYnJvd3NlclwiKTtcblx0aWYgKG9wZW5Ccm93c2VyKSB7XG5cdFx0b3BlbkJyb3dzZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB3aW4gPSB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb21cIik7XG5cdFx0XHRsb2dXaW5kb3dSZXN1bHQod2luKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IG9wZW5CbG9ja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLWJsb2NrZWRcIik7XG5cdGlmIChvcGVuQmxvY2tlZCkge1xuXHRcdG9wZW5CbG9ja2VkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5hcHBsZS5jb21cIik7XG5cdFx0XHRsb2dXaW5kb3dSZXN1bHQod2luKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIERpc3BsYXkgYSByZXN1bHQgd2hlbiB0aGUgd2luZG93IGNvbnRlbnQgaGFzIGxvYWRlZC5cbiAqIEBwYXJhbSB3aW4gVGhlIHdpbmRvdyB0byB3aXJlIHVwIHRoZSBldmVudC5cbiAqL1xuZnVuY3Rpb24gbG9nV2luZG93UmVzdWx0KHdpbjogV2luZG93UHJveHkgfCBudWxsKTogdm9pZCB7XG5cdHRyeSB7XG5cdFx0aWYgKHdpbikge1xuXHRcdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJXaW5kb3cgTG9jYXRpb25cIiwgd2luLmxvY2F0aW9uKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGxvZ2dpbmcgd2luZG93IHJlc3VsdHNcIiwgZXJyKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9