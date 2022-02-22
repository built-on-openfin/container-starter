import { fin } from "openfin-adapter/src/mock";

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

async function init(): Promise<void> {
   const showPlatformDevToolsButton = document.getElementById("platform-devtools");
   const showWindowDevToolsButton = document.getElementById("window-devtools");
   const showViewDevToolsButton = document.getElementById("view-devtools");

   showPlatformDevToolsButton.onclick = showPlatformDevTools;
   showWindowDevToolsButton.onclick = showWindowDevTools;
   showViewDevToolsButton.onclick = showViewDevTools;
}

async function showPlatformDevTools(): Promise<void> {
    try {
        let identity = fin.me.identity;
        let platformIdentity = { uuid: identity.uuid, name: identity.uuid };
        await fin.System.showDeveloperTools(platformIdentity);
    } catch (error) {
        console.error("Error showing platform developer tools:", error)
    }
}

async function showWindowDevTools(): Promise<void> {
    try {
        let identity = fin.me.identity;
        let view = fin.View.wrapSync(identity);
        let hostWindow = await view.getCurrentWindow();
        await fin.System.showDeveloperTools(hostWindow.identity);
    } catch (error) {
        console.error("Error showing window developer tools:", error)
    }
}

async function showViewDevTools(): Promise<void> {
    try {
        let identity = fin.me.identity;
        await fin.System.showDeveloperTools(identity);
    } catch (error) {
        console.error("Error showing view developer tools:", error)
    }
}
