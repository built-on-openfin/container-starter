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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0NBQzNFO0tBQU07SUFDSCxLQUFLLFVBQVUsZUFBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsTUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckUsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9GQUFvRixDQUFDLENBQUM7WUFDbEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtSkFBbUosQ0FBQyxDQUFDO1lBQ2pLLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixJQUFHLEdBQUcsS0FBSyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksV0FBVyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzFDLElBQUcsUUFBUSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO29CQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLHdDQUF3QyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEdBQUcsNkNBQTZDLENBQUMsQ0FBQztvQkFDMUosUUFBUSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDBFQUEwRSxDQUFDLENBQUM7aUJBQzNGO2FBQ0o7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDO2FBQ3JHO1NBQ0o7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUNELElBQUcsUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUM7UUFDbEMsZUFBZSxFQUFFLENBQUM7S0FDckI7U0FBTTtRQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2pDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0tBQ047Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wcmVsb2Fkcy1yZXN0YXJ0LW9uLXJlZnJlc2gvLi9jbGllbnQvc3JjL3ByZWxvYWQtdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93ICE9PSB3aW5kb3cudG9wKSB7XG4gICAgY29uc29sZS5sb2coXCJXZSBkb24ndCB3YW50IHRvIGxvYWQgZXhlY3V0ZSB3aGVuIHJ1bm5pbmcgaW4gYW4gaWZyYW1lLlwiKTsgICBcbn0gZWxzZSB7XG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFZpZXdQcmVsb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlZpZXcgcHJlbG9hZCBsb2FkZWQuXCIpO1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRW50cmllcyA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpO1xuICAgICAgICBpZiAobmF2aWdhdGlvbkVudHJpZXMubGVuZ3RoID4gMCAmJiBuYXZpZ2F0aW9uRW50cmllc1swXVtcInR5cGVcIl0gPT09IFwicmVsb2FkXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBFbnRyaWVzIGZyb20gUGVyZm9ybWFuY2UgQVBJIEluZGljYXRlIHRoYXQgdGhpcyBwYWdlIGhhcyBiZWVuIHJlbG9hZGVkLlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBleGFtcGxlIGlzIGEgdXNlIGNhc2UgdGhhdCB3YXMgd2FzIGFza2VkIGZvci4gQ2FuIEkgcmVzdGFydCBhbmQgbmF2aWdhdGUgdG8gdGhlIG9yZ2luYWxseSBsb2FkZWQgdXJsIGluIGEgdmlldyB3aGVuIGEgdXNlciByZWxvYWRzIHRoZSBwYWdlP1wiKTtcbiAgICAgICAgICAgIGxldCBmaW4gPSB3aW5kb3dbXCJmaW5cIl07XG4gICAgICAgICAgICBpZihmaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB2aWV3T3B0aW9ucyA9IGF3YWl0IGZpbi5tZS5nZXRPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWaWV3IE9wdGlvbnM6XCIsIHZpZXdPcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZihsb2NhdGlvbi5ocmVmICE9PSB2aWV3T3B0aW9ucy51cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IHVybDogXCIgKyBsb2NhdGlvbi5ocmVmICsgXCIgZG9lcyBub3QgbWF0Y2ggdGhlIGRlZmluZWQgdmlldyB1cmw6IFwiICsgdmlld09wdGlvbnMudXJsICsgXCIgbmF2aWdhdGluZyB0byB0aGUgb3JpZ2luYWwgdXJsIG9uIHJlZnJlc2guXCIpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdmlld09wdGlvbnMudXJsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVsb2FkIHdhcyBkZXRlY3RlZCBvbiB0aGUgb3JpZ2luYWxseSBsb2FkZWQgdXJsLiBQZXJmb3JtaW5nIG5vIGFjdGlvbnMuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoaXMgaXMgYSBwcmVsb2FkIHNjcmlwdCBzbyBzaG91bGQgb25seSBldmVyIGJlIGxvYWRlZCBpbnRvIGFuIE9wZW5GaW4gY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdCBsb2FkIG9mOiBcIiArIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIil7XG4gICAgICAgIGluaXRWaWV3UHJlbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaW5pdFZpZXdQcmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=