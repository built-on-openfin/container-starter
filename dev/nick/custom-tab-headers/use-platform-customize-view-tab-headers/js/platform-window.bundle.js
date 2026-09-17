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
/*!***************************************!*\
  !*** ./client/src/platform-window.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
const BASE_URL = "https://built-on-openfin.github.io/container-starter/dev/nick/custom-tab-headers/use-platform-customize-view-tab-headers";
document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector("#layout-container");
    const bootstrapContainer = document.querySelector("#layout-bootstrap");
    if (!container || !bootstrapContainer) {
        throw new Error("A required layout container is missing.");
    }
    const layout = {
        settings: {
            tabOverflowBehavior: "scroll"
        },
        content: [
            {
                type: "stack",
                content: [
                    createView("branded-view", "Explicit icon", `${BASE_URL}/images/branded-tab.svg`),
                    createView("no-icon-view", "Hidden icon", "hide"),
                    createView("inherited-icon-view", "Inherited icon", "unset")
                ]
            }
        ]
    };
    await fin.Platform.Layout.init({ container: bootstrapContainer });
    await fin.Platform.Layout.create({
        container,
        layoutName: "custom-tab-header-layout",
        layout,
        renderCustomTabControls: (tabElement, context) => {
            const bookmarkButton = createControl("Bookmark view", "★");
            const detailsButton = createControl("Show view identity", "ⓘ");
            let bookmarked = false;
            /** Toggle the example's local bookmarked state. */
            function onBookmark() {
                bookmarked = !bookmarked;
                bookmarkButton.ariaPressed = String(bookmarked);
                showStatus(`${context.viewIdentity.name} is ${bookmarked ? "bookmarked" : "not bookmarked"}.`);
            }
            /** Display the identity supplied by the tab callback context. */
            function onDetails() {
                showStatus(`Selected view: ${context.viewIdentity.uuid}/${context.viewIdentity.name}`);
            }
            bookmarkButton.addEventListener("click", onBookmark);
            detailsButton.addEventListener("click", onDetails);
            if (context.faviconElement) {
                context.faviconElement.after(bookmarkButton);
            }
            else {
                context.titleElement.before(bookmarkButton);
            }
            if (context.closeElement) {
                context.closeElement.before(detailsButton);
            }
            else {
                context.titleElement.after(detailsButton);
            }
            return function cleanup() {
                bookmarkButton.removeEventListener("click", onBookmark);
                detailsButton.removeEventListener("click", onDetails);
                bookmarkButton.remove();
                detailsButton.remove();
            };
        }
    });
    const tabCount = container.querySelectorAll(".lm_tab").length;
    const controlCount = container.querySelectorAll(".lm_tab_custom_control").length;
    showStatus(`Ready: ${tabCount} tabs and ${controlCount} custom controls.`);
    console.info(`Custom tab header example ready with ${tabCount} tabs and ${controlCount} controls.`);
});
/**
 * Create a view component for the example layout.
 * @param name The unique view name.
 * @param title The tab title.
 * @param icon The per-view tab icon setting.
 * @returns A layout component.
 */
function createView(name, title, icon) {
    return {
        type: "component",
        componentName: "view",
        title,
        componentState: {
            name,
            url: `${BASE_URL}/html/sample-view.html?name=${encodeURIComponent(title)}`,
            icon
        }
    };
}
/**
 * Create a tab control enrolled in Core tab accessibility.
 * @param label The accessible label and tooltip.
 * @param text The visible control glyph.
 * @returns The control button.
 */
function createControl(label, text) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lm_tab_custom_control custom-tab-control";
    button.ariaLabel = label;
    button.title = label;
    button.textContent = text;
    return button;
}
/**
 * Announce the result of a tab control action.
 * @param message The message to display.
 */
