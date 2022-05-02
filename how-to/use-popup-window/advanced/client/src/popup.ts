import { fin } from '@openfin/core';;

document.addEventListener('DOMContentLoaded', init);

async function init() {
    const okButton = document.getElementById('btn-ok');
    const confirmButton = document.getElementById('btn-confirm');
    const cancelButton = document.getElementById('btn-cancel');

    okButton.onclick = async () => {
        await (fin.me as OpenFin.Window).dispatchPopupResult('ok');
    }

    confirmButton.onclick = async () => {
        await (fin.me as OpenFin.Window).dispatchPopupResult('confirm');
    }

    cancelButton.onclick = async () => {
        await (fin.me as OpenFin.Window).dispatchPopupResult('cancel');
    }

    await renderShownDate();
    await fin.me.on('shown', renderShownDate);
}

async function renderShownDate() {
    const shownDateEl = document.getElementById('shown-date');
    const { customData } = await fin.me.getOptions();
    const { shownAsPopup } = customData;
    shownDateEl.textContent = new Date(shownAsPopup).toTimeString()
}
