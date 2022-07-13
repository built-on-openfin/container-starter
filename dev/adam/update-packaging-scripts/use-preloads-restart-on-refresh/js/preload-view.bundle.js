/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./client/src/preload-view.ts ***!
  \************************************/
if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");
}
else if (document.readyState === "complete") {
    // eslint-disable-next-line no-void
    void initViewPreload();
}
else {
    window.addEventListener("load", async () => {
        await initViewPreload();
    });
}
async function initViewPreload() {
    console.log("View preload loaded.");
    const navigationEntries = performance.getEntriesByType("navigation");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
        console.log("Navigation Entries from Performance API Indicate that this page has been reloaded.");
        console.log("This example is a use case that was was asked for. Can I restart and navigate to the originally loaded url in a view when a user reloads the page?");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fin = window.fin;
        if (fin !== undefined) {
            const viewOptions = await fin.me.getOptions();
            console.log("View Options:", viewOptions);
            if (location.href !== viewOptions.url) {
                console.log(`Current url: ${location.href} does not match the defined view url: ${viewOptions.url} navigating to the original url on refresh.`);
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
        console.log(`First load of: ${location.href}`);
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUU7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0NBQ3hFO0tBQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtJQUM5QyxtQ0FBbUM7SUFDbkMsS0FBSyxlQUFlLEVBQUUsQ0FBQztDQUN2QjtLQUFNO0lBQ04sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtRQUMxQyxNQUFNLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0NBQ0g7QUFFRCxLQUFLLFVBQVUsZUFBZTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEMsTUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckUsOERBQThEO0lBQzlELElBQUksaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQVMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztRQUNsRyxPQUFPLENBQUMsR0FBRyxDQUNWLG9KQUFvSixDQUNwSixDQUFDO1FBQ0YsOERBQThEO1FBQzlELE1BQU0sR0FBRyxHQUFJLE1BQWMsQ0FBQyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE1BQU0sV0FBVyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMxQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FDVixnQkFBZ0IsUUFBUSxDQUFDLElBQUkseUNBQXlDLFdBQVcsQ0FBQyxHQUFHLDZDQUE2QyxDQUNsSSxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQzthQUNoQztpQkFBTTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDBFQUEwRSxDQUFDLENBQUM7YUFDeEY7U0FDRDthQUFNO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxrRkFBa0YsQ0FBQyxDQUFDO1NBQ2xHO0tBQ0Q7U0FBTTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQy9DO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wcmVsb2Fkcy1yZXN0YXJ0LW9uLXJlZnJlc2gvLi9jbGllbnQvc3JjL3ByZWxvYWQtdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93ICE9PSB3aW5kb3cudG9wKSB7XG5cdGNvbnNvbGUubG9nKFwiV2UgZG9uJ3Qgd2FudCB0byBsb2FkIGV4ZWN1dGUgd2hlbiBydW5uaW5nIGluIGFuIGlmcmFtZS5cIik7XG59IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdm9pZFxuXHR2b2lkIGluaXRWaWV3UHJlbG9hZCgpO1xufSBlbHNlIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBpbml0Vmlld1ByZWxvYWQoKTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRWaWV3UHJlbG9hZCgpIHtcblx0Y29uc29sZS5sb2coXCJWaWV3IHByZWxvYWQgbG9hZGVkLlwiKTtcblx0Y29uc3QgbmF2aWdhdGlvbkVudHJpZXMgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0aWYgKG5hdmlnYXRpb25FbnRyaWVzLmxlbmd0aCA+IDAgJiYgKG5hdmlnYXRpb25FbnRyaWVzWzBdIGFzIGFueSkudHlwZSA9PT0gXCJyZWxvYWRcIikge1xuXHRcdGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBFbnRyaWVzIGZyb20gUGVyZm9ybWFuY2UgQVBJIEluZGljYXRlIHRoYXQgdGhpcyBwYWdlIGhhcyBiZWVuIHJlbG9hZGVkLlwiKTtcblx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFwiVGhpcyBleGFtcGxlIGlzIGEgdXNlIGNhc2UgdGhhdCB3YXMgd2FzIGFza2VkIGZvci4gQ2FuIEkgcmVzdGFydCBhbmQgbmF2aWdhdGUgdG8gdGhlIG9yaWdpbmFsbHkgbG9hZGVkIHVybCBpbiBhIHZpZXcgd2hlbiBhIHVzZXIgcmVsb2FkcyB0aGUgcGFnZT9cIlxuXHRcdCk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRjb25zdCBmaW4gPSAod2luZG93IGFzIGFueSkuZmluO1xuXHRcdGlmIChmaW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29uc3Qgdmlld09wdGlvbnMgPSBhd2FpdCBmaW4ubWUuZ2V0T3B0aW9ucygpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJWaWV3IE9wdGlvbnM6XCIsIHZpZXdPcHRpb25zKTtcblx0XHRcdGlmIChsb2NhdGlvbi5ocmVmICE9PSB2aWV3T3B0aW9ucy51cmwpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFx0YEN1cnJlbnQgdXJsOiAke2xvY2F0aW9uLmhyZWZ9IGRvZXMgbm90IG1hdGNoIHRoZSBkZWZpbmVkIHZpZXcgdXJsOiAke3ZpZXdPcHRpb25zLnVybH0gbmF2aWdhdGluZyB0byB0aGUgb3JpZ2luYWwgdXJsIG9uIHJlZnJlc2guYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gdmlld09wdGlvbnMudXJsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJSZWxvYWQgd2FzIGRldGVjdGVkIG9uIHRoZSBvcmlnaW5hbGx5IGxvYWRlZCB1cmwuIFBlcmZvcm1pbmcgbm8gYWN0aW9ucy5cIik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJUaGlzIGlzIGEgcHJlbG9hZCBzY3JpcHQgc28gc2hvdWxkIG9ubHkgZXZlciBiZSBsb2FkZWQgaW50byBhbiBPcGVuRmluIGNvbnRhaW5lclwiKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coYEZpcnN0IGxvYWQgb2Y6ICR7bG9jYXRpb24uaHJlZn1gKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9