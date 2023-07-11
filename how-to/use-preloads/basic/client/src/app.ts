document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

async function init(): Promise<void> {
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

async function showPlatformDevTools(): Promise<void> {
	try {
		const identity = fin.me.identity;
		const platformIdentity = { uuid: identity.uuid, name: identity.uuid };
		await fin.System.showDeveloperTools(platformIdentity);
	} catch (error) {
		console.error("Error showing platform developer tools:", error);
	}
}

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

async function showViewDevTools(): Promise<void> {
	try {
		const identity = fin.me.identity;
		await fin.System.showDeveloperTools(identity);
	} catch (error) {
		console.error("Error showing view developer tools:", error);
	}
}
