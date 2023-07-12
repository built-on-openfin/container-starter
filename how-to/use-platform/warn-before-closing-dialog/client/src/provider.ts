/**
 * Launch a dialog.
 * @param viewsPreventingUnload The views that are preventing unload.
 * @param windowId The window identifier.
 * @param closeType The type of the component being closed.
 * @returns True if it was closed.
 */
async function launchDialog(
	viewsPreventingUnload: OpenFin.Identity[],
	windowId: OpenFin.Identity,
	closeType: "window" | "view"
): Promise<boolean> {
	const views = { views: viewsPreventingUnload };
	const queryString = new URLSearchParams(`views=${JSON.stringify(views)}&closeType=${closeType}`);
	const baseUrl = window.location.href.replace("provider", "dialog");
	const url = `${baseUrl}?${queryString.toString()}`;

	/**
	 * Handle the close decision.
	 * @param resolve The promise resolve method.
	 * @param reject The promise reject method.
	 */
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

/**
 * Override the platform provider.
 * @param PlatformProvider The platform provider base class.
 * @returns The overridden platform provider.
 */
function overrideCallback(
	PlatformProvider: OpenFin.Constructor<OpenFin.PlatformProvider>
): OpenFin.PlatformProvider {
	/**
	 * Override for the dialog.
	 */
	class BeforeUnloadDialogOverride extends PlatformProvider {
		/**
		 * Get the user decision for unloading a window.
		 * @param payload The payload.
		 * @returns The close decision.
		 */
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
