import { fin } from "openfin-adapter/src/mock";

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

const topic = "/openfin/sample/security-realm-example";
const rootPath = location.href.replace("/html/view-app.html", "/");

async function init(): Promise<void> {
    const securityRealm = await getSecurityRealmInfo();
    listenToTopicAndLogMessages(securityRealm);
    setupSendButton(securityRealm);
    const launchAppBtn: HTMLButtonElement = document.querySelector('.launch-app-btn');
    launchAppBtn.addEventListener('click', async () => {
        await launchProd();
    });

    const launchNewRealmBtn: HTMLButtonElement = document.querySelector('.launch-outofrealm-btn');
    launchNewRealmBtn.addEventListener('click', async () => {
        await launchUat();
    });
}

async function getSecurityRealmInfo(): Promise<string> {
    try {
        const runtimeInfo: OpenFin.RuntimeInfo = await fin.System.getRuntimeInfo();
        const securityRealmName: HTMLHeadingElement = document.querySelector('#security-realm-name');
        if(runtimeInfo.securityRealm) {
            securityRealmName.innerHTML += runtimeInfo.securityRealm
            return runtimeInfo.securityRealm
        } else {
            securityRealmName.innerHTML += "No Security Realm Present"
        }
    } catch (error) {
        console.error("Error getting runtime info:", error)
    }
}

async function launchProd(): Promise<OpenFin.Application> {
    const app = await fin.Application.startFromManifest(rootPath + 'config/prod/window.config.json');
    return app;
}

async function launchUat(): Promise<OpenFin.Application> {
    try {
        const app = await fin.Application.startFromManifest(rootPath + 'config/uat/window.config.json');
        return app;   
    } catch (error) {
        console.error("Error starting application", error);
    }
}

async function setupSendButton(realm: string): Promise<void> {
    try {
        const sendMessageBtn: HTMLButtonElement = document.querySelector('#send-message');
        sendMessageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const iabMessage: HTMLTextAreaElement = document.querySelector('#iab-message');
            const messageText: string = iabMessage.value;
            publishMessageToTopic(messageText, realm);
        })    
    } catch(error) {
        console.error("Error sending IAB message", error);
    }
}

async function publishMessageToTopic(messageText: string, realm: string): Promise<void> {
    try {
        await fin.InterApplicationBus.publish(topic, { id: fin.me.identity, message: messageText, realmName: realm });
    } catch (error) {
        alert(`Can not publish message to topic: ${topic} in realm ${realm}`);
    }
}

async function listenToTopicAndLogMessages(realm: string): Promise<void> {
    try {
        const messageLog: HTMLDivElement = document.querySelector('#message-log');
        await fin.InterApplicationBus.subscribe({ uuid: '*' }, topic, ({ id, message, realmName }) => {
            messageLog.innerHTML += `<p>Received message from app with identity of {uuid: ${id.uuid}}</br><strong>MESSAGE:</strong> ${message}</br>REALM NAME: ${realmName}</p>`
        });
    } catch (error) {
        if (error) {
            alert(`Can not receive message from topic: ${topic} to realm ${realm}`);
        }
    }
}