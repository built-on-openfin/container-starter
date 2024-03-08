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
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
const topic = "/openfin/sample/security-realm-example";
const rootPath = location.href.replace("/html/view-app.html", "/");
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    const securityRealm = await getSecurityRealmInfo();
    await listenToTopicAndLogMessages(securityRealm ?? "");
    await setupSendButton(securityRealm ?? "");
    const launchAppBtn = document.querySelector("#launch-app-btn");
    if (launchAppBtn) {
        launchAppBtn.addEventListener("click", async () => {
            await launchProd();
        });
    }
    const launchNewRealmBtn = document.querySelector("#launch-outofrealm-btn");
    if (launchNewRealmBtn) {
        launchNewRealmBtn.addEventListener("click", async () => {
            await launchUat();
        });
    }
}
/**
 * Get the security realm.
 * @returns The realm if it is set.
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
 * Launch the production app.
 * @returns The application.
 */
async function launchProd() {
    const app = await fin.Application.startFromManifest(`${rootPath}app.fin.json`);
    return app;
}
/**
 * Launch the uat app.
 * @returns The application.
 */
async function launchUat() {
    try {
        const app = await fin.Application.startFromManifest(`${rootPath}uat/app.fin.json`);
        return app;
    }
    catch (error) {
        console.error("Error starting application", error);
    }
}
/**
 * Setup the send button.
 * @param realm The realm.
 */
