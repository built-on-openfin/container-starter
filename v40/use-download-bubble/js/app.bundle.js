/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", () => {
    initDom().catch((error) => console.error(error));
});
/**
 * Initialize the DOM components and wire up event handlers.
 */
async function initDom() {
    const btnShowDownloadBubble = document.querySelector("#btn-show-download-bubble");
    const btnTriggerDownload = document.querySelector("#btn-trigger-download");
    const status = document.querySelector("#status");
    if (!btnShowDownloadBubble || !btnTriggerDownload) {
        console.warn("Missing required buttons");
        return;
    }
    // Store in const so TypeScript knows it's non-null after the check above.
    const downloadBubbleButton = btnShowDownloadBubble;
    // This code runs inside a Platform View, not a Window, so we must get the hosting window.
    const view = fin.View.getCurrentSync();
    const w = await view.getCurrentWindow();
    // Enable the "See all downloads" button behavior by rendering chrome://downloads.
    // See: https://developer.openfin.co/docs/javascript/stable/interfaces/OpenFin.Events.WindowEvents.ShowAllDownloadsEvent.html
    // Listen to the propagated event at the Platform level, so that we only need one listener for a click from any window.
    // Render the `chrome://downloads` window when a user clicks on the download shelf `Show All` button.
    const platform = fin.Platform.getCurrentSync();
    await platform.on("window-show-all-downloads", async () => {
        try {
            await platform.createWindow({
                name: "show-download-window",
                layout: {
                    content: [
                        {
                            type: "stack",
                            content: [
                                {
                                    type: "component",
                                    componentName: "view",
                                    componentState: {
                                        name: "show-download-view",
                                        url: "chrome://downloads"
                                    }
                                }
                            ]
                        }
                    ]
                }
            });
        }
        catch (error) {
            // If the window already exists, bring it to the front.
            try {
                const existing = fin.Window.wrapSync({ uuid: platform.identity.uuid, name: "show-download-window" });
                await existing.bringToFront();
                await existing.focus();
            }
            catch {
                console.error(error);
            }
        }
    });
    /**
     * Build a download bubble anchor from the button's DOMRect, translated into screen-space using the
     * platform window's web-content bounds.
     * @returns Anchor payload for `updateDownloadBubbleAnchor` / `showDownloadBubble`.
     */
    async function getAnchor() {
        const rect = downloadBubbleButton.getBoundingClientRect();
        const winBounds = await w.getBounds();
        return {
            bounds: {
                x: winBounds.content.left + rect.x,
                y: winBounds.content.top + rect.y,
                width: rect.width,
                height: rect.height
            },
            location: "topRight"
        };
    }
    // Ensure the anchor is set before any downloads occur (prevents default top-left positioning).
    await w.updateDownloadBubbleAnchor(await getAnchor());
    downloadBubbleButton.addEventListener("click", async () => {
        const anchor = await getAnchor();
        await w.showDownloadBubble(anchor);
        if (status) {
            status.textContent = "Showing download bubble.";
        }
    });
    btnTriggerDownload.addEventListener("click", () => {
        const downloadUrl = new URL("../assets/example-download.txt", window.location.href).toString();
        triggerDownload(downloadUrl, status);
    });
}
/**
 * Trigger a download via an `<a download>` click.
 * @param downloadUrl URL to download.
 * @param status Optional status element to update.
 */
