import OpenFin, { fin } from "@openfin/core";

const defaultCommonOptions: OpenFin.WindowCreationOptions = {
    name: 'test-child',
    url: 'http://localhost:8080/html/preview.html',
    icon: undefined,
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
    defaultCentered: false,
    defaultLeft: 100,
    defaultTop: 100,
    defaultWidth: 800,
    defaultHeight: 500,
    aspectRatio: 0,
    backgroundColor: undefined,
    frame: true,
    shadow: false
}

const defaultFramelessOptions: Partial<OpenFin.WindowCreationOptions> = {
    shadow: false
}

const defaultResizeRegion: Partial<OpenFin.ResizeRegion> = {
    size: 7,
    bottomRightCorner: 9
}

type ResizeSides = { top: boolean, left: boolean; right: boolean; bottom: boolean };
const defaultResizeRegionSides: Partial<ResizeSides> = {
    left: true,
    top: true,
    right: true,
    bottom: true
};

const defaultCornerRounding: Partial<OpenFin.CornerRounding> = {
    width: 0,
    height: 0
};

let selectedCommonOptions: OpenFin.WindowCreationOptions = { ...defaultCommonOptions };
let selectedFramelessOptions: Partial<OpenFin.WindowCreationOptions> = { ...defaultFramelessOptions };
let selectedResizeRegion: Partial<OpenFin.ResizeRegion> = { ...defaultResizeRegion };
let selectedResizeRegionSides: Partial<ResizeSides> = { ...defaultResizeRegionSides };
let selectedCornerRounding: Partial<OpenFin.CornerRounding> = { ...defaultCornerRounding };

let previewWindow: OpenFin.Window;

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
        if (previewWindow) {
            await previewWindow.removeAllListeners();
            await previewWindow.close(true);
            previewWindow = undefined;
        }
        const previewOptions: OpenFin.WindowCreationOptions = {
            ...finalizeWindowOptions(),
            name: window.crypto.randomUUID()
        };
        previewWindow = await fin.Window.create(previewOptions);
        await previewWindow.addListener("closed", () => {
            previewWindow = undefined;
        });
    });

    const btnReset = document.querySelector("#btnReset");
    btnReset.addEventListener("click", () => {
        selectedCommonOptions = { ...defaultCommonOptions };
        selectedFramelessOptions = { ...defaultFramelessOptions };
        selectedResizeRegion = { ...defaultResizeRegion };
        selectedResizeRegionSides = { ...defaultResizeRegionSides };
        selectedCornerRounding = { ...defaultCornerRounding };
        populateForm();
        updatePreview();
    });

    const btnCopy = document.querySelector("#btnCopy");
    btnCopy.addEventListener("click", async () => {
        await fin.Clipboard.writeText({ data: createPreview() });
    });

    const btnTheme = document.querySelector<HTMLButtonElement>("#btnTheme");
    btnTheme.addEventListener("click", () => {
        const hasLight = document.body.classList.contains("theme-light");

        updateTheme(hasLight ? "dark" : "light");
    });

    updateTheme(localStorage.getItem("theme") ?? "dark")
    populateForm();
    updatePreview();
}

function updateTheme(theme: string) {
    if (theme === "light") {
        document.body.classList.add("theme-light");
    } else {
        document.body.classList.remove("theme-light");
    }
    const imgTheme = document.querySelector<HTMLImageElement>("#imgTheme");
    imgTheme.src = `../images/${theme === "light" ? "dark" : "light"}.svg`;
    localStorage.setItem("theme", theme);
}

