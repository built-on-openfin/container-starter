/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initialize the DOM components.
 */
async function initDom() {
    const btnOpenDynamicWindow = document.querySelector("#btn-open-dynamic-window");
    if (btnOpenDynamicWindow) {
        btnOpenDynamicWindow.addEventListener("click", async (e) => openDynamicApplicationWindow());
    }
    const btnOpenManifestWindow = document.querySelector("#btn-open-manifest-window");
    if (btnOpenManifestWindow) {
        btnOpenManifestWindow.addEventListener("click", async (e) => openManifestApplicationWindow());
    }
    const btnOpenDataWindow = document.querySelector("#btn-open-data-window");
    if (btnOpenDataWindow) {
        btnOpenDataWindow.addEventListener("click", async (e) => openDataWindow());
    }
    const btnOpenDataPlatformWindow = document.querySelector("#btn-open-data-platform-window");
    if (btnOpenDataPlatformWindow) {
        btnOpenDataPlatformWindow.addEventListener("click", openDataPlatformWindow);
    }
}
/**
 * Open a window using dynamic options.
 * @returns The window.
 */
async function openDynamicApplicationWindow() {
    const winOption = {
        name: "child",
        defaultWidth: 800,
        defaultHeight: 800,
        url: "https://cdn.openfin.co/docs/javascript/stable/tutorial-Window.create.html",
        frame: true,
        autoShow: true
    };
    return fin.Window.create(winOption);
}
/**
 * Open a window using a manifest.
 */
async function openManifestApplicationWindow() {
    try {
        await fin.Application.startFromManifest("http://localhost:5050/app.fin.json");
        console.log("App is running");
    }
    catch (err) {
        console.error(err);
    }
}
/**
 * Open a window and pass it custom data.
 * @returns The window.
 */
async function openDataWindow() {
    const winOption = {
        name: "child-data",
        defaultWidth: 800,
        defaultHeight: 800,
        url: "http://localhost:5050/html/window.html",
        frame: true,
        autoShow: true,
        customData: {
            dateNow: Date.now()
        }
    };
    return fin.Window.create(winOption);
}
/**
 * Open a platform window using options.
 */
