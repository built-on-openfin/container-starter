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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEQsU0FBUyxJQUFJO0lBQ1osTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBb0IsaUJBQWlCLENBQUMsQ0FBQztJQUNyRixJQUFJLGVBQWUsRUFBRTtRQUNwQixlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDN0Q7QUFDRixDQUFDO0FBRUQsS0FBSyxVQUFVLGlCQUFpQixDQUFDLEtBQWlCO0lBQ2pELGdCQUFnQixFQUFFLENBQUM7SUFDbkIsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBdUMsS0FBSyxDQUFDLE1BQXNCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNuSCxNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDM0MsY0FBYyxFQUFFO1lBQ2YsVUFBVSxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7U0FDbkQ7UUFDRCxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUMxQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUM7UUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzNCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEdBQUc7UUFDVixzQkFBc0IsRUFBRSxNQUFNO1FBQzlCLGFBQWEsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQzlCLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FDRCxDQUFDLENBQUM7SUFDSCxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUEyQjtJQUNyRCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELElBQUksR0FBRyxFQUFFO1FBQ1IsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkQ7QUFDRixDQUFDO0FBRUQsU0FBUyxnQkFBZ0I7SUFDeEIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwRCxJQUFJLEdBQUcsRUFBRTtRQUNSLEdBQUcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0tBQ3JCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbXVsdGlwbGUtcmVzdWx0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW11bHRpcGxlLXJlc3VsdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW11bHRpcGxlLXJlc3VsdHMvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgfTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKTogdm9pZCB7XG5cdGNvbnN0IHNob3dQb3B1cEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1zaG93LXBvcHVwXCIpO1xuXHRpZiAoc2hvd1BvcHVwQnV0dG9uKSB7XG5cdFx0c2hvd1BvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQb3B1cFdpbmRvdyk7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9wdXBXaW5kb3coZXZlbnQ6IE1vdXNlRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmVzZXRQb3B1cFJlc3VsdCgpO1xuXHRjb25zdCB7IHJpZ2h0LCBoZWlnaHQgfTogeyByaWdodDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IGhIZWlnaHQgPSBoZWlnaHQgLyAyO1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBmaW4ubWUuc2hvd1BvcHVwV2luZG93KHtcblx0XHRpbml0aWFsT3B0aW9uczoge1xuXHRcdFx0Y3VzdG9tRGF0YTogYXdhaXQgZmluLm1lLmludGVyb3AuZ2V0Q29udGV4dEdyb3VwcygpXG5cdFx0fSxcblx0XHR1cmw6IGxvY2F0aW9uLmhyZWYucmVwbGFjZShcImFwcFwiLCBcInBvcHVwXCIpLFxuXHRcdHg6IHJpZ2h0ICsgNSxcblx0XHR5OiBNYXRoLnJvdW5kKGhIZWlnaHQgKyAxNSksXG5cdFx0aGVpZ2h0OiAzMCxcblx0XHR3aWR0aDogMjUwLFxuXHRcdHJlc3VsdERpc3BhdGNoQmVoYXZpb3I6IFwibm9uZVwiLFxuXHRcdG9uUG9wdXBSZXN1bHQ6IChwb3B1cFJlc3VsdCkgPT4ge1xuXHRcdFx0cmVuZGVyUG9wdXBSZXN1bHQocG9wdXBSZXN1bHQpO1xuXHRcdH1cblx0fSk7XG5cdHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBvcHVwUmVzdWx0KHJlc3VsdDogT3BlbkZpbi5Qb3B1cFJlc3VsdCk6IHZvaWQge1xuXHRjb25zdCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXJlc3VsdFwiKTtcblx0aWYgKHJlcykge1xuXHRcdHJlcy50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgdW5kZWZpbmVkLCAyKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZXNldFBvcHVwUmVzdWx0KCk6IHZvaWQge1xuXHRjb25zdCByZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXJlc3VsdFwiKTtcblx0aWYgKHJlcykge1xuXHRcdHJlcy50ZXh0Q29udGVudCA9IFwiXCI7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==