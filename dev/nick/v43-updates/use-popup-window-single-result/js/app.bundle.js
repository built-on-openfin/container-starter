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
 * @param event The event to handle.
 */
async function createPopupWindow(event) {
    resetPopupResult();
    const { top, right, height } = event.target.getBoundingClientRect();
    const hHeight = height / 2;
    const result = await fin.me.showPopupWindow({
        url: location.href.replace("app", "popup"),
        x: right + 6,
        y: Math.round(top + hHeight),
        height: 150,
        width: 300
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ0pBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV2RDs7R0FFRztBQUNILFNBQVMsT0FBTztJQUNmLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW9CLGlCQUFpQixDQUFDLENBQUM7SUFDckYsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNyQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDOUQsQ0FBQztBQUNGLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsS0FBaUI7SUFDakQsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FDM0IsS0FBSyxDQUFDLE1BQ04sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzFCLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUMxQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUM7UUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQzVCLE1BQU0sRUFBRSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEdBQUc7S0FDVixDQUFDLENBQUM7SUFDSCxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxpQkFBaUIsQ0FBQyxNQUEyQjtJQUNyRCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELElBQUksR0FBRyxFQUFFLENBQUM7UUFDVCxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ0YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxnQkFBZ0I7SUFDeEIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwRCxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1QsR0FBRyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDL0IsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LXNpbmdsZS1yZXN1bHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1zaW5nbGUtcmVzdWx0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1zaW5nbGUtcmVzdWx0Ly4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdERvbSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBpbml0RG9tKCk6IHZvaWQge1xuXHRjb25zdCBzaG93UG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tc2hvdy1wb3B1cFwiKTtcblx0aWYgKHNob3dQb3B1cEJ1dHRvbikge1xuXHRcdHNob3dQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUG9wdXBXaW5kb3cpO1xuXHR9XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBwb3B1cCB3aW5kb3cgZnJvbSB0aGUgY2xpY2suXG4gKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRvIGhhbmRsZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9wdXBXaW5kb3coZXZlbnQ6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmVzZXRQb3B1cFJlc3VsdCgpO1xuXHRjb25zdCB7IHRvcCwgcmlnaHQsIGhlaWdodCB9OiB7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9ID0gKFxuXHRcdGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuXHQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCBoSGVpZ2h0ID0gaGVpZ2h0IC8gMjtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmluLm1lLnNob3dQb3B1cFdpbmRvdyh7XG5cdFx0dXJsOiBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCJhcHBcIiwgXCJwb3B1cFwiKSxcblx0XHR4OiByaWdodCArIDYsXG5cdFx0eTogTWF0aC5yb3VuZCh0b3AgKyBoSGVpZ2h0KSxcblx0XHRoZWlnaHQ6IDE1MCxcblx0XHR3aWR0aDogMzAwXG5cdH0pO1xuXHRyZW5kZXJQb3B1cFJlc3VsdChyZXN1bHQpO1xufVxuXG4vKipcbiAqIERpc3BsYXkgdGhlIHBvcHVwIHJlc3VsdC5cbiAqIEBwYXJhbSByZXN1bHQgVGhlIHJlc3VsdCB0byBkaXNwbGF5LlxuICovXG5mdW5jdGlvbiByZW5kZXJQb3B1cFJlc3VsdChyZXN1bHQ6IE9wZW5GaW4uUG9wdXBSZXN1bHQpOiB2b2lkIHtcblx0Y29uc3QgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1yZXN1bHRcIik7XG5cdGlmIChyZXMpIHtcblx0XHRyZXMudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQsIHVuZGVmaW5lZCwgMik7XG5cdH1cbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgcG9wdXAgcmVzdWx0LlxuICovXG5mdW5jdGlvbiByZXNldFBvcHVwUmVzdWx0KCk6IHZvaWQge1xuXHRjb25zdCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXJlc3VsdFwiKTtcblx0aWYgKHJlcykge1xuXHRcdHJlcy50ZXh0Q29udGVudCA9IFwiTm8gcmVzdWx0XCI7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=