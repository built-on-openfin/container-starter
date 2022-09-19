# How to use Content Creation Rules

## How it Works

In the default view options of the platform manifest the content creation rules are specified.

In the `client/src/default-window.ts` the `child-view-created` and `view-child-view-created` events we create the view from the `window.open` call invoked in `client/src/app.ts`.

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

### A note about this example

This is an example of how to use OpenFin APIs to configure OpenFin Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
