import type OpenFin from "@openfin/core";

const defaultCommonOptions: OpenFin.WindowCreationOptions = {
	name: "test-child",
	url: "./preview.html",
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
};

const defaultFramelessOptions: Partial<OpenFin.WindowCreationOptions> = {
	shadow: false
};

const defaultResizeRegion: Partial<OpenFin.ResizeRegion> = {
	size: 7,
	bottomRightCorner: 9
};

/**
 * Type for the resize sides.
 */
interface ResizeSides {
	/**
	 * Top position.
	 */
	top: boolean;
	/**
	 * Left position.
	 */
	left: boolean;
	/**
	 * Right position.
	 */
	right: boolean;
	/**
	 * Bottom position.
	 */
	bottom: boolean;
}

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

const defaultLaunchOptions: {
	usePlatform: boolean;
} = { usePlatform: false };

let selectedCommonOptions: OpenFin.WindowCreationOptions = { ...defaultCommonOptions };
let selectedFramelessOptions: Partial<OpenFin.WindowCreationOptions> = { ...defaultFramelessOptions };
let selectedResizeRegion: Partial<OpenFin.ResizeRegion> = { ...defaultResizeRegion };
let selectedResizeRegionSides: Partial<ResizeSides> = { ...defaultResizeRegionSides };
let selectedCornerRounding: Partial<OpenFin.CornerRounding> = { ...defaultCornerRounding };
let selectedLaunchOptions = { ...defaultLaunchOptions };

let previewWindow: OpenFin.Window | undefined;

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
	const app = fin.Application.getCurrentSync();
	const appInfo = await app.getInfo();
	if (!appInfo.initialOptions.isPlatformController) {
		const usePlatformElemContainer = document.querySelector<HTMLElement>("#usePlatformContainer");
		if (usePlatformElemContainer) {
			usePlatformElemContainer.style.display = "none";
		}
	}
	const btnPreview = document.querySelector("#btnPreview");
	if (btnPreview) {
		btnPreview.addEventListener("click", async () => {
			if (previewWindow) {
				await previewWindow.removeAllListeners();
				await previewWindow.close(true);
				previewWindow = undefined;
			}
			const previewOptions: OpenFin.WindowCreationOptions = {
				...finalizeWindowOptions(),
				saveWindowState: false
			};
			if (selectedLaunchOptions.usePlatform) {
				const platform = fin.Platform.getCurrentSync();
				previewWindow = await platform.createWindow(previewOptions);
			} else {
				previewWindow = await fin.Window.create(previewOptions);
			}

			await previewWindow.addListener("closed", () => {
				previewWindow = undefined;
			});
		});
	}

	const btnClosePreview = document.querySelector("#btnClosePreview");
	if (btnClosePreview) {
		btnClosePreview.addEventListener("click", async () => {
			if (previewWindow) {
				await previewWindow.removeAllListeners();
				await previewWindow.close(true);
				previewWindow = undefined;
			}
		});
	}

	const btnReset = document.querySelector("#btnReset");
	if (btnReset) {
		btnReset.addEventListener("click", () => {
			selectedCommonOptions = { ...defaultCommonOptions };
			selectedFramelessOptions = { ...defaultFramelessOptions };
			selectedResizeRegion = { ...defaultResizeRegion };
			selectedResizeRegionSides = { ...defaultResizeRegionSides };
			selectedCornerRounding = { ...defaultCornerRounding };
			selectedLaunchOptions = { ...defaultLaunchOptions };
			populateForm();
			updatePreview();
		});
	}

	const btnCopy = document.querySelector("#btnCopy");
	if (btnCopy) {
		btnCopy.addEventListener("click", async () => {
			await fin.Clipboard.writeText({ data: createPreview() });
		});
	}

	populateForm();
	updatePreview();
}

/**
 * Populate the form elements.
 */
