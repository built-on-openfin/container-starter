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
/* harmony export */   CONTAINER_ID: () => (/* binding */ CONTAINER_ID)
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
/**
 * @function changeContextGroup
 * @param event - DOM click event that is passed in to the button click event from `addContextGroupButtons` local `newButton` variable
 * @description
 * Joins a context group by passing in the top-level variable `lastFocusedView` as the `target` parameter of the `joinContextGroup` function.
 */
async function changeContextGroup(event) {
    const selectedColorElement = event.target;
    const color = selectedColorElement.title;
    await fin.me.interop.joinContextGroup(color, lastFocusedView);
    const contextGroups = await fin.me.interop.getContextGroups();
    document
        .querySelector(`#tab-${lastFocusedView.name}`)
        .classList.remove(...contextGroups.map(({ displayMetadata }) => `${displayMetadata.name}-channel`));
    document.querySelector(`#tab-${lastFocusedView.name}`).classList.add(`${color}-channel`);
}
/**
 * @function addContextGroupButtons
 * @description
 * 1. Retrieves a Platform's interop context groups.
 * 2. Iterates all context groups and creates a corresponding button per context group (color channel).
 * 3. Adds a click listener to each button with the `changeContextGroup` function as the listener callback.
 */
async function addContextGroupButtons() {
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
}
async function maxOrRestore() {
    if ((await openfinWindow.getState()) === "normal") {
        return openfinWindow.maximize();
    }
    return openfinWindow.restore();
}
async function closeWindow() {
    return openfinWindow.close();
}
async function minimizeWindow() {
    return openfinWindow.minimize();
}
async function setupTitleBar() {
    const title = document.querySelector("#title");
    const minBtn = document.querySelector("#minimize-button");
    const maxBtn = document.querySelector("#expand-button");
    const closeBtn = document.querySelector("#close-button");
    title.innerHTML = fin.me.identity.uuid;
    minBtn.addEventListener("click", minimizeWindow);
    maxBtn.addEventListener("click", maxOrRestore);
    closeBtn.addEventListener("click", closeWindow);
    await addContextGroupButtons();
}
window.addEventListener("DOMContentLoaded", async () => {
    await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    await setupTitleBar();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7SUFDakQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMvQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWhELE1BQU0sc0JBQXNCLEVBQUUsQ0FBQztBQUNoQyxDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3RELE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUQsTUFBTSxhQUFhLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLy4vY2xpZW50L3NyYy93aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSB7IFBsYXRmb3JtQ29udGV4dEdyb3VwcywgUGxhdGZvcm1Db250ZXh0R3JvdXAgfSBmcm9tIFwiLi9zaGFwZXNcIjtcblxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9JRCA9IFwibGF5b3V0LWNvbnRhaW5lclwiO1xuY29uc3Qgb3BlbmZpbldpbmRvdzogT3BlbkZpbi5XaW5kb3cgPSBmaW4uV2luZG93LmdldEN1cnJlbnRTeW5jKCk7XG5jb25zdCBvcGVuZmluQXBwbGljYXRpb246IE9wZW5GaW4uQXBwbGljYXRpb24gPSBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKTtcblxubGV0IGxhc3RGb2N1c2VkVmlldzogT3BlbkZpbi5JZGVudGl0eTtcblxub3BlbmZpbkFwcGxpY2F0aW9uXG5cdC5vbihcInZpZXctZm9jdXNlZFwiLCAodmlld0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0bGFzdEZvY3VzZWRWaWV3ID0gdmlld0V2ZW50LnZpZXdJZGVudGl0eTtcblx0fSlcblx0LmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG4vKipcbiAqIEBmdW5jdGlvbiBjaGFuZ2VDb250ZXh0R3JvdXBcbiAqIEBwYXJhbSBldmVudCAtIERPTSBjbGljayBldmVudCB0aGF0IGlzIHBhc3NlZCBpbiB0byB0aGUgYnV0dG9uIGNsaWNrIGV2ZW50IGZyb20gYGFkZENvbnRleHRHcm91cEJ1dHRvbnNgIGxvY2FsIGBuZXdCdXR0b25gIHZhcmlhYmxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEpvaW5zIGEgY29udGV4dCBncm91cCBieSBwYXNzaW5nIGluIHRoZSB0b3AtbGV2ZWwgdmFyaWFibGUgYGxhc3RGb2N1c2VkVmlld2AgYXMgdGhlIGB0YXJnZXRgIHBhcmFtZXRlciBvZiB0aGUgYGpvaW5Db250ZXh0R3JvdXBgIGZ1bmN0aW9uLlxuICovXG5cbmFzeW5jIGZ1bmN0aW9uIGNoYW5nZUNvbnRleHRHcm91cChldmVudDogRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc2VsZWN0ZWRDb2xvckVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRjb25zdCBjb2xvcjogc3RyaW5nID0gc2VsZWN0ZWRDb2xvckVsZW1lbnQudGl0bGU7XG5cdGF3YWl0IGZpbi5tZS5pbnRlcm9wLmpvaW5Db250ZXh0R3JvdXAoY29sb3IsIGxhc3RGb2N1c2VkVmlldyk7XG5cdGNvbnN0IGNvbnRleHRHcm91cHM6IFBsYXRmb3JtQ29udGV4dEdyb3VwcyA9IGF3YWl0IGZpbi5tZS5pbnRlcm9wLmdldENvbnRleHRHcm91cHMoKTtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihgI3RhYi0ke2xhc3RGb2N1c2VkVmlldy5uYW1lfWApXG5cdFx0LmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHQuLi5jb250ZXh0R3JvdXBzLm1hcCgoeyBkaXNwbGF5TWV0YWRhdGEgfTogUGxhdGZvcm1Db250ZXh0R3JvdXApID0+IGAke2Rpc3BsYXlNZXRhZGF0YS5uYW1lfS1jaGFubmVsYClcblx0XHQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFiLSR7bGFzdEZvY3VzZWRWaWV3Lm5hbWV9YCkuY2xhc3NMaXN0LmFkZChgJHtjb2xvcn0tY2hhbm5lbGApO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvbiBhZGRDb250ZXh0R3JvdXBCdXR0b25zXG4gKiBAZGVzY3JpcHRpb25cbiAqIDEuIFJldHJpZXZlcyBhIFBsYXRmb3JtJ3MgaW50ZXJvcCBjb250ZXh0IGdyb3Vwcy5cbiAqIDIuIEl0ZXJhdGVzIGFsbCBjb250ZXh0IGdyb3VwcyBhbmQgY3JlYXRlcyBhIGNvcnJlc3BvbmRpbmcgYnV0dG9uIHBlciBjb250ZXh0IGdyb3VwIChjb2xvciBjaGFubmVsKS5cbiAqIDMuIEFkZHMgYSBjbGljayBsaXN0ZW5lciB0byBlYWNoIGJ1dHRvbiB3aXRoIHRoZSBgY2hhbmdlQ29udGV4dEdyb3VwYCBmdW5jdGlvbiBhcyB0aGUgbGlzdGVuZXIgY2FsbGJhY2suXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFkZENvbnRleHRHcm91cEJ1dHRvbnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGNvbnRleHRHcm91cHM6IFBsYXRmb3JtQ29udGV4dEdyb3VwcyA9IGF3YWl0IGZpbi5tZS5pbnRlcm9wLmdldENvbnRleHRHcm91cHMoKTtcblx0Y29uc3Qgd2luZG93RnJhbWVTdHlsZVNoZWV0OiBDU1NTdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMF07XG5cdGNvbnN0IGJ1dHRvbnNXcmFwcGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9ucy13cmFwcGVyXCIpO1xuXHRmb3IgKGNvbnN0IHN5c3RlbUNoYW5uZWwgb2YgY29udGV4dEdyb3Vwcykge1xuXHRcdHdpbmRvd0ZyYW1lU3R5bGVTaGVldC5pbnNlcnRSdWxlKFxuXHRcdFx0YC4ke3N5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhLm5hbWV9LWNoYW5uZWwgeyBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7c3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGEuY29sb3J9ICFpbXBvcnRhbnQ7fWBcblx0XHQpO1xuXHRcdHdpbmRvd0ZyYW1lU3R5bGVTaGVldC5pbnNlcnRSdWxlKFxuXHRcdFx0YCMke3N5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhLm5hbWV9LWJ1dHRvbjphZnRlciB7IGJhY2tncm91bmQtY29sb3I6ICR7c3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGEuY29sb3J9fWBcblx0XHQpO1xuXHRcdGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG5cdFx0bmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGFubmVsLWJ1dHRvblwiKTtcblx0XHRuZXdCdXR0b24uaWQgPSBgJHtzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YS5uYW1lfS1idXR0b25gO1xuXHRcdG5ld0J1dHRvbi50aXRsZSA9IHN5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhLm5hbWU7XG5cdFx0bmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb250ZXh0R3JvdXApO1xuXHRcdGJ1dHRvbnNXcmFwcGVyLnByZXBlbmQobmV3QnV0dG9uKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBtYXhPclJlc3RvcmUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmICgoYXdhaXQgb3BlbmZpbldpbmRvdy5nZXRTdGF0ZSgpKSA9PT0gXCJub3JtYWxcIikge1xuXHRcdHJldHVybiBvcGVuZmluV2luZG93Lm1heGltaXplKCk7XG5cdH1cblxuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5yZXN0b3JlKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNsb3NlV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5jbG9zZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBtaW5pbWl6ZVdpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIG9wZW5maW5XaW5kb3cubWluaW1pemUoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0dXBUaXRsZUJhcigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgdGl0bGU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcblx0Y29uc3QgbWluQnRuOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluaW1pemUtYnV0dG9uXCIpO1xuXHRjb25zdCBtYXhCdG46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtYnV0dG9uXCIpO1xuXHRjb25zdCBjbG9zZUJ0bjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWJ1dHRvblwiKTtcblxuXHR0aXRsZS5pbm5lckhUTUwgPSBmaW4ubWUuaWRlbnRpdHkudXVpZDtcblxuXHRtaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbmltaXplV2luZG93KTtcblx0bWF4QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXhPclJlc3RvcmUpO1xuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VXaW5kb3cpO1xuXG5cdGF3YWl0IGFkZENvbnRleHRHcm91cEJ1dHRvbnMoKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0YXdhaXQgZmluLlBsYXRmb3JtLkxheW91dC5pbml0KHsgY29udGFpbmVySWQ6IENPTlRBSU5FUl9JRCB9KTtcblx0YXdhaXQgc2V0dXBUaXRsZUJhcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=