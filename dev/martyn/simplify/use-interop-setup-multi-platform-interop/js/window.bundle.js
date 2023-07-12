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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMxQyxTQUFTLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxTQUFTLENBQUM7Z0JBQzlCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3hELGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEM7U0FDRDtLQUNEO0FBQ0YsQ0FBQztBQUVEOzs7R0FHRztBQUNILEtBQUssVUFBVSxZQUFZO0lBQzFCLElBQUksQ0FBQyxNQUFNLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNsRCxPQUFPLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNoQztJQUVELE9BQU8sYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsV0FBVztJQUN6QixPQUFPLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGNBQWM7SUFDNUIsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLy4vY2xpZW50L3NyYy93aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY29uc3QgQ09OVEFJTkVSX0lEID0gXCJsYXlvdXQtY29udGFpbmVyXCI7XG5jb25zdCBvcGVuZmluV2luZG93OiBPcGVuRmluLldpbmRvdyA9IGZpbi5XaW5kb3cuZ2V0Q3VycmVudFN5bmMoKTtcbmNvbnN0IG9wZW5maW5BcHBsaWNhdGlvbjogT3BlbkZpbi5BcHBsaWNhdGlvbiA9IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50U3luYygpO1xuXG5sZXQgbGFzdEZvY3VzZWRWaWV3OiBPcGVuRmluLklkZW50aXR5O1xuXG5vcGVuZmluQXBwbGljYXRpb25cblx0Lm9uKFwidmlldy1mb2N1c2VkXCIsICh2aWV3RXZlbnQpOiB2b2lkID0+IHtcblx0XHRsYXN0Rm9jdXNlZFZpZXcgPSB2aWV3RXZlbnQudmlld0lkZW50aXR5O1xuXHR9KVxuXHQuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5MYXlvdXQuaW5pdCh7IGNvbnRhaW5lcklkOiBDT05UQUlORVJfSUQgfSk7XG5cdGF3YWl0IHNldHVwVGl0bGVCYXIoKTtcbn0pO1xuXG4vKipcbiAqIFNldHVwIHRoZSBjb250ZW50IGZvciB0aGUgdGl0bGUgYmFyLlxuICovXG5hc3luYyBmdW5jdGlvbiBzZXR1cFRpdGxlQmFyKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG5cdGNvbnN0IG1pbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluaW1pemUtYnV0dG9uXCIpO1xuXHRjb25zdCBtYXhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4cGFuZC1idXR0b25cIik7XG5cdGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1idXR0b25cIik7XG5cblx0aWYgKHRpdGxlICYmIG1pbkJ0biAmJiBtYXhCdG4gJiYgY2xvc2VCdG4pIHtcblx0XHR0aXRsZS5pbm5lckhUTUwgPSBmaW4ubWUuaWRlbnRpdHkudXVpZDtcblxuXHRcdG1pbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWluaW1pemVXaW5kb3cpO1xuXHRcdG1heEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWF4T3JSZXN0b3JlKTtcblx0XHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VXaW5kb3cpO1xuXHR9XG5cblx0YXdhaXQgYWRkQ29udGV4dEdyb3VwQnV0dG9ucygpO1xufVxuXG4vKipcbiAqIEpvaW5zIGEgY29udGV4dCBncm91cCBieSBwYXNzaW5nIGluIHRoZSB0b3AtbGV2ZWwgdmFyaWFibGUgYGxhc3RGb2N1c2VkVmlld2AgYXMgdGhlIGB0YXJnZXRgIHBhcmFtZXRlciBvZiB0aGUgYGpvaW5Db250ZXh0R3JvdXBgIGZ1bmN0aW9uLlxuICogQHBhcmFtIGV2ZW50IC0gRE9NIGNsaWNrIGV2ZW50IHRoYXQgaXMgcGFzc2VkIGluIHRvIHRoZSBidXR0b24gY2xpY2sgZXZlbnQgZnJvbSBgYWRkQ29udGV4dEdyb3VwQnV0dG9uc2AgbG9jYWwgYG5ld0J1dHRvbmAgdmFyaWFibGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2hhbmdlQ29udGV4dEdyb3VwKGV2ZW50OiBFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzZWxlY3RlZENvbG9yRWxlbWVudDogSFRNTEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdGNvbnN0IGNvbG9yOiBzdHJpbmcgPSBzZWxlY3RlZENvbG9yRWxlbWVudC50aXRsZTtcblx0YXdhaXQgZmluLm1lLmludGVyb3Auam9pbkNvbnRleHRHcm91cChjb2xvciwgbGFzdEZvY3VzZWRWaWV3KTtcblx0Y29uc3QgY29udGV4dEdyb3VwczogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvW10gPSBhd2FpdCBmaW4ubWUuaW50ZXJvcC5nZXRDb250ZXh0R3JvdXBzKCk7XG5cdGNvbnN0IGZvY3VzZWRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFiLSR7bGFzdEZvY3VzZWRWaWV3Lm5hbWV9YCk7XG5cdGlmIChmb2N1c2VkVGFiKSB7XG5cdFx0Zm9jdXNlZFRhYi5jbGFzc0xpc3QucmVtb3ZlKFxuXHRcdFx0Li4uY29udGV4dEdyb3Vwcy5tYXAoXG5cdFx0XHRcdCh7IGRpc3BsYXlNZXRhZGF0YSB9OiBPcGVuRmluLkNvbnRleHRHcm91cEluZm8pID0+IGAke2Rpc3BsYXlNZXRhZGF0YT8ubmFtZX0tY2hhbm5lbGBcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cdGNvbnN0IGZvY3VzZWRWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RhYi0ke2xhc3RGb2N1c2VkVmlldy5uYW1lfWApO1xuXHRpZiAoZm9jdXNlZFZpZXcpIHtcblx0XHRmb2N1c2VkVmlldy5jbGFzc0xpc3QuYWRkKGAke2NvbG9yfS1jaGFubmVsYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvbnRleHQgZ3JvdXAgYnV0dG9ucy5cbiAqIDEuIFJldHJpZXZlcyBhIFBsYXRmb3JtJ3MgaW50ZXJvcCBjb250ZXh0IGdyb3Vwcy5cbiAqIDIuIEl0ZXJhdGVzIGFsbCBjb250ZXh0IGdyb3VwcyBhbmQgY3JlYXRlcyBhIGNvcnJlc3BvbmRpbmcgYnV0dG9uIHBlciBjb250ZXh0IGdyb3VwIChjb2xvciBjaGFubmVsKS5cbiAqIDMuIEFkZHMgYSBjbGljayBsaXN0ZW5lciB0byBlYWNoIGJ1dHRvbiB3aXRoIHRoZSBgY2hhbmdlQ29udGV4dEdyb3VwYCBmdW5jdGlvbiBhcyB0aGUgbGlzdGVuZXIgY2FsbGJhY2suXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFkZENvbnRleHRHcm91cEJ1dHRvbnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGNvbnRleHRHcm91cHM6IE9wZW5GaW4uQ29udGV4dEdyb3VwSW5mb1tdID0gYXdhaXQgZmluLm1lLmludGVyb3AuZ2V0Q29udGV4dEdyb3VwcygpO1xuXHRjb25zdCB3aW5kb3dGcmFtZVN0eWxlU2hlZXQ6IENTU1N0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcblx0Y29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNidXR0b25zLXdyYXBwZXJcIik7XG5cdGlmIChidXR0b25zV3JhcHBlcikge1xuXHRcdGZvciAoY29uc3Qgc3lzdGVtQ2hhbm5lbCBvZiBjb250ZXh0R3JvdXBzKSB7XG5cdFx0XHRjb25zdCBubSA9IHN5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhPy5uYW1lO1xuXHRcdFx0Y29uc3QgY29sID0gc3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGE/LmNvbG9yO1xuXHRcdFx0aWYgKG5tICYmIGNvbCkge1xuXHRcdFx0XHR3aW5kb3dGcmFtZVN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bm19LWNoYW5uZWwgeyBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7Y29sfSAhaW1wb3J0YW50O31gKTtcblx0XHRcdFx0d2luZG93RnJhbWVTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYCMke25tfS1idXR0b246YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbH19YCk7XG5cdFx0XHRcdGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcImNoYW5uZWwtYnV0dG9uXCIpO1xuXHRcdFx0XHRuZXdCdXR0b24uaWQgPSBgJHtubX0tYnV0dG9uYDtcblx0XHRcdFx0bmV3QnV0dG9uLnRpdGxlID0gbm07XG5cdFx0XHRcdG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29udGV4dEdyb3VwKTtcblx0XHRcdFx0YnV0dG9uc1dyYXBwZXIucHJlcGVuZChuZXdCdXR0b24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIE1heGltaXplIG9yIHJlc3RvcmUgdGhlIHdpbmRvdy5cbiAqIEByZXR1cm5zIE5vdGhpbmcuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG1heE9yUmVzdG9yZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKChhd2FpdCBvcGVuZmluV2luZG93LmdldFN0YXRlKCkpID09PSBcIm5vcm1hbFwiKSB7XG5cdFx0cmV0dXJuIG9wZW5maW5XaW5kb3cubWF4aW1pemUoKTtcblx0fVxuXG5cdHJldHVybiBvcGVuZmluV2luZG93LnJlc3RvcmUoKTtcbn1cblxuLyoqXG4gKiBDbG9zZSB0aGUgd2luZG93LlxuICogQHJldHVybnMgTm90aGluZy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2xvc2VXaW5kb3coKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBvcGVuZmluV2luZG93LmNsb3NlKCk7XG59XG5cbi8qKlxuICogTWluaW1pemUgdGhlIHdpbmRvdy5cbiAqIEByZXR1cm5zIE5vdGhpbmcuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG1pbmltaXplV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5taW5pbWl6ZSgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9