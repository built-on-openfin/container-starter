import OpenFin, { fin } from "@openfin/core";

const defaultWindowOptions: OpenFin.WindowCreationOptions = {
    name: 'test-child',
    url: 'http://localhost:8080/html/preview.html',
    autoShow: true,
    alwaysOnTop: false,
    opacity: 1,
    contextMenu: true,
    showTaskbarIcon: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
    minWidth: 0,
    maxWidth: -1,
    minHeight: 0,
    maxHeight: -1,
    defaultLeft: 100,
    defaultTop: 100,
    defaultWidth: 800,
    defaultHeight: 500
}

let windowOptions: OpenFin.WindowCreationOptions = {
    ...defaultWindowOptions
};

let previewWin: OpenFin.Window;

document.addEventListener('DOMContentLoaded', () => {
    try {
        initDom();
    } catch (error) {
        console.error(error);
    }
})

async function initDom(): Promise<void> {
    const btnPreview = document.querySelector("#btnPreview");
    btnPreview.addEventListener("click", async () => {
        if (previewWin) {
            await previewWin.removeAllListeners();
            await previewWin.close(true);
            previewWin = undefined;
        }
        const previewOptions: OpenFin.WindowCreationOptions  = {
            ...finalizeWindowOptions(),
            name: window.crypto.randomUUID(),
            taskbarIcon: "http://localhost:8080/favicon.ico"
        };
        console.log(previewOptions);
        previewWin = await fin.Window.create(previewOptions);
        await previewWin.addListener("closed", () => {
            previewWin = undefined;
        });
    });

    const btnReset = document.querySelector("#btnReset");
    btnReset.addEventListener("click", () => {
        windowOptions = {
            ...defaultWindowOptions
        };
        populateForm();
        updatePreview();
    });

    const btnCopy = document.querySelector("#btnCopy");
    btnCopy.addEventListener("click", async () => {
        await fin.Clipboard.writeText({ data: JSON.stringify(finalizeWindowOptions(), undefined, "\t") });
    });

    populateForm();
    updatePreview();
}

function populateForm() {
    connectInput("optionName", "name");
    connectInput("optionUrl", "url");
    connectCheckbox("optionAlwaysOnTop", "alwaysOnTop");
    connectRange("optionOpacity", "opacity");
    connectCheckbox("optionShowContextMenu", "contextMenu");
    connectCheckbox("optionShowTaskbarIcon", "showTaskbarIcon");
    connectCheckbox("optionResizable", "resizable", () => updateResizeState());
    connectCheckbox("optionMinimizable", "minimizable");
    connectCheckbox("optionMaximizable", "maximizable");
    connectRange("optionMinWidth", "minWidth", () => updateResizeWidth());
    connectRange("optionMaxWidth", "maxWidth", () => updateResizeWidth());
    connectRange("optionMinHeight", "minHeight", () => updateResizeHeight());
    connectRange("optionMaxHeight", "maxHeight", () => updateResizeHeight());
    connectRange("optionDefaultLeft", "defaultLeft");
    connectRange("optionDefaultTop", "defaultTop");
    connectRange("optionDefaultWidth", "defaultWidth");
    connectRange("optionDefaultHeight", "defaultHeight");

    updateResizeState();
}

function updateResizeState() {
    const resizable = (windowOptions.resizable ?? true);
    const widthElem: HTMLElement = document.querySelector("#resizeWidth");
    widthElem.style.display = resizable ? "flex": "none";

    const heightElem: HTMLElement = document.querySelector("#resizeHeight");
    heightElem.style.display = resizable ? "flex": "none";

    if (!resizable) {
        delete windowOptions.minWidth;
        delete windowOptions.maxWidth;
        delete windowOptions.minHeight;
        delete windowOptions.maxHeight;
    }
}

function updateResizeWidth() {
    if (windowOptions.maxWidth !== -1 && windowOptions.maxWidth <= windowOptions.minWidth) {
        windowOptions.maxWidth = windowOptions.minWidth + 50;
        const maxWidthElem: HTMLInputElement = document.querySelector("#optionMaxWidth");
        maxWidthElem.valueAsNumber = windowOptions.maxWidth;
        const maxWidthValueElem: HTMLElement = document.querySelector("#optionMaxWidthValue");
        maxWidthValueElem.textContent = windowOptions.maxWidth.toString();
    }
}

function updateResizeHeight() {
    if (windowOptions.maxHeight !== -1 && windowOptions.maxHeight <= windowOptions.minHeight) {
        windowOptions.maxHeight = windowOptions.minHeight + 50;
        const maxHeightElem: HTMLInputElement = document.querySelector("#optionMaxHeight");
        maxHeightElem.valueAsNumber = windowOptions.maxHeight;
        const maxHeightValueElem: HTMLElement = document.querySelector("#optionMaxHeightValue");
        maxHeightValueElem.textContent = windowOptions.maxHeight.toString();
    }
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

function connectInput(fieldId: string, property: keyof OpenFin.WindowCreationOptions) {
    const option: HTMLInputElement = document.querySelector(`#${fieldId}`);
    option.value = windowOptions[property];
    option.addEventListener("input", () => {
        setProperty(windowOptions, property, option.value);
        updatePreview();
    });
}

function connectCheckbox(fieldId: string, property: keyof OpenFin.WindowCreationOptions, changed?: () => void) {
    const option: HTMLInputElement = document.querySelector(`#${fieldId}`);
    option.checked = windowOptions[property];
    option.addEventListener("change", () => {
        setProperty(windowOptions, property, option.checked);
        if (changed) {
            changed();
        }
        updatePreview();
    });
}

function connectRange(fieldId: string, property: keyof OpenFin.WindowCreationOptions, changed?: () => void) {
    const option: HTMLInputElement = document.querySelector(`#${fieldId}`);
    const optionValue: HTMLInputElement = document.querySelector(`#${fieldId}Value`);

    option.valueAsNumber = windowOptions[property];
    optionValue.textContent = windowOptions[property].toString();
    option.addEventListener("input", () => {
        setProperty(windowOptions, property, option.valueAsNumber);
        optionValue.textContent = option.valueAsNumber.toString();
        if (changed) {
            changed();
        }
        updatePreview();
    });
}

function finalizeWindowOptions() {
    const finalWindowOptions: OpenFin.WindowCreationOptions = {
        name: windowOptions.name,
        url: windowOptions.url,
        autoShow: windowOptions.autoShow
    };

    for (const prop of Object.keys(windowOptions)) {
        if (windowOptions[prop] !== defaultWindowOptions[prop]) {
            finalWindowOptions[prop] = windowOptions[prop];
        }
    }

    return finalWindowOptions;
}

function updatePreview() {
    const previewElem = document.querySelector("#preview");
    previewElem.textContent = JSON.stringify(finalizeWindowOptions(), undefined, "  ");
}