async function setupSendButton(realm) {
    try {
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
    catch (error) {
        console.error("Error sending IAB message", error);
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
        alert(`Can not publish message to topic: ${topic} in realm ${realm}`);
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
                messageLog.innerHTML += `Received message from app with identity of {uuid: ${payload.id.uuid}}\n\nRealm Name: ${payload.realmName}\nMessage: ${payload.message}\n\n`;
            });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7SUFDSixDQUFDO0lBQUMsTUFBTSxDQUFDO1FBQ1Isb0NBQW9DO1FBQ3BDLEtBQUssQ0FBQyxxQ0FBcUMsS0FBSyxhQUFhLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztBQUNGLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsMkJBQTJCLENBQUMsS0FBYTtJQUN2RCxJQUFJLENBQUM7UUFDSixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELElBQUksVUFBVSxFQUFFLENBQUM7WUFDaEIsTUFBTSxHQUFHLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUN0QyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFDYixLQUFLLEVBQ0wsQ0FBQyxPQUFxRSxFQUFFLEVBQUU7Z0JBQ3pFLFVBQVUsQ0FBQyxTQUFTLElBQUkscURBQXFELE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxvQkFBb0IsT0FBTyxDQUFDLFNBQVMsY0FBYyxPQUFPLENBQUMsT0FBTyxNQUFNLENBQUM7WUFDdEssQ0FBQyxDQUNELENBQUM7UUFDSCxDQUFDO0lBQ0YsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDaEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNYLG9DQUFvQztZQUNwQyxLQUFLLENBQUMsdUNBQXVDLEtBQUssYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1zZWN1cml0eS1yZWFsbXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXNlY3VyaXR5LXJlYWxtcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1zZWN1cml0eS1yZWFsbXMvLi9jbGllbnQvc3JjL3ZpZXctYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSBPcGVuRmluIGZyb20gXCJAb3BlbmZpbi9jb3JlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG5jb25zdCB0b3BpYyA9IFwiL29wZW5maW4vc2FtcGxlL3NlY3VyaXR5LXJlYWxtLWV4YW1wbGVcIjtcbmNvbnN0IHJvb3RQYXRoID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKFwiL2h0bWwvdmlldy1hcHAuaHRtbFwiLCBcIi9cIik7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzZWN1cml0eVJlYWxtID0gYXdhaXQgZ2V0U2VjdXJpdHlSZWFsbUluZm8oKTtcblx0YXdhaXQgbGlzdGVuVG9Ub3BpY0FuZExvZ01lc3NhZ2VzKHNlY3VyaXR5UmVhbG0gPz8gXCJcIik7XG5cdGF3YWl0IHNldHVwU2VuZEJ1dHRvbihzZWN1cml0eVJlYWxtID8/IFwiXCIpO1xuXHRjb25zdCBsYXVuY2hBcHBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhdW5jaC1hcHAtYnRuXCIpO1xuXHRpZiAobGF1bmNoQXBwQnRuKSB7XG5cdFx0bGF1bmNoQXBwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBsYXVuY2hQcm9kKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBsYXVuY2hOZXdSZWFsbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGF1bmNoLW91dG9mcmVhbG0tYnRuXCIpO1xuXHRpZiAobGF1bmNoTmV3UmVhbG1CdG4pIHtcblx0XHRsYXVuY2hOZXdSZWFsbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbGF1bmNoVWF0KCk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNlY3VyaXR5IHJlYWxtLlxuICogQHJldHVybnMgVGhlIHJlYWxtIGlmIGl0IGlzIHNldC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0U2VjdXJpdHlSZWFsbUluZm8oKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBydW50aW1lSW5mbzogT3BlbkZpbi5SdW50aW1lSW5mbyA9IGF3YWl0IGZpbi5TeXN0ZW0uZ2V0UnVudGltZUluZm8oKTtcblx0XHRjb25zdCBzZWN1cml0eVJlYWxtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjdXJpdHktcmVhbG0tbmFtZVwiKTtcblx0XHRpZiAoc2VjdXJpdHlSZWFsbU5hbWUpIHtcblx0XHRcdGlmIChydW50aW1lSW5mby5zZWN1cml0eVJlYWxtKSB7XG5cdFx0XHRcdHNlY3VyaXR5UmVhbG1OYW1lLmlubmVySFRNTCArPSBydW50aW1lSW5mby5zZWN1cml0eVJlYWxtO1xuXHRcdFx0XHRyZXR1cm4gcnVudGltZUluZm8uc2VjdXJpdHlSZWFsbTtcblx0XHRcdH1cblx0XHRcdHNlY3VyaXR5UmVhbG1OYW1lLmlubmVySFRNTCArPSBcIk5vIFNlY3VyaXR5IFJlYWxtIFByZXNlbnRcIjtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgcnVudGltZSBpbmZvOlwiLCBlcnJvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBMYXVuY2ggdGhlIHByb2R1Y3Rpb24gYXBwLlxuICogQHJldHVybnMgVGhlIGFwcGxpY2F0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBsYXVuY2hQcm9kKCk6IFByb21pc2U8T3BlbkZpbi5BcHBsaWNhdGlvbj4ge1xuXHRjb25zdCBhcHAgPSBhd2FpdCBmaW4uQXBwbGljYXRpb24uc3RhcnRGcm9tTWFuaWZlc3QoYCR7cm9vdFBhdGh9YXBwLmZpbi5qc29uYCk7XG5cdHJldHVybiBhcHA7XG59XG5cbi8qKlxuICogTGF1bmNoIHRoZSB1YXQgYXBwLlxuICogQHJldHVybnMgVGhlIGFwcGxpY2F0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBsYXVuY2hVYXQoKTogUHJvbWlzZTxPcGVuRmluLkFwcGxpY2F0aW9uIHwgdW5kZWZpbmVkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgYXBwID0gYXdhaXQgZmluLkFwcGxpY2F0aW9uLnN0YXJ0RnJvbU1hbmlmZXN0KGAke3Jvb3RQYXRofXVhdC9hcHAuZmluLmpzb25gKTtcblx0XHRyZXR1cm4gYXBwO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdGFydGluZyBhcHBsaWNhdGlvblwiLCBlcnJvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBTZXR1cCB0aGUgc2VuZCBidXR0b24uXG4gKiBAcGFyYW0gcmVhbG0gVGhlIHJlYWxtLlxuICovXG5hc3luYyBmdW5jdGlvbiBzZXR1cFNlbmRCdXR0b24ocmVhbG06IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHNlbmRNZXNzYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZW5kLW1lc3NhZ2VcIik7XG5cdFx0aWYgKHNlbmRNZXNzYWdlQnRuKSB7XG5cdFx0XHRzZW5kTWVzc2FnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjb25zdCBpYWJNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNpYWItbWVzc2FnZVwiKTtcblx0XHRcdFx0aWYgKGlhYk1lc3NhZ2UpIHtcblx0XHRcdFx0XHRjb25zdCBtZXNzYWdlVGV4dDogc3RyaW5nID0gaWFiTWVzc2FnZS52YWx1ZTtcblx0XHRcdFx0XHRhd2FpdCBwdWJsaXNoTWVzc2FnZVRvVG9waWMobWVzc2FnZVRleHQsIHJlYWxtKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIElBQiBtZXNzYWdlXCIsIGVycm9yKTtcblx0fVxufVxuXG4vKipcbiAqIFB1Ymxpc2ggYSBtZXNzYWdlIHRvIHRoZSB0b3BpYy5cbiAqIEBwYXJhbSBtZXNzYWdlVGV4dCBUaGUgbWVzc2FnZSB0ZXh0LlxuICogQHBhcmFtIHJlYWxtIFRoZSByZWFsbSB0byBzZW5kIHRoZSBtZXNzYWdlIHRvLlxuICovXG5hc3luYyBmdW5jdGlvbiBwdWJsaXNoTWVzc2FnZVRvVG9waWMobWVzc2FnZVRleHQ6IHN0cmluZywgcmVhbG06IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLnB1Ymxpc2godG9waWMsIHtcblx0XHRcdGlkOiBmaW4ubWUuaWRlbnRpdHksXG5cdFx0XHRtZXNzYWdlOiBtZXNzYWdlVGV4dCxcblx0XHRcdHJlYWxtTmFtZTogcmVhbG1cblx0XHR9KTtcblx0fSBjYXRjaCB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG5cdFx0YWxlcnQoYENhbiBub3QgcHVibGlzaCBtZXNzYWdlIHRvIHRvcGljOiAke3RvcGljfSBpbiByZWFsbSAke3JlYWxtfWApO1xuXHR9XG59XG5cbi8qKlxuICogTGlzdGVuIGZvciBtZXNzYWdlcyBhbmQgbG9nIHRoZSByZXN1bHRzLlxuICogQHBhcmFtIHJlYWxtIFRoZSByZWFsbSB0byBsaXN0ZW4gb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxpc3RlblRvVG9waWNBbmRMb2dNZXNzYWdlcyhyZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgbWVzc2FnZUxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVzc2FnZS1sb2dcIik7XG5cdFx0aWYgKG1lc3NhZ2VMb2cpIHtcblx0XHRcdGF3YWl0IGZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLnN1YnNjcmliZShcblx0XHRcdFx0eyB1dWlkOiBcIipcIiB9LFxuXHRcdFx0XHR0b3BpYyxcblx0XHRcdFx0KHBheWxvYWQ6IHsgaWQ6IHsgdXVpZDogc3RyaW5nIH07IG1lc3NhZ2U6IHN0cmluZzsgcmVhbG1OYW1lOiBzdHJpbmcgfSkgPT4ge1xuXHRcdFx0XHRcdG1lc3NhZ2VMb2cuaW5uZXJIVE1MICs9IGBSZWNlaXZlZCBtZXNzYWdlIGZyb20gYXBwIHdpdGggaWRlbnRpdHkgb2Yge3V1aWQ6ICR7cGF5bG9hZC5pZC51dWlkfX1cXG5cXG5SZWFsbSBOYW1lOiAke3BheWxvYWQucmVhbG1OYW1lfVxcbk1lc3NhZ2U6ICR7cGF5bG9hZC5tZXNzYWdlfVxcblxcbmA7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG5cdFx0XHRhbGVydChgQ2FuIG5vdCByZWNlaXZlIG1lc3NhZ2UgZnJvbSB0b3BpYzogJHt0b3BpY30gdG8gcmVhbG0gJHtyZWFsbX1gKTtcblx0XHR9XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==