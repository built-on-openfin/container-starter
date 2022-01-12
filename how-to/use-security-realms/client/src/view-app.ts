import { fin } from "openfin-adapter/src/mock";

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

async function init(): Promise<void> {
    const securityRealm = await getSecurityRealmInfo();

    const launchAppBtn: HTMLButtonElement = document.querySelector('.launch-app-btn');
    launchAppBtn.addEventListener('click', async () => {
        const {identity} = await launchProd();
        sendIabMessage(identity, securityRealm);
        messageLog(identity, securityRealm);
    })

    const launchNewRealmBtn: HTMLButtonElement = document.querySelector('.launch-outofrealm-btn');
    launchNewRealmBtn.addEventListener('click', async () => {
        const {identity} = await launchUat();
        console.log("New App Launched with new Security Realm", identity)
    })

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
    const app = await fin.Application.startFromManifest('http://localhost:8080/config/prod/window.config.json')
    return app;
}
async function launchUat(): Promise<OpenFin.Application> {
    try {
        const app = await fin.Application.startFromManifest('http://localhost:8080/config/uat/window.config.json')
        return app;   
    } catch (error) {
        console.error("Error starting application", error)
    }
}

async function sendIabMessage(id: OpenFin.ApplicationIdentity, realm: string) {
    try {
        const sendMessageBtn: HTMLButtonElement = document.querySelector('#send-message');
        sendMessageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const iabMessage: HTMLTextAreaElement = document.querySelector('#iab-message');
            const messageText: string = iabMessage.value;
            handleIabMessage(id, messageText, realm)
        })    
    } catch(error) {
        console.error("Error sending IAB message", error)
    }
    
}

async function handleIabMessage({ uuid }, messageText, realm): Promise<void> {
    try {
        console.log({ uuid, messageText, realm })
        await fin.InterApplicationBus.send({ uuid: uuid }, '/openfin/sample/security-realm-example', { id: fin.me.identity, message: messageText, realmName: realm })
    } catch (error) {
        alert(`Can not send message to app: ${uuid} in realm ${realm}`)
    }
}


async function messageLog({ uuid }, realm): Promise<void> {
    try {
        const messageLog = document.querySelector('#message-log')
        await fin.InterApplicationBus.subscribe({ uuid: uuid }, '/openfin/sample/security-realm-example', ({ id, message, realmName }) => {
            messageLog.innerHTML += `<p>Received message from app with identity of {uuid: ${id.uuid}}</br><strong>MESSAGE:</strong> ${message}</br>REALM NAME: ${realmName}</p>`
        })
    } catch (error) {
        if (error) {
            alert(`Can not receive message from app: ${uuid} to realm ${realm}`)
        }
    }
}