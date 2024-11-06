/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/

document.addEventListener("DOMContentLoaded", async () => {
    await fin.Platform.init();
    const platform = fin.Platform.getCurrentSync();
    const launchOneBtn = document.querySelector("#launch-one");
    const launchTenBtn = document.querySelector("#launch-ten");
    const launchTwentyBtn = document.querySelector("#launch-twenty");
    const baseUrl = location.href.includes("localhost") ? "http://localhost:8080" : "https://openfin-platform-api.herokuapp.com";
    if (launchOneBtn || launchTenBtn || launchTwentyBtn) {
        launchOneBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/snapshots/snapshot-one.json`);
            const snapshotJson = await snapshot.json();
            await platform.applySnapshot(snapshotJson);
        });
        launchTenBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/snapshots/snapshot-ten.json`);
            const snapshotJson = await snapshot.json();
            await platform.applySnapshot(snapshotJson);
        });
        launchTwentyBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/snapshots/snapshot-twenty.json`);
            const snapshotJson = await snapshot.json();
            await platform.applySnapshot(snapshotJson);
        });
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUUvQyxNQUFNLFlBQVksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQXNCLENBQUM7SUFDbkcsTUFBTSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFzQixDQUFDO0lBQ25HLE1BQU0sZUFBZSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFzQixDQUFDO0lBQ3pHLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsNENBQTRDLENBQUM7SUFDN0gsSUFBSSxZQUFZLElBQUksWUFBWSxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3JELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxPQUFPLDhCQUE4QixDQUFDLENBQUM7WUFDdkUsTUFBTSxZQUFZLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNqRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLE9BQU8sOEJBQThCLENBQUMsQ0FBQztZQUN2RSxNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ3BELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsT0FBTyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sWUFBWSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcGx5LXNuYXBzaG90Ly4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGZpbi5QbGF0Zm9ybS5pbml0KCk7XG5cdGNvbnN0IHBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cblx0Y29uc3QgbGF1bmNoT25lQnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGF1bmNoLW9uZVwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblx0Y29uc3QgbGF1bmNoVGVuQnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGF1bmNoLXRlblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblx0Y29uc3QgbGF1bmNoVHdlbnR5QnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGF1bmNoLXR3ZW50eVwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblx0Y29uc3QgYmFzZVVybCA9IGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJsb2NhbGhvc3RcIikgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiIDogXCJodHRwczovL29wZW5maW4tcGxhdGZvcm0tYXBpLmhlcm9rdWFwcC5jb21cIjtcblx0aWYgKGxhdW5jaE9uZUJ0biB8fCBsYXVuY2hUZW5CdG4gfHwgbGF1bmNoVHdlbnR5QnRuKSB7XG5cdFx0bGF1bmNoT25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L3NuYXBzaG90cy9zbmFwc2hvdC1vbmUuanNvbmApO1xuXHRcdFx0Y29uc3Qgc25hcHNob3RKc29uID0gYXdhaXQgc25hcHNob3QuanNvbigpO1xuXHRcdFx0YXdhaXQgcGxhdGZvcm0uYXBwbHlTbmFwc2hvdChzbmFwc2hvdEpzb24pO1xuXHRcdH0pO1xuXHRcdGxhdW5jaFRlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc25hcHNob3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9zbmFwc2hvdHMvc25hcHNob3QtdGVuLmpzb25gKTtcblx0XHRcdGNvbnN0IHNuYXBzaG90SnNvbiA9IGF3YWl0IHNuYXBzaG90Lmpzb24oKTtcblx0XHRcdGF3YWl0IHBsYXRmb3JtLmFwcGx5U25hcHNob3Qoc25hcHNob3RKc29uKTtcblx0XHR9KTtcblx0XHRsYXVuY2hUd2VudHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vc25hcHNob3RzL3NuYXBzaG90LXR3ZW50eS5qc29uYCk7XG5cdFx0XHRjb25zdCBzbmFwc2hvdEpzb24gPSBhd2FpdCBzbmFwc2hvdC5qc29uKCk7XG5cdFx0XHRhd2FpdCBwbGF0Zm9ybS5hcHBseVNuYXBzaG90KHNuYXBzaG90SnNvbik7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9