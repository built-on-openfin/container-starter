import { fin } from "openfin-adapter/src/mock";

async function init() {
    // create a channel to receive commands from external apps
    let actionChannel = await fin.InterApplicationBus.Channel.create("platform-command");
    
    actionChannel.onConnection((identity, payload:any)=> {
        // on connection you can validate the identity and optionally specify that a payload to prove id needs to be passed
        // if you wanted to deny a connection you can throw an exception here
        console.log("Application connecting to action channel: ", identity);
        console.log("Payload passed by connecting application: ", payload);
    });

    // an example of a command you wish to expose.
    // alternatively you could have a single command function exposed which could have an action type
    actionChannel.register("createView", async (payload, identity)=> {
        // there would likely be validation and additional logic here.
        let platform = fin.Platform.getCurrentSync();
        await platform.createView({ url: "http://localhost:8080/html/app.html", target:undefined, customData: payload });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    let platform = fin.Platform.getCurrentSync();
    platform.once("platform-api-ready", init.bind(this));
});

fin.Platform.init({
    overrideCallback: async (Provider) => {
      class Override extends Provider {}
      return new Override();
    }
});