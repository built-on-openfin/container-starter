/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
        viewHeader.textContent = viewTitle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXhELElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFVBQVUsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUM3QixVQUFVLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNmLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QyxJQUFLLEtBQUssQ0FBQyxNQUEyQixDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztnQkFDckQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1lBQy9ELENBQUM7aUJBQU0sQ0FBQztnQkFDUCxNQUFNLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDbEUsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUg7OztHQUdHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBQyxDQUFRO0lBQ3JDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fybi1iZWZvcmUtY2xvc2luZy1kaWFsb2cvLi9jbGllbnQvc3JjL3ZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXHRjb25zdCB2aWV3VGl0bGUgPSBwYXJhbXMuZ2V0KFwidGl0bGVcIik7XG5cdGNvbnN0IHZpZXdIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZXctdGl0bGVcIik7XG5cdGNvbnN0IHRlc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdC1pbnB1dFwiKTtcblxuXHRpZiAoZG9jdW1lbnQgJiYgdmlld1RpdGxlKSB7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSB2aWV3VGl0bGU7XG5cdH1cblx0aWYgKHZpZXdIZWFkZXIgJiYgdmlld1RpdGxlKSB7XG5cdFx0dmlld0hlYWRlci50ZXh0Q29udGVudCA9IHZpZXdUaXRsZTtcblx0fVxuXG5cdGlmICh0ZXN0SW5wdXQpIHtcblx0XHR0ZXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgIT09IFwiXCIpIHtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgYmVmb3JlVW5sb2FkTGlzdGVuZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgYmVmb3JlVW5sb2FkTGlzdGVuZXIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcblxuLyoqXG4gKiBIYW5kbGUgdGhlIGJlZm9yZSB1bmxvYWQgbGlzdGVuZXIuXG4gKiBAcGFyYW0gZSBUaGUgZXZlbnQgdG8gaGFuZGxlLlxuICovXG5mdW5jdGlvbiBiZWZvcmVVbmxvYWRMaXN0ZW5lcihlOiBFdmVudCk6IHZvaWQge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9