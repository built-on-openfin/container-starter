/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
document.addEventListener("DOMContentLoaded", async () => {
    const openView = document.querySelector("#open-view");
    openView.addEventListener("click", (e) => {
        window.open("https://www.google.com");
    });
    const openViewTarget = document.querySelector("#open-view-target");
    const viewTargets = [
        "https://www.examples.com/category/business/advertising",
        "https://www.examples.com/category/business/agenda",
        "https://www.examples.com/category/business/agreement"
    ];
    let viewTargetIndex = 0;
    openViewTarget.addEventListener("click", (e) => {
        window.open(viewTargets[viewTargetIndex++ % viewTargets.length], "examples");
    });
    const openWindow = document.querySelector("#open-window");
    openWindow.addEventListener("click", (e) => {
        window.open("https://www.bing.com");
    });
    const openWindowTarget = document.querySelector("#open-window-target");
    const windowTargets = [
        "https://www.examples.com/category/education/case-study",
        "https://www.examples.com/category/education/essays",
        "https://www.examples.com/category/education/finance"
    ];
    let windowTargetIndex = 0;
    openWindowTarget.addEventListener("click", (e) => {
        window.open(windowTargets[windowTargetIndex++ % windowTargets.length], "examples2");
    });
    const openBrowser = document.querySelector("#open-browser");
    openBrowser.addEventListener("click", (e) => {
        window.open("https://www.microsoft.com");
    });
    const openBlocked = document.querySelector("#open-blocked");
    openBlocked.addEventListener("click", (e) => {
        window.open("https://www.apple.com");
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkUsTUFBTSxXQUFXLEdBQUc7UUFDbkIsd0RBQXdEO1FBQ3hELG1EQUFtRDtRQUNuRCxzREFBc0Q7S0FDdEQsQ0FBQztJQUVGLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztJQUN4QixjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxRCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkUsTUFBTSxhQUFhLEdBQUc7UUFDckIsd0RBQXdEO1FBQ3hELG9EQUFvRDtRQUNwRCxxREFBcUQ7S0FDckQsQ0FBQztJQUVGLElBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JGLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY29udGVudC1jcmVhdGlvbi1ydWxlcy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0Y29uc3Qgb3BlblZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tdmlld1wiKTtcblx0b3BlblZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0d2luZG93Lm9wZW4oXCJodHRwczovL3d3dy5nb29nbGUuY29tXCIpO1xuXHR9KTtcblxuXHRjb25zdCBvcGVuVmlld1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi12aWV3LXRhcmdldFwiKTtcblx0Y29uc3Qgdmlld1RhcmdldHMgPSBbXG5cdFx0XCJodHRwczovL3d3dy5leGFtcGxlcy5jb20vY2F0ZWdvcnkvYnVzaW5lc3MvYWR2ZXJ0aXNpbmdcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9idXNpbmVzcy9hZ2VuZGFcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9idXNpbmVzcy9hZ3JlZW1lbnRcIlxuXHRdO1xuXG5cdGxldCB2aWV3VGFyZ2V0SW5kZXggPSAwO1xuXHRvcGVuVmlld1RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHR3aW5kb3cub3Blbih2aWV3VGFyZ2V0c1t2aWV3VGFyZ2V0SW5kZXgrKyAlIHZpZXdUYXJnZXRzLmxlbmd0aF0sIFwiZXhhbXBsZXNcIik7XG5cdH0pO1xuXG5cdGNvbnN0IG9wZW5XaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4td2luZG93XCIpO1xuXHRvcGVuV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuYmluZy5jb21cIik7XG5cdH0pO1xuXG5cdGNvbnN0IG9wZW5XaW5kb3dUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4td2luZG93LXRhcmdldFwiKTtcblx0Y29uc3Qgd2luZG93VGFyZ2V0cyA9IFtcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9lZHVjYXRpb24vY2FzZS1zdHVkeVwiLFxuXHRcdFwiaHR0cHM6Ly93d3cuZXhhbXBsZXMuY29tL2NhdGVnb3J5L2VkdWNhdGlvbi9lc3NheXNcIixcblx0XHRcImh0dHBzOi8vd3d3LmV4YW1wbGVzLmNvbS9jYXRlZ29yeS9lZHVjYXRpb24vZmluYW5jZVwiXG5cdF07XG5cblx0bGV0IHdpbmRvd1RhcmdldEluZGV4ID0gMDtcblx0b3BlbldpbmRvd1RhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHR3aW5kb3cub3Blbih3aW5kb3dUYXJnZXRzW3dpbmRvd1RhcmdldEluZGV4KysgJSB3aW5kb3dUYXJnZXRzLmxlbmd0aF0sIFwiZXhhbXBsZXMyXCIpO1xuXHR9KTtcblxuXHRjb25zdCBvcGVuQnJvd3NlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1icm93c2VyXCIpO1xuXHRvcGVuQnJvd3Nlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHR3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb21cIik7XG5cdH0pO1xuXG5cdGNvbnN0IG9wZW5CbG9ja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLWJsb2NrZWRcIik7XG5cdG9wZW5CbG9ja2VkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cuYXBwbGUuY29tXCIpO1xuXHR9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9