/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsQ0FBQyxHQUFHLHdCQUF3QixFQUFFLEdBQUcscUJBQXFCLENBQUMsRUFBRSxDQUFDO1lBQ3JHLENBQUM7WUFDRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2RCxDQUFDO0tBQ0Q7SUFDRCxPQUFPLElBQUksMEJBQTBCLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBRUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJuLWJlZm9yZS1jbG9zaW5nLWRpYWxvZy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBMYXVuY2ggYSBkaWFsb2cuXG4gKiBAcGFyYW0gdmlld3NQcmV2ZW50aW5nVW5sb2FkIFRoZSB2aWV3cyB0aGF0IGFyZSBwcmV2ZW50aW5nIHVubG9hZC5cbiAqIEBwYXJhbSB3aW5kb3dJZCBUaGUgd2luZG93IGlkZW50aWZpZXIuXG4gKiBAcGFyYW0gY2xvc2VUeXBlIFRoZSB0eXBlIG9mIHRoZSBjb21wb25lbnQgYmVpbmcgY2xvc2VkLlxuICogQHJldHVybnMgVHJ1ZSBpZiBpdCB3YXMgY2xvc2VkLlxuICovXG5hc3luYyBmdW5jdGlvbiBsYXVuY2hEaWFsb2coXG5cdHZpZXdzUHJldmVudGluZ1VubG9hZDogT3BlbkZpbi5JZGVudGl0eVtdLFxuXHR3aW5kb3dJZDogT3BlbkZpbi5JZGVudGl0eSxcblx0Y2xvc2VUeXBlOiBcIndpbmRvd1wiIHwgXCJ2aWV3XCJcbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRjb25zdCB2aWV3cyA9IHsgdmlld3M6IHZpZXdzUHJldmVudGluZ1VubG9hZCB9O1xuXHRjb25zdCBxdWVyeVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYHZpZXdzPSR7SlNPTi5zdHJpbmdpZnkodmlld3MpfSZjbG9zZVR5cGU9JHtjbG9zZVR5cGV9YCk7XG5cdGNvbnN0IGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwicHJvdmlkZXJcIiwgXCJkaWFsb2dcIik7XG5cdGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9PyR7cXVlcnlTdHJpbmcudG9TdHJpbmcoKX1gO1xuXG5cdC8qKlxuXHQgKiBIYW5kbGUgdGhlIGNsb3NlIGRlY2lzaW9uLlxuXHQgKiBAcGFyYW0gcmVzb2x2ZSBUaGUgcHJvbWlzZSByZXNvbHZlIG1ldGhvZC5cblx0ICogQHBhcmFtIHJlamVjdCBUaGUgcHJvbWlzZSByZWplY3QgbWV0aG9kLlxuXHQgKi9cblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlVXNlckRlY2lzaW9uUHJvbWlzZShcblx0XHRyZXNvbHZlOiAoY2xvc2U6IGJvb2xlYW4pID0+IHZvaWQsXG5cdFx0cmVqZWN0OiAoZXJyOiB1bmtub3duKSA9PiB2b2lkXG5cdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBkaWFsb2dXaW5kb3cgPSBmaW4uV2luZG93LndyYXBTeW5jKHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IFwiYmVmb3JlLXVubG9hZC1kaWFsb2dcIiB9KTtcblxuXHRcdFx0Y29uc3QgcHJvdmlkZXIgPSBhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNyZWF0ZShcInVzZXJEZWNpc2lvblByb3ZpZGVyXCIpO1xuXG5cdFx0XHRhd2FpdCBkaWFsb2dXaW5kb3cub24oXCJjbG9zZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCBwcm92aWRlci5kZXN0cm95KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cHJvdmlkZXIucmVnaXN0ZXIoXCJnZXQtdXNlci1kZWNpc2lvblwiLCAocGF5bG9hZDogdW5rbm93bikgPT4ge1xuXHRcdFx0XHRjb25zdCBjb250aW51ZVdpdGhDbG9zZSA9IHBheWxvYWQgYXMgYm9vbGVhbjtcblx0XHRcdFx0cmVzb2x2ZShjb250aW51ZVdpdGhDbG9zZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgZmluLldpbmRvdy5jcmVhdGUoe1xuXHRcdFx0XHRuYW1lOiBcImJlZm9yZS11bmxvYWQtZGlhbG9nXCIsXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0bW9kYWxQYXJlbnRJZGVudGl0eTogd2luZG93SWQsXG5cdFx0XHRcdGZyYW1lOiB0cnVlLFxuXHRcdFx0XHRkZWZhdWx0SGVpZ2h0OiBjbG9zZVR5cGUgPT09IFwid2luZG93XCIgPyAyNDAgOiAyMDAsXG5cdFx0XHRcdGRlZmF1bHRXaWR0aDogNDAwLFxuXHRcdFx0XHRzYXZlV2luZG93U3RhdGU6IGZhbHNlLFxuXHRcdFx0XHRkZWZhdWx0Q2VudGVyZWQ6IHRydWUsXG5cdFx0XHRcdG1heGltaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0bWluaW1pemFibGU6IGZhbHNlLFxuXHRcdFx0XHRyZXNpemFibGU6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBQcm9taXNlKGhhbmRsZVVzZXJEZWNpc2lvblByb21pc2UpO1xufVxuXG4vKipcbiAqIE92ZXJyaWRlIHRoZSBwbGF0Zm9ybSBwcm92aWRlci5cbiAqIEBwYXJhbSBQbGF0Zm9ybVByb3ZpZGVyIFRoZSBwbGF0Zm9ybSBwcm92aWRlciBiYXNlIGNsYXNzLlxuICogQHJldHVybnMgVGhlIG92ZXJyaWRkZW4gcGxhdGZvcm0gcHJvdmlkZXIuXG4gKi9cbmZ1bmN0aW9uIG92ZXJyaWRlQ2FsbGJhY2soXG5cdFBsYXRmb3JtUHJvdmlkZXI6IE9wZW5GaW4uQ29uc3RydWN0b3I8T3BlbkZpbi5QbGF0Zm9ybVByb3ZpZGVyPlxuKTogT3BlbkZpbi5QbGF0Zm9ybVByb3ZpZGVyIHtcblx0LyoqXG5cdCAqIE92ZXJyaWRlIGZvciB0aGUgZGlhbG9nLlxuXHQgKi9cblx0Y2xhc3MgQmVmb3JlVW5sb2FkRGlhbG9nT3ZlcnJpZGUgZXh0ZW5kcyBQbGF0Zm9ybVByb3ZpZGVyIHtcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIHVzZXIgZGVjaXNpb24gZm9yIHVubG9hZGluZyBhIHdpbmRvdy5cblx0XHQgKiBAcGFyYW0gcGF5bG9hZCBUaGUgcGF5bG9hZC5cblx0XHQgKiBAcmV0dXJucyBUaGUgY2xvc2UgZGVjaXNpb24uXG5cdFx0ICovXG5cdFx0cHVibGljIGFzeW5jIGdldFVzZXJEZWNpc2lvbkZvckJlZm9yZVVubG9hZChcblx0XHRcdHBheWxvYWQ6IE9wZW5GaW4uVmlld3NQcmV2ZW50aW5nVW5sb2FkUGF5bG9hZFxuXHRcdCk6IFByb21pc2U8T3BlbkZpbi5CZWZvcmVVbmxvYWRVc2VyRGVjaXNpb24+IHtcblx0XHRcdGNvbnN0IHsgd2luZG93U2hvdWxkQ2xvc2UsIHZpZXdzUHJldmVudGluZ1VubG9hZCwgdmlld3NOb3RQcmV2ZW50aW5nVW5sb2FkLCB3aW5kb3dJZCwgY2xvc2VUeXBlIH0gPVxuXHRcdFx0XHRwYXlsb2FkO1xuXG5cdFx0XHRjb25zdCBjb250aW51ZVdpdGhDbG9zZSA9IGF3YWl0IGxhdW5jaERpYWxvZyh2aWV3c1ByZXZlbnRpbmdVbmxvYWQsIHdpbmRvd0lkLCBjbG9zZVR5cGUpO1xuXG5cdFx0XHRpZiAoY29udGludWVXaXRoQ2xvc2UpIHtcblx0XHRcdFx0cmV0dXJuIHsgd2luZG93U2hvdWxkQ2xvc2UsIHZpZXdzVG9DbG9zZTogWy4uLnZpZXdzTm90UHJldmVudGluZ1VubG9hZCwgLi4udmlld3NQcmV2ZW50aW5nVW5sb2FkXSB9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHsgd2luZG93U2hvdWxkQ2xvc2U6IGZhbHNlLCB2aWV3c1RvQ2xvc2U6IFtdIH07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgQmVmb3JlVW5sb2FkRGlhbG9nT3ZlcnJpZGUoKTtcbn1cblxuZmluLlBsYXRmb3JtLmluaXQoeyBvdmVycmlkZUNhbGxiYWNrIH0pLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9