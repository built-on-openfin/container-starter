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
/*!***********************************************!*\
  !*** ./client/src/default-platform-window.ts ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", async () => {
    await fin.Platform.getCurrentSync().once("platform-api-ready", async () => {
        await initDom();
    });
});
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    // const platform = fin.Platform.getCurrentSync();
    const me = fin.me;
    // Get the default layout
    const layoutSnapshot = await getDefaultLayout();
    if (layoutSnapshot === undefined) {
        console.error("Unable to run the sample as we have been unable to load the default snapshot.");
        return;
    }
    // Get the dom element that should host the layout
    const layoutContainer = document.querySelector("#layout_container");
    if (layoutContainer === null) {
        console.error("Please ensure the document has an element with the following id #layout_container so that the web-layout can be applied.");
        return;
    }
    await fin.Platform.Layout.init({
        container: layoutContainer
    });
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
}
/**
 * Gets the default layout for this app.
 * @returns The default layout for this app.
 */
async function getDefaultLayout() {
    const layoutResponse = await fetch("https://built-on-openfin.github.io/container-starter/dev/adam/layout-apis/use-layout-apis-basic/layouts/default.layout.fin.json");
    const layoutJson = (await layoutResponse.json());
    return layoutJson;
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxjQUFjLEdBQUcsTUFBTSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQztJQUM1RixNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQU0sY0FBYyxDQUFDLElBQUksRUFBRSxDQUEyQixDQUFDO0lBQzNFLE9BQU8sVUFBVSxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtbGF5b3V0LWFwaXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWxheW91dC1hcGlzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLWxheW91dC1hcGlzLy4vY2xpZW50L3NyYy9kZWZhdWx0LXBsYXRmb3JtLXdpbmRvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpLm9uY2UoXCJwbGF0Zm9ybS1hcGktcmVhZHlcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSk7XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdC8vIGNvbnN0IHBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdGNvbnN0IG1lID0gZmluLm1lIGFzIE9wZW5GaW4uV2luZG93O1xuXHQvLyBHZXQgdGhlIGRlZmF1bHQgbGF5b3V0XG5cdGNvbnN0IGxheW91dFNuYXBzaG90ID0gYXdhaXQgZ2V0RGVmYXVsdExheW91dCgpO1xuXG5cdGlmIChsYXlvdXRTbmFwc2hvdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBydW4gdGhlIHNhbXBsZSBhcyB3ZSBoYXZlIGJlZW4gdW5hYmxlIHRvIGxvYWQgdGhlIGRlZmF1bHQgc25hcHNob3QuXCIpO1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBHZXQgdGhlIGRvbSBlbGVtZW50IHRoYXQgc2hvdWxkIGhvc3QgdGhlIGxheW91dFxuXHRjb25zdCBsYXlvdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNsYXlvdXRfY29udGFpbmVyXCIpO1xuXHRpZiAobGF5b3V0Q29udGFpbmVyID09PSBudWxsKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcblx0XHRcdFwiUGxlYXNlIGVuc3VyZSB0aGUgZG9jdW1lbnQgaGFzIGFuIGVsZW1lbnQgd2l0aCB0aGUgZm9sbG93aW5nIGlkICNsYXlvdXRfY29udGFpbmVyIHNvIHRoYXQgdGhlIHdlYi1sYXlvdXQgY2FuIGJlIGFwcGxpZWQuXCJcblx0XHQpO1xuXHRcdHJldHVybjtcblx0fVxuXHRhd2FpdCBmaW4uUGxhdGZvcm0uTGF5b3V0LmluaXQoe1xuXHRcdGNvbnRhaW5lcjogbGF5b3V0Q29udGFpbmVyXG5cdH0pO1xuXG5cdGNvbnN0IG1pbmltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5pbWl6ZS1idXR0b25cIik7XG5cdGlmIChtaW5pbWl6ZUJ0bikge1xuXHRcdG1pbmltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5taW5pbWl6ZSgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgbWF4aW1pemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4cGFuZC1idXR0b25cIik7XG5cdGlmIChtYXhpbWl6ZUJ0bikge1xuXHRcdG1heGltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtYXhPclJlc3RvcmUobWUpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWJ1dHRvblwiKTtcblx0aWYgKGNsb3NlQnRuKSB7XG5cdFx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5jbG9zZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1heGltaXplIG9mIHJlc3RvcmUgdGhlIHdpbmRvdy5cblx0ICogQHBhcmFtIHdpbiBUaGUgd2luZG93IHRvIHBlcmZvcm0gdGhlIGFjdGlvbiBvbi5cblx0ICogQHJldHVybnMgTm90aGluZy5cblx0ICovXG5cdGFzeW5jIGZ1bmN0aW9uIG1heE9yUmVzdG9yZSh3aW46IE9wZW5GaW4uV2luZG93KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0aWYgKChhd2FpdCB3aW4uZ2V0U3RhdGUoKSkgPT09IFwibm9ybWFsXCIpIHtcblx0XHRcdHJldHVybiB3aW4ubWF4aW1pemUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2luLnJlc3RvcmUoKTtcblx0fVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGRlZmF1bHQgbGF5b3V0IGZvciB0aGlzIGFwcC5cbiAqIEByZXR1cm5zIFRoZSBkZWZhdWx0IGxheW91dCBmb3IgdGhpcyBhcHAuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRMYXlvdXQoKTogUHJvbWlzZTxPcGVuRmluLkxheW91dFNuYXBzaG90PiB7XG5cdGNvbnN0IGxheW91dFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvbGF5b3V0cy9kZWZhdWx0LmxheW91dC5maW4uanNvblwiKTtcblx0Y29uc3QgbGF5b3V0SnNvbiA9IChhd2FpdCBsYXlvdXRSZXNwb25zZS5qc29uKCkpIGFzIE9wZW5GaW4uTGF5b3V0U25hcHNob3Q7XG5cdHJldHVybiBsYXlvdXRKc29uO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9