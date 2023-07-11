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
    if (title && minBtn && maxBtn && closeBtn) {
        title.innerHTML = fin.me.identity.uuid;
        minBtn.addEventListener("click", minimizeWindow);
        maxBtn.addEventListener("click", maxOrRestore);
        closeBtn.addEventListener("click", closeWindow);
    }
    await addContextGroupButtons();
}
window.addEventListener("DOMContentLoaded", async () => {
    await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    await setupTitleBar();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUV6RCxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRTtRQUMxQyxLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUV2QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDL0MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztLQUNoRDtJQUVELE1BQU0sc0JBQXNCLEVBQUUsQ0FBQztBQUNoQyxDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3RELE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUQsTUFBTSxhQUFhLEVBQUUsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2V0dXAtY3Jvc3MtcGxhdGZvcm0taW50ZXJvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NldHVwLWNyb3NzLXBsYXRmb3JtLWludGVyb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXR1cC1jcm9zcy1wbGF0Zm9ybS1pbnRlcm9wLy4vY2xpZW50L3NyYy93aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSB7IFBsYXRmb3JtQ29udGV4dEdyb3VwcywgUGxhdGZvcm1Db250ZXh0R3JvdXAgfSBmcm9tIFwiLi9zaGFwZXNcIjtcblxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9JRCA9IFwibGF5b3V0LWNvbnRhaW5lclwiO1xuY29uc3Qgb3BlbmZpbldpbmRvdzogT3BlbkZpbi5XaW5kb3cgPSBmaW4uV2luZG93LmdldEN1cnJlbnRTeW5jKCk7XG5jb25zdCBvcGVuZmluQXBwbGljYXRpb246IE9wZW5GaW4uQXBwbGljYXRpb24gPSBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKTtcblxubGV0IGxhc3RGb2N1c2VkVmlldzogT3BlbkZpbi5JZGVudGl0eTtcblxub3BlbmZpbkFwcGxpY2F0aW9uXG5cdC5vbihcInZpZXctZm9jdXNlZFwiLCAodmlld0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0bGFzdEZvY3VzZWRWaWV3ID0gdmlld0V2ZW50LnZpZXdJZGVudGl0eTtcblx0fSlcblx0LmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG4vKipcbiAqIEBmdW5jdGlvbiBjaGFuZ2VDb250ZXh0R3JvdXBcbiAqIEBwYXJhbSBldmVudCAtIERPTSBjbGljayBldmVudCB0aGF0IGlzIHBhc3NlZCBpbiB0byB0aGUgYnV0dG9uIGNsaWNrIGV2ZW50IGZyb20gYGFkZENvbnRleHRHcm91cEJ1dHRvbnNgIGxvY2FsIGBuZXdCdXR0b25gIHZhcmlhYmxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEpvaW5zIGEgY29udGV4dCBncm91cCBieSBwYXNzaW5nIGluIHRoZSB0b3AtbGV2ZWwgdmFyaWFibGUgYGxhc3RGb2N1c2VkVmlld2AgYXMgdGhlIGB0YXJnZXRgIHBhcmFtZXRlciBvZiB0aGUgYGpvaW5Db250ZXh0R3JvdXBgIGZ1bmN0aW9uLlxuICovXG5cbmFzeW5jIGZ1bmN0aW9uIGNoYW5nZUNvbnRleHRHcm91cChldmVudDogRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc2VsZWN0ZWRDb2xvckVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRjb25zdCBjb2xvcjogc3RyaW5nID0gc2VsZWN0ZWRDb2xvckVsZW1lbnQudGl0bGU7XG5cdGF3YWl0IGZpbi5tZS5pbnRlcm9wLmpvaW5Db250ZXh0R3JvdXAoY29sb3IsIGxhc3RGb2N1c2VkVmlldyk7XG5cdGNvbnN0IGNvbnRleHRHcm91cHM6IFBsYXRmb3JtQ29udGV4dEdyb3VwcyA9IGF3YWl0IGZpbi5tZS5pbnRlcm9wLmdldENvbnRleHRHcm91cHMoKTtcblx0Y29uc3QgZm9jdXNlZFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YWItJHtsYXN0Rm9jdXNlZFZpZXcubmFtZX1gKTtcblx0aWYgKGZvY3VzZWRUYWIpIHtcblx0XHRmb2N1c2VkVGFiLmNsYXNzTGlzdC5yZW1vdmUoXG5cdFx0XHQuLi5jb250ZXh0R3JvdXBzLm1hcCgoeyBkaXNwbGF5TWV0YWRhdGEgfTogUGxhdGZvcm1Db250ZXh0R3JvdXApID0+IGAke2Rpc3BsYXlNZXRhZGF0YT8ubmFtZX0tY2hhbm5lbGApXG5cdFx0KTtcblx0fVxuXHRjb25zdCBmb2N1c2VkVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YWItJHtsYXN0Rm9jdXNlZFZpZXcubmFtZX1gKTtcblx0aWYgKGZvY3VzZWRWaWV3KSB7XG5cdFx0Zm9jdXNlZFZpZXcuY2xhc3NMaXN0LmFkZChgJHtjb2xvcn0tY2hhbm5lbGApO1xuXHR9XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uIGFkZENvbnRleHRHcm91cEJ1dHRvbnNcbiAqIEBkZXNjcmlwdGlvblxuICogMS4gUmV0cmlldmVzIGEgUGxhdGZvcm0ncyBpbnRlcm9wIGNvbnRleHQgZ3JvdXBzLlxuICogMi4gSXRlcmF0ZXMgYWxsIGNvbnRleHQgZ3JvdXBzIGFuZCBjcmVhdGVzIGEgY29ycmVzcG9uZGluZyBidXR0b24gcGVyIGNvbnRleHQgZ3JvdXAgKGNvbG9yIGNoYW5uZWwpLlxuICogMy4gQWRkcyBhIGNsaWNrIGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uIHdpdGggdGhlIGBjaGFuZ2VDb250ZXh0R3JvdXBgIGZ1bmN0aW9uIGFzIHRoZSBsaXN0ZW5lciBjYWxsYmFjay5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYWRkQ29udGV4dEdyb3VwQnV0dG9ucygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY29udGV4dEdyb3VwczogUGxhdGZvcm1Db250ZXh0R3JvdXBzID0gYXdhaXQgZmluLm1lLmludGVyb3AuZ2V0Q29udGV4dEdyb3VwcygpO1xuXHRjb25zdCB3aW5kb3dGcmFtZVN0eWxlU2hlZXQ6IENTU1N0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcblx0Y29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNidXR0b25zLXdyYXBwZXJcIik7XG5cdGlmIChidXR0b25zV3JhcHBlcikge1xuXHRcdGZvciAoY29uc3Qgc3lzdGVtQ2hhbm5lbCBvZiBjb250ZXh0R3JvdXBzKSB7XG5cdFx0XHRjb25zdCBubSA9IHN5c3RlbUNoYW5uZWwuZGlzcGxheU1ldGFkYXRhPy5uYW1lO1xuXHRcdFx0Y29uc3QgY29sID0gc3lzdGVtQ2hhbm5lbC5kaXNwbGF5TWV0YWRhdGE/LmNvbG9yO1xuXHRcdFx0aWYgKG5tICYmIGNvbCkge1xuXHRcdFx0XHR3aW5kb3dGcmFtZVN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgLiR7bm19LWNoYW5uZWwgeyBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7Y29sfSAhaW1wb3J0YW50O31gKTtcblx0XHRcdFx0d2luZG93RnJhbWVTdHlsZVNoZWV0Lmluc2VydFJ1bGUoYCMke25tfS1idXR0b246YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbH19YCk7XG5cdFx0XHRcdGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRcdG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuXHRcdFx0XHRuZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcImNoYW5uZWwtYnV0dG9uXCIpO1xuXHRcdFx0XHRuZXdCdXR0b24uaWQgPSBgJHtubX0tYnV0dG9uYDtcblx0XHRcdFx0bmV3QnV0dG9uLnRpdGxlID0gbm07XG5cdFx0XHRcdG5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ29udGV4dEdyb3VwKTtcblx0XHRcdFx0YnV0dG9uc1dyYXBwZXIucHJlcGVuZChuZXdCdXR0b24pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBtYXhPclJlc3RvcmUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmICgoYXdhaXQgb3BlbmZpbldpbmRvdy5nZXRTdGF0ZSgpKSA9PT0gXCJub3JtYWxcIikge1xuXHRcdHJldHVybiBvcGVuZmluV2luZG93Lm1heGltaXplKCk7XG5cdH1cblxuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5yZXN0b3JlKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNsb3NlV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gb3BlbmZpbldpbmRvdy5jbG9zZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBtaW5pbWl6ZVdpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIG9wZW5maW5XaW5kb3cubWluaW1pemUoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0dXBUaXRsZUJhcigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuXHRjb25zdCBtaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pbmltaXplLWJ1dHRvblwiKTtcblx0Y29uc3QgbWF4QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtYnV0dG9uXCIpO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnV0dG9uXCIpO1xuXG5cdGlmICh0aXRsZSAmJiBtaW5CdG4gJiYgbWF4QnRuICYmIGNsb3NlQnRuKSB7XG5cdFx0dGl0bGUuaW5uZXJIVE1MID0gZmluLm1lLmlkZW50aXR5LnV1aWQ7XG5cblx0XHRtaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1pbmltaXplV2luZG93KTtcblx0XHRtYXhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1heE9yUmVzdG9yZSk7XG5cdFx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlV2luZG93KTtcblx0fVxuXG5cdGF3YWl0IGFkZENvbnRleHRHcm91cEJ1dHRvbnMoKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0YXdhaXQgZmluLlBsYXRmb3JtLkxheW91dC5pbml0KHsgY29udGFpbmVySWQ6IENPTlRBSU5FUl9JRCB9KTtcblx0YXdhaXQgc2V0dXBUaXRsZUJhcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=