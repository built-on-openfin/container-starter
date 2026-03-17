import type { OpenFin } from "@openfin/core";
import type { ExternalClient, ExternalClientConnection } from "./shapes";
import { randomUUID } from "./util";

/**
 * Requests a connection to an external client.
 * @param externalClient - the information about the external client to connect to, including uuid, manifestUrl, and any custom data needed for validation.
 * @returns interop client instance connected to the external client.
 */
export async function connectToExternalClient(externalClient: ExternalClient):
Promise<ExternalClientConnection> {
    return new Promise<ExternalClientConnection>((resolve, reject) => {
        const platform: OpenFin.Platform = fin.Platform.wrapSync({ uuid: externalClient.uuid });
        const connectionId = `${externalClient.uuid}-${randomUUID()}`;
        platform.Application.isRunning().then(async (isRunning) => {
            let success = false;
            try {
                if (isRunning) {
                    const brokerConnection = await validateAndReturnBrokerConnection(externalClient, platform);
                    resolve({ client: brokerConnection, uuid: externalClient.uuid, connectionId });
                    success = true;
                } else {
                 await platform.on("platform-api-ready", async () => {
                    const brokerConnection = await validateAndReturnBrokerConnection(externalClient, platform);
                    resolve({ client: brokerConnection, uuid: externalClient.uuid, connectionId });
                    success = true;
                 });
                }
            } catch (error) {
                reject(error);
            }
            return success;
        })
          .catch(() => reject(new Error(`Failed to connect to platform with uuid ${externalClient.uuid}`)));
    });
}

/**
 * Validates the connection to an external client.
 * @param externalClient - the information about the external client to connect to, including uuid, manifestUrl, and any custom data needed for validation.
 * @param externalClient.uuid - the uuid of the external client's platform.
 * @param externalClient.manifestUrl - the manifest url of the external client's platform, used for validation to ensure we are connecting to the expected platform.
 * @param externalClient.interopKey - a specific key used for interop validation.
 * @param payload - the custom data payload to validate against the external client's interop key.
 * @param payload.HERE_API - a specific key within the custom data to validate.
 * @returns A boolean indicating if the connection is valid.
 */
export async function validateBrokerConnection(externalClient: ExternalClient,
    payload: { HERE_API?: string }): Promise<boolean> {
    const platform: OpenFin.Platform = fin.Platform.wrapSync({ uuid: externalClient.uuid });
    const isValidManifest = await validateManifestUrl(externalClient, platform);
    if (!isValidManifest) {
        console.error(`Validation failed for platform with uuid ${externalClient.uuid} due to manifest url mismatch.`);
        return false;
    }
    const isValidPayload = await validatePayload(externalClient, payload);
    if (!isValidPayload) {
        console.error(`Validation failed for platform with uuid ${externalClient.uuid} due to invalid custom data. Received HERE_API: ${payload.HERE_API}`);
        return false;
    }
    return true;
}

/**
 * Setup the connection to an external platform.
 * @param externalClient the external client information used to connect to the external platform and setup the context sharing groups.
 * @param platform the instance of the external platform used to setup the connection and context sharing groups.
 * @returns A connected InteropClient instance if the validation is successful, otherwise an error is thrown.
 */
async function validateAndReturnBrokerConnection(externalClient: ExternalClient,
    platform: OpenFin.Platform): Promise<OpenFin.InteropClient> {
        const isValidPlatform = await validateManifestUrl(externalClient, platform);
        if (!isValidPlatform) {
            throw new Error(
                `The manifest url of the connected platform does not match the expected manifest url ${externalClient.manifestUrl} for ${externalClient.uuid}`
            );
        }
        const interopClient = fin.Interop.connectSync(externalClient.uuid,
            { HERE_API: externalClient.interopKey } as OpenFin.InteropConfig);
        return interopClient;
}

/**
 * Validates the connection to an external client by checking the manifest url and custom data.
 * @param externalClient - the information about the external client to connect to, including uuid, manifestUrl, and any custom data needed for validation.
 * @param platform - the instance of the external platform used to validate the manifest url.
 * @returns A boolean indicating if the connection is valid.
 */
async function validateManifestUrl(externalClient: ExternalClient, platform: OpenFin.Platform): Promise<boolean> {
    const info = await platform.Application.getInfo();
    const isValid = info.manifestUrl === externalClient.manifestUrl;
    if(!isValid) {
        console.warn(`Validating connection to platform with uuid ${externalClient.uuid}. Expected manifest url: ${externalClient.manifestUrl}, Actual manifest url: ${info.manifestUrl}`);
    }
    return isValid;
}

/**
 * Validates the connection to an external broker by checking custom data.
 * This is a placeholder for any custom validation logic you want to implement for the connection.
 * For example, you could check if the custom data contains a specific key or value that you expect.
 * In this example, we are just checking if the HERE_API key exists and has a specific value.
 * @param externalClient - the information about the external client, including uuid, manifestUrl, and any custom data needed for validation.
 * @param payload - the custom data payload to validate against the connection's custom data.
 * @param payload.HERE_API - a specific key within the custom data to validate.
 * @returns A boolean indicating if the connection is valid based on the custom data validation.
 */
async function validatePayload(externalClient: ExternalClient, payload: { HERE_API?: string }): Promise<boolean> {
    const isPayloadValid = payload.HERE_API === externalClient.interopKey;
    if (!isPayloadValid) {
        // NOTE: YOU WOULD NOT WANT TO LOG SENSITIVE INFORMATION IN A PRODUCTION ENVIRONMENT. This is just for demonstration purposes to show how you could validate custom data on the connection and log for debugging if the validation fails.
        console.warn(`Validating connection to platform with uuid ${externalClient.uuid}. Expected HERE_API: ${externalClient.interopKey}, Actual HERE_API: ${payload.HERE_API}`);
    }
    return isPayloadValid;
}
