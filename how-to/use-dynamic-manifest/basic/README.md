# Use dynamic manifest

This repository demonstrates how to return different manifests depending on url query string.

## How it Works

The index.ts file in the src folder is used by the express server to return different manifest json depending supplied query string.

Query strings:
env=staging - staging environment
env=dev - dev environment

Following npm commands in the package.json perform the above commands:
npm run staging
"staging" :"start fin://localhost:5050/?env=staging"

npm run dev
"dev" :"start fin://localhost:5050/?env=dev"

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

for proceeding steps start another terminal in the same location

4. Start the Platform staging application.

```shell
npm run staging
```

5. Start the Platform dev application.

```shell
npm run dev
```

### What you will see

When dev is used the app-dev.html will open in a new window and the same for staging with app-staging.html.

### A note about this example

This is an example of how to use HERE APIs to configure HERE Core Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
