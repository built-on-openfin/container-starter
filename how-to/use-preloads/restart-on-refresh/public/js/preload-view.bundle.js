/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./client/src/preload-view.ts ***!
  \************************************/
if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");
}
else {
    async function initViewPreload() {
        console.log("View preload loaded.");
        const navigationEntries = performance.getEntriesByType("navigation");
        if (navigationEntries.length > 0 && navigationEntries[0]["type"] === "reload") {
            console.log("Navigation Entries from Performance API Indicate that this page has been reloaded.");
            console.log("This example is a use case that was was asked for. Can I restart and navigate to the orginally loaded url in a view when a user reloads the page?");
            let fin = window["fin"];
            if (fin !== undefined) {
                let viewOptions = await fin.me.getOptions();
                console.log("View Options:", viewOptions);
                if (location.href !== viewOptions.url) {
                    console.log("Current url: " + location.href + " does not match the defined view url: " + viewOptions.url + " navigating to the original url on refresh.");
                    location.href = viewOptions.url;
                }
                else {
                    console.log("Reload was detected on the originally loaded url. Performing no actions.");
                }
            }
            else {
                console.error("This is a preload script so should only ever be loaded into an OpenFin container");
            }
        }
        else {
            console.log("First load of: " + location.href);
        }
    }
    if (document.readyState === "complete") {
        initViewPreload();
    }
    else {
        window.addEventListener('load', () => {
            initViewPreload();
        });
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0NBQzNFO0tBQU07SUFDSCxLQUFLLFVBQVUsZUFBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsTUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckUsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9GQUFvRixDQUFDLENBQUM7WUFDbEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtSkFBbUosQ0FBQyxDQUFDO1lBQ2pLLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixJQUFHLEdBQUcsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksV0FBVyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzFDLElBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO29CQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLHdDQUF3QyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEdBQUcsNkNBQTZDLENBQUMsQ0FBQztvQkFDMUosUUFBUSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDBFQUEwRSxDQUFDLENBQUM7aUJBQzNGO2FBQ0o7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDO2FBQ3JHO1NBQ0o7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUNELElBQUcsUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUM7UUFDbEMsZUFBZSxFQUFFLENBQUM7S0FDckI7U0FBTTtRQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2pDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0tBQ047Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wcmVsb2Fkcy1yZXN0YXJ0LW9uLXJlZnJlc2gvLi9jbGllbnQvc3JjL3ByZWxvYWQtdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93ICE9PSB3aW5kb3cudG9wKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlIGRvbid0IHdhbnQgdG8gbG9hZCBleGVjdXRlIHdoZW4gcnVubmluZyBpbiBhbiBpZnJhbWUuXCIpOyAgIFxyXG59IGVsc2Uge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFZpZXdQcmVsb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmlldyBwcmVsb2FkIGxvYWRlZC5cIik7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkVudHJpZXMgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKTtcclxuICAgICAgICBpZiAobmF2aWdhdGlvbkVudHJpZXMubGVuZ3RoID4gMCAmJiBuYXZpZ2F0aW9uRW50cmllc1swXVtcInR5cGVcIl0gPT09IFwicmVsb2FkXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW9uIEVudHJpZXMgZnJvbSBQZXJmb3JtYW5jZSBBUEkgSW5kaWNhdGUgdGhhdCB0aGlzIHBhZ2UgaGFzIGJlZW4gcmVsb2FkZWQuXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgZXhhbXBsZSBpcyBhIHVzZSBjYXNlIHRoYXQgd2FzIHdhcyBhc2tlZCBmb3IuIENhbiBJIHJlc3RhcnQgYW5kIG5hdmlnYXRlIHRvIHRoZSBvcmdpbmFsbHkgbG9hZGVkIHVybCBpbiBhIHZpZXcgd2hlbiBhIHVzZXIgcmVsb2FkcyB0aGUgcGFnZT9cIik7XHJcbiAgICAgICAgICAgIGxldCBmaW4gPSB3aW5kb3dbXCJmaW5cIl07XHJcbiAgICAgICAgICAgIGlmKGZpbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmlld09wdGlvbnMgPSBhd2FpdCBmaW4ubWUuZ2V0T3B0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWaWV3IE9wdGlvbnM6XCIsIHZpZXdPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGlmKGxvY2F0aW9uLmhyZWYgIT09IHZpZXdPcHRpb25zLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCB1cmw6IFwiICsgbG9jYXRpb24uaHJlZiArIFwiIGRvZXMgbm90IG1hdGNoIHRoZSBkZWZpbmVkIHZpZXcgdXJsOiBcIiArIHZpZXdPcHRpb25zLnVybCArIFwiIG5hdmlnYXRpbmcgdG8gdGhlIG9yaWdpbmFsIHVybCBvbiByZWZyZXNoLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdmlld09wdGlvbnMudXJsO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbG9hZCB3YXMgZGV0ZWN0ZWQgb24gdGhlIG9yaWdpbmFsbHkgbG9hZGVkIHVybC4gUGVyZm9ybWluZyBubyBhY3Rpb25zLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGlzIGlzIGEgcHJlbG9hZCBzY3JpcHQgc28gc2hvdWxkIG9ubHkgZXZlciBiZSBsb2FkZWQgaW50byBhbiBPcGVuRmluIGNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgbG9hZCBvZjogXCIgKyBsb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpe1xyXG4gICAgICAgIGluaXRWaWV3UHJlbG9hZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgaW5pdFZpZXdQcmVsb2FkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=