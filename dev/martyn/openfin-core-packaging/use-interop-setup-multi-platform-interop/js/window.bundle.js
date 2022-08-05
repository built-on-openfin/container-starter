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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFFdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQy9DLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFaEQsTUFBTSxzQkFBc0IsRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN0RCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlELE1BQU0sYUFBYSxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC8uL2NsaWVudC9zcmMvd2luZG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUGxhdGZvcm1Db250ZXh0R3JvdXBzLCBQbGF0Zm9ybUNvbnRleHRHcm91cCB9IGZyb20gXCIuL3NoYXBlc1wiO1xuXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX0lEID0gXCJsYXlvdXQtY29udGFpbmVyXCI7XG5jb25zdCBvcGVuZmluV2luZG93OiBPcGVuRmluLldpbmRvdyA9IGZpbi5XaW5kb3cuZ2V0Q3VycmVudFN5bmMoKTtcbmNvbnN0IG9wZW5maW5BcHBsaWNhdGlvbjogT3BlbkZpbi5BcHBsaWNhdGlvbiA9IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50U3luYygpO1xuXG5sZXQgbGFzdEZvY3VzZWRWaWV3OiBPcGVuRmluLklkZW50aXR5O1xuXG5vcGVuZmluQXBwbGljYXRpb25cblx0Lm9uKFwidmlldy1mb2N1c2VkXCIsICh2aWV3RXZlbnQpOiB2b2lkID0+IHtcblx0XHRsYXN0Rm9jdXNlZFZpZXcgPSB2aWV3RXZlbnQudmlld0lkZW50aXR5O1xuXHR9KVxuXHQuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cbmNvbnN0IGNoYW5nZUNvbnRleHRHcm91cCA9IGFzeW5jIChldmVudDogRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qgc2VsZWN0ZWRDb2xvckVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRjb25zdCBjb2xvcjogc3RyaW5nID0gc2VsZWN0ZWRDb2xvckVsZW1lbnQudGl0bGU7XG5cdGF3YWl0IGZpbi5tZS5pbnRlcm9wLmpvaW5Db250ZXh0R3JvdXAoY29sb3IsIGxhc3RGb2N1c2VkVmlldyk7XG5cdGNvbnN0IGNvbnRleHRHcm91cHM6IFBsYXRmb3JtQ29udGV4dEdyb3VwcyA9IGF3YWl0IGZpbi5tZS5pbnRlcm9wLmdldENvbnRleHRHcm91cHMoKTtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihgI3RhYi0ke2xhc3RGb2N1c2VkVmlldy5uYW1lfWApXG5cdFx0LmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHQuLi5jb250ZXh0R3JvdXBzLm1hcCgoeyBkaXNwbGF5TWV0YWRhdGEgfTogUGxhdGZvcm1Db250ZXh0R3JvdXApID0+IGAke2Rpc3BsYXlNZXRhZGF0YS5uYW1lfS1jaGFubmVsYClcblx0XHQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFiLSR7bGFzdEZvY3VzZWRWaWV3Lm5hbWV9YCkuY2xhc3NMaXN0LmFkZChgJHtjb2xvcn0tY2hhbm5lbGApO1xufTtcblxuY29uc3QgYWRkQ29udGV4dEdyb3VwQnV0dG9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgY29udGV4dEdyb3VwczogUGxhdGZvcm1Db250ZXh0R3JvdXBzID0gYXdhaXQgZmluLm1lLmludGVyb3AuZ2V0Q29udGV4dEdyb3VwcygpO1xuXHRjb25zdCB3aW5kb3dGcmFtZVN0eWxlU2hlZXQ6IENTU1N0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcblx0Y29uc3QgYnV0dG9uc1dyYXBwZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b25zLXdyYXBwZXJcIik7XG5cdGZvciAoY29uc3Qgc3lzdGVtQ2hhbm5lbCBvZiBjb250ZXh0R3JvdXBzKSB7XG5cdFx0d2luZG93RnJhbWVTdHlsZVNoZWV0Lmluc2VydFJ1bGUoXG5cdFx0XHRgLiR7c3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGEubmFtZX0tY2hhbm5lbCB7IGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YS5jb2xvcn0gIWltcG9ydGFudDt9YFxuXHRcdCk7XG5cdFx0d2luZG93RnJhbWVTdHlsZVNoZWV0Lmluc2VydFJ1bGUoXG5cdFx0XHRgIyR7c3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGEubmFtZX0tYnV0dG9uOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJHtzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YS5jb2xvcn19YFxuXHRcdCk7XG5cdFx0Y29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcblx0XHRuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcImNoYW5uZWwtYnV0dG9uXCIpO1xuXHRcdG5ld0J1dHRvbi5pZCA9IGAke3N5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhLm5hbWV9LWJ1dHRvbmA7XG5cdFx0bmV3QnV0dG9uLnRpdGxlID0gc3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGEubmFtZTtcblx0XHRuZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbnRleHRHcm91cCk7XG5cdFx0YnV0dG9uc1dyYXBwZXIucHJlcGVuZChuZXdCdXR0b24pO1xuXHR9XG59O1xuXG5jb25zdCBtYXhPclJlc3RvcmUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmICgoYXdhaXQgb3BlbmZpbldpbmRvdy5nZXRTdGF0ZSgpKSA9PT0gXCJub3JtYWxcIikge1xuXHRcdHJldHVybiBvcGVuZmluV2luZG93Lm1heGltaXplKCk7XG5cdH1cblxuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5yZXN0b3JlKCk7XG59O1xuXG5jb25zdCBjbG9zZVdpbmRvdyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IG9wZW5maW5XaW5kb3cuY2xvc2UoKTtcblxuY29uc3QgbWluaW1pemVXaW5kb3cgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiBvcGVuZmluV2luZG93Lm1pbmltaXplKCk7XG5cbmNvbnN0IHNldHVwVGl0bGVCYXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHRpdGxlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG5cdGNvbnN0IG1pbkJ0bjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pbmltaXplLWJ1dHRvblwiKTtcblx0Y29uc3QgbWF4QnRuOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhwYW5kLWJ1dHRvblwiKTtcblx0Y29uc3QgY2xvc2VCdG46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1idXR0b25cIik7XG5cblx0dGl0bGUuaW5uZXJIVE1MID0gZmluLm1lLmlkZW50aXR5LnV1aWQ7XG5cblx0bWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5pbWl6ZVdpbmRvdyk7XG5cdG1heEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWF4T3JSZXN0b3JlKTtcblx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlV2luZG93KTtcblxuXHRhd2FpdCBhZGRDb250ZXh0R3JvdXBCdXR0b25zKCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCBmaW4uUGxhdGZvcm0uTGF5b3V0LmluaXQoeyBjb250YWluZXJJZDogQ09OVEFJTkVSX0lEIH0pO1xuXHRhd2FpdCBzZXR1cFRpdGxlQmFyKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==