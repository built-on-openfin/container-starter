import { fin } from '@openfin/core';;

document.addEventListener('DOMContentLoaded', init);

function init() {
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
}
