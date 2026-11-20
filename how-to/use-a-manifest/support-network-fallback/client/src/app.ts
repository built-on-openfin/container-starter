/**
 * The app view. It shows what the provider reports and sends the manual switch request to it.
 */
import type OpenFin from "@openfin/core";
import { connectToStatusChannel, type StatusMessage } from "./channels";
import type { HealthResult } from "./health-check";

let client: OpenFin.ChannelClient | undefined;

/**
 * Set the text of an element.
 * @param selector The element selector.
 * @param text The text.
 */
function setText(selector: string, text: string): void {
	const element = document.querySelector(selector);
	if (element) {
		element.textContent = text;
	}
}

/**
 * Describe a health check result.
 * @param result The result, if there is one.
 * @returns The description.
 */
function describeCheck(result: HealthResult | undefined): string {
	return result ? `${result.detail} at ${new Date(result.time).toLocaleTimeString()}` : "not checked yet";
}

/**
 * Render a status update.
 * @param status The status.
 */
function render(status: StatusMessage): void {
	const { current, other, lastChecks, manifestUrl, providerOrigin, preferred, log } = status;
	const badge = document.querySelector<HTMLElement>("#badge");
	if (badge) {
		badge.style.background = current?.color ?? "#666";
		badge.textContent = current
			? `${current.id.toUpperCase()} route - ${current.displayHost}`
			: "Unknown route";
	}
	setText("#manifest-url", manifestUrl);
	setText("#provider-origin", providerOrigin);
	setText("#preferred", preferred ? "yes (the manifest has a shortcut block)" : "no");
	setText("#other-route", other ? `${other.displayHost} (${other.origin})` : "none configured");
	setText("#check-current", describeCheck(lastChecks.current));
	setText("#check-other", other ? describeCheck(lastChecks.other) : "-");

	const list = document.querySelector("#log");
	if (list) {
		list.replaceChildren(
			...[...log].reverse().map((entry) => {
				const item = document.createElement("li");
				item.textContent = `${new Date(entry.time).toLocaleTimeString()} ${entry.message}`;
				return item;
			})
		);
	}

	const button = document.querySelector<HTMLElement>("#manual-switch");
	if (button) {
		button.hidden = other === undefined;
	}
}

/**
 * Connect to the provider and wire the button.
 */
async function init(): Promise<void> {
	client = await connectToStatusChannel(fin.me.identity.uuid, render);
	render((await client.dispatch("get-status")) as StatusMessage);

	document.querySelector("#manual-switch")?.addEventListener("click", async () => {
		const offered = (await client?.dispatch("manual-switch")) as boolean;
		setText("#action-result", offered ? "" : "A switch offer is already open.");
	});
}

window.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		setText("#action-result", `Could not connect to the provider: ${String(error)}`);
	}
});
