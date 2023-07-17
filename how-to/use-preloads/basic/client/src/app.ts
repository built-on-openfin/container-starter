document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
	const showPlatformDevToolsButton = document.querySelector("#platform-devtools");
	const showWindowDevToolsButton = document.querySelector("#window-devtools");
	const showViewDevToolsButton = document.querySelector("#view-devtools");

	if (showPlatformDevToolsButton) {
		showPlatformDevToolsButton.addEventListener("click", showPlatformDevTools);
	}
	if (showWindowDevToolsButton) {
		showWindowDevToolsButton.addEventListener("click", showWindowDevTools);
	}
	if (showViewDevToolsButton) {
		showViewDevToolsButton.addEventListener("click", showViewDevTools);
	}
}

/**
 * Show the developer tools for the platform.
 */
async function showPlatformDevTools(): Promise<void> {
	try {
		const identity = fin.me.identity;
		const platformIdentity = { uuid: identity.uuid, name: identity.uuid };
		await fin.System.showDeveloperTools(platformIdentity);
	} catch (error) {
		console.error("Error showing platform developer tools:", error);
	}
}

/**
 * Show the develop tools for the window.
 */
async function showWindowDevTools(): Promise<void> {
	try {
		const identity = fin.me.identity;
		const view = fin.View.wrapSync(identity);
		const hostWindow = await view.getCurrentWindow();
		await fin.System.showDeveloperTools(hostWindow.identity);
	} catch (error) {
		console.error("Error showing window developer tools:", error);
	}
}

/**
 * Show the developer tools for the view.
 */
async function showViewDevTools(): Promise<void> {
	try {
		const identity = fin.me.identity;
		await fin.System.showDeveloperTools(identity);
	} catch (error) {
		console.error("Error showing view developer tools:", error);
	}
}
