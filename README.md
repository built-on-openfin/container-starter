![OpenFin Container Starter](./assets/OpenFin-Container-Starter.png)

_Disclaimer: ℹ️ OpenFin Container is a commercial product and this repo is for evaluation purposes. Use of the OpenFin Container and OpenFin Container components is only granted pursuant to a license from OpenFin (see manifest). Please contact us if you would like to request a developer evaluation key or to discuss a production license._

# OpenFin Container

OpenFin Container is a desktop runtime application environment that enables communication between all of your apps (web, legacy, third-party) for the enterprise desktop. It is built on top of Google Chromium and GitHub Electron and combines advanced interoperability, lightning-fast distribution, and robust security with an agile web development and deployment model.

- [Learn more about the OpenFin Container](https://developers.openfin.co/of-docs/docs/container-overview)

## What can you do with this repository

This repository contains examples for common use cases and API implementations. Each how-to example represents a specific use case and contains implemented API details, required manifest attributes, and any external dependencies necessary to run the how-to example.

## Examples

| **Example**                                                          | **Description**                                                                                    | **Live Launch** |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------- |
| [container-platform-starter](./how-to/container-platform-starter)    | This example shows a simple platform with a single view.                                           | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fcontainer-platform-starter%2Fmanifest.fin.json) |
| [create-window](./how-to/create-window)                              | This example shows how to create a dynamic window or from a manifest.                              | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fcreate-window%2Fmanifest.fin.json) |
| [use-security-realms](./how-to/use-security-realms)                  | This example shows you security realms work with multiple target environments                      | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-security-realms%2Fmanifest.fin.json) |
| [use-preloads](./how-to/use-preloads)                                | This example shows you a number of examples on how preload scripts can be used in your application | [Example 1](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-preloads-basic%2Fmanifest.fin.json) [Example 2](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-preloads-restart-on-refresh%2Fmanifest.fin.json) |
| [use-channel-api](./how-to/use-channel-api)                          | This example shows you a number of examples on how to use the channel api for messaging            | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-channel-api-issue-commands-to-a-platform%2Fmanifest.fin.json) |
| [use-dynamic-manifest](./how-to/use-dynamic-manifest)                | This example contains examples of generating a manifest file dynamically                           | |
| [integration-excel](./how-to/integration-excel)                      | This example demonstrates how to integration with Excel using the OpenFin adaptor                  | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fintegration-excel%2Fmanifest.fin.json) |
| [use-popup-window](./how-to/use-popup-window/)                       | This example contains various examples of how to use popup windows                                 | [Example 1](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-popup-window-advanced%2Fmanifest.fin.json) [Example 2](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-popup-window-modal%2Fmanifest.fin.json) [Example 3](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-popup-window-single-result%2Fmanifest.fin.json) [Example 4](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-popup-window-multiple-results%2Fmanifest.fin.json) |
| [use-window-options](./how-to/use-window-options/)                   | This example demonstrates the options available for opening windows                                | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-window-options%2Fmanifest.fin.json) |
| [use-interop](./how-to/use-interop/)                                 | This example contains various implementations and use cases for the Interop API                    | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-interop-setup-multi-platform-interop%2Fmanifest.fin.json) |
| [use-a-manifest](./how-to/use-a-manifest/)                           | This example contains various examples of how to use the OpenFin manifest                          | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-a-manifest-create-a-single-page-platform%2Fmanifest.fin.json) |
| [use-content-creation-rules](./how-to/use-content-creation-rules/)   | This example demonstrates how content creation rules can be applied                                | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-content-creation-rules%2Fmanifest.fin.json) |
| [use-logging-apis](./how-to/use-logging-apis/)                       | This example shows how to use OpenFin APIs to retrieve logs and send them to a server.             | |
| [use-launch-external-process](./how-to/use-launch-external-process/) | This example demonstrates how to use the launch external process secure api.                       | [Example](https://start.openfin.co/?manifest=https%3A%2F%2Fbuilt-on-openfin.github.io%2Fcontainer-starter%2Fmain%2Fuse-launch-external-process%2Fmanifest.fin.json) |

## Before you get started

Read more about our [recommended development environment](https://developers.openfin.co/of-docs/docs/set-up-your-dev-environment).
