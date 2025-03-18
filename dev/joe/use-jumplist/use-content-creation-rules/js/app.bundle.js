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
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3JELGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVELElBQUksV0FBVyxFQUFFLENBQUM7UUFDakIsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzNDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNqRCxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsZUFBZSxDQUFDLEdBQXVCO0lBQy9DLElBQUksQ0FBQztRQUNKLElBQUksR0FBRyxFQUFFLENBQUM7WUFDVCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDO0lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY29udGVudC1jcmVhdGlvbi1ydWxlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtY29udGVudC1jcmVhdGlvbi1ydWxlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1jb250ZW50LWNyZWF0aW9uLXJ1bGVzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCBpbml0RG9tKCk7XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG9wZW5WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXZpZXdcIik7XG5cdGlmIChvcGVuVmlldykge1xuXHRcdG9wZW5WaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5nb29nbGUuY29tXCIpO1xuXHRcdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBvcGVuVmlld1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi12aWV3LXRhcmdldFwiKTtcblx0Y29uc3Qgdmlld1RhcmdldHMgPSBbXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvYnVzaW5lc3MvYWR2ZXJ0aXNpbmdcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9idXNpbmVzcy9hZ2VuZGFcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9idXNpbmVzcy9hZ3JlZW1lbnRcIlxuXHRdO1xuXG5cdGxldCB2aWV3VGFyZ2V0SW5kZXggPSAwO1xuXHRpZiAob3BlblZpZXdUYXJnZXQpIHtcblx0XHRvcGVuVmlld1RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKHZpZXdUYXJnZXRzW3ZpZXdUYXJnZXRJbmRleCsrICUgdmlld1RhcmdldHMubGVuZ3RoXSwgXCJleGFtcGxlc1wiLCBcImJsYWg9Zm9vXCIpO1xuXHRcdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBvcGVuV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXdpbmRvd1wiKTtcblx0aWYgKG9wZW5XaW5kb3cpIHtcblx0XHRvcGVuV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5iaW5nLmNvbVwiKTtcblx0XHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgb3BlbldpbmRvd1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi13aW5kb3ctdGFyZ2V0XCIpO1xuXHRjb25zdCB3aW5kb3dUYXJnZXRzID0gW1xuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2VkdWNhdGlvbi9jYXNlLXN0dWR5XCIsXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvZWR1Y2F0aW9uL2Vzc2F5c1wiLFxuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2VkdWNhdGlvbi9maW5hbmNlXCJcblx0XTtcblxuXHRsZXQgd2luZG93VGFyZ2V0SW5kZXggPSAwO1xuXHRpZiAob3BlbldpbmRvd1RhcmdldCkge1xuXHRcdG9wZW5XaW5kb3dUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB3aW4gPSB3aW5kb3cub3Blbih3aW5kb3dUYXJnZXRzW3dpbmRvd1RhcmdldEluZGV4KysgJSB3aW5kb3dUYXJnZXRzLmxlbmd0aF0sIFwiZXhhbXBsZXMyXCIpO1xuXHRcdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBvcGVuQnJvd3NlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1icm93c2VyXCIpO1xuXHRpZiAob3BlbkJyb3dzZXIpIHtcblx0XHRvcGVuQnJvd3Nlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cubWljcm9zb2Z0LmNvbVwiKTtcblx0XHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgb3BlbkJsb2NrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tYmxvY2tlZFwiKTtcblx0aWYgKG9wZW5CbG9ja2VkKSB7XG5cdFx0b3BlbkJsb2NrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB3aW4gPSB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LmFwcGxlLmNvbVwiKTtcblx0XHRcdGxvZ1dpbmRvd1Jlc3VsdCh3aW4pO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogRGlzcGxheSBhIHJlc3VsdCB3aGVuIHRoZSB3aW5kb3cgY29udGVudCBoYXMgbG9hZGVkLlxuICogQHBhcmFtIHdpbiBUaGUgd2luZG93IHRvIHdpcmUgdXAgdGhlIGV2ZW50LlxuICovXG5mdW5jdGlvbiBsb2dXaW5kb3dSZXN1bHQod2luOiBXaW5kb3dQcm94eSB8IG51bGwpOiB2b2lkIHtcblx0dHJ5IHtcblx0XHRpZiAod2luKSB7XG5cdFx0XHR3aW4uYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIldpbmRvdyBMb2NhdGlvblwiLCB3aW4ubG9jYXRpb24pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9nZ2luZyB3aW5kb3cgcmVzdWx0c1wiLCBlcnIpO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=