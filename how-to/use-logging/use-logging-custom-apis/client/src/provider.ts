import type OpenFin from "@openfin/core";
import { fin } from "@openfin/core";

let fileName: string;
let debugLogStr: string;
let debugLogFile: File;
let opfsLogFile: File;
const channelName = `${fin.me.identity.uuid}-logger`;
let channelClient: OpenFin.ChannelClient;
let channelProvider: OpenFin.ChannelProvider;
let fileHandle: FileSystemFileHandle;

window.addEventListener("DOMContentLoaded", async () => {
	const platform: OpenFin.Platform = fin.Platform.getCurrentSync();
	await platform.once("platform-api-ready", async () => init());
	fin.Platform.init({
		overrideCallback: async (Provider) => {
			/**
			 * Override the provider class.
			 */
			class Override extends Provider {}
			return new Override();
		}
	}).catch(() => {});
});

/**
 * Populates DOM with the UI elements and adds listeners obtaining selected/submitted options.
 */
async function init(): Promise<void> {
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

	const sendOPFSLogBtn = document.querySelector<HTMLButtonElement>("#send-opfs-log");
	if (sendOPFSLogBtn) {
		sendOPFSLogBtn.addEventListener("click", sendOPFSLogs);
	}

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

	await setupChannelClientAndService();
}

/**
 * Sets up the Channel Client and Service.
 */
async function setupChannelClientAndService(): Promise<void> {
	// if your content is coming from the same domain then you would not need to use the Channel API and can consider alternatives
	// such as BroadcastChannel API or SharedWorker
	if (channelClient === undefined && channelProvider === undefined) {
		// set up the file handler for logging for the service
		if (fileHandle === undefined) {
			const root = await navigator.storage.getDirectory();
			// Create a new file handle.
			// The name could be date based if you were going to create a new file each day.
			fileHandle = await root.getFileHandle("log.log", { create: true });
		}
		channelProvider = await fin.InterApplicationBus.Channel.create(channelName);
		channelProvider.onConnection((identity, payload) => {
			if (identity.uuid !== fin.me.identity.uuid) {
				// reject connection
				throw new Error("Connection rejected. Only the current application can connect to the channel.");
			}
			// you can add additional logic to validate the view/window connecting (e.g. to ensure it is only trusted urls that are allowed to log etc)
		});
		channelProvider.register("log", async (payload: unknown, identity) => {
			if (identity.uuid !== fin.me.identity.uuid) {
				// reject request to log (this is optional but you might have multiple actions registered and you might allow a connection to the service but not all actions)
				throw new Error("Log request rejected. Only the current application can log.");
			}
			const logPreview = document.querySelector("#preview");
			try {
				// you could make this more complex to support log levels etc. For now we just pass a string to the log function
				// utc timestamp
				const utcTimestamp = new Date().toISOString();
				const message = `${utcTimestamp}|${identity.name}|${payload}`;
				await writeLogToFile(message);
				if (logPreview) {
					logPreview.textContent += `
Console Logged the following message through Channel API: 
"${message}"`;
				}
			} catch (err: unknown) {
				if (logPreview) {
					logPreview.textContent += `
Error console logging message through Channel API: ${(err as Error).message}`;
				}
			}
		});
		channelClient = await fin.InterApplicationBus.Channel.connect(channelName);
	}
}

/**
 * Write logs to file. This logic could be done in a worker to avoid blocking the main thread.
 * https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system.
 * @param logMessage The log message to write to file.
 */
