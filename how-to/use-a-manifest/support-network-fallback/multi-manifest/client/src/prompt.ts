/**
 * The offer to switch, shown in a small child window.
 *
 * The window is opened on about:blank and everything is written from memory, so it loads nothing over
 * the network and works whichever route is failing. The provider only calls askUser, so you can
 * replace this with a notification or your own UI.
 */

/**
 * What the prompt shows.
 */
export interface SwitchOffer {
	/**
	 * Why the switch is offered.
	 */
	reason: string;

	/**
	 * The host the platform is running from.
	 */
	fromDisplayHost: string;

	/**
	 * The host the platform would move to.
	 */
	toDisplayHost: string;
}

const PROMPT_STYLE = `
body { font-family: 'Segoe UI', system-ui, sans-serif; margin: 0; padding: 18px 20px; color: #1d2330; }
h1 { font-size: 17px; margin: 0 0 10px; }
p { font-size: 13px; margin: 6px 0; }
.reason { background: #f3f4f7; padding: 8px 10px; border-radius: 4px; }
.buttons { margin-top: 16px; display: flex; gap: 8px; justify-content: flex-end; }
button { font-size: 13px; padding: 6px 16px; cursor: pointer; }
#switch { background: #2b6cd6; color: #fff; border: 1px solid #2b6cd6; border-radius: 4px; }
#later { background: #fff; border: 1px solid #aab; border-radius: 4px; }
`;

/**
 * Escape text for insertion into HTML.
 * @param text The text.
 * @returns The escaped text.
 */
function escapeHtml(text: string): string {
	const replacements: [string, string][] = [
		["&", "&amp;"],
		["<", "&lt;"],
		[">", "&gt;"]
	];
	let result = text;
	for (const [from, to] of replacements) {
		result = result.replaceAll(from, to);
	}
	return result;
}

/**
 * Ask the user whether to switch routes. Closing the window counts as "decline".
 * @param offer What to show.
 * @returns The user's answer.
 */
export async function askUser(offer: SwitchOffer): Promise<"accept" | "decline"> {
	const child = window.open("about:blank", "support-network-fallback-prompt", "width=460,height=280");
	if (!child) {
		return "decline";
	}

	const doc = child.document;
	doc.title = "Switch network route?";
	const style = doc.createElement("style");
	style.textContent = PROMPT_STYLE;
	doc.head.append(style);
	doc.body.innerHTML = `
		<h1>Switch to ${escapeHtml(offer.toDisplayHost)}?</h1>
		<p class="reason">${escapeHtml(offer.reason)}</p>
		<p>The app is running from <b>${escapeHtml(offer.fromDisplayHost)}</b>.
		Switching will close and restart the app from <b>${escapeHtml(offer.toDisplayHost)}</b>.</p>
		<div class="buttons"><button id="later">Not now</button><button id="switch">Switch</button></div>`;

	return new Promise((resolve) => {
		let answered = false;

		/**
		 * Resolve once, close the window and stop watching it.
		 * @param value The answer.
		 */
		function answer(value: "accept" | "decline"): void {
			if (answered) {
				return;
			}
			answered = true;
			clearInterval(closedCheck);
			if (!child?.closed) {
				child?.close();
			}
			resolve(value);
		}

		const closedCheck = setInterval(() => {
			if (child?.closed) {
				answer("decline");
			}
		}, 500);
		doc.querySelector("#switch")?.addEventListener("click", () => answer("accept"));
		doc.querySelector("#later")?.addEventListener("click", () => answer("decline"));
	});
}
