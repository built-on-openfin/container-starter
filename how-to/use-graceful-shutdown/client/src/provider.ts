/**
 * Platform provider: inits the platform and registers the shutdown handler.
 * The handler runs in the provider context. When system shutdown occurs it logs
 * to the OpenFin log file so you can verify (e.g. check debug.log after closing the app).
 */
fin.System.registerShutdownHandler((shutdownEvent) => {
	fin.System.log("info", "Shutdown handler ran: cleanup before exit").catch(() => {});
	shutdownEvent.proceed();
}).catch((err) => console.error("Failed to register shutdown handler:", err));

fin.Platform.init({}).catch((error) => console.error(error));
