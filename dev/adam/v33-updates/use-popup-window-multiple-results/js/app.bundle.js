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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFdkQ7O0dBRUc7QUFDSCxTQUFTLE9BQU87SUFDZixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFvQixpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JGLElBQUksZUFBZSxFQUFFLENBQUM7UUFDckIsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlELENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEtBQWlCO0lBQ2pELGdCQUFnQixFQUFFLENBQUM7SUFDbkIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FDdEIsS0FBSyxDQUFDLE1BQ04sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzFCLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxjQUFjLEVBQUU7WUFDZixVQUFVLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtTQUNuRDtRQUNELEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDM0IsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsR0FBRztRQUNWLHNCQUFzQixFQUFFLE1BQU07UUFDOUIsYUFBYSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDOUIsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUNELENBQUMsQ0FBQztJQUNILGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGlCQUFpQixDQUFDLE1BQTJCO0lBQ3JELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNULEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7QUFDRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGdCQUFnQjtJQUN4QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELElBQUksR0FBRyxFQUFFLENBQUM7UUFDVCxHQUFHLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbXVsdGlwbGUtcmVzdWx0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW11bHRpcGxlLXJlc3VsdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW11bHRpcGxlLXJlc3VsdHMvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0RG9tKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGluaXREb20oKTogdm9pZCB7XG5cdGNvbnN0IHNob3dQb3B1cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1zaG93LXBvcHVwXCIpO1xuXHRpZiAoc2hvd1BvcHVwQnV0dG9uKSB7XG5cdFx0c2hvd1BvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQb3B1cFdpbmRvdyk7XG5cdH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIHBvcHVwIHdpbmRvdyBmcm9tIHRoZSBjbGljay5cbiAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdG8gaGFuZGxlLlxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVQb3B1cFdpbmRvdyhldmVudDogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXNldFBvcHVwUmVzdWx0KCk7XG5cdGNvbnN0IHsgcmlnaHQsIGhlaWdodCB9OiB7IHJpZ2h0OiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gPSAoXG5cdFx0ZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG5cdCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IGhIZWlnaHQgPSBoZWlnaHQgLyAyO1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBmaW4ubWUuc2hvd1BvcHVwV2luZG93KHtcblx0XHRpbml0aWFsT3B0aW9uczoge1xuXHRcdFx0Y3VzdG9tRGF0YTogYXdhaXQgZmluLm1lLmludGVyb3AuZ2V0Q29udGV4dEdyb3VwcygpXG5cdFx0fSxcblx0XHR1cmw6IGxvY2F0aW9uLmhyZWYucmVwbGFjZShcImFwcFwiLCBcInBvcHVwXCIpLFxuXHRcdHg6IHJpZ2h0ICsgNSxcblx0XHR5OiBNYXRoLnJvdW5kKGhIZWlnaHQgKyAxNSksXG5cdFx0aGVpZ2h0OiAzMCxcblx0XHR3aWR0aDogMjUwLFxuXHRcdHJlc3VsdERpc3BhdGNoQmVoYXZpb3I6IFwibm9uZVwiLFxuXHRcdG9uUG9wdXBSZXN1bHQ6IChwb3B1cFJlc3VsdCkgPT4ge1xuXHRcdFx0cmVuZGVyUG9wdXBSZXN1bHQocG9wdXBSZXN1bHQpO1xuXHRcdH1cblx0fSk7XG5cdHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdCk7XG59XG5cbi8qKlxuICogRGlzcGxheSB0aGUgcG9wdXAgcmVzdWx0LlxuICogQHBhcmFtIHJlc3VsdCBUaGUgcmVzdWx0IHRvIGRpc3BsYXkuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdDogT3BlbkZpbi5Qb3B1cFJlc3VsdCk6IHZvaWQge1xuXHRjb25zdCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXJlc3VsdFwiKTtcblx0aWYgKHJlcykge1xuXHRcdHJlcy50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgdW5kZWZpbmVkLCAyKTtcblx0fVxufVxuXG4vKipcbiAqIENsZWFyIHRoZSBwb3B1cCByZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0UG9wdXBSZXN1bHQoKTogdm9pZCB7XG5cdGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpO1xuXHRpZiAocmVzKSB7XG5cdFx0cmVzLnRleHRDb250ZW50ID0gXCJcIjtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9