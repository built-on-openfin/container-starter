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
/**
 * Initialize the view preload.
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQztBQUN6RSxDQUFDO0tBQU0sSUFBSSxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRSxDQUFDO0lBQy9DLG1DQUFtQztJQUNuQyxLQUFLLGVBQWUsRUFBRSxDQUFDO0FBQ3hCLENBQUM7S0FBTSxDQUFDO0lBQ1AsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksRUFBRTtRQUMxQyxNQUFNLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGVBQWU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0saUJBQWlCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JFLDhEQUE4RDtJQUM5RCxJQUFJLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUssaUJBQWlCLENBQUMsQ0FBQyxDQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztRQUNsRyxPQUFPLENBQUMsR0FBRyxDQUNWLG9KQUFvSixDQUNwSixDQUFDO1FBQ0YsOERBQThEO1FBQzlELE1BQU0sR0FBRyxHQUFJLE1BQWMsQ0FBQyxHQUFHLENBQUM7UUFDaEMsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDdkIsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzFDLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQ1YsZ0JBQWdCLFFBQVEsQ0FBQyxJQUFJLHlDQUF5QyxXQUFXLENBQUMsR0FBRyw2Q0FBNkMsQ0FDbEksQ0FBQztnQkFDRixRQUFRLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDakMsQ0FBQztpQkFBTSxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEVBQTBFLENBQUMsQ0FBQztZQUN6RixDQUFDO1FBQ0YsQ0FBQzthQUFNLENBQUM7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLGtGQUFrRixDQUFDLENBQUM7UUFDbkcsQ0FBQztJQUNGLENBQUM7U0FBTSxDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcHJlbG9hZHMtcmVzdGFydC1vbi1yZWZyZXNoLy4vY2xpZW50L3NyYy9wcmVsb2FkLXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdyAhPT0gd2luZG93LnRvcCkge1xuXHRjb25zb2xlLmxvZyhcIldlIGRvbid0IHdhbnQgdG8gbG9hZCBleGVjdXRlIHdoZW4gcnVubmluZyBpbiBhbiBpZnJhbWUuXCIpO1xufSBlbHNlIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZvaWRcblx0dm9pZCBpbml0Vmlld1ByZWxvYWQoKTtcbn0gZWxzZSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgaW5pdFZpZXdQcmVsb2FkKCk7XG5cdH0pO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHZpZXcgcHJlbG9hZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdFZpZXdQcmVsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zb2xlLmxvZyhcIlZpZXcgcHJlbG9hZCBsb2FkZWQuXCIpO1xuXHRjb25zdCBuYXZpZ2F0aW9uRW50cmllcyA9IHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJuYXZpZ2F0aW9uXCIpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRpZiAobmF2aWdhdGlvbkVudHJpZXMubGVuZ3RoID4gMCAmJiAobmF2aWdhdGlvbkVudHJpZXNbMF0gYXMgYW55KS50eXBlID09PSBcInJlbG9hZFwiKSB7XG5cdFx0Y29uc29sZS5sb2coXCJOYXZpZ2F0aW9uIEVudHJpZXMgZnJvbSBQZXJmb3JtYW5jZSBBUEkgSW5kaWNhdGUgdGhhdCB0aGlzIHBhZ2UgaGFzIGJlZW4gcmVsb2FkZWQuXCIpO1xuXHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XCJUaGlzIGV4YW1wbGUgaXMgYSB1c2UgY2FzZSB0aGF0IHdhcyB3YXMgYXNrZWQgZm9yLiBDYW4gSSByZXN0YXJ0IGFuZCBuYXZpZ2F0ZSB0byB0aGUgb3JpZ2luYWxseSBsb2FkZWQgdXJsIGluIGEgdmlldyB3aGVuIGEgdXNlciByZWxvYWRzIHRoZSBwYWdlP1wiXG5cdFx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdGNvbnN0IGZpbiA9ICh3aW5kb3cgYXMgYW55KS5maW47XG5cdFx0aWYgKGZpbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb25zdCB2aWV3T3B0aW9ucyA9IGF3YWl0IGZpbi5tZS5nZXRPcHRpb25zKCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlZpZXcgT3B0aW9uczpcIiwgdmlld09wdGlvbnMpO1xuXHRcdFx0aWYgKGxvY2F0aW9uLmhyZWYgIT09IHZpZXdPcHRpb25zLnVybCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0XHRgQ3VycmVudCB1cmw6ICR7bG9jYXRpb24uaHJlZn0gZG9lcyBub3QgbWF0Y2ggdGhlIGRlZmluZWQgdmlldyB1cmw6ICR7dmlld09wdGlvbnMudXJsfSBuYXZpZ2F0aW5nIHRvIHRoZSBvcmlnaW5hbCB1cmwgb24gcmVmcmVzaC5gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSB2aWV3T3B0aW9ucy51cmw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlJlbG9hZCB3YXMgZGV0ZWN0ZWQgb24gdGhlIG9yaWdpbmFsbHkgbG9hZGVkIHVybC4gUGVyZm9ybWluZyBubyBhY3Rpb25zLlwiKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIlRoaXMgaXMgYSBwcmVsb2FkIHNjcmlwdCBzbyBzaG91bGQgb25seSBldmVyIGJlIGxvYWRlZCBpbnRvIGFuIE9wZW5GaW4gY29udGFpbmVyXCIpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhgRmlyc3QgbG9hZCBvZjogJHtsb2NhdGlvbi5ocmVmfWApO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=