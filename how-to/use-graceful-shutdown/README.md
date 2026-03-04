# Graceful Shutdown (minimal example)

Example showing the proper use of **fin.System.registerShutdownHandler**. This event handler allows you to ensure your app shuts down gracefully.

## What it does

- Registers a shutdown handler in the platform provider.
- The handler logs **"Shutdown handler ran"** to the OpenFin log, then calls `shutdownEvent.proceed()`.

## How to run

From this directory:

```shell
npm run setup
npm run start
npm run client
```

## How to test

1. Close the platform window (or quit the app).
2. Open the OpenFin log and search for **"Shutdown handler ran"**.

**Log location (Windows):** `%LOCALAPPDATA%\OpenFin\cache\<runtime version>\debug.log`  
**Log location (Mac):** `~/Library/Application Support/OpenFin/cache/<runtime version>/debug.log`  
Example: `C:\Users\<You>\AppData\Local\OpenFin\cache\43.142.101.2\debug.log`

The manifest sets `runtime.arguments` to `--v=1` so that info-level logs (including `fin.System.log`) are written to the debug log. Without it, you may only see CORE-level entries.

**If the message is not in the log,** the shutdown handler was not called when closing the app.

## API

- [registerShutdownHandler](https://developer.openfin.co/docs/javascript/stable/classes/OpenFin.System.html#registerShutdownHandler)
