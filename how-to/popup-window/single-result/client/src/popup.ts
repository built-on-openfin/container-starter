import { fin } from '@openfin/core';;

document.addEventListener('DOMContentLoaded', init);

function init() {
    const okButton = document.getElementById('btn-ok');
    const confirmButton = document.getElementById('btn-confirm');
    const cancelButton = document.getElementById('btn-cancel');

    okButton.onclick = async () => {
        await dispatchResult('ok');
    }

    confirmButton.onclick = async () => {
        await dispatchResult('confirm');
    }

    cancelButton.onclick = async () => {
        await dispatchResult('cancel');
    }
}

async function dispatchResult(result: string): Promise<void> {
    await (fin.me as OpenFin.Window).dispatchPopupResult(result);
}