function populateForm(): void {
	// Common options
	connectInput(selectedCommonOptions, "optionName", "name");
	connectInput(selectedCommonOptions, "optionUrl", "url");
	connectInput(selectedCommonOptions, "optionIcon", "icon");
	connectCheckbox(selectedCommonOptions, "optionAlwaysOnTop", "alwaysOnTop");
	connectCheckbox(selectedLaunchOptions, "optionUsePlatform", "usePlatform");
	connectRange(selectedCommonOptions, "optionOpacity", "opacity");
	connectCheckbox(selectedCommonOptions, "optionShowContextMenu", "contextMenu");
	connectCheckbox(selectedCommonOptions, "optionShowTaskbarIcon", "showTaskbarIcon");
	connectCheckbox(selectedCommonOptions, "optionMinimizable", "minimizable");
	connectCheckbox(selectedCommonOptions, "optionMaximizable", "maximizable");
	connectCheckbox(selectedCommonOptions, "optionResizable", "resizable");
	connectRange(selectedCommonOptions, "optionMinWidth", "minWidth", () => updateResizeWidth());
	connectRange(selectedCommonOptions, "optionMaxWidth", "maxWidth", () => updateResizeWidth());
	connectRange(selectedCommonOptions, "optionMinHeight", "minHeight", () => updateResizeHeight());
	connectRange(selectedCommonOptions, "optionMaxHeight", "maxHeight", () => updateResizeHeight());
	connectCheckbox(selectedCommonOptions, "optionDefaultCentered", "defaultCentered", () =>
		updateDefaultPosition()
	);
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

	updateFramelessState();
}

/**
 * Update the state of the frameless components.
 */
function updateFramelessState(): void {
	const frame = selectedCommonOptions.frame ?? defaultCommonOptions.frame;
	const sectionFrameless = document.querySelector<HTMLElement>("#sectionFrameless");
	if (sectionFrameless) {
		sectionFrameless.style.display = frame ? "none" : "flex";
	}
}

/**
 * Update the state of the resize width.
 */
function updateResizeWidth(): void {
	if (
		selectedCommonOptions.maxWidth !== -1 &&
		selectedCommonOptions.maxWidth !== undefined &&
		selectedCommonOptions.minWidth !== undefined &&
		selectedCommonOptions.maxWidth < selectedCommonOptions.minWidth
	) {
		selectedCommonOptions.maxWidth = selectedCommonOptions.minWidth;
		const maxWidthElem = document.querySelector<HTMLInputElement>("#optionMaxWidth");
		if (maxWidthElem) {
			maxWidthElem.valueAsNumber = selectedCommonOptions.maxWidth;
		}
		const maxWidthValueElem = document.querySelector<HTMLElement>("#optionMaxWidthValue");
		if (maxWidthValueElem) {
			maxWidthValueElem.textContent = selectedCommonOptions.maxWidth.toString();
		}
	}
}

/**
 * Update the state of the resize height.
 */
function updateResizeHeight(): void {
	if (
		selectedCommonOptions.maxHeight !== -1 &&
		selectedCommonOptions.maxHeight !== undefined &&
		selectedCommonOptions.minHeight !== undefined &&
		selectedCommonOptions.maxHeight < selectedCommonOptions.minHeight
	) {
		selectedCommonOptions.maxHeight = selectedCommonOptions.minHeight;
		const maxHeightElem = document.querySelector<HTMLInputElement>("#optionMaxHeight");
		if (maxHeightElem) {
			maxHeightElem.valueAsNumber = selectedCommonOptions.maxHeight;
		}
		const maxHeightValueElem = document.querySelector<HTMLElement>("#optionMaxHeightValue");
		if (maxHeightValueElem) {
			maxHeightValueElem.textContent = selectedCommonOptions.maxHeight.toString();
		}
	}
}

/**
 * Update the state of the default position components.
 */
