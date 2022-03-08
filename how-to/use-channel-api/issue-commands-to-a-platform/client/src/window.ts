import { fin } from "openfin-adapter/src/mock";

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

let lastCreatedView;
let channelClient: OpenFin.ChannelClient;

async function init(): Promise<void> {
    const launchPlatformButton = document.getElementById("launch-platform");
    const requestViewButton = document.getElementById("request-view");
    const requestViewInSameWindowButton = document.getElementById("request-view-same-window");
    launchPlatformButton.onclick = launchPlatform;
    requestViewButton.onclick = requestView;
    requestViewInSameWindowButton.onclick = requestViewInLastWindow;
}

async function launchPlatform(): Promise<void> {
    try {
        await fin.System.launchManifest("http://localhost:8080/config/platform.fin.json");
        channelClient = await fin.InterApplicationBus.Channel.connect("platform-command", {
            payload: { token: "an example token" }
        });
    } catch (error) {
        console.error("Error launching target platform app:", error)
    }
}

async function requestView(): Promise<void> {
    try {
        // you have the option of letting the connected app to provide view options or maybe you will provide a more restritive option where they can just specify an id of a view to load
        // and the platform app does a lookup.
        lastCreatedView = await channelClient.dispatch("createView", {
            viewOptions: {
                url: "http://localhost:8080/html/app.html",
                customData: {
                    dateNow: Date.now()
                } 
            }
        });
    } catch (error) {
        console.error("Error issuing command to platform:", error)
    }
}

async function requestViewInLastWindow(): Promise<void> {
    try {
        // you have the option of letting the connected app to provide view options or maybe you will provide a more restritive option where they can just specify an id of a view to load
        // and the platform app does a lookup.
        lastCreatedView = await channelClient.dispatch("createView", {
            viewOptions: {
                url: "http://localhost:8080/html/app.html",
                customData: {
                    dateNow: Date.now()
                } 
            },
            target: lastCreatedView
        });
    } catch (error) {
        console.error("Error issuing command to platform:", error)
    }
}