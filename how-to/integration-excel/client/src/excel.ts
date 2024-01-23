import { getCurrentChannel } from "@finos/fdc3";
import {
	type Cell,
	type ExcelApplication,
	type ExcelWorkbook,
	type ExcelWorksheet,
	getExcelApplication
} from "@openfin/excel";

const KNOWN_INSTRUMENTS = ["TSLA", "MSFT", "AAPL"];

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
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initialize the DOM components.
 */
async function initDom(): Promise<void> {
	try {
		const resultsContainer = document.querySelector<HTMLElement>("#results-container");
		if (resultsContainer) {
			resultsContainer.style.display = "none";
		}

		excel = await getExcelApplication();

		await populateWorkbooks();

		const openExcelButton = document.querySelector("#open-excel");
		if (openExcelButton) {
			openExcelButton.addEventListener("click", async () => {
				await openExcel();
			});
		}

		const refreshWorkbookButton = document.querySelector("#workbook-refresh");
		if (refreshWorkbookButton) {
			refreshWorkbookButton.addEventListener("click", async () => populateWorkbooks());
		}

		const refreshWorksheetButton = document.querySelector("#worksheet-refresh");
		if (refreshWorksheetButton) {
			refreshWorksheetButton.addEventListener("click", async () => populateWorksheets());
		}

		const openWorkbooksSelect = document.querySelector("#workbooks");
		if (openWorkbooksSelect) {
			openWorkbooksSelect.addEventListener("change", async (e) =>
				selectWorkbook((e.target as unknown as { value: string }).value)
			);
		}

		const openWorksheetsSelect = document.querySelector("#worksheets");
		if (openWorksheetsSelect) {
			openWorksheetsSelect.addEventListener("change", async (e) =>
				selectWorksheet((e.target as unknown as { value: string }).value)
			);
		}

		const setValueButton = document.querySelector("#set-value");
		if (setValueButton) {
			setValueButton.addEventListener("click", async () => {
				await setCellValue();
			});
		}
	} catch (err) {
		showError(err);
	}
}

/**
 * Show an error on the UI.
 * @param err The error to display.
 */
function showError(err: unknown): void {
	const errDom = document.querySelector("#error");
	if (errDom) {
		errDom.innerHTML = err instanceof Error ? err.message : JSON.stringify(err);
	}
}

/**
 * Open the excel instance.
 */
async function openExcel(): Promise<void> {
	try {
		if (
			openWorkbooks &&
			selectedWorkbookIndex !== undefined &&
			openWorksheets &&
			selectedWorksheetIndex !== undefined
		) {
			// Open the select work book and sheet
			// if anything throws an exception just open a new workbook
			await selectWorkbook(openWorkbooks[selectedWorkbookIndex].name);
			await selectWorksheet(openWorksheets[selectedWorksheetIndex].name);
		}
	} catch {
		if (excel) {
			await excel.createWorkbook();
			await populateWorkbooks();
		}
	}
}

/**
 * Populate the list of workbooks.
 */
async function populateWorkbooks(): Promise<void> {
	if (excel) {
		selectedWorkbookIndex = undefined;
		const refreshButton = document.querySelector<HTMLButtonElement>("#workbook-refresh");
		const select = document.querySelector<HTMLSelectElement>("#workbooks");

		if (refreshButton && select) {
			refreshButton.disabled = true;

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
}

/**
 * Select a workbook.
 * @param name The name of the workbook to select.
 */
async function selectWorkbook(name: string): Promise<void> {
	if (openWorkbooks) {
		const newWorkbookIndex = openWorkbooks.findIndex((w) => w.name === name);

		if (newWorkbookIndex !== selectedWorkbookIndex) {
			selectedWorkbookIndex = newWorkbookIndex;
			if (newWorkbookIndex >= 0) {
				await openWorkbooks[selectedWorkbookIndex].book.activate();
			}
		}

		await populateWorksheets();
	}
}

/**
 * Populate the worksheets.
 */
async function populateWorksheets(): Promise<void> {
	if (excel) {
		selectedWorksheetIndex = undefined;
		const refreshButton = document.querySelector<HTMLButtonElement>("#worksheet-refresh");
		const select = document.querySelector<HTMLSelectElement>("#worksheets");

		if (select && refreshButton && openWorkbooks && selectedWorkbookIndex !== undefined) {
			refreshButton.disabled = true;

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
}

/**
 * Select a worksheet.
 * @param name The name of worksheet to select.
 */
async function selectWorksheet(name: string): Promise<void> {
	if (openWorksheets) {
		const newWorksheetIndex = openWorksheets.findIndex((w) => w.name === name);

		if (newWorksheetIndex !== selectedWorksheetIndex) {
			if (selectedWorksheetIndex !== undefined) {
				const oldWorksheet = openWorksheets[selectedWorksheetIndex];
				if (oldWorksheet) {
					await oldWorksheet.sheet.removeEventListener(handleCellChange);
				}
			}

			selectedWorksheetIndex = newWorksheetIndex;
			if (selectedWorksheetIndex >= 0) {
				await openWorksheets[selectedWorksheetIndex].sheet.activate();
				await openWorksheets[selectedWorksheetIndex].sheet.addEventListener("change", handleCellChange);

				const resultsContainer = document.querySelector<HTMLElement>("#results-container");
				if (resultsContainer) {
					resultsContainer.style.display = "flex";
				}

				const cellLocation = document.querySelector<HTMLInputElement>("#cell-location");
				if (cellLocation) {
					cellLocation.disabled = false;
				}
				const cellValue = document.querySelector<HTMLInputElement>("#cell-value");
				if (cellValue) {
					cellValue.disabled = false;
				}
				const setValue = document.querySelector<HTMLInputElement>("#set-value");
				if (setValue) {
					setValue.disabled = false;
				}
			}
		}
	}
}

/**
 * Handle a change from the excel worksheet.
 * @param cells The cells that were changed.
 */
async function handleCellChange(cells: Cell[]): Promise<void> {
	const cellContainer = document.querySelector("#cell-changes-container");
	if (cellContainer) {
		cellContainer.innerHTML = JSON.stringify(cells, undefined, "  ");

		for (const cell of cells) {
			if (KNOWN_INSTRUMENTS.includes(cell.value)) {
				await broadcastInstrument(cell.value);
			}
		}
	}
}

/**
 * Set a cell value in excel.
 */
async function setCellValue(): Promise<void> {
	if (openWorksheets && selectedWorksheetIndex !== undefined) {
		const cellLocation = document.querySelector<HTMLInputElement>("#cell-location");
		const cellValue = document.querySelector<HTMLInputElement>("#cell-value");

		if (cellLocation && cellValue) {
			const cells = [[cellValue.value]];
			await openWorksheets[selectedWorksheetIndex].sheet.setCellValues(cellLocation.value, cells);
		}
	}
}

/**
 * Broadcast and FDC3 instrument.
 * @param instrument The instrument to broadcast.
 */
async function broadcastInstrument(instrument: string): Promise<void> {
	const broadcastElement = document.querySelector<HTMLInputElement>("#broadcast-instrument");
	if (broadcastElement) {
		if (window.fdc3) {
			try {
				const fdcInstrument = {
					type: "fdc3.instrument",
					id: {
						ticker: instrument
					}
				};

				const channel = await getCurrentChannel();
				if (channel) {
					await channel.broadcast(fdcInstrument);
				}

				broadcastElement.value = instrument;
			} catch (err) {
				broadcastElement.value = err instanceof Error ? err.message : JSON.stringify(err);
			}
		} else {
			broadcastElement.textContent = "No FD3 Channel available";
		}
	}
}
