import { fin } from "openfin-adapter/src/mock";
const platformIdentity = {
    uuid: 'prod-main-platform',
}
document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

async function init() {
    const securityRealm = await getSecurityRealmInfo();
    sendIabMessage(securityRealm);
    messageLog(platformIdentity, securityRealm);
}

async function getSecurityRealmInfo() {
    const runtimeInfo: OpenFin.RuntimeInfo = await fin.System.getRuntimeInfo();
    const securityRealmName = document.querySelector('#security-realm-name');
    securityRealmName.innerHTML += runtimeInfo.securityRealm;
    return runtimeInfo.securityRealm;
}

async function sendIabMessage(realm) {
    const sendMessageBtn = document.querySelector('#send-message');
    sendMessageBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const iabMessage: HTMLTextAreaElement = document.querySelector('#iab-message');
        const messageText = iabMessage.value;
        handleIabMessage(platformIdentity,messageText, realm)
    })
}

async function handleIabMessage ({uuid},messageText, realm) {
    try {
        await fin.InterApplicationBus.send({uuid: uuid}, '/openfin/sample/security-realm-example', {id: fin.me.identity, message: messageText, realmName: realm})
    } catch (error) {
        alert(`Can not send message to app: ${uuid} in realm ${realm}`)
    }
}

async function messageLog({uuid}, realm) {
    try {
        const messageLog = document.querySelector('#message-log')
        await fin.InterApplicationBus.subscribe({uuid: uuid}, '/openfin/sample/security-realm-example', ({id, message, realmName}) => {
            messageLog.innerHTML += `<p>Received message from app with identity of {uuid: ${id.uuid}}</br><strong>MESSAGE:</strong> ${message}</br>REALM NAME: ${realmName}</p>`
        })    
    } catch (error) {
        if(error) {
            alert(`Can not receive message from app: ${uuid} to realm ${realm}`)
        }
    }
}