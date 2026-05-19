# Clear Cache Data

## How it Works

This example demonstrates the **[clearCacheData](https://resources.here.io/docs/javascript/stable/classes/OpenFin.System.html#clearCacheData)** API introduced in Runtime v44. It provides granular control over what browsing data to clear and which origins to target — a significant improvement over the legacy **[clearCache](https://resources.here.io/docs/javascript/stable/classes/OpenFin.System.html#clearCache)** API.

The example also shows the companion **[clearHTTPCache](https://resources.here.io/docs/javascript/stable/classes/OpenFin.System.html#clearHTTPCache)** method and includes the legacy `clearCache` call for direct comparison.

## What clearCacheData Offers Over clearCache

The legacy `clearCache` API accepts broad boolean flags (`cache`, `cookies`, `localStorage`, `appcache`) and applies them across **all origins**. There is no way to scope the clear to a specific origin or protect one origin's data.

The new `clearCacheData` API accepts a **[ClearDataOptions](https://resources.here.io/docs/javascript/stable/interfaces/OpenFin.ClearDataOptions.html)** object with:

- **dataTypes** — Fine-grained data type selection: `backgroundFetch`, `cache`, `cookies`, `downloads`, `fileSystems`, `indexedDB`, `localStorage`, `serviceWorkers`, `webSQL`
- **origins** — Clear data for only the specified origins
- **excludeOrigins** — Clear data for all origins except the specified ones
- **originMatchingMode** — Control whether matching includes third-party contexts
- **avoidClosingConnections** — Skip deleting session cookies that maintain active connections

## Examples Demonstrated

| Button | API Call | What It Shows |
| --- | --- | --- |
| Clear Cookies & Storage for localhost | `clearCacheData({ dataTypes, origins })` | Target specific data types for a single origin |
| Clear All Except localhost | `clearCacheData({ excludeOrigins })` | Broad clear while protecting one origin |
| Clear Service Workers | `clearCacheData({ dataTypes: ['serviceWorkers'] })` | Clear a single data type globally |
| Clear All Data (no options) | `clearCacheData()` | Clear everything (equivalent to broadest legacy call) |
| Clear HTTP Cache | `clearHTTPCache()` | Convenience method for HTTP cache only |
| Clear Cache (Legacy) | `clearCache({ ... })` | Legacy API for comparison |

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

### A note about this example

This is an example of how to use HERE APIs to configure HERE Core Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
