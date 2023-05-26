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
const overrideCallback = (PlatformProvider) => {
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
};
fin.Platform.init({ overrideCallback }).catch((error) => console.error(error));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxZQUFZLEdBQUcsS0FBSyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQW9CLEVBQUU7SUFDM0YsTUFBTSxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsQ0FBQztJQUMvQyxNQUFNLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNqRyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0lBQ25ELE1BQU0seUJBQXlCLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUMzRCxJQUFJO1lBQ0gsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7WUFFdkcsTUFBTSxRQUFRLEdBQUcsTUFBTSxHQUFHLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRXRGLE1BQU0sWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQzFDLE1BQU0sUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBRUgsUUFBUSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLGlCQUEwQixFQUFFLEVBQUU7Z0JBQ3JFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsR0FBRztnQkFDSCxtQkFBbUIsRUFBRSxRQUFRO2dCQUM3QixLQUFLLEVBQUUsSUFBSTtnQkFDWCxhQUFhLEVBQUUsU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO2dCQUNqRCxZQUFZLEVBQUUsR0FBRztnQkFDakIsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixXQUFXLEVBQUUsS0FBSztnQkFDbEIsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLFNBQVMsRUFBRSxLQUFLO2FBQ2hCLENBQUMsQ0FBQztTQUNIO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUMsQ0FBQztJQUNGLE9BQU8sSUFBSSxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLENBQ3hCLGdCQUErRCxFQUNwQyxFQUFFO0lBQzdCLE1BQU0sMEJBQTJCLFNBQVEsZ0JBQWdCO1FBQ2pELEtBQUssQ0FBQyw4QkFBOEIsQ0FDMUMsT0FBNkM7WUFFN0MsTUFBTSxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FDaEcsT0FBTyxDQUFDO1lBRVQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFekYsSUFBSSxpQkFBaUIsRUFBRTtnQkFDdEIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxDQUFDLEdBQUcsd0JBQXdCLEVBQUUsR0FBRyxxQkFBcUIsQ0FBQyxFQUFFLENBQUM7YUFDcEc7WUFDRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2RCxDQUFDO0tBQ0Q7SUFDRCxPQUFPLElBQUksMEJBQTBCLEVBQUUsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFRixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcm4tYmVmb3JlLWNsb3NpbmctZGlhbG9nLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsYXVuY2hEaWFsb2cgPSBhc3luYyAodmlld3NQcmV2ZW50aW5nVW5sb2FkLCB3aW5kb3dJZCwgY2xvc2VUeXBlKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG5cdGNvbnN0IHZpZXdzID0geyB2aWV3czogdmlld3NQcmV2ZW50aW5nVW5sb2FkIH07XG5cdGNvbnN0IHF1ZXJ5U3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhgdmlld3M9JHtKU09OLnN0cmluZ2lmeSh2aWV3cyl9JmNsb3NlVHlwZT0ke2Nsb3NlVHlwZX1gKTtcblx0Y29uc3QgYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCJwcm92aWRlclwiLCBcImRpYWxvZ1wiKTtcblx0Y29uc3QgdXJsID0gYCR7YmFzZVVybH0/JHtxdWVyeVN0cmluZy50b1N0cmluZygpfWA7XG5cdGNvbnN0IGhhbmRsZVVzZXJEZWNpc2lvblByb21pc2UgPSBhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGRpYWxvZ1dpbmRvdyA9IGZpbi5XaW5kb3cud3JhcFN5bmMoeyB1dWlkOiBmaW4ubWUuaWRlbnRpdHkudXVpZCwgbmFtZTogXCJiZWZvcmUtdW5sb2FkLWRpYWxvZ1wiIH0pO1xuXG5cdFx0XHRjb25zdCBwcm92aWRlciA9IGF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLkNoYW5uZWwuY3JlYXRlKFwidXNlckRlY2lzaW9uUHJvdmlkZXJcIik7XG5cblx0XHRcdGF3YWl0IGRpYWxvZ1dpbmRvdy5vbihcImNsb3NlZFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGF3YWl0IHByb3ZpZGVyLmRlc3Ryb3koKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRwcm92aWRlci5yZWdpc3RlcihcImdldC11c2VyLWRlY2lzaW9uXCIsIChjb250aW51ZVdpdGhDbG9zZTogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKGNvbnRpbnVlV2l0aENsb3NlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRhd2FpdCBmaW4uV2luZG93LmNyZWF0ZSh7XG5cdFx0XHRcdG5hbWU6IFwiYmVmb3JlLXVubG9hZC1kaWFsb2dcIixcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRtb2RhbFBhcmVudElkZW50aXR5OiB3aW5kb3dJZCxcblx0XHRcdFx0ZnJhbWU6IHRydWUsXG5cdFx0XHRcdGRlZmF1bHRIZWlnaHQ6IGNsb3NlVHlwZSA9PT0gXCJ3aW5kb3dcIiA/IDI0MCA6IDIwMCxcblx0XHRcdFx0ZGVmYXVsdFdpZHRoOiA0MDAsXG5cdFx0XHRcdHNhdmVXaW5kb3dTdGF0ZTogZmFsc2UsXG5cdFx0XHRcdGRlZmF1bHRDZW50ZXJlZDogdHJ1ZSxcblx0XHRcdFx0bWF4aW1pemFibGU6IGZhbHNlLFxuXHRcdFx0XHRtaW5pbWl6YWJsZTogZmFsc2UsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2Vcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdH1cblx0fTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGhhbmRsZVVzZXJEZWNpc2lvblByb21pc2UpO1xufTtcblxuY29uc3Qgb3ZlcnJpZGVDYWxsYmFjayA9IChcblx0UGxhdGZvcm1Qcm92aWRlcjogT3BlbkZpbi5Db25zdHJ1Y3RvcjxPcGVuRmluLlBsYXRmb3JtUHJvdmlkZXI+XG4pOiBPcGVuRmluLlBsYXRmb3JtUHJvdmlkZXIgPT4ge1xuXHRjbGFzcyBiZWZvcmVVbmxvYWREaWFsb2dPdmVycmlkZSBleHRlbmRzIFBsYXRmb3JtUHJvdmlkZXIge1xuXHRcdHB1YmxpYyBhc3luYyBnZXRVc2VyRGVjaXNpb25Gb3JCZWZvcmVVbmxvYWQoXG5cdFx0XHRwYXlsb2FkOiBPcGVuRmluLlZpZXdzUHJldmVudGluZ1VubG9hZFBheWxvYWRcblx0XHQpOiBQcm9taXNlPE9wZW5GaW4uQmVmb3JlVW5sb2FkVXNlckRlY2lzaW9uPiB7XG5cdFx0XHRjb25zdCB7IHdpbmRvd1Nob3VsZENsb3NlLCB2aWV3c1ByZXZlbnRpbmdVbmxvYWQsIHZpZXdzTm90UHJldmVudGluZ1VubG9hZCwgd2luZG93SWQsIGNsb3NlVHlwZSB9ID1cblx0XHRcdFx0cGF5bG9hZDtcblxuXHRcdFx0Y29uc3QgY29udGludWVXaXRoQ2xvc2UgPSBhd2FpdCBsYXVuY2hEaWFsb2codmlld3NQcmV2ZW50aW5nVW5sb2FkLCB3aW5kb3dJZCwgY2xvc2VUeXBlKTtcblxuXHRcdFx0aWYgKGNvbnRpbnVlV2l0aENsb3NlKSB7XG5cdFx0XHRcdHJldHVybiB7IHdpbmRvd1Nob3VsZENsb3NlLCB2aWV3c1RvQ2xvc2U6IFsuLi52aWV3c05vdFByZXZlbnRpbmdVbmxvYWQsIC4uLnZpZXdzUHJldmVudGluZ1VubG9hZF0gfTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7IHdpbmRvd1Nob3VsZENsb3NlOiBmYWxzZSwgdmlld3NUb0Nsb3NlOiBbXSB9O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IGJlZm9yZVVubG9hZERpYWxvZ092ZXJyaWRlKCk7XG59O1xuXG5maW4uUGxhdGZvcm0uaW5pdCh7IG92ZXJyaWRlQ2FsbGJhY2sgfSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=