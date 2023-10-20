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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvRCwrQ0FBK0M7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckQsaUNBQWlDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILEtBQUssVUFBVSxZQUFZLENBQUMsR0FBbUI7SUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ3hDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3RCO0lBRUQsT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1jb250ZW50LWNyZWF0aW9uLXJ1bGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1jb250ZW50LWNyZWF0aW9uLXJ1bGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLWNvbnRlbnQtY3JlYXRpb24tcnVsZXMvLi9jbGllbnQvc3JjL2RlZmF1bHQtcGxhdGZvcm0td2luZG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0YXdhaXQgaW5pdERvbSgpO1xufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBwbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRjb25zdCBtZSA9IGZpbi5tZSBhcyBPcGVuRmluLldpbmRvdztcblx0Y29uc3QgQ09OVEFJTkVSX0lEID0gXCJsYXlvdXQtY29udGFpbmVyXCI7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5MYXlvdXQuaW5pdCh7IGNvbnRhaW5lcklkOiBDT05UQUlORVJfSUQgfSk7XG5cblx0Y29uc3QgbWluaW1pemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pbmltaXplLWJ1dHRvblwiKTtcblx0aWYgKG1pbmltaXplQnRuKSB7XG5cdFx0bWluaW1pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IG1lLm1pbmltaXplKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBtYXhpbWl6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhwYW5kLWJ1dHRvblwiKTtcblx0aWYgKG1heGltaXplQnRuKSB7XG5cdFx0bWF4aW1pemVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IG1heE9yUmVzdG9yZShtZSkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnV0dG9uXCIpO1xuXHRpZiAoY2xvc2VCdG4pIHtcblx0XHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRcdGF3YWl0IG1lLmNsb3NlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRhd2FpdCBtZS5vbihcInZpZXctY2hpbGQtdmlldy1jcmVhdGVkXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0Ly8gVGhlIGNvbnRlbnQgY3JlYXRpb24gcnVsZXMgY29uc3RydWN0IHRoZSBvcHRpb25zIGZvciB0aGUgdmlldyBpbiB0aGUgY2hpbGRPcHRpb25zXG5cdFx0Ly8gVGhlIHZpZXcgaGFzIGJlZW4gY3JlYXRlZCBidXQgbm90IHlldCBhdHRhY2hlZCBvciBuYXZpZ2F0ZWRcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRjb25zdCB2aWV3T3B0aW9ucyA9IGUuY2hpbGRPcHRpb25zO1xuXHRcdGxldCBvcmlnaW5hbFRhcmdldE5hbWU7XG5cdFx0bGV0IGNyZWF0ZSA9IHRydWU7XG5cblx0XHQvLyBJZiB0aGUgd2luZG93Lm9wZW4gY29udGFpbmVkIGEgdGFyZ2V0IGl0IGlzIHRoZSB2aWV3T3B0aW9ucy5uYW1lLFxuXHRcdC8vIHRoZSBuYW1lIHN0YXJ0cyBpbnRlcm5hbC1nZW5lcmF0ZWQgaWYgYSB0YXJnZXQgd2Fzbid0IHNwZWNpZmllZFxuXHRcdGlmICghdmlld09wdGlvbnMubmFtZT8uc3RhcnRzV2l0aChcImludGVybmFsLWdlbmVyYXRlZFwiKSkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIHdpbmRvdy5vcGVuIHdpdGggYSB0YXJnZXQsIGJ1dCB3ZSBjYW4ndCB1c2UgdGhlIG9yaWdpbmFsIHRhcmdldCBuYW1lXG5cdFx0XHQvLyBhcyB0aGUgdmlldyBuYW1lLCBiZWNhdXNlIHRoaXMgd291bGQgbm90IGFsbG93IGl0IHRvIGJlIHJlLXVzZWQsIHNvIHdlXG5cdFx0XHQvLyBzdWJzdGl0dXRlIGEgZGVyaXZlZCB2aWV3IG5hbWUgYW5kIHRoZW4gcmVtb3ZlIHRoZSBvbGQgdmlldyBsYXRlclxuXG5cdFx0XHQvLyBTdG9yZSB0aGUgb3JpZ2luYWwgdmlldyBuYW1lIHNvIHRoYXQgd2UgY2FuIGRlc3Ryb3kgaXQgbGF0ZXJcblx0XHRcdG9yaWdpbmFsVGFyZ2V0TmFtZSA9IHZpZXdPcHRpb25zLm5hbWU7XG5cblx0XHRcdC8vIFNldCBhIG5ldyBkZXJpdmVkIG5hbWUgZm9yIHRoZSB2aWV3IGJhc2VkIG9uIHRoZSBvcmlnaW5hbCBuYW1lXG5cdFx0XHR2aWV3T3B0aW9ucy5uYW1lID0gYCR7dmlld09wdGlvbnMubmFtZX0tdmlld2A7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBkZXJpdmVkIHJldXNhYmxlIHZpZXcgbmFtZVxuXHRcdFx0XHRjb25zdCBjdXJyZW50VmlldyA9IGZpbi5WaWV3LndyYXBTeW5jKHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IHZpZXdPcHRpb25zLm5hbWUgfSk7XG5cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBpdCB0aGVuIG5hdmlnYXRlIHRvIHRoZSByZXF1ZXN0ZWQgdXJsXG5cdFx0XHRcdGF3YWl0IGN1cnJlbnRWaWV3Lm5hdmlnYXRlKHZpZXdPcHRpb25zLnVybCk7XG5cblx0XHRcdFx0Ly8gQW5kIGZvY3VzIGl0LCB3aGljaCB3aWxsIHN3aXRjaCB0byB0aGUgdGFiIGlmIGl0cyBub3QgYWN0aXZlXG5cdFx0XHRcdGF3YWl0IGN1cnJlbnRWaWV3LmZvY3VzKCk7XG5cblx0XHRcdFx0Ly8gV2UgaGF2ZSByZXVzZWQgc28gbm8gbmVlZCB0byBjcmVhdGVcblx0XHRcdFx0Y3JlYXRlID0gZmFsc2U7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Ly8gU29tZXRoaW5nIGZhaWxlZCwgbW9zdCBsaWtlbHkgdGhlIHZpZXcgZG9lcyBub3QgZXhpc3Rcblx0XHRcdFx0Ly8gc28gdGhlIGNyZWF0ZSBmbGFnIHdpbGwgc3RpbGwgYmUgc2V0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGNyZWF0ZSBmbGFnIGlzIHNldCBiZWNhdXNlIHdlIGNvdWxkbid0IGZpbmQgdGhlIGV4aXN0aW5nIHZpZXdcblx0XHRpZiAoY3JlYXRlKSB7XG5cdFx0XHQvLyBDcmVhdGUgdGhlIHZpZXcgdXNpbmcgdGhlIG9yaWdpbmFsIHZpZXcgb3B0aW9ucywgdGhpcyB3aWxsIGp1c3QgYXR0YWNoIHRoZVxuXHRcdFx0Ly8gdmlldyBjcmVhdGVkIGZvciB1cyBieSB0aGUgY29udGVudCBjcmVhdGlvbiBydWxlc1xuXHRcdFx0Ly8gT3IgaWYgaXQgaGFkIHRoZSBuYW1lIHN3YXBwZWQgZHVlIHRvIGEgdGFyZ2V0IHNwZWNpZmllZCBpbiB0aGUgb3JpZ2luYWxcblx0XHRcdC8vIHdpbmRvdy5vcGVuIGl0IHdpbGwgY3JlYXRlIGEgbmV3IHZpZXcgd2l0aCB0aGUgZGVyaXZlZCBuYW1lXG5cdFx0XHRjb25zdCB2aWV3ID0gYXdhaXQgcGxhdGZvcm0uY3JlYXRlVmlldyh2aWV3T3B0aW9ucywgZS50YXJnZXQpO1xuXG5cdFx0XHQvLyBXZSBtdXN0IGV4cGxpY2l0bHkgbmF2aWdhdGUgdGhlIHZpZXcgY3JlYXRlZCBieSB0aGUgY29udGVudCBjcmVhdGlvbiBydWxlc1xuXHRcdFx0YXdhaXQgdmlldy5uYXZpZ2F0ZSh2aWV3T3B0aW9ucy51cmwpO1xuXHRcdH1cblxuXHRcdC8vIENsZWFudXAgdGhlIHZpZXcgdGhhdCB3YXMgY3JlYXRlZCB3aXRoIHRoZSBvcmlnaW5hbCB0YXJnZXQgbmFtZSBpZiBpdCBoYWQgb25lXG5cdFx0Ly8gYXMgd2UgaGF2ZSBzdWJzdGl0dXRlZCBhIHZpZXcgd2l0aCBhIGRlcml2ZWQgbmFtZVxuXHRcdGlmIChvcmlnaW5hbFRhcmdldE5hbWUpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldFZpZXcgPSBmaW4uVmlldy53cmFwU3luYyh7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiBvcmlnaW5hbFRhcmdldE5hbWUgfSk7XG5cdFx0XHRcdGF3YWl0IHRhcmdldFZpZXcuZGVzdHJveSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSk7XG5cblx0YXdhaXQgbWUub24oXCJ2aWV3LWNoaWxkLXdpbmRvdy1jcmVhdGVkXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0Ly8gQ2FsbGVkIHdoZW4gY29udGVudCBpcyBvcGVuZWQgaW4gYSB3aW5kb3dcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fSk7XG5cblx0YXdhaXQgbWUub24oXCJ2aWV3LWNoaWxkLWNvbnRlbnQtb3BlbmVkLWluLWJyb3dzZXJcIiwgYXN5bmMgKGUpID0+IHtcblx0XHQvLyBDYWxsZWQgd2hlbiBjb250ZW50IGlzIG9wZW5lZCBpbiB0aGUgYnJvd3NlclxuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9KTtcblxuXHRhd2FpdCBtZS5vbihcInZpZXctY2hpbGQtY29udGVudC1ibG9ja2VkXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0Ly8gQ2FsbGVkIHdoZW4gY29udGVudCBpcyBibG9ja2VkXG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIE1heGltaXplIG9mIHJlc3RvcmUgdGhlIHdpbmRvdy5cbiAqIEBwYXJhbSB3aW4gVGhlIHdpbmRvdyB0byBwZXJmb3JtIHRoZSBhY3Rpb24gb24uXG4gKiBAcmV0dXJucyBOb3RoaW5nLlxuICovXG5hc3luYyBmdW5jdGlvbiBtYXhPclJlc3RvcmUod2luOiBPcGVuRmluLldpbmRvdyk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoKGF3YWl0IHdpbi5nZXRTdGF0ZSgpKSA9PT0gXCJub3JtYWxcIikge1xuXHRcdHJldHVybiB3aW4ubWF4aW1pemUoKTtcblx0fVxuXG5cdHJldHVybiB3aW4ucmVzdG9yZSgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9