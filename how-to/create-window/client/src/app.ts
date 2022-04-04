import { fin } from "openfin-adapter/src/mock";

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

async function openDynamicWindow() {
    const winOption = {
        name: 'child',
        defaultWidth: 800,
        defaultHeight: 800,
        url: 'https://cdn.openfin.co/docs/javascript/stable/tutorial-Window.create.html',
        frame: true,
        autoShow: true
    };
    return await fin.Window.create(winOption);
}

async function openManifestWindow() {
    fin.Application.startFromManifest('http://localhost:8080/config/manifest.json')
        .then(app => console.log('App is running'))
        .catch(err => console.log(err));
}

async function init(): Promise<void> {
    let btn = document.getElementById("btn-open-dynamic-window");
    btn.addEventListener("click", (e: Event) => openDynamicWindow());
    let btn1 = document.getElementById("btn-open-manifest-window");
    btn1.addEventListener("click", (e: Event) => openManifestWindow());
}



