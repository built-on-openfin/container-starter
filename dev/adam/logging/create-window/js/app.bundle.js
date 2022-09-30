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
    fin.Application.startFromManifest("http://localhost:5050/app.fin.json")
        .then((app) => console.log("App is running"))
        .catch((err) => console.log(err));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxJQUFJO1FBQ0gsTUFBTSxJQUFJLEVBQUUsQ0FBQztLQUNiO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JCO0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLFVBQVUsNEJBQTRCO0lBQzFDLE1BQU0sU0FBUyxHQUFHO1FBQ2pCLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLEdBQUc7UUFDakIsYUFBYSxFQUFFLEdBQUc7UUFDbEIsR0FBRyxFQUFFLDJFQUEyRTtRQUNoRixLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxJQUFJO0tBQ2QsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELEtBQUssVUFBVSw2QkFBNkI7SUFDM0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNyRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM1QyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsS0FBSyxVQUFVLGNBQWM7SUFDNUIsTUFBTSxTQUFTLEdBQUc7UUFDakIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsWUFBWSxFQUFFLEdBQUc7UUFDakIsYUFBYSxFQUFFLEdBQUc7UUFDbEIsR0FBRyxFQUFFLHdDQUF3QztRQUM3QyxLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxJQUFJO1FBQ2QsVUFBVSxFQUFFO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDbkI7S0FDRCxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsS0FBSyxVQUFVLHNCQUFzQjtJQUNwQyxNQUFNLFVBQVUsR0FBRztRQUNsQixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLEdBQUcsRUFBRSx3Q0FBd0M7UUFDN0MsVUFBVSxFQUFFO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDbkI7UUFDRCxNQUFNLEVBQUUsU0FBUztLQUNqQixDQUFDO0lBQ0YsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQsS0FBSyxVQUFVLElBQUk7SUFDbEIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQy9ELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQVEsRUFBRSxFQUFFLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO0lBRWxGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUFDLDZCQUE2QixFQUFFLENBQUMsQ0FBQztJQUVwRixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBRXJFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN0RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDeEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcGxpY2F0aW9uLXdpbmRvdy1jcmVhdGlvbi8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0KCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCkge1xuXHRjb25zdCB3aW5PcHRpb24gPSB7XG5cdFx0bmFtZTogXCJjaGlsZFwiLFxuXHRcdGRlZmF1bHRXaWR0aDogODAwLFxuXHRcdGRlZmF1bHRIZWlnaHQ6IDgwMCxcblx0XHR1cmw6IFwiaHR0cHM6Ly9jZG4ub3BlbmZpbi5jby9kb2NzL2phdmFzY3JpcHQvc3RhYmxlL3R1dG9yaWFsLVdpbmRvdy5jcmVhdGUuaHRtbFwiLFxuXHRcdGZyYW1lOiB0cnVlLFxuXHRcdGF1dG9TaG93OiB0cnVlXG5cdH07XG5cdHJldHVybiBmaW4uV2luZG93LmNyZWF0ZSh3aW5PcHRpb24pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuTWFuaWZlc3RBcHBsaWNhdGlvbldpbmRvdygpIHtcblx0ZmluLkFwcGxpY2F0aW9uLnN0YXJ0RnJvbU1hbmlmZXN0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2FwcC5maW4uanNvblwiKVxuXHRcdC50aGVuKChhcHApID0+IGNvbnNvbGUubG9nKFwiQXBwIGlzIHJ1bm5pbmdcIikpXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuRGF0YVdpbmRvdygpIHtcblx0Y29uc3Qgd2luT3B0aW9uID0ge1xuXHRcdG5hbWU6IFwiY2hpbGQtZGF0YVwiLFxuXHRcdGRlZmF1bHRXaWR0aDogODAwLFxuXHRcdGRlZmF1bHRIZWlnaHQ6IDgwMCxcblx0XHR1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2h0bWwvd2luZG93Lmh0bWxcIixcblx0XHRmcmFtZTogdHJ1ZSxcblx0XHRhdXRvU2hvdzogdHJ1ZSxcblx0XHRjdXN0b21EYXRhOiB7XG5cdFx0XHRkYXRlTm93OiBEYXRlLm5vdygpXG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb3BlbkRhdGFQbGF0Zm9ybVdpbmRvdygpIHtcblx0Y29uc3Qgdmlld09wdGlvbiA9IHtcblx0XHRuYW1lOiBcImNoaWxkdmlldy1kYXRhXCIsXG5cdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9odG1sL3dpbmRvdy5odG1sXCIsXG5cdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0ZGF0ZU5vdzogRGF0ZS5ub3coKVxuXHRcdH0sXG5cdFx0dGFyZ2V0OiB1bmRlZmluZWRcblx0fTtcblx0YXdhaXQgZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCkuY3JlYXRlVmlldyh2aWV3T3B0aW9uKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1keW5hbWljLXdpbmRvd1wiKTtcblx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZTogRXZlbnQpID0+IG9wZW5EeW5hbWljQXBwbGljYXRpb25XaW5kb3coKSk7XG5cblx0Y29uc3QgYnRuMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW9wZW4tbWFuaWZlc3Qtd2luZG93XCIpO1xuXHRidG4xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZTogRXZlbnQpID0+IG9wZW5NYW5pZmVzdEFwcGxpY2F0aW9uV2luZG93KCkpO1xuXG5cdGNvbnN0IGJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1vcGVuLWRhdGEtd2luZG93XCIpO1xuXHRidG4yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZTogRXZlbnQpID0+IG9wZW5EYXRhV2luZG93KCkpO1xuXG5cdGNvbnN0IGJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1vcGVuLWRhdGEtcGxhdGZvcm0td2luZG93XCIpO1xuXHRidG4zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRGF0YVBsYXRmb3JtV2luZG93KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==