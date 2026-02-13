document.addEventListener("DOMContentLoaded", () => {
	initDom().catch((error) => console.error(error));
});

let loggingElement: HTMLElement | null = null;
/**
 * Initialize the DOM components and wire up event handlers.
 */
async function initDom(): Promise<void> {
	const btnShowHostSpecs = document.querySelector<HTMLButtonElement>("#btn-show-host-specs");
	const btnShowOSInfo = document.querySelector<HTMLButtonElement>("#btn-show-os-info");
	loggingElement = document.querySelector<HTMLElement>("#logging");

	const btnLoggingClear = document.querySelector("#btnLoggingClear");
	if (btnLoggingClear) {
		btnLoggingClear.addEventListener("click", () => {
			if (loggingElement) {
				loggingElement.textContent = "";
			}
		});
	}

	if (!btnShowHostSpecs || !btnShowOSInfo) {
		console.warn("Missing required buttons");
		return;
	}

	btnShowHostSpecs.addEventListener("click", async () => {
		const hostSpecs = await fin.System.getHostSpecs();
		const hostSpecsText = `Code to execute: \n\nawait fin.System.getHostSpecs();\n\nPermission Required: None\n\nResulting Data:\n\n ${JSON.stringify(hostSpecs, null, 5)}`;
		if (loggingElement) {
			loggingAddEntry(hostSpecsText);
		}
	});

	btnShowOSInfo.addEventListener("click", async () => {
		const osInfo = await fin.System.getOSInfo();
		const osInfoText = `Code to execute:\n\nawait fin.System.getOSInfo();\n\nPermission Required: getOSInfo\n\nPermission Example:
"System": {
	"getOSInfo": true
}\n\nResulting Data:\n\n ${JSON.stringify(osInfo, null, 5)}`;

		if (loggingElement) {
			loggingAddEntry(osInfoText);
		}
	});
}

/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry: string): void {
	if (loggingElement) {
		loggingElement.textContent = `${entry}\n\n`;
	}
}
