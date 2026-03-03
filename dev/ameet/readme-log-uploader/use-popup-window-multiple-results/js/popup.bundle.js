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
    await createGroupButtons();
}
/**
 * Create the group buttons.
 */
async function createGroupButtons() {
    const { customData: contextGroups } = await me.getOptions();
    for (const group of contextGroups) {
        const groupBtn = document.createElement("button");
        groupBtn.style.background = group.displayMetadata.color;
        groupBtn.style.border = "none";
        groupBtn.style.borderRadius = "50%";
        groupBtn.style.width = "20px";
        groupBtn.style.height = "20px";
        groupBtn.style.marginRight = "1rem";
        console.log(group);
        groupBtn.addEventListener("click", async () => {
            await me.dispatchPopupResult(group);
        });
        document.body.append(groupBtn);
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7O0FDSkEsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQW9CLENBQUM7QUFFcEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRXZEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLE9BQU87SUFDckIsTUFBTSxrQkFBa0IsRUFBRSxDQUFDO0FBQzVCLENBQUM7QUFFRDs7R0FFRztBQUNILEtBQUssVUFBVSxrQkFBa0I7SUFDaEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1RCxLQUFLLE1BQU0sS0FBSyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ25DLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDeEQsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDOUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDN0MsTUFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbXVsdGlwbGUtcmVzdWx0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW11bHRpcGxlLXJlc3VsdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW11bHRpcGxlLXJlc3VsdHMvLi9jbGllbnQvc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmNvbnN0IG1lID0gZmluLm1lIGFzIE9wZW5GaW4uV2luZG93O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0RG9tKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGF3YWl0IGNyZWF0ZUdyb3VwQnV0dG9ucygpO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgZ3JvdXAgYnV0dG9ucy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3JvdXBCdXR0b25zKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7IGN1c3RvbURhdGE6IGNvbnRleHRHcm91cHMgfSA9IGF3YWl0IG1lLmdldE9wdGlvbnMoKTtcblx0Zm9yIChjb25zdCBncm91cCBvZiBjb250ZXh0R3JvdXBzKSB7XG5cdFx0Y29uc3QgZ3JvdXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmJhY2tncm91bmQgPSBncm91cC5kaXNwbGF5TWV0YWRhdGEuY29sb3I7XG5cdFx0Z3JvdXBCdG4uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG5cdFx0Z3JvdXBCdG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcblx0XHRncm91cEJ0bi5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xuXHRcdGdyb3VwQnRuLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIxcmVtXCI7XG5cdFx0Y29uc29sZS5sb2coZ3JvdXApO1xuXHRcdGdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5kaXNwYXRjaFBvcHVwUmVzdWx0KGdyb3VwKTtcblx0XHR9KTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChncm91cEJ0bik7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=