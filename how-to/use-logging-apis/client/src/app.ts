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

async function initDom(): Promise<void> {
	const logListElement: HTMLSelectElement = document.querySelector("#log-list");
	await createLogDropDown(logListElement);
	logListElement.addEventListener("change", async (selectionChangeEvent) => {
		fileName = (selectionChangeEvent.target as HTMLOptionElement).value;
	});

	const upload: HTMLFormElement = document.querySelector("#upload-form");
	upload.addEventListener("submit", uploadHandler);
	const sendAppLogBtn: HTMLButtonElement = document.querySelector("#send-app-log");
	sendAppLogBtn.addEventListener("click", async (e) => sendApplicationLogs(e));
}

async function uploadHandler(submitEvent) {
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
	const uploadState = await fetch("http://localhost:5050/upload", {
		method: "POST",
		body: formData
	});

	const uploadStateJson = await uploadState.json();
	const uploadStateJsonString = JSON.stringify(uploadStateJson, null, 5);
	const logs = `${new Date(Date.now()).toLocaleTimeString()}: ${uploadStateJsonString}\n`;
	const logPreview: HTMLPreElement = document.querySelector("#preview");
	logPreview.textContent += logs;
}

async function sendApplicationLogs(e) {
	try {
		e.preventDefault();
		await fin.Application.getCurrentSync().sendApplicationLog();
	} catch {
		// swallow unnecessary errors.
	}
}
async function getLogFromName(name: string): Promise<string> {
	const log = await fin.System.getLog({ name });
	return log;
}

async function createLogDropDown(parentElement: HTMLSelectElement) {
	const logList: OpenFin.LogInfo[] = await fin.System.getLogList();

	for (const log of logList) {
		const logElement: HTMLOptionElement = document.createElement("option");
		logElement.id = log.date;
		logElement.textContent = log.name;
		logElement.value = log.name;
		parentElement.append(logElement);
	}
}
