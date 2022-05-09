import { fin } from '@openfin/core';

document.addEventListener('DOMContentLoaded', init);

function init() {
    const showPopupButton = document.getElementById('btn-show-popup');
    showPopupButton.onclick = createPopupWindow;
}

async function createPopupWindow(event): Promise<void> {
    resetPopupResult();
    const { right, height } = event.target.getBoundingClientRect();
    const result = await fin.me.showPopupWindow({
        initialOptions: {
            customData: await fin.me.interop.getContextGroups()
        },
        url: location.href.replace('app', 'popup'),
        x: right + 5,
        y: Math.round((height / 2) + 15),
        height: 30,
        width: 250,
        resultDispatchBehavior: 'none',
        onPopupResult: (result) => {
            renderPopupResult(result);
        }
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
