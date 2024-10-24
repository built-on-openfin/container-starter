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
    const baseUrl = window.location.origin;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUNyRCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUUvQyxNQUFNLFlBQVksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQXNCLENBQUM7SUFDbkcsTUFBTSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFzQixDQUFDO0lBQ25HLE1BQU0sZUFBZSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFzQixDQUFDO0lBQ3pHLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNsRCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzlDLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsT0FBTyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sWUFBWSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxPQUFPLDhCQUE4QixDQUFDLENBQUM7WUFDdkUsTUFBTSxZQUFZLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNqRCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLE9BQU8saUNBQWlDLENBQUMsQ0FBQztZQUMxRSxNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBseS1zbmFwc2hvdC8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGZpbi5QbGF0Zm9ybS5pbml0KCk7XG4gICAgY29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblxuICAgIGNvbnN0IGxhdW5jaE9uZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhdW5jaC1vbmVcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3QgbGF1bmNoVGVuQnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGF1bmNoLXRlblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBsYXVuY2hUd2VudHlCdG46IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXVuY2gtdHdlbnR5XCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgIGlmIChsYXVuY2hPbmVCdG4gfHwgbGF1bmNoVGVuQnRuIHx8IGxhdW5jaFR3ZW50eUJ0bikge1xuICAgICAgICBsYXVuY2hPbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vc25hcHNob3RzL3NuYXBzaG90LW9uZS5qc29uYCk7XG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdEpzb24gPSBhd2FpdCBzbmFwc2hvdC5qc29uKCk7XG4gICAgICAgICAgICBhd2FpdCBwbGF0Zm9ybS5hcHBseVNuYXBzaG90KHNuYXBzaG90SnNvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBsYXVuY2hUZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vc25hcHNob3RzL3NuYXBzaG90LXRlbi5qc29uYCk7XG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdEpzb24gPSBhd2FpdCBzbmFwc2hvdC5qc29uKCk7XG4gICAgICAgICAgICBhd2FpdCBwbGF0Zm9ybS5hcHBseVNuYXBzaG90KHNuYXBzaG90SnNvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBsYXVuY2hUd2VudHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vc25hcHNob3RzL3NuYXBzaG90LXR3ZW50eS5qc29uYCk7XG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdEpzb24gPSBhd2FpdCBzbmFwc2hvdC5qc29uKCk7XG4gICAgICAgICAgICBhd2FpdCBwbGF0Zm9ybS5hcHBseVNuYXBzaG90KHNuYXBzaG90SnNvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9