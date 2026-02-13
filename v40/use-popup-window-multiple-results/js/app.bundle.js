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
    const { right, height } = event.target.getBoundingClientRect();
    const hHeight = height / 2;
    const result = await fin.me.showPopupWindow({
        initialOptions: {
            customData: await fin.me.interop.getContextGroups()
        },
        url: location.href.replace("app", "popup"),
        x: right + 5,
        y: Math.round(hHeight + 15),
        height: 30,
        width: 250,
        resultDispatchBehavior: "none",
        onPopupResult: (popupResult) => {
            renderPopupResult(popupResult);
        }
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
        res.textContent = "";
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ0pBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV2RDs7R0FFRztBQUNILFNBQVMsT0FBTztJQUNmLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW9CLGlCQUFpQixDQUFDLENBQUM7SUFDckYsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNyQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDOUQsQ0FBQztBQUNGLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsaUJBQWlCLENBQUMsS0FBaUI7SUFDakQsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUN0QixLQUFLLENBQUMsTUFDTixDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQixNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQzNDLGNBQWMsRUFBRTtZQUNmLFVBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1NBQ25EO1FBQ0QsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDMUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDO1FBQ1osQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUMzQixNQUFNLEVBQUUsRUFBRTtRQUNWLEtBQUssRUFBRSxHQUFHO1FBQ1Ysc0JBQXNCLEVBQUUsTUFBTTtRQUM5QixhQUFhLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUM5QixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxDQUFDO0tBQ0QsQ0FBQyxDQUFDO0lBQ0gsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsaUJBQWlCLENBQUMsTUFBMkI7SUFDckQsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwRCxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1QsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztBQUNGLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZ0JBQWdCO0lBQ3hCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNULEdBQUcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tdWx0aXBsZS1yZXN1bHRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbXVsdGlwbGUtcmVzdWx0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbXVsdGlwbGUtcmVzdWx0cy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXREb20pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gaW5pdERvbSgpOiB2b2lkIHtcblx0Y29uc3Qgc2hvd1BvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuLXNob3ctcG9wdXBcIik7XG5cdGlmIChzaG93UG9wdXBCdXR0b24pIHtcblx0XHRzaG93UG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVBvcHVwV2luZG93KTtcblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgcG9wdXAgd2luZG93IGZyb20gdGhlIGNsaWNrLlxuICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCB0byBoYW5kbGUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvcHVwV2luZG93KGV2ZW50OiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cdHJlc2V0UG9wdXBSZXN1bHQoKTtcblx0Y29uc3QgeyByaWdodCwgaGVpZ2h0IH06IHsgcmlnaHQ6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9IChcblx0XHRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblx0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgaEhlaWdodCA9IGhlaWdodCAvIDI7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbi5tZS5zaG93UG9wdXBXaW5kb3coe1xuXHRcdGluaXRpYWxPcHRpb25zOiB7XG5cdFx0XHRjdXN0b21EYXRhOiBhd2FpdCBmaW4ubWUuaW50ZXJvcC5nZXRDb250ZXh0R3JvdXBzKClcblx0XHR9LFxuXHRcdHVybDogbG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwXCIsIFwicG9wdXBcIiksXG5cdFx0eDogcmlnaHQgKyA1LFxuXHRcdHk6IE1hdGgucm91bmQoaEhlaWdodCArIDE1KSxcblx0XHRoZWlnaHQ6IDMwLFxuXHRcdHdpZHRoOiAyNTAsXG5cdFx0cmVzdWx0RGlzcGF0Y2hCZWhhdmlvcjogXCJub25lXCIsXG5cdFx0b25Qb3B1cFJlc3VsdDogKHBvcHVwUmVzdWx0KSA9PiB7XG5cdFx0XHRyZW5kZXJQb3B1cFJlc3VsdChwb3B1cFJlc3VsdCk7XG5cdFx0fVxuXHR9KTtcblx0cmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBEaXNwbGF5IHRoZSBwb3B1cCByZXN1bHQuXG4gKiBAcGFyYW0gcmVzdWx0IFRoZSByZXN1bHQgdG8gZGlzcGxheS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0OiBPcGVuRmluLlBvcHVwUmVzdWx0KTogdm9pZCB7XG5cdGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpO1xuXHRpZiAocmVzKSB7XG5cdFx0cmVzLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCB1bmRlZmluZWQsIDIpO1xuXHR9XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIHBvcHVwIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gcmVzZXRQb3B1cFJlc3VsdCgpOiB2b2lkIHtcblx0Y29uc3QgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1yZXN1bHRcIik7XG5cdGlmIChyZXMpIHtcblx0XHRyZXMudGV4dENvbnRlbnQgPSBcIlwiO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9