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
function renderPopupResult(result) {
    document.querySelector("#popup-result").textContent = JSON.stringify(result, undefined, 2);
}
function resetPopupResult() {
    document.querySelector("#popup-result").textContent = "No result";
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEQsU0FBUyxJQUFJO0lBQ1osTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xFLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEtBQUs7SUFDckMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FDM0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUMxQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUM7UUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQzVCLE1BQU0sRUFBRSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEdBQUc7S0FDVixDQUFDLENBQUM7SUFDSCxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUEyQjtJQUNyRCxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUYsQ0FBQztBQUVELFNBQVMsZ0JBQWdCO0lBQ3hCLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUNuRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1zaW5nbGUtcmVzdWx0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctc2luZ2xlLXJlc3VsdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctc2luZ2xlLXJlc3VsdC8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge307XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXHRjb25zdCBzaG93UG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1zaG93LXBvcHVwXCIpO1xuXHRzaG93UG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVBvcHVwV2luZG93KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9wdXBXaW5kb3coZXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmVzZXRQb3B1cFJlc3VsdCgpO1xuXHRjb25zdCB7IHRvcCwgcmlnaHQsIGhlaWdodCB9OiB7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9ID1cblx0XHRldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IGhIZWlnaHQgPSBoZWlnaHQgLyAyO1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBmaW4ubWUuc2hvd1BvcHVwV2luZG93KHtcblx0XHR1cmw6IGxvY2F0aW9uLmhyZWYucmVwbGFjZShcImFwcFwiLCBcInBvcHVwXCIpLFxuXHRcdHg6IHJpZ2h0ICsgNixcblx0XHR5OiBNYXRoLnJvdW5kKHRvcCArIGhIZWlnaHQpLFxuXHRcdGhlaWdodDogMTUwLFxuXHRcdHdpZHRoOiAzMDBcblx0fSk7XG5cdHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdDogT3BlbkZpbi5Qb3B1cFJlc3VsdCk6IHZvaWQge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXJlc3VsdFwiKS50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgdW5kZWZpbmVkLCAyKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQb3B1cFJlc3VsdCgpOiB2b2lkIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1yZXN1bHRcIikudGV4dENvbnRlbnQgPSBcIk5vIHJlc3VsdFwiO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9