import { fin } from '@openfin/core';

const me = fin.me as OpenFin.Window;

document.addEventListener('DOMContentLoaded', init);

async function init() {
    await createGroupButtons();
}

async function createGroupButtons() {
    const { customData: contextGroups } = await me.getOptions();
    contextGroups.forEach(group => {
        let groupBtn = document.createElement('button');
        groupBtn.style.background = group.displayMetadata.color;
        groupBtn.style.border = 'none';
        groupBtn.style.borderRadius = '50%';
        groupBtn.style.width = '20px';
        groupBtn.style.height = '20px';
        groupBtn.style.marginRight = '1rem'
        console.log(group);
        groupBtn.onclick = async () => {
            await me.dispatchPopupResult(group);
        };
        document.body.append(groupBtn);
    });
}
