const BASE_URL = "http://localhost:5050";

document.addEventListener("DOMContentLoaded", async () => {
	try {
		await fin.Platform.init();
		const platform = fin.Platform.getCurrentSync();

		await platform.createWindow({
			name: "custom-tab-header-window",
			url: `${BASE_URL}/html/platform-window.html`,
			autoShow: true,
			defaultCentered: true,
			defaultWidth: 900,
			defaultHeight: 600,
			frame: true,
			layout: {
				content: []
			},
			experimental: {
				layoutEngine: "v2",
				showFavicons: true,
				defaultFaviconUrl: `${BASE_URL}/images/default-tab.svg`
			}
		});
	} catch (error) {
		console.error("Unable to launch the custom tab header example.", error);
	}
});
