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
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/**
 * Launch a dialog.
 * @param viewsPreventingUnload The views that are preventing unload.
 * @param windowId The window identifier.
 * @param closeType The type of the component being closed.
 * @returns True if it was closed.
 */
async function launchDialog(viewsPreventingUnload, windowId, closeType) {
    const views = { views: viewsPreventingUnload };
    const queryString = new URLSearchParams(`views=${JSON.stringify(views)}&closeType=${closeType}`);
    const baseUrl = window.location.href.replace("provider", "dialog");
    const url = `${baseUrl}?${queryString.toString()}`;
    /**
     * Handle the close decision.
     * @param resolve The promise resolve method.
     * @param reject The promise reject method.
     */
    async function handleUserDecisionPromise(resolve, reject) {
        try {
            const dialogWindow = fin.Window.wrapSync({ uuid: fin.me.identity.uuid, name: "before-unload-dialog" });
            const provider = await fin.InterApplicationBus.Channel.create("userDecisionProvider");
            await dialogWindow.on("closed", async () => {
                await provider.destroy();
            });
            provider.register("get-user-decision", (payload) => {
                const continueWithClose = payload;
                resolve(continueWithClose);
            });
            await fin.Window.create({
                name: "before-unload-dialog",
                url,
                modalParentIdentity: windowId,
                frame: true,
                defaultHeight: closeType === "window" ? 240 : 200,
                defaultWidth: 400,
                saveWindowState: false,
                defaultCentered: true,
                maximizable: false,
                minimizable: false,
                resizable: false
            });
        }
        catch (error) {
            reject(error);
        }
    }
    return new Promise(handleUserDecisionPromise);
}
/**
 * Override the platform provider.
 * @param PlatformProvider The platform provider base class.
 * @returns The overridden platform provider.
 */
