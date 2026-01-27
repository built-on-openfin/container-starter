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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQztnQkFDOUIsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDeEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLFlBQVk7SUFDMUIsSUFBSSxDQUFDLE1BQU0sYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDbkQsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELE9BQU8sYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsV0FBVztJQUN6QixPQUFPLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGNBQWM7SUFDNUIsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLy4vY2xpZW50L3NyYy93aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmV4cG9ydCBjb25zdCBDT05UQUlORVJfSUQgPSBcImxheW91dC1jb250YWluZXJcIjtcbmNvbnN0IG9wZW5maW5XaW5kb3c6IE9wZW5GaW4uV2luZG93ID0gZmluLldpbmRvdy5nZXRDdXJyZW50U3luYygpO1xuY29uc3Qgb3BlbmZpbkFwcGxpY2F0aW9uOiBPcGVuRmluLkFwcGxpY2F0aW9uID0gZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnRTeW5jKCk7XG5cbmxldCBsYXN0Rm9jdXNlZFZpZXc6IE9wZW5GaW4uSWRlbnRpdHk7XG5cbm9wZW5maW5BcHBsaWNhdGlvblxuXHQub24oXCJ2aWV3LWZvY3VzZWRcIiwgKHZpZXdFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGxhc3RGb2N1c2VkVmlldyA9IHZpZXdFdmVudC52aWV3SWRlbnRpdHk7XG5cdH0pXG5cdC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0YXdhaXQgZmluLlBsYXRmb3JtLkxheW91dC5pbml0KHsgY29udGFpbmVySWQ6IENPTlRBSU5FUl9JRCB9KTtcblx0YXdhaXQgc2V0dXBUaXRsZUJhcigpO1xufSk7XG5cbi8qKlxuICogU2V0dXAgdGhlIGNvbnRlbnQgZm9yIHRoZSB0aXRsZSBiYXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldHVwVGl0bGVCYXIoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcblx0Y29uc3QgbWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5pbWl6ZS1idXR0b25cIik7XG5cdGNvbnN0IG1heEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhwYW5kLWJ1dHRvblwiKTtcblx0Y29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWJ1dHRvblwiKTtcblxuXHRpZiAodGl0bGUgJiYgbWluQnRuICYmIG1heEJ0biAmJiBjbG9zZUJ0bikge1xuXHRcdHRpdGxlLmlubmVySFRNTCA9IGZpbi5tZS5pZGVudGl0eS51dWlkO1xuXG5cdFx0bWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtaW5pbWl6ZVdpbmRvdyk7XG5cdFx0bWF4QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYXhPclJlc3RvcmUpO1xuXHRcdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVdpbmRvdyk7XG5cdH1cblxuXHRhd2FpdCBhZGRDb250ZXh0R3JvdXBCdXR0b25zKCk7XG59XG5cbi8qKlxuICogSm9pbnMgYSBjb250ZXh0IGdyb3VwIGJ5IHBhc3NpbmcgaW4gdGhlIHRvcC1sZXZlbCB2YXJpYWJsZSBgbGFzdEZvY3VzZWRWaWV3YCBhcyB0aGUgYHRhcmdldGAgcGFyYW1ldGVyIG9mIHRoZSBgam9pbkNvbnRleHRHcm91cGAgZnVuY3Rpb24uXG4gKiBAcGFyYW0gZXZlbnQgLSBET00gY2xpY2sgZXZlbnQgdGhhdCBpcyBwYXNzZWQgaW4gdG8gdGhlIGJ1dHRvbiBjbGljayBldmVudCBmcm9tIGBhZGRDb250ZXh0R3JvdXBCdXR0b25zYCBsb2NhbCBgbmV3QnV0dG9uYCB2YXJpYWJsZVxuICovXG5hc3luYyBmdW5jdGlvbiBjaGFuZ2VDb250ZXh0R3JvdXAoZXZlbnQ6IEV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNlbGVjdGVkQ29sb3JFbGVtZW50OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblx0Y29uc3QgY29sb3I6IHN0cmluZyA9IHNlbGVjdGVkQ29sb3JFbGVtZW50LnRpdGxlO1xuXHRhd2FpdCBmaW4ubWUuaW50ZXJvcC5qb2luQ29udGV4dEdyb3VwKGNvbG9yLCBsYXN0Rm9jdXNlZFZpZXcpO1xuXHRjb25zdCBjb250ZXh0R3JvdXBzOiBPcGVuRmluLkNvbnRleHRHcm91cEluZm9bXSA9IGF3YWl0IGZpbi5tZS5pbnRlcm9wLmdldENvbnRleHRHcm91cHMoKTtcblx0Y29uc3QgZm9jdXNlZFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YWItJHtsYXN0Rm9jdXNlZFZpZXcubmFtZX1gKTtcblx0aWYgKGZvY3VzZWRUYWIpIHtcblx0XHRmb2N1c2VkVGFiLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHQuLi5jb250ZXh0R3JvdXBzLm1hcChcblx0XHRcdFx0KHsgZGlzcGxheU1ldGFkYXRhIH06IE9wZW5GaW4uQ29udGV4dEdyb3VwSW5mbykgPT4gYCR7ZGlzcGxheU1ldGFkYXRhPy5uYW1lfS1jaGFubmVsYFxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblx0Y29uc3QgZm9jdXNlZFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFiLSR7bGFzdEZvY3VzZWRWaWV3Lm5hbWV9YCk7XG5cdGlmIChmb2N1c2VkVmlldykge1xuXHRcdGZvY3VzZWRWaWV3LmNsYXNzTGlzdC5hZGQoYCR7Y29sb3J9LWNoYW5uZWxgKTtcblx0fVxufVxuXG4vKipcbiAqIEFkZCB0aGUgY29udGV4dCBncm91cCBidXR0b25zLlxuICogMS4gUmV0cmlldmVzIGEgUGxhdGZvcm0ncyBpbnRlcm9wIGNvbnRleHQgZ3JvdXBzLlxuICogMi4gSXRlcmF0ZXMgYWxsIGNvbnRleHQgZ3JvdXBzIGFuZCBjcmVhdGVzIGEgY29ycmVzcG9uZGluZyBidXR0b24gcGVyIGNvbnRleHQgZ3JvdXAgKGNvbG9yIGNoYW5uZWwpLlxuICogMy4gQWRkcyBhIGNsaWNrIGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uIHdpdGggdGhlIGBjaGFuZ2VDb250ZXh0R3JvdXBgIGZ1bmN0aW9uIGFzIHRoZSBsaXN0ZW5lciBjYWxsYmFjay5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYWRkQ29udGV4dEdyb3VwQnV0dG9ucygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY29udGV4dEdyb3VwczogT3BlbkZpbi5Db250ZXh0R3JvdXBJbmZvW10gPSBhd2FpdCBmaW4ubWUuaW50ZXJvcC5nZXRDb250ZXh0R3JvdXBzKCk7XG5cdGNvbnN0IHdpbmRvd0ZyYW1lU3R5bGVTaGVldDogQ1NTU3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdO1xuXHRjb25zdCBidXR0b25zV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2J1dHRvbnMtd3JhcHBlclwiKTtcblx0aWYgKGJ1dHRvbnNXcmFwcGVyKSB7XG5cdFx0Zm9yIChjb25zdCBzeXN0ZW1DaGFubmVsIG9mIGNvbnRleHRHcm91cHMpIHtcblx0XHRcdGNvbnN0IG5tID0gc3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGE/Lm5hbWU7XG5cdFx0XHRjb25zdCBjb2wgPSBzeXN0ZW1DaGFubmVsLmRpc3BsYXlNZXRhZGF0YT8uY29sb3I7XG5cdFx0XHRpZiAobm0gJiYgY29sKSB7XG5cdFx0XHRcdHdpbmRvd0ZyYW1lU3R5bGVTaGVldC5pbnNlcnRSdWxlKGAuJHtubX0tY2hhbm5lbCB7IGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtjb2x9ICFpbXBvcnRhbnQ7fWApO1xuXHRcdFx0XHR3aW5kb3dGcmFtZVN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgIyR7bm19LWJ1dHRvbjphZnRlciB7IGJhY2tncm91bmQtY29sb3I6ICR7Y29sfX1gKTtcblx0XHRcdFx0Y29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0bmV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG5cdFx0XHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hhbm5lbC1idXR0b25cIik7XG5cdFx0XHRcdG5ld0J1dHRvbi5pZCA9IGAke25tfS1idXR0b25gO1xuXHRcdFx0XHRuZXdCdXR0b24udGl0bGUgPSBubTtcblx0XHRcdFx0bmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDb250ZXh0R3JvdXApO1xuXHRcdFx0XHRidXR0b25zV3JhcHBlci5wcmVwZW5kKG5ld0J1dHRvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogTWF4aW1pemUgb3IgcmVzdG9yZSB0aGUgd2luZG93LlxuICogQHJldHVybnMgTm90aGluZy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbWF4T3JSZXN0b3JlKCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoKGF3YWl0IG9wZW5maW5XaW5kb3cuZ2V0U3RhdGUoKSkgPT09IFwibm9ybWFsXCIpIHtcblx0XHRyZXR1cm4gb3BlbmZpbldpbmRvdy5tYXhpbWl6ZSgpO1xuXHR9XG5cblx0cmV0dXJuIG9wZW5maW5XaW5kb3cucmVzdG9yZSgpO1xufVxuXG4vKipcbiAqIENsb3NlIHRoZSB3aW5kb3cuXG4gKiBAcmV0dXJucyBOb3RoaW5nLlxuICovXG5hc3luYyBmdW5jdGlvbiBjbG9zZVdpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIG9wZW5maW5XaW5kb3cuY2xvc2UoKTtcbn1cblxuLyoqXG4gKiBNaW5pbWl6ZSB0aGUgd2luZG93LlxuICogQHJldHVybnMgTm90aGluZy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbWluaW1pemVXaW5kb3coKTogUHJvbWlzZTx2b2lkPiB7XG5cdHJldHVybiBvcGVuZmluV2luZG93Lm1pbmltaXplKCk7XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9