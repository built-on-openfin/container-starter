import OpenFin, { fin } from '@openfin/core';

const launchDialog = async (viewsPreventingUnload, windowId, closeType): Promise<boolean> => {
    const views = { views: viewsPreventingUnload };
    const queryString = new URLSearchParams(`views=${JSON.stringify(views)}&closeType=${closeType}`);
    const baseUrl = window.location.href.replace('provider', 'dialog');
    const url = `${baseUrl}?${queryString.toString()}`;
    
    return new Promise(async (resolve, reject) => {
        try {
            const provider = await fin.InterApplicationBus.Channel.create('userDecisionProvider');;

            provider.register('get-user-decision', (continueWithClose: boolean) => {
                provider.destroy();
                resolve(continueWithClose);
            });

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
        } catch (error) {
            reject(error);
        }
    });
}

const overrideCallback = (PlatformProvider: OpenFin.Constructor<OpenFin.PlatformProvider>): OpenFin.PlatformProvider => {
    class beforeUnloadDialogOverride extends PlatformProvider {
        async getUserDecisionForBeforeUnload(payload: OpenFin.ViewsPreventingUnloadPayload): Promise<OpenFin.BeforeUnloadUserDecision> {
            const { windowShouldClose, viewsPreventingUnload, viewsNotPreventingUnload, windowId, closeType } = payload;

            const continueWithClose = await launchDialog(viewsPreventingUnload, windowId, closeType);

            if (continueWithClose) {
                return { windowShouldClose, viewsToClose: [...viewsNotPreventingUnload, ...viewsPreventingUnload] };
            } else {
                return { windowShouldClose: false, viewsToClose: [] };
            }
        }
    }
    return new beforeUnloadDialogOverride();
};

fin.Platform.init({ overrideCallback });
