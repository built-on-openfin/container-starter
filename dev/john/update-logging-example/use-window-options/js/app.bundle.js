/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
const defaultCommonOptions = {
    name: "test-child",
    url: window.location.href.replace("app.html", "preview.html"),
    icon: undefined,
    autoShow: true,
    alwaysOnTop: false,
    opacity: 1,
    contextMenuOptions: { enabled: true },
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
const defaultLaunchOptions = { usePlatform: false };
let selectedCommonOptions = { ...defaultCommonOptions };
let selectedFramelessOptions = { ...defaultFramelessOptions };
let selectedResizeRegion = { ...defaultResizeRegion };
let selectedResizeRegionSides = { ...defaultResizeRegionSides };
let selectedCornerRounding = { ...defaultCornerRounding };
let selectedLaunchOptions = { ...defaultLaunchOptions };
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
    const app = fin.Application.getCurrentSync();
    const appInfo = await app.getInfo();
    if (!appInfo.initialOptions.isPlatformController) {
        const usePlatformElemContainer = document.querySelector("#usePlatformContainer");
        if (usePlatformElemContainer) {
            usePlatformElemContainer.style.display = "none";
        }
    }
    const btnPreview = document.querySelector("#btnPreview");
    if (btnPreview) {
        btnPreview.addEventListener("click", async () => {
            const previewOptions = {
                ...finalizeWindowOptions(),
                saveWindowState: false
            };
            if (selectedLaunchOptions.usePlatform) {
                const platform = fin.Platform.getCurrentSync();
                previewWindow = await platform.createWindow(previewOptions);
            }
            else {
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
function populateForm() {
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
    updateFramelessState();
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
        selectedCommonOptions.maxWidth < selectedCommonOptions.minWidth) {
        selectedCommonOptions.maxWidth = selectedCommonOptions.minWidth;
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
        selectedCommonOptions.maxHeight < selectedCommonOptions.minHeight) {
        selectedCommonOptions.maxHeight = selectedCommonOptions.minHeight;
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
    if (selectedLaunchOptions.usePlatform) {
        return `const platform = fin.Platform.getCurrentSync();
await platform.createWindow(${JSON.stringify(finalizeWindowOptions(), undefined, "  ")});`;
    }
    return `await fin.Window.create(${JSON.stringify(finalizeWindowOptions(), undefined, "  ")});`;
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsYUFBYTtJQUNyQixJQUFJLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLE9BQU87OEJBQ3FCLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMxRixDQUFDO0lBQ0QsT0FBTywyQkFBMkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ2hHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2Utd2luZG93LW9wdGlvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXdpbmRvdy1vcHRpb25zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLXdpbmRvdy1vcHRpb25zLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuY29uc3QgZGVmYXVsdENvbW1vbk9wdGlvbnM6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0ge1xuXHRuYW1lOiBcInRlc3QtY2hpbGRcIixcblx0dXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiYXBwLmh0bWxcIiwgXCJwcmV2aWV3Lmh0bWxcIiksXG5cdGljb246IHVuZGVmaW5lZCxcblx0YXV0b1Nob3c6IHRydWUsXG5cdGFsd2F5c09uVG9wOiBmYWxzZSxcblx0b3BhY2l0eTogMSxcblx0Y29udGV4dE1lbnVPcHRpb25zOiB7IGVuYWJsZWQ6IHRydWUgfSxcblx0c2hvd1Rhc2tiYXJJY29uOiB0cnVlLFxuXHRyZXNpemFibGU6IHRydWUsXG5cdG1pbmltaXphYmxlOiB0cnVlLFxuXHRtYXhpbWl6YWJsZTogdHJ1ZSxcblx0bWluV2lkdGg6IDAsXG5cdG1heFdpZHRoOiAtMSxcblx0bWluSGVpZ2h0OiAwLFxuXHRtYXhIZWlnaHQ6IC0xLFxuXHRkZWZhdWx0Q2VudGVyZWQ6IGZhbHNlLFxuXHRkZWZhdWx0TGVmdDogMTAwLFxuXHRkZWZhdWx0VG9wOiAxMDAsXG5cdGRlZmF1bHRXaWR0aDogODAwLFxuXHRkZWZhdWx0SGVpZ2h0OiA1MDAsXG5cdGFzcGVjdFJhdGlvOiAwLFxuXHRiYWNrZ3JvdW5kQ29sb3I6IHVuZGVmaW5lZCxcblx0ZnJhbWU6IHRydWUsXG5cdHNoYWRvdzogZmFsc2Vcbn07XG5cbmNvbnN0IGRlZmF1bHRGcmFtZWxlc3NPcHRpb25zOiBQYXJ0aWFsPE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zPiA9IHtcblx0c2hhZG93OiBmYWxzZVxufTtcblxuY29uc3QgZGVmYXVsdFJlc2l6ZVJlZ2lvbjogUGFydGlhbDxPcGVuRmluLlJlc2l6ZVJlZ2lvbj4gPSB7XG5cdHNpemU6IDcsXG5cdGJvdHRvbVJpZ2h0Q29ybmVyOiA5XG59O1xuXG4vKipcbiAqIFR5cGUgZm9yIHRoZSByZXNpemUgc2lkZXMuXG4gKi9cbmludGVyZmFjZSBSZXNpemVTaWRlcyB7XG5cdC8qKlxuXHQgKiBUb3AgcG9zaXRpb24uXG5cdCAqL1xuXHR0b3A6IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBMZWZ0IHBvc2l0aW9uLlxuXHQgKi9cblx0bGVmdDogYm9vbGVhbjtcblx0LyoqXG5cdCAqIFJpZ2h0IHBvc2l0aW9uLlxuXHQgKi9cblx0cmlnaHQ6IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBCb3R0b20gcG9zaXRpb24uXG5cdCAqL1xuXHRib3R0b206IGJvb2xlYW47XG59XG5cbmNvbnN0IGRlZmF1bHRSZXNpemVSZWdpb25TaWRlczogUGFydGlhbDxSZXNpemVTaWRlcz4gPSB7XG5cdGxlZnQ6IHRydWUsXG5cdHRvcDogdHJ1ZSxcblx0cmlnaHQ6IHRydWUsXG5cdGJvdHRvbTogdHJ1ZVxufTtcblxuY29uc3QgZGVmYXVsdENvcm5lclJvdW5kaW5nOiBQYXJ0aWFsPE9wZW5GaW4uQ29ybmVyUm91bmRpbmc+ID0ge1xuXHR3aWR0aDogMCxcblx0aGVpZ2h0OiAwXG59O1xuXG5jb25zdCBkZWZhdWx0TGF1bmNoT3B0aW9uczoge1xuXHR1c2VQbGF0Zm9ybTogYm9vbGVhbjtcbn0gPSB7IHVzZVBsYXRmb3JtOiBmYWxzZSB9O1xuXG5sZXQgc2VsZWN0ZWRDb21tb25PcHRpb25zOiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucyA9IHsgLi4uZGVmYXVsdENvbW1vbk9wdGlvbnMgfTtcbmxldCBzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnM6IFBhcnRpYWw8T3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnM+ID0geyAuLi5kZWZhdWx0RnJhbWVsZXNzT3B0aW9ucyB9O1xubGV0IHNlbGVjdGVkUmVzaXplUmVnaW9uOiBQYXJ0aWFsPE9wZW5GaW4uUmVzaXplUmVnaW9uPiA9IHsgLi4uZGVmYXVsdFJlc2l6ZVJlZ2lvbiB9O1xubGV0IHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXM6IFBhcnRpYWw8UmVzaXplU2lkZXM+ID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uU2lkZXMgfTtcbmxldCBzZWxlY3RlZENvcm5lclJvdW5kaW5nOiBQYXJ0aWFsPE9wZW5GaW4uQ29ybmVyUm91bmRpbmc+ID0geyAuLi5kZWZhdWx0Q29ybmVyUm91bmRpbmcgfTtcbmxldCBzZWxlY3RlZExhdW5jaE9wdGlvbnMgPSB7IC4uLmRlZmF1bHRMYXVuY2hPcHRpb25zIH07XG5cbmxldCBwcmV2aWV3V2luZG93OiBPcGVuRmluLldpbmRvdyB8IHVuZGVmaW5lZDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcHAgPSBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKTtcblx0Y29uc3QgYXBwSW5mbyA9IGF3YWl0IGFwcC5nZXRJbmZvKCk7XG5cdGlmICghYXBwSW5mby5pbml0aWFsT3B0aW9ucy5pc1BsYXRmb3JtQ29udHJvbGxlcikge1xuXHRcdGNvbnN0IHVzZVBsYXRmb3JtRWxlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3VzZVBsYXRmb3JtQ29udGFpbmVyXCIpO1xuXHRcdGlmICh1c2VQbGF0Zm9ybUVsZW1Db250YWluZXIpIHtcblx0XHRcdHVzZVBsYXRmb3JtRWxlbUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGJ0blByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0blByZXZpZXdcIik7XG5cdGlmIChidG5QcmV2aWV3KSB7XG5cdFx0YnRuUHJldmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcHJldmlld09wdGlvbnM6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0ge1xuXHRcdFx0XHQuLi5maW5hbGl6ZVdpbmRvd09wdGlvbnMoKSxcblx0XHRcdFx0c2F2ZVdpbmRvd1N0YXRlOiBmYWxzZVxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWxlY3RlZExhdW5jaE9wdGlvbnMudXNlUGxhdGZvcm0pIHtcblx0XHRcdFx0Y29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0XHRcdFx0cHJldmlld1dpbmRvdyA9IGF3YWl0IHBsYXRmb3JtLmNyZWF0ZVdpbmRvdyhwcmV2aWV3T3B0aW9ucyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcmV2aWV3V2luZG93ID0gYXdhaXQgZmluLldpbmRvdy5jcmVhdGUocHJldmlld09wdGlvbnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdCBwcmV2aWV3V2luZG93LmFkZExpc3RlbmVyKFwiY2xvc2VkXCIsICgpID0+IHtcblx0XHRcdFx0cHJldmlld1dpbmRvdyA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuQ2xvc2VQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5DbG9zZVByZXZpZXdcIik7XG5cdGlmIChidG5DbG9zZVByZXZpZXcpIHtcblx0XHRidG5DbG9zZVByZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChwcmV2aWV3V2luZG93KSB7XG5cdFx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdFx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cuY2xvc2UodHJ1ZSk7XG5cdFx0XHRcdHByZXZpZXdXaW5kb3cgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuUmVzZXRcIik7XG5cdGlmIChidG5SZXNldCkge1xuXHRcdGJ0blJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMgPSB7IC4uLmRlZmF1bHRDb21tb25PcHRpb25zIH07XG5cdFx0XHRzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnMgPSB7IC4uLmRlZmF1bHRGcmFtZWxlc3NPcHRpb25zIH07XG5cdFx0XHRzZWxlY3RlZFJlc2l6ZVJlZ2lvbiA9IHsgLi4uZGVmYXVsdFJlc2l6ZVJlZ2lvbiB9O1xuXHRcdFx0c2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcyA9IHsgLi4uZGVmYXVsdFJlc2l6ZVJlZ2lvblNpZGVzIH07XG5cdFx0XHRzZWxlY3RlZENvcm5lclJvdW5kaW5nID0geyAuLi5kZWZhdWx0Q29ybmVyUm91bmRpbmcgfTtcblx0XHRcdHNlbGVjdGVkTGF1bmNoT3B0aW9ucyA9IHsgLi4uZGVmYXVsdExhdW5jaE9wdGlvbnMgfTtcblx0XHRcdHBvcHVsYXRlRm9ybSgpO1xuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuQ29weVwiKTtcblx0aWYgKGJ0bkNvcHkpIHtcblx0XHRidG5Db3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBmaW4uQ2xpcGJvYXJkLndyaXRlVGV4dCh7IGRhdGE6IGNyZWF0ZVByZXZpZXcoKSB9KTtcblx0XHR9KTtcblx0fVxuXG5cdHBvcHVsYXRlRm9ybSgpO1xuXHR1cGRhdGVQcmV2aWV3KCk7XG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIGZvcm0gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybSgpOiB2b2lkIHtcblx0Ly8gQ29tbW9uIG9wdGlvbnNcblx0Y29ubmVjdElucHV0KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25OYW1lXCIsIFwibmFtZVwiKTtcblx0Y29ubmVjdElucHV0KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25VcmxcIiwgXCJ1cmxcIik7XG5cdGNvbm5lY3RJbnB1dChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uSWNvblwiLCBcImljb25cIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uQWx3YXlzT25Ub3BcIiwgXCJhbHdheXNPblRvcFwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkTGF1bmNoT3B0aW9ucywgXCJvcHRpb25Vc2VQbGF0Zm9ybVwiLCBcInVzZVBsYXRmb3JtXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk9wYWNpdHlcIiwgXCJvcGFjaXR5XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblNob3dDb250ZXh0TWVudVwiLCBcImNvbnRleHRNZW51XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblNob3dUYXNrYmFySWNvblwiLCBcInNob3dUYXNrYmFySWNvblwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NaW5pbWl6YWJsZVwiLCBcIm1pbmltaXphYmxlXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1heGltaXphYmxlXCIsIFwibWF4aW1pemFibGVcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uUmVzaXphYmxlXCIsIFwicmVzaXphYmxlXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1pbldpZHRoXCIsIFwibWluV2lkdGhcIiwgKCkgPT4gdXBkYXRlUmVzaXplV2lkdGgoKSk7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWF4V2lkdGhcIiwgXCJtYXhXaWR0aFwiLCAoKSA9PiB1cGRhdGVSZXNpemVXaWR0aCgpKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NaW5IZWlnaHRcIiwgXCJtaW5IZWlnaHRcIiwgKCkgPT4gdXBkYXRlUmVzaXplSGVpZ2h0KCkpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1heEhlaWdodFwiLCBcIm1heEhlaWdodFwiLCAoKSA9PiB1cGRhdGVSZXNpemVIZWlnaHQoKSk7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRGVmYXVsdENlbnRlcmVkXCIsIFwiZGVmYXVsdENlbnRlcmVkXCIsICgpID0+XG5cdFx0dXBkYXRlRGVmYXVsdFBvc2l0aW9uKClcblx0KTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0TGVmdFwiLCBcImRlZmF1bHRMZWZ0XCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRUb3BcIiwgXCJkZWZhdWx0VG9wXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRXaWR0aFwiLCBcImRlZmF1bHRXaWR0aFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0SGVpZ2h0XCIsIFwiZGVmYXVsdEhlaWdodFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25Bc3BlY3RSYXRpb1wiLCBcImFzcGVjdFJhdGlvXCIpO1xuXHRjb25uZWN0Q29sb3Ioc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkJhY2tncm91bmRDb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25GcmFtZVwiLCBcImZyYW1lXCIsICgpID0+IHVwZGF0ZUZyYW1lbGVzc1N0YXRlKCkpO1xuXG5cdC8vIEZyYW1lbGVzcyBvcHRpb25zXG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnMsIFwib3B0aW9uU2hhZG93XCIsIFwic2hhZG93XCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRSZXNpemVSZWdpb24sIFwib3B0aW9uRWRnZVJlc2l6ZVNpemVcIiwgXCJzaXplXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRSZXNpemVSZWdpb24sIFwib3B0aW9uQ29ybmVyUmVzaXplU2l6ZVwiLCBcImJvdHRvbVJpZ2h0Q29ybmVyXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlTGVmdFwiLCBcImxlZnRcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzLCBcIm9wdGlvblJlc2l6ZVJlZ2lvblNpZGVSaWdodFwiLCBcInJpZ2h0XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlVG9wXCIsIFwidG9wXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlQm90dG9tXCIsIFwiYm90dG9tXCIpO1xuXG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvcm5lclJvdW5kaW5nLCBcIm9wdGlvbkNvcm5lclJvdW5kaW5nV2lkdGhcIiwgXCJ3aWR0aFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29ybmVyUm91bmRpbmcsIFwib3B0aW9uQ29ybmVyUm91bmRpbmdIZWlnaHRcIiwgXCJoZWlnaHRcIik7XG5cblx0dXBkYXRlRnJhbWVsZXNzU3RhdGUoKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBmcmFtZWxlc3MgY29tcG9uZW50cy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlRnJhbWVsZXNzU3RhdGUoKTogdm9pZCB7XG5cdGNvbnN0IGZyYW1lID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLmZyYW1lID8/IGRlZmF1bHRDb21tb25PcHRpb25zLmZyYW1lO1xuXHRjb25zdCBzZWN0aW9uRnJhbWVsZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjc2VjdGlvbkZyYW1lbGVzc1wiKTtcblx0aWYgKHNlY3Rpb25GcmFtZWxlc3MpIHtcblx0XHRzZWN0aW9uRnJhbWVsZXNzLnN0eWxlLmRpc3BsYXkgPSBmcmFtZSA/IFwibm9uZVwiIDogXCJmbGV4XCI7XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSByZXNpemUgd2lkdGguXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlc2l6ZVdpZHRoKCk6IHZvaWQge1xuXHRpZiAoXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoICE9PSAtMSAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbldpZHRoICE9PSB1bmRlZmluZWQgJiZcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGggPCBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluV2lkdGhcblx0KSB7XG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbldpZHRoO1xuXHRcdGNvbnN0IG1heFdpZHRoRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjb3B0aW9uTWF4V2lkdGhcIik7XG5cdFx0aWYgKG1heFdpZHRoRWxlbSkge1xuXHRcdFx0bWF4V2lkdGhFbGVtLnZhbHVlQXNOdW1iZXIgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGg7XG5cdFx0fVxuXHRcdGNvbnN0IG1heFdpZHRoVmFsdWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjb3B0aW9uTWF4V2lkdGhWYWx1ZVwiKTtcblx0XHRpZiAobWF4V2lkdGhWYWx1ZUVsZW0pIHtcblx0XHRcdG1heFdpZHRoVmFsdWVFbGVtLnRleHRDb250ZW50ID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgcmVzaXplIGhlaWdodC5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUmVzaXplSGVpZ2h0KCk6IHZvaWQge1xuXHRpZiAoXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodCAhPT0gLTEgJiZcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiZcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluSGVpZ2h0ICE9PSB1bmRlZmluZWQgJiZcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0IDwgc2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbkhlaWdodFxuXHQpIHtcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0ID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbkhlaWdodDtcblx0XHRjb25zdCBtYXhIZWlnaHRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNvcHRpb25NYXhIZWlnaHRcIik7XG5cdFx0aWYgKG1heEhlaWdodEVsZW0pIHtcblx0XHRcdG1heEhlaWdodEVsZW0udmFsdWVBc051bWJlciA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQ7XG5cdFx0fVxuXHRcdGNvbnN0IG1heEhlaWdodFZhbHVlRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI29wdGlvbk1heEhlaWdodFZhbHVlXCIpO1xuXHRcdGlmIChtYXhIZWlnaHRWYWx1ZUVsZW0pIHtcblx0XHRcdG1heEhlaWdodFZhbHVlRWxlbS50ZXh0Q29udGVudCA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQudG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBkZWZhdWx0IHBvc2l0aW9uIGNvbXBvbmVudHMuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZURlZmF1bHRQb3NpdGlvbigpOiB2b2lkIHtcblx0Y29uc3QgaXNDZW50ZXJlZCA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5kZWZhdWx0Q2VudGVyZWQgPz8gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdENlbnRlcmVkO1xuXG5cdGNvbnN0IGRlZmF1bHRQb3NpdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNkZWZhdWx0UG9zaXRpb25cIik7XG5cdGlmIChkZWZhdWx0UG9zaXRpb25FbGVtKSB7XG5cdFx0ZGVmYXVsdFBvc2l0aW9uRWxlbS5zdHlsZS5kaXNwbGF5ID0gaXNDZW50ZXJlZCA/IFwibm9uZVwiIDogXCJmbGV4XCI7XG5cdH1cblxuXHRjb25zdCBvcHRpb25EZWZhdWx0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjb3B0aW9uRGVmYXVsdExlZnRcIik7XG5cdGlmIChvcHRpb25EZWZhdWx0TGVmdCAmJiBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9uRGVmYXVsdExlZnQudmFsdWVBc051bWJlciA9IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0O1xuXHR9XG5cdGNvbnN0IG9wdGlvbkRlZmF1bHRMZWZ0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oXCIjb3B0aW9uRGVmYXVsdExlZnRWYWx1ZVwiKTtcblx0aWYgKG9wdGlvbkRlZmF1bHRMZWZ0VmFsdWUgJiYgZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbkRlZmF1bHRMZWZ0VmFsdWUudGV4dENvbnRlbnQgPSBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdC50b1N0cmluZygpO1xuXHR9XG5cblx0Y29uc3Qgb3B0aW9uRGVmYXVsdFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjb3B0aW9uRGVmYXVsdFRvcFwiKTtcblx0aWYgKG9wdGlvbkRlZmF1bHRUb3AgJiYgZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9uRGVmYXVsdFRvcC52YWx1ZUFzTnVtYmVyID0gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcDtcblx0fVxuXHRjb25zdCBvcHRpb25EZWZhdWx0VG9wVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oXCIjb3B0aW9uRGVmYXVsdFRvcFZhbHVlXCIpO1xuXHRpZiAob3B0aW9uRGVmYXVsdFRvcFZhbHVlICYmIGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRUb3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbkRlZmF1bHRUb3BWYWx1ZS50ZXh0Q29udGVudCA9IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRUb3AudG9TdHJpbmcoKTtcblx0fVxuXG5cdGlmIChpc0NlbnRlcmVkKSB7XG5cdFx0ZGVsZXRlIHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdDtcblx0XHRkZWxldGUgc2VsZWN0ZWRDb21tb25PcHRpb25zLmRlZmF1bHRUb3A7XG5cdH1cbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSB0byBhbiBvYmplY3QuXG4gKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gc2V0IHRoZSBwcm9wZXJ0eSBvbi5cbiAqIEBwYXJhbSBrZXkgVGhlIGtleSB0byBzZXQuXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxuICovXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eTxULCBLIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBQYXJ0aWFsPFQ+LCBrZXk6IEssIHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG5cdG9ialtrZXldID0gdmFsdWUgYXMgVFtLXTtcbn1cblxuLyoqXG4gKiBHZXQgYSBwcm9wZXJ0eSBmcm9tIGFuIG9iamVjdC5cbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBnZXQgdGhlIHByb3BlcnR5IGZyb20uXG4gKiBAcGFyYW0ga2V5IFRoZSBrZXkgdG8gZ2V0XG4gKiBAcmV0dXJucyBUaGUgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3BlcnR5PFQsIEsgZXh0ZW5kcyBrZXlvZiBULCBQPihvYmo6IFBhcnRpYWw8VD4sIGtleTogSyk6IFAge1xuXHRyZXR1cm4gb2JqW2tleV0gYXMgdW5rbm93biBhcyBQO1xufVxuXG4vKipcbiAqIENvbm5lY3QgYW4gaW5wdXQgdG8gYW4gb3B0aW9uLlxuICogQHBhcmFtIHNlbGVjdGVkVmFsdWVzIFRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAqIEBwYXJhbSBmaWVsZElkIFRoZSBmaWVsZCBpZC5cbiAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnB1dDxULCBLIGV4dGVuZHMga2V5b2YgVD4oc2VsZWN0ZWRWYWx1ZXM6IFBhcnRpYWw8VD4sIGZpZWxkSWQ6IHN0cmluZywgcHJvcGVydHk6IEspOiB2b2lkIHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1gKTtcblx0aWYgKG9wdGlvbikge1xuXHRcdG9wdGlvbi52YWx1ZSA9IGdldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSkgPz8gXCJcIjtcblx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcblx0XHRcdHNldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSwgb3B0aW9uLnZhbHVlID09PSBcIlwiID8gdW5kZWZpbmVkIDogb3B0aW9uLnZhbHVlKTtcblx0XHRcdHVwZGF0ZVByZXZpZXcoKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIENvbm5lY3QgYSBjaGVja2JveC5cbiAqIEBwYXJhbSBzZWxlY3RlZFZhbHVlcyBUaGUgc2VsZWN0ZWQgdmFsdWVzLlxuICogQHBhcmFtIGZpZWxkSWQgVGhlIGZpZWxkIGlkLlxuICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eS5cbiAqIEBwYXJhbSBjaGFuZ2VkIFRoZSBjaGFuZ2VkIGV2ZW50IHRvIGNhbGwuXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDaGVja2JveDxULCBLIGV4dGVuZHMga2V5b2YgVD4oXG5cdHNlbGVjdGVkVmFsdWVzOiBQYXJ0aWFsPFQ+LFxuXHRmaWVsZElkOiBzdHJpbmcsXG5cdHByb3BlcnR5OiBLLFxuXHRjaGFuZ2VkPzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9YCk7XG5cdGlmIChvcHRpb24pIHtcblx0XHRvcHRpb24uY2hlY2tlZCA9IGdldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSk7XG5cdFx0b3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdFx0c2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5LCBvcHRpb24uY2hlY2tlZCk7XG5cdFx0XHRpZiAoY2hhbmdlZCkge1xuXHRcdFx0XHRjaGFuZ2VkKCk7XG5cdFx0XHR9XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBDb25uZWN0IGEgcmFuZ2UuXG4gKiBAcGFyYW0gc2VsZWN0ZWRWYWx1ZXMgVGhlIHNlbGVjdGVkIHZhbHVlcy5cbiAqIEBwYXJhbSBmaWVsZElkIFRoZSBmaWVsZCBpZC5cbiAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkuXG4gKiBAcGFyYW0gY2hhbmdlZCBUaGUgY2hhbmdlZCBldmVudCB0byBjYWxsLlxuICovXG5mdW5jdGlvbiBjb25uZWN0UmFuZ2U8VCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuXHRzZWxlY3RlZFZhbHVlczogUGFydGlhbDxUPixcblx0ZmllbGRJZDogc3RyaW5nLFxuXHRwcm9wZXJ0eTogSyxcblx0Y2hhbmdlZD86ICgpID0+IHZvaWRcbik6IHZvaWQge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfWApO1xuXHRjb25zdCBvcHRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9VmFsdWVgKTtcblxuXHRpZiAob3B0aW9uICYmIG9wdGlvblZhbHVlKSB7XG5cdFx0b3B0aW9uLnZhbHVlQXNOdW1iZXIgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcblx0XHRcdHNldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSwgb3B0aW9uLnZhbHVlQXNOdW1iZXIpO1xuXHRcdFx0b3B0aW9uVmFsdWUudGV4dENvbnRlbnQgPSBvcHRpb24udmFsdWVBc051bWJlci50b1N0cmluZygpO1xuXHRcdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdFx0Y2hhbmdlZCgpO1xuXHRcdFx0fVxuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogQ29ubmVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHNlbGVjdGVkVmFsdWVzIFRoZSBzZWxlY3RlZCB2YWx1ZXMuXG4gKiBAcGFyYW0gZmllbGRJZCBUaGUgZmllbGQgaWQuXG4gKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5LlxuICogQHBhcmFtIGNoYW5nZWQgVGhlIGNoYW5nZWQgZXZlbnQgdG8gY2FsbC5cbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbG9yPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihcblx0c2VsZWN0ZWRWYWx1ZXM6IFBhcnRpYWw8VD4sXG5cdGZpZWxkSWQ6IHN0cmluZyxcblx0cHJvcGVydHk6IEssXG5cdGNoYW5nZWQ/OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1gKTtcblx0Y29uc3Qgb3B0aW9uVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfVZhbHVlYCk7XG5cblx0aWYgKG9wdGlvbiAmJiBvcHRpb25WYWx1ZSkge1xuXHRcdG9wdGlvbi52YWx1ZSA9IGdldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSk7XG5cdFx0b3B0aW9uVmFsdWUudGV4dENvbnRlbnQgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0c2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5LCBvcHRpb24udmFsdWUpO1xuXHRcdFx0b3B0aW9uVmFsdWUudGV4dENvbnRlbnQgPSBvcHRpb24udmFsdWU7XG5cdFx0XHRpZiAoY2hhbmdlZCkge1xuXHRcdFx0XHRjaGFuZ2VkKCk7XG5cdFx0XHR9XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBGaW5hbGl6ZSB0aGUgd2luZG93IG9wdGlvbnMuXG4gKiBAcmV0dXJucyBUaGUgY29tcGxldGUgd2luZG93IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZpbmFsaXplV2luZG93T3B0aW9ucygpOiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucyB7XG5cdGNvbnN0IGZpbmFsV2luZG93T3B0aW9uczogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMgPSB7XG5cdFx0bmFtZTogc2VsZWN0ZWRDb21tb25PcHRpb25zLm5hbWUsXG5cdFx0dXJsOiBzZWxlY3RlZENvbW1vbk9wdGlvbnMudXJsLFxuXHRcdGF1dG9TaG93OiBzZWxlY3RlZENvbW1vbk9wdGlvbnMuYXV0b1Nob3dcblx0fTtcblxuXHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMoc2VsZWN0ZWRDb21tb25PcHRpb25zKSBhcyAoa2V5b2YgT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMpW10pIHtcblx0XHRpZiAoc2VsZWN0ZWRDb21tb25PcHRpb25zW3Byb3BdICE9PSBkZWZhdWx0Q29tbW9uT3B0aW9uc1twcm9wXSkge1xuXHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zW3Byb3BdID0gc2VsZWN0ZWRDb21tb25PcHRpb25zW3Byb3BdO1xuXHRcdH1cblx0fVxuXG5cdGlmICghKHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5mcmFtZSA/PyB0cnVlKSkge1xuXHRcdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnMpIGFzIChrZXlvZiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucylbXSkge1xuXHRcdFx0aWYgKHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9uc1twcm9wXSAhPT0gZGVmYXVsdENvbW1vbk9wdGlvbnNbcHJvcF0pIHtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zW3Byb3BdID0gc2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGZpbmFsUmVnaW9uOiBPcGVuRmluLlJlc2l6ZVJlZ2lvbiA9IHt9O1xuXHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5ib3R0b21SaWdodENvcm5lciAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5ib3R0b21SaWdodENvcm5lcikge1xuXHRcdFx0ZmluYWxSZWdpb24uYm90dG9tUmlnaHRDb3JuZXIgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5ib3R0b21SaWdodENvcm5lcjtcblx0XHR9XG5cdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpemUgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2l6ZSkge1xuXHRcdFx0ZmluYWxSZWdpb24uc2l6ZSA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpemU7XG5cdFx0fVxuXHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcykge1xuXHRcdFx0ZmluYWxSZWdpb24uc2lkZXMgPSB7fTtcblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8uYm90dG9tICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpZGVzPy5ib3R0b20pIHtcblx0XHRcdFx0ZmluYWxSZWdpb24uc2lkZXMuYm90dG9tID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LmJvdHRvbTtcblx0XHRcdH1cblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8ubGVmdCAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaWRlcz8ubGVmdCkge1xuXHRcdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcy5sZWZ0ID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LmxlZnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LnRvcCAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaWRlcz8udG9wKSB7XG5cdFx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzLnRvcCA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy50b3A7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LnJpZ2h0ICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpZGVzPy5yaWdodCkge1xuXHRcdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcy5yaWdodCA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5yaWdodDtcblx0XHRcdH1cblx0XHRcdGlmIChPYmplY3Qua2V5cyhmaW5hbFJlZ2lvbi5zaWRlcykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGRlbGV0ZSBmaW5hbFJlZ2lvbi5zaWRlcztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoT2JqZWN0LmtleXMoZmluYWxSZWdpb24pLmxlbmd0aCA+IDApIHtcblx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24gPSBmaW5hbFJlZ2lvbjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMoc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcykgYXMgKGtleW9mIFJlc2l6ZVNpZGVzKVtdKSB7XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlc1twcm9wXSAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvblNpZGVzW3Byb3BdKSB7XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24gPSBmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uID8/IHt9O1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uLnNpZGVzID0gZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbi5zaWRlcyA/PyB7fTtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbi5zaWRlc1twcm9wXSA9IHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXNbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHNlbGVjdGVkQ29ybmVyUm91bmRpbmcpIGFzIChrZXlvZiBPcGVuRmluLkNvcm5lclJvdW5kaW5nKVtdKSB7XG5cdFx0XHRpZiAoc2VsZWN0ZWRDb3JuZXJSb3VuZGluZ1twcm9wXSAhPT0gZGVmYXVsdENvcm5lclJvdW5kaW5nW3Byb3BdKSB7XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5jb3JuZXJSb3VuZGluZyA9IGZpbmFsV2luZG93T3B0aW9ucy5jb3JuZXJSb3VuZGluZyA/PyB7fTtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLmNvcm5lclJvdW5kaW5nW3Byb3BdID0gc2VsZWN0ZWRDb3JuZXJSb3VuZGluZ1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmluYWxXaW5kb3dPcHRpb25zO1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgcHJldmlldy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUHJldmlldygpOiB2b2lkIHtcblx0Y29uc3QgcHJldmlld0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXdcIik7XG5cdGlmIChwcmV2aWV3RWxlbSkge1xuXHRcdHByZXZpZXdFbGVtLnRleHRDb250ZW50ID0gY3JlYXRlUHJldmlldygpO1xuXHR9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcHJldmlldy5cbiAqIEByZXR1cm5zIFRoZSBwcmV2aWV3IGNvZGUuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByZXZpZXcoKTogc3RyaW5nIHtcblx0aWYgKHNlbGVjdGVkTGF1bmNoT3B0aW9ucy51c2VQbGF0Zm9ybSkge1xuXHRcdHJldHVybiBgY29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcbmF3YWl0IHBsYXRmb3JtLmNyZWF0ZVdpbmRvdygke0pTT04uc3RyaW5naWZ5KGZpbmFsaXplV2luZG93T3B0aW9ucygpLCB1bmRlZmluZWQsIFwiICBcIil9KTtgO1xuXHR9XG5cdHJldHVybiBgYXdhaXQgZmluLldpbmRvdy5jcmVhdGUoJHtKU09OLnN0cmluZ2lmeShmaW5hbGl6ZVdpbmRvd09wdGlvbnMoKSwgdW5kZWZpbmVkLCBcIiAgXCIpfSk7YDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==