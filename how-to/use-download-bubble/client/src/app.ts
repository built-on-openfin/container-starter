document.addEventListener("DOMContentLoaded", () => {
	initDom().catch((error) => console.error(error));
});

/**
 * Initialize the DOM components and wire up event handlers.
 */
async function initDom(): Promise<void> {
	const btnShowDownloadBubble = document.querySelector<HTMLButtonElement>("#btn-show-download-bubble");
	const btnTriggerDownload = document.querySelector<HTMLButtonElement>("#btn-trigger-download");
	const status = document.querySelector<HTMLElement>("#status");

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
		} catch (error) {
			// If the window already exists, bring it to the front.
			try {
				const existing = fin.Window.wrapSync({ uuid: platform.identity.uuid, name: "show-download-window" });
				await existing.bringToFront();
				await existing.focus();
			} catch {
				console.error(error);
			}
		}
	});

	/**
	 * Build a download bubble anchor from the button's DOMRect, translated into screen-space using the
	 * platform window's web-content bounds.
	 * @returns Anchor payload for `updateDownloadBubbleAnchor` / `showDownloadBubble`.
	 */
	async function getAnchor(): Promise<{
		bounds: { x: number; y: number; width: number; height: number };
		location: "topRight";
	}> {
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
function triggerDownload(downloadUrl: string, status?: HTMLElement | null): void {
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
