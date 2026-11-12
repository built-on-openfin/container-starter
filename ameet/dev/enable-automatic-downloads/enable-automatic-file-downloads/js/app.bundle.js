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
const MODE_INFO = {
    manifest: {
        tag: "Automatic downloads enabled via the manifest.",
        description: "The manifest contains a platform.domainSettings rule with a downloadSettings behavior of 'no-prompt'. Click Download and the file is saved straight to the download location without a Save As dialog."
    },
    code: {
        tag: "Automatic downloads enabled via code.",
        description: "The manifest does not configure downloads. Click Download to see the Save As dialog, then click 'Enable automatic downloads' and click Download again to see the file saved without a prompt."
    },
    prompt: {
        tag: "Automatic downloads not enabled.",
        description: "Nothing is configured so the default behavior applies. Click Download and the Save As dialog is shown so the user can choose where to save the file."
    }
};
document.addEventListener("DOMContentLoaded", () => {
    initDom().catch((error) => console.error(error));
});
/**
 * Initialize the DOM components and wire up event handlers.
 */
async function initDom() {
    const mode = getMode();
    const tag = document.querySelector("#tag");
    const description = document.querySelector("#description");
    const btnTriggerDownload = document.querySelector("#btn-trigger-download");
    if (tag) {
        tag.textContent = MODE_INFO[mode].tag;
    }
    if (description) {
        description.textContent = MODE_INFO[mode].description;
    }
    btnTriggerDownload?.addEventListener("click", () => {
        const downloadUrl = new URL("../assets/example-download.txt", window.location.href).toString();
        triggerDownload(downloadUrl);
    });
    // Listen for the download events on this view so we can see what happened to the file.
    const view = fin.View.getCurrentSync();
    await view.on("file-download-started", (event) => {
        log(`Started: ${event.originalFileName}`);
    });
    await view.on("file-download-completed", (event) => {
        log(`Completed (${event.state}): ${event.fileName}`);
    });
    if (mode === "code") {
        await initCodeControls();
    }
}
/**
 * Show and wire up the buttons that change the domain settings at runtime.
 */
async function initCodeControls() {
    const codeControls = document.querySelector("#code-controls");
    const btnEnableAuto = document.querySelector("#btn-enable-auto");
    const btnDisableAuto = document.querySelector("#btn-disable-auto");
    codeControls?.classList.remove("hidden");
    btnEnableAuto?.addEventListener("click", async () => {
        await setDownloadBehavior("no-prompt");
    });
    btnDisableAuto?.addEventListener("click", async () => {
        await setDownloadBehavior("prompt");
    });
    await showDomainSettings();
}
/**
 * Update the platform's domain settings so that downloads started from pages on this
 * origin use the given behavior.
 * @param behavior 'no-prompt' to save automatically or 'prompt' to show the Save As dialog.
 */
async function setDownloadBehavior(behavior) {
    try {
        const domainSettings = {
            rules: [
                {
                    // The pages this rule applies to.
                    match: [`${window.location.origin}/*`],
                    options: {
                        downloadSettings: {
                            rules: [
                                {
                                    // The files (by download url) this rule applies to.
                                    match: ["<all_urls>"],
                                    behavior
                                }
                            ]
                        }
                    }
                }
            ]
        };
        await fin.System.setDomainSettings(domainSettings);
        log(`Download behavior set to '${behavior}'.`);
        await showDomainSettings();
    }
    catch (error) {
        log(`Failed to set domain settings: ${formatError(error)}`);
    }
}
/**
 * Display the current domain settings for the platform.
 */
async function showDomainSettings() {
    const domainSettingsElement = document.querySelector("#domain-settings");
    if (!domainSettingsElement) {
        return;
    }
    try {
        const domainSettings = await fin.System.getDomainSettings();
        domainSettingsElement.textContent = JSON.stringify(domainSettings, undefined, 2);
    }
    catch (error) {
        domainSettingsElement.textContent = `Failed to get domain settings: ${formatError(error)}`;
    }
}
/**
 * Get the mode from the url query string.
 * @returns The mode for this view.
 */
function getMode() {
    const mode = new URLSearchParams(window.location.search).get("mode");
    return mode === "code" || mode === "prompt" ? mode : "manifest";
}
/**
 * Trigger a download via an `<a download>` click.
 * @param downloadUrl URL to download.
 */
function triggerDownload(downloadUrl) {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "example-download.txt";
    link.rel = "noopener";
    link.style.display = "none";
    document.body.append(link);
    link.click();
    link.remove();
    log(`Triggered download: ${downloadUrl}`);
}
/**
 * Add a message to the on screen log.
 * @param message The message to log.
 */
function log(message) {
    const logElement = document.querySelector("#log");
    if (logElement) {
        logElement.textContent = `${new Date().toLocaleTimeString()} ${message}\n${logElement.textContent ?? ""}`;
    }
}
/**
 * Format an error for display.
 * @param error The error to format.
 * @returns The formatted error.
 */
function formatError(error) {
    return error instanceof Error ? error.message : String(error);
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsTUFBTSxDQUFDO0lBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNkLEdBQUcsQ0FBQyx1QkFBdUIsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxHQUFHLENBQUMsT0FBZTtJQUMzQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELElBQUksVUFBVSxFQUFFLENBQUM7UUFDaEIsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxPQUFPLEtBQUssVUFBVSxDQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUMzRyxDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLFdBQVcsQ0FBQyxLQUFjO0lBQ2xDLE9BQU8sS0FBSyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9ELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmFibGUtYXV0b21hdGljLWZpbGUtZG93bmxvYWRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuYWJsZS1hdXRvbWF0aWMtZmlsZS1kb3dubG9hZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbmFibGUtYXV0b21hdGljLWZpbGUtZG93bmxvYWRzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuLyoqXG4gKiBUaGUgc2NlbmFyaW8gdGhpcyB2aWV3IGlzIGRlbW9uc3RyYXRpbmcsIHBhc3NlZCBvbiB0aGUgdXJsIGJ5IGVhY2ggbWFuaWZlc3QuXG4gKiAtIG1hbmlmZXN0OiBhdXRvbWF0aWMgZG93bmxvYWRzIGFyZSBlbmFibGVkIGJ5IGBwbGF0Zm9ybS5kb21haW5TZXR0aW5nc2AgaW4gbWFuaWZlc3QuZmluLmpzb24uXG4gKiAtIGNvZGU6IGF1dG9tYXRpYyBkb3dubG9hZHMgYXJlIGVuYWJsZWQvZGlzYWJsZWQgYXQgcnVudGltZSB3aXRoIGBmaW4uU3lzdGVtLnNldERvbWFpblNldHRpbmdzYC5cbiAqIC0gcHJvbXB0OiBub3RoaW5nIGlzIGNvbmZpZ3VyZWQgc28gdGhlIGRlZmF1bHQgU2F2ZSBBcyBkaWFsb2cgaXMgc2hvd24uXG4gKi9cbnR5cGUgTW9kZSA9IFwibWFuaWZlc3RcIiB8IFwiY29kZVwiIHwgXCJwcm9tcHRcIjtcblxuY29uc3QgTU9ERV9JTkZPOiB7IFtrZXkgaW4gTW9kZV06IHsgdGFnOiBzdHJpbmc7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfSB9ID0ge1xuXHRtYW5pZmVzdDoge1xuXHRcdHRhZzogXCJBdXRvbWF0aWMgZG93bmxvYWRzIGVuYWJsZWQgdmlhIHRoZSBtYW5pZmVzdC5cIixcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFwiVGhlIG1hbmlmZXN0IGNvbnRhaW5zIGEgcGxhdGZvcm0uZG9tYWluU2V0dGluZ3MgcnVsZSB3aXRoIGEgZG93bmxvYWRTZXR0aW5ncyBiZWhhdmlvciBvZiAnbm8tcHJvbXB0Jy4gQ2xpY2sgRG93bmxvYWQgYW5kIHRoZSBmaWxlIGlzIHNhdmVkIHN0cmFpZ2h0IHRvIHRoZSBkb3dubG9hZCBsb2NhdGlvbiB3aXRob3V0IGEgU2F2ZSBBcyBkaWFsb2cuXCJcblx0fSxcblx0Y29kZToge1xuXHRcdHRhZzogXCJBdXRvbWF0aWMgZG93bmxvYWRzIGVuYWJsZWQgdmlhIGNvZGUuXCIsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcIlRoZSBtYW5pZmVzdCBkb2VzIG5vdCBjb25maWd1cmUgZG93bmxvYWRzLiBDbGljayBEb3dubG9hZCB0byBzZWUgdGhlIFNhdmUgQXMgZGlhbG9nLCB0aGVuIGNsaWNrICdFbmFibGUgYXV0b21hdGljIGRvd25sb2FkcycgYW5kIGNsaWNrIERvd25sb2FkIGFnYWluIHRvIHNlZSB0aGUgZmlsZSBzYXZlZCB3aXRob3V0IGEgcHJvbXB0LlwiXG5cdH0sXG5cdHByb21wdDoge1xuXHRcdHRhZzogXCJBdXRvbWF0aWMgZG93bmxvYWRzIG5vdCBlbmFibGVkLlwiLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XCJOb3RoaW5nIGlzIGNvbmZpZ3VyZWQgc28gdGhlIGRlZmF1bHQgYmVoYXZpb3IgYXBwbGllcy4gQ2xpY2sgRG93bmxvYWQgYW5kIHRoZSBTYXZlIEFzIGRpYWxvZyBpcyBzaG93biBzbyB0aGUgdXNlciBjYW4gY2hvb3NlIHdoZXJlIHRvIHNhdmUgdGhlIGZpbGUuXCJcblx0fVxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRpbml0RG9tKCkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gY29tcG9uZW50cyBhbmQgd2lyZSB1cCBldmVudCBoYW5kbGVycy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgbW9kZSA9IGdldE1vZGUoKTtcblx0Y29uc3QgdGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjdGFnXCIpO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2Rlc2NyaXB0aW9uXCIpO1xuXHRjb25zdCBidG5UcmlnZ2VyRG93bmxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG4tdHJpZ2dlci1kb3dubG9hZFwiKTtcblxuXHRpZiAodGFnKSB7XG5cdFx0dGFnLnRleHRDb250ZW50ID0gTU9ERV9JTkZPW21vZGVdLnRhZztcblx0fVxuXHRpZiAoZGVzY3JpcHRpb24pIHtcblx0XHRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IE1PREVfSU5GT1ttb2RlXS5kZXNjcmlwdGlvbjtcblx0fVxuXG5cdGJ0blRyaWdnZXJEb3dubG9hZD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBkb3dubG9hZFVybCA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZXhhbXBsZS1kb3dubG9hZC50eHRcIiwgd2luZG93LmxvY2F0aW9uLmhyZWYpLnRvU3RyaW5nKCk7XG5cdFx0dHJpZ2dlckRvd25sb2FkKGRvd25sb2FkVXJsKTtcblx0fSk7XG5cblx0Ly8gTGlzdGVuIGZvciB0aGUgZG93bmxvYWQgZXZlbnRzIG9uIHRoaXMgdmlldyBzbyB3ZSBjYW4gc2VlIHdoYXQgaGFwcGVuZWQgdG8gdGhlIGZpbGUuXG5cdGNvbnN0IHZpZXcgPSBmaW4uVmlldy5nZXRDdXJyZW50U3luYygpO1xuXHRhd2FpdCB2aWV3Lm9uKFwiZmlsZS1kb3dubG9hZC1zdGFydGVkXCIsIChldmVudCkgPT4ge1xuXHRcdGxvZyhgU3RhcnRlZDogJHtldmVudC5vcmlnaW5hbEZpbGVOYW1lfWApO1xuXHR9KTtcblx0YXdhaXQgdmlldy5vbihcImZpbGUtZG93bmxvYWQtY29tcGxldGVkXCIsIChldmVudCkgPT4ge1xuXHRcdGxvZyhgQ29tcGxldGVkICgke2V2ZW50LnN0YXRlfSk6ICR7ZXZlbnQuZmlsZU5hbWV9YCk7XG5cdH0pO1xuXG5cdGlmIChtb2RlID09PSBcImNvZGVcIikge1xuXHRcdGF3YWl0IGluaXRDb2RlQ29udHJvbHMoKTtcblx0fVxufVxuXG4vKipcbiAqIFNob3cgYW5kIHdpcmUgdXAgdGhlIGJ1dHRvbnMgdGhhdCBjaGFuZ2UgdGhlIGRvbWFpbiBzZXR0aW5ncyBhdCBydW50aW1lLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0Q29kZUNvbnRyb2xzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBjb2RlQ29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNjb2RlLWNvbnRyb2xzXCIpO1xuXHRjb25zdCBidG5FbmFibGVBdXRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuLWVuYWJsZS1hdXRvXCIpO1xuXHRjb25zdCBidG5EaXNhYmxlQXV0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1kaXNhYmxlLWF1dG9cIik7XG5cblx0Y29kZUNvbnRyb2xzPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cdGJ0bkVuYWJsZUF1dG8/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgc2V0RG93bmxvYWRCZWhhdmlvcihcIm5vLXByb21wdFwiKTtcblx0fSk7XG5cblx0YnRuRGlzYWJsZUF1dG8/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgc2V0RG93bmxvYWRCZWhhdmlvcihcInByb21wdFwiKTtcblx0fSk7XG5cblx0YXdhaXQgc2hvd0RvbWFpblNldHRpbmdzKCk7XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBwbGF0Zm9ybSdzIGRvbWFpbiBzZXR0aW5ncyBzbyB0aGF0IGRvd25sb2FkcyBzdGFydGVkIGZyb20gcGFnZXMgb24gdGhpc1xuICogb3JpZ2luIHVzZSB0aGUgZ2l2ZW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0gYmVoYXZpb3IgJ25vLXByb21wdCcgdG8gc2F2ZSBhdXRvbWF0aWNhbGx5IG9yICdwcm9tcHQnIHRvIHNob3cgdGhlIFNhdmUgQXMgZGlhbG9nLlxuICovXG5hc3luYyBmdW5jdGlvbiBzZXREb3dubG9hZEJlaGF2aW9yKGJlaGF2aW9yOiBPcGVuRmluLkZpbGVEb3dubG9hZEJlaGF2aW9yKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgZG9tYWluU2V0dGluZ3M6IE9wZW5GaW4uRG9tYWluU2V0dGluZ3MgPSB7XG5cdFx0XHRydWxlczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gVGhlIHBhZ2VzIHRoaXMgcnVsZSBhcHBsaWVzIHRvLlxuXHRcdFx0XHRcdG1hdGNoOiBbYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vKmBdLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdGRvd25sb2FkU2V0dGluZ3M6IHtcblx0XHRcdFx0XHRcdFx0cnVsZXM6IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBUaGUgZmlsZXMgKGJ5IGRvd25sb2FkIHVybCkgdGhpcyBydWxlIGFwcGxpZXMgdG8uXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXRjaDogW1wiPGFsbF91cmxzPlwiXSxcblx0XHRcdFx0XHRcdFx0XHRcdGJlaGF2aW9yXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fTtcblxuXHRcdGF3YWl0IGZpbi5TeXN0ZW0uc2V0RG9tYWluU2V0dGluZ3MoZG9tYWluU2V0dGluZ3MpO1xuXHRcdGxvZyhgRG93bmxvYWQgYmVoYXZpb3Igc2V0IHRvICcke2JlaGF2aW9yfScuYCk7XG5cdFx0YXdhaXQgc2hvd0RvbWFpblNldHRpbmdzKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bG9nKGBGYWlsZWQgdG8gc2V0IGRvbWFpbiBzZXR0aW5nczogJHtmb3JtYXRFcnJvcihlcnJvcil9YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXNwbGF5IHRoZSBjdXJyZW50IGRvbWFpbiBzZXR0aW5ncyBmb3IgdGhlIHBsYXRmb3JtLlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93RG9tYWluU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGRvbWFpblNldHRpbmdzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI2RvbWFpbi1zZXR0aW5nc1wiKTtcblx0aWYgKCFkb21haW5TZXR0aW5nc0VsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dHJ5IHtcblx0XHRjb25zdCBkb21haW5TZXR0aW5ncyA9IGF3YWl0IGZpbi5TeXN0ZW0uZ2V0RG9tYWluU2V0dGluZ3MoKTtcblx0XHRkb21haW5TZXR0aW5nc0VsZW1lbnQudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShkb21haW5TZXR0aW5ncywgdW5kZWZpbmVkLCAyKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRkb21haW5TZXR0aW5nc0VsZW1lbnQudGV4dENvbnRlbnQgPSBgRmFpbGVkIHRvIGdldCBkb21haW4gc2V0dGluZ3M6ICR7Zm9ybWF0RXJyb3IoZXJyb3IpfWA7XG5cdH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1vZGUgZnJvbSB0aGUgdXJsIHF1ZXJ5IHN0cmluZy5cbiAqIEByZXR1cm5zIFRoZSBtb2RlIGZvciB0aGlzIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGdldE1vZGUoKTogTW9kZSB7XG5cdGNvbnN0IG1vZGUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChcIm1vZGVcIik7XG5cdHJldHVybiBtb2RlID09PSBcImNvZGVcIiB8fCBtb2RlID09PSBcInByb21wdFwiID8gbW9kZSA6IFwibWFuaWZlc3RcIjtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGEgZG93bmxvYWQgdmlhIGFuIGA8YSBkb3dubG9hZD5gIGNsaWNrLlxuICogQHBhcmFtIGRvd25sb2FkVXJsIFVSTCB0byBkb3dubG9hZC5cbiAqL1xuZnVuY3Rpb24gdHJpZ2dlckRvd25sb2FkKGRvd25sb2FkVXJsOiBzdHJpbmcpOiB2b2lkIHtcblx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsaW5rLmhyZWYgPSBkb3dubG9hZFVybDtcblx0bGluay5kb3dubG9hZCA9IFwiZXhhbXBsZS1kb3dubG9hZC50eHRcIjtcblx0bGluay5yZWwgPSBcIm5vb3BlbmVyXCI7XG5cdGxpbmsuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChsaW5rKTtcblx0bGluay5jbGljaygpO1xuXHRsaW5rLnJlbW92ZSgpO1xuXHRsb2coYFRyaWdnZXJlZCBkb3dubG9hZDogJHtkb3dubG9hZFVybH1gKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBtZXNzYWdlIHRvIHRoZSBvbiBzY3JlZW4gbG9nLlxuICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICovXG5mdW5jdGlvbiBsb2cobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG5cdGNvbnN0IGxvZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNsb2dcIik7XG5cdGlmIChsb2dFbGVtZW50KSB7XG5cdFx0bG9nRWxlbWVudC50ZXh0Q29udGVudCA9IGAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9ICR7bWVzc2FnZX1cXG4ke2xvZ0VsZW1lbnQudGV4dENvbnRlbnQgPz8gXCJcIn1gO1xuXHR9XG59XG5cbi8qKlxuICogRm9ybWF0IGFuIGVycm9yIGZvciBkaXNwbGF5LlxuICogQHBhcmFtIGVycm9yIFRoZSBlcnJvciB0byBmb3JtYXQuXG4gKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBmb3JtYXRFcnJvcihlcnJvcjogdW5rbm93bik6IHN0cmluZyB7XG5cdHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFN0cmluZyhlcnJvcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=