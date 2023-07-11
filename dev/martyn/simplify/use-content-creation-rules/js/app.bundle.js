/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
document.addEventListener("DOMContentLoaded", async () => {
    const openView = document.querySelector("#open-view");
    openView.addEventListener("click", (e) => {
        const win = window.open("https://www.google.com");
        logWindowResult(win);
    });
    const openViewTarget = document.querySelector("#open-view-target");
    const viewTargets = [
        "https://www.examples.com/category/business/advertising",
        "https://www.examples.com/category/business/agenda",
        "https://www.examples.com/category/business/agreement"
    ];
    let viewTargetIndex = 0;
    openViewTarget.addEventListener("click", (e) => {
        const win = window.open(viewTargets[viewTargetIndex++ % viewTargets.length], "examples", "blah=foo");
        logWindowResult(win);
    });
    const openWindow = document.querySelector("#open-window");
    openWindow.addEventListener("click", (e) => {
        const win = window.open("https://www.bing.com");
        logWindowResult(win);
    });
    const openWindowTarget = document.querySelector("#open-window-target");
    const windowTargets = [
        "https://www.examples.com/category/education/case-study",
        "https://www.examples.com/category/education/essays",
        "https://www.examples.com/category/education/finance"
    ];
    let windowTargetIndex = 0;
    openWindowTarget.addEventListener("click", (e) => {
        const win = window.open(windowTargets[windowTargetIndex++ % windowTargets.length], "examples2");
        logWindowResult(win);
    });
    const openBrowser = document.querySelector("#open-browser");
    openBrowser.addEventListener("click", (e) => {
        const win = window.open("https://www.microsoft.com");
        logWindowResult(win);
    });
    const openBlocked = document.querySelector("#open-blocked");
    openBlocked.addEventListener("click", (e) => {
        const win = window.open("https://www.apple.com");
        logWindowResult(win);
    });
});
function logWindowResult(win) {
    try {
        win.addEventListener("DOMContentLoaded", () => {
            console.log("Window Location", win.location);
        });
    }
    catch (err) {
        console.error("Error logging window results", err);
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsR0FBZ0I7SUFDeEMsSUFBSTtRQUNILEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7S0FDSDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY29udGVudC1jcmVhdGlvbi1ydWxlcy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0Y29uc3Qgb3BlblZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tdmlld1wiKTtcblx0b3BlblZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5nb29nbGUuY29tXCIpO1xuXHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHR9KTtcblxuXHRjb25zdCBvcGVuVmlld1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi12aWV3LXRhcmdldFwiKTtcblx0Y29uc3Qgdmlld1RhcmdldHMgPSBbXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvYnVzaW5lc3MvYWR2ZXJ0aXNpbmdcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9idXNpbmVzcy9hZ2VuZGFcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9idXNpbmVzcy9hZ3JlZW1lbnRcIlxuXHRdO1xuXG5cdGxldCB2aWV3VGFyZ2V0SW5kZXggPSAwO1xuXHRvcGVuVmlld1RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRjb25zdCB3aW4gPSB3aW5kb3cub3Blbih2aWV3VGFyZ2V0c1t2aWV3VGFyZ2V0SW5kZXgrKyAlIHZpZXdUYXJnZXRzLmxlbmd0aF0sIFwiZXhhbXBsZXNcIiwgXCJibGFoPWZvb1wiKTtcblx0XHRsb2dXaW5kb3dSZXN1bHQod2luKTtcblx0fSk7XG5cblx0Y29uc3Qgb3BlbldpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi13aW5kb3dcIik7XG5cdG9wZW5XaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5iaW5nLmNvbVwiKTtcblx0XHRsb2dXaW5kb3dSZXN1bHQod2luKTtcblx0fSk7XG5cblx0Y29uc3Qgb3BlbldpbmRvd1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi13aW5kb3ctdGFyZ2V0XCIpO1xuXHRjb25zdCB3aW5kb3dUYXJnZXRzID0gW1xuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2VkdWNhdGlvbi9jYXNlLXN0dWR5XCIsXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvZWR1Y2F0aW9uL2Vzc2F5c1wiLFxuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2VkdWNhdGlvbi9maW5hbmNlXCJcblx0XTtcblxuXHRsZXQgd2luZG93VGFyZ2V0SW5kZXggPSAwO1xuXHRvcGVuV2luZG93VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKHdpbmRvd1RhcmdldHNbd2luZG93VGFyZ2V0SW5kZXgrKyAlIHdpbmRvd1RhcmdldHMubGVuZ3RoXSwgXCJleGFtcGxlczJcIik7XG5cdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdH0pO1xuXG5cdGNvbnN0IG9wZW5Ccm93c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLWJyb3dzZXJcIik7XG5cdG9wZW5Ccm93c2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbVwiKTtcblx0XHRsb2dXaW5kb3dSZXN1bHQod2luKTtcblx0fSk7XG5cblx0Y29uc3Qgb3BlbkJsb2NrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tYmxvY2tlZFwiKTtcblx0b3BlbkJsb2NrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5hcHBsZS5jb21cIik7XG5cdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdH0pO1xufSk7XG5cbmZ1bmN0aW9uIGxvZ1dpbmRvd1Jlc3VsdCh3aW46IFdpbmRvd1Byb3h5KTogdm9pZCB7XG5cdHRyeSB7XG5cdFx0d2luLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiV2luZG93IExvY2F0aW9uXCIsIHdpbi5sb2NhdGlvbik7XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2dnaW5nIHdpbmRvdyByZXN1bHRzXCIsIGVycik7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==