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
document.addEventListener("DOMContentLoaded", initDom);
/**
 * Initialize the DOM elements.
 */
function initDom() {
    const showPopupButton = document.querySelector("#btn-show-popup");
    if (showPopupButton) {
        showPopupButton.addEventListener("click", createPopupWindow);
    }
}
/**
 * Create the popup window from the click.
 */
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
/**
 * Display the popup result.
 * @param result The result to display.
 */
function renderPopupResult(result) {
    const res = document.querySelector("#popup-result");
    if (res) {
        res.textContent = JSON.stringify(result, undefined, 2);
    }
}
/**
 * Clear the popup result.
 */
function resetPopupResult() {
    const res = document.querySelector("#popup-result");
    if (res) {
        res.textContent = "No result";
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ0pBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV2RDs7R0FFRztBQUNILFNBQVMsT0FBTztJQUNmLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRSxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3JCLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0FBQ0YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGlCQUFpQjtJQUMvQixNQUFNLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztJQUMvQixnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLE1BQU0sWUFBWSxHQUFHLE1BQU8sR0FBRyxDQUFDLEVBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN2RSxNQUFNLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEdBQUcsWUFBWSxDQUFDO0lBQ3ZELE1BQU0sWUFBWSxHQUFHLE1BQU0sWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BELE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDM0MsY0FBYyxFQUFFO1lBQ2YsbUJBQW1CO1NBQ25CO1FBQ0QsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxtQkFBbUI7UUFDNUQsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDakQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDL0MsWUFBWSxFQUFFLE9BQU87S0FDckIsQ0FBQyxDQUFDO0lBQ0gsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsaUJBQWlCLENBQUMsTUFBMkI7SUFDckQsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwRCxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1QsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztBQUNGLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZ0JBQWdCO0lBQ3hCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNULEdBQUcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQy9CLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tb2RhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW1vZGFsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tb2RhbC8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXREb20pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gaW5pdERvbSgpOiB2b2lkIHtcblx0Y29uc3Qgc2hvd1BvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tc2hvdy1wb3B1cFwiKTtcblx0aWYgKHNob3dQb3B1cEJ1dHRvbikge1xuXHRcdHNob3dQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUG9wdXBXaW5kb3cpO1xuXHR9XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBwb3B1cCB3aW5kb3cgZnJvbSB0aGUgY2xpY2suXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvcHVwV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBQQVJFTlRfRlJBTUVfT0ZGU0VUID0gNjQ7XG5cdHJlc2V0UG9wdXBSZXN1bHQoKTtcblx0Y29uc3QgcGFyZW50V2luZG93ID0gYXdhaXQgKGZpbi5tZSBhcyBPcGVuRmluLlZpZXcpLmdldEN1cnJlbnRXaW5kb3coKTtcblx0Y29uc3QgeyBpZGVudGl0eTogbW9kYWxQYXJlbnRJZGVudGl0eSB9ID0gcGFyZW50V2luZG93O1xuXHRjb25zdCBwYXJlbnRCb3VuZHMgPSBhd2FpdCBwYXJlbnRXaW5kb3cuZ2V0Qm91bmRzKCk7XG5cdGNvbnN0IHFIZWlnaHQgPSBwYXJlbnRCb3VuZHMuaGVpZ2h0IC8gNDtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmluLm1lLnNob3dQb3B1cFdpbmRvdyh7XG5cdFx0aW5pdGlhbE9wdGlvbnM6IHtcblx0XHRcdG1vZGFsUGFyZW50SWRlbnRpdHlcblx0XHR9LFxuXHRcdHVybDogbG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwXCIsIFwicG9wdXBcIiksXG5cdFx0eDogTWF0aC5mbG9vcihwYXJlbnRCb3VuZHMud2lkdGggLyA4KSxcblx0XHR5OiBNYXRoLmZsb29yKHBhcmVudEJvdW5kcy5oZWlnaHQgLyA4KSAtIFBBUkVOVF9GUkFNRV9PRkZTRVQsXG5cdFx0aGVpZ2h0OiBNYXRoLmZsb29yKHBhcmVudEJvdW5kcy5oZWlnaHQgLSBxSGVpZ2h0KSxcblx0XHR3aWR0aDogTWF0aC5mbG9vcihwYXJlbnRCb3VuZHMud2lkdGggLSBxSGVpZ2h0KSxcblx0XHRibHVyQmVoYXZpb3I6IFwibW9kYWxcIlxuXHR9KTtcblx0cmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBEaXNwbGF5IHRoZSBwb3B1cCByZXN1bHQuXG4gKiBAcGFyYW0gcmVzdWx0IFRoZSByZXN1bHQgdG8gZGlzcGxheS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0OiBPcGVuRmluLlBvcHVwUmVzdWx0KTogdm9pZCB7XG5cdGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpO1xuXHRpZiAocmVzKSB7XG5cdFx0cmVzLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCB1bmRlZmluZWQsIDIpO1xuXHR9XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIHBvcHVwIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gcmVzZXRQb3B1cFJlc3VsdCgpOiB2b2lkIHtcblx0Y29uc3QgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1yZXN1bHRcIik7XG5cdGlmIChyZXMpIHtcblx0XHRyZXMudGV4dENvbnRlbnQgPSBcIk5vIHJlc3VsdFwiO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9