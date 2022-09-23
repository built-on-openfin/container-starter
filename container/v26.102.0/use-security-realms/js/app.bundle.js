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
const topic = "/openfin/sample/security-realm-example";
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await init();
    }
    catch (error) {
        console.error(error);
    }
});
async function init() {
    const securityRealm = await getSecurityRealmInfo();
    if (securityRealm === "UAT-MAIN") {
        const summary = document.querySelector("#summary");
        summary.textContent =
            "This UAT instance of the application will automatically launch a .net console application that is tied to the UAT security realm and will not receive messages from the PROD realm.";
        const id = await launchNativeApp();
        console.log(id);
    }
    await setupSendButton(securityRealm);
    await listenToTopicAndLogMessages(securityRealm);
}
async function getSecurityRealmInfo() {
    try {
        const runtimeInfo = await fin.System.getRuntimeInfo();
        const securityRealmName = document.querySelector("#security-realm-name");
        if (runtimeInfo.securityRealm) {
            securityRealmName.innerHTML += runtimeInfo.securityRealm;
            return runtimeInfo.securityRealm;
        }
        securityRealmName.innerHTML += "No Security Realm Present";
    }
    catch (error) {
        console.error("Error getting runtime info:", error);
    }
}
async function setupSendButton(realm) {
    const sendMessageBtn = document.querySelector("#send-message");
    sendMessageBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const iabMessage = document.querySelector("#iab-message");
        const messageText = iabMessage.value;
        await publishMessageToTopic(messageText, realm);
    });
}
async function publishMessageToTopic(messageText, realm) {
    try {
        await fin.InterApplicationBus.publish(topic, {
            id: fin.me.identity,
            message: messageText,
            realmName: realm
        });
    }
    catch {
        // eslint-disable-next-line no-alert
        alert(`Can not send message to topic: ${topic} in realm ${realm}`);
    }
}
async function listenToTopicAndLogMessages(realm) {
    try {
        const messageLog = document.querySelector("#message-log");
        await fin.InterApplicationBus.subscribe({ uuid: "*" }, topic, ({ id, message, realmName }) => {
            messageLog.innerHTML += `Received message from app with identity of {uuid: ${id.uuid}}\n\nRealm Name: ${realmName}\nMessage: ${message}`;
        });
    }
    catch (error) {
        if (error) {
            // eslint-disable-next-line no-alert
            alert(`Can not receive message from topic: ${topic} on realm ${realm}`);
        }
    }
}
async function launchNativeApp() {
    /**
     * @key alias: <string> the name supplied to the appAsset in the app.json file.
     * @key target: <string> the relative path to the executable from the appAssets [alias]/[version].
     * @key arguments: <string> a string of acceptable arguments for the given executable.
     * @key listener: <function> listener, @param result: <object> = {topic: string, uuid: string, exitCode: number}.
     * @returns Promise<Object>: object containing the uuid of the launched executable { uuid: string }.
     */
    const nativeApp = await fin.System.launchExternalProcess({
        alias: "security-realms-native",
        listener: async (result) => {
            console.log("result", result);
            if (result.exitCode === 1) {
                console.log("Native App Has Exited");
            }
        }
    });
    return nativeApp;
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBYTtJQUN2RCxJQUFJO1FBQ0gsTUFBTSxVQUFVLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUUsTUFBTSxHQUFHLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO1lBQzVGLFVBQVUsQ0FBQyxTQUFTLElBQUkscURBQXFELEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixTQUFTLGNBQWMsT0FBTyxFQUFFLENBQUM7UUFDMUksQ0FBQyxDQUFDLENBQUM7S0FDSDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsSUFBSSxLQUFLLEVBQUU7WUFDVixvQ0FBb0M7WUFDcEMsS0FBSyxDQUFDLHVDQUF1QyxLQUFLLGFBQWEsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN4RTtLQUNEO0FBQ0YsQ0FBQztBQUVELEtBQUssVUFBVSxlQUFlO0lBQzdCOzs7Ozs7T0FNRztJQUVILE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUN4RCxLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0YsQ0FBQztLQUNELENBQUMsQ0FBQztJQUVILE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2Utc2VjdXJpdHktcmVhbG1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1zZWN1cml0eS1yZWFsbXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2Utc2VjdXJpdHktcmVhbG1zLy4vY2xpZW50L3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7fTtcblxuY29uc3QgdG9waWMgPSBcIi9vcGVuZmluL3NhbXBsZS9zZWN1cml0eS1yZWFsbS1leGFtcGxlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0KCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzZWN1cml0eVJlYWxtID0gYXdhaXQgZ2V0U2VjdXJpdHlSZWFsbUluZm8oKTtcblx0aWYgKHNlY3VyaXR5UmVhbG0gPT09IFwiVUFULU1BSU5cIikge1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1bW1hcnlcIik7XG5cdFx0c3VtbWFyeS50ZXh0Q29udGVudCA9XG5cdFx0XHRcIlRoaXMgVUFUIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgbGF1bmNoIGEgLm5ldCBjb25zb2xlIGFwcGxpY2F0aW9uIHRoYXQgaXMgdGllZCB0byB0aGUgVUFUIHNlY3VyaXR5IHJlYWxtIGFuZCB3aWxsIG5vdCByZWNlaXZlIG1lc3NhZ2VzIGZyb20gdGhlIFBST0QgcmVhbG0uXCI7XG5cdFx0Y29uc3QgaWQgPSBhd2FpdCBsYXVuY2hOYXRpdmVBcHAoKTtcblx0XHRjb25zb2xlLmxvZyhpZCk7XG5cdH1cblx0YXdhaXQgc2V0dXBTZW5kQnV0dG9uKHNlY3VyaXR5UmVhbG0pO1xuXHRhd2FpdCBsaXN0ZW5Ub1RvcGljQW5kTG9nTWVzc2FnZXMoc2VjdXJpdHlSZWFsbSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlY3VyaXR5UmVhbG1JbmZvKCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcnVudGltZUluZm86IE9wZW5GaW4uUnVudGltZUluZm8gPSBhd2FpdCBmaW4uU3lzdGVtLmdldFJ1bnRpbWVJbmZvKCk7XG5cdFx0Y29uc3Qgc2VjdXJpdHlSZWFsbU5hbWU6IEhUTUxIZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjdXJpdHktcmVhbG0tbmFtZVwiKTtcblx0XHRpZiAocnVudGltZUluZm8uc2VjdXJpdHlSZWFsbSkge1xuXHRcdFx0c2VjdXJpdHlSZWFsbU5hbWUuaW5uZXJIVE1MICs9IHJ1bnRpbWVJbmZvLnNlY3VyaXR5UmVhbG07XG5cdFx0XHRyZXR1cm4gcnVudGltZUluZm8uc2VjdXJpdHlSZWFsbTtcblx0XHR9XG5cdFx0c2VjdXJpdHlSZWFsbU5hbWUuaW5uZXJIVE1MICs9IFwiTm8gU2VjdXJpdHkgUmVhbG0gUHJlc2VudFwiO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIHJ1bnRpbWUgaW5mbzpcIiwgZXJyb3IpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldHVwU2VuZEJ1dHRvbihyZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNlbmRNZXNzYWdlQnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VuZC1tZXNzYWdlXCIpO1xuXHRzZW5kTWVzc2FnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgaWFiTWVzc2FnZTogSFRNTFRleHRBcmVhRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWFiLW1lc3NhZ2VcIik7XG5cdFx0Y29uc3QgbWVzc2FnZVRleHQ6IHN0cmluZyA9IGlhYk1lc3NhZ2UudmFsdWU7XG5cdFx0YXdhaXQgcHVibGlzaE1lc3NhZ2VUb1RvcGljKG1lc3NhZ2VUZXh0LCByZWFsbSk7XG5cdH0pO1xufVxuYXN5bmMgZnVuY3Rpb24gcHVibGlzaE1lc3NhZ2VUb1RvcGljKG1lc3NhZ2VUZXh0OiBzdHJpbmcsIHJlYWxtOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5wdWJsaXNoKHRvcGljLCB7XG5cdFx0XHRpZDogZmluLm1lLmlkZW50aXR5LFxuXHRcdFx0bWVzc2FnZTogbWVzc2FnZVRleHQsXG5cdFx0XHRyZWFsbU5hbWU6IHJlYWxtXG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuXHRcdGFsZXJ0KGBDYW4gbm90IHNlbmQgbWVzc2FnZSB0byB0b3BpYzogJHt0b3BpY30gaW4gcmVhbG0gJHtyZWFsbX1gKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBsaXN0ZW5Ub1RvcGljQW5kTG9nTWVzc2FnZXMocmVhbG06IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IG1lc3NhZ2VMb2c6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlLWxvZ1wiKTtcblx0XHRhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5zdWJzY3JpYmUoeyB1dWlkOiBcIipcIiB9LCB0b3BpYywgKHsgaWQsIG1lc3NhZ2UsIHJlYWxtTmFtZSB9KSA9PiB7XG5cdFx0XHRtZXNzYWdlTG9nLmlubmVySFRNTCArPSBgUmVjZWl2ZWQgbWVzc2FnZSBmcm9tIGFwcCB3aXRoIGlkZW50aXR5IG9mIHt1dWlkOiAke2lkLnV1aWR9fVxcblxcblJlYWxtIE5hbWU6ICR7cmVhbG1OYW1lfVxcbk1lc3NhZ2U6ICR7bWVzc2FnZX1gO1xuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG5cdFx0XHRhbGVydChgQ2FuIG5vdCByZWNlaXZlIG1lc3NhZ2UgZnJvbSB0b3BpYzogJHt0b3BpY30gb24gcmVhbG0gJHtyZWFsbX1gKTtcblx0XHR9XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbGF1bmNoTmF0aXZlQXBwKCk6IFByb21pc2U8T3BlbkZpbi5BcHBsaWNhdGlvbklkZW50aXR5PiB7XG5cdC8qKlxuXHQgKiBAa2V5IGFsaWFzOiA8c3RyaW5nPiB0aGUgbmFtZSBzdXBwbGllZCB0byB0aGUgYXBwQXNzZXQgaW4gdGhlIGFwcC5qc29uIGZpbGUuXG5cdCAqIEBrZXkgdGFyZ2V0OiA8c3RyaW5nPiB0aGUgcmVsYXRpdmUgcGF0aCB0byB0aGUgZXhlY3V0YWJsZSBmcm9tIHRoZSBhcHBBc3NldHMgW2FsaWFzXS9bdmVyc2lvbl0uXG5cdCAqIEBrZXkgYXJndW1lbnRzOiA8c3RyaW5nPiBhIHN0cmluZyBvZiBhY2NlcHRhYmxlIGFyZ3VtZW50cyBmb3IgdGhlIGdpdmVuIGV4ZWN1dGFibGUuXG5cdCAqIEBrZXkgbGlzdGVuZXI6IDxmdW5jdGlvbj4gbGlzdGVuZXIsIEBwYXJhbSByZXN1bHQ6IDxvYmplY3Q+ID0ge3RvcGljOiBzdHJpbmcsIHV1aWQ6IHN0cmluZywgZXhpdENvZGU6IG51bWJlcn0uXG5cdCAqIEByZXR1cm5zIFByb21pc2U8T2JqZWN0Pjogb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHV1aWQgb2YgdGhlIGxhdW5jaGVkIGV4ZWN1dGFibGUgeyB1dWlkOiBzdHJpbmcgfS5cblx0ICovXG5cblx0Y29uc3QgbmF0aXZlQXBwID0gYXdhaXQgZmluLlN5c3RlbS5sYXVuY2hFeHRlcm5hbFByb2Nlc3Moe1xuXHRcdGFsaWFzOiBcInNlY3VyaXR5LXJlYWxtcy1uYXRpdmVcIixcblx0XHRsaXN0ZW5lcjogYXN5bmMgKHJlc3VsdCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcblx0XHRcdGlmIChyZXN1bHQuZXhpdENvZGUgPT09IDEpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJOYXRpdmUgQXBwIEhhcyBFeGl0ZWRcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gbmF0aXZlQXBwO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9