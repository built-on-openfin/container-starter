import type OpenFin from "@openfin/core";

document.addEventListener("DOMContentLoaded", async () => {
	await initDom();
});

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
	const platform = fin.Platform.getCurrentSync();
	const me = fin.me as OpenFin.Window;
	const CONTAINER_ID = "layout-container";
	await fin.Platform.Layout.init({ containerId: CONTAINER_ID });

	const minimizeBtn = document.querySelector("#minimize-button");
	if (minimizeBtn) {
		minimizeBtn.addEventListener("click", async () => {
			await me.minimize().catch(console.error);
		});
	}

	const maximizeBtn = document.querySelector("#expand-button");
	if (maximizeBtn) {
		maximizeBtn.addEventListener("click", async () => {
			await maxOrRestore(me).catch(console.error);
		});
	}

	const closeBtn = document.querySelector("#close-button");
	if (closeBtn) {
		closeBtn.addEventListener("click", async (e) => {
			await me.close();
		});
	}

	await me.on("view-child-view-created", async (e) => {
		// The content creation rules construct the options for the view in the childOptions
		// The view has been created but not yet attached or navigated
		console.log(e);
		const viewOptions = e.childOptions;
		let originalTargetName;
		let create = true;

		// If the window.open contained a target it is the viewOptions.name,
		// the name starts internal-generated if a target wasn't specified
		if (!viewOptions.name?.startsWith("internal-generated")) {
			// This is a window.open with a target, but we can't use the original target name
			// as the view name, because this would not allow it to be re-used, so we
			// substitute a derived view name and then remove the old view later

			// Store the original view name so that we can destroy it later
			originalTargetName = viewOptions.name;

			// Set a new derived name for the view based on the original name
			viewOptions.name = `${viewOptions.name}-view`;

			try {
				// See if we can get the derived reusable view name
				const currentView = fin.View.wrapSync({ uuid: fin.me.identity.uuid, name: viewOptions.name });

				// If we have it then navigate to the requested url
				await currentView.navigate(viewOptions.url);

				// And focus it, which will switch to the tab if its not active
				await currentView.focus();

				// We have reused so no need to create
				create = false;
			} catch {
				// Something failed, most likely the view does not exist
				// so the create flag will still be set
			}
		}

		// The create flag is set because we couldn't find the existing view
		if (create) {
			// Create the view using the original view options, this will just attach the
			// view created for us by the content creation rules
			// Or if it had the name swapped due to a target specified in the original
			// window.open it will create a new view with the derived name
			const view = await platform.createView(viewOptions, e.target);

			// We must explicitly navigate the view created by the content creation rules
			await view.navigate(viewOptions.url);
		}

		// Cleanup the view that was created with the original target name if it had one
		// as we have substituted a view with a derived name
		if (originalTargetName) {
			try {
				const targetView = fin.View.wrapSync({ uuid: fin.me.identity.uuid, name: originalTargetName });
				await targetView.destroy();
			} catch {}
		}
	});

	await me.on("view-child-window-created", async (e) => {
		// Called when content is opened in a window
		console.log(e);
	});

	await me.on("view-child-content-opened-in-browser", async (e) => {
		// Called when content is opened in the browser
		console.log(e);
	});

	await me.on("view-child-content-blocked", async (e) => {
		// Called when content is blocked
		console.log(e);
	});
}

/**
 * Maximize of restore the window.
 * @param win The window to perform the action on.
 * @returns Nothing.
 */
async function maxOrRestore(win: OpenFin.Window): Promise<void> {
	if ((await win.getState()) === "normal") {
		return win.maximize();
	}

	return win.restore();
}
