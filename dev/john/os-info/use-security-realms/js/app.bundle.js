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
/**
 * Initialize the DOM elements.
 */
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
/**
 * Get the security realm info.
 * @returns The security realm if it is set.
 */
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
/**
 * Setup the send button.
 * @param realm The realm to use.
 */
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
/**
 * Publish a message to the topic.
 * @param messageText The message text.
 * @param realm The realm to send the message to.
 */
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
/**
 * Listen for messages and log the results.
 * @param realm The realm to listen on.
 */
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
/**
 * Launch a native app.
 * @returns The application identity.
 */
async function launchNativeApp() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUIsQ0FBQztRQUN4RCxLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNGLENBQUM7S0FDRCxDQUFDLENBQUM7SUFFSCxPQUFPLFNBQVMsQ0FBQztBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXNlY3VyaXR5LXJlYWxtcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2Utc2VjdXJpdHktcmVhbG1zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLXNlY3VyaXR5LXJlYWxtcy8uL2NsaWVudC9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmNvbnN0IHRvcGljID0gXCIvb3BlbmZpbi9zYW1wbGUvc2VjdXJpdHktcmVhbG0tZXhhbXBsZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNlY3VyaXR5UmVhbG0gPSBhd2FpdCBnZXRTZWN1cml0eVJlYWxtSW5mbygpO1xuXHRpZiAoc2VjdXJpdHlSZWFsbSA9PT0gXCJVQVQtTUFJTlwiKSB7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VtbWFyeVwiKTtcblx0XHRpZiAoc3VtbWFyeSkge1xuXHRcdFx0c3VtbWFyeS50ZXh0Q29udGVudCA9XG5cdFx0XHRcdFwiVGhpcyBVQVQgaW5zdGFuY2Ugb2YgdGhlIGFwcGxpY2F0aW9uIHdpbGwgYXV0b21hdGljYWxseSBsYXVuY2ggYSAubmV0IGNvbnNvbGUgYXBwbGljYXRpb24gdGhhdCBpcyB0aWVkIHRvIHRoZSBVQVQgc2VjdXJpdHkgcmVhbG0gYW5kIHdpbGwgbm90IHJlY2VpdmUgbWVzc2FnZXMgZnJvbSB0aGUgUFJPRCByZWFsbS5cIjtcblx0XHR9XG5cdFx0Y29uc3QgaWQgPSBhd2FpdCBsYXVuY2hOYXRpdmVBcHAoKTtcblx0XHRjb25zb2xlLmxvZyhpZCk7XG5cdH1cblx0YXdhaXQgc2V0dXBTZW5kQnV0dG9uKHNlY3VyaXR5UmVhbG0gPz8gXCJcIik7XG5cdGF3YWl0IGxpc3RlblRvVG9waWNBbmRMb2dNZXNzYWdlcyhzZWN1cml0eVJlYWxtID8/IFwiXCIpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2VjdXJpdHkgcmVhbG0gaW5mby5cbiAqIEByZXR1cm5zIFRoZSBzZWN1cml0eSByZWFsbSBpZiBpdCBpcyBzZXQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFNlY3VyaXR5UmVhbG1JbmZvKCk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcnVudGltZUluZm86IE9wZW5GaW4uUnVudGltZUluZm8gPSBhd2FpdCBmaW4uU3lzdGVtLmdldFJ1bnRpbWVJbmZvKCk7XG5cdFx0Y29uc3Qgc2VjdXJpdHlSZWFsbU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3VyaXR5LXJlYWxtLW5hbWVcIik7XG5cdFx0aWYgKHNlY3VyaXR5UmVhbG1OYW1lKSB7XG5cdFx0XHRpZiAocnVudGltZUluZm8uc2VjdXJpdHlSZWFsbSkge1xuXHRcdFx0XHRzZWN1cml0eVJlYWxtTmFtZS5pbm5lckhUTUwgKz0gcnVudGltZUluZm8uc2VjdXJpdHlSZWFsbTtcblx0XHRcdFx0cmV0dXJuIHJ1bnRpbWVJbmZvLnNlY3VyaXR5UmVhbG07XG5cdFx0XHR9XG5cdFx0XHRzZWN1cml0eVJlYWxtTmFtZS5pbm5lckhUTUwgKz0gXCJObyBTZWN1cml0eSBSZWFsbSBQcmVzZW50XCI7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIHJ1bnRpbWUgaW5mbzpcIiwgZXJyb3IpO1xuXHR9XG59XG5cbi8qKlxuICogU2V0dXAgdGhlIHNlbmQgYnV0dG9uLlxuICogQHBhcmFtIHJlYWxtIFRoZSByZWFsbSB0byB1c2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldHVwU2VuZEJ1dHRvbihyZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNlbmRNZXNzYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZW5kLW1lc3NhZ2VcIik7XG5cdGlmIChzZW5kTWVzc2FnZUJ0bikge1xuXHRcdHNlbmRNZXNzYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgaWFiTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oXCIjaWFiLW1lc3NhZ2VcIik7XG5cdFx0XHRpZiAoaWFiTWVzc2FnZSkge1xuXHRcdFx0XHRjb25zdCBtZXNzYWdlVGV4dDogc3RyaW5nID0gaWFiTWVzc2FnZS52YWx1ZTtcblx0XHRcdFx0YXdhaXQgcHVibGlzaE1lc3NhZ2VUb1RvcGljKG1lc3NhZ2VUZXh0LCByZWFsbSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBQdWJsaXNoIGEgbWVzc2FnZSB0byB0aGUgdG9waWMuXG4gKiBAcGFyYW0gbWVzc2FnZVRleHQgVGhlIG1lc3NhZ2UgdGV4dC5cbiAqIEBwYXJhbSByZWFsbSBUaGUgcmVhbG0gdG8gc2VuZCB0aGUgbWVzc2FnZSB0by5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcHVibGlzaE1lc3NhZ2VUb1RvcGljKG1lc3NhZ2VUZXh0OiBzdHJpbmcsIHJlYWxtOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5wdWJsaXNoKHRvcGljLCB7XG5cdFx0XHRpZDogZmluLm1lLmlkZW50aXR5LFxuXHRcdFx0bWVzc2FnZTogbWVzc2FnZVRleHQsXG5cdFx0XHRyZWFsbU5hbWU6IHJlYWxtXG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuXHRcdGFsZXJ0KGBDYW4gbm90IHNlbmQgbWVzc2FnZSB0byB0b3BpYzogJHt0b3BpY30gaW4gcmVhbG0gJHtyZWFsbX1gKTtcblx0fVxufVxuXG4vKipcbiAqIExpc3RlbiBmb3IgbWVzc2FnZXMgYW5kIGxvZyB0aGUgcmVzdWx0cy5cbiAqIEBwYXJhbSByZWFsbSBUaGUgcmVhbG0gdG8gbGlzdGVuIG9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBsaXN0ZW5Ub1RvcGljQW5kTG9nTWVzc2FnZXMocmVhbG06IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IG1lc3NhZ2VMb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lc3NhZ2UtbG9nXCIpO1xuXHRcdGlmIChtZXNzYWdlTG9nKSB7XG5cdFx0XHRhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5zdWJzY3JpYmUoXG5cdFx0XHRcdHsgdXVpZDogXCIqXCIgfSxcblx0XHRcdFx0dG9waWMsXG5cdFx0XHRcdChwYXlsb2FkOiB7IGlkOiB7IHV1aWQ6IHN0cmluZyB9OyBtZXNzYWdlOiBzdHJpbmc7IHJlYWxtTmFtZTogc3RyaW5nIH0pID0+IHtcblx0XHRcdFx0XHRtZXNzYWdlTG9nLmlubmVySFRNTCArPSBgUmVjZWl2ZWQgbWVzc2FnZSBmcm9tIGFwcCB3aXRoIGlkZW50aXR5IG9mIHt1dWlkOiAke3BheWxvYWQuaWQudXVpZH19XFxuXFxuUmVhbG0gTmFtZTogJHtwYXlsb2FkLnJlYWxtTmFtZX1cXG5NZXNzYWdlOiAke3BheWxvYWQubWVzc2FnZX1gO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuXHRcdFx0YWxlcnQoYENhbiBub3QgcmVjZWl2ZSBtZXNzYWdlIGZyb20gdG9waWM6ICR7dG9waWN9IG9uIHJlYWxtICR7cmVhbG19YCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogTGF1bmNoIGEgbmF0aXZlIGFwcC5cbiAqIEByZXR1cm5zIFRoZSBhcHBsaWNhdGlvbiBpZGVudGl0eS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbGF1bmNoTmF0aXZlQXBwKCk6IFByb21pc2U8T3BlbkZpbi5BcHBsaWNhdGlvbklkZW50aXR5PiB7XG5cdGNvbnN0IG5hdGl2ZUFwcCA9IGF3YWl0IGZpbi5TeXN0ZW0ubGF1bmNoRXh0ZXJuYWxQcm9jZXNzKHtcblx0XHRhbGlhczogXCJzZWN1cml0eS1yZWFsbXMtbmF0aXZlXCIsXG5cdFx0bGlzdGVuZXI6IGFzeW5jIChyZXN1bHQpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XG5cdFx0XHRpZiAocmVzdWx0LmV4aXRDb2RlID09PSAxKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiTmF0aXZlIEFwcCBIYXMgRXhpdGVkXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIG5hdGl2ZUFwcDtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=