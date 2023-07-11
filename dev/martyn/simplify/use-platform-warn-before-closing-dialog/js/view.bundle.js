/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./client/src/view.ts ***!
  \****************************/
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const viewTitle = params.get("title");
    const viewHeader = document.querySelector("#view-title");
    const testInput = document.querySelector("#test-input");
    document.title = viewTitle;
    viewHeader.innerHTML = viewTitle;
    testInput.addEventListener("input", (event) => {
        if (event.target.value !== "") {
            window.addEventListener("beforeunload", beforeUnloadListener);
        }
        else {
            window.removeEventListener("beforeunload", beforeUnloadListener);
        }
    });
});
function beforeUnloadListener(e) {
    e.preventDefault();
    e.returnValue = "";
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2xELE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0QsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFeEQsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDM0IsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFFakMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQzdDLElBQUssS0FBSyxDQUFDLE1BQThCLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUN2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNOLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUNqRTtJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLG9CQUFvQixDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJuLWJlZm9yZS1jbG9zaW5nLWRpYWxvZy8uL2NsaWVudC9zcmMvdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cdGNvbnN0IHZpZXdUaXRsZSA9IHBhcmFtcy5nZXQoXCJ0aXRsZVwiKTtcblx0Y29uc3Qgdmlld0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlldy10aXRsZVwiKTtcblx0Y29uc3QgdGVzdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0LWlucHV0XCIpO1xuXG5cdGRvY3VtZW50LnRpdGxlID0gdmlld1RpdGxlO1xuXHR2aWV3SGVhZGVyLmlubmVySFRNTCA9IHZpZXdUaXRsZTtcblxuXHR0ZXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuXHRcdGlmICgoZXZlbnQudGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBiZWZvcmVVbmxvYWRMaXN0ZW5lcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGJlZm9yZVVubG9hZExpc3RlbmVyKTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbmZ1bmN0aW9uIGJlZm9yZVVubG9hZExpc3RlbmVyKGUpOiB2b2lkIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRlLnJldHVyblZhbHVlID0gXCJcIjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==