function populateForm() {
    // Common options
    connectInput(selectedCommonOptions, "optionName", "name");
    connectInput(selectedCommonOptions, "optionUrl", "url");
    connectInput(selectedCommonOptions, "optionIcon", "icon");
    connectCheckbox(selectedCommonOptions, "optionAlwaysOnTop", "alwaysOnTop");
    connectRange(selectedCommonOptions, "optionOpacity", "opacity");
    connectCheckbox(selectedCommonOptions, "optionShowContextMenu", "contextMenu");
    connectCheckbox(selectedCommonOptions, "optionShowTaskbarIcon", "showTaskbarIcon");
    connectCheckbox(selectedCommonOptions, "optionResizable", "resizable", () => updateResizeState());
    connectCheckbox(selectedCommonOptions, "optionMinimizable", "minimizable");
    connectCheckbox(selectedCommonOptions, "optionMaximizable", "maximizable");
    connectRange(selectedCommonOptions, "optionMinWidth", "minWidth", () => updateResizeWidth());
    connectRange(selectedCommonOptions, "optionMaxWidth", "maxWidth", () => updateResizeWidth());
    connectRange(selectedCommonOptions, "optionMinHeight", "minHeight", () => updateResizeHeight());
    connectRange(selectedCommonOptions, "optionMaxHeight", "maxHeight", () => updateResizeHeight());
    connectCheckbox(selectedCommonOptions, "optionDefaultCentered", "defaultCentered", () => updateDefaultPosition());
    connectRange(selectedCommonOptions, "optionDefaultLeft", "defaultLeft");
    connectRange(selectedCommonOptions, "optionDefaultTop", "defaultTop");
    connectRange(selectedCommonOptions, "optionDefaultWidth", "defaultWidth");
    connectRange(selectedCommonOptions, "optionDefaultHeight", "defaultHeight");
    connectRange(selectedCommonOptions, "optionAspectRatio", "aspectRatio");
    connectColor(selectedCommonOptions, "optionBackgroundColor", "backgroundColor");
    connectCheckbox(selectedCommonOptions, "optionFrame", "frame", () => updateFramelessState());

    // Frameless options
    connectCheckbox(selectedFramelessOptions, "optionShadow", "shadow");
    connectRange(selectedResizeRegion, "optionEdgeResizeSize", "size");
    connectRange(selectedResizeRegion, "optionCornerResizeSize", "bottomRightCorner");
    connectCheckbox(selectedResizeRegionSides, "optionResizeRegionSideLeft", "left");
    connectCheckbox(selectedResizeRegionSides, "optionResizeRegionSideRight", "right");
    connectCheckbox(selectedResizeRegionSides, "optionResizeRegionSideTop", "top");
    connectCheckbox(selectedResizeRegionSides, "optionResizeRegionSideBottom", "bottom");

    connectRange(selectedCornerRounding, "optionCornerRoundingWidth", "width");
    connectRange(selectedCornerRounding, "optionCornerRoundingHeight", "height");

    updateResizeState();
    updateFramelessState();
}

function updateResizeState() {
    const resizable = selectedCommonOptions.resizable ?? defaultCommonOptions.resizable;
    const widthElem: HTMLElement = document.querySelector("#resizeWidth");
    widthElem.style.display = resizable ? "flex" : "none";

    const heightElem: HTMLElement = document.querySelector("#resizeHeight");
    heightElem.style.display = resizable ? "flex" : "none";

    if (!resizable) {
        delete selectedCommonOptions.minWidth;
        delete selectedCommonOptions.maxWidth;
        delete selectedCommonOptions.minHeight;
        delete selectedCommonOptions.maxHeight;
    }
}

function updateFramelessState() {
    const frame = selectedCommonOptions.frame ?? defaultCommonOptions.frame;
    const sectionFrameless: HTMLElement = document.querySelector("#sectionFrameless");
    sectionFrameless.style.display = frame ? "none" : "flex";
}

function updateResizeWidth() {
    if (selectedCommonOptions.maxWidth !== -1 && selectedCommonOptions.maxWidth <= selectedCommonOptions.minWidth) {
        selectedCommonOptions.maxWidth = selectedCommonOptions.minWidth + 50;
        const maxWidthElem: HTMLInputElement = document.querySelector("#optionMaxWidth");
        maxWidthElem.valueAsNumber = selectedCommonOptions.maxWidth;
        const maxWidthValueElem: HTMLElement = document.querySelector("#optionMaxWidthValue");
        maxWidthValueElem.textContent = selectedCommonOptions.maxWidth.toString();
    }
}

function updateResizeHeight() {
    if (selectedCommonOptions.maxHeight !== -1 && selectedCommonOptions.maxHeight <= selectedCommonOptions.minHeight) {
        selectedCommonOptions.maxHeight = selectedCommonOptions.minHeight + 50;
        const maxHeightElem: HTMLInputElement = document.querySelector("#optionMaxHeight");
        maxHeightElem.valueAsNumber = selectedCommonOptions.maxHeight;
        const maxHeightValueElem: HTMLElement = document.querySelector("#optionMaxHeightValue");
        maxHeightValueElem.textContent = selectedCommonOptions.maxHeight.toString();
    }
}

function updateDefaultPosition() {
    const isCentered = selectedCommonOptions.defaultCentered ?? defaultCommonOptions.defaultCentered;

    const defaultPositionElem: HTMLDivElement = document.querySelector("#defaultPosition");
    defaultPositionElem.style.display = isCentered ? "none" : "flex";

    const optionDefaultLeft: HTMLInputElement = document.querySelector("#optionDefaultLeft");
    optionDefaultLeft.valueAsNumber = defaultCommonOptions.defaultLeft;
    const optionDefaultLeftValue: HTMLSpanElement = document.querySelector("#optionDefaultLeftValue");
    optionDefaultLeftValue.textContent = defaultCommonOptions.defaultLeft.toString();

    const optionDefaultTop: HTMLInputElement = document.querySelector("#optionDefaultTop");
    optionDefaultTop.valueAsNumber = defaultCommonOptions.defaultTop;
    const optionDefaultTopValue: HTMLSpanElement = document.querySelector("#optionDefaultTopValue");
    optionDefaultTopValue.textContent = defaultCommonOptions.defaultTop.toString();

    if (isCentered) {
        delete selectedCommonOptions.defaultLeft;
        delete selectedCommonOptions.defaultTop;
    }
}

