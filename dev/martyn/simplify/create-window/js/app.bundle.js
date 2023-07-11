/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await init();
    }
    catch (error) {
        console.error(error);
    }
});
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
async function openManifestApplicationWindow() {
    try {
        await fin.Application.startFromManifest("http://localhost:5050/app.fin.json");
        console.log("App is running");
    }
    catch (err) {
        console.error(err);
    }
}
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
async function openDataPlatformWindow() {
    const viewOption = {
        name: "childview-data",
        url: "http://localhost:5050/html/window.html",
        customData: {
            dateNow: Date.now()
        },
        target: undefined
    };
    await fin.Platform.getCurrentSync().createView(viewOption);
}
async function init() {
    const btn = document.querySelector("#btn-open-dynamic-window");
    btn.addEventListener("click", async (e) => openDynamicApplicationWindow());
    const btn1 = document.querySelector("#btn-open-manifest-window");
    btn1.addEventListener("click", async (e) => openManifestApplicationWindow());
    const btn2 = document.querySelector("#btn-open-data-window");
    btn2.addEventListener("click", async (e) => openDataWindow());
    const btn3 = document.querySelector("#btn-open-data-platform-window");
    btn3.addEventListener("click", openDataPlatformWindow);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUN4RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbGljYXRpb24td2luZG93LWNyZWF0aW9uLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXQoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5EeW5hbWljQXBwbGljYXRpb25XaW5kb3coKTogUHJvbWlzZTxPcGVuRmluLldpbmRvdz4ge1xuXHRjb25zdCB3aW5PcHRpb24gPSB7XG5cdFx0bmFtZTogXCJjaGlsZFwiLFxuXHRcdGRlZmF1bHRXaWR0aDogODAwLFxuXHRcdGRlZmF1bHRIZWlnaHQ6IDgwMCxcblx0XHR1cmw6IFwiaHR0cHM6Ly9jZG4ub3BlbmZpbi5jby9kb2NzL2phdmFzY3JpcHQvc3RhYmxlL3R1dG9yaWFsLVdpbmRvdy5jcmVhdGUuaHRtbFwiLFxuXHRcdGZyYW1lOiB0cnVlLFxuXHRcdGF1dG9TaG93OiB0cnVlXG5cdH07XG5cdHJldHVybiBmaW4uV2luZG93LmNyZWF0ZSh3aW5PcHRpb24pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuTWFuaWZlc3RBcHBsaWNhdGlvbldpbmRvdygpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBmaW4uQXBwbGljYXRpb24uc3RhcnRGcm9tTWFuaWZlc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvYXBwLmZpbi5qc29uXCIpO1xuXHRcdGNvbnNvbGUubG9nKFwiQXBwIGlzIHJ1bm5pbmdcIik7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuRGF0YVdpbmRvdygpOiBQcm9taXNlPE9wZW5GaW4uV2luZG93PiB7XG5cdGNvbnN0IHdpbk9wdGlvbiA9IHtcblx0XHRuYW1lOiBcImNoaWxkLWRhdGFcIixcblx0XHRkZWZhdWx0V2lkdGg6IDgwMCxcblx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9odG1sL3dpbmRvdy5odG1sXCIsXG5cdFx0ZnJhbWU6IHRydWUsXG5cdFx0YXV0b1Nob3c6IHRydWUsXG5cdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0ZGF0ZU5vdzogRGF0ZS5ub3coKVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGZpbi5XaW5kb3cuY3JlYXRlKHdpbk9wdGlvbik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5EYXRhUGxhdGZvcm1XaW5kb3coKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHZpZXdPcHRpb24gPSB7XG5cdFx0bmFtZTogXCJjaGlsZHZpZXctZGF0YVwiLFxuXHRcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvaHRtbC93aW5kb3cuaHRtbFwiLFxuXHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdGRhdGVOb3c6IERhdGUubm93KClcblx0XHR9LFxuXHRcdHRhcmdldDogdW5kZWZpbmVkXG5cdH07XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpLmNyZWF0ZVZpZXcodmlld09wdGlvbik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW9wZW4tZHluYW1pYy13aW5kb3dcIik7XG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCkpO1xuXG5cdGNvbnN0IGJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1vcGVuLW1hbmlmZXN0LXdpbmRvd1wiKTtcblx0YnRuMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuTWFuaWZlc3RBcHBsaWNhdGlvbldpbmRvdygpKTtcblxuXHRjb25zdCBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1kYXRhLXdpbmRvd1wiKTtcblx0YnRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuRGF0YVdpbmRvdygpKTtcblxuXHRjb25zdCBidG4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1kYXRhLXBsYXRmb3JtLXdpbmRvd1wiKTtcblx0YnRuMy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkRhdGFQbGF0Zm9ybVdpbmRvdyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=