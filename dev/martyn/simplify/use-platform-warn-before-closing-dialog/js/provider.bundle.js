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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxFQUFFLENBQUMsR0FBRyx3QkFBd0IsRUFBRSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsQ0FBQzthQUNwRztZQUNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZELENBQUM7S0FDRDtJQUNELE9BQU8sSUFBSSwwQkFBMEIsRUFBRSxDQUFDO0FBQ3pDLENBQUM7QUFFRCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcm4tYmVmb3JlLWNsb3NpbmctZGlhbG9nLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIExhdW5jaCBhIGRpYWxvZy5cbiAqIEBwYXJhbSB2aWV3c1ByZXZlbnRpbmdVbmxvYWQgVGhlIHZpZXdzIHRoYXQgYXJlIHByZXZlbnRpbmcgdW5sb2FkLlxuICogQHBhcmFtIHdpbmRvd0lkIFRoZSB3aW5kb3cgaWRlbnRpZmllci5cbiAqIEBwYXJhbSBjbG9zZVR5cGUgVGhlIHR5cGUgb2YgdGhlIGNvbXBvbmVudCBiZWluZyBjbG9zZWQuXG4gKiBAcmV0dXJucyBUcnVlIGlmIGl0IHdhcyBjbG9zZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaERpYWxvZyhcblx0dmlld3NQcmV2ZW50aW5nVW5sb2FkOiBPcGVuRmluLklkZW50aXR5W10sXG5cdHdpbmRvd0lkOiBPcGVuRmluLklkZW50aXR5LFxuXHRjbG9zZVR5cGU6IFwid2luZG93XCIgfCBcInZpZXdcIlxuKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdGNvbnN0IHZpZXdzID0geyB2aWV3czogdmlld3NQcmV2ZW50aW5nVW5sb2FkIH07XG5cdGNvbnN0IHF1ZXJ5U3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhgdmlld3M9JHtKU09OLnN0cmluZ2lmeSh2aWV3cyl9JmNsb3NlVHlwZT0ke2Nsb3NlVHlwZX1gKTtcblx0Y29uc3QgYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCJwcm92aWRlclwiLCBcImRpYWxvZ1wiKTtcblx0Y29uc3QgdXJsID0gYCR7YmFzZVVybH0/JHtxdWVyeVN0cmluZy50b1N0cmluZygpfWA7XG5cblx0LyoqXG5cdCAqIEhhbmRsZSB0aGUgY2xvc2UgZGVjaXNpb24uXG5cdCAqIEBwYXJhbSByZXNvbHZlIFRoZSBwcm9taXNlIHJlc29sdmUgbWV0aG9kLlxuXHQgKiBAcGFyYW0gcmVqZWN0IFRoZSBwcm9taXNlIHJlamVjdCBtZXRob2QuXG5cdCAqL1xuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVVc2VyRGVjaXNpb25Qcm9taXNlKFxuXHRcdHJlc29sdmU6IChjbG9zZTogYm9vbGVhbikgPT4gdm9pZCxcblx0XHRyZWplY3Q6IChlcnI6IHVua25vd24pID0+IHZvaWRcblx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGRpYWxvZ1dpbmRvdyA9IGZpbi5XaW5kb3cud3JhcFN5bmMoeyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogXCJiZWZvcmUtdW5sb2FkLWRpYWxvZ1wiIH0pO1xuXG5cdFx0XHRjb25zdCBwcm92aWRlciA9IGF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLkNoYW5uZWwuY3JlYXRlKFwidXNlckRlY2lzaW9uUHJvdmlkZXJcIik7XG5cblx0XHRcdGF3YWl0IGRpYWxvZ1dpbmRvdy5vbihcImNsb3NlZFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGF3YWl0IHByb3ZpZGVyLmRlc3Ryb3koKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRwcm92aWRlci5yZWdpc3RlcihcImdldC11c2VyLWRlY2lzaW9uXCIsIChwYXlsb2FkOiB1bmtub3duKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGNvbnRpbnVlV2l0aENsb3NlID0gcGF5bG9hZCBhcyBib29sZWFuO1xuXHRcdFx0XHRyZXNvbHZlKGNvbnRpbnVlV2l0aENsb3NlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRhd2FpdCBmaW4uV2luZG93LmNyZWF0ZSh7XG5cdFx0XHRcdG5hbWU6IFwiYmVmb3JlLXVubG9hZC1kaWFsb2dcIixcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRtb2RhbFBhcmVudElkZW50aXR5OiB3aW5kb3dJZCxcblx0XHRcdFx0ZnJhbWU6IHRydWUsXG5cdFx0XHRcdGRlZmF1bHRIZWlnaHQ6IGNsb3NlVHlwZSA9PT0gXCJ3aW5kb3dcIiA/IDI0MCA6IDIwMCxcblx0XHRcdFx0ZGVmYXVsdFdpZHRoOiA0MDAsXG5cdFx0XHRcdHNhdmVXaW5kb3dTdGF0ZTogZmFsc2UsXG5cdFx0XHRcdGRlZmF1bHRDZW50ZXJlZDogdHJ1ZSxcblx0XHRcdFx0bWF4aW1pemFibGU6IGZhbHNlLFxuXHRcdFx0XHRtaW5pbWl6YWJsZTogZmFsc2UsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IFByb21pc2UoaGFuZGxlVXNlckRlY2lzaW9uUHJvbWlzZSk7XG59XG5cbi8qKlxuICogT3ZlcnJpZGUgdGhlIHBsYXRmb3JtIHByb3ZpZGVyLlxuICogQHBhcmFtIFBsYXRmb3JtUHJvdmlkZXIgVGhlIHBsYXRmb3JtIHByb3ZpZGVyIGJhc2UgY2xhc3MuXG4gKiBAcmV0dXJucyBUaGUgb3ZlcnJpZGRlbiBwbGF0Zm9ybSBwcm92aWRlci5cbiAqL1xuZnVuY3Rpb24gb3ZlcnJpZGVDYWxsYmFjayhcblx0UGxhdGZvcm1Qcm92aWRlcjogT3BlbkZpbi5Db25zdHJ1Y3RvcjxPcGVuRmluLlBsYXRmb3JtUHJvdmlkZXI+XG4pOiBPcGVuRmluLlBsYXRmb3JtUHJvdmlkZXIge1xuXHQvKipcblx0ICogT3ZlcnJpZGUgZm9yIHRoZSBkaWFsb2cuXG5cdCAqL1xuXHRjbGFzcyBCZWZvcmVVbmxvYWREaWFsb2dPdmVycmlkZSBleHRlbmRzIFBsYXRmb3JtUHJvdmlkZXIge1xuXHRcdC8qKlxuXHRcdCAqIEdldCB0aGUgdXNlciBkZWNpc2lvbiBmb3IgdW5sb2FkaW5nIGEgd2luZG93LlxuXHRcdCAqIEBwYXJhbSBwYXlsb2FkIFRoZSBwYXlsb2FkLlxuXHRcdCAqIEByZXR1cm5zIFRoZSBjbG9zZSBkZWNpc2lvbi5cblx0XHQgKi9cblx0XHRwdWJsaWMgYXN5bmMgZ2V0VXNlckRlY2lzaW9uRm9yQmVmb3JlVW5sb2FkKFxuXHRcdFx0cGF5bG9hZDogT3BlbkZpbi5WaWV3c1ByZXZlbnRpbmdVbmxvYWRQYXlsb2FkXG5cdFx0KTogUHJvbWlzZTxPcGVuRmluLkJlZm9yZVVubG9hZFVzZXJEZWNpc2lvbj4ge1xuXHRcdFx0Y29uc3QgeyB3aW5kb3dTaG91bGRDbG9zZSwgdmlld3NQcmV2ZW50aW5nVW5sb2FkLCB2aWV3c05vdFByZXZlbnRpbmdVbmxvYWQsIHdpbmRvd0lkLCBjbG9zZVR5cGUgfSA9XG5cdFx0XHRcdHBheWxvYWQ7XG5cblx0XHRcdGNvbnN0IGNvbnRpbnVlV2l0aENsb3NlID0gYXdhaXQgbGF1bmNoRGlhbG9nKHZpZXdzUHJldmVudGluZ1VubG9hZCwgd2luZG93SWQsIGNsb3NlVHlwZSk7XG5cblx0XHRcdGlmIChjb250aW51ZVdpdGhDbG9zZSkge1xuXHRcdFx0XHRyZXR1cm4geyB3aW5kb3dTaG91bGRDbG9zZSwgdmlld3NUb0Nsb3NlOiBbLi4udmlld3NOb3RQcmV2ZW50aW5nVW5sb2FkLCAuLi52aWV3c1ByZXZlbnRpbmdVbmxvYWRdIH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4geyB3aW5kb3dTaG91bGRDbG9zZTogZmFsc2UsIHZpZXdzVG9DbG9zZTogW10gfTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBCZWZvcmVVbmxvYWREaWFsb2dPdmVycmlkZSgpO1xufVxuXG5maW4uUGxhdGZvcm0uaW5pdCh7IG92ZXJyaWRlQ2FsbGJhY2sgfSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=