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
/**
 * @function addContextGroupButtons
 * @description
 * 1. Retrieves a Platform's interop context groups.
 * 2. Iterates all context groups and creates a corresponding button per context group (color channel).
 * 3. Adds a click listener to each button with the `changeContextGroup` function as the listener callback.
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUV2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDL0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVoRCxNQUFNLHNCQUFzQixFQUFFLENBQUM7QUFDaEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3RELE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUQsTUFBTSxhQUFhLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLy4vY2xpZW50L3NyYy93aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSB7IFBsYXRmb3JtQ29udGV4dEdyb3VwcywgUGxhdGZvcm1Db250ZXh0R3JvdXAgfSBmcm9tIFwiLi9zaGFwZXNcIjtcblxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9JRCA9IFwibGF5b3V0LWNvbnRhaW5lclwiO1xuY29uc3Qgb3BlbmZpbldpbmRvdzogT3BlbkZpbi5XaW5kb3cgPSBmaW4uV2luZG93LmdldEN1cnJlbnRTeW5jKCk7XG5jb25zdCBvcGVuZmluQXBwbGljYXRpb246IE9wZW5GaW4uQXBwbGljYXRpb24gPSBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKTtcblxubGV0IGxhc3RGb2N1c2VkVmlldzogT3BlbkZpbi5JZGVudGl0eTtcblxub3BlbmZpbkFwcGxpY2F0aW9uXG5cdC5vbihcInZpZXctZm9jdXNlZFwiLCAodmlld0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0bGFzdEZvY3VzZWRWaWV3ID0gdmlld0V2ZW50LnZpZXdJZGVudGl0eTtcblx0fSlcblx0LmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG4vKipcbiAqIEBmdW5jdGlvbiBjaGFuZ2VDb250ZXh0R3JvdXBcbiAqIEBwYXJhbSBldmVudCAtIERPTSBjbGljayBldmVudCB0aGF0IGlzIHBhc3NlZCBpbiB0byB0aGUgYnV0dG9uIGNsaWNrIGV2ZW50IGZyb20gYGFkZENvbnRleHRHcm91cEJ1dHRvbnNgIGxvY2FsIGBuZXdCdXR0b25gIHZhcmlhYmxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEpvaW5zIGEgY29udGV4dCBncm91cCBieSBwYXNzaW5nIGluIHRoZSB0b3AtbGV2ZWwgdmFyaWFibGUgYGxhc3RGb2N1c2VkVmlld2AgYXMgdGhlIGB0YXJnZXRgIHBhcmFtZXRlciBvZiB0aGUgYGpvaW5Db250ZXh0R3JvdXBgIGZ1bmN0aW9uLlxuICovXG5cbmNvbnN0IGNoYW5nZUNvbnRleHRHcm91cCA9IGFzeW5jIChldmVudDogRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qgc2VsZWN0ZWRDb2xvckVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRjb25zdCBjb2xvcjogc3RyaW5nID0gc2VsZWN0ZWRDb2xvckVsZW1lbnQudGl0bGU7XG5cdGF3YWl0IGZpbi5tZS5pbnRlcm9wLmpvaW5Db250ZXh0R3JvdXAoY29sb3IsIGxhc3RGb2N1c2VkVmlldyk7XG5cdGNvbnN0IGNvbnRleHRHcm91cHM6IFBsYXRmb3JtQ29udGV4dEdyb3VwcyA9IGF3YWl0IGZpbi5tZS5pbnRlcm9wLmdldENvbnRleHRHcm91cHMoKTtcblx0ZG9jdW1lbnRcblx0XHQucXVlcnlTZWxlY3RvcihgI3RhYi0ke2xhc3RGb2N1c2VkVmlldy5uYW1lfWApXG5cdFx0LmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHQuLi5jb250ZXh0R3JvdXBzLm1hcCgoeyBkaXNwbGF5TWV0YWRhdGEgfTogUGxhdGZvcm1Db250ZXh0R3JvdXApID0+IGAke2Rpc3BsYXlNZXRhZGF0YS5uYW1lfS1jaGFubmVsYClcblx0XHQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFiLSR7bGFzdEZvY3VzZWRWaWV3Lm5hbWV9YCkuY2xhc3NMaXN0LmFkZChgJHtjb2xvcn0tY2hhbm5lbGApO1xufTtcblxuLyoqXG4gKiBAZnVuY3Rpb24gYWRkQ29udGV4dEdyb3VwQnV0dG9uc1xuICogQGRlc2NyaXB0aW9uXG4gKiAxLiBSZXRyaWV2ZXMgYSBQbGF0Zm9ybSdzIGludGVyb3AgY29udGV4dCBncm91cHMuXG4gKiAyLiBJdGVyYXRlcyBhbGwgY29udGV4dCBncm91cHMgYW5kIGNyZWF0ZXMgYSBjb3JyZXNwb25kaW5nIGJ1dHRvbiBwZXIgY29udGV4dCBncm91cCAoY29sb3IgY2hhbm5lbCkuXG4gKiAzLiBBZGRzIGEgY2xpY2sgbGlzdGVuZXIgdG8gZWFjaCBidXR0b24gd2l0aCB0aGUgYGNoYW5nZUNvbnRleHRHcm91cGAgZnVuY3Rpb24gYXMgdGhlIGxpc3RlbmVyIGNhbGxiYWNrLlxuICovXG5jb25zdCBhZGRDb250ZXh0R3JvdXBCdXR0b25zID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBjb250ZXh0R3JvdXBzOiBQbGF0Zm9ybUNvbnRleHRHcm91cHMgPSBhd2FpdCBmaW4ubWUuaW50ZXJvcC5nZXRDb250ZXh0R3JvdXBzKCk7XG5cdGNvbnN0IHdpbmRvd0ZyYW1lU3R5bGVTaGVldDogQ1NTU3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdO1xuXHRjb25zdCBidXR0b25zV3JhcHBlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbnMtd3JhcHBlclwiKTtcblx0Zm9yIChjb25zdCBzeXN0ZW1DaGFubmVsIG9mIGNvbnRleHRHcm91cHMpIHtcblx0XHR3aW5kb3dGcmFtZVN0eWxlU2hlZXQuaW5zZXJ0UnVsZShcblx0XHRcdGAuJHtzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YS5uYW1lfS1jaGFubmVsIHsgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke3N5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhLmNvbG9yfSAhaW1wb3J0YW50O31gXG5cdFx0KTtcblx0XHR3aW5kb3dGcmFtZVN0eWxlU2hlZXQuaW5zZXJ0UnVsZShcblx0XHRcdGAjJHtzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YS5uYW1lfS1idXR0b246YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAke3N5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhLmNvbG9yfX1gXG5cdFx0KTtcblx0XHRjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuXHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hhbm5lbC1idXR0b25cIik7XG5cdFx0bmV3QnV0dG9uLmlkID0gYCR7c3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGEubmFtZX0tYnV0dG9uYDtcblx0XHRuZXdCdXR0b24udGl0bGUgPSBzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YS5uYW1lO1xuXHRcdG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29udGV4dEdyb3VwKTtcblx0XHRidXR0b25zV3JhcHBlci5wcmVwZW5kKG5ld0J1dHRvbik7XG5cdH1cbn07XG5cbmNvbnN0IG1heE9yUmVzdG9yZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKChhd2FpdCBvcGVuZmluV2luZG93LmdldFN0YXRlKCkpID09PSBcIm5vcm1hbFwiKSB7XG5cdFx0cmV0dXJuIG9wZW5maW5XaW5kb3cubWF4aW1pemUoKTtcblx0fVxuXG5cdHJldHVybiBvcGVuZmluV2luZG93LnJlc3RvcmUoKTtcbn07XG5cbmNvbnN0IGNsb3NlV2luZG93ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4gb3BlbmZpbldpbmRvdy5jbG9zZSgpO1xuXG5jb25zdCBtaW5pbWl6ZVdpbmRvdyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IG9wZW5maW5XaW5kb3cubWluaW1pemUoKTtcblxuY29uc3Qgc2V0dXBUaXRsZUJhciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdGl0bGU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcblx0Y29uc3QgbWluQnRuOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluaW1pemUtYnV0dG9uXCIpO1xuXHRjb25zdCBtYXhCdG46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtYnV0dG9uXCIpO1xuXHRjb25zdCBjbG9zZUJ0bjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWJ1dHRvblwiKTtcblxuXHR0aXRsZS5pbm5lckhUTUwgPSBmaW4ubWUuaWRlbnRpdHkudXVpZDtcblxuXHRtaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbmltaXplV2luZG93KTtcblx0bWF4QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXhPclJlc3RvcmUpO1xuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VXaW5kb3cpO1xuXG5cdGF3YWl0IGFkZENvbnRleHRHcm91cEJ1dHRvbnMoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5MYXlvdXQuaW5pdCh7IGNvbnRhaW5lcklkOiBDT05UQUlORVJfSUQgfSk7XG5cdGF3YWl0IHNldHVwVGl0bGVCYXIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9