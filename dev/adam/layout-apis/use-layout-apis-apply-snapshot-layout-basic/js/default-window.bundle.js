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
/*!**************************************!*\
  !*** ./client/src/default-window.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
window.addEventListener("DOMContentLoaded", async () => {
    await initDom();
});
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    const me = fin.me;
    const CONTAINER_ID = "layout-container";
    await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    const minimizeBtn = document.querySelector("#minimize-button");
    if (minimizeBtn) {
        minimizeBtn.addEventListener("click", async () => {
            await me.minimize().catch(console.error);
        });
    }
    const maximizeBtn = document.querySelector("#expand-button");
    if (maximizeBtn) {
        maximizeBtn.addEventListener("click", async () => {
            await maxOrRestore(me).catch(console.error);
        });
    }
    const closeBtn = document.querySelector("#close-button");
    if (closeBtn) {
        closeBtn.addEventListener("click", async (e) => {
            await me.close();
        });
    }
}
/**
 * Maximize of restore the window.
 * @param win The window to perform the action on.
 * @returns Nothing.
 */
async function maxOrRestore(win) {
    if ((await win.getState()) === "normal") {
        return win.maximize();
    }
    return win.restore();
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC13aW5kb3cuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ0pBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN0RCxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxLQUFLLFVBQVUsT0FBTztJQUNyQixNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBb0IsQ0FBQztJQUNwQyxNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztJQUN4QyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBRTlELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMvRCxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDaEQsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0QsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNqQixXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ2hELE1BQU0sWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6RCxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxLQUFLLFVBQVUsWUFBWSxDQUFDLEdBQW1CO0lBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbHktc25hcHNob3QtbGF5b3V0LWJhc2ljL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FwcGx5LXNuYXBzaG90LWxheW91dC1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FwcGx5LXNuYXBzaG90LWxheW91dC1iYXNpYy8uL2NsaWVudC9zcmMvZGVmYXVsdC13aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0YXdhaXQgaW5pdERvbSgpO1xufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBtZSA9IGZpbi5tZSBhcyBPcGVuRmluLldpbmRvdztcblx0Y29uc3QgQ09OVEFJTkVSX0lEID0gXCJsYXlvdXQtY29udGFpbmVyXCI7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5MYXlvdXQuaW5pdCh7IGNvbnRhaW5lcklkOiBDT05UQUlORVJfSUQgfSk7XG5cblx0Y29uc3QgbWluaW1pemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pbmltaXplLWJ1dHRvblwiKTtcblx0aWYgKG1pbmltaXplQnRuKSB7XG5cdFx0bWluaW1pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IG1lLm1pbmltaXplKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBtYXhpbWl6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhwYW5kLWJ1dHRvblwiKTtcblx0aWYgKG1heGltaXplQnRuKSB7XG5cdFx0bWF4aW1pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IG1heE9yUmVzdG9yZShtZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnV0dG9uXCIpO1xuXHRpZiAoY2xvc2VCdG4pIHtcblx0XHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRcdGF3YWl0IG1lLmNsb3NlKCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBNYXhpbWl6ZSBvZiByZXN0b3JlIHRoZSB3aW5kb3cuXG4gKiBAcGFyYW0gd2luIFRoZSB3aW5kb3cgdG8gcGVyZm9ybSB0aGUgYWN0aW9uIG9uLlxuICogQHJldHVybnMgTm90aGluZy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbWF4T3JSZXN0b3JlKHdpbjogT3BlbkZpbi5XaW5kb3cpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKChhd2FpdCB3aW4uZ2V0U3RhdGUoKSkgPT09IFwibm9ybWFsXCIpIHtcblx0XHRyZXR1cm4gd2luLm1heGltaXplKCk7XG5cdH1cblxuXHRyZXR1cm4gd2luLnJlc3RvcmUoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==