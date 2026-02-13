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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNKTyxNQUFNLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUMvQyxNQUFNLGFBQWEsR0FBbUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNsRSxNQUFNLGtCQUFrQixHQUF3QixHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBRWpGLElBQUksZUFBaUMsQ0FBQztBQUV0QyxrQkFBa0I7S0FDaEIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBUSxFQUFFO0lBQ3ZDLGVBQWUsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQzFDLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN0RCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlELE1BQU0sYUFBYSxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILEtBQUssVUFBVSxhQUFhO0lBQzNCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXpELElBQUksS0FBSyxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksUUFBUSxFQUFFLENBQUM7UUFDM0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELE1BQU0sc0JBQXNCLEVBQUUsQ0FBQztBQUNoQyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGtCQUFrQixDQUFDLEtBQVk7SUFDN0MsTUFBTSxvQkFBb0IsR0FBZ0IsS0FBSyxDQUFDLE1BQXFCLENBQUM7SUFDdEUsTUFBTSxLQUFLLEdBQVcsb0JBQW9CLENBQUMsS0FBSyxDQUFDO0lBQ2pELE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzlELE1BQU0sYUFBYSxHQUErQixNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUYsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLElBQUksVUFBVSxFQUFFLENBQUM7UUFDaEIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQzFCLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FDbkIsQ0FBQyxFQUFFLGVBQWUsRUFBNEIsRUFBRSxFQUFFLENBQUMsR0FBRyxlQUFlLEVBQUUsSUFBSSxVQUFVLENBQ3JGLENBQ0QsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0UsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNqQixXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztBQUNGLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILEtBQUssVUFBVSxzQkFBc0I7SUFDcEMsTUFBTSxhQUFhLEdBQStCLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxRixNQUFNLHFCQUFxQixHQUFrQixRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWMsa0JBQWtCLENBQUMsQ0FBQztJQUMvRSxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3BCLEtBQUssTUFBTSxhQUFhLElBQUksYUFBYSxFQUFFLENBQUM7WUFDM0MsTUFBTSxFQUFFLEdBQUcsYUFBYSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7WUFDL0MsTUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7WUFDakQsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2YscUJBQXFCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxxQ0FBcUMsR0FBRyxlQUFlLENBQUMsQ0FBQztnQkFDaEcscUJBQXFCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxxQ0FBcUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDcEYsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQztnQkFDOUIsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDeEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLFlBQVk7SUFDMUIsSUFBSSxDQUFDLE1BQU0sYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDbkQsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELE9BQU8sYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsV0FBVztJQUN6QixPQUFPLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGNBQWM7SUFDNUIsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhaW5lci1zdGFydGVyLXVzZS1pbnRlcm9wLS1jbG91ZC1pbnRlcm9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbnRhaW5lci1zdGFydGVyLXVzZS1pbnRlcm9wLS1jbG91ZC1pbnRlcm9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb250YWluZXItc3RhcnRlci11c2UtaW50ZXJvcC0tY2xvdWQtaW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbnRhaW5lci1zdGFydGVyLXVzZS1pbnRlcm9wLS1jbG91ZC1pbnRlcm9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXN0YXJ0ZXItdXNlLWludGVyb3AtLWNsb3VkLWludGVyb3AvLi9jbGllbnQvc3JjL3dpbmRvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9JRCA9IFwibGF5b3V0LWNvbnRhaW5lclwiO1xuY29uc3Qgb3BlbmZpbldpbmRvdzogT3BlbkZpbi5XaW5kb3cgPSBmaW4uV2luZG93LmdldEN1cnJlbnRTeW5jKCk7XG5jb25zdCBvcGVuZmluQXBwbGljYXRpb246IE9wZW5GaW4uQXBwbGljYXRpb24gPSBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKTtcblxubGV0IGxhc3RGb2N1c2VkVmlldzogT3BlbkZpbi5JZGVudGl0eTtcblxub3BlbmZpbkFwcGxpY2F0aW9uXG5cdC5vbihcInZpZXctZm9jdXNlZFwiLCAodmlld0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0bGFzdEZvY3VzZWRWaWV3ID0gdmlld0V2ZW50LnZpZXdJZGVudGl0eTtcblx0fSlcblx0LmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCBmaW4uUGxhdGZvcm0uTGF5b3V0LmluaXQoeyBjb250YWluZXJJZDogQ09OVEFJTkVSX0lEIH0pO1xuXHRhd2FpdCBzZXR1cFRpdGxlQmFyKCk7XG59KTtcblxuLyoqXG4gKiBTZXR1cCB0aGUgY29udGVudCBmb3IgdGhlIHRpdGxlIGJhci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0dXBUaXRsZUJhcigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuXHRjb25zdCBtaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pbmltaXplLWJ1dHRvblwiKTtcblx0Y29uc3QgbWF4QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtYnV0dG9uXCIpO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnV0dG9uXCIpO1xuXG5cdGlmICh0aXRsZSAmJiBtaW5CdG4gJiYgbWF4QnRuICYmIGNsb3NlQnRuKSB7XG5cdFx0dGl0bGUuaW5uZXJIVE1MID0gZmluLm1lLmlkZW50aXR5LnV1aWQ7XG5cblx0XHRtaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbmltaXplV2luZG93KTtcblx0XHRtYXhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1heE9yUmVzdG9yZSk7XG5cdFx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlV2luZG93KTtcblx0fVxuXG5cdGF3YWl0IGFkZENvbnRleHRHcm91cEJ1dHRvbnMoKTtcbn1cblxuLyoqXG4gKiBKb2lucyBhIGNvbnRleHQgZ3JvdXAgYnkgcGFzc2luZyBpbiB0aGUgdG9wLWxldmVsIHZhcmlhYmxlIGBsYXN0Rm9jdXNlZFZpZXdgIGFzIHRoZSBgdGFyZ2V0YCBwYXJhbWV0ZXIgb2YgdGhlIGBqb2luQ29udGV4dEdyb3VwYCBmdW5jdGlvbi5cbiAqIEBwYXJhbSBldmVudCAtIERPTSBjbGljayBldmVudCB0aGF0IGlzIHBhc3NlZCBpbiB0byB0aGUgYnV0dG9uIGNsaWNrIGV2ZW50IGZyb20gYGFkZENvbnRleHRHcm91cEJ1dHRvbnNgIGxvY2FsIGBuZXdCdXR0b25gIHZhcmlhYmxlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoYW5nZUNvbnRleHRHcm91cChldmVudDogRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc2VsZWN0ZWRDb2xvckVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRjb25zdCBjb2xvcjogc3RyaW5nID0gc2VsZWN0ZWRDb2xvckVsZW1lbnQudGl0bGU7XG5cdGF3YWl0IGZpbi5tZS5pbnRlcm9wLmpvaW5Db250ZXh0R3JvdXAoY29sb3IsIGxhc3RGb2N1c2VkVmlldyk7XG5cdGNvbnN0IGNvbnRleHRHcm91cHM6IE9wZW5GaW4uQ29udGV4dEdyb3VwSW5mb1tdID0gYXdhaXQgZmluLm1lLmludGVyb3AuZ2V0Q29udGV4dEdyb3VwcygpO1xuXHRjb25zdCBmb2N1c2VkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RhYi0ke2xhc3RGb2N1c2VkVmlldy5uYW1lfWApO1xuXHRpZiAoZm9jdXNlZFRhYikge1xuXHRcdGZvY3VzZWRUYWIuY2xhc3NMaXN0LnJlbW92ZShcblx0XHRcdC4uLmNvbnRleHRHcm91cHMubWFwKFxuXHRcdFx0XHQoeyBkaXNwbGF5TWV0YWRhdGEgfTogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvKSA9PiBgJHtkaXNwbGF5TWV0YWRhdGE/Lm5hbWV9LWNoYW5uZWxgXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXHRjb25zdCBmb2N1c2VkVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YWItJHtsYXN0Rm9jdXNlZFZpZXcubmFtZX1gKTtcblx0aWYgKGZvY3VzZWRWaWV3KSB7XG5cdFx0Zm9jdXNlZFZpZXcuY2xhc3NMaXN0LmFkZChgJHtjb2xvcn0tY2hhbm5lbGApO1xuXHR9XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb250ZXh0IGdyb3VwIGJ1dHRvbnMuXG4gKiAxLiBSZXRyaWV2ZXMgYSBQbGF0Zm9ybSdzIGludGVyb3AgY29udGV4dCBncm91cHMuXG4gKiAyLiBJdGVyYXRlcyBhbGwgY29udGV4dCBncm91cHMgYW5kIGNyZWF0ZXMgYSBjb3JyZXNwb25kaW5nIGJ1dHRvbiBwZXIgY29udGV4dCBncm91cCAoY29sb3IgY2hhbm5lbCkuXG4gKiAzLiBBZGRzIGEgY2xpY2sgbGlzdGVuZXIgdG8gZWFjaCBidXR0b24gd2l0aCB0aGUgYGNoYW5nZUNvbnRleHRHcm91cGAgZnVuY3Rpb24gYXMgdGhlIGxpc3RlbmVyIGNhbGxiYWNrLlxuICovXG5hc3luYyBmdW5jdGlvbiBhZGRDb250ZXh0R3JvdXBCdXR0b25zKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBjb250ZXh0R3JvdXBzOiBPcGVuRmluLkNvbnRleHRHcm91cEluZm9bXSA9IGF3YWl0IGZpbi5tZS5pbnRlcm9wLmdldENvbnRleHRHcm91cHMoKTtcblx0Y29uc3Qgd2luZG93RnJhbWVTdHlsZVNoZWV0OiBDU1NTdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbMF07XG5cdGNvbnN0IGJ1dHRvbnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjYnV0dG9ucy13cmFwcGVyXCIpO1xuXHRpZiAoYnV0dG9uc1dyYXBwZXIpIHtcblx0XHRmb3IgKGNvbnN0IHN5c3RlbUNoYW5uZWwgb2YgY29udGV4dEdyb3Vwcykge1xuXHRcdFx0Y29uc3Qgbm0gPSBzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YT8ubmFtZTtcblx0XHRcdGNvbnN0IGNvbCA9IHN5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhPy5jb2xvcjtcblx0XHRcdGlmIChubSAmJiBjb2wpIHtcblx0XHRcdFx0d2luZG93RnJhbWVTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYC4ke25tfS1jaGFubmVsIHsgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke2NvbH0gIWltcG9ydGFudDt9YCk7XG5cdFx0XHRcdHdpbmRvd0ZyYW1lU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAjJHtubX0tYnV0dG9uOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJHtjb2x9fWApO1xuXHRcdFx0XHRjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0XHRuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcblx0XHRcdFx0bmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGFubmVsLWJ1dHRvblwiKTtcblx0XHRcdFx0bmV3QnV0dG9uLmlkID0gYCR7bm19LWJ1dHRvbmA7XG5cdFx0XHRcdG5ld0J1dHRvbi50aXRsZSA9IG5tO1xuXHRcdFx0XHRuZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNvbnRleHRHcm91cCk7XG5cdFx0XHRcdGJ1dHRvbnNXcmFwcGVyLnByZXBlbmQobmV3QnV0dG9uKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBNYXhpbWl6ZSBvciByZXN0b3JlIHRoZSB3aW5kb3cuXG4gKiBAcmV0dXJucyBOb3RoaW5nLlxuICovXG5hc3luYyBmdW5jdGlvbiBtYXhPclJlc3RvcmUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmICgoYXdhaXQgb3BlbmZpbldpbmRvdy5nZXRTdGF0ZSgpKSA9PT0gXCJub3JtYWxcIikge1xuXHRcdHJldHVybiBvcGVuZmluV2luZG93Lm1heGltaXplKCk7XG5cdH1cblxuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5yZXN0b3JlKCk7XG59XG5cbi8qKlxuICogQ2xvc2UgdGhlIHdpbmRvdy5cbiAqIEByZXR1cm5zIE5vdGhpbmcuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNsb3NlV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5jbG9zZSgpO1xufVxuXG4vKipcbiAqIE1pbmltaXplIHRoZSB3aW5kb3cuXG4gKiBAcmV0dXJucyBOb3RoaW5nLlxuICovXG5hc3luYyBmdW5jdGlvbiBtaW5pbWl6ZVdpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIG9wZW5maW5XaW5kb3cubWluaW1pemUoKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=