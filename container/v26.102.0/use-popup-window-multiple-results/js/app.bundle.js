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
function renderPopupResult(result) {
    document.querySelector("#popup-result").textContent = JSON.stringify(result, undefined, 2);
}
function resetPopupResult() {
    document.querySelector("#popup-result").textContent = "";
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEQsU0FBUyxJQUFJO0lBQ1osTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBb0IsaUJBQWlCLENBQUMsQ0FBQztJQUNyRixlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVELEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxLQUFLO0lBQ3JDLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBc0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2xHLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxjQUFjLEVBQUU7WUFDZixVQUFVLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtTQUNuRDtRQUNELEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDM0IsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsR0FBRztRQUNWLHNCQUFzQixFQUFFLE1BQU07UUFDOUIsYUFBYSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDOUIsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUNELENBQUMsQ0FBQztJQUNILGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLE1BQTJCO0lBQ3JELFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RixDQUFDO0FBRUQsU0FBUyxnQkFBZ0I7SUFDeEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQzFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW11bHRpcGxlLXJlc3VsdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tdWx0aXBsZS1yZXN1bHRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tdWx0aXBsZS1yZXN1bHRzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdGNvbnN0IHNob3dQb3B1cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1zaG93LXBvcHVwXCIpO1xuXHRzaG93UG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVBvcHVwV2luZG93KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9wdXBXaW5kb3coZXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmVzZXRQb3B1cFJlc3VsdCgpO1xuXHRjb25zdCB7IHJpZ2h0LCBoZWlnaHQgfTogeyByaWdodDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9ID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRjb25zdCBoSGVpZ2h0ID0gaGVpZ2h0IC8gMjtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmluLm1lLnNob3dQb3B1cFdpbmRvdyh7XG5cdFx0aW5pdGlhbE9wdGlvbnM6IHtcblx0XHRcdGN1c3RvbURhdGE6IGF3YWl0IGZpbi5tZS5pbnRlcm9wLmdldENvbnRleHRHcm91cHMoKVxuXHRcdH0sXG5cdFx0dXJsOiBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCJhcHBcIiwgXCJwb3B1cFwiKSxcblx0XHR4OiByaWdodCArIDUsXG5cdFx0eTogTWF0aC5yb3VuZChoSGVpZ2h0ICsgMTUpLFxuXHRcdGhlaWdodDogMzAsXG5cdFx0d2lkdGg6IDI1MCxcblx0XHRyZXN1bHREaXNwYXRjaEJlaGF2aW9yOiBcIm5vbmVcIixcblx0XHRvblBvcHVwUmVzdWx0OiAocG9wdXBSZXN1bHQpID0+IHtcblx0XHRcdHJlbmRlclBvcHVwUmVzdWx0KHBvcHVwUmVzdWx0KTtcblx0XHR9XG5cdH0pO1xuXHRyZW5kZXJQb3B1cFJlc3VsdChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQb3B1cFJlc3VsdChyZXN1bHQ6IE9wZW5GaW4uUG9wdXBSZXN1bHQpOiB2b2lkIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1yZXN1bHRcIikudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQsIHVuZGVmaW5lZCwgMik7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wdXBSZXN1bHQoKTogdm9pZCB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpLnRleHRDb250ZW50ID0gXCJcIjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==