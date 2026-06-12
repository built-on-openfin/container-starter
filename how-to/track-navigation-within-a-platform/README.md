# Track Navigation Within a Platform

## How it Works

The provider.ts initializes a platform and presents a Chrome-like address bar. When you enter a URL and press Enter (or click Go), a new platform window is created containing a view that loads the URL. Each navigation is recorded in localStorage, building up a browsing history.

The address bar provides autocomplete suggestions as you type, filtered and ranked by visit count. The history panel below shows all recorded navigations with timestamps, visit counts, and the ability to remove individual entries or clear all history.

## Get Started

Follow the instructions below to get up and running.

### Set up the project

1. Install dependencies and do the initial build. Note that these examples assume you are in the sub-directory for the example.

```shell
npm run setup
```

2. Build the project.

```shell
npm run build
```

3. Start the test server in a new window.

```shell
npm run start
```

4. Start the Platform application.

```shell
npm run client
```

### What you will see

1. The platform provider window with an address bar and history panel (as the manifest sets autoShow to true to help with development).
2. Enter a URL in the address bar and press Enter to open it in a new window.
3. Previously visited URLs appear as autocomplete suggestions as you type.

## A note about this example

This is an example of how to use HERE APIs to configure HERE Core Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
