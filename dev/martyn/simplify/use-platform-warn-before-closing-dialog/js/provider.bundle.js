/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
function overrideCallback(PlatformProvider) {
    class BeforeUnloadDialogOverride extends PlatformProvider {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2RCxDQUFDO0tBQ0Q7SUFDRCxPQUFPLElBQUksMEJBQTBCLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBRUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJuLWJlZm9yZS1jbG9zaW5nLWRpYWxvZy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gbGF1bmNoRGlhbG9nKHZpZXdzUHJldmVudGluZ1VubG9hZDogT3BlbkZpbi5JZGVudGl0eVtdLCB3aW5kb3dJZDogT3BlbkZpbi5JZGVudGl0eSwgY2xvc2VUeXBlOiBcIndpbmRvd1wiIHwgXCJ2aWV3XCIpOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0Y29uc3Qgdmlld3MgPSB7IHZpZXdzOiB2aWV3c1ByZXZlbnRpbmdVbmxvYWQgfTtcblx0Y29uc3QgcXVlcnlTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGB2aWV3cz0ke0pTT04uc3RyaW5naWZ5KHZpZXdzKX0mY2xvc2VUeXBlPSR7Y2xvc2VUeXBlfWApO1xuXHRjb25zdCBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcInByb3ZpZGVyXCIsIFwiZGlhbG9nXCIpO1xuXHRjb25zdCB1cmwgPSBgJHtiYXNlVXJsfT8ke3F1ZXJ5U3RyaW5nLnRvU3RyaW5nKCl9YDtcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlVXNlckRlY2lzaW9uUHJvbWlzZShcblx0XHRyZXNvbHZlOiAoY2xvc2U6IGJvb2xlYW4pID0+IHZvaWQsXG5cdFx0cmVqZWN0OiAoZXJyOiB1bmtub3duKSA9PiB2b2lkXG5cdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBkaWFsb2dXaW5kb3cgPSBmaW4uV2luZG93LndyYXBTeW5jKHsgdXVpZDogZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hbWU6IFwiYmVmb3JlLXVubG9hZC1kaWFsb2dcIiB9KTtcblxuXHRcdFx0Y29uc3QgcHJvdmlkZXIgPSBhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNyZWF0ZShcInVzZXJEZWNpc2lvblByb3ZpZGVyXCIpO1xuXG5cdFx0XHRhd2FpdCBkaWFsb2dXaW5kb3cub24oXCJjbG9zZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCBwcm92aWRlci5kZXN0cm95KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cHJvdmlkZXIucmVnaXN0ZXIoXCJnZXQtdXNlci1kZWNpc2lvblwiLCAocGF5bG9hZDogdW5rbm93bikgPT4ge1xuXHRcdFx0XHRjb25zdCBjb250aW51ZVdpdGhDbG9zZSA9IHBheWxvYWQgYXMgYm9vbGVhbjtcblx0XHRcdFx0cmVzb2x2ZShjb250aW51ZVdpdGhDbG9zZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0YXdhaXQgZmluLldpbmRvdy5jcmVhdGUoe1xuXHRcdFx0XHRuYW1lOiBcImJlZm9yZS11bmxvYWQtZGlhbG9nXCIsXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0bW9kYWxQYXJlbnRJZGVudGl0eTogd2luZG93SWQsXG5cdFx0XHRcdGZyYW1lOiB0cnVlLFxuXHRcdFx0XHRkZWZhdWx0SGVpZ2h0OiBjbG9zZVR5cGUgPT09IFwid2luZG93XCIgPyAyNDAgOiAyMDAsXG5cdFx0XHRcdGRlZmF1bHRXaWR0aDogNDAwLFxuXHRcdFx0XHRzYXZlV2luZG93U3RhdGU6IGZhbHNlLFxuXHRcdFx0XHRkZWZhdWx0Q2VudGVyZWQ6IHRydWUsXG5cdFx0XHRcdG1heGltaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0bWluaW1pemFibGU6IGZhbHNlLFxuXHRcdFx0XHRyZXNpemFibGU6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBQcm9taXNlKGhhbmRsZVVzZXJEZWNpc2lvblByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZUNhbGxiYWNrKFxuXHRQbGF0Zm9ybVByb3ZpZGVyOiBPcGVuRmluLkNvbnN0cnVjdG9yPE9wZW5GaW4uUGxhdGZvcm1Qcm92aWRlcj5cbik6IE9wZW5GaW4uUGxhdGZvcm1Qcm92aWRlciB7XG5cdGNsYXNzIEJlZm9yZVVubG9hZERpYWxvZ092ZXJyaWRlIGV4dGVuZHMgUGxhdGZvcm1Qcm92aWRlciB7XG5cdFx0cHVibGljIGFzeW5jIGdldFVzZXJEZWNpc2lvbkZvckJlZm9yZVVubG9hZChcblx0XHRcdHBheWxvYWQ6IE9wZW5GaW4uVmlld3NQcmV2ZW50aW5nVW5sb2FkUGF5bG9hZFxuXHRcdCk6IFByb21pc2U8T3BlbkZpbi5CZWZvcmVVbmxvYWRVc2VyRGVjaXNpb24+IHtcblx0XHRcdGNvbnN0IHsgd2luZG93U2hvdWxkQ2xvc2UsIHZpZXdzUHJldmVudGluZ1VubG9hZCwgdmlld3NOb3RQcmV2ZW50aW5nVW5sb2FkLCB3aW5kb3dJZCwgY2xvc2VUeXBlIH0gPVxuXHRcdFx0XHRwYXlsb2FkO1xuXG5cdFx0XHRjb25zdCBjb250aW51ZVdpdGhDbG9zZSA9IGF3YWl0IGxhdW5jaERpYWxvZyh2aWV3c1ByZXZlbnRpbmdVbmxvYWQsIHdpbmRvd0lkLCBjbG9zZVR5cGUpO1xuXG5cdFx0XHRpZiAoY29udGludWVXaXRoQ2xvc2UpIHtcblx0XHRcdFx0cmV0dXJuIHsgd2luZG93U2hvdWxkQ2xvc2UsIHZpZXdzVG9DbG9zZTogWy4uLnZpZXdzTm90UHJldmVudGluZ1VubG9hZCwgLi4udmlld3NQcmV2ZW50aW5nVW5sb2FkXSB9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHsgd2luZG93U2hvdWxkQ2xvc2U6IGZhbHNlLCB2aWV3c1RvQ2xvc2U6IFtdIH07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgQmVmb3JlVW5sb2FkRGlhbG9nT3ZlcnJpZGUoKTtcbn1cblxuZmluLlBsYXRmb3JtLmluaXQoeyBvdmVycmlkZUNhbGxiYWNrIH0pLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9