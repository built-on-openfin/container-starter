import { fin } from "openfin-adapter/src/mock";

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

async function init(): Promise<void> {
   const launchPlatformButton = document.getElementById("launch-platform");
   const requestViewButton = document.getElementById("request-view");
   launchPlatformButton.onclick = launchPlatform;
   requestViewButton.onclick = requestView;
}

async function launchPlatform(): Promise<void> {
    try {
        await fin.System.launchManifest("http://localhost:8080/config/platform.fin.json");
    } catch (error) {
        console.error("Error launching target platform app:", error)
    }
}

async function requestView(): Promise<void> {
    try {
        let channelClient = await fin.InterApplicationBus.Channel.connect("platform-command", { 
            payload: { token: "an example token"}
        });

        channelClient.dispatch("createView", {
            data: {
                dateNow: Date.now()
            }
        });
    } catch (error) {
        console.error("Error issuing command to platform:", error)
    }
}