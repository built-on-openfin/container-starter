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
    if (showPopupButton) {
        showPopupButton.addEventListener("click", createPopupWindow);
    }
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
    const res = document.querySelector("#popup-result");
    if (res) {
        res.textContent = JSON.stringify(result, undefined, 2);
    }
}
function resetPopupResult() {
    const res = document.querySelector("#popup-result");
    if (res) {
        res.textContent = "";
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEQsU0FBUyxJQUFJO0lBQ1osTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBb0IsaUJBQWlCLENBQUMsQ0FBQztJQUNyRixJQUFJLGVBQWUsRUFBRTtRQUNwQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDN0Q7QUFDRixDQUFDO0FBRUQsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEtBQWlCO0lBQ2pELGdCQUFnQixFQUFFLENBQUM7SUFDbkIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FDdEIsS0FBSyxDQUFDLE1BQ04sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzFCLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxjQUFjLEVBQUU7WUFDZixVQUFVLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtTQUNuRDtRQUNELEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQztRQUNaLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDM0IsTUFBTSxFQUFFLEVBQUU7UUFDVixLQUFLLEVBQUUsR0FBRztRQUNWLHNCQUFzQixFQUFFLE1BQU07UUFDOUIsYUFBYSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDOUIsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUNELENBQUMsQ0FBQztJQUNILGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLE1BQTJCO0lBQ3JELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsSUFBSSxHQUFHLEVBQUU7UUFDUixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN2RDtBQUNGLENBQUM7QUFFRCxTQUFTLGdCQUFnQjtJQUN4QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELElBQUksR0FBRyxFQUFFO1FBQ1IsR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7S0FDckI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tdWx0aXBsZS1yZXN1bHRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbXVsdGlwbGUtcmVzdWx0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbXVsdGlwbGUtcmVzdWx0cy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge307XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0KCk6IHZvaWQge1xuXHRjb25zdCBzaG93UG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tc2hvdy1wb3B1cFwiKTtcblx0aWYgKHNob3dQb3B1cEJ1dHRvbikge1xuXHRcdHNob3dQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUG9wdXBXaW5kb3cpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBvcHVwV2luZG93KGV2ZW50OiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cdHJlc2V0UG9wdXBSZXN1bHQoKTtcblx0Y29uc3QgeyByaWdodCwgaGVpZ2h0IH06IHsgcmlnaHQ6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9IChcblx0XHRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblx0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgaEhlaWdodCA9IGhlaWdodCAvIDI7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbi5tZS5zaG93UG9wdXBXaW5kb3coe1xuXHRcdGluaXRpYWxPcHRpb25zOiB7XG5cdFx0XHRjdXN0b21EYXRhOiBhd2FpdCBmaW4ubWUuaW50ZXJvcC5nZXRDb250ZXh0R3JvdXBzKClcblx0XHR9LFxuXHRcdHVybDogbG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwXCIsIFwicG9wdXBcIiksXG5cdFx0eDogcmlnaHQgKyA1LFxuXHRcdHk6IE1hdGgucm91bmQoaEhlaWdodCArIDE1KSxcblx0XHRoZWlnaHQ6IDMwLFxuXHRcdHdpZHRoOiAyNTAsXG5cdFx0cmVzdWx0RGlzcGF0Y2hCZWhhdmlvcjogXCJub25lXCIsXG5cdFx0b25Qb3B1cFJlc3VsdDogKHBvcHVwUmVzdWx0KSA9PiB7XG5cdFx0XHRyZW5kZXJQb3B1cFJlc3VsdChwb3B1cFJlc3VsdCk7XG5cdFx0fVxuXHR9KTtcblx0cmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUG9wdXBSZXN1bHQocmVzdWx0OiBPcGVuRmluLlBvcHVwUmVzdWx0KTogdm9pZCB7XG5cdGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpO1xuXHRpZiAocmVzKSB7XG5cdFx0cmVzLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LCB1bmRlZmluZWQsIDIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wdXBSZXN1bHQoKTogdm9pZCB7XG5cdGNvbnN0IHJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtcmVzdWx0XCIpO1xuXHRpZiAocmVzKSB7XG5cdFx0cmVzLnRleHRDb250ZW50ID0gXCJcIjtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9