function setProperty<T, K extends keyof T>(obj: Partial<T>, key: K, value: unknown): void {
    obj[key] = value as T[K];
}

function getProperty<T, K extends keyof T, P>(obj: Partial<T>, key: K): P {
    return obj[key] as unknown as P;
}

function connectInput<T, K extends keyof T>(selectedValues: Partial<T>, fieldId: string, property: K) {
    const option = document.querySelector<HTMLInputElement>(`#${fieldId}`);
    option.value = getProperty(selectedValues, property) ?? "";
    option.addEventListener("input", () => {
        setProperty(selectedValues, property, option.value === "" ? undefined : option.value);
        updatePreview();
    });
}

function connectCheckbox<T, K extends keyof T>(selectedValues: Partial<T>, fieldId: string, property: K, changed?: () => void) {
    const option = document.querySelector<HTMLInputElement>(`#${fieldId}`);
    option.checked = getProperty(selectedValues, property);
    option.addEventListener("change", () => {
        setProperty(selectedValues, property, option.checked);
        if (changed) {
            changed();
        }
        updatePreview();
    });
}

function connectRange<T, K extends keyof T>(selectedValues: Partial<T>, fieldId: string, property: K, changed?: () => void) {
    const option = document.querySelector<HTMLInputElement>(`#${fieldId}`);
    const optionValue = document.querySelector<HTMLInputElement>(`#${fieldId}Value`);

    option.valueAsNumber = getProperty(selectedValues, property);
    optionValue.textContent = getProperty(selectedValues, property);
    option.addEventListener("input", () => {
        setProperty(selectedValues, property, option.valueAsNumber);
        optionValue.textContent = option.valueAsNumber.toString();
        if (changed) {
            changed();
        }
        updatePreview();
    });
}

function connectColor<T, K extends keyof T>(selectedValues: Partial<T>, fieldId: string, property: K, changed?: () => void) {
    const option = document.querySelector<HTMLInputElement>(`#${fieldId}`);
    const optionValue = document.querySelector<HTMLInputElement>(`#${fieldId}Value`);

    option.value = getProperty(selectedValues, property);
    optionValue.textContent = getProperty(selectedValues, property);
    option.addEventListener("input", () => {
        setProperty(selectedValues, property, option.value);
        optionValue.textContent = option.value;
        if (changed) {
            changed();
        }
        updatePreview();
    });
}

function finalizeWindowOptions() {
    const finalWindowOptions: OpenFin.WindowCreationOptions = {
        name: selectedCommonOptions.name,
        url: selectedCommonOptions.url,
        autoShow: selectedCommonOptions.autoShow
    };

    for (const prop of Object.keys(selectedCommonOptions)) {
        if (selectedCommonOptions[prop] !== defaultCommonOptions[prop]) {
            finalWindowOptions[prop] = selectedCommonOptions[prop];
        }
    }

    if (!(selectedCommonOptions.frame ?? true)) {
        for (const prop of Object.keys(selectedFramelessOptions)) {
            if (selectedFramelessOptions[prop] !== defaultCommonOptions[prop]) {
                finalWindowOptions[prop] = selectedFramelessOptions[prop];
            }
        }

        for (const prop of Object.keys(selectedResizeRegion)) {
            if (selectedResizeRegion[prop] !== defaultResizeRegion[prop]) {
                finalWindowOptions.resizeRegion = finalWindowOptions.resizeRegion ?? {};
                finalWindowOptions.resizeRegion[prop] = selectedResizeRegion[prop];
            }
        }

        for (const prop of Object.keys(selectedResizeRegionSides)) {
            if (selectedResizeRegionSides[prop] !== defaultResizeRegionSides[prop]) {
                finalWindowOptions.resizeRegion = finalWindowOptions.resizeRegion ?? {};
                finalWindowOptions.resizeRegion.sides = finalWindowOptions.resizeRegion.sides ?? {};
                finalWindowOptions.resizeRegion.sides[prop] = selectedResizeRegionSides[prop];
            }
        }

        for (const prop of Object.keys(selectedCornerRounding)) {
            if (selectedCornerRounding[prop] !== defaultCornerRounding[prop]) {
                finalWindowOptions.cornerRounding = finalWindowOptions.cornerRounding ?? {};
                finalWindowOptions.cornerRounding[prop] = selectedCornerRounding[prop];
            }
        }
    }

    return finalWindowOptions;
}

function updatePreview() {
    const previewElem = document.querySelector("#preview");
    previewElem.textContent = createPreview();
}

function createPreview() {
    return `await fin.Window.create(${JSON.stringify(finalizeWindowOptions(), undefined, "  ")});`
}