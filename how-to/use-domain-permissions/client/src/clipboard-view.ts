/**
 * Shared logic for the clipboard permission demo views.
 * Displays resolved permission (queryPermissionForCurrentContext) and Copy/Paste actions.
 */

const SAMPLE_COPY_TEXT = "Domain permissions clipboard sample - copied from HERE Core.";

document.addEventListener("DOMContentLoaded", async () => {
	await initClipboardView();
});

/**
 * Initializes the clipboard view.
 */
async function initClipboardView(): Promise<void> {
	const permReadEl = document.querySelector("#permission-read");
	const permWriteEl = document.querySelector("#permission-write");
	const domainRuleEl = document.querySelector("#domain-rule");
	const copyResultEl = document.querySelector("#copy-result");
	const pasteResultEl = document.querySelector("#paste-result");
	const pasteContentEl = document.querySelector("#paste-content");
	const btnCopy = document.querySelector("#btn-copy");
	const btnPaste = document.querySelector("#btn-paste");

	// Resolved permission from current context (domain rules override view/window)
	if (typeof fin !== "undefined" && fin.System) {
		try {
			const [readResult, writeResult] = await Promise.all([
				fin.System.queryPermissionForCurrentContext("Clipboard.readText"),
				fin.System.queryPermissionForCurrentContext("Clipboard.writeText")
			]);
			if (permReadEl) {
				permReadEl.textContent = `Clipboard.readText: ${readResult?.state ?? "unavailable"}`;
				permReadEl.classList.toggle("success", readResult?.granted);
				permReadEl.classList.toggle("error", !readResult?.granted);
			}
			if (permWriteEl) {
				permWriteEl.textContent = `Clipboard.writeText: ${writeResult?.state ?? "unavailable"}`;
				permWriteEl.classList.toggle("success", writeResult?.granted);
				permWriteEl.classList.toggle("error", !writeResult?.granted);
			}
		} catch (e) {
			if (permReadEl) {
				permReadEl.textContent = `Clipboard.readText: error - ${String(e)}`;
			}

			if (permWriteEl) {
				permWriteEl.textContent = `Clipboard.writeText: error - ${String(e)}`;
			}
		}

		// Optional: show which domain rule applied (requires current view identity)
		try {
			const view = fin.View.getCurrentSync();
			const identity = view?.identity;
			if (identity && typeof fin.System.getCurrentDomainSettings === "function") {
				const domainSettings = await fin.System.getCurrentDomainSettings(identity);
				if (domainRuleEl && domainSettings) {
					const resolved = domainSettings as { matchedRules?: unknown[] };
					if (
						resolved.matchedRules &&
						Array.isArray(resolved.matchedRules) &&
						resolved.matchedRules.length > 0
					) {
						domainRuleEl.textContent = "Domain rule: matched (this URL is allowed clipboard access)";
						domainRuleEl.classList.add("success");
					} else {
						domainRuleEl.textContent =
							"Domain rule: default (no match — clipboard blocked by domain default)";
						domainRuleEl.classList.add("error");
					}
				}
			} else if (domainRuleEl) {
				domainRuleEl.textContent = "Domain rule: unable to resolve (no view identity)";
			}
		} catch {
			if (domainRuleEl) {
				domainRuleEl.textContent = "Domain rule: unable to resolve";
			}
		}
	} else {
		if (permReadEl) {
			permReadEl.textContent = "Clipboard.readText: fin not available";
		}

		if (permWriteEl) {
			permWriteEl.textContent = "Clipboard.writeText: fin not available";
		}

		if (domainRuleEl) {
			domainRuleEl.textContent = "Domain rule: fin not available";
		}
	}

	// Copy button
	if (btnCopy) {
		btnCopy.addEventListener("click", async () => {
			if (!copyResultEl) {
				return;
			}

			try {
				if (typeof fin !== "undefined" && fin.Clipboard) {
					await fin.Clipboard.writeText({ data: SAMPLE_COPY_TEXT });
					copyResultEl.textContent = "Success: text written to clipboard.";
					copyResultEl.className = "result success";
				} else {
					copyResultEl.textContent = "fin.Clipboard not available.";
					copyResultEl.className = "result error";
				}
			} catch (err) {
				copyResultEl.textContent = `Error: ${String(err)}`;
				copyResultEl.className = "result error";
			}
		});
	}

	// Paste button
	if (btnPaste) {
		btnPaste.addEventListener("click", async () => {
			if (!pasteResultEl || !pasteContentEl) {
				return;
			}

			try {
				if (typeof fin !== "undefined" && fin.Clipboard) {
					const result = await fin.Clipboard.readText();
					const text = typeof result === "string" ? result : (result as { data?: string })?.data ?? "(empty)";
					(pasteContentEl as HTMLTextAreaElement).value = text;
					pasteResultEl.textContent = "Success: text read from clipboard.";
					pasteResultEl.className = "result success";
				} else {
					pasteResultEl.textContent = "fin.Clipboard not available.";
					pasteResultEl.className = "result error";
				}
			} catch (err) {
				pasteResultEl.textContent = `Error: ${String(err)}`;
				pasteResultEl.className = "result error";
				(pasteContentEl as HTMLTextAreaElement).value = "";
			}
		});
	}
}
