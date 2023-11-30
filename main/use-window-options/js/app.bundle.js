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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQixXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxhQUFhO0lBQ3JCLE9BQU8sMkJBQTJCLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNoRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXdpbmRvdy1vcHRpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS13aW5kb3ctb3B0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS13aW5kb3ctb3B0aW9ucy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmNvbnN0IGRlZmF1bHRDb21tb25PcHRpb25zOiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucyA9IHtcblx0bmFtZTogXCJ0ZXN0LWNoaWxkXCIsXG5cdHVybDogXCIuL3ByZXZpZXcuaHRtbFwiLFxuXHRpY29uOiB1bmRlZmluZWQsXG5cdGF1dG9TaG93OiB0cnVlLFxuXHRhbHdheXNPblRvcDogZmFsc2UsXG5cdG9wYWNpdHk6IDEsXG5cdGNvbnRleHRNZW51OiB0cnVlLFxuXHRzaG93VGFza2Jhckljb246IHRydWUsXG5cdHJlc2l6YWJsZTogdHJ1ZSxcblx0bWluaW1pemFibGU6IHRydWUsXG5cdG1heGltaXphYmxlOiB0cnVlLFxuXHRtaW5XaWR0aDogMCxcblx0bWF4V2lkdGg6IC0xLFxuXHRtaW5IZWlnaHQ6IDAsXG5cdG1heEhlaWdodDogLTEsXG5cdGRlZmF1bHRDZW50ZXJlZDogZmFsc2UsXG5cdGRlZmF1bHRMZWZ0OiAxMDAsXG5cdGRlZmF1bHRUb3A6IDEwMCxcblx0ZGVmYXVsdFdpZHRoOiA4MDAsXG5cdGRlZmF1bHRIZWlnaHQ6IDUwMCxcblx0YXNwZWN0UmF0aW86IDAsXG5cdGJhY2tncm91bmRDb2xvcjogdW5kZWZpbmVkLFxuXHRmcmFtZTogdHJ1ZSxcblx0c2hhZG93OiBmYWxzZVxufTtcblxuY29uc3QgZGVmYXVsdEZyYW1lbGVzc09wdGlvbnM6IFBhcnRpYWw8T3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnM+ID0ge1xuXHRzaGFkb3c6IGZhbHNlXG59O1xuXG5jb25zdCBkZWZhdWx0UmVzaXplUmVnaW9uOiBQYXJ0aWFsPE9wZW5GaW4uUmVzaXplUmVnaW9uPiA9IHtcblx0c2l6ZTogNyxcblx0Ym90dG9tUmlnaHRDb3JuZXI6IDlcbn07XG5cbi8qKlxuICogVHlwZSBmb3IgdGhlIHJlc2l6ZSBzaWRlcy5cbiAqL1xuaW50ZXJmYWNlIFJlc2l6ZVNpZGVzIHtcblx0LyoqXG5cdCAqIFRvcCBwb3NpdGlvbi5cblx0ICovXG5cdHRvcDogYm9vbGVhbjtcblx0LyoqXG5cdCAqIExlZnQgcG9zaXRpb24uXG5cdCAqL1xuXHRsZWZ0OiBib29sZWFuO1xuXHQvKipcblx0ICogUmlnaHQgcG9zaXRpb24uXG5cdCAqL1xuXHRyaWdodDogYm9vbGVhbjtcblx0LyoqXG5cdCAqIEJvdHRvbSBwb3NpdGlvbi5cblx0ICovXG5cdGJvdHRvbTogYm9vbGVhbjtcbn1cblxuY29uc3QgZGVmYXVsdFJlc2l6ZVJlZ2lvblNpZGVzOiBQYXJ0aWFsPFJlc2l6ZVNpZGVzPiA9IHtcblx0bGVmdDogdHJ1ZSxcblx0dG9wOiB0cnVlLFxuXHRyaWdodDogdHJ1ZSxcblx0Ym90dG9tOiB0cnVlXG59O1xuXG5jb25zdCBkZWZhdWx0Q29ybmVyUm91bmRpbmc6IFBhcnRpYWw8T3BlbkZpbi5Db3JuZXJSb3VuZGluZz4gPSB7XG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDBcbn07XG5cbmxldCBzZWxlY3RlZENvbW1vbk9wdGlvbnM6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0geyAuLi5kZWZhdWx0Q29tbW9uT3B0aW9ucyB9O1xubGV0IHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9uczogUGFydGlhbDxPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucz4gPSB7IC4uLmRlZmF1bHRGcmFtZWxlc3NPcHRpb25zIH07XG5sZXQgc2VsZWN0ZWRSZXNpemVSZWdpb246IFBhcnRpYWw8T3BlbkZpbi5SZXNpemVSZWdpb24+ID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uIH07XG5sZXQgc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlczogUGFydGlhbDxSZXNpemVTaWRlcz4gPSB7IC4uLmRlZmF1bHRSZXNpemVSZWdpb25TaWRlcyB9O1xubGV0IHNlbGVjdGVkQ29ybmVyUm91bmRpbmc6IFBhcnRpYWw8T3BlbkZpbi5Db3JuZXJSb3VuZGluZz4gPSB7IC4uLmRlZmF1bHRDb3JuZXJSb3VuZGluZyB9O1xuXG5sZXQgcHJldmlld1dpbmRvdzogT3BlbkZpbi5XaW5kb3cgfCB1bmRlZmluZWQ7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnRuUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuUHJldmlld1wiKTtcblx0aWYgKGJ0blByZXZpZXcpIHtcblx0XHRidG5QcmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRpZiAocHJldmlld1dpbmRvdykge1xuXHRcdFx0XHRhd2FpdCBwcmV2aWV3V2luZG93LnJlbW92ZUFsbExpc3RlbmVycygpO1xuXHRcdFx0XHRhd2FpdCBwcmV2aWV3V2luZG93LmNsb3NlKHRydWUpO1xuXHRcdFx0XHRwcmV2aWV3V2luZG93ID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcHJldmlld09wdGlvbnM6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0ge1xuXHRcdFx0XHQuLi5maW5hbGl6ZVdpbmRvd09wdGlvbnMoKSxcblx0XHRcdFx0c2F2ZVdpbmRvd1N0YXRlOiBmYWxzZVxuXHRcdFx0fTtcblx0XHRcdHByZXZpZXdXaW5kb3cgPSBhd2FpdCBmaW4uV2luZG93LmNyZWF0ZShwcmV2aWV3T3B0aW9ucyk7XG5cdFx0XHRhd2FpdCBwcmV2aWV3V2luZG93LmFkZExpc3RlbmVyKFwiY2xvc2VkXCIsICgpID0+IHtcblx0XHRcdFx0cHJldmlld1dpbmRvdyA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuQ2xvc2VQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5DbG9zZVByZXZpZXdcIik7XG5cdGlmIChidG5DbG9zZVByZXZpZXcpIHtcblx0XHRidG5DbG9zZVByZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChwcmV2aWV3V2luZG93KSB7XG5cdFx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdFx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cuY2xvc2UodHJ1ZSk7XG5cdFx0XHRcdHByZXZpZXdXaW5kb3cgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuUmVzZXRcIik7XG5cdGlmIChidG5SZXNldCkge1xuXHRcdGJ0blJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMgPSB7IC4uLmRlZmF1bHRDb21tb25PcHRpb25zIH07XG5cdFx0XHRzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnMgPSB7IC4uLmRlZmF1bHRGcmFtZWxlc3NPcHRpb25zIH07XG5cdFx0XHRzZWxlY3RlZFJlc2l6ZVJlZ2lvbiA9IHsgLi4uZGVmYXVsdFJlc2l6ZVJlZ2lvbiB9O1xuXHRcdFx0c2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcyA9IHsgLi4uZGVmYXVsdFJlc2l6ZVJlZ2lvblNpZGVzIH07XG5cdFx0XHRzZWxlY3RlZENvcm5lclJvdW5kaW5nID0geyAuLi5kZWZhdWx0Q29ybmVyUm91bmRpbmcgfTtcblx0XHRcdHBvcHVsYXRlRm9ybSgpO1xuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuQ29weVwiKTtcblx0aWYgKGJ0bkNvcHkpIHtcblx0XHRidG5Db3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBmaW4uQ2xpcGJvYXJkLndyaXRlVGV4dCh7IGRhdGE6IGNyZWF0ZVByZXZpZXcoKSB9KTtcblx0XHR9KTtcblx0fVxuXG5cdHBvcHVsYXRlRm9ybSgpO1xuXHR1cGRhdGVQcmV2aWV3KCk7XG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIGZvcm0gZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybSgpOiB2b2lkIHtcblx0Ly8gQ29tbW9uIG9wdGlvbnNcblx0Y29ubmVjdElucHV0KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25OYW1lXCIsIFwibmFtZVwiKTtcblx0Y29ubmVjdElucHV0KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25VcmxcIiwgXCJ1cmxcIik7XG5cdGNvbm5lY3RJbnB1dChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uSWNvblwiLCBcImljb25cIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uQWx3YXlzT25Ub3BcIiwgXCJhbHdheXNPblRvcFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25PcGFjaXR5XCIsIFwib3BhY2l0eVwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25TaG93Q29udGV4dE1lbnVcIiwgXCJjb250ZXh0TWVudVwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25TaG93VGFza2Jhckljb25cIiwgXCJzaG93VGFza2Jhckljb25cIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uUmVzaXphYmxlXCIsIFwicmVzaXphYmxlXCIsICgpID0+IHVwZGF0ZVJlc2l6ZVN0YXRlKCkpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1pbmltaXphYmxlXCIsIFwibWluaW1pemFibGVcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWF4aW1pemFibGVcIiwgXCJtYXhpbWl6YWJsZVwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NaW5XaWR0aFwiLCBcIm1pbldpZHRoXCIsICgpID0+IHVwZGF0ZVJlc2l6ZVdpZHRoKCkpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1heFdpZHRoXCIsIFwibWF4V2lkdGhcIiwgKCkgPT4gdXBkYXRlUmVzaXplV2lkdGgoKSk7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWluSGVpZ2h0XCIsIFwibWluSGVpZ2h0XCIsICgpID0+IHVwZGF0ZVJlc2l6ZUhlaWdodCgpKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NYXhIZWlnaHRcIiwgXCJtYXhIZWlnaHRcIiwgKCkgPT4gdXBkYXRlUmVzaXplSGVpZ2h0KCkpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRDZW50ZXJlZFwiLCBcImRlZmF1bHRDZW50ZXJlZFwiLCAoKSA9PlxuXHRcdHVwZGF0ZURlZmF1bHRQb3NpdGlvbigpXG5cdCk7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRGVmYXVsdExlZnRcIiwgXCJkZWZhdWx0TGVmdFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0VG9wXCIsIFwiZGVmYXVsdFRvcFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0V2lkdGhcIiwgXCJkZWZhdWx0V2lkdGhcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRGVmYXVsdEhlaWdodFwiLCBcImRlZmF1bHRIZWlnaHRcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uQXNwZWN0UmF0aW9cIiwgXCJhc3BlY3RSYXRpb1wiKTtcblx0Y29ubmVjdENvbG9yKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25CYWNrZ3JvdW5kQ29sb3JcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRnJhbWVcIiwgXCJmcmFtZVwiLCAoKSA9PiB1cGRhdGVGcmFtZWxlc3NTdGF0ZSgpKTtcblxuXHQvLyBGcmFtZWxlc3Mgb3B0aW9uc1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zLCBcIm9wdGlvblNoYWRvd1wiLCBcInNoYWRvd1wiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkUmVzaXplUmVnaW9uLCBcIm9wdGlvbkVkZ2VSZXNpemVTaXplXCIsIFwic2l6ZVwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkUmVzaXplUmVnaW9uLCBcIm9wdGlvbkNvcm5lclJlc2l6ZVNpemVcIiwgXCJib3R0b21SaWdodENvcm5lclwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMsIFwib3B0aW9uUmVzaXplUmVnaW9uU2lkZUxlZnRcIiwgXCJsZWZ0XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlUmlnaHRcIiwgXCJyaWdodFwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMsIFwib3B0aW9uUmVzaXplUmVnaW9uU2lkZVRvcFwiLCBcInRvcFwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXMsIFwib3B0aW9uUmVzaXplUmVnaW9uU2lkZUJvdHRvbVwiLCBcImJvdHRvbVwiKTtcblxuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb3JuZXJSb3VuZGluZywgXCJvcHRpb25Db3JuZXJSb3VuZGluZ1dpZHRoXCIsIFwid2lkdGhcIik7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvcm5lclJvdW5kaW5nLCBcIm9wdGlvbkNvcm5lclJvdW5kaW5nSGVpZ2h0XCIsIFwiaGVpZ2h0XCIpO1xuXG5cdHVwZGF0ZVJlc2l6ZVN0YXRlKCk7XG5cdHVwZGF0ZUZyYW1lbGVzc1N0YXRlKCk7XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgcmVzaXplIGNvbXBvbmVudHMuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlc2l6ZVN0YXRlKCk6IHZvaWQge1xuXHRjb25zdCByZXNpemFibGUgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMucmVzaXphYmxlID8/IGRlZmF1bHRDb21tb25PcHRpb25zLnJlc2l6YWJsZTtcblx0Y29uc3Qgd2lkdGhFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjcmVzaXplV2lkdGhcIik7XG5cdGlmICh3aWR0aEVsZW0pIHtcblx0XHR3aWR0aEVsZW0uc3R5bGUuZGlzcGxheSA9IHJlc2l6YWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XG5cdH1cblxuXHRjb25zdCBoZWlnaHRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjcmVzaXplSGVpZ2h0XCIpO1xuXHRpZiAoaGVpZ2h0RWxlbSkge1xuXHRcdGhlaWdodEVsZW0uc3R5bGUuZGlzcGxheSA9IHJlc2l6YWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XG5cdH1cblxuXHRpZiAoIXJlc2l6YWJsZSkge1xuXHRcdGRlbGV0ZSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluV2lkdGg7XG5cdFx0ZGVsZXRlIHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aDtcblx0XHRkZWxldGUgc2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbkhlaWdodDtcblx0XHRkZWxldGUgc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodDtcblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGZyYW1lbGVzcyBjb21wb25lbnRzLlxuICovXG5mdW5jdGlvbiB1cGRhdGVGcmFtZWxlc3NTdGF0ZSgpOiB2b2lkIHtcblx0Y29uc3QgZnJhbWUgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMuZnJhbWUgPz8gZGVmYXVsdENvbW1vbk9wdGlvbnMuZnJhbWU7XG5cdGNvbnN0IHNlY3Rpb25GcmFtZWxlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNzZWN0aW9uRnJhbWVsZXNzXCIpO1xuXHRpZiAoc2VjdGlvbkZyYW1lbGVzcykge1xuXHRcdHNlY3Rpb25GcmFtZWxlc3Muc3R5bGUuZGlzcGxheSA9IGZyYW1lID8gXCJub25lXCIgOiBcImZsZXhcIjtcblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHJlc2l6ZSB3aWR0aC5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlUmVzaXplV2lkdGgoKTogdm9pZCB7XG5cdGlmIChcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGggIT09IC0xICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoICE9PSB1bmRlZmluZWQgJiZcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluV2lkdGggIT09IHVuZGVmaW5lZCAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aCA8PSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluV2lkdGhcblx0KSB7XG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbldpZHRoICsgNTA7XG5cdFx0Y29uc3QgbWF4V2lkdGhFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNvcHRpb25NYXhXaWR0aFwiKTtcblx0XHRpZiAobWF4V2lkdGhFbGVtKSB7XG5cdFx0XHRtYXhXaWR0aEVsZW0udmFsdWVBc051bWJlciA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aDtcblx0XHR9XG5cdFx0Y29uc3QgbWF4V2lkdGhWYWx1ZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNvcHRpb25NYXhXaWR0aFZhbHVlXCIpO1xuXHRcdGlmIChtYXhXaWR0aFZhbHVlRWxlbSkge1xuXHRcdFx0bWF4V2lkdGhWYWx1ZUVsZW0udGV4dENvbnRlbnQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGgudG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSByZXNpemUgaGVpZ2h0LlxuICovXG5mdW5jdGlvbiB1cGRhdGVSZXNpemVIZWlnaHQoKTogdm9pZCB7XG5cdGlmIChcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0ICE9PSAtMSAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5IZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgPD0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbkhlaWdodFxuXHQpIHtcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0ID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbkhlaWdodCArIDUwO1xuXHRcdGNvbnN0IG1heEhlaWdodEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI29wdGlvbk1heEhlaWdodFwiKTtcblx0XHRpZiAobWF4SGVpZ2h0RWxlbSkge1xuXHRcdFx0bWF4SGVpZ2h0RWxlbS52YWx1ZUFzTnVtYmVyID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodDtcblx0XHR9XG5cdFx0Y29uc3QgbWF4SGVpZ2h0VmFsdWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjb3B0aW9uTWF4SGVpZ2h0VmFsdWVcIik7XG5cdFx0aWYgKG1heEhlaWdodFZhbHVlRWxlbSkge1xuXHRcdFx0bWF4SGVpZ2h0VmFsdWVFbGVtLnRleHRDb250ZW50ID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodC50b1N0cmluZygpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGRlZmF1bHQgcG9zaXRpb24gY29tcG9uZW50cy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlRGVmYXVsdFBvc2l0aW9uKCk6IHZvaWQge1xuXHRjb25zdCBpc0NlbnRlcmVkID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLmRlZmF1bHRDZW50ZXJlZCA/PyBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0Q2VudGVyZWQ7XG5cblx0Y29uc3QgZGVmYXVsdFBvc2l0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KFwiI2RlZmF1bHRQb3NpdGlvblwiKTtcblx0aWYgKGRlZmF1bHRQb3NpdGlvbkVsZW0pIHtcblx0XHRkZWZhdWx0UG9zaXRpb25FbGVtLnN0eWxlLmRpc3BsYXkgPSBpc0NlbnRlcmVkID8gXCJub25lXCIgOiBcImZsZXhcIjtcblx0fVxuXG5cdGNvbnN0IG9wdGlvbkRlZmF1bHRMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNvcHRpb25EZWZhdWx0TGVmdFwiKTtcblx0aWYgKG9wdGlvbkRlZmF1bHRMZWZ0ICYmIGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25EZWZhdWx0TGVmdC52YWx1ZUFzTnVtYmVyID0gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQ7XG5cdH1cblx0Y29uc3Qgb3B0aW9uRGVmYXVsdExlZnRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNwYW5FbGVtZW50PihcIiNvcHRpb25EZWZhdWx0TGVmdFZhbHVlXCIpO1xuXHRpZiAob3B0aW9uRGVmYXVsdExlZnRWYWx1ZSAmJiBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9uRGVmYXVsdExlZnRWYWx1ZS50ZXh0Q29udGVudCA9IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0LnRvU3RyaW5nKCk7XG5cdH1cblxuXHRjb25zdCBvcHRpb25EZWZhdWx0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNvcHRpb25EZWZhdWx0VG9wXCIpO1xuXHRpZiAob3B0aW9uRGVmYXVsdFRvcCAmJiBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25EZWZhdWx0VG9wLnZhbHVlQXNOdW1iZXIgPSBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0VG9wO1xuXHR9XG5cdGNvbnN0IG9wdGlvbkRlZmF1bHRUb3BWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNwYW5FbGVtZW50PihcIiNvcHRpb25EZWZhdWx0VG9wVmFsdWVcIik7XG5cdGlmIChvcHRpb25EZWZhdWx0VG9wVmFsdWUgJiYgZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9uRGVmYXVsdFRvcFZhbHVlLnRleHRDb250ZW50ID0gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcC50b1N0cmluZygpO1xuXHR9XG5cblx0aWYgKGlzQ2VudGVyZWQpIHtcblx0XHRkZWxldGUgc2VsZWN0ZWRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0O1xuXHRcdGRlbGV0ZSBzZWxlY3RlZENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcDtcblx0fVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHRvIGFuIG9iamVjdC5cbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBzZXQgdGhlIHByb3BlcnR5IG9uLlxuICogQHBhcmFtIGtleSBUaGUga2V5IHRvIHNldC5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNldFByb3BlcnR5PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFBhcnRpYWw8VD4sIGtleTogSywgdmFsdWU6IHVua25vd24pOiB2b2lkIHtcblx0b2JqW2tleV0gPSB2YWx1ZSBhcyBUW0tdO1xufVxuXG4vKipcbiAqIEdldCBhIHByb3BlcnR5IGZyb20gYW4gb2JqZWN0LlxuICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGdldCB0aGUgcHJvcGVydHkgZnJvbS5cbiAqIEBwYXJhbSBrZXkgVGhlIGtleSB0byBnZXRcbiAqIEByZXR1cm5zIFRoZSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcGVydHk8VCwgSyBleHRlbmRzIGtleW9mIFQsIFA+KG9iajogUGFydGlhbDxUPiwga2V5OiBLKTogUCB7XG5cdHJldHVybiBvYmpba2V5XSBhcyB1bmtub3duIGFzIFA7XG59XG5cbi8qKlxuICogQ29ubmVjdCBhbiBpbnB1dCB0byBhbiBvcHRpb24uXG4gKiBAcGFyYW0gc2VsZWN0ZWRWYWx1ZXMgVGhlIHNlbGVjdGVkIHZhbHVlLlxuICogQHBhcmFtIGZpZWxkSWQgVGhlIGZpZWxkIGlkLlxuICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eS5cbiAqL1xuZnVuY3Rpb24gY29ubmVjdElucHV0PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihzZWxlY3RlZFZhbHVlczogUGFydGlhbDxUPiwgZmllbGRJZDogc3RyaW5nLCBwcm9wZXJ0eTogSyk6IHZvaWQge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfWApO1xuXHRpZiAob3B0aW9uKSB7XG5cdFx0b3B0aW9uLnZhbHVlID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KSA/PyBcIlwiO1xuXHRcdG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0c2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5LCBvcHRpb24udmFsdWUgPT09IFwiXCIgPyB1bmRlZmluZWQgOiBvcHRpb24udmFsdWUpO1xuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogQ29ubmVjdCBhIGNoZWNrYm94LlxuICogQHBhcmFtIHNlbGVjdGVkVmFsdWVzIFRoZSBzZWxlY3RlZCB2YWx1ZXMuXG4gKiBAcGFyYW0gZmllbGRJZCBUaGUgZmllbGQgaWQuXG4gKiBAcGFyYW0gcHJvcGVydHkgVGhlIHByb3BlcnR5LlxuICogQHBhcmFtIGNoYW5nZWQgVGhlIGNoYW5nZWQgZXZlbnQgdG8gY2FsbC5cbiAqL1xuZnVuY3Rpb24gY29ubmVjdENoZWNrYm94PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihcblx0c2VsZWN0ZWRWYWx1ZXM6IFBhcnRpYWw8VD4sXG5cdGZpZWxkSWQ6IHN0cmluZyxcblx0cHJvcGVydHk6IEssXG5cdGNoYW5nZWQ/OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1gKTtcblx0aWYgKG9wdGlvbikge1xuXHRcdG9wdGlvbi5jaGVja2VkID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi5jaGVja2VkKTtcblx0XHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRcdGNoYW5nZWQoKTtcblx0XHRcdH1cblx0XHRcdHVwZGF0ZVByZXZpZXcoKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIENvbm5lY3QgYSByYW5nZS5cbiAqIEBwYXJhbSBzZWxlY3RlZFZhbHVlcyBUaGUgc2VsZWN0ZWQgdmFsdWVzLlxuICogQHBhcmFtIGZpZWxkSWQgVGhlIGZpZWxkIGlkLlxuICogQHBhcmFtIHByb3BlcnR5IFRoZSBwcm9wZXJ0eS5cbiAqIEBwYXJhbSBjaGFuZ2VkIFRoZSBjaGFuZ2VkIGV2ZW50IHRvIGNhbGwuXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RSYW5nZTxULCBLIGV4dGVuZHMga2V5b2YgVD4oXG5cdHNlbGVjdGVkVmFsdWVzOiBQYXJ0aWFsPFQ+LFxuXHRmaWVsZElkOiBzdHJpbmcsXG5cdHByb3BlcnR5OiBLLFxuXHRjaGFuZ2VkPzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9YCk7XG5cdGNvbnN0IG9wdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1WYWx1ZWApO1xuXG5cdGlmIChvcHRpb24gJiYgb3B0aW9uVmFsdWUpIHtcblx0XHRvcHRpb24udmFsdWVBc051bWJlciA9IGdldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSk7XG5cdFx0b3B0aW9uVmFsdWUudGV4dENvbnRlbnQgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuXHRcdFx0c2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5LCBvcHRpb24udmFsdWVBc051bWJlcik7XG5cdFx0XHRvcHRpb25WYWx1ZS50ZXh0Q29udGVudCA9IG9wdGlvbi52YWx1ZUFzTnVtYmVyLnRvU3RyaW5nKCk7XG5cdFx0XHRpZiAoY2hhbmdlZCkge1xuXHRcdFx0XHRjaGFuZ2VkKCk7XG5cdFx0XHR9XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBDb25uZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0gc2VsZWN0ZWRWYWx1ZXMgVGhlIHNlbGVjdGVkIHZhbHVlcy5cbiAqIEBwYXJhbSBmaWVsZElkIFRoZSBmaWVsZCBpZC5cbiAqIEBwYXJhbSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkuXG4gKiBAcGFyYW0gY2hhbmdlZCBUaGUgY2hhbmdlZCBldmVudCB0byBjYWxsLlxuICovXG5mdW5jdGlvbiBjb25uZWN0Q29sb3I8VCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuXHRzZWxlY3RlZFZhbHVlczogUGFydGlhbDxUPixcblx0ZmllbGRJZDogc3RyaW5nLFxuXHRwcm9wZXJ0eTogSyxcblx0Y2hhbmdlZD86ICgpID0+IHZvaWRcbik6IHZvaWQge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfWApO1xuXHRjb25zdCBvcHRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9VmFsdWVgKTtcblxuXHRpZiAob3B0aW9uICYmIG9wdGlvblZhbHVlKSB7XG5cdFx0b3B0aW9uLnZhbHVlID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb25WYWx1ZS50ZXh0Q29udGVudCA9IGdldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSk7XG5cdFx0b3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi52YWx1ZSk7XG5cdFx0XHRvcHRpb25WYWx1ZS50ZXh0Q29udGVudCA9IG9wdGlvbi52YWx1ZTtcblx0XHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRcdGNoYW5nZWQoKTtcblx0XHRcdH1cblx0XHRcdHVwZGF0ZVByZXZpZXcoKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIEZpbmFsaXplIHRoZSB3aW5kb3cgb3B0aW9ucy5cbiAqIEByZXR1cm5zIFRoZSBjb21wbGV0ZSB3aW5kb3cgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmluYWxpemVXaW5kb3dPcHRpb25zKCk6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zIHtcblx0Y29uc3QgZmluYWxXaW5kb3dPcHRpb25zOiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucyA9IHtcblx0XHRuYW1lOiBzZWxlY3RlZENvbW1vbk9wdGlvbnMubmFtZSxcblx0XHR1cmw6IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy51cmwsXG5cdFx0YXV0b1Nob3c6IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5hdXRvU2hvd1xuXHR9O1xuXG5cdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhzZWxlY3RlZENvbW1vbk9wdGlvbnMpIGFzIChrZXlvZiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucylbXSkge1xuXHRcdGlmIChzZWxlY3RlZENvbW1vbk9wdGlvbnNbcHJvcF0gIT09IGRlZmF1bHRDb21tb25PcHRpb25zW3Byb3BdKSB7XG5cdFx0XHRmaW5hbFdpbmRvd09wdGlvbnNbcHJvcF0gPSBzZWxlY3RlZENvbW1vbk9wdGlvbnNbcHJvcF07XG5cdFx0fVxuXHR9XG5cblx0aWYgKCEoc2VsZWN0ZWRDb21tb25PcHRpb25zLmZyYW1lID8/IHRydWUpKSB7XG5cdFx0Zm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9ucykgYXMgKGtleW9mIE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zKVtdKSB7XG5cdFx0XHRpZiAoc2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zW3Byb3BdICE9PSBkZWZhdWx0Q29tbW9uT3B0aW9uc1twcm9wXSkge1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnNbcHJvcF0gPSBzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnNbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmluYWxSZWdpb246IE9wZW5GaW4uUmVzaXplUmVnaW9uID0ge307XG5cdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLmJvdHRvbVJpZ2h0Q29ybmVyICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLmJvdHRvbVJpZ2h0Q29ybmVyKSB7XG5cdFx0XHRmaW5hbFJlZ2lvbi5ib3R0b21SaWdodENvcm5lciA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLmJvdHRvbVJpZ2h0Q29ybmVyO1xuXHRcdH1cblx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2l6ZSAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaXplKSB7XG5cdFx0XHRmaW5hbFJlZ2lvbi5zaXplID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2l6ZTtcblx0XHR9XG5cdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzKSB7XG5cdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcyA9IHt9O1xuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5ib3R0b20gIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2lkZXM/LmJvdHRvbSkge1xuXHRcdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcy5ib3R0b20gPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8uYm90dG9tO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5sZWZ0ICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpZGVzPy5sZWZ0KSB7XG5cdFx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzLmxlZnQgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8ubGVmdDtcblx0XHRcdH1cblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8udG9wICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpZGVzPy50b3ApIHtcblx0XHRcdFx0ZmluYWxSZWdpb24uc2lkZXMudG9wID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LnRvcDtcblx0XHRcdH1cblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8ucmlnaHQgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2lkZXM/LnJpZ2h0KSB7XG5cdFx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzLnJpZ2h0ID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LnJpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKE9iamVjdC5rZXlzKGZpbmFsUmVnaW9uLnNpZGVzKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0ZGVsZXRlIGZpbmFsUmVnaW9uLnNpZGVzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChPYmplY3Qua2V5cyhmaW5hbFJlZ2lvbikubGVuZ3RoID4gMCkge1xuXHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbiA9IGZpbmFsUmVnaW9uO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzKSBhcyAoa2V5b2YgUmVzaXplU2lkZXMpW10pIHtcblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzW3Byb3BdICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uU2lkZXNbcHJvcF0pIHtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbiA9IGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24gPz8ge307XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24uc2lkZXMgPSBmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uLnNpZGVzID8/IHt9O1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uLnNpZGVzW3Byb3BdID0gc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlc1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMoc2VsZWN0ZWRDb3JuZXJSb3VuZGluZykgYXMgKGtleW9mIE9wZW5GaW4uQ29ybmVyUm91bmRpbmcpW10pIHtcblx0XHRcdGlmIChzZWxlY3RlZENvcm5lclJvdW5kaW5nW3Byb3BdICE9PSBkZWZhdWx0Q29ybmVyUm91bmRpbmdbcHJvcF0pIHtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLmNvcm5lclJvdW5kaW5nID0gZmluYWxXaW5kb3dPcHRpb25zLmNvcm5lclJvdW5kaW5nID8/IHt9O1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMuY29ybmVyUm91bmRpbmdbcHJvcF0gPSBzZWxlY3RlZENvcm5lclJvdW5kaW5nW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmaW5hbFdpbmRvd09wdGlvbnM7XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBwcmV2aWV3LlxuICovXG5mdW5jdGlvbiB1cGRhdGVQcmV2aWV3KCk6IHZvaWQge1xuXHRjb25zdCBwcmV2aWV3RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlld1wiKTtcblx0aWYgKHByZXZpZXdFbGVtKSB7XG5cdFx0cHJldmlld0VsZW0udGV4dENvbnRlbnQgPSBjcmVhdGVQcmV2aWV3KCk7XG5cdH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwcmV2aWV3LlxuICogQHJldHVybnMgVGhlIHByZXZpZXcgY29kZS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUHJldmlldygpOiBzdHJpbmcge1xuXHRyZXR1cm4gYGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKCR7SlNPTi5zdHJpbmdpZnkoZmluYWxpemVXaW5kb3dPcHRpb25zKCksIHVuZGVmaW5lZCwgXCIgIFwiKX0pO2A7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=