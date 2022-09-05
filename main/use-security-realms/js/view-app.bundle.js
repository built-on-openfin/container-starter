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
  !*** ./client/src/view-app.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await init();
    }
    catch (error) {
        console.error(error);
    }
});
const topic = "/openfin/sample/security-realm-example";
const rootPath = location.href.replace("/html/view-app.html", "/");
async function init() {
    const securityRealm = await getSecurityRealmInfo();
    await listenToTopicAndLogMessages(securityRealm);
    await setupSendButton(securityRealm);
    const launchAppBtn = document.querySelector("#launch-app-btn");
    launchAppBtn.addEventListener("click", async () => {
        await launchProd();
    });
    const launchNewRealmBtn = document.querySelector("#launch-outofrealm-btn");
    launchNewRealmBtn.addEventListener("click", async () => {
        await launchUat();
    });
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
async function launchProd() {
    const app = await fin.Application.startFromManifest(`${rootPath}app.fin.json`);
    return app;
}
async function launchUat() {
    try {
        const app = await fin.Application.startFromManifest(`${rootPath}uat/app.fin.json`);
        return app;
    }
    catch (error) {
        console.error("Error starting application", error);
    }
}
async function setupSendButton(realm) {
    try {
        const sendMessageBtn = document.querySelector("#send-message");
        sendMessageBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            const iabMessage = document.querySelector("#iab-message");
            const messageText = iabMessage.value;
            await publishMessageToTopic(messageText, realm);
        });
    }
    catch (error) {
        console.error("Error sending IAB message", error);
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
        alert(`Can not publish message to topic: ${topic} in realm ${realm}`);
    }
}
async function listenToTopicAndLogMessages(realm) {
    try {
        const messageLog = document.querySelector("#message-log");
        await fin.InterApplicationBus.subscribe({ uuid: "*" }, topic, ({ id, message, realmName }) => {
            messageLog.innerHTML += `Received message from app with identity of {uuid: ${id.uuid}}\n\nRealm Name: ${realmName}\nMessage: ${message}\n\n`;
        });
    }
    catch (error) {
        if (error) {
            // eslint-disable-next-line no-alert
            alert(`Can not receive message from topic: ${topic} to realm ${realm}`);
        }
    }
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0IsU0FBUyxjQUFjLE9BQU8sTUFBTSxDQUFDO1FBQzlJLENBQUMsQ0FBQyxDQUFDO0tBQ0g7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNmLElBQUksS0FBSyxFQUFFO1lBQ1Ysb0NBQW9DO1lBQ3BDLEtBQUssQ0FBQyx1Q0FBdUMsS0FBSyxhQUFhLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDeEU7S0FDRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2Utc2VjdXJpdHktcmVhbG1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1zZWN1cml0eS1yZWFsbXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2Utc2VjdXJpdHktcmVhbG1zLy4vY2xpZW50L3NyYy92aWV3LWFwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHt9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdCgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuY29uc3QgdG9waWMgPSBcIi9vcGVuZmluL3NhbXBsZS9zZWN1cml0eS1yZWFsbS1leGFtcGxlXCI7XG5jb25zdCByb290UGF0aCA9IGxvY2F0aW9uLmhyZWYucmVwbGFjZShcIi9odG1sL3ZpZXctYXBwLmh0bWxcIiwgXCIvXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzZWN1cml0eVJlYWxtID0gYXdhaXQgZ2V0U2VjdXJpdHlSZWFsbUluZm8oKTtcblx0YXdhaXQgbGlzdGVuVG9Ub3BpY0FuZExvZ01lc3NhZ2VzKHNlY3VyaXR5UmVhbG0pO1xuXHRhd2FpdCBzZXR1cFNlbmRCdXR0b24oc2VjdXJpdHlSZWFsbSk7XG5cdGNvbnN0IGxhdW5jaEFwcEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhdW5jaC1hcHAtYnRuXCIpO1xuXHRsYXVuY2hBcHBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRhd2FpdCBsYXVuY2hQcm9kKCk7XG5cdH0pO1xuXG5cdGNvbnN0IGxhdW5jaE5ld1JlYWxtQnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGF1bmNoLW91dG9mcmVhbG0tYnRuXCIpO1xuXHRsYXVuY2hOZXdSZWFsbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdGF3YWl0IGxhdW5jaFVhdCgpO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2VjdXJpdHlSZWFsbUluZm8oKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBydW50aW1lSW5mbzogT3BlbkZpbi5SdW50aW1lSW5mbyA9IGF3YWl0IGZpbi5TeXN0ZW0uZ2V0UnVudGltZUluZm8oKTtcblx0XHRjb25zdCBzZWN1cml0eVJlYWxtTmFtZTogSFRNTEhlYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN1cml0eS1yZWFsbS1uYW1lXCIpO1xuXHRcdGlmIChydW50aW1lSW5mby5zZWN1cml0eVJlYWxtKSB7XG5cdFx0XHRzZWN1cml0eVJlYWxtTmFtZS5pbm5lckhUTUwgKz0gcnVudGltZUluZm8uc2VjdXJpdHlSZWFsbTtcblx0XHRcdHJldHVybiBydW50aW1lSW5mby5zZWN1cml0eVJlYWxtO1xuXHRcdH1cblx0XHRzZWN1cml0eVJlYWxtTmFtZS5pbm5lckhUTUwgKz0gXCJObyBTZWN1cml0eSBSZWFsbSBQcmVzZW50XCI7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgcnVudGltZSBpbmZvOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbGF1bmNoUHJvZCgpOiBQcm9taXNlPE9wZW5GaW4uQXBwbGljYXRpb24+IHtcblx0Y29uc3QgYXBwID0gYXdhaXQgZmluLkFwcGxpY2F0aW9uLnN0YXJ0RnJvbU1hbmlmZXN0KGAke3Jvb3RQYXRofWFwcC5maW4uanNvbmApO1xuXHRyZXR1cm4gYXBwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsYXVuY2hVYXQoKTogUHJvbWlzZTxPcGVuRmluLkFwcGxpY2F0aW9uPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgYXBwID0gYXdhaXQgZmluLkFwcGxpY2F0aW9uLnN0YXJ0RnJvbU1hbmlmZXN0KGAke3Jvb3RQYXRofXVhdC9hcHAuZmluLmpzb25gKTtcblx0XHRyZXR1cm4gYXBwO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyBhcHBsaWNhdGlvblwiLCBlcnJvcik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0dXBTZW5kQnV0dG9uKHJlYWxtOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBzZW5kTWVzc2FnZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbmQtbWVzc2FnZVwiKTtcblx0XHRzZW5kTWVzc2FnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IGlhYk1lc3NhZ2U6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lhYi1tZXNzYWdlXCIpO1xuXHRcdFx0Y29uc3QgbWVzc2FnZVRleHQ6IHN0cmluZyA9IGlhYk1lc3NhZ2UudmFsdWU7XG5cdFx0XHRhd2FpdCBwdWJsaXNoTWVzc2FnZVRvVG9waWMobWVzc2FnZVRleHQsIHJlYWxtKTtcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBJQUIgbWVzc2FnZVwiLCBlcnJvcik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcHVibGlzaE1lc3NhZ2VUb1RvcGljKG1lc3NhZ2VUZXh0OiBzdHJpbmcsIHJlYWxtOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5wdWJsaXNoKHRvcGljLCB7XG5cdFx0XHRpZDogZmluLm1lLmlkZW50aXR5LFxuXHRcdFx0bWVzc2FnZTogbWVzc2FnZVRleHQsXG5cdFx0XHRyZWFsbU5hbWU6IHJlYWxtXG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuXHRcdGFsZXJ0KGBDYW4gbm90IHB1Ymxpc2ggbWVzc2FnZSB0byB0b3BpYzogJHt0b3BpY30gaW4gcmVhbG0gJHtyZWFsbX1gKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBsaXN0ZW5Ub1RvcGljQW5kTG9nTWVzc2FnZXMocmVhbG06IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IG1lc3NhZ2VMb2c6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlLWxvZ1wiKTtcblx0XHRhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5zdWJzY3JpYmUoeyB1dWlkOiBcIipcIiB9LCB0b3BpYywgKHsgaWQsIG1lc3NhZ2UsIHJlYWxtTmFtZSB9KSA9PiB7XG5cdFx0XHRtZXNzYWdlTG9nLmlubmVySFRNTCArPSBgUmVjZWl2ZWQgbWVzc2FnZSBmcm9tIGFwcCB3aXRoIGlkZW50aXR5IG9mIHt1dWlkOiAke2lkLnV1aWR9fVxcblxcblJlYWxtIE5hbWU6ICR7cmVhbG1OYW1lfVxcbk1lc3NhZ2U6ICR7bWVzc2FnZX1cXG5cXG5gO1xuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG5cdFx0XHRhbGVydChgQ2FuIG5vdCByZWNlaXZlIG1lc3NhZ2UgZnJvbSB0b3BpYzogJHt0b3BpY30gdG8gcmVhbG0gJHtyZWFsbX1gKTtcblx0XHR9XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==