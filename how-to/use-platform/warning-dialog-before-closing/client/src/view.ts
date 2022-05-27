import { fin } from 'openfin-adapter/src/mock';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const viewTitle = params.get('title');
    const viewHeader = document.querySelector('#view-title');

    document.title = viewTitle;

    if (viewTitle === 'view1' || viewTitle === 'view3') {
        viewHeader.innerHTML = `${viewTitle} - preventing unload`;
    } else {
        viewHeader.innerHTML = viewTitle;
    }

    const beforeUnloadListener = (e) => {
        if (viewTitle === 'view1' || viewTitle === 'view3') {
            e.preventDefault();
            e.returnValue = '';
        }
    }

    if (viewTitle !== 'view4') {
        window.addEventListener('beforeunload', beforeUnloadListener);
    }
});