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
    showPopupButton.addEventListener("click", createPopupWindow);
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
    document.querySelector("#popup-result").textContent = JSON.stringify(result, undefined, 2);
}
function resetPopupResult() {
    document.querySelector("#popup-result").textContent = "No result";
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEQsU0FBUyxJQUFJO0lBQ1osTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQsS0FBSyxVQUFVLGlCQUFpQjtJQUMvQixNQUFNLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztJQUMvQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLE1BQU0sWUFBWSxHQUFHLE1BQU8sR0FBRyxDQUFDLEVBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN2RSxNQUFNLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEdBQUcsWUFBWSxDQUFDO0lBQ3ZELE1BQU0sWUFBWSxHQUFHLE1BQU0sWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BELE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDM0MsY0FBYyxFQUFFO1lBQ2YsbUJBQW1CO1NBQ25CO1FBQ0QsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxtQkFBbUI7UUFDNUQsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDakQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDL0MsWUFBWSxFQUFFLE9BQU87S0FDckIsQ0FBQyxDQUFDO0lBQ0gsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQUMsTUFBMkI7SUFDckQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVGLENBQUM7QUFFRCxTQUFTLGdCQUFnQjtJQUN4QixRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDbkUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbW9kYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tb2RhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbW9kYWwvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcblx0Y29uc3Qgc2hvd1BvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tc2hvdy1wb3B1cFwiKTtcblx0c2hvd1BvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQb3B1cFdpbmRvdyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvcHVwV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBQQVJFTlRfRlJBTUVfT0ZGU0VUID0gNjQ7XG5cdHJlc2V0UG9wdXBSZXN1bHQoKTtcblx0Y29uc3QgcGFyZW50V2luZG93ID0gYXdhaXQgKGZpbi5tZSBhcyBPcGVuRmluLlZpZXcpLmdldEN1cnJlbnRXaW5kb3coKTtcblx0Y29uc3QgeyBpZGVudGl0eTogbW9kYWxQYXJlbnRJZGVudGl0eSB9ID0gcGFyZW50V2luZG93O1xuXHRjb25zdCBwYXJlbnRCb3VuZHMgPSBhd2FpdCBwYXJlbnRXaW5kb3cuZ2V0Qm91bmRzKCk7XG5cdGNvbnN0IHFIZWlnaHQgPSBwYXJlbnRCb3VuZHMuaGVpZ2h0IC8gNDtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmluLm1lLnNob3dQb3B1cFdpbmRvdyh7XG5cdFx0aW5pdGlhbE9wdGlvbnM6IHtcblx0XHRcdG1vZGFsUGFyZW50SWRlbnRpdHlcblx0XHR9LFxuXHRcdHVybDogbG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwXCIsIFwicG9wdXBcIiksXG5cdFx0eDogTWF0aC5mbG9vcihwYXJlbnRCb3VuZHMud2lkdGggLyA4KSxcblx0XHR5OiBNYXRoLmZsb29yKHBhcmVudEJvdW5kcy5oZWlnaHQgLyA4KSAtIFBBUkVOVF9GUkFNRV9PRkZTRVQsXG5cdFx0aGVpZ2h0OiBNYXRoLmZsb29yKHBhcmVudEJvdW5kcy5oZWlnaHQgLSBxSGVpZ2h0KSxcblx0XHR3aWR0aDogTWF0aC5mbG9vcihwYXJlbnRCb3VuZHMud2lkdGggLSBxSGVpZ2h0KSxcblx0XHRibHVyQmVoYXZpb3I6IFwibW9kYWxcIlxuXHR9KTtcblx0cmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0OiBPcGVuRmluLlBvcHVwUmVzdWx0KTogdm9pZCB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCB1bmRlZmluZWQsIDIpO1xufVxuXG5mdW5jdGlvbiByZXNldFBvcHVwUmVzdWx0KCk6IHZvaWQge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXJlc3VsdFwiKS50ZXh0Q29udGVudCA9IFwiTm8gcmVzdWx0XCI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=