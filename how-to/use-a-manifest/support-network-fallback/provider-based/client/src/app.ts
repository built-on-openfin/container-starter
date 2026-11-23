/**
 * The app view. It shows what the provider reports and sends the switcher's choice to it.
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
	const {
		current,
		other,
		lastChecks,
		manifestUrl,
		providerOrigin,
		preferred,
		gateway,
		switching,
		launch,
		log
	} = status;
	const badge = document.querySelector<HTMLElement>("#badge");
	if (badge) {
		badge.style.background = current?.color ?? "#666";
		badge.textContent = current
			? `${current.id.toUpperCase()} route - ${current.displayHost}`
			: "Unknown route";
	}
	setText("#manifest-url", manifestUrl);
	setText("#provider-origin", providerOrigin);
	setText("#preferred", preferred ? "yes" : "no");
	setText(
		"#gateway-choice",
		gateway ? `${gateway.selectedBy}: ${gateway.detail}` : "not opened by the gateway"
	);
	setText("#gateway-service-worker", gateway?.serviceWorker ?? "-");
	setText("#check-current", describeCheck(lastChecks.current));
	setText("#check-other", other ? describeCheck(lastChecks.other) : "-");

	for (const button of document.querySelectorAll<HTMLButtonElement>(".route-choice")) {
		button.disabled = switching || button.dataset.route === current?.id;
	}

	setText("#launch-os", launch?.os ?? "-");
	setText("#launch-registration", launch?.registration ?? "-");
	setText("#scheme-link", launch?.schemeLink ?? "-");
	setText("#deep-link", launch?.deepLink ?? "-");

	const list = document.querySelector("#log");
	if (list) {
		list.replaceChildren(
			...[...log].reverse().map((entry) => {
				const item = document.createElement("li");
				item.textContent = `${new Date(entry.time).toLocaleTimeString()} ${entry.message}`;
				item.classList.toggle("launch", entry.kind === "launch");
				return item;
			})
		);
	}
}

/**
 * Connect to the provider and wire the switcher.
 */
async function init(): Promise<void> {
	client = await connectToStatusChannel(fin.me.identity.uuid, render);
	render((await client.dispatch("get-status")) as StatusMessage);

	for (const button of document.querySelectorAll<HTMLButtonElement>(".copy")) {
		button.addEventListener("click", async () => {
			const text = document.querySelector(button.dataset.copy ?? "")?.textContent ?? "";
			await fin.Clipboard.writeText({ data: text });
		});
	}

	for (const button of document.querySelectorAll<HTMLButtonElement>(".route-choice")) {
		button.addEventListener("click", async () => {
			setText("#action-result", "Storing the preference...");
			const message = (await client?.dispatch("switch-to", { route: button.dataset.route })) as string;
			setText("#action-result", message);
		});
	}
}

window.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		setText("#action-result", `Could not connect to the provider: ${String(error)}`);
	}
});
