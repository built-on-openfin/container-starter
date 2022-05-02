import { fin } from '@openfin/core';

document.addEventListener('DOMContentLoaded', init);

function init() {
    const showPopupButton = document.getElementById('btn-show-popup');
    showPopupButton.onclick = createPopupWindow;
}

async function createPopupWindow(): Promise<void> {
    const PARENT_FRAME_OFFSET = 64;
    resetPopupResult();
    const parentWindow = await (fin.me as OpenFin.View).getCurrentWindow();
    const { identity: modalParentIdentity } = parentWindow;
    const parentBounds = await parentWindow.getBounds();
    const result = await fin.me.showPopupWindow({
        initialOptions: {
            modalParentIdentity
        },
        url: location.href.replace('app', 'popup'),
        x: Math.floor(parentBounds.width / 8),
        y: Math.floor(parentBounds.height / 8) - PARENT_FRAME_OFFSET,
        height: Math.floor(parentBounds.height - parentBounds.height / 4),
        width: Math.floor(parentBounds.width - parentBounds.width / 4),
        blurBehavior: 'modal'
    });
    renderPopupResult(result);
}

function renderPopupResult(result: OpenFin.PopupResult): void {
    resetPopupResult();
    const resultEl = document.createElement('pre');
    resultEl.textContent = JSON.stringify(result, null, 2)
    document.getElementById('popup-result').append(resultEl);
}

function resetPopupResult(): void {
    const popupResultEl = document.getElementById('popup-result');
    if (popupResultEl.firstChild) {
        popupResultEl.removeChild(popupResultEl.firstChild);
    }
}