# Use security realms

This repository demonstrates how to use OpenFin Runtime security realms to isolate application that have different target environments and enable interoperability between applications sharing the same target environment. 

Before diving in we recommend taking some time reading an [overview of how security realms work](https://developers.openfin.co/of-docs/docs/openfin-security#security-realms)

## How it Works

Security realms can be enabled by specifying an OpenFin Container runtime argument in an application's manifest.

## File and folder structure

*The paths provided in this description are relative to the server host*: `http://localhost:8080`

- Target Environments 
    - PROD
        - Platform Manifest: `/config/prod/platform.config.json`
            - Security Realm: `"PROD-MAIN"`
            - Contains a platform view loaded from: `/html/view-app.html`
                - Contains TypeScript written in `client/src` and loaded from: `../js/view-app.bundle.js`
        - Application Manifest: `/config/prod/window.config.json`   
            - Security Realm: `"PROD-MAIN"`
            - Contains an window loaded from: `/html/app.html`
                - Contains TypeScript written in `client/src` and loaded from: `../js/app.bundle.js`
    - UAT 
        - Platform Manifest: `/config/uat/platform.config.json` 
            - Security Realm: `"UAT-MAIN"`
            - Contains a platform view loaded from: `/html/view-app.html`
                - Contains TypeScript written in `client/src` and loaded from: `../js/view-app.bundle.js`
        - Application Manifest: `/config/uat/window.config.json`   
            - Security Realm: `"UAT-MAIN"`
            - Contains a platform view loaded from: `/html/app.html`
                - Contains TypeScript written in `client/src` and loaded from: `../js/view-app.bundle.js`
            - Contains an `appAsset` with a .NET adapter console application that subscribes to messages coming from applications in the `UAT-MAIN` security realm.

## Getting Started

Follow the instructions below to get up and running!

1. `npm i` or `npm install`
2. `npm run build` build the client and server code 
3. `npm run start` start the server 
4. `npm run client` launch the application

Once you have launched the PROD manifest (`http://localhost:8080/config/prod/platform.config.json`) you will see the a Platform window containing a single view with the following attributes.

1. A button to launch an application in **the same** target environment and security realm
2. A button to launch an application in **a different** target environment and security realm
3. A textarea to enter a message. 

Select the button in the box in the first box to demonstrate the behavior of applications communicating normally in the same security realm.
![Starting the application](./assets/security-realm-initial-launch.png)

You should now see a new application as seen below.
![Launching app in the same realm](./assets/same-realm-app-launched.png)


From the platform view, we can send a message to the launched application within the same security realm as the initially launched application. Go ahead and type something into the textarea and press send message in the third box. 
![Writing a message to same realm app](./assets/security-realm-sending-message.png)


Success! You should now see the message in the application launched from the platform view, because they are in the same security realm and are running on the same runtime version. In the application that received the message from the platform view, you can send something back to the view for acknowledgement. 
![Receiving a message and sending message to same realm app](./assets/security-realm-same-message.png)

At this point you should have something that looks like the image below. 
Now, from the platform view, launch the application using the button in the second box. 
![Same realm apps side by side](./assets/security-realm-full-convo.png)

This is our UAT environment and is launched from `http://localhost:8080/config/uat/uat.config.json`, and is configured with a **different** security realm name than the initially launched manifest from `http://localhost:8080/config/prod/platform.config.json`. We are testing a new native feature so we added an `appAsset` that is only available in our UAT environment. Type a message into our UAT application and press send. 
![Out of realm application](./assets/launch-uat.png)

Although the content from both applications is the same html and JavaScript, because they have different security realms defined, the application is restricted to the context of it's security realm. 
![Full Picture](./assets/security-realm-full.png)


