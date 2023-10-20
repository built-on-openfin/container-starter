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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0tBQ0g7SUFFRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVELElBQUksV0FBVyxFQUFFO1FBQ2hCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMzQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDakQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0tBQ0g7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxlQUFlLENBQUMsR0FBdUI7SUFDL0MsSUFBSTtRQUNILElBQUksR0FBRyxFQUFFO1lBQ1IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7U0FDSDtLQUNEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ25EO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1jb250ZW50LWNyZWF0aW9uLXJ1bGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1jb250ZW50LWNyZWF0aW9uLXJ1bGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLWNvbnRlbnQtY3JlYXRpb24tcnVsZXMvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGluaXREb20oKTtcbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgb3BlblZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tdmlld1wiKTtcblx0aWYgKG9wZW5WaWV3KSB7XG5cdFx0b3BlblZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB3aW4gPSB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb21cIik7XG5cdFx0XHRsb2dXaW5kb3dSZXN1bHQod2luKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IG9wZW5WaWV3VGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXZpZXctdGFyZ2V0XCIpO1xuXHRjb25zdCB2aWV3VGFyZ2V0cyA9IFtcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9idXNpbmVzcy9hZHZlcnRpc2luZ1wiLFxuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2J1c2luZXNzL2FnZW5kYVwiLFxuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2J1c2luZXNzL2FncmVlbWVudFwiXG5cdF07XG5cblx0bGV0IHZpZXdUYXJnZXRJbmRleCA9IDA7XG5cdGlmIChvcGVuVmlld1RhcmdldCkge1xuXHRcdG9wZW5WaWV3VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4odmlld1RhcmdldHNbdmlld1RhcmdldEluZGV4KysgJSB2aWV3VGFyZ2V0cy5sZW5ndGhdLCBcImV4YW1wbGVzXCIsIFwiYmxhaD1mb29cIik7XG5cdFx0XHRsb2dXaW5kb3dSZXN1bHQod2luKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IG9wZW5XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4td2luZG93XCIpO1xuXHRpZiAob3BlbldpbmRvdykge1xuXHRcdG9wZW5XaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB3aW4gPSB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LmJpbmcuY29tXCIpO1xuXHRcdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBvcGVuV2luZG93VGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXdpbmRvdy10YXJnZXRcIik7XG5cdGNvbnN0IHdpbmRvd1RhcmdldHMgPSBbXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvZWR1Y2F0aW9uL2Nhc2Utc3R1ZHlcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9lZHVjYXRpb24vZXNzYXlzXCIsXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvZWR1Y2F0aW9uL2ZpbmFuY2VcIlxuXHRdO1xuXG5cdGxldCB3aW5kb3dUYXJnZXRJbmRleCA9IDA7XG5cdGlmIChvcGVuV2luZG93VGFyZ2V0KSB7XG5cdFx0b3BlbldpbmRvd1RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKHdpbmRvd1RhcmdldHNbd2luZG93VGFyZ2V0SW5kZXgrKyAlIHdpbmRvd1RhcmdldHMubGVuZ3RoXSwgXCJleGFtcGxlczJcIik7XG5cdFx0XHRsb2dXaW5kb3dSZXN1bHQod2luKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IG9wZW5Ccm93c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLWJyb3dzZXJcIik7XG5cdGlmIChvcGVuQnJvd3Nlcikge1xuXHRcdG9wZW5Ccm93c2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3Qgd2luID0gd2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5taWNyb3NvZnQuY29tXCIpO1xuXHRcdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBvcGVuQmxvY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1ibG9ja2VkXCIpO1xuXHRpZiAob3BlbkJsb2NrZWQpIHtcblx0XHRvcGVuQmxvY2tlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuYXBwbGUuY29tXCIpO1xuXHRcdFx0bG9nV2luZG93UmVzdWx0KHdpbik7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXNwbGF5IGEgcmVzdWx0IHdoZW4gdGhlIHdpbmRvdyBjb250ZW50IGhhcyBsb2FkZWQuXG4gKiBAcGFyYW0gd2luIFRoZSB3aW5kb3cgdG8gd2lyZSB1cCB0aGUgZXZlbnQuXG4gKi9cbmZ1bmN0aW9uIGxvZ1dpbmRvd1Jlc3VsdCh3aW46IFdpbmRvd1Byb3h5IHwgbnVsbCk6IHZvaWQge1xuXHR0cnkge1xuXHRcdGlmICh3aW4pIHtcblx0XHRcdHdpbi5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiV2luZG93IExvY2F0aW9uXCIsIHdpbi5sb2NhdGlvbik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2dnaW5nIHdpbmRvdyByZXN1bHRzXCIsIGVycik7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==