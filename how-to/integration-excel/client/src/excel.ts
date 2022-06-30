import { getCurrentChannel } from "@finos/fdc3";
import { Cell, ExcelApplication, ExcelWorkbook, ExcelWorksheet, getExcelApplication } from "@openfin/excel";

const knownInstruments = ["TSLA", "MSFT", "AAPL"];

let excel: ExcelApplication | undefined;
let openWorkbooks:
	| {
			book: ExcelWorkbook;
			name: string;
	  }[]
	| undefined;
let selectedWorkbookIndex: number | undefined;
let openWorksheets:
	| {
			sheet: ExcelWorksheet;
			name: string;
	  }[]
	| undefined;
let selectedWorksheetIndex: number | undefined;

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

async function init(): Promise<void> {
	try {
		excel = await getExcelApplication();

		await populateWorkbooks();

		const refreshWorkbookButton = document.querySelector("#workbook-refresh");
		refreshWorkbookButton.addEventListener("click", async () => populateWorkbooks());

		const refreshWorksheetButton = document.querySelector("#worksheet-refresh");
		refreshWorksheetButton.addEventListener("click", async () => populateWorksheets());

		const openWorkbooksSelect = document.querySelector("#workbooks");
		openWorkbooksSelect.addEventListener("change", async (e) =>
			selectWorkbook((e.target as unknown as { value: string }).value)
		);

		const openWorksheetsSelect = document.querySelector("#worksheets");
		openWorksheetsSelect.addEventListener("change", async (e) =>
			selectWorksheet((e.target as unknown as { value: string }).value)
		);
	} catch (err) {
		showError(err);
	}
}

function showError(err) {
	const errDom = document.querySelector("#error");
	errDom.innerHTML = err.message;
}

async function populateWorkbooks(): Promise<void> {
	if (excel) {
		selectedWorkbookIndex = undefined;
		const refreshButton: HTMLButtonElement = document.querySelector("#workbook-refresh");
		refreshButton.disabled = true;

		const select = document.querySelector<HTMLSelectElement>("#workbooks");
		select.disabled = true;
		select.innerHTML = "";

		openWorkbooks = [];

		try {
			const workbooks = await excel.getWorkbooks();

			for (const book of workbooks) {
				const name = await book.getName();
				openWorkbooks.push({
					book,
					name
				});
			}

			const optionEmpty = document.createElement("option");
			optionEmpty.innerHTML = "----Select workbook----";
			optionEmpty.value = "";
			optionEmpty.selected = true;
			optionEmpty.disabled = true;
			select.append(optionEmpty);

			for (const openWorkbook of openWorkbooks) {
				const option = document.createElement("option");
				option.innerHTML = openWorkbook.name;
				option.value = openWorkbook.name;
				select.append(option);
			}
		} catch (err) {
			console.error(err);
			showError(err);
		} finally {
			select.disabled = false;
			refreshButton.disabled = false;
		}
	}
}

async function selectWorkbook(name: string): Promise<void> {
	const newWorkbookIndex = openWorkbooks.findIndex((w) => w.name === name);

	if (newWorkbookIndex !== selectedWorkbookIndex) {
		selectedWorkbookIndex = newWorkbookIndex;
		if (newWorkbookIndex >= 0) {
			await openWorkbooks[selectedWorkbookIndex].book.activate();
		}
	}

	await populateWorksheets();
}

async function populateWorksheets(): Promise<void> {
	if (excel) {
		selectedWorksheetIndex = undefined;
		const refreshButton: HTMLButtonElement = document.querySelector("#worksheet-refresh");
		refreshButton.disabled = true;

		const cellContainer = document.querySelector<HTMLElement>("#cell-container");
		cellContainer.style.display = "none";

		const select = document.querySelector<HTMLSelectElement>("#worksheets");
		select.disabled = true;
		select.innerHTML = "";

		openWorksheets = [];

		const workbook = openWorkbooks[selectedWorkbookIndex];
		if (workbook) {
			try {
				const sheets = await workbook.book.getWorksheets();

				for (const sheet of sheets) {
					const name = await sheet.getName();
					openWorksheets.push({
						sheet,
						name
					});
				}

				const optionEmpty = document.createElement("option");
				optionEmpty.innerHTML = "----Select worksheet----";
				optionEmpty.value = "";
				optionEmpty.selected = true;
				optionEmpty.disabled = true;
				select.append(optionEmpty);

				for (const openWorksheet of openWorksheets) {
					const option = document.createElement("option");
					option.innerHTML = openWorksheet.name;
					option.value = openWorksheet.name;
					select.append(option);
				}
			} catch (err) {
				console.error(err);
				showError(err);
			} finally {
				select.disabled = false;
				refreshButton.disabled = false;
			}
		}
	}
}

async function selectWorksheet(name: string): Promise<void> {
	const newWorksheetIndex = openWorksheets.findIndex((w) => w.name === name);

	if (newWorksheetIndex !== selectedWorksheetIndex) {
		const oldWorksheet = openWorksheets[selectedWorksheetIndex];
		if (oldWorksheet) {
			await oldWorksheet.sheet.removeEventListener(handleCellChange);
		}

		selectedWorksheetIndex = newWorksheetIndex;
		if (selectedWorksheetIndex >= 0) {
			await openWorksheets[selectedWorksheetIndex].sheet.activate();
			await openWorksheets[selectedWorksheetIndex].sheet.addEventListener("change", handleCellChange);
			document.querySelector<HTMLElement>("#cell-container").style.display = "block";
		}
	}
}

async function handleCellChange(cells: Cell[]): Promise<void> {
	const cellContainer = document.querySelector("#cell-changes-container");
	cellContainer.innerHTML = JSON.stringify(cells);

	for (const cell of cells) {
		if (knownInstruments.includes(cell.value)) {
			await broadcastInstrument(cell.value);
		}
	}
}

async function broadcastInstrument(instrument: string): Promise<void> {
	const broadcastContainer = document.querySelector<HTMLElement>("#broadcast-container");
	broadcastContainer.style.display = "block";

	const broadcastElement = document.querySelector("#broadcast-instrument");
	if (window.fdc3) {
		try {
			const fdcInstrument = {
				type: "fdc3.instrument",
				id: {
					ticker: instrument
				}
			};

			const channel = await getCurrentChannel();
			channel.broadcast(fdcInstrument);

			broadcastElement.textContent = instrument;
		} catch (err) {
			broadcastElement.textContent = err.message;
		}
	} else {
		broadcastElement.textContent = "No FD3 Channel available";
	}
}
