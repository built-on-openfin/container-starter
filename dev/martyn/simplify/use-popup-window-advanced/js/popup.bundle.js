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
document.addEventListener("DOMContentLoaded", init);
async function init() {
    const okButton = document.querySelector("#btn-ok");
    const confirmButton = document.querySelector("#btn-confirm");
    const cancelButton = document.querySelector("#btn-cancel");
    okButton.addEventListener("click", async () => {
        await me.dispatchPopupResult("ok");
    });
    confirmButton.addEventListener("click", async () => {
        await me.dispatchPopupResult("confirm");
    });
    cancelButton.addEventListener("click", async () => {
        await me.dispatchPopupResult("cancel");
    });
    await renderShownDate();
    await me.on("shown", renderShownDate);
}
async function renderShownDate() {
    const shownDateEl = document.querySelector("#shown-date");
    const { customData } = await me.getOptions();
    const { shownAsPopup } = customData;
    shownDateEl.textContent = new Date(shownAsPopup).toTimeString();
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ0pBLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFvQixDQUFDO0FBRXBDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVwRCxLQUFLLFVBQVUsSUFBSTtJQUNsQixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0QsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUUzRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzdDLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBRUgsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsRCxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztJQUVILFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDakQsTUFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELEtBQUssVUFBVSxlQUFlO0lBQzdCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBNkIsVUFBVSxDQUFDO0lBQzlELFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDakUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctYWR2YW5jZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1hZHZhbmNlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctYWR2YW5jZWQvLi9jbGllbnQvc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge307XG5cbmNvbnN0IG1lID0gZmluLm1lIGFzIE9wZW5GaW4uV2luZG93O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1va1wiKTtcblx0Y29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNvbmZpcm1cIik7XG5cdGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNhbmNlbFwiKTtcblxuXHRva0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IG1lLmRpc3BhdGNoUG9wdXBSZXN1bHQoXCJva1wiKTtcblx0fSk7XG5cblx0Y29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IG1lLmRpc3BhdGNoUG9wdXBSZXN1bHQoXCJjb25maXJtXCIpO1xuXHR9KTtcblxuXHRjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBtZS5kaXNwYXRjaFBvcHVwUmVzdWx0KFwiY2FuY2VsXCIpO1xuXHR9KTtcblxuXHRhd2FpdCByZW5kZXJTaG93bkRhdGUoKTtcblx0YXdhaXQgbWUub24oXCJzaG93blwiLCByZW5kZXJTaG93bkRhdGUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJTaG93bkRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNob3duRGF0ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93bi1kYXRlXCIpO1xuXHRjb25zdCB7IGN1c3RvbURhdGEgfSA9IGF3YWl0IG1lLmdldE9wdGlvbnMoKTtcblx0Y29uc3QgeyBzaG93bkFzUG9wdXAgfTogeyBzaG93bkFzUG9wdXA6IG51bWJlciB9ID0gY3VzdG9tRGF0YTtcblx0c2hvd25EYXRlRWwudGV4dENvbnRlbnQgPSBuZXcgRGF0ZShzaG93bkFzUG9wdXApLnRvVGltZVN0cmluZygpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9