import { fin } from "@openfin/core";

const topic = "/openfin/sample/security-realm-example";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

async function init(): Promise<void> {
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

async function getSecurityRealmInfo(): Promise<string> {
	try {
		const runtimeInfo: OpenFin.RuntimeInfo = await fin.System.getRuntimeInfo();
		const securityRealmName: HTMLHeadingElement = document.querySelector("#security-realm-name");
		if (runtimeInfo.securityRealm) {
			securityRealmName.innerHTML += runtimeInfo.securityRealm;
			return runtimeInfo.securityRealm;
		}
		securityRealmName.innerHTML += "No Security Realm Present";
	} catch (error) {
		console.error("Error getting runtime info:", error);
	}
}

async function setupSendButton(realm: string): Promise<void> {
	const sendMessageBtn: HTMLButtonElement = document.querySelector("#send-message");
	sendMessageBtn.addEventListener("click", async (e) => {
		e.preventDefault();
		const iabMessage: HTMLTextAreaElement = document.querySelector("#iab-message");
		const messageText: string = iabMessage.value;
		await publishMessageToTopic(messageText, realm);
	});
}
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

async function listenToTopicAndLogMessages(realm: string): Promise<void> {
	try {
		const messageLog: HTMLDivElement = document.querySelector("#message-log");
		await fin.InterApplicationBus.subscribe({ uuid: "*" }, topic, ({ id, message, realmName }) => {
			messageLog.innerHTML += `<p>Received message from app with identity of {uuid: ${id.uuid}}</br><strong>MESSAGE:</strong> ${message}</br>REALM NAME: ${realmName}</p>`;
		});
	} catch (error) {
		if (error) {
			// eslint-disable-next-line no-alert
			alert(`Can not receive message from topic: ${topic} on realm ${realm}`);
		}
	}
}

async function launchNativeApp(): Promise<OpenFin.ApplicationIdentity> {
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
