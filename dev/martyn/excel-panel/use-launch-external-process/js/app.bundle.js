/******/ (() => { // webpackBootstrap
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
    lepBtn.addEventListener("click", async () => {
        fin.System.launchExternalProcess(lepOptions)
            .then((data) => console.log("successfully launched DotNetCore.exe:", data))
            .catch(console.error);
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDbEQ7Ozs7OztPQU1HO0lBRUgsTUFBTSxVQUFVLEdBQXVDO1FBQ3RELEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQ2xEO1FBQ0YsQ0FBQztLQUNELENBQUM7SUFDRixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUM7YUFDMUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdW5jaC1leHRlcm5hbC1wcm9jZXNzLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHQvKipcblx0ICogQGtleSBhbGlhczogPHN0cmluZz4gdGhlIG5hbWUgc3VwcGxpZWQgdG8gdGhlIGFwcEFzc2V0IGluIHRoZSBhcHAuanNvbiBmaWxlLlxuXHQgKiBAa2V5IHRhcmdldDogPHN0cmluZz4gdGhlIHJlbGF0aXZlIHBhdGggdG8gdGhlIGV4ZWN1dGFibGUgZnJvbSB0aGUgYXBwQXNzZXRzIFthbGlhc10vW3ZlcnNpb25dLlxuXHQgKiBAa2V5IGFyZ3VtZW50czogPHN0cmluZz4gYSBzdHJpbmcgb2YgYWNjZXB0YWJsZSBhcmd1bWVudHMgZm9yIHRoZSBnaXZlbiBleGVjdXRhYmxlLlxuXHQgKiBAa2V5IGxpc3RlbmVyOiA8ZnVuY3Rpb24+IGxpc3RlbmVyLCBAcGFyYW0gcmVzdWx0OiA8b2JqZWN0PiA9IHt0b3BpYzogc3RyaW5nLCB1dWlkOiBzdHJpbmcsIGV4aXRDb2RlOiBudW1iZXJ9LlxuXHQgKiBAcmV0dXJucyBQcm9taXNlPE9iamVjdD46IG9iamVjdCBjb250YWluaW5nIHRoZSB1dWlkIG9mIHRoZSBsYXVuY2hlZCBleGVjdXRhYmxlIHsgdXVpZDogc3RyaW5nIH0uXG5cdCAqL1xuXG5cdGNvbnN0IGxlcE9wdGlvbnM6IE9wZW5GaW4uRXh0ZXJuYWxQcm9jZXNzUmVxdWVzdFR5cGUgPSB7XG5cdFx0YWxpYXM6IFwib2YtZG90bmV0LWV4YW1wbGVcIixcblx0XHRsaXN0ZW5lcjogKHJlc3VsdCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcblx0XHRcdGlmIChyZXN1bHQuZXhpdENvZGUgPT09IDEpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgZXhpdGVkIERvdE5ldENvcmUuZXhlXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgbGVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZXAtYnV0dG9uXCIpO1xuXHRsZXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRmaW4uU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2VzcyhsZXBPcHRpb25zKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKFwic3VjY2Vzc2Z1bGx5IGxhdW5jaGVkIERvdE5ldENvcmUuZXhlOlwiLCBkYXRhKSlcblx0XHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0fSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==