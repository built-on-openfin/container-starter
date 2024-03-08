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
            if (previewWindow) {
                await previewWindow.removeAllListeners();
                await previewWindow.close(true);
                previewWindow = undefined;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxhQUFhO0lBQ3JCLElBQUkscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsT0FBTzs4QkFDcUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFGLENBQUM7SUFDRCxPQUFPLDJCQUEyQixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDaEcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS13aW5kb3ctb3B0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2Utd2luZG93LW9wdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2Utd2luZG93LW9wdGlvbnMvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29tbW9uT3B0aW9uczogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMgPSB7XG5cdG5hbWU6IFwidGVzdC1jaGlsZFwiLFxuXHR1cmw6IFwiLi9wcmV2aWV3Lmh0bWxcIixcblx0aWNvbjogdW5kZWZpbmVkLFxuXHRhdXRvU2hvdzogdHJ1ZSxcblx0YWx3YXlzT25Ub3A6IGZhbHNlLFxuXHRvcGFjaXR5OiAxLFxuXHRjb250ZXh0TWVudTogdHJ1ZSxcblx0c2hvd1Rhc2tiYXJJY29uOiB0cnVlLFxuXHRyZXNpemFibGU6IHRydWUsXG5cdG1pbmltaXphYmxlOiB0cnVlLFxuXHRtYXhpbWl6YWJsZTogdHJ1ZSxcblx0bWluV2lkdGg6IDAsXG5cdG1heFdpZHRoOiAtMSxcblx0bWluSGVpZ2h0OiAwLFxuXHRtYXhIZWlnaHQ6IC0xLFxuXHRkZWZhdWx0Q2VudGVyZWQ6IGZhbHNlLFxuXHRkZWZhdWx0TGVmdDogMTAwLFxuXHRkZWZhdWx0VG9wOiAxMDAsXG5cdGRlZmF1bHRXaWR0aDogODAwLFxuXHRkZWZhdWx0SGVpZ2h0OiA1MDAsXG5cdGFzcGVjdFJhdGlvOiAwLFxuXHRiYWNrZ3JvdW5kQ29sb3I6IHVuZGVmaW5lZCxcblx0ZnJhbWU6IHRydWUsXG5cdHNoYWRvdzogZmFsc2Vcbn07XG5cbmNvbnN0IGRlZmF1bHRGcmFtZWxlc3NPcHRpb25zOiBQYXJ0aWFsPE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zPiA9IHtcblx0c2hhZG93OiBmYWxzZVxufTtcblxuY29uc3QgZGVmYXVsdFJlc2l6ZVJlZ2lvbjogUGFydGlhbDxPcGVuRmluLlJlc2l6ZVJlZ2lvbj4gPSB7XG5cdHNpemU6IDcsXG5cdGJvdHRvbVJpZ2h0Q29ybmVyOiA5XG59O1xuXG4vKipcbiAqIFR5cGUgZm9yIHRoZSByZXNpemUgc2lkZXMuXG4gKi9cbmludGVyZmFjZSBSZXNpemVTaWRlcyB7XG5cdC8qKlxuXHQgKiBUb3AgcG9zaXRpb24uXG5cdCAqL1xuXHR0b3A6IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBMZWZ0IHBvc2l0aW9uLlxuXHQgKi9cblx0bGVmdDogYm9vbGVhbjtcblx0LyoqXG5cdCAqIFJpZ2h0IHBvc2l0aW9uLlxuXHQgKi9cblx0cmlnaHQ6IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBCb3R0b20gcG9zaXRpb24uXG5cdCAqL1xuXHRib3R0b206IGJvb2xlYW47XG59XG5cbmNvbnN0IGRlZmF1bHRSZXNpemVSZWdpb25TaWRlczogUGFydGlhbDxSZXNpemVTaWRlcz4gPSB7XG5cdGxlZnQ6IHRydWUsXG5cdHRvcDogdHJ1ZSxcblx0cmlnaHQ6IHRydWUsXG5cdGJvdHRvbTogdHJ1ZVxufTtcblxuY29uc3QgZGVmYXVsdENvcm5lclJvdW5kaW5nOiBQYXJ0aWFsPE9wZW5GaW4uQ29ybmVyUm91bmRpbmc+ID0ge1xuXHR3aWR0aDogMCxcblx0aGVpZ2h0OiAwXG59O1xuXG5jb25zdCBkZWZhdWx0TGF1bmNoT3B0aW9uczoge1xuXHR1c2VQbGF0Zm9ybTogYm9vbGVhbjtcbn0gPSB7IHVzZVBsYXRmb3JtOiBmYWxzZSB9O1xuXG5sZXQgc2VsZWN0ZWRDb21tb25PcHRpb25zOiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucyA9IHsgLi4uZGVmYXVsdENvbW1vbk9wdGlvbnMgfTtcbmxldCBzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnM6IFBhcnRpYWw8T3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnM+ID0geyAuLi5kZWZhdWx0RnJhbWVsZXNzT3B0aW9ucyB9O1xubGV0IHNlbGVjdGVkUmVzaXplUmVnaW9uOiBQYXJ0aWFsPE9wZW5GaW4uUmVzaXplUmVnaW9uPiA9IHsgLi4uZGVmYXVsdFJlc2l6ZVJlZ2lvbiB9O1xubGV0IHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXM6IFBhcnRpYWw8UmVzaXplU2lkZXM+ID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uU2lkZXMgfTtcbmxldCBzZWxlY3RlZENvcm5lclJvdW5kaW5nOiBQYXJ0aWFsPE9wZW5GaW4uQ29ybmVyUm91bmRpbmc+ID0geyAuLi5kZWZhdWx0Q29ybmVyUm91bmRpbmcgfTtcbmxldCBzZWxlY3RlZExhdW5jaE9wdGlvbnMgPSB7IC4uLmRlZmF1bHRMYXVuY2hPcHRpb25zIH07XG5cbmxldCBwcmV2aWV3V2luZG93OiBPcGVuRmluLldpbmRvdyB8IHVuZGVmaW5lZDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcHAgPSBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKTtcblx0Y29uc3QgYXBwSW5mbyA9IGF3YWl0IGFwcC5nZXRJbmZvKCk7XG5cdGlmICghYXBwSW5mby5pbml0aWFsT3B0aW9ucy5pc1BsYXRmb3JtQ29udHJvbGxlcikge1xuXHRcdGNvbnN0IHVzZVBsYXRmb3JtRWxlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3VzZVBsYXRmb3JtQ29udGFpbmVyXCIpO1xuXHRcdGlmICh1c2VQbGF0Zm9ybUVsZW1Db250YWluZXIpIHtcblx0XHRcdHVzZVBsYXRmb3JtRWxlbUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGJ0blByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0blByZXZpZXdcIik7XG5cdGlmIChidG5QcmV2aWV3KSB7XG5cdFx0YnRuUHJldmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKHByZXZpZXdXaW5kb3cpIHtcblx0XHRcdFx0YXdhaXQgcHJldmlld1dpbmRvdy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0XHRcdFx0YXdhaXQgcHJldmlld1dpbmRvdy5jbG9zZSh0cnVlKTtcblx0XHRcdFx0cHJldmlld1dpbmRvdyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHByZXZpZXdPcHRpb25zOiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucyA9IHtcblx0XHRcdFx0Li4uZmluYWxpemVXaW5kb3dPcHRpb25zKCksXG5cdFx0XHRcdHNhdmVXaW5kb3dTdGF0ZTogZmFsc2Vcblx0XHRcdH07XG5cdFx0XHRpZiAoc2VsZWN0ZWRMYXVuY2hPcHRpb25zLnVzZVBsYXRmb3JtKSB7XG5cdFx0XHRcdGNvbnN0IHBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdFx0XHRcdHByZXZpZXdXaW5kb3cgPSBhd2FpdCBwbGF0Zm9ybS5jcmVhdGVXaW5kb3cocHJldmlld09wdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJldmlld1dpbmRvdyA9IGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKHByZXZpZXdPcHRpb25zKTtcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgcHJldmlld1dpbmRvdy5hZGRMaXN0ZW5lcihcImNsb3NlZFwiLCAoKSA9PiB7XG5cdFx0XHRcdHByZXZpZXdXaW5kb3cgPSB1bmRlZmluZWQ7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNsb3NlUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuQ2xvc2VQcmV2aWV3XCIpO1xuXHRpZiAoYnRuQ2xvc2VQcmV2aWV3KSB7XG5cdFx0YnRuQ2xvc2VQcmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRpZiAocHJldmlld1dpbmRvdykge1xuXHRcdFx0XHRhd2FpdCBwcmV2aWV3V2luZG93LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXHRcdFx0XHRhd2FpdCBwcmV2aWV3V2luZG93LmNsb3NlKHRydWUpO1xuXHRcdFx0XHRwcmV2aWV3V2luZG93ID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0blJlc2V0XCIpO1xuXHRpZiAoYnRuUmVzZXQpIHtcblx0XHRidG5SZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zID0geyAuLi5kZWZhdWx0Q29tbW9uT3B0aW9ucyB9O1xuXHRcdFx0c2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zID0geyAuLi5kZWZhdWx0RnJhbWVsZXNzT3B0aW9ucyB9O1xuXHRcdFx0c2VsZWN0ZWRSZXNpemVSZWdpb24gPSB7IC4uLmRlZmF1bHRSZXNpemVSZWdpb24gfTtcblx0XHRcdHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMgPSB7IC4uLmRlZmF1bHRSZXNpemVSZWdpb25TaWRlcyB9O1xuXHRcdFx0c2VsZWN0ZWRDb3JuZXJSb3VuZGluZyA9IHsgLi4uZGVmYXVsdENvcm5lclJvdW5kaW5nIH07XG5cdFx0XHRzZWxlY3RlZExhdW5jaE9wdGlvbnMgPSB7IC4uLmRlZmF1bHRMYXVuY2hPcHRpb25zIH07XG5cdFx0XHRwb3B1bGF0ZUZvcm0oKTtcblx0XHRcdHVwZGF0ZVByZXZpZXcoKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNvcHlcIik7XG5cdGlmIChidG5Db3B5KSB7XG5cdFx0YnRuQ29weS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgZmluLkNsaXBib2FyZC53cml0ZVRleHQoeyBkYXRhOiBjcmVhdGVQcmV2aWV3KCkgfSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwb3B1bGF0ZUZvcm0oKTtcblx0dXBkYXRlUHJldmlldygpO1xufVxuXG4vKipcbiAqIFBvcHVsYXRlIHRoZSBmb3JtIGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBwb3B1bGF0ZUZvcm0oKTogdm9pZCB7XG5cdC8vIENvbW1vbiBvcHRpb25zXG5cdGNvbm5lY3RJbnB1dChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTmFtZVwiLCBcIm5hbWVcIik7XG5cdGNvbm5lY3RJbnB1dChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uVXJsXCIsIFwidXJsXCIpO1xuXHRjb25uZWN0SW5wdXQoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkljb25cIiwgXCJpY29uXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkFsd2F5c09uVG9wXCIsIFwiYWx3YXlzT25Ub3BcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZExhdW5jaE9wdGlvbnMsIFwib3B0aW9uVXNlUGxhdGZvcm1cIiwgXCJ1c2VQbGF0Zm9ybVwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25PcGFjaXR5XCIsIFwib3BhY2l0eVwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25TaG93Q29udGV4dE1lbnVcIiwgXCJjb250ZXh0TWVudVwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25TaG93VGFza2Jhckljb25cIiwgXCJzaG93VGFza2Jhckljb25cIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWluaW1pemFibGVcIiwgXCJtaW5pbWl6YWJsZVwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NYXhpbWl6YWJsZVwiLCBcIm1heGltaXphYmxlXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblJlc2l6YWJsZVwiLCBcInJlc2l6YWJsZVwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NaW5XaWR0aFwiLCBcIm1pbldpZHRoXCIsICgpID0+IHVwZGF0ZVJlc2l6ZVdpZHRoKCkpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1heFdpZHRoXCIsIFwibWF4V2lkdGhcIiwgKCkgPT4gdXBkYXRlUmVzaXplV2lkdGgoKSk7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWluSGVpZ2h0XCIsIFwibWluSGVpZ2h0XCIsICgpID0+IHVwZGF0ZVJlc2l6ZUhlaWdodCgpKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NYXhIZWlnaHRcIiwgXCJtYXhIZWlnaHRcIiwgKCkgPT4gdXBkYXRlUmVzaXplSGVpZ2h0KCkpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRDZW50ZXJlZFwiLCBcImRlZmF1bHRDZW50ZXJlZFwiLCAoKSA9PlxuXHRcdHVwZGF0ZURlZmF1bHRQb3NpdGlvbigpXG5cdCk7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRGVmYXVsdExlZnRcIiwgXCJkZWZhdWx0TGVmdFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0VG9wXCIsIFwiZGVmYXVsdFRvcFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0V2lkdGhcIiwgXCJkZWZhdWx0V2lkdGhcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRGVmYXVsdEhlaWdodFwiLCBcImRlZmF1bHRIZWlnaHRcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uQXNwZWN0UmF0aW9cIiwgXCJhc3BlY3RSYXRpb1wiKTtcblx0Y29ubmVjdENvbG9yKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25CYWNrZ3JvdW5kQ29sb3JcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRnJhbWVcIiwgXCJmcmFtZVwiLCAoKSA9PiB1cGRhdGVGcmFtZWxlc3NTdGF0ZSgpKTtcblxuXHQvLyBGcmFtZWxlc3Mgb3B0aW9uc1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zLCBcIm9wdGlvblNoYWRvd1wiLCBcInNoYWRvd1wiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkUmVzaXplUmVnaW9uLCBcIm9wdGlvbkVkZ2VSZXNpemVTaXplXCIsIFwic2l6ZVwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkUmVzaXplUmVnaW9uLCBcIm9wdGlvbkNvcm5lclJlc2l6ZVNpemVcIiwgXCJib3R0b21SaWdodENvcm5lclwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMsIFwib3B0aW9uUmVzaXplUmVnaW9uU2lkZUxlZnRcIiwgXCJsZWZ0XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlUmlnaHRcIiwgXCJyaWdodFwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMsIFwib3B0aW9uUmVzaXplUmVnaW9uU2lkZVRvcFwiLCBcInRvcFwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMsIFwib3B0aW9uUmVzaXplUmVnaW9uU2lkZUJvdHRvbVwiLCBcImJvdHRvbVwiKTtcblxuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb3JuZXJSb3VuZGluZywgXCJvcHRpb25Db3JuZXJSb3VuZGluZ1dpZHRoXCIsIFwid2lkdGhcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvcm5lclJvdW5kaW5nLCBcIm9wdGlvbkNvcm5lclJvdW5kaW5nSGVpZ2h0XCIsIFwiaGVpZ2h0XCIpO1xuXG5cdHVwZGF0ZUZyYW1lbGVzc1N0YXRlKCk7XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgZnJhbWVsZXNzIGNvbXBvbmVudHMuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUZyYW1lbGVzc1N0YXRlKCk6IHZvaWQge1xuXHRjb25zdCBmcmFtZSA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5mcmFtZSA/PyBkZWZhdWx0Q29tbW9uT3B0aW9ucy5mcmFtZTtcblx0Y29uc3Qgc2VjdGlvbkZyYW1lbGVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3NlY3Rpb25GcmFtZWxlc3NcIik7XG5cdGlmIChzZWN0aW9uRnJhbWVsZXNzKSB7XG5cdFx0c2VjdGlvbkZyYW1lbGVzcy5zdHlsZS5kaXNwbGF5ID0gZnJhbWUgPyBcIm5vbmVcIiA6IFwiZmxleFwiO1xuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgcmVzaXplIHdpZHRoLlxuICovXG5mdW5jdGlvbiB1cGRhdGVSZXNpemVXaWR0aCgpOiB2b2lkIHtcblx0aWYgKFxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aCAhPT0gLTEgJiZcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGggIT09IHVuZGVmaW5lZCAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5XaWR0aCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoIDwgc2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbldpZHRoXG5cdCkge1xuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aCA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5XaWR0aDtcblx0XHRjb25zdCBtYXhXaWR0aEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI29wdGlvbk1heFdpZHRoXCIpO1xuXHRcdGlmIChtYXhXaWR0aEVsZW0pIHtcblx0XHRcdG1heFdpZHRoRWxlbS52YWx1ZUFzTnVtYmVyID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoO1xuXHRcdH1cblx0XHRjb25zdCBtYXhXaWR0aFZhbHVlRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI29wdGlvbk1heFdpZHRoVmFsdWVcIik7XG5cdFx0aWYgKG1heFdpZHRoVmFsdWVFbGVtKSB7XG5cdFx0XHRtYXhXaWR0aFZhbHVlRWxlbS50ZXh0Q29udGVudCA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aC50b1N0cmluZygpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHJlc2l6ZSBoZWlnaHQuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlc2l6ZUhlaWdodCgpOiB2b2lkIHtcblx0aWYgKFxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgIT09IC0xICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbkhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodCA8IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5IZWlnaHRcblx0KSB7XG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodCA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5IZWlnaHQ7XG5cdFx0Y29uc3QgbWF4SGVpZ2h0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjb3B0aW9uTWF4SGVpZ2h0XCIpO1xuXHRcdGlmIChtYXhIZWlnaHRFbGVtKSB7XG5cdFx0XHRtYXhIZWlnaHRFbGVtLnZhbHVlQXNOdW1iZXIgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0O1xuXHRcdH1cblx0XHRjb25zdCBtYXhIZWlnaHRWYWx1ZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNvcHRpb25NYXhIZWlnaHRWYWx1ZVwiKTtcblx0XHRpZiAobWF4SGVpZ2h0VmFsdWVFbGVtKSB7XG5cdFx0XHRtYXhIZWlnaHRWYWx1ZUVsZW0udGV4dENvbnRlbnQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0LnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgZGVmYXVsdCBwb3NpdGlvbiBjb21wb25lbnRzLlxuICovXG5mdW5jdGlvbiB1cGRhdGVEZWZhdWx0UG9zaXRpb24oKTogdm9pZCB7XG5cdGNvbnN0IGlzQ2VudGVyZWQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMuZGVmYXVsdENlbnRlcmVkID8/IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRDZW50ZXJlZDtcblxuXHRjb25zdCBkZWZhdWx0UG9zaXRpb25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oXCIjZGVmYXVsdFBvc2l0aW9uXCIpO1xuXHRpZiAoZGVmYXVsdFBvc2l0aW9uRWxlbSkge1xuXHRcdGRlZmF1bHRQb3NpdGlvbkVsZW0uc3R5bGUuZGlzcGxheSA9IGlzQ2VudGVyZWQgPyBcIm5vbmVcIiA6IFwiZmxleFwiO1xuXHR9XG5cblx0Y29uc3Qgb3B0aW9uRGVmYXVsdExlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI29wdGlvbkRlZmF1bHRMZWZ0XCIpO1xuXHRpZiAob3B0aW9uRGVmYXVsdExlZnQgJiYgZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbkRlZmF1bHRMZWZ0LnZhbHVlQXNOdW1iZXIgPSBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdDtcblx0fVxuXHRjb25zdCBvcHRpb25EZWZhdWx0TGVmdFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KFwiI29wdGlvbkRlZmF1bHRMZWZ0VmFsdWVcIik7XG5cdGlmIChvcHRpb25EZWZhdWx0TGVmdFZhbHVlICYmIGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25EZWZhdWx0TGVmdFZhbHVlLnRleHRDb250ZW50ID0gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQudG9TdHJpbmcoKTtcblx0fVxuXG5cdGNvbnN0IG9wdGlvbkRlZmF1bHRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI29wdGlvbkRlZmF1bHRUb3BcIik7XG5cdGlmIChvcHRpb25EZWZhdWx0VG9wICYmIGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRUb3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbkRlZmF1bHRUb3AudmFsdWVBc051bWJlciA9IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRUb3A7XG5cdH1cblx0Y29uc3Qgb3B0aW9uRGVmYXVsdFRvcFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KFwiI29wdGlvbkRlZmF1bHRUb3BWYWx1ZVwiKTtcblx0aWYgKG9wdGlvbkRlZmF1bHRUb3BWYWx1ZSAmJiBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25EZWZhdWx0VG9wVmFsdWUudGV4dENvbnRlbnQgPSBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRpZiAoaXNDZW50ZXJlZCkge1xuXHRcdGRlbGV0ZSBzZWxlY3RlZENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQ7XG5cdFx0ZGVsZXRlIHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wO1xuXHR9XG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgdG8gYW4gb2JqZWN0LlxuICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHNldCB0aGUgcHJvcGVydHkgb24uXG4gKiBAcGFyYW0ga2V5IFRoZSBrZXkgdG8gc2V0LlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc2V0UHJvcGVydHk8VCwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogUGFydGlhbDxUPiwga2V5OiBLLCB2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuXHRvYmpba2V5XSA9IHZhbHVlIGFzIFRbS107XG59XG5cbi8qKlxuICogR2V0IGEgcHJvcGVydHkgZnJvbSBhbiBvYmplY3QuXG4gKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gZ2V0IHRoZSBwcm9wZXJ0eSBmcm9tLlxuICogQHBhcmFtIGtleSBUaGUga2V5IHRvIGdldFxuICogQHJldHVybnMgVGhlIHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eTxULCBLIGV4dGVuZHMga2V5b2YgVCwgUD4ob2JqOiBQYXJ0aWFsPFQ+LCBrZXk6IEspOiBQIHtcblx0cmV0dXJuIG9ialtrZXldIGFzIHVua25vd24gYXMgUDtcbn1cblxuLyoqXG4gKiBDb25uZWN0IGFuIGlucHV0IHRvIGFuIG9wdGlvbi5cbiAqIEBwYXJhbSBzZWxlY3RlZFZhbHVlcyBUaGUgc2VsZWN0ZWQgdmFsdWUuXG4gKiBAcGFyYW0gZmllbGRJZCBUaGUgZmllbGQgaWQuXG4gKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBjb25uZWN0SW5wdXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+KHNlbGVjdGVkVmFsdWVzOiBQYXJ0aWFsPFQ+LCBmaWVsZElkOiBzdHJpbmcsIHByb3BlcnR5OiBLKTogdm9pZCB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9YCk7XG5cdGlmIChvcHRpb24pIHtcblx0XHRvcHRpb24udmFsdWUgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpID8/IFwiXCI7XG5cdFx0b3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi52YWx1ZSA9PT0gXCJcIiA/IHVuZGVmaW5lZCA6IG9wdGlvbi52YWx1ZSk7XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBDb25uZWN0IGEgY2hlY2tib3guXG4gKiBAcGFyYW0gc2VsZWN0ZWRWYWx1ZXMgVGhlIHNlbGVjdGVkIHZhbHVlcy5cbiAqIEBwYXJhbSBmaWVsZElkIFRoZSBmaWVsZCBpZC5cbiAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkuXG4gKiBAcGFyYW0gY2hhbmdlZCBUaGUgY2hhbmdlZCBldmVudCB0byBjYWxsLlxuICovXG5mdW5jdGlvbiBjb25uZWN0Q2hlY2tib3g8VCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuXHRzZWxlY3RlZFZhbHVlczogUGFydGlhbDxUPixcblx0ZmllbGRJZDogc3RyaW5nLFxuXHRwcm9wZXJ0eTogSyxcblx0Y2hhbmdlZD86ICgpID0+IHZvaWRcbik6IHZvaWQge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfWApO1xuXHRpZiAob3B0aW9uKSB7XG5cdFx0b3B0aW9uLmNoZWNrZWQgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcblx0XHRcdHNldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSwgb3B0aW9uLmNoZWNrZWQpO1xuXHRcdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdFx0Y2hhbmdlZCgpO1xuXHRcdFx0fVxuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogQ29ubmVjdCBhIHJhbmdlLlxuICogQHBhcmFtIHNlbGVjdGVkVmFsdWVzIFRoZSBzZWxlY3RlZCB2YWx1ZXMuXG4gKiBAcGFyYW0gZmllbGRJZCBUaGUgZmllbGQgaWQuXG4gKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5LlxuICogQHBhcmFtIGNoYW5nZWQgVGhlIGNoYW5nZWQgZXZlbnQgdG8gY2FsbC5cbiAqL1xuZnVuY3Rpb24gY29ubmVjdFJhbmdlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihcblx0c2VsZWN0ZWRWYWx1ZXM6IFBhcnRpYWw8VD4sXG5cdGZpZWxkSWQ6IHN0cmluZyxcblx0cHJvcGVydHk6IEssXG5cdGNoYW5nZWQ/OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1gKTtcblx0Y29uc3Qgb3B0aW9uVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfVZhbHVlYCk7XG5cblx0aWYgKG9wdGlvbiAmJiBvcHRpb25WYWx1ZSkge1xuXHRcdG9wdGlvbi52YWx1ZUFzTnVtYmVyID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb25WYWx1ZS50ZXh0Q29udGVudCA9IGdldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSk7XG5cdFx0b3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi52YWx1ZUFzTnVtYmVyKTtcblx0XHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gb3B0aW9uLnZhbHVlQXNOdW1iZXIudG9TdHJpbmcoKTtcblx0XHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRcdGNoYW5nZWQoKTtcblx0XHRcdH1cblx0XHRcdHVwZGF0ZVByZXZpZXcoKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIENvbm5lY3QgYSBjb2xvci5cbiAqIEBwYXJhbSBzZWxlY3RlZFZhbHVlcyBUaGUgc2VsZWN0ZWQgdmFsdWVzLlxuICogQHBhcmFtIGZpZWxkSWQgVGhlIGZpZWxkIGlkLlxuICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eS5cbiAqIEBwYXJhbSBjaGFuZ2VkIFRoZSBjaGFuZ2VkIGV2ZW50IHRvIGNhbGwuXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb2xvcjxULCBLIGV4dGVuZHMga2V5b2YgVD4oXG5cdHNlbGVjdGVkVmFsdWVzOiBQYXJ0aWFsPFQ+LFxuXHRmaWVsZElkOiBzdHJpbmcsXG5cdHByb3BlcnR5OiBLLFxuXHRjaGFuZ2VkPzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9YCk7XG5cdGNvbnN0IG9wdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1WYWx1ZWApO1xuXG5cdGlmIChvcHRpb24gJiYgb3B0aW9uVmFsdWUpIHtcblx0XHRvcHRpb24udmFsdWUgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcblx0XHRcdHNldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSwgb3B0aW9uLnZhbHVlKTtcblx0XHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gb3B0aW9uLnZhbHVlO1xuXHRcdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdFx0Y2hhbmdlZCgpO1xuXHRcdFx0fVxuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogRmluYWxpemUgdGhlIHdpbmRvdyBvcHRpb25zLlxuICogQHJldHVybnMgVGhlIGNvbXBsZXRlIHdpbmRvdyBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmaW5hbGl6ZVdpbmRvd09wdGlvbnMoKTogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMge1xuXHRjb25zdCBmaW5hbFdpbmRvd09wdGlvbnM6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0ge1xuXHRcdG5hbWU6IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5uYW1lLFxuXHRcdHVybDogc2VsZWN0ZWRDb21tb25PcHRpb25zLnVybCxcblx0XHRhdXRvU2hvdzogc2VsZWN0ZWRDb21tb25PcHRpb25zLmF1dG9TaG93XG5cdH07XG5cblx0Zm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHNlbGVjdGVkQ29tbW9uT3B0aW9ucykgYXMgKGtleW9mIE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zKVtdKSB7XG5cdFx0aWYgKHNlbGVjdGVkQ29tbW9uT3B0aW9uc1twcm9wXSAhPT0gZGVmYXVsdENvbW1vbk9wdGlvbnNbcHJvcF0pIHtcblx0XHRcdGZpbmFsV2luZG93T3B0aW9uc1twcm9wXSA9IHNlbGVjdGVkQ29tbW9uT3B0aW9uc1twcm9wXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIShzZWxlY3RlZENvbW1vbk9wdGlvbnMuZnJhbWUgPz8gdHJ1ZSkpIHtcblx0XHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMoc2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zKSBhcyAoa2V5b2YgT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMpW10pIHtcblx0XHRcdGlmIChzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnNbcHJvcF0gIT09IGRlZmF1bHRDb21tb25PcHRpb25zW3Byb3BdKSB7XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9uc1twcm9wXSA9IHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9uc1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBmaW5hbFJlZ2lvbjogT3BlbkZpbi5SZXNpemVSZWdpb24gPSB7fTtcblx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uYm90dG9tUmlnaHRDb3JuZXIgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uYm90dG9tUmlnaHRDb3JuZXIpIHtcblx0XHRcdGZpbmFsUmVnaW9uLmJvdHRvbVJpZ2h0Q29ybmVyID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uYm90dG9tUmlnaHRDb3JuZXI7XG5cdFx0fVxuXHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaXplICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpemUpIHtcblx0XHRcdGZpbmFsUmVnaW9uLnNpemUgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaXplO1xuXHRcdH1cblx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXMpIHtcblx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzID0ge307XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LmJvdHRvbSAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaWRlcz8uYm90dG9tKSB7XG5cdFx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzLmJvdHRvbSA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5ib3R0b207XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LmxlZnQgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2lkZXM/LmxlZnQpIHtcblx0XHRcdFx0ZmluYWxSZWdpb24uc2lkZXMubGVmdCA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5sZWZ0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy50b3AgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2lkZXM/LnRvcCkge1xuXHRcdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcy50b3AgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8udG9wO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5yaWdodCAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaWRlcz8ucmlnaHQpIHtcblx0XHRcdFx0ZmluYWxSZWdpb24uc2lkZXMucmlnaHQgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8ucmlnaHQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoT2JqZWN0LmtleXMoZmluYWxSZWdpb24uc2lkZXMpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRkZWxldGUgZmluYWxSZWdpb24uc2lkZXM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE9iamVjdC5rZXlzKGZpbmFsUmVnaW9uKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uID0gZmluYWxSZWdpb247XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMpIGFzIChrZXlvZiBSZXNpemVTaWRlcylbXSkge1xuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXNbcHJvcF0gIT09IGRlZmF1bHRSZXNpemVSZWdpb25TaWRlc1twcm9wXSkge1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uID0gZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbiA/PyB7fTtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbi5zaWRlcyA9IGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24uc2lkZXMgPz8ge307XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24uc2lkZXNbcHJvcF0gPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhzZWxlY3RlZENvcm5lclJvdW5kaW5nKSBhcyAoa2V5b2YgT3BlbkZpbi5Db3JuZXJSb3VuZGluZylbXSkge1xuXHRcdFx0aWYgKHNlbGVjdGVkQ29ybmVyUm91bmRpbmdbcHJvcF0gIT09IGRlZmF1bHRDb3JuZXJSb3VuZGluZ1twcm9wXSkge1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMuY29ybmVyUm91bmRpbmcgPSBmaW5hbFdpbmRvd09wdGlvbnMuY29ybmVyUm91bmRpbmcgPz8ge307XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5jb3JuZXJSb3VuZGluZ1twcm9wXSA9IHNlbGVjdGVkQ29ybmVyUm91bmRpbmdbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZpbmFsV2luZG93T3B0aW9ucztcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHByZXZpZXcuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVByZXZpZXcoKTogdm9pZCB7XG5cdGNvbnN0IHByZXZpZXdFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2aWV3XCIpO1xuXHRpZiAocHJldmlld0VsZW0pIHtcblx0XHRwcmV2aWV3RWxlbS50ZXh0Q29udGVudCA9IGNyZWF0ZVByZXZpZXcoKTtcblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHByZXZpZXcuXG4gKiBAcmV0dXJucyBUaGUgcHJldmlldyBjb2RlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVQcmV2aWV3KCk6IHN0cmluZyB7XG5cdGlmIChzZWxlY3RlZExhdW5jaE9wdGlvbnMudXNlUGxhdGZvcm0pIHtcblx0XHRyZXR1cm4gYGNvbnN0IHBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5hd2FpdCBwbGF0Zm9ybS5jcmVhdGVXaW5kb3coJHtKU09OLnN0cmluZ2lmeShmaW5hbGl6ZVdpbmRvd09wdGlvbnMoKSwgdW5kZWZpbmVkLCBcIiAgXCIpfSk7YDtcblx0fVxuXHRyZXR1cm4gYGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKCR7SlNPTi5zdHJpbmdpZnkoZmluYWxpemVXaW5kb3dPcHRpb25zKCksIHVuZGVmaW5lZCwgXCIgIFwiKX0pO2A7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=