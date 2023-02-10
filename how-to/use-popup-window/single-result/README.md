# How To Use Popup Window | Single Result

## How it Works

The `client/src/app.ts` sets up a button that when clicked will create a simple one use popup window. Once one of the buttons in the popup is clicked (see `client/src/popup.ts`) or blurred the popup will close and the result will be displayed in the view.

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

A single view with a "show popup" button, click the button to create and interact with the popup window.

### A note about this example

This is an example of how to use OpenFin APIs to configure OpenFin Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
