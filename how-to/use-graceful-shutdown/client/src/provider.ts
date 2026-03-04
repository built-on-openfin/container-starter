/**
 * When system shutdown runs, it logs "Shutdown handler ran" then calls proceed().
 * We await the log so shutdown doesn't proceed before the message is written.
 */
fin.System.registerShutdownHandler(async (shutdownEvent) => {
	await fin.System.log("info", "Shutdown handler ran").catch(() => {});
	shutdownEvent.proceed();
}).catch((err) => console.error("Failed to register shutdown handler:", err));

fin.Platform.init({}).catch((error) => console.error(error));
