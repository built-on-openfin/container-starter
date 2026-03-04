# Graceful Shutdown

## How it Works

This example demonstrates **[registerShutdownHandler](https://developer.openfin.co/docs/javascript/stable/classes/OpenFin.System.html#registerShutdownHandler)** and the platform **before-unload** hook. Closing the platform window triggers **getUserDecisionForBeforeUnload**, which logs to the OpenFin log file so you can verify. The example also registers **registerShutdownHandler** (which may not run when simply closing the last window; it runs at full system shutdown).

**Verification:** Close the app, then open the OpenFin log (Windows: `%LOCALAPPDATA%\OpenFin\cache\<runtime version>\debug.log`) and search for **"Graceful shutdown: before-unload ran (window close)"**.

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

Close the platform window. The **before-unload** hook runs and writes to the log. Open the **OpenFin log file** and search for **"Graceful shutdown: before-unload ran (window close)"**.

**Log location (Windows):** `%LOCALAPPDATA%\OpenFin\cache\<runtime version>\debug.log` (e.g. `C:\Users\<You>\AppData\Local\OpenFin\cache\43.142.101.2\debug.log`).

Use `npm run kill` to stop all OpenFin processes if needed.

### API reference

- [registerShutdownHandler](https://developer.openfin.co/docs/javascript/stable/classes/OpenFin.System.html#registerShutdownHandler)

### A note about this example

This is an example of how to use OpenFin APIs. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
