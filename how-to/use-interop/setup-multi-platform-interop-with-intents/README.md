# Use Cross Platform Interop With Intents

This repository demonstrates how to use HERE's interop overrides to enable **platform-to-platform intent-based interoperability** between two different Platform Applications. This example showcases how to list and discover supported external clients, validate connections between platforms, and enforce permissions controlling what external clients can and cannot do.

Before diving in we recommend taking some time familiarize yourself with the concepts and terms found in the [interoperability overview](https://resources.here.io/docs/core/container/interop/) section of our documentation.

## How it Works

The interop object, made available through HERE views and windows, is programmatically accessible through the concept of platform provider interop broker overrides. A platform provider override enables a developer to implement additional logic on how their platform should behave when it comes to interoperability. In this example specifically, we will be focusing on the `interopOverride` to implement:

- **External client discovery**: Reading a configuration file to list supported external platforms that can connect
- **Connection validation**: Validating incoming connections by checking manifest URLs and shared secrets (interopKey)
- **Permission enforcement**: Controlling which intents external clients can raise and listen for and what context groups they can join through the `isActionAuthorized` method
- **Intent routing**: Handling intent requests raised from one platform and routing them to registered handlers in another platform

## Platform-to-Platform Intent Flow

The diagram below illustrates the complete flow from initialization through intent handling between platforms:

```mermaid
sequenceDiagram
    participant P1 as Platform 1
    participant P1Broker as Platform 1<br/>Interop Broker
    participant Config as external-clients.json
    participant P2App as Platform 2<br/>Application
    participant P2Broker as Platform 2<br/>Interop Broker
    participant Handler as Intent Handler<br/>(Platform 2)

    Note over P1,Handler: INITIALIZATION PHASE
    
    P1->>P1Broker: Platform.init({ interopOverride })
    activate P1Broker
    P1Broker->>P1Broker: constructor() called
    P1Broker->>P1Broker: initializeConnections()
    
    P1Broker->>Config: Fetch external-clients.json
    Note right of Config: URL: {platformUUID}-external-clients.json<br/>Contains: uuid, manifestUrl,<br/>interopKey, intents config
    Config-->>P1Broker: Return ExternalClient[]
    P1Broker->>P1Broker: Store in this.externalClients[]
    
    loop For each external client
        P1Broker->>P1Broker: validateAndConnect(externalClient)
        P1Broker->>P2App: Check isRunning()
        
        alt Platform 2 is already running
            P2App-->>P1Broker: true
            P1Broker->>P2App: getInfo() - validate manifestUrl
            P2App-->>P1Broker: manifestUrl matches
            P1Broker->>P2Broker: Interop.connectSync(uuid, {HERE_API: interopKey})
            P2Broker->>P2Broker: isConnectionAuthorized()
            Note right of P2Broker: Validates:<br/>1. UUID in allowed list<br/>2. interopKey matches
            P2Broker-->>P1Broker: InteropClient connection
            P1Broker->>P1Broker: Store in externalClientConnections[]
        else Platform 2 not running yet
            P2App-->>P1Broker: false
            P1Broker->>P2App: Listen for 'platform-api-ready' event
            Note over P1Broker,P2App: Wait for Platform 2 to start
            P2App->>P2App: Platform 2 starts
            P2App->>P1Broker: Emit 'platform-api-ready'
            P1Broker->>P2App: getInfo() - validate manifestUrl
            P2App-->>P1Broker: manifestUrl matches
            P1Broker->>P2Broker: Interop.connectSync(uuid, {HERE_API: interopKey})
            P2Broker->>P2Broker: isConnectionAuthorized()
            P2Broker-->>P1Broker: InteropClient connection
            P1Broker->>P1Broker: Store in externalClientConnections[]
        end
    end
    deactivate P1Broker
    
    Note over P1,Handler: INTENT RAISING PHASE

    P1->>P1Broker: fdc3.raiseIntent("ViewAnalysis", context)
    activate P1Broker
    
    P1Broker->>P1Broker: isActionAuthorized("fireIntent")
    Note right of P1Broker: Check if Platform 1 app<br/>is allowed to raise<br/>"ViewAnalysis" intent
    
    P1Broker->>P1Broker: handleInfoForIntent()
    Note right of P1Broker: Search externalClients[]<br/>for apps that listenFor<br/>"ViewAnalysis"
    P1Broker-->>P1: Return available apps
    
    P1->>P1Broker: User selects Platform 2 as target
    P1Broker->>P1Broker: handleFiredIntent(intent, clientIdentity)
    
    P1Broker->>P1Broker: Find target in externalClients[]
    Note right of P1Broker: Match by:<br/>1. Target appId (if specified)<br/>2. Intent name in listensFor
    
    P1Broker->>P1Broker: Find connection in externalClientConnections[]
    
    P1Broker->>P2Broker: client.fireIntent(intent)
    
    activate P2Broker
    P2Broker->>P2Broker: isActionAuthorized("intentHandlerRegistered")
    Note right of P2Broker: Check if handler's intent<br/>is in allowed listensFor<br/>intents for Platform 2
    
    alt Authorization successful
        P2Broker->>Handler: Route intent to registered handler
        Handler->>Handler: Process intent with context
        Handler-->>P2Broker: Return result
        P2Broker-->>P1Broker: Intent resolution
        P1Broker-->>P1: Success response
    else Authorization failed
        P2Broker-->>P1Broker: Reject - not authorized
        P1Broker-->>P1: Error: TargetAppUnavailable
    end
    deactivate P2Broker
    deactivate P1Broker
````

This is an example of how to use HERE APIs to configure HERE Core Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. 

## Get Started

Follow the instructions below to get up and running.

Set up the project
Install dependencies and do the initial build. Note that these examples assume you are in the sub-directory for the example.
Build the project.
Start the test server in a new window.
Start the first Platform application.
Start the second Platform application.
Use the project interface
This example demonstrates intent-based communication between two separate platforms:

Raising intents from Platform 1 to Platform 2:

In Platform 1, open a view that can raise intents (e.g., ViewAnalysis, ViewInstrument)
Select a context (e.g., an instrument or organization)
Raise an intent - the broker will query which platforms can handle it
Select Platform 2 as the target from the list of available handlers
Platform 2 receives the intent and routes it to the appropriate handler view
Permission enforcement demonstration:

The example shows how external clients are restricted:

Platform 2 can only listen for intents listed in its listensFor configuration (e.g., StartCall, ViewNews)
Platform 2 can only raise intents listed in its raises configuration (e.g., ViewProfile, ViewAnalysis)
Attempts to register handlers or raise intents outside these permissions are rejected by the broker's isActionAuthorized method
Connection validation:

When platforms connect, they validate each other by:

Checking that the connecting platform's UUID is in the allowed external clients list
Verifying the manifest URL matches the expected URL for that platform
Validating the shared interopKey passed during connection
NOTE: The complete implementation logic for listing supported external clients, validating connections, and enforcing intent-based permissions is provided in client/src/provider.ts. The external client configurations defining which intents each platform can raise and listen for are in the platform-1-external-clients.json and platform-2-external-clients.json files.

A note about this example
This is an example of how to use HERE APIs to configure HERE Core Container. Its purpose is to provide an example and suggestions. DO NOT assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!