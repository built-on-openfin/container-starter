/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7Q0FDeEU7S0FBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0lBQzlDLG1DQUFtQztJQUNuQyxLQUFLLGVBQWUsRUFBRSxDQUFDO0NBQ3ZCO0tBQU07SUFDTixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFDLE1BQU0sZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7Q0FDSDtBQUVELEtBQUssVUFBVSxlQUFlO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNwQyxNQUFNLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRSw4REFBOEQ7SUFDOUQsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFLLGlCQUFpQixDQUFDLENBQUMsQ0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO1FBQ2xHLE9BQU8sQ0FBQyxHQUFHLENBQ1Ysb0pBQW9KLENBQ3BKLENBQUM7UUFDRiw4REFBOEQ7UUFDOUQsTUFBTSxHQUFHLEdBQUksTUFBYyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzFDLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUNWLGdCQUFnQixRQUFRLENBQUMsSUFBSSx5Q0FBeUMsV0FBVyxDQUFDLEdBQUcsNkNBQTZDLENBQ2xJLENBQUM7Z0JBQ0YsUUFBUSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEVBQTBFLENBQUMsQ0FBQzthQUN4RjtTQUNEO2FBQU07WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLGtGQUFrRixDQUFDLENBQUM7U0FDbEc7S0FDRDtTQUFNO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7S0FDL0M7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXByZWxvYWRzLXJlc3RhcnQtb24tcmVmcmVzaC8uL2NsaWVudC9zcmMvcHJlbG9hZC12aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImlmICh3aW5kb3cgIT09IHdpbmRvdy50b3ApIHtcblx0Y29uc29sZS5sb2coXCJXZSBkb24ndCB3YW50IHRvIGxvYWQgZXhlY3V0ZSB3aGVuIHJ1bm5pbmcgaW4gYW4gaWZyYW1lLlwiKTtcbn0gZWxzZSBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12b2lkXG5cdHZvaWQgaW5pdFZpZXdQcmVsb2FkKCk7XG59IGVsc2Uge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGluaXRWaWV3UHJlbG9hZCgpO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdFZpZXdQcmVsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zb2xlLmxvZyhcIlZpZXcgcHJlbG9hZCBsb2FkZWQuXCIpO1xuXHRjb25zdCBuYXZpZ2F0aW9uRW50cmllcyA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRpZiAobmF2aWdhdGlvbkVudHJpZXMubGVuZ3RoID4gMCAmJiAobmF2aWdhdGlvbkVudHJpZXNbMF0gYXMgYW55KS50eXBlID09PSBcInJlbG9hZFwiKSB7XG5cdFx0Y29uc29sZS5sb2coXCJOYXZpZ2F0aW9uIEVudHJpZXMgZnJvbSBQZXJmb3JtYW5jZSBBUEkgSW5kaWNhdGUgdGhhdCB0aGlzIHBhZ2UgaGFzIGJlZW4gcmVsb2FkZWQuXCIpO1xuXHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XCJUaGlzIGV4YW1wbGUgaXMgYSB1c2UgY2FzZSB0aGF0IHdhcyB3YXMgYXNrZWQgZm9yLiBDYW4gSSByZXN0YXJ0IGFuZCBuYXZpZ2F0ZSB0byB0aGUgb3JpZ2luYWxseSBsb2FkZWQgdXJsIGluIGEgdmlldyB3aGVuIGEgdXNlciByZWxvYWRzIHRoZSBwYWdlP1wiXG5cdFx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdGNvbnN0IGZpbiA9ICh3aW5kb3cgYXMgYW55KS5maW47XG5cdFx0aWYgKGZpbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCB2aWV3T3B0aW9ucyA9IGF3YWl0IGZpbi5tZS5nZXRPcHRpb25zKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlZpZXcgT3B0aW9uczpcIiwgdmlld09wdGlvbnMpO1xuXHRcdFx0aWYgKGxvY2F0aW9uLmhyZWYgIT09IHZpZXdPcHRpb25zLnVybCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRgQ3VycmVudCB1cmw6ICR7bG9jYXRpb24uaHJlZn0gZG9lcyBub3QgbWF0Y2ggdGhlIGRlZmluZWQgdmlldyB1cmw6ICR7dmlld09wdGlvbnMudXJsfSBuYXZpZ2F0aW5nIHRvIHRoZSBvcmlnaW5hbCB1cmwgb24gcmVmcmVzaC5gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSB2aWV3T3B0aW9ucy51cmw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlJlbG9hZCB3YXMgZGV0ZWN0ZWQgb24gdGhlIG9yaWdpbmFsbHkgbG9hZGVkIHVybC4gUGVyZm9ybWluZyBubyBhY3Rpb25zLlwiKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIlRoaXMgaXMgYSBwcmVsb2FkIHNjcmlwdCBzbyBzaG91bGQgb25seSBldmVyIGJlIGxvYWRlZCBpbnRvIGFuIE9wZW5GaW4gY29udGFpbmVyXCIpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhgRmlyc3QgbG9hZCBvZjogJHtsb2NhdGlvbi5ocmVmfWApO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=