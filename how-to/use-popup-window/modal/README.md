# How To Use Popup Window | Modal

[![version](https://img.shields.io/badge/version-canary-yellow.svg)](https://shields.io/)

**Note**: this feature is available for development purposes only and will be officially released in v26.

## How it Works

The `client/src/app.ts` sets up a button that when clicked will create a popup window that is a modal by passing the platform window identity as `initialOptions.modalParentIdentity`.

---

## Get Started

Follow the instructions below to get up and running.

### Set up the project

1. Install dependencies. Note that these examples assume you are in the sub-directory for the example.

```bash
$ npm install
```

2. Build the project.

```bash
$ npm run build
```

3. Start the test server in a new window.

```bash
$ npm run start
```

4. Start the Platform application.

```bash
$ npm run client
```

### What you will see

A single view with a "show popup" button, click the button to create and interact with the popup window.

---

### A note about this example

This is an example of how to use OpenFin APIs to configure OpenFin Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