function showStatus(message) {
    const status = document.querySelector("#status");
    if (status) {
        status.textContent = message;
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBUyxhQUFhLENBQUMsS0FBYSxFQUFFLElBQVk7SUFDakQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN2QixNQUFNLENBQUMsU0FBUyxHQUFHLDBDQUEwQyxDQUFDO0lBQzlELE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLE9BQU8sTUFBTSxDQUFDO0FBQ2YsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMsVUFBVSxDQUFDLE9BQWU7SUFDbEMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxTQUFTLENBQUMsQ0FBQztJQUM5RCxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ1osTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXN0b21pemUtdmlldy10YWItaGVhZGVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jdXN0b21pemUtdmlldy10YWItaGVhZGVycy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2N1c3RvbWl6ZS12aWV3LXRhYi1oZWFkZXJzLy4vY2xpZW50L3NyYy9wbGF0Zm9ybS13aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuY29uc3QgQkFTRV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2xheW91dC1jb250YWluZXJcIik7XG5cdGNvbnN0IGJvb3RzdHJhcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2xheW91dC1ib290c3RyYXBcIik7XG5cdGlmICghY29udGFpbmVyIHx8ICFib290c3RyYXBDb250YWluZXIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBIHJlcXVpcmVkIGxheW91dCBjb250YWluZXIgaXMgbWlzc2luZy5cIik7XG5cdH1cblxuXHRjb25zdCBsYXlvdXQ6IE9wZW5GaW4uTGF5b3V0T3B0aW9ucyA9IHtcblx0XHRzZXR0aW5nczoge1xuXHRcdFx0dGFiT3ZlcmZsb3dCZWhhdmlvcjogXCJzY3JvbGxcIlxuXHRcdH0sXG5cdFx0Y29udGVudDogW1xuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBcInN0YWNrXCIsXG5cdFx0XHRcdGNvbnRlbnQ6IFtcblx0XHRcdFx0XHRjcmVhdGVWaWV3KFwiYnJhbmRlZC12aWV3XCIsIFwiRXhwbGljaXQgaWNvblwiLCBgJHtCQVNFX1VSTH0vaW1hZ2VzL2JyYW5kZWQtdGFiLnN2Z2ApLFxuXHRcdFx0XHRcdGNyZWF0ZVZpZXcoXCJuby1pY29uLXZpZXdcIiwgXCJIaWRkZW4gaWNvblwiLCBcImhpZGVcIiksXG5cdFx0XHRcdFx0Y3JlYXRlVmlldyhcImluaGVyaXRlZC1pY29uLXZpZXdcIiwgXCJJbmhlcml0ZWQgaWNvblwiLCBcInVuc2V0XCIpXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRdXG5cdH07XG5cblx0YXdhaXQgZmluLlBsYXRmb3JtLkxheW91dC5pbml0KHsgY29udGFpbmVyOiBib290c3RyYXBDb250YWluZXIgfSk7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5MYXlvdXQuY3JlYXRlKHtcblx0XHRjb250YWluZXIsXG5cdFx0bGF5b3V0TmFtZTogXCJjdXN0b20tdGFiLWhlYWRlci1sYXlvdXRcIixcblx0XHRsYXlvdXQsXG5cdFx0cmVuZGVyQ3VzdG9tVGFiQ29udHJvbHM6ICh0YWJFbGVtZW50LCBjb250ZXh0KSA9PiB7XG5cdFx0XHRjb25zdCBib29rbWFya0J1dHRvbiA9IGNyZWF0ZUNvbnRyb2woXCJCb29rbWFyayB2aWV3XCIsIFwi4piFXCIpO1xuXHRcdFx0Y29uc3QgZGV0YWlsc0J1dHRvbiA9IGNyZWF0ZUNvbnRyb2woXCJTaG93IHZpZXcgaWRlbnRpdHlcIiwgXCLik5hcIik7XG5cblx0XHRcdGxldCBib29rbWFya2VkID0gZmFsc2U7XG5cdFx0XHQvKiogVG9nZ2xlIHRoZSBleGFtcGxlJ3MgbG9jYWwgYm9va21hcmtlZCBzdGF0ZS4gKi9cblx0XHRcdGZ1bmN0aW9uIG9uQm9va21hcmsoKTogdm9pZCB7XG5cdFx0XHRcdGJvb2ttYXJrZWQgPSAhYm9va21hcmtlZDtcblx0XHRcdFx0Ym9va21hcmtCdXR0b24uYXJpYVByZXNzZWQgPSBTdHJpbmcoYm9va21hcmtlZCk7XG5cdFx0XHRcdHNob3dTdGF0dXMoYCR7Y29udGV4dC52aWV3SWRlbnRpdHkubmFtZX0gaXMgJHtib29rbWFya2VkID8gXCJib29rbWFya2VkXCIgOiBcIm5vdCBib29rbWFya2VkXCJ9LmApO1xuXHRcdFx0fVxuXHRcdFx0LyoqIERpc3BsYXkgdGhlIGlkZW50aXR5IHN1cHBsaWVkIGJ5IHRoZSB0YWIgY2FsbGJhY2sgY29udGV4dC4gKi9cblx0XHRcdGZ1bmN0aW9uIG9uRGV0YWlscygpOiB2b2lkIHtcblx0XHRcdFx0c2hvd1N0YXR1cyhgU2VsZWN0ZWQgdmlldzogJHtjb250ZXh0LnZpZXdJZGVudGl0eS51dWlkfS8ke2NvbnRleHQudmlld0lkZW50aXR5Lm5hbWV9YCk7XG5cdFx0XHR9XG5cblx0XHRcdGJvb2ttYXJrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkJvb2ttYXJrKTtcblx0XHRcdGRldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uRGV0YWlscyk7XG5cblx0XHRcdGlmIChjb250ZXh0LmZhdmljb25FbGVtZW50KSB7XG5cdFx0XHRcdGNvbnRleHQuZmF2aWNvbkVsZW1lbnQuYWZ0ZXIoYm9va21hcmtCdXR0b24pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGV4dC50aXRsZUVsZW1lbnQuYmVmb3JlKGJvb2ttYXJrQnV0dG9uKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNvbnRleHQuY2xvc2VFbGVtZW50KSB7XG5cdFx0XHRcdGNvbnRleHQuY2xvc2VFbGVtZW50LmJlZm9yZShkZXRhaWxzQnV0dG9uKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRleHQudGl0bGVFbGVtZW50LmFmdGVyKGRldGFpbHNCdXR0b24pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpOiB2b2lkIHtcblx0XHRcdFx0Ym9va21hcmtCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQm9va21hcmspO1xuXHRcdFx0XHRkZXRhaWxzQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkRldGFpbHMpO1xuXHRcdFx0XHRib29rbWFya0J1dHRvbi5yZW1vdmUoKTtcblx0XHRcdFx0ZGV0YWlsc0J1dHRvbi5yZW1vdmUoKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9KTtcblxuXHRjb25zdCB0YWJDb3VudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmxtX3RhYlwiKS5sZW5ndGg7XG5cdGNvbnN0IGNvbnRyb2xDb3VudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmxtX3RhYl9jdXN0b21fY29udHJvbFwiKS5sZW5ndGg7XG5cdHNob3dTdGF0dXMoYFJlYWR5OiAke3RhYkNvdW50fSB0YWJzIGFuZCAke2NvbnRyb2xDb3VudH0gY3VzdG9tIGNvbnRyb2xzLmApO1xuXHRjb25zb2xlLmluZm8oYEN1c3RvbSB0YWIgaGVhZGVyIGV4YW1wbGUgcmVhZHkgd2l0aCAke3RhYkNvdW50fSB0YWJzIGFuZCAke2NvbnRyb2xDb3VudH0gY29udHJvbHMuYCk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGUgYSB2aWV3IGNvbXBvbmVudCBmb3IgdGhlIGV4YW1wbGUgbGF5b3V0LlxuICogQHBhcmFtIG5hbWUgVGhlIHVuaXF1ZSB2aWV3IG5hbWUuXG4gKiBAcGFyYW0gdGl0bGUgVGhlIHRhYiB0aXRsZS5cbiAqIEBwYXJhbSBpY29uIFRoZSBwZXItdmlldyB0YWIgaWNvbiBzZXR0aW5nLlxuICogQHJldHVybnMgQSBsYXlvdXQgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBjcmVhdGVWaWV3KG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgaWNvbjogT3BlbkZpbi5WaWV3VGFiSWNvbik6IE9wZW5GaW4uTGF5b3V0Q29tcG9uZW50IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBcImNvbXBvbmVudFwiLFxuXHRcdGNvbXBvbmVudE5hbWU6IFwidmlld1wiLFxuXHRcdHRpdGxlLFxuXHRcdGNvbXBvbmVudFN0YXRlOiB7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dXJsOiBgJHtCQVNFX1VSTH0vaHRtbC9zYW1wbGUtdmlldy5odG1sP25hbWU9JHtlbmNvZGVVUklDb21wb25lbnQodGl0bGUpfWAsXG5cdFx0XHRpY29uXG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHRhYiBjb250cm9sIGVucm9sbGVkIGluIENvcmUgdGFiIGFjY2Vzc2liaWxpdHkuXG4gKiBAcGFyYW0gbGFiZWwgVGhlIGFjY2Vzc2libGUgbGFiZWwgYW5kIHRvb2x0aXAuXG4gKiBAcGFyYW0gdGV4dCBUaGUgdmlzaWJsZSBjb250cm9sIGdseXBoLlxuICogQHJldHVybnMgVGhlIGNvbnRyb2wgYnV0dG9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDb250cm9sKGxhYmVsOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuXHRidXR0b24uY2xhc3NOYW1lID0gXCJsbV90YWJfY3VzdG9tX2NvbnRyb2wgY3VzdG9tLXRhYi1jb250cm9sXCI7XG5cdGJ1dHRvbi5hcmlhTGFiZWwgPSBsYWJlbDtcblx0YnV0dG9uLnRpdGxlID0gbGFiZWw7XG5cdGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG5cdHJldHVybiBidXR0b247XG59XG5cbi8qKlxuICogQW5ub3VuY2UgdGhlIHJlc3VsdCBvZiBhIHRhYiBjb250cm9sIGFjdGlvbi5cbiAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkuXG4gKi9cbmZ1bmN0aW9uIHNob3dTdGF0dXMobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3N0YXR1c1wiKTtcblx0aWYgKHN0YXR1cykge1xuXHRcdHN0YXR1cy50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==