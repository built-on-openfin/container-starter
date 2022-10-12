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
async function init() {
    // provision about:blank window to later show as popup
    await fin.Window.create({ name: "popup", autoShow: false });
    const showPopupButton = document.querySelector("#btn-show-popup");
    showPopupButton.addEventListener("click", createPopupWindow);
}
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
function renderPopupResult(result) {
    document.querySelector("#popup-result").textContent = JSON.stringify(result, undefined, 2);
}
function resetPopupResult() {
    document.querySelector("#popup-result").textContent = "No result";
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEQsS0FBSyxVQUFVLElBQUk7SUFDbEIsc0RBQXNEO0lBQ3RELE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzVELE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVELEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxLQUFLO0lBQ3JDLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQzNCLEtBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUN0QyxNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDM0MsSUFBSSxFQUFFLE9BQU87UUFDYixpQkFBaUIsRUFBRTtZQUNsQixVQUFVLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7YUFDeEI7U0FDRDtRQUNELEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDNUIsTUFBTSxFQUFFLEdBQUc7UUFDWCxLQUFLLEVBQUUsR0FBRztRQUNWLFdBQVcsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztJQUNILGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLE1BQTJCO0lBQ3JELFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1RixDQUFDO0FBRUQsU0FBUyxnQkFBZ0I7SUFDeEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQ25FLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LWFkdmFuY2VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctYWR2YW5jZWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LWFkdmFuY2VkLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG5cdC8vIHByb3Zpc2lvbiBhYm91dDpibGFuayB3aW5kb3cgdG8gbGF0ZXIgc2hvdyBhcyBwb3B1cFxuXHRhd2FpdCBmaW4uV2luZG93LmNyZWF0ZSh7IG5hbWU6IFwicG9wdXBcIiwgYXV0b1Nob3c6IGZhbHNlIH0pO1xuXHRjb25zdCBzaG93UG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1zaG93LXBvcHVwXCIpO1xuXHRzaG93UG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVBvcHVwV2luZG93KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9wdXBXaW5kb3coZXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmVzZXRQb3B1cFJlc3VsdCgpO1xuXHRjb25zdCB7IHRvcCwgcmlnaHQsIGhlaWdodCB9OiB7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9ID1cblx0XHRldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IGhIZWlnaHQgPSBoZWlnaHQgLyAyO1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBmaW4ubWUuc2hvd1BvcHVwV2luZG93KHtcblx0XHRuYW1lOiBcInBvcHVwXCIsXG5cdFx0YWRkaXRpb25hbE9wdGlvbnM6IHtcblx0XHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdFx0c2hvd25Bc1BvcHVwOiBEYXRlLm5vdygpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHR1cmw6IGxvY2F0aW9uLmhyZWYucmVwbGFjZShcImFwcFwiLCBcInBvcHVwXCIpLFxuXHRcdHg6IHJpZ2h0ICsgNixcblx0XHR5OiBNYXRoLnJvdW5kKHRvcCArIGhIZWlnaHQpLFxuXHRcdGhlaWdodDogMTUwLFxuXHRcdHdpZHRoOiAzMDAsXG5cdFx0aGlkZU9uQ2xvc2U6IHRydWVcblx0fSk7XG5cdHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdDogT3BlbkZpbi5Qb3B1cFJlc3VsdCk6IHZvaWQge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXJlc3VsdFwiKS50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgdW5kZWZpbmVkLCAyKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQb3B1cFJlc3VsdCgpOiB2b2lkIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1yZXN1bHRcIikudGV4dENvbnRlbnQgPSBcIk5vIHJlc3VsdFwiO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9