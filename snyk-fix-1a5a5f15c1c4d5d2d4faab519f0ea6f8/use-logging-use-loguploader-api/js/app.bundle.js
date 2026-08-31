/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

/* eslint-disable linebreak-style */
// import Openfin from "@openfin/core";
/**
 * Adds a log entry to the log display element.
 * @param text - The text to add to the log.
 */
function addToLog(text) {
    const logPre = document.querySelector("#logText");
    if (logPre) {
        logPre.textContent = `${logPre.textContent}${text}\n\n`;
        logPre.scrollTop = logPre.scrollHeight;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const lepBtn = document.querySelector("#lep-button");
    if (lepBtn) {
        lepBtn.addEventListener("click", async () => {
            try {
                addToLog("Launching Log Uploader...");
                const showUICheckbox = document.querySelector("#chk_showui");
                const showUI = showUICheckbox ? showUICheckbox.checked : true;
                addToLog(`Show UI: ${showUI}`);
                const ui = showUI
                    ? {
                        show: true,
                        title: "Log Uploader for Here.io",
                        icon: "https://www.here.io/favicon.ico",
                        header: "Here.io",
                        description: "This is the log uploader tool. It will upload app, rvm and debug logs to the indicated endpoint",
                        email: "support@nowhere.com",
                        website: "https://www.here.io",
                        websiteDescription: "The Here.io web site"
                    }
                    : { show: false };
                const data = await fin.System.launchLogUploader({
                    endpoint: "http://localhost:3000/api/upload",
                    manifests: [],
                    logs: ["debug", "app", "rvm"],
                    ui
                });
                if (data !== undefined) {
                    addToLog(`Log Uploader result: ${JSON.stringify(data)}`);
                }
                else {
                    addToLog("Log Uploader completed operation successfully.");
                }
            }
            catch (err) {
                addToLog(`Error launching Log Uploader: ${err instanceof Error ? err.message : String(err)}`);
            }
        });
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvQ0FBb0M7QUFDcEMsdUNBQXVDO0FBRXZDOzs7R0FHRztBQUNILFNBQVMsUUFBUSxDQUFDLElBQVk7SUFDN0IsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVsRCxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ1osTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUM7UUFDeEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hDLENBQUM7QUFDRixDQUFDO0FBQ0QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNsRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JELElBQUksTUFBTSxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzNDLElBQUksQ0FBQztnQkFDSixRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsYUFBYSxDQUFDLENBQUM7Z0JBQy9FLE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUM5RCxRQUFRLENBQUMsWUFBWSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLEVBQUUsR0FBRyxNQUFNO29CQUNoQixDQUFDLENBQUM7d0JBQ0EsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFLDBCQUEwQjt3QkFDakMsSUFBSSxFQUFFLGlDQUFpQzt3QkFDdkMsTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLFdBQVcsRUFDVixpR0FBaUc7d0JBQ2xHLEtBQUssRUFBRSxxQkFBcUI7d0JBQzVCLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLGtCQUFrQixFQUFFLHNCQUFzQjtxQkFDMUM7b0JBQ0YsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUVuQixNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7b0JBQy9DLFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLFNBQVMsRUFBRSxFQUFFO29CQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO29CQUM3QixFQUFFO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztvQkFDeEIsUUFBUSxDQUFDLHdCQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztxQkFBTSxDQUFDO29CQUNQLFFBQVEsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0YsQ0FBQztZQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2QsUUFBUSxDQUFDLGlDQUFpQyxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9GLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdW5jaC1sb2dVcGxvYWRlci1wcm9jZXNzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG4vLyBpbXBvcnQgT3BlbmZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG4vKipcbiAqIEFkZHMgYSBsb2cgZW50cnkgdG8gdGhlIGxvZyBkaXNwbGF5IGVsZW1lbnQuXG4gKiBAcGFyYW0gdGV4dCAtIFRoZSB0ZXh0IHRvIGFkZCB0byB0aGUgbG9nLlxuICovXG5mdW5jdGlvbiBhZGRUb0xvZyh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcblx0Y29uc3QgbG9nUHJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dUZXh0XCIpO1xuXG5cdGlmIChsb2dQcmUpIHtcblx0XHRsb2dQcmUudGV4dENvbnRlbnQgPSBgJHtsb2dQcmUudGV4dENvbnRlbnR9JHt0ZXh0fVxcblxcbmA7XG5cdFx0bG9nUHJlLnNjcm9sbFRvcCA9IGxvZ1ByZS5zY3JvbGxIZWlnaHQ7XG5cdH1cbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0Y29uc3QgbGVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZXAtYnV0dG9uXCIpO1xuXHRpZiAobGVwQnRuKSB7XG5cdFx0bGVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhZGRUb0xvZyhcIkxhdW5jaGluZyBMb2cgVXBsb2FkZXIuLi5cIik7XG5cdFx0XHRcdGNvbnN0IHNob3dVSUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjaGtfc2hvd3VpXCIpO1xuXHRcdFx0XHRjb25zdCBzaG93VUkgPSBzaG93VUlDaGVja2JveCA/IHNob3dVSUNoZWNrYm94LmNoZWNrZWQgOiB0cnVlO1xuXHRcdFx0XHRhZGRUb0xvZyhgU2hvdyBVSTogJHtzaG93VUl9YCk7XG5cdFx0XHRcdGNvbnN0IHVpID0gc2hvd1VJXG5cdFx0XHRcdFx0PyB7XG5cdFx0XHRcdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIkxvZyBVcGxvYWRlciBmb3IgSGVyZS5pb1wiLFxuXHRcdFx0XHRcdFx0XHRpY29uOiBcImh0dHBzOi8vd3d3LmhlcmUuaW8vZmF2aWNvbi5pY29cIixcblx0XHRcdFx0XHRcdFx0aGVhZGVyOiBcIkhlcmUuaW9cIixcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFx0XHRcdFx0XCJUaGlzIGlzIHRoZSBsb2cgdXBsb2FkZXIgdG9vbC4gSXQgd2lsbCB1cGxvYWQgYXBwLCBydm0gYW5kIGRlYnVnIGxvZ3MgdG8gdGhlIGluZGljYXRlZCBlbmRwb2ludFwiLFxuXHRcdFx0XHRcdFx0XHRlbWFpbDogXCJzdXBwb3J0QG5vd2hlcmUuY29tXCIsXG5cdFx0XHRcdFx0XHRcdHdlYnNpdGU6IFwiaHR0cHM6Ly93d3cuaGVyZS5pb1wiLFxuXHRcdFx0XHRcdFx0XHR3ZWJzaXRlRGVzY3JpcHRpb246IFwiVGhlIEhlcmUuaW8gd2ViIHNpdGVcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDogeyBzaG93OiBmYWxzZSB9O1xuXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBmaW4uU3lzdGVtLmxhdW5jaExvZ1VwbG9hZGVyKHtcblx0XHRcdFx0XHRlbmRwb2ludDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VwbG9hZFwiLFxuXHRcdFx0XHRcdG1hbmlmZXN0czogW10sXG5cdFx0XHRcdFx0bG9nczogW1wiZGVidWdcIiwgXCJhcHBcIiwgXCJydm1cIl0sXG5cdFx0XHRcdFx0dWlcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhZGRUb0xvZyhgTG9nIFVwbG9hZGVyIHJlc3VsdDogJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhZGRUb0xvZyhcIkxvZyBVcGxvYWRlciBjb21wbGV0ZWQgb3BlcmF0aW9uIHN1Y2Nlc3NmdWxseS5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRhZGRUb0xvZyhgRXJyb3IgbGF1bmNoaW5nIExvZyBVcGxvYWRlcjogJHtlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogU3RyaW5nKGVycil9YCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9