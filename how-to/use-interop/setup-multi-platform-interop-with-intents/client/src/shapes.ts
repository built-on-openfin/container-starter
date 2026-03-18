import type OpenFin from "@openfin/core";

/**
 * Represents an external client that you support connecting with as a platform.
 */
export interface ExternalClient {
	/**
	 * The client's uuid.
	 */
	uuid: string;

	/** If there is a specific appId that should be used instead of the uuid when an intent is raised and a target is specified. */
	appId?: string;

	/**
	 * A friendly name for the client.
	 */
	title: string;

	/**
	 * The client's manifest url. If you are connecting to an external client you will want to validate that the platform you
	 * are connecting to was launched by the trusted manifest url.
	 */
	manifestUrl: string;

	/**
	 * The client's interop key. If a client is connecting to you then you may want to validate that it has a valid key that you have prearranged with the client. The interop key is an optional property that can be used to identify and validate clients that are connecting to your platform.
	 */
	interopKey?: string;

	/**
	 * The client's interop definition that you are willing to support if they are connecting to your platform.
	 */
	interop: AppInterop;
}

/**
 * Application intents.
 */
export interface AppIntents {
	/**
	 * An optional display name for the intent that may be used in UI instead of the name.
	 */
	displayName?: string;

	/**
	 * Required. A comma separated list of the types of contexts the intent offered by the application can process,
	 * where the first part of the context type is the namespace e.g."fdc3.contact, org.companyname.contact"
	 */
	contexts: string[];

	/**
	 * An optional type for output returned by the application, if any, when resolving this intent. May indicate a
	 * context type by type name (e.g. "fdc3.instrument"), a channel (e.g. "channel") or a combination that indicates a
	 * channel that returns a particular context type (e.g. "channel<fdc3.instrument>").
	 */
	resultType?: string;

	/**
	 * Custom configuration for the intent that may be required for a particular desktop agent.
	 *
	 */
	customConfig?: { [key: string]: unknown };
}

/**
 * Intent target metadata.
 */
export interface IntentTargetMetaData {
	/** The appId */
	appId: string;
	/** The instanceId */
	instanceId?: string;
}

/**
 * Application interop.
 */
export interface AppInterop {
	/**
	 * Describes the app's interactions with intents.
	 */
	intents?: {
		/**
		 * A mapping of Intents names that an app listens for via fdc3.addIntentListener() or
		 * fin.me.interop.registerIntentHandler. Used to support intent resolution by the interop broker. Replaces the
		 * intents array used previously.
		 */
		listensFor?: {
			/**
			 * Definition of an intent that an app listens for
			 */
			[key: string]: AppIntents;
		};

		/**
		 * A mapping of Intent names that an app raises (via fdc3.raiseIntent) to an array of context type names that it
		 * may be raised with. Use the intent name "any" to represent use of the fdc3.raiseIntentForContext and
		 * fdc3.findIntentForContext functions, which allow the user to select from intents available for a specified
		 * context type.
		 */
		raises?: {
			[key: string]: string[];
		};
	};

	/**
	 * Describes the application's use of context types on User Channels.
	 */
	userChannels?: {
		/**
		 * This is not a standard property of the FDC3 interop specification. This is an additional property used
		 * to indicate which channels are allowed.
		 */
		allowedChannels?: string[];

		/**
		 * Context type names that are broadcast by the application.
		 */
		broadcasts?: string[];

		/**
		 * Context type names that the application listens for.
		 */
		listensFor?: string[];
	};

	/**
	 * Describes the application's use of App Channels.
	 */
	appChannels?: {
		/**
		 * The name of the App Channel.
		 */
		name: string;

		/**
		 * A description of how the channel is used.
		 */
		description?: string;

		/**
		 * Context type names that are broadcast by the application on the channel.
		 */
		broadcasts?: string[];

		/**
		 * Context type names that the application listens for on the channel.
		 */
		listensFor?: string[];
	}[];
}

/**
 * Represents a connection to an external broker.
 */
export interface ExternalClientConnection {
	/**
	 * This represents the interop client that is connected to the external broker. You can use this client to interact with the external broker, such as registering intent handlers or broadcasting context on channels.
	 */
	client: OpenFin.InteropClient;
	/**
	 * The UUID of the external broker's platform. This is used to identify which platform we are connected to and can be useful for debugging or logging purposes.
	 */
	uuid: string;
	/**
	 * A unique identifier for this specific connection to the external broker. This can be useful for tracking multiple connections to the same broker or for debugging purposes. It is generated using the external broker's UUID and a random UUID to ensure uniqueness across different connections.
	 */
	connectionId: string;
}
