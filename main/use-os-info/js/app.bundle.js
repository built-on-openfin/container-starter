/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", () => {
    initDom().catch((error) => console.error(error));
});
let loggingElement = null;
/**
 * Initialize the DOM components and wire up event handlers.
 */
async function initDom() {
    const btnShowHostSpecs = document.querySelector("#btn-show-host-specs");
    const btnShowOSInfo = document.querySelector("#btn-show-os-info");
    loggingElement = document.querySelector("#logging");
    const btnLoggingClear = document.querySelector("#btnLoggingClear");
    if (btnLoggingClear) {
        btnLoggingClear.addEventListener("click", () => {
            if (loggingElement) {
                loggingElement.textContent = "";
            }
        });
    }
    if (!btnShowHostSpecs || !btnShowOSInfo) {
        console.warn("Missing required buttons");
        return;
    }
    btnShowHostSpecs.addEventListener("click", async () => {
        const hostSpecs = await fin.System.getHostSpecs();
        const hostSpecsText = `Code to execute: \n\nawait fin.System.getHostSpecs();\n\nPermission Required: None\n\nResulting Data:\n\n ${JSON.stringify(hostSpecs, null, 5)}`;
        if (loggingElement) {
            loggingAddEntry(hostSpecsText);
        }
    });
    btnShowOSInfo.addEventListener("click", async () => {
        const osInfo = await fin.System.getOSInfo();
        const osInfoText = `Code to execute:\n\nawait fin.System.getOSInfo();\n\nPermission Required: getOSInfo\n\nPermission Example:
"System": {
	"getOSInfo": true
}\n\nResulting Data:\n\n ${JSON.stringify(osInfo, null, 5)}`;
        if (loggingElement) {
            loggingAddEntry(osInfoText);
        }
    });
}
/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry) {
    if (loggingElement) {
        loggingElement.textContent = `${entry}\n\n`;
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2xELE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxjQUFjLEdBQXVCLElBQUksQ0FBQztBQUM5Qzs7R0FFRztBQUNILEtBQUssVUFBVSxPQUFPO0lBQ3JCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBb0Isc0JBQXNCLENBQUMsQ0FBQztJQUMzRixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFvQixtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JGLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLFVBQVUsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRSxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3JCLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQzlDLElBQUksY0FBYyxFQUFFLENBQUM7Z0JBQ3BCLGNBQWMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDekMsT0FBTztJQUNSLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDckQsTUFBTSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2xELE1BQU0sYUFBYSxHQUFHLDZHQUE2RyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4SyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ3BCLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xELE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QyxNQUFNLFVBQVUsR0FBRzs7OzJCQUdNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTNELElBQUksY0FBYyxFQUFFLENBQUM7WUFDcEIsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDRixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxTQUFTLGVBQWUsQ0FBQyxLQUFhO0lBQ3JDLElBQUksY0FBYyxFQUFFLENBQUM7UUFDcEIsY0FBYyxDQUFDLFdBQVcsR0FBRyxHQUFHLEtBQUssTUFBTSxDQUFDO0lBQzdDLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLW9zLWluZm8vLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdGluaXREb20oKS5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbn0pO1xuXG5sZXQgbG9nZ2luZ0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBjb21wb25lbnRzIGFuZCB3aXJlIHVwIGV2ZW50IGhhbmRsZXJzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBidG5TaG93SG9zdFNwZWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuLXNob3ctaG9zdC1zcGVjc1wiKTtcblx0Y29uc3QgYnRuU2hvd09TSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bi1zaG93LW9zLWluZm9cIik7XG5cdGxvZ2dpbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjbG9nZ2luZ1wiKTtcblxuXHRjb25zdCBidG5Mb2dnaW5nQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkxvZ2dpbmdDbGVhclwiKTtcblx0aWYgKGJ0bkxvZ2dpbmdDbGVhcikge1xuXHRcdGJ0bkxvZ2dpbmdDbGVhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvZ2dpbmdFbGVtZW50KSB7XG5cdFx0XHRcdGxvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGlmICghYnRuU2hvd0hvc3RTcGVjcyB8fCAhYnRuU2hvd09TSW5mbykge1xuXHRcdGNvbnNvbGUud2FybihcIk1pc3NpbmcgcmVxdWlyZWQgYnV0dG9uc1wiKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRidG5TaG93SG9zdFNwZWNzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgaG9zdFNwZWNzID0gYXdhaXQgZmluLlN5c3RlbS5nZXRIb3N0U3BlY3MoKTtcblx0XHRjb25zdCBob3N0U3BlY3NUZXh0ID0gYENvZGUgdG8gZXhlY3V0ZTogXFxuXFxuYXdhaXQgZmluLlN5c3RlbS5nZXRIb3N0U3BlY3MoKTtcXG5cXG5QZXJtaXNzaW9uIFJlcXVpcmVkOiBOb25lXFxuXFxuUmVzdWx0aW5nIERhdGE6XFxuXFxuICR7SlNPTi5zdHJpbmdpZnkoaG9zdFNwZWNzLCBudWxsLCA1KX1gO1xuXHRcdGlmIChsb2dnaW5nRWxlbWVudCkge1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGhvc3RTcGVjc1RleHQpO1xuXHRcdH1cblx0fSk7XG5cblx0YnRuU2hvd09TSW5mby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG9zSW5mbyA9IGF3YWl0IGZpbi5TeXN0ZW0uZ2V0T1NJbmZvKCk7XG5cdFx0Y29uc3Qgb3NJbmZvVGV4dCA9IGBDb2RlIHRvIGV4ZWN1dGU6XFxuXFxuYXdhaXQgZmluLlN5c3RlbS5nZXRPU0luZm8oKTtcXG5cXG5QZXJtaXNzaW9uIFJlcXVpcmVkOiBnZXRPU0luZm9cXG5cXG5QZXJtaXNzaW9uIEV4YW1wbGU6XG5cIlN5c3RlbVwiOiB7XG5cdFwiZ2V0T1NJbmZvXCI6IHRydWVcbn1cXG5cXG5SZXN1bHRpbmcgRGF0YTpcXG5cXG4gJHtKU09OLnN0cmluZ2lmeShvc0luZm8sIG51bGwsIDUpfWA7XG5cblx0XHRpZiAobG9nZ2luZ0VsZW1lbnQpIHtcblx0XHRcdGxvZ2dpbmdBZGRFbnRyeShvc0luZm9UZXh0KTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBlbnRyeSBpbiB0byB0aGUgbG9nZ2luZyB3aW5kb3cuXG4gKiBAcGFyYW0gZW50cnkgVGhlIGVudHJ5IHRvIGFkZC5cbiAqL1xuZnVuY3Rpb24gbG9nZ2luZ0FkZEVudHJ5KGVudHJ5OiBzdHJpbmcpOiB2b2lkIHtcblx0aWYgKGxvZ2dpbmdFbGVtZW50KSB7XG5cdFx0bG9nZ2luZ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtlbnRyeX1cXG5cXG5gO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9