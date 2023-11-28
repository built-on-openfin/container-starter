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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ0pBLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFvQixDQUFDO0FBRXBDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV2RDs7R0FFRztBQUNILEtBQUssVUFBVSxPQUFPO0lBQ3JCLE1BQU0sa0JBQWtCLEVBQUUsQ0FBQztBQUM1QixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsa0JBQWtCO0lBQ2hDLE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUQsS0FBSyxNQUFNLEtBQUssSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzdDLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW11bHRpcGxlLXJlc3VsdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tdWx0aXBsZS1yZXN1bHRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tdWx0aXBsZS1yZXN1bHRzLy4vY2xpZW50L3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5jb25zdCBtZSA9IGZpbi5tZSBhcyBPcGVuRmluLldpbmRvdztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdERvbSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRhd2FpdCBjcmVhdGVHcm91cEJ1dHRvbnMoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGdyb3VwIGJ1dHRvbnMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdyb3VwQnV0dG9ucygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgeyBjdXN0b21EYXRhOiBjb250ZXh0R3JvdXBzIH0gPSBhd2FpdCBtZS5nZXRPcHRpb25zKCk7XG5cdGZvciAoY29uc3QgZ3JvdXAgb2YgY29udGV4dEdyb3Vwcykge1xuXHRcdGNvbnN0IGdyb3VwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRncm91cEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gZ3JvdXAuZGlzcGxheU1ldGFkYXRhLmNvbG9yO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG5cdFx0Z3JvdXBCdG4uc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcblx0XHRncm91cEJ0bi5zdHlsZS5oZWlnaHQgPSBcIjIwcHhcIjtcblx0XHRncm91cEJ0bi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMXJlbVwiO1xuXHRcdGNvbnNvbGUubG9nKGdyb3VwKTtcblx0XHRncm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbWUuZGlzcGF0Y2hQb3B1cFJlc3VsdChncm91cCk7XG5cdFx0fSk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoZ3JvdXBCdG4pO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=