function updateDefaultPosition(): void {
	const isCentered = selectedCommonOptions.defaultCentered ?? defaultCommonOptions.defaultCentered;

	const defaultPositionElem = document.querySelector<HTMLDivElement>("#defaultPosition");
	if (defaultPositionElem) {
		defaultPositionElem.style.display = isCentered ? "none" : "flex";
	}

	const optionDefaultLeft = document.querySelector<HTMLInputElement>("#optionDefaultLeft");
	if (optionDefaultLeft && defaultCommonOptions.defaultLeft !== undefined) {
		optionDefaultLeft.valueAsNumber = defaultCommonOptions.defaultLeft;
	}
	const optionDefaultLeftValue = document.querySelector<HTMLSpanElement>("#optionDefaultLeftValue");
	if (optionDefaultLeftValue && defaultCommonOptions.defaultLeft !== undefined) {
		optionDefaultLeftValue.textContent = defaultCommonOptions.defaultLeft.toString();
	}

	const optionDefaultTop = document.querySelector<HTMLInputElement>("#optionDefaultTop");
	if (optionDefaultTop && defaultCommonOptions.defaultTop !== undefined) {
		optionDefaultTop.valueAsNumber = defaultCommonOptions.defaultTop;
	}
	const optionDefaultTopValue = document.querySelector<HTMLSpanElement>("#optionDefaultTopValue");
	if (optionDefaultTopValue && defaultCommonOptions.defaultTop !== undefined) {
		optionDefaultTopValue.textContent = defaultCommonOptions.defaultTop.toString();
	}

	if (isCentered) {
		delete selectedCommonOptions.defaultLeft;
		delete selectedCommonOptions.defaultTop;
	}
}

/**
 * Set a property to an object.
 * @param obj The object to set the property on.
 * @param key The key to set.
 * @param value The value.
 */
function setProperty<T, K extends keyof T>(obj: Partial<T>, key: K, value: unknown): void {
	obj[key] = value as T[K];
}

/**
 * Get a property from an object.
 * @param obj The object to get the property from.
 * @param key The key to get
 * @returns The value.
 */
function getProperty<T, K extends keyof T, P>(obj: Partial<T>, key: K): P {
	return obj[key] as unknown as P;
}

/**
 * Connect an input to an option.
 * @param selectedValues The selected value.
 * @param fieldId The field id.
 * @param property The property.
 */
function connectInput<T, K extends keyof T>(selectedValues: Partial<T>, fieldId: string, property: K): void {
	const option = document.querySelector<HTMLInputElement>(`#${fieldId}`);
	if (option) {
		option.value = getProperty(selectedValues, property) ?? "";
		option.addEventListener("input", () => {
			setProperty(selectedValues, property, option.value === "" ? undefined : option.value);
			updatePreview();
		});
	}
}

/**
 * Connect a checkbox.
 * @param selectedValues The selected values.
 * @param fieldId The field id.
 * @param property The property.
 * @param changed The changed event to call.
 */
function connectCheckbox<T, K extends keyof T>(
	selectedValues: Partial<T>,
	fieldId: string,
	property: K,
	changed?: () => void
): void {
	const option = document.querySelector<HTMLInputElement>(`#${fieldId}`);
	if (option) {
		option.checked = getProperty(selectedValues, property);
		option.addEventListener("change", () => {
			setProperty(selectedValues, property, option.checked);
			if (changed) {
				changed();
			}
			updatePreview();
		});
	}
}

/**
 * Connect a range.
 * @param selectedValues The selected values.
 * @param fieldId The field id.
 * @param property The property.
 * @param changed The changed event to call.
 */
function connectRange<T, K extends keyof T>(
	selectedValues: Partial<T>,
	fieldId: string,
	property: K,
	changed?: () => void
): void {
	const option = document.querySelector<HTMLInputElement>(`#${fieldId}`);
	const optionValue = document.querySelector<HTMLInputElement>(`#${fieldId}Value`);

	if (option && optionValue) {
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
}

/**
 * Connect a color.
 * @param selectedValues The selected values.
 * @param fieldId The field id.
 * @param property The property.
 * @param changed The changed event to call.
 */
function connectColor<T, K extends keyof T>(
	selectedValues: Partial<T>,
	fieldId: string,
	property: K,
	changed?: () => void
): void {
	const option = document.querySelector<HTMLInputElement>(`#${fieldId}`);
	const optionValue = document.querySelector<HTMLInputElement>(`#${fieldId}Value`);

	if (option && optionValue) {
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
}

/**
 * Finalize the window options.
 * @returns The complete window options.
 */
function finalizeWindowOptions(): OpenFin.WindowCreationOptions {
	const finalWindowOptions: OpenFin.WindowCreationOptions = {
		name: selectedCommonOptions.name,
		url: selectedCommonOptions.url,
		autoShow: selectedCommonOptions.autoShow
	};

	for (const prop of Object.keys(selectedCommonOptions) as (keyof OpenFin.WindowCreationOptions)[]) {
		if (selectedCommonOptions[prop] !== defaultCommonOptions[prop]) {
			finalWindowOptions[prop] = selectedCommonOptions[prop];
		}
	}

	if (!(selectedCommonOptions.frame ?? true)) {
		for (const prop of Object.keys(selectedFramelessOptions) as (keyof OpenFin.WindowCreationOptions)[]) {
			if (selectedFramelessOptions[prop] !== defaultCommonOptions[prop]) {
				finalWindowOptions[prop] = selectedFramelessOptions[prop];
			}
		}

		const finalRegion: OpenFin.ResizeRegion = {};
		if (selectedResizeRegion.bottomRightCorner !== defaultResizeRegion.bottomRightCorner) {
			finalRegion.bottomRightCorner = selectedResizeRegion.bottomRightCorner;
		}
		if (selectedResizeRegion.size !== defaultResizeRegion.size) {
			finalRegion.size = selectedResizeRegion.size;
		}
		if (selectedResizeRegion.sides) {
			finalRegion.sides = {};
			if (selectedResizeRegion.sides?.bottom !== defaultResizeRegion.sides?.bottom) {
				finalRegion.sides.bottom = selectedResizeRegion.sides?.bottom;
			}
			if (selectedResizeRegion.sides?.left !== defaultResizeRegion.sides?.left) {
				finalRegion.sides.left = selectedResizeRegion.sides?.left;
			}
			if (selectedResizeRegion.sides?.top !== defaultResizeRegion.sides?.top) {
				finalRegion.sides.top = selectedResizeRegion.sides?.top;
			}
			if (selectedResizeRegion.sides?.right !== defaultResizeRegion.sides?.right) {
				finalRegion.sides.right = selectedResizeRegion.sides?.right;
			}
			if (Object.keys(finalRegion.sides).length === 0) {
				delete finalRegion.sides;
			}
		}

		if (Object.keys(finalRegion).length > 0) {
			finalWindowOptions.resizeRegion = finalRegion;
		}

		for (const prop of Object.keys(selectedResizeRegionSides) as (keyof ResizeSides)[]) {
			if (selectedResizeRegionSides[prop] !== defaultResizeRegionSides[prop]) {
				finalWindowOptions.resizeRegion = finalWindowOptions.resizeRegion ?? {};
				finalWindowOptions.resizeRegion.sides = finalWindowOptions.resizeRegion.sides ?? {};
				finalWindowOptions.resizeRegion.sides[prop] = selectedResizeRegionSides[prop];
			}
		}

		for (const prop of Object.keys(selectedCornerRounding) as (keyof OpenFin.CornerRounding)[]) {
			if (selectedCornerRounding[prop] !== defaultCornerRounding[prop]) {
				finalWindowOptions.cornerRounding = finalWindowOptions.cornerRounding ?? {};
				finalWindowOptions.cornerRounding[prop] = selectedCornerRounding[prop];
			}
		}
	}

	return finalWindowOptions;
}

/**
 * Update the preview.
 */
function updatePreview(): void {
	const previewElem = document.querySelector("#preview");
	if (previewElem) {
		previewElem.textContent = createPreview();
	}
}

/**
 * Create a preview.
 * @returns The preview code.
 */
function createPreview(): string {
	if (selectedLaunchOptions.usePlatform) {
		return `const platform = fin.Platform.getCurrentSync();
await platform.createWindow(${JSON.stringify(finalizeWindowOptions(), undefined, "  ")});`;
	}
	return `await fin.Window.create(${JSON.stringify(finalizeWindowOptions(), undefined, "  ")});`;
}
