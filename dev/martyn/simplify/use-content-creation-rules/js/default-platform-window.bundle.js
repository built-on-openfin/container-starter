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
    if (minimizeBtn) {
        minimizeBtn.addEventListener("click", async () => {
            await me.minimize().catch(console.error);
        });
    }
    const maximizeBtn = document.querySelector("#expand-button");
    if (maximizeBtn) {
        maximizeBtn.addEventListener("click", async () => {
            await maxOrRestore().catch(console.error);
        });
    }
    const closeBtn = document.querySelector("#close-button");
    if (closeBtn) {
        closeBtn.addEventListener("click", async (e) => {
            await me.close();
        });
    }
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
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NENBQTRDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9ELCtDQUErQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyRCxpQ0FBaUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNvbnRlbnQtY3JlYXRpb24tcnVsZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWNvbnRlbnQtY3JlYXRpb24tcnVsZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtY29udGVudC1jcmVhdGlvbi1ydWxlcy8uL2NsaWVudC9zcmMvZGVmYXVsdC1wbGF0Zm9ybS13aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0Y29uc3QgbWUgPSBmaW4ubWUgYXMgT3BlbkZpbi5XaW5kb3c7XG5cdGNvbnN0IENPTlRBSU5FUl9JRCA9IFwibGF5b3V0LWNvbnRhaW5lclwiO1xuXHRhd2FpdCBmaW4uUGxhdGZvcm0uTGF5b3V0LmluaXQoeyBjb250YWluZXJJZDogQ09OVEFJTkVSX0lEIH0pO1xuXG5cdGNvbnN0IG1pbmltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5pbWl6ZS1idXR0b25cIik7XG5cdGlmIChtaW5pbWl6ZUJ0bikge1xuXHRcdG1pbmltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5taW5pbWl6ZSgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgbWF4aW1pemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4cGFuZC1idXR0b25cIik7XG5cdGlmIChtYXhpbWl6ZUJ0bikge1xuXHRcdG1heGltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtYXhPclJlc3RvcmUoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1idXR0b25cIik7XG5cdGlmIChjbG9zZUJ0bikge1xuXHRcdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdFx0YXdhaXQgbWUuY2xvc2UoKTtcblx0XHR9KTtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIG1heE9yUmVzdG9yZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRpZiAoKGF3YWl0IG1lLmdldFN0YXRlKCkpID09PSBcIm5vcm1hbFwiKSB7XG5cdFx0XHRyZXR1cm4gbWUubWF4aW1pemUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWUucmVzdG9yZSgpO1xuXHR9XG5cblx0YXdhaXQgbWUub24oXCJ2aWV3LWNoaWxkLXZpZXctY3JlYXRlZFwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdC8vIFRoZSBjb250ZW50IGNyZWF0aW9uIHJ1bGVzIGNvbnN0cnVjdCB0aGUgb3B0aW9ucyBmb3IgdGhlIHZpZXcgaW4gdGhlIGNoaWxkT3B0aW9uc1xuXHRcdC8vIFRoZSB2aWV3IGhhcyBiZWVuIGNyZWF0ZWQgYnV0IG5vdCB5ZXQgYXR0YWNoZWQgb3IgbmF2aWdhdGVkXG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Y29uc3Qgdmlld09wdGlvbnM6IE9wZW5GaW4uUGxhdGZvcm1WaWV3Q3JlYXRpb25PcHRpb25zID0gZS5jaGlsZE9wdGlvbnM7XG5cdFx0bGV0IG9yaWdpbmFsVGFyZ2V0TmFtZTtcblx0XHRsZXQgY3JlYXRlID0gdHJ1ZTtcblxuXHRcdC8vIElmIHRoZSB3aW5kb3cub3BlbiBjb250YWluZWQgYSB0YXJnZXQgaXQgaXMgdGhlIHZpZXdPcHRpb25zLm5hbWUsXG5cdFx0Ly8gdGhlIG5hbWUgc3RhcnRzIGludGVybmFsLWdlbmVyYXRlZCBpZiBhIHRhcmdldCB3YXNuJ3Qgc3BlY2lmaWVkXG5cdFx0aWYgKCF2aWV3T3B0aW9ucy5uYW1lPy5zdGFydHNXaXRoKFwiaW50ZXJuYWwtZ2VuZXJhdGVkXCIpKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgd2luZG93Lm9wZW4gd2l0aCBhIHRhcmdldCwgYnV0IHdlIGNhbid0IHVzZSB0aGUgb3JpZ2luYWwgdGFyZ2V0IG5hbWVcblx0XHRcdC8vIGFzIHRoZSB2aWV3IG5hbWUsIGJlY2F1c2UgdGhpcyB3b3VsZCBub3QgYWxsb3cgaXQgdG8gYmUgcmUtdXNlZCwgc28gd2Vcblx0XHRcdC8vIHN1YnN0aXR1dGUgYSBkZXJpdmVkIHZpZXcgbmFtZSBhbmQgdGhlbiByZW1vdmUgdGhlIG9sZCB2aWV3IGxhdGVyXG5cblx0XHRcdC8vIFN0b3JlIHRoZSBvcmlnaW5hbCB2aWV3IG5hbWUgc28gdGhhdCB3ZSBjYW4gZGVzdHJveSBpdCBsYXRlclxuXHRcdFx0b3JpZ2luYWxUYXJnZXROYW1lID0gdmlld09wdGlvbnMubmFtZTtcblxuXHRcdFx0Ly8gU2V0IGEgbmV3IGRlcml2ZWQgbmFtZSBmb3IgdGhlIHZpZXcgYmFzZWQgb24gdGhlIG9yaWdpbmFsIG5hbWVcblx0XHRcdHZpZXdPcHRpb25zLm5hbWUgPSBgJHt2aWV3T3B0aW9ucy5uYW1lfS12aWV3YDtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiBnZXQgdGhlIGRlcml2ZWQgcmV1c2FibGUgdmlldyBuYW1lXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWaWV3ID0gZmluLlZpZXcud3JhcFN5bmMoeyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogdmlld09wdGlvbnMubmFtZSB9KTtcblxuXHRcdFx0XHQvLyBJZiB3ZSBoYXZlIGl0IHRoZW4gbmF2aWdhdGUgdG8gdGhlIHJlcXVlc3RlZCB1cmxcblx0XHRcdFx0YXdhaXQgY3VycmVudFZpZXcubmF2aWdhdGUodmlld09wdGlvbnMudXJsKTtcblxuXHRcdFx0XHQvLyBBbmQgZm9jdXMgaXQsIHdoaWNoIHdpbGwgc3dpdGNoIHRvIHRoZSB0YWIgaWYgaXRzIG5vdCBhY3RpdmVcblx0XHRcdFx0YXdhaXQgY3VycmVudFZpZXcuZm9jdXMoKTtcblxuXHRcdFx0XHQvLyBXZSBoYXZlIHJldXNlZCBzbyBubyBuZWVkIHRvIGNyZWF0ZVxuXHRcdFx0XHRjcmVhdGUgPSBmYWxzZTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvLyBTb21ldGhpbmcgZmFpbGVkLCBtb3N0IGxpa2VseSB0aGUgdmlldyBkb2VzIG5vdCBleGlzdFxuXHRcdFx0XHQvLyBzbyB0aGUgY3JlYXRlIGZsYWcgd2lsbCBzdGlsbCBiZSBzZXRcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBUaGUgY3JlYXRlIGZsYWcgaXMgc2V0IGJlY2F1c2Ugd2UgY291bGRuJ3QgZmluZCB0aGUgZXhpc3Rpbmcgdmlld1xuXHRcdGlmIChjcmVhdGUpIHtcblx0XHRcdC8vIENyZWF0ZSB0aGUgdmlldyB1c2luZyB0aGUgb3JpZ2luYWwgdmlldyBvcHRpb25zLCB0aGlzIHdpbGwganVzdCBhdHRhY2ggdGhlXG5cdFx0XHQvLyB2aWV3IGNyZWF0ZWQgZm9yIHVzIGJ5IHRoZSBjb250ZW50IGNyZWF0aW9uIHJ1bGVzXG5cdFx0XHQvLyBPciBpZiBpdCBoYWQgdGhlIG5hbWUgc3dhcHBlZCBkdWUgdG8gYSB0YXJnZXQgc3BlY2lmaWVkIGluIHRoZSBvcmlnaW5hbFxuXHRcdFx0Ly8gd2luZG93Lm9wZW4gaXQgd2lsbCBjcmVhdGUgYSBuZXcgdmlldyB3aXRoIHRoZSBkZXJpdmVkIG5hbWVcblx0XHRcdGNvbnN0IHZpZXcgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVWaWV3KHZpZXdPcHRpb25zLCBlLnRhcmdldCBhcyBPcGVuRmluLklkZW50aXR5KTtcblxuXHRcdFx0Ly8gV2UgbXVzdCBleHBsaWNpdGx5IG5hdmlnYXRlIHRoZSB2aWV3IGNyZWF0ZWQgYnkgdGhlIGNvbnRlbnQgY3JlYXRpb24gcnVsZXNcblx0XHRcdGF3YWl0IHZpZXcubmF2aWdhdGUodmlld09wdGlvbnMudXJsKTtcblx0XHR9XG5cblx0XHQvLyBDbGVhbnVwIHRoZSB2aWV3IHRoYXQgd2FzIGNyZWF0ZWQgd2l0aCB0aGUgb3JpZ2luYWwgdGFyZ2V0IG5hbWUgaWYgaXQgaGFkIG9uZVxuXHRcdC8vIGFzIHdlIGhhdmUgc3Vic3RpdHV0ZWQgYSB2aWV3IHdpdGggYSBkZXJpdmVkIG5hbWVcblx0XHRpZiAob3JpZ2luYWxUYXJnZXROYW1lKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB0YXJnZXRWaWV3ID0gZmluLlZpZXcud3JhcFN5bmMoeyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogb3JpZ2luYWxUYXJnZXROYW1lIH0pO1xuXHRcdFx0XHRhd2FpdCB0YXJnZXRWaWV3LmRlc3Ryb3koKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pO1xuXG5cdGF3YWl0IG1lLm9uKFwidmlldy1jaGlsZC13aW5kb3ctY3JlYXRlZFwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdC8vIENhbGxlZCB3aGVuIGNvbnRlbnQgaXMgb3BlbmVkIGluIGEgd2luZG93XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH0pO1xuXG5cdGF3YWl0IG1lLm9uKFwidmlldy1jaGlsZC1jb250ZW50LW9wZW5lZC1pbi1icm93c2VyXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0Ly8gQ2FsbGVkIHdoZW4gY29udGVudCBpcyBvcGVuZWQgaW4gdGhlIGJyb3dzZXJcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fSk7XG5cblx0YXdhaXQgbWUub24oXCJ2aWV3LWNoaWxkLWNvbnRlbnQtYmxvY2tlZFwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdC8vIENhbGxlZCB3aGVuIGNvbnRlbnQgaXMgYmxvY2tlZFxuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9