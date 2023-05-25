/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
const launchDialog = async (viewsPreventingUnload, windowId, closeType) => {
    const views = { views: viewsPreventingUnload };
    const queryString = new URLSearchParams(`views=${JSON.stringify(views)}&closeType=${closeType}`);
    const baseUrl = window.location.href.replace("provider", "dialog");
    const url = `${baseUrl}?${queryString.toString()}`;
    const handleUserDecisionPromise = async (resolve, reject) => {
        try {
            const dialogWindow = fin.Window.wrapSync({ uuid: fin.me.identity.uuid, name: "before-unload-dialog" });
            const provider = await fin.InterApplicationBus.Channel.create("userDecisionProvider");
            await dialogWindow.on("closed", async () => {
                await provider.destroy();
            });
            provider.register("get-user-decision", (continueWithClose) => {
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
    };
    return new Promise(handleUserDecisionPromise);
};
// eslint-disable-next-line max-len
const overrideCallback = (PlatformProvider) => {
    class beforeUnloadDialogOverride extends PlatformProvider {
        // eslint-disable-next-line max-len
        async getUserDecisionForBeforeUnload(payload) {
            const { windowShouldClose, viewsPreventingUnload, viewsNotPreventingUnload, windowId, closeType } = payload;
            const continueWithClose = await launchDialog(viewsPreventingUnload, windowId, closeType);
            if (continueWithClose) {
                return { windowShouldClose, viewsToClose: [...viewsNotPreventingUnload, ...viewsPreventingUnload] };
            }
            return { windowShouldClose: false, viewsToClose: [] };
        }
    }
    return new beforeUnloadDialogOverride();
};
fin.Platform.init({ overrideCallback }).catch((error) => console.error(error));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsQ0FBQzthQUNwRztZQUNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZELENBQUM7S0FDRDtJQUNELE9BQU8sSUFBSSwwQkFBMEIsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUVGLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fybi1iZWZvcmUtY2xvc2luZy1kaWFsb2cvLi9jbGllbnQvc3JjL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxhdW5jaERpYWxvZyA9IGFzeW5jICh2aWV3c1ByZXZlbnRpbmdVbmxvYWQsIHdpbmRvd0lkLCBjbG9zZVR5cGUpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcblx0Y29uc3Qgdmlld3MgPSB7IHZpZXdzOiB2aWV3c1ByZXZlbnRpbmdVbmxvYWQgfTtcblx0Y29uc3QgcXVlcnlTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGB2aWV3cz0ke0pTT04uc3RyaW5naWZ5KHZpZXdzKX0mY2xvc2VUeXBlPSR7Y2xvc2VUeXBlfWApO1xuXHRjb25zdCBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcInByb3ZpZGVyXCIsIFwiZGlhbG9nXCIpO1xuXHRjb25zdCB1cmwgPSBgJHtiYXNlVXJsfT8ke3F1ZXJ5U3RyaW5nLnRvU3RyaW5nKCl9YDtcblx0Y29uc3QgaGFuZGxlVXNlckRlY2lzaW9uUHJvbWlzZSA9IGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGlhbG9nV2luZG93ID0gZmluLldpbmRvdy53cmFwU3luYyh7IHV1aWQ6IGZpbi5tZS5pZGVudGl0eS51dWlkLCBuYW1lOiBcImJlZm9yZS11bmxvYWQtZGlhbG9nXCIgfSk7XG5cblx0XHRcdGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jcmVhdGUoXCJ1c2VyRGVjaXNpb25Qcm92aWRlclwiKTtcblxuXHRcdFx0YXdhaXQgZGlhbG9nV2luZG93Lm9uKFwiY2xvc2VkXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0YXdhaXQgcHJvdmlkZXIuZGVzdHJveSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHByb3ZpZGVyLnJlZ2lzdGVyKFwiZ2V0LXVzZXItZGVjaXNpb25cIiwgKGNvbnRpbnVlV2l0aENsb3NlOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoY29udGludWVXaXRoQ2xvc2UpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKHtcblx0XHRcdFx0bmFtZTogXCJiZWZvcmUtdW5sb2FkLWRpYWxvZ1wiLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdG1vZGFsUGFyZW50SWRlbnRpdHk6IHdpbmRvd0lkLFxuXHRcdFx0XHRmcmFtZTogdHJ1ZSxcblx0XHRcdFx0ZGVmYXVsdEhlaWdodDogY2xvc2VUeXBlID09PSBcIndpbmRvd1wiID8gMjQwIDogMjAwLFxuXHRcdFx0XHRkZWZhdWx0V2lkdGg6IDQwMCxcblx0XHRcdFx0c2F2ZVdpbmRvd1N0YXRlOiBmYWxzZSxcblx0XHRcdFx0ZGVmYXVsdENlbnRlcmVkOiB0cnVlLFxuXHRcdFx0XHRtYXhpbWl6YWJsZTogZmFsc2UsXG5cdFx0XHRcdG1pbmltaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbmV3IFByb21pc2UoaGFuZGxlVXNlckRlY2lzaW9uUHJvbWlzZSk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuY29uc3Qgb3ZlcnJpZGVDYWxsYmFjayA9IChcblx0UGxhdGZvcm1Qcm92aWRlcjogT3BlbkZpbi5Db25zdHJ1Y3RvcjxPcGVuRmluLlBsYXRmb3JtUHJvdmlkZXI+XG4pOiBPcGVuRmluLlBsYXRmb3JtUHJvdmlkZXIgPT4ge1xuXHRjbGFzcyBiZWZvcmVVbmxvYWREaWFsb2dPdmVycmlkZSBleHRlbmRzIFBsYXRmb3JtUHJvdmlkZXIge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5cdFx0cHVibGljIGFzeW5jIGdldFVzZXJEZWNpc2lvbkZvckJlZm9yZVVubG9hZChcblx0XHRcdHBheWxvYWQ6IE9wZW5GaW4uVmlld3NQcmV2ZW50aW5nVW5sb2FkUGF5bG9hZFxuXHRcdCk6IFByb21pc2U8T3BlbkZpbi5CZWZvcmVVbmxvYWRVc2VyRGVjaXNpb24+IHtcblx0XHRcdGNvbnN0IHsgd2luZG93U2hvdWxkQ2xvc2UsIHZpZXdzUHJldmVudGluZ1VubG9hZCwgdmlld3NOb3RQcmV2ZW50aW5nVW5sb2FkLCB3aW5kb3dJZCwgY2xvc2VUeXBlIH0gPVxuXHRcdFx0XHRwYXlsb2FkO1xuXG5cdFx0XHRjb25zdCBjb250aW51ZVdpdGhDbG9zZSA9IGF3YWl0IGxhdW5jaERpYWxvZyh2aWV3c1ByZXZlbnRpbmdVbmxvYWQsIHdpbmRvd0lkLCBjbG9zZVR5cGUpO1xuXG5cdFx0XHRpZiAoY29udGludWVXaXRoQ2xvc2UpIHtcblx0XHRcdFx0cmV0dXJuIHsgd2luZG93U2hvdWxkQ2xvc2UsIHZpZXdzVG9DbG9zZTogWy4uLnZpZXdzTm90UHJldmVudGluZ1VubG9hZCwgLi4udmlld3NQcmV2ZW50aW5nVW5sb2FkXSB9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHsgd2luZG93U2hvdWxkQ2xvc2U6IGZhbHNlLCB2aWV3c1RvQ2xvc2U6IFtdIH07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgYmVmb3JlVW5sb2FkRGlhbG9nT3ZlcnJpZGUoKTtcbn07XG5cbmZpbi5QbGF0Zm9ybS5pbml0KHsgb3ZlcnJpZGVDYWxsYmFjayB9KS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==