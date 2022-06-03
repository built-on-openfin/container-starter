import OpenFin, { fin } from '@openfin/core';
import { PlatformContextGroups, PlatformContextGroup} from './shapes';

export const CONTAINER_ID = 'layout-container';
const openfinWindow: OpenFin.Window = fin.Window.getCurrentSync();
const openfinApplication: OpenFin.Application = fin.Application.getCurrentSync();

let lastFocusedView: OpenFin.Identity;

openfinApplication.on('view-focused', (viewEvent): void => {
    lastFocusedView = viewEvent.viewIdentity;
});

const changeContextGroup = async (event: Event): Promise<void> => {
    const selectedColorElement: HTMLElement = event.currentTarget as HTMLElement; 
    const color: string = selectedColorElement.dataset.title;
    await fin.me.interop.joinContextGroup(color, lastFocusedView);
    document.getElementById(`tab-${lastFocusedView.name}`).classList.remove('red-channel', 'green-channel', 'pink-channel', 'orange-channel', 'purple-channel', 'yellow-channel');
    document.getElementById(`tab-${lastFocusedView.name}`).classList.add(`${color}-channel`);
};

const addContextGroupButtons = async (): Promise<void> => {
    const contextGroups: PlatformContextGroups = await fin.me.interop.getContextGroups();
    // <link rel="stylesheet" href="../styles/frame-styles.css"></link>
    const windowFrameStyleSheet: CSSStyleSheet = document.styleSheets[0];
    const buttonsWrapper: HTMLElement = document.getElementById('buttons-wrapper');

    contextGroups.forEach(({displayMetadata: {name, color}}: PlatformContextGroup): void => {
        windowFrameStyleSheet.insertRule(`.${name}-channel { border-left: 2px solid ${color} !important;}`);
        windowFrameStyleSheet.insertRule(`#${name}-button:after { background-color: ${color}}`);
        const newButton: HTMLElement = document.createElement('div');
        newButton.classList.add('button');
        newButton.classList.add('channel-button');
        newButton.id = `${name}-button`;
        newButton.dataset.title = name;
        newButton.onclick = changeContextGroup;
        buttonsWrapper.prepend(newButton);
    });
};

const maxOrRestore = async (): Promise<void> => {
    if (await openfinWindow.getState() === 'normal') {
        return await openfinWindow.maximize();
    }

    return openfinWindow.restore();
};

const closeWindow = (): Promise<void> => {
    return openfinWindow.close();
};

const minimizeWindow = (): Promise<void> => {
    return openfinWindow.minimize();
}; 



const setupTitleBar = (): void => {
    const title: HTMLElement = document.getElementById('title');
    const minBtn: HTMLElement = document.getElementById('minimize-button');
    const maxBtn: HTMLElement = document.getElementById('expand-button');
    const closeBtn: HTMLElement = document.getElementById('close-button');
    
    title.innerHTML = fin.me.identity.uuid;

    minBtn.onclick = minimizeWindow;
    maxBtn.onclick = maxOrRestore;
    closeBtn.onclick = closeWindow;

    addContextGroupButtons();
};

window.addEventListener('DOMContentLoaded', async () => {
    await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    setupTitleBar();
});





