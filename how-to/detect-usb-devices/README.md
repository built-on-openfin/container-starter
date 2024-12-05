# Detect USB Devices

## How it Works

Using a combination of the manifest file and WebUSB APIs, we can search for and detect connected USB devices inside of a container application.

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

1. An Platform Window with a button that leads you to documentation around WebUSB API usage, along with another button that should detect a plugged in device and display it in a list below.

## A note about this example

This is an example of how to use OpenFin APIs to configure OpenFin Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
