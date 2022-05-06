import { fin } from '@openfin/core';

const me = fin.me as OpenFin.Window;

document.addEventListener('DOMContentLoaded', init);

async function init() {
    const okButton = document.getElementById('btn-ok');
    const confirmButton = document.getElementById('btn-confirm');
    const cancelButton = document.getElementById('btn-cancel');

    okButton.onclick = async () => {
        await me.dispatchPopupResult('ok');
    }

    confirmButton.onclick = async () => {
        await me.dispatchPopupResult('confirm');
    }

    cancelButton.onclick = async () => {
        await me.dispatchPopupResult('cancel');
    }

    await renderShownDate();
    await me.on('shown', renderShownDate);
}

async function renderShownDate() {
    const shownDateEl = document.getElementById('shown-date');
    const { customData } = await me.getOptions();
    const { shownAsPopup } = customData;
    shownDateEl.textContent = new Date(shownAsPopup).toTimeString()
}
