import { fin } from '@openfin/core';

const ofWin = fin.Window.getCurrentSync();

const maxOrRestore = async () => {
    if (await ofWin.getState() === 'normal') {
        return await ofWin.maximize();
    }

    return ofWin.restore();
};

const closeWindow = () => {
    return ofWin.close();
};

const minimizeWindow = () => {
    return ofWin.minimize();
}; 

const setupTitleBar = () => {
    const title = document.querySelector('#title');
    const minBtn = document.getElementById('minimize-button');
    const maxBtn = document.getElementById('expand-button');
    const closeBtn = document.getElementById('close-button');
    
    title.innerHTML = fin.me.identity.uuid;
    minBtn.onclick = minimizeWindow;
    maxBtn.onclick = maxOrRestore;
    closeBtn.onclick = closeWindow;
};

window.addEventListener('DOMContentLoaded', async () => {
    await fin.Platform.Layout.init();
    setupTitleBar();
});





