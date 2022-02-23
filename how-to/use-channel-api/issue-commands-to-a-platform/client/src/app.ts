import { fin } from 'openfin-adapter/src/mock';

const me = fin.me as OpenFin.View;

async function initApp() {
    const container = document.getElementById("context-container");
    const viewOptions = await me.getOptions();
    container.innerText = JSON.stringify(viewOptions.customData);
}
if (document.readyState === "complete") {
    initApp();
} else {
    window.addEventListener('load', () => {
        initApp();
    });
}
