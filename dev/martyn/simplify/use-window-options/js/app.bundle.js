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
function updateFramelessState() {
    const frame = selectedCommonOptions.frame ?? defaultCommonOptions.frame;
    const sectionFrameless = document.querySelector("#sectionFrameless");
    if (sectionFrameless) {
        sectionFrameless.style.display = frame ? "none" : "flex";
    }
}
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
function setProperty(obj, key, value) {
    obj[key] = value;
}
function getProperty(obj, key) {
    return obj[key];
}
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
function updatePreview() {
    const previewElem = document.querySelector("#preview");
    if (previewElem) {
        previewElem.textContent = createPreview();
    }
}
function createPreview() {
    return `await fin.Window.create(${JSON.stringify(finalizeWindowOptions(), undefined, "  ")});`;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0tBQ0Q7SUFFRCxPQUFPLGtCQUFrQixDQUFDO0FBQzNCLENBQUM7QUFFRCxTQUFTLGFBQWE7SUFDckIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxJQUFJLFdBQVcsRUFBRTtRQUNoQixXQUFXLENBQUMsV0FBVyxHQUFHLGFBQWEsRUFBRSxDQUFDO0tBQzFDO0FBQ0YsQ0FBQztBQUVELFNBQVMsYUFBYTtJQUNyQixPQUFPLDJCQUEyQixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDaEcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS13aW5kb3ctb3B0aW9ucy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRDb21tb25PcHRpb25zOiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucyA9IHtcblx0bmFtZTogXCJ0ZXN0LWNoaWxkXCIsXG5cdHVybDogXCIuL3ByZXZpZXcuaHRtbFwiLFxuXHRpY29uOiB1bmRlZmluZWQsXG5cdGF1dG9TaG93OiB0cnVlLFxuXHRhbHdheXNPblRvcDogZmFsc2UsXG5cdG9wYWNpdHk6IDEsXG5cdGNvbnRleHRNZW51OiB0cnVlLFxuXHRzaG93VGFza2Jhckljb246IHRydWUsXG5cdHJlc2l6YWJsZTogdHJ1ZSxcblx0bWluaW1pemFibGU6IHRydWUsXG5cdG1heGltaXphYmxlOiB0cnVlLFxuXHRtaW5XaWR0aDogMCxcblx0bWF4V2lkdGg6IC0xLFxuXHRtaW5IZWlnaHQ6IDAsXG5cdG1heEhlaWdodDogLTEsXG5cdGRlZmF1bHRDZW50ZXJlZDogZmFsc2UsXG5cdGRlZmF1bHRMZWZ0OiAxMDAsXG5cdGRlZmF1bHRUb3A6IDEwMCxcblx0ZGVmYXVsdFdpZHRoOiA4MDAsXG5cdGRlZmF1bHRIZWlnaHQ6IDUwMCxcblx0YXNwZWN0UmF0aW86IDAsXG5cdGJhY2tncm91bmRDb2xvcjogdW5kZWZpbmVkLFxuXHRmcmFtZTogdHJ1ZSxcblx0c2hhZG93OiBmYWxzZVxufTtcblxuY29uc3QgZGVmYXVsdEZyYW1lbGVzc09wdGlvbnM6IFBhcnRpYWw8T3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnM+ID0ge1xuXHRzaGFkb3c6IGZhbHNlXG59O1xuXG5jb25zdCBkZWZhdWx0UmVzaXplUmVnaW9uOiBQYXJ0aWFsPE9wZW5GaW4uUmVzaXplUmVnaW9uPiA9IHtcblx0c2l6ZTogNyxcblx0Ym90dG9tUmlnaHRDb3JuZXI6IDlcbn07XG5cbmludGVyZmFjZSBSZXNpemVTaWRlcyB7XG5cdHRvcDogYm9vbGVhbjtcblx0bGVmdDogYm9vbGVhbjtcblx0cmlnaHQ6IGJvb2xlYW47XG5cdGJvdHRvbTogYm9vbGVhbjtcbn1cblxuY29uc3QgZGVmYXVsdFJlc2l6ZVJlZ2lvblNpZGVzOiBQYXJ0aWFsPFJlc2l6ZVNpZGVzPiA9IHtcblx0bGVmdDogdHJ1ZSxcblx0dG9wOiB0cnVlLFxuXHRyaWdodDogdHJ1ZSxcblx0Ym90dG9tOiB0cnVlXG59O1xuXG5jb25zdCBkZWZhdWx0Q29ybmVyUm91bmRpbmc6IFBhcnRpYWw8T3BlbkZpbi5Db3JuZXJSb3VuZGluZz4gPSB7XG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDBcbn07XG5cbmxldCBzZWxlY3RlZENvbW1vbk9wdGlvbnM6IE9wZW5GaW4uV2luZG93Q3JlYXRpb25PcHRpb25zID0geyAuLi5kZWZhdWx0Q29tbW9uT3B0aW9ucyB9O1xubGV0IHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9uczogUGFydGlhbDxPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucz4gPSB7IC4uLmRlZmF1bHRGcmFtZWxlc3NPcHRpb25zIH07XG5sZXQgc2VsZWN0ZWRSZXNpemVSZWdpb246IFBhcnRpYWw8T3BlbkZpbi5SZXNpemVSZWdpb24+ID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uIH07XG5sZXQgc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlczogUGFydGlhbDxSZXNpemVTaWRlcz4gPSB7IC4uLmRlZmF1bHRSZXNpemVSZWdpb25TaWRlcyB9O1xubGV0IHNlbGVjdGVkQ29ybmVyUm91bmRpbmc6IFBhcnRpYWw8T3BlbkZpbi5Db3JuZXJSb3VuZGluZz4gPSB7IC4uLmRlZmF1bHRDb3JuZXJSb3VuZGluZyB9O1xuXG5sZXQgcHJldmlld1dpbmRvdzogT3BlbkZpbi5XaW5kb3cgfCB1bmRlZmluZWQ7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBidG5QcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5QcmV2aWV3XCIpO1xuXHRpZiAoYnRuUHJldmlldykge1xuXHRcdGJ0blByZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChwcmV2aWV3V2luZG93KSB7XG5cdFx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdFx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cuY2xvc2UodHJ1ZSk7XG5cdFx0XHRcdHByZXZpZXdXaW5kb3cgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwcmV2aWV3T3B0aW9uczogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMgPSB7XG5cdFx0XHRcdC4uLmZpbmFsaXplV2luZG93T3B0aW9ucygpLFxuXHRcdFx0XHRzYXZlV2luZG93U3RhdGU6IGZhbHNlXG5cdFx0XHR9O1xuXHRcdFx0cHJldmlld1dpbmRvdyA9IGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKHByZXZpZXdPcHRpb25zKTtcblx0XHRcdGF3YWl0IHByZXZpZXdXaW5kb3cuYWRkTGlzdGVuZXIoXCJjbG9zZWRcIiwgKCkgPT4ge1xuXHRcdFx0XHRwcmV2aWV3V2luZG93ID0gdW5kZWZpbmVkO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5DbG9zZVByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNsb3NlUHJldmlld1wiKTtcblx0aWYgKGJ0bkNsb3NlUHJldmlldykge1xuXHRcdGJ0bkNsb3NlUHJldmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKHByZXZpZXdXaW5kb3cpIHtcblx0XHRcdFx0YXdhaXQgcHJldmlld1dpbmRvdy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblx0XHRcdFx0YXdhaXQgcHJldmlld1dpbmRvdy5jbG9zZSh0cnVlKTtcblx0XHRcdFx0cHJldmlld1dpbmRvdyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0blJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5SZXNldFwiKTtcblx0aWYgKGJ0blJlc2V0KSB7XG5cdFx0YnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucyA9IHsgLi4uZGVmYXVsdENvbW1vbk9wdGlvbnMgfTtcblx0XHRcdHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9ucyA9IHsgLi4uZGVmYXVsdEZyYW1lbGVzc09wdGlvbnMgfTtcblx0XHRcdHNlbGVjdGVkUmVzaXplUmVnaW9uID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uIH07XG5cdFx0XHRzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzID0geyAuLi5kZWZhdWx0UmVzaXplUmVnaW9uU2lkZXMgfTtcblx0XHRcdHNlbGVjdGVkQ29ybmVyUm91bmRpbmcgPSB7IC4uLmRlZmF1bHRDb3JuZXJSb3VuZGluZyB9O1xuXHRcdFx0cG9wdWxhdGVGb3JtKCk7XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Db3B5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Db3B5XCIpO1xuXHRpZiAoYnRuQ29weSkge1xuXHRcdGJ0bkNvcHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGZpbi5DbGlwYm9hcmQud3JpdGVUZXh0KHsgZGF0YTogY3JlYXRlUHJldmlldygpIH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cG9wdWxhdGVGb3JtKCk7XG5cdHVwZGF0ZVByZXZpZXcoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVGb3JtKCk6IHZvaWQge1xuXHQvLyBDb21tb24gb3B0aW9uc1xuXHRjb25uZWN0SW5wdXQoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk5hbWVcIiwgXCJuYW1lXCIpO1xuXHRjb25uZWN0SW5wdXQoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblVybFwiLCBcInVybFwiKTtcblx0Y29ubmVjdElucHV0KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25JY29uXCIsIFwiaWNvblwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25BbHdheXNPblRvcFwiLCBcImFsd2F5c09uVG9wXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk9wYWNpdHlcIiwgXCJvcGFjaXR5XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblNob3dDb250ZXh0TWVudVwiLCBcImNvbnRleHRNZW51XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvblNob3dUYXNrYmFySWNvblwiLCBcInNob3dUYXNrYmFySWNvblwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25SZXNpemFibGVcIiwgXCJyZXNpemFibGVcIiwgKCkgPT4gdXBkYXRlUmVzaXplU3RhdGUoKSk7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWluaW1pemFibGVcIiwgXCJtaW5pbWl6YWJsZVwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NYXhpbWl6YWJsZVwiLCBcIm1heGltaXphYmxlXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1pbldpZHRoXCIsIFwibWluV2lkdGhcIiwgKCkgPT4gdXBkYXRlUmVzaXplV2lkdGgoKSk7XG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uTWF4V2lkdGhcIiwgXCJtYXhXaWR0aFwiLCAoKSA9PiB1cGRhdGVSZXNpemVXaWR0aCgpKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25NaW5IZWlnaHRcIiwgXCJtaW5IZWlnaHRcIiwgKCkgPT4gdXBkYXRlUmVzaXplSGVpZ2h0KCkpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbk1heEhlaWdodFwiLCBcIm1heEhlaWdodFwiLCAoKSA9PiB1cGRhdGVSZXNpemVIZWlnaHQoKSk7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZENvbW1vbk9wdGlvbnMsIFwib3B0aW9uRGVmYXVsdENlbnRlcmVkXCIsIFwiZGVmYXVsdENlbnRlcmVkXCIsICgpID0+XG5cdFx0dXBkYXRlRGVmYXVsdFBvc2l0aW9uKClcblx0KTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0TGVmdFwiLCBcImRlZmF1bHRMZWZ0XCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRUb3BcIiwgXCJkZWZhdWx0VG9wXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkRlZmF1bHRXaWR0aFwiLCBcImRlZmF1bHRXaWR0aFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25EZWZhdWx0SGVpZ2h0XCIsIFwiZGVmYXVsdEhlaWdodFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25Bc3BlY3RSYXRpb1wiLCBcImFzcGVjdFJhdGlvXCIpO1xuXHRjb25uZWN0Q29sb3Ioc2VsZWN0ZWRDb21tb25PcHRpb25zLCBcIm9wdGlvbkJhY2tncm91bmRDb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiKTtcblx0Y29ubmVjdENoZWNrYm94KHNlbGVjdGVkQ29tbW9uT3B0aW9ucywgXCJvcHRpb25GcmFtZVwiLCBcImZyYW1lXCIsICgpID0+IHVwZGF0ZUZyYW1lbGVzc1N0YXRlKCkpO1xuXG5cdC8vIEZyYW1lbGVzcyBvcHRpb25zXG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnMsIFwib3B0aW9uU2hhZG93XCIsIFwic2hhZG93XCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRSZXNpemVSZWdpb24sIFwib3B0aW9uRWRnZVJlc2l6ZVNpemVcIiwgXCJzaXplXCIpO1xuXHRjb25uZWN0UmFuZ2Uoc2VsZWN0ZWRSZXNpemVSZWdpb24sIFwib3B0aW9uQ29ybmVyUmVzaXplU2l6ZVwiLCBcImJvdHRvbVJpZ2h0Q29ybmVyXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlTGVmdFwiLCBcImxlZnRcIik7XG5cdGNvbm5lY3RDaGVja2JveChzZWxlY3RlZFJlc2l6ZVJlZ2lvblNpZGVzLCBcIm9wdGlvblJlc2l6ZVJlZ2lvblNpZGVSaWdodFwiLCBcInJpZ2h0XCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlVG9wXCIsIFwidG9wXCIpO1xuXHRjb25uZWN0Q2hlY2tib3goc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcywgXCJvcHRpb25SZXNpemVSZWdpb25TaWRlQm90dG9tXCIsIFwiYm90dG9tXCIpO1xuXG5cdGNvbm5lY3RSYW5nZShzZWxlY3RlZENvcm5lclJvdW5kaW5nLCBcIm9wdGlvbkNvcm5lclJvdW5kaW5nV2lkdGhcIiwgXCJ3aWR0aFwiKTtcblx0Y29ubmVjdFJhbmdlKHNlbGVjdGVkQ29ybmVyUm91bmRpbmcsIFwib3B0aW9uQ29ybmVyUm91bmRpbmdIZWlnaHRcIiwgXCJoZWlnaHRcIik7XG5cblx0dXBkYXRlUmVzaXplU3RhdGUoKTtcblx0dXBkYXRlRnJhbWVsZXNzU3RhdGUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUmVzaXplU3RhdGUoKTogdm9pZCB7XG5cdGNvbnN0IHJlc2l6YWJsZSA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5yZXNpemFibGUgPz8gZGVmYXVsdENvbW1vbk9wdGlvbnMucmVzaXphYmxlO1xuXHRjb25zdCB3aWR0aEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXNpemVXaWR0aFwiKTtcblx0aWYgKHdpZHRoRWxlbSkge1xuXHRcdHdpZHRoRWxlbS5zdHlsZS5kaXNwbGF5ID0gcmVzaXphYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcblx0fVxuXG5cdGNvbnN0IGhlaWdodEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXNpemVIZWlnaHRcIik7XG5cdGlmIChoZWlnaHRFbGVtKSB7XG5cdFx0aGVpZ2h0RWxlbS5zdHlsZS5kaXNwbGF5ID0gcmVzaXphYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcblx0fVxuXG5cdGlmICghcmVzaXphYmxlKSB7XG5cdFx0ZGVsZXRlIHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5XaWR0aDtcblx0XHRkZWxldGUgc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoO1xuXHRcdGRlbGV0ZSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluSGVpZ2h0O1xuXHRcdGRlbGV0ZSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUZyYW1lbGVzc1N0YXRlKCk6IHZvaWQge1xuXHRjb25zdCBmcmFtZSA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5mcmFtZSA/PyBkZWZhdWx0Q29tbW9uT3B0aW9ucy5mcmFtZTtcblx0Y29uc3Qgc2VjdGlvbkZyYW1lbGVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3NlY3Rpb25GcmFtZWxlc3NcIik7XG5cdGlmIChzZWN0aW9uRnJhbWVsZXNzKSB7XG5cdFx0c2VjdGlvbkZyYW1lbGVzcy5zdHlsZS5kaXNwbGF5ID0gZnJhbWUgPyBcIm5vbmVcIiA6IFwiZmxleFwiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJlc2l6ZVdpZHRoKCk6IHZvaWQge1xuXHRpZiAoXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoICE9PSAtMSAmJlxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbldpZHRoICE9PSB1bmRlZmluZWQgJiZcblx0XHRzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGggPD0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbldpZHRoXG5cdCkge1xuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhXaWR0aCA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5taW5XaWR0aCArIDUwO1xuXHRcdGNvbnN0IG1heFdpZHRoRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjb3B0aW9uTWF4V2lkdGhcIik7XG5cdFx0aWYgKG1heFdpZHRoRWxlbSkge1xuXHRcdFx0bWF4V2lkdGhFbGVtLnZhbHVlQXNOdW1iZXIgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4V2lkdGg7XG5cdFx0fVxuXHRcdGNvbnN0IG1heFdpZHRoVmFsdWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjb3B0aW9uTWF4V2lkdGhWYWx1ZVwiKTtcblx0XHRpZiAobWF4V2lkdGhWYWx1ZUVsZW0pIHtcblx0XHRcdG1heFdpZHRoVmFsdWVFbGVtLnRleHRDb250ZW50ID0gc2VsZWN0ZWRDb21tb25PcHRpb25zLm1heFdpZHRoLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVJlc2l6ZUhlaWdodCgpOiB2b2lkIHtcblx0aWYgKFxuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgIT09IC0xICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1pbkhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0c2VsZWN0ZWRDb21tb25PcHRpb25zLm1heEhlaWdodCA8PSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluSGVpZ2h0XG5cdCkge1xuXHRcdHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5tYXhIZWlnaHQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWluSGVpZ2h0ICsgNTA7XG5cdFx0Y29uc3QgbWF4SGVpZ2h0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjb3B0aW9uTWF4SGVpZ2h0XCIpO1xuXHRcdGlmIChtYXhIZWlnaHRFbGVtKSB7XG5cdFx0XHRtYXhIZWlnaHRFbGVtLnZhbHVlQXNOdW1iZXIgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0O1xuXHRcdH1cblx0XHRjb25zdCBtYXhIZWlnaHRWYWx1ZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNvcHRpb25NYXhIZWlnaHRWYWx1ZVwiKTtcblx0XHRpZiAobWF4SGVpZ2h0VmFsdWVFbGVtKSB7XG5cdFx0XHRtYXhIZWlnaHRWYWx1ZUVsZW0udGV4dENvbnRlbnQgPSBzZWxlY3RlZENvbW1vbk9wdGlvbnMubWF4SGVpZ2h0LnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURlZmF1bHRQb3NpdGlvbigpOiB2b2lkIHtcblx0Y29uc3QgaXNDZW50ZXJlZCA9IHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5kZWZhdWx0Q2VudGVyZWQgPz8gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdENlbnRlcmVkO1xuXG5cdGNvbnN0IGRlZmF1bHRQb3NpdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcIiNkZWZhdWx0UG9zaXRpb25cIik7XG5cdGlmIChkZWZhdWx0UG9zaXRpb25FbGVtKSB7XG5cdFx0ZGVmYXVsdFBvc2l0aW9uRWxlbS5zdHlsZS5kaXNwbGF5ID0gaXNDZW50ZXJlZCA/IFwibm9uZVwiIDogXCJmbGV4XCI7XG5cdH1cblxuXHRjb25zdCBvcHRpb25EZWZhdWx0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjb3B0aW9uRGVmYXVsdExlZnRcIik7XG5cdGlmIChvcHRpb25EZWZhdWx0TGVmdCAmJiBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9uRGVmYXVsdExlZnQudmFsdWVBc051bWJlciA9IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRMZWZ0O1xuXHR9XG5cdGNvbnN0IG9wdGlvbkRlZmF1bHRMZWZ0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oXCIjb3B0aW9uRGVmYXVsdExlZnRWYWx1ZVwiKTtcblx0aWYgKG9wdGlvbkRlZmF1bHRMZWZ0VmFsdWUgJiYgZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdExlZnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbkRlZmF1bHRMZWZ0VmFsdWUudGV4dENvbnRlbnQgPSBkZWZhdWx0Q29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdC50b1N0cmluZygpO1xuXHR9XG5cblx0Y29uc3Qgb3B0aW9uRGVmYXVsdFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjb3B0aW9uRGVmYXVsdFRvcFwiKTtcblx0aWYgKG9wdGlvbkRlZmF1bHRUb3AgJiYgZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9uRGVmYXVsdFRvcC52YWx1ZUFzTnVtYmVyID0gZGVmYXVsdENvbW1vbk9wdGlvbnMuZGVmYXVsdFRvcDtcblx0fVxuXHRjb25zdCBvcHRpb25EZWZhdWx0VG9wVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oXCIjb3B0aW9uRGVmYXVsdFRvcFZhbHVlXCIpO1xuXHRpZiAob3B0aW9uRGVmYXVsdFRvcFZhbHVlICYmIGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRUb3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbkRlZmF1bHRUb3BWYWx1ZS50ZXh0Q29udGVudCA9IGRlZmF1bHRDb21tb25PcHRpb25zLmRlZmF1bHRUb3AudG9TdHJpbmcoKTtcblx0fVxuXG5cdGlmIChpc0NlbnRlcmVkKSB7XG5cdFx0ZGVsZXRlIHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5kZWZhdWx0TGVmdDtcblx0XHRkZWxldGUgc2VsZWN0ZWRDb21tb25PcHRpb25zLmRlZmF1bHRUb3A7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0UHJvcGVydHk8VCwgSyBleHRlbmRzIGtleW9mIFQ+KG9iajogUGFydGlhbDxUPiwga2V5OiBLLCB2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuXHRvYmpba2V5XSA9IHZhbHVlIGFzIFRbS107XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5PFQsIEsgZXh0ZW5kcyBrZXlvZiBULCBQPihvYmo6IFBhcnRpYWw8VD4sIGtleTogSyk6IFAge1xuXHRyZXR1cm4gb2JqW2tleV0gYXMgdW5rbm93biBhcyBQO1xufVxuXG5mdW5jdGlvbiBjb25uZWN0SW5wdXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+KHNlbGVjdGVkVmFsdWVzOiBQYXJ0aWFsPFQ+LCBmaWVsZElkOiBzdHJpbmcsIHByb3BlcnR5OiBLKTogdm9pZCB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9YCk7XG5cdGlmIChvcHRpb24pIHtcblx0XHRvcHRpb24udmFsdWUgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpID8/IFwiXCI7XG5cdFx0b3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi52YWx1ZSA9PT0gXCJcIiA/IHVuZGVmaW5lZCA6IG9wdGlvbi52YWx1ZSk7XG5cdFx0XHR1cGRhdGVQcmV2aWV3KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY29ubmVjdENoZWNrYm94PFQsIEsgZXh0ZW5kcyBrZXlvZiBUPihcblx0c2VsZWN0ZWRWYWx1ZXM6IFBhcnRpYWw8VD4sXG5cdGZpZWxkSWQ6IHN0cmluZyxcblx0cHJvcGVydHk6IEssXG5cdGNoYW5nZWQ/OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcblx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1gKTtcblx0aWYgKG9wdGlvbikge1xuXHRcdG9wdGlvbi5jaGVja2VkID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG5cdFx0XHRzZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHksIG9wdGlvbi5jaGVja2VkKTtcblx0XHRcdGlmIChjaGFuZ2VkKSB7XG5cdFx0XHRcdGNoYW5nZWQoKTtcblx0XHRcdH1cblx0XHRcdHVwZGF0ZVByZXZpZXcoKTtcblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjb25uZWN0UmFuZ2U8VCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuXHRzZWxlY3RlZFZhbHVlczogUGFydGlhbDxUPixcblx0ZmllbGRJZDogc3RyaW5nLFxuXHRwcm9wZXJ0eTogSyxcblx0Y2hhbmdlZD86ICgpID0+IHZvaWRcbik6IHZvaWQge1xuXHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KGAjJHtmaWVsZElkfWApO1xuXHRjb25zdCBvcHRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9VmFsdWVgKTtcblxuXHRpZiAob3B0aW9uICYmIG9wdGlvblZhbHVlKSB7XG5cdFx0b3B0aW9uLnZhbHVlQXNOdW1iZXIgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcblx0XHRcdHNldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSwgb3B0aW9uLnZhbHVlQXNOdW1iZXIpO1xuXHRcdFx0b3B0aW9uVmFsdWUudGV4dENvbnRlbnQgPSBvcHRpb24udmFsdWVBc051bWJlci50b1N0cmluZygpO1xuXHRcdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdFx0Y2hhbmdlZCgpO1xuXHRcdFx0fVxuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNvbm5lY3RDb2xvcjxULCBLIGV4dGVuZHMga2V5b2YgVD4oXG5cdHNlbGVjdGVkVmFsdWVzOiBQYXJ0aWFsPFQ+LFxuXHRmaWVsZElkOiBzdHJpbmcsXG5cdHByb3BlcnR5OiBLLFxuXHRjaGFuZ2VkPzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG5cdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oYCMke2ZpZWxkSWR9YCk7XG5cdGNvbnN0IG9wdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihgIyR7ZmllbGRJZH1WYWx1ZWApO1xuXG5cdGlmIChvcHRpb24gJiYgb3B0aW9uVmFsdWUpIHtcblx0XHRvcHRpb24udmFsdWUgPSBnZXRQcm9wZXJ0eShzZWxlY3RlZFZhbHVlcywgcHJvcGVydHkpO1xuXHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gZ2V0UHJvcGVydHkoc2VsZWN0ZWRWYWx1ZXMsIHByb3BlcnR5KTtcblx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcblx0XHRcdHNldFByb3BlcnR5KHNlbGVjdGVkVmFsdWVzLCBwcm9wZXJ0eSwgb3B0aW9uLnZhbHVlKTtcblx0XHRcdG9wdGlvblZhbHVlLnRleHRDb250ZW50ID0gb3B0aW9uLnZhbHVlO1xuXHRcdFx0aWYgKGNoYW5nZWQpIHtcblx0XHRcdFx0Y2hhbmdlZCgpO1xuXHRcdFx0fVxuXHRcdFx0dXBkYXRlUHJldmlldygpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplV2luZG93T3B0aW9ucygpOiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucyB7XG5cdGNvbnN0IGZpbmFsV2luZG93T3B0aW9uczogT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMgPSB7XG5cdFx0bmFtZTogc2VsZWN0ZWRDb21tb25PcHRpb25zLm5hbWUsXG5cdFx0dXJsOiBzZWxlY3RlZENvbW1vbk9wdGlvbnMudXJsLFxuXHRcdGF1dG9TaG93OiBzZWxlY3RlZENvbW1vbk9wdGlvbnMuYXV0b1Nob3dcblx0fTtcblxuXHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMoc2VsZWN0ZWRDb21tb25PcHRpb25zKSBhcyAoa2V5b2YgT3BlbkZpbi5XaW5kb3dDcmVhdGlvbk9wdGlvbnMpW10pIHtcblx0XHRpZiAoc2VsZWN0ZWRDb21tb25PcHRpb25zW3Byb3BdICE9PSBkZWZhdWx0Q29tbW9uT3B0aW9uc1twcm9wXSkge1xuXHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zW3Byb3BdID0gc2VsZWN0ZWRDb21tb25PcHRpb25zW3Byb3BdO1xuXHRcdH1cblx0fVxuXG5cdGlmICghKHNlbGVjdGVkQ29tbW9uT3B0aW9ucy5mcmFtZSA/PyB0cnVlKSkge1xuXHRcdGZvciAoY29uc3QgcHJvcCBvZiBPYmplY3Qua2V5cyhzZWxlY3RlZEZyYW1lbGVzc09wdGlvbnMpIGFzIChrZXlvZiBPcGVuRmluLldpbmRvd0NyZWF0aW9uT3B0aW9ucylbXSkge1xuXHRcdFx0aWYgKHNlbGVjdGVkRnJhbWVsZXNzT3B0aW9uc1twcm9wXSAhPT0gZGVmYXVsdENvbW1vbk9wdGlvbnNbcHJvcF0pIHtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zW3Byb3BdID0gc2VsZWN0ZWRGcmFtZWxlc3NPcHRpb25zW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGZpbmFsUmVnaW9uOiBPcGVuRmluLlJlc2l6ZVJlZ2lvbiA9IHt9O1xuXHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5ib3R0b21SaWdodENvcm5lciAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5ib3R0b21SaWdodENvcm5lcikge1xuXHRcdFx0ZmluYWxSZWdpb24uYm90dG9tUmlnaHRDb3JuZXIgPSBzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5ib3R0b21SaWdodENvcm5lcjtcblx0XHR9XG5cdFx0aWYgKHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpemUgIT09IGRlZmF1bHRSZXNpemVSZWdpb24uc2l6ZSkge1xuXHRcdFx0ZmluYWxSZWdpb24uc2l6ZSA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpemU7XG5cdFx0fVxuXHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcykge1xuXHRcdFx0ZmluYWxSZWdpb24uc2lkZXMgPSB7fTtcblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8uYm90dG9tICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpZGVzPy5ib3R0b20pIHtcblx0XHRcdFx0ZmluYWxSZWdpb24uc2lkZXMuYm90dG9tID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LmJvdHRvbTtcblx0XHRcdH1cblx0XHRcdGlmIChzZWxlY3RlZFJlc2l6ZVJlZ2lvbi5zaWRlcz8ubGVmdCAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaWRlcz8ubGVmdCkge1xuXHRcdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcy5sZWZ0ID0gc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LmxlZnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LnRvcCAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvbi5zaWRlcz8udG9wKSB7XG5cdFx0XHRcdGZpbmFsUmVnaW9uLnNpZGVzLnRvcCA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy50b3A7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb24uc2lkZXM/LnJpZ2h0ICE9PSBkZWZhdWx0UmVzaXplUmVnaW9uLnNpZGVzPy5yaWdodCkge1xuXHRcdFx0XHRmaW5hbFJlZ2lvbi5zaWRlcy5yaWdodCA9IHNlbGVjdGVkUmVzaXplUmVnaW9uLnNpZGVzPy5yaWdodDtcblx0XHRcdH1cblx0XHRcdGlmIChPYmplY3Qua2V5cyhmaW5hbFJlZ2lvbi5zaWRlcykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGRlbGV0ZSBmaW5hbFJlZ2lvbi5zaWRlcztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoT2JqZWN0LmtleXMoZmluYWxSZWdpb24pLmxlbmd0aCA+IDApIHtcblx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24gPSBmaW5hbFJlZ2lvbjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXMoc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlcykgYXMgKGtleW9mIFJlc2l6ZVNpZGVzKVtdKSB7XG5cdFx0XHRpZiAoc2VsZWN0ZWRSZXNpemVSZWdpb25TaWRlc1twcm9wXSAhPT0gZGVmYXVsdFJlc2l6ZVJlZ2lvblNpZGVzW3Byb3BdKSB7XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5yZXNpemVSZWdpb24gPSBmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uID8/IHt9O1xuXHRcdFx0XHRmaW5hbFdpbmRvd09wdGlvbnMucmVzaXplUmVnaW9uLnNpZGVzID0gZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbi5zaWRlcyA/PyB7fTtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLnJlc2l6ZVJlZ2lvbi5zaWRlc1twcm9wXSA9IHNlbGVjdGVkUmVzaXplUmVnaW9uU2lkZXNbcHJvcF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwcm9wIG9mIE9iamVjdC5rZXlzKHNlbGVjdGVkQ29ybmVyUm91bmRpbmcpIGFzIChrZXlvZiBPcGVuRmluLkNvcm5lclJvdW5kaW5nKVtdKSB7XG5cdFx0XHRpZiAoc2VsZWN0ZWRDb3JuZXJSb3VuZGluZ1twcm9wXSAhPT0gZGVmYXVsdENvcm5lclJvdW5kaW5nW3Byb3BdKSB7XG5cdFx0XHRcdGZpbmFsV2luZG93T3B0aW9ucy5jb3JuZXJSb3VuZGluZyA9IGZpbmFsV2luZG93T3B0aW9ucy5jb3JuZXJSb3VuZGluZyA/PyB7fTtcblx0XHRcdFx0ZmluYWxXaW5kb3dPcHRpb25zLmNvcm5lclJvdW5kaW5nW3Byb3BdID0gc2VsZWN0ZWRDb3JuZXJSb3VuZGluZ1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmluYWxXaW5kb3dPcHRpb25zO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcmV2aWV3KCk6IHZvaWQge1xuXHRjb25zdCBwcmV2aWV3RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlld1wiKTtcblx0aWYgKHByZXZpZXdFbGVtKSB7XG5cdFx0cHJldmlld0VsZW0udGV4dENvbnRlbnQgPSBjcmVhdGVQcmV2aWV3KCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJldmlldygpOiBzdHJpbmcge1xuXHRyZXR1cm4gYGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKCR7SlNPTi5zdHJpbmdpZnkoZmluYWxpemVXaW5kb3dPcHRpb25zKCksIHVuZGVmaW5lZCwgXCIgIFwiKX0pO2A7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=