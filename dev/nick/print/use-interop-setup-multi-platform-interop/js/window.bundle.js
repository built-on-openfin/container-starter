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
window.addEventListener("DOMContentLoaded", async () => {
    await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    await setupTitleBar();
});
/**
 * Setup the content for the title bar.
 */
async function setupTitleBar() {
    const title = document.querySelector("#title");
    const minBtn = document.querySelector("#minimize-button");
    const maxBtn = document.querySelector("#expand-button");
    const closeBtn = document.querySelector("#close-button");
    if (title && minBtn && maxBtn && closeBtn) {
        title.innerHTML = fin.me.identity.uuid;
        minBtn.addEventListener("click", minimizeWindow);
        maxBtn.addEventListener("click", maxOrRestore);
        closeBtn.addEventListener("click", closeWindow);
    }
    await addContextGroupButtons();
}
/**
 * Joins a context group by passing in the top-level variable `lastFocusedView` as the `target` parameter of the `joinContextGroup` function.
 * @param event - DOM click event that is passed in to the button click event from `addContextGroupButtons` local `newButton` variable
 */
async function changeContextGroup(event) {
    const selectedColorElement = event.target;
    const color = selectedColorElement.title;
    await fin.me.interop.joinContextGroup(color, lastFocusedView);
    const contextGroups = await fin.me.interop.getContextGroups();
    const focusedTab = document.querySelector(`#tab-${lastFocusedView.name}`);
    if (focusedTab) {
        focusedTab.classList.remove(...contextGroups.map(({ displayMetadata }) => `${displayMetadata?.name}-channel`));
    }
    const focusedView = document.querySelector(`#tab-${lastFocusedView.name}`);
    if (focusedView) {
        focusedView.classList.add(`${color}-channel`);
    }
}
/**
 * Add the context group buttons.
 * 1. Retrieves a Platform's interop context groups.
 * 2. Iterates all context groups and creates a corresponding button per context group (color channel).
 * 3. Adds a click listener to each button with the `changeContextGroup` function as the listener callback.
 */
async function addContextGroupButtons() {
    const contextGroups = await fin.me.interop.getContextGroups();
    const windowFrameStyleSheet = document.styleSheets[0];
    const buttonsWrapper = document.querySelector("#buttons-wrapper");
    if (buttonsWrapper) {
        for (const systemChannel of contextGroups) {
            const nm = systemChannel.displayMetadata?.name;
            const col = systemChannel.displayMetadata?.color;
            if (nm && col) {
                windowFrameStyleSheet.insertRule(`.${nm}-channel { border-left: 2px solid ${col} !important;}`);
                windowFrameStyleSheet.insertRule(`#${nm}-button:after { background-color: ${col}}`);
                const newButton = document.createElement("div");
                newButton.classList.add("button");
                newButton.classList.add("channel-button");
                newButton.id = `${nm}-button`;
                newButton.title = nm;
                newButton.addEventListener("click", changeContextGroup);
                buttonsWrapper.prepend(newButton);
            }
        }
    }
}
/**
 * Maximize or restore the window.
 * @returns Nothing.
 */
async function maxOrRestore() {
    if ((await openfinWindow.getState()) === "normal") {
        return openfinWindow.maximize();
    }
    return openfinWindow.restore();
}
/**
 * Close the window.
 * @returns Nothing.
 */
async function closeWindow() {
    return openfinWindow.close();
}
/**
 * Minimize the window.
 * @returns Nothing.
 */