function overrideCallback(PlatformProvider) {
    /**
     * Override for the dialog.
     */
    class BeforeUnloadDialogOverride extends PlatformProvider {
        /**
         * Get the user decision for unloading a window.
         * @param payload The payload.
         * @returns The close decision.
         */
        async getUserDecisionForBeforeUnload(payload) {
            const { windowShouldClose, viewsPreventingUnload, viewsNotPreventingUnload, windowId, closeType } = payload;
            const continueWithClose = await launchDialog(viewsPreventingUnload, windowId, closeType);
            if (continueWithClose) {
                return { windowShouldClose, viewsToClose: [...viewsNotPreventingUnload, ...viewsPreventingUnload] };
            }
            return { windowShouldClose: false, viewsToClose: [] };
        }
    }
    return new BeforeUnloadDialogOverride();
}
fin.Platform.init({ overrideCallback }).catch((error) => console.error(error));


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFekYsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLENBQUMsR0FBRyx3QkFBd0IsRUFBRSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsQ0FBQztZQUNyRyxDQUFDO1lBQ0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkQsQ0FBQztLQUNEO0lBQ0QsT0FBTyxJQUFJLDBCQUEwQixFQUFFLENBQUM7QUFDekMsQ0FBQztBQUVELEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fybi1iZWZvcmUtY2xvc2luZy1kaWFsb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2Fybi1iZWZvcmUtY2xvc2luZy1kaWFsb2cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YXJuLWJlZm9yZS1jbG9zaW5nLWRpYWxvZy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcbi8qKlxuICogTGF1bmNoIGEgZGlhbG9nLlxuICogQHBhcmFtIHZpZXdzUHJldmVudGluZ1VubG9hZCBUaGUgdmlld3MgdGhhdCBhcmUgcHJldmVudGluZyB1bmxvYWQuXG4gKiBAcGFyYW0gd2luZG93SWQgVGhlIHdpbmRvdyBpZGVudGlmaWVyLlxuICogQHBhcmFtIGNsb3NlVHlwZSBUaGUgdHlwZSBvZiB0aGUgY29tcG9uZW50IGJlaW5nIGNsb3NlZC5cbiAqIEByZXR1cm5zIFRydWUgaWYgaXQgd2FzIGNsb3NlZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbGF1bmNoRGlhbG9nKFxuXHR2aWV3c1ByZXZlbnRpbmdVbmxvYWQ6IE9wZW5GaW4uSWRlbnRpdHlbXSxcblx0d2luZG93SWQ6IE9wZW5GaW4uSWRlbnRpdHksXG5cdGNsb3NlVHlwZTogXCJ3aW5kb3dcIiB8IFwidmlld1wiXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0Y29uc3Qgdmlld3MgPSB7IHZpZXdzOiB2aWV3c1ByZXZlbnRpbmdVbmxvYWQgfTtcblx0Y29uc3QgcXVlcnlTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGB2aWV3cz0ke0pTT04uc3RyaW5naWZ5KHZpZXdzKX0mY2xvc2VUeXBlPSR7Y2xvc2VUeXBlfWApO1xuXHRjb25zdCBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcInByb3ZpZGVyXCIsIFwiZGlhbG9nXCIpO1xuXHRjb25zdCB1cmwgPSBgJHtiYXNlVXJsfT8ke3F1ZXJ5U3RyaW5nLnRvU3RyaW5nKCl9YDtcblxuXHQvKipcblx0ICogSGFuZGxlIHRoZSBjbG9zZSBkZWNpc2lvbi5cblx0ICogQHBhcmFtIHJlc29sdmUgVGhlIHByb21pc2UgcmVzb2x2ZSBtZXRob2QuXG5cdCAqIEBwYXJhbSByZWplY3QgVGhlIHByb21pc2UgcmVqZWN0IG1ldGhvZC5cblx0ICovXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVVzZXJEZWNpc2lvblByb21pc2UoXG5cdFx0cmVzb2x2ZTogKGNsb3NlOiBib29sZWFuKSA9PiB2b2lkLFxuXHRcdHJlamVjdDogKGVycjogdW5rbm93bikgPT4gdm9pZFxuXHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGlhbG9nV2luZG93ID0gZmluLldpbmRvdy53cmFwU3luYyh7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiBcImJlZm9yZS11bmxvYWQtZGlhbG9nXCIgfSk7XG5cblx0XHRcdGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jcmVhdGUoXCJ1c2VyRGVjaXNpb25Qcm92aWRlclwiKTtcblxuXHRcdFx0YXdhaXQgZGlhbG9nV2luZG93Lm9uKFwiY2xvc2VkXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0YXdhaXQgcHJvdmlkZXIuZGVzdHJveSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHByb3ZpZGVyLnJlZ2lzdGVyKFwiZ2V0LXVzZXItZGVjaXNpb25cIiwgKHBheWxvYWQ6IHVua25vd24pID0+IHtcblx0XHRcdFx0Y29uc3QgY29udGludWVXaXRoQ2xvc2UgPSBwYXlsb2FkIGFzIGJvb2xlYW47XG5cdFx0XHRcdHJlc29sdmUoY29udGludWVXaXRoQ2xvc2UpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKHtcblx0XHRcdFx0bmFtZTogXCJiZWZvcmUtdW5sb2FkLWRpYWxvZ1wiLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdG1vZGFsUGFyZW50SWRlbnRpdHk6IHdpbmRvd0lkLFxuXHRcdFx0XHRmcmFtZTogdHJ1ZSxcblx0XHRcdFx0ZGVmYXVsdEhlaWdodDogY2xvc2VUeXBlID09PSBcIndpbmRvd1wiID8gMjQwIDogMjAwLFxuXHRcdFx0XHRkZWZhdWx0V2lkdGg6IDQwMCxcblx0XHRcdFx0c2F2ZVdpbmRvd1N0YXRlOiBmYWxzZSxcblx0XHRcdFx0ZGVmYXVsdENlbnRlcmVkOiB0cnVlLFxuXHRcdFx0XHRtYXhpbWl6YWJsZTogZmFsc2UsXG5cdFx0XHRcdG1pbmltaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgUHJvbWlzZShoYW5kbGVVc2VyRGVjaXNpb25Qcm9taXNlKTtcbn1cblxuLyoqXG4gKiBPdmVycmlkZSB0aGUgcGxhdGZvcm0gcHJvdmlkZXIuXG4gKiBAcGFyYW0gUGxhdGZvcm1Qcm92aWRlciBUaGUgcGxhdGZvcm0gcHJvdmlkZXIgYmFzZSBjbGFzcy5cbiAqIEByZXR1cm5zIFRoZSBvdmVycmlkZGVuIHBsYXRmb3JtIHByb3ZpZGVyLlxuICovXG5mdW5jdGlvbiBvdmVycmlkZUNhbGxiYWNrKFxuXHRQbGF0Zm9ybVByb3ZpZGVyOiBPcGVuRmluLkNvbnN0cnVjdG9yPE9wZW5GaW4uUGxhdGZvcm1Qcm92aWRlcj5cbik6IE9wZW5GaW4uUGxhdGZvcm1Qcm92aWRlciB7XG5cdC8qKlxuXHQgKiBPdmVycmlkZSBmb3IgdGhlIGRpYWxvZy5cblx0ICovXG5cdGNsYXNzIEJlZm9yZVVubG9hZERpYWxvZ092ZXJyaWRlIGV4dGVuZHMgUGxhdGZvcm1Qcm92aWRlciB7XG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSB1c2VyIGRlY2lzaW9uIGZvciB1bmxvYWRpbmcgYSB3aW5kb3cuXG5cdFx0ICogQHBhcmFtIHBheWxvYWQgVGhlIHBheWxvYWQuXG5cdFx0ICogQHJldHVybnMgVGhlIGNsb3NlIGRlY2lzaW9uLlxuXHRcdCAqL1xuXHRcdHB1YmxpYyBhc3luYyBnZXRVc2VyRGVjaXNpb25Gb3JCZWZvcmVVbmxvYWQoXG5cdFx0XHRwYXlsb2FkOiBPcGVuRmluLlZpZXdzUHJldmVudGluZ1VubG9hZFBheWxvYWRcblx0XHQpOiBQcm9taXNlPE9wZW5GaW4uQmVmb3JlVW5sb2FkVXNlckRlY2lzaW9uPiB7XG5cdFx0XHRjb25zdCB7IHdpbmRvd1Nob3VsZENsb3NlLCB2aWV3c1ByZXZlbnRpbmdVbmxvYWQsIHZpZXdzTm90UHJldmVudGluZ1VubG9hZCwgd2luZG93SWQsIGNsb3NlVHlwZSB9ID1cblx0XHRcdFx0cGF5bG9hZDtcblxuXHRcdFx0Y29uc3QgY29udGludWVXaXRoQ2xvc2UgPSBhd2FpdCBsYXVuY2hEaWFsb2codmlld3NQcmV2ZW50aW5nVW5sb2FkLCB3aW5kb3dJZCwgY2xvc2VUeXBlKTtcblxuXHRcdFx0aWYgKGNvbnRpbnVlV2l0aENsb3NlKSB7XG5cdFx0XHRcdHJldHVybiB7IHdpbmRvd1Nob3VsZENsb3NlLCB2aWV3c1RvQ2xvc2U6IFsuLi52aWV3c05vdFByZXZlbnRpbmdVbmxvYWQsIC4uLnZpZXdzUHJldmVudGluZ1VubG9hZF0gfTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7IHdpbmRvd1Nob3VsZENsb3NlOiBmYWxzZSwgdmlld3NUb0Nsb3NlOiBbXSB9O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IEJlZm9yZVVubG9hZERpYWxvZ092ZXJyaWRlKCk7XG59XG5cbmZpbi5QbGF0Zm9ybS5pbml0KHsgb3ZlcnJpZGVDYWxsYmFjayB9KS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=