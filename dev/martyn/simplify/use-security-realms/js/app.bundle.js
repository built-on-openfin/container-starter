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
        if (summary) {
            summary.textContent =
                "This UAT instance of the application will automatically launch a .net console application that is tied to the UAT security realm and will not receive messages from the PROD realm.";
        }
        const id = await launchNativeApp();
        console.log(id);
    }
    await setupSendButton(securityRealm ?? "");
    await listenToTopicAndLogMessages(securityRealm ?? "");
}
async function getSecurityRealmInfo() {
    try {
        const runtimeInfo = await fin.System.getRuntimeInfo();
        const securityRealmName = document.querySelector("#security-realm-name");
        if (securityRealmName) {
            if (runtimeInfo.securityRealm) {
                securityRealmName.innerHTML += runtimeInfo.securityRealm;
                return runtimeInfo.securityRealm;
            }
            securityRealmName.innerHTML += "No Security Realm Present";
        }
    }
    catch (error) {
        console.error("Error getting runtime info:", error);
    }
}
async function setupSendButton(realm) {
    const sendMessageBtn = document.querySelector("#send-message");
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            const iabMessage = document.querySelector("#iab-message");
            if (iabMessage) {
                const messageText = iabMessage.value;
                await publishMessageToTopic(messageText, realm);
            }
        });
    }
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
        if (messageLog) {
            await fin.InterApplicationBus.subscribe({ uuid: "*" }, topic, (payload) => {
                messageLog.innerHTML += `Received message from app with identity of {uuid: ${payload.id.uuid}}\n\nRealm Name: ${payload.realmName}\nMessage: ${payload.message}`;
            });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FDRCxDQUFDLENBQUM7SUFFSCxPQUFPLFNBQVMsQ0FBQztBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXNlY3VyaXR5LXJlYWxtcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2Utc2VjdXJpdHktcmVhbG1zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLXNlY3VyaXR5LXJlYWxtcy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQge307XG5cbmNvbnN0IHRvcGljID0gXCIvb3BlbmZpbi9zYW1wbGUvc2VjdXJpdHktcmVhbG0tZXhhbXBsZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc2VjdXJpdHlSZWFsbSA9IGF3YWl0IGdldFNlY3VyaXR5UmVhbG1JbmZvKCk7XG5cdGlmIChzZWN1cml0eVJlYWxtID09PSBcIlVBVC1NQUlOXCIpIHtcblx0XHRjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdW1tYXJ5XCIpO1xuXHRcdGlmIChzdW1tYXJ5KSB7XG5cdFx0XHRzdW1tYXJ5LnRleHRDb250ZW50ID1cblx0XHRcdFx0XCJUaGlzIFVBVCBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb24gd2lsbCBhdXRvbWF0aWNhbGx5IGxhdW5jaCBhIC5uZXQgY29uc29sZSBhcHBsaWNhdGlvbiB0aGF0IGlzIHRpZWQgdG8gdGhlIFVBVCBzZWN1cml0eSByZWFsbSBhbmQgd2lsbCBub3QgcmVjZWl2ZSBtZXNzYWdlcyBmcm9tIHRoZSBQUk9EIHJlYWxtLlwiO1xuXHRcdH1cblx0XHRjb25zdCBpZCA9IGF3YWl0IGxhdW5jaE5hdGl2ZUFwcCgpO1xuXHRcdGNvbnNvbGUubG9nKGlkKTtcblx0fVxuXHRhd2FpdCBzZXR1cFNlbmRCdXR0b24oc2VjdXJpdHlSZWFsbSA/PyBcIlwiKTtcblx0YXdhaXQgbGlzdGVuVG9Ub3BpY0FuZExvZ01lc3NhZ2VzKHNlY3VyaXR5UmVhbG0gPz8gXCJcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlY3VyaXR5UmVhbG1JbmZvKCk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcnVudGltZUluZm86IE9wZW5GaW4uUnVudGltZUluZm8gPSBhd2FpdCBmaW4uU3lzdGVtLmdldFJ1bnRpbWVJbmZvKCk7XG5cdFx0Y29uc3Qgc2VjdXJpdHlSZWFsbU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3VyaXR5LXJlYWxtLW5hbWVcIik7XG5cdFx0aWYgKHNlY3VyaXR5UmVhbG1OYW1lKSB7XG5cdFx0XHRpZiAocnVudGltZUluZm8uc2VjdXJpdHlSZWFsbSkge1xuXHRcdFx0XHRzZWN1cml0eVJlYWxtTmFtZS5pbm5lckhUTUwgKz0gcnVudGltZUluZm8uc2VjdXJpdHlSZWFsbTtcblx0XHRcdFx0cmV0dXJuIHJ1bnRpbWVJbmZvLnNlY3VyaXR5UmVhbG07XG5cdFx0XHR9XG5cdFx0XHRzZWN1cml0eVJlYWxtTmFtZS5pbm5lckhUTUwgKz0gXCJObyBTZWN1cml0eSBSZWFsbSBQcmVzZW50XCI7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIHJ1bnRpbWUgaW5mbzpcIiwgZXJyb3IpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldHVwU2VuZEJ1dHRvbihyZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNlbmRNZXNzYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZW5kLW1lc3NhZ2VcIik7XG5cdGlmIChzZW5kTWVzc2FnZUJ0bikge1xuXHRcdHNlbmRNZXNzYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgaWFiTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oXCIjaWFiLW1lc3NhZ2VcIik7XG5cdFx0XHRpZiAoaWFiTWVzc2FnZSkge1xuXHRcdFx0XHRjb25zdCBtZXNzYWdlVGV4dDogc3RyaW5nID0gaWFiTWVzc2FnZS52YWx1ZTtcblx0XHRcdFx0YXdhaXQgcHVibGlzaE1lc3NhZ2VUb1RvcGljKG1lc3NhZ2VUZXh0LCByZWFsbSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hNZXNzYWdlVG9Ub3BpYyhtZXNzYWdlVGV4dDogc3RyaW5nLCByZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMucHVibGlzaCh0b3BpYywge1xuXHRcdFx0aWQ6IGZpbi5tZS5pZGVudGl0eSxcblx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VUZXh0LFxuXHRcdFx0cmVhbG1OYW1lOiByZWFsbVxuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcblx0XHRhbGVydChgQ2FuIG5vdCBzZW5kIG1lc3NhZ2UgdG8gdG9waWM6ICR7dG9waWN9IGluIHJlYWxtICR7cmVhbG19YCk7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbGlzdGVuVG9Ub3BpY0FuZExvZ01lc3NhZ2VzKHJlYWxtOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBtZXNzYWdlTG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlLWxvZ1wiKTtcblx0XHRpZiAobWVzc2FnZUxvZykge1xuXHRcdFx0YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuc3Vic2NyaWJlKFxuXHRcdFx0XHR7IHV1aWQ6IFwiKlwiIH0sXG5cdFx0XHRcdHRvcGljLFxuXHRcdFx0XHQocGF5bG9hZDogeyBpZDogeyB1dWlkOiBzdHJpbmcgfTsgbWVzc2FnZTogc3RyaW5nOyByZWFsbU5hbWU6IHN0cmluZyB9KSA9PiB7XG5cdFx0XHRcdFx0bWVzc2FnZUxvZy5pbm5lckhUTUwgKz0gYFJlY2VpdmVkIG1lc3NhZ2UgZnJvbSBhcHAgd2l0aCBpZGVudGl0eSBvZiB7dXVpZDogJHtwYXlsb2FkLmlkLnV1aWR9fVxcblxcblJlYWxtIE5hbWU6ICR7cGF5bG9hZC5yZWFsbU5hbWV9XFxuTWVzc2FnZTogJHtwYXlsb2FkLm1lc3NhZ2V9YDtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcblx0XHRcdGFsZXJ0KGBDYW4gbm90IHJlY2VpdmUgbWVzc2FnZSBmcm9tIHRvcGljOiAke3RvcGljfSBvbiByZWFsbSAke3JlYWxtfWApO1xuXHRcdH1cblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBsYXVuY2hOYXRpdmVBcHAoKTogUHJvbWlzZTxPcGVuRmluLkFwcGxpY2F0aW9uSWRlbnRpdHk+IHtcblx0LyoqXG5cdCAqIEBrZXkgYWxpYXM6IDxzdHJpbmc+IHRoZSBuYW1lIHN1cHBsaWVkIHRvIHRoZSBhcHBBc3NldCBpbiB0aGUgYXBwLmpzb24gZmlsZS5cblx0ICogQGtleSB0YXJnZXQ6IDxzdHJpbmc+IHRoZSByZWxhdGl2ZSBwYXRoIHRvIHRoZSBleGVjdXRhYmxlIGZyb20gdGhlIGFwcEFzc2V0cyBbYWxpYXNdL1t2ZXJzaW9uXS5cblx0ICogQGtleSBhcmd1bWVudHM6IDxzdHJpbmc+IGEgc3RyaW5nIG9mIGFjY2VwdGFibGUgYXJndW1lbnRzIGZvciB0aGUgZ2l2ZW4gZXhlY3V0YWJsZS5cblx0ICogQGtleSBsaXN0ZW5lcjogPGZ1bmN0aW9uPiBsaXN0ZW5lciwgQHBhcmFtIHJlc3VsdDogPG9iamVjdD4gPSB7dG9waWM6IHN0cmluZywgdXVpZDogc3RyaW5nLCBleGl0Q29kZTogbnVtYmVyfS5cblx0ICogQHJldHVybnMgUHJvbWlzZTxPYmplY3Q+OiBvYmplY3QgY29udGFpbmluZyB0aGUgdXVpZCBvZiB0aGUgbGF1bmNoZWQgZXhlY3V0YWJsZSB7IHV1aWQ6IHN0cmluZyB9LlxuXHQgKi9cblxuXHRjb25zdCBuYXRpdmVBcHAgPSBhd2FpdCBmaW4uU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2Vzcyh7XG5cdFx0YWxpYXM6IFwic2VjdXJpdHktcmVhbG1zLW5hdGl2ZVwiLFxuXHRcdGxpc3RlbmVyOiBhc3luYyAocmVzdWx0KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xuXHRcdFx0aWYgKHJlc3VsdC5leGl0Q29kZSA9PT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIk5hdGl2ZSBBcHAgSGFzIEV4aXRlZFwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBuYXRpdmVBcHA7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=