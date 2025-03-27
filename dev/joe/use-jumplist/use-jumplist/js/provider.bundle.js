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
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
fin.Platform.init({}).catch((error) => console.error(error));
const appName = "Test App";
const app = fin.Application.getCurrentSync();
const jumpListConfig = [
    {
        // has no name and no type so `type` is assumed to be "tasks"
        name: "",
        items: [
            {
                type: "task",
                title: `Launch ${appName}`,
                description: `Runs ${appName} with the default configuration`,
                deepLink: "fins://localhost:5050/common/views/platform/of-info/index.html",
                iconPath: "https://built-on-openfin.github.io/container-starter/dev/joe/use-jumplist/use-jumplist/common/images/icon-blue.png",
                iconIndex: 0
            },
            { type: "separator" },
            {
                type: "task",
                title: `Restore ${appName}`,
                description: "Restore to last configuration",
                deepLink: "fins://localhost:5050/common/views/platform/of-info/index.html$$use-last-configuration=true",
                iconPath: "https://built-on-openfin.github.io/container-starter/dev/joe/use-jumplist/use-jumplist/common/images/icon-blue.png",
                iconIndex: 0
            }
        ]
    },
    {
        name: "Tools",
        items: [
            {
                type: "task",
                title: "Tool A",
                description: "Runs Tool A",
                deepLink: "fins://path.to/tool-a/manifest.json",
                iconPath: "https://built-on-openfin.github.io/container-starter/dev/joe/use-jumplist/use-jumplist/common/images/icon-blue.png",
                iconIndex: 0
            },
            {
                type: "task",
                title: "Tool B",
                description: "Runs Tool B",
                deepLink: "fins://path.to/tool-b/manifest.json",
                iconPath: "https://built-on-openfin.github.io/container-starter/dev/joe/use-jumplist/use-jumplist/common/images/icon-blue.png",
                iconIndex: 0
            }
        ]
    }
];
console.log(`[PROVIDER] In Provider File: ${JSON.stringify(app.getInfo())}`);
app.setJumpList(jumpListConfig)
    .then(() => console.log("JumpList applied"))
    .catch((e) => console.log(`JumpList failed to apply: ${e.toString()}`));
/**
 * Handles the launch event from the Jumplist.
 */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
