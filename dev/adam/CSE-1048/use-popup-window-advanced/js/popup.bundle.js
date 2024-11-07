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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ0pBLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFvQixDQUFDO0FBRXBDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV2RDs7R0FFRztBQUNILEtBQUssVUFBVSxPQUFPO0lBQ3JCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTNELElBQUksUUFBUSxFQUFFLENBQUM7UUFDZCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzdDLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksYUFBYSxFQUFFLENBQUM7UUFDbkIsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNsRCxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDakQsTUFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxlQUFlLEVBQUUsQ0FBQztJQUN4QixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSxlQUFlO0lBQzdCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdDLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBNkIsVUFBVSxDQUFDO0lBQzlELElBQUksV0FBVyxFQUFFLENBQUM7UUFDakIsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctYWR2YW5jZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1hZHZhbmNlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctYWR2YW5jZWQvLi9jbGllbnQvc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmNvbnN0IG1lID0gZmluLm1lIGFzIE9wZW5GaW4uV2luZG93O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0RG9tKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG9rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb2tcIik7XG5cdGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb25maXJtXCIpO1xuXHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jYW5jZWxcIik7XG5cblx0aWYgKG9rQnV0dG9uKSB7XG5cdFx0b2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IG1lLmRpc3BhdGNoUG9wdXBSZXN1bHQoXCJva1wiKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmIChjb25maXJtQnV0dG9uKSB7XG5cdFx0Y29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbWUuZGlzcGF0Y2hQb3B1cFJlc3VsdChcImNvbmZpcm1cIik7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoY2FuY2VsQnV0dG9uKSB7XG5cdFx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5kaXNwYXRjaFBvcHVwUmVzdWx0KFwiY2FuY2VsXCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0YXdhaXQgcmVuZGVyU2hvd25EYXRlKCk7XG5cdGF3YWl0IG1lLm9uKFwic2hvd25cIiwgcmVuZGVyU2hvd25EYXRlKTtcbn1cblxuLyoqXG4gKiBTaG93IHRoZSBzaG93biBkYXRlIGluIHRoZSBVSS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVuZGVyU2hvd25EYXRlKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzaG93bkRhdGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvd24tZGF0ZVwiKTtcblx0Y29uc3QgeyBjdXN0b21EYXRhIH0gPSBhd2FpdCBtZS5nZXRPcHRpb25zKCk7XG5cdGNvbnN0IHsgc2hvd25Bc1BvcHVwIH06IHsgc2hvd25Bc1BvcHVwOiBudW1iZXIgfSA9IGN1c3RvbURhdGE7XG5cdGlmIChzaG93bkRhdGVFbCkge1xuXHRcdHNob3duRGF0ZUVsLnRleHRDb250ZW50ID0gbmV3IERhdGUoc2hvd25Bc1BvcHVwKS50b1RpbWVTdHJpbmcoKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9