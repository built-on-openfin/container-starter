# Graceful Shutdown

## How it Works

This example demonstrates **[registerShutdownHandler](https://developer.openfin.co/docs/javascript/stable/classes/OpenFin.System.html#registerShutdownHandler)** from the OpenFin System API. The handler is registered in the platform provider. When system shutdown occurs, it logs a message via `fin.System.log()` (so you can verify in the OpenFin log file), then calls `shutdownEvent.proceed()` so the runtime can finish terminating.

> **Note:** `registerShutdownHandler` is marked as Experimental in the OpenFin docs. The handler must call `shutdownEvent.proceed()`; otherwise shutdown may not complete. Behavior may differ between Mac and Windows; if you don't see the handler run when closing the window, check the log file after exit (see below).

## Get Started

Follow the instructions below to get up and running (from this directory).

### Set up the project

1. Install dependencies and do the initial build:

```shell
npm run setup
```

2. Start the test server in a new terminal:

```shell
npm run start
```

3. Launch the platform:

```shell
npm run client
```

### How to test

Close the platform (close all windows or quit the app). The shutdown handler runs when the system shuts down. Because the dev console closes with the app, verify by checking the **OpenFin log file** (e.g. `debug.log` in your [OpenFin data directory](https://developer.openfin.co/docs/documentation/docs/debugging)) for the message: `Shutdown handler ran: cleanup before exit`.

Use `npm run kill` to stop all OpenFin processes if needed.

### API reference

- [registerShutdownHandler](https://developer.openfin.co/docs/javascript/stable/classes/OpenFin.System.html#registerShutdownHandler)

### A note about this example

This is an example of how to use OpenFin APIs. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
