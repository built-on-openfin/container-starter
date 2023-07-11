/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
async function launchDialog(viewsPreventingUnload, windowId, closeType) {
    const views = { views: viewsPreventingUnload };
    const queryString = new URLSearchParams(`views=${JSON.stringify(views)}&closeType=${closeType}`);
    const baseUrl = window.location.href.replace("provider", "dialog");
    const url = `${baseUrl}?${queryString.toString()}`;
    async function handleUserDecisionPromise(resolve, reject) {
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
    }
    return new Promise(handleUserDecisionPromise);
}
function overrideCallback(PlatformProvider) {
    class beforeUnloadDialogOverride extends PlatformProvider {
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
}
fin.Platform.init({ overrideCallback }).catch((error) => console.error(error));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUUsQ0FBQztRQUN2RCxDQUFDO0tBQ0Q7SUFDRCxPQUFPLElBQUksMEJBQTBCLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBRUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJuLWJlZm9yZS1jbG9zaW5nLWRpYWxvZy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gbGF1bmNoRGlhbG9nKHZpZXdzUHJldmVudGluZ1VubG9hZCwgd2luZG93SWQsIGNsb3NlVHlwZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRjb25zdCB2aWV3cyA9IHsgdmlld3M6IHZpZXdzUHJldmVudGluZ1VubG9hZCB9O1xuXHRjb25zdCBxdWVyeVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYHZpZXdzPSR7SlNPTi5zdHJpbmdpZnkodmlld3MpfSZjbG9zZVR5cGU9JHtjbG9zZVR5cGV9YCk7XG5cdGNvbnN0IGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwicHJvdmlkZXJcIiwgXCJkaWFsb2dcIik7XG5cdGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9PyR7cXVlcnlTdHJpbmcudG9TdHJpbmcoKX1gO1xuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVVc2VyRGVjaXNpb25Qcm9taXNlKHJlc29sdmUsIHJlamVjdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBkaWFsb2dXaW5kb3cgPSBmaW4uV2luZG93LndyYXBTeW5jKHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IFwiYmVmb3JlLXVubG9hZC1kaWFsb2dcIiB9KTtcblxuXHRcdFx0Y29uc3QgcHJvdmlkZXIgPSBhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNyZWF0ZShcInVzZXJEZWNpc2lvblByb3ZpZGVyXCIpO1xuXG5cdFx0XHRhd2FpdCBkaWFsb2dXaW5kb3cub24oXCJjbG9zZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCBwcm92aWRlci5kZXN0cm95KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cHJvdmlkZXIucmVnaXN0ZXIoXCJnZXQtdXNlci1kZWNpc2lvblwiLCAoY29udGludWVXaXRoQ2xvc2U6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0cmVzb2x2ZShjb250aW51ZVdpdGhDbG9zZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgZmluLldpbmRvdy5jcmVhdGUoe1xuXHRcdFx0XHRuYW1lOiBcImJlZm9yZS11bmxvYWQtZGlhbG9nXCIsXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0bW9kYWxQYXJlbnRJZGVudGl0eTogd2luZG93SWQsXG5cdFx0XHRcdGZyYW1lOiB0cnVlLFxuXHRcdFx0XHRkZWZhdWx0SGVpZ2h0OiBjbG9zZVR5cGUgPT09IFwid2luZG93XCIgPyAyNDAgOiAyMDAsXG5cdFx0XHRcdGRlZmF1bHRXaWR0aDogNDAwLFxuXHRcdFx0XHRzYXZlV2luZG93U3RhdGU6IGZhbHNlLFxuXHRcdFx0XHRkZWZhdWx0Q2VudGVyZWQ6IHRydWUsXG5cdFx0XHRcdG1heGltaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0bWluaW1pemFibGU6IGZhbHNlLFxuXHRcdFx0XHRyZXNpemFibGU6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBQcm9taXNlKGhhbmRsZVVzZXJEZWNpc2lvblByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZUNhbGxiYWNrKFxuXHRQbGF0Zm9ybVByb3ZpZGVyOiBPcGVuRmluLkNvbnN0cnVjdG9yPE9wZW5GaW4uUGxhdGZvcm1Qcm92aWRlcj5cbik6IE9wZW5GaW4uUGxhdGZvcm1Qcm92aWRlciB7XG5cdGNsYXNzIGJlZm9yZVVubG9hZERpYWxvZ092ZXJyaWRlIGV4dGVuZHMgUGxhdGZvcm1Qcm92aWRlciB7XG5cdFx0cHVibGljIGFzeW5jIGdldFVzZXJEZWNpc2lvbkZvckJlZm9yZVVubG9hZChcblx0XHRcdHBheWxvYWQ6IE9wZW5GaW4uVmlld3NQcmV2ZW50aW5nVW5sb2FkUGF5bG9hZFxuXHRcdCk6IFByb21pc2U8T3BlbkZpbi5CZWZvcmVVbmxvYWRVc2VyRGVjaXNpb24+IHtcblx0XHRcdGNvbnN0IHsgd2luZG93U2hvdWxkQ2xvc2UsIHZpZXdzUHJldmVudGluZ1VubG9hZCwgdmlld3NOb3RQcmV2ZW50aW5nVW5sb2FkLCB3aW5kb3dJZCwgY2xvc2VUeXBlIH0gPVxuXHRcdFx0XHRwYXlsb2FkO1xuXG5cdFx0XHRjb25zdCBjb250aW51ZVdpdGhDbG9zZSA9IGF3YWl0IGxhdW5jaERpYWxvZyh2aWV3c1ByZXZlbnRpbmdVbmxvYWQsIHdpbmRvd0lkLCBjbG9zZVR5cGUpO1xuXG5cdFx0XHRpZiAoY29udGludWVXaXRoQ2xvc2UpIHtcblx0XHRcdFx0cmV0dXJuIHsgd2luZG93U2hvdWxkQ2xvc2UsIHZpZXdzVG9DbG9zZTogWy4uLnZpZXdzTm90UHJldmVudGluZ1VubG9hZCwgLi4udmlld3NQcmV2ZW50aW5nVW5sb2FkXSB9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHsgd2luZG93U2hvdWxkQ2xvc2U6IGZhbHNlLCB2aWV3c1RvQ2xvc2U6IFtdIH07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgYmVmb3JlVW5sb2FkRGlhbG9nT3ZlcnJpZGUoKTtcbn1cblxuZmluLlBsYXRmb3JtLmluaXQoeyBvdmVycmlkZUNhbGxiYWNrIH0pLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9