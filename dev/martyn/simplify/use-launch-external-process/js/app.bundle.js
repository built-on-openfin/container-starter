/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", () => {
    const lepOptions = {
        alias: "of-dotnet-example",
        listener: (result) => {
            console.log("result", result);
            if (result.exitCode === 1) {
                console.log("Successfully exited DotNetCore.exe");
            }
        }
    };
    const lepBtn = document.querySelector("#lep-button");
    if (lepBtn) {
        lepBtn.addEventListener("click", async () => {
            fin.System.launchExternalProcess(lepOptions)
                .then((data) => console.log("successfully launched DotNetCore.exe:", data))
                .catch(console.error);
        });
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNsRCxNQUFNLFVBQVUsR0FBdUM7UUFDdEQsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDbEQ7UUFDRixDQUFDO0tBQ0QsQ0FBQztJQUNGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsSUFBSSxNQUFNLEVBQUU7UUFDWCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDO2lCQUMxQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7S0FDSDtBQUNGLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF1bmNoLWV4dGVybmFsLXByb2Nlc3MvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdGNvbnN0IGxlcE9wdGlvbnM6IE9wZW5GaW4uRXh0ZXJuYWxQcm9jZXNzUmVxdWVzdFR5cGUgPSB7XG5cdFx0YWxpYXM6IFwib2YtZG90bmV0LWV4YW1wbGVcIixcblx0XHRsaXN0ZW5lcjogKHJlc3VsdCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcblx0XHRcdGlmIChyZXN1bHQuZXhpdENvZGUgPT09IDEpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgZXhpdGVkIERvdE5ldENvcmUuZXhlXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgbGVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZXAtYnV0dG9uXCIpO1xuXHRpZiAobGVwQnRuKSB7XG5cdFx0bGVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRmaW4uU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2VzcyhsZXBPcHRpb25zKVxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coXCJzdWNjZXNzZnVsbHkgbGF1bmNoZWQgRG90TmV0Q29yZS5leGU6XCIsIGRhdGEpKVxuXHRcdFx0XHQuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9