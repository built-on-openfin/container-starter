export {};

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

const topic = "/openfin/sample/security-realm-example";
const rootPath = location.href.replace("/html/view-app.html", "/");

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
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
async function getSecurityRealmInfo(): Promise<string | undefined> {
	try {
		const runtimeInfo: OpenFin.RuntimeInfo = await fin.System.getRuntimeInfo();
		const securityRealmName = document.querySelector("#security-realm-name");
		if (securityRealmName) {
			if (runtimeInfo.securityRealm) {
				securityRealmName.innerHTML += runtimeInfo.securityRealm;
				return runtimeInfo.securityRealm;
			}
			securityRealmName.innerHTML += "No Security Realm Present";
		}
	} catch (error) {
		console.error("Error getting runtime info:", error);
	}
}

/**
 * Launch the production app.
 * @returns The application.
 */
async function launchProd(): Promise<OpenFin.Application> {
	const app = await fin.Application.startFromManifest(`${rootPath}app.fin.json`);
	return app;
}

/**
 * Launch the uat app.
 * @returns The application.
 */
async function launchUat(): Promise<OpenFin.Application | undefined> {
	try {
		const app = await fin.Application.startFromManifest(`${rootPath}uat/app.fin.json`);
		return app;
	} catch (error) {
		console.error("Error starting application", error);
	}
}

/**
 * Setup the send button.
 * @param realm The realm.
 */
async function setupSendButton(realm: string): Promise<void> {
	try {
		const sendMessageBtn = document.querySelector("#send-message");
		if (sendMessageBtn) {
			sendMessageBtn.addEventListener("click", async (e) => {
				e.preventDefault();
				const iabMessage = document.querySelector<HTMLInputElement>("#iab-message");
				if (iabMessage) {
					const messageText: string = iabMessage.value;
					await publishMessageToTopic(messageText, realm);
				}
			});
		}
	} catch (error) {
		console.error("Error sending IAB message", error);
	}
}

/**
 * Publish a message to the topic.
 * @param messageText The message text.
 * @param realm The realm to send the message to.
 */
async function publishMessageToTopic(messageText: string, realm: string): Promise<void> {
	try {
		await fin.InterApplicationBus.publish(topic, {
			id: fin.me.identity,
			message: messageText,
			realmName: realm
		});
	} catch {
		// eslint-disable-next-line no-alert
		alert(`Can not publish message to topic: ${topic} in realm ${realm}`);
	}
}

/**
 * Listen for messages and log the results.
 * @param realm The realm to listen on.
 */
async function listenToTopicAndLogMessages(realm: string): Promise<void> {
	try {
		const messageLog = document.querySelector("#message-log");
		if (messageLog) {
			await fin.InterApplicationBus.subscribe(
				{ uuid: "*" },
				topic,
				(payload: { id: { uuid: string }; message: string; realmName: string }) => {
					messageLog.innerHTML += `Received message from app with identity of {uuid: ${payload.id.uuid}}\n\nRealm Name: ${payload.realmName}\nMessage: ${payload.message}\n\n`;
				}
			);
		}
	} catch (error) {
		if (error) {
			// eslint-disable-next-line no-alert
			alert(`Can not receive message from topic: ${topic} to realm ${realm}`);
		}
	}
}
