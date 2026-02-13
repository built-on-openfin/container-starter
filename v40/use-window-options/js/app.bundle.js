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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ0pBLE1BQU0sb0JBQW9CLEdBQWtDO0lBQzNELElBQUksRUFBRSxZQUFZO0lBQ2xCLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQztJQUM3RCxJQUFJLEVBQUUsU0FBUztJQUNmLFFBQVEsRUFBRSxJQUFJO0lBQ2QsV0FBVyxFQUFFLEtBQUs7SUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDVixrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDckMsZUFBZSxFQUFFLElBQUk7SUFDckIsU0FBUyxFQUFFLElBQUk7SUFDZixXQUFXLEVBQUUsSUFBSTtJQUNqQixXQUFXLEVBQUUsSUFBSTtJQUNqQixRQUFRLEVBQUUsQ0FBQztJQUNYLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDWixTQUFTLEVBQUUsQ0FBQztJQUNaLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDYixlQUFlLEVBQUUsS0FBSztJQUN0QixXQUFXLEVBQUUsR0FBRztJQUNoQixVQUFVLEVBQUUsR0FBRztJQUNmLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsZUFBZSxFQUFFLFNBQVM7SUFDMUIsS0FBSyxFQUFFLElBQUk7SUFDWCxNQUFNLEVBQUUsS0FBSztDQUNiLENBQUM7QUFFRixNQUFNLHVCQUF1QixHQUEyQztJQUN2RSxNQUFNLEVBQUUsS0FBSztDQUNiLENBQUM7QUFFRixNQUFNLG1CQUFtQixHQUFrQztJQUMxRCxJQUFJLEVBQUUsQ0FBQztJQUNQLGlCQUFpQixFQUFFLENBQUM7Q0FDcEIsQ0FBQztBQXdCRixNQUFNLHdCQUF3QixHQUF5QjtJQUN0RCxJQUFJLEVBQUUsSUFBSTtJQUNWLEdBQUcsRUFBRSxJQUFJO0lBQ1QsS0FBSyxFQUFFLElBQUk7SUFDWCxNQUFNLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRixNQUFNLHFCQUFxQixHQUFvQztJQUM5RCxLQUFLLEVBQUUsQ0FBQztJQUNSLE1BQU0sRUFBRSxDQUFDO0NBQ1QsQ0FBQztBQUVGLE1BQU0sb0JBQW9CLEdBRXRCLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBRTNCLElBQUkscUJBQXFCLEdBQWtDLEVBQUUsR0FBRyxvQkFBb0IsRUFBRSxDQUFDO0FBQ3ZGLElBQUksd0JBQXdCLEdBQTJDLEVBQUUsR0FBRyx1QkFBdUIsRUFBRSxDQUFDO0FBQ3RHLElBQUksb0JBQW9CLEdBQWtDLEVBQUUsR0FBRyxtQkFBbUIsRUFBRSxDQUFDO0FBQ3JGLElBQUkseUJBQXlCLEdBQXlCLEVBQUUsR0FBRyx3QkFBd0IsRUFBRSxDQUFDO0FBQ3RGLElBQUksc0JBQXNCLEdBQW9DLEVBQUUsR0FBRyxxQkFBcUIsRUFBRSxDQUFDO0FBQzNGLElBQUkscUJBQXFCLEdBQUcsRUFBRSxHQUFHLG9CQUFvQixFQUFFLENBQUM7QUFFeEQsSUFBSSxhQUF5QyxDQUFDO0FBRTlDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxJQUFJLENBQUM7UUFDSixNQUFNLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxLQUFLLFVBQVUsT0FBTztJQUNyQixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzdDLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDbEQsTUFBTSx3QkFBd0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLHVCQUF1QixDQUFDLENBQUM7UUFDOUYsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO1lBQzlCLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pELENBQUM7SUFDRixDQUFDO0lBQ0QsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2hCLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDL0MsTUFBTSxjQUFjLEdBQWtDO2dCQUNyRCxHQUFHLHFCQUFxQixFQUFFO2dCQUMxQixlQUFlLEVBQUUsS0FBSzthQUN0QixDQUFDO1lBQ0YsSUFBSSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDL0MsYUFBYSxHQUFHLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM3RCxDQUFDO2lCQUFNLENBQUM7Z0JBQ1AsYUFBYSxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUVELE1BQU0sYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUM5QyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25FLElBQUksZUFBZSxFQUFFLENBQUM7UUFDckIsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUNwRCxJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUNuQixNQUFNLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUN6QyxNQUFNLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDM0IsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNkLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3ZDLHFCQUFxQixHQUFHLEVBQUUsR0FBRyxvQkFBb0IsRUFBRSxDQUFDO1lBQ3BELHdCQUF3QixHQUFHLEVBQUUsR0FBRyx1QkFBdUIsRUFBRSxDQUFDO1lBQzFELG9CQUFvQixHQUFHLEVBQUUsR0FBRyxtQkFBbUIsRUFBRSxDQUFDO1lBQ2xELHlCQUF5QixHQUFHLEVBQUUsR0FBRyx3QkFBd0IsRUFBRSxDQUFDO1lBQzVELHNCQUFzQixHQUFHLEVBQUUsR0FBRyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3RELHFCQUFxQixHQUFHLEVBQUUsR0FBRyxvQkFBb0IsRUFBRSxDQUFDO1lBQ3BELFlBQVksRUFBRSxDQUFDO1lBQ2YsYUFBYSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUM1QyxNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUFZLEVBQUUsQ0FBQztJQUNmLGFBQWEsRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsWUFBWTtJQUNwQixpQkFBaUI7SUFDakIsWUFBWSxDQUFDLHFCQUFxQixFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxZQUFZLENBQUMscUJBQXFCLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hELFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsZUFBZSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzNFLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMzRSxZQUFZLENBQUMscUJBQXFCLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hFLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMvRSxlQUFlLENBQUMscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNuRixlQUFlLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDM0UsZUFBZSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzNFLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RSxZQUFZLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUM3RixZQUFZLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUM3RixZQUFZLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUNoRyxZQUFZLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUNoRyxlQUFlLENBQUMscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQ3ZGLHFCQUFxQixFQUFFLENBQ3ZCLENBQUM7SUFDRixZQUFZLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsWUFBWSxDQUFDLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RFLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMxRSxZQUFZLENBQUMscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDNUUsWUFBWSxDQUFDLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3hFLFlBQVksQ0FBQyxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hGLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUU3RixvQkFBb0I7SUFDcEIsZUFBZSxDQUFDLHdCQUF3QixFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRSxZQUFZLENBQUMsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkUsWUFBWSxDQUFDLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbEYsZUFBZSxDQUFDLHlCQUF5QixFQUFFLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLGVBQWUsQ0FBQyx5QkFBeUIsRUFBRSw2QkFBNkIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRixlQUFlLENBQUMseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0UsZUFBZSxDQUFDLHlCQUF5QixFQUFFLDhCQUE4QixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRXJGLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSwyQkFBMkIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzRSxZQUFZLENBQUMsc0JBQXNCLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFN0Usb0JBQW9CLEVBQUUsQ0FBQztBQUN4QixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLG9CQUFvQjtJQUM1QixNQUFNLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLElBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDO0lBQ3hFLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xGLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDMUQsQ0FBQztBQUNGLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsaUJBQWlCO0lBQ3pCLElBQ0MscUJBQXFCLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQztRQUNyQyxxQkFBcUIsQ0FBQyxRQUFRLEtBQUssU0FBUztRQUM1QyxxQkFBcUIsQ0FBQyxRQUFRLEtBQUssU0FBUztRQUM1QyxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUMsUUFBUSxFQUM5RCxDQUFDO1FBQ0YscUJBQXFCLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztRQUNoRSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFtQixpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pGLElBQUksWUFBWSxFQUFFLENBQUM7WUFDbEIsWUFBWSxDQUFDLGFBQWEsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7UUFDN0QsQ0FBQztRQUNELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RGLElBQUksaUJBQWlCLEVBQUUsQ0FBQztZQUN2QixpQkFBaUIsQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNFLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxrQkFBa0I7SUFDMUIsSUFDQyxxQkFBcUIsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLHFCQUFxQixDQUFDLFNBQVMsS0FBSyxTQUFTO1FBQzdDLHFCQUFxQixDQUFDLFNBQVMsS0FBSyxTQUFTO1FBQzdDLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLEVBQ2hFLENBQUM7UUFDRixxQkFBcUIsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDO1FBQ2xFLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW1CLGtCQUFrQixDQUFDLENBQUM7UUFDbkYsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNuQixhQUFhLENBQUMsYUFBYSxHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLHVCQUF1QixDQUFDLENBQUM7UUFDeEYsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1lBQ3hCLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0UsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLHFCQUFxQjtJQUM3QixNQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxlQUFlLElBQUksb0JBQW9CLENBQUMsZUFBZSxDQUFDO0lBRWpHLE1BQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBaUIsa0JBQWtCLENBQUMsQ0FBQztJQUN2RixJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFDekIsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2xFLENBQUM7SUFFRCxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW1CLG9CQUFvQixDQUFDLENBQUM7SUFDekYsSUFBSSxpQkFBaUIsSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDekUsaUJBQWlCLENBQUMsYUFBYSxHQUFHLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsTUFBTSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFrQix5QkFBeUIsQ0FBQyxDQUFDO0lBQ2xHLElBQUksc0JBQXNCLElBQUksb0JBQW9CLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQzlFLHNCQUFzQixDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEYsQ0FBQztJQUVELE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsbUJBQW1CLENBQUMsQ0FBQztJQUN2RixJQUFJLGdCQUFnQixJQUFJLG9CQUFvQixDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUUsQ0FBQztRQUN2RSxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDO0lBQ2xFLENBQUM7SUFDRCxNQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQWtCLHdCQUF3QixDQUFDLENBQUM7SUFDaEcsSUFBSSxxQkFBcUIsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDNUUscUJBQXFCLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoRixDQUFDO0lBRUQsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQixPQUFPLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUN6QyxPQUFPLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBUyxXQUFXLENBQXVCLEdBQWUsRUFBRSxHQUFNLEVBQUUsS0FBYztJQUNqRixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBYSxDQUFDO0FBQzFCLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsV0FBVyxDQUEwQixHQUFlLEVBQUUsR0FBTTtJQUNwRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQWlCLENBQUM7QUFDakMsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBUyxZQUFZLENBQXVCLGNBQTBCLEVBQUUsT0FBZSxFQUFFLFFBQVc7SUFDbkcsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLElBQUksTUFBTSxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3JDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RixhQUFhLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxlQUFlLENBQ3ZCLGNBQTBCLEVBQzFCLE9BQWUsRUFDZixRQUFXLEVBQ1gsT0FBb0I7SUFFcEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLElBQUksTUFBTSxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDdEMsV0FBVyxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7WUFDWCxDQUFDO1lBQ0QsYUFBYSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsWUFBWSxDQUNwQixjQUEwQixFQUMxQixPQUFlLEVBQ2YsUUFBVyxFQUNYLE9BQW9CO0lBRXBCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW1CLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2RSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFtQixJQUFJLE9BQU8sT0FBTyxDQUFDLENBQUM7SUFFakYsSUFBSSxNQUFNLElBQUksV0FBVyxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdELFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNyQyxXQUFXLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUQsV0FBVyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFELElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7WUFDWCxDQUFDO1lBQ0QsYUFBYSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsWUFBWSxDQUNwQixjQUEwQixFQUMxQixPQUFlLEVBQ2YsUUFBVyxFQUNYLE9BQW9CO0lBRXBCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW1CLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2RSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFtQixJQUFJLE9BQU8sT0FBTyxDQUFDLENBQUM7SUFFakYsSUFBSSxNQUFNLElBQUksV0FBVyxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNyQyxXQUFXLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsV0FBVyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7WUFDWCxDQUFDO1lBQ0QsYUFBYSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7R0FHRztBQUNILFNBQVMscUJBQXFCO0lBQzdCLE1BQU0sa0JBQWtCLEdBQWtDO1FBQ3pELElBQUksRUFBRSxxQkFBcUIsQ0FBQyxJQUFJO1FBQ2hDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxHQUFHO1FBQzlCLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxRQUFRO0tBQ3hDLENBQUM7SUFFRixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQTRDLEVBQUUsQ0FBQztRQUNsRyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDaEUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsQ0FBQztJQUNGLENBQUM7SUFFRCxJQUFJLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM1QyxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQTRDLEVBQUUsQ0FBQztZQUNyRyxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxLQUFLLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ25FLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELENBQUM7UUFDRixDQUFDO1FBRUQsTUFBTSxXQUFXLEdBQXlCLEVBQUUsQ0FBQztRQUM3QyxJQUFJLG9CQUFvQixDQUFDLGlCQUFpQixLQUFLLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDdEYsV0FBVyxDQUFDLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO1FBQ3hFLENBQUM7UUFDRCxJQUFJLG9CQUFvQixDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1RCxXQUFXLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztRQUM5QyxDQUFDO1FBQ0QsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxNQUFNLEtBQUssbUJBQW1CLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUM5RSxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1lBQy9ELENBQUM7WUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUssbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUMxRSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQzNELENBQUM7WUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssbUJBQW1CLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUN4RSxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ3pELENBQUM7WUFDRCxJQUFJLG9CQUFvQixDQUFDLEtBQUssRUFBRSxLQUFLLEtBQUssbUJBQW1CLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUM1RSxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQzdELENBQUM7WUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDakQsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzFCLENBQUM7UUFDRixDQUFDO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN6QyxrQkFBa0IsQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQy9DLENBQUM7UUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQTBCLEVBQUUsQ0FBQztZQUNwRixJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3hFLGtCQUFrQixDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO2dCQUN4RSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNwRixrQkFBa0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9FLENBQUM7UUFDRixDQUFDO1FBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFxQyxFQUFFLENBQUM7WUFDNUYsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNsRSxrQkFBa0IsQ0FBQyxjQUFjLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQztnQkFDNUUsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hFLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztJQUVELE9BQU8sa0JBQWtCLENBQUM7QUFDM0IsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxhQUFhO0lBQ3JCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkQsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNqQixXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxhQUFhO0lBQ3JCLElBQUkscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsT0FBTzs4QkFDcUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFGLENBQUM7SUFDRCxPQUFPLDJCQUEyQixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDaEcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS13aW5kb3ctb3B0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2Utd2luZG93LW9wdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2Utd2luZG93LW9wdGlvbnMvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29tbW9uT3B0aW9uczogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMgPSB7XG5cdG5hbWU6IFwidGVzdC1jaGlsZFwiLFxuXHR1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCJhcHAuaHRtbFwiLCBcInByZXZpZXcuaHRtbFwiKSxcblx0aWNvbjogdW5kZWZpbmVkLFxuXHRhdXRvU2hvdzogdHJ1ZSxcblx0YWx3YXlzT25Ub3A6IGZhbHNlLFxuXHRvcGFjaXR5OiAxLFxuXHRjb250ZXh0TWVudU9wdGlvbnM6IHsgZW5hYmxlZDogdHJ1ZSB9LFxuXHRzaG93VGFza2Jhckljb246IHRydWUsXG5cdHJlc2l6YWJsZTogdHJ1ZSxcblx0bWluaW1pemFibGU6IHRydWUsXG5cdG1heGltaXphYmxlOiB0cnVlLFxuXHRtaW5XaWR0aDogMCxcblx0bWF4V2lkdGg6IC0xLFxuXHRtaW5IZWlnaHQ6IDAsXG5cdG1heEhlaWdodDogLTEsXG5cdGRlZmF1bHRDZW50ZXJlZDogZmFsc2UsXG5cdGRlZmF1bHRMZWZ0OiAxMDAsXG5cdGRlZmF1bHRUb3A6IDEwMCxcblx0ZGVmYXVsdFdpZHRoOiA4MDAsXG5cdGRlZmF1bHRIZWlnaHQ6IDUwMCxcblx0YXNwZWN0UmF0aW86IDAsXG5cdGJhY2tncm91bmRDb2xvcjogdW5kZWZpbmVkLFxuXHRmcmFtZTogdHJ1ZSxcblx0c2hhZG93OiBmYWxzZVxufTtcblxuY29uc3QgZGVmYXVsdEZyYW1lbGVzc09wdGlvbnM6IFBhcnRpYWw8T3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnM+ID0ge1xuXHRzaGFkb3c6IGZhbHNlXG59O1xuXG5jb25zdCBkZWZhdWx0UmVzaXplUmVnaW9uOiBQYXJ0aWFsPE9wZW5GaW4uUmVzaXplUmVnaW9uPiA9IHtcblx0c2l6ZTogNyxcblx0Ym90dG9tUmlnaHRDb3JuZXI6IDlcbn07XG5cbi8qKlxuICogVHlwZSBmb3IgdGhlIHJlc2l6ZSBzaWRlcy5cbiAqL1xuaW50ZXJmYWNlIFJlc2l6ZVNpZGVzIHtcblx0LyoqXG5cdCAqIFRvcCBwb3NpdGlvbi5cblx0ICovXG5cdHRvcDogYm9vbGVhbjtcblx0LyoqXG5cdCAqIExlZnQgcG9zaXRpb24uXG5cdCAqL1xuXHRsZWZ0OiBib29sZWFuO1xuXHQvKipcblx0ICogUmlnaHQgcG9zaXRpb24uXG5cdCAqL1xuXHRyaWdodDogYm9vbGVhbjtcblx0LyoqXG5cdCAqIEJvdHRvbSBwb3NpdGlvbi5cblx0ICovXG5cdGJvdHRvbTogYm9vbGVhbjtcbn1cblxuY29uc3QgZGVmYXVsdFJlc2l6ZVJlZ2lvblNpZGVzOiBQYXJ0aWFsPFJlc2l6ZVNpZGVzPiA9IHtcblx0bGVmdDogdHJ1ZSxcblx0dG9wOiB0cnVlLFxuXHRyaWdodDogdHJ1ZSxcblx0Ym90dG9tOiB0cnVlXG59O1xuXG5jb25zdCBkZWZhdWx0Q29ybmVyUm91bmRpbmc6IFBhcnRpYWw8T3BlbkZpbi5Db3JuZXJSb3VuZGluZz4gPSB7XG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDBcbn07XG5cbmNvbnN0IGRlZmF1bHRMYXVuY2hPcHRpb25zOiB7XG5cdHVzZVBsYXRmb3JtOiBib29sZWFuO1xufSA9IHsgdXNlUGxhdGZvcm06IGZhbHNlIH07XG5cbmxldCBzZWxlY3RlZENvbW1vbk9wdGlvbnM6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0geyAuLi5kZWZhdWx0Q29tbW9uT3B0aW9ucyB9O1xubGV0IHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9uczogUGFydGlhbDxPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucz4gPSB7IC4uLmRlZmF1bHRGcmFtZWxlc3NPcHRpb25zIH07XG5sZXQgc2VsZWN0ZWRSZXNpemVSZWdpb246IFBhcnRpYWw8T3BlbkZpbi5SZXNpemVSZWdpb24+ID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uIH07XG5sZXQgc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlczogUGFydGlhbDxSZXNpemVTaWRlcz4gPSB7IC4uLmRlZmF1bHRSZXNpemVSZWdpb25TaWRlcyB9O1xubGV0IHNlbGVjdGVkQ29ybmVyUm91bmRpbmc6IFBhcnRpYWw8T3BlbkZpbi5Db3JuZXJSb3VuZGluZz4gPSB7IC4uLmRlZmF1bHRDb3JuZXJSb3VuZGluZyB9O1xubGV0IHNlbGVjdGVkTGF1bmNoT3B0aW9ucyA9IHsgLi4uZGVmYXVsdExhdW5jaE9wdGlvbnMgfTtcblxubGV0IHByZXZpZXdXaW5kb3c6IE9wZW5GaW4uV2luZG93IHwgdW5kZWZpbmVkO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdERvbSgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGFwcCA9IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50U3luYygpO1xuXHRjb25zdCBhcHBJbmZvID0gYXdhaXQgYXBwLmdldEluZm8oKTtcblx0aWYgKCFhcHBJbmZvLmluaXRpYWxPcHRpb25zLmlzUGxhdGZvcm1Db250cm9sbGVyKSB7XG5cdFx0Y29uc3QgdXNlUGxhdGZvcm1FbGVtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjdXNlUGxhdGZvcm1Db250YWluZXJcIik7XG5cdFx0aWYgKHVzZVBsYXRmb3JtRWxlbUNvbnRhaW5lcikge1xuXHRcdFx0dXNlUGxhdGZvcm1FbGVtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9XG5cdH1cblx0Y29uc3QgYnRuUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuUHJldmlld1wiKTtcblx0aWYgKGJ0blByZXZpZXcpIHtcblx0XHRidG5QcmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBwcmV2aWV3T3B0aW9uczogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLmZpbmFsaXplV2luZG93T3B0aW9ucygpLFxuXHRcdFx0XHRzYXZlV2luZG93U3RhdGU6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlbGVjdGVkTGF1bmNoT3B0aW9ucy51c2VQbGF0Zm9ybSkge1xuXHRcdFx0XHRjb25zdCBwbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXHRcdFx0XHRwcmV2aWV3V2luZG93ID0gYXdhaXQgcGxhdGZvcm0uY3JlYXRlV2luZG93KHByZXZpZXdPcHRpb25zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpZXdXaW5kb3cgPSBhd2FpdCBmaW4uV2luZG93LmNyZWF0ZShwcmV2aWV3T3B0aW9ucyk7XG5cdFx0XHR9XG5cblx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cuYWRkTGlzdGVuZXIoXCJjbG9zZWRcIiwgKCkgPT4ge1xuXHRcdFx0XHRwcmV2aWV3V2luZG93ID0gdW5kZWZpbmVkO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5DbG9zZVByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNsb3NlUHJldmlld1wiKTtcblx0aWYgKGJ0bkNsb3NlUHJldmlldykge1xuXHRcdGJ0bkNsb3NlUHJldmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKHByZXZpZXdXaW5kb3cpIHtcblx0XHRcdFx0YXdhaXQgcHJldmlld1dpbmRvdy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0XHRcdFx0YXdhaXQgcHJldmlld1dpbmRvdy5jbG9zZSh0cnVlKTtcblx0XHRcdFx0cHJldmlld1dpbmRvdyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0blJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5SZXNldFwiKTtcblx0aWYgKGJ0blJlc2V0KSB7XG5cdFx0YnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucyA9IHsgLi4uZGVmYXVsdENvbW1vbk9wdGlvbnMgfTtcblx0XHRcdHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9ucyA9IHsgLi4uZGVmYXVsdEZyYW1lbGVzc09wdGlvbnMgfTtcblx0XHRcdHNlbGVjdGVkUmVzaXplUmVnaW9uID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uIH07XG5cdFx0XHRzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uU2lkZXMgfTtcblx0XHRcdHNlbGVjdGVkQ29ybmVyUm91bmRpbmcgPSB7IC4uLmRlZmF1bHRDb3JuZXJSb3VuZGluZyB9O1xuXHRcdFx0c2VsZWN0ZWRMYXVuY2hPcHRpb25zID0geyAuLi5kZWZhdWx0TGF1bmNoT3B0aW9ucyB9O1xuXHRcdFx0cG9wdWxhdGVGb3JtKCk7XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Db3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Db3B5XCIpO1xuXHRpZiAoYnRuQ29weSkge1xuXHRcdGJ0bkNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGZpbi5DbGlwYm9hcmQud3JpdGVUZXh0KHsgZGF0YTogY3JlYXRlUHJldmlldygpIH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cG9wdWxhdGVGb3JtKCk7XG5cdHVwZGF0ZVByZXZpZXcoKTtcbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgZm9ybSBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gcG9wdWxhdGVGb3JtKCk6IHZvaWQge1xuXHQvLyBDb21tb24gb3B0aW9uc1xuXHRjb25uZWN0SW5wdXQoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk5hbWVcIiwgXCJuYW1lXCIpO1xuXHRjb25uZWN0SW5wdXQoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblVybFwiLCBcInVybFwiKTtcblx0Y29ubmVjdElucHV0KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25JY29uXCIsIFwiaWNvblwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25BbHdheXNPblRvcFwiLCBcImFsd2F5c09uVG9wXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRMYXVuY2hPcHRpb25zLCBcIm9wdGlvblVzZVBsYXRmb3JtXCIsIFwidXNlUGxhdGZvcm1cIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uT3BhY2l0eVwiLCBcIm9wYWNpdHlcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uU2hvd0NvbnRleHRNZW51XCIsIFwiY29udGV4dE1lbnVcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uU2hvd1Rhc2tiYXJJY29uXCIsIFwic2hvd1Rhc2tiYXJJY29uXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1pbmltaXphYmxlXCIsIFwibWluaW1pemFibGVcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWF4aW1pemFibGVcIiwgXCJtYXhpbWl6YWJsZVwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25SZXNpemFibGVcIiwgXCJyZXNpemFibGVcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWluV2lkdGhcIiwgXCJtaW5XaWR0aFwiLCAoKSA9PiB1cGRhdGVSZXNpemVXaWR0aCgpKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NYXhXaWR0aFwiLCBcIm1heFdpZHRoXCIsICgpID0+IHVwZGF0ZVJlc2l6ZVdpZHRoKCkpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1pbkhlaWdodFwiLCBcIm1pbkhlaWdodFwiLCAoKSA9PiB1cGRhdGVSZXNpemVIZWlnaHQoKSk7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWF4SGVpZ2h0XCIsIFwibWF4SGVpZ2h0XCIsICgpID0+IHVwZGF0ZVJlc2l6ZUhlaWdodCgpKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0Q2VudGVyZWRcIiwgXCJkZWZhdWx0Q2VudGVyZWRcIiwgKCkgPT5cblx0XHR1cGRhdGVEZWZhdWx0UG9zaXRpb24oKVxuXHQpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRMZWZ0XCIsIFwiZGVmYXVsdExlZnRcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRGVmYXVsdFRvcFwiLCBcImRlZmF1bHRUb3BcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRGVmYXVsdFdpZHRoXCIsIFwiZGVmYXVsdFdpZHRoXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRIZWlnaHRcIiwgXCJkZWZhdWx0SGVpZ2h0XCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkFzcGVjdFJhdGlvXCIsIFwiYXNwZWN0UmF0aW9cIik7XG5cdGNvbm5lY3RDb2xvcihzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uQmFja2dyb3VuZENvbG9yXCIsIFwiYmFja2dyb3VuZENvbG9yXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkZyYW1lXCIsIFwiZnJhbWVcIiwgKCkgPT4gdXBkYXRlRnJhbWVsZXNzU3RhdGUoKSk7XG5cblx0Ly8gRnJhbWVsZXNzIG9wdGlvbnNcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9ucywgXCJvcHRpb25TaGFkb3dcIiwgXCJzaGFkb3dcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZFJlc2l6ZVJlZ2lvbiwgXCJvcHRpb25FZGdlUmVzaXplU2l6ZVwiLCBcInNpemVcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZFJlc2l6ZVJlZ2lvbiwgXCJvcHRpb25Db3JuZXJSZXNpemVTaXplXCIsIFwiYm90dG9tUmlnaHRDb3JuZXJcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzLCBcIm9wdGlvblJlc2l6ZVJlZ2lvblNpZGVMZWZ0XCIsIFwibGVmdFwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMsIFwib3B0aW9uUmVzaXplUmVnaW9uU2lkZVJpZ2h0XCIsIFwicmlnaHRcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzLCBcIm9wdGlvblJlc2l6ZVJlZ2lvblNpZGVUb3BcIiwgXCJ0b3BcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzLCBcIm9wdGlvblJlc2l6ZVJlZ2lvblNpZGVCb3R0b21cIiwgXCJib3R0b21cIik7XG5cblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29ybmVyUm91bmRpbmcsIFwib3B0aW9uQ29ybmVyUm91bmRpbmdXaWR0aFwiLCBcIndpZHRoXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb3JuZXJSb3VuZGluZywgXCJvcHRpb25Db3JuZXJSb3VuZGluZ0hlaWdodFwiLCBcImhlaWdodFwiKTtcblxuXHR1cGRhdGVGcmFtZWxlc3NTdGF0ZSgpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGZyYW1lbGVzcyBjb21wb25lbnRzLlxuICovXG5mdW5jdGlvbiB1cGRhdGVGcmFtZWxlc3NTdGF0ZSgpOiB2b2lkIHtcblx0Y29uc3QgZnJhbWUgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMuZnJhbWUgPz8gZGVmYXVsdENvbW1vbk9wdGlvbnMuZnJhbWU7XG5cdGNvbnN0IHNlY3Rpb25GcmFtZWxlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzZWN0aW9uRnJhbWVsZXNzXCIpO1xuXHRpZiAoc2VjdGlvbkZyYW1lbGVzcykge1xuXHRcdHNlY3Rpb25GcmFtZWxlc3Muc3R5bGUuZGlzcGxheSA9IGZyYW1lID8gXCJub25lXCIgOiBcImZsZXhcIjtcblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHJlc2l6ZSB3aWR0aC5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUmVzaXplV2lkdGgoKTogdm9pZCB7XG5cdGlmIChcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGggIT09IC0xICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoICE9PSB1bmRlZmluZWQgJiZcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluV2lkdGggIT09IHVuZGVmaW5lZCAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aCA8IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5XaWR0aFxuXHQpIHtcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGggPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluV2lkdGg7XG5cdFx0Y29uc3QgbWF4V2lkdGhFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNvcHRpb25NYXhXaWR0aFwiKTtcblx0XHRpZiAobWF4V2lkdGhFbGVtKSB7XG5cdFx0XHRtYXhXaWR0aEVsZW0udmFsdWVBc051bWJlciA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aDtcblx0XHR9XG5cdFx0Y29uc3QgbWF4V2lkdGhWYWx1ZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNvcHRpb25NYXhXaWR0aFZhbHVlXCIpO1xuXHRcdGlmIChtYXhXaWR0aFZhbHVlRWxlbSkge1xuXHRcdFx0bWF4V2lkdGhWYWx1ZUVsZW0udGV4dENvbnRlbnQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGgudG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSByZXNpemUgaGVpZ2h0LlxuICovXG5mdW5jdGlvbiB1cGRhdGVSZXNpemVIZWlnaHQoKTogdm9pZCB7XG5cdGlmIChcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0ICE9PSAtMSAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5IZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgPCBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluSGVpZ2h0XG5cdCkge1xuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluSGVpZ2h0O1xuXHRcdGNvbnN0IG1heEhlaWdodEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI29wdGlvbk1heEhlaWdodFwiKTtcblx0XHRpZiAobWF4SGVpZ2h0RWxlbSkge1xuXHRcdFx0bWF4SGVpZ2h0RWxlbS52YWx1ZUFzTnVtYmVyID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodDtcblx0XHR9XG5cdFx0Y29uc3QgbWF4SGVpZ2h0VmFsdWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjb3B0aW9uTWF4SGVpZ2h0VmFsdWVcIik7XG5cdFx0aWYgKG1heEhlaWdodFZhbHVlRWxlbSkge1xuXHRcdFx0bWF4SGVpZ2h0VmFsdWVFbGVtLnRleHRDb250ZW50ID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodC50b1N0cmluZygpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGRlZmF1bHQgcG9zaXRpb24gY29tcG9uZW50cy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlRGVmYXVsdFBvc2l0aW9uKCk6IHZvaWQge1xuXHRjb25zdCBpc0NlbnRlcmVkID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLmRlZmF1bHRDZW50ZXJlZCA/PyBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0Q2VudGVyZWQ7XG5cblx0Y29uc3QgZGVmYXVsdFBvc2l0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI2RlZmF1bHRQb3NpdGlvblwiKTtcblx0aWYgKGRlZmF1bHRQb3NpdGlvbkVsZW0pIHtcblx0XHRkZWZhdWx0UG9zaXRpb25FbGVtLnN0eWxlLmRpc3BsYXkgPSBpc0NlbnRlcmVkID8gXCJub25lXCIgOiBcImZsZXhcIjtcblx0fVxuXG5cdGNvbnN0IG9wdGlvbkRlZmF1bHRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNvcHRpb25EZWZhdWx0TGVmdFwiKTtcblx0aWYgKG9wdGlvbkRlZmF1bHRMZWZ0ICYmIGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25EZWZhdWx0TGVmdC52YWx1ZUFzTnVtYmVyID0gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQ7XG5cdH1cblx0Y29uc3Qgb3B0aW9uRGVmYXVsdExlZnRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNwYW5FbGVtZW50PihcIiNvcHRpb25EZWZhdWx0TGVmdFZhbHVlXCIpO1xuXHRpZiAob3B0aW9uRGVmYXVsdExlZnRWYWx1ZSAmJiBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9uRGVmYXVsdExlZnRWYWx1ZS50ZXh0Q29udGVudCA9IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0LnRvU3RyaW5nKCk7XG5cdH1cblxuXHRjb25zdCBvcHRpb25EZWZhdWx0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNvcHRpb25EZWZhdWx0VG9wXCIpO1xuXHRpZiAob3B0aW9uRGVmYXVsdFRvcCAmJiBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25EZWZhdWx0VG9wLnZhbHVlQXNOdW1iZXIgPSBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wO1xuXHR9XG5cdGNvbnN0IG9wdGlvbkRlZmF1bHRUb3BWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNwYW5FbGVtZW50PihcIiNvcHRpb25EZWZhdWx0VG9wVmFsdWVcIik7XG5cdGlmIChvcHRpb25EZWZhdWx0VG9wVmFsdWUgJiYgZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9uRGVmYXVsdFRvcFZhbHVlLnRleHRDb250ZW50ID0gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcC50b1N0cmluZygpO1xuXHR9XG5cblx0aWYgKGlzQ2VudGVyZWQpIHtcblx0XHRkZWxldGUgc2VsZWN0ZWRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0O1xuXHRcdGRlbGV0ZSBzZWxlY3RlZENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcDtcblx0fVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHRvIGFuIG9iamVjdC5cbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBzZXQgdGhlIHByb3BlcnR5IG9uLlxuICogQHBhcmFtIGtleSBUaGUga2V5IHRvIHNldC5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNldFByb3BlcnR5PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFBhcnRpYWw8VD4sIGtleTogSywgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcblx0b2JqW2tleV0gPSB2YWx1ZSBhcyBUW0tdO1xufVxuXG4vKipcbiAqIEdldCBhIHByb3BlcnR5IGZyb20gYW4gb2JqZWN0LlxuICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGdldCB0aGUgcHJvcGVydHkgZnJvbS5cbiAqIEBwYXJhbSBrZXkgVGhlIGtleSB0byBnZXRcbiAqIEByZXR1cm5zIFRoZSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydHk8VCwgSyBleHRlbmRzIGtleW9mIFQsIFA+KG9iajogUGFydGlhbDxUPiwga2V5OiBLKTogUCB7XG5cdHJldHVybiBvYmpba2V5XSBhcyB1bmtub3duIGFzIFA7XG59XG5cbi8qKlxuICogQ29ubmVjdCBhbiBpbnB1dCB0byBhbiBvcHRpb24uXG4gKiBAcGFyYW0gc2VsZWN0ZWRWYWx1ZXMgVGhlIHNlbGVjdGVkIHZhbHVlLlxuICogQHBhcmFtIGZpZWxkSWQgVGhlIGZpZWxkIGlkLlxuICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gY29ubmVjdElucHV0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihzZWxlY3RlZFZhbHVlczogUGFydGlhbDxUPiwgZmllbGRJZDogc3RyaW5nLCBwcm9wZXJ0eTogSyk6IHZvaWQge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfWApO1xuXHRpZiAob3B0aW9uKSB7XG5cdFx0b3B0aW9uLnZhbHVlID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KSA/PyBcIlwiO1xuXHRcdG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0c2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5LCBvcHRpb24udmFsdWUgPT09IFwiXCIgPyB1bmRlZmluZWQgOiBvcHRpb24udmFsdWUpO1xuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogQ29ubmVjdCBhIGNoZWNrYm94LlxuICogQHBhcmFtIHNlbGVjdGVkVmFsdWVzIFRoZSBzZWxlY3RlZCB2YWx1ZXMuXG4gKiBAcGFyYW0gZmllbGRJZCBUaGUgZmllbGQgaWQuXG4gKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5LlxuICogQHBhcmFtIGNoYW5nZWQgVGhlIGNoYW5nZWQgZXZlbnQgdG8gY2FsbC5cbiAqL1xuZnVuY3Rpb24gY29ubmVjdENoZWNrYm94PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihcblx0c2VsZWN0ZWRWYWx1ZXM6IFBhcnRpYWw8VD4sXG5cdGZpZWxkSWQ6IHN0cmluZyxcblx0cHJvcGVydHk6IEssXG5cdGNoYW5nZWQ/OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1gKTtcblx0aWYgKG9wdGlvbikge1xuXHRcdG9wdGlvbi5jaGVja2VkID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi5jaGVja2VkKTtcblx0XHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRcdGNoYW5nZWQoKTtcblx0XHRcdH1cblx0XHRcdHVwZGF0ZVByZXZpZXcoKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIENvbm5lY3QgYSByYW5nZS5cbiAqIEBwYXJhbSBzZWxlY3RlZFZhbHVlcyBUaGUgc2VsZWN0ZWQgdmFsdWVzLlxuICogQHBhcmFtIGZpZWxkSWQgVGhlIGZpZWxkIGlkLlxuICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eS5cbiAqIEBwYXJhbSBjaGFuZ2VkIFRoZSBjaGFuZ2VkIGV2ZW50IHRvIGNhbGwuXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RSYW5nZTxULCBLIGV4dGVuZHMga2V5b2YgVD4oXG5cdHNlbGVjdGVkVmFsdWVzOiBQYXJ0aWFsPFQ+LFxuXHRmaWVsZElkOiBzdHJpbmcsXG5cdHByb3BlcnR5OiBLLFxuXHRjaGFuZ2VkPzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9YCk7XG5cdGNvbnN0IG9wdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1WYWx1ZWApO1xuXG5cdGlmIChvcHRpb24gJiYgb3B0aW9uVmFsdWUpIHtcblx0XHRvcHRpb24udmFsdWVBc051bWJlciA9IGdldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSk7XG5cdFx0b3B0aW9uVmFsdWUudGV4dENvbnRlbnQgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0c2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5LCBvcHRpb24udmFsdWVBc051bWJlcik7XG5cdFx0XHRvcHRpb25WYWx1ZS50ZXh0Q29udGVudCA9IG9wdGlvbi52YWx1ZUFzTnVtYmVyLnRvU3RyaW5nKCk7XG5cdFx0XHRpZiAoY2hhbmdlZCkge1xuXHRcdFx0XHRjaGFuZ2VkKCk7XG5cdFx0XHR9XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBDb25uZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0gc2VsZWN0ZWRWYWx1ZXMgVGhlIHNlbGVjdGVkIHZhbHVlcy5cbiAqIEBwYXJhbSBmaWVsZElkIFRoZSBmaWVsZCBpZC5cbiAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkuXG4gKiBAcGFyYW0gY2hhbmdlZCBUaGUgY2hhbmdlZCBldmVudCB0byBjYWxsLlxuICovXG5mdW5jdGlvbiBjb25uZWN0Q29sb3I8VCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuXHRzZWxlY3RlZFZhbHVlczogUGFydGlhbDxUPixcblx0ZmllbGRJZDogc3RyaW5nLFxuXHRwcm9wZXJ0eTogSyxcblx0Y2hhbmdlZD86ICgpID0+IHZvaWRcbik6IHZvaWQge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfWApO1xuXHRjb25zdCBvcHRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9VmFsdWVgKTtcblxuXHRpZiAob3B0aW9uICYmIG9wdGlvblZhbHVlKSB7XG5cdFx0b3B0aW9uLnZhbHVlID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb25WYWx1ZS50ZXh0Q29udGVudCA9IGdldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSk7XG5cdFx0b3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi52YWx1ZSk7XG5cdFx0XHRvcHRpb25WYWx1ZS50ZXh0Q29udGVudCA9IG9wdGlvbi52YWx1ZTtcblx0XHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRcdGNoYW5nZWQoKTtcblx0XHRcdH1cblx0XHRcdHVwZGF0ZVByZXZpZXcoKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIEZpbmFsaXplIHRoZSB3aW5kb3cgb3B0aW9ucy5cbiAqIEByZXR1cm5zIFRoZSBjb21wbGV0ZSB3aW5kb3cgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmluYWxpemVXaW5kb3dPcHRpb25zKCk6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zIHtcblx0Y29uc3QgZmluYWxXaW5kb3dPcHRpb25zOiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucyA9IHtcblx0XHRuYW1lOiBzZWxlY3RlZENvbW1vbk9wdGlvbnMubmFtZSxcblx0XHR1cmw6IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy51cmwsXG5cdFx0YXV0b1Nob3c6IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5hdXRvU2hvd1xuXHR9O1xuXG5cdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhzZWxlY3RlZENvbW1vbk9wdGlvbnMpIGFzIChrZXlvZiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucylbXSkge1xuXHRcdGlmIChzZWxlY3RlZENvbW1vbk9wdGlvbnNbcHJvcF0gIT09IGRlZmF1bHRDb21tb25PcHRpb25zW3Byb3BdKSB7XG5cdFx0XHRmaW5hbFdpbmRvd09wdGlvbnNbcHJvcF0gPSBzZWxlY3RlZENvbW1vbk9wdGlvbnNbcHJvcF07XG5cdFx0fVxuXHR9XG5cblx0aWYgKCEoc2VsZWN0ZWRDb21tb25PcHRpb25zLmZyYW1lID8/IHRydWUpKSB7XG5cdFx0Zm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9ucykgYXMgKGtleW9mIE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zKVtdKSB7XG5cdFx0XHRpZiAoc2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zW3Byb3BdICE9PSBkZWZhdWx0Q29tbW9uT3B0aW9uc1twcm9wXSkge1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnNbcHJvcF0gPSBzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnNbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmluYWxSZWdpb246IE9wZW5GaW4uUmVzaXplUmVnaW9uID0ge307XG5cdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLmJvdHRvbVJpZ2h0Q29ybmVyICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLmJvdHRvbVJpZ2h0Q29ybmVyKSB7XG5cdFx0XHRmaW5hbFJlZ2lvbi5ib3R0b21SaWdodENvcm5lciA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLmJvdHRvbVJpZ2h0Q29ybmVyO1xuXHRcdH1cblx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2l6ZSAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaXplKSB7XG5cdFx0XHRmaW5hbFJlZ2lvbi5zaXplID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2l6ZTtcblx0XHR9XG5cdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzKSB7XG5cdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcyA9IHt9O1xuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5ib3R0b20gIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2lkZXM/LmJvdHRvbSkge1xuXHRcdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcy5ib3R0b20gPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8uYm90dG9tO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5sZWZ0ICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpZGVzPy5sZWZ0KSB7XG5cdFx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzLmxlZnQgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8ubGVmdDtcblx0XHRcdH1cblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8udG9wICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpZGVzPy50b3ApIHtcblx0XHRcdFx0ZmluYWxSZWdpb24uc2lkZXMudG9wID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LnRvcDtcblx0XHRcdH1cblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8ucmlnaHQgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2lkZXM/LnJpZ2h0KSB7XG5cdFx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzLnJpZ2h0ID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LnJpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKE9iamVjdC5rZXlzKGZpbmFsUmVnaW9uLnNpZGVzKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0ZGVsZXRlIGZpbmFsUmVnaW9uLnNpZGVzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3Qua2V5cyhmaW5hbFJlZ2lvbikubGVuZ3RoID4gMCkge1xuXHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbiA9IGZpbmFsUmVnaW9uO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzKSBhcyAoa2V5b2YgUmVzaXplU2lkZXMpW10pIHtcblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzW3Byb3BdICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uU2lkZXNbcHJvcF0pIHtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbiA9IGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24gPz8ge307XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24uc2lkZXMgPSBmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uLnNpZGVzID8/IHt9O1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uLnNpZGVzW3Byb3BdID0gc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlc1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMoc2VsZWN0ZWRDb3JuZXJSb3VuZGluZykgYXMgKGtleW9mIE9wZW5GaW4uQ29ybmVyUm91bmRpbmcpW10pIHtcblx0XHRcdGlmIChzZWxlY3RlZENvcm5lclJvdW5kaW5nW3Byb3BdICE9PSBkZWZhdWx0Q29ybmVyUm91bmRpbmdbcHJvcF0pIHtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLmNvcm5lclJvdW5kaW5nID0gZmluYWxXaW5kb3dPcHRpb25zLmNvcm5lclJvdW5kaW5nID8/IHt9O1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMuY29ybmVyUm91bmRpbmdbcHJvcF0gPSBzZWxlY3RlZENvcm5lclJvdW5kaW5nW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmaW5hbFdpbmRvd09wdGlvbnM7XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBwcmV2aWV3LlxuICovXG5mdW5jdGlvbiB1cGRhdGVQcmV2aWV3KCk6IHZvaWQge1xuXHRjb25zdCBwcmV2aWV3RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlld1wiKTtcblx0aWYgKHByZXZpZXdFbGVtKSB7XG5cdFx0cHJldmlld0VsZW0udGV4dENvbnRlbnQgPSBjcmVhdGVQcmV2aWV3KCk7XG5cdH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwcmV2aWV3LlxuICogQHJldHVybnMgVGhlIHByZXZpZXcgY29kZS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJldmlldygpOiBzdHJpbmcge1xuXHRpZiAoc2VsZWN0ZWRMYXVuY2hPcHRpb25zLnVzZVBsYXRmb3JtKSB7XG5cdFx0cmV0dXJuIGBjb25zdCBwbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuYXdhaXQgcGxhdGZvcm0uY3JlYXRlV2luZG93KCR7SlNPTi5zdHJpbmdpZnkoZmluYWxpemVXaW5kb3dPcHRpb25zKCksIHVuZGVmaW5lZCwgXCIgIFwiKX0pO2A7XG5cdH1cblx0cmV0dXJuIGBhd2FpdCBmaW4uV2luZG93LmNyZWF0ZSgke0pTT04uc3RyaW5naWZ5KGZpbmFsaXplV2luZG93T3B0aW9ucygpLCB1bmRlZmluZWQsIFwiICBcIil9KTtgO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==