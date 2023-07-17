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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQyxFQUFFLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9ELCtDQUErQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyRCxpQ0FBaUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsS0FBSyxVQUFVLFlBQVksQ0FBQyxHQUFtQjtJQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDeEMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdEI7SUFFRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNvbnRlbnQtY3JlYXRpb24tcnVsZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWNvbnRlbnQtY3JlYXRpb24tcnVsZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtY29udGVudC1jcmVhdGlvbi1ydWxlcy8uL2NsaWVudC9zcmMvZGVmYXVsdC1wbGF0Zm9ybS13aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCBpbml0RG9tKCk7XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdGNvbnN0IG1lID0gZmluLm1lIGFzIE9wZW5GaW4uV2luZG93O1xuXHRjb25zdCBDT05UQUlORVJfSUQgPSBcImxheW91dC1jb250YWluZXJcIjtcblx0YXdhaXQgZmluLlBsYXRmb3JtLkxheW91dC5pbml0KHsgY29udGFpbmVySWQ6IENPTlRBSU5FUl9JRCB9KTtcblxuXHRjb25zdCBtaW5pbWl6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluaW1pemUtYnV0dG9uXCIpO1xuXHRpZiAobWluaW1pemVCdG4pIHtcblx0XHRtaW5pbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbWUubWluaW1pemUoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IG1heGltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtYnV0dG9uXCIpO1xuXHRpZiAobWF4aW1pemVCdG4pIHtcblx0XHRtYXhpbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbWF4T3JSZXN0b3JlKG1lKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1idXR0b25cIik7XG5cdGlmIChjbG9zZUJ0bikge1xuXHRcdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdFx0YXdhaXQgbWUuY2xvc2UoKTtcblx0XHR9KTtcblx0fVxuXG5cdGF3YWl0IG1lLm9uKFwidmlldy1jaGlsZC12aWV3LWNyZWF0ZWRcIiwgYXN5bmMgKGUpID0+IHtcblx0XHQvLyBUaGUgY29udGVudCBjcmVhdGlvbiBydWxlcyBjb25zdHJ1Y3QgdGhlIG9wdGlvbnMgZm9yIHRoZSB2aWV3IGluIHRoZSBjaGlsZE9wdGlvbnNcblx0XHQvLyBUaGUgdmlldyBoYXMgYmVlbiBjcmVhdGVkIGJ1dCBub3QgeWV0IGF0dGFjaGVkIG9yIG5hdmlnYXRlZFxuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IHZpZXdPcHRpb25zOiBPcGVuRmluLlBsYXRmb3JtVmlld0NyZWF0aW9uT3B0aW9ucyA9IGUuY2hpbGRPcHRpb25zO1xuXHRcdGxldCBvcmlnaW5hbFRhcmdldE5hbWU7XG5cdFx0bGV0IGNyZWF0ZSA9IHRydWU7XG5cblx0XHQvLyBJZiB0aGUgd2luZG93Lm9wZW4gY29udGFpbmVkIGEgdGFyZ2V0IGl0IGlzIHRoZSB2aWV3T3B0aW9ucy5uYW1lLFxuXHRcdC8vIHRoZSBuYW1lIHN0YXJ0cyBpbnRlcm5hbC1nZW5lcmF0ZWQgaWYgYSB0YXJnZXQgd2Fzbid0IHNwZWNpZmllZFxuXHRcdGlmICghdmlld09wdGlvbnMubmFtZT8uc3RhcnRzV2l0aChcImludGVybmFsLWdlbmVyYXRlZFwiKSkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIHdpbmRvdy5vcGVuIHdpdGggYSB0YXJnZXQsIGJ1dCB3ZSBjYW4ndCB1c2UgdGhlIG9yaWdpbmFsIHRhcmdldCBuYW1lXG5cdFx0XHQvLyBhcyB0aGUgdmlldyBuYW1lLCBiZWNhdXNlIHRoaXMgd291bGQgbm90IGFsbG93IGl0IHRvIGJlIHJlLXVzZWQsIHNvIHdlXG5cdFx0XHQvLyBzdWJzdGl0dXRlIGEgZGVyaXZlZCB2aWV3IG5hbWUgYW5kIHRoZW4gcmVtb3ZlIHRoZSBvbGQgdmlldyBsYXRlclxuXG5cdFx0XHQvLyBTdG9yZSB0aGUgb3JpZ2luYWwgdmlldyBuYW1lIHNvIHRoYXQgd2UgY2FuIGRlc3Ryb3kgaXQgbGF0ZXJcblx0XHRcdG9yaWdpbmFsVGFyZ2V0TmFtZSA9IHZpZXdPcHRpb25zLm5hbWU7XG5cblx0XHRcdC8vIFNldCBhIG5ldyBkZXJpdmVkIG5hbWUgZm9yIHRoZSB2aWV3IGJhc2VkIG9uIHRoZSBvcmlnaW5hbCBuYW1lXG5cdFx0XHR2aWV3T3B0aW9ucy5uYW1lID0gYCR7dmlld09wdGlvbnMubmFtZX0tdmlld2A7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBkZXJpdmVkIHJldXNhYmxlIHZpZXcgbmFtZVxuXHRcdFx0XHRjb25zdCBjdXJyZW50VmlldyA9IGZpbi5WaWV3LndyYXBTeW5jKHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IHZpZXdPcHRpb25zLm5hbWUgfSk7XG5cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBpdCB0aGVuIG5hdmlnYXRlIHRvIHRoZSByZXF1ZXN0ZWQgdXJsXG5cdFx0XHRcdGF3YWl0IGN1cnJlbnRWaWV3Lm5hdmlnYXRlKHZpZXdPcHRpb25zLnVybCk7XG5cblx0XHRcdFx0Ly8gQW5kIGZvY3VzIGl0LCB3aGljaCB3aWxsIHN3aXRjaCB0byB0aGUgdGFiIGlmIGl0cyBub3QgYWN0aXZlXG5cdFx0XHRcdGF3YWl0IGN1cnJlbnRWaWV3LmZvY3VzKCk7XG5cblx0XHRcdFx0Ly8gV2UgaGF2ZSByZXVzZWQgc28gbm8gbmVlZCB0byBjcmVhdGVcblx0XHRcdFx0Y3JlYXRlID0gZmFsc2U7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Ly8gU29tZXRoaW5nIGZhaWxlZCwgbW9zdCBsaWtlbHkgdGhlIHZpZXcgZG9lcyBub3QgZXhpc3Rcblx0XHRcdFx0Ly8gc28gdGhlIGNyZWF0ZSBmbGFnIHdpbGwgc3RpbGwgYmUgc2V0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGNyZWF0ZSBmbGFnIGlzIHNldCBiZWNhdXNlIHdlIGNvdWxkbid0IGZpbmQgdGhlIGV4aXN0aW5nIHZpZXdcblx0XHRpZiAoY3JlYXRlKSB7XG5cdFx0XHQvLyBDcmVhdGUgdGhlIHZpZXcgdXNpbmcgdGhlIG9yaWdpbmFsIHZpZXcgb3B0aW9ucywgdGhpcyB3aWxsIGp1c3QgYXR0YWNoIHRoZVxuXHRcdFx0Ly8gdmlldyBjcmVhdGVkIGZvciB1cyBieSB0aGUgY29udGVudCBjcmVhdGlvbiBydWxlc1xuXHRcdFx0Ly8gT3IgaWYgaXQgaGFkIHRoZSBuYW1lIHN3YXBwZWQgZHVlIHRvIGEgdGFyZ2V0IHNwZWNpZmllZCBpbiB0aGUgb3JpZ2luYWxcblx0XHRcdC8vIHdpbmRvdy5vcGVuIGl0IHdpbGwgY3JlYXRlIGEgbmV3IHZpZXcgd2l0aCB0aGUgZGVyaXZlZCBuYW1lXG5cdFx0XHRjb25zdCB2aWV3ID0gYXdhaXQgcGxhdGZvcm0uY3JlYXRlVmlldyh2aWV3T3B0aW9ucywgZS50YXJnZXQgYXMgT3BlbkZpbi5JZGVudGl0eSk7XG5cblx0XHRcdC8vIFdlIG11c3QgZXhwbGljaXRseSBuYXZpZ2F0ZSB0aGUgdmlldyBjcmVhdGVkIGJ5IHRoZSBjb250ZW50IGNyZWF0aW9uIHJ1bGVzXG5cdFx0XHRhd2FpdCB2aWV3Lm5hdmlnYXRlKHZpZXdPcHRpb25zLnVybCk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xlYW51cCB0aGUgdmlldyB0aGF0IHdhcyBjcmVhdGVkIHdpdGggdGhlIG9yaWdpbmFsIHRhcmdldCBuYW1lIGlmIGl0IGhhZCBvbmVcblx0XHQvLyBhcyB3ZSBoYXZlIHN1YnN0aXR1dGVkIGEgdmlldyB3aXRoIGEgZGVyaXZlZCBuYW1lXG5cdFx0aWYgKG9yaWdpbmFsVGFyZ2V0TmFtZSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0VmlldyA9IGZpbi5WaWV3LndyYXBTeW5jKHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IG9yaWdpbmFsVGFyZ2V0TmFtZSB9KTtcblx0XHRcdFx0YXdhaXQgdGFyZ2V0Vmlldy5kZXN0cm95KCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KTtcblxuXHRhd2FpdCBtZS5vbihcInZpZXctY2hpbGQtd2luZG93LWNyZWF0ZWRcIiwgYXN5bmMgKGUpID0+IHtcblx0XHQvLyBDYWxsZWQgd2hlbiBjb250ZW50IGlzIG9wZW5lZCBpbiBhIHdpbmRvd1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9KTtcblxuXHRhd2FpdCBtZS5vbihcInZpZXctY2hpbGQtY29udGVudC1vcGVuZWQtaW4tYnJvd3NlclwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdC8vIENhbGxlZCB3aGVuIGNvbnRlbnQgaXMgb3BlbmVkIGluIHRoZSBicm93c2VyXG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH0pO1xuXG5cdGF3YWl0IG1lLm9uKFwidmlldy1jaGlsZC1jb250ZW50LWJsb2NrZWRcIiwgYXN5bmMgKGUpID0+IHtcblx0XHQvLyBDYWxsZWQgd2hlbiBjb250ZW50IGlzIGJsb2NrZWRcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fSk7XG59XG5cbi8qKlxuICogTWF4aW1pemUgb2YgcmVzdG9yZSB0aGUgd2luZG93LlxuICogQHBhcmFtIHdpbiBUaGUgd2luZG93IHRvIHBlcmZvcm0gdGhlIGFjdGlvbiBvbi5cbiAqIEByZXR1cm5zIE5vdGhpbmcuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG1heE9yUmVzdG9yZSh3aW46IE9wZW5GaW4uV2luZG93KTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmICgoYXdhaXQgd2luLmdldFN0YXRlKCkpID09PSBcIm5vcm1hbFwiKSB7XG5cdFx0cmV0dXJuIHdpbi5tYXhpbWl6ZSgpO1xuXHR9XG5cblx0cmV0dXJuIHdpbi5yZXN0b3JlKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=