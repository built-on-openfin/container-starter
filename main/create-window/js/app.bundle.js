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
async function init() {
    const btn = document.querySelector("#btn-open-dynamic-window");
    btn.addEventListener("click", async (e) => openDynamicApplicationWindow());
    const btn1 = document.querySelector("#btn-open-manifest-window");
    btn1.addEventListener("click", async (e) => openManifestApplicationWindow());
    const btn2 = document.querySelector("#btn-open-data-window");
    btn2.addEventListener("click", async (e) => openDataWindow());
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxJQUFJO1FBQ0gsTUFBTSxJQUFJLEVBQUUsQ0FBQztLQUNiO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JCO0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLFVBQVUsNEJBQTRCO0lBQzFDLE1BQU0sU0FBUyxHQUFHO1FBQ2pCLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLEdBQUc7UUFDakIsYUFBYSxFQUFFLEdBQUc7UUFDbEIsR0FBRyxFQUFFLDJFQUEyRTtRQUNoRixLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxJQUFJO0tBQ2QsQ0FBQztJQUNGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELEtBQUssVUFBVSw2QkFBNkI7SUFDM0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNyRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUM1QyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsS0FBSyxVQUFVLGNBQWM7SUFDNUIsTUFBTSxTQUFTLEdBQUc7UUFDakIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsWUFBWSxFQUFFLEdBQUc7UUFDakIsYUFBYSxFQUFFLEdBQUc7UUFDbEIsR0FBRyxFQUFFLHdDQUF3QztRQUM3QyxLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxJQUFJO1FBQ2QsVUFBVSxFQUFFO1lBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDbkI7S0FDRCxDQUFDO0lBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsS0FBSyxVQUFVLElBQUk7SUFDbEIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQy9ELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQVEsRUFBRSxFQUFFLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO0lBRWxGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFRLEVBQUUsRUFBRSxDQUFDLDZCQUE2QixFQUFFLENBQUMsQ0FBQztJQUVwRixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi13aW5kb3ctY3JlYXRpb24vLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gb3BlbkR5bmFtaWNBcHBsaWNhdGlvbldpbmRvdygpIHtcblx0Y29uc3Qgd2luT3B0aW9uID0ge1xuXHRcdG5hbWU6IFwiY2hpbGRcIixcblx0XHRkZWZhdWx0V2lkdGg6IDgwMCxcblx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0dXJsOiBcImh0dHBzOi8vY2RuLm9wZW5maW4uY28vZG9jcy9qYXZhc2NyaXB0L3N0YWJsZS90dXRvcmlhbC1XaW5kb3cuY3JlYXRlLmh0bWxcIixcblx0XHRmcmFtZTogdHJ1ZSxcblx0XHRhdXRvU2hvdzogdHJ1ZVxuXHR9O1xuXHRyZXR1cm4gZmluLldpbmRvdy5jcmVhdGUod2luT3B0aW9uKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb3Blbk1hbmlmZXN0QXBwbGljYXRpb25XaW5kb3coKSB7XG5cdGZpbi5BcHBsaWNhdGlvbi5zdGFydEZyb21NYW5pZmVzdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9hcHAuZmluLmpzb25cIilcblx0XHQudGhlbigoYXBwKSA9PiBjb25zb2xlLmxvZyhcIkFwcCBpcyBydW5uaW5nXCIpKVxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb3BlbkRhdGFXaW5kb3coKSB7XG5cdGNvbnN0IHdpbk9wdGlvbiA9IHtcblx0XHRuYW1lOiBcImNoaWxkLWRhdGFcIixcblx0XHRkZWZhdWx0V2lkdGg6IDgwMCxcblx0XHRkZWZhdWx0SGVpZ2h0OiA4MDAsXG5cdFx0dXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9odG1sL3dpbmRvdy5odG1sXCIsXG5cdFx0ZnJhbWU6IHRydWUsXG5cdFx0YXV0b1Nob3c6IHRydWUsXG5cdFx0Y3VzdG9tRGF0YToge1xuXHRcdFx0ZGF0ZU5vdzogRGF0ZS5ub3coKVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGZpbi5XaW5kb3cuY3JlYXRlKHdpbk9wdGlvbik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLW9wZW4tZHluYW1pYy13aW5kb3dcIik7XG5cdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuRHluYW1pY0FwcGxpY2F0aW9uV2luZG93KCkpO1xuXG5cdGNvbnN0IGJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1vcGVuLW1hbmlmZXN0LXdpbmRvd1wiKTtcblx0YnRuMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuTWFuaWZlc3RBcHBsaWNhdGlvbldpbmRvdygpKTtcblxuXHRjb25zdCBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tb3Blbi1kYXRhLXdpbmRvd1wiKTtcblx0YnRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGU6IEV2ZW50KSA9PiBvcGVuRGF0YVdpbmRvdygpKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==