# Use security realms

This repository demonstrates how to use OpenFin Runtime security realms to isolate application that have different target environments and enable interoperability between applications sharing the same target environment. 

[Learn more about how security realms work!](https://developers.openfin.co/of-docs/docs/openfin-security#security-realms)


## How it Works

Security realms can be enabled by specifying a OpenFin Container runtime argument in an applications manifest.

File and folder structure

- Host: `http://localhost:8080`
- Target Environments
    - PROD
        - Platform Manifest: `/config/prod/platform.config.json`
            - Security Realm: `"PROD-MAIN"`
            - Contains a platform view loaded from: `/html/view-app.html`
                - Contains javascript written in `client/src` and loaded from: `../js/view-app.bundle.js`
        - Application Manifest: `/config/prod/window.config.json`   
            - Security Realm: `"PROD-MAIN"`
            - Contains an window loaded from: `/html/app.html`
                - Contains javascript written in `client/src` and loaded from: `../js/app.bundle.js`
    - UAT 
        - Platform Manifest: `/config/uat/platform.config.json` 
            - Security Realm: `"UAT-MAIN"`
            - Contains a platform view loaded from: `/html/view-app.html`
                - Contains javascript written in `client/src` and loaded from: `../js/view-app.bundle.js`
        - Application Manifest: `/config/uat/window.config.json`   
            - Security Realm: `"UAT-MAIN"`
            - Contains a platform view loaded from: `/html/app.html`
                - Contains javascript written in `client/src` and loaded from: `../js/view-app.bundle.js`

## Getting Started

Follow the instructions below to get up and running!

### Installation

1. `npm i` or `npm install`
2. `npm run build`
3. `npm run start`
4. `npm run client` 


&lt;Paragraph> Implementation overview and high-level dependency explanation

Step by step installation instructions, if possible provide simple commands to achieve set up, build, and run tasks.

OpenFin API’s used and in which Entities (Platform, App, Window, View)

Include gifs for visual cues

### Feature Explanation

Explain any complex behavior associated with the how-to example that requires multiple steps and outcomes.

### Configuration Changes and detailed property explanation

If the how-to example requires additional manifest or manifest-like changes provide a detailed property table to describe each properties type/behavior.

### FAQ &lt;optional if necessary>