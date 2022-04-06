import { fin } from "openfin-adapter/src/mock";

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error(error);
    }
})

async function openDynamicApplicationWindow() {
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

async function openManifestApplicationWindow() {
    fin.Application.startFromManifest('http://localhost:8080/config/manifest.fin.json')
        .then(app => console.log('App is running'))
        .catch(err => console.log(err));
}

async function init(): Promise<void> {
    const btn = document.getElementById("btn-open-dynamic-window");
    btn.addEventListener("click", (e: Event) => openDynamicApplicationWindow());
    const btn1 = document.getElementById("btn-open-manifest-window");
    btn1.addEventListener("click", (e: Event) => openManifestApplicationWindow());
}



