/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./client/src/default-platform-window.ts ***!
  \***********************************************/
window.addEventListener("DOMContentLoaded", async () => {
    const platform = fin.Platform.getCurrentSync();
    const me = fin.me;
    const CONTAINER_ID = "layout-container";
    await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    const minimizeBtn = document.querySelector("#minimize-button");
    minimizeBtn.addEventListener("click", async () => {
        await me.minimize().catch(console.error);
    });
    const maximizeBtn = document.querySelector("#expand-button");
    maximizeBtn.addEventListener("click", async () => {
        await maxOrRestore().catch(console.error);
    });
    const closeBtn = document.querySelector("#close-button");
    closeBtn.addEventListener("click", async (e) => {
        await me.close();
    });
    async function maxOrRestore() {
        if ((await me.getState()) === "normal") {
            return me.maximize();
        }
        return me.restore();
    }
    await me.on("child-view-created", async (e) => {
        const viewOptions = {
            url: e.childOptions.url,
            target: fin.me.identity
        };
        await platform.createView(viewOptions, fin.me.identity);
    });
    await me.on("view-child-view-created", async (e) => {
        const viewOptions = {
            url: e.childOptions.url,
            target: fin.me.identity
        };
        await platform.createView(viewOptions, fin.me.identity);
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1wbGF0Zm9ybS13aW5kb3cuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3RELE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0MsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQW9CLENBQUM7SUFDcEMsTUFBTSxZQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFDeEMsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUU5RCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDL0QsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtRQUNoRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdELFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDaEQsTUFBTSxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM5QyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssVUFBVSxZQUFZO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUN2QyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQjtRQUVELE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdDLE1BQU0sV0FBVyxHQUF3QztZQUN4RCxHQUFHLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHO1lBQ3ZCLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVE7U0FDdkIsQ0FBQztRQUNGLE1BQU0sUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEQsTUFBTSxXQUFXLEdBQXdDO1lBQ3hELEdBQUcsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUc7WUFDdkIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUTtTQUN2QixDQUFDO1FBQ0YsTUFBTSxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2UtY29udGV4dC1tZW51cy8uL2NsaWVudC9zcmMvZGVmYXVsdC1wbGF0Zm9ybS13aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgcGxhdGZvcm0gPSBmaW4uUGxhdGZvcm0uZ2V0Q3VycmVudFN5bmMoKTtcblx0Y29uc3QgbWUgPSBmaW4ubWUgYXMgT3BlbkZpbi5XaW5kb3c7XG5cdGNvbnN0IENPTlRBSU5FUl9JRCA9IFwibGF5b3V0LWNvbnRhaW5lclwiO1xuXHRhd2FpdCBmaW4uUGxhdGZvcm0uTGF5b3V0LmluaXQoeyBjb250YWluZXJJZDogQ09OVEFJTkVSX0lEIH0pO1xuXG5cdGNvbnN0IG1pbmltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5pbWl6ZS1idXR0b25cIik7XG5cdG1pbmltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgbWUubWluaW1pemUoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0fSk7XG5cblx0Y29uc3QgbWF4aW1pemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4cGFuZC1idXR0b25cIik7XG5cdG1heGltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgbWF4T3JSZXN0b3JlKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdH0pO1xuXG5cdGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1idXR0b25cIik7XG5cdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdGF3YWl0IG1lLmNsb3NlKCk7XG5cdH0pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIG1heE9yUmVzdG9yZSgpIHtcblx0XHRpZiAoKGF3YWl0IG1lLmdldFN0YXRlKCkpID09PSBcIm5vcm1hbFwiKSB7XG5cdFx0XHRyZXR1cm4gbWUubWF4aW1pemUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWUucmVzdG9yZSgpO1xuXHR9XG5cdGF3YWl0IG1lLm9uKFwiY2hpbGQtdmlldy1jcmVhdGVkXCIsIGFzeW5jIChlKSA9PiB7XG5cdFx0Y29uc3Qgdmlld09wdGlvbnM6IE9wZW5GaW4uUGxhdGZvcm1WaWV3Q3JlYXRpb25PcHRpb25zID0ge1xuXHRcdFx0dXJsOiBlLmNoaWxkT3B0aW9ucy51cmwsXG5cdFx0XHR0YXJnZXQ6IGZpbi5tZS5pZGVudGl0eVxuXHRcdH07XG5cdFx0YXdhaXQgcGxhdGZvcm0uY3JlYXRlVmlldyh2aWV3T3B0aW9ucywgZmluLm1lLmlkZW50aXR5KTtcblx0fSk7XG5cblx0YXdhaXQgbWUub24oXCJ2aWV3LWNoaWxkLXZpZXctY3JlYXRlZFwiLCBhc3luYyAoZSkgPT4ge1xuXHRcdGNvbnN0IHZpZXdPcHRpb25zOiBPcGVuRmluLlBsYXRmb3JtVmlld0NyZWF0aW9uT3B0aW9ucyA9IHtcblx0XHRcdHVybDogZS5jaGlsZE9wdGlvbnMudXJsLFxuXHRcdFx0dGFyZ2V0OiBmaW4ubWUuaWRlbnRpdHlcblx0XHR9O1xuXHRcdGF3YWl0IHBsYXRmb3JtLmNyZWF0ZVZpZXcodmlld09wdGlvbnMsIGZpbi5tZS5pZGVudGl0eSk7XG5cdH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=