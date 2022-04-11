import { fin } from "openfin-adapter/src/mock";

async function init(): Promise<void> {
    console.log("Platform Init");
}

window.addEventListener("DOMContentLoaded", () => {
    const platform: OpenFin.Platform = fin.Platform.getCurrentSync();
    platform.once("platform-api-ready", init.bind(this));
});

fin.Platform.init({
    overrideCallback: async (Provider) => {
        class Override extends Provider { }
        return new Override();
    }
});