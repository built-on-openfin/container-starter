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
async function initDom() {
    // provision about:blank window to later show as popup
    await fin.Window.create({ name: "popup", autoShow: false });
    const showPopupButton = document.querySelector("#btn-show-popup");
    if (showPopupButton) {
        showPopupButton.addEventListener("click", createPopupWindow);
    }
}
/**
 * Create the popup window from the click.
 * @param event The event to handle.
 */
async function createPopupWindow(event) {
    resetPopupResult();
    const { top, right, height } = event.target.getBoundingClientRect();
    const hHeight = height / 2;
    const result = await fin.me.showPopupWindow({
        name: "popup",
        additionalOptions: {
            customData: {
                shownAsPopup: Date.now()
            }
        },
        url: location.href.replace("app", "popup"),
        x: right + 6,
        y: Math.round(top + hHeight),
        height: 150,
        width: 300,
        hideOnClose: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ0pBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV2RDs7R0FFRztBQUNILEtBQUssVUFBVSxPQUFPO0lBQ3JCLHNEQUFzRDtJQUN0RCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM1RCxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFvQixpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JGLElBQUksZUFBZSxFQUFFLENBQUM7UUFDckIsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlELENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEtBQWlCO0lBQ2pELGdCQUFnQixFQUFFLENBQUM7SUFDbkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQzNCLEtBQUssQ0FBQyxNQUNOLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMxQixNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDM0MsSUFBSSxFQUFFLE9BQU87UUFDYixpQkFBaUIsRUFBRTtZQUNsQixVQUFVLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7YUFDeEI7U0FDRDtRQUNELEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDNUIsTUFBTSxFQUFFLEdBQUc7UUFDWCxLQUFLLEVBQUUsR0FBRztRQUNWLFdBQVcsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztJQUNILGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGlCQUFpQixDQUFDLE1BQTJCO0lBQ3JELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNULEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7QUFDRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGdCQUFnQjtJQUN4QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELElBQUksR0FBRyxFQUFFLENBQUM7UUFDVCxHQUFHLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMvQixDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctYWR2YW5jZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1hZHZhbmNlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctYWR2YW5jZWQvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0RG9tKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdC8vIHByb3Zpc2lvbiBhYm91dDpibGFuayB3aW5kb3cgdG8gbGF0ZXIgc2hvdyBhcyBwb3B1cFxuXHRhd2FpdCBmaW4uV2luZG93LmNyZWF0ZSh7IG5hbWU6IFwicG9wdXBcIiwgYXV0b1Nob3c6IGZhbHNlIH0pO1xuXHRjb25zdCBzaG93UG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tc2hvdy1wb3B1cFwiKTtcblx0aWYgKHNob3dQb3B1cEJ1dHRvbikge1xuXHRcdHNob3dQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUG9wdXBXaW5kb3cpO1xuXHR9XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBwb3B1cCB3aW5kb3cgZnJvbSB0aGUgY2xpY2suXG4gKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRvIGhhbmRsZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9wdXBXaW5kb3coZXZlbnQ6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmVzZXRQb3B1cFJlc3VsdCgpO1xuXHRjb25zdCB7IHRvcCwgcmlnaHQsIGhlaWdodCB9OiB7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9ID0gKFxuXHRcdGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuXHQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCBoSGVpZ2h0ID0gaGVpZ2h0IC8gMjtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmluLm1lLnNob3dQb3B1cFdpbmRvdyh7XG5cdFx0bmFtZTogXCJwb3B1cFwiLFxuXHRcdGFkZGl0aW9uYWxPcHRpb25zOiB7XG5cdFx0XHRjdXN0b21EYXRhOiB7XG5cdFx0XHRcdHNob3duQXNQb3B1cDogRGF0ZS5ub3coKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dXJsOiBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCJhcHBcIiwgXCJwb3B1cFwiKSxcblx0XHR4OiByaWdodCArIDYsXG5cdFx0eTogTWF0aC5yb3VuZCh0b3AgKyBoSGVpZ2h0KSxcblx0XHRoZWlnaHQ6IDE1MCxcblx0XHR3aWR0aDogMzAwLFxuXHRcdGhpZGVPbkNsb3NlOiB0cnVlXG5cdH0pO1xuXHRyZW5kZXJQb3B1cFJlc3VsdChyZXN1bHQpO1xufVxuXG4vKipcbiAqIERpc3BsYXkgdGhlIHBvcHVwIHJlc3VsdC5cbiAqIEBwYXJhbSByZXN1bHQgVGhlIHJlc3VsdCB0byBkaXNwbGF5LlxuICovXG5mdW5jdGlvbiByZW5kZXJQb3B1cFJlc3VsdChyZXN1bHQ6IE9wZW5GaW4uUG9wdXBSZXN1bHQpOiB2b2lkIHtcblx0Y29uc3QgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1yZXN1bHRcIik7XG5cdGlmIChyZXMpIHtcblx0XHRyZXMudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQsIHVuZGVmaW5lZCwgMik7XG5cdH1cbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgcG9wdXAgcmVzdWx0LlxuICovXG5mdW5jdGlvbiByZXNldFBvcHVwUmVzdWx0KCk6IHZvaWQge1xuXHRjb25zdCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXJlc3VsdFwiKTtcblx0aWYgKHJlcykge1xuXHRcdHJlcy50ZXh0Q29udGVudCA9IFwiTm8gcmVzdWx0XCI7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=