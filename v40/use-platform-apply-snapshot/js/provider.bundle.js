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
    const baseUrl = "https://built-on-openfin.github.io/container-starter/v40/use-platform-apply-snapshot";
    if (launchOneBtn || launchTenBtn || launchTwentyBtn) {
        launchOneBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/common/snapshots/snapshot-one.json`);
            const snapshotJson = await snapshot.json();
            await platform.applySnapshot(snapshotJson);
        });
        launchTenBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/common/snapshots/snapshot-ten.json`);
            const snapshotJson = await snapshot.json();
            await platform.applySnapshot(snapshotJson);
        });
        launchTwentyBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/common/snapshots/snapshot-twenty.json`);
            const snapshotJson = await snapshot.json();
            await platform.applySnapshot(snapshotJson);
        });
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUUvQyxNQUFNLFlBQVksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQXNCLENBQUM7SUFDbkcsTUFBTSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFzQixDQUFDO0lBQ25HLE1BQU0sZUFBZSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFzQixDQUFDO0lBQ3pHLE1BQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFDO0lBQ3hDLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNyRCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ2pELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsT0FBTyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQzlFLE1BQU0sWUFBWSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxPQUFPLHFDQUFxQyxDQUFDLENBQUM7WUFDOUUsTUFBTSxZQUFZLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNwRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLE9BQU8sd0NBQXdDLENBQUMsQ0FBQztZQUNqRixNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0YsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBseS1zbmFwc2hvdC8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRhd2FpdCBmaW4uUGxhdGZvcm0uaW5pdCgpO1xuXHRjb25zdCBwbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXG5cdGNvbnN0IGxhdW5jaE9uZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhdW5jaC1vbmVcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdGNvbnN0IGxhdW5jaFRlbkJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhdW5jaC10ZW5cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdGNvbnN0IGxhdW5jaFR3ZW50eUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhdW5jaC10d2VudHlcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MFwiO1xuXHRpZiAobGF1bmNoT25lQnRuIHx8IGxhdW5jaFRlbkJ0biB8fCBsYXVuY2hUd2VudHlCdG4pIHtcblx0XHRsYXVuY2hPbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vY29tbW9uL3NuYXBzaG90cy9zbmFwc2hvdC1vbmUuanNvbmApO1xuXHRcdFx0Y29uc3Qgc25hcHNob3RKc29uID0gYXdhaXQgc25hcHNob3QuanNvbigpO1xuXHRcdFx0YXdhaXQgcGxhdGZvcm0uYXBwbHlTbmFwc2hvdChzbmFwc2hvdEpzb24pO1xuXHRcdH0pO1xuXHRcdGxhdW5jaFRlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc25hcHNob3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9jb21tb24vc25hcHNob3RzL3NuYXBzaG90LXRlbi5qc29uYCk7XG5cdFx0XHRjb25zdCBzbmFwc2hvdEpzb24gPSBhd2FpdCBzbmFwc2hvdC5qc29uKCk7XG5cdFx0XHRhd2FpdCBwbGF0Zm9ybS5hcHBseVNuYXBzaG90KHNuYXBzaG90SnNvbik7XG5cdFx0fSk7XG5cdFx0bGF1bmNoVHdlbnR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2NvbW1vbi9zbmFwc2hvdHMvc25hcHNob3QtdHdlbnR5Lmpzb25gKTtcblx0XHRcdGNvbnN0IHNuYXBzaG90SnNvbiA9IGF3YWl0IHNuYXBzaG90Lmpzb24oKTtcblx0XHRcdGF3YWl0IHBsYXRmb3JtLmFwcGx5U25hcHNob3Qoc25hcHNob3RKc29uKTtcblx0XHR9KTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=