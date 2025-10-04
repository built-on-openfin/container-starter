/* eslint-disable linebreak-style */
// import Openfin from "@openfin/core";

/**
 * Adds a log entry to the log display element.
 * @param text - The text to add to the log.
 */
function addToLog(text: string): void {
	const logPre = document.querySelector("#logText");

	if (logPre) {
		logPre.textContent = `${logPre.textContent}${text}\n\n`;
		logPre.scrollTop = logPre.scrollHeight;
	}
}
document.addEventListener("DOMContentLoaded", () => {
	const lepBtn = document.querySelector("#lep-button");
	if (lepBtn) {
		lepBtn.addEventListener("click", async () => {
			try {
				addToLog("Launching Log Uploader...");
				const showUICheckbox = document.querySelector<HTMLInputElement>("#chk_showui");
				const showUI = showUICheckbox ? showUICheckbox.checked : true;
				addToLog(`Show UI: ${showUI}`);
				const ui = showUI
					? {
							show: true,
							title: "Log Uploader for Here.io",
							icon: "https://www.here.io/favicon.ico",
							header: "Here.io",
							description:
								"This is the log uploader tool. It will upload app, rvm and debug logs to the indicated endpoint",
							email: "support@nowhere.com",
							website: "https://www.here.io",
							websiteDescription: "The Here.io web site"
					  }
					: { show: false };

				const data = await fin.System.launchLogUploader({
					endpoint: "http://localhost:3000/api/upload",
					manifests: [],
					logs: ["debug", "app", "rvm"],
					ui
				});
				if (data !== undefined) {
					addToLog(`Log Uploader result: ${JSON.stringify(data)}`);
				} else {
					addToLog("Log Uploader completed operation successfully.");
				}
			} catch (err) {
				addToLog(`Error launching Log Uploader: ${err instanceof Error ? err.message : String(err)}`);
			}
		});
	}
});
