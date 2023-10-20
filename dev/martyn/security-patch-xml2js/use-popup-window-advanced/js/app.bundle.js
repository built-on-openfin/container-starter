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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFdkQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsT0FBTztJQUNyQixzREFBc0Q7SUFDdEQsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDNUQsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBb0IsaUJBQWlCLENBQUMsQ0FBQztJQUNyRixJQUFJLGVBQWUsRUFBRTtRQUNwQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDN0Q7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEtBQWlCO0lBQ2pELGdCQUFnQixFQUFFLENBQUM7SUFDbkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQzNCLEtBQUssQ0FBQyxNQUNOLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMxQixNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDM0MsSUFBSSxFQUFFLE9BQU87UUFDYixpQkFBaUIsRUFBRTtZQUNsQixVQUFVLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7YUFDeEI7U0FDRDtRQUNELEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDNUIsTUFBTSxFQUFFLEdBQUc7UUFDWCxLQUFLLEVBQUUsR0FBRztRQUNWLFdBQVcsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztJQUNILGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGlCQUFpQixDQUFDLE1BQTJCO0lBQ3JELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsSUFBSSxHQUFHLEVBQUU7UUFDUixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2RDtBQUNGLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZ0JBQWdCO0lBQ3hCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsSUFBSSxHQUFHLEVBQUU7UUFDUixHQUFHLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztLQUM5QjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LWFkdmFuY2VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctYWR2YW5jZWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LWFkdmFuY2VkLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdERvbSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHQvLyBwcm92aXNpb24gYWJvdXQ6Ymxhbmsgd2luZG93IHRvIGxhdGVyIHNob3cgYXMgcG9wdXBcblx0YXdhaXQgZmluLldpbmRvdy5jcmVhdGUoeyBuYW1lOiBcInBvcHVwXCIsIGF1dG9TaG93OiBmYWxzZSB9KTtcblx0Y29uc3Qgc2hvd1BvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuLXNob3ctcG9wdXBcIik7XG5cdGlmIChzaG93UG9wdXBCdXR0b24pIHtcblx0XHRzaG93UG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVBvcHVwV2luZG93KTtcblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgcG9wdXAgd2luZG93IGZyb20gdGhlIGNsaWNrLlxuICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCB0byBoYW5kbGUuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvcHVwV2luZG93KGV2ZW50OiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cdHJlc2V0UG9wdXBSZXN1bHQoKTtcblx0Y29uc3QgeyB0b3AsIHJpZ2h0LCBoZWlnaHQgfTogeyB0b3A6IG51bWJlcjsgcmlnaHQ6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9IChcblx0XHRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblx0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgaEhlaWdodCA9IGhlaWdodCAvIDI7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbi5tZS5zaG93UG9wdXBXaW5kb3coe1xuXHRcdG5hbWU6IFwicG9wdXBcIixcblx0XHRhZGRpdGlvbmFsT3B0aW9uczoge1xuXHRcdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0XHRzaG93bkFzUG9wdXA6IERhdGUubm93KClcblx0XHRcdH1cblx0XHR9LFxuXHRcdHVybDogbG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwXCIsIFwicG9wdXBcIiksXG5cdFx0eDogcmlnaHQgKyA2LFxuXHRcdHk6IE1hdGgucm91bmQodG9wICsgaEhlaWdodCksXG5cdFx0aGVpZ2h0OiAxNTAsXG5cdFx0d2lkdGg6IDMwMCxcblx0XHRoaWRlT25DbG9zZTogdHJ1ZVxuXHR9KTtcblx0cmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBEaXNwbGF5IHRoZSBwb3B1cCByZXN1bHQuXG4gKiBAcGFyYW0gcmVzdWx0IFRoZSByZXN1bHQgdG8gZGlzcGxheS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0OiBPcGVuRmluLlBvcHVwUmVzdWx0KTogdm9pZCB7XG5cdGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpO1xuXHRpZiAocmVzKSB7XG5cdFx0cmVzLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCB1bmRlZmluZWQsIDIpO1xuXHR9XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIHBvcHVwIHJlc3VsdC5cbiAqL1xuZnVuY3Rpb24gcmVzZXRQb3B1cFJlc3VsdCgpOiB2b2lkIHtcblx0Y29uc3QgcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1yZXN1bHRcIik7XG5cdGlmIChyZXMpIHtcblx0XHRyZXMudGV4dENvbnRlbnQgPSBcIk5vIHJlc3VsdFwiO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=