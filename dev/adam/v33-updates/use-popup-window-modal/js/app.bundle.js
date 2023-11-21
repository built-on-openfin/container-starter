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
 */
async function createPopupWindow() {
    const PARENT_FRAME_OFFSET = 64;
    resetPopupResult();
    const parentWindow = await fin.me.getCurrentWindow();
    const { identity: modalParentIdentity } = parentWindow;
    const parentBounds = await parentWindow.getBounds();
    const qHeight = parentBounds.height / 4;
    const result = await fin.me.showPopupWindow({
        initialOptions: {
            modalParentIdentity
        },
        url: location.href.replace("app", "popup"),
        x: Math.floor(parentBounds.width / 8),
        y: Math.floor(parentBounds.height / 8) - PARENT_FRAME_OFFSET,
        height: Math.floor(parentBounds.height - qHeight),
        width: Math.floor(parentBounds.width - qHeight),
        blurBehavior: "modal"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFdkQ7O0dBRUc7QUFDSCxTQUFTLE9BQU87SUFDZixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEUsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNyQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDOUQsQ0FBQztBQUNGLENBQUM7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSxpQkFBaUI7SUFDL0IsTUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7SUFDL0IsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixNQUFNLFlBQVksR0FBRyxNQUFPLEdBQUcsQ0FBQyxFQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdkUsTUFBTSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxHQUFHLFlBQVksQ0FBQztJQUN2RCxNQUFNLFlBQVksR0FBRyxNQUFNLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwRCxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQzNDLGNBQWMsRUFBRTtZQUNmLG1CQUFtQjtTQUNuQjtRQUNELEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CO1FBQzVELE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQy9DLFlBQVksRUFBRSxPQUFPO0tBQ3JCLENBQUMsQ0FBQztJQUNILGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGlCQUFpQixDQUFDLE1BQTJCO0lBQ3JELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNULEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7QUFDRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGdCQUFnQjtJQUN4QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELElBQUksR0FBRyxFQUFFLENBQUM7UUFDVCxHQUFHLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUMvQixDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbW9kYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tb2RhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbW9kYWwvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0RG9tKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGluaXREb20oKTogdm9pZCB7XG5cdGNvbnN0IHNob3dQb3B1cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXNob3ctcG9wdXBcIik7XG5cdGlmIChzaG93UG9wdXBCdXR0b24pIHtcblx0XHRzaG93UG9wdXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVBvcHVwV2luZG93KTtcblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgcG9wdXAgd2luZG93IGZyb20gdGhlIGNsaWNrLlxuICovXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVQb3B1cFdpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgUEFSRU5UX0ZSQU1FX09GRlNFVCA9IDY0O1xuXHRyZXNldFBvcHVwUmVzdWx0KCk7XG5cdGNvbnN0IHBhcmVudFdpbmRvdyA9IGF3YWl0IChmaW4ubWUgYXMgT3BlbkZpbi5WaWV3KS5nZXRDdXJyZW50V2luZG93KCk7XG5cdGNvbnN0IHsgaWRlbnRpdHk6IG1vZGFsUGFyZW50SWRlbnRpdHkgfSA9IHBhcmVudFdpbmRvdztcblx0Y29uc3QgcGFyZW50Qm91bmRzID0gYXdhaXQgcGFyZW50V2luZG93LmdldEJvdW5kcygpO1xuXHRjb25zdCBxSGVpZ2h0ID0gcGFyZW50Qm91bmRzLmhlaWdodCAvIDQ7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbi5tZS5zaG93UG9wdXBXaW5kb3coe1xuXHRcdGluaXRpYWxPcHRpb25zOiB7XG5cdFx0XHRtb2RhbFBhcmVudElkZW50aXR5XG5cdFx0fSxcblx0XHR1cmw6IGxvY2F0aW9uLmhyZWYucmVwbGFjZShcImFwcFwiLCBcInBvcHVwXCIpLFxuXHRcdHg6IE1hdGguZmxvb3IocGFyZW50Qm91bmRzLndpZHRoIC8gOCksXG5cdFx0eTogTWF0aC5mbG9vcihwYXJlbnRCb3VuZHMuaGVpZ2h0IC8gOCkgLSBQQVJFTlRfRlJBTUVfT0ZGU0VULFxuXHRcdGhlaWdodDogTWF0aC5mbG9vcihwYXJlbnRCb3VuZHMuaGVpZ2h0IC0gcUhlaWdodCksXG5cdFx0d2lkdGg6IE1hdGguZmxvb3IocGFyZW50Qm91bmRzLndpZHRoIC0gcUhlaWdodCksXG5cdFx0Ymx1ckJlaGF2aW9yOiBcIm1vZGFsXCJcblx0fSk7XG5cdHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdCk7XG59XG5cbi8qKlxuICogRGlzcGxheSB0aGUgcG9wdXAgcmVzdWx0LlxuICogQHBhcmFtIHJlc3VsdCBUaGUgcmVzdWx0IHRvIGRpc3BsYXkuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdDogT3BlbkZpbi5Qb3B1cFJlc3VsdCk6IHZvaWQge1xuXHRjb25zdCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXJlc3VsdFwiKTtcblx0aWYgKHJlcykge1xuXHRcdHJlcy50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgdW5kZWZpbmVkLCAyKTtcblx0fVxufVxuXG4vKipcbiAqIENsZWFyIHRoZSBwb3B1cCByZXN1bHQuXG4gKi9cbmZ1bmN0aW9uIHJlc2V0UG9wdXBSZXN1bHQoKTogdm9pZCB7XG5cdGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpO1xuXHRpZiAocmVzKSB7XG5cdFx0cmVzLnRleHRDb250ZW50ID0gXCJObyByZXN1bHRcIjtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9