/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./client/src/view.ts ***!
  \****************************/

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const viewTitle = params.get("title");
    const viewHeader = document.querySelector("#view-title");
    const testInput = document.querySelector("#test-input");
    if (document && viewTitle) {
        document.title = viewTitle;
    }
    if (viewHeader && viewTitle) {
        viewHeader.innerHTML = viewTitle;
    }
    if (testInput) {
        testInput.addEventListener("input", (event) => {
            if (event.target.value !== "") {
                window.addEventListener("beforeunload", beforeUnloadListener);
            }
            else {
                window.removeEventListener("beforeunload", beforeUnloadListener);
            }
        });
    }
});
/**
 * Handle the before unload listener.
 * @param e The event to handle.
 */
function beforeUnloadListener(e) {
    e.preventDefault();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDbEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV4RCxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUMzQixRQUFRLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxVQUFVLElBQUksU0FBUyxFQUFFLENBQUM7UUFDN0IsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksU0FBUyxFQUFFLENBQUM7UUFDZixTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDN0MsSUFBSyxLQUFLLENBQUMsTUFBOEIsQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ3hELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUMvRCxDQUFDO2lCQUFNLENBQUM7Z0JBQ1AsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQztBQUVIOzs7R0FHRztBQUNILFNBQVMsb0JBQW9CLENBQUMsQ0FBUTtJQUNyQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcm4tYmVmb3JlLWNsb3NpbmctZGlhbG9nLy4vY2xpZW50L3NyYy92aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblx0Y29uc3Qgdmlld1RpdGxlID0gcGFyYW1zLmdldChcInRpdGxlXCIpO1xuXHRjb25zdCB2aWV3SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3LXRpdGxlXCIpO1xuXHRjb25zdCB0ZXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlc3QtaW5wdXRcIik7XG5cblx0aWYgKGRvY3VtZW50ICYmIHZpZXdUaXRsZSkge1xuXHRcdGRvY3VtZW50LnRpdGxlID0gdmlld1RpdGxlO1xuXHR9XG5cdGlmICh2aWV3SGVhZGVyICYmIHZpZXdUaXRsZSkge1xuXHRcdHZpZXdIZWFkZXIuaW5uZXJIVE1MID0gdmlld1RpdGxlO1xuXHR9XG5cblx0aWYgKHRlc3RJbnB1dCkge1xuXHRcdHRlc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoKGV2ZW50LnRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSAhPT0gXCJcIikge1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBiZWZvcmVVbmxvYWRMaXN0ZW5lcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBiZWZvcmVVbmxvYWRMaXN0ZW5lcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEhhbmRsZSB0aGUgYmVmb3JlIHVubG9hZCBsaXN0ZW5lci5cbiAqIEBwYXJhbSBlIFRoZSBldmVudCB0byBoYW5kbGUuXG4gKi9cbmZ1bmN0aW9uIGJlZm9yZVVubG9hZExpc3RlbmVyKGU6IEV2ZW50KTogdm9pZCB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==