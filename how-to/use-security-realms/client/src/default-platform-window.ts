import { fin, inOpenFin } from 'openfin-adapter/src/mock';
const me = fin.me as OpenFin.Window;
const CONTAINER_ID = 'layout-container';

window.addEventListener('DOMContentLoaded', () => {

    fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    
    const root = document.documentElement;
    root.classList.add('light-theme')

    const minimizeBtn = document.querySelector("#minimize-button");
    minimizeBtn.addEventListener('click', () => {
        me.minimize().catch(console.error);
    });

    const maximizeBtn = document.querySelector("#expand-button")
    maximizeBtn.addEventListener('click', () => {
        maxOrRestore().catch(console.error);
    });
    
    const closeBtn = document.querySelector("#close-button")
    closeBtn.addEventListener('click', () => {
        me.close().catch(console.error);
    })
});

async function maxOrRestore() {
    if (await me.getState() === 'normal') {
        return await me.maximize();
    }

    return me.restore();
}