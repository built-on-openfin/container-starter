import type OpenFin from "@openfin/core";

/**
 * Log and allow close. Runs when the user closes a window (before-unload hook).
 * This path runs on window close; registerShutdownHandler may not run when closing the last window.
 */
async function onWindowClose(): Promise<void> {
	await fin.System.log("info", "Graceful shutdown: before-unload ran (window close)").catch(() => {});
}

/**
 * Override the platform provider so we log when the user closes the window.
 * getUserDecisionForBeforeUnload is called when a window is about to close.
 * @param PlatformProvider The base platform provider class.
 * @returns The overridden provider instance.
 */
function overrideCallback(
	PlatformProvider: OpenFin.Constructor<OpenFin.PlatformProvider>
): OpenFin.PlatformProvider {
	/** Provider override that logs on window close. */
	class GracefulShutdownOverride extends PlatformProvider {
		/**
		 * On window close: log then allow close.
		 * @param payload The before-unload payload.
		 * @returns Decision to close the window and its views.
		 */
		public async getUserDecisionForBeforeUnload(
			payload: OpenFin.ViewsPreventingUnloadPayload
		): Promise<OpenFin.BeforeUnloadUserDecision> {
			const { viewsPreventingUnload, viewsNotPreventingUnload } = payload;
			await onWindowClose();
			return {
				windowShouldClose: true,
				viewsToClose: [...viewsNotPreventingUnload, ...viewsPreventingUnload]
			};
		}
	}
	return new GracefulShutdownOverride();
}

// Log when window closes (runs on close).
fin.System.registerShutdownHandler((shutdownEvent) => {
	fin.System.log("info", "Graceful shutdown: registerShutdownHandler ran (system shutdown)").catch(() => {});
	shutdownEvent.proceed();
}).catch((err) => console.error("Failed to register shutdown handler:", err));

fin.Platform.init({ overrideCallback }).catch((error) => console.error(error));
