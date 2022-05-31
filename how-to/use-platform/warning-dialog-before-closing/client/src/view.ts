import { fin } from 'openfin-adapter/src/mock';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const viewTitle = params.get('title');
    const viewHeader = document.querySelector('#view-title');
    const addBtn = document.getElementById('add-listener');
    const removeBtn = document.getElementById('remove-listener');

    document.title = viewTitle;
    viewHeader.innerHTML = viewTitle;

    const beforeUnloadListener = (e) => {
        e.preventDefault();
        e.returnValue = '';
    }

    addBtn.addEventListener('click', () => {
        window.addEventListener('beforeunload', beforeUnloadListener);
    });

    removeBtn.addEventListener('click', () => {
        window.removeEventListener('beforeunload', beforeUnloadListener);
    });
});