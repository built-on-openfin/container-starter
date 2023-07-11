/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./client/src/popup.ts ***!
  \*****************************/
const me = fin.me;
document.addEventListener("DOMContentLoaded", init);
async function init() {
    await createGroupButtons();
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQW9CLENBQUM7QUFFcEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXBELEtBQUssVUFBVSxJQUFJO0lBQ2xCLE1BQU0sa0JBQWtCLEVBQUUsQ0FBQztBQUM1QixDQUFDO0FBRUQsS0FBSyxVQUFVLGtCQUFrQjtJQUNoQyxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVELEtBQUssTUFBTSxLQUFLLElBQUksYUFBYSxFQUFFO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDeEQsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDOUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDN0MsTUFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMvQjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtcG9wdXAtd2luZG93LW11bHRpcGxlLXJlc3VsdHMvLi9jbGllbnQvc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lID0gZmluLm1lIGFzIE9wZW5GaW4uV2luZG93O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0YXdhaXQgY3JlYXRlR3JvdXBCdXR0b25zKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdyb3VwQnV0dG9ucygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgeyBjdXN0b21EYXRhOiBjb250ZXh0R3JvdXBzIH0gPSBhd2FpdCBtZS5nZXRPcHRpb25zKCk7XG5cdGZvciAoY29uc3QgZ3JvdXAgb2YgY29udGV4dEdyb3Vwcykge1xuXHRcdGNvbnN0IGdyb3VwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRncm91cEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gZ3JvdXAuZGlzcGxheU1ldGFkYXRhLmNvbG9yO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG5cdFx0Z3JvdXBCdG4uc3R5bGUud2lkdGggPSBcIjIwcHhcIjtcblx0XHRncm91cEJ0bi5zdHlsZS5oZWlnaHQgPSBcIjIwcHhcIjtcblx0XHRncm91cEJ0bi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMXJlbVwiO1xuXHRcdGNvbnNvbGUubG9nKGdyb3VwKTtcblx0XHRncm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbWUuZGlzcGF0Y2hQb3B1cFJlc3VsdChncm91cCk7XG5cdFx0fSk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoZ3JvdXBCdG4pO1xuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=