async function writeLogToFile(logMessage: string): Promise<void> {
	try {
		if (fileHandle === undefined) {
			const root = await navigator.storage.getDirectory();
			// Create a new file handle if it doesn't exist.
			// The name could be date based if you were going to create a new file each day.
			fileHandle = await root.getFileHandle("log.log", { create: true });
		}
		// Create a writable stream
		const writableStream = await fileHandle.createWritable({ keepExistingData: true });

		// Move the write position to the end of the file
		const fileForSize = await fileHandle.getFile();
		const size = fileForSize.size;
		await writableStream.seek(size);

		// Write the log message to the file
		if (size === 0) {
			await writableStream.write(logMessage);
		} else {
			await writableStream.write(`\n${logMessage}`);
		}

		// Close the file
		await writableStream.close();

		console.log("Log written to file successfully.");
	} catch (err) {
		console.error("Error writing log to file:", err);
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
	const logPreview = document.querySelector("#preview");

	try {
		const uploadState = await fetch("http://localhost:5050/uploads", {
			method: "POST",
			body: formData
		});
		const uploadStateJson = await uploadState.json();
		const uploadStateJsonString = JSON.stringify(uploadStateJson, null, 5);
		const logs = `${new Date().toLocaleTimeString()}: ${uploadStateJsonString}\n`;
		if (logPreview) {
			logPreview.textContent += logs;
		}
	} catch (err: unknown) {
		if (logPreview) {
			logPreview.textContent += `
Error uploading Runtime Logs: ${(err as Error).message}`;
		}
	}
}

/**
 * Uploads the OPFS log file to the server.
 * @returns true if the log file was uploaded successfully, false otherwise.
 */
async function uploadOPFSLogHandler(): Promise<boolean> {
	// read the log file from origin private file system
	if (fileHandle !== undefined) {
		try {
			// read the file from fileHanlde
			const file = await fileHandle.getFile();
			const logFileName = file.name;
			const fileContents = await file.text();
			opfsLogFile = new File([fileContents], logFileName, { type: "text/plain" });
			const opfsFormData = new FormData();
			opfsFormData.append("opfsFile", opfsLogFile);
			opfsFormData.append("filename", logFileName);
			opfsFormData.append("uuid", fin.me.uuid);
			const result = await fetch("http://localhost:5050/opfsuploads", {
				method: "POST",
				body: opfsFormData
			});
			if (result.ok) {
				// Clear the log file after uploading
				const writableStream = await fileHandle.createWritable();
				await writableStream.truncate(0);
				await writableStream.close();

				const logPreview = document.querySelector("#preview");
				const uploadStateJson = await result.json();
				const uploadStateJsonString = JSON.stringify(uploadStateJson, null, 5);
				const logs = `${new Date().toLocaleTimeString()}: ${uploadStateJsonString}\n`;
				if (logPreview) {
					logPreview.textContent += logs;
				}
				return true;
			}
			return false;
		} catch (error) {
			console.error("Error reading log file:", error);
			return false;
		}
	}
	return false;
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

/**
 * Sends a message to the HERE RVM to send the application logs.
 */
async function sendApplicationLogs(): Promise<void> {
	const logPreview = document.querySelector("#preview");
	try {
		const appLogResponse = await fin.Application.getCurrentSync().sendApplicationLog();
		if (logPreview) {
			logPreview.textContent += `
Uploaded App Logs. Log ID: ${appLogResponse.logId}`;
		}
	} catch (err: unknown) {
		if (logPreview) {
			logPreview.textContent += `
Error uploading App Logs: ${(err as Error).message}`;
		}
	}
}

/**
 * Sends opfs logs to the server.
 */
async function sendOPFSLogs(): Promise<void> {
	const logPreview = document.querySelector("#preview");
	try {
		const success = await uploadOPFSLogHandler();
		if (logPreview) {
			logPreview.textContent += `
Uploaded OPFS Logs. Success: ${success}`;
		}
	} catch (err: unknown) {
		if (logPreview) {
			logPreview.textContent += `
Error uploading OPFS Logs: ${(err as Error).message}`;
		}
	}
}

/**
 * Sends a message to console log.
 */
async function consoleLogMessage(): Promise<void> {
	const logPreview = document.querySelector("#preview");
	try {
		const message = `
Sending console log message: ${Date.now()}`;
		console.log(message);
		if (logPreview) {
			logPreview.textContent += `
Console Logged the following message: 
"${message}"`;
		}
	} catch (err: unknown) {
		if (logPreview) {
			logPreview.textContent += `
Error console logging message: ${(err as Error).message}`;
		}
	}
}

/**
 * Sends a message to console log through the Channel API.
 */
async function channelLogMessage(): Promise<void> {
	const logPreview = document.querySelector("#preview");
	try {
		const message = `
Sending channel log message: ${Date.now()}`;
		if (logPreview) {
			logPreview.textContent += `
Sending the following message through the Channel API: 
"${message}"`;
		}
		await channelClient.dispatch("log", message);
	} catch (err: unknown) {
		if (logPreview) {
			logPreview.textContent += `
Error sending message through Channel API: ${(err as Error).message}`;
		}
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
