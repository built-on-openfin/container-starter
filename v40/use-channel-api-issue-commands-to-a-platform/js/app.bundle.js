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
if (document.readyState === "complete") {
    initApp().catch(() => { });
}
else {
    window.addEventListener("load", async () => {
        await initApp();
    });
}
/**
 * Initialize the application.
 */
async function initApp() {
    const container = document.querySelector("#context-container");
    if (container) {
        const viewOptions = await fin.me.getOptions();
        container.textContent = JSON.stringify(viewOptions.customData);
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ0pBLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUUsQ0FBQztJQUN4QyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0IsQ0FBQztLQUFNLENBQUM7SUFDUCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFDLE1BQU0sT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsT0FBTztJQUNyQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDL0QsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNmLE1BQU0sV0FBVyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtY2hhbm5lbC1hcGktaXNzdWUtY29tbWFuZHMtdG8tYS1wbGF0Zm9ybS8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge307XG5cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcblx0aW5pdEFwcCgpLmNhdGNoKCgpID0+IHt9KTtcbn0gZWxzZSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgaW5pdEFwcCgpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdEFwcCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZXh0LWNvbnRhaW5lclwiKTtcblx0aWYgKGNvbnRhaW5lcikge1xuXHRcdGNvbnN0IHZpZXdPcHRpb25zID0gYXdhaXQgZmluLm1lLmdldE9wdGlvbnMoKTtcblx0XHRjb250YWluZXIudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeSh2aWV3T3B0aW9ucy5jdXN0b21EYXRhKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==