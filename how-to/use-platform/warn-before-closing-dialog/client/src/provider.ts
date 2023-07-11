async function launchDialog(
	viewsPreventingUnload: OpenFin.Identity[],
	windowId: OpenFin.Identity,
	closeType: "window" | "view"
): Promise<boolean> {
	const views = { views: viewsPreventingUnload };
	const queryString = new URLSearchParams(`views=${JSON.stringify(views)}&closeType=${closeType}`);
	const baseUrl = window.location.href.replace("provider", "dialog");
	const url = `${baseUrl}?${queryString.toString()}`;
	async function handleUserDecisionPromise(
		resolve: (close: boolean) => void,
		reject: (err: unknown) => void
	): Promise<void> {
		try {
			const dialogWindow = fin.Window.wrapSync({ uuid: fin.me.identity.uuid, name: "before-unload-dialog" });

			const provider = await fin.InterApplicationBus.Channel.create("userDecisionProvider");

			await dialogWindow.on("closed", async () => {
				await provider.destroy();
			});

			provider.register("get-user-decision", (payload: unknown) => {
				const continueWithClose = payload as boolean;
				resolve(continueWithClose);
			});

			await fin.Window.create({
				name: "before-unload-dialog",
				url,
				modalParentIdentity: windowId,
				frame: true,
				defaultHeight: closeType === "window" ? 240 : 200,
				defaultWidth: 400,
				saveWindowState: false,
				defaultCentered: true,
				maximizable: false,
				minimizable: false,
				resizable: false
			});
		} catch (error) {
			reject(error);
		}
	}
	return new Promise(handleUserDecisionPromise);
}

function overrideCallback(
	PlatformProvider: OpenFin.Constructor<OpenFin.PlatformProvider>
): OpenFin.PlatformProvider {
	class BeforeUnloadDialogOverride extends PlatformProvider {
		public async getUserDecisionForBeforeUnload(
			payload: OpenFin.ViewsPreventingUnloadPayload
		): Promise<OpenFin.BeforeUnloadUserDecision> {
			const { windowShouldClose, viewsPreventingUnload, viewsNotPreventingUnload, windowId, closeType } =
				payload;

			const continueWithClose = await launchDialog(viewsPreventingUnload, windowId, closeType);

			if (continueWithClose) {
				return { windowShouldClose, viewsToClose: [...viewsNotPreventingUnload, ...viewsPreventingUnload] };
			}
			return { windowShouldClose: false, viewsToClose: [] };
		}
	}
	return new BeforeUnloadDialogOverride();
}

fin.Platform.init({ overrideCallback }).catch((error) => console.error(error));
