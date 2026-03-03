# How to use the LogUploader api within your app with or without your own self hosted REST service

## How it Works

1. Please refer to our online documentation for how to setup the log uploader app to send the log. [File](https://resources.here.io/docs/core/develop/debug/log-uploader/)

2. The example code assumes that the endpoint where the logs will be sent is a local REST service. This can easily be changed to an appropriate endpoint by changing the endpoint definition in client/src/app.ts:

```js
const data = await fin.System.launchLogUploader({
  endpoint: 'http://localhost:3000/api/upload',
  manifests: [],
  logs: ['debug', 'app', 'rvm'],
  ui
});
```

3. A minimum of v40.x of the runtime is required to run the log uploader.

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

### Note: If you make any code changes please run steps 1 through 4.
