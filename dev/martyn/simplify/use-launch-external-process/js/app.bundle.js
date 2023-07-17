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
            try {
                const data = await fin.System.launchExternalProcess(lepOptions);
                console.log("successfully launched DotNetCore.exe:", data);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNsRCxNQUFNLFVBQVUsR0FBdUM7UUFDdEQsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDbEQ7UUFDRixDQUFDO0tBQ0QsQ0FBQztJQUNGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsSUFBSSxNQUFNLEVBQUU7UUFDWCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzNDLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzNEO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuQjtRQUNGLENBQUMsQ0FBQyxDQUFDO0tBQ0g7QUFDRixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdW5jaC1leHRlcm5hbC1wcm9jZXNzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRjb25zdCBsZXBPcHRpb25zOiBPcGVuRmluLkV4dGVybmFsUHJvY2Vzc1JlcXVlc3RUeXBlID0ge1xuXHRcdGFsaWFzOiBcIm9mLWRvdG5ldC1leGFtcGxlXCIsXG5cdFx0bGlzdGVuZXI6IChyZXN1bHQpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XG5cdFx0XHRpZiAocmVzdWx0LmV4aXRDb2RlID09PSAxKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGV4aXRlZCBEb3ROZXRDb3JlLmV4ZVwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IGxlcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGVwLWJ1dHRvblwiKTtcblx0aWYgKGxlcEJ0bikge1xuXHRcdGxlcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGZpbi5TeXN0ZW0ubGF1bmNoRXh0ZXJuYWxQcm9jZXNzKGxlcE9wdGlvbnMpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInN1Y2Nlc3NmdWxseSBsYXVuY2hlZCBEb3ROZXRDb3JlLmV4ZTpcIiwgZGF0YSk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==