async function minimizeWindow() {
    return openfinWindow.minimize();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDMUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsU0FBUyxDQUFDO2dCQUM5QixTQUFTLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDckIsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN4RCxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25DLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsWUFBWTtJQUMxQixJQUFJLENBQUMsTUFBTSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUNuRCxPQUFPLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsT0FBTyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDaEMsQ0FBQztBQUVEOzs7R0FHRztBQUNILEtBQUssVUFBVSxXQUFXO0lBQ3pCLE9BQU8sYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsY0FBYztJQUM1QixPQUFPLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3AvLi9jbGllbnQvc3JjL3dpbmRvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9JRCA9IFwibGF5b3V0LWNvbnRhaW5lclwiO1xuY29uc3Qgb3BlbmZpbldpbmRvdzogT3BlbkZpbi5XaW5kb3cgPSBmaW4uV2luZG93LmdldEN1cnJlbnRTeW5jKCk7XG5jb25zdCBvcGVuZmluQXBwbGljYXRpb246IE9wZW5GaW4uQXBwbGljYXRpb24gPSBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKTtcblxubGV0IGxhc3RGb2N1c2VkVmlldzogT3BlbkZpbi5JZGVudGl0eTtcblxub3BlbmZpbkFwcGxpY2F0aW9uXG5cdC5vbihcInZpZXctZm9jdXNlZFwiLCAodmlld0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0bGFzdEZvY3VzZWRWaWV3ID0gdmlld0V2ZW50LnZpZXdJZGVudGl0eTtcblx0fSlcblx0LmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCBmaW4uUGxhdGZvcm0uTGF5b3V0LmluaXQoeyBjb250YWluZXJJZDogQ09OVEFJTkVSX0lEIH0pO1xuXHRhd2FpdCBzZXR1cFRpdGxlQmFyKCk7XG59KTtcblxuLyoqXG4gKiBTZXR1cCB0aGUgY29udGVudCBmb3IgdGhlIHRpdGxlIGJhci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0dXBUaXRsZUJhcigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuXHRjb25zdCBtaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pbmltaXplLWJ1dHRvblwiKTtcblx0Y29uc3QgbWF4QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtYnV0dG9uXCIpO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnV0dG9uXCIpO1xuXG5cdGlmICh0aXRsZSAmJiBtaW5CdG4gJiYgbWF4QnRuICYmIGNsb3NlQnRuKSB7XG5cdFx0dGl0bGUuaW5uZXJIVE1MID0gZmluLm1lLmlkZW50aXR5LnV1aWQ7XG5cblx0XHRtaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbmltaXplV2luZG93KTtcblx0XHRtYXhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1heE9yUmVzdG9yZSk7XG5cdFx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlV2luZG93KTtcblx0fVxuXG5cdGF3YWl0IGFkZENvbnRleHRHcm91cEJ1dHRvbnMoKTtcbn1cblxuLyoqXG4gKiBKb2lucyBhIGNvbnRleHQgZ3JvdXAgYnkgcGFzc2luZyBpbiB0aGUgdG9wLWxldmVsIHZhcmlhYmxlIGBsYXN0Rm9jdXNlZFZpZXdgIGFzIHRoZSBgdGFyZ2V0YCBwYXJhbWV0ZXIgb2YgdGhlIGBqb2luQ29udGV4dEdyb3VwYCBmdW5jdGlvbi5cbiAqIEBwYXJhbSBldmVudCAtIERPTSBjbGljayBldmVudCB0aGF0IGlzIHBhc3NlZCBpbiB0byB0aGUgYnV0dG9uIGNsaWNrIGV2ZW50IGZyb20gYGFkZENvbnRleHRHcm91cEJ1dHRvbnNgIGxvY2FsIGBuZXdCdXR0b25gIHZhcmlhYmxlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoYW5nZUNvbnRleHRHcm91cChldmVudDogRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc2VsZWN0ZWRDb2xvckVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRjb25zdCBjb2xvcjogc3RyaW5nID0gc2VsZWN0ZWRDb2xvckVsZW1lbnQudGl0bGU7XG5cdGF3YWl0IGZpbi5tZS5pbnRlcm9wLmpvaW5Db250ZXh0R3JvdXAoY29sb3IsIGxhc3RGb2N1c2VkVmlldyk7XG5cdGNvbnN0IGNvbnRleHRHcm91cHM6IE9wZW5GaW4uQ29udGV4dEdyb3VwSW5mb1tdID0gYXdhaXQgZmluLm1lLmludGVyb3AuZ2V0Q29udGV4dEdyb3VwcygpO1xuXHRjb25zdCBmb2N1c2VkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RhYi0ke2xhc3RGb2N1c2VkVmlldy5uYW1lfWApO1xuXHRpZiAoZm9jdXNlZFRhYikge1xuXHRcdGZvY3VzZWRUYWIuY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdC4uLmNvbnRleHRHcm91cHMubWFwKFxuXHRcdFx0XHQoeyBkaXNwbGF5TWV0YWRhdGEgfTogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvKSA9PiBgJHtkaXNwbGF5TWV0YWRhdGE/Lm5hbWV9LWNoYW5uZWxgXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRjb25zdCBmb2N1c2VkVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YWItJHtsYXN0Rm9jdXNlZFZpZXcubmFtZX1gKTtcblx0aWYgKGZvY3VzZWRWaWV3KSB7XG5cdFx0Zm9jdXNlZFZpZXcuY2xhc3NMaXN0LmFkZChgJHtjb2xvcn0tY2hhbm5lbGApO1xuXHR9XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb250ZXh0IGdyb3VwIGJ1dHRvbnMuXG4gKiAxLiBSZXRyaWV2ZXMgYSBQbGF0Zm9ybSdzIGludGVyb3AgY29udGV4dCBncm91cHMuXG4gKiAyLiBJdGVyYXRlcyBhbGwgY29udGV4dCBncm91cHMgYW5kIGNyZWF0ZXMgYSBjb3JyZXNwb25kaW5nIGJ1dHRvbiBwZXIgY29udGV4dCBncm91cCAoY29sb3IgY2hhbm5lbCkuXG4gKiAzLiBBZGRzIGEgY2xpY2sgbGlzdGVuZXIgdG8gZWFjaCBidXR0b24gd2l0aCB0aGUgYGNoYW5nZUNvbnRleHRHcm91cGAgZnVuY3Rpb24gYXMgdGhlIGxpc3RlbmVyIGNhbGxiYWNrLlxuICovXG5hc3luYyBmdW5jdGlvbiBhZGRDb250ZXh0R3JvdXBCdXR0b25zKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBjb250ZXh0R3JvdXBzOiBPcGVuRmluLkNvbnRleHRHcm91cEluZm9bXSA9IGF3YWl0IGZpbi5tZS5pbnRlcm9wLmdldENvbnRleHRHcm91cHMoKTtcblx0Y29uc3Qgd2luZG93RnJhbWVTdHlsZVNoZWV0OiBDU1NTdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMF07XG5cdGNvbnN0IGJ1dHRvbnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjYnV0dG9ucy13cmFwcGVyXCIpO1xuXHRpZiAoYnV0dG9uc1dyYXBwZXIpIHtcblx0XHRmb3IgKGNvbnN0IHN5c3RlbUNoYW5uZWwgb2YgY29udGV4dEdyb3Vwcykge1xuXHRcdFx0Y29uc3Qgbm0gPSBzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YT8ubmFtZTtcblx0XHRcdGNvbnN0IGNvbCA9IHN5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhPy5jb2xvcjtcblx0XHRcdGlmIChubSAmJiBjb2wpIHtcblx0XHRcdFx0d2luZG93RnJhbWVTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25tfS1jaGFubmVsIHsgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke2NvbH0gIWltcG9ydGFudDt9YCk7XG5cdFx0XHRcdHdpbmRvd0ZyYW1lU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAjJHtubX0tYnV0dG9uOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJHtjb2x9fWApO1xuXHRcdFx0XHRjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcblx0XHRcdFx0bmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGFubmVsLWJ1dHRvblwiKTtcblx0XHRcdFx0bmV3QnV0dG9uLmlkID0gYCR7bm19LWJ1dHRvbmA7XG5cdFx0XHRcdG5ld0J1dHRvbi50aXRsZSA9IG5tO1xuXHRcdFx0XHRuZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbnRleHRHcm91cCk7XG5cdFx0XHRcdGJ1dHRvbnNXcmFwcGVyLnByZXBlbmQobmV3QnV0dG9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBNYXhpbWl6ZSBvciByZXN0b3JlIHRoZSB3aW5kb3cuXG4gKiBAcmV0dXJucyBOb3RoaW5nLlxuICovXG5hc3luYyBmdW5jdGlvbiBtYXhPclJlc3RvcmUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmICgoYXdhaXQgb3BlbmZpbldpbmRvdy5nZXRTdGF0ZSgpKSA9PT0gXCJub3JtYWxcIikge1xuXHRcdHJldHVybiBvcGVuZmluV2luZG93Lm1heGltaXplKCk7XG5cdH1cblxuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5yZXN0b3JlKCk7XG59XG5cbi8qKlxuICogQ2xvc2UgdGhlIHdpbmRvdy5cbiAqIEByZXR1cm5zIE5vdGhpbmcuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsb3NlV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5jbG9zZSgpO1xufVxuXG4vKipcbiAqIE1pbmltaXplIHRoZSB3aW5kb3cuXG4gKiBAcmV0dXJucyBOb3RoaW5nLlxuICovXG5hc3luYyBmdW5jdGlvbiBtaW5pbWl6ZVdpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIG9wZW5maW5XaW5kb3cubWluaW1pemUoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==