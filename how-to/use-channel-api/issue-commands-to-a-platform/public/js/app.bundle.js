/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
async function initApp() {
    let container = document.getElementById("context-container");
    let fin = window["fin"];
    if (fin !== undefined) {
        let viewOptions = await fin.me.getOptions();
        container.innerText = JSON.stringify(viewOptions.customData);
    }
}
if (document.readyState === "complete") {
    initApp();
}
else {
    window.addEventListener('load', () => {
        initApp();
    });
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNJLEtBQUssVUFBVSxPQUFPO0lBQ2xCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsSUFBRyxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQ2xCLElBQUksV0FBVyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ2hFO0FBQ0wsQ0FBQztBQUNELElBQUcsUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUM7SUFDbEMsT0FBTyxFQUFFLENBQUM7Q0FDYjtLQUFNO0lBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDakMsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQztDQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWNoYW5uZWwtYXBpLWlzc3VlLWNvbW1hbmRzLXRvLWEtcGxhdGZvcm0vLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRBcHAoKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGV4dC1jb250YWluZXJcIik7XHJcbiAgICAgICAgbGV0IGZpbiA9IHdpbmRvd1tcImZpblwiXTtcclxuICAgICAgICBpZihmaW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgdmlld09wdGlvbnMgPSBhd2FpdCBmaW4ubWUuZ2V0T3B0aW9ucygpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkodmlld09wdGlvbnMuY3VzdG9tRGF0YSk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIil7XHJcbiAgICAgICAgaW5pdEFwcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgaW5pdEFwcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=