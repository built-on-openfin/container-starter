# Support network fallback

Some customers run the same HERE Core Container platform as two deployments: an internal deployment that users should prefer, and a public deployment to use when the internal one is not available. This folder shows two ways to give users one shortcut that prefers the internal deployment and uses the public one when it has to.

| Approach       | Folder                               | In one sentence                                                                                                                              |
| -------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Multi-manifest | [multi-manifest/](./multi-manifest/) | Each deployment has its own manifest, and the RVM's `fallbackManifests` moves to the public manifest when the internal provider cannot load. |
| Provider-based | [provider-based/](./provider-based/) | One public manifest starts a cached gateway page, which checks the internal deployment and navigates to the internal or public provider.     |

Both include a simulator with a control panel, the same running health check and prompt, and a scenarios document, so you can try each and compare.

## Points to know before you choose

Check these first. Any one of them may rule the multi-manifest approach out before you read its README.

| Point                                        | Multi-manifest                                                                                                                                                                                                                               | Provider-based                                                                                         |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Operating system                             | **Windows only.** `fallbackManifests` is handled by the RVM, which only runs on Windows, so there is no launch fallback on macOS.                                                                                                            | The gateway is ordinary page code, so it does not rely on the RVM. It has only been tested on Windows. |
| Application folders                          | **Two**, one per manifest URL, under `%LOCALAPPDATA%\OpenFin\apps`, each with its own cached manifest and logs.                                                                                                                              | One.                                                                                                   |
| Deep links                                   | **Which link do you share?** A `fins://` link names one manifest URL. A link to the internal manifest fails where the internal deployment is unreachable and nothing is cached; a link to the public manifest skips the internal deployment. | One manifest URL, so one link. The gateway still chooses the deployment.                               |
| Windows jump lists and taskbar pins          | **Tied to the manifest URL that was running at the time.** A user who pins the app while it is running from the public manifest gets a pin and jump list that start the public manifest, not the internal one.                               | One manifest URL, so pins and jump lists always start the gateway.                                     |
| Start menu shortcut                          | Must come from the internal manifest, which has to launch successfully once on each machine.                                                                                                                                                 | Comes from the public manifest on the first launch.                                                    |
| First launch without the internal deployment | Fails.                                                                                                                                                                                                                                       | Works, if the public deployment is reachable.                                                          |
| Public deployment on every launch            | No, only when falling back.                                                                                                                                                                                                                  | Yes; the manifest and gateway are cached for brief outages.                                            |

## Which approach

|                                       | Multi-manifest                                                        | Provider-based                                                                           |
| ------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Shortcut target                       | the internal manifest                                                 | the public manifest                                                                      |
| What chooses the deployment at launch | the RVM, and only on a network-level failure of the internal provider | the gateway's `/health` check, so an HTTP error, timeout or unhealthy answer also counts |
| Extra launch time for internal users  | none when the internal deployment is healthy                          | one `/health` request                                                                    |
| Switching while running               | a switcher app quits the platform and launches the other manifest     | store a preference for the gateway, then `Application.restart()`                         |
| Code you maintain                     | health check, prompt, switcher app                                    | health check, prompt, gateway, service worker, preference page                           |

Choose **multi-manifest** if your users are on Windows only, the internal deployment must not depend on the public one at all, every machine is guaranteed a first successful launch from the internal deployment (for example, an MSI-driven rollout inside the network), and you do not rely on deep links, jump lists or taskbar pins.

Choose **provider-based** if users may first launch from anywhere, the public deployment is always available, and you would rather own a small gateway than rely on which load errors the RVM treats as a fallback.

## This is an example, not production code

These are examples of how to use HERE manifests to configure HERE Core Container. Their purpose is to provide an example and suggestions. **DO NOT** assume that they contain production-ready code. Please use them as a guide and provide feedback. Thanks!