function triggerDownload(downloadUrl, status) {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "example-download.txt";
    link.rel = "noopener";
    link.style.display = "none";
    document.body.append(link);
    link.click();
    link.remove();
    if (status) {
        status.textContent = `Triggered download: ${downloadUrl}`;
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVkLElBQUksTUFBTSxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsV0FBVyxHQUFHLHVCQUF1QixXQUFXLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1kb3dubG9hZC1idWJibGUvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdGluaXREb20oKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBjb21wb25lbnRzIGFuZCB3aXJlIHVwIGV2ZW50IGhhbmRsZXJzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBidG5TaG93RG93bmxvYWRCdWJibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tc2hvdy1kb3dubG9hZC1idWJibGVcIik7XG5cdGNvbnN0IGJ0blRyaWdnZXJEb3dubG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi10cmlnZ2VyLWRvd25sb2FkXCIpO1xuXHRjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzdGF0dXNcIik7XG5cblx0aWYgKCFidG5TaG93RG93bmxvYWRCdWJibGUgfHwgIWJ0blRyaWdnZXJEb3dubG9hZCkge1xuXHRcdGNvbnNvbGUud2FybihcIk1pc3NpbmcgcmVxdWlyZWQgYnV0dG9uc1wiKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTdG9yZSBpbiBjb25zdCBzbyBUeXBlU2NyaXB0IGtub3dzIGl0J3Mgbm9uLW51bGwgYWZ0ZXIgdGhlIGNoZWNrIGFib3ZlLlxuXHRjb25zdCBkb3dubG9hZEJ1YmJsZUJ1dHRvbiA9IGJ0blNob3dEb3dubG9hZEJ1YmJsZTtcblxuXHQvLyBUaGlzIGNvZGUgcnVucyBpbnNpZGUgYSBQbGF0Zm9ybSBWaWV3LCBub3QgYSBXaW5kb3csIHNvIHdlIG11c3QgZ2V0IHRoZSBob3N0aW5nIHdpbmRvdy5cblx0Y29uc3QgdmlldyA9IGZpbi5WaWV3LmdldEN1cnJlbnRTeW5jKCk7XG5cdGNvbnN0IHcgPSBhd2FpdCB2aWV3LmdldEN1cnJlbnRXaW5kb3coKTtcblxuXHQvLyBFbmFibGUgdGhlIFwiU2VlIGFsbCBkb3dubG9hZHNcIiBidXR0b24gYmVoYXZpb3IgYnkgcmVuZGVyaW5nIGNocm9tZTovL2Rvd25sb2Fkcy5cblx0Ly8gU2VlOiBodHRwczovL2RldmVsb3Blci5vcGVuZmluLmNvL2RvY3MvamF2YXNjcmlwdC9zdGFibGUvaW50ZXJmYWNlcy9PcGVuRmluLkV2ZW50cy5XaW5kb3dFdmVudHMuU2hvd0FsbERvd25sb2Fkc0V2ZW50Lmh0bWxcblx0Ly8gTGlzdGVuIHRvIHRoZSBwcm9wYWdhdGVkIGV2ZW50IGF0IHRoZSBQbGF0Zm9ybSBsZXZlbCwgc28gdGhhdCB3ZSBvbmx5IG5lZWQgb25lIGxpc3RlbmVyIGZvciBhIGNsaWNrIGZyb20gYW55IHdpbmRvdy5cblx0Ly8gUmVuZGVyIHRoZSBgY2hyb21lOi8vZG93bmxvYWRzYCB3aW5kb3cgd2hlbiBhIHVzZXIgY2xpY2tzIG9uIHRoZSBkb3dubG9hZCBzaGVsZiBgU2hvdyBBbGxgIGJ1dHRvbi5cblx0Y29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0YXdhaXQgcGxhdGZvcm0ub24oXCJ3aW5kb3ctc2hvdy1hbGwtZG93bmxvYWRzXCIsIGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgcGxhdGZvcm0uY3JlYXRlV2luZG93KHtcblx0XHRcdFx0bmFtZTogXCJzaG93LWRvd25sb2FkLXdpbmRvd1wiLFxuXHRcdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0XHRjb250ZW50OiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwic3RhY2tcIixcblx0XHRcdFx0XHRcdFx0Y29udGVudDogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29tcG9uZW50XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnROYW1lOiBcInZpZXdcIixcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudFN0YXRlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IFwic2hvdy1kb3dubG9hZC12aWV3XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCJjaHJvbWU6Ly9kb3dubG9hZHNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdC8vIElmIHRoZSB3aW5kb3cgYWxyZWFkeSBleGlzdHMsIGJyaW5nIGl0IHRvIHRoZSBmcm9udC5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGV4aXN0aW5nID0gZmluLldpbmRvdy53cmFwU3luYyh7IHV1aWQ6IHBsYXRmb3JtLmlkZW50aXR5LnV1aWQsIG5hbWU6IFwic2hvdy1kb3dubG9hZC13aW5kb3dcIiB9KTtcblx0XHRcdFx0YXdhaXQgZXhpc3RpbmcuYnJpbmdUb0Zyb250KCk7XG5cdFx0XHRcdGF3YWl0IGV4aXN0aW5nLmZvY3VzKCk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvKipcblx0ICogQnVpbGQgYSBkb3dubG9hZCBidWJibGUgYW5jaG9yIGZyb20gdGhlIGJ1dHRvbidzIERPTVJlY3QsIHRyYW5zbGF0ZWQgaW50byBzY3JlZW4tc3BhY2UgdXNpbmcgdGhlXG5cdCAqIHBsYXRmb3JtIHdpbmRvdydzIHdlYi1jb250ZW50IGJvdW5kcy5cblx0ICogQHJldHVybnMgQW5jaG9yIHBheWxvYWQgZm9yIGB1cGRhdGVEb3dubG9hZEJ1YmJsZUFuY2hvcmAgLyBgc2hvd0Rvd25sb2FkQnViYmxlYC5cblx0ICovXG5cdGFzeW5jIGZ1bmN0aW9uIGdldEFuY2hvcigpOiBQcm9taXNlPHtcblx0XHRib3VuZHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH07XG5cdFx0bG9jYXRpb246IFwidG9wUmlnaHRcIjtcblx0fT4ge1xuXHRcdGNvbnN0IHJlY3QgPSBkb3dubG9hZEJ1YmJsZUJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCB3aW5Cb3VuZHMgPSBhd2FpdCB3LmdldEJvdW5kcygpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRib3VuZHM6IHtcblx0XHRcdFx0eDogd2luQm91bmRzLmNvbnRlbnQubGVmdCArIHJlY3QueCxcblx0XHRcdFx0eTogd2luQm91bmRzLmNvbnRlbnQudG9wICsgcmVjdC55LFxuXHRcdFx0XHR3aWR0aDogcmVjdC53aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiByZWN0LmhlaWdodFxuXHRcdFx0fSxcblx0XHRcdGxvY2F0aW9uOiBcInRvcFJpZ2h0XCJcblx0XHR9O1xuXHR9XG5cblx0Ly8gRW5zdXJlIHRoZSBhbmNob3IgaXMgc2V0IGJlZm9yZSBhbnkgZG93bmxvYWRzIG9jY3VyIChwcmV2ZW50cyBkZWZhdWx0IHRvcC1sZWZ0IHBvc2l0aW9uaW5nKS5cblx0YXdhaXQgdy51cGRhdGVEb3dubG9hZEJ1YmJsZUFuY2hvcihhd2FpdCBnZXRBbmNob3IoKSk7XG5cblx0ZG93bmxvYWRCdWJibGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBhbmNob3IgPSBhd2FpdCBnZXRBbmNob3IoKTtcblx0XHRhd2FpdCB3LnNob3dEb3dubG9hZEJ1YmJsZShhbmNob3IpO1xuXHRcdGlmIChzdGF0dXMpIHtcblx0XHRcdHN0YXR1cy50ZXh0Q29udGVudCA9IFwiU2hvd2luZyBkb3dubG9hZCBidWJibGUuXCI7XG5cdFx0fVxuXHR9KTtcblxuXHRidG5UcmlnZ2VyRG93bmxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBkb3dubG9hZFVybCA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZXhhbXBsZS1kb3dubG9hZC50eHRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpLnRvU3RyaW5nKCk7XG5cdFx0dHJpZ2dlckRvd25sb2FkKGRvd25sb2FkVXJsLCBzdGF0dXMpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGEgZG93bmxvYWQgdmlhIGFuIGA8YSBkb3dubG9hZD5gIGNsaWNrLlxuICogQHBhcmFtIGRvd25sb2FkVXJsIFVSTCB0byBkb3dubG9hZC5cbiAqIEBwYXJhbSBzdGF0dXMgT3B0aW9uYWwgc3RhdHVzIGVsZW1lbnQgdG8gdXBkYXRlLlxuICovXG5mdW5jdGlvbiB0cmlnZ2VyRG93bmxvYWQoZG93bmxvYWRVcmw6IHN0cmluZywgc3RhdHVzPzogSFRNTEVsZW1lbnQgfCBudWxsKTogdm9pZCB7XG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bGluay5ocmVmID0gZG93bmxvYWRVcmw7XG5cdGxpbmsuZG93bmxvYWQgPSBcImV4YW1wbGUtZG93bmxvYWQudHh0XCI7XG5cdGxpbmsucmVsID0gXCJub29wZW5lclwiO1xuXHRsaW5rLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQobGluayk7XG5cdGxpbmsuY2xpY2soKTtcblx0bGluay5yZW1vdmUoKTtcblxuXHRpZiAoc3RhdHVzKSB7XG5cdFx0c3RhdHVzLnRleHRDb250ZW50ID0gYFRyaWdnZXJlZCBkb3dubG9hZDogJHtkb3dubG9hZFVybH1gO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9