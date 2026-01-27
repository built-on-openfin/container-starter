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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztJQUNKLENBQUM7SUFBQyxNQUFNLENBQUM7UUFDUixvQ0FBb0M7UUFDcEMsS0FBSyxDQUFDLHFDQUFxQyxLQUFLLGFBQWEsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0FBQ0YsQ0FBQztBQUVEOzs7R0FHRztBQUNILEtBQUssVUFBVSwyQkFBMkIsQ0FBQyxLQUFhO0lBQ3ZELElBQUksQ0FBQztRQUNKLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUQsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNoQixNQUFNLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQ3RDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUNiLEtBQUssRUFDTCxDQUFDLE9BQXFFLEVBQUUsRUFBRTtnQkFDekUsVUFBVSxDQUFDLFNBQVMsSUFBSSxxREFBcUQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixPQUFPLENBQUMsU0FBUyxjQUFjLE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQztZQUN0SyxDQUFDLENBQ0QsQ0FBQztRQUNILENBQUM7SUFDRixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ1gsb0NBQW9DO1lBQ3BDLEtBQUssQ0FBQyx1Q0FBdUMsS0FBSyxhQUFhLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDekUsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXNlY3VyaXR5LXJlYWxtcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91c2Utc2VjdXJpdHktcmVhbG1zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlLXNlY3VyaXR5LXJlYWxtcy8uL2NsaWVudC9zcmMvdmlldy1hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIE9wZW5GaW4gZnJvbSBcIkBvcGVuZmluL2NvcmVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXREb20oKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbmNvbnN0IHRvcGljID0gXCIvb3BlbmZpbi9zYW1wbGUvc2VjdXJpdHktcmVhbG0tZXhhbXBsZVwiO1xuY29uc3Qgcm9vdFBhdGggPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCIvaHRtbC92aWV3LWFwcC5odG1sXCIsIFwiL1wiKTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHNlY3VyaXR5UmVhbG0gPSBhd2FpdCBnZXRTZWN1cml0eVJlYWxtSW5mbygpO1xuXHRhd2FpdCBsaXN0ZW5Ub1RvcGljQW5kTG9nTWVzc2FnZXMoc2VjdXJpdHlSZWFsbSA/PyBcIlwiKTtcblx0YXdhaXQgc2V0dXBTZW5kQnV0dG9uKHNlY3VyaXR5UmVhbG0gPz8gXCJcIik7XG5cdGNvbnN0IGxhdW5jaEFwcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGF1bmNoLWFwcC1idG5cIik7XG5cdGlmIChsYXVuY2hBcHBCdG4pIHtcblx0XHRsYXVuY2hBcHBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGxhdW5jaFByb2QoKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGxhdW5jaE5ld1JlYWxtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXVuY2gtb3V0b2ZyZWFsbS1idG5cIik7XG5cdGlmIChsYXVuY2hOZXdSZWFsbUJ0bikge1xuXHRcdGxhdW5jaE5ld1JlYWxtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBsYXVuY2hVYXQoKTtcblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIEdldCB0aGUgc2VjdXJpdHkgcmVhbG0uXG4gKiBAcmV0dXJucyBUaGUgcmVhbG0gaWYgaXQgaXMgc2V0LlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRTZWN1cml0eVJlYWxtSW5mbygpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJ1bnRpbWVJbmZvOiBPcGVuRmluLlJ1bnRpbWVJbmZvID0gYXdhaXQgZmluLlN5c3RlbS5nZXRSdW50aW1lSW5mbygpO1xuXHRcdGNvbnN0IHNlY3VyaXR5UmVhbG1OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN1cml0eS1yZWFsbS1uYW1lXCIpO1xuXHRcdGlmIChzZWN1cml0eVJlYWxtTmFtZSkge1xuXHRcdFx0aWYgKHJ1bnRpbWVJbmZvLnNlY3VyaXR5UmVhbG0pIHtcblx0XHRcdFx0c2VjdXJpdHlSZWFsbU5hbWUuaW5uZXJIVE1MICs9IHJ1bnRpbWVJbmZvLnNlY3VyaXR5UmVhbG07XG5cdFx0XHRcdHJldHVybiBydW50aW1lSW5mby5zZWN1cml0eVJlYWxtO1xuXHRcdFx0fVxuXHRcdFx0c2VjdXJpdHlSZWFsbU5hbWUuaW5uZXJIVE1MICs9IFwiTm8gU2VjdXJpdHkgUmVhbG0gUHJlc2VudFwiO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBydW50aW1lIGluZm86XCIsIGVycm9yKTtcblx0fVxufVxuXG4vKipcbiAqIExhdW5jaCB0aGUgcHJvZHVjdGlvbiBhcHAuXG4gKiBAcmV0dXJucyBUaGUgYXBwbGljYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaFByb2QoKTogUHJvbWlzZTxPcGVuRmluLkFwcGxpY2F0aW9uPiB7XG5cdGNvbnN0IGFwcCA9IGF3YWl0IGZpbi5BcHBsaWNhdGlvbi5zdGFydEZyb21NYW5pZmVzdChgJHtyb290UGF0aH1hcHAuZmluLmpzb25gKTtcblx0cmV0dXJuIGFwcDtcbn1cblxuLyoqXG4gKiBMYXVuY2ggdGhlIHVhdCBhcHAuXG4gKiBAcmV0dXJucyBUaGUgYXBwbGljYXRpb24uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaFVhdCgpOiBQcm9taXNlPE9wZW5GaW4uQXBwbGljYXRpb24gfCB1bmRlZmluZWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBhcHAgPSBhd2FpdCBmaW4uQXBwbGljYXRpb24uc3RhcnRGcm9tTWFuaWZlc3QoYCR7cm9vdFBhdGh9dWF0L2FwcC5maW4uanNvbmApO1xuXHRcdHJldHVybiBhcHA7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIGFwcGxpY2F0aW9uXCIsIGVycm9yKTtcblx0fVxufVxuXG4vKipcbiAqIFNldHVwIHRoZSBzZW5kIGJ1dHRvbi5cbiAqIEBwYXJhbSByZWFsbSBUaGUgcmVhbG0uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldHVwU2VuZEJ1dHRvbihyZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc2VuZE1lc3NhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbmQtbWVzc2FnZVwiKTtcblx0XHRpZiAoc2VuZE1lc3NhZ2VCdG4pIHtcblx0XHRcdHNlbmRNZXNzYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnN0IGlhYk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2lhYi1tZXNzYWdlXCIpO1xuXHRcdFx0XHRpZiAoaWFiTWVzc2FnZSkge1xuXHRcdFx0XHRcdGNvbnN0IG1lc3NhZ2VUZXh0OiBzdHJpbmcgPSBpYWJNZXNzYWdlLnZhbHVlO1xuXHRcdFx0XHRcdGF3YWl0IHB1Ymxpc2hNZXNzYWdlVG9Ub3BpYyhtZXNzYWdlVGV4dCwgcmVhbG0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgSUFCIG1lc3NhZ2VcIiwgZXJyb3IpO1xuXHR9XG59XG5cbi8qKlxuICogUHVibGlzaCBhIG1lc3NhZ2UgdG8gdGhlIHRvcGljLlxuICogQHBhcmFtIG1lc3NhZ2VUZXh0IFRoZSBtZXNzYWdlIHRleHQuXG4gKiBAcGFyYW0gcmVhbG0gVGhlIHJlYWxtIHRvIHNlbmQgdGhlIG1lc3NhZ2UgdG8uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hNZXNzYWdlVG9Ub3BpYyhtZXNzYWdlVGV4dDogc3RyaW5nLCByZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMucHVibGlzaCh0b3BpYywge1xuXHRcdFx0aWQ6IGZpbi5tZS5pZGVudGl0eSxcblx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VUZXh0LFxuXHRcdFx0cmVhbG1OYW1lOiByZWFsbVxuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcblx0XHRhbGVydChgQ2FuIG5vdCBwdWJsaXNoIG1lc3NhZ2UgdG8gdG9waWM6ICR7dG9waWN9IGluIHJlYWxtICR7cmVhbG19YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGFuZCBsb2cgdGhlIHJlc3VsdHMuXG4gKiBAcGFyYW0gcmVhbG0gVGhlIHJlYWxtIHRvIGxpc3RlbiBvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbGlzdGVuVG9Ub3BpY0FuZExvZ01lc3NhZ2VzKHJlYWxtOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBtZXNzYWdlTG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlLWxvZ1wiKTtcblx0XHRpZiAobWVzc2FnZUxvZykge1xuXHRcdFx0YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuc3Vic2NyaWJlKFxuXHRcdFx0XHR7IHV1aWQ6IFwiKlwiIH0sXG5cdFx0XHRcdHRvcGljLFxuXHRcdFx0XHQocGF5bG9hZDogeyBpZDogeyB1dWlkOiBzdHJpbmcgfTsgbWVzc2FnZTogc3RyaW5nOyByZWFsbU5hbWU6IHN0cmluZyB9KSA9PiB7XG5cdFx0XHRcdFx0bWVzc2FnZUxvZy5pbm5lckhUTUwgKz0gYFJlY2VpdmVkIG1lc3NhZ2UgZnJvbSBhcHAgd2l0aCBpZGVudGl0eSBvZiB7dXVpZDogJHtwYXlsb2FkLmlkLnV1aWR9fVxcblxcblJlYWxtIE5hbWU6ICR7cGF5bG9hZC5yZWFsbU5hbWV9XFxuTWVzc2FnZTogJHtwYXlsb2FkLm1lc3NhZ2V9XFxuXFxuYDtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcblx0XHRcdGFsZXJ0KGBDYW4gbm90IHJlY2VpdmUgbWVzc2FnZSBmcm9tIHRvcGljOiAke3RvcGljfSB0byByZWFsbSAke3JlYWxtfWApO1xuXHRcdH1cblx0fVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==