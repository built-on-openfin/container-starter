/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", async () => {
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
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUU7WUFDM0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2pELGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztLQUNIO0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLGVBQWUsQ0FBQyxHQUF1QjtJQUMvQyxJQUFJO1FBQ0gsSUFBSSxHQUFHLEVBQUU7WUFDUixHQUFHLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztTQUNIO0tBQ0Q7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDbkQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNvbnRlbnQtY3JlYXRpb24tcnVsZXMvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IG9wZW5WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXZpZXdcIik7XG5cdGlmIChvcGVuVmlldykge1xuXHRcdG9wZW5WaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5nb29nbGUuY29tXCIpO1xuXHRcdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBvcGVuVmlld1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi12aWV3LXRhcmdldFwiKTtcblx0Y29uc3Qgdmlld1RhcmdldHMgPSBbXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvYnVzaW5lc3MvYWR2ZXJ0aXNpbmdcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9idXNpbmVzcy9hZ2VuZGFcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9idXNpbmVzcy9hZ3JlZW1lbnRcIlxuXHRdO1xuXG5cdGxldCB2aWV3VGFyZ2V0SW5kZXggPSAwO1xuXHRpZiAob3BlblZpZXdUYXJnZXQpIHtcblx0XHRvcGVuVmlld1RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKHZpZXdUYXJnZXRzW3ZpZXdUYXJnZXRJbmRleCsrICUgdmlld1RhcmdldHMubGVuZ3RoXSwgXCJleGFtcGxlc1wiLCBcImJsYWg9Zm9vXCIpO1xuXHRcdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBvcGVuV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXdpbmRvd1wiKTtcblx0aWYgKG9wZW5XaW5kb3cpIHtcblx0XHRvcGVuV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5iaW5nLmNvbVwiKTtcblx0XHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgb3BlbldpbmRvd1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi13aW5kb3ctdGFyZ2V0XCIpO1xuXHRjb25zdCB3aW5kb3dUYXJnZXRzID0gW1xuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2VkdWNhdGlvbi9jYXNlLXN0dWR5XCIsXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvZWR1Y2F0aW9uL2Vzc2F5c1wiLFxuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2VkdWNhdGlvbi9maW5hbmNlXCJcblx0XTtcblxuXHRsZXQgd2luZG93VGFyZ2V0SW5kZXggPSAwO1xuXHRpZiAob3BlbldpbmRvd1RhcmdldCkge1xuXHRcdG9wZW5XaW5kb3dUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB3aW4gPSB3aW5kb3cub3Blbih3aW5kb3dUYXJnZXRzW3dpbmRvd1RhcmdldEluZGV4KysgJSB3aW5kb3dUYXJnZXRzLmxlbmd0aF0sIFwiZXhhbXBsZXMyXCIpO1xuXHRcdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBvcGVuQnJvd3NlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1icm93c2VyXCIpO1xuXHRpZiAob3BlbkJyb3dzZXIpIHtcblx0XHRvcGVuQnJvd3Nlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbVwiKTtcblx0XHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgb3BlbkJsb2NrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tYmxvY2tlZFwiKTtcblx0aWYgKG9wZW5CbG9ja2VkKSB7XG5cdFx0b3BlbkJsb2NrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB3aW4gPSB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LmFwcGxlLmNvbVwiKTtcblx0XHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHRcdH0pO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gbG9nV2luZG93UmVzdWx0KHdpbjogV2luZG93UHJveHkgfCBudWxsKTogdm9pZCB7XG5cdHRyeSB7XG5cdFx0aWYgKHdpbikge1xuXHRcdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJXaW5kb3cgTG9jYXRpb25cIiwgd2luLmxvY2F0aW9uKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGxvZ2dpbmcgd2luZG93IHJlc3VsdHNcIiwgZXJyKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9