async function openDataPlatformWindow() {
    const viewOption = {
        name: "childview-data",
        url: "http://localhost:5050/html/window.html",
        customData: {
            dateNow: Date.now()
        }
    };
    await fin.Platform.getCurrentSync().createView(viewOption);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3hELElBQUk7UUFDSCxNQUFNLE9BQU8sRUFBRSxDQUFDO0tBQ2hCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JCO0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILEtBQUssVUFBVSxPQUFPO0lBQ3JCLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hGLElBQUksb0JBQW9CLEVBQUU7UUFDekIsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQztLQUNuRztJQUVELE1BQU0scUJBQXFCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ2xGLElBQUkscUJBQXFCLEVBQUU7UUFDMUIscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUFDLDZCQUE2QixFQUFFLENBQUMsQ0FBQztLQUNyRztJQUVELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzFFLElBQUksaUJBQWlCLEVBQUU7UUFDdEIsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7S0FDbEY7SUFFRCxNQUFNLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUMzRixJQUFJLHlCQUF5QixFQUFFO1FBQzlCLHlCQUF5QixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0tBQzVFO0FBQ0YsQ0FBQztBQUVEOzs7R0FHRztBQUNILEtBQUssVUFBVSw0QkFBNEI7SUFDMUMsTUFBTSxTQUFTLEdBQUc7UUFDakIsSUFBSSxFQUFFLE9BQU87UUFDYixZQUFZLEVBQUUsR0FBRztRQUNqQixhQUFhLEVBQUUsR0FBRztRQUNsQixHQUFHLEVBQUUsMkVBQTJFO1FBQ2hGLEtBQUssRUFBRSxJQUFJO1FBQ1gsUUFBUSxFQUFFLElBQUk7S0FDZCxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsNkJBQTZCO0lBQzNDLElBQUk7UUFDSCxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDOUI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbkI7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGNBQWM7SUFDNUIsTUFBTSxTQUFTLEdBQUc7UUFDakIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsWUFBWSxFQUFFLEdBQUc7UUFDakIsYUFBYSxFQUFFLEdBQUc7UUFDbEIsR0FBRyxFQUFFLHdDQUF3QztRQUM3QyxLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxJQUFJO1FBQ2QsVUFBVSxFQUFFO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDbkI7S0FDRCxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsc0JBQXNCO0lBQ3BDLE1BQU0sVUFBVSxHQUF3QztRQUN2RCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLEdBQUcsRUFBRSx3Q0FBd0M7UUFDN0MsVUFBVSxFQUFFO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDbkI7S0FDc0MsQ0FBQztJQUN6QyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi13aW5kb3ctY3JlYXRpb24vLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdERvbSgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gY29tcG9uZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnRuT3BlbkR5bmFtaWNXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1vcGVuLWR5bmFtaWMtd2luZG93XCIpO1xuXHRpZiAoYnRuT3BlbkR5bmFtaWNXaW5kb3cpIHtcblx0XHRidG5PcGVuRHluYW1pY1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuT3Blbk1hbmlmZXN0V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1tYW5pZmVzdC13aW5kb3dcIik7XG5cdGlmIChidG5PcGVuTWFuaWZlc3RXaW5kb3cpIHtcblx0XHRidG5PcGVuTWFuaWZlc3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gb3Blbk1hbmlmZXN0QXBwbGljYXRpb25XaW5kb3coKSk7XG5cdH1cblxuXHRjb25zdCBidG5PcGVuRGF0YVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW9wZW4tZGF0YS13aW5kb3dcIik7XG5cdGlmIChidG5PcGVuRGF0YVdpbmRvdykge1xuXHRcdGJ0bk9wZW5EYXRhV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZTogRXZlbnQpID0+IG9wZW5EYXRhV2luZG93KCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuT3BlbkRhdGFQbGF0Zm9ybVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW9wZW4tZGF0YS1wbGF0Zm9ybS13aW5kb3dcIik7XG5cdGlmIChidG5PcGVuRGF0YVBsYXRmb3JtV2luZG93KSB7XG5cdFx0YnRuT3BlbkRhdGFQbGF0Zm9ybVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkRhdGFQbGF0Zm9ybVdpbmRvdyk7XG5cdH1cbn1cblxuLyoqXG4gKiBPcGVuIGEgd2luZG93IHVzaW5nIGR5bmFtaWMgb3B0aW9ucy5cbiAqIEByZXR1cm5zIFRoZSB3aW5kb3cuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG9wZW5EeW5hbWljQXBwbGljYXRpb25XaW5kb3coKTogUHJvbWlzZTxPcGVuRmluLldpbmRvdz4ge1xuXHRjb25zdCB3aW5PcHRpb24gPSB7XG5cdFx0bmFtZTogXCJjaGlsZFwiLFxuXHRcdGRlZmF1bHRXaWR0aDogODAwLFxuXHRcdGRlZmF1bHRIZWlnaHQ6IDgwMCxcblx0XHR1cmw6IFwiaHR0cHM6Ly9jZG4ub3BlbmZpbi5jby9kb2NzL2phdmFzY3JpcHQvc3RhYmxlL3R1dG9yaWFsLVdpbmRvdy5jcmVhdGUuaHRtbFwiLFxuXHRcdGZyYW1lOiB0cnVlLFxuXHRcdGF1dG9TaG93OiB0cnVlXG5cdH07XG5cdHJldHVybiBmaW4uV2luZG93LmNyZWF0ZSh3aW5PcHRpb24pO1xufVxuXG4vKipcbiAqIE9wZW4gYSB3aW5kb3cgdXNpbmcgYSBtYW5pZmVzdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb3Blbk1hbmlmZXN0QXBwbGljYXRpb25XaW5kb3coKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLkFwcGxpY2F0aW9uLnN0YXJ0RnJvbU1hbmlmZXN0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2FwcC5maW4uanNvblwiKTtcblx0XHRjb25zb2xlLmxvZyhcIkFwcCBpcyBydW5uaW5nXCIpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdH1cbn1cblxuLyoqXG4gKiBPcGVuIGEgd2luZG93IGFuZCBwYXNzIGl0IGN1c3RvbSBkYXRhLlxuICogQHJldHVybnMgVGhlIHdpbmRvdy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb3BlbkRhdGFXaW5kb3coKTogUHJvbWlzZTxPcGVuRmluLldpbmRvdz4ge1xuXHRjb25zdCB3aW5PcHRpb24gPSB7XG5cdFx0bmFtZTogXCJjaGlsZC1kYXRhXCIsXG5cdFx0ZGVmYXVsdFdpZHRoOiA4MDAsXG5cdFx0ZGVmYXVsdEhlaWdodDogODAwLFxuXHRcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvaHRtbC93aW5kb3cuaHRtbFwiLFxuXHRcdGZyYW1lOiB0cnVlLFxuXHRcdGF1dG9TaG93OiB0cnVlLFxuXHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdGRhdGVOb3c6IERhdGUubm93KClcblx0XHR9XG5cdH07XG5cdHJldHVybiBmaW4uV2luZG93LmNyZWF0ZSh3aW5PcHRpb24pO1xufVxuXG4vKipcbiAqIE9wZW4gYSBwbGF0Zm9ybSB3aW5kb3cgdXNpbmcgb3B0aW9ucy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb3BlbkRhdGFQbGF0Zm9ybVdpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgdmlld09wdGlvbjogT3BlbkZpbi5QbGF0Zm9ybVZpZXdDcmVhdGlvbk9wdGlvbnMgPSB7XG5cdFx0bmFtZTogXCJjaGlsZHZpZXctZGF0YVwiLFxuXHRcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvaHRtbC93aW5kb3cuaHRtbFwiLFxuXHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdGRhdGVOb3c6IERhdGUubm93KClcblx0XHR9XG5cdH0gYXMgT3BlbkZpbi5QbGF0Zm9ybVZpZXdDcmVhdGlvbk9wdGlvbnM7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpLmNyZWF0ZVZpZXcodmlld09wdGlvbik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=