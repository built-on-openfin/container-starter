export {};

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

const topic = "/openfin/sample/security-realm-example";
const rootPath = location.href.replace("/html/view-app.html", "/");

async function init(): Promise<void> {
	const securityRealm = await getSecurityRealmInfo();
	await listenToTopicAndLogMessages(securityRealm);
	await setupSendButton(securityRealm);
	const launchAppBtn: HTMLButtonElement = document.querySelector("#launch-app-btn");
	launchAppBtn.addEventListener("click", async () => {
		await launchProd();
	});

	const launchNewRealmBtn: HTMLButtonElement = document.querySelector("#launch-outofrealm-btn");
	launchNewRealmBtn.addEventListener("click", async () => {
		await launchUat();
	});
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

async function launchProd(): Promise<OpenFin.Application> {
	const app = await fin.Application.startFromManifest(`${rootPath}app.fin.json`);
	return app;
}

async function launchUat(): Promise<OpenFin.Application> {
	try {
		const app = await fin.Application.startFromManifest(`${rootPath}uat/app.fin.json`);
		return app;
	} catch (error) {
		console.error("Error starting application", error);
	}
}

async function setupSendButton(realm: string): Promise<void> {
	try {
		const sendMessageBtn: HTMLButtonElement = document.querySelector("#send-message");
		sendMessageBtn.addEventListener("click", async (e) => {
			e.preventDefault();
			const iabMessage: HTMLTextAreaElement = document.querySelector("#iab-message");
			const messageText: string = iabMessage.value;
			await publishMessageToTopic(messageText, realm);
		});
	} catch (error) {
		console.error("Error sending IAB message", error);
	}
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
		alert(`Can not publish message to topic: ${topic} in realm ${realm}`);
	}
}

async function listenToTopicAndLogMessages(realm: string): Promise<void> {
	try {
		const messageLog: HTMLDivElement = document.querySelector("#message-log");
		await fin.InterApplicationBus.subscribe({ uuid: "*" }, topic, ({ id, message, realmName }) => {
			messageLog.innerHTML += `Received message from app with identity of {uuid: ${id.uuid}}\n\nRealm Name: ${realmName}\nMessage: ${message}\n\n`;
		});
	} catch (error) {
		if (error) {
			// eslint-disable-next-line no-alert
			alert(`Can not receive message from topic: ${topic} to realm ${realm}`);
		}
	}
}
