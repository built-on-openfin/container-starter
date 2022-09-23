/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/*!******************************!*\
  !*** ./client/src/window.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTAINER_ID": () => (/* binding */ CONTAINER_ID)
/* harmony export */ });
const CONTAINER_ID = "layout-container";
const openfinWindow = fin.Window.getCurrentSync();
const openfinApplication = fin.Application.getCurrentSync();
let lastFocusedView;
openfinApplication
    .on("view-focused", (viewEvent) => {
    lastFocusedView = viewEvent.viewIdentity;
})
    .catch((error) => console.error(error));
const changeContextGroup = async (event) => {
    const selectedColorElement = event.target;
    const color = selectedColorElement.title;
    await fin.me.interop.joinContextGroup(color, lastFocusedView);
    const contextGroups = await fin.me.interop.getContextGroups();
    document
        .querySelector(`#tab-${lastFocusedView.name}`)
        .classList.remove(...contextGroups.map(({ displayMetadata }) => `${displayMetadata.name}-channel`));
    document.querySelector(`#tab-${lastFocusedView.name}`).classList.add(`${color}-channel`);
};
const addContextGroupButtons = async () => {
    const contextGroups = await fin.me.interop.getContextGroups();
    const windowFrameStyleSheet = document.styleSheets[0];
    const buttonsWrapper = document.querySelector("#buttons-wrapper");
    for (const systemChannel of contextGroups) {
        windowFrameStyleSheet.insertRule(`.${systemChannel.displayMetadata.name}-channel { border-left: 2px solid ${systemChannel.displayMetadata.color} !important;}`);
        windowFrameStyleSheet.insertRule(`#${systemChannel.displayMetadata.name}-button:after { background-color: ${systemChannel.displayMetadata.color}}`);
        const newButton = document.createElement("div");
        newButton.classList.add("button");
        newButton.classList.add("channel-button");
        newButton.id = `${systemChannel.displayMetadata.name}-button`;
        newButton.title = systemChannel.displayMetadata.name;
        newButton.addEventListener("click", changeContextGroup);
        buttonsWrapper.prepend(newButton);
    }
};
const maxOrRestore = async () => {
    if ((await openfinWindow.getState()) === "normal") {
        return openfinWindow.maximize();
    }
    return openfinWindow.restore();
};
const closeWindow = async () => openfinWindow.close();
const minimizeWindow = async () => openfinWindow.minimize();
const setupTitleBar = async () => {
    const title = document.querySelector("#title");
    const minBtn = document.querySelector("#minimize-button");
    const maxBtn = document.querySelector("#expand-button");
    const closeBtn = document.querySelector("#close-button");
    title.innerHTML = fin.me.identity.uuid;
    minBtn.addEventListener("click", minimizeWindow);
    maxBtn.addEventListener("click", maxOrRestore);
    closeBtn.addEventListener("click", closeWindow);
    await addContextGroupButtons();
};
window.addEventListener("DOMContentLoaded", async () => {
    await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    await setupTitleBar();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFFdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQy9DLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFaEQsTUFBTSxzQkFBc0IsRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN0RCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlELE1BQU0sYUFBYSxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC8uL2NsaWVudC9zcmMvd2luZG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgeyBQbGF0Zm9ybUNvbnRleHRHcm91cHMsIFBsYXRmb3JtQ29udGV4dEdyb3VwIH0gZnJvbSBcIi4vc2hhcGVzXCI7XG5cbmV4cG9ydCBjb25zdCBDT05UQUlORVJfSUQgPSBcImxheW91dC1jb250YWluZXJcIjtcbmNvbnN0IG9wZW5maW5XaW5kb3c6IE9wZW5GaW4uV2luZG93ID0gZmluLldpbmRvdy5nZXRDdXJyZW50U3luYygpO1xuY29uc3Qgb3BlbmZpbkFwcGxpY2F0aW9uOiBPcGVuRmluLkFwcGxpY2F0aW9uID0gZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnRTeW5jKCk7XG5cbmxldCBsYXN0Rm9jdXNlZFZpZXc6IE9wZW5GaW4uSWRlbnRpdHk7XG5cbm9wZW5maW5BcHBsaWNhdGlvblxuXHQub24oXCJ2aWV3LWZvY3VzZWRcIiwgKHZpZXdFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGxhc3RGb2N1c2VkVmlldyA9IHZpZXdFdmVudC52aWV3SWRlbnRpdHk7XG5cdH0pXG5cdC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcblxuY29uc3QgY2hhbmdlQ29udGV4dEdyb3VwID0gYXN5bmMgKGV2ZW50OiBFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBzZWxlY3RlZENvbG9yRWxlbWVudDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdGNvbnN0IGNvbG9yOiBzdHJpbmcgPSBzZWxlY3RlZENvbG9yRWxlbWVudC50aXRsZTtcblx0YXdhaXQgZmluLm1lLmludGVyb3Auam9pbkNvbnRleHRHcm91cChjb2xvciwgbGFzdEZvY3VzZWRWaWV3KTtcblx0Y29uc3QgY29udGV4dEdyb3VwczogUGxhdGZvcm1Db250ZXh0R3JvdXBzID0gYXdhaXQgZmluLm1lLmludGVyb3AuZ2V0Q29udGV4dEdyb3VwcygpO1xuXHRkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKGAjdGFiLSR7bGFzdEZvY3VzZWRWaWV3Lm5hbWV9YClcblx0XHQuY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdC4uLmNvbnRleHRHcm91cHMubWFwKCh7IGRpc3BsYXlNZXRhZGF0YSB9OiBQbGF0Zm9ybUNvbnRleHRHcm91cCkgPT4gYCR7ZGlzcGxheU1ldGFkYXRhLm5hbWV9LWNoYW5uZWxgKVxuXHRcdCk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YWItJHtsYXN0Rm9jdXNlZFZpZXcubmFtZX1gKS5jbGFzc0xpc3QuYWRkKGAke2NvbG9yfS1jaGFubmVsYCk7XG59O1xuXG5jb25zdCBhZGRDb250ZXh0R3JvdXBCdXR0b25zID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBjb250ZXh0R3JvdXBzOiBQbGF0Zm9ybUNvbnRleHRHcm91cHMgPSBhd2FpdCBmaW4ubWUuaW50ZXJvcC5nZXRDb250ZXh0R3JvdXBzKCk7XG5cdGNvbnN0IHdpbmRvd0ZyYW1lU3R5bGVTaGVldDogQ1NTU3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdO1xuXHRjb25zdCBidXR0b25zV3JhcHBlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbnMtd3JhcHBlclwiKTtcblx0Zm9yIChjb25zdCBzeXN0ZW1DaGFubmVsIG9mIGNvbnRleHRHcm91cHMpIHtcblx0XHR3aW5kb3dGcmFtZVN0eWxlU2hlZXQuaW5zZXJ0UnVsZShcblx0XHRcdGAuJHtzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YS5uYW1lfS1jaGFubmVsIHsgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke3N5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhLmNvbG9yfSAhaW1wb3J0YW50O31gXG5cdFx0KTtcblx0XHR3aW5kb3dGcmFtZVN0eWxlU2hlZXQuaW5zZXJ0UnVsZShcblx0XHRcdGAjJHtzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YS5uYW1lfS1idXR0b246YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAke3N5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhLmNvbG9yfX1gXG5cdFx0KTtcblx0XHRjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuXHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hhbm5lbC1idXR0b25cIik7XG5cdFx0bmV3QnV0dG9uLmlkID0gYCR7c3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGEubmFtZX0tYnV0dG9uYDtcblx0XHRuZXdCdXR0b24udGl0bGUgPSBzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YS5uYW1lO1xuXHRcdG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29udGV4dEdyb3VwKTtcblx0XHRidXR0b25zV3JhcHBlci5wcmVwZW5kKG5ld0J1dHRvbik7XG5cdH1cbn07XG5cbmNvbnN0IG1heE9yUmVzdG9yZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKChhd2FpdCBvcGVuZmluV2luZG93LmdldFN0YXRlKCkpID09PSBcIm5vcm1hbFwiKSB7XG5cdFx0cmV0dXJuIG9wZW5maW5XaW5kb3cubWF4aW1pemUoKTtcblx0fVxuXG5cdHJldHVybiBvcGVuZmluV2luZG93LnJlc3RvcmUoKTtcbn07XG5cbmNvbnN0IGNsb3NlV2luZG93ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4gb3BlbmZpbldpbmRvdy5jbG9zZSgpO1xuXG5jb25zdCBtaW5pbWl6ZVdpbmRvdyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IG9wZW5maW5XaW5kb3cubWluaW1pemUoKTtcblxuY29uc3Qgc2V0dXBUaXRsZUJhciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdGl0bGU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcblx0Y29uc3QgbWluQnRuOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluaW1pemUtYnV0dG9uXCIpO1xuXHRjb25zdCBtYXhCdG46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtYnV0dG9uXCIpO1xuXHRjb25zdCBjbG9zZUJ0bjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWJ1dHRvblwiKTtcblxuXHR0aXRsZS5pbm5lckhUTUwgPSBmaW4ubWUuaWRlbnRpdHkudXVpZDtcblxuXHRtaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbmltaXplV2luZG93KTtcblx0bWF4QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXhPclJlc3RvcmUpO1xuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VXaW5kb3cpO1xuXG5cdGF3YWl0IGFkZENvbnRleHRHcm91cEJ1dHRvbnMoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5MYXlvdXQuaW5pdCh7IGNvbnRhaW5lcklkOiBDT05UQUlORVJfSUQgfSk7XG5cdGF3YWl0IHNldHVwVGl0bGVCYXIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9