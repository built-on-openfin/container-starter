# How to use logging APIs

## How it Works

1. A drop down of OpenFin Runtime Debug logs is presented to via the project interface to show the log files retrieved by the get log list API.
2. A send app log button that invokes the sendApplicationLog API.

## Get Started

Follow the instructions below to get up and running.

## Set up the project

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

## How it works

1. The dropdown seen below is populated by the resolved Promise's name attribute returned by the [getLogList](https://cdn.openfin.co/docs/javascript/stable/System.html#getLogList) API.
2. Clicking the button under the debug log list retrieves the correct log via the name parameter to the [getLog](https://cdn.openfin.co/docs/javascript/stable/System.html#getLog) API submits an HTTP POST request to `http://localhost:5050/uploads` with the selected the [File](https://developer.mozilla.org/en-US/docs/Web/API/File) Object's contents.
3. [The server](server/src/index.ts) registers an endpoint `/uploads` that handles HTTP post requests via a middleware function that parses and collects the [File](https://developer.mozilla.org/en-US/docs/Web/API/File) Object created with content's, and saves to disk under the path `public/uploads/runtimelogs`.

