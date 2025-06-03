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
/*!***********************************************!*\
  !*** ./client/src/default-platform-window.ts ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", async () => {
    await initDom();
});
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    const platform = fin.Platform.getCurrentSync();
    const me = fin.me;
    const CONTAINER_ID = "layout-container";
    await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    const minimizeBtn = document.querySelector("#minimize-button");
    if (minimizeBtn) {
        minimizeBtn.addEventListener("click", async () => {
            await me.minimize().catch(console.error);
        });
    }
    const maximizeBtn = document.querySelector("#expand-button");
    if (maximizeBtn) {
        maximizeBtn.addEventListener("click", async () => {
            await maxOrRestore(me).catch(console.error);
        });
    }
    const closeBtn = document.querySelector("#close-button");
    if (closeBtn) {
        closeBtn.addEventListener("click", async (e) => {
            await me.close();
        });
    }
    await me.on("view-child-view-created", async (e) => {
        // The content creation rules construct the options for the view in the childOptions
        // The view has been created but not yet attached or navigated
        console.log(e);
        const viewOptions = e.childOptions;
        let originalTargetName;
        let create = true;
        // If the window.open contained a target it is the viewOptions.name,
        // the name starts internal-generated if a target wasn't specified
        if (!viewOptions.name?.startsWith("internal-generated")) {
            // This is a window.open with a target, but we can't use the original target name
            // as the view name, because this would not allow it to be re-used, so we
            // substitute a derived view name and then remove the old view later
            // Store the original view name so that we can destroy it later
            originalTargetName = viewOptions.name;
            // Set a new derived name for the view based on the original name
            viewOptions.name = `${viewOptions.name}-view`;
            try {
                // See if we can get the derived reusable view name
                const currentView = fin.View.wrapSync({ uuid: fin.me.identity.uuid, name: viewOptions.name });
                // If we have it then navigate to the requested url
                await currentView.navigate(viewOptions.url);
                // And focus it, which will switch to the tab if its not active
                await currentView.focus();
                // We have reused so no need to create
                create = false;
            }
            catch {
                // Something failed, most likely the view does not exist
                // so the create flag will still be set
            }
        }
        // The create flag is set because we couldn't find the existing view
        if (create) {
            // Create the view using the original view options, this will just attach the
            // view created for us by the content creation rules
            // Or if it had the name swapped due to a target specified in the original
            // window.open it will create a new view with the derived name
            const view = await platform.createView(viewOptions, e.target);
            // We must explicitly navigate the view created by the content creation rules
            await view.navigate(viewOptions.url);
        }
        // Cleanup the view that was created with the original target name if it had one
        // as we have substituted a view with a derived name
        if (originalTargetName) {
            try {
                const targetView = fin.View.wrapSync({ uuid: fin.me.identity.uuid, name: originalTargetName });
                await targetView.destroy();
            }
            catch { }
        }
    });
    await me.on("view-child-window-created", async (e) => {
        // Called when content is opened in a window
        console.log(e);
    });
    await me.on("view-child-content-opened-in-browser", async (e) => {
        // Called when content is opened in the browser
        console.log(e);
    });
    await me.on("view-child-content-blocked", async (e) => {
        // Called when content is blocked
        console.log(e);
    });
}
/**
 * Maximize of restore the window.
 * @param win The window to perform the action on.
 * @returns Nothing.
 */
