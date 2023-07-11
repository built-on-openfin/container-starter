/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/

document.addEventListener("DOMContentLoaded", () => {
    /**
     * @key alias: <string> the name supplied to the appAsset in the app.json file.
     * @key target: <string> the relative path to the executable from the appAssets [alias]/[version].
     * @key arguments: <string> a string of acceptable arguments for the given executable.
     * @key listener: <function> listener, @param result: <object> = {topic: string, uuid: string, exitCode: number}.
     * @returns Promise<Object>: object containing the uuid of the launched executable { uuid: string }.
     */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNsRDs7Ozs7O09BTUc7SUFFSCxNQUFNLFVBQVUsR0FBdUM7UUFDdEQsS0FBSyxFQUFFLG1CQUFtQjtRQUMxQixRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDbEQ7UUFDRixDQUFDO0tBQ0QsQ0FBQztJQUNGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsSUFBSSxNQUFNLEVBQUU7UUFDWCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDO2lCQUMxQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7S0FDSDtBQUNGLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF1bmNoLWV4dGVybmFsLXByb2Nlc3MvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cdC8qKlxuXHQgKiBAa2V5IGFsaWFzOiA8c3RyaW5nPiB0aGUgbmFtZSBzdXBwbGllZCB0byB0aGUgYXBwQXNzZXQgaW4gdGhlIGFwcC5qc29uIGZpbGUuXG5cdCAqIEBrZXkgdGFyZ2V0OiA8c3RyaW5nPiB0aGUgcmVsYXRpdmUgcGF0aCB0byB0aGUgZXhlY3V0YWJsZSBmcm9tIHRoZSBhcHBBc3NldHMgW2FsaWFzXS9bdmVyc2lvbl0uXG5cdCAqIEBrZXkgYXJndW1lbnRzOiA8c3RyaW5nPiBhIHN0cmluZyBvZiBhY2NlcHRhYmxlIGFyZ3VtZW50cyBmb3IgdGhlIGdpdmVuIGV4ZWN1dGFibGUuXG5cdCAqIEBrZXkgbGlzdGVuZXI6IDxmdW5jdGlvbj4gbGlzdGVuZXIsIEBwYXJhbSByZXN1bHQ6IDxvYmplY3Q+ID0ge3RvcGljOiBzdHJpbmcsIHV1aWQ6IHN0cmluZywgZXhpdENvZGU6IG51bWJlcn0uXG5cdCAqIEByZXR1cm5zIFByb21pc2U8T2JqZWN0Pjogb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHV1aWQgb2YgdGhlIGxhdW5jaGVkIGV4ZWN1dGFibGUgeyB1dWlkOiBzdHJpbmcgfS5cblx0ICovXG5cblx0Y29uc3QgbGVwT3B0aW9uczogT3BlbkZpbi5FeHRlcm5hbFByb2Nlc3NSZXF1ZXN0VHlwZSA9IHtcblx0XHRhbGlhczogXCJvZi1kb3RuZXQtZXhhbXBsZVwiLFxuXHRcdGxpc3RlbmVyOiAocmVzdWx0KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xuXHRcdFx0aWYgKHJlc3VsdC5leGl0Q29kZSA9PT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBleGl0ZWQgRG90TmV0Q29yZS5leGVcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBsZXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlcC1idXR0b25cIik7XG5cdGlmIChsZXBCdG4pIHtcblx0XHRsZXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGZpbi5TeXN0ZW0ubGF1bmNoRXh0ZXJuYWxQcm9jZXNzKGxlcE9wdGlvbnMpXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhcInN1Y2Nlc3NmdWxseSBsYXVuY2hlZCBEb3ROZXRDb3JlLmV4ZTpcIiwgZGF0YSkpXG5cdFx0XHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0XHR9KTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=