import type OpenFin from "@openfin/core";

const topic = "/openfin/sample/security-realm-example";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initialize the DOM elements.
 */
async function init(): Promise<void> {
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
 * Setup the send button.
 * @param realm The realm to use.
 */
async function setupSendButton(realm: string): Promise<void> {
	const sendMessageBtn = document.querySelector("#send-message");
	if (sendMessageBtn) {
		sendMessageBtn.addEventListener("click", async (e) => {
			e.preventDefault();
			const iabMessage = document.querySelector<HTMLTextAreaElement>("#iab-message");
			if (iabMessage) {
				const messageText: string = iabMessage.value;
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
async function publishMessageToTopic(messageText: string, realm: string): Promise<void> {
	try {
		await fin.InterApplicationBus.publish(topic, {
			id: fin.me.identity,
			message: messageText,
			realmName: realm
		});
	} catch {
		// eslint-disable-next-line no-alert
		alert(`Can not send message to topic: ${topic} in realm ${realm}`);
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
					messageLog.innerHTML += `Received message from app with identity of {uuid: ${payload.id.uuid}}\n\nRealm Name: ${payload.realmName}\nMessage: ${payload.message}`;
				}
			);
		}
	} catch (error) {
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
async function launchNativeApp(): Promise<OpenFin.ApplicationIdentity> {
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
