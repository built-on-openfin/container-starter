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
function initDom() {
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
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ0pBLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFvQixDQUFDO0FBRXBDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV2RDs7R0FFRztBQUNILFNBQVMsT0FBTztJQUNmLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTNELElBQUksUUFBUSxFQUFFO1FBQ2IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUM3QyxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztLQUNIO0lBRUQsSUFBSSxhQUFhLEVBQUU7UUFDbEIsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNsRCxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztLQUNIO0lBRUQsSUFBSSxZQUFZLEVBQUU7UUFDakIsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNqRCxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztLQUNIO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctc2luZ2xlLXJlc3VsdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LXNpbmdsZS1yZXN1bHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LXNpbmdsZS1yZXN1bHQvLi9jbGllbnQvc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge307XG5cbmNvbnN0IG1lID0gZmluLm1lIGFzIE9wZW5GaW4uV2luZG93O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0RG9tKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGluaXREb20oKTogdm9pZCB7XG5cdGNvbnN0IG9rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb2tcIik7XG5cdGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb25maXJtXCIpO1xuXHRjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jYW5jZWxcIik7XG5cblx0aWYgKG9rQnV0dG9uKSB7XG5cdFx0b2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IG1lLmRpc3BhdGNoUG9wdXBSZXN1bHQoXCJva1wiKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmIChjb25maXJtQnV0dG9uKSB7XG5cdFx0Y29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbWUuZGlzcGF0Y2hQb3B1cFJlc3VsdChcImNvbmZpcm1cIik7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoY2FuY2VsQnV0dG9uKSB7XG5cdFx0Y2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5kaXNwYXRjaFBvcHVwUmVzdWx0KFwiY2FuY2VsXCIpO1xuXHRcdH0pO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=