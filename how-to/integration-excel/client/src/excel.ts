import { Cell, ExcelApplication, ExcelWorkbook, ExcelWorksheet, getExcelApplication } from '@openfin/excel';
import { getCurrentChannel } from "@finos/fdc3";

const knownInstruments = ["TSLA", "MSFT", "AAPL"];

let excel: ExcelApplication | undefined;
let openWorkbooks: {
    book: ExcelWorkbook;
    name: string;
}[] | undefined;
let selectedWorkbookIndex: number | undefined;
let openWorksheets: {
    sheet: ExcelWorksheet;
    name: string;
}[] | undefined;
let selectedWorksheetIndex: number | undefined;

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

async function init(): Promise<void> {
    try {
        excel = await getExcelApplication();

        await populateWorkbooks();

        const refreshWorkbookButton = document.getElementById("workbook-refresh");
        refreshWorkbookButton.addEventListener("click", () => populateWorkbooks());

        const refreshWorksheetButton = document.getElementById("worksheet-refresh");
        refreshWorksheetButton.addEventListener("click", () => populateWorksheets());

        const openWorkbooksSelect = document.getElementById("workbooks");
        openWorkbooksSelect.addEventListener("change", async (e) => await selectWorkbook((e.target as any).value))

        const openWorksheetsSelect = document.getElementById("worksheets");
        openWorksheetsSelect.addEventListener("change", async (e) => await selectWorksheet((e.target as any).value))
    } catch (err) {
        showError(err);
    }
}

function showError(err) {
    const errDom = document.getElementById("error");
    errDom.innerHTML = err.message;
}

async function populateWorkbooks(): Promise<void> {
    if (excel) {
        selectedWorkbookIndex = undefined;
        const refreshButton: HTMLButtonElement = document.getElementById("workbook-refresh") as HTMLButtonElement;
        refreshButton.disabled = true;

        const select = document.getElementById("workbooks") as HTMLSelectElement;
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
                })
            }

            const option = document.createElement("option");
            option.innerHTML = "----Select workbook----";
            option.value = "";
            option.selected = true;
            option.disabled = true;
            select.appendChild(option);

            for (const openWorkbook of openWorkbooks) {
                const option = document.createElement("option");
                option.innerHTML = openWorkbook.name;
                option.value = openWorkbook.name
                select.appendChild(option);
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
    const newWorkbookIndex = openWorkbooks.findIndex(w => w.name === name);

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
        const refreshButton: HTMLButtonElement = document.getElementById("worksheet-refresh") as HTMLButtonElement;
        refreshButton.disabled = true;

        const cellContainer = document.getElementById("cell-container");
        cellContainer.style.display = "none";

        const select = document.getElementById("worksheets") as HTMLSelectElement;
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
                    })
                }

                const option = document.createElement("option");
                option.innerHTML = "----Select worksheet----";
                option.value = "";
                option.selected = true;
                option.disabled = true;
                select.appendChild(option);

                for (const openWorksheet of openWorksheets) {
                    const option = document.createElement("option");
                    option.innerHTML = openWorksheet.name;
                    option.value = openWorksheet.name
                    select.appendChild(option);
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
    const newWorksheetIndex = openWorksheets.findIndex(w => w.name === name);

    if (newWorksheetIndex !== selectedWorksheetIndex) {
        const oldWorksheet = openWorksheets[selectedWorksheetIndex];
        if (oldWorksheet) {
            await oldWorksheet.sheet.removeEventListener(handleCellChange)
        }

        selectedWorksheetIndex = newWorksheetIndex;
        if (selectedWorksheetIndex >= 0) {
            await openWorksheets[selectedWorksheetIndex].sheet.activate();
            await openWorksheets[selectedWorksheetIndex].sheet.addEventListener("change", handleCellChange);
            document.getElementById("cell-container").style.display = "block";
        }
    }
}

async function handleCellChange(cells: Cell[]): Promise<void> {
    const cellContainer = document.getElementById("cell-changes-container");
    cellContainer.innerHTML = JSON.stringify(cells);

    for (const cell of cells) {
        if (knownInstruments.includes(cell.value)) {
            await broadcastInstrument(cell.value);
        }
    }
}

async function broadcastInstrument(instrument: string): Promise<void> {
    const broadcastContainer = document.getElementById("broadcast-container");
    broadcastContainer.style.display = "block";

    const broadcastElement = document.getElementById("broadcast-instrument");
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

            broadcastElement.innerText = instrument;
        } catch (err) {
            broadcastElement.innerText = err.message;
        }
    } else {
        broadcastElement.innerText = "No FD3 Channel available";
    }
}