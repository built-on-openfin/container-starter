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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxNQUFNLEtBQUssR0FBRyx3Q0FBd0MsQ0FBQztBQUV2RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDeEQsSUFBSSxDQUFDO1FBQ0osTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxLQUFLLFVBQVUsSUFBSTtJQUNsQixNQUFNLGFBQWEsR0FBRyxNQUFNLG9CQUFvQixFQUFFLENBQUM7SUFDbkQsSUFBSSxhQUFhLEtBQUssVUFBVSxFQUFFLENBQUM7UUFDbEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLFdBQVc7Z0JBQ2xCLHFMQUFxTCxDQUFDO1FBQ3hMLENBQUM7UUFDRCxNQUFNLEVBQUUsR0FBRyxNQUFNLGVBQWUsRUFBRSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNELE1BQU0sZUFBZSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzQyxNQUFNLDJCQUEyQixDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLG9CQUFvQjtJQUNsQyxJQUFJLENBQUM7UUFDSixNQUFNLFdBQVcsR0FBd0IsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNFLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pFLElBQUksaUJBQWlCLEVBQUUsQ0FBQztZQUN2QixJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDL0IsaUJBQWlCLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUM7Z0JBQ3pELE9BQU8sV0FBVyxDQUFDLGFBQWEsQ0FBQztZQUNsQyxDQUFDO1lBQ0QsaUJBQWlCLENBQUMsU0FBUyxJQUFJLDJCQUEyQixDQUFDO1FBQzVELENBQUM7SUFDRixDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLGVBQWUsQ0FBQyxLQUFhO0lBQzNDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0QsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNwQixjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBc0IsY0FBYyxDQUFDLENBQUM7WUFDL0UsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDaEIsTUFBTSxXQUFXLEdBQVcsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDN0MsTUFBTSxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakQsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztBQUNGLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsS0FBSyxVQUFVLHFCQUFxQixDQUFDLFdBQW1CLEVBQUUsS0FBYTtJQUN0RSxJQUFJLENBQUM7UUFDSixNQUFNLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzVDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVE7WUFDbkIsT0FBTyxFQUFFLFdBQVc7WUFDcEIsU0FBUyxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUFDLE1BQU0sQ0FBQztRQUNSLG9DQUFvQztRQUNwQyxLQUFLLENBQUMsa0NBQWtDLEtBQUssYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsS0FBSyxVQUFVLDJCQUEyQixDQUFDLEtBQWE7SUFDdkQsSUFBSSxDQUFDO1FBQ0osTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxRCxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sR0FBRyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FDdEMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQ2IsS0FBSyxFQUNMLENBQUMsT0FBcUUsRUFBRSxFQUFFO2dCQUN6RSxVQUFVLENBQUMsU0FBUyxJQUFJLHFEQUFxRCxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLE9BQU8sQ0FBQyxTQUFTLGNBQWMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xLLENBQUMsQ0FDRCxDQUFDO1FBQ0gsQ0FBQztJQUNGLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2hCLElBQUksS0FBSyxFQUFFLENBQUM7WUFDWCxvQ0FBb0M7WUFDcEMsS0FBSyxDQUFDLHVDQUF1QyxLQUFLLGFBQWEsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN6RSxDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxLQUFLLFVBQVUsZUFBZTtJQUM3QixNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDeEQsS0FBSyxFQUFFLHdCQUF3QjtRQUMvQixRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDRixDQUFDO0tBQ0QsQ0FBQyxDQUFDO0lBRUgsT0FBTyxTQUFTLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1zZWN1cml0eS1yZWFsbXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLXNlY3VyaXR5LXJlYWxtcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VzZS1zZWN1cml0eS1yZWFsbXMvLi9jbGllbnQvc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuXG5jb25zdCB0b3BpYyA9IFwiL29wZW5maW4vc2FtcGxlL3NlY3VyaXR5LXJlYWxtLWV4YW1wbGVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXQoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgRE9NIGVsZW1lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzZWN1cml0eVJlYWxtID0gYXdhaXQgZ2V0U2VjdXJpdHlSZWFsbUluZm8oKTtcblx0aWYgKHNlY3VyaXR5UmVhbG0gPT09IFwiVUFULU1BSU5cIikge1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1bW1hcnlcIik7XG5cdFx0aWYgKHN1bW1hcnkpIHtcblx0XHRcdHN1bW1hcnkudGV4dENvbnRlbnQgPVxuXHRcdFx0XHRcIlRoaXMgVUFUIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgbGF1bmNoIGEgLm5ldCBjb25zb2xlIGFwcGxpY2F0aW9uIHRoYXQgaXMgdGllZCB0byB0aGUgVUFUIHNlY3VyaXR5IHJlYWxtIGFuZCB3aWxsIG5vdCByZWNlaXZlIG1lc3NhZ2VzIGZyb20gdGhlIFBST0QgcmVhbG0uXCI7XG5cdFx0fVxuXHRcdGNvbnN0IGlkID0gYXdhaXQgbGF1bmNoTmF0aXZlQXBwKCk7XG5cdFx0Y29uc29sZS5sb2coaWQpO1xuXHR9XG5cdGF3YWl0IHNldHVwU2VuZEJ1dHRvbihzZWN1cml0eVJlYWxtID8/IFwiXCIpO1xuXHRhd2FpdCBsaXN0ZW5Ub1RvcGljQW5kTG9nTWVzc2FnZXMoc2VjdXJpdHlSZWFsbSA/PyBcIlwiKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNlY3VyaXR5IHJlYWxtIGluZm8uXG4gKiBAcmV0dXJucyBUaGUgc2VjdXJpdHkgcmVhbG0gaWYgaXQgaXMgc2V0LlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRTZWN1cml0eVJlYWxtSW5mbygpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJ1bnRpbWVJbmZvOiBPcGVuRmluLlJ1bnRpbWVJbmZvID0gYXdhaXQgZmluLlN5c3RlbS5nZXRSdW50aW1lSW5mbygpO1xuXHRcdGNvbnN0IHNlY3VyaXR5UmVhbG1OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN1cml0eS1yZWFsbS1uYW1lXCIpO1xuXHRcdGlmIChzZWN1cml0eVJlYWxtTmFtZSkge1xuXHRcdFx0aWYgKHJ1bnRpbWVJbmZvLnNlY3VyaXR5UmVhbG0pIHtcblx0XHRcdFx0c2VjdXJpdHlSZWFsbU5hbWUuaW5uZXJIVE1MICs9IHJ1bnRpbWVJbmZvLnNlY3VyaXR5UmVhbG07XG5cdFx0XHRcdHJldHVybiBydW50aW1lSW5mby5zZWN1cml0eVJlYWxtO1xuXHRcdFx0fVxuXHRcdFx0c2VjdXJpdHlSZWFsbU5hbWUuaW5uZXJIVE1MICs9IFwiTm8gU2VjdXJpdHkgUmVhbG0gUHJlc2VudFwiO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBydW50aW1lIGluZm86XCIsIGVycm9yKTtcblx0fVxufVxuXG4vKipcbiAqIFNldHVwIHRoZSBzZW5kIGJ1dHRvbi5cbiAqIEBwYXJhbSByZWFsbSBUaGUgcmVhbG0gdG8gdXNlLlxuICovXG5hc3luYyBmdW5jdGlvbiBzZXR1cFNlbmRCdXR0b24ocmVhbG06IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBzZW5kTWVzc2FnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VuZC1tZXNzYWdlXCIpO1xuXHRpZiAoc2VuZE1lc3NhZ2VCdG4pIHtcblx0XHRzZW5kTWVzc2FnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IGlhYk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KFwiI2lhYi1tZXNzYWdlXCIpO1xuXHRcdFx0aWYgKGlhYk1lc3NhZ2UpIHtcblx0XHRcdFx0Y29uc3QgbWVzc2FnZVRleHQ6IHN0cmluZyA9IGlhYk1lc3NhZ2UudmFsdWU7XG5cdFx0XHRcdGF3YWl0IHB1Ymxpc2hNZXNzYWdlVG9Ub3BpYyhtZXNzYWdlVGV4dCwgcmVhbG0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogUHVibGlzaCBhIG1lc3NhZ2UgdG8gdGhlIHRvcGljLlxuICogQHBhcmFtIG1lc3NhZ2VUZXh0IFRoZSBtZXNzYWdlIHRleHQuXG4gKiBAcGFyYW0gcmVhbG0gVGhlIHJlYWxtIHRvIHNlbmQgdGhlIG1lc3NhZ2UgdG8uXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hNZXNzYWdlVG9Ub3BpYyhtZXNzYWdlVGV4dDogc3RyaW5nLCByZWFsbTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMucHVibGlzaCh0b3BpYywge1xuXHRcdFx0aWQ6IGZpbi5tZS5pZGVudGl0eSxcblx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VUZXh0LFxuXHRcdFx0cmVhbG1OYW1lOiByZWFsbVxuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcblx0XHRhbGVydChgQ2FuIG5vdCBzZW5kIG1lc3NhZ2UgdG8gdG9waWM6ICR7dG9waWN9IGluIHJlYWxtICR7cmVhbG19YCk7XG5cdH1cbn1cblxuLyoqXG4gKiBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGFuZCBsb2cgdGhlIHJlc3VsdHMuXG4gKiBAcGFyYW0gcmVhbG0gVGhlIHJlYWxtIHRvIGxpc3RlbiBvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbGlzdGVuVG9Ub3BpY0FuZExvZ01lc3NhZ2VzKHJlYWxtOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBtZXNzYWdlTG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlLWxvZ1wiKTtcblx0XHRpZiAobWVzc2FnZUxvZykge1xuXHRcdFx0YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuc3Vic2NyaWJlKFxuXHRcdFx0XHR7IHV1aWQ6IFwiKlwiIH0sXG5cdFx0XHRcdHRvcGljLFxuXHRcdFx0XHQocGF5bG9hZDogeyBpZDogeyB1dWlkOiBzdHJpbmcgfTsgbWVzc2FnZTogc3RyaW5nOyByZWFsbU5hbWU6IHN0cmluZyB9KSA9PiB7XG5cdFx0XHRcdFx0bWVzc2FnZUxvZy5pbm5lckhUTUwgKz0gYFJlY2VpdmVkIG1lc3NhZ2UgZnJvbSBhcHAgd2l0aCBpZGVudGl0eSBvZiB7dXVpZDogJHtwYXlsb2FkLmlkLnV1aWR9fVxcblxcblJlYWxtIE5hbWU6ICR7cGF5bG9hZC5yZWFsbU5hbWV9XFxuTWVzc2FnZTogJHtwYXlsb2FkLm1lc3NhZ2V9YDtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcblx0XHRcdGFsZXJ0KGBDYW4gbm90IHJlY2VpdmUgbWVzc2FnZSBmcm9tIHRvcGljOiAke3RvcGljfSBvbiByZWFsbSAke3JlYWxtfWApO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIExhdW5jaCBhIG5hdGl2ZSBhcHAuXG4gKiBAcmV0dXJucyBUaGUgYXBwbGljYXRpb24gaWRlbnRpdHkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxhdW5jaE5hdGl2ZUFwcCgpOiBQcm9taXNlPE9wZW5GaW4uQXBwbGljYXRpb25JZGVudGl0eT4ge1xuXHRjb25zdCBuYXRpdmVBcHAgPSBhd2FpdCBmaW4uU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2Vzcyh7XG5cdFx0YWxpYXM6IFwic2VjdXJpdHktcmVhbG1zLW5hdGl2ZVwiLFxuXHRcdGxpc3RlbmVyOiBhc3luYyAocmVzdWx0KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xuXHRcdFx0aWYgKHJlc3VsdC5leGl0Q29kZSA9PT0gMSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIk5hdGl2ZSBBcHAgSGFzIEV4aXRlZFwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBuYXRpdmVBcHA7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=