export {};

window.addEventListener("DOMContentLoaded", async () => {
	const platform: OpenFin.Platform = fin.Platform.getCurrentSync();
	await platform.once("platform-api-ready", async () => init());
});

fin.Platform.init().catch(() => {});

async function init(): Promise<void> {
	console.log("Platform Init");

	const application = await fin.Application.getCurrent();
	await application.setTrayIcon("http://localhost:5050/favicon.ico");

	let visible = false;
	let win: OpenFin.Window | undefined;

	await application.addListener("tray-icon-clicked", async (trayInfo: OpenFin.TrayInfo) => {
		if (!visible) {
			if (win) {
				try {
					// Try showing window, if it fails we need to create it
					await win.show();
				} catch {
					win = undefined;
				}
			}

			if (!win) {
				// Work out which monitor the tray icon is on
				const monitors: OpenFin.MonitorDetails[] = [
					trayInfo.monitorInfo.primaryMonitor,
					...trayInfo.monitorInfo.nonPrimaryMonitors
				];

				const foundMonitor = monitors.find((mi) =>
					pointInRect(mi.monitorRect, { x: trayInfo.x, y: trayInfo.y })
				);

				const winWidth = 250;

				const winOption = {
					name: "excel-tray-view",
					includeInSnapshot: false,
					showTaskbarIcon: false,
					saveWindowState: false,
					defaultTop: foundMonitor?.availableRect.top,
					defaultLeft: foundMonitor ? foundMonitor?.availableRect?.right - winWidth : undefined,
					defaultWidth: winWidth,
					defaultHeight: foundMonitor
						? foundMonitor.availableRect.bottom - foundMonitor.availableRect.top
						: undefined,
					url: "http://localhost:5050/views/excel.html",
					frame: false,
					autoShow: true,
					alwaysOnTop: true,
					resizable: false,
					permissions: {
						System: {
							launchExternalProcess: true,
							downloadAsset: true,
							openUrlWithBrowser: {
								enabled: true,
								protocols: ["mailto"]
							}
						}
					}
				};

				win = await fin.Window.create(winOption);
			}
		} else if (win) {
			await win.hide();
		}

		visible = !visible;
	});
}

function pointInRect(
	rect: { left: number; top: number; right: number; bottom: number },
	pt: { x: number; y: number }
): boolean {
	return pt.x > rect.left && pt.x < rect.right && pt.y > rect.top && pt.y < rect.bottom;
}
