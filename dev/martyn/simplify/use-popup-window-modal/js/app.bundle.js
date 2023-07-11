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
document.addEventListener("DOMContentLoaded", init);
function init() {
    const showPopupButton = document.querySelector("#btn-show-popup");
    if (showPopupButton) {
        showPopupButton.addEventListener("click", createPopupWindow);
    }
}
async function createPopupWindow() {
    const PARENT_FRAME_OFFSET = 64;
    resetPopupResult();
    const parentWindow = await fin.me.getCurrentWindow();
    const { identity: modalParentIdentity } = parentWindow;
    const parentBounds = await parentWindow.getBounds();
    const qHeight = parentBounds.height / 4;
    const result = await fin.me.showPopupWindow({
        initialOptions: {
            modalParentIdentity
        },
        url: location.href.replace("app", "popup"),
        x: Math.floor(parentBounds.width / 8),
        y: Math.floor(parentBounds.height / 8) - PARENT_FRAME_OFFSET,
        height: Math.floor(parentBounds.height - qHeight),
        width: Math.floor(parentBounds.width - qHeight),
        blurBehavior: "modal"
    });
    renderPopupResult(result);
}
function renderPopupResult(result) {
    const res = document.querySelector("#popup-result");
    if (res) {
        res.textContent = JSON.stringify(result, undefined, 2);
    }
}
function resetPopupResult() {
    const res = document.querySelector("#popup-result");
    if (res) {
        res.textContent = "No result";
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEQsU0FBUyxJQUFJO0lBQ1osTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xFLElBQUksZUFBZSxFQUFFO1FBQ3BCLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztLQUM3RDtBQUNGLENBQUM7QUFFRCxLQUFLLFVBQVUsaUJBQWlCO0lBQy9CLE1BQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0lBQy9CLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsTUFBTSxZQUFZLEdBQUcsTUFBTyxHQUFHLENBQUMsRUFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3ZFLE1BQU0sRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxZQUFZLENBQUM7SUFDdkQsTUFBTSxZQUFZLEdBQUcsTUFBTSxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEQsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxjQUFjLEVBQUU7WUFDZixtQkFBbUI7U0FDbkI7UUFDRCxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUMxQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLG1CQUFtQjtRQUM1RCxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNqRCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMvQyxZQUFZLEVBQUUsT0FBTztLQUNyQixDQUFDLENBQUM7SUFDSCxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUEyQjtJQUNyRCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELElBQUksR0FBRyxFQUFFO1FBQ1IsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkQ7QUFDRixDQUFDO0FBRUQsU0FBUyxnQkFBZ0I7SUFDeEIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwRCxJQUFJLEdBQUcsRUFBRTtRQUNSLEdBQUcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQzlCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbW9kYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tb2RhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbW9kYWwvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcblx0Y29uc3Qgc2hvd1BvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tc2hvdy1wb3B1cFwiKTtcblx0aWYgKHNob3dQb3B1cEJ1dHRvbikge1xuXHRcdHNob3dQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUG9wdXBXaW5kb3cpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvcHVwV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBQQVJFTlRfRlJBTUVfT0ZGU0VUID0gNjQ7XG5cdHJlc2V0UG9wdXBSZXN1bHQoKTtcblx0Y29uc3QgcGFyZW50V2luZG93ID0gYXdhaXQgKGZpbi5tZSBhcyBPcGVuRmluLlZpZXcpLmdldEN1cnJlbnRXaW5kb3coKTtcblx0Y29uc3QgeyBpZGVudGl0eTogbW9kYWxQYXJlbnRJZGVudGl0eSB9ID0gcGFyZW50V2luZG93O1xuXHRjb25zdCBwYXJlbnRCb3VuZHMgPSBhd2FpdCBwYXJlbnRXaW5kb3cuZ2V0Qm91bmRzKCk7XG5cdGNvbnN0IHFIZWlnaHQgPSBwYXJlbnRCb3VuZHMuaGVpZ2h0IC8gNDtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmluLm1lLnNob3dQb3B1cFdpbmRvdyh7XG5cdFx0aW5pdGlhbE9wdGlvbnM6IHtcblx0XHRcdG1vZGFsUGFyZW50SWRlbnRpdHlcblx0XHR9LFxuXHRcdHVybDogbG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwXCIsIFwicG9wdXBcIiksXG5cdFx0eDogTWF0aC5mbG9vcihwYXJlbnRCb3VuZHMud2lkdGggLyA4KSxcblx0XHR5OiBNYXRoLmZsb29yKHBhcmVudEJvdW5kcy5oZWlnaHQgLyA4KSAtIFBBUkVOVF9GUkFNRV9PRkZTRVQsXG5cdFx0aGVpZ2h0OiBNYXRoLmZsb29yKHBhcmVudEJvdW5kcy5oZWlnaHQgLSBxSGVpZ2h0KSxcblx0XHR3aWR0aDogTWF0aC5mbG9vcihwYXJlbnRCb3VuZHMud2lkdGggLSBxSGVpZ2h0KSxcblx0XHRibHVyQmVoYXZpb3I6IFwibW9kYWxcIlxuXHR9KTtcblx0cmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0OiBPcGVuRmluLlBvcHVwUmVzdWx0KTogdm9pZCB7XG5cdGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpO1xuXHRpZiAocmVzKSB7XG5cdFx0cmVzLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCB1bmRlZmluZWQsIDIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wdXBSZXN1bHQoKTogdm9pZCB7XG5cdGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpO1xuXHRpZiAocmVzKSB7XG5cdFx0cmVzLnRleHRDb250ZW50ID0gXCJObyByZXN1bHRcIjtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9