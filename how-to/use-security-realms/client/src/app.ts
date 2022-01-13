import { fin } from "openfin-adapter/src/mock";
const platformIdentity: OpenFin.ApplicationIdentity = {
    uuid: 'prod-main-platform',
}
document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

async function init(): Promise<void> {
    const securityRealm = await getSecurityRealmInfo();
    sendIabMessage(securityRealm);
    messageLog(platformIdentity, securityRealm);
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

async function sendIabMessage(realm: string): Promise<void> {
    const sendMessageBtn: HTMLButtonElement = document.querySelector('#send-message');
    sendMessageBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const iabMessage: HTMLTextAreaElement = document.querySelector('#iab-message');
        const messageText: string = iabMessage.value;
        handleIabMessage(platformIdentity, messageText, realm)
    })
}
async function handleIabMessage({uuid}: OpenFin.ApplicationIdentity, messageText: string, realm: string): Promise<void> {
    try {
        await fin.InterApplicationBus.send({uuid: uuid}, '/openfin/sample/security-realm-example', {id: fin.me.identity, message: messageText, realmName: realm})
    } catch (error) {
        alert(`Can not send message to app: ${uuid} in realm ${realm}`)
    }
}

async function messageLog({uuid}: OpenFin.ApplicationIdentity, realm: string): Promise<void> {
    try {
        const messageLog: HTMLDivElement = document.querySelector('#message-log')
        await fin.InterApplicationBus.subscribe({uuid: uuid}, '/openfin/sample/security-realm-example', ({id, message, realmName}) => {
            messageLog.innerHTML += `<p>Received message from app with identity of {uuid: ${id.uuid}}</br><strong>MESSAGE:</strong> ${message}</br>REALM NAME: ${realmName}</p>`
        })    
    } catch (error) {
        if(error) {
            alert(`Can not receive message from app: ${uuid} to realm ${realm}`)
        }
    }
}