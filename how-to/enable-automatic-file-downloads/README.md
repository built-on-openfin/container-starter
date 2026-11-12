# Enable Automatic File Downloads

## How it Works

By default, when a file is downloaded in HERE Core Container, the user is shown a **Save As** dialog. Automatic downloads skip that dialog and save the file straight to the download location. The behavior is controlled by `downloadSettings` within the platform's **[domain settings](https://resources.here.io/docs/core/develop/security/domain-permissions/)**.

This example contains three manifests that load the same view. Each view has a **Download** button that downloads a static file (`public/assets/example-download.txt`) and a log of the `file-download-started` and `file-download-completed` events raised on the view.

| Manifest                   | npm script              | Behavior                                                                                |
| -------------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| `manifest.fin.json`        | `npm run client`        | Automatic downloads enabled in the manifest.                                            |
| `code.manifest.fin.json`   | `npm run client-code`   | Automatic downloads enabled or disabled at runtime with `fin.System.setDomainSettings`. |
| `prompt.manifest.fin.json` | `npm run client-prompt` | Automatic downloads not enabled, so the Save As dialog is shown.                        |

### Enable automatic downloads in the manifest

Add a `domainSettings` rule to the `platform` section of the manifest. The outer `match` controls which **pages** the rule applies to. The inner `downloadSettings.rules[].match` controls which **files** (by download url) the behavior applies to. A behavior of `no-prompt` saves the file automatically.

```json
"platform": {
  "uuid": "how-to-enable-automatic-file-downloads-manifest",
  "domainSettings": {
    "rules": [
      {
        "match": ["http://localhost:5050/*"],
        "options": {
          "downloadSettings": {
            "rules": [
              {
                "match": ["<all_urls>"],
                "behavior": "no-prompt"
              }
            ]
          }
        }
      }
    ]
  }
}
```

### Enable automatic downloads with code

`fin.System.setDomainSettings` replaces the domain settings for the platform at runtime. It is a secured API, so the manifest grants the `setDomainSettings` and `getDomainSettings` permissions to the platform and its views:

```json
"permissions": {
  "System": {
    "getDomainSettings": true,
    "setDomainSettings": true
  }
}
```

The view then calls (see [client/src/app.ts](./client/src/app.ts)):

```ts
await fin.System.setDomainSettings({
  rules: [
    {
      match: [`${window.location.origin}/*`],
      options: {
        downloadSettings: {
          rules: [{ match: ['<all_urls>'], behavior: 'no-prompt' }]
        }
      }
    }
  ]
});
```

Passing a behavior of `prompt` instead switches back to showing the Save As dialog.

### Automatic downloads not enabled

`prompt.manifest.fin.json` has no `domainSettings`, so the default behavior applies and the Save As dialog is shown for every download. You can make this explicit by using a `downloadSettings` rule with a behavior of `prompt`.

> Note: Automatically downloaded files are saved to the default download location (normally the user's Downloads folder). This can be changed with `Application.setFileDownloadLocation`, which is also a secured API.

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

3. Launch the platform for the scenario you want to see:

```shell
npm run client
```

```shell
npm run client-code
```

```shell
npm run client-prompt
```

### What you will see

- **client** - Clicking **Download** saves the file without a dialog and the completed event is logged.
- **client-code** - Clicking **Download** shows the Save As dialog. Click **Enable automatic downloads**, then **Download** again and the file is saved without a dialog. Click **Require Save As prompt** to switch back. The current domain settings are shown on screen.
- **client-prompt** - Clicking **Download** always shows the Save As dialog.

### A note about this example

This is an example of how to use HERE APIs to configure HERE Core Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