async function handleUseLastConfiguration() {
    // this handler is called when the app is being launched
    await app.on("run-requested", (event) => {
        if (event.userAppConfigArgs["use-last-configuration"]) {
            // your logic here
            console.log("[HANDLER] In Run-Requested Event.");
        }
    });
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ0hBLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzdELE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQztBQUMzQixNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzdDLE1BQU0sY0FBYyxHQUFpQztJQUNsRDtRQUNDLDZEQUE2RDtRQUNqRCxJQUFJLEVBQUUsRUFBRTtRQUNwQixLQUFLLEVBQUU7WUFDTjtnQkFDQyxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsVUFBVSxPQUFPLEVBQUU7Z0JBQzFCLFdBQVcsRUFBRSxRQUFRLE9BQU8saUNBQWlDO2dCQUM3RCxRQUFRLEVBQUUsZ0VBQWdFO2dCQUMxRSxRQUFRLEVBQUUsbURBQW1EO2dCQUM3RCxTQUFTLEVBQUUsQ0FBQzthQUNaO1lBQ0QsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3JCO2dCQUNDLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxXQUFXLE9BQU8sRUFBRTtnQkFDM0IsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsUUFBUSxFQUFFLDZGQUE2RjtnQkFDdkcsUUFBUSxFQUFFLG1EQUFtRDtnQkFDN0QsU0FBUyxFQUFFLENBQUM7YUFDWjtTQUNEO0tBQ0Q7SUFDRDtRQUNDLElBQUksRUFBRSxPQUFPO1FBQ2IsS0FBSyxFQUFFO1lBQ047Z0JBQ0MsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsV0FBVyxFQUFFLGFBQWE7Z0JBQzFCLFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFFBQVEsRUFBRSxtREFBbUQ7Z0JBQzdELFNBQVMsRUFBRSxDQUFDO2FBQ1o7WUFDRDtnQkFDQyxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsUUFBUTtnQkFDZixXQUFXLEVBQUUsYUFBYTtnQkFDMUIsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsUUFBUSxFQUFFLG1EQUFtRDtnQkFDN0QsU0FBUyxFQUFFLENBQUM7YUFDWjtTQUNEO0tBQ0Q7Q0FDRCxDQUFDO0FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0UsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7S0FDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUMzQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV6RTs7R0FFRztBQUNILDZFQUE2RTtBQUM3RSxLQUFLLFVBQVUsMEJBQTBCO0lBQ3hDLHdEQUF3RDtJQUN4RCxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdkMsSUFBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDO1lBQ3RELGtCQUFrQjtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdy10by11c2UtanVtcGxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG93LXRvLXVzZS1qdW1wbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvdy10by11c2UtanVtcGxpc3QvLi9jbGllbnQvc3JjL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCB0eXBlIE9wZW5GaW5fMiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5maW4uUGxhdGZvcm0uaW5pdCh7fSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5jb25zdCBhcHBOYW1lID0gXCJUZXN0IEFwcFwiO1xuY29uc3QgYXBwID0gZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnRTeW5jKCk7XG5jb25zdCBqdW1wTGlzdENvbmZpZzogT3BlbkZpbl8yLkp1bXBMaXN0Q2F0ZWdvcnlbXSA9IFsgLy8gYXJyYXkgb2YgSnVtcExpc3QgY2F0ZWdvcmllc1xuXHRcdFx0e1xuXHRcdFx0XHQvLyBoYXMgbm8gbmFtZSBhbmQgbm8gdHlwZSBzbyBgdHlwZWAgaXMgYXNzdW1lZCB0byBiZSBcInRhc2tzXCJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuXHRcdFx0XHRpdGVtczogWyAvLyBhcnJheSBvZiBKdW1wTGlzdCBpdGVtc1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHR5cGU6IFwidGFza1wiLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGBMYXVuY2ggJHthcHBOYW1lfWAsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYFJ1bnMgJHthcHBOYW1lfSB3aXRoIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25gLFxuXHRcdFx0XHRcdFx0ZGVlcExpbms6IFwiZmluczovL2xvY2FsaG9zdDo1MDUwL2NvbW1vbi92aWV3cy9wbGF0Zm9ybS9vZi1pbmZvL2luZGV4Lmh0bWxcIixcblx0XHRcdFx0XHRcdGljb25QYXRoOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9jb21tb24vaW1hZ2VzL2ljb24tYmx1ZS5wbmdcIixcblx0XHRcdFx0XHRcdGljb25JbmRleDogMFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0eyB0eXBlOiBcInNlcGFyYXRvclwiIH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogXCJ0YXNrXCIsXG5cdFx0XHRcdFx0XHR0aXRsZTogYFJlc3RvcmUgJHthcHBOYW1lfWAsXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJSZXN0b3JlIHRvIGxhc3QgY29uZmlndXJhdGlvblwiLFxuXHRcdFx0XHRcdFx0ZGVlcExpbms6IFwiZmluczovL2xvY2FsaG9zdDo1MDUwL2NvbW1vbi92aWV3cy9wbGF0Zm9ybS9vZi1pbmZvL2luZGV4Lmh0bWwkJHVzZS1sYXN0LWNvbmZpZ3VyYXRpb249dHJ1ZVwiLFxuXHRcdFx0XHRcdFx0aWNvblBhdGg6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2NvbW1vbi9pbWFnZXMvaWNvbi1ibHVlLnBuZ1wiLFxuXHRcdFx0XHRcdFx0aWNvbkluZGV4OiAwXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIlRvb2xzXCIsXG5cdFx0XHRcdGl0ZW1zOiBbIC8vIGFycmF5IG9mIEp1bXBMaXN0IGl0ZW1zXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dHlwZTogXCJ0YXNrXCIsXG5cdFx0XHRcdFx0XHR0aXRsZTogXCJUb29sIEFcIixcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlJ1bnMgVG9vbCBBXCIsXG5cdFx0XHRcdFx0XHRkZWVwTGluazogXCJmaW5zOi8vcGF0aC50by90b29sLWEvbWFuaWZlc3QuanNvblwiLFxuXHRcdFx0XHRcdFx0aWNvblBhdGg6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2NvbW1vbi9pbWFnZXMvaWNvbi1ibHVlLnBuZ1wiLFxuXHRcdFx0XHRcdFx0aWNvbkluZGV4OiAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlOiBcInRhc2tcIixcblx0XHRcdFx0XHRcdHRpdGxlOiBcIlRvb2wgQlwiLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiUnVucyBUb29sIEJcIixcblx0XHRcdFx0XHRcdGRlZXBMaW5rOiBcImZpbnM6Ly9wYXRoLnRvL3Rvb2wtYi9tYW5pZmVzdC5qc29uXCIsXG5cdFx0XHRcdFx0XHRpY29uUGF0aDogXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvY29tbW9uL2ltYWdlcy9pY29uLWJsdWUucG5nXCIsXG5cdFx0XHRcdFx0XHRpY29uSW5kZXg6IDBcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRdO1xuY29uc29sZS5sb2coYFtQUk9WSURFUl0gSW4gUHJvdmlkZXIgRmlsZTogJHtKU09OLnN0cmluZ2lmeShhcHAuZ2V0SW5mbygpKX1gKTtcbmFwcC5zZXRKdW1wTGlzdChqdW1wTGlzdENvbmZpZylcblx0LnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJKdW1wTGlzdCBhcHBsaWVkXCIpKVxuXHQuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGBKdW1wTGlzdCBmYWlsZWQgdG8gYXBwbHk6ICR7ZS50b1N0cmluZygpfWApKTtcblxuLyoqXG4gKiBIYW5kbGVzIHRoZSBsYXVuY2ggZXZlbnQgZnJvbSB0aGUgSnVtcGxpc3QuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycywgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVVc2VMYXN0Q29uZmlndXJhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Ly8gdGhpcyBoYW5kbGVyIGlzIGNhbGxlZCB3aGVuIHRoZSBhcHAgaXMgYmVpbmcgbGF1bmNoZWRcblx0YXdhaXQgYXBwLm9uKFwicnVuLXJlcXVlc3RlZFwiLCAoZXZlbnQpID0+IHtcblx0XHRpZihldmVudC51c2VyQXBwQ29uZmlnQXJnc1tcInVzZS1sYXN0LWNvbmZpZ3VyYXRpb25cIl0pIHtcblx0XHRcdC8vIHlvdXIgbG9naWMgaGVyZVxuXHRcdFx0Y29uc29sZS5sb2coXCJbSEFORExFUl0gSW4gUnVuLVJlcXVlc3RlZCBFdmVudC5cIik7XG5cdFx0fVxuXHR9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==