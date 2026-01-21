# Use Download Bubble

## How it Works

This example opens a single view that includes a **Download** button and a downloads icon button in the top-right header. Clicking **Download** triggers a Chromium download by programmatically clicking an `<a download>` link to a static file served from the example’s local web server. The example also explicitly displays the download UI by calling `Window.showDownloadBubble()` on the parent platform window.

> Note: In modern Chromium versions the “download bubble” UI is the default download UX. This sample doesn’t disable or override it.

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

### What you will see

A single view with **Download** and a downloads icon button (top-right). Clicking the icon calls `Window.showDownloadBubble()` so the Chromium download UI appears.

### A note about this example

This is an example of how to use HERE APIs to configure HERE Core Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
