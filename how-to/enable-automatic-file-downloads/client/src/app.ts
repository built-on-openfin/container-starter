import type OpenFin from "@openfin/core";

/**
 * The scenario this view is demonstrating, passed on the url by each manifest.
 * - manifest: automatic downloads are enabled by `platform.domainSettings` in manifest.fin.json.
 * - code: automatic downloads are enabled/disabled at runtime with `fin.System.setDomainSettings`.
 * - prompt: nothing is configured so the default Save As dialog is shown.
 */
type Mode = "manifest" | "code" | "prompt";

const MODE_INFO: { [key in Mode]: { tag: string; description: string } } = {
	manifest: {
		tag: "Automatic downloads enabled via the manifest.",
		description:
			"The manifest contains a platform.domainSettings rule with a downloadSettings behavior of 'no-prompt'. Click Download and the file is saved straight to the download location without a Save As dialog."
	},
	code: {
		tag: "Automatic downloads enabled via code.",
		description:
			"The manifest does not configure downloads. Click Download to see the Save As dialog, then click 'Enable automatic downloads' and click Download again to see the file saved without a prompt."
	},
	prompt: {
		tag: "Automatic downloads not enabled.",
		description:
			"Nothing is configured so the default behavior applies. Click Download and the Save As dialog is shown so the user can choose where to save the file."
	}
};

document.addEventListener("DOMContentLoaded", () => {
	initDom().catch((error) => console.error(error));
});

/**
 * Initialize the DOM components and wire up event handlers.
 */
async function initDom(): Promise<void> {
	const mode = getMode();
	const tag = document.querySelector<HTMLElement>("#tag");
	const description = document.querySelector<HTMLElement>("#description");
	const btnTriggerDownload = document.querySelector<HTMLButtonElement>("#btn-trigger-download");

	if (tag) {
		tag.textContent = MODE_INFO[mode].tag;
	}
	if (description) {
		description.textContent = MODE_INFO[mode].description;
	}

	btnTriggerDownload?.addEventListener("click", () => {
		const downloadUrl = new URL("../assets/example-download.txt", window.location.href).toString();
		triggerDownload(downloadUrl);
	});

	// Listen for the download events on this view so we can see what happened to the file.
	const view = fin.View.getCurrentSync();
	await view.on("file-download-started", (event) => {
		log(`Started: ${event.originalFileName}`);
	});
	await view.on("file-download-completed", (event) => {
		log(`Completed (${event.state}): ${event.fileName}`);
	});

	if (mode === "code") {
		await initCodeControls();
	}
}

/**
 * Show and wire up the buttons that change the domain settings at runtime.
 */
async function initCodeControls(): Promise<void> {
	const codeControls = document.querySelector<HTMLElement>("#code-controls");
	const btnEnableAuto = document.querySelector<HTMLButtonElement>("#btn-enable-auto");
	const btnDisableAuto = document.querySelector<HTMLButtonElement>("#btn-disable-auto");

	codeControls?.classList.remove("hidden");

	btnEnableAuto?.addEventListener("click", async () => {
		await setDownloadBehavior("no-prompt");
	});

	btnDisableAuto?.addEventListener("click", async () => {
		await setDownloadBehavior("prompt");
	});

	await showDomainSettings();
}

/**
 * Update the platform's domain settings so that downloads started from pages on this
 * origin use the given behavior.
 * @param behavior 'no-prompt' to save automatically or 'prompt' to show the Save As dialog.
 */
async function setDownloadBehavior(behavior: OpenFin.FileDownloadBehavior): Promise<void> {
	try {
		const domainSettings: OpenFin.DomainSettings = {
			rules: [
				{
					// The pages this rule applies to.
					match: [`${window.location.origin}/*`],
					options: {
						downloadSettings: {
							rules: [
								{
									// The files (by download url) this rule applies to.
									match: ["<all_urls>"],
									behavior
								}
							]
						}
					}
				}
			]
		};

		await fin.System.setDomainSettings(domainSettings);
		log(`Download behavior set to '${behavior}'.`);
		await showDomainSettings();
	} catch (error) {
		log(`Failed to set domain settings: ${formatError(error)}`);
	}
}

/**
 * Display the current domain settings for the platform.
 */
async function showDomainSettings(): Promise<void> {
	const domainSettingsElement = document.querySelector<HTMLElement>("#domain-settings");
	if (!domainSettingsElement) {
		return;
	}
	try {
		const domainSettings = await fin.System.getDomainSettings();
		domainSettingsElement.textContent = JSON.stringify(domainSettings, undefined, 2);
	} catch (error) {
		domainSettingsElement.textContent = `Failed to get domain settings: ${formatError(error)}`;
	}
}

/**
 * Get the mode from the url query string.
 * @returns The mode for this view.
 */
function getMode(): Mode {
	const mode = new URLSearchParams(window.location.search).get("mode");
	return mode === "code" || mode === "prompt" ? mode : "manifest";
}

/**
 * Trigger a download via an `<a download>` click.
 * @param downloadUrl URL to download.
 */
function triggerDownload(downloadUrl: string): void {
	const link = document.createElement("a");
	link.href = downloadUrl;
	link.download = "example-download.txt";
	link.rel = "noopener";
	link.style.display = "none";
	document.body.append(link);
	link.click();
	link.remove();
	log(`Triggered download: ${downloadUrl}`);
}

/**
 * Add a message to the on screen log.
 * @param message The message to log.
 */
function log(message: string): void {
	const logElement = document.querySelector<HTMLElement>("#log");
	if (logElement) {
		logElement.textContent = `${new Date().toLocaleTimeString()} ${message}\n${logElement.textContent ?? ""}`;
	}
}

/**
 * Format an error for display.
 * @param error The error to format.
 * @returns The formatted error.
 */
function formatError(error: unknown): string {
	return error instanceof Error ? error.message : String(error);
}
