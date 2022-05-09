import { fin } from '@openfin/core';

const me = fin.me as OpenFin.Window;

document.addEventListener('DOMContentLoaded', init);

function init() {
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
}
