/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./client/src/popup.ts ***!
  \*****************************/

const me = fin.me;
document.addEventListener("DOMContentLoaded", initDom);
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    await createGroupButtons();
}
/**
 * Create the group buttons.
 */
async function createGroupButtons() {
    const { customData: contextGroups } = await me.getOptions();
    for (const group of contextGroups) {
        const groupBtn = document.createElement("button");
        groupBtn.style.background = group.displayMetadata.color;
        groupBtn.style.border = "none";
        groupBtn.style.borderRadius = "50%";
        groupBtn.style.width = "20px";
        groupBtn.style.height = "20px";
        groupBtn.style.marginRight = "1rem";
        console.log(group);
        groupBtn.addEventListener("click", async () => {
            await me.dispatchPopupResult(group);
        });
        document.body.append(groupBtn);
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBb0IsQ0FBQztBQUVwQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFdkQ7O0dBRUc7QUFDSCxLQUFLLFVBQVUsT0FBTztJQUNyQixNQUFNLGtCQUFrQixFQUFFLENBQUM7QUFDNUIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsS0FBSyxVQUFVLGtCQUFrQjtJQUNoQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVELEtBQUssTUFBTSxLQUFLLElBQUksYUFBYSxFQUFFLENBQUM7UUFDbkMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUN4RCxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDL0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM5QixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDL0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUM3QyxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXBvcHVwLXdpbmRvdy1tdWx0aXBsZS1yZXN1bHRzLy4vY2xpZW50L3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZSA9IGZpbi5tZSBhcyBPcGVuRmluLldpbmRvdztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdERvbSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRhd2FpdCBjcmVhdGVHcm91cEJ1dHRvbnMoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGdyb3VwIGJ1dHRvbnMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdyb3VwQnV0dG9ucygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgeyBjdXN0b21EYXRhOiBjb250ZXh0R3JvdXBzIH0gPSBhd2FpdCBtZS5nZXRPcHRpb25zKCk7XG5cdGZvciAoY29uc3QgZ3JvdXAgb2YgY29udGV4dEdyb3Vwcykge1xuXHRcdGNvbnN0IGdyb3VwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRncm91cEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gZ3JvdXAuZGlzcGxheU1ldGFkYXRhLmNvbG9yO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG5cdFx0Z3JvdXBCdG4uc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcblx0XHRncm91cEJ0bi5zdHlsZS5oZWlnaHQgPSBcIjIwcHhcIjtcblx0XHRncm91cEJ0bi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMXJlbVwiO1xuXHRcdGNvbnNvbGUubG9nKGdyb3VwKTtcblx0XHRncm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbWUuZGlzcGF0Y2hQb3B1cFJlc3VsdChncm91cCk7XG5cdFx0fSk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoZ3JvdXBCdG4pO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=