async function maxOrRestore(win) {
    if ((await win.getState()) === "normal") {
        return win.maximize();
    }
    return win.restore();
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFFO1FBQ3BELDRDQUE0QztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvRCwrQ0FBK0M7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckQsaUNBQWlDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILEtBQUssVUFBVSxZQUFZLENBQUMsR0FBbUI7SUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDekMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY29udGVudC1jcmVhdGlvbi1ydWxlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2UtY29udGVudC1jcmVhdGlvbi1ydWxlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1jb250ZW50LWNyZWF0aW9uLXJ1bGVzLy4vY2xpZW50L3NyYy9kZWZhdWx0LXBsYXRmb3JtLXdpbmRvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGluaXREb20oKTtcbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0Y29uc3QgbWUgPSBmaW4ubWUgYXMgT3BlbkZpbi5XaW5kb3c7XG5cdGNvbnN0IENPTlRBSU5FUl9JRCA9IFwibGF5b3V0LWNvbnRhaW5lclwiO1xuXHRhd2FpdCBmaW4uUGxhdGZvcm0uTGF5b3V0LmluaXQoeyBjb250YWluZXJJZDogQ09OVEFJTkVSX0lEIH0pO1xuXG5cdGNvbnN0IG1pbmltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5pbWl6ZS1idXR0b25cIik7XG5cdGlmIChtaW5pbWl6ZUJ0bikge1xuXHRcdG1pbmltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5taW5pbWl6ZSgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgbWF4aW1pemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4cGFuZC1idXR0b25cIik7XG5cdGlmIChtYXhpbWl6ZUJ0bikge1xuXHRcdG1heGltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtYXhPclJlc3RvcmUobWUpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWJ1dHRvblwiKTtcblx0aWYgKGNsb3NlQnRuKSB7XG5cdFx0Y2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5jbG9zZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0YXdhaXQgbWUub24oXCJ2aWV3LWNoaWxkLXZpZXctY3JlYXRlZFwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdC8vIFRoZSBjb250ZW50IGNyZWF0aW9uIHJ1bGVzIGNvbnN0cnVjdCB0aGUgb3B0aW9ucyBmb3IgdGhlIHZpZXcgaW4gdGhlIGNoaWxkT3B0aW9uc1xuXHRcdC8vIFRoZSB2aWV3IGhhcyBiZWVuIGNyZWF0ZWQgYnV0IG5vdCB5ZXQgYXR0YWNoZWQgb3IgbmF2aWdhdGVkXG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3Qgdmlld09wdGlvbnMgPSBlLmNoaWxkT3B0aW9ucztcblx0XHRsZXQgb3JpZ2luYWxUYXJnZXROYW1lO1xuXHRcdGxldCBjcmVhdGUgPSB0cnVlO1xuXG5cdFx0Ly8gSWYgdGhlIHdpbmRvdy5vcGVuIGNvbnRhaW5lZCBhIHRhcmdldCBpdCBpcyB0aGUgdmlld09wdGlvbnMubmFtZSxcblx0XHQvLyB0aGUgbmFtZSBzdGFydHMgaW50ZXJuYWwtZ2VuZXJhdGVkIGlmIGEgdGFyZ2V0IHdhc24ndCBzcGVjaWZpZWRcblx0XHRpZiAoIXZpZXdPcHRpb25zLm5hbWU/LnN0YXJ0c1dpdGgoXCJpbnRlcm5hbC1nZW5lcmF0ZWRcIikpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSB3aW5kb3cub3BlbiB3aXRoIGEgdGFyZ2V0LCBidXQgd2UgY2FuJ3QgdXNlIHRoZSBvcmlnaW5hbCB0YXJnZXQgbmFtZVxuXHRcdFx0Ly8gYXMgdGhlIHZpZXcgbmFtZSwgYmVjYXVzZSB0aGlzIHdvdWxkIG5vdCBhbGxvdyBpdCB0byBiZSByZS11c2VkLCBzbyB3ZVxuXHRcdFx0Ly8gc3Vic3RpdHV0ZSBhIGRlcml2ZWQgdmlldyBuYW1lIGFuZCB0aGVuIHJlbW92ZSB0aGUgb2xkIHZpZXcgbGF0ZXJcblxuXHRcdFx0Ly8gU3RvcmUgdGhlIG9yaWdpbmFsIHZpZXcgbmFtZSBzbyB0aGF0IHdlIGNhbiBkZXN0cm95IGl0IGxhdGVyXG5cdFx0XHRvcmlnaW5hbFRhcmdldE5hbWUgPSB2aWV3T3B0aW9ucy5uYW1lO1xuXG5cdFx0XHQvLyBTZXQgYSBuZXcgZGVyaXZlZCBuYW1lIGZvciB0aGUgdmlldyBiYXNlZCBvbiB0aGUgb3JpZ2luYWwgbmFtZVxuXHRcdFx0dmlld09wdGlvbnMubmFtZSA9IGAke3ZpZXdPcHRpb25zLm5hbWV9LXZpZXdgO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBTZWUgaWYgd2UgY2FuIGdldCB0aGUgZGVyaXZlZCByZXVzYWJsZSB2aWV3IG5hbWVcblx0XHRcdFx0Y29uc3QgY3VycmVudFZpZXcgPSBmaW4uVmlldy53cmFwU3luYyh7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiB2aWV3T3B0aW9ucy5uYW1lIH0pO1xuXG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgaXQgdGhlbiBuYXZpZ2F0ZSB0byB0aGUgcmVxdWVzdGVkIHVybFxuXHRcdFx0XHRhd2FpdCBjdXJyZW50Vmlldy5uYXZpZ2F0ZSh2aWV3T3B0aW9ucy51cmwpO1xuXG5cdFx0XHRcdC8vIEFuZCBmb2N1cyBpdCwgd2hpY2ggd2lsbCBzd2l0Y2ggdG8gdGhlIHRhYiBpZiBpdHMgbm90IGFjdGl2ZVxuXHRcdFx0XHRhd2FpdCBjdXJyZW50Vmlldy5mb2N1cygpO1xuXG5cdFx0XHRcdC8vIFdlIGhhdmUgcmV1c2VkIHNvIG5vIG5lZWQgdG8gY3JlYXRlXG5cdFx0XHRcdGNyZWF0ZSA9IGZhbHNlO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdC8vIFNvbWV0aGluZyBmYWlsZWQsIG1vc3QgbGlrZWx5IHRoZSB2aWV3IGRvZXMgbm90IGV4aXN0XG5cdFx0XHRcdC8vIHNvIHRoZSBjcmVhdGUgZmxhZyB3aWxsIHN0aWxsIGJlIHNldFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFRoZSBjcmVhdGUgZmxhZyBpcyBzZXQgYmVjYXVzZSB3ZSBjb3VsZG4ndCBmaW5kIHRoZSBleGlzdGluZyB2aWV3XG5cdFx0aWYgKGNyZWF0ZSkge1xuXHRcdFx0Ly8gQ3JlYXRlIHRoZSB2aWV3IHVzaW5nIHRoZSBvcmlnaW5hbCB2aWV3IG9wdGlvbnMsIHRoaXMgd2lsbCBqdXN0IGF0dGFjaCB0aGVcblx0XHRcdC8vIHZpZXcgY3JlYXRlZCBmb3IgdXMgYnkgdGhlIGNvbnRlbnQgY3JlYXRpb24gcnVsZXNcblx0XHRcdC8vIE9yIGlmIGl0IGhhZCB0aGUgbmFtZSBzd2FwcGVkIGR1ZSB0byBhIHRhcmdldCBzcGVjaWZpZWQgaW4gdGhlIG9yaWdpbmFsXG5cdFx0XHQvLyB3aW5kb3cub3BlbiBpdCB3aWxsIGNyZWF0ZSBhIG5ldyB2aWV3IHdpdGggdGhlIGRlcml2ZWQgbmFtZVxuXHRcdFx0Y29uc3QgdmlldyA9IGF3YWl0IHBsYXRmb3JtLmNyZWF0ZVZpZXcodmlld09wdGlvbnMsIGUudGFyZ2V0KTtcblxuXHRcdFx0Ly8gV2UgbXVzdCBleHBsaWNpdGx5IG5hdmlnYXRlIHRoZSB2aWV3IGNyZWF0ZWQgYnkgdGhlIGNvbnRlbnQgY3JlYXRpb24gcnVsZXNcblx0XHRcdGF3YWl0IHZpZXcubmF2aWdhdGUodmlld09wdGlvbnMudXJsKTtcblx0XHR9XG5cblx0XHQvLyBDbGVhbnVwIHRoZSB2aWV3IHRoYXQgd2FzIGNyZWF0ZWQgd2l0aCB0aGUgb3JpZ2luYWwgdGFyZ2V0IG5hbWUgaWYgaXQgaGFkIG9uZVxuXHRcdC8vIGFzIHdlIGhhdmUgc3Vic3RpdHV0ZWQgYSB2aWV3IHdpdGggYSBkZXJpdmVkIG5hbWVcblx0XHRpZiAob3JpZ2luYWxUYXJnZXROYW1lKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB0YXJnZXRWaWV3ID0gZmluLlZpZXcud3JhcFN5bmMoeyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogb3JpZ2luYWxUYXJnZXROYW1lIH0pO1xuXHRcdFx0XHRhd2FpdCB0YXJnZXRWaWV3LmRlc3Ryb3koKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pO1xuXG5cdGF3YWl0IG1lLm9uKFwidmlldy1jaGlsZC13aW5kb3ctY3JlYXRlZFwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdC8vIENhbGxlZCB3aGVuIGNvbnRlbnQgaXMgb3BlbmVkIGluIGEgd2luZG93XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH0pO1xuXG5cdGF3YWl0IG1lLm9uKFwidmlldy1jaGlsZC1jb250ZW50LW9wZW5lZC1pbi1icm93c2VyXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0Ly8gQ2FsbGVkIHdoZW4gY29udGVudCBpcyBvcGVuZWQgaW4gdGhlIGJyb3dzZXJcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fSk7XG5cblx0YXdhaXQgbWUub24oXCJ2aWV3LWNoaWxkLWNvbnRlbnQtYmxvY2tlZFwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdC8vIENhbGxlZCB3aGVuIGNvbnRlbnQgaXMgYmxvY2tlZFxuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBNYXhpbWl6ZSBvZiByZXN0b3JlIHRoZSB3aW5kb3cuXG4gKiBAcGFyYW0gd2luIFRoZSB3aW5kb3cgdG8gcGVyZm9ybSB0aGUgYWN0aW9uIG9uLlxuICogQHJldHVybnMgTm90aGluZy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbWF4T3JSZXN0b3JlKHdpbjogT3BlbkZpbi5XaW5kb3cpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKChhd2FpdCB3aW4uZ2V0U3RhdGUoKSkgPT09IFwibm9ybWFsXCIpIHtcblx0XHRyZXR1cm4gd2luLm1heGltaXplKCk7XG5cdH1cblxuXHRyZXR1cm4gd2luLnJlc3RvcmUoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==