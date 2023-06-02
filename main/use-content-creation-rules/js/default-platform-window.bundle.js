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
window.addEventListener("DOMContentLoaded", async () => {
    const platform = fin.Platform.getCurrentSync();
    const me = fin.me;
    const CONTAINER_ID = "layout-container";
    await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    const minimizeBtn = document.querySelector("#minimize-button");
    minimizeBtn.addEventListener("click", async () => {
        await me.minimize().catch(console.error);
    });
    const maximizeBtn = document.querySelector("#expand-button");
    maximizeBtn.addEventListener("click", async () => {
        await maxOrRestore().catch(console.error);
    });
    const closeBtn = document.querySelector("#close-button");
    closeBtn.addEventListener("click", async (e) => {
        await me.close();
    });
    async function maxOrRestore() {
        if ((await me.getState()) === "normal") {
            return me.maximize();
        }
        return me.restore();
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
        if (!viewOptions.name.startsWith("internal-generated")) {
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
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxFQUFFLENBQUMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvRCwrQ0FBK0M7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckQsaUNBQWlDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1jb250ZW50LWNyZWF0aW9uLXJ1bGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1jb250ZW50LWNyZWF0aW9uLXJ1bGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLWNvbnRlbnQtY3JlYXRpb24tcnVsZXMvLi9jbGllbnQvc3JjL2RlZmF1bHQtcGxhdGZvcm0td2luZG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdGNvbnN0IG1lID0gZmluLm1lIGFzIE9wZW5GaW4uV2luZG93O1xuXHRjb25zdCBDT05UQUlORVJfSUQgPSBcImxheW91dC1jb250YWluZXJcIjtcblx0YXdhaXQgZmluLlBsYXRmb3JtLkxheW91dC5pbml0KHsgY29udGFpbmVySWQ6IENPTlRBSU5FUl9JRCB9KTtcblxuXHRjb25zdCBtaW5pbWl6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluaW1pemUtYnV0dG9uXCIpO1xuXHRtaW5pbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IG1lLm1pbmltaXplKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdH0pO1xuXG5cdGNvbnN0IG1heGltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtYnV0dG9uXCIpO1xuXHRtYXhpbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IG1heE9yUmVzdG9yZSgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHR9KTtcblxuXHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnV0dG9uXCIpO1xuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRhd2FpdCBtZS5jbG9zZSgpO1xuXHR9KTtcblxuXHRhc3luYyBmdW5jdGlvbiBtYXhPclJlc3RvcmUoKSB7XG5cdFx0aWYgKChhd2FpdCBtZS5nZXRTdGF0ZSgpKSA9PT0gXCJub3JtYWxcIikge1xuXHRcdFx0cmV0dXJuIG1lLm1heGltaXplKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lLnJlc3RvcmUoKTtcblx0fVxuXG5cdGF3YWl0IG1lLm9uKFwidmlldy1jaGlsZC12aWV3LWNyZWF0ZWRcIiwgYXN5bmMgKGUpID0+IHtcblx0XHQvLyBUaGUgY29udGVudCBjcmVhdGlvbiBydWxlcyBjb25zdHJ1Y3QgdGhlIG9wdGlvbnMgZm9yIHRoZSB2aWV3IGluIHRoZSBjaGlsZE9wdGlvbnNcblx0XHQvLyBUaGUgdmlldyBoYXMgYmVlbiBjcmVhdGVkIGJ1dCBub3QgeWV0IGF0dGFjaGVkIG9yIG5hdmlnYXRlZFxuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdGNvbnN0IHZpZXdPcHRpb25zOiBPcGVuRmluLlBsYXRmb3JtVmlld0NyZWF0aW9uT3B0aW9ucyA9IGUuY2hpbGRPcHRpb25zO1xuXHRcdGxldCBvcmlnaW5hbFRhcmdldE5hbWU7XG5cdFx0bGV0IGNyZWF0ZSA9IHRydWU7XG5cblx0XHQvLyBJZiB0aGUgd2luZG93Lm9wZW4gY29udGFpbmVkIGEgdGFyZ2V0IGl0IGlzIHRoZSB2aWV3T3B0aW9ucy5uYW1lLFxuXHRcdC8vIHRoZSBuYW1lIHN0YXJ0cyBpbnRlcm5hbC1nZW5lcmF0ZWQgaWYgYSB0YXJnZXQgd2Fzbid0IHNwZWNpZmllZFxuXHRcdGlmICghdmlld09wdGlvbnMubmFtZS5zdGFydHNXaXRoKFwiaW50ZXJuYWwtZ2VuZXJhdGVkXCIpKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgd2luZG93Lm9wZW4gd2l0aCBhIHRhcmdldCwgYnV0IHdlIGNhbid0IHVzZSB0aGUgb3JpZ2luYWwgdGFyZ2V0IG5hbWVcblx0XHRcdC8vIGFzIHRoZSB2aWV3IG5hbWUsIGJlY2F1c2UgdGhpcyB3b3VsZCBub3QgYWxsb3cgaXQgdG8gYmUgcmUtdXNlZCwgc28gd2Vcblx0XHRcdC8vIHN1YnN0aXR1dGUgYSBkZXJpdmVkIHZpZXcgbmFtZSBhbmQgdGhlbiByZW1vdmUgdGhlIG9sZCB2aWV3IGxhdGVyXG5cblx0XHRcdC8vIFN0b3JlIHRoZSBvcmlnaW5hbCB2aWV3IG5hbWUgc28gdGhhdCB3ZSBjYW4gZGVzdHJveSBpdCBsYXRlclxuXHRcdFx0b3JpZ2luYWxUYXJnZXROYW1lID0gdmlld09wdGlvbnMubmFtZTtcblxuXHRcdFx0Ly8gU2V0IGEgbmV3IGRlcml2ZWQgbmFtZSBmb3IgdGhlIHZpZXcgYmFzZWQgb24gdGhlIG9yaWdpbmFsIG5hbWVcblx0XHRcdHZpZXdPcHRpb25zLm5hbWUgPSBgJHt2aWV3T3B0aW9ucy5uYW1lfS12aWV3YDtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiBnZXQgdGhlIGRlcml2ZWQgcmV1c2FibGUgdmlldyBuYW1lXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWaWV3ID0gZmluLlZpZXcud3JhcFN5bmMoeyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogdmlld09wdGlvbnMubmFtZSB9KTtcblxuXHRcdFx0XHQvLyBJZiB3ZSBoYXZlIGl0IHRoZW4gbmF2aWdhdGUgdG8gdGhlIHJlcXVlc3RlZCB1cmxcblx0XHRcdFx0YXdhaXQgY3VycmVudFZpZXcubmF2aWdhdGUodmlld09wdGlvbnMudXJsKTtcblxuXHRcdFx0XHQvLyBBbmQgZm9jdXMgaXQsIHdoaWNoIHdpbGwgc3dpdGNoIHRvIHRoZSB0YWIgaWYgaXRzIG5vdCBhY3RpdmVcblx0XHRcdFx0YXdhaXQgY3VycmVudFZpZXcuZm9jdXMoKTtcblxuXHRcdFx0XHQvLyBXZSBoYXZlIHJldXNlZCBzbyBubyBuZWVkIHRvIGNyZWF0ZVxuXHRcdFx0XHRjcmVhdGUgPSBmYWxzZTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvLyBTb21ldGhpbmcgZmFpbGVkLCBtb3N0IGxpa2VseSB0aGUgdmlldyBkb2VzIG5vdCBleGlzdFxuXHRcdFx0XHQvLyBzbyB0aGUgY3JlYXRlIGZsYWcgd2lsbCBzdGlsbCBiZSBzZXRcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBUaGUgY3JlYXRlIGZsYWcgaXMgc2V0IGJlY2F1c2Ugd2UgY291bGRuJ3QgZmluZCB0aGUgZXhpc3Rpbmcgdmlld1xuXHRcdGlmIChjcmVhdGUpIHtcblx0XHRcdC8vIENyZWF0ZSB0aGUgdmlldyB1c2luZyB0aGUgb3JpZ2luYWwgdmlldyBvcHRpb25zLCB0aGlzIHdpbGwganVzdCBhdHRhY2ggdGhlXG5cdFx0XHQvLyB2aWV3IGNyZWF0ZWQgZm9yIHVzIGJ5IHRoZSBjb250ZW50IGNyZWF0aW9uIHJ1bGVzXG5cdFx0XHQvLyBPciBpZiBpdCBoYWQgdGhlIG5hbWUgc3dhcHBlZCBkdWUgdG8gYSB0YXJnZXQgc3BlY2lmaWVkIGluIHRoZSBvcmlnaW5hbFxuXHRcdFx0Ly8gd2luZG93Lm9wZW4gaXQgd2lsbCBjcmVhdGUgYSBuZXcgdmlldyB3aXRoIHRoZSBkZXJpdmVkIG5hbWVcblx0XHRcdGNvbnN0IHZpZXcgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVWaWV3KHZpZXdPcHRpb25zLCBlLnRhcmdldCBhcyBPcGVuRmluLklkZW50aXR5KTtcblxuXHRcdFx0Ly8gV2UgbXVzdCBleHBsaWNpdGx5IG5hdmlnYXRlIHRoZSB2aWV3IGNyZWF0ZWQgYnkgdGhlIGNvbnRlbnQgY3JlYXRpb24gcnVsZXNcblx0XHRcdGF3YWl0IHZpZXcubmF2aWdhdGUodmlld09wdGlvbnMudXJsKTtcblx0XHR9XG5cblx0XHQvLyBDbGVhbnVwIHRoZSB2aWV3IHRoYXQgd2FzIGNyZWF0ZWQgd2l0aCB0aGUgb3JpZ2luYWwgdGFyZ2V0IG5hbWUgaWYgaXQgaGFkIG9uZVxuXHRcdC8vIGFzIHdlIGhhdmUgc3Vic3RpdHV0ZWQgYSB2aWV3IHdpdGggYSBkZXJpdmVkIG5hbWVcblx0XHRpZiAob3JpZ2luYWxUYXJnZXROYW1lKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB0YXJnZXRWaWV3ID0gZmluLlZpZXcud3JhcFN5bmMoeyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogb3JpZ2luYWxUYXJnZXROYW1lIH0pO1xuXHRcdFx0XHRhd2FpdCB0YXJnZXRWaWV3LmRlc3Ryb3koKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pO1xuXG5cdGF3YWl0IG1lLm9uKFwidmlldy1jaGlsZC13aW5kb3ctY3JlYXRlZFwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdC8vIENhbGxlZCB3aGVuIGNvbnRlbnQgaXMgb3BlbmVkIGluIGEgd2luZG93XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH0pO1xuXG5cdGF3YWl0IG1lLm9uKFwidmlldy1jaGlsZC1jb250ZW50LW9wZW5lZC1pbi1icm93c2VyXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0Ly8gQ2FsbGVkIHdoZW4gY29udGVudCBpcyBvcGVuZWQgaW4gdGhlIGJyb3dzZXJcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fSk7XG5cblx0YXdhaXQgbWUub24oXCJ2aWV3LWNoaWxkLWNvbnRlbnQtYmxvY2tlZFwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdC8vIENhbGxlZCB3aGVuIGNvbnRlbnQgaXMgYmxvY2tlZFxuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9