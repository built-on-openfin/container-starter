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
function beforeUnloadListener(e) {
    e.preventDefault();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDbEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV4RCxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUU7UUFDMUIsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7S0FDM0I7SUFDRCxJQUFJLFVBQVUsSUFBSSxTQUFTLEVBQUU7UUFDNUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7S0FDakM7SUFFRCxJQUFJLFNBQVMsRUFBRTtRQUNkLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QyxJQUFLLEtBQUssQ0FBQyxNQUE4QixDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsQ0FBQzthQUM5RDtpQkFBTTtnQkFDTixNQUFNLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUM7YUFDakU7UUFDRixDQUFDLENBQUMsQ0FBQztLQUNIO0FBQ0YsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLG9CQUFvQixDQUFDLENBQVE7SUFDckMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJuLWJlZm9yZS1jbG9zaW5nLWRpYWxvZy8uL2NsaWVudC9zcmMvdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cdGNvbnN0IHZpZXdUaXRsZSA9IHBhcmFtcy5nZXQoXCJ0aXRsZVwiKTtcblx0Y29uc3Qgdmlld0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlldy10aXRsZVwiKTtcblx0Y29uc3QgdGVzdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0LWlucHV0XCIpO1xuXG5cdGlmIChkb2N1bWVudCAmJiB2aWV3VGl0bGUpIHtcblx0XHRkb2N1bWVudC50aXRsZSA9IHZpZXdUaXRsZTtcblx0fVxuXHRpZiAodmlld0hlYWRlciAmJiB2aWV3VGl0bGUpIHtcblx0XHR2aWV3SGVhZGVyLmlubmVySFRNTCA9IHZpZXdUaXRsZTtcblx0fVxuXG5cdGlmICh0ZXN0SW5wdXQpIHtcblx0XHR0ZXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKChldmVudC50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgIT09IFwiXCIpIHtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgYmVmb3JlVW5sb2FkTGlzdGVuZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgYmVmb3JlVW5sb2FkTGlzdGVuZXIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gYmVmb3JlVW5sb2FkTGlzdGVuZXIoZTogRXZlbnQpOiB2b2lkIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9