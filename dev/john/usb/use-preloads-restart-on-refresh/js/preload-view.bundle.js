/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC12aWV3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7S0FBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFLENBQUM7SUFDL0MsbUNBQW1DO0lBQ25DLEtBQUssZUFBZSxFQUFFLENBQUM7QUFDeEIsQ0FBQztLQUFNLENBQUM7SUFDUCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFDLE1BQU0sZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsZUFBZTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEMsTUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckUsOERBQThEO0lBQzlELElBQUksaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQVMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDckYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO1FBQ2xHLE9BQU8sQ0FBQyxHQUFHLENBQ1Ysb0pBQW9KLENBQ3BKLENBQUM7UUFDRiw4REFBOEQ7UUFDOUQsTUFBTSxHQUFHLEdBQUksTUFBYyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN2QixNQUFNLFdBQVcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDMUMsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FDVixnQkFBZ0IsUUFBUSxDQUFDLElBQUkseUNBQXlDLFdBQVcsQ0FBQyxHQUFHLDZDQUE2QyxDQUNsSSxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUNqQyxDQUFDO2lCQUFNLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO1lBQ3pGLENBQUM7UUFDRixDQUFDO2FBQU0sQ0FBQztZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztRQUNuRyxDQUFDO0lBQ0YsQ0FBQztTQUFNLENBQUM7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wcmVsb2Fkcy1yZXN0YXJ0LW9uLXJlZnJlc2gvLi9jbGllbnQvc3JjL3ByZWxvYWQtdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpZiAod2luZG93ICE9PSB3aW5kb3cudG9wKSB7XG5cdGNvbnNvbGUubG9nKFwiV2UgZG9uJ3Qgd2FudCB0byBsb2FkIGV4ZWN1dGUgd2hlbiBydW5uaW5nIGluIGFuIGlmcmFtZS5cIik7XG59IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdm9pZFxuXHR2b2lkIGluaXRWaWV3UHJlbG9hZCgpO1xufSBlbHNlIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBpbml0Vmlld1ByZWxvYWQoKTtcblx0fSk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgdmlldyBwcmVsb2FkLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0Vmlld1ByZWxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnNvbGUubG9nKFwiVmlldyBwcmVsb2FkIGxvYWRlZC5cIik7XG5cdGNvbnN0IG5hdmlnYXRpb25FbnRyaWVzID0gcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIik7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdGlmIChuYXZpZ2F0aW9uRW50cmllcy5sZW5ndGggPiAwICYmIChuYXZpZ2F0aW9uRW50cmllc1swXSBhcyBhbnkpLnR5cGUgPT09IFwicmVsb2FkXCIpIHtcblx0XHRjb25zb2xlLmxvZyhcIk5hdmlnYXRpb24gRW50cmllcyBmcm9tIFBlcmZvcm1hbmNlIEFQSSBJbmRpY2F0ZSB0aGF0IHRoaXMgcGFnZSBoYXMgYmVlbiByZWxvYWRlZC5cIik7XG5cdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcIlRoaXMgZXhhbXBsZSBpcyBhIHVzZSBjYXNlIHRoYXQgd2FzIHdhcyBhc2tlZCBmb3IuIENhbiBJIHJlc3RhcnQgYW5kIG5hdmlnYXRlIHRvIHRoZSBvcmlnaW5hbGx5IGxvYWRlZCB1cmwgaW4gYSB2aWV3IHdoZW4gYSB1c2VyIHJlbG9hZHMgdGhlIHBhZ2U/XCJcblx0XHQpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0Y29uc3QgZmluID0gKHdpbmRvdyBhcyBhbnkpLmZpbjtcblx0XHRpZiAoZmluICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnN0IHZpZXdPcHRpb25zID0gYXdhaXQgZmluLm1lLmdldE9wdGlvbnMoKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiVmlldyBPcHRpb25zOlwiLCB2aWV3T3B0aW9ucyk7XG5cdFx0XHRpZiAobG9jYXRpb24uaHJlZiAhPT0gdmlld09wdGlvbnMudXJsKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcdGBDdXJyZW50IHVybDogJHtsb2NhdGlvbi5ocmVmfSBkb2VzIG5vdCBtYXRjaCB0aGUgZGVmaW5lZCB2aWV3IHVybDogJHt2aWV3T3B0aW9ucy51cmx9IG5hdmlnYXRpbmcgdG8gdGhlIG9yaWdpbmFsIHVybCBvbiByZWZyZXNoLmBcblx0XHRcdFx0KTtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IHZpZXdPcHRpb25zLnVybDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUmVsb2FkIHdhcyBkZXRlY3RlZCBvbiB0aGUgb3JpZ2luYWxseSBsb2FkZWQgdXJsLiBQZXJmb3JtaW5nIG5vIGFjdGlvbnMuXCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiVGhpcyBpcyBhIHByZWxvYWQgc2NyaXB0IHNvIHNob3VsZCBvbmx5IGV2ZXIgYmUgbG9hZGVkIGludG8gYW4gT3BlbkZpbiBjb250YWluZXJcIik7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKGBGaXJzdCBsb2FkIG9mOiAke2xvY2F0aW9uLmhyZWZ9YCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==