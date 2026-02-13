/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./client/src/app.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7OztBQ0pBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDbEQsTUFBTSxVQUFVLEdBQXVDO1FBQ3RELEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDbkQsQ0FBQztRQUNGLENBQUM7S0FDRCxDQUFDO0lBQ0YsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ1osTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUMzQyxJQUFJLENBQUM7Z0JBQ0osTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF1bmNoLWV4dGVybmFsLXByb2Nlc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGF1bmNoLWV4dGVybmFsLXByb2Nlc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYXVuY2gtZXh0ZXJuYWwtcHJvY2Vzcy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblx0Y29uc3QgbGVwT3B0aW9uczogT3BlbkZpbi5FeHRlcm5hbFByb2Nlc3NSZXF1ZXN0VHlwZSA9IHtcblx0XHRhbGlhczogXCJvZi1kb3RuZXQtZXhhbXBsZVwiLFxuXHRcdGxpc3RlbmVyOiAocmVzdWx0KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xuXHRcdFx0aWYgKHJlc3VsdC5leGl0Q29kZSA9PT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBleGl0ZWQgRG90TmV0Q29yZS5leGVcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBsZXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlcC1idXR0b25cIik7XG5cdGlmIChsZXBCdG4pIHtcblx0XHRsZXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBmaW4uU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2VzcyhsZXBPcHRpb25zKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzdWNjZXNzZnVsbHkgbGF1bmNoZWQgRG90TmV0Q29yZS5leGU6XCIsIGRhdGEpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9