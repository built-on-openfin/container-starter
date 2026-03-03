/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************************!*\
  !*** ./client/src/clipboard-view.ts ***!
  \**************************************/

/**
 * Shared logic for the clipboard permission demo views.
 * Displays resolved permission (queryPermissionForCurrentContext) and Copy/Paste actions.
 */
const SAMPLE_COPY_TEXT = "Domain permissions clipboard sample - copied from HERE Core.";
document.addEventListener("DOMContentLoaded", async () => {
    await initClipboardView();
});
/**
 * Initializes the clipboard view.
 */
async function initClipboardView() {
    const permReadEl = document.querySelector("#permission-read");
    const permWriteEl = document.querySelector("#permission-write");
    const domainRuleEl = document.querySelector("#domain-rule");
    const copyResultEl = document.querySelector("#copy-result");
    const pasteResultEl = document.querySelector("#paste-result");
    const pasteContentEl = document.querySelector("#paste-content");
    const btnCopy = document.querySelector("#btn-copy");
    const btnPaste = document.querySelector("#btn-paste");
    // Resolved permission from current context (domain rules override view/window)
    if (typeof fin !== "undefined" && fin.System) {
        try {
            const [readResult, writeResult] = await Promise.all([
                fin.System.queryPermissionForCurrentContext("Clipboard.readText"),
                fin.System.queryPermissionForCurrentContext("Clipboard.writeText")
            ]);
            if (permReadEl) {
                permReadEl.textContent = `Clipboard.readText: ${readResult?.state ?? "unavailable"}`;
                permReadEl.classList.toggle("success", readResult?.granted);
                permReadEl.classList.toggle("error", !readResult?.granted);
            }
            if (permWriteEl) {
                permWriteEl.textContent = `Clipboard.writeText: ${writeResult?.state ?? "unavailable"}`;
                permWriteEl.classList.toggle("success", writeResult?.granted);
                permWriteEl.classList.toggle("error", !writeResult?.granted);
            }
        }
        catch (e) {
            if (permReadEl) {
                permReadEl.textContent = `Clipboard.readText: error - ${String(e)}`;
            }
            if (permWriteEl) {
                permWriteEl.textContent = `Clipboard.writeText: error - ${String(e)}`;
            }
        }
        // Optional: show which domain rule applied (requires current view identity)
        try {
            const view = fin.View.getCurrentSync();
            const identity = view?.identity;
            if (identity && typeof fin.System.getCurrentDomainSettings === "function") {
                const domainSettings = await fin.System.getCurrentDomainSettings(identity);
                if (domainRuleEl && domainSettings) {
                    const resolved = domainSettings;
                    if (resolved.matchedRules &&
                        Array.isArray(resolved.matchedRules) &&
                        resolved.matchedRules.length > 0) {
                        domainRuleEl.textContent = "Domain rule: matched (this URL is allowed clipboard access)";
                        domainRuleEl.classList.add("success");
                    }
                    else {
                        domainRuleEl.textContent =
                            "Domain rule: default (no match — clipboard blocked by domain default)";
                        domainRuleEl.classList.add("error");
                    }
                }
            }
            else if (domainRuleEl) {
                domainRuleEl.textContent = "Domain rule: unable to resolve (no view identity)";
            }
        }
        catch {
            if (domainRuleEl) {
                domainRuleEl.textContent = "Domain rule: unable to resolve";
            }
        }
    }
    else {
        if (permReadEl) {
            permReadEl.textContent = "Clipboard.readText: fin not available";
        }
        if (permWriteEl) {
            permWriteEl.textContent = "Clipboard.writeText: fin not available";
        }
        if (domainRuleEl) {
            domainRuleEl.textContent = "Domain rule: fin not available";
        }
    }
    // Copy button
    if (btnCopy) {
        btnCopy.addEventListener("click", async () => {
            if (!copyResultEl) {
                return;
            }
            try {
                if (typeof fin !== "undefined" && fin.Clipboard) {
                    await fin.Clipboard.writeText({ data: SAMPLE_COPY_TEXT });
                    copyResultEl.textContent = "Success: text written to clipboard.";
                    copyResultEl.className = "result success";
                }
                else {
                    copyResultEl.textContent = "fin.Clipboard not available.";
                    copyResultEl.className = "result error";
                }
            }
            catch (err) {
                copyResultEl.textContent = `Error: ${String(err)}`;
                copyResultEl.className = "result error";
            }
        });
    }
    // Paste button
    if (btnPaste) {
        btnPaste.addEventListener("click", async () => {
            if (!pasteResultEl || !pasteContentEl) {
                return;
            }
            try {
                if (typeof fin !== "undefined" && fin.Clipboard) {
                    const result = await fin.Clipboard.readText();
                    const text = typeof result === "string" ? result : result?.data ?? "(empty)";
                    pasteContentEl.value = text;
                    pasteResultEl.textContent = "Success: text read from clipboard.";
                    pasteResultEl.className = "result success";
                }
                else {
                    pasteResultEl.textContent = "fin.Clipboard not available.";
                    pasteResultEl.className = "result error";
                }
            }
            catch (err) {
                pasteResultEl.textContent = `Error: ${String(err)}`;
                pasteResultEl.className = "result error";
                pasteContentEl.value = "";
            }
        });
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssSUFBSSxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkMsT0FBTztZQUNSLENBQUM7WUFFRCxJQUFJLENBQUM7Z0JBQ0osSUFBSSxPQUFPLEdBQUcsS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqRCxNQUFNLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlDLE1BQU0sSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRSxNQUE0QixFQUFFLElBQUksSUFBSSxTQUFTLENBQUM7b0JBQ25HLGNBQXNDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDckQsYUFBYSxDQUFDLFdBQVcsR0FBRyxvQ0FBb0MsQ0FBQztvQkFDakUsYUFBYSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDNUMsQ0FBQztxQkFBTSxDQUFDO29CQUNQLGFBQWEsQ0FBQyxXQUFXLEdBQUcsOEJBQThCLENBQUM7b0JBQzNELGFBQWEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO2dCQUMxQyxDQUFDO1lBQ0YsQ0FBQztZQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2QsYUFBYSxDQUFDLFdBQVcsR0FBRyxVQUFVLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNwRCxhQUFhLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztnQkFDeEMsY0FBc0MsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3BELENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWRvbWFpbi1wZXJtaXNzaW9ucy8uL2NsaWVudC9zcmMvY2xpcGJvYXJkLXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaGFyZWQgbG9naWMgZm9yIHRoZSBjbGlwYm9hcmQgcGVybWlzc2lvbiBkZW1vIHZpZXdzLlxuICogRGlzcGxheXMgcmVzb2x2ZWQgcGVybWlzc2lvbiAocXVlcnlQZXJtaXNzaW9uRm9yQ3VycmVudENvbnRleHQpIGFuZCBDb3B5L1Bhc3RlIGFjdGlvbnMuXG4gKi9cblxuY29uc3QgU0FNUExFX0NPUFlfVEVYVCA9IFwiRG9tYWluIHBlcm1pc3Npb25zIGNsaXBib2FyZCBzYW1wbGUgLSBjb3BpZWQgZnJvbSBIRVJFIENvcmUuXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0YXdhaXQgaW5pdENsaXBib2FyZFZpZXcoKTtcbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSBjbGlwYm9hcmQgdmlldy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdENsaXBib2FyZFZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHBlcm1SZWFkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Blcm1pc3Npb24tcmVhZFwiKTtcblx0Y29uc3QgcGVybVdyaXRlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Blcm1pc3Npb24td3JpdGVcIik7XG5cdGNvbnN0IGRvbWFpblJ1bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9tYWluLXJ1bGVcIik7XG5cdGNvbnN0IGNvcHlSZXN1bHRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29weS1yZXN1bHRcIik7XG5cdGNvbnN0IHBhc3RlUmVzdWx0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3RlLXJlc3VsdFwiKTtcblx0Y29uc3QgcGFzdGVDb250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3RlLWNvbnRlbnRcIik7XG5cdGNvbnN0IGJ0bkNvcHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jb3B5XCIpO1xuXHRjb25zdCBidG5QYXN0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXBhc3RlXCIpO1xuXG5cdC8vIFJlc29sdmVkIHBlcm1pc3Npb24gZnJvbSBjdXJyZW50IGNvbnRleHQgKGRvbWFpbiBydWxlcyBvdmVycmlkZSB2aWV3L3dpbmRvdylcblx0aWYgKHR5cGVvZiBmaW4gIT09IFwidW5kZWZpbmVkXCIgJiYgZmluLlN5c3RlbSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBbcmVhZFJlc3VsdCwgd3JpdGVSZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuXHRcdFx0XHRmaW4uU3lzdGVtLnF1ZXJ5UGVybWlzc2lvbkZvckN1cnJlbnRDb250ZXh0KFwiQ2xpcGJvYXJkLnJlYWRUZXh0XCIpLFxuXHRcdFx0XHRmaW4uU3lzdGVtLnF1ZXJ5UGVybWlzc2lvbkZvckN1cnJlbnRDb250ZXh0KFwiQ2xpcGJvYXJkLndyaXRlVGV4dFwiKVxuXHRcdFx0XSk7XG5cdFx0XHRpZiAocGVybVJlYWRFbCkge1xuXHRcdFx0XHRwZXJtUmVhZEVsLnRleHRDb250ZW50ID0gYENsaXBib2FyZC5yZWFkVGV4dDogJHtyZWFkUmVzdWx0Py5zdGF0ZSA/PyBcInVuYXZhaWxhYmxlXCJ9YDtcblx0XHRcdFx0cGVybVJlYWRFbC5jbGFzc0xpc3QudG9nZ2xlKFwic3VjY2Vzc1wiLCByZWFkUmVzdWx0Py5ncmFudGVkKTtcblx0XHRcdFx0cGVybVJlYWRFbC5jbGFzc0xpc3QudG9nZ2xlKFwiZXJyb3JcIiwgIXJlYWRSZXN1bHQ/LmdyYW50ZWQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBlcm1Xcml0ZUVsKSB7XG5cdFx0XHRcdHBlcm1Xcml0ZUVsLnRleHRDb250ZW50ID0gYENsaXBib2FyZC53cml0ZVRleHQ6ICR7d3JpdGVSZXN1bHQ/LnN0YXRlID8/IFwidW5hdmFpbGFibGVcIn1gO1xuXHRcdFx0XHRwZXJtV3JpdGVFbC5jbGFzc0xpc3QudG9nZ2xlKFwic3VjY2Vzc1wiLCB3cml0ZVJlc3VsdD8uZ3JhbnRlZCk7XG5cdFx0XHRcdHBlcm1Xcml0ZUVsLmNsYXNzTGlzdC50b2dnbGUoXCJlcnJvclwiLCAhd3JpdGVSZXN1bHQ/LmdyYW50ZWQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGlmIChwZXJtUmVhZEVsKSB7XG5cdFx0XHRcdHBlcm1SZWFkRWwudGV4dENvbnRlbnQgPSBgQ2xpcGJvYXJkLnJlYWRUZXh0OiBlcnJvciAtICR7U3RyaW5nKGUpfWA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwZXJtV3JpdGVFbCkge1xuXHRcdFx0XHRwZXJtV3JpdGVFbC50ZXh0Q29udGVudCA9IGBDbGlwYm9hcmQud3JpdGVUZXh0OiBlcnJvciAtICR7U3RyaW5nKGUpfWA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gT3B0aW9uYWw6IHNob3cgd2hpY2ggZG9tYWluIHJ1bGUgYXBwbGllZCAocmVxdWlyZXMgY3VycmVudCB2aWV3IGlkZW50aXR5KVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB2aWV3ID0gZmluLlZpZXcuZ2V0Q3VycmVudFN5bmMoKTtcblx0XHRcdGNvbnN0IGlkZW50aXR5ID0gdmlldz8uaWRlbnRpdHk7XG5cdFx0XHRpZiAoaWRlbnRpdHkgJiYgdHlwZW9mIGZpbi5TeXN0ZW0uZ2V0Q3VycmVudERvbWFpblNldHRpbmdzID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0Y29uc3QgZG9tYWluU2V0dGluZ3MgPSBhd2FpdCBmaW4uU3lzdGVtLmdldEN1cnJlbnREb21haW5TZXR0aW5ncyhpZGVudGl0eSk7XG5cdFx0XHRcdGlmIChkb21haW5SdWxlRWwgJiYgZG9tYWluU2V0dGluZ3MpIHtcblx0XHRcdFx0XHRjb25zdCByZXNvbHZlZCA9IGRvbWFpblNldHRpbmdzIGFzIHsgbWF0Y2hlZFJ1bGVzPzogdW5rbm93bltdIH07XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0cmVzb2x2ZWQubWF0Y2hlZFJ1bGVzICYmXG5cdFx0XHRcdFx0XHRBcnJheS5pc0FycmF5KHJlc29sdmVkLm1hdGNoZWRSdWxlcykgJiZcblx0XHRcdFx0XHRcdHJlc29sdmVkLm1hdGNoZWRSdWxlcy5sZW5ndGggPiAwXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRkb21haW5SdWxlRWwudGV4dENvbnRlbnQgPSBcIkRvbWFpbiBydWxlOiBtYXRjaGVkICh0aGlzIFVSTCBpcyBhbGxvd2VkIGNsaXBib2FyZCBhY2Nlc3MpXCI7XG5cdFx0XHRcdFx0XHRkb21haW5SdWxlRWwuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NcIik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRvbWFpblJ1bGVFbC50ZXh0Q29udGVudCA9XG5cdFx0XHRcdFx0XHRcdFwiRG9tYWluIHJ1bGU6IGRlZmF1bHQgKG5vIG1hdGNoIOKAlCBjbGlwYm9hcmQgYmxvY2tlZCBieSBkb21haW4gZGVmYXVsdClcIjtcblx0XHRcdFx0XHRcdGRvbWFpblJ1bGVFbC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGRvbWFpblJ1bGVFbCkge1xuXHRcdFx0XHRkb21haW5SdWxlRWwudGV4dENvbnRlbnQgPSBcIkRvbWFpbiBydWxlOiB1bmFibGUgdG8gcmVzb2x2ZSAobm8gdmlldyBpZGVudGl0eSlcIjtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGlmIChkb21haW5SdWxlRWwpIHtcblx0XHRcdFx0ZG9tYWluUnVsZUVsLnRleHRDb250ZW50ID0gXCJEb21haW4gcnVsZTogdW5hYmxlIHRvIHJlc29sdmVcIjtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKHBlcm1SZWFkRWwpIHtcblx0XHRcdHBlcm1SZWFkRWwudGV4dENvbnRlbnQgPSBcIkNsaXBib2FyZC5yZWFkVGV4dDogZmluIG5vdCBhdmFpbGFibGVcIjtcblx0XHR9XG5cblx0XHRpZiAocGVybVdyaXRlRWwpIHtcblx0XHRcdHBlcm1Xcml0ZUVsLnRleHRDb250ZW50ID0gXCJDbGlwYm9hcmQud3JpdGVUZXh0OiBmaW4gbm90IGF2YWlsYWJsZVwiO1xuXHRcdH1cblxuXHRcdGlmIChkb21haW5SdWxlRWwpIHtcblx0XHRcdGRvbWFpblJ1bGVFbC50ZXh0Q29udGVudCA9IFwiRG9tYWluIHJ1bGU6IGZpbiBub3QgYXZhaWxhYmxlXCI7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ29weSBidXR0b25cblx0aWYgKGJ0bkNvcHkpIHtcblx0XHRidG5Db3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRpZiAoIWNvcHlSZXN1bHRFbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZmluICE9PSBcInVuZGVmaW5lZFwiICYmIGZpbi5DbGlwYm9hcmQpIHtcblx0XHRcdFx0XHRhd2FpdCBmaW4uQ2xpcGJvYXJkLndyaXRlVGV4dCh7IGRhdGE6IFNBTVBMRV9DT1BZX1RFWFQgfSk7XG5cdFx0XHRcdFx0Y29weVJlc3VsdEVsLnRleHRDb250ZW50ID0gXCJTdWNjZXNzOiB0ZXh0IHdyaXR0ZW4gdG8gY2xpcGJvYXJkLlwiO1xuXHRcdFx0XHRcdGNvcHlSZXN1bHRFbC5jbGFzc05hbWUgPSBcInJlc3VsdCBzdWNjZXNzXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29weVJlc3VsdEVsLnRleHRDb250ZW50ID0gXCJmaW4uQ2xpcGJvYXJkIG5vdCBhdmFpbGFibGUuXCI7XG5cdFx0XHRcdFx0Y29weVJlc3VsdEVsLmNsYXNzTmFtZSA9IFwicmVzdWx0IGVycm9yXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb3B5UmVzdWx0RWwudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7U3RyaW5nKGVycil9YDtcblx0XHRcdFx0Y29weVJlc3VsdEVsLmNsYXNzTmFtZSA9IFwicmVzdWx0IGVycm9yXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBQYXN0ZSBidXR0b25cblx0aWYgKGJ0blBhc3RlKSB7XG5cdFx0YnRuUGFzdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGlmICghcGFzdGVSZXN1bHRFbCB8fCAhcGFzdGVDb250ZW50RWwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGZpbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBmaW4uQ2xpcGJvYXJkKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmluLkNsaXBib2FyZC5yZWFkVGV4dCgpO1xuXHRcdFx0XHRcdGNvbnN0IHRleHQgPSB0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiID8gcmVzdWx0IDogKHJlc3VsdCBhcyB7IGRhdGE/OiBzdHJpbmcgfSk/LmRhdGEgPz8gXCIoZW1wdHkpXCI7XG5cdFx0XHRcdFx0KHBhc3RlQ29udGVudEVsIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlID0gdGV4dDtcblx0XHRcdFx0XHRwYXN0ZVJlc3VsdEVsLnRleHRDb250ZW50ID0gXCJTdWNjZXNzOiB0ZXh0IHJlYWQgZnJvbSBjbGlwYm9hcmQuXCI7XG5cdFx0XHRcdFx0cGFzdGVSZXN1bHRFbC5jbGFzc05hbWUgPSBcInJlc3VsdCBzdWNjZXNzXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFzdGVSZXN1bHRFbC50ZXh0Q29udGVudCA9IFwiZmluLkNsaXBib2FyZCBub3QgYXZhaWxhYmxlLlwiO1xuXHRcdFx0XHRcdHBhc3RlUmVzdWx0RWwuY2xhc3NOYW1lID0gXCJyZXN1bHQgZXJyb3JcIjtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHBhc3RlUmVzdWx0RWwudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7U3RyaW5nKGVycil9YDtcblx0XHRcdFx0cGFzdGVSZXN1bHRFbC5jbGFzc05hbWUgPSBcInJlc3VsdCBlcnJvclwiO1xuXHRcdFx0XHQocGFzdGVDb250ZW50RWwgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9