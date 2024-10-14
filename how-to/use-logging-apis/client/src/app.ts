import type OpenFin from "@openfin/core";
import { fin } from "@openfin/core";

const channelName = `${fin.me.identity.uuid}-logger`;
let channelClient: OpenFin.ChannelClient;

window.addEventListener("DOMContentLoaded", async () => {
	const consoleLogBtn = document.querySelector<HTMLButtonElement>("#console-app-log");
	if (consoleLogBtn) {
		consoleLogBtn.addEventListener("click", consoleLogMessage);
	}

	const channelLogBtn = document.querySelector<HTMLButtonElement>("#channel-app-log");
	if (channelLogBtn) {
		channelLogBtn.addEventListener("click", channelLogMessage);
	}

	const clearPreviewBtn = document.querySelector<HTMLButtonElement>("#clear-preview");
	if (clearPreviewBtn) {
		clearPreviewBtn.addEventListener("click", clearPreview);
	}
	await setupChannelClient();
});

/**
 * Sends a message to console log.
 */
async function consoleLogMessage(): Promise<void> {
	const logPreview = document.querySelector("#preview");
	try {
		const message = `Sending view console log message: ${Date.now()}`;
		console.log(message);
		if (logPreview) {
			logPreview.textContent += `
Console Logged the following message: 
"${message}"`;
		}
	} catch (err: unknown) {
		if (logPreview) {
			logPreview.textContent += `Error console logging message: ${(err as Error).message}`;
		}
	}
}

/**
 * Sends a message to console log through the Channel API.
 */
async function channelLogMessage(): Promise<void> {
	const logPreview = document.querySelector("#preview");
	try {
		const message = `Sending view channel log message: ${Date.now()}`;
		if (logPreview) {
			logPreview.textContent += `
Sending the following message through the Channel API: 
"${message}"`;
		}
		await channelClient.dispatch("log", message);
	} catch (err: unknown) {
		if (logPreview) {
			logPreview.textContent += `Error sending message through Channel API: ${(err as Error).message}`;
		}
	}
}

/**
 * Sets up the Channel Client.
 */
async function setupChannelClient(): Promise<void> {
	if (channelClient === undefined) {
		channelClient = await fin.InterApplicationBus.Channel.connect(channelName);
	}
}

/**
 * Clears the preview log.
 */
function clearPreview(): void {
	const logPreview = document.querySelector("#preview");
	if (logPreview) {
		logPreview.textContent = "";
	}
}
