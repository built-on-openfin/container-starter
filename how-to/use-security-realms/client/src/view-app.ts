import { fin } from "openfin-adapter/src/mock";

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

async function init() {
    let app = null;
    const securityRealm = await getSecurityRealmInfo();
    const launchAppBtn: HTMLButtonElement = document.querySelector('.launch-app-btn');
    launchAppBtn.addEventListener('click', async () => {
        app = await handleAppLaunch('PROD');
        sendIabMessage(app.identity, securityRealm);
        messageLog(app.identity, securityRealm);
    })
    const launchNewRealmBtn: HTMLButtonElement = document.querySelector('.launch-outofrealm-btn');
    launchNewRealmBtn.addEventListener('click', async () => {
        app = await handleAppLaunch('UAT');
        sendIabMessage(app.identity, securityRealm);
        messageLog(app.identity, securityRealm);
    })

}

async function getSecurityRealmInfo() {
    const runtimeInfo: OpenFin.RuntimeInfo = await fin.System.getRuntimeInfo();
    const securityRealmName = document.querySelector('#security-realm-name');
    securityRealmName.innerHTML += runtimeInfo.securityRealm;
    return runtimeInfo.securityRealm
}

async function handleAppLaunch(env): Promise<OpenFin.Application> {
    if (env === 'PROD') {
        const app = await fin.Application.startFromManifest('http://localhost:8080/config/prod/window.config.json')
        return app;
    }

    if (env === 'UAT') {
        const app = await fin.Application.startFromManifest('http://localhost:8080/config/uat/window.config.json')
        return app;
    }
}

async function sendIabMessage(id, realm) {
    const sendMessageBtn = document.querySelector('#send-message');
    sendMessageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const iabMessage: HTMLTextAreaElement = document.querySelector('#iab-message');
        const messageText = iabMessage.value;
        handleIabMessage(id, messageText, realm)
    })
}

async function handleIabMessage ({uuid}, messageText, realm) {
    try {
        await fin.InterApplicationBus.send({uuid: uuid}, '/openfin/sample/security-realm-example', {id: fin.me.identity, message: messageText, realmName: realm})
    } catch (error) {
        alert(`Can not send message to app: ${uuid} in realm ${realm}`)
    }
}


async function messageLog({ uuid }, realm) {
    try {
        const messageLog = document.querySelector('#message-log')
        await fin.InterApplicationBus.subscribe({ uuid: uuid }, '/openfin/sample/security-realm-example', ({ id, message, realmName}) => {
            messageLog.innerHTML += `<p>Received message from app with identity of {uuid: ${id.uuid}}</br><strong>MESSAGE:</strong> ${message}</br>REALM NAME: ${realmName}</p>`
        })
    } catch (error) {
        if (error) {
            alert(`Can not receive message from app: ${uuid} to realm ${realm}`)
        }
    }
}