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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxHQUFHLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQXFFLEVBQUUsRUFBRTtnQkFDdkksVUFBVSxDQUFDLFNBQVMsSUFBSSxxREFBcUQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG9CQUFvQixPQUFPLENBQUMsU0FBUyxjQUFjLE9BQU8sQ0FBQyxPQUFPLE1BQU0sQ0FBQztZQUN0SyxDQUFDLENBQUMsQ0FBQztTQUNIO0tBQ0Q7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNmLElBQUksS0FBSyxFQUFFO1lBQ1Ysb0NBQW9DO1lBQ3BDLEtBQUssQ0FBQyx1Q0FBdUMsS0FBSyxhQUFhLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDeEU7S0FDRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2Utc2VjdXJpdHktcmVhbG1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZS1zZWN1cml0eS1yZWFsbXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2Utc2VjdXJpdHktcmVhbG1zLy4vY2xpZW50L3NyYy92aWV3LWFwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgfTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXQoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbmNvbnN0IHRvcGljID0gXCIvb3BlbmZpbi9zYW1wbGUvc2VjdXJpdHktcmVhbG0tZXhhbXBsZVwiO1xuY29uc3Qgcm9vdFBhdGggPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoXCIvaHRtbC92aWV3LWFwcC5odG1sXCIsIFwiL1wiKTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc2VjdXJpdHlSZWFsbSA9IGF3YWl0IGdldFNlY3VyaXR5UmVhbG1JbmZvKCk7XG5cdGF3YWl0IGxpc3RlblRvVG9waWNBbmRMb2dNZXNzYWdlcyhzZWN1cml0eVJlYWxtID8/IFwiXCIpO1xuXHRhd2FpdCBzZXR1cFNlbmRCdXR0b24oc2VjdXJpdHlSZWFsbSA/PyBcIlwiKTtcblx0Y29uc3QgbGF1bmNoQXBwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXVuY2gtYXBwLWJ0blwiKTtcblx0aWYgKGxhdW5jaEFwcEJ0bikge1xuXHRcdGxhdW5jaEFwcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgbGF1bmNoUHJvZCgpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgbGF1bmNoTmV3UmVhbG1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xhdW5jaC1vdXRvZnJlYWxtLWJ0blwiKTtcblx0aWYgKGxhdW5jaE5ld1JlYWxtQnRuKSB7XG5cdFx0bGF1bmNoTmV3UmVhbG1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IGxhdW5jaFVhdCgpO1xuXHRcdH0pO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNlY3VyaXR5UmVhbG1JbmZvKCk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcnVudGltZUluZm86IE9wZW5GaW4uUnVudGltZUluZm8gPSBhd2FpdCBmaW4uU3lzdGVtLmdldFJ1bnRpbWVJbmZvKCk7XG5cdFx0Y29uc3Qgc2VjdXJpdHlSZWFsbU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3VyaXR5LXJlYWxtLW5hbWVcIik7XG5cdFx0aWYgKHNlY3VyaXR5UmVhbG1OYW1lKSB7XG5cdFx0XHRpZiAocnVudGltZUluZm8uc2VjdXJpdHlSZWFsbSkge1xuXHRcdFx0XHRzZWN1cml0eVJlYWxtTmFtZS5pbm5lckhUTUwgKz0gcnVudGltZUluZm8uc2VjdXJpdHlSZWFsbTtcblx0XHRcdFx0cmV0dXJuIHJ1bnRpbWVJbmZvLnNlY3VyaXR5UmVhbG07XG5cdFx0XHR9XG5cdFx0XHRzZWN1cml0eVJlYWxtTmFtZS5pbm5lckhUTUwgKz0gXCJObyBTZWN1cml0eSBSZWFsbSBQcmVzZW50XCI7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIHJ1bnRpbWUgaW5mbzpcIiwgZXJyb3IpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaFByb2QoKTogUHJvbWlzZTxPcGVuRmluLkFwcGxpY2F0aW9uPiB7XG5cdGNvbnN0IGFwcCA9IGF3YWl0IGZpbi5BcHBsaWNhdGlvbi5zdGFydEZyb21NYW5pZmVzdChgJHtyb290UGF0aH1hcHAuZmluLmpzb25gKTtcblx0cmV0dXJuIGFwcDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbGF1bmNoVWF0KCk6IFByb21pc2U8T3BlbkZpbi5BcHBsaWNhdGlvbiB8IHVuZGVmaW5lZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGFwcCA9IGF3YWl0IGZpbi5BcHBsaWNhdGlvbi5zdGFydEZyb21NYW5pZmVzdChgJHtyb290UGF0aH11YXQvYXBwLmZpbi5qc29uYCk7XG5cdFx0cmV0dXJuIGFwcDtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3Igc3RhcnRpbmcgYXBwbGljYXRpb25cIiwgZXJyb3IpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldHVwU2VuZEJ1dHRvbihyZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3Qgc2VuZE1lc3NhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbmQtbWVzc2FnZVwiKTtcblx0XHRpZiAoc2VuZE1lc3NhZ2VCdG4pIHtcblx0XHRcdHNlbmRNZXNzYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnN0IGlhYk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2lhYi1tZXNzYWdlXCIpO1xuXHRcdFx0XHRpZiAoaWFiTWVzc2FnZSkge1xuXHRcdFx0XHRcdGNvbnN0IG1lc3NhZ2VUZXh0OiBzdHJpbmcgPSBpYWJNZXNzYWdlLnZhbHVlO1xuXHRcdFx0XHRcdGF3YWl0IHB1Ymxpc2hNZXNzYWdlVG9Ub3BpYyhtZXNzYWdlVGV4dCwgcmVhbG0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgSUFCIG1lc3NhZ2VcIiwgZXJyb3IpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hNZXNzYWdlVG9Ub3BpYyhtZXNzYWdlVGV4dDogc3RyaW5nLCByZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMucHVibGlzaCh0b3BpYywge1xuXHRcdFx0aWQ6IGZpbi5tZS5pZGVudGl0eSxcblx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VUZXh0LFxuXHRcdFx0cmVhbG1OYW1lOiByZWFsbVxuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcblx0XHRhbGVydChgQ2FuIG5vdCBwdWJsaXNoIG1lc3NhZ2UgdG8gdG9waWM6ICR7dG9waWN9IGluIHJlYWxtICR7cmVhbG19YCk7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbGlzdGVuVG9Ub3BpY0FuZExvZ01lc3NhZ2VzKHJlYWxtOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBtZXNzYWdlTG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlLWxvZ1wiKTtcblx0XHRpZiAobWVzc2FnZUxvZykge1xuXHRcdFx0YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuc3Vic2NyaWJlKHsgdXVpZDogXCIqXCIgfSwgdG9waWMsIChwYXlsb2FkOiB7IGlkOiB7IHV1aWQ6IHN0cmluZyB9OyBtZXNzYWdlOiBzdHJpbmc7IHJlYWxtTmFtZTogc3RyaW5nIH0pID0+IHtcblx0XHRcdFx0bWVzc2FnZUxvZy5pbm5lckhUTUwgKz0gYFJlY2VpdmVkIG1lc3NhZ2UgZnJvbSBhcHAgd2l0aCBpZGVudGl0eSBvZiB7dXVpZDogJHtwYXlsb2FkLmlkLnV1aWR9fVxcblxcblJlYWxtIE5hbWU6ICR7cGF5bG9hZC5yZWFsbU5hbWV9XFxuTWVzc2FnZTogJHtwYXlsb2FkLm1lc3NhZ2V9XFxuXFxuYDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuXHRcdFx0YWxlcnQoYENhbiBub3QgcmVjZWl2ZSBtZXNzYWdlIGZyb20gdG9waWM6ICR7dG9waWN9IHRvIHJlYWxtICR7cmVhbG19YCk7XG5cdFx0fVxuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=