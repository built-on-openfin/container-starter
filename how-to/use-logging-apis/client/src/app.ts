import { fin } from "@openfin/core";

let fileName: string;
let debugLogStr: string;
let debugLogFile: File;

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Populates DOM with the UI elements and adds listeners obtaining selected/submitted options.
 */
async function initDom(): Promise<void> {
	const logListElement = document.querySelector<HTMLSelectElement>("#log-list");
	if (logListElement) {
		await createLogDropDown(logListElement);
		logListElement.addEventListener("change", async (selectionChangeEvent) => {
			fileName = (selectionChangeEvent.target as HTMLOptionElement).value;
		});
	}

	const upload = document.querySelector<HTMLFormElement>("#upload-form");
	if (upload) {
		upload.addEventListener("submit", uploadHandler);
	}
	const sendAppLogBtn = document.querySelector<HTMLButtonElement>("#send-app-log");
	if (sendAppLogBtn) {
		sendAppLogBtn.addEventListener("click", sendApplicationLogs);
	}
}

/**
 * Handle uploads.
 * 1. Creates a FormData object.
 * 2. Creates a File object from the string of the Runtime debug log file contents.
 * 3. Populates the FormData object with necessary parameters to be read by the server.
 * 4. Uploads the created runtime debug log file to a server endpoint.
 * @param submitEvent The event to handle.
 */
async function uploadHandler(submitEvent: Event): Promise<void> {
	submitEvent.preventDefault();
	if (!fileName) {
		fileName = "debug.log";
	}
	const formData = new FormData();
	debugLogStr = await getLogFromName(fileName);
	debugLogFile = new File([debugLogStr], fileName, { type: "text/plain" });
	formData.append("file", debugLogFile);
	formData.append("filename", fileName);
	formData.append("uuid", fin.me.uuid);
	const uploadState = await fetch("http://localhost:5050/uploads", {
		method: "POST",
		body: formData
	});

	const uploadStateJson = await uploadState.json();
	const uploadStateJsonString = JSON.stringify(uploadStateJson, null, 5);
	const logs = `${new Date().toLocaleTimeString()}: ${uploadStateJsonString}\n`;
	const logPreview = document.querySelector("#preview");
	if (logPreview) {
		logPreview.textContent += logs;
	}
}

/**
 * Sends a message to the OpenFin RVM to send the application logs.
 */
async function sendApplicationLogs(): Promise<void> {
	try {
		const appLogResponse = await fin.Application.getCurrentSync().sendApplicationLog();
		console.log(`Log ID: ${appLogResponse.logId}`);
	} catch {
		// swallow unnecessary errors.
	}
}

/**
 * Retrieves the runtime debug log from a filename.
 * @param name file name of the runtime debug log to retrieve.
 * @returns the log content.
 */
async function getLogFromName(name: string): Promise<string> {
	const log = await fin.System.getLog({ name });
	return log;
}

/**
 * Creates an HTMLOptionElement for each of the Runtime debug logs.
 * @param parentElement HTML Element to append the log filename HTMLOptionElement to.
 */
async function createLogDropDown(parentElement: HTMLSelectElement): Promise<void> {
	const logList: OpenFin.LogInfo[] = await fin.System.getLogList();

	for (const log of logList) {
		const logElement: HTMLOptionElement = document.createElement("option");
		logElement.id = log.date;
		logElement.textContent = log.name;
		logElement.value = log.name;
		parentElement.append(logElement);
	}
}
