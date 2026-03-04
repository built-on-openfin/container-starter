/**
 * When system shutdown runs, it logs "Shutdown handler ran" then calls proceed().
 * If closing the app does not write that message to the log, the handler is not being called.
 */
fin.System.registerShutdownHandler((shutdownEvent) => {
	fin.System.log("info", "Shutdown handler ran").catch(() => {});
	shutdownEvent.proceed();
}).catch((err) => console.error("Failed to register shutdown handler:", err));

fin.Platform.init({}).catch((error) => console.error(error));
