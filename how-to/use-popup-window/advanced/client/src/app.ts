import { fin } from '@openfin/core';

document.addEventListener('DOMContentLoaded', init);

async function init() {
    // provision about:blank window to later show as popup
    await fin.Window.create({ name: 'popup', autoShow: false });
    const showPopupButton = document.getElementById('btn-show-popup');
    showPopupButton.onclick = createPopupWindow;
}

async function createPopupWindow(event): Promise<void> {
    resetPopupResult();
    const { top, right, height } = event.target.getBoundingClientRect();
    const result = await fin.me.showPopupWindow({
        name: 'popup',
        additionalOptions: {
            customData: {
                shownAsPopup: Date.now()
            }
        },
        url: location.href.replace('app', 'popup'),
        x: right + 6,
        y: Math.round(top + (height / 2)),
        height: 150,
        width: 300,
        hideOnClose: true
    });
    renderPopupResult(result);
}

function renderPopupResult(result: OpenFin.PopupResult): void {
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