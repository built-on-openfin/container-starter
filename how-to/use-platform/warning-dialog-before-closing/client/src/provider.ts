import { fin } from 'openfin-adapter/src/mock';

const launchDialog = async (viewsPreventingUnload, windowId, closeType) => {
    return new Promise(async (resolve, reject) => {
        const views = { views: viewsPreventingUnload };
        const queryString = new URLSearchParams(`views=${JSON.stringify(views)}&closeType=${closeType}`);
        const baseUrl = window.location.href.replace('provider', 'dialog');
        const url = `${baseUrl}?${queryString.toString()}`;

        fin.InterApplicationBus.subscribe({ uuid: '*' }, 'user-decision', resolve).catch(reject);

        await fin.Window.create({ 
            name: 'before-unload-dialog', 
            url, 
            modalParentIdentity: windowId, 
            frame: true, 
            defaultHeight: closeType === 'window' ? 230 : 150,
            defaultWidth: 400, 
            saveWindowState: false,
            defaultCentered: true,
            maximizable: false,
            minimizable: false
        });
    })
}

const overrideCallback = async (PlatformProvider) => {
    class MyOverride extends PlatformProvider {
        async getUserDecisionForBeforeUnload(payload) {
            const { windowClose, viewsPreventingUnload, viewsNotPreventingUnload, windowId, closeType } = payload;

            const continueWithClose = await launchDialog(viewsPreventingUnload, windowId, closeType);

            if (continueWithClose) {
                return { windowShouldClose: windowClose, viewsToClose: [...viewsNotPreventingUnload, ...viewsPreventingUnload] };
            } else {
                return { windowShouldClose: false, viewsToClose: [] };
            }
        }
    }
    return new MyOverride() as any;
};

fin.Platform.init({ overrideCallback });
