/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
        }
    };
    await fin.Platform.getCurrentSync().createView(viewOption);
}
async function init() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxNQUFNLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUMzRixJQUFJLHlCQUF5QixFQUFFO1FBQzlCLHlCQUF5QixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0tBQzVFO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcGxpY2F0aW9uLXdpbmRvdy1jcmVhdGlvbi8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0KCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCk6IFByb21pc2U8T3BlbkZpbi5XaW5kb3c+IHtcblx0Y29uc3Qgd2luT3B0aW9uID0ge1xuXHRcdG5hbWU6IFwiY2hpbGRcIixcblx0XHRkZWZhdWx0V2lkdGg6IDgwMCxcblx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0dXJsOiBcImh0dHBzOi8vY2RuLm9wZW5maW4uY28vZG9jcy9qYXZhc2NyaXB0L3N0YWJsZS90dXRvcmlhbC1XaW5kb3cuY3JlYXRlLmh0bWxcIixcblx0XHRmcmFtZTogdHJ1ZSxcblx0XHRhdXRvU2hvdzogdHJ1ZVxuXHR9O1xuXHRyZXR1cm4gZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb3Blbk1hbmlmZXN0QXBwbGljYXRpb25XaW5kb3coKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLkFwcGxpY2F0aW9uLnN0YXJ0RnJvbU1hbmlmZXN0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2FwcC5maW4uanNvblwiKTtcblx0XHRjb25zb2xlLmxvZyhcIkFwcCBpcyBydW5uaW5nXCIpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gb3BlbkRhdGFXaW5kb3coKTogUHJvbWlzZTxPcGVuRmluLldpbmRvdz4ge1xuXHRjb25zdCB3aW5PcHRpb24gPSB7XG5cdFx0bmFtZTogXCJjaGlsZC1kYXRhXCIsXG5cdFx0ZGVmYXVsdFdpZHRoOiA4MDAsXG5cdFx0ZGVmYXVsdEhlaWdodDogODAwLFxuXHRcdHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvaHRtbC93aW5kb3cuaHRtbFwiLFxuXHRcdGZyYW1lOiB0cnVlLFxuXHRcdGF1dG9TaG93OiB0cnVlLFxuXHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdGRhdGVOb3c6IERhdGUubm93KClcblx0XHR9XG5cdH07XG5cdHJldHVybiBmaW4uV2luZG93LmNyZWF0ZSh3aW5PcHRpb24pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuRGF0YVBsYXRmb3JtV2luZG93KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB2aWV3T3B0aW9uOiBPcGVuRmluLlBsYXRmb3JtVmlld0NyZWF0aW9uT3B0aW9ucyA9IHtcblx0XHRuYW1lOiBcImNoaWxkdmlldy1kYXRhXCIsXG5cdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9odG1sL3dpbmRvdy5odG1sXCIsXG5cdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0ZGF0ZU5vdzogRGF0ZS5ub3coKVxuXHRcdH1cblx0fSBhcyBPcGVuRmluLlBsYXRmb3JtVmlld0NyZWF0aW9uT3B0aW9ucztcblx0YXdhaXQgZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCkuY3JlYXRlVmlldyh2aWV3T3B0aW9uKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnRuT3BlbkR5bmFtaWNXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1vcGVuLWR5bmFtaWMtd2luZG93XCIpO1xuXHRpZiAoYnRuT3BlbkR5bmFtaWNXaW5kb3cpIHtcblx0XHRidG5PcGVuRHluYW1pY1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuT3Blbk1hbmlmZXN0V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1tYW5pZmVzdC13aW5kb3dcIik7XG5cdGlmIChidG5PcGVuTWFuaWZlc3RXaW5kb3cpIHtcblx0XHRidG5PcGVuTWFuaWZlc3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlOiBFdmVudCkgPT4gb3Blbk1hbmlmZXN0QXBwbGljYXRpb25XaW5kb3coKSk7XG5cdH1cblxuXHRjb25zdCBidG5PcGVuRGF0YVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW9wZW4tZGF0YS13aW5kb3dcIik7XG5cdGlmIChidG5PcGVuRGF0YVdpbmRvdykge1xuXHRcdGJ0bk9wZW5EYXRhV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZTogRXZlbnQpID0+IG9wZW5EYXRhV2luZG93KCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuT3BlbkRhdGFQbGF0Zm9ybVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW9wZW4tZGF0YS1wbGF0Zm9ybS13aW5kb3dcIik7XG5cdGlmIChidG5PcGVuRGF0YVBsYXRmb3JtV2luZG93KSB7XG5cdFx0YnRuT3BlbkRhdGFQbGF0Zm9ybVdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkRhdGFQbGF0Zm9ybVdpbmRvdyk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==