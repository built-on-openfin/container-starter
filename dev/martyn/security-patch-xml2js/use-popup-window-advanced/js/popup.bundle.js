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
/*!*****************************!*\
  !*** ./client/src/popup.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
const me = fin.me;
document.addEventListener("DOMContentLoaded", initDom);
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    const okButton = document.querySelector("#btn-ok");
    const confirmButton = document.querySelector("#btn-confirm");
    const cancelButton = document.querySelector("#btn-cancel");
    if (okButton) {
        okButton.addEventListener("click", async () => {
            await me.dispatchPopupResult("ok");
        });
    }
    if (confirmButton) {
        confirmButton.addEventListener("click", async () => {
            await me.dispatchPopupResult("confirm");
        });
    }
    if (cancelButton) {
        cancelButton.addEventListener("click", async () => {
            await me.dispatchPopupResult("cancel");
        });
    }
    await renderShownDate();
    await me.on("shown", renderShownDate);
}
/**
 * Show the shown date in the UI.
 */
async function renderShownDate() {
    const shownDateEl = document.querySelector("#shown-date");
    const { customData } = await me.getOptions();
    const { shownAsPopup } = customData;
    if (shownDateEl) {
        shownDateEl.textContent = new Date(shownAsPopup).toTimeString();
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ0pBLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFvQixDQUFDO0FBRXBDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV2RDs7R0FFRztBQUNILEtBQUssVUFBVSxPQUFPO0lBQ3JCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTNELElBQUksUUFBUSxFQUFFO1FBQ2IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUM3QyxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztLQUNIO0lBRUQsSUFBSSxhQUFhLEVBQUU7UUFDbEIsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNsRCxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztLQUNIO0lBRUQsSUFBSSxZQUFZLEVBQUU7UUFDakIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNqRCxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztLQUNIO0lBRUQsTUFBTSxlQUFlLEVBQUUsQ0FBQztJQUN4QixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSxlQUFlO0lBQzdCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBNkIsVUFBVSxDQUFDO0lBQzlELElBQUksV0FBVyxFQUFFO1FBQ2hCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDaEU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1hZHZhbmNlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LWFkdmFuY2VkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1hZHZhbmNlZC8uL2NsaWVudC9zcmMvcG9wdXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxuY29uc3QgbWUgPSBmaW4ubWUgYXMgT3BlbkZpbi5XaW5kb3c7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXREb20pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1va1wiKTtcblx0Y29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbmZpcm1cIik7XG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNhbmNlbFwiKTtcblxuXHRpZiAob2tCdXR0b24pIHtcblx0XHRva0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbWUuZGlzcGF0Y2hQb3B1cFJlc3VsdChcIm9rXCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKGNvbmZpcm1CdXR0b24pIHtcblx0XHRjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5kaXNwYXRjaFBvcHVwUmVzdWx0KFwiY29uZmlybVwiKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmIChjYW5jZWxCdXR0b24pIHtcblx0XHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IG1lLmRpc3BhdGNoUG9wdXBSZXN1bHQoXCJjYW5jZWxcIik7XG5cdFx0fSk7XG5cdH1cblxuXHRhd2FpdCByZW5kZXJTaG93bkRhdGUoKTtcblx0YXdhaXQgbWUub24oXCJzaG93blwiLCByZW5kZXJTaG93bkRhdGUpO1xufVxuXG4vKipcbiAqIFNob3cgdGhlIHNob3duIGRhdGUgaW4gdGhlIFVJLlxuICovXG5hc3luYyBmdW5jdGlvbiByZW5kZXJTaG93bkRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNob3duRGF0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93bi1kYXRlXCIpO1xuXHRjb25zdCB7IGN1c3RvbURhdGEgfSA9IGF3YWl0IG1lLmdldE9wdGlvbnMoKTtcblx0Y29uc3QgeyBzaG93bkFzUG9wdXAgfTogeyBzaG93bkFzUG9wdXA6IG51bWJlciB9ID0gY3VzdG9tRGF0YTtcblx0aWYgKHNob3duRGF0ZUVsKSB7XG5cdFx0c2hvd25EYXRlRWwudGV4dENvbnRlbnQgPSBuZXcgRGF0ZShzaG93bkFzUG9wdXApLnRvVGltZVN0cmluZygpO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=