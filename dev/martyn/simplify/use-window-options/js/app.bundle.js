/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

const defaultCommonOptions = {
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
const defaultFramelessOptions = {
    shadow: false
};
const defaultResizeRegion = {
    size: 7,
    bottomRightCorner: 9
};
const defaultResizeRegionSides = {
    left: true,
    top: true,
    right: true,
    bottom: true
};
const defaultCornerRounding = {
    width: 0,
    height: 0
};
let selectedCommonOptions = { ...defaultCommonOptions };
let selectedFramelessOptions = { ...defaultFramelessOptions };
let selectedResizeRegion = { ...defaultResizeRegion };
let selectedResizeRegionSides = { ...defaultResizeRegionSides };
let selectedCornerRounding = { ...defaultCornerRounding };
let previewWindow;
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    const btnPreview = document.querySelector("#btnPreview");
    if (btnPreview) {
        btnPreview.addEventListener("click", async () => {
            if (previewWindow) {
                await previewWindow.removeAllListeners();
                await previewWindow.close(true);
                previewWindow = undefined;
            }
            const previewOptions = {
                ...finalizeWindowOptions(),
                saveWindowState: false
            };
            previewWindow = await fin.Window.create(previewOptions);
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
/**
 * Update the state of the resize components.
 */
function updateResizeState() {
    const resizable = selectedCommonOptions.resizable ?? defaultCommonOptions.resizable;
    const widthElem = document.querySelector("#resizeWidth");
    if (widthElem) {
        widthElem.style.display = resizable ? "flex" : "none";
    }
    const heightElem = document.querySelector("#resizeHeight");
    if (heightElem) {
        heightElem.style.display = resizable ? "flex" : "none";
    }
    if (!resizable) {
        delete selectedCommonOptions.minWidth;
        delete selectedCommonOptions.maxWidth;
        delete selectedCommonOptions.minHeight;
        delete selectedCommonOptions.maxHeight;
    }
}
/**
 * Update the state of the frameless components.
 */
function updateFramelessState() {
    const frame = selectedCommonOptions.frame ?? defaultCommonOptions.frame;
    const sectionFrameless = document.querySelector("#sectionFrameless");
    if (sectionFrameless) {
        sectionFrameless.style.display = frame ? "none" : "flex";
    }
}
/**
 * Update the state of the resize width.
 */
function updateResizeWidth() {
    if (selectedCommonOptions.maxWidth !== -1 &&
        selectedCommonOptions.maxWidth !== undefined &&
        selectedCommonOptions.minWidth !== undefined &&
        selectedCommonOptions.maxWidth <= selectedCommonOptions.minWidth) {
        selectedCommonOptions.maxWidth = selectedCommonOptions.minWidth + 50;
        const maxWidthElem = document.querySelector("#optionMaxWidth");
        if (maxWidthElem) {
            maxWidthElem.valueAsNumber = selectedCommonOptions.maxWidth;
        }
        const maxWidthValueElem = document.querySelector("#optionMaxWidthValue");
        if (maxWidthValueElem) {
            maxWidthValueElem.textContent = selectedCommonOptions.maxWidth.toString();
        }
    }
}
/**
 * Update the state of the resize height.
 */
function updateResizeHeight() {
    if (selectedCommonOptions.maxHeight !== -1 &&
        selectedCommonOptions.maxHeight !== undefined &&
        selectedCommonOptions.minHeight !== undefined &&
        selectedCommonOptions.maxHeight <= selectedCommonOptions.minHeight) {
        selectedCommonOptions.maxHeight = selectedCommonOptions.minHeight + 50;
        const maxHeightElem = document.querySelector("#optionMaxHeight");
        if (maxHeightElem) {
            maxHeightElem.valueAsNumber = selectedCommonOptions.maxHeight;
        }
        const maxHeightValueElem = document.querySelector("#optionMaxHeightValue");
        if (maxHeightValueElem) {
            maxHeightValueElem.textContent = selectedCommonOptions.maxHeight.toString();
        }
    }
}
/**
 * Update the state of the default position components.
 */
function updateDefaultPosition() {
    const isCentered = selectedCommonOptions.defaultCentered ?? defaultCommonOptions.defaultCentered;
    const defaultPositionElem = document.querySelector("#defaultPosition");
    if (defaultPositionElem) {
        defaultPositionElem.style.display = isCentered ? "none" : "flex";
    }
    const optionDefaultLeft = document.querySelector("#optionDefaultLeft");
    if (optionDefaultLeft && defaultCommonOptions.defaultLeft !== undefined) {
        optionDefaultLeft.valueAsNumber = defaultCommonOptions.defaultLeft;
    }
    const optionDefaultLeftValue = document.querySelector("#optionDefaultLeftValue");
    if (optionDefaultLeftValue && defaultCommonOptions.defaultLeft !== undefined) {
        optionDefaultLeftValue.textContent = defaultCommonOptions.defaultLeft.toString();
    }
    const optionDefaultTop = document.querySelector("#optionDefaultTop");
    if (optionDefaultTop && defaultCommonOptions.defaultTop !== undefined) {
        optionDefaultTop.valueAsNumber = defaultCommonOptions.defaultTop;
    }
    const optionDefaultTopValue = document.querySelector("#optionDefaultTopValue");
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
function setProperty(obj, key, value) {
    obj[key] = value;
}
/**
 * Get a property from an object.
 * @param obj The object to get the property from.
 * @param key The key to get
 * @returns The value.
 */
function getProperty(obj, key) {
    return obj[key];
}
/**
 * Connect an input to an option.
 * @param selectedValues The selected value.
 * @param fieldId The field id.
 * @param property The property.
 */
function connectInput(selectedValues, fieldId, property) {
    const option = document.querySelector(`#${fieldId}`);
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
function connectCheckbox(selectedValues, fieldId, property, changed) {
    const option = document.querySelector(`#${fieldId}`);
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
function connectRange(selectedValues, fieldId, property, changed) {
    const option = document.querySelector(`#${fieldId}`);
    const optionValue = document.querySelector(`#${fieldId}Value`);
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
function connectColor(selectedValues, fieldId, property, changed) {
    const option = document.querySelector(`#${fieldId}`);
    const optionValue = document.querySelector(`#${fieldId}Value`);
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
function finalizeWindowOptions() {
    const finalWindowOptions = {
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
        const finalRegion = {};
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
/**
 * Update the preview.
 */
function updatePreview() {
    const previewElem = document.querySelector("#preview");
    if (previewElem) {
        previewElem.textContent = createPreview();
    }
}
/**
 * Create a preview.
 * @returns The preview code.
 */
function createPreview() {
    return `await fin.Window.create(${JSON.stringify(finalizeWindowOptions(), undefined, "  ")});`;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsS0FBSyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakUsa0JBQWtCLENBQUMsY0FBYyxHQUFHLGtCQUFrQixDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7Z0JBQzVFLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2RTtTQUNEO0tBQ0Q7SUFFRCxPQUFPLGtCQUFrQixDQUFDO0FBQzNCLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsYUFBYTtJQUNyQixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZELElBQUksV0FBVyxFQUFFO1FBQ2hCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsYUFBYSxFQUFFLENBQUM7S0FDMUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxhQUFhO0lBQ3JCLE9BQU8sMkJBQTJCLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNoRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXdpbmRvdy1vcHRpb25zLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdENvbW1vbk9wdGlvbnM6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0ge1xuXHRuYW1lOiBcInRlc3QtY2hpbGRcIixcblx0dXJsOiBcIi4vcHJldmlldy5odG1sXCIsXG5cdGljb246IHVuZGVmaW5lZCxcblx0YXV0b1Nob3c6IHRydWUsXG5cdGFsd2F5c09uVG9wOiBmYWxzZSxcblx0b3BhY2l0eTogMSxcblx0Y29udGV4dE1lbnU6IHRydWUsXG5cdHNob3dUYXNrYmFySWNvbjogdHJ1ZSxcblx0cmVzaXphYmxlOiB0cnVlLFxuXHRtaW5pbWl6YWJsZTogdHJ1ZSxcblx0bWF4aW1pemFibGU6IHRydWUsXG5cdG1pbldpZHRoOiAwLFxuXHRtYXhXaWR0aDogLTEsXG5cdG1pbkhlaWdodDogMCxcblx0bWF4SGVpZ2h0OiAtMSxcblx0ZGVmYXVsdENlbnRlcmVkOiBmYWxzZSxcblx0ZGVmYXVsdExlZnQ6IDEwMCxcblx0ZGVmYXVsdFRvcDogMTAwLFxuXHRkZWZhdWx0V2lkdGg6IDgwMCxcblx0ZGVmYXVsdEhlaWdodDogNTAwLFxuXHRhc3BlY3RSYXRpbzogMCxcblx0YmFja2dyb3VuZENvbG9yOiB1bmRlZmluZWQsXG5cdGZyYW1lOiB0cnVlLFxuXHRzaGFkb3c6IGZhbHNlXG59O1xuXG5jb25zdCBkZWZhdWx0RnJhbWVsZXNzT3B0aW9uczogUGFydGlhbDxPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucz4gPSB7XG5cdHNoYWRvdzogZmFsc2Vcbn07XG5cbmNvbnN0IGRlZmF1bHRSZXNpemVSZWdpb246IFBhcnRpYWw8T3BlbkZpbi5SZXNpemVSZWdpb24+ID0ge1xuXHRzaXplOiA3LFxuXHRib3R0b21SaWdodENvcm5lcjogOVxufTtcblxuLyoqXG4gKiBUeXBlIGZvciB0aGUgcmVzaXplIHNpZGVzLlxuICovXG5pbnRlcmZhY2UgUmVzaXplU2lkZXMge1xuXHQvKipcblx0ICogVG9wIHBvc2l0aW9uLlxuXHQgKi9cblx0dG9wOiBib29sZWFuO1xuXHQvKipcblx0ICogTGVmdCBwb3NpdGlvbi5cblx0ICovXG5cdGxlZnQ6IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBSaWdodCBwb3NpdGlvbi5cblx0ICovXG5cdHJpZ2h0OiBib29sZWFuO1xuXHQvKipcblx0ICogQm90dG9tIHBvc2l0aW9uLlxuXHQgKi9cblx0Ym90dG9tOiBib29sZWFuO1xufVxuXG5jb25zdCBkZWZhdWx0UmVzaXplUmVnaW9uU2lkZXM6IFBhcnRpYWw8UmVzaXplU2lkZXM+ID0ge1xuXHRsZWZ0OiB0cnVlLFxuXHR0b3A6IHRydWUsXG5cdHJpZ2h0OiB0cnVlLFxuXHRib3R0b206IHRydWVcbn07XG5cbmNvbnN0IGRlZmF1bHRDb3JuZXJSb3VuZGluZzogUGFydGlhbDxPcGVuRmluLkNvcm5lclJvdW5kaW5nPiA9IHtcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMFxufTtcblxubGV0IHNlbGVjdGVkQ29tbW9uT3B0aW9uczogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMgPSB7IC4uLmRlZmF1bHRDb21tb25PcHRpb25zIH07XG5sZXQgc2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zOiBQYXJ0aWFsPE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zPiA9IHsgLi4uZGVmYXVsdEZyYW1lbGVzc09wdGlvbnMgfTtcbmxldCBzZWxlY3RlZFJlc2l6ZVJlZ2lvbjogUGFydGlhbDxPcGVuRmluLlJlc2l6ZVJlZ2lvbj4gPSB7IC4uLmRlZmF1bHRSZXNpemVSZWdpb24gfTtcbmxldCBzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzOiBQYXJ0aWFsPFJlc2l6ZVNpZGVzPiA9IHsgLi4uZGVmYXVsdFJlc2l6ZVJlZ2lvblNpZGVzIH07XG5sZXQgc2VsZWN0ZWRDb3JuZXJSb3VuZGluZzogUGFydGlhbDxPcGVuRmluLkNvcm5lclJvdW5kaW5nPiA9IHsgLi4uZGVmYXVsdENvcm5lclJvdW5kaW5nIH07XG5cbmxldCBwcmV2aWV3V2luZG93OiBPcGVuRmluLldpbmRvdyB8IHVuZGVmaW5lZDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBidG5QcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5QcmV2aWV3XCIpO1xuXHRpZiAoYnRuUHJldmlldykge1xuXHRcdGJ0blByZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChwcmV2aWV3V2luZG93KSB7XG5cdFx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdFx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cuY2xvc2UodHJ1ZSk7XG5cdFx0XHRcdHByZXZpZXdXaW5kb3cgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwcmV2aWV3T3B0aW9uczogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLmZpbmFsaXplV2luZG93T3B0aW9ucygpLFxuXHRcdFx0XHRzYXZlV2luZG93U3RhdGU6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdFx0cHJldmlld1dpbmRvdyA9IGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKHByZXZpZXdPcHRpb25zKTtcblx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cuYWRkTGlzdGVuZXIoXCJjbG9zZWRcIiwgKCkgPT4ge1xuXHRcdFx0XHRwcmV2aWV3V2luZG93ID0gdW5kZWZpbmVkO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5DbG9zZVByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNsb3NlUHJldmlld1wiKTtcblx0aWYgKGJ0bkNsb3NlUHJldmlldykge1xuXHRcdGJ0bkNsb3NlUHJldmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKHByZXZpZXdXaW5kb3cpIHtcblx0XHRcdFx0YXdhaXQgcHJldmlld1dpbmRvdy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0XHRcdFx0YXdhaXQgcHJldmlld1dpbmRvdy5jbG9zZSh0cnVlKTtcblx0XHRcdFx0cHJldmlld1dpbmRvdyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0blJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5SZXNldFwiKTtcblx0aWYgKGJ0blJlc2V0KSB7XG5cdFx0YnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucyA9IHsgLi4uZGVmYXVsdENvbW1vbk9wdGlvbnMgfTtcblx0XHRcdHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9ucyA9IHsgLi4uZGVmYXVsdEZyYW1lbGVzc09wdGlvbnMgfTtcblx0XHRcdHNlbGVjdGVkUmVzaXplUmVnaW9uID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uIH07XG5cdFx0XHRzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uU2lkZXMgfTtcblx0XHRcdHNlbGVjdGVkQ29ybmVyUm91bmRpbmcgPSB7IC4uLmRlZmF1bHRDb3JuZXJSb3VuZGluZyB9O1xuXHRcdFx0cG9wdWxhdGVGb3JtKCk7XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Db3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Db3B5XCIpO1xuXHRpZiAoYnRuQ29weSkge1xuXHRcdGJ0bkNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGZpbi5DbGlwYm9hcmQud3JpdGVUZXh0KHsgZGF0YTogY3JlYXRlUHJldmlldygpIH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cG9wdWxhdGVGb3JtKCk7XG5cdHVwZGF0ZVByZXZpZXcoKTtcbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgZm9ybSBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gcG9wdWxhdGVGb3JtKCk6IHZvaWQge1xuXHQvLyBDb21tb24gb3B0aW9uc1xuXHRjb25uZWN0SW5wdXQoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk5hbWVcIiwgXCJuYW1lXCIpO1xuXHRjb25uZWN0SW5wdXQoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblVybFwiLCBcInVybFwiKTtcblx0Y29ubmVjdElucHV0KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25JY29uXCIsIFwiaWNvblwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25BbHdheXNPblRvcFwiLCBcImFsd2F5c09uVG9wXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk9wYWNpdHlcIiwgXCJvcGFjaXR5XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblNob3dDb250ZXh0TWVudVwiLCBcImNvbnRleHRNZW51XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblNob3dUYXNrYmFySWNvblwiLCBcInNob3dUYXNrYmFySWNvblwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25SZXNpemFibGVcIiwgXCJyZXNpemFibGVcIiwgKCkgPT4gdXBkYXRlUmVzaXplU3RhdGUoKSk7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWluaW1pemFibGVcIiwgXCJtaW5pbWl6YWJsZVwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NYXhpbWl6YWJsZVwiLCBcIm1heGltaXphYmxlXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1pbldpZHRoXCIsIFwibWluV2lkdGhcIiwgKCkgPT4gdXBkYXRlUmVzaXplV2lkdGgoKSk7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWF4V2lkdGhcIiwgXCJtYXhXaWR0aFwiLCAoKSA9PiB1cGRhdGVSZXNpemVXaWR0aCgpKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NaW5IZWlnaHRcIiwgXCJtaW5IZWlnaHRcIiwgKCkgPT4gdXBkYXRlUmVzaXplSGVpZ2h0KCkpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1heEhlaWdodFwiLCBcIm1heEhlaWdodFwiLCAoKSA9PiB1cGRhdGVSZXNpemVIZWlnaHQoKSk7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRGVmYXVsdENlbnRlcmVkXCIsIFwiZGVmYXVsdENlbnRlcmVkXCIsICgpID0+XG5cdFx0dXBkYXRlRGVmYXVsdFBvc2l0aW9uKClcblx0KTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0TGVmdFwiLCBcImRlZmF1bHRMZWZ0XCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRUb3BcIiwgXCJkZWZhdWx0VG9wXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRXaWR0aFwiLCBcImRlZmF1bHRXaWR0aFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0SGVpZ2h0XCIsIFwiZGVmYXVsdEhlaWdodFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25Bc3BlY3RSYXRpb1wiLCBcImFzcGVjdFJhdGlvXCIpO1xuXHRjb25uZWN0Q29sb3Ioc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkJhY2tncm91bmRDb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25GcmFtZVwiLCBcImZyYW1lXCIsICgpID0+IHVwZGF0ZUZyYW1lbGVzc1N0YXRlKCkpO1xuXG5cdC8vIEZyYW1lbGVzcyBvcHRpb25zXG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnMsIFwib3B0aW9uU2hhZG93XCIsIFwic2hhZG93XCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRSZXNpemVSZWdpb24sIFwib3B0aW9uRWRnZVJlc2l6ZVNpemVcIiwgXCJzaXplXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRSZXNpemVSZWdpb24sIFwib3B0aW9uQ29ybmVyUmVzaXplU2l6ZVwiLCBcImJvdHRvbVJpZ2h0Q29ybmVyXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlTGVmdFwiLCBcImxlZnRcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzLCBcIm9wdGlvblJlc2l6ZVJlZ2lvblNpZGVSaWdodFwiLCBcInJpZ2h0XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlVG9wXCIsIFwidG9wXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlQm90dG9tXCIsIFwiYm90dG9tXCIpO1xuXG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvcm5lclJvdW5kaW5nLCBcIm9wdGlvbkNvcm5lclJvdW5kaW5nV2lkdGhcIiwgXCJ3aWR0aFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29ybmVyUm91bmRpbmcsIFwib3B0aW9uQ29ybmVyUm91bmRpbmdIZWlnaHRcIiwgXCJoZWlnaHRcIik7XG5cblx0dXBkYXRlUmVzaXplU3RhdGUoKTtcblx0dXBkYXRlRnJhbWVsZXNzU3RhdGUoKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSByZXNpemUgY29tcG9uZW50cy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUmVzaXplU3RhdGUoKTogdm9pZCB7XG5cdGNvbnN0IHJlc2l6YWJsZSA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5yZXNpemFibGUgPz8gZGVmYXVsdENvbW1vbk9wdGlvbnMucmVzaXphYmxlO1xuXHRjb25zdCB3aWR0aEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXNpemVXaWR0aFwiKTtcblx0aWYgKHdpZHRoRWxlbSkge1xuXHRcdHdpZHRoRWxlbS5zdHlsZS5kaXNwbGF5ID0gcmVzaXphYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcblx0fVxuXG5cdGNvbnN0IGhlaWdodEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXNpemVIZWlnaHRcIik7XG5cdGlmIChoZWlnaHRFbGVtKSB7XG5cdFx0aGVpZ2h0RWxlbS5zdHlsZS5kaXNwbGF5ID0gcmVzaXphYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcblx0fVxuXG5cdGlmICghcmVzaXphYmxlKSB7XG5cdFx0ZGVsZXRlIHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5XaWR0aDtcblx0XHRkZWxldGUgc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoO1xuXHRcdGRlbGV0ZSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluSGVpZ2h0O1xuXHRcdGRlbGV0ZSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0O1xuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgZnJhbWVsZXNzIGNvbXBvbmVudHMuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUZyYW1lbGVzc1N0YXRlKCk6IHZvaWQge1xuXHRjb25zdCBmcmFtZSA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5mcmFtZSA/PyBkZWZhdWx0Q29tbW9uT3B0aW9ucy5mcmFtZTtcblx0Y29uc3Qgc2VjdGlvbkZyYW1lbGVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3NlY3Rpb25GcmFtZWxlc3NcIik7XG5cdGlmIChzZWN0aW9uRnJhbWVsZXNzKSB7XG5cdFx0c2VjdGlvbkZyYW1lbGVzcy5zdHlsZS5kaXNwbGF5ID0gZnJhbWUgPyBcIm5vbmVcIiA6IFwiZmxleFwiO1xuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgcmVzaXplIHdpZHRoLlxuICovXG5mdW5jdGlvbiB1cGRhdGVSZXNpemVXaWR0aCgpOiB2b2lkIHtcblx0aWYgKFxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aCAhPT0gLTEgJiZcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGggIT09IHVuZGVmaW5lZCAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5XaWR0aCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoIDw9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5XaWR0aFxuXHQpIHtcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGggPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluV2lkdGggKyA1MDtcblx0XHRjb25zdCBtYXhXaWR0aEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI29wdGlvbk1heFdpZHRoXCIpO1xuXHRcdGlmIChtYXhXaWR0aEVsZW0pIHtcblx0XHRcdG1heFdpZHRoRWxlbS52YWx1ZUFzTnVtYmVyID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoO1xuXHRcdH1cblx0XHRjb25zdCBtYXhXaWR0aFZhbHVlRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI29wdGlvbk1heFdpZHRoVmFsdWVcIik7XG5cdFx0aWYgKG1heFdpZHRoVmFsdWVFbGVtKSB7XG5cdFx0XHRtYXhXaWR0aFZhbHVlRWxlbS50ZXh0Q29udGVudCA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aC50b1N0cmluZygpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHJlc2l6ZSBoZWlnaHQuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlc2l6ZUhlaWdodCgpOiB2b2lkIHtcblx0aWYgKFxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgIT09IC0xICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbkhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodCA8PSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluSGVpZ2h0XG5cdCkge1xuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluSGVpZ2h0ICsgNTA7XG5cdFx0Y29uc3QgbWF4SGVpZ2h0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjb3B0aW9uTWF4SGVpZ2h0XCIpO1xuXHRcdGlmIChtYXhIZWlnaHRFbGVtKSB7XG5cdFx0XHRtYXhIZWlnaHRFbGVtLnZhbHVlQXNOdW1iZXIgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0O1xuXHRcdH1cblx0XHRjb25zdCBtYXhIZWlnaHRWYWx1ZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNvcHRpb25NYXhIZWlnaHRWYWx1ZVwiKTtcblx0XHRpZiAobWF4SGVpZ2h0VmFsdWVFbGVtKSB7XG5cdFx0XHRtYXhIZWlnaHRWYWx1ZUVsZW0udGV4dENvbnRlbnQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0LnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgZGVmYXVsdCBwb3NpdGlvbiBjb21wb25lbnRzLlxuICovXG5mdW5jdGlvbiB1cGRhdGVEZWZhdWx0UG9zaXRpb24oKTogdm9pZCB7XG5cdGNvbnN0IGlzQ2VudGVyZWQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMuZGVmYXVsdENlbnRlcmVkID8/IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRDZW50ZXJlZDtcblxuXHRjb25zdCBkZWZhdWx0UG9zaXRpb25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjZGVmYXVsdFBvc2l0aW9uXCIpO1xuXHRpZiAoZGVmYXVsdFBvc2l0aW9uRWxlbSkge1xuXHRcdGRlZmF1bHRQb3NpdGlvbkVsZW0uc3R5bGUuZGlzcGxheSA9IGlzQ2VudGVyZWQgPyBcIm5vbmVcIiA6IFwiZmxleFwiO1xuXHR9XG5cblx0Y29uc3Qgb3B0aW9uRGVmYXVsdExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI29wdGlvbkRlZmF1bHRMZWZ0XCIpO1xuXHRpZiAob3B0aW9uRGVmYXVsdExlZnQgJiYgZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbkRlZmF1bHRMZWZ0LnZhbHVlQXNOdW1iZXIgPSBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdDtcblx0fVxuXHRjb25zdCBvcHRpb25EZWZhdWx0TGVmdFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KFwiI29wdGlvbkRlZmF1bHRMZWZ0VmFsdWVcIik7XG5cdGlmIChvcHRpb25EZWZhdWx0TGVmdFZhbHVlICYmIGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25EZWZhdWx0TGVmdFZhbHVlLnRleHRDb250ZW50ID0gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQudG9TdHJpbmcoKTtcblx0fVxuXG5cdGNvbnN0IG9wdGlvbkRlZmF1bHRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI29wdGlvbkRlZmF1bHRUb3BcIik7XG5cdGlmIChvcHRpb25EZWZhdWx0VG9wICYmIGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRUb3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbkRlZmF1bHRUb3AudmFsdWVBc051bWJlciA9IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRUb3A7XG5cdH1cblx0Y29uc3Qgb3B0aW9uRGVmYXVsdFRvcFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KFwiI29wdGlvbkRlZmF1bHRUb3BWYWx1ZVwiKTtcblx0aWYgKG9wdGlvbkRlZmF1bHRUb3BWYWx1ZSAmJiBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25EZWZhdWx0VG9wVmFsdWUudGV4dENvbnRlbnQgPSBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRpZiAoaXNDZW50ZXJlZCkge1xuXHRcdGRlbGV0ZSBzZWxlY3RlZENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQ7XG5cdFx0ZGVsZXRlIHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wO1xuXHR9XG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgdG8gYW4gb2JqZWN0LlxuICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHNldCB0aGUgcHJvcGVydHkgb24uXG4gKiBAcGFyYW0ga2V5IFRoZSBrZXkgdG8gc2V0LlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2V0UHJvcGVydHk8VCwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogUGFydGlhbDxUPiwga2V5OiBLLCB2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuXHRvYmpba2V5XSA9IHZhbHVlIGFzIFRbS107XG59XG5cbi8qKlxuICogR2V0IGEgcHJvcGVydHkgZnJvbSBhbiBvYmplY3QuXG4gKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gZ2V0IHRoZSBwcm9wZXJ0eSBmcm9tLlxuICogQHBhcmFtIGtleSBUaGUga2V5IHRvIGdldFxuICogQHJldHVybnMgVGhlIHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eTxULCBLIGV4dGVuZHMga2V5b2YgVCwgUD4ob2JqOiBQYXJ0aWFsPFQ+LCBrZXk6IEspOiBQIHtcblx0cmV0dXJuIG9ialtrZXldIGFzIHVua25vd24gYXMgUDtcbn1cblxuLyoqXG4gKiBDb25uZWN0IGFuIGlucHV0IHRvIGFuIG9wdGlvbi5cbiAqIEBwYXJhbSBzZWxlY3RlZFZhbHVlcyBUaGUgc2VsZWN0ZWQgdmFsdWUuXG4gKiBAcGFyYW0gZmllbGRJZCBUaGUgZmllbGQgaWQuXG4gKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBjb25uZWN0SW5wdXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+KHNlbGVjdGVkVmFsdWVzOiBQYXJ0aWFsPFQ+LCBmaWVsZElkOiBzdHJpbmcsIHByb3BlcnR5OiBLKTogdm9pZCB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9YCk7XG5cdGlmIChvcHRpb24pIHtcblx0XHRvcHRpb24udmFsdWUgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpID8/IFwiXCI7XG5cdFx0b3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi52YWx1ZSA9PT0gXCJcIiA/IHVuZGVmaW5lZCA6IG9wdGlvbi52YWx1ZSk7XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBDb25uZWN0IGEgY2hlY2tib3guXG4gKiBAcGFyYW0gc2VsZWN0ZWRWYWx1ZXMgVGhlIHNlbGVjdGVkIHZhbHVlcy5cbiAqIEBwYXJhbSBmaWVsZElkIFRoZSBmaWVsZCBpZC5cbiAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkuXG4gKiBAcGFyYW0gY2hhbmdlZCBUaGUgY2hhbmdlZCBldmVudCB0byBjYWxsLlxuICovXG5mdW5jdGlvbiBjb25uZWN0Q2hlY2tib3g8VCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuXHRzZWxlY3RlZFZhbHVlczogUGFydGlhbDxUPixcblx0ZmllbGRJZDogc3RyaW5nLFxuXHRwcm9wZXJ0eTogSyxcblx0Y2hhbmdlZD86ICgpID0+IHZvaWRcbik6IHZvaWQge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfWApO1xuXHRpZiAob3B0aW9uKSB7XG5cdFx0b3B0aW9uLmNoZWNrZWQgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcblx0XHRcdHNldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSwgb3B0aW9uLmNoZWNrZWQpO1xuXHRcdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdFx0Y2hhbmdlZCgpO1xuXHRcdFx0fVxuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogQ29ubmVjdCBhIHJhbmdlLlxuICogQHBhcmFtIHNlbGVjdGVkVmFsdWVzIFRoZSBzZWxlY3RlZCB2YWx1ZXMuXG4gKiBAcGFyYW0gZmllbGRJZCBUaGUgZmllbGQgaWQuXG4gKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5LlxuICogQHBhcmFtIGNoYW5nZWQgVGhlIGNoYW5nZWQgZXZlbnQgdG8gY2FsbC5cbiAqL1xuZnVuY3Rpb24gY29ubmVjdFJhbmdlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihcblx0c2VsZWN0ZWRWYWx1ZXM6IFBhcnRpYWw8VD4sXG5cdGZpZWxkSWQ6IHN0cmluZyxcblx0cHJvcGVydHk6IEssXG5cdGNoYW5nZWQ/OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1gKTtcblx0Y29uc3Qgb3B0aW9uVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfVZhbHVlYCk7XG5cblx0aWYgKG9wdGlvbiAmJiBvcHRpb25WYWx1ZSkge1xuXHRcdG9wdGlvbi52YWx1ZUFzTnVtYmVyID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb25WYWx1ZS50ZXh0Q29udGVudCA9IGdldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSk7XG5cdFx0b3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi52YWx1ZUFzTnVtYmVyKTtcblx0XHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gb3B0aW9uLnZhbHVlQXNOdW1iZXIudG9TdHJpbmcoKTtcblx0XHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRcdGNoYW5nZWQoKTtcblx0XHRcdH1cblx0XHRcdHVwZGF0ZVByZXZpZXcoKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIENvbm5lY3QgYSBjb2xvci5cbiAqIEBwYXJhbSBzZWxlY3RlZFZhbHVlcyBUaGUgc2VsZWN0ZWQgdmFsdWVzLlxuICogQHBhcmFtIGZpZWxkSWQgVGhlIGZpZWxkIGlkLlxuICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eS5cbiAqIEBwYXJhbSBjaGFuZ2VkIFRoZSBjaGFuZ2VkIGV2ZW50IHRvIGNhbGwuXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb2xvcjxULCBLIGV4dGVuZHMga2V5b2YgVD4oXG5cdHNlbGVjdGVkVmFsdWVzOiBQYXJ0aWFsPFQ+LFxuXHRmaWVsZElkOiBzdHJpbmcsXG5cdHByb3BlcnR5OiBLLFxuXHRjaGFuZ2VkPzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9YCk7XG5cdGNvbnN0IG9wdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1WYWx1ZWApO1xuXG5cdGlmIChvcHRpb24gJiYgb3B0aW9uVmFsdWUpIHtcblx0XHRvcHRpb24udmFsdWUgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcblx0XHRcdHNldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSwgb3B0aW9uLnZhbHVlKTtcblx0XHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gb3B0aW9uLnZhbHVlO1xuXHRcdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdFx0Y2hhbmdlZCgpO1xuXHRcdFx0fVxuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogRmluYWxpemUgdGhlIHdpbmRvdyBvcHRpb25zLlxuICogQHJldHVybnMgVGhlIGNvbXBsZXRlIHdpbmRvdyBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmaW5hbGl6ZVdpbmRvd09wdGlvbnMoKTogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMge1xuXHRjb25zdCBmaW5hbFdpbmRvd09wdGlvbnM6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0ge1xuXHRcdG5hbWU6IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5uYW1lLFxuXHRcdHVybDogc2VsZWN0ZWRDb21tb25PcHRpb25zLnVybCxcblx0XHRhdXRvU2hvdzogc2VsZWN0ZWRDb21tb25PcHRpb25zLmF1dG9TaG93XG5cdH07XG5cblx0Zm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHNlbGVjdGVkQ29tbW9uT3B0aW9ucykgYXMgKGtleW9mIE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zKVtdKSB7XG5cdFx0aWYgKHNlbGVjdGVkQ29tbW9uT3B0aW9uc1twcm9wXSAhPT0gZGVmYXVsdENvbW1vbk9wdGlvbnNbcHJvcF0pIHtcblx0XHRcdGZpbmFsV2luZG93T3B0aW9uc1twcm9wXSA9IHNlbGVjdGVkQ29tbW9uT3B0aW9uc1twcm9wXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIShzZWxlY3RlZENvbW1vbk9wdGlvbnMuZnJhbWUgPz8gdHJ1ZSkpIHtcblx0XHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMoc2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zKSBhcyAoa2V5b2YgT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMpW10pIHtcblx0XHRcdGlmIChzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnNbcHJvcF0gIT09IGRlZmF1bHRDb21tb25PcHRpb25zW3Byb3BdKSB7XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9uc1twcm9wXSA9IHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9uc1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBmaW5hbFJlZ2lvbjogT3BlbkZpbi5SZXNpemVSZWdpb24gPSB7fTtcblx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uYm90dG9tUmlnaHRDb3JuZXIgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uYm90dG9tUmlnaHRDb3JuZXIpIHtcblx0XHRcdGZpbmFsUmVnaW9uLmJvdHRvbVJpZ2h0Q29ybmVyID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uYm90dG9tUmlnaHRDb3JuZXI7XG5cdFx0fVxuXHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaXplICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpemUpIHtcblx0XHRcdGZpbmFsUmVnaW9uLnNpemUgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaXplO1xuXHRcdH1cblx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXMpIHtcblx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzID0ge307XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LmJvdHRvbSAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaWRlcz8uYm90dG9tKSB7XG5cdFx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzLmJvdHRvbSA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5ib3R0b207XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LmxlZnQgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2lkZXM/LmxlZnQpIHtcblx0XHRcdFx0ZmluYWxSZWdpb24uc2lkZXMubGVmdCA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5sZWZ0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy50b3AgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2lkZXM/LnRvcCkge1xuXHRcdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcy50b3AgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8udG9wO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5yaWdodCAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaWRlcz8ucmlnaHQpIHtcblx0XHRcdFx0ZmluYWxSZWdpb24uc2lkZXMucmlnaHQgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8ucmlnaHQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoT2JqZWN0LmtleXMoZmluYWxSZWdpb24uc2lkZXMpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRkZWxldGUgZmluYWxSZWdpb24uc2lkZXM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE9iamVjdC5rZXlzKGZpbmFsUmVnaW9uKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uID0gZmluYWxSZWdpb247XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMpIGFzIChrZXlvZiBSZXNpemVTaWRlcylbXSkge1xuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXNbcHJvcF0gIT09IGRlZmF1bHRSZXNpemVSZWdpb25TaWRlc1twcm9wXSkge1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uID0gZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbiA/PyB7fTtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbi5zaWRlcyA9IGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24uc2lkZXMgPz8ge307XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24uc2lkZXNbcHJvcF0gPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhzZWxlY3RlZENvcm5lclJvdW5kaW5nKSBhcyAoa2V5b2YgT3BlbkZpbi5Db3JuZXJSb3VuZGluZylbXSkge1xuXHRcdFx0aWYgKHNlbGVjdGVkQ29ybmVyUm91bmRpbmdbcHJvcF0gIT09IGRlZmF1bHRDb3JuZXJSb3VuZGluZ1twcm9wXSkge1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMuY29ybmVyUm91bmRpbmcgPSBmaW5hbFdpbmRvd09wdGlvbnMuY29ybmVyUm91bmRpbmcgPz8ge307XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5jb3JuZXJSb3VuZGluZ1twcm9wXSA9IHNlbGVjdGVkQ29ybmVyUm91bmRpbmdbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZpbmFsV2luZG93T3B0aW9ucztcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHByZXZpZXcuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVByZXZpZXcoKTogdm9pZCB7XG5cdGNvbnN0IHByZXZpZXdFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2aWV3XCIpO1xuXHRpZiAocHJldmlld0VsZW0pIHtcblx0XHRwcmV2aWV3RWxlbS50ZXh0Q29udGVudCA9IGNyZWF0ZVByZXZpZXcoKTtcblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHByZXZpZXcuXG4gKiBAcmV0dXJucyBUaGUgcHJldmlldyBjb2RlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVQcmV2aWV3KCk6IHN0cmluZyB7XG5cdHJldHVybiBgYXdhaXQgZmluLldpbmRvdy5jcmVhdGUoJHtKU09OLnN0cmluZ2lmeShmaW5hbGl6ZVdpbmRvd09wdGlvbnMoKSwgdW5kZWZpbmVkLCBcIiAgXCIpfSk7YDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==