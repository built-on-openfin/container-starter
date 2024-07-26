# How to use licensed codecs

## How it Works

The manifest file [public/manifest.fin.json](public/manifest.fin.json) has a snapshot definition. We define multiple views, the first provides supporting information and the other three are news sites to demonstrate that commercial codecs are not enabled unless valid configuration is provided in your manifest. Once valid configuration is provided in your manifest (details below) and you are serving your manifest from a HTTPs enabled domain that you provided to Here (OpenFin) then you will see the news sites work as expected.

## Get Started

Follow the instructions below to get up and running.

### Set up the project

1. CD into the how-to/use-licensed-codecs directory

2. Start the test server.

```shell
npm run start
```

3. Start the Platform application in a new terminal window.

```shell
npm run client
```

### What you will see

A single platform window with multiple views. The initial window provides information related to the sample and the other three websites are news based websites that can be used to show the behavior when trying to play videos before and after the configuration has been added.

### What is added to the manifest

```javascript
"trustedAppConfigs": {
        "value": "This value will be provided by Here (OpenFin) once the relevant information has been provided.",
        "signature": {
            "win": "This value will be provided by Here (OpenFin) once the relevant information has been provided.",
            "mac": "This value will be provided by Here (OpenFin) once the relevant information has been provided."
        }
    },
```

The RVM and runtime use this information to determine what codecs should be enabled.

### How do I get this information?

You will need to contact your Here (OpenFin) account manager and say you want to enable licensed codecs for your project.

You will then need to provide Here (OpenFin) with the following pieces of information:

- The url where your manifest will be served from (the trusted app config will only work when the manifest is served from this domain) e.g. "<https://www.exampledomain.com/>\*"
- A list of the codecs you are licensed for from e.g. <https://www.via-la.com/licensing-2/avc-h-264/> e.g. "h264", "aac"

This information will then go through a process at Here (OpenFin) and you will be provided with the relevant trustedAppConfig.

> ⚠️ **Warning:** Your manifest must be served using HTTPS; HTTP will not work.

### A note about this example

This is an example of how to use OpenFin manifests to enable licensed codecs. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
