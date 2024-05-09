/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@finos/fdc3/dist/fdc3.esm.js":
/*!*******************************************************!*\
  !*** ../../node_modules/@finos/fdc3/dist/fdc3.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BridgingError: () => (/* binding */ BridgingError),
/* harmony export */   BridgingTypes: () => (/* binding */ BridgingTypes),
/* harmony export */   ChannelError: () => (/* binding */ ChannelError),
/* harmony export */   ContextTypes: () => (/* binding */ ContextTypes),
/* harmony export */   Convert: () => (/* binding */ Convert),
/* harmony export */   Intents: () => (/* binding */ Intents),
/* harmony export */   OpenError: () => (/* binding */ OpenError),
/* harmony export */   ResolveError: () => (/* binding */ ResolveError),
/* harmony export */   ResultError: () => (/* binding */ ResultError),
/* harmony export */   addContextListener: () => (/* binding */ addContextListener),
/* harmony export */   addIntentListener: () => (/* binding */ addIntentListener),
/* harmony export */   broadcast: () => (/* binding */ broadcast),
/* harmony export */   compareVersionNumbers: () => (/* binding */ compareVersionNumbers),
/* harmony export */   createPrivateChannel: () => (/* binding */ createPrivateChannel),
/* harmony export */   fdc3Ready: () => (/* binding */ fdc3Ready),
/* harmony export */   findInstances: () => (/* binding */ findInstances),
/* harmony export */   findIntent: () => (/* binding */ findIntent),
/* harmony export */   findIntentsByContext: () => (/* binding */ findIntentsByContext),
/* harmony export */   getAppMetadata: () => (/* binding */ getAppMetadata),
/* harmony export */   getCurrentChannel: () => (/* binding */ getCurrentChannel),
/* harmony export */   getInfo: () => (/* binding */ getInfo),
/* harmony export */   getOrCreateChannel: () => (/* binding */ getOrCreateChannel),
/* harmony export */   getSystemChannels: () => (/* binding */ getSystemChannels),
/* harmony export */   getUserChannels: () => (/* binding */ getUserChannels),
/* harmony export */   isStandardContextType: () => (/* binding */ isStandardContextType),
/* harmony export */   isStandardIntent: () => (/* binding */ isStandardIntent),
/* harmony export */   joinChannel: () => (/* binding */ joinChannel),
/* harmony export */   joinUserChannel: () => (/* binding */ joinUserChannel),
/* harmony export */   leaveCurrentChannel: () => (/* binding */ leaveCurrentChannel),
/* harmony export */   open: () => (/* binding */ open),
/* harmony export */   raiseIntent: () => (/* binding */ raiseIntent),
/* harmony export */   raiseIntentForContext: () => (/* binding */ raiseIntentForContext),
/* harmony export */   versionIsAtLeast: () => (/* binding */ versionIsAtLeast)
/* harmony export */ });
// To parse this data:
//
//   import { Convert, AgentErrorResponseMessage, AgentRequestMessage, AgentResponseMessage, BridgeErrorResponseMessage, BridgeRequestMessage, BridgeResponseMessage, BroadcastAgentRequest, BroadcastBridgeRequest, ConnectionStepMessage, ConnectionStep2Hello, ConnectionStep3Handshake, ConnectionStep4AuthenticationFailed, ConnectionStep6ConnectedAgentsUpdate, FindInstancesAgentErrorResponse, FindInstancesAgentRequest, FindInstancesAgentResponse, FindInstancesBridgeErrorResponse, FindInstancesBridgeRequest, FindInstancesBridgeResponse, FindIntentAgentErrorResponse, FindIntentAgentRequest, FindIntentAgentResponse, FindIntentBridgeErrorResponse, FindIntentBridgeRequest, FindIntentBridgeResponse, FindIntentsByContextAgentErrorResponse, FindIntentsByContextAgentRequest, FindIntentsByContextAgentResponse, FindIntentsByContextBridgeErrorResponse, FindIntentsByContextBridgeRequest, FindIntentsByContextBridgeResponse, GetAppMetadataAgentErrorResponse, GetAppMetadataAgentRequest, GetAppMetadataAgentResponse, GetAppMetadataBridgeErrorResponse, GetAppMetadataBridgeRequest, GetAppMetadataBridgeResponse, OpenAgentErrorResponse, OpenAgentRequest, OpenAgentResponse, OpenBridgeErrorResponse, OpenBridgeRequest, OpenBridgeResponse, PrivateChannelBroadcastAgentRequest, PrivateChannelBroadcastBridgeRequest, PrivateChannelEventListenerAddedAgentRequest, PrivateChannelEventListenerAddedBridgeRequest, PrivateChannelEventListenerRemovedAgentRequest, PrivateChannelEventListenerRemovedBridgeRequest, PrivateChannelOnAddContextListenerAgentRequest, PrivateChannelOnAddContextListenerBridgeRequest, PrivateChannelOnDisconnectAgentRequest, PrivateChannelOnDisconnectBridgeRequest, PrivateChannelOnUnsubscribeAgentRequest, PrivateChannelOnUnsubscribeBridgeRequest, RaiseIntentAgentErrorResponse, RaiseIntentAgentRequest, RaiseIntentAgentResponse, RaiseIntentBridgeErrorResponse, RaiseIntentBridgeRequest, RaiseIntentBridgeResponse, RaiseIntentResultAgentErrorResponse, RaiseIntentResultAgentResponse, RaiseIntentResultBridgeErrorResponse, RaiseIntentResultBridgeResponse, Context } from "./file";
//
//   const fDC3DesktopAgentAPISchema = Convert.toFDC3DesktopAgentAPISchema(json);
//   const agentErrorResponseMessage = Convert.toAgentErrorResponseMessage(json);
//   const agentRequestMessage = Convert.toAgentRequestMessage(json);
//   const agentResponseMessage = Convert.toAgentResponseMessage(json);
//   const bridgeErrorResponseMessage = Convert.toBridgeErrorResponseMessage(json);
//   const bridgeRequestMessage = Convert.toBridgeRequestMessage(json);
//   const bridgeResponseMessage = Convert.toBridgeResponseMessage(json);
//   const broadcastAgentRequest = Convert.toBroadcastAgentRequest(json);
//   const broadcastBridgeRequest = Convert.toBroadcastBridgeRequest(json);
//   const bridgingCommons = Convert.toBridgingCommons(json);
//   const connectionStepMessage = Convert.toConnectionStepMessage(json);
//   const connectionStep2Hello = Convert.toConnectionStep2Hello(json);
//   const connectionStep3Handshake = Convert.toConnectionStep3Handshake(json);
//   const connectionStep4AuthenticationFailed = Convert.toConnectionStep4AuthenticationFailed(json);
//   const connectionStep6ConnectedAgentsUpdate = Convert.toConnectionStep6ConnectedAgentsUpdate(json);
//   const findInstancesAgentErrorResponse = Convert.toFindInstancesAgentErrorResponse(json);
//   const findInstancesAgentRequest = Convert.toFindInstancesAgentRequest(json);
//   const findInstancesAgentResponse = Convert.toFindInstancesAgentResponse(json);
//   const findInstancesBridgeErrorResponse = Convert.toFindInstancesBridgeErrorResponse(json);
//   const findInstancesBridgeRequest = Convert.toFindInstancesBridgeRequest(json);
//   const findInstancesBridgeResponse = Convert.toFindInstancesBridgeResponse(json);
//   const findIntentAgentErrorResponse = Convert.toFindIntentAgentErrorResponse(json);
//   const findIntentAgentRequest = Convert.toFindIntentAgentRequest(json);
//   const findIntentAgentResponse = Convert.toFindIntentAgentResponse(json);
//   const findIntentBridgeErrorResponse = Convert.toFindIntentBridgeErrorResponse(json);
//   const findIntentBridgeRequest = Convert.toFindIntentBridgeRequest(json);
//   const findIntentBridgeResponse = Convert.toFindIntentBridgeResponse(json);
//   const findIntentsByContextAgentErrorResponse = Convert.toFindIntentsByContextAgentErrorResponse(json);
//   const findIntentsByContextAgentRequest = Convert.toFindIntentsByContextAgentRequest(json);
//   const findIntentsByContextAgentResponse = Convert.toFindIntentsByContextAgentResponse(json);
//   const findIntentsByContextBridgeErrorResponse = Convert.toFindIntentsByContextBridgeErrorResponse(json);
//   const findIntentsByContextBridgeRequest = Convert.toFindIntentsByContextBridgeRequest(json);
//   const findIntentsByContextBridgeResponse = Convert.toFindIntentsByContextBridgeResponse(json);
//   const getAppMetadataAgentErrorResponse = Convert.toGetAppMetadataAgentErrorResponse(json);
//   const getAppMetadataAgentRequest = Convert.toGetAppMetadataAgentRequest(json);
//   const getAppMetadataAgentResponse = Convert.toGetAppMetadataAgentResponse(json);
//   const getAppMetadataBridgeErrorResponse = Convert.toGetAppMetadataBridgeErrorResponse(json);
//   const getAppMetadataBridgeRequest = Convert.toGetAppMetadataBridgeRequest(json);
//   const getAppMetadataBridgeResponse = Convert.toGetAppMetadataBridgeResponse(json);
//   const openAgentErrorResponse = Convert.toOpenAgentErrorResponse(json);
//   const openAgentRequest = Convert.toOpenAgentRequest(json);
//   const openAgentResponse = Convert.toOpenAgentResponse(json);
//   const openBridgeErrorResponse = Convert.toOpenBridgeErrorResponse(json);
//   const openBridgeRequest = Convert.toOpenBridgeRequest(json);
//   const openBridgeResponse = Convert.toOpenBridgeResponse(json);
//   const privateChannelBroadcastAgentRequest = Convert.toPrivateChannelBroadcastAgentRequest(json);
//   const privateChannelBroadcastBridgeRequest = Convert.toPrivateChannelBroadcastBridgeRequest(json);
//   const privateChannelEventListenerAddedAgentRequest = Convert.toPrivateChannelEventListenerAddedAgentRequest(json);
//   const privateChannelEventListenerAddedBridgeRequest = Convert.toPrivateChannelEventListenerAddedBridgeRequest(json);
//   const privateChannelEventListenerRemovedAgentRequest = Convert.toPrivateChannelEventListenerRemovedAgentRequest(json);
//   const privateChannelEventListenerRemovedBridgeRequest = Convert.toPrivateChannelEventListenerRemovedBridgeRequest(json);
//   const privateChannelOnAddContextListenerAgentRequest = Convert.toPrivateChannelOnAddContextListenerAgentRequest(json);
//   const privateChannelOnAddContextListenerBridgeRequest = Convert.toPrivateChannelOnAddContextListenerBridgeRequest(json);
//   const privateChannelOnDisconnectAgentRequest = Convert.toPrivateChannelOnDisconnectAgentRequest(json);
//   const privateChannelOnDisconnectBridgeRequest = Convert.toPrivateChannelOnDisconnectBridgeRequest(json);
//   const privateChannelOnUnsubscribeAgentRequest = Convert.toPrivateChannelOnUnsubscribeAgentRequest(json);
//   const privateChannelOnUnsubscribeBridgeRequest = Convert.toPrivateChannelOnUnsubscribeBridgeRequest(json);
//   const raiseIntentAgentErrorResponse = Convert.toRaiseIntentAgentErrorResponse(json);
//   const raiseIntentAgentRequest = Convert.toRaiseIntentAgentRequest(json);
//   const raiseIntentAgentResponse = Convert.toRaiseIntentAgentResponse(json);
//   const raiseIntentBridgeErrorResponse = Convert.toRaiseIntentBridgeErrorResponse(json);
//   const raiseIntentBridgeRequest = Convert.toRaiseIntentBridgeRequest(json);
//   const raiseIntentBridgeResponse = Convert.toRaiseIntentBridgeResponse(json);
//   const raiseIntentResultAgentErrorResponse = Convert.toRaiseIntentResultAgentErrorResponse(json);
//   const raiseIntentResultAgentResponse = Convert.toRaiseIntentResultAgentResponse(json);
//   const raiseIntentResultBridgeErrorResponse = Convert.toRaiseIntentResultBridgeErrorResponse(json);
//   const raiseIntentResultBridgeResponse = Convert.toRaiseIntentResultBridgeResponse(json);
//   const context = Convert.toContext(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert$1 = /** @class */ (function () {
    function Convert() {
    }
    Convert.toFDC3DesktopAgentAPISchema = function (json) {
        return cast$1(JSON.parse(json), "any");
    };
    Convert.fDC3DesktopAgentAPISchemaToJson = function (value) {
        return JSON.stringify(uncast$1(value, "any"), null, 2);
    };
    Convert.toAgentErrorResponseMessage = function (json) {
        return cast$1(JSON.parse(json), r$1("AgentErrorResponseMessage"));
    };
    Convert.agentErrorResponseMessageToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("AgentErrorResponseMessage")), null, 2);
    };
    Convert.toAgentRequestMessage = function (json) {
        return cast$1(JSON.parse(json), r$1("AgentRequestMessage"));
    };
    Convert.agentRequestMessageToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("AgentRequestMessage")), null, 2);
    };
    Convert.toAgentResponseMessage = function (json) {
        return cast$1(JSON.parse(json), r$1("AgentResponseMessage"));
    };
    Convert.agentResponseMessageToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("AgentResponseMessage")), null, 2);
    };
    Convert.toBridgeErrorResponseMessage = function (json) {
        return cast$1(JSON.parse(json), r$1("BridgeErrorResponseMessage"));
    };
    Convert.bridgeErrorResponseMessageToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("BridgeErrorResponseMessage")), null, 2);
    };
    Convert.toBridgeRequestMessage = function (json) {
        return cast$1(JSON.parse(json), r$1("BridgeRequestMessage"));
    };
    Convert.bridgeRequestMessageToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("BridgeRequestMessage")), null, 2);
    };
    Convert.toBridgeResponseMessage = function (json) {
        return cast$1(JSON.parse(json), r$1("BridgeResponseMessage"));
    };
    Convert.bridgeResponseMessageToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("BridgeResponseMessage")), null, 2);
    };
    Convert.toBroadcastAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("BroadcastAgentRequest"));
    };
    Convert.broadcastAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("BroadcastAgentRequest")), null, 2);
    };
    Convert.toBroadcastBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("BroadcastBridgeRequest"));
    };
    Convert.broadcastBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("BroadcastBridgeRequest")), null, 2);
    };
    Convert.toBridgingCommons = function (json) {
        return cast$1(JSON.parse(json), m$1("any"));
    };
    Convert.bridgingCommonsToJson = function (value) {
        return JSON.stringify(uncast$1(value, m$1("any")), null, 2);
    };
    Convert.toConnectionStepMessage = function (json) {
        return cast$1(JSON.parse(json), r$1("ConnectionStepMessage"));
    };
    Convert.connectionStepMessageToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("ConnectionStepMessage")), null, 2);
    };
    Convert.toConnectionStep2Hello = function (json) {
        return cast$1(JSON.parse(json), r$1("ConnectionStep2Hello"));
    };
    Convert.connectionStep2HelloToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("ConnectionStep2Hello")), null, 2);
    };
    Convert.toConnectionStep3Handshake = function (json) {
        return cast$1(JSON.parse(json), r$1("ConnectionStep3Handshake"));
    };
    Convert.connectionStep3HandshakeToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("ConnectionStep3Handshake")), null, 2);
    };
    Convert.toConnectionStep4AuthenticationFailed = function (json) {
        return cast$1(JSON.parse(json), r$1("ConnectionStep4AuthenticationFailed"));
    };
    Convert.connectionStep4AuthenticationFailedToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("ConnectionStep4AuthenticationFailed")), null, 2);
    };
    Convert.toConnectionStep6ConnectedAgentsUpdate = function (json) {
        return cast$1(JSON.parse(json), r$1("ConnectionStep6ConnectedAgentsUpdate"));
    };
    Convert.connectionStep6ConnectedAgentsUpdateToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("ConnectionStep6ConnectedAgentsUpdate")), null, 2);
    };
    Convert.toFindInstancesAgentErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindInstancesAgentErrorResponse"));
    };
    Convert.findInstancesAgentErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindInstancesAgentErrorResponse")), null, 2);
    };
    Convert.toFindInstancesAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("FindInstancesAgentRequest"));
    };
    Convert.findInstancesAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindInstancesAgentRequest")), null, 2);
    };
    Convert.toFindInstancesAgentResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindInstancesAgentResponse"));
    };
    Convert.findInstancesAgentResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindInstancesAgentResponse")), null, 2);
    };
    Convert.toFindInstancesBridgeErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindInstancesBridgeErrorResponse"));
    };
    Convert.findInstancesBridgeErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindInstancesBridgeErrorResponse")), null, 2);
    };
    Convert.toFindInstancesBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("FindInstancesBridgeRequest"));
    };
    Convert.findInstancesBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindInstancesBridgeRequest")), null, 2);
    };
    Convert.toFindInstancesBridgeResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindInstancesBridgeResponse"));
    };
    Convert.findInstancesBridgeResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindInstancesBridgeResponse")), null, 2);
    };
    Convert.toFindIntentAgentErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentAgentErrorResponse"));
    };
    Convert.findIntentAgentErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentAgentErrorResponse")), null, 2);
    };
    Convert.toFindIntentAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentAgentRequest"));
    };
    Convert.findIntentAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentAgentRequest")), null, 2);
    };
    Convert.toFindIntentAgentResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentAgentResponse"));
    };
    Convert.findIntentAgentResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentAgentResponse")), null, 2);
    };
    Convert.toFindIntentBridgeErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentBridgeErrorResponse"));
    };
    Convert.findIntentBridgeErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentBridgeErrorResponse")), null, 2);
    };
    Convert.toFindIntentBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentBridgeRequest"));
    };
    Convert.findIntentBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentBridgeRequest")), null, 2);
    };
    Convert.toFindIntentBridgeResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentBridgeResponse"));
    };
    Convert.findIntentBridgeResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentBridgeResponse")), null, 2);
    };
    Convert.toFindIntentsByContextAgentErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentsByContextAgentErrorResponse"));
    };
    Convert.findIntentsByContextAgentErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentsByContextAgentErrorResponse")), null, 2);
    };
    Convert.toFindIntentsByContextAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentsByContextAgentRequest"));
    };
    Convert.findIntentsByContextAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentsByContextAgentRequest")), null, 2);
    };
    Convert.toFindIntentsByContextAgentResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentsByContextAgentResponse"));
    };
    Convert.findIntentsByContextAgentResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentsByContextAgentResponse")), null, 2);
    };
    Convert.toFindIntentsByContextBridgeErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentsByContextBridgeErrorResponse"));
    };
    Convert.findIntentsByContextBridgeErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentsByContextBridgeErrorResponse")), null, 2);
    };
    Convert.toFindIntentsByContextBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentsByContextBridgeRequest"));
    };
    Convert.findIntentsByContextBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentsByContextBridgeRequest")), null, 2);
    };
    Convert.toFindIntentsByContextBridgeResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("FindIntentsByContextBridgeResponse"));
    };
    Convert.findIntentsByContextBridgeResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("FindIntentsByContextBridgeResponse")), null, 2);
    };
    Convert.toGetAppMetadataAgentErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("GetAppMetadataAgentErrorResponse"));
    };
    Convert.getAppMetadataAgentErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("GetAppMetadataAgentErrorResponse")), null, 2);
    };
    Convert.toGetAppMetadataAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("GetAppMetadataAgentRequest"));
    };
    Convert.getAppMetadataAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("GetAppMetadataAgentRequest")), null, 2);
    };
    Convert.toGetAppMetadataAgentResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("GetAppMetadataAgentResponse"));
    };
    Convert.getAppMetadataAgentResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("GetAppMetadataAgentResponse")), null, 2);
    };
    Convert.toGetAppMetadataBridgeErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("GetAppMetadataBridgeErrorResponse"));
    };
    Convert.getAppMetadataBridgeErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("GetAppMetadataBridgeErrorResponse")), null, 2);
    };
    Convert.toGetAppMetadataBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("GetAppMetadataBridgeRequest"));
    };
    Convert.getAppMetadataBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("GetAppMetadataBridgeRequest")), null, 2);
    };
    Convert.toGetAppMetadataBridgeResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("GetAppMetadataBridgeResponse"));
    };
    Convert.getAppMetadataBridgeResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("GetAppMetadataBridgeResponse")), null, 2);
    };
    Convert.toOpenAgentErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("OpenAgentErrorResponse"));
    };
    Convert.openAgentErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("OpenAgentErrorResponse")), null, 2);
    };
    Convert.toOpenAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("OpenAgentRequest"));
    };
    Convert.openAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("OpenAgentRequest")), null, 2);
    };
    Convert.toOpenAgentResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("OpenAgentResponse"));
    };
    Convert.openAgentResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("OpenAgentResponse")), null, 2);
    };
    Convert.toOpenBridgeErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("OpenBridgeErrorResponse"));
    };
    Convert.openBridgeErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("OpenBridgeErrorResponse")), null, 2);
    };
    Convert.toOpenBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("OpenBridgeRequest"));
    };
    Convert.openBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("OpenBridgeRequest")), null, 2);
    };
    Convert.toOpenBridgeResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("OpenBridgeResponse"));
    };
    Convert.openBridgeResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("OpenBridgeResponse")), null, 2);
    };
    Convert.toPrivateChannelBroadcastAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelBroadcastAgentRequest"));
    };
    Convert.privateChannelBroadcastAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelBroadcastAgentRequest")), null, 2);
    };
    Convert.toPrivateChannelBroadcastBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelBroadcastBridgeRequest"));
    };
    Convert.privateChannelBroadcastBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelBroadcastBridgeRequest")), null, 2);
    };
    Convert.toPrivateChannelEventListenerAddedAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelEventListenerAddedAgentRequest"));
    };
    Convert.privateChannelEventListenerAddedAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelEventListenerAddedAgentRequest")), null, 2);
    };
    Convert.toPrivateChannelEventListenerAddedBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelEventListenerAddedBridgeRequest"));
    };
    Convert.privateChannelEventListenerAddedBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelEventListenerAddedBridgeRequest")), null, 2);
    };
    Convert.toPrivateChannelEventListenerRemovedAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelEventListenerRemovedAgentRequest"));
    };
    Convert.privateChannelEventListenerRemovedAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelEventListenerRemovedAgentRequest")), null, 2);
    };
    Convert.toPrivateChannelEventListenerRemovedBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelEventListenerRemovedBridgeRequest"));
    };
    Convert.privateChannelEventListenerRemovedBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelEventListenerRemovedBridgeRequest")), null, 2);
    };
    Convert.toPrivateChannelOnAddContextListenerAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelOnAddContextListenerAgentRequest"));
    };
    Convert.privateChannelOnAddContextListenerAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelOnAddContextListenerAgentRequest")), null, 2);
    };
    Convert.toPrivateChannelOnAddContextListenerBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelOnAddContextListenerBridgeRequest"));
    };
    Convert.privateChannelOnAddContextListenerBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelOnAddContextListenerBridgeRequest")), null, 2);
    };
    Convert.toPrivateChannelOnDisconnectAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelOnDisconnectAgentRequest"));
    };
    Convert.privateChannelOnDisconnectAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelOnDisconnectAgentRequest")), null, 2);
    };
    Convert.toPrivateChannelOnDisconnectBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelOnDisconnectBridgeRequest"));
    };
    Convert.privateChannelOnDisconnectBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelOnDisconnectBridgeRequest")), null, 2);
    };
    Convert.toPrivateChannelOnUnsubscribeAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelOnUnsubscribeAgentRequest"));
    };
    Convert.privateChannelOnUnsubscribeAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelOnUnsubscribeAgentRequest")), null, 2);
    };
    Convert.toPrivateChannelOnUnsubscribeBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("PrivateChannelOnUnsubscribeBridgeRequest"));
    };
    Convert.privateChannelOnUnsubscribeBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("PrivateChannelOnUnsubscribeBridgeRequest")), null, 2);
    };
    Convert.toRaiseIntentAgentErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentAgentErrorResponse"));
    };
    Convert.raiseIntentAgentErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentAgentErrorResponse")), null, 2);
    };
    Convert.toRaiseIntentAgentRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentAgentRequest"));
    };
    Convert.raiseIntentAgentRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentAgentRequest")), null, 2);
    };
    Convert.toRaiseIntentAgentResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentAgentResponse"));
    };
    Convert.raiseIntentAgentResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentAgentResponse")), null, 2);
    };
    Convert.toRaiseIntentBridgeErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentBridgeErrorResponse"));
    };
    Convert.raiseIntentBridgeErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentBridgeErrorResponse")), null, 2);
    };
    Convert.toRaiseIntentBridgeRequest = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentBridgeRequest"));
    };
    Convert.raiseIntentBridgeRequestToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentBridgeRequest")), null, 2);
    };
    Convert.toRaiseIntentBridgeResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentBridgeResponse"));
    };
    Convert.raiseIntentBridgeResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentBridgeResponse")), null, 2);
    };
    Convert.toRaiseIntentResultAgentErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentResultAgentErrorResponse"));
    };
    Convert.raiseIntentResultAgentErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentResultAgentErrorResponse")), null, 2);
    };
    Convert.toRaiseIntentResultAgentResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentResultAgentResponse"));
    };
    Convert.raiseIntentResultAgentResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentResultAgentResponse")), null, 2);
    };
    Convert.toRaiseIntentResultBridgeErrorResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentResultBridgeErrorResponse"));
    };
    Convert.raiseIntentResultBridgeErrorResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentResultBridgeErrorResponse")), null, 2);
    };
    Convert.toRaiseIntentResultBridgeResponse = function (json) {
        return cast$1(JSON.parse(json), r$1("RaiseIntentResultBridgeResponse"));
    };
    Convert.raiseIntentResultBridgeResponseToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("RaiseIntentResultBridgeResponse")), null, 2);
    };
    Convert.toContext = function (json) {
        return cast$1(JSON.parse(json), r$1("Context"));
    };
    Convert.contextToJson = function (value) {
        return JSON.stringify(uncast$1(value, r$1("Context")), null, 2);
    };
    return Convert;
}());
function invalidValue$1(typ, val, key, parent) {
    if (parent === void 0) { parent = ''; }
    var prettyTyp = prettyTypeName$1(typ);
    var parentText = parent ? " on ".concat(parent) : '';
    var keyText = key ? " for key \"".concat(key, "\"") : '';
    throw Error("Invalid value".concat(keyText).concat(parentText, ". Expected ").concat(prettyTyp, " but got ").concat(JSON.stringify(val)));
}
function prettyTypeName$1(typ) {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return "an optional ".concat(prettyTypeName$1(typ[1]));
        }
        else {
            return "one of [".concat(typ.map(function (a) { return prettyTypeName$1(a); }).join(", "), "]");
        }
    }
    else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    }
    else {
        return typeof typ;
    }
}
function jsonToJSProps$1(typ) {
    if (typ.jsonToJS === undefined) {
        var map_1 = {};
        typ.props.forEach(function (p) { return map_1[p.json] = { key: p.js, typ: p.typ }; });
        typ.jsonToJS = map_1;
    }
    return typ.jsonToJS;
}
function jsToJSONProps$1(typ) {
    if (typ.jsToJSON === undefined) {
        var map_2 = {};
        typ.props.forEach(function (p) { return map_2[p.js] = { key: p.json, typ: p.typ }; });
        typ.jsToJSON = map_2;
    }
    return typ.jsToJSON;
}
function transform$1(val, typ, getProps, key, parent) {
    if (key === void 0) { key = ''; }
    if (parent === void 0) { parent = ''; }
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue$1(typ, val, key, parent);
    }
    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ_1 = typs[i];
            try {
                return transform$1(val, typ_1, getProps);
            }
            catch (_) { }
        }
        return invalidValue$1(typs, val, key, parent);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue$1(cases.map(function (a) { return l$1(a); }), val, key, parent);
    }
    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val))
            return invalidValue$1(l$1("array"), val, key, parent);
        return val.map(function (el) { return transform$1(el, typ, getProps); });
    }
    function transformDate(val) {
        if (val === null) {
            return null;
        }
        var d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue$1(l$1("Date"), val, key, parent);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue$1(l$1(ref || "object"), val, key, parent);
        }
        var result = {};
        Object.getOwnPropertyNames(props).forEach(function (key) {
            var prop = props[key];
            var v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform$1(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform$1(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }
    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue$1(typ, val, key, parent);
    }
    if (typ === false)
        return invalidValue$1(typ, val, key, parent);
    var ref = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap$1[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue$1(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number")
        return transformDate(val);
    return transformPrimitive(typ, val);
}
function cast$1(val, typ) {
    return transform$1(val, typ, jsonToJSProps$1);
}
function uncast$1(val, typ) {
    return transform$1(val, typ, jsToJSONProps$1);
}
function l$1(typ) {
    return { literal: typ };
}
function a$1(typ) {
    return { arrayItems: typ };
}
function u$1() {
    var typs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typs[_i] = arguments[_i];
    }
    return { unionMembers: typs };
}
function o$1(props, additional) {
    return { props: props, additional: additional };
}
function m$1(additional) {
    return { props: [], additional: additional };
}
function r$1(name) {
    return { ref: name };
}
var typeMap$1 = {
    "AgentErrorResponseMessage": o$1([
        { json: "meta", js: "meta", typ: r$1("AgentResponseMetadata") },
        { json: "payload", js: "payload", typ: r$1("ErrorResponseMessagePayload") },
        { json: "type", js: "type", typ: r$1("ResponseMessageType") },
    ], false),
    "AgentResponseMetadata": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "ErrorResponseMessagePayload": o$1([
        { json: "error", js: "error", typ: r$1("ResponseErrorDetail") },
    ], "any"),
    "AgentRequestMessage": o$1([
        { json: "meta", js: "meta", typ: r$1("AgentRequestMetadata") },
        { json: "payload", js: "payload", typ: m$1("any") },
        { json: "type", js: "type", typ: r$1("RequestMessageType") },
    ], false),
    "AgentRequestMetadata": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("BridgeParticipantIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceIdentifier")) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "BridgeParticipantIdentifier": o$1([
        { json: "desktopAgent", js: "desktopAgent", typ: "" },
        { json: "appId", js: "appId", typ: u$1(undefined, "") },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "SourceIdentifier": o$1([
        { json: "appId", js: "appId", typ: u$1(undefined, "") },
        { json: "desktopAgent", js: "desktopAgent", typ: u$1(undefined, "") },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "AgentResponseMessage": o$1([
        { json: "meta", js: "meta", typ: r$1("AgentResponseMetadata") },
        { json: "payload", js: "payload", typ: m$1("any") },
        { json: "type", js: "type", typ: r$1("ResponseMessageType") },
    ], false),
    "BridgeErrorResponseMessage": o$1([
        { json: "meta", js: "meta", typ: r$1("BridgeErrorResponseMessageMeta") },
        { json: "payload", js: "payload", typ: r$1("ResponseErrorMessagePayload") },
        { json: "type", js: "type", typ: "" },
    ], false),
    "BridgeErrorResponseMessageMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: a$1(r$1("ResponseErrorDetail")) },
        { json: "errorSources", js: "errorSources", typ: a$1(r$1("DesktopAgentIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "DesktopAgentIdentifier": o$1([
        { json: "desktopAgent", js: "desktopAgent", typ: "" },
    ], "any"),
    "ResponseErrorMessagePayload": o$1([
        { json: "error", js: "error", typ: u$1(undefined, r$1("ResponseErrorDetail")) },
    ], "any"),
    "BridgeRequestMessage": o$1([
        { json: "meta", js: "meta", typ: r$1("BridgeRequestMetadata") },
        { json: "payload", js: "payload", typ: m$1("any") },
        { json: "type", js: "type", typ: "" },
    ], false),
    "BridgeRequestMetadata": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("BridgeParticipantIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("BridgeParticipantIdentifier") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "BridgeResponseMessage": o$1([
        { json: "meta", js: "meta", typ: r$1("BridgeResponseMessageMeta") },
        { json: "payload", js: "payload", typ: m$1("any") },
        { json: "type", js: "type", typ: "" },
    ], false),
    "BridgeResponseMessageMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: u$1(undefined, a$1(r$1("ResponseErrorDetail"))) },
        { json: "errorSources", js: "errorSources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "sources", js: "sources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "BroadcastAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("BroadcastAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("BroadcastAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("BroadcastAgentRequestType") },
    ], false),
    "BroadcastAgentRequestMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("SourceObject") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "SourceObject": o$1([
        { json: "appId", js: "appId", typ: "" },
        { json: "desktopAgent", js: "desktopAgent", typ: u$1(undefined, "") },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "BroadcastAgentRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "context", js: "context", typ: r$1("ContextElement") },
    ], false),
    "ContextElement": o$1([
        { json: "id", js: "id", typ: u$1(undefined, m$1("any")) },
        { json: "name", js: "name", typ: u$1(undefined, "") },
        { json: "type", js: "type", typ: "" },
    ], "any"),
    "BroadcastBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("BroadcastBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("BroadcastBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("BroadcastAgentRequestType") },
    ], false),
    "BroadcastBridgeRequestMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "MetaSource": o$1([
        { json: "appId", js: "appId", typ: "" },
        { json: "desktopAgent", js: "desktopAgent", typ: "" },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "BroadcastBridgeRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "context", js: "context", typ: r$1("ContextElement") },
    ], false),
    "ConnectionStepMessage": o$1([
        { json: "meta", js: "meta", typ: r$1("ConnectionStepMetadata") },
        { json: "payload", js: "payload", typ: m$1("any") },
        { json: "type", js: "type", typ: r$1("ConnectionStepMessageType") },
    ], false),
    "ConnectionStepMetadata": o$1([
        { json: "requestUuid", js: "requestUuid", typ: u$1(undefined, "") },
        { json: "responseUuid", js: "responseUuid", typ: u$1(undefined, "") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "ConnectionStep2Hello": o$1([
        { json: "meta", js: "meta", typ: r$1("ConnectionStep2HelloMeta") },
        { json: "payload", js: "payload", typ: r$1("ConnectionStep2HelloPayload") },
        { json: "type", js: "type", typ: r$1("ConnectionStep2HelloType") },
    ], false),
    "ConnectionStep2HelloMeta": o$1([
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "ConnectionStep2HelloPayload": o$1([
        { json: "authRequired", js: "authRequired", typ: true },
        { json: "authToken", js: "authToken", typ: u$1(undefined, "") },
        { json: "desktopAgentBridgeVersion", js: "desktopAgentBridgeVersion", typ: "" },
        { json: "supportedFDC3Versions", js: "supportedFDC3Versions", typ: a$1("") },
    ], false),
    "ConnectionStep3Handshake": o$1([
        { json: "meta", js: "meta", typ: r$1("ConnectionStep3HandshakeMeta") },
        { json: "payload", js: "payload", typ: r$1("ConnectionStep3HandshakePayload") },
        { json: "type", js: "type", typ: r$1("ConnectionStep3HandshakeType") },
    ], false),
    "ConnectionStep3HandshakeMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "ConnectionStep3HandshakePayload": o$1([
        { json: "authToken", js: "authToken", typ: u$1(undefined, "") },
        { json: "channelsState", js: "channelsState", typ: m$1(a$1(r$1("ContextElement"))) },
        { json: "implementationMetadata", js: "implementationMetadata", typ: r$1("ConnectingAgentImplementationMetadata") },
        { json: "requestedName", js: "requestedName", typ: "" },
    ], false),
    "ConnectingAgentImplementationMetadata": o$1([
        { json: "fdc3Version", js: "fdc3Version", typ: "" },
        { json: "optionalFeatures", js: "optionalFeatures", typ: r$1("OptionalFeatures") },
        { json: "provider", js: "provider", typ: "" },
        { json: "providerVersion", js: "providerVersion", typ: u$1(undefined, "") },
    ], false),
    "OptionalFeatures": o$1([
        { json: "DesktopAgentBridging", js: "DesktopAgentBridging", typ: true },
        { json: "OriginatingAppMetadata", js: "OriginatingAppMetadata", typ: true },
        { json: "UserChannelMembershipAPIs", js: "UserChannelMembershipAPIs", typ: true },
    ], false),
    "ConnectionStep4AuthenticationFailed": o$1([
        { json: "meta", js: "meta", typ: r$1("ConnectionStep4AuthenticationFailedMeta") },
        { json: "payload", js: "payload", typ: r$1("ConnectionStep4AuthenticationFailedPayload") },
        { json: "type", js: "type", typ: r$1("ConnectionStep4AuthenticationFailedType") },
    ], false),
    "ConnectionStep4AuthenticationFailedMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "ConnectionStep4AuthenticationFailedPayload": o$1([
        { json: "message", js: "message", typ: u$1(undefined, "") },
    ], false),
    "ConnectionStep6ConnectedAgentsUpdate": o$1([
        { json: "meta", js: "meta", typ: r$1("ConnectionStep6ConnectedAgentsUpdateMeta") },
        { json: "payload", js: "payload", typ: r$1("ConnectionStep6ConnectedAgentsUpdatePayload") },
        { json: "type", js: "type", typ: r$1("ConnectionStep6ConnectedAgentsUpdateType") },
    ], false),
    "ConnectionStep6ConnectedAgentsUpdateMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "ConnectionStep6ConnectedAgentsUpdatePayload": o$1([
        { json: "addAgent", js: "addAgent", typ: u$1(undefined, "") },
        { json: "allAgents", js: "allAgents", typ: a$1(r$1("DesktopAgentImplementationMetadata")) },
        { json: "channelsState", js: "channelsState", typ: u$1(undefined, m$1(a$1(r$1("ContextElement")))) },
        { json: "removeAgent", js: "removeAgent", typ: u$1(undefined, "") },
    ], false),
    "DesktopAgentImplementationMetadata": o$1([
        { json: "desktopAgent", js: "desktopAgent", typ: "" },
        { json: "fdc3Version", js: "fdc3Version", typ: "" },
        { json: "optionalFeatures", js: "optionalFeatures", typ: r$1("OptionalFeatures") },
        { json: "provider", js: "provider", typ: "" },
        { json: "providerVersion", js: "providerVersion", typ: u$1(undefined, "") },
    ], false),
    "FindInstancesAgentErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindInstancesAgentErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindInstancesAgentErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindInstancesAgentErrorResponseType") },
    ], false),
    "FindInstancesAgentErrorResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindInstancesAgentErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "FindInstancesAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("FindInstancesAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("FindInstancesAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("FindInstancesAgentRequestType") },
    ], false),
    "FindInstancesAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("DestinationObject")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceIdentifier")) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "DestinationObject": o$1([
        { json: "desktopAgent", js: "desktopAgent", typ: "" },
        { json: "appId", js: "appId", typ: u$1(undefined, "") },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "FindInstancesAgentRequestPayload": o$1([
        { json: "app", js: "app", typ: r$1("AppIdentifier") },
    ], false),
    "AppIdentifier": o$1([
        { json: "appId", js: "appId", typ: "" },
        { json: "desktopAgent", js: "desktopAgent", typ: u$1(undefined, "") },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "FindInstancesAgentResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindInstancesAgentResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindInstancesAgentResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindInstancesAgentErrorResponseType") },
    ], false),
    "FindInstancesAgentResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindInstancesAgentResponsePayload": o$1([
        { json: "appIdentifiers", js: "appIdentifiers", typ: a$1(r$1("AppMetadata")) },
    ], false),
    "AppMetadata": o$1([
        { json: "appId", js: "appId", typ: "" },
        { json: "description", js: "description", typ: u$1(undefined, "") },
        { json: "desktopAgent", js: "desktopAgent", typ: u$1(undefined, "") },
        { json: "icons", js: "icons", typ: u$1(undefined, a$1(r$1("Icon"))) },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
        { json: "instanceMetadata", js: "instanceMetadata", typ: u$1(undefined, m$1("any")) },
        { json: "name", js: "name", typ: u$1(undefined, "") },
        { json: "resultType", js: "resultType", typ: u$1(undefined, u$1(null, "")) },
        { json: "screenshots", js: "screenshots", typ: u$1(undefined, a$1(r$1("Image"))) },
        { json: "title", js: "title", typ: u$1(undefined, "") },
        { json: "tooltip", js: "tooltip", typ: u$1(undefined, "") },
        { json: "version", js: "version", typ: u$1(undefined, "") },
    ], false),
    "Icon": o$1([
        { json: "size", js: "size", typ: u$1(undefined, "") },
        { json: "src", js: "src", typ: "" },
        { json: "type", js: "type", typ: u$1(undefined, "") },
    ], false),
    "Image": o$1([
        { json: "label", js: "label", typ: u$1(undefined, "") },
        { json: "size", js: "size", typ: u$1(undefined, "") },
        { json: "src", js: "src", typ: "" },
        { json: "type", js: "type", typ: u$1(undefined, "") },
    ], false),
    "FindInstancesBridgeErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindInstancesBridgeErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindInstancesBridgeErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindInstancesAgentErrorResponseType") },
    ], false),
    "FindInstancesBridgeErrorResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: a$1(r$1("ResponseErrorDetail")) },
        { json: "errorSources", js: "errorSources", typ: a$1(r$1("DesktopAgentIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindInstancesBridgeErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "FindInstancesBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("FindInstancesBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("FindInstancesBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("FindInstancesAgentRequestType") },
    ], false),
    "FindInstancesBridgeRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("DestinationObject")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSourceObject") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "MetaSourceObject": o$1([
        { json: "appId", js: "appId", typ: u$1(undefined, "") },
        { json: "desktopAgent", js: "desktopAgent", typ: "" },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "FindInstancesBridgeRequestPayload": o$1([
        { json: "app", js: "app", typ: r$1("AppIdentifier") },
    ], false),
    "FindInstancesBridgeResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindInstancesBridgeResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindInstancesBridgeResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindInstancesAgentErrorResponseType") },
    ], false),
    "FindInstancesBridgeResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: u$1(undefined, a$1(r$1("ResponseErrorDetail"))) },
        { json: "errorSources", js: "errorSources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "sources", js: "sources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindInstancesBridgeResponsePayload": o$1([
        { json: "appIdentifiers", js: "appIdentifiers", typ: a$1(r$1("AppMetadata")) },
    ], false),
    "FindIntentAgentErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentAgentErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentAgentErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindIntentAgentErrorResponseType") },
    ], false),
    "FindIntentAgentErrorResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindIntentAgentErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "FindIntentAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("FindIntentAgentRequestType") },
    ], false),
    "FindIntentAgentRequestMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceIdentifier")) },
        { json: "timestamp", js: "timestamp", typ: Date },
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("BridgeParticipantIdentifier")) },
    ], false),
    "FindIntentAgentRequestPayload": o$1([
        { json: "context", js: "context", typ: u$1(undefined, r$1("ContextElement")) },
        { json: "intent", js: "intent", typ: "" },
        { json: "resultType", js: "resultType", typ: u$1(undefined, "") },
    ], false),
    "FindIntentAgentResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentAgentResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentAgentResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindIntentAgentErrorResponseType") },
    ], false),
    "FindIntentAgentResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindIntentAgentResponsePayload": o$1([
        { json: "appIntent", js: "appIntent", typ: r$1("AppIntent") },
    ], false),
    "AppIntent": o$1([
        { json: "apps", js: "apps", typ: a$1(r$1("AppMetadata")) },
        { json: "intent", js: "intent", typ: r$1("IntentMetadata") },
    ], false),
    "IntentMetadata": o$1([
        { json: "displayName", js: "displayName", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], false),
    "FindIntentBridgeErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentBridgeErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentBridgeErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindIntentAgentErrorResponseType") },
    ], false),
    "FindIntentBridgeErrorResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: a$1(r$1("ResponseErrorDetail")) },
        { json: "errorSources", js: "errorSources", typ: a$1(r$1("DesktopAgentIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindIntentBridgeErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "FindIntentBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("FindIntentAgentRequestType") },
    ], false),
    "FindIntentBridgeRequestMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("BridgeParticipantIdentifier") },
        { json: "timestamp", js: "timestamp", typ: Date },
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("BridgeParticipantIdentifier")) },
    ], false),
    "FindIntentBridgeRequestPayload": o$1([
        { json: "context", js: "context", typ: u$1(undefined, r$1("ContextElement")) },
        { json: "intent", js: "intent", typ: "" },
        { json: "resultType", js: "resultType", typ: u$1(undefined, "") },
    ], false),
    "FindIntentBridgeResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentBridgeResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentBridgeResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindIntentAgentErrorResponseType") },
    ], false),
    "FindIntentBridgeResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: u$1(undefined, a$1(r$1("ResponseErrorDetail"))) },
        { json: "errorSources", js: "errorSources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "sources", js: "sources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindIntentBridgeResponsePayload": o$1([
        { json: "appIntent", js: "appIntent", typ: r$1("AppIntent") },
    ], false),
    "FindIntentsByContextAgentErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentsByContextAgentErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentsByContextAgentErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindIntentsByContextAgentErrorResponseType") },
    ], false),
    "FindIntentsByContextAgentErrorResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindIntentsByContextAgentErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "FindIntentsByContextAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentsByContextAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentsByContextAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("FindIntentsByContextAgentRequestType") },
    ], false),
    "FindIntentsByContextAgentRequestMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceObject")) },
        { json: "timestamp", js: "timestamp", typ: Date },
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("BridgeParticipantIdentifier")) },
    ], false),
    "FindIntentsByContextAgentRequestPayload": o$1([
        { json: "context", js: "context", typ: r$1("ContextElement") },
    ], false),
    "FindIntentsByContextAgentResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentsByContextAgentResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentsByContextAgentResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindIntentsByContextAgentErrorResponseType") },
    ], false),
    "FindIntentsByContextAgentResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindIntentsByContextAgentResponsePayload": o$1([
        { json: "appIntents", js: "appIntents", typ: a$1(r$1("AppIntent")) },
    ], false),
    "FindIntentsByContextBridgeErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentsByContextBridgeErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentsByContextBridgeErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindIntentsByContextAgentErrorResponseType") },
    ], false),
    "FindIntentsByContextBridgeErrorResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: a$1(r$1("ResponseErrorDetail")) },
        { json: "errorSources", js: "errorSources", typ: a$1(r$1("DesktopAgentIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindIntentsByContextBridgeErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "FindIntentsByContextBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentsByContextBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentsByContextBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("FindIntentsByContextAgentRequestType") },
    ], false),
    "FindIntentsByContextBridgeRequestMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("BridgeParticipantIdentifier")) },
    ], false),
    "FindIntentsByContextBridgeRequestPayload": o$1([
        { json: "context", js: "context", typ: r$1("ContextElement") },
    ], false),
    "FindIntentsByContextBridgeResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("FindIntentsByContextBridgeResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("FindIntentsByContextBridgeResponsePayload") },
        { json: "type", js: "type", typ: r$1("FindIntentsByContextAgentErrorResponseType") },
    ], false),
    "FindIntentsByContextBridgeResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: u$1(undefined, a$1(r$1("ResponseErrorDetail"))) },
        { json: "errorSources", js: "errorSources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "sources", js: "sources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "FindIntentsByContextBridgeResponsePayload": o$1([
        { json: "appIntents", js: "appIntents", typ: a$1(r$1("AppIntent")) },
    ], false),
    "GetAppMetadataAgentErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("GetAppMetadataAgentErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("GetAppMetadataAgentErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("GetAppMetadataAgentErrorResponseType") },
    ], false),
    "GetAppMetadataAgentErrorResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "GetAppMetadataAgentErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "GetAppMetadataAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("GetAppMetadataAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("GetAppMetadataAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("GetAppMetadataAgentRequestType") },
    ], false),
    "GetAppMetadataAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("DestinationObject")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceIdentifier")) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "GetAppMetadataAgentRequestPayload": o$1([
        { json: "app", js: "app", typ: r$1("AppDestinationIdentifier") },
    ], false),
    "AppDestinationIdentifier": o$1([
        { json: "desktopAgent", js: "desktopAgent", typ: "" },
        { json: "appId", js: "appId", typ: "" },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "GetAppMetadataAgentResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("GetAppMetadataAgentResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("GetAppMetadataAgentResponsePayload") },
        { json: "type", js: "type", typ: r$1("GetAppMetadataAgentErrorResponseType") },
    ], false),
    "GetAppMetadataAgentResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "GetAppMetadataAgentResponsePayload": o$1([
        { json: "appMetadata", js: "appMetadata", typ: r$1("AppMetadata") },
    ], false),
    "GetAppMetadataBridgeErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("GetAppMetadataBridgeErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("GetAppMetadataBridgeErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("GetAppMetadataAgentErrorResponseType") },
    ], false),
    "GetAppMetadataBridgeErrorResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: a$1(r$1("ResponseErrorDetail")) },
        { json: "errorSources", js: "errorSources", typ: a$1(r$1("DesktopAgentIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "GetAppMetadataBridgeErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "GetAppMetadataBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("GetAppMetadataBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("GetAppMetadataBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("GetAppMetadataAgentRequestType") },
    ], false),
    "GetAppMetadataBridgeRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("DestinationObject")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSourceObject") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "GetAppMetadataBridgeRequestPayload": o$1([
        { json: "app", js: "app", typ: r$1("AppDestinationIdentifier") },
    ], false),
    "GetAppMetadataBridgeResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("GetAppMetadataBridgeResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("GetAppMetadataBridgeResponsePayload") },
        { json: "type", js: "type", typ: r$1("GetAppMetadataAgentErrorResponseType") },
    ], false),
    "GetAppMetadataBridgeResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: u$1(undefined, a$1(r$1("ResponseErrorDetail"))) },
        { json: "errorSources", js: "errorSources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "sources", js: "sources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "GetAppMetadataBridgeResponsePayload": o$1([
        { json: "appMetadata", js: "appMetadata", typ: r$1("AppMetadata") },
    ], false),
    "OpenAgentErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("OpenAgentErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("OpenAgentErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("OpenAgentErrorResponseType") },
    ], false),
    "OpenAgentErrorResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "OpenAgentErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("OpenErrorMessage") },
    ], false),
    "OpenAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("OpenAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("OpenAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("OpenAgentRequestType") },
    ], false),
    "OpenAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("DestinationObject")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("SourceObject") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "OpenAgentRequestPayload": o$1([
        { json: "app", js: "app", typ: r$1("AppToOpen") },
        { json: "context", js: "context", typ: u$1(undefined, r$1("ContextElement")) },
    ], false),
    "AppToOpen": o$1([
        { json: "desktopAgent", js: "desktopAgent", typ: "" },
        { json: "appId", js: "appId", typ: "" },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "OpenAgentResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("OpenAgentResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("OpenAgentResponsePayload") },
        { json: "type", js: "type", typ: r$1("OpenAgentErrorResponseType") },
    ], false),
    "OpenAgentResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "OpenAgentResponsePayload": o$1([
        { json: "appIdentifier", js: "appIdentifier", typ: r$1("AppIdentifier") },
    ], false),
    "OpenBridgeErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("OpenBridgeErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("OpenBridgeErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("OpenAgentErrorResponseType") },
    ], false),
    "OpenBridgeErrorResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: a$1(r$1("ResponseErrorDetail")) },
        { json: "errorSources", js: "errorSources", typ: a$1(r$1("DesktopAgentIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "OpenBridgeErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("OpenErrorMessage") },
    ], false),
    "OpenBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("OpenBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("OpenBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("OpenAgentRequestType") },
    ], false),
    "OpenBridgeRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("DestinationObject")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "OpenBridgeRequestPayload": o$1([
        { json: "app", js: "app", typ: r$1("AppToOpen") },
        { json: "context", js: "context", typ: u$1(undefined, r$1("ContextElement")) },
    ], false),
    "OpenBridgeResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("OpenBridgeResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("OpenBridgeResponsePayload") },
        { json: "type", js: "type", typ: r$1("OpenAgentErrorResponseType") },
    ], false),
    "OpenBridgeResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: u$1(undefined, a$1(r$1("ResponseErrorDetail"))) },
        { json: "errorSources", js: "errorSources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "sources", js: "sources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "OpenBridgeResponsePayload": o$1([
        { json: "appIdentifier", js: "appIdentifier", typ: r$1("AppIdentifier") },
    ], false),
    "PrivateChannelBroadcastAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelBroadcastAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelBroadcastAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelBroadcastAgentRequestType") },
    ], false),
    "PrivateChannelBroadcastAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceObject")) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "MetaDestination": o$1([
        { json: "desktopAgent", js: "desktopAgent", typ: "" },
        { json: "appId", js: "appId", typ: "" },
        { json: "instanceId", js: "instanceId", typ: u$1(undefined, "") },
    ], "any"),
    "PrivateChannelBroadcastAgentRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "context", js: "context", typ: r$1("ContextElement") },
    ], false),
    "PrivateChannelBroadcastBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelBroadcastBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelBroadcastBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelBroadcastAgentRequestType") },
    ], false),
    "PrivateChannelBroadcastBridgeRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelBroadcastBridgeRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "context", js: "context", typ: r$1("ContextElement") },
    ], false),
    "PrivateChannelEventListenerAddedAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelEventListenerAddedAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelEventListenerAddedAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelEventListenerAddedAgentRequestType") },
    ], false),
    "PrivateChannelEventListenerAddedAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceObject")) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelEventListenerAddedAgentRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "listenerType", js: "listenerType", typ: r$1("PrivateChannelEventListenerTypes") },
    ], false),
    "PrivateChannelEventListenerAddedBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelEventListenerAddedBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelEventListenerAddedBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelEventListenerAddedAgentRequestType") },
    ], false),
    "PrivateChannelEventListenerAddedBridgeRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelEventListenerAddedBridgeRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "listenerType", js: "listenerType", typ: r$1("PrivateChannelEventListenerTypes") },
    ], false),
    "PrivateChannelEventListenerRemovedAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelEventListenerRemovedAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelEventListenerRemovedAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelEventListenerRemovedAgentRequestType") },
    ], false),
    "PrivateChannelEventListenerRemovedAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceObject")) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelEventListenerRemovedAgentRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "listenerType", js: "listenerType", typ: r$1("PrivateChannelEventListenerTypes") },
    ], false),
    "PrivateChannelEventListenerRemovedBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelEventListenerRemovedBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelEventListenerRemovedBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelEventListenerRemovedAgentRequestType") },
    ], false),
    "PrivateChannelEventListenerRemovedBridgeRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelEventListenerRemovedBridgeRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "listenerType", js: "listenerType", typ: r$1("PrivateChannelEventListenerTypes") },
    ], false),
    "PrivateChannelOnAddContextListenerAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelOnAddContextListenerAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelOnAddContextListenerAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelOnAddContextListenerAgentRequestType") },
    ], false),
    "PrivateChannelOnAddContextListenerAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceObject")) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelOnAddContextListenerAgentRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "contextType", js: "contextType", typ: u$1(null, "") },
    ], false),
    "PrivateChannelOnAddContextListenerBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelOnAddContextListenerBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelOnAddContextListenerBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelOnAddContextListenerAgentRequestType") },
    ], false),
    "PrivateChannelOnAddContextListenerBridgeRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelOnAddContextListenerBridgeRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "contextType", js: "contextType", typ: u$1(null, "") },
    ], false),
    "PrivateChannelOnDisconnectAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelOnDisconnectAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelOnDisconnectAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelOnDisconnectAgentRequestType") },
    ], false),
    "PrivateChannelOnDisconnectAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceObject")) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelOnDisconnectAgentRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
    ], false),
    "PrivateChannelOnDisconnectBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelOnDisconnectBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelOnDisconnectBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelOnDisconnectAgentRequestType") },
    ], false),
    "PrivateChannelOnDisconnectBridgeRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelOnDisconnectBridgeRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
    ], false),
    "PrivateChannelOnUnsubscribeAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("PrivateChannelOnUnsubscribeAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelOnUnsubscribeAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelOnUnsubscribeAgentRequestType") },
    ], false),
    "PrivateChannelOnUnsubscribeAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: u$1(undefined, r$1("SourceObject")) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelOnUnsubscribeAgentRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "contextType", js: "contextType", typ: u$1(null, "") },
    ], false),
    "PrivateChannelOnUnsubscribeBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("ERequestMetadata") },
        { json: "payload", js: "payload", typ: r$1("PrivateChannelOnUnsubscribeBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("PrivateChannelOnUnsubscribeAgentRequestType") },
    ], false),
    "ERequestMetadata": o$1([
        { json: "destination", js: "destination", typ: u$1(undefined, r$1("MetaDestination")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "PrivateChannelOnUnsubscribeBridgeRequestPayload": o$1([
        { json: "channelId", js: "channelId", typ: "" },
        { json: "contextType", js: "contextType", typ: u$1(null, "") },
    ], false),
    "RaiseIntentAgentErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentAgentErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentAgentErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentAgentErrorResponseType") },
    ], false),
    "RaiseIntentAgentErrorResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentAgentErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "RaiseIntentAgentRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentAgentRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentAgentRequestPayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentAgentRequestType") },
    ], false),
    "RaiseIntentAgentRequestMeta": o$1([
        { json: "destination", js: "destination", typ: r$1("MetaDestination") },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("SourceObject") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentAgentRequestPayload": o$1([
        { json: "app", js: "app", typ: r$1("AppDestinationIdentifier") },
        { json: "context", js: "context", typ: r$1("ContextElement") },
        { json: "intent", js: "intent", typ: "" },
    ], false),
    "RaiseIntentAgentResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentAgentResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentAgentResponsePayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentAgentErrorResponseType") },
    ], false),
    "RaiseIntentAgentResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentAgentResponsePayload": o$1([
        { json: "intentResolution", js: "intentResolution", typ: r$1("IntentResolution") },
    ], false),
    "IntentResolution": o$1([
        { json: "intent", js: "intent", typ: "" },
        { json: "source", js: "source", typ: r$1("AppIdentifier") },
        { json: "version", js: "version", typ: u$1(undefined, "") },
    ], false),
    "RaiseIntentBridgeErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentBridgeErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentBridgeErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentAgentErrorResponseType") },
    ], false),
    "RaiseIntentBridgeErrorResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: a$1(r$1("ResponseErrorDetail")) },
        { json: "errorSources", js: "errorSources", typ: a$1(r$1("DesktopAgentIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentBridgeErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("ErrorMessage") },
    ], false),
    "RaiseIntentBridgeRequest": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentBridgeRequestMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentBridgeRequestPayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentAgentRequestType") },
    ], false),
    "RaiseIntentBridgeRequestMeta": o$1([
        { json: "destination", js: "destination", typ: r$1("MetaDestination") },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "source", js: "source", typ: r$1("MetaSource") },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentBridgeRequestPayload": o$1([
        { json: "app", js: "app", typ: r$1("AppDestinationIdentifier") },
        { json: "context", js: "context", typ: r$1("ContextElement") },
        { json: "intent", js: "intent", typ: "" },
    ], false),
    "RaiseIntentBridgeResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentBridgeResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentBridgeResponsePayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentAgentErrorResponseType") },
    ], false),
    "RaiseIntentBridgeResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: u$1(undefined, a$1(r$1("ResponseErrorDetail"))) },
        { json: "errorSources", js: "errorSources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "sources", js: "sources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentBridgeResponsePayload": o$1([
        { json: "intentResolution", js: "intentResolution", typ: r$1("IntentResolution") },
    ], false),
    "RaiseIntentResultAgentErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentResultAgentErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentResultAgentErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentResultAgentErrorResponseType") },
    ], false),
    "RaiseIntentResultAgentErrorResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentResultAgentErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("RaiseIntentResultErrorMessage") },
    ], false),
    "RaiseIntentResultAgentResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentResultAgentResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentResultAgentResponsePayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentResultAgentErrorResponseType") },
    ], false),
    "RaiseIntentResultAgentResponseMeta": o$1([
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentResultAgentResponsePayload": o$1([
        { json: "intentResult", js: "intentResult", typ: r$1("IntentResult") },
    ], false),
    "IntentResult": o$1([
        { json: "context", js: "context", typ: u$1(undefined, r$1("ContextElement")) },
        { json: "channel", js: "channel", typ: u$1(undefined, r$1("Channel")) },
    ], false),
    "Channel": o$1([
        { json: "displayMetadata", js: "displayMetadata", typ: u$1(undefined, r$1("DisplayMetadata")) },
        { json: "id", js: "id", typ: "" },
        { json: "type", js: "type", typ: r$1("Type") },
    ], false),
    "DisplayMetadata": o$1([
        { json: "color", js: "color", typ: u$1(undefined, "") },
        { json: "glyph", js: "glyph", typ: u$1(undefined, "") },
        { json: "name", js: "name", typ: u$1(undefined, "") },
    ], false),
    "RaiseIntentResultBridgeErrorResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentResultBridgeErrorResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentResultBridgeErrorResponsePayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentResultAgentErrorResponseType") },
    ], false),
    "RaiseIntentResultBridgeErrorResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: a$1(r$1("ResponseErrorDetail")) },
        { json: "errorSources", js: "errorSources", typ: a$1(r$1("DesktopAgentIdentifier")) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentResultBridgeErrorResponsePayload": o$1([
        { json: "error", js: "error", typ: r$1("RaiseIntentResultErrorMessage") },
    ], false),
    "RaiseIntentResultBridgeResponse": o$1([
        { json: "meta", js: "meta", typ: r$1("RaiseIntentResultBridgeResponseMeta") },
        { json: "payload", js: "payload", typ: r$1("RaiseIntentResultBridgeResponsePayload") },
        { json: "type", js: "type", typ: r$1("RaiseIntentResultAgentErrorResponseType") },
    ], false),
    "RaiseIntentResultBridgeResponseMeta": o$1([
        { json: "errorDetails", js: "errorDetails", typ: u$1(undefined, a$1(r$1("ResponseErrorDetail"))) },
        { json: "errorSources", js: "errorSources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "requestUuid", js: "requestUuid", typ: "" },
        { json: "responseUuid", js: "responseUuid", typ: "" },
        { json: "sources", js: "sources", typ: u$1(undefined, a$1(r$1("DesktopAgentIdentifier"))) },
        { json: "timestamp", js: "timestamp", typ: Date },
    ], false),
    "RaiseIntentResultBridgeResponsePayload": o$1([
        { json: "intentResult", js: "intentResult", typ: r$1("IntentResult") },
    ], false),
    "Context": o$1([
        { json: "id", js: "id", typ: u$1(undefined, m$1("any")) },
        { json: "name", js: "name", typ: u$1(undefined, "") },
        { json: "type", js: "type", typ: "" },
    ], "any"),
    "ResponseErrorDetail": [
        "AccessDenied",
        "AgentDisconnected",
        "AppNotFound",
        "AppTimeout",
        "CreationFailed",
        "DesktopAgentNotFound",
        "ErrorOnLaunch",
        "IntentDeliveryFailed",
        "IntentHandlerRejected",
        "MalformedContext",
        "MalformedMessage",
        "NoAppsFound",
        "NoChannelFound",
        "NoResultReturned",
        "NotConnectedToBridge",
        "ResolverTimeout",
        "ResolverUnavailable",
        "ResponseToBridgeTimedOut",
        "TargetAppUnavailable",
        "TargetInstanceUnavailable",
        "UserCancelledResolution",
    ],
    "ResponseMessageType": [
        "findInstancesResponse",
        "findIntentResponse",
        "findIntentsByContextResponse",
        "getAppMetadataResponse",
        "openResponse",
        "raiseIntentResponse",
        "raiseIntentResultResponse",
    ],
    "RequestMessageType": [
        "broadcastRequest",
        "findInstancesRequest",
        "findIntentRequest",
        "findIntentsByContextRequest",
        "getAppMetadataRequest",
        "openRequest",
        "PrivateChannel.broadcast",
        "PrivateChannel.eventListenerAdded",
        "PrivateChannel.eventListenerRemoved",
        "PrivateChannel.onAddContextListener",
        "PrivateChannel.onDisconnect",
        "PrivateChannel.onUnsubscribe",
        "raiseIntentRequest",
    ],
    "BroadcastAgentRequestType": [
        "broadcastRequest",
    ],
    "ConnectionStepMessageType": [
        "authenticationFailed",
        "connectedAgentsUpdate",
        "handshake",
        "hello",
    ],
    "ConnectionStep2HelloType": [
        "hello",
    ],
    "ConnectionStep3HandshakeType": [
        "handshake",
    ],
    "ConnectionStep4AuthenticationFailedType": [
        "authenticationFailed",
    ],
    "ConnectionStep6ConnectedAgentsUpdateType": [
        "connectedAgentsUpdate",
    ],
    "ErrorMessage": [
        "AgentDisconnected",
        "DesktopAgentNotFound",
        "IntentDeliveryFailed",
        "MalformedContext",
        "MalformedMessage",
        "NoAppsFound",
        "NotConnectedToBridge",
        "ResolverTimeout",
        "ResolverUnavailable",
        "ResponseToBridgeTimedOut",
        "TargetAppUnavailable",
        "TargetInstanceUnavailable",
        "UserCancelledResolution",
    ],
    "FindInstancesAgentErrorResponseType": [
        "findInstancesResponse",
    ],
    "FindInstancesAgentRequestType": [
        "findInstancesRequest",
    ],
    "FindIntentAgentErrorResponseType": [
        "findIntentResponse",
    ],
    "FindIntentAgentRequestType": [
        "findIntentRequest",
    ],
    "FindIntentsByContextAgentErrorResponseType": [
        "findIntentsByContextResponse",
    ],
    "FindIntentsByContextAgentRequestType": [
        "findIntentsByContextRequest",
    ],
    "GetAppMetadataAgentErrorResponseType": [
        "getAppMetadataResponse",
    ],
    "GetAppMetadataAgentRequestType": [
        "getAppMetadataRequest",
    ],
    "OpenErrorMessage": [
        "AgentDisconnected",
        "AppNotFound",
        "AppTimeout",
        "DesktopAgentNotFound",
        "ErrorOnLaunch",
        "MalformedContext",
        "MalformedMessage",
        "NotConnectedToBridge",
        "ResolverUnavailable",
        "ResponseToBridgeTimedOut",
    ],
    "OpenAgentErrorResponseType": [
        "openResponse",
    ],
    "OpenAgentRequestType": [
        "openRequest",
    ],
    "PrivateChannelBroadcastAgentRequestType": [
        "PrivateChannel.broadcast",
    ],
    "PrivateChannelEventListenerTypes": [
        "onAddContextListener",
        "onDisconnect",
        "onUnsubscribe",
    ],
    "PrivateChannelEventListenerAddedAgentRequestType": [
        "PrivateChannel.eventListenerAdded",
    ],
    "PrivateChannelEventListenerRemovedAgentRequestType": [
        "PrivateChannel.eventListenerRemoved",
    ],
    "PrivateChannelOnAddContextListenerAgentRequestType": [
        "PrivateChannel.onAddContextListener",
    ],
    "PrivateChannelOnDisconnectAgentRequestType": [
        "PrivateChannel.onDisconnect",
    ],
    "PrivateChannelOnUnsubscribeAgentRequestType": [
        "PrivateChannel.onUnsubscribe",
    ],
    "RaiseIntentAgentErrorResponseType": [
        "raiseIntentResponse",
    ],
    "RaiseIntentAgentRequestType": [
        "raiseIntentRequest",
    ],
    "RaiseIntentResultErrorMessage": [
        "AgentDisconnected",
        "IntentHandlerRejected",
        "MalformedMessage",
        "NoResultReturned",
        "NotConnectedToBridge",
        "ResponseToBridgeTimedOut",
    ],
    "RaiseIntentResultAgentErrorResponseType": [
        "raiseIntentResultResponse",
    ],
    "Type": [
        "app",
        "private",
        "user",
    ]
};

var BridgingTypes = {
    __proto__: null,
    Convert: Convert$1
};

/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright FINOS FDC3 contributors - see NOTICE file
 */
/** Constants representing the errors that can be encountered when calling the `open` method on the DesktopAgent object (`fdc3`). */
var OpenError;
(function (OpenError) {
    /** Returned if the specified application is not found.*/
    OpenError["AppNotFound"] = "AppNotFound";
    /** Returned if the specified application fails to launch correctly.*/
    OpenError["ErrorOnLaunch"] = "ErrorOnLaunch";
    /** Returned if the specified application launches but fails to add a context listener in order to receive the context passed to the `fdc3.open` call.*/
    OpenError["AppTimeout"] = "AppTimeout";
    /** Returned if the FDC3 desktop agent implementation is not currently able to handle the request.*/
    OpenError["ResolverUnavailable"] = "ResolverUnavailable";
    /** Returned if a call to the `open` function is made with an invalid context argument. Contexts should be Objects with at least a `type` field that has a `string` value.*/
    OpenError["MalformedContext"] = "MalformedContext";
    /** @experimental Returned if the specified Desktop Agent is not found, via a connected Desktop Agent Bridge.*/
    OpenError["DesktopAgentNotFound"] = "DesktopAgentNotFound";
})(OpenError || (OpenError = {}));
/** Constants representing the errors that can be encountered when calling the `findIntent`, `findIntentsByContext`, `raiseIntent` or `raiseIntentForContext` methods on the DesktopAgent (`fdc3`). */
var ResolveError;
(function (ResolveError) {
    /** SHOULD be returned if no apps are available that can resolve the intent and context combination.*/
    ResolveError["NoAppsFound"] = "NoAppsFound";
    /** Returned if the FDC3 desktop agent implementation is not currently able to handle the request.*/
    ResolveError["ResolverUnavailable"] = "ResolverUnavailable";
    /** Returned if the user cancelled the resolution request, for example by closing or cancelling a resolver UI.*/
    ResolveError["UserCancelled"] = "UserCancelledResolution";
    /** SHOULD be returned if a timeout cancels an intent resolution that required user interaction. Please use `ResolverUnavailable` instead for situations where a resolver UI or similar fails.*/
    ResolveError["ResolverTimeout"] = "ResolverTimeout";
    /** Returned if a specified target application is not available or a new instance of it cannot be opened. */
    ResolveError["TargetAppUnavailable"] = "TargetAppUnavailable";
    /** Returned if a specified target application instance is not available, for example because it has been closed. */
    ResolveError["TargetInstanceUnavailable"] = "TargetInstanceUnavailable";
    /** Returned if the intent and context could not be delivered to the selected application or instance, for example because it has not added an intent handler within a timeout.*/
    ResolveError["IntentDeliveryFailed"] = "IntentDeliveryFailed";
    /** Returned if a call to one of the `raiseIntent` functions is made with an invalid context argument. Contexts should be Objects with at least a `type` field that has a `string` value.*/
    ResolveError["MalformedContext"] = "MalformedContext";
    /** @experimental Returned if the specified Desktop Agent is not found, via a connected Desktop Agent Bridge.*/
    ResolveError["DesktopAgentNotFound"] = "DesktopAgentNotFound";
})(ResolveError || (ResolveError = {}));
var ResultError;
(function (ResultError) {
    /** Returned if the intent handler exited without returning a valid result (a promise resolving to a Context, Channel object or void). */
    ResultError["NoResultReturned"] = "NoResultReturned";
    /** Returned if the Intent handler function processing the raised intent throws an error or rejects the Promise it returned. */
    ResultError["IntentHandlerRejected"] = "IntentHandlerRejected";
})(ResultError || (ResultError = {}));
var ChannelError;
(function (ChannelError) {
    /** Returned if the specified channel is not found when attempting to join a channel via the `joinUserChannel` function  of the DesktopAgent (`fdc3`).*/
    ChannelError["NoChannelFound"] = "NoChannelFound";
    /** SHOULD be returned when a request to join a user channel or to a retrieve a Channel object via the `joinUserChannel` or `getOrCreateChannel` methods of the DesktopAgent (`fdc3`) object is denied. */
    ChannelError["AccessDenied"] = "AccessDenied";
    /** SHOULD be returned when a channel cannot be created or retrieved via the `getOrCreateChannel` method of the DesktopAgent (`fdc3`).*/
    ChannelError["CreationFailed"] = "CreationFailed";
    /** Returned if a call to the `broadcast` functions is made with an invalid context argument. Contexts should be Objects with at least a `type` field that has a `string` value.*/
    ChannelError["MalformedContext"] = "MalformedContext";
})(ChannelError || (ChannelError = {}));
var BridgingError;
(function (BridgingError) {
    /** @experimental Returned if a Desktop Agent did not return a response, via Desktop Agent Bridging, within the alloted timeout. */
    BridgingError["ResponseTimedOut"] = "ResponseToBridgeTimedOut";
    /** @experimental Returned if a Desktop Agent that has been targeted by a particular request has been disconnected from the Bridge before a response has been received from it. */
    BridgingError["AgentDisconnected"] = "AgentDisconnected";
    /** @experimental Returned for FDC3 API calls that are specified with arguments indicating that a remote Desktop agent should be targeted (e.g. raiseIntent with an app on a remote DesktopAgent targeted), when the local Desktop Agent is not connected to a bridge. */
    BridgingError["NotConnectedToBridge"] = "NotConnectedToBridge";
    /** @experimental Returned if a message to a Bridge deviates from the schema for that message sufficiently that it could not be processed. */
    BridgingError["MalformedMessage"] = "MalformedMessage";
})(BridgingError || (BridgingError = {}));

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * Ensures at compile time that the given string tuple is exhaustive on a given union type, i.e. contains ALL possible values of the given UNION_TYPE.
 */
var exhaustiveStringTuple = function () { return function () {
    var tuple = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tuple[_i] = arguments[_i];
    }
    return tuple;
}; };

var STANDARD_CONTEXT_TYPES = exhaustiveStringTuple()('fdc3.action', 'fdc3.chart', 'fdc3.chat.initSettings', 'fdc3.chat.message', 'fdc3.chat.room', 'fdc3.chat.searchCriteria', 'fdc3.contact', 'fdc3.contactList', 'fdc3.country', 'fdc3.currency', 'fdc3.email', 'fdc3.instrument', 'fdc3.instrumentList', 'fdc3.interaction', 'fdc3.message', 'fdc3.organization', 'fdc3.portfolio', 'fdc3.position', 'fdc3.nothing', 'fdc3.timerange', 'fdc3.transactionResult', 'fdc3.valuation');
// used internally to check if a given intent/context is a standard one
var StandardContextsSet = new Set(STANDARD_CONTEXT_TYPES);

var STANDARD_INTENTS = exhaustiveStringTuple()('CreateInteraction', 'SendChatMessage', 'StartCall', 'StartChat', 'StartEmail', 'ViewAnalysis', 'ViewChat', 'ViewChart', 'ViewContact', 'ViewHoldings', 'ViewInstrument', 'ViewInteractions', 'ViewMessages', 'ViewNews', 'ViewOrders', 'ViewProfile', 'ViewQuote', 'ViewResearch');
// used internally to check if a given intent/context is a standard one
var StandardIntentsSet = new Set(STANDARD_INTENTS);

var DEFAULT_TIMEOUT = 5000;
var UnavailableError = new Error('FDC3 DesktopAgent not available at `window.fdc3`.');
var TimeoutError = new Error('Timed out waiting for `fdc3Ready` event.');
var UnexpectedError = new Error('`fdc3Ready` event fired, but `window.fdc3` not set to DesktopAgent.');
function rejectIfNoGlobal(f) {
    return window.fdc3 ? f() : Promise.reject(UnavailableError);
}
/**
 * Utility function that returns a promise that will resolve immeadiately
 * if the desktop agent API is found at `window.fdc3`. If the API is found,
 * the promise will resolve when the `fdc3Ready` event is received or if it
 * is found at the end of the specified timeout. If the API is not found, it
 * will reject with an error.
 *
 * ```javascript
 * await fdc3Ready();
 * const intentListener = await addIntentListener("ViewChart", intentHandlerFn);
 * ```
 *
 * @param waitForMs The number of milliseconds to wait for the FDC3 API to be
 * ready. Defaults to 5 seconds.
 */
var fdc3Ready = function (waitForMs) {
    if (waitForMs === void 0) { waitForMs = DEFAULT_TIMEOUT; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    // if the global is already available resolve immediately
                    if (window.fdc3) {
                        resolve();
                    }
                    else {
                        // if its not available setup a timeout to return a rejected promise
                        var timeout_1 = setTimeout(function () { return (window.fdc3 ? resolve() : reject(TimeoutError)); }, waitForMs);
                        // listen for the fdc3Ready event
                        window.addEventListener('fdc3Ready', function () {
                            clearTimeout(timeout_1);
                            window.fdc3 ? resolve() : reject(UnexpectedError);
                        }, { once: true });
                    }
                })];
        });
    });
};
function isString(app) {
    return !!app && typeof app === 'string';
}
function open(app, context) {
    if (isString(app)) {
        return rejectIfNoGlobal(function () { return window.fdc3.open(app, context); });
    }
    else {
        return rejectIfNoGlobal(function () { return window.fdc3.open(app, context); });
    }
}
function findIntent(intent, context, resultType) {
    return rejectIfNoGlobal(function () { return window.fdc3.findIntent(intent, context, resultType); });
}
function findIntentsByContext(context, resultType) {
    return rejectIfNoGlobal(function () { return window.fdc3.findIntentsByContext(context, resultType); });
}
function broadcast(context) {
    return rejectIfNoGlobal(function () { return window.fdc3.broadcast(context); });
}
function raiseIntent(intent, context, app) {
    if (isString(app)) {
        return rejectIfNoGlobal(function () { return window.fdc3.raiseIntent(intent, context, app); });
    }
    else {
        return rejectIfNoGlobal(function () { return window.fdc3.raiseIntent(intent, context, app); });
    }
}
function raiseIntentForContext(context, app) {
    if (isString(app)) {
        return rejectIfNoGlobal(function () { return window.fdc3.raiseIntentForContext(context, app); });
    }
    else {
        return rejectIfNoGlobal(function () { return window.fdc3.raiseIntentForContext(context, app); });
    }
}
function addIntentListener(intent, handler) {
    return rejectIfNoGlobal(function () { return window.fdc3.addIntentListener(intent, handler); });
}
function addContextListener(contextTypeOrHandler, handler) {
    //Handle (deprecated) function signature that allowed contextType argument to be omitted
    if (typeof contextTypeOrHandler !== 'function') {
        return rejectIfNoGlobal(function () { return window.fdc3.addContextListener(contextTypeOrHandler, handler); });
    }
    else {
        return rejectIfNoGlobal(function () { return window.fdc3.addContextListener(null, contextTypeOrHandler); });
    }
}
function getUserChannels() {
    return rejectIfNoGlobal(function () {
        //fallback to getSystemChannels for FDC3 <2.0 implementations
        if (window.fdc3.getUserChannels) {
            return window.fdc3.getUserChannels();
        }
        else {
            return window.fdc3.getSystemChannels();
        }
    });
}
function getSystemChannels() {
    //fallforward to getUserChannels for FDC3 2.0+ implementations
    return getUserChannels();
}
function joinUserChannel(channelId) {
    return rejectIfNoGlobal(function () {
        //fallback to joinChannel for FDC3 <2.0 implementations
        if (window.fdc3.joinUserChannel) {
            return window.fdc3.joinUserChannel(channelId);
        }
        else {
            return window.fdc3.joinChannel(channelId);
        }
    });
}
function joinChannel(channelId) {
    //fallforward to joinUserChannel for FDC3 2.0+ implementations
    return joinUserChannel(channelId);
}
function getOrCreateChannel(channelId) {
    return rejectIfNoGlobal(function () { return window.fdc3.getOrCreateChannel(channelId); });
}
function getCurrentChannel() {
    return rejectIfNoGlobal(function () { return window.fdc3.getCurrentChannel(); });
}
function leaveCurrentChannel() {
    return rejectIfNoGlobal(function () { return window.fdc3.leaveCurrentChannel(); });
}
function createPrivateChannel() {
    return rejectIfNoGlobal(function () { return window.fdc3.createPrivateChannel(); });
}
function getInfo() {
    return rejectIfNoGlobal(function () { return window.fdc3.getInfo(); });
}
function getAppMetadata(app) {
    return rejectIfNoGlobal(function () { return window.fdc3.getAppMetadata(app); });
}
function findInstances(app) {
    return rejectIfNoGlobal(function () { return window.fdc3.findInstances(app); });
}
/**
 * Check if the given context is a standard context type.
 * @param contextType
 */
function isStandardContextType(contextType) {
    return StandardContextsSet.has(contextType);
}
/**
 * Check if the given intent is a standard intent.
 * @param intent
 */
function isStandardIntent(intent) {
    return StandardIntentsSet.has(intent);
}
/**
 * Compare numeric semver version number strings (in the form `1.2.3`).
 *
 * Returns `-1` if the first argument is a lower version number than the second,
 * `1` if the first argument is greater than the second, 0 if the arguments are
 * equal and `null` if an error occurred during the comparison.
 *
 * @param a
 * @param b
 */
var compareVersionNumbers = function (a, b) {
    try {
        var aVerArr = a.split('.').map(Number);
        var bVerArr = b.split('.').map(Number);
        for (var index = 0; index < Math.max(aVerArr.length, bVerArr.length); index++) {
            /* If one version number has more digits and the other does not, and they are otherwise equal,
               assume the longer is greater. E.g. 1.1.1 > 1.1 */
            if (index === aVerArr.length || aVerArr[index] < bVerArr[index]) {
                return -1;
            }
            else if (index === bVerArr.length || aVerArr[index] > bVerArr[index]) {
                return 1;
            }
        }
        return 0;
    }
    catch (e) {
        console.error('Failed to compare version strings', e);
        return null;
    }
};
/**
 * Check if the FDC3 version in an ImplementationMetadata object is greater than
 * or equal to the supplied numeric semver version number string (in the form `1.2.3`).
 *
 * Returns a boolean or null if an error occurred while comparing the version numbers.
 *
 * @param metadata
 * @param version
 */
var versionIsAtLeast = function (metadata, version) {
    var comparison = compareVersionNumbers(metadata.fdc3Version, version);
    return comparison === null ? null : comparison >= 0 ? true : false;
};

/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright FINOS FDC3 contributors - see NOTICE file
 */
/**
 * @deprecated Use {@link StandardContextType} instead
 */
var ContextTypes;
(function (ContextTypes) {
    ContextTypes["Chart"] = "fdc3.chart";
    ContextTypes["ChatInitSettings"] = "fdc3.chat.initSettings";
    ContextTypes["ChatRoom"] = "fdc3.chat.room";
    ContextTypes["Contact"] = "fdc3.contact";
    ContextTypes["ContactList"] = "fdc3.contactList";
    ContextTypes["Country"] = "fdc3.country";
    ContextTypes["Currency"] = "fdc3.currency";
    ContextTypes["Email"] = "fdc3.email";
    ContextTypes["Instrument"] = "fdc3.instrument";
    ContextTypes["InstrumentList"] = "fdc3.instrumentList";
    ContextTypes["Interaction"] = "fdc3.interaction";
    ContextTypes["Nothing"] = "fdc3.nothing";
    ContextTypes["Organization"] = "fdc3.organization";
    ContextTypes["Portfolio"] = "fdc3.portfolio";
    ContextTypes["Position"] = "fdc3.position";
    ContextTypes["ChatSearchCriteria"] = "fdc3.chat.searchCriteria";
    ContextTypes["TimeRange"] = "fdc3.timerange";
    ContextTypes["TransactionResult"] = "fdc3.transactionResult";
    ContextTypes["Valuation"] = "fdc3.valuation";
})(ContextTypes || (ContextTypes = {}));

// To parse this data:
//
//   import { Convert, Action, Chart, ChatInitSettings, ChatMessage, ChatRoom, ChatSearchCriteria, Contact, ContactList, Context, Country, Currency, Email, Instrument, InstrumentList, Interaction, Message, Nothing, Order, OrderList, Organization, Portfolio, Position, Product, TimeRange, Trade, TradeList, TransactionResult, Valuation } from "./file";
//
//   const action = Convert.toAction(json);
//   const chart = Convert.toChart(json);
//   const chatInitSettings = Convert.toChatInitSettings(json);
//   const chatMessage = Convert.toChatMessage(json);
//   const chatRoom = Convert.toChatRoom(json);
//   const chatSearchCriteria = Convert.toChatSearchCriteria(json);
//   const contact = Convert.toContact(json);
//   const contactList = Convert.toContactList(json);
//   const context = Convert.toContext(json);
//   const country = Convert.toCountry(json);
//   const currency = Convert.toCurrency(json);
//   const email = Convert.toEmail(json);
//   const instrument = Convert.toInstrument(json);
//   const instrumentList = Convert.toInstrumentList(json);
//   const interaction = Convert.toInteraction(json);
//   const message = Convert.toMessage(json);
//   const nothing = Convert.toNothing(json);
//   const order = Convert.toOrder(json);
//   const orderList = Convert.toOrderList(json);
//   const organization = Convert.toOrganization(json);
//   const portfolio = Convert.toPortfolio(json);
//   const position = Convert.toPosition(json);
//   const product = Convert.toProduct(json);
//   const timeRange = Convert.toTimeRange(json);
//   const trade = Convert.toTrade(json);
//   const tradeList = Convert.toTradeList(json);
//   const transactionResult = Convert.toTransactionResult(json);
//   const valuation = Convert.toValuation(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
/**
 * Free text to be used for a keyword search
 *
 * `interactionType` SHOULD be one of `'Instant Message'`, `'Email'`, `'Call'`, or
 * `'Meeting'` although other string values are permitted.
 */
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toAction = function (json) {
        return cast(JSON.parse(json), r("Action"));
    };
    Convert.actionToJson = function (value) {
        return JSON.stringify(uncast(value, r("Action")), null, 2);
    };
    Convert.toChart = function (json) {
        return cast(JSON.parse(json), r("Chart"));
    };
    Convert.chartToJson = function (value) {
        return JSON.stringify(uncast(value, r("Chart")), null, 2);
    };
    Convert.toChatInitSettings = function (json) {
        return cast(JSON.parse(json), r("ChatInitSettings"));
    };
    Convert.chatInitSettingsToJson = function (value) {
        return JSON.stringify(uncast(value, r("ChatInitSettings")), null, 2);
    };
    Convert.toChatMessage = function (json) {
        return cast(JSON.parse(json), r("ChatMessage"));
    };
    Convert.chatMessageToJson = function (value) {
        return JSON.stringify(uncast(value, r("ChatMessage")), null, 2);
    };
    Convert.toChatRoom = function (json) {
        return cast(JSON.parse(json), r("ChatRoom"));
    };
    Convert.chatRoomToJson = function (value) {
        return JSON.stringify(uncast(value, r("ChatRoom")), null, 2);
    };
    Convert.toChatSearchCriteria = function (json) {
        return cast(JSON.parse(json), r("ChatSearchCriteria"));
    };
    Convert.chatSearchCriteriaToJson = function (value) {
        return JSON.stringify(uncast(value, r("ChatSearchCriteria")), null, 2);
    };
    Convert.toContact = function (json) {
        return cast(JSON.parse(json), r("Contact"));
    };
    Convert.contactToJson = function (value) {
        return JSON.stringify(uncast(value, r("Contact")), null, 2);
    };
    Convert.toContactList = function (json) {
        return cast(JSON.parse(json), r("ContactList"));
    };
    Convert.contactListToJson = function (value) {
        return JSON.stringify(uncast(value, r("ContactList")), null, 2);
    };
    Convert.toContext = function (json) {
        return cast(JSON.parse(json), r("Context"));
    };
    Convert.contextToJson = function (value) {
        return JSON.stringify(uncast(value, r("Context")), null, 2);
    };
    Convert.toCountry = function (json) {
        return cast(JSON.parse(json), r("Country"));
    };
    Convert.countryToJson = function (value) {
        return JSON.stringify(uncast(value, r("Country")), null, 2);
    };
    Convert.toCurrency = function (json) {
        return cast(JSON.parse(json), r("Currency"));
    };
    Convert.currencyToJson = function (value) {
        return JSON.stringify(uncast(value, r("Currency")), null, 2);
    };
    Convert.toEmail = function (json) {
        return cast(JSON.parse(json), r("Email"));
    };
    Convert.emailToJson = function (value) {
        return JSON.stringify(uncast(value, r("Email")), null, 2);
    };
    Convert.toInstrument = function (json) {
        return cast(JSON.parse(json), r("Instrument"));
    };
    Convert.instrumentToJson = function (value) {
        return JSON.stringify(uncast(value, r("Instrument")), null, 2);
    };
    Convert.toInstrumentList = function (json) {
        return cast(JSON.parse(json), r("InstrumentList"));
    };
    Convert.instrumentListToJson = function (value) {
        return JSON.stringify(uncast(value, r("InstrumentList")), null, 2);
    };
    Convert.toInteraction = function (json) {
        return cast(JSON.parse(json), r("Interaction"));
    };
    Convert.interactionToJson = function (value) {
        return JSON.stringify(uncast(value, r("Interaction")), null, 2);
    };
    Convert.toMessage = function (json) {
        return cast(JSON.parse(json), r("Message"));
    };
    Convert.messageToJson = function (value) {
        return JSON.stringify(uncast(value, r("Message")), null, 2);
    };
    Convert.toNothing = function (json) {
        return cast(JSON.parse(json), r("Nothing"));
    };
    Convert.nothingToJson = function (value) {
        return JSON.stringify(uncast(value, r("Nothing")), null, 2);
    };
    Convert.toOrder = function (json) {
        return cast(JSON.parse(json), r("Order"));
    };
    Convert.orderToJson = function (value) {
        return JSON.stringify(uncast(value, r("Order")), null, 2);
    };
    Convert.toOrderList = function (json) {
        return cast(JSON.parse(json), r("OrderList"));
    };
    Convert.orderListToJson = function (value) {
        return JSON.stringify(uncast(value, r("OrderList")), null, 2);
    };
    Convert.toOrganization = function (json) {
        return cast(JSON.parse(json), r("Organization"));
    };
    Convert.organizationToJson = function (value) {
        return JSON.stringify(uncast(value, r("Organization")), null, 2);
    };
    Convert.toPortfolio = function (json) {
        return cast(JSON.parse(json), r("Portfolio"));
    };
    Convert.portfolioToJson = function (value) {
        return JSON.stringify(uncast(value, r("Portfolio")), null, 2);
    };
    Convert.toPosition = function (json) {
        return cast(JSON.parse(json), r("Position"));
    };
    Convert.positionToJson = function (value) {
        return JSON.stringify(uncast(value, r("Position")), null, 2);
    };
    Convert.toProduct = function (json) {
        return cast(JSON.parse(json), r("Product"));
    };
    Convert.productToJson = function (value) {
        return JSON.stringify(uncast(value, r("Product")), null, 2);
    };
    Convert.toTimeRange = function (json) {
        return cast(JSON.parse(json), r("TimeRange"));
    };
    Convert.timeRangeToJson = function (value) {
        return JSON.stringify(uncast(value, r("TimeRange")), null, 2);
    };
    Convert.toTrade = function (json) {
        return cast(JSON.parse(json), r("Trade"));
    };
    Convert.tradeToJson = function (value) {
        return JSON.stringify(uncast(value, r("Trade")), null, 2);
    };
    Convert.toTradeList = function (json) {
        return cast(JSON.parse(json), r("TradeList"));
    };
    Convert.tradeListToJson = function (value) {
        return JSON.stringify(uncast(value, r("TradeList")), null, 2);
    };
    Convert.toTransactionResult = function (json) {
        return cast(JSON.parse(json), r("TransactionResult"));
    };
    Convert.transactionResultToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransactionResult")), null, 2);
    };
    Convert.toValuation = function (json) {
        return cast(JSON.parse(json), r("Valuation"));
    };
    Convert.valuationToJson = function (value) {
        return JSON.stringify(uncast(value, r("Valuation")), null, 2);
    };
    return Convert;
}());
function invalidValue(typ, val, key, parent) {
    if (parent === void 0) { parent = ''; }
    var prettyTyp = prettyTypeName(typ);
    var parentText = parent ? " on ".concat(parent) : '';
    var keyText = key ? " for key \"".concat(key, "\"") : '';
    throw Error("Invalid value".concat(keyText).concat(parentText, ". Expected ").concat(prettyTyp, " but got ").concat(JSON.stringify(val)));
}
function prettyTypeName(typ) {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return "an optional ".concat(prettyTypeName(typ[1]));
        }
        else {
            return "one of [".concat(typ.map(function (a) { return prettyTypeName(a); }).join(", "), "]");
        }
    }
    else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    }
    else {
        return typeof typ;
    }
}
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        var map_1 = {};
        typ.props.forEach(function (p) { return map_1[p.json] = { key: p.js, typ: p.typ }; });
        typ.jsonToJS = map_1;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        var map_2 = {};
        typ.props.forEach(function (p) { return map_2[p.js] = { key: p.json, typ: p.typ }; });
        typ.jsToJSON = map_2;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps, key, parent) {
    if (key === void 0) { key = ''; }
    if (parent === void 0) { parent = ''; }
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue(typ, val, key, parent);
    }
    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ_1 = typs[i];
            try {
                return transform(val, typ_1, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val, key, parent);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue(cases.map(function (a) { return l(a); }), val, key, parent);
    }
    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val))
            return invalidValue(l("array"), val, key, parent);
        return val.map(function (el) { return transform(el, typ, getProps); });
    }
    function transformDate(val) {
        if (val === null) {
            return null;
        }
        var d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        var result = {};
        Object.getOwnPropertyNames(props).forEach(function (key) {
            var prop = props[key];
            var v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }
    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false)
        return invalidValue(typ, val, key, parent);
    var ref = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number")
        return transformDate(val);
    return transformPrimitive(typ, val);
}
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}
function l(typ) {
    return { literal: typ };
}
function a(typ) {
    return { arrayItems: typ };
}
function u() {
    var typs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typs[_i] = arguments[_i];
    }
    return { unionMembers: typs };
}
function o(props, additional) {
    return { props: props, additional: additional };
}
function m(additional) {
    return { props: [], additional: additional };
}
function r(name) {
    return { ref: name };
}
var typeMap = {
    "Action": o([
        { json: "app", js: "app", typ: u(undefined, r("ActionTargetApp")) },
        { json: "context", js: "context", typ: r("ContextElement") },
        { json: "intent", js: "intent", typ: u(undefined, "") },
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("ActionType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "ActionTargetApp": o([
        { json: "appId", js: "appId", typ: "" },
        { json: "desktopAgent", js: "desktopAgent", typ: u(undefined, "") },
        { json: "instanceId", js: "instanceId", typ: u(undefined, "") },
    ], "any"),
    "ContextElement": o([
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: "" },
    ], "any"),
    "Chart": o([
        { json: "instruments", js: "instruments", typ: a(r("InstrumentElement")) },
        { json: "otherConfig", js: "otherConfig", typ: u(undefined, a(r("ContextElement"))) },
        { json: "range", js: "range", typ: u(undefined, r("TimeRangeObject")) },
        { json: "style", js: "style", typ: u(undefined, r("ChartStyle")) },
        { json: "type", js: "type", typ: r("ChartType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "InstrumentElement": o([
        { json: "id", js: "id", typ: r("PurpleInstrumentIdentifiers") },
        { json: "market", js: "market", typ: u(undefined, r("OrganizationMarket")) },
        { json: "type", js: "type", typ: r("PurpleInteractionType") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "PurpleInstrumentIdentifiers": o([
        { json: "BBG", js: "BBG", typ: u(undefined, "") },
        { json: "CUSIP", js: "CUSIP", typ: u(undefined, "") },
        { json: "FDS_ID", js: "FDS_ID", typ: u(undefined, "") },
        { json: "FIGI", js: "FIGI", typ: u(undefined, "") },
        { json: "ISIN", js: "ISIN", typ: u(undefined, "") },
        { json: "PERMID", js: "PERMID", typ: u(undefined, "") },
        { json: "RIC", js: "RIC", typ: u(undefined, "") },
        { json: "SEDOL", js: "SEDOL", typ: u(undefined, "") },
        { json: "ticker", js: "ticker", typ: u(undefined, "") },
    ], "any"),
    "OrganizationMarket": o([
        { json: "BBG", js: "BBG", typ: u(undefined, "") },
        { json: "COUNTRY_ISOALPHA2", js: "COUNTRY_ISOALPHA2", typ: u(undefined, "") },
        { json: "MIC", js: "MIC", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "TimeRangeObject": o([
        { json: "endTime", js: "endTime", typ: u(undefined, Date) },
        { json: "startTime", js: "startTime", typ: u(undefined, Date) },
        { json: "type", js: "type", typ: r("TimeRangeType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "ChatInitSettings": o([
        { json: "chatName", js: "chatName", typ: u(undefined, "") },
        { json: "members", js: "members", typ: u(undefined, r("ContactListObject")) },
        { json: "message", js: "message", typ: u(undefined, u(r("MessageObject"), "")) },
        { json: "options", js: "options", typ: u(undefined, r("ChatOptions")) },
        { json: "type", js: "type", typ: r("ChatInitSettingsType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "ContactListObject": o([
        { json: "contacts", js: "contacts", typ: a(r("ContactElement")) },
        { json: "type", js: "type", typ: r("ContactListType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "ContactElement": o([
        { json: "id", js: "id", typ: r("PurpleContactIdentifiers") },
        { json: "type", js: "type", typ: r("FluffyInteractionType") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "PurpleContactIdentifiers": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "FDS_ID", js: "FDS_ID", typ: u(undefined, "") },
    ], "any"),
    "MessageObject": o([
        { json: "entities", js: "entities", typ: u(undefined, m(r("PurpleAction"))) },
        { json: "text", js: "text", typ: u(undefined, r("PurpleMessageText")) },
        { json: "type", js: "type", typ: r("MessageType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "PurpleAction": o([
        { json: "app", js: "app", typ: u(undefined, r("ActionTargetApp")) },
        { json: "context", js: "context", typ: u(undefined, r("ContextElement")) },
        { json: "intent", js: "intent", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("EntityType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "data", js: "data", typ: u(undefined, r("PurpleData")) },
    ], "any"),
    "PurpleData": o([
        { json: "dataUri", js: "dataUri", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "PurpleMessageText": o([
        { json: "text/markdown", js: "text/markdown", typ: u(undefined, "") },
        { json: "text/plain", js: "text/plain", typ: u(undefined, "") },
    ], "any"),
    "ChatOptions": o([
        { json: "allowAddUser", js: "allowAddUser", typ: u(undefined, true) },
        { json: "allowHistoryBrowsing", js: "allowHistoryBrowsing", typ: u(undefined, true) },
        { json: "allowMessageCopy", js: "allowMessageCopy", typ: u(undefined, true) },
        { json: "groupRecipients", js: "groupRecipients", typ: u(undefined, true) },
        { json: "isPublic", js: "isPublic", typ: u(undefined, true) },
    ], "any"),
    "ChatMessage": o([
        { json: "chatRoom", js: "chatRoom", typ: r("ChatRoomObject") },
        { json: "message", js: "message", typ: r("MessageObject") },
        { json: "type", js: "type", typ: r("ChatMessageType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "ChatRoomObject": o([
        { json: "id", js: "id", typ: m("any") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "providerName", js: "providerName", typ: "" },
        { json: "type", js: "type", typ: r("ChatRoomType") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "ChatRoom": o([
        { json: "id", js: "id", typ: m("any") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "providerName", js: "providerName", typ: "" },
        { json: "type", js: "type", typ: r("ChatRoomType") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], "any"),
    "ChatSearchCriteria": o([
        { json: "criteria", js: "criteria", typ: a(u(r("OrganizationObject"), "")) },
        { json: "type", js: "type", typ: r("ChatSearchCriteriaType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "OrganizationObject": o([
        { json: "id", js: "id", typ: r("Identifiers") },
        { json: "market", js: "market", typ: u(undefined, r("OrganizationMarket")) },
        { json: "type", js: "type", typ: r("TentacledInteractionType") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Identifiers": o([
        { json: "BBG", js: "BBG", typ: u(undefined, "") },
        { json: "CUSIP", js: "CUSIP", typ: u(undefined, "") },
        { json: "FDS_ID", js: "FDS_ID", typ: u(undefined, "") },
        { json: "FIGI", js: "FIGI", typ: u(undefined, "") },
        { json: "ISIN", js: "ISIN", typ: u(undefined, "") },
        { json: "PERMID", js: "PERMID", typ: u(undefined, "") },
        { json: "RIC", js: "RIC", typ: u(undefined, "") },
        { json: "SEDOL", js: "SEDOL", typ: u(undefined, "") },
        { json: "ticker", js: "ticker", typ: u(undefined, "") },
        { json: "LEI", js: "LEI", typ: u(undefined, "") },
        { json: "email", js: "email", typ: u(undefined, "") },
    ], "any"),
    "Contact": o([
        { json: "id", js: "id", typ: r("FluffyContactIdentifiers") },
        { json: "type", js: "type", typ: r("FluffyInteractionType") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "FluffyContactIdentifiers": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "FDS_ID", js: "FDS_ID", typ: u(undefined, "") },
    ], "any"),
    "ContactList": o([
        { json: "contacts", js: "contacts", typ: a(r("ContactElement")) },
        { json: "type", js: "type", typ: r("ContactListType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Context": o([
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: "" },
    ], "any"),
    "Country": o([
        { json: "id", js: "id", typ: r("CountryID") },
        { json: "type", js: "type", typ: r("CountryType") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "CountryID": o([
        { json: "COUNTRY_ISOALPHA2", js: "COUNTRY_ISOALPHA2", typ: u(undefined, "") },
        { json: "COUNTRY_ISOALPHA3", js: "COUNTRY_ISOALPHA3", typ: u(undefined, "") },
        { json: "ISOALPHA2", js: "ISOALPHA2", typ: u(undefined, "") },
        { json: "ISOALPHA3", js: "ISOALPHA3", typ: u(undefined, "") },
    ], "any"),
    "Currency": o([
        { json: "id", js: "id", typ: r("CurrencyID") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("CurrencyType") },
    ], "any"),
    "CurrencyID": o([
        { json: "CURRENCY_ISOCODE", js: "CURRENCY_ISOCODE", typ: u(undefined, "") },
    ], "any"),
    "Email": o([
        { json: "recipients", js: "recipients", typ: r("EmailRecipients") },
        { json: "subject", js: "subject", typ: u(undefined, "") },
        { json: "textBody", js: "textBody", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("EmailType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "EmailRecipients": o([
        { json: "id", js: "id", typ: u(undefined, r("EmailRecipientsID")) },
        { json: "type", js: "type", typ: r("EmailRecipientsType") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "contacts", js: "contacts", typ: u(undefined, a(r("ContactElement"))) },
    ], "any"),
    "EmailRecipientsID": o([
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "FDS_ID", js: "FDS_ID", typ: u(undefined, "") },
    ], "any"),
    "Instrument": o([
        { json: "id", js: "id", typ: r("FluffyInstrumentIdentifiers") },
        { json: "market", js: "market", typ: u(undefined, r("PurpleMarket")) },
        { json: "type", js: "type", typ: r("PurpleInteractionType") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "FluffyInstrumentIdentifiers": o([
        { json: "BBG", js: "BBG", typ: u(undefined, "") },
        { json: "CUSIP", js: "CUSIP", typ: u(undefined, "") },
        { json: "FDS_ID", js: "FDS_ID", typ: u(undefined, "") },
        { json: "FIGI", js: "FIGI", typ: u(undefined, "") },
        { json: "ISIN", js: "ISIN", typ: u(undefined, "") },
        { json: "PERMID", js: "PERMID", typ: u(undefined, "") },
        { json: "RIC", js: "RIC", typ: u(undefined, "") },
        { json: "SEDOL", js: "SEDOL", typ: u(undefined, "") },
        { json: "ticker", js: "ticker", typ: u(undefined, "") },
    ], "any"),
    "PurpleMarket": o([
        { json: "BBG", js: "BBG", typ: u(undefined, "") },
        { json: "COUNTRY_ISOALPHA2", js: "COUNTRY_ISOALPHA2", typ: u(undefined, "") },
        { json: "MIC", js: "MIC", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "InstrumentList": o([
        { json: "instruments", js: "instruments", typ: a(r("InstrumentElement")) },
        { json: "type", js: "type", typ: r("InstrumentListType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Interaction": o([
        { json: "description", js: "description", typ: "" },
        { json: "id", js: "id", typ: u(undefined, r("InteractionID")) },
        { json: "initiator", js: "initiator", typ: u(undefined, r("ContactElement")) },
        { json: "interactionType", js: "interactionType", typ: "" },
        { json: "origin", js: "origin", typ: u(undefined, "") },
        { json: "participants", js: "participants", typ: r("ContactListObject") },
        { json: "timeRange", js: "timeRange", typ: r("TimeRangeObject") },
        { json: "type", js: "type", typ: r("InteractionType") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "InteractionID": o([
        { json: "SALESFORCE", js: "SALESFORCE", typ: u(undefined, "") },
        { json: "SINGLETRACK", js: "SINGLETRACK", typ: u(undefined, "") },
        { json: "URI", js: "URI", typ: u(undefined, "") },
    ], "any"),
    "Message": o([
        { json: "entities", js: "entities", typ: u(undefined, m(r("FluffyAction"))) },
        { json: "text", js: "text", typ: u(undefined, r("FluffyMessageText")) },
        { json: "type", js: "type", typ: r("MessageType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "FluffyAction": o([
        { json: "app", js: "app", typ: u(undefined, r("ActionTargetApp")) },
        { json: "context", js: "context", typ: u(undefined, r("ContextElement")) },
        { json: "intent", js: "intent", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("EntityType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "data", js: "data", typ: u(undefined, r("FluffyData")) },
    ], "any"),
    "FluffyData": o([
        { json: "dataUri", js: "dataUri", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], "any"),
    "FluffyMessageText": o([
        { json: "text/markdown", js: "text/markdown", typ: u(undefined, "") },
        { json: "text/plain", js: "text/plain", typ: u(undefined, "") },
    ], "any"),
    "Nothing": o([
        { json: "type", js: "type", typ: r("NothingType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Order": o([
        { json: "details", js: "details", typ: u(undefined, r("PurpleOrderDetails")) },
        { json: "id", js: "id", typ: m("") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("OrderType") },
    ], "any"),
    "PurpleOrderDetails": o([
        { json: "product", js: "product", typ: u(undefined, r("ProductObject")) },
    ], "any"),
    "ProductObject": o([
        { json: "id", js: "id", typ: m("") },
        { json: "instrument", js: "instrument", typ: u(undefined, r("InstrumentElement")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("ProductType") },
    ], "any"),
    "OrderList": o([
        { json: "orders", js: "orders", typ: a(r("OrderElement")) },
        { json: "type", js: "type", typ: r("OrderListType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "OrderElement": o([
        { json: "details", js: "details", typ: u(undefined, r("FluffyOrderDetails")) },
        { json: "id", js: "id", typ: m("") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("OrderType") },
    ], "any"),
    "FluffyOrderDetails": o([
        { json: "product", js: "product", typ: u(undefined, r("ProductObject")) },
    ], "any"),
    "Organization": o([
        { json: "id", js: "id", typ: r("OrganizationIdentifiers") },
        { json: "type", js: "type", typ: r("StickyInteractionType") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "OrganizationIdentifiers": o([
        { json: "FDS_ID", js: "FDS_ID", typ: u(undefined, "") },
        { json: "LEI", js: "LEI", typ: u(undefined, "") },
        { json: "PERMID", js: "PERMID", typ: u(undefined, "") },
    ], "any"),
    "Portfolio": o([
        { json: "positions", js: "positions", typ: a(r("PositionElement")) },
        { json: "type", js: "type", typ: r("PortfolioType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "PositionElement": o([
        { json: "holding", js: "holding", typ: 3.14 },
        { json: "instrument", js: "instrument", typ: r("InstrumentElement") },
        { json: "type", js: "type", typ: r("PositionType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Position": o([
        { json: "holding", js: "holding", typ: 3.14 },
        { json: "instrument", js: "instrument", typ: r("InstrumentElement") },
        { json: "type", js: "type", typ: r("PositionType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Product": o([
        { json: "id", js: "id", typ: m("") },
        { json: "instrument", js: "instrument", typ: u(undefined, r("InstrumentElement")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "type", js: "type", typ: r("ProductType") },
    ], "any"),
    "TimeRange": o([
        { json: "endTime", js: "endTime", typ: u(undefined, Date) },
        { json: "startTime", js: "startTime", typ: u(undefined, Date) },
        { json: "type", js: "type", typ: r("TimeRangeType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Trade": o([
        { json: "id", js: "id", typ: m("") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "product", js: "product", typ: r("ProductObject") },
        { json: "type", js: "type", typ: r("TradeType") },
    ], "any"),
    "TradeList": o([
        { json: "trades", js: "trades", typ: a(r("TradeElement")) },
        { json: "type", js: "type", typ: r("TradeListType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "TradeElement": o([
        { json: "id", js: "id", typ: m("") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "product", js: "product", typ: r("ProductObject") },
        { json: "type", js: "type", typ: r("TradeType") },
    ], "any"),
    "TransactionResult": o([
        { json: "context", js: "context", typ: u(undefined, r("ContextElement")) },
        { json: "status", js: "status", typ: r("TransactionStatus") },
        { json: "type", js: "type", typ: r("TransactionResultType") },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "Valuation": o([
        { json: "CURRENCY_ISOCODE", js: "CURRENCY_ISOCODE", typ: "" },
        { json: "expiryTime", js: "expiryTime", typ: u(undefined, Date) },
        { json: "price", js: "price", typ: u(undefined, 3.14) },
        { json: "type", js: "type", typ: r("ValuationType") },
        { json: "valuationTime", js: "valuationTime", typ: u(undefined, Date) },
        { json: "value", js: "value", typ: 3.14 },
        { json: "id", js: "id", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], "any"),
    "ActionType": [
        "fdc3.action",
    ],
    "PurpleInteractionType": [
        "fdc3.instrument",
    ],
    "TimeRangeType": [
        "fdc3.timerange",
    ],
    "ChartStyle": [
        "bar",
        "candle",
        "custom",
        "heatmap",
        "histogram",
        "line",
        "mountain",
        "pie",
        "scatter",
        "stacked-bar",
    ],
    "ChartType": [
        "fdc3.chart",
    ],
    "FluffyInteractionType": [
        "fdc3.contact",
    ],
    "ContactListType": [
        "fdc3.contactList",
    ],
    "EntityType": [
        "fdc3.action",
        "fdc3.entity.fileAttachment",
    ],
    "MessageType": [
        "fdc3.message",
    ],
    "ChatInitSettingsType": [
        "fdc3.chat.initSettings",
    ],
    "ChatRoomType": [
        "fdc3.chat.room",
    ],
    "ChatMessageType": [
        "fdc3.chat.message",
    ],
    "TentacledInteractionType": [
        "fdc3.contact",
        "fdc3.instrument",
        "fdc3.organization",
    ],
    "ChatSearchCriteriaType": [
        "fdc3.chat.searchCriteria",
    ],
    "CountryType": [
        "fdc3.country",
    ],
    "CurrencyType": [
        "fdc3.currency",
    ],
    "EmailRecipientsType": [
        "fdc3.contact",
        "fdc3.contactList",
    ],
    "EmailType": [
        "fdc3.email",
    ],
    "InstrumentListType": [
        "fdc3.instrumentList",
    ],
    "InteractionType": [
        "fdc3.interaction",
    ],
    "NothingType": [
        "fdc3.nothing",
    ],
    "ProductType": [
        "fdc3.product",
    ],
    "OrderType": [
        "fdc3.order",
    ],
    "OrderListType": [
        "fdc3.orderList",
    ],
    "StickyInteractionType": [
        "fdc3.organization",
    ],
    "PositionType": [
        "fdc3.position",
    ],
    "PortfolioType": [
        "fdc3.portfolio",
    ],
    "TradeType": [
        "fdc3.trade",
    ],
    "TradeListType": [
        "fdc3.tradeList",
    ],
    "TransactionStatus": [
        "Created",
        "Deleted",
        "Failed",
        "Updated",
    ],
    "TransactionResultType": [
        "fdc3.transactionResult",
    ],
    "ValuationType": [
        "fdc3.valuation",
    ]
};

/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright FINOS FDC3 contributors - see NOTICE file
 */
/**
 * @deprecated Use {@link StandardIntent} instead
 */
var Intents;
(function (Intents) {
    Intents["CreateInteraction"] = "CreateInteraction";
    Intents["SendChatMessage"] = "SendChatMessage";
    Intents["StartCall"] = "StartCall";
    Intents["StartChat"] = "StartChat";
    Intents["StartEmail"] = "StartEmail";
    Intents["ViewAnalysis"] = "ViewAnalysis";
    Intents["ViewChat"] = "ViewChat";
    Intents["ViewChart"] = "ViewChart";
    Intents["ViewContact"] = "ViewContact";
    Intents["ViewHoldings"] = "ViewHoldings";
    Intents["ViewInstrument"] = "ViewInstrument";
    Intents["ViewInteractions"] = "ViewInteractions";
    Intents["ViewMessages"] = "ViewMessages";
    Intents["ViewNews"] = "ViewNews";
    Intents["ViewOrders"] = "ViewOrders";
    Intents["ViewProfile"] = "ViewProfile";
    Intents["ViewQuote"] = "ViewQuote";
    Intents["ViewResearch"] = "ViewResearch";
})(Intents || (Intents = {}));


//# sourceMappingURL=fdc3.esm.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./client/src/fdc3monitor.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @finos/fdc3 */ "../../node_modules/@finos/fdc3/dist/fdc3.esm.js");

document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initialize the DOM elements.
 */
async function initDom() {
    try {
        const appChannel = await (0,_finos_fdc3__WEBPACK_IMPORTED_MODULE_0__.getCurrentChannel)();
        if (appChannel) {
            await appChannel.addContextListener(null, (ctx) => {
                if (ctx.type === "fdc3.instrument") {
                    const receiveElement = document.querySelector("#received-instrument");
                    if (receiveElement) {
                        receiveElement.value = ctx.id?.ticker;
                    }
                }
            });
        }
    }
    catch (err) {
        showError(err);
    }
}
/**
 * Show an error on the UI.
 * @param err The error to display.
 */
function showError(err) {
    const errDom = document.querySelector("#error");
    if (errDom) {
        errDom.innerHTML = err instanceof Error ? err.message : JSON.stringify(err);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmRjM21vbml0b3IuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsY0FBYywyZ0VBQTJnRTtBQUN6aEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsNkJBQTZCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtB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VUFBVSxpREFBaUQ7QUFDM0Q7QUFDQTtBQUNBLFVBQVUsMkRBQTJEO0FBQ3JFLFVBQVUsK0RBQStEO0FBQ3pFLFVBQVUscURBQXFEO0FBQy9ELFVBQVUsbURBQW1EO0FBQzdELFVBQVUscUVBQXFFO0FBQy9FLFVBQVUsdUNBQXVDO0FBQ2pELFVBQVUsbURBQW1EO0FBQzdELFVBQVUsaURBQWlEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBCQUEwQjs7QUFFd2Y7QUFDbmhCOzs7Ozs7O1VDaG1HQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEO0FBRWhELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxJQUFJLENBQUM7UUFDSixNQUFNLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxLQUFLLFVBQVUsT0FBTztJQUNyQixJQUFJLENBQUM7UUFDSixNQUFNLFVBQVUsR0FBRyxNQUFNLDhEQUFpQixFQUFFLENBQUM7UUFFN0MsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNoQixNQUFNLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDakQsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFFLENBQUM7b0JBQ3BDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW1CLHNCQUFzQixDQUFDLENBQUM7b0JBQ3hGLElBQUksY0FBYyxFQUFFLENBQUM7d0JBQ3BCLGNBQWMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7b0JBQ3ZDLENBQUM7Z0JBQ0YsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2QsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7QUFDRixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxTQUFTLENBQUMsR0FBWTtJQUM5QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELElBQUksTUFBTSxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0UsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC8uLi8uLi9ub2RlX21vZHVsZXMvQGZpbm9zL2ZkYzMvZGlzdC9mZGMzLmVzbS5qcyIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4vY2xpZW50L3NyYy9mZGMzbW9uaXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUbyBwYXJzZSB0aGlzIGRhdGE6XG4vL1xuLy8gICBpbXBvcnQgeyBDb252ZXJ0LCBBZ2VudEVycm9yUmVzcG9uc2VNZXNzYWdlLCBBZ2VudFJlcXVlc3RNZXNzYWdlLCBBZ2VudFJlc3BvbnNlTWVzc2FnZSwgQnJpZGdlRXJyb3JSZXNwb25zZU1lc3NhZ2UsIEJyaWRnZVJlcXVlc3RNZXNzYWdlLCBCcmlkZ2VSZXNwb25zZU1lc3NhZ2UsIEJyb2FkY2FzdEFnZW50UmVxdWVzdCwgQnJvYWRjYXN0QnJpZGdlUmVxdWVzdCwgQ29ubmVjdGlvblN0ZXBNZXNzYWdlLCBDb25uZWN0aW9uU3RlcDJIZWxsbywgQ29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlLCBDb25uZWN0aW9uU3RlcDRBdXRoZW50aWNhdGlvbkZhaWxlZCwgQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlLCBGaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlLCBGaW5kSW5zdGFuY2VzQWdlbnRSZXF1ZXN0LCBGaW5kSW5zdGFuY2VzQWdlbnRSZXNwb25zZSwgRmluZEluc3RhbmNlc0JyaWRnZUVycm9yUmVzcG9uc2UsIEZpbmRJbnN0YW5jZXNCcmlkZ2VSZXF1ZXN0LCBGaW5kSW5zdGFuY2VzQnJpZGdlUmVzcG9uc2UsIEZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2UsIEZpbmRJbnRlbnRBZ2VudFJlcXVlc3QsIEZpbmRJbnRlbnRBZ2VudFJlc3BvbnNlLCBGaW5kSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZSwgRmluZEludGVudEJyaWRnZVJlcXVlc3QsIEZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZSwgRmluZEludGVudHNCeUNvbnRleHRBZ2VudEVycm9yUmVzcG9uc2UsIEZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0LCBGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVzcG9uc2UsIEZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlRXJyb3JSZXNwb25zZSwgRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXF1ZXN0LCBGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlc3BvbnNlLCBHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZSwgR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3QsIEdldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZSwgR2V0QXBwTWV0YWRhdGFCcmlkZ2VFcnJvclJlc3BvbnNlLCBHZXRBcHBNZXRhZGF0YUJyaWRnZVJlcXVlc3QsIEdldEFwcE1ldGFkYXRhQnJpZGdlUmVzcG9uc2UsIE9wZW5BZ2VudEVycm9yUmVzcG9uc2UsIE9wZW5BZ2VudFJlcXVlc3QsIE9wZW5BZ2VudFJlc3BvbnNlLCBPcGVuQnJpZGdlRXJyb3JSZXNwb25zZSwgT3BlbkJyaWRnZVJlcXVlc3QsIE9wZW5CcmlkZ2VSZXNwb25zZSwgUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3QsIFByaXZhdGVDaGFubmVsQnJvYWRjYXN0QnJpZGdlUmVxdWVzdCwgUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRBZ2VudFJlcXVlc3QsIFByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdCwgUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdCwgUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEJyaWRnZVJlcXVlc3QsIFByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJBZ2VudFJlcXVlc3QsIFByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0LCBQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdCwgUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0LCBQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3QsIFByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUJyaWRnZVJlcXVlc3QsIFJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlLCBSYWlzZUludGVudEFnZW50UmVxdWVzdCwgUmFpc2VJbnRlbnRBZ2VudFJlc3BvbnNlLCBSYWlzZUludGVudEJyaWRnZUVycm9yUmVzcG9uc2UsIFJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdCwgUmFpc2VJbnRlbnRCcmlkZ2VSZXNwb25zZSwgUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2UsIFJhaXNlSW50ZW50UmVzdWx0QWdlbnRSZXNwb25zZSwgUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VFcnJvclJlc3BvbnNlLCBSYWlzZUludGVudFJlc3VsdEJyaWRnZVJlc3BvbnNlLCBDb250ZXh0IH0gZnJvbSBcIi4vZmlsZVwiO1xuLy9cbi8vICAgY29uc3QgZkRDM0Rlc2t0b3BBZ2VudEFQSVNjaGVtYSA9IENvbnZlcnQudG9GREMzRGVza3RvcEFnZW50QVBJU2NoZW1hKGpzb24pO1xuLy8gICBjb25zdCBhZ2VudEVycm9yUmVzcG9uc2VNZXNzYWdlID0gQ29udmVydC50b0FnZW50RXJyb3JSZXNwb25zZU1lc3NhZ2UoanNvbik7XG4vLyAgIGNvbnN0IGFnZW50UmVxdWVzdE1lc3NhZ2UgPSBDb252ZXJ0LnRvQWdlbnRSZXF1ZXN0TWVzc2FnZShqc29uKTtcbi8vICAgY29uc3QgYWdlbnRSZXNwb25zZU1lc3NhZ2UgPSBDb252ZXJ0LnRvQWdlbnRSZXNwb25zZU1lc3NhZ2UoanNvbik7XG4vLyAgIGNvbnN0IGJyaWRnZUVycm9yUmVzcG9uc2VNZXNzYWdlID0gQ29udmVydC50b0JyaWRnZUVycm9yUmVzcG9uc2VNZXNzYWdlKGpzb24pO1xuLy8gICBjb25zdCBicmlkZ2VSZXF1ZXN0TWVzc2FnZSA9IENvbnZlcnQudG9CcmlkZ2VSZXF1ZXN0TWVzc2FnZShqc29uKTtcbi8vICAgY29uc3QgYnJpZGdlUmVzcG9uc2VNZXNzYWdlID0gQ29udmVydC50b0JyaWRnZVJlc3BvbnNlTWVzc2FnZShqc29uKTtcbi8vICAgY29uc3QgYnJvYWRjYXN0QWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b0Jyb2FkY2FzdEFnZW50UmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgYnJvYWRjYXN0QnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9Ccm9hZGNhc3RCcmlkZ2VSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBicmlkZ2luZ0NvbW1vbnMgPSBDb252ZXJ0LnRvQnJpZGdpbmdDb21tb25zKGpzb24pO1xuLy8gICBjb25zdCBjb25uZWN0aW9uU3RlcE1lc3NhZ2UgPSBDb252ZXJ0LnRvQ29ubmVjdGlvblN0ZXBNZXNzYWdlKGpzb24pO1xuLy8gICBjb25zdCBjb25uZWN0aW9uU3RlcDJIZWxsbyA9IENvbnZlcnQudG9Db25uZWN0aW9uU3RlcDJIZWxsbyhqc29uKTtcbi8vICAgY29uc3QgY29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlID0gQ29udmVydC50b0Nvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZShqc29uKTtcbi8vICAgY29uc3QgY29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWQgPSBDb252ZXJ0LnRvQ29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWQoanNvbik7XG4vLyAgIGNvbnN0IGNvbm5lY3Rpb25TdGVwNkNvbm5lY3RlZEFnZW50c1VwZGF0ZSA9IENvbnZlcnQudG9Db25uZWN0aW9uU3RlcDZDb25uZWN0ZWRBZ2VudHNVcGRhdGUoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2UgPSBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZmluZEluc3RhbmNlc0FnZW50UmVxdWVzdCA9IENvbnZlcnQudG9GaW5kSW5zdGFuY2VzQWdlbnRSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW5zdGFuY2VzQWdlbnRSZXNwb25zZSA9IENvbnZlcnQudG9GaW5kSW5zdGFuY2VzQWdlbnRSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZmluZEluc3RhbmNlc0JyaWRnZUVycm9yUmVzcG9uc2UgPSBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0JyaWRnZUVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnN0YW5jZXNCcmlkZ2VSZXF1ZXN0ID0gQ29udmVydC50b0ZpbmRJbnN0YW5jZXNCcmlkZ2VSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW5zdGFuY2VzQnJpZGdlUmVzcG9uc2UgPSBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnRlbnRBZ2VudFJlcXVlc3QgPSBDb252ZXJ0LnRvRmluZEludGVudEFnZW50UmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgZmluZEludGVudEFnZW50UmVzcG9uc2UgPSBDb252ZXJ0LnRvRmluZEludGVudEFnZW50UmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW50ZW50QnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9GaW5kSW50ZW50QnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgZmluZEludGVudEJyaWRnZVJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZmluZEludGVudHNCeUNvbnRleHRBZ2VudEVycm9yUmVzcG9uc2UgPSBDb252ZXJ0LnRvRmluZEludGVudHNCeUNvbnRleHRBZ2VudEVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVzcG9uc2UgPSBDb252ZXJ0LnRvRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2UgPSBDb252ZXJ0LnRvRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlcXVlc3QgPSBDb252ZXJ0LnRvRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGdldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlID0gQ29udmVydC50b0dldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBnZXRBcHBNZXRhZGF0YUFnZW50UmVxdWVzdCA9IENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUFnZW50UmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgZ2V0QXBwTWV0YWRhdGFBZ2VudFJlc3BvbnNlID0gQ29udmVydC50b0dldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZ2V0QXBwTWV0YWRhdGFCcmlkZ2VFcnJvclJlc3BvbnNlID0gQ29udmVydC50b0dldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZ2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0ID0gQ29udmVydC50b0dldEFwcE1ldGFkYXRhQnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgZ2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXNwb25zZSA9IENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUJyaWRnZVJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBvcGVuQWdlbnRFcnJvclJlc3BvbnNlID0gQ29udmVydC50b09wZW5BZ2VudEVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IG9wZW5BZ2VudFJlcXVlc3QgPSBDb252ZXJ0LnRvT3BlbkFnZW50UmVxdWVzdChqc29uKTtcbi8vICAgY29uc3Qgb3BlbkFnZW50UmVzcG9uc2UgPSBDb252ZXJ0LnRvT3BlbkFnZW50UmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IG9wZW5CcmlkZ2VFcnJvclJlc3BvbnNlID0gQ29udmVydC50b09wZW5CcmlkZ2VFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBvcGVuQnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9PcGVuQnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3Qgb3BlbkJyaWRnZVJlc3BvbnNlID0gQ29udmVydC50b09wZW5CcmlkZ2VSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgcHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3QgPSBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IHByaXZhdGVDaGFubmVsQnJvYWRjYXN0QnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IHByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b1ByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBwcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEJyaWRnZVJlcXVlc3QgPSBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRCcmlkZ2VSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBwcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b1ByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IHByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRCcmlkZ2VSZXF1ZXN0ID0gQ29udmVydC50b1ByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRCcmlkZ2VSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBwcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b1ByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJBZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IHByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0ID0gQ29udmVydC50b1ByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBwcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgcHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0ID0gQ29udmVydC50b1ByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgcHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b1ByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUFnZW50UmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgcHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVCcmlkZ2VSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCByYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZSA9IENvbnZlcnQudG9SYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgcmFpc2VJbnRlbnRBZ2VudFJlcXVlc3QgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IHJhaXNlSW50ZW50QWdlbnRSZXNwb25zZSA9IENvbnZlcnQudG9SYWlzZUludGVudEFnZW50UmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IHJhaXNlSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZSA9IENvbnZlcnQudG9SYWlzZUludGVudEJyaWRnZUVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IHJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9SYWlzZUludGVudEJyaWRnZVJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IHJhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2UgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRCcmlkZ2VSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgcmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2UgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IHJhaXNlSW50ZW50UmVzdWx0QWdlbnRSZXNwb25zZSA9IENvbnZlcnQudG9SYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IHJhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZSA9IENvbnZlcnQudG9SYWlzZUludGVudFJlc3VsdEJyaWRnZUVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IHJhaXNlSW50ZW50UmVzdWx0QnJpZGdlUmVzcG9uc2UgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgY29udGV4dCA9IENvbnZlcnQudG9Db250ZXh0KGpzb24pO1xuLy9cbi8vIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBKU09OIGRvZXNuJ3Rcbi8vIG1hdGNoIHRoZSBleHBlY3RlZCBpbnRlcmZhY2UsIGV2ZW4gaWYgdGhlIEpTT04gaXMgdmFsaWQuXG4vLyBDb252ZXJ0cyBKU09OIHN0cmluZ3MgdG8vZnJvbSB5b3VyIHR5cGVzXG4vLyBhbmQgYXNzZXJ0cyB0aGUgcmVzdWx0cyBvZiBKU09OLnBhcnNlIGF0IHJ1bnRpbWVcbnZhciBDb252ZXJ0JDEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udmVydCgpIHtcbiAgICB9XG4gICAgQ29udmVydC50b0ZEQzNEZXNrdG9wQWdlbnRBUElTY2hlbWEgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIFwiYW55XCIpO1xuICAgIH07XG4gICAgQ29udmVydC5mREMzRGVza3RvcEFnZW50QVBJU2NoZW1hVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgXCJhbnlcIiksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0FnZW50RXJyb3JSZXNwb25zZU1lc3NhZ2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkFnZW50RXJyb3JSZXNwb25zZU1lc3NhZ2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5hZ2VudEVycm9yUmVzcG9uc2VNZXNzYWdlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQWdlbnRFcnJvclJlc3BvbnNlTWVzc2FnZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0FnZW50UmVxdWVzdE1lc3NhZ2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkFnZW50UmVxdWVzdE1lc3NhZ2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5hZ2VudFJlcXVlc3RNZXNzYWdlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQWdlbnRSZXF1ZXN0TWVzc2FnZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0FnZW50UmVzcG9uc2VNZXNzYWdlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJBZ2VudFJlc3BvbnNlTWVzc2FnZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmFnZW50UmVzcG9uc2VNZXNzYWdlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQWdlbnRSZXNwb25zZU1lc3NhZ2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9CcmlkZ2VFcnJvclJlc3BvbnNlTWVzc2FnZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiQnJpZGdlRXJyb3JSZXNwb25zZU1lc3NhZ2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5icmlkZ2VFcnJvclJlc3BvbnNlTWVzc2FnZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkJyaWRnZUVycm9yUmVzcG9uc2VNZXNzYWdlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQnJpZGdlUmVxdWVzdE1lc3NhZ2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkJyaWRnZVJlcXVlc3RNZXNzYWdlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuYnJpZGdlUmVxdWVzdE1lc3NhZ2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJCcmlkZ2VSZXF1ZXN0TWVzc2FnZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0JyaWRnZVJlc3BvbnNlTWVzc2FnZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiQnJpZGdlUmVzcG9uc2VNZXNzYWdlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuYnJpZGdlUmVzcG9uc2VNZXNzYWdlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQnJpZGdlUmVzcG9uc2VNZXNzYWdlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQnJvYWRjYXN0QWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJCcm9hZGNhc3RBZ2VudFJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5icm9hZGNhc3RBZ2VudFJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJCcm9hZGNhc3RBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Ccm9hZGNhc3RCcmlkZ2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJCcm9hZGNhc3RCcmlkZ2VSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuYnJvYWRjYXN0QnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkJyb2FkY2FzdEJyaWRnZVJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9CcmlkZ2luZ0NvbW1vbnMgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIG0kMShcImFueVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmJyaWRnaW5nQ29tbW9uc1RvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIG0kMShcImFueVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0Nvbm5lY3Rpb25TdGVwTWVzc2FnZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiQ29ubmVjdGlvblN0ZXBNZXNzYWdlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuY29ubmVjdGlvblN0ZXBNZXNzYWdlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQ29ubmVjdGlvblN0ZXBNZXNzYWdlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQ29ubmVjdGlvblN0ZXAySGVsbG8gPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkNvbm5lY3Rpb25TdGVwMkhlbGxvXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuY29ubmVjdGlvblN0ZXAySGVsbG9Ub0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJDb25uZWN0aW9uU3RlcDJIZWxsb1wiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0Nvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiQ29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuY29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQ29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQ29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkNvbm5lY3Rpb25TdGVwNEF1dGhlbnRpY2F0aW9uRmFpbGVkXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuY29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWRUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJDb25uZWN0aW9uU3RlcDRBdXRoZW50aWNhdGlvbkZhaWxlZFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0Nvbm5lY3Rpb25TdGVwNkNvbm5lY3RlZEFnZW50c1VwZGF0ZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuY29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnN0YW5jZXNBZ2VudFJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW5zdGFuY2VzQnJpZGdlRXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEluc3RhbmNlc0JyaWRnZUVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW5zdGFuY2VzQnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEluc3RhbmNlc0JyaWRnZVJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW5zdGFuY2VzQnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnN0YW5jZXNCcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW5zdGFuY2VzQnJpZGdlUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW50ZW50QWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW50ZW50QWdlbnRSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEludGVudEFnZW50UmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnRlbnRBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW50ZW50QWdlbnRSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEludGVudEFnZW50UmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW50ZW50QWdlbnRSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnRlbnRBZ2VudFJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEludGVudEJyaWRnZUVycm9yUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEludGVudEJyaWRnZUVycm9yUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnRlbnRCcmlkZ2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW50ZW50QnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnRlbnRCcmlkZ2VSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEludGVudEJyaWRnZVJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW50ZW50QnJpZGdlUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudEVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlRXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlRXJyb3JSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlRXJyb3JSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZ2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0dldEFwcE1ldGFkYXRhQWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmdldEFwcE1ldGFkYXRhQWdlbnRSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmdldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0dldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VFcnJvclJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZ2V0QXBwTWV0YWRhdGFCcmlkZ2VFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJHZXRBcHBNZXRhZGF0YUJyaWRnZVJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5nZXRBcHBNZXRhZGF0YUJyaWRnZVJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJHZXRBcHBNZXRhZGF0YUJyaWRnZVJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUJyaWRnZVJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJHZXRBcHBNZXRhZGF0YUJyaWRnZVJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZ2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkdldEFwcE1ldGFkYXRhQnJpZGdlUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9PcGVuQWdlbnRFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJPcGVuQWdlbnRFcnJvclJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQub3BlbkFnZW50RXJyb3JSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIk9wZW5BZ2VudEVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9PcGVuQWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJPcGVuQWdlbnRSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQub3BlbkFnZW50UmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIk9wZW5BZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9PcGVuQWdlbnRSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiT3BlbkFnZW50UmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5vcGVuQWdlbnRSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIk9wZW5BZ2VudFJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvT3BlbkJyaWRnZUVycm9yUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIk9wZW5CcmlkZ2VFcnJvclJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQub3BlbkJyaWRnZUVycm9yUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJPcGVuQnJpZGdlRXJyb3JSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b09wZW5CcmlkZ2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJPcGVuQnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lm9wZW5CcmlkZ2VSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiT3BlbkJyaWRnZVJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9PcGVuQnJpZGdlUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIk9wZW5CcmlkZ2VSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lm9wZW5CcmlkZ2VSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIk9wZW5CcmlkZ2VSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1ByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEFnZW50UmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnByaXZhdGVDaGFubmVsQnJvYWRjYXN0QnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QnJpZGdlUmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1ByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEJyaWRnZVJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1ByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1ByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRCcmlkZ2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRCcmlkZ2VSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEJyaWRnZVJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckJyaWRnZVJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QWdlbnRSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1ByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVCcmlkZ2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVCcmlkZ2VSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUJyaWRnZVJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9SYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5yYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlJhaXNlSW50ZW50QWdlbnRSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucmFpc2VJbnRlbnRBZ2VudFJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJSYWlzZUludGVudEFnZW50UmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1JhaXNlSW50ZW50QWdlbnRSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUmFpc2VJbnRlbnRBZ2VudFJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucmFpc2VJbnRlbnRBZ2VudFJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUmFpc2VJbnRlbnRBZ2VudFJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJSYWlzZUludGVudEJyaWRnZUVycm9yUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5yYWlzZUludGVudEJyaWRnZUVycm9yUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJSYWlzZUludGVudEJyaWRnZUVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9SYWlzZUludGVudEJyaWRnZVJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1JhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlJhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5yYWlzZUludGVudEJyaWRnZVJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUmFpc2VJbnRlbnRCcmlkZ2VSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1JhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJSYWlzZUludGVudFJlc3VsdEFnZW50RXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnJhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9SYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnJhaXNlSW50ZW50UmVzdWx0QWdlbnRSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1JhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VFcnJvclJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnJhaXNlSW50ZW50UmVzdWx0QnJpZGdlUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJSYWlzZUludGVudFJlc3VsdEJyaWRnZVJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQ29udGV4dCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiQ29udGV4dFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvbnRleHRUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJDb250ZXh0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udmVydDtcbn0oKSk7XG5mdW5jdGlvbiBpbnZhbGlkVmFsdWUkMSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50ID09PSB2b2lkIDApIHsgcGFyZW50ID0gJyc7IH1cbiAgICB2YXIgcHJldHR5VHlwID0gcHJldHR5VHlwZU5hbWUkMSh0eXApO1xuICAgIHZhciBwYXJlbnRUZXh0ID0gcGFyZW50ID8gXCIgb24gXCIuY29uY2F0KHBhcmVudCkgOiAnJztcbiAgICB2YXIga2V5VGV4dCA9IGtleSA/IFwiIGZvciBrZXkgXFxcIlwiLmNvbmNhdChrZXksIFwiXFxcIlwiKSA6ICcnO1xuICAgIHRocm93IEVycm9yKFwiSW52YWxpZCB2YWx1ZVwiLmNvbmNhdChrZXlUZXh0KS5jb25jYXQocGFyZW50VGV4dCwgXCIuIEV4cGVjdGVkIFwiKS5jb25jYXQocHJldHR5VHlwLCBcIiBidXQgZ290IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkodmFsKSkpO1xufVxuZnVuY3Rpb24gcHJldHR5VHlwZU5hbWUkMSh0eXApIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXApKSB7XG4gICAgICAgIGlmICh0eXAubGVuZ3RoID09PSAyICYmIHR5cFswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJhbiBvcHRpb25hbCBcIi5jb25jYXQocHJldHR5VHlwZU5hbWUkMSh0eXBbMV0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIm9uZSBvZiBbXCIuY29uY2F0KHR5cC5tYXAoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHByZXR0eVR5cGVOYW1lJDEoYSk7IH0pLmpvaW4oXCIsIFwiKSwgXCJdXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB0eXAgPT09IFwib2JqZWN0XCIgJiYgdHlwLmxpdGVyYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHlwLmxpdGVyYWw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHR5cDtcbiAgICB9XG59XG5mdW5jdGlvbiBqc29uVG9KU1Byb3BzJDEodHlwKSB7XG4gICAgaWYgKHR5cC5qc29uVG9KUyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBtYXBfMSA9IHt9O1xuICAgICAgICB0eXAucHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocCkgeyByZXR1cm4gbWFwXzFbcC5qc29uXSA9IHsga2V5OiBwLmpzLCB0eXA6IHAudHlwIH07IH0pO1xuICAgICAgICB0eXAuanNvblRvSlMgPSBtYXBfMTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cC5qc29uVG9KUztcbn1cbmZ1bmN0aW9uIGpzVG9KU09OUHJvcHMkMSh0eXApIHtcbiAgICBpZiAodHlwLmpzVG9KU09OID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1hcF8yID0ge307XG4gICAgICAgIHR5cC5wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBtYXBfMltwLmpzXSA9IHsga2V5OiBwLmpzb24sIHR5cDogcC50eXAgfTsgfSk7XG4gICAgICAgIHR5cC5qc1RvSlNPTiA9IG1hcF8yO1xuICAgIH1cbiAgICByZXR1cm4gdHlwLmpzVG9KU09OO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtJDEodmFsLCB0eXAsIGdldFByb3BzLCBrZXksIHBhcmVudCkge1xuICAgIGlmIChrZXkgPT09IHZvaWQgMCkgeyBrZXkgPSAnJzsgfVxuICAgIGlmIChwYXJlbnQgPT09IHZvaWQgMCkgeyBwYXJlbnQgPSAnJzsgfVxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVByaW1pdGl2ZSh0eXAsIHZhbCkge1xuICAgICAgICBpZiAodHlwZW9mIHR5cCA9PT0gdHlwZW9mIHZhbClcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUkMSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1Vbmlvbih0eXBzLCB2YWwpIHtcbiAgICAgICAgLy8gdmFsIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBvbmUgdHlwIGluIHR5cHNcbiAgICAgICAgdmFyIGwgPSB0eXBzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0eXBfMSA9IHR5cHNbaV07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm0kMSh2YWwsIHR5cF8xLCBnZXRQcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykgeyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZSQxKHR5cHMsIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1FbnVtKGNhc2VzLCB2YWwpIHtcbiAgICAgICAgaWYgKGNhc2VzLmluZGV4T2YodmFsKSAhPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlJDEoY2FzZXMubWFwKGZ1bmN0aW9uIChhKSB7IHJldHVybiBsJDEoYSk7IH0pLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQXJyYXkodHlwLCB2YWwpIHtcbiAgICAgICAgLy8gdmFsIG11c3QgYmUgYW4gYXJyYXkgd2l0aCBubyBpbnZhbGlkIGVsZW1lbnRzXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKVxuICAgICAgICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZSQxKGwkMShcImFycmF5XCIpLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICAgICAgcmV0dXJuIHZhbC5tYXAoZnVuY3Rpb24gKGVsKSB7IHJldHVybiB0cmFuc2Zvcm0kMShlbCwgdHlwLCBnZXRQcm9wcyk7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRlKHZhbCkge1xuICAgICAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgICAgIGlmIChpc05hTihkLnZhbHVlT2YoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUkMShsJDEoXCJEYXRlXCIpLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtT2JqZWN0KHByb3BzLCBhZGRpdGlvbmFsLCB2YWwpIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZSQxKGwkMShyZWYgfHwgXCJvYmplY3RcIiksIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgdmFyIHYgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsLCBrZXkpID8gdmFsW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXN1bHRbcHJvcC5rZXldID0gdHJhbnNmb3JtJDEodiwgcHJvcC50eXAsIGdldFByb3BzLCBrZXksIHJlZik7XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHRyYW5zZm9ybSQxKHZhbFtrZXldLCBhZGRpdGlvbmFsLCBnZXRQcm9wcywga2V5LCByZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaWYgKHR5cCA9PT0gXCJhbnlcIilcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICBpZiAodHlwID09PSBudWxsKSB7XG4gICAgICAgIGlmICh2YWwgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlJDEodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgaWYgKHR5cCA9PT0gZmFsc2UpXG4gICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUkMSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIHZhciByZWYgPSB1bmRlZmluZWQ7XG4gICAgd2hpbGUgKHR5cGVvZiB0eXAgPT09IFwib2JqZWN0XCIgJiYgdHlwLnJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlZiA9IHR5cC5yZWY7XG4gICAgICAgIHR5cCA9IHR5cGVNYXAkMVt0eXAucmVmXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUVudW0odHlwLCB2YWwpO1xuICAgIGlmICh0eXBlb2YgdHlwID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiB0eXAuaGFzT3duUHJvcGVydHkoXCJ1bmlvbk1lbWJlcnNcIikgPyB0cmFuc2Zvcm1Vbmlvbih0eXAudW5pb25NZW1iZXJzLCB2YWwpXG4gICAgICAgICAgICA6IHR5cC5oYXNPd25Qcm9wZXJ0eShcImFycmF5SXRlbXNcIikgPyB0cmFuc2Zvcm1BcnJheSh0eXAuYXJyYXlJdGVtcywgdmFsKVxuICAgICAgICAgICAgICAgIDogdHlwLmhhc093blByb3BlcnR5KFwicHJvcHNcIikgPyB0cmFuc2Zvcm1PYmplY3QoZ2V0UHJvcHModHlwKSwgdHlwLmFkZGl0aW9uYWwsIHZhbClcbiAgICAgICAgICAgICAgICAgICAgOiBpbnZhbGlkVmFsdWUkMSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIH1cbiAgICAvLyBOdW1iZXJzIGNhbiBiZSBwYXJzZWQgYnkgRGF0ZSBidXQgc2hvdWxkbid0IGJlLlxuICAgIGlmICh0eXAgPT09IERhdGUgJiYgdHlwZW9mIHZhbCAhPT0gXCJudW1iZXJcIilcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybURhdGUodmFsKTtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJpbWl0aXZlKHR5cCwgdmFsKTtcbn1cbmZ1bmN0aW9uIGNhc3QkMSh2YWwsIHR5cCkge1xuICAgIHJldHVybiB0cmFuc2Zvcm0kMSh2YWwsIHR5cCwganNvblRvSlNQcm9wcyQxKTtcbn1cbmZ1bmN0aW9uIHVuY2FzdCQxKHZhbCwgdHlwKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybSQxKHZhbCwgdHlwLCBqc1RvSlNPTlByb3BzJDEpO1xufVxuZnVuY3Rpb24gbCQxKHR5cCkge1xuICAgIHJldHVybiB7IGxpdGVyYWw6IHR5cCB9O1xufVxuZnVuY3Rpb24gYSQxKHR5cCkge1xuICAgIHJldHVybiB7IGFycmF5SXRlbXM6IHR5cCB9O1xufVxuZnVuY3Rpb24gdSQxKCkge1xuICAgIHZhciB0eXBzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdHlwc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4geyB1bmlvbk1lbWJlcnM6IHR5cHMgfTtcbn1cbmZ1bmN0aW9uIG8kMShwcm9wcywgYWRkaXRpb25hbCkge1xuICAgIHJldHVybiB7IHByb3BzOiBwcm9wcywgYWRkaXRpb25hbDogYWRkaXRpb25hbCB9O1xufVxuZnVuY3Rpb24gbSQxKGFkZGl0aW9uYWwpIHtcbiAgICByZXR1cm4geyBwcm9wczogW10sIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWwgfTtcbn1cbmZ1bmN0aW9uIHIkMShuYW1lKSB7XG4gICAgcmV0dXJuIHsgcmVmOiBuYW1lIH07XG59XG52YXIgdHlwZU1hcCQxID0ge1xuICAgIFwiQWdlbnRFcnJvclJlc3BvbnNlTWVzc2FnZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiQWdlbnRSZXNwb25zZU1ldGFkYXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJFcnJvclJlc3BvbnNlTWVzc2FnZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlJlc3BvbnNlTWVzc2FnZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJBZ2VudFJlc3BvbnNlTWV0YWRhdGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRXJyb3JSZXNwb25zZU1lc3NhZ2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkFnZW50UmVxdWVzdE1lc3NhZ2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkFnZW50UmVxdWVzdE1ldGFkYXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiBtJDEoXCJhbnlcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlJlcXVlc3RNZXNzYWdlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkFnZW50UmVxdWVzdE1ldGFkYXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkJyaWRnZVBhcnRpY2lwYW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIlNvdXJjZUlkZW50aWZpZXJcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkJyaWRnZVBhcnRpY2lwYW50SWRlbnRpZmllclwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50XCIsIGpzOiBcImRlc2t0b3BBZ2VudFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImFwcElkXCIsIGpzOiBcImFwcElkXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RhbmNlSWRcIiwganM6IFwiaW5zdGFuY2VJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJTb3VyY2VJZGVudGlmaWVyXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBJZFwiLCBqczogXCJhcHBJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJkZXNrdG9wQWdlbnRcIiwganM6IFwiZGVza3RvcEFnZW50XCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RhbmNlSWRcIiwganM6IFwiaW5zdGFuY2VJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJBZ2VudFJlc3BvbnNlTWVzc2FnZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiQWdlbnRSZXNwb25zZU1ldGFkYXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiBtJDEoXCJhbnlcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlJlc3BvbnNlTWVzc2FnZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJCcmlkZ2VFcnJvclJlc3BvbnNlTWVzc2FnZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiQnJpZGdlRXJyb3JSZXNwb25zZU1lc3NhZ2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJSZXNwb25zZUVycm9yTWVzc2FnZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IFwiXCIgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJCcmlkZ2VFcnJvclJlc3BvbnNlTWVzc2FnZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50XCIsIGpzOiBcImRlc2t0b3BBZ2VudFwiLCB0eXA6IFwiXCIgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlJlc3BvbnNlRXJyb3JNZXNzYWdlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQnJpZGdlUmVxdWVzdE1lc3NhZ2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkJyaWRnZVJlcXVlc3RNZXRhZGF0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogbSQxKFwiYW55XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQnJpZGdlUmVxdWVzdE1ldGFkYXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkJyaWRnZVBhcnRpY2lwYW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIkJyaWRnZVBhcnRpY2lwYW50SWRlbnRpZmllclwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJCcmlkZ2VSZXNwb25zZU1lc3NhZ2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkJyaWRnZVJlc3BvbnNlTWVzc2FnZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IG0kMShcImFueVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkJyaWRnZVJlc3BvbnNlTWVzc2FnZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJlcnJvclNvdXJjZXNcIiwganM6IFwiZXJyb3JTb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlc1wiLCBqczogXCJzb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJCcm9hZGNhc3RBZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkJyb2FkY2FzdEFnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkJyb2FkY2FzdEFnZW50UmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkJyb2FkY2FzdEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJCcm9hZGNhc3RBZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJTb3VyY2VPYmplY3RcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiU291cmNlT2JqZWN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBJZFwiLCBqczogXCJhcHBJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaW5zdGFuY2VJZFwiLCBqczogXCJpbnN0YW5jZUlkXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkJyb2FkY2FzdEFnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiByJDEoXCJDb250ZXh0RWxlbWVudFwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbnRleHRFbGVtZW50XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIG0kMShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJCcm9hZGNhc3RCcmlkZ2VSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJCcm9hZGNhc3RCcmlkZ2VSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiQnJvYWRjYXN0QnJpZGdlUmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkJyb2FkY2FzdEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJCcm9hZGNhc3RCcmlkZ2VSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiTWV0YVNvdXJjZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJNZXRhU291cmNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBJZFwiLCBqczogXCJhcHBJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQnJvYWRjYXN0QnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiByJDEoXCJDb250ZXh0RWxlbWVudFwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwTWVzc2FnZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXBNZXRhZGF0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogbSQxKFwiYW55XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJDb25uZWN0aW9uU3RlcE1lc3NhZ2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ29ubmVjdGlvblN0ZXBNZXRhZGF0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwMkhlbGxvXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJDb25uZWN0aW9uU3RlcDJIZWxsb01ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkNvbm5lY3Rpb25TdGVwMkhlbGxvUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXAySGVsbG9UeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ29ubmVjdGlvblN0ZXAySGVsbG9NZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwMkhlbGxvUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXV0aFJlcXVpcmVkXCIsIGpzOiBcImF1dGhSZXF1aXJlZFwiLCB0eXA6IHRydWUgfSxcbiAgICAgICAgeyBqc29uOiBcImF1dGhUb2tlblwiLCBqczogXCJhdXRoVG9rZW5cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50QnJpZGdlVmVyc2lvblwiLCBqczogXCJkZXNrdG9wQWdlbnRCcmlkZ2VWZXJzaW9uXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic3VwcG9ydGVkRkRDM1ZlcnNpb25zXCIsIGpzOiBcInN1cHBvcnRlZEZEQzNWZXJzaW9uc1wiLCB0eXA6IGEkMShcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcDNIYW5kc2hha2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhdXRoVG9rZW5cIiwganM6IFwiYXV0aFRva2VuXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxzU3RhdGVcIiwganM6IFwiY2hhbm5lbHNTdGF0ZVwiLCB0eXA6IG0kMShhJDEociQxKFwiQ29udGV4dEVsZW1lbnRcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwiaW1wbGVtZW50YXRpb25NZXRhZGF0YVwiLCBqczogXCJpbXBsZW1lbnRhdGlvbk1ldGFkYXRhXCIsIHR5cDogciQxKFwiQ29ubmVjdGluZ0FnZW50SW1wbGVtZW50YXRpb25NZXRhZGF0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdGVkTmFtZVwiLCBqczogXCJyZXF1ZXN0ZWROYW1lXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3RpbmdBZ2VudEltcGxlbWVudGF0aW9uTWV0YWRhdGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImZkYzNWZXJzaW9uXCIsIGpzOiBcImZkYzNWZXJzaW9uXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwib3B0aW9uYWxGZWF0dXJlc1wiLCBqczogXCJvcHRpb25hbEZlYXR1cmVzXCIsIHR5cDogciQxKFwiT3B0aW9uYWxGZWF0dXJlc1wiKSB9LFxuICAgICAgICB7IGpzb246IFwicHJvdmlkZXJcIiwganM6IFwicHJvdmlkZXJcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJwcm92aWRlclZlcnNpb25cIiwganM6IFwicHJvdmlkZXJWZXJzaW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcHRpb25hbEZlYXR1cmVzXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJEZXNrdG9wQWdlbnRCcmlkZ2luZ1wiLCBqczogXCJEZXNrdG9wQWdlbnRCcmlkZ2luZ1wiLCB0eXA6IHRydWUgfSxcbiAgICAgICAgeyBqc29uOiBcIk9yaWdpbmF0aW5nQXBwTWV0YWRhdGFcIiwganM6IFwiT3JpZ2luYXRpbmdBcHBNZXRhZGF0YVwiLCB0eXA6IHRydWUgfSxcbiAgICAgICAgeyBqc29uOiBcIlVzZXJDaGFubmVsTWVtYmVyc2hpcEFQSXNcIiwganM6IFwiVXNlckNoYW5uZWxNZW1iZXJzaGlwQVBJc1wiLCB0eXA6IHRydWUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcDRBdXRoZW50aWNhdGlvbkZhaWxlZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWRNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJDb25uZWN0aW9uU3RlcDRBdXRoZW50aWNhdGlvbkZhaWxlZFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkNvbm5lY3Rpb25TdGVwNEF1dGhlbnRpY2F0aW9uRmFpbGVkVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwNEF1dGhlbnRpY2F0aW9uRmFpbGVkTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcDRBdXRoZW50aWNhdGlvbkZhaWxlZFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1lc3NhZ2VcIiwganM6IFwibWVzc2FnZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJDb25uZWN0aW9uU3RlcDZDb25uZWN0ZWRBZ2VudHNVcGRhdGVNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJDb25uZWN0aW9uU3RlcDZDb25uZWN0ZWRBZ2VudHNVcGRhdGVQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJDb25uZWN0aW9uU3RlcDZDb25uZWN0ZWRBZ2VudHNVcGRhdGVUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcDZDb25uZWN0ZWRBZ2VudHNVcGRhdGVQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhZGRBZ2VudFwiLCBqczogXCJhZGRBZ2VudFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJhbGxBZ2VudHNcIiwganM6IFwiYWxsQWdlbnRzXCIsIHR5cDogYSQxKHIkMShcIkRlc2t0b3BBZ2VudEltcGxlbWVudGF0aW9uTWV0YWRhdGFcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsc1N0YXRlXCIsIGpzOiBcImNoYW5uZWxzU3RhdGVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBtJDEoYSQxKHIkMShcIkNvbnRleHRFbGVtZW50XCIpKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJyZW1vdmVBZ2VudFwiLCBqczogXCJyZW1vdmVBZ2VudFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRGVza3RvcEFnZW50SW1wbGVtZW50YXRpb25NZXRhZGF0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50XCIsIGpzOiBcImRlc2t0b3BBZ2VudFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImZkYzNWZXJzaW9uXCIsIGpzOiBcImZkYzNWZXJzaW9uXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwib3B0aW9uYWxGZWF0dXJlc1wiLCBqczogXCJvcHRpb25hbEZlYXR1cmVzXCIsIHR5cDogciQxKFwiT3B0aW9uYWxGZWF0dXJlc1wiKSB9LFxuICAgICAgICB7IGpzb246IFwicHJvdmlkZXJcIiwganM6IFwicHJvdmlkZXJcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJwcm92aWRlclZlcnNpb25cIiwganM6IFwicHJvdmlkZXJWZXJzaW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogciQxKFwiRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkRlc3RpbmF0aW9uT2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiU291cmNlSWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRGVzdGluYXRpb25PYmplY3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJhcHBJZFwiLCBqczogXCJhcHBJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiByJDEoXCJBcHBJZGVudGlmaWVyXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQXBwSWRlbnRpZmllclwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJkZXNrdG9wQWdlbnRcIiwganM6IFwiZGVza3RvcEFnZW50XCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RhbmNlSWRcIiwganM6IFwiaW5zdGFuY2VJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNBZ2VudFJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRlbnRpZmllcnNcIiwganM6IFwiYXBwSWRlbnRpZmllcnNcIiwgdHlwOiBhJDEociQxKFwiQXBwTWV0YWRhdGFcIikpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQXBwTWV0YWRhdGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcElkXCIsIGpzOiBcImFwcElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiZGVzY3JpcHRpb25cIiwganM6IFwiZGVzY3JpcHRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50XCIsIGpzOiBcImRlc2t0b3BBZ2VudFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpY29uc1wiLCBqczogXCJpY29uc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJJY29uXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RhbmNlSWRcIiwganM6IFwiaW5zdGFuY2VJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZU1ldGFkYXRhXCIsIGpzOiBcImluc3RhbmNlTWV0YWRhdGFcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBtJDEoXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwicmVzdWx0VHlwZVwiLCBqczogXCJyZXN1bHRUeXBlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgdSQxKG51bGwsIFwiXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwic2NyZWVuc2hvdHNcIiwganM6IFwic2NyZWVuc2hvdHNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiSW1hZ2VcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwidGl0bGVcIiwganM6IFwidGl0bGVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidG9vbHRpcFwiLCBqczogXCJ0b29sdGlwXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInZlcnNpb25cIiwganM6IFwidmVyc2lvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiSWNvblwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwic2l6ZVwiLCBqczogXCJzaXplXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInNyY1wiLCBqczogXCJzcmNcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkltYWdlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJsYWJlbFwiLCBqczogXCJsYWJlbFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJzaXplXCIsIGpzOiBcInNpemVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwic3JjXCIsIGpzOiBcInNyY1wiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0JyaWRnZUVycm9yUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0JyaWRnZUVycm9yUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JEZXRhaWxzXCIsIGpzOiBcImVycm9yRGV0YWlsc1wiLCB0eXA6IGEkMShyJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW5zdGFuY2VzQnJpZGdlRXJyb3JSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogciQxKFwiRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0JyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNCcmlkZ2VSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0JyaWRnZVJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNCcmlkZ2VSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJEZXN0aW5hdGlvbk9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VPYmplY3RcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiTWV0YVNvdXJjZU9iamVjdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50XCIsIGpzOiBcImRlc2t0b3BBZ2VudFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RhbmNlSWRcIiwganM6IFwiaW5zdGFuY2VJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiByJDEoXCJBcHBJZGVudGlmaWVyXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNCcmlkZ2VSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJlcnJvclNvdXJjZXNcIiwganM6IFwiZXJyb3JTb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlc1wiLCBqczogXCJzb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBJZGVudGlmaWVyc1wiLCBqczogXCJhcHBJZGVudGlmaWVyc1wiLCB0eXA6IGEkMShyJDEoXCJBcHBNZXRhZGF0YVwiKSkgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogciQxKFwiRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEFnZW50UmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEludGVudEFnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRBZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJTb3VyY2VJZGVudGlmaWVyXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiQnJpZGdlUGFydGljaXBhbnRJZGVudGlmaWVyXCIpKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRBZ2VudFJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJDb250ZXh0RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImludGVudFwiLCBqczogXCJpbnRlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXN1bHRUeXBlXCIsIGpzOiBcInJlc3VsdFR5cGVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRBZ2VudFJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QWdlbnRSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRBZ2VudFJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QWdlbnRSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEFnZW50UmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBJbnRlbnRcIiwganM6IFwiYXBwSW50ZW50XCIsIHR5cDogciQxKFwiQXBwSW50ZW50XCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQXBwSW50ZW50XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBzXCIsIGpzOiBcImFwcHNcIiwgdHlwOiBhJDEociQxKFwiQXBwTWV0YWRhdGFcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRcIiwganM6IFwiaW50ZW50XCIsIHR5cDogciQxKFwiSW50ZW50TWV0YWRhdGFcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJJbnRlbnRNZXRhZGF0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGlzcGxheU5hbWVcIiwganM6IFwiZGlzcGxheU5hbWVcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEJyaWRnZUVycm9yUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEludGVudEJyaWRnZUVycm9yUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JEZXRhaWxzXCIsIGpzOiBcImVycm9yRGV0YWlsc1wiLCB0eXA6IGEkMShyJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogciQxKFwiRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEJyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEludGVudEJyaWRnZVJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRCcmlkZ2VSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiQnJpZGdlUGFydGljaXBhbnRJZGVudGlmaWVyXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJCcmlkZ2VQYXJ0aWNpcGFudElkZW50aWZpZXJcIikpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEJyaWRnZVJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJDb250ZXh0RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImludGVudFwiLCBqczogXCJpbnRlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXN1bHRUeXBlXCIsIGpzOiBcInJlc3VsdFR5cGVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEludGVudEJyaWRnZVJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEludGVudEJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QnJpZGdlUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvckRldGFpbHNcIiwganM6IFwiZXJyb3JEZXRhaWxzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZXNcIiwganM6IFwic291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSW50ZW50XCIsIGpzOiBcImFwcEludGVudFwiLCB0eXA6IHIkMShcIkFwcEludGVudFwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudEVycm9yUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJFcnJvck1lc3NhZ2VcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiU291cmNlT2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiQnJpZGdlUGFydGljaXBhbnRJZGVudGlmaWVyXCIpKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogciQxKFwiQ29udGV4dEVsZW1lbnRcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSW50ZW50c1wiLCBqczogXCJhcHBJbnRlbnRzXCIsIHR5cDogYSQxKHIkMShcIkFwcEludGVudFwiKSkgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlRXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJFcnJvck1lc3NhZ2VcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkJyaWRnZVBhcnRpY2lwYW50SWRlbnRpZmllclwiKSkgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiByJDEoXCJDb250ZXh0RWxlbWVudFwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJlcnJvclNvdXJjZXNcIiwganM6IFwiZXJyb3JTb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlc1wiLCBqczogXCJzb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSW50ZW50c1wiLCBqczogXCJhcHBJbnRlbnRzXCIsIHR5cDogYSQxKHIkMShcIkFwcEludGVudFwiKSkgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogciQxKFwiRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiRGVzdGluYXRpb25PYmplY3RcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJTb3VyY2VJZGVudGlmaWVyXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiByJDEoXCJBcHBEZXN0aW5hdGlvbklkZW50aWZpZXJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJBcHBEZXN0aW5hdGlvbklkZW50aWZpZXJcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJhcHBJZFwiLCBqczogXCJhcHBJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RhbmNlSWRcIiwganM6IFwiaW5zdGFuY2VJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwTWV0YWRhdGFcIiwganM6IFwiYXBwTWV0YWRhdGFcIiwgdHlwOiByJDEoXCJBcHBNZXRhZGF0YVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JEZXRhaWxzXCIsIGpzOiBcImVycm9yRGV0YWlsc1wiLCB0eXA6IGEkMShyJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUJyaWRnZUVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIkVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQnJpZGdlUmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJEZXN0aW5hdGlvbk9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VPYmplY3RcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwXCIsIGpzOiBcImFwcFwiLCB0eXA6IHIkMShcIkFwcERlc3RpbmF0aW9uSWRlbnRpZmllclwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQnJpZGdlUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQnJpZGdlUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJHZXRBcHBNZXRhZGF0YUJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJlcnJvclNvdXJjZXNcIiwganM6IFwiZXJyb3JTb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlc1wiLCBqczogXCJzb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwTWV0YWRhdGFcIiwganM6IFwiYXBwTWV0YWRhdGFcIiwgdHlwOiByJDEoXCJBcHBNZXRhZGF0YVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5BZ2VudEVycm9yUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIk9wZW5BZ2VudEVycm9yUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJPcGVuQWdlbnRFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiT3BlbkFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQWdlbnRFcnJvclJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQWdlbnRFcnJvclJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJPcGVuRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkFnZW50UmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiT3BlbkFnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIk9wZW5BZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJPcGVuQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5BZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkRlc3RpbmF0aW9uT2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiU291cmNlT2JqZWN0XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5BZ2VudFJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBcIiwganM6IFwiYXBwXCIsIHR5cDogciQxKFwiQXBwVG9PcGVuXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJDb250ZXh0RWxlbWVudFwiKSkgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJBcHBUb09wZW5cIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJhcHBJZFwiLCBqczogXCJhcHBJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RhbmNlSWRcIiwganM6IFwiaW5zdGFuY2VJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJPcGVuQWdlbnRSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiT3BlbkFnZW50UmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJPcGVuQWdlbnRSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIk9wZW5BZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkFnZW50UmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5BZ2VudFJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRlbnRpZmllclwiLCBqczogXCJhcHBJZGVudGlmaWVyXCIsIHR5cDogciQxKFwiQXBwSWRlbnRpZmllclwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5CcmlkZ2VFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJPcGVuQnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIk9wZW5CcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiT3BlbkFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkJyaWRnZUVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIk9wZW5FcnJvck1lc3NhZ2VcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQnJpZGdlUmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiT3BlbkJyaWRnZVJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJPcGVuQnJpZGdlUmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIk9wZW5BZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkJyaWRnZVJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkRlc3RpbmF0aW9uT2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiTWV0YVNvdXJjZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiByJDEoXCJBcHBUb09wZW5cIikgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkNvbnRleHRFbGVtZW50XCIpKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5CcmlkZ2VSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiT3BlbkJyaWRnZVJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiT3BlbkJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiT3BlbkFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQnJpZGdlUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvckRldGFpbHNcIiwganM6IFwiZXJyb3JEZXRhaWxzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZXNcIiwganM6IFwic291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRlbnRpZmllclwiLCBqczogXCJhcHBJZGVudGlmaWVyXCIsIHR5cDogciQxKFwiQXBwSWRlbnRpZmllclwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEFnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIk1ldGFEZXN0aW5hdGlvblwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIlNvdXJjZU9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiTWV0YURlc3RpbmF0aW9uXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXNrdG9wQWdlbnRcIiwganM6IFwiZGVza3RvcEFnZW50XCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsSWRcIiwganM6IFwiY2hhbm5lbElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogciQxKFwiQ29udGV4dEVsZW1lbnRcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QnJpZGdlUmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiTWV0YVNvdXJjZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsSWRcIiwganM6IFwiY2hhbm5lbElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogciQxKFwiQ29udGV4dEVsZW1lbnRcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRBZ2VudFJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJNZXRhRGVzdGluYXRpb25cIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJTb3VyY2VPYmplY3RcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY2hhbm5lbElkXCIsIGpzOiBcImNoYW5uZWxJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImxpc3RlbmVyVHlwZVwiLCBqczogXCJsaXN0ZW5lclR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJUeXBlc1wiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRCcmlkZ2VSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRCcmlkZ2VSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJNZXRhRGVzdGluYXRpb25cIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJNZXRhU291cmNlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJsaXN0ZW5lclR5cGVcIiwganM6IFwibGlzdGVuZXJUeXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyVHlwZXNcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiU291cmNlT2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY2hhbm5lbElkXCIsIGpzOiBcImNoYW5uZWxJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImxpc3RlbmVyVHlwZVwiLCBqczogXCJsaXN0ZW5lclR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJUeXBlc1wiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRCcmlkZ2VSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiTWV0YVNvdXJjZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJsaXN0ZW5lclR5cGVcIiwganM6IFwibGlzdGVuZXJUeXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyVHlwZXNcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiU291cmNlT2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY2hhbm5lbElkXCIsIGpzOiBcImNoYW5uZWxJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRUeXBlXCIsIGpzOiBcImNvbnRleHRUeXBlXCIsIHR5cDogdSQxKG51bGwsIFwiXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckJyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckJyaWRnZVJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJNZXRhRGVzdGluYXRpb25cIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJNZXRhU291cmNlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY2hhbm5lbElkXCIsIGpzOiBcImNoYW5uZWxJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRUeXBlXCIsIGpzOiBcImNvbnRleHRUeXBlXCIsIHR5cDogdSQxKG51bGwsIFwiXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QWdlbnRSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiU291cmNlT2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEJyaWRnZVJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEJyaWRnZVJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEJyaWRnZVJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIk1ldGFEZXN0aW5hdGlvblwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY2hhbm5lbElkXCIsIGpzOiBcImNoYW5uZWxJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUFnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUFnZW50UmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIk1ldGFEZXN0aW5hdGlvblwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIlNvdXJjZU9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY2hhbm5lbElkXCIsIGpzOiBcImNoYW5uZWxJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRUeXBlXCIsIGpzOiBcImNvbnRleHRUeXBlXCIsIHR5cDogdSQxKG51bGwsIFwiXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQnJpZGdlUmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRVJlcXVlc3RNZXRhZGF0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQnJpZGdlUmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJFUmVxdWVzdE1ldGFkYXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIk1ldGFEZXN0aW5hdGlvblwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0VHlwZVwiLCBqczogXCJjb250ZXh0VHlwZVwiLCB0eXA6IHUkMShudWxsLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJFcnJvck1lc3NhZ2VcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEFnZW50UmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudEFnZW50UmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QWdlbnRSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiByJDEoXCJNZXRhRGVzdGluYXRpb25cIikgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIlNvdXJjZU9iamVjdFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEFnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiByJDEoXCJBcHBEZXN0aW5hdGlvbklkZW50aWZpZXJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHIkMShcIkNvbnRleHRFbGVtZW50XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRcIiwganM6IFwiaW50ZW50XCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QWdlbnRSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudFJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudFJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRBZ2VudFJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEFnZW50UmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRSZXNvbHV0aW9uXCIsIGpzOiBcImludGVudFJlc29sdXRpb25cIiwgdHlwOiByJDEoXCJJbnRlbnRSZXNvbHV0aW9uXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiSW50ZW50UmVzb2x1dGlvblwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiaW50ZW50XCIsIGpzOiBcImludGVudFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJBcHBJZGVudGlmaWVyXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ2ZXJzaW9uXCIsIGpzOiBcInZlcnNpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JEZXRhaWxzXCIsIGpzOiBcImVycm9yRGV0YWlsc1wiLCB0eXA6IGEkMShyJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEJyaWRnZUVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIkVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRCcmlkZ2VSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRCcmlkZ2VSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiByJDEoXCJNZXRhRGVzdGluYXRpb25cIikgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwXCIsIGpzOiBcImFwcFwiLCB0eXA6IHIkMShcIkFwcERlc3RpbmF0aW9uSWRlbnRpZmllclwiKSB9LFxuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogciQxKFwiQ29udGV4dEVsZW1lbnRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImludGVudFwiLCBqczogXCJpbnRlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRCcmlkZ2VSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRCcmlkZ2VSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEJyaWRnZVJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JEZXRhaWxzXCIsIGpzOiBcImVycm9yRGV0YWlsc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VzXCIsIGpzOiBcInNvdXJjZXNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRSZXNvbHV0aW9uXCIsIGpzOiBcImludGVudFJlc29sdXRpb25cIiwgdHlwOiByJDEoXCJJbnRlbnRSZXNvbHV0aW9uXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudFJlc3VsdEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudFJlc3VsdEFnZW50RXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50UmVzdWx0RXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudFJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudFJlc3VsdEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImludGVudFJlc3VsdFwiLCBqczogXCJpbnRlbnRSZXN1bHRcIiwgdHlwOiByJDEoXCJJbnRlbnRSZXN1bHRcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJJbnRlbnRSZXN1bHRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkNvbnRleHRFbGVtZW50XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiY2hhbm5lbFwiLCBqczogXCJjaGFubmVsXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiQ2hhbm5lbFwiKSkgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDaGFubmVsXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkaXNwbGF5TWV0YWRhdGFcIiwganM6IFwiZGlzcGxheU1ldGFkYXRhXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiRGlzcGxheU1ldGFkYXRhXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRGlzcGxheU1ldGFkYXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjb2xvclwiLCBqczogXCJjb2xvclwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJnbHlwaFwiLCBqczogXCJnbHlwaFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VFcnJvclJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JEZXRhaWxzXCIsIGpzOiBcImVycm9yRGV0YWlsc1wiLCB0eXA6IGEkMShyJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudFJlc3VsdEJyaWRnZUVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50UmVzdWx0RXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudFJlc3VsdEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudFJlc3VsdEJyaWRnZVJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JEZXRhaWxzXCIsIGpzOiBcImVycm9yRGV0YWlsc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VzXCIsIGpzOiBcInNvdXJjZXNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRSZXN1bHRcIiwganM6IFwiaW50ZW50UmVzdWx0XCIsIHR5cDogciQxKFwiSW50ZW50UmVzdWx0XCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ29udGV4dFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBtJDEoXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiUmVzcG9uc2VFcnJvckRldGFpbFwiOiBbXG4gICAgICAgIFwiQWNjZXNzRGVuaWVkXCIsXG4gICAgICAgIFwiQWdlbnREaXNjb25uZWN0ZWRcIixcbiAgICAgICAgXCJBcHBOb3RGb3VuZFwiLFxuICAgICAgICBcIkFwcFRpbWVvdXRcIixcbiAgICAgICAgXCJDcmVhdGlvbkZhaWxlZFwiLFxuICAgICAgICBcIkRlc2t0b3BBZ2VudE5vdEZvdW5kXCIsXG4gICAgICAgIFwiRXJyb3JPbkxhdW5jaFwiLFxuICAgICAgICBcIkludGVudERlbGl2ZXJ5RmFpbGVkXCIsXG4gICAgICAgIFwiSW50ZW50SGFuZGxlclJlamVjdGVkXCIsXG4gICAgICAgIFwiTWFsZm9ybWVkQ29udGV4dFwiLFxuICAgICAgICBcIk1hbGZvcm1lZE1lc3NhZ2VcIixcbiAgICAgICAgXCJOb0FwcHNGb3VuZFwiLFxuICAgICAgICBcIk5vQ2hhbm5lbEZvdW5kXCIsXG4gICAgICAgIFwiTm9SZXN1bHRSZXR1cm5lZFwiLFxuICAgICAgICBcIk5vdENvbm5lY3RlZFRvQnJpZGdlXCIsXG4gICAgICAgIFwiUmVzb2x2ZXJUaW1lb3V0XCIsXG4gICAgICAgIFwiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiLFxuICAgICAgICBcIlJlc3BvbnNlVG9CcmlkZ2VUaW1lZE91dFwiLFxuICAgICAgICBcIlRhcmdldEFwcFVuYXZhaWxhYmxlXCIsXG4gICAgICAgIFwiVGFyZ2V0SW5zdGFuY2VVbmF2YWlsYWJsZVwiLFxuICAgICAgICBcIlVzZXJDYW5jZWxsZWRSZXNvbHV0aW9uXCIsXG4gICAgXSxcbiAgICBcIlJlc3BvbnNlTWVzc2FnZVR5cGVcIjogW1xuICAgICAgICBcImZpbmRJbnN0YW5jZXNSZXNwb25zZVwiLFxuICAgICAgICBcImZpbmRJbnRlbnRSZXNwb25zZVwiLFxuICAgICAgICBcImZpbmRJbnRlbnRzQnlDb250ZXh0UmVzcG9uc2VcIixcbiAgICAgICAgXCJnZXRBcHBNZXRhZGF0YVJlc3BvbnNlXCIsXG4gICAgICAgIFwib3BlblJlc3BvbnNlXCIsXG4gICAgICAgIFwicmFpc2VJbnRlbnRSZXNwb25zZVwiLFxuICAgICAgICBcInJhaXNlSW50ZW50UmVzdWx0UmVzcG9uc2VcIixcbiAgICBdLFxuICAgIFwiUmVxdWVzdE1lc3NhZ2VUeXBlXCI6IFtcbiAgICAgICAgXCJicm9hZGNhc3RSZXF1ZXN0XCIsXG4gICAgICAgIFwiZmluZEluc3RhbmNlc1JlcXVlc3RcIixcbiAgICAgICAgXCJmaW5kSW50ZW50UmVxdWVzdFwiLFxuICAgICAgICBcImZpbmRJbnRlbnRzQnlDb250ZXh0UmVxdWVzdFwiLFxuICAgICAgICBcImdldEFwcE1ldGFkYXRhUmVxdWVzdFwiLFxuICAgICAgICBcIm9wZW5SZXF1ZXN0XCIsXG4gICAgICAgIFwiUHJpdmF0ZUNoYW5uZWwuYnJvYWRjYXN0XCIsXG4gICAgICAgIFwiUHJpdmF0ZUNoYW5uZWwuZXZlbnRMaXN0ZW5lckFkZGVkXCIsXG4gICAgICAgIFwiUHJpdmF0ZUNoYW5uZWwuZXZlbnRMaXN0ZW5lclJlbW92ZWRcIixcbiAgICAgICAgXCJQcml2YXRlQ2hhbm5lbC5vbkFkZENvbnRleHRMaXN0ZW5lclwiLFxuICAgICAgICBcIlByaXZhdGVDaGFubmVsLm9uRGlzY29ubmVjdFwiLFxuICAgICAgICBcIlByaXZhdGVDaGFubmVsLm9uVW5zdWJzY3JpYmVcIixcbiAgICAgICAgXCJyYWlzZUludGVudFJlcXVlc3RcIixcbiAgICBdLFxuICAgIFwiQnJvYWRjYXN0QWdlbnRSZXF1ZXN0VHlwZVwiOiBbXG4gICAgICAgIFwiYnJvYWRjYXN0UmVxdWVzdFwiLFxuICAgIF0sXG4gICAgXCJDb25uZWN0aW9uU3RlcE1lc3NhZ2VUeXBlXCI6IFtcbiAgICAgICAgXCJhdXRoZW50aWNhdGlvbkZhaWxlZFwiLFxuICAgICAgICBcImNvbm5lY3RlZEFnZW50c1VwZGF0ZVwiLFxuICAgICAgICBcImhhbmRzaGFrZVwiLFxuICAgICAgICBcImhlbGxvXCIsXG4gICAgXSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwMkhlbGxvVHlwZVwiOiBbXG4gICAgICAgIFwiaGVsbG9cIixcbiAgICBdLFxuICAgIFwiQ29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlVHlwZVwiOiBbXG4gICAgICAgIFwiaGFuZHNoYWtlXCIsXG4gICAgXSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwNEF1dGhlbnRpY2F0aW9uRmFpbGVkVHlwZVwiOiBbXG4gICAgICAgIFwiYXV0aGVudGljYXRpb25GYWlsZWRcIixcbiAgICBdLFxuICAgIFwiQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlVHlwZVwiOiBbXG4gICAgICAgIFwiY29ubmVjdGVkQWdlbnRzVXBkYXRlXCIsXG4gICAgXSxcbiAgICBcIkVycm9yTWVzc2FnZVwiOiBbXG4gICAgICAgIFwiQWdlbnREaXNjb25uZWN0ZWRcIixcbiAgICAgICAgXCJEZXNrdG9wQWdlbnROb3RGb3VuZFwiLFxuICAgICAgICBcIkludGVudERlbGl2ZXJ5RmFpbGVkXCIsXG4gICAgICAgIFwiTWFsZm9ybWVkQ29udGV4dFwiLFxuICAgICAgICBcIk1hbGZvcm1lZE1lc3NhZ2VcIixcbiAgICAgICAgXCJOb0FwcHNGb3VuZFwiLFxuICAgICAgICBcIk5vdENvbm5lY3RlZFRvQnJpZGdlXCIsXG4gICAgICAgIFwiUmVzb2x2ZXJUaW1lb3V0XCIsXG4gICAgICAgIFwiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiLFxuICAgICAgICBcIlJlc3BvbnNlVG9CcmlkZ2VUaW1lZE91dFwiLFxuICAgICAgICBcIlRhcmdldEFwcFVuYXZhaWxhYmxlXCIsXG4gICAgICAgIFwiVGFyZ2V0SW5zdGFuY2VVbmF2YWlsYWJsZVwiLFxuICAgICAgICBcIlVzZXJDYW5jZWxsZWRSZXNvbHV0aW9uXCIsXG4gICAgXSxcbiAgICBcIkZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCI6IFtcbiAgICAgICAgXCJmaW5kSW5zdGFuY2VzUmVzcG9uc2VcIixcbiAgICBdLFxuICAgIFwiRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdFR5cGVcIjogW1xuICAgICAgICBcImZpbmRJbnN0YW5jZXNSZXF1ZXN0XCIsXG4gICAgXSxcbiAgICBcIkZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCI6IFtcbiAgICAgICAgXCJmaW5kSW50ZW50UmVzcG9uc2VcIixcbiAgICBdLFxuICAgIFwiRmluZEludGVudEFnZW50UmVxdWVzdFR5cGVcIjogW1xuICAgICAgICBcImZpbmRJbnRlbnRSZXF1ZXN0XCIsXG4gICAgXSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiOiBbXG4gICAgICAgIFwiZmluZEludGVudHNCeUNvbnRleHRSZXNwb25zZVwiLFxuICAgIF0sXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdFR5cGVcIjogW1xuICAgICAgICBcImZpbmRJbnRlbnRzQnlDb250ZXh0UmVxdWVzdFwiLFxuICAgIF0sXG4gICAgXCJHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZVR5cGVcIjogW1xuICAgICAgICBcImdldEFwcE1ldGFkYXRhUmVzcG9uc2VcIixcbiAgICBdLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3RUeXBlXCI6IFtcbiAgICAgICAgXCJnZXRBcHBNZXRhZGF0YVJlcXVlc3RcIixcbiAgICBdLFxuICAgIFwiT3BlbkVycm9yTWVzc2FnZVwiOiBbXG4gICAgICAgIFwiQWdlbnREaXNjb25uZWN0ZWRcIixcbiAgICAgICAgXCJBcHBOb3RGb3VuZFwiLFxuICAgICAgICBcIkFwcFRpbWVvdXRcIixcbiAgICAgICAgXCJEZXNrdG9wQWdlbnROb3RGb3VuZFwiLFxuICAgICAgICBcIkVycm9yT25MYXVuY2hcIixcbiAgICAgICAgXCJNYWxmb3JtZWRDb250ZXh0XCIsXG4gICAgICAgIFwiTWFsZm9ybWVkTWVzc2FnZVwiLFxuICAgICAgICBcIk5vdENvbm5lY3RlZFRvQnJpZGdlXCIsXG4gICAgICAgIFwiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiLFxuICAgICAgICBcIlJlc3BvbnNlVG9CcmlkZ2VUaW1lZE91dFwiLFxuICAgIF0sXG4gICAgXCJPcGVuQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiOiBbXG4gICAgICAgIFwib3BlblJlc3BvbnNlXCIsXG4gICAgXSxcbiAgICBcIk9wZW5BZ2VudFJlcXVlc3RUeXBlXCI6IFtcbiAgICAgICAgXCJvcGVuUmVxdWVzdFwiLFxuICAgIF0sXG4gICAgXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEFnZW50UmVxdWVzdFR5cGVcIjogW1xuICAgICAgICBcIlByaXZhdGVDaGFubmVsLmJyb2FkY2FzdFwiLFxuICAgIF0sXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJUeXBlc1wiOiBbXG4gICAgICAgIFwib25BZGRDb250ZXh0TGlzdGVuZXJcIixcbiAgICAgICAgXCJvbkRpc2Nvbm5lY3RcIixcbiAgICAgICAgXCJvblVuc3Vic2NyaWJlXCIsXG4gICAgXSxcbiAgICBcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0VHlwZVwiOiBbXG4gICAgICAgIFwiUHJpdmF0ZUNoYW5uZWwuZXZlbnRMaXN0ZW5lckFkZGVkXCIsXG4gICAgXSxcbiAgICBcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3RUeXBlXCI6IFtcbiAgICAgICAgXCJQcml2YXRlQ2hhbm5lbC5ldmVudExpc3RlbmVyUmVtb3ZlZFwiLFxuICAgIF0sXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0VHlwZVwiOiBbXG4gICAgICAgIFwiUHJpdmF0ZUNoYW5uZWwub25BZGRDb250ZXh0TGlzdGVuZXJcIixcbiAgICBdLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3RUeXBlXCI6IFtcbiAgICAgICAgXCJQcml2YXRlQ2hhbm5lbC5vbkRpc2Nvbm5lY3RcIixcbiAgICBdLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0VHlwZVwiOiBbXG4gICAgICAgIFwiUHJpdmF0ZUNoYW5uZWwub25VbnN1YnNjcmliZVwiLFxuICAgIF0sXG4gICAgXCJSYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIjogW1xuICAgICAgICBcInJhaXNlSW50ZW50UmVzcG9uc2VcIixcbiAgICBdLFxuICAgIFwiUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3RUeXBlXCI6IFtcbiAgICAgICAgXCJyYWlzZUludGVudFJlcXVlc3RcIixcbiAgICBdLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRFcnJvck1lc3NhZ2VcIjogW1xuICAgICAgICBcIkFnZW50RGlzY29ubmVjdGVkXCIsXG4gICAgICAgIFwiSW50ZW50SGFuZGxlclJlamVjdGVkXCIsXG4gICAgICAgIFwiTWFsZm9ybWVkTWVzc2FnZVwiLFxuICAgICAgICBcIk5vUmVzdWx0UmV0dXJuZWRcIixcbiAgICAgICAgXCJOb3RDb25uZWN0ZWRUb0JyaWRnZVwiLFxuICAgICAgICBcIlJlc3BvbnNlVG9CcmlkZ2VUaW1lZE91dFwiLFxuICAgIF0sXG4gICAgXCJSYWlzZUludGVudFJlc3VsdEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIjogW1xuICAgICAgICBcInJhaXNlSW50ZW50UmVzdWx0UmVzcG9uc2VcIixcbiAgICBdLFxuICAgIFwiVHlwZVwiOiBbXG4gICAgICAgIFwiYXBwXCIsXG4gICAgICAgIFwicHJpdmF0ZVwiLFxuICAgICAgICBcInVzZXJcIixcbiAgICBdXG59O1xuXG52YXIgQnJpZGdpbmdUeXBlcyA9IHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgQ29udmVydDogQ29udmVydCQxXG59O1xuXG4vKipcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKiBDb3B5cmlnaHQgRklOT1MgRkRDMyBjb250cmlidXRvcnMgLSBzZWUgTk9USUNFIGZpbGVcbiAqL1xuLyoqIENvbnN0YW50cyByZXByZXNlbnRpbmcgdGhlIGVycm9ycyB0aGF0IGNhbiBiZSBlbmNvdW50ZXJlZCB3aGVuIGNhbGxpbmcgdGhlIGBvcGVuYCBtZXRob2Qgb24gdGhlIERlc2t0b3BBZ2VudCBvYmplY3QgKGBmZGMzYCkuICovXG52YXIgT3BlbkVycm9yO1xuKGZ1bmN0aW9uIChPcGVuRXJyb3IpIHtcbiAgICAvKiogUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBhcHBsaWNhdGlvbiBpcyBub3QgZm91bmQuKi9cbiAgICBPcGVuRXJyb3JbXCJBcHBOb3RGb3VuZFwiXSA9IFwiQXBwTm90Rm91bmRcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBhcHBsaWNhdGlvbiBmYWlscyB0byBsYXVuY2ggY29ycmVjdGx5LiovXG4gICAgT3BlbkVycm9yW1wiRXJyb3JPbkxhdW5jaFwiXSA9IFwiRXJyb3JPbkxhdW5jaFwiO1xuICAgIC8qKiBSZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGFwcGxpY2F0aW9uIGxhdW5jaGVzIGJ1dCBmYWlscyB0byBhZGQgYSBjb250ZXh0IGxpc3RlbmVyIGluIG9yZGVyIHRvIHJlY2VpdmUgdGhlIGNvbnRleHQgcGFzc2VkIHRvIHRoZSBgZmRjMy5vcGVuYCBjYWxsLiovXG4gICAgT3BlbkVycm9yW1wiQXBwVGltZW91dFwiXSA9IFwiQXBwVGltZW91dFwiO1xuICAgIC8qKiBSZXR1cm5lZCBpZiB0aGUgRkRDMyBkZXNrdG9wIGFnZW50IGltcGxlbWVudGF0aW9uIGlzIG5vdCBjdXJyZW50bHkgYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuKi9cbiAgICBPcGVuRXJyb3JbXCJSZXNvbHZlclVuYXZhaWxhYmxlXCJdID0gXCJSZXNvbHZlclVuYXZhaWxhYmxlXCI7XG4gICAgLyoqIFJldHVybmVkIGlmIGEgY2FsbCB0byB0aGUgYG9wZW5gIGZ1bmN0aW9uIGlzIG1hZGUgd2l0aCBhbiBpbnZhbGlkIGNvbnRleHQgYXJndW1lbnQuIENvbnRleHRzIHNob3VsZCBiZSBPYmplY3RzIHdpdGggYXQgbGVhc3QgYSBgdHlwZWAgZmllbGQgdGhhdCBoYXMgYSBgc3RyaW5nYCB2YWx1ZS4qL1xuICAgIE9wZW5FcnJvcltcIk1hbGZvcm1lZENvbnRleHRcIl0gPSBcIk1hbGZvcm1lZENvbnRleHRcIjtcbiAgICAvKiogQGV4cGVyaW1lbnRhbCBSZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIERlc2t0b3AgQWdlbnQgaXMgbm90IGZvdW5kLCB2aWEgYSBjb25uZWN0ZWQgRGVza3RvcCBBZ2VudCBCcmlkZ2UuKi9cbiAgICBPcGVuRXJyb3JbXCJEZXNrdG9wQWdlbnROb3RGb3VuZFwiXSA9IFwiRGVza3RvcEFnZW50Tm90Rm91bmRcIjtcbn0pKE9wZW5FcnJvciB8fCAoT3BlbkVycm9yID0ge30pKTtcbi8qKiBDb25zdGFudHMgcmVwcmVzZW50aW5nIHRoZSBlcnJvcnMgdGhhdCBjYW4gYmUgZW5jb3VudGVyZWQgd2hlbiBjYWxsaW5nIHRoZSBgZmluZEludGVudGAsIGBmaW5kSW50ZW50c0J5Q29udGV4dGAsIGByYWlzZUludGVudGAgb3IgYHJhaXNlSW50ZW50Rm9yQ29udGV4dGAgbWV0aG9kcyBvbiB0aGUgRGVza3RvcEFnZW50IChgZmRjM2ApLiAqL1xudmFyIFJlc29sdmVFcnJvcjtcbihmdW5jdGlvbiAoUmVzb2x2ZUVycm9yKSB7XG4gICAgLyoqIFNIT1VMRCBiZSByZXR1cm5lZCBpZiBubyBhcHBzIGFyZSBhdmFpbGFibGUgdGhhdCBjYW4gcmVzb2x2ZSB0aGUgaW50ZW50IGFuZCBjb250ZXh0IGNvbWJpbmF0aW9uLiovXG4gICAgUmVzb2x2ZUVycm9yW1wiTm9BcHBzRm91bmRcIl0gPSBcIk5vQXBwc0ZvdW5kXCI7XG4gICAgLyoqIFJldHVybmVkIGlmIHRoZSBGREMzIGRlc2t0b3AgYWdlbnQgaW1wbGVtZW50YXRpb24gaXMgbm90IGN1cnJlbnRseSBhYmxlIHRvIGhhbmRsZSB0aGUgcmVxdWVzdC4qL1xuICAgIFJlc29sdmVFcnJvcltcIlJlc29sdmVyVW5hdmFpbGFibGVcIl0gPSBcIlJlc29sdmVyVW5hdmFpbGFibGVcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgdGhlIHVzZXIgY2FuY2VsbGVkIHRoZSByZXNvbHV0aW9uIHJlcXVlc3QsIGZvciBleGFtcGxlIGJ5IGNsb3Npbmcgb3IgY2FuY2VsbGluZyBhIHJlc29sdmVyIFVJLiovXG4gICAgUmVzb2x2ZUVycm9yW1wiVXNlckNhbmNlbGxlZFwiXSA9IFwiVXNlckNhbmNlbGxlZFJlc29sdXRpb25cIjtcbiAgICAvKiogU0hPVUxEIGJlIHJldHVybmVkIGlmIGEgdGltZW91dCBjYW5jZWxzIGFuIGludGVudCByZXNvbHV0aW9uIHRoYXQgcmVxdWlyZWQgdXNlciBpbnRlcmFjdGlvbi4gUGxlYXNlIHVzZSBgUmVzb2x2ZXJVbmF2YWlsYWJsZWAgaW5zdGVhZCBmb3Igc2l0dWF0aW9ucyB3aGVyZSBhIHJlc29sdmVyIFVJIG9yIHNpbWlsYXIgZmFpbHMuKi9cbiAgICBSZXNvbHZlRXJyb3JbXCJSZXNvbHZlclRpbWVvdXRcIl0gPSBcIlJlc29sdmVyVGltZW91dFwiO1xuICAgIC8qKiBSZXR1cm5lZCBpZiBhIHNwZWNpZmllZCB0YXJnZXQgYXBwbGljYXRpb24gaXMgbm90IGF2YWlsYWJsZSBvciBhIG5ldyBpbnN0YW5jZSBvZiBpdCBjYW5ub3QgYmUgb3BlbmVkLiAqL1xuICAgIFJlc29sdmVFcnJvcltcIlRhcmdldEFwcFVuYXZhaWxhYmxlXCJdID0gXCJUYXJnZXRBcHBVbmF2YWlsYWJsZVwiO1xuICAgIC8qKiBSZXR1cm5lZCBpZiBhIHNwZWNpZmllZCB0YXJnZXQgYXBwbGljYXRpb24gaW5zdGFuY2UgaXMgbm90IGF2YWlsYWJsZSwgZm9yIGV4YW1wbGUgYmVjYXVzZSBpdCBoYXMgYmVlbiBjbG9zZWQuICovXG4gICAgUmVzb2x2ZUVycm9yW1wiVGFyZ2V0SW5zdGFuY2VVbmF2YWlsYWJsZVwiXSA9IFwiVGFyZ2V0SW5zdGFuY2VVbmF2YWlsYWJsZVwiO1xuICAgIC8qKiBSZXR1cm5lZCBpZiB0aGUgaW50ZW50IGFuZCBjb250ZXh0IGNvdWxkIG5vdCBiZSBkZWxpdmVyZWQgdG8gdGhlIHNlbGVjdGVkIGFwcGxpY2F0aW9uIG9yIGluc3RhbmNlLCBmb3IgZXhhbXBsZSBiZWNhdXNlIGl0IGhhcyBub3QgYWRkZWQgYW4gaW50ZW50IGhhbmRsZXIgd2l0aGluIGEgdGltZW91dC4qL1xuICAgIFJlc29sdmVFcnJvcltcIkludGVudERlbGl2ZXJ5RmFpbGVkXCJdID0gXCJJbnRlbnREZWxpdmVyeUZhaWxlZFwiO1xuICAgIC8qKiBSZXR1cm5lZCBpZiBhIGNhbGwgdG8gb25lIG9mIHRoZSBgcmFpc2VJbnRlbnRgIGZ1bmN0aW9ucyBpcyBtYWRlIHdpdGggYW4gaW52YWxpZCBjb250ZXh0IGFyZ3VtZW50LiBDb250ZXh0cyBzaG91bGQgYmUgT2JqZWN0cyB3aXRoIGF0IGxlYXN0IGEgYHR5cGVgIGZpZWxkIHRoYXQgaGFzIGEgYHN0cmluZ2AgdmFsdWUuKi9cbiAgICBSZXNvbHZlRXJyb3JbXCJNYWxmb3JtZWRDb250ZXh0XCJdID0gXCJNYWxmb3JtZWRDb250ZXh0XCI7XG4gICAgLyoqIEBleHBlcmltZW50YWwgUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBEZXNrdG9wIEFnZW50IGlzIG5vdCBmb3VuZCwgdmlhIGEgY29ubmVjdGVkIERlc2t0b3AgQWdlbnQgQnJpZGdlLiovXG4gICAgUmVzb2x2ZUVycm9yW1wiRGVza3RvcEFnZW50Tm90Rm91bmRcIl0gPSBcIkRlc2t0b3BBZ2VudE5vdEZvdW5kXCI7XG59KShSZXNvbHZlRXJyb3IgfHwgKFJlc29sdmVFcnJvciA9IHt9KSk7XG52YXIgUmVzdWx0RXJyb3I7XG4oZnVuY3Rpb24gKFJlc3VsdEVycm9yKSB7XG4gICAgLyoqIFJldHVybmVkIGlmIHRoZSBpbnRlbnQgaGFuZGxlciBleGl0ZWQgd2l0aG91dCByZXR1cm5pbmcgYSB2YWxpZCByZXN1bHQgKGEgcHJvbWlzZSByZXNvbHZpbmcgdG8gYSBDb250ZXh0LCBDaGFubmVsIG9iamVjdCBvciB2b2lkKS4gKi9cbiAgICBSZXN1bHRFcnJvcltcIk5vUmVzdWx0UmV0dXJuZWRcIl0gPSBcIk5vUmVzdWx0UmV0dXJuZWRcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgdGhlIEludGVudCBoYW5kbGVyIGZ1bmN0aW9uIHByb2Nlc3NpbmcgdGhlIHJhaXNlZCBpbnRlbnQgdGhyb3dzIGFuIGVycm9yIG9yIHJlamVjdHMgdGhlIFByb21pc2UgaXQgcmV0dXJuZWQuICovXG4gICAgUmVzdWx0RXJyb3JbXCJJbnRlbnRIYW5kbGVyUmVqZWN0ZWRcIl0gPSBcIkludGVudEhhbmRsZXJSZWplY3RlZFwiO1xufSkoUmVzdWx0RXJyb3IgfHwgKFJlc3VsdEVycm9yID0ge30pKTtcbnZhciBDaGFubmVsRXJyb3I7XG4oZnVuY3Rpb24gKENoYW5uZWxFcnJvcikge1xuICAgIC8qKiBSZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGNoYW5uZWwgaXMgbm90IGZvdW5kIHdoZW4gYXR0ZW1wdGluZyB0byBqb2luIGEgY2hhbm5lbCB2aWEgdGhlIGBqb2luVXNlckNoYW5uZWxgIGZ1bmN0aW9uICBvZiB0aGUgRGVza3RvcEFnZW50IChgZmRjM2ApLiovXG4gICAgQ2hhbm5lbEVycm9yW1wiTm9DaGFubmVsRm91bmRcIl0gPSBcIk5vQ2hhbm5lbEZvdW5kXCI7XG4gICAgLyoqIFNIT1VMRCBiZSByZXR1cm5lZCB3aGVuIGEgcmVxdWVzdCB0byBqb2luIGEgdXNlciBjaGFubmVsIG9yIHRvIGEgcmV0cmlldmUgYSBDaGFubmVsIG9iamVjdCB2aWEgdGhlIGBqb2luVXNlckNoYW5uZWxgIG9yIGBnZXRPckNyZWF0ZUNoYW5uZWxgIG1ldGhvZHMgb2YgdGhlIERlc2t0b3BBZ2VudCAoYGZkYzNgKSBvYmplY3QgaXMgZGVuaWVkLiAqL1xuICAgIENoYW5uZWxFcnJvcltcIkFjY2Vzc0RlbmllZFwiXSA9IFwiQWNjZXNzRGVuaWVkXCI7XG4gICAgLyoqIFNIT1VMRCBiZSByZXR1cm5lZCB3aGVuIGEgY2hhbm5lbCBjYW5ub3QgYmUgY3JlYXRlZCBvciByZXRyaWV2ZWQgdmlhIHRoZSBgZ2V0T3JDcmVhdGVDaGFubmVsYCBtZXRob2Qgb2YgdGhlIERlc2t0b3BBZ2VudCAoYGZkYzNgKS4qL1xuICAgIENoYW5uZWxFcnJvcltcIkNyZWF0aW9uRmFpbGVkXCJdID0gXCJDcmVhdGlvbkZhaWxlZFwiO1xuICAgIC8qKiBSZXR1cm5lZCBpZiBhIGNhbGwgdG8gdGhlIGBicm9hZGNhc3RgIGZ1bmN0aW9ucyBpcyBtYWRlIHdpdGggYW4gaW52YWxpZCBjb250ZXh0IGFyZ3VtZW50LiBDb250ZXh0cyBzaG91bGQgYmUgT2JqZWN0cyB3aXRoIGF0IGxlYXN0IGEgYHR5cGVgIGZpZWxkIHRoYXQgaGFzIGEgYHN0cmluZ2AgdmFsdWUuKi9cbiAgICBDaGFubmVsRXJyb3JbXCJNYWxmb3JtZWRDb250ZXh0XCJdID0gXCJNYWxmb3JtZWRDb250ZXh0XCI7XG59KShDaGFubmVsRXJyb3IgfHwgKENoYW5uZWxFcnJvciA9IHt9KSk7XG52YXIgQnJpZGdpbmdFcnJvcjtcbihmdW5jdGlvbiAoQnJpZGdpbmdFcnJvcikge1xuICAgIC8qKiBAZXhwZXJpbWVudGFsIFJldHVybmVkIGlmIGEgRGVza3RvcCBBZ2VudCBkaWQgbm90IHJldHVybiBhIHJlc3BvbnNlLCB2aWEgRGVza3RvcCBBZ2VudCBCcmlkZ2luZywgd2l0aGluIHRoZSBhbGxvdGVkIHRpbWVvdXQuICovXG4gICAgQnJpZGdpbmdFcnJvcltcIlJlc3BvbnNlVGltZWRPdXRcIl0gPSBcIlJlc3BvbnNlVG9CcmlkZ2VUaW1lZE91dFwiO1xuICAgIC8qKiBAZXhwZXJpbWVudGFsIFJldHVybmVkIGlmIGEgRGVza3RvcCBBZ2VudCB0aGF0IGhhcyBiZWVuIHRhcmdldGVkIGJ5IGEgcGFydGljdWxhciByZXF1ZXN0IGhhcyBiZWVuIGRpc2Nvbm5lY3RlZCBmcm9tIHRoZSBCcmlkZ2UgYmVmb3JlIGEgcmVzcG9uc2UgaGFzIGJlZW4gcmVjZWl2ZWQgZnJvbSBpdC4gKi9cbiAgICBCcmlkZ2luZ0Vycm9yW1wiQWdlbnREaXNjb25uZWN0ZWRcIl0gPSBcIkFnZW50RGlzY29ubmVjdGVkXCI7XG4gICAgLyoqIEBleHBlcmltZW50YWwgUmV0dXJuZWQgZm9yIEZEQzMgQVBJIGNhbGxzIHRoYXQgYXJlIHNwZWNpZmllZCB3aXRoIGFyZ3VtZW50cyBpbmRpY2F0aW5nIHRoYXQgYSByZW1vdGUgRGVza3RvcCBhZ2VudCBzaG91bGQgYmUgdGFyZ2V0ZWQgKGUuZy4gcmFpc2VJbnRlbnQgd2l0aCBhbiBhcHAgb24gYSByZW1vdGUgRGVza3RvcEFnZW50IHRhcmdldGVkKSwgd2hlbiB0aGUgbG9jYWwgRGVza3RvcCBBZ2VudCBpcyBub3QgY29ubmVjdGVkIHRvIGEgYnJpZGdlLiAqL1xuICAgIEJyaWRnaW5nRXJyb3JbXCJOb3RDb25uZWN0ZWRUb0JyaWRnZVwiXSA9IFwiTm90Q29ubmVjdGVkVG9CcmlkZ2VcIjtcbiAgICAvKiogQGV4cGVyaW1lbnRhbCBSZXR1cm5lZCBpZiBhIG1lc3NhZ2UgdG8gYSBCcmlkZ2UgZGV2aWF0ZXMgZnJvbSB0aGUgc2NoZW1hIGZvciB0aGF0IG1lc3NhZ2Ugc3VmZmljaWVudGx5IHRoYXQgaXQgY291bGQgbm90IGJlIHByb2Nlc3NlZC4gKi9cbiAgICBCcmlkZ2luZ0Vycm9yW1wiTWFsZm9ybWVkTWVzc2FnZVwiXSA9IFwiTWFsZm9ybWVkTWVzc2FnZVwiO1xufSkoQnJpZGdpbmdFcnJvciB8fCAoQnJpZGdpbmdFcnJvciA9IHt9KSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG50eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcclxuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcclxufTtcblxuLyoqXG4gKiBFbnN1cmVzIGF0IGNvbXBpbGUgdGltZSB0aGF0IHRoZSBnaXZlbiBzdHJpbmcgdHVwbGUgaXMgZXhoYXVzdGl2ZSBvbiBhIGdpdmVuIHVuaW9uIHR5cGUsIGkuZS4gY29udGFpbnMgQUxMIHBvc3NpYmxlIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gVU5JT05fVFlQRS5cbiAqL1xudmFyIGV4aGF1c3RpdmVTdHJpbmdUdXBsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdHVwbGUgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB0dXBsZVtfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gdHVwbGU7XG59OyB9O1xuXG52YXIgU1RBTkRBUkRfQ09OVEVYVF9UWVBFUyA9IGV4aGF1c3RpdmVTdHJpbmdUdXBsZSgpKCdmZGMzLmFjdGlvbicsICdmZGMzLmNoYXJ0JywgJ2ZkYzMuY2hhdC5pbml0U2V0dGluZ3MnLCAnZmRjMy5jaGF0Lm1lc3NhZ2UnLCAnZmRjMy5jaGF0LnJvb20nLCAnZmRjMy5jaGF0LnNlYXJjaENyaXRlcmlhJywgJ2ZkYzMuY29udGFjdCcsICdmZGMzLmNvbnRhY3RMaXN0JywgJ2ZkYzMuY291bnRyeScsICdmZGMzLmN1cnJlbmN5JywgJ2ZkYzMuZW1haWwnLCAnZmRjMy5pbnN0cnVtZW50JywgJ2ZkYzMuaW5zdHJ1bWVudExpc3QnLCAnZmRjMy5pbnRlcmFjdGlvbicsICdmZGMzLm1lc3NhZ2UnLCAnZmRjMy5vcmdhbml6YXRpb24nLCAnZmRjMy5wb3J0Zm9saW8nLCAnZmRjMy5wb3NpdGlvbicsICdmZGMzLm5vdGhpbmcnLCAnZmRjMy50aW1lcmFuZ2UnLCAnZmRjMy50cmFuc2FjdGlvblJlc3VsdCcsICdmZGMzLnZhbHVhdGlvbicpO1xuLy8gdXNlZCBpbnRlcm5hbGx5IHRvIGNoZWNrIGlmIGEgZ2l2ZW4gaW50ZW50L2NvbnRleHQgaXMgYSBzdGFuZGFyZCBvbmVcbnZhciBTdGFuZGFyZENvbnRleHRzU2V0ID0gbmV3IFNldChTVEFOREFSRF9DT05URVhUX1RZUEVTKTtcblxudmFyIFNUQU5EQVJEX0lOVEVOVFMgPSBleGhhdXN0aXZlU3RyaW5nVHVwbGUoKSgnQ3JlYXRlSW50ZXJhY3Rpb24nLCAnU2VuZENoYXRNZXNzYWdlJywgJ1N0YXJ0Q2FsbCcsICdTdGFydENoYXQnLCAnU3RhcnRFbWFpbCcsICdWaWV3QW5hbHlzaXMnLCAnVmlld0NoYXQnLCAnVmlld0NoYXJ0JywgJ1ZpZXdDb250YWN0JywgJ1ZpZXdIb2xkaW5ncycsICdWaWV3SW5zdHJ1bWVudCcsICdWaWV3SW50ZXJhY3Rpb25zJywgJ1ZpZXdNZXNzYWdlcycsICdWaWV3TmV3cycsICdWaWV3T3JkZXJzJywgJ1ZpZXdQcm9maWxlJywgJ1ZpZXdRdW90ZScsICdWaWV3UmVzZWFyY2gnKTtcbi8vIHVzZWQgaW50ZXJuYWxseSB0byBjaGVjayBpZiBhIGdpdmVuIGludGVudC9jb250ZXh0IGlzIGEgc3RhbmRhcmQgb25lXG52YXIgU3RhbmRhcmRJbnRlbnRzU2V0ID0gbmV3IFNldChTVEFOREFSRF9JTlRFTlRTKTtcblxudmFyIERFRkFVTFRfVElNRU9VVCA9IDUwMDA7XG52YXIgVW5hdmFpbGFibGVFcnJvciA9IG5ldyBFcnJvcignRkRDMyBEZXNrdG9wQWdlbnQgbm90IGF2YWlsYWJsZSBhdCBgd2luZG93LmZkYzNgLicpO1xudmFyIFRpbWVvdXRFcnJvciA9IG5ldyBFcnJvcignVGltZWQgb3V0IHdhaXRpbmcgZm9yIGBmZGMzUmVhZHlgIGV2ZW50LicpO1xudmFyIFVuZXhwZWN0ZWRFcnJvciA9IG5ldyBFcnJvcignYGZkYzNSZWFkeWAgZXZlbnQgZmlyZWQsIGJ1dCBgd2luZG93LmZkYzNgIG5vdCBzZXQgdG8gRGVza3RvcEFnZW50LicpO1xuZnVuY3Rpb24gcmVqZWN0SWZOb0dsb2JhbChmKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzID8gZigpIDogUHJvbWlzZS5yZWplY3QoVW5hdmFpbGFibGVFcnJvcik7XG59XG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBpbW1lYWRpYXRlbHlcbiAqIGlmIHRoZSBkZXNrdG9wIGFnZW50IEFQSSBpcyBmb3VuZCBhdCBgd2luZG93LmZkYzNgLiBJZiB0aGUgQVBJIGlzIGZvdW5kLFxuICogdGhlIHByb21pc2Ugd2lsbCByZXNvbHZlIHdoZW4gdGhlIGBmZGMzUmVhZHlgIGV2ZW50IGlzIHJlY2VpdmVkIG9yIGlmIGl0XG4gKiBpcyBmb3VuZCBhdCB0aGUgZW5kIG9mIHRoZSBzcGVjaWZpZWQgdGltZW91dC4gSWYgdGhlIEFQSSBpcyBub3QgZm91bmQsIGl0XG4gKiB3aWxsIHJlamVjdCB3aXRoIGFuIGVycm9yLlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGF3YWl0IGZkYzNSZWFkeSgpO1xuICogY29uc3QgaW50ZW50TGlzdGVuZXIgPSBhd2FpdCBhZGRJbnRlbnRMaXN0ZW5lcihcIlZpZXdDaGFydFwiLCBpbnRlbnRIYW5kbGVyRm4pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHdhaXRGb3JNcyBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGZvciB0aGUgRkRDMyBBUEkgdG8gYmVcbiAqIHJlYWR5LiBEZWZhdWx0cyB0byA1IHNlY29uZHMuXG4gKi9cbnZhciBmZGMzUmVhZHkgPSBmdW5jdGlvbiAod2FpdEZvck1zKSB7XG4gICAgaWYgKHdhaXRGb3JNcyA9PT0gdm9pZCAwKSB7IHdhaXRGb3JNcyA9IERFRkFVTFRfVElNRU9VVDsgfVxuICAgIHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgZ2xvYmFsIGlzIGFscmVhZHkgYXZhaWxhYmxlIHJlc29sdmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5mZGMzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdHMgbm90IGF2YWlsYWJsZSBzZXR1cCBhIHRpbWVvdXQgdG8gcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXRfMSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHdpbmRvdy5mZGMzID8gcmVzb2x2ZSgpIDogcmVqZWN0KFRpbWVvdXRFcnJvcikpOyB9LCB3YWl0Rm9yTXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGVuIGZvciB0aGUgZmRjM1JlYWR5IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZmRjM1JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0XzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mZGMzID8gcmVzb2x2ZSgpIDogcmVqZWN0KFVuZXhwZWN0ZWRFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIGlzU3RyaW5nKGFwcCkge1xuICAgIHJldHVybiAhIWFwcCAmJiB0eXBlb2YgYXBwID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIG9wZW4oYXBwLCBjb250ZXh0KSB7XG4gICAgaWYgKGlzU3RyaW5nKGFwcCkpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMub3BlbihhcHAsIGNvbnRleHQpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLm9wZW4oYXBwLCBjb250ZXh0KTsgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZmluZEludGVudChpbnRlbnQsIGNvbnRleHQsIHJlc3VsdFR5cGUpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5maW5kSW50ZW50KGludGVudCwgY29udGV4dCwgcmVzdWx0VHlwZSk7IH0pO1xufVxuZnVuY3Rpb24gZmluZEludGVudHNCeUNvbnRleHQoY29udGV4dCwgcmVzdWx0VHlwZSkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLmZpbmRJbnRlbnRzQnlDb250ZXh0KGNvbnRleHQsIHJlc3VsdFR5cGUpOyB9KTtcbn1cbmZ1bmN0aW9uIGJyb2FkY2FzdChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMuYnJvYWRjYXN0KGNvbnRleHQpOyB9KTtcbn1cbmZ1bmN0aW9uIHJhaXNlSW50ZW50KGludGVudCwgY29udGV4dCwgYXBwKSB7XG4gICAgaWYgKGlzU3RyaW5nKGFwcCkpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMucmFpc2VJbnRlbnQoaW50ZW50LCBjb250ZXh0LCBhcHApOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50KGludGVudCwgY29udGV4dCwgYXBwKTsgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmFpc2VJbnRlbnRGb3JDb250ZXh0KGNvbnRleHQsIGFwcCkge1xuICAgIGlmIChpc1N0cmluZyhhcHApKSB7XG4gICAgICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50Rm9yQ29udGV4dChjb250ZXh0LCBhcHApOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50Rm9yQ29udGV4dChjb250ZXh0LCBhcHApOyB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRJbnRlbnRMaXN0ZW5lcihpbnRlbnQsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5hZGRJbnRlbnRMaXN0ZW5lcihpbnRlbnQsIGhhbmRsZXIpOyB9KTtcbn1cbmZ1bmN0aW9uIGFkZENvbnRleHRMaXN0ZW5lcihjb250ZXh0VHlwZU9ySGFuZGxlciwgaGFuZGxlcikge1xuICAgIC8vSGFuZGxlIChkZXByZWNhdGVkKSBmdW5jdGlvbiBzaWduYXR1cmUgdGhhdCBhbGxvd2VkIGNvbnRleHRUeXBlIGFyZ3VtZW50IHRvIGJlIG9taXR0ZWRcbiAgICBpZiAodHlwZW9mIGNvbnRleHRUeXBlT3JIYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLmFkZENvbnRleHRMaXN0ZW5lcihjb250ZXh0VHlwZU9ySGFuZGxlciwgaGFuZGxlcik7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMuYWRkQ29udGV4dExpc3RlbmVyKG51bGwsIGNvbnRleHRUeXBlT3JIYW5kbGVyKTsgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0VXNlckNoYW5uZWxzKCkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9mYWxsYmFjayB0byBnZXRTeXN0ZW1DaGFubmVscyBmb3IgRkRDMyA8Mi4wIGltcGxlbWVudGF0aW9uc1xuICAgICAgICBpZiAod2luZG93LmZkYzMuZ2V0VXNlckNoYW5uZWxzKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0VXNlckNoYW5uZWxzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0U3lzdGVtQ2hhbm5lbHMoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0U3lzdGVtQ2hhbm5lbHMoKSB7XG4gICAgLy9mYWxsZm9yd2FyZCB0byBnZXRVc2VyQ2hhbm5lbHMgZm9yIEZEQzMgMi4wKyBpbXBsZW1lbnRhdGlvbnNcbiAgICByZXR1cm4gZ2V0VXNlckNoYW5uZWxzKCk7XG59XG5mdW5jdGlvbiBqb2luVXNlckNoYW5uZWwoY2hhbm5lbElkKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2ZhbGxiYWNrIHRvIGpvaW5DaGFubmVsIGZvciBGREMzIDwyLjAgaW1wbGVtZW50YXRpb25zXG4gICAgICAgIGlmICh3aW5kb3cuZmRjMy5qb2luVXNlckNoYW5uZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5qb2luVXNlckNoYW5uZWwoY2hhbm5lbElkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5qb2luQ2hhbm5lbChjaGFubmVsSWQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBqb2luQ2hhbm5lbChjaGFubmVsSWQpIHtcbiAgICAvL2ZhbGxmb3J3YXJkIHRvIGpvaW5Vc2VyQ2hhbm5lbCBmb3IgRkRDMyAyLjArIGltcGxlbWVudGF0aW9uc1xuICAgIHJldHVybiBqb2luVXNlckNoYW5uZWwoY2hhbm5lbElkKTtcbn1cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlQ2hhbm5lbChjaGFubmVsSWQpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5nZXRPckNyZWF0ZUNoYW5uZWwoY2hhbm5lbElkKTsgfSk7XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50Q2hhbm5lbCgpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5nZXRDdXJyZW50Q2hhbm5lbCgpOyB9KTtcbn1cbmZ1bmN0aW9uIGxlYXZlQ3VycmVudENoYW5uZWwoKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMubGVhdmVDdXJyZW50Q2hhbm5lbCgpOyB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVByaXZhdGVDaGFubmVsKCkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLmNyZWF0ZVByaXZhdGVDaGFubmVsKCk7IH0pO1xufVxuZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5nZXRJbmZvKCk7IH0pO1xufVxuZnVuY3Rpb24gZ2V0QXBwTWV0YWRhdGEoYXBwKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMuZ2V0QXBwTWV0YWRhdGEoYXBwKTsgfSk7XG59XG5mdW5jdGlvbiBmaW5kSW5zdGFuY2VzKGFwcCkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLmZpbmRJbnN0YW5jZXMoYXBwKTsgfSk7XG59XG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBjb250ZXh0IGlzIGEgc3RhbmRhcmQgY29udGV4dCB0eXBlLlxuICogQHBhcmFtIGNvbnRleHRUeXBlXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRDb250ZXh0VHlwZShjb250ZXh0VHlwZSkge1xuICAgIHJldHVybiBTdGFuZGFyZENvbnRleHRzU2V0Lmhhcyhjb250ZXh0VHlwZSk7XG59XG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBpbnRlbnQgaXMgYSBzdGFuZGFyZCBpbnRlbnQuXG4gKiBAcGFyYW0gaW50ZW50XG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRJbnRlbnQoaW50ZW50KSB7XG4gICAgcmV0dXJuIFN0YW5kYXJkSW50ZW50c1NldC5oYXMoaW50ZW50KTtcbn1cbi8qKlxuICogQ29tcGFyZSBudW1lcmljIHNlbXZlciB2ZXJzaW9uIG51bWJlciBzdHJpbmdzIChpbiB0aGUgZm9ybSBgMS4yLjNgKS5cbiAqXG4gKiBSZXR1cm5zIGAtMWAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgbG93ZXIgdmVyc2lvbiBudW1iZXIgdGhhbiB0aGUgc2Vjb25kLFxuICogYDFgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBncmVhdGVyIHRoYW4gdGhlIHNlY29uZCwgMCBpZiB0aGUgYXJndW1lbnRzIGFyZVxuICogZXF1YWwgYW5kIGBudWxsYCBpZiBhbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIGNvbXBhcmlzb24uXG4gKlxuICogQHBhcmFtIGFcbiAqIEBwYXJhbSBiXG4gKi9cbnZhciBjb21wYXJlVmVyc2lvbk51bWJlcnMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBhVmVyQXJyID0gYS5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuICAgICAgICB2YXIgYlZlckFyciA9IGIuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IE1hdGgubWF4KGFWZXJBcnIubGVuZ3RoLCBiVmVyQXJyLmxlbmd0aCk7IGluZGV4KyspIHtcbiAgICAgICAgICAgIC8qIElmIG9uZSB2ZXJzaW9uIG51bWJlciBoYXMgbW9yZSBkaWdpdHMgYW5kIHRoZSBvdGhlciBkb2VzIG5vdCwgYW5kIHRoZXkgYXJlIG90aGVyd2lzZSBlcXVhbCxcbiAgICAgICAgICAgICAgIGFzc3VtZSB0aGUgbG9uZ2VyIGlzIGdyZWF0ZXIuIEUuZy4gMS4xLjEgPiAxLjEgKi9cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYVZlckFyci5sZW5ndGggfHwgYVZlckFycltpbmRleF0gPCBiVmVyQXJyW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBiVmVyQXJyLmxlbmd0aCB8fCBhVmVyQXJyW2luZGV4XSA+IGJWZXJBcnJbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb21wYXJlIHZlcnNpb24gc3RyaW5ncycsIGUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuLyoqXG4gKiBDaGVjayBpZiB0aGUgRkRDMyB2ZXJzaW9uIGluIGFuIEltcGxlbWVudGF0aW9uTWV0YWRhdGEgb2JqZWN0IGlzIGdyZWF0ZXIgdGhhblxuICogb3IgZXF1YWwgdG8gdGhlIHN1cHBsaWVkIG51bWVyaWMgc2VtdmVyIHZlcnNpb24gbnVtYmVyIHN0cmluZyAoaW4gdGhlIGZvcm0gYDEuMi4zYCkuXG4gKlxuICogUmV0dXJucyBhIGJvb2xlYW4gb3IgbnVsbCBpZiBhbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjb21wYXJpbmcgdGhlIHZlcnNpb24gbnVtYmVycy5cbiAqXG4gKiBAcGFyYW0gbWV0YWRhdGFcbiAqIEBwYXJhbSB2ZXJzaW9uXG4gKi9cbnZhciB2ZXJzaW9uSXNBdExlYXN0ID0gZnVuY3Rpb24gKG1ldGFkYXRhLCB2ZXJzaW9uKSB7XG4gICAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlVmVyc2lvbk51bWJlcnMobWV0YWRhdGEuZmRjM1ZlcnNpb24sIHZlcnNpb24pO1xuICAgIHJldHVybiBjb21wYXJpc29uID09PSBudWxsID8gbnVsbCA6IGNvbXBhcmlzb24gPj0gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbi8qKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqIENvcHlyaWdodCBGSU5PUyBGREMzIGNvbnRyaWJ1dG9ycyAtIHNlZSBOT1RJQ0UgZmlsZVxuICovXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgU3RhbmRhcmRDb250ZXh0VHlwZX0gaW5zdGVhZFxuICovXG52YXIgQ29udGV4dFR5cGVzO1xuKGZ1bmN0aW9uIChDb250ZXh0VHlwZXMpIHtcbiAgICBDb250ZXh0VHlwZXNbXCJDaGFydFwiXSA9IFwiZmRjMy5jaGFydFwiO1xuICAgIENvbnRleHRUeXBlc1tcIkNoYXRJbml0U2V0dGluZ3NcIl0gPSBcImZkYzMuY2hhdC5pbml0U2V0dGluZ3NcIjtcbiAgICBDb250ZXh0VHlwZXNbXCJDaGF0Um9vbVwiXSA9IFwiZmRjMy5jaGF0LnJvb21cIjtcbiAgICBDb250ZXh0VHlwZXNbXCJDb250YWN0XCJdID0gXCJmZGMzLmNvbnRhY3RcIjtcbiAgICBDb250ZXh0VHlwZXNbXCJDb250YWN0TGlzdFwiXSA9IFwiZmRjMy5jb250YWN0TGlzdFwiO1xuICAgIENvbnRleHRUeXBlc1tcIkNvdW50cnlcIl0gPSBcImZkYzMuY291bnRyeVwiO1xuICAgIENvbnRleHRUeXBlc1tcIkN1cnJlbmN5XCJdID0gXCJmZGMzLmN1cnJlbmN5XCI7XG4gICAgQ29udGV4dFR5cGVzW1wiRW1haWxcIl0gPSBcImZkYzMuZW1haWxcIjtcbiAgICBDb250ZXh0VHlwZXNbXCJJbnN0cnVtZW50XCJdID0gXCJmZGMzLmluc3RydW1lbnRcIjtcbiAgICBDb250ZXh0VHlwZXNbXCJJbnN0cnVtZW50TGlzdFwiXSA9IFwiZmRjMy5pbnN0cnVtZW50TGlzdFwiO1xuICAgIENvbnRleHRUeXBlc1tcIkludGVyYWN0aW9uXCJdID0gXCJmZGMzLmludGVyYWN0aW9uXCI7XG4gICAgQ29udGV4dFR5cGVzW1wiTm90aGluZ1wiXSA9IFwiZmRjMy5ub3RoaW5nXCI7XG4gICAgQ29udGV4dFR5cGVzW1wiT3JnYW5pemF0aW9uXCJdID0gXCJmZGMzLm9yZ2FuaXphdGlvblwiO1xuICAgIENvbnRleHRUeXBlc1tcIlBvcnRmb2xpb1wiXSA9IFwiZmRjMy5wb3J0Zm9saW9cIjtcbiAgICBDb250ZXh0VHlwZXNbXCJQb3NpdGlvblwiXSA9IFwiZmRjMy5wb3NpdGlvblwiO1xuICAgIENvbnRleHRUeXBlc1tcIkNoYXRTZWFyY2hDcml0ZXJpYVwiXSA9IFwiZmRjMy5jaGF0LnNlYXJjaENyaXRlcmlhXCI7XG4gICAgQ29udGV4dFR5cGVzW1wiVGltZVJhbmdlXCJdID0gXCJmZGMzLnRpbWVyYW5nZVwiO1xuICAgIENvbnRleHRUeXBlc1tcIlRyYW5zYWN0aW9uUmVzdWx0XCJdID0gXCJmZGMzLnRyYW5zYWN0aW9uUmVzdWx0XCI7XG4gICAgQ29udGV4dFR5cGVzW1wiVmFsdWF0aW9uXCJdID0gXCJmZGMzLnZhbHVhdGlvblwiO1xufSkoQ29udGV4dFR5cGVzIHx8IChDb250ZXh0VHlwZXMgPSB7fSkpO1xuXG4vLyBUbyBwYXJzZSB0aGlzIGRhdGE6XG4vL1xuLy8gICBpbXBvcnQgeyBDb252ZXJ0LCBBY3Rpb24sIENoYXJ0LCBDaGF0SW5pdFNldHRpbmdzLCBDaGF0TWVzc2FnZSwgQ2hhdFJvb20sIENoYXRTZWFyY2hDcml0ZXJpYSwgQ29udGFjdCwgQ29udGFjdExpc3QsIENvbnRleHQsIENvdW50cnksIEN1cnJlbmN5LCBFbWFpbCwgSW5zdHJ1bWVudCwgSW5zdHJ1bWVudExpc3QsIEludGVyYWN0aW9uLCBNZXNzYWdlLCBOb3RoaW5nLCBPcmRlciwgT3JkZXJMaXN0LCBPcmdhbml6YXRpb24sIFBvcnRmb2xpbywgUG9zaXRpb24sIFByb2R1Y3QsIFRpbWVSYW5nZSwgVHJhZGUsIFRyYWRlTGlzdCwgVHJhbnNhY3Rpb25SZXN1bHQsIFZhbHVhdGlvbiB9IGZyb20gXCIuL2ZpbGVcIjtcbi8vXG4vLyAgIGNvbnN0IGFjdGlvbiA9IENvbnZlcnQudG9BY3Rpb24oanNvbik7XG4vLyAgIGNvbnN0IGNoYXJ0ID0gQ29udmVydC50b0NoYXJ0KGpzb24pO1xuLy8gICBjb25zdCBjaGF0SW5pdFNldHRpbmdzID0gQ29udmVydC50b0NoYXRJbml0U2V0dGluZ3MoanNvbik7XG4vLyAgIGNvbnN0IGNoYXRNZXNzYWdlID0gQ29udmVydC50b0NoYXRNZXNzYWdlKGpzb24pO1xuLy8gICBjb25zdCBjaGF0Um9vbSA9IENvbnZlcnQudG9DaGF0Um9vbShqc29uKTtcbi8vICAgY29uc3QgY2hhdFNlYXJjaENyaXRlcmlhID0gQ29udmVydC50b0NoYXRTZWFyY2hDcml0ZXJpYShqc29uKTtcbi8vICAgY29uc3QgY29udGFjdCA9IENvbnZlcnQudG9Db250YWN0KGpzb24pO1xuLy8gICBjb25zdCBjb250YWN0TGlzdCA9IENvbnZlcnQudG9Db250YWN0TGlzdChqc29uKTtcbi8vICAgY29uc3QgY29udGV4dCA9IENvbnZlcnQudG9Db250ZXh0KGpzb24pO1xuLy8gICBjb25zdCBjb3VudHJ5ID0gQ29udmVydC50b0NvdW50cnkoanNvbik7XG4vLyAgIGNvbnN0IGN1cnJlbmN5ID0gQ29udmVydC50b0N1cnJlbmN5KGpzb24pO1xuLy8gICBjb25zdCBlbWFpbCA9IENvbnZlcnQudG9FbWFpbChqc29uKTtcbi8vICAgY29uc3QgaW5zdHJ1bWVudCA9IENvbnZlcnQudG9JbnN0cnVtZW50KGpzb24pO1xuLy8gICBjb25zdCBpbnN0cnVtZW50TGlzdCA9IENvbnZlcnQudG9JbnN0cnVtZW50TGlzdChqc29uKTtcbi8vICAgY29uc3QgaW50ZXJhY3Rpb24gPSBDb252ZXJ0LnRvSW50ZXJhY3Rpb24oanNvbik7XG4vLyAgIGNvbnN0IG1lc3NhZ2UgPSBDb252ZXJ0LnRvTWVzc2FnZShqc29uKTtcbi8vICAgY29uc3Qgbm90aGluZyA9IENvbnZlcnQudG9Ob3RoaW5nKGpzb24pO1xuLy8gICBjb25zdCBvcmRlciA9IENvbnZlcnQudG9PcmRlcihqc29uKTtcbi8vICAgY29uc3Qgb3JkZXJMaXN0ID0gQ29udmVydC50b09yZGVyTGlzdChqc29uKTtcbi8vICAgY29uc3Qgb3JnYW5pemF0aW9uID0gQ29udmVydC50b09yZ2FuaXphdGlvbihqc29uKTtcbi8vICAgY29uc3QgcG9ydGZvbGlvID0gQ29udmVydC50b1BvcnRmb2xpbyhqc29uKTtcbi8vICAgY29uc3QgcG9zaXRpb24gPSBDb252ZXJ0LnRvUG9zaXRpb24oanNvbik7XG4vLyAgIGNvbnN0IHByb2R1Y3QgPSBDb252ZXJ0LnRvUHJvZHVjdChqc29uKTtcbi8vICAgY29uc3QgdGltZVJhbmdlID0gQ29udmVydC50b1RpbWVSYW5nZShqc29uKTtcbi8vICAgY29uc3QgdHJhZGUgPSBDb252ZXJ0LnRvVHJhZGUoanNvbik7XG4vLyAgIGNvbnN0IHRyYWRlTGlzdCA9IENvbnZlcnQudG9UcmFkZUxpc3QoanNvbik7XG4vLyAgIGNvbnN0IHRyYW5zYWN0aW9uUmVzdWx0ID0gQ29udmVydC50b1RyYW5zYWN0aW9uUmVzdWx0KGpzb24pO1xuLy8gICBjb25zdCB2YWx1YXRpb24gPSBDb252ZXJ0LnRvVmFsdWF0aW9uKGpzb24pO1xuLy9cbi8vIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBKU09OIGRvZXNuJ3Rcbi8vIG1hdGNoIHRoZSBleHBlY3RlZCBpbnRlcmZhY2UsIGV2ZW4gaWYgdGhlIEpTT04gaXMgdmFsaWQuXG4vKipcbiAqIEZyZWUgdGV4dCB0byBiZSB1c2VkIGZvciBhIGtleXdvcmQgc2VhcmNoXG4gKlxuICogYGludGVyYWN0aW9uVHlwZWAgU0hPVUxEIGJlIG9uZSBvZiBgJ0luc3RhbnQgTWVzc2FnZSdgLCBgJ0VtYWlsJ2AsIGAnQ2FsbCdgLCBvclxuICogYCdNZWV0aW5nJ2AgYWx0aG91Z2ggb3RoZXIgc3RyaW5nIHZhbHVlcyBhcmUgcGVybWl0dGVkLlxuICovXG4vLyBDb252ZXJ0cyBKU09OIHN0cmluZ3MgdG8vZnJvbSB5b3VyIHR5cGVzXG4vLyBhbmQgYXNzZXJ0cyB0aGUgcmVzdWx0cyBvZiBKU09OLnBhcnNlIGF0IHJ1bnRpbWVcbnZhciBDb252ZXJ0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnZlcnQoKSB7XG4gICAgfVxuICAgIENvbnZlcnQudG9BY3Rpb24gPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiQWN0aW9uXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuYWN0aW9uVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJBY3Rpb25cIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9DaGFydCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJDaGFydFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNoYXJ0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJDaGFydFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0NoYXRJbml0U2V0dGluZ3MgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiQ2hhdEluaXRTZXR0aW5nc1wiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNoYXRJbml0U2V0dGluZ3NUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkNoYXRJbml0U2V0dGluZ3NcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9DaGF0TWVzc2FnZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJDaGF0TWVzc2FnZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNoYXRNZXNzYWdlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJDaGF0TWVzc2FnZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0NoYXRSb29tID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIkNoYXRSb29tXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuY2hhdFJvb21Ub0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkNoYXRSb29tXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQ2hhdFNlYXJjaENyaXRlcmlhID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIkNoYXRTZWFyY2hDcml0ZXJpYVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNoYXRTZWFyY2hDcml0ZXJpYVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiQ2hhdFNlYXJjaENyaXRlcmlhXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQ29udGFjdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJDb250YWN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuY29udGFjdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiQ29udGFjdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0NvbnRhY3RMaXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIkNvbnRhY3RMaXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuY29udGFjdExpc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkNvbnRhY3RMaXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQ29udGV4dCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJDb250ZXh0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuY29udGV4dFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiQ29udGV4dFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0NvdW50cnkgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiQ291bnRyeVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvdW50cnlUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkNvdW50cnlcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9DdXJyZW5jeSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJDdXJyZW5jeVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmN1cnJlbmN5VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJDdXJyZW5jeVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0VtYWlsID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIkVtYWlsXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZW1haWxUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkVtYWlsXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJJbnN0cnVtZW50XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuaW5zdHJ1bWVudFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiSW5zdHJ1bWVudFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0luc3RydW1lbnRMaXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIkluc3RydW1lbnRMaXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuaW5zdHJ1bWVudExpc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkluc3RydW1lbnRMaXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiSW50ZXJhY3Rpb25cIikpO1xuICAgIH07XG4gICAgQ29udmVydC5pbnRlcmFjdGlvblRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiSW50ZXJhY3Rpb25cIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9NZXNzYWdlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIk1lc3NhZ2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5tZXNzYWdlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJNZXNzYWdlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvTm90aGluZyA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJOb3RoaW5nXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQubm90aGluZ1RvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiTm90aGluZ1wiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b09yZGVyID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIk9yZGVyXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQub3JkZXJUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIk9yZGVyXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvT3JkZXJMaXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIk9yZGVyTGlzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lm9yZGVyTGlzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiT3JkZXJMaXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvT3JnYW5pemF0aW9uID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIk9yZ2FuaXphdGlvblwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lm9yZ2FuaXphdGlvblRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiT3JnYW5pemF0aW9uXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUG9ydGZvbGlvID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIlBvcnRmb2xpb1wiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnBvcnRmb2xpb1RvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiUG9ydGZvbGlvXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUG9zaXRpb24gPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiUG9zaXRpb25cIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wb3NpdGlvblRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiUG9zaXRpb25cIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcm9kdWN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIlByb2R1Y3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wcm9kdWN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJQcm9kdWN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvVGltZVJhbmdlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIlRpbWVSYW5nZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRpbWVSYW5nZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiVGltZVJhbmdlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvVHJhZGUgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiVHJhZGVcIikpO1xuICAgIH07XG4gICAgQ29udmVydC50cmFkZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiVHJhZGVcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9UcmFkZUxpc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiVHJhZGVMaXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQudHJhZGVMaXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJUcmFkZUxpc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9UcmFuc2FjdGlvblJlc3VsdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJUcmFuc2FjdGlvblJlc3VsdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRyYW5zYWN0aW9uUmVzdWx0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJUcmFuc2FjdGlvblJlc3VsdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1ZhbHVhdGlvbiA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJWYWx1YXRpb25cIikpO1xuICAgIH07XG4gICAgQ29udmVydC52YWx1YXRpb25Ub0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIlZhbHVhdGlvblwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnZlcnQ7XG59KCkpO1xuZnVuY3Rpb24gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXksIHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQgPT09IHZvaWQgMCkgeyBwYXJlbnQgPSAnJzsgfVxuICAgIHZhciBwcmV0dHlUeXAgPSBwcmV0dHlUeXBlTmFtZSh0eXApO1xuICAgIHZhciBwYXJlbnRUZXh0ID0gcGFyZW50ID8gXCIgb24gXCIuY29uY2F0KHBhcmVudCkgOiAnJztcbiAgICB2YXIga2V5VGV4dCA9IGtleSA/IFwiIGZvciBrZXkgXFxcIlwiLmNvbmNhdChrZXksIFwiXFxcIlwiKSA6ICcnO1xuICAgIHRocm93IEVycm9yKFwiSW52YWxpZCB2YWx1ZVwiLmNvbmNhdChrZXlUZXh0KS5jb25jYXQocGFyZW50VGV4dCwgXCIuIEV4cGVjdGVkIFwiKS5jb25jYXQocHJldHR5VHlwLCBcIiBidXQgZ290IFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkodmFsKSkpO1xufVxuZnVuY3Rpb24gcHJldHR5VHlwZU5hbWUodHlwKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwKSkge1xuICAgICAgICBpZiAodHlwLmxlbmd0aCA9PT0gMiAmJiB0eXBbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYW4gb3B0aW9uYWwgXCIuY29uY2F0KHByZXR0eVR5cGVOYW1lKHR5cFsxXSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwib25lIG9mIFtcIi5jb25jYXQodHlwLm1hcChmdW5jdGlvbiAoYSkgeyByZXR1cm4gcHJldHR5VHlwZU5hbWUoYSk7IH0pLmpvaW4oXCIsIFwiKSwgXCJdXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB0eXAgPT09IFwib2JqZWN0XCIgJiYgdHlwLmxpdGVyYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHlwLmxpdGVyYWw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHR5cDtcbiAgICB9XG59XG5mdW5jdGlvbiBqc29uVG9KU1Byb3BzKHR5cCkge1xuICAgIGlmICh0eXAuanNvblRvSlMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbWFwXzEgPSB7fTtcbiAgICAgICAgdHlwLnByb3BzLmZvckVhY2goZnVuY3Rpb24gKHApIHsgcmV0dXJuIG1hcF8xW3AuanNvbl0gPSB7IGtleTogcC5qcywgdHlwOiBwLnR5cCB9OyB9KTtcbiAgICAgICAgdHlwLmpzb25Ub0pTID0gbWFwXzE7XG4gICAgfVxuICAgIHJldHVybiB0eXAuanNvblRvSlM7XG59XG5mdW5jdGlvbiBqc1RvSlNPTlByb3BzKHR5cCkge1xuICAgIGlmICh0eXAuanNUb0pTT04gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbWFwXzIgPSB7fTtcbiAgICAgICAgdHlwLnByb3BzLmZvckVhY2goZnVuY3Rpb24gKHApIHsgcmV0dXJuIG1hcF8yW3AuanNdID0geyBrZXk6IHAuanNvbiwgdHlwOiBwLnR5cCB9OyB9KTtcbiAgICAgICAgdHlwLmpzVG9KU09OID0gbWFwXzI7XG4gICAgfVxuICAgIHJldHVybiB0eXAuanNUb0pTT047XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm0odmFsLCB0eXAsIGdldFByb3BzLCBrZXksIHBhcmVudCkge1xuICAgIGlmIChrZXkgPT09IHZvaWQgMCkgeyBrZXkgPSAnJzsgfVxuICAgIGlmIChwYXJlbnQgPT09IHZvaWQgMCkgeyBwYXJlbnQgPSAnJzsgfVxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVByaW1pdGl2ZSh0eXAsIHZhbCkge1xuICAgICAgICBpZiAodHlwZW9mIHR5cCA9PT0gdHlwZW9mIHZhbClcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtVW5pb24odHlwcywgdmFsKSB7XG4gICAgICAgIC8vIHZhbCBtdXN0IHZhbGlkYXRlIGFnYWluc3Qgb25lIHR5cCBpbiB0eXBzXG4gICAgICAgIHZhciBsID0gdHlwcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdHlwXzEgPSB0eXBzW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtKHZhbCwgdHlwXzEsIGdldFByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cHMsIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1FbnVtKGNhc2VzLCB2YWwpIHtcbiAgICAgICAgaWYgKGNhc2VzLmluZGV4T2YodmFsKSAhPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlKGNhc2VzLm1hcChmdW5jdGlvbiAoYSkgeyByZXR1cm4gbChhKTsgfSksIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1BcnJheSh0eXAsIHZhbCkge1xuICAgICAgICAvLyB2YWwgbXVzdCBiZSBhbiBhcnJheSB3aXRoIG5vIGludmFsaWQgZWxlbWVudHNcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpXG4gICAgICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlKGwoXCJhcnJheVwiKSwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgICAgIHJldHVybiB2YWwubWFwKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gdHJhbnNmb3JtKGVsLCB0eXAsIGdldFByb3BzKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybURhdGUodmFsKSB7XG4gICAgICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUodmFsKTtcbiAgICAgICAgaWYgKGlzTmFOKGQudmFsdWVPZigpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZShsKFwiRGF0ZVwiKSwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybU9iamVjdChwcm9wcywgYWRkaXRpb25hbCwgdmFsKSB7XG4gICAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUobChyZWYgfHwgXCJvYmplY3RcIiksIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgdmFyIHYgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsLCBrZXkpID8gdmFsW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXN1bHRbcHJvcC5rZXldID0gdHJhbnNmb3JtKHYsIHByb3AudHlwLCBnZXRQcm9wcywga2V5LCByZWYpO1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB0cmFuc2Zvcm0odmFsW2tleV0sIGFkZGl0aW9uYWwsIGdldFByb3BzLCBrZXksIHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBpZiAodHlwID09PSBcImFueVwiKVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIGlmICh0eXAgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgaWYgKHR5cCA9PT0gZmFsc2UpXG4gICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB2YXIgcmVmID0gdW5kZWZpbmVkO1xuICAgIHdoaWxlICh0eXBlb2YgdHlwID09PSBcIm9iamVjdFwiICYmIHR5cC5yZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZWYgPSB0eXAucmVmO1xuICAgICAgICB0eXAgPSB0eXBlTWFwW3R5cC5yZWZdO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0eXApKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtRW51bSh0eXAsIHZhbCk7XG4gICAgaWYgKHR5cGVvZiB0eXAgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIHR5cC5oYXNPd25Qcm9wZXJ0eShcInVuaW9uTWVtYmVyc1wiKSA/IHRyYW5zZm9ybVVuaW9uKHR5cC51bmlvbk1lbWJlcnMsIHZhbClcbiAgICAgICAgICAgIDogdHlwLmhhc093blByb3BlcnR5KFwiYXJyYXlJdGVtc1wiKSA/IHRyYW5zZm9ybUFycmF5KHR5cC5hcnJheUl0ZW1zLCB2YWwpXG4gICAgICAgICAgICAgICAgOiB0eXAuaGFzT3duUHJvcGVydHkoXCJwcm9wc1wiKSA/IHRyYW5zZm9ybU9iamVjdChnZXRQcm9wcyh0eXApLCB0eXAuYWRkaXRpb25hbCwgdmFsKVxuICAgICAgICAgICAgICAgICAgICA6IGludmFsaWRWYWx1ZSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIH1cbiAgICAvLyBOdW1iZXJzIGNhbiBiZSBwYXJzZWQgYnkgRGF0ZSBidXQgc2hvdWxkbid0IGJlLlxuICAgIGlmICh0eXAgPT09IERhdGUgJiYgdHlwZW9mIHZhbCAhPT0gXCJudW1iZXJcIilcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybURhdGUodmFsKTtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJpbWl0aXZlKHR5cCwgdmFsKTtcbn1cbmZ1bmN0aW9uIGNhc3QodmFsLCB0eXApIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtKHZhbCwgdHlwLCBqc29uVG9KU1Byb3BzKTtcbn1cbmZ1bmN0aW9uIHVuY2FzdCh2YWwsIHR5cCkge1xuICAgIHJldHVybiB0cmFuc2Zvcm0odmFsLCB0eXAsIGpzVG9KU09OUHJvcHMpO1xufVxuZnVuY3Rpb24gbCh0eXApIHtcbiAgICByZXR1cm4geyBsaXRlcmFsOiB0eXAgfTtcbn1cbmZ1bmN0aW9uIGEodHlwKSB7XG4gICAgcmV0dXJuIHsgYXJyYXlJdGVtczogdHlwIH07XG59XG5mdW5jdGlvbiB1KCkge1xuICAgIHZhciB0eXBzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdHlwc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4geyB1bmlvbk1lbWJlcnM6IHR5cHMgfTtcbn1cbmZ1bmN0aW9uIG8ocHJvcHMsIGFkZGl0aW9uYWwpIHtcbiAgICByZXR1cm4geyBwcm9wczogcHJvcHMsIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWwgfTtcbn1cbmZ1bmN0aW9uIG0oYWRkaXRpb25hbCkge1xuICAgIHJldHVybiB7IHByb3BzOiBbXSwgYWRkaXRpb25hbDogYWRkaXRpb25hbCB9O1xufVxuZnVuY3Rpb24gcihuYW1lKSB7XG4gICAgcmV0dXJuIHsgcmVmOiBuYW1lIH07XG59XG52YXIgdHlwZU1hcCA9IHtcbiAgICBcIkFjdGlvblwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkFjdGlvblRhcmdldEFwcFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHIoXCJDb250ZXh0RWxlbWVudFwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaW50ZW50XCIsIGpzOiBcImludGVudFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGl0bGVcIiwganM6IFwidGl0bGVcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiQWN0aW9uVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQWN0aW9uVGFyZ2V0QXBwXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJkZXNrdG9wQWdlbnRcIiwganM6IFwiZGVza3RvcEFnZW50XCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNvbnRleHRFbGVtZW50XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ2hhcnRcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpbnN0cnVtZW50c1wiLCBqczogXCJpbnN0cnVtZW50c1wiLCB0eXA6IGEocihcIkluc3RydW1lbnRFbGVtZW50XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwib3RoZXJDb25maWdcIiwganM6IFwib3RoZXJDb25maWdcIiwgdHlwOiB1KHVuZGVmaW5lZCwgYShyKFwiQ29udGV4dEVsZW1lbnRcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwicmFuZ2VcIiwganM6IFwicmFuZ2VcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIlRpbWVSYW5nZU9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInN0eWxlXCIsIGpzOiBcInN0eWxlXCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJDaGFydFN0eWxlXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkNoYXJ0VHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiSW5zdHJ1bWVudEVsZW1lbnRcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHIoXCJQdXJwbGVJbnN0cnVtZW50SWRlbnRpZmllcnNcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm1hcmtldFwiLCBqczogXCJtYXJrZXRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIk9yZ2FuaXphdGlvbk1hcmtldFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJQdXJwbGVJbnRlcmFjdGlvblR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiUHVycGxlSW5zdHJ1bWVudElkZW50aWZpZXJzXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiQkJHXCIsIGpzOiBcIkJCR1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiQ1VTSVBcIiwganM6IFwiQ1VTSVBcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkZEU19JRFwiLCBqczogXCJGRFNfSURcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkZJR0lcIiwganM6IFwiRklHSVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiSVNJTlwiLCBqczogXCJJU0lOXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJQRVJNSURcIiwganM6IFwiUEVSTUlEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJSSUNcIiwganM6IFwiUklDXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJTRURPTFwiLCBqczogXCJTRURPTFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGlja2VyXCIsIGpzOiBcInRpY2tlclwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiT3JnYW5pemF0aW9uTWFya2V0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiQkJHXCIsIGpzOiBcIkJCR1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiQ09VTlRSWV9JU09BTFBIQTJcIiwganM6IFwiQ09VTlRSWV9JU09BTFBIQTJcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIk1JQ1wiLCBqczogXCJNSUNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiVGltZVJhbmdlT2JqZWN0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiZW5kVGltZVwiLCBqczogXCJlbmRUaW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIERhdGUpIH0sXG4gICAgICAgIHsganNvbjogXCJzdGFydFRpbWVcIiwganM6IFwic3RhcnRUaW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIERhdGUpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiVGltZVJhbmdlVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ2hhdEluaXRTZXR0aW5nc1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImNoYXROYW1lXCIsIGpzOiBcImNoYXROYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJtZW1iZXJzXCIsIGpzOiBcIm1lbWJlcnNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkNvbnRhY3RMaXN0T2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibWVzc2FnZVwiLCBqczogXCJtZXNzYWdlXCIsIHR5cDogdSh1bmRlZmluZWQsIHUocihcIk1lc3NhZ2VPYmplY3RcIiksIFwiXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwib3B0aW9uc1wiLCBqczogXCJvcHRpb25zXCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJDaGF0T3B0aW9uc1wiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJDaGF0SW5pdFNldHRpbmdzVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ29udGFjdExpc3RPYmplY3RcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJjb250YWN0c1wiLCBqczogXCJjb250YWN0c1wiLCB0eXA6IGEocihcIkNvbnRhY3RFbGVtZW50XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkNvbnRhY3RMaXN0VHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ29udGFjdEVsZW1lbnRcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHIoXCJQdXJwbGVDb250YWN0SWRlbnRpZmllcnNcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJGbHVmZnlJbnRlcmFjdGlvblR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiUHVycGxlQ29udGFjdElkZW50aWZpZXJzXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiZW1haWxcIiwganM6IFwiZW1haWxcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkZEU19JRFwiLCBqczogXCJGRFNfSURcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIk1lc3NhZ2VPYmplY3RcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJlbnRpdGllc1wiLCBqczogXCJlbnRpdGllc1wiLCB0eXA6IHUodW5kZWZpbmVkLCBtKHIoXCJQdXJwbGVBY3Rpb25cIikpKSB9LFxuICAgICAgICB7IGpzb246IFwidGV4dFwiLCBqczogXCJ0ZXh0XCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJQdXJwbGVNZXNzYWdlVGV4dFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJNZXNzYWdlVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiUHVycGxlQWN0aW9uXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiYXBwXCIsIGpzOiBcImFwcFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiQWN0aW9uVGFyZ2V0QXBwXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJDb250ZXh0RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImludGVudFwiLCBqczogXCJpbnRlbnRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpdGxlXCIsIGpzOiBcInRpdGxlXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiRW50aXR5VHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiZGF0YVwiLCBqczogXCJkYXRhXCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJQdXJwbGVEYXRhXCIpKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiUHVycGxlRGF0YVwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImRhdGFVcmlcIiwganM6IFwiZGF0YVVyaVwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IFwiXCIgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlB1cnBsZU1lc3NhZ2VUZXh0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwidGV4dC9tYXJrZG93blwiLCBqczogXCJ0ZXh0L21hcmtkb3duXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0ZXh0L3BsYWluXCIsIGpzOiBcInRleHQvcGxhaW5cIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNoYXRPcHRpb25zXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiYWxsb3dBZGRVc2VyXCIsIGpzOiBcImFsbG93QWRkVXNlclwiLCB0eXA6IHUodW5kZWZpbmVkLCB0cnVlKSB9LFxuICAgICAgICB7IGpzb246IFwiYWxsb3dIaXN0b3J5QnJvd3NpbmdcIiwganM6IFwiYWxsb3dIaXN0b3J5QnJvd3NpbmdcIiwgdHlwOiB1KHVuZGVmaW5lZCwgdHJ1ZSkgfSxcbiAgICAgICAgeyBqc29uOiBcImFsbG93TWVzc2FnZUNvcHlcIiwganM6IFwiYWxsb3dNZXNzYWdlQ29weVwiLCB0eXA6IHUodW5kZWZpbmVkLCB0cnVlKSB9LFxuICAgICAgICB7IGpzb246IFwiZ3JvdXBSZWNpcGllbnRzXCIsIGpzOiBcImdyb3VwUmVjaXBpZW50c1wiLCB0eXA6IHUodW5kZWZpbmVkLCB0cnVlKSB9LFxuICAgICAgICB7IGpzb246IFwiaXNQdWJsaWNcIiwganM6IFwiaXNQdWJsaWNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgdHJ1ZSkgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNoYXRNZXNzYWdlXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiY2hhdFJvb21cIiwganM6IFwiY2hhdFJvb21cIiwgdHlwOiByKFwiQ2hhdFJvb21PYmplY3RcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm1lc3NhZ2VcIiwganM6IFwibWVzc2FnZVwiLCB0eXA6IHIoXCJNZXNzYWdlT2JqZWN0XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiQ2hhdE1lc3NhZ2VUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDaGF0Um9vbU9iamVjdFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogbShcImFueVwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwcm92aWRlck5hbWVcIiwganM6IFwicHJvdmlkZXJOYW1lXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkNoYXRSb29tVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidXJsXCIsIGpzOiBcInVybFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ2hhdFJvb21cIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IG0oXCJhbnlcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwicHJvdmlkZXJOYW1lXCIsIGpzOiBcInByb3ZpZGVyTmFtZVwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJDaGF0Um9vbVR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInVybFwiLCBqczogXCJ1cmxcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNoYXRTZWFyY2hDcml0ZXJpYVwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImNyaXRlcmlhXCIsIGpzOiBcImNyaXRlcmlhXCIsIHR5cDogYSh1KHIoXCJPcmdhbml6YXRpb25PYmplY3RcIiksIFwiXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkNoYXRTZWFyY2hDcml0ZXJpYVR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIk9yZ2FuaXphdGlvbk9iamVjdFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogcihcIklkZW50aWZpZXJzXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJtYXJrZXRcIiwganM6IFwibWFya2V0XCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJPcmdhbml6YXRpb25NYXJrZXRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiVGVudGFjbGVkSW50ZXJhY3Rpb25UeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIklkZW50aWZpZXJzXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiQkJHXCIsIGpzOiBcIkJCR1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiQ1VTSVBcIiwganM6IFwiQ1VTSVBcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkZEU19JRFwiLCBqczogXCJGRFNfSURcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkZJR0lcIiwganM6IFwiRklHSVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiSVNJTlwiLCBqczogXCJJU0lOXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJQRVJNSURcIiwganM6IFwiUEVSTUlEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJSSUNcIiwganM6IFwiUklDXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJTRURPTFwiLCBqczogXCJTRURPTFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGlja2VyXCIsIGpzOiBcInRpY2tlclwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiTEVJXCIsIGpzOiBcIkxFSVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiZW1haWxcIiwganM6IFwiZW1haWxcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNvbnRhY3RcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHIoXCJGbHVmZnlDb250YWN0SWRlbnRpZmllcnNcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJGbHVmZnlJbnRlcmFjdGlvblR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiRmx1ZmZ5Q29udGFjdElkZW50aWZpZXJzXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiZW1haWxcIiwganM6IFwiZW1haWxcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkZEU19JRFwiLCBqczogXCJGRFNfSURcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNvbnRhY3RMaXN0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiY29udGFjdHNcIiwganM6IFwiY29udGFjdHNcIiwgdHlwOiBhKHIoXCJDb250YWN0RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJDb250YWN0TGlzdFR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNvbnRleHRcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDb3VudHJ5XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiByKFwiQ291bnRyeUlEXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiQ291bnRyeVR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ291bnRyeUlEXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiQ09VTlRSWV9JU09BTFBIQTJcIiwganM6IFwiQ09VTlRSWV9JU09BTFBIQTJcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkNPVU5UUllfSVNPQUxQSEEzXCIsIGpzOiBcIkNPVU5UUllfSVNPQUxQSEEzXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJJU09BTFBIQTJcIiwganM6IFwiSVNPQUxQSEEyXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJJU09BTFBIQTNcIiwganM6IFwiSVNPQUxQSEEzXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDdXJyZW5jeVwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogcihcIkN1cnJlbmN5SURcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkN1cnJlbmN5VHlwZVwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ3VycmVuY3lJRFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIkNVUlJFTkNZX0lTT0NPREVcIiwganM6IFwiQ1VSUkVOQ1lfSVNPQ09ERVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiRW1haWxcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJyZWNpcGllbnRzXCIsIGpzOiBcInJlY2lwaWVudHNcIiwgdHlwOiByKFwiRW1haWxSZWNpcGllbnRzXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJzdWJqZWN0XCIsIGpzOiBcInN1YmplY3RcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRleHRCb2R5XCIsIGpzOiBcInRleHRCb2R5XCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiRW1haWxUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJFbWFpbFJlY2lwaWVudHNcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiRW1haWxSZWNpcGllbnRzSURcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiRW1haWxSZWNpcGllbnRzVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJjb250YWN0c1wiLCBqczogXCJjb250YWN0c1wiLCB0eXA6IHUodW5kZWZpbmVkLCBhKHIoXCJDb250YWN0RWxlbWVudFwiKSkpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJFbWFpbFJlY2lwaWVudHNJRFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImVtYWlsXCIsIGpzOiBcImVtYWlsXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJGRFNfSURcIiwganM6IFwiRkRTX0lEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJJbnN0cnVtZW50XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiByKFwiRmx1ZmZ5SW5zdHJ1bWVudElkZW50aWZpZXJzXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJtYXJrZXRcIiwganM6IFwibWFya2V0XCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJQdXJwbGVNYXJrZXRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiUHVycGxlSW50ZXJhY3Rpb25UeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkZsdWZmeUluc3RydW1lbnRJZGVudGlmaWVyc1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIkJCR1wiLCBqczogXCJCQkdcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkNVU0lQXCIsIGpzOiBcIkNVU0lQXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJGRFNfSURcIiwganM6IFwiRkRTX0lEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJGSUdJXCIsIGpzOiBcIkZJR0lcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIklTSU5cIiwganM6IFwiSVNJTlwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiUEVSTUlEXCIsIGpzOiBcIlBFUk1JRFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiUklDXCIsIGpzOiBcIlJJQ1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiU0VET0xcIiwganM6IFwiU0VET0xcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpY2tlclwiLCBqczogXCJ0aWNrZXJcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlB1cnBsZU1hcmtldFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIkJCR1wiLCBqczogXCJCQkdcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkNPVU5UUllfSVNPQUxQSEEyXCIsIGpzOiBcIkNPVU5UUllfSVNPQUxQSEEyXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJNSUNcIiwganM6IFwiTUlDXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkluc3RydW1lbnRMaXN0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaW5zdHJ1bWVudHNcIiwganM6IFwiaW5zdHJ1bWVudHNcIiwgdHlwOiBhKHIoXCJJbnN0cnVtZW50RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJJbnN0cnVtZW50TGlzdFR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkludGVyYWN0aW9uXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiZGVzY3JpcHRpb25cIiwganM6IFwiZGVzY3JpcHRpb25cIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiSW50ZXJhY3Rpb25JRFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImluaXRpYXRvclwiLCBqczogXCJpbml0aWF0b3JcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkNvbnRhY3RFbGVtZW50XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiaW50ZXJhY3Rpb25UeXBlXCIsIGpzOiBcImludGVyYWN0aW9uVHlwZVwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcIm9yaWdpblwiLCBqczogXCJvcmlnaW5cIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBhcnRpY2lwYW50c1wiLCBqczogXCJwYXJ0aWNpcGFudHNcIiwgdHlwOiByKFwiQ29udGFjdExpc3RPYmplY3RcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVSYW5nZVwiLCBqczogXCJ0aW1lUmFuZ2VcIiwgdHlwOiByKFwiVGltZVJhbmdlT2JqZWN0XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiSW50ZXJhY3Rpb25UeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkludGVyYWN0aW9uSURcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJTQUxFU0ZPUkNFXCIsIGpzOiBcIlNBTEVTRk9SQ0VcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIlNJTkdMRVRSQUNLXCIsIGpzOiBcIlNJTkdMRVRSQUNLXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJVUklcIiwganM6IFwiVVJJXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJNZXNzYWdlXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiZW50aXRpZXNcIiwganM6IFwiZW50aXRpZXNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShyKFwiRmx1ZmZ5QWN0aW9uXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRleHRcIiwganM6IFwidGV4dFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiRmx1ZmZ5TWVzc2FnZVRleHRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiTWVzc2FnZVR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkZsdWZmeUFjdGlvblwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkFjdGlvblRhcmdldEFwcFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiQ29udGV4dEVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRcIiwganM6IFwiaW50ZW50XCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aXRsZVwiLCBqczogXCJ0aXRsZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkVudGl0eVR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImRhdGFcIiwganM6IFwiZGF0YVwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiRmx1ZmZ5RGF0YVwiKSkgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkZsdWZmeURhdGFcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJkYXRhVXJpXCIsIGpzOiBcImRhdGFVcmlcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJGbHVmZnlNZXNzYWdlVGV4dFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcInRleHQvbWFya2Rvd25cIiwganM6IFwidGV4dC9tYXJrZG93blwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGV4dC9wbGFpblwiLCBqczogXCJ0ZXh0L3BsYWluXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJOb3RoaW5nXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIk5vdGhpbmdUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJPcmRlclwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImRldGFpbHNcIiwganM6IFwiZGV0YWlsc1wiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiUHVycGxlT3JkZXJEZXRhaWxzXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiBtKFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJPcmRlclR5cGVcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlB1cnBsZU9yZGVyRGV0YWlsc1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcInByb2R1Y3RcIiwganM6IFwicHJvZHVjdFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiUHJvZHVjdE9iamVjdFwiKSkgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlByb2R1Y3RPYmplY3RcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IG0oXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RydW1lbnRcIiwganM6IFwiaW5zdHJ1bWVudFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiSW5zdHJ1bWVudEVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJQcm9kdWN0VHlwZVwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiT3JkZXJMaXN0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwib3JkZXJzXCIsIGpzOiBcIm9yZGVyc1wiLCB0eXA6IGEocihcIk9yZGVyRWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJPcmRlckxpc3RUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJPcmRlckVsZW1lbnRcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJkZXRhaWxzXCIsIGpzOiBcImRldGFpbHNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkZsdWZmeU9yZGVyRGV0YWlsc1wiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogbShcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiT3JkZXJUeXBlXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJGbHVmZnlPcmRlckRldGFpbHNcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJwcm9kdWN0XCIsIGpzOiBcInByb2R1Y3RcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIlByb2R1Y3RPYmplY3RcIikpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJPcmdhbml6YXRpb25cIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHIoXCJPcmdhbml6YXRpb25JZGVudGlmaWVyc1wiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIlN0aWNreUludGVyYWN0aW9uVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJPcmdhbml6YXRpb25JZGVudGlmaWVyc1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIkZEU19JRFwiLCBqczogXCJGRFNfSURcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkxFSVwiLCBqczogXCJMRUlcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIlBFUk1JRFwiLCBqczogXCJQRVJNSURcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlBvcnRmb2xpb1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcInBvc2l0aW9uc1wiLCBqczogXCJwb3NpdGlvbnNcIiwgdHlwOiBhKHIoXCJQb3NpdGlvbkVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiUG9ydGZvbGlvVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiUG9zaXRpb25FbGVtZW50XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaG9sZGluZ1wiLCBqczogXCJob2xkaW5nXCIsIHR5cDogMy4xNCB9LFxuICAgICAgICB7IGpzb246IFwiaW5zdHJ1bWVudFwiLCBqczogXCJpbnN0cnVtZW50XCIsIHR5cDogcihcIkluc3RydW1lbnRFbGVtZW50XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiUG9zaXRpb25UeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJQb3NpdGlvblwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImhvbGRpbmdcIiwganM6IFwiaG9sZGluZ1wiLCB0eXA6IDMuMTQgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RydW1lbnRcIiwganM6IFwiaW5zdHJ1bWVudFwiLCB0eXA6IHIoXCJJbnN0cnVtZW50RWxlbWVudFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIlBvc2l0aW9uVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiUHJvZHVjdFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogbShcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaW5zdHJ1bWVudFwiLCBqczogXCJpbnN0cnVtZW50XCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJJbnN0cnVtZW50RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIlByb2R1Y3RUeXBlXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJUaW1lUmFuZ2VcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJlbmRUaW1lXCIsIGpzOiBcImVuZFRpbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgRGF0ZSkgfSxcbiAgICAgICAgeyBqc29uOiBcInN0YXJ0VGltZVwiLCBqczogXCJzdGFydFRpbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgRGF0ZSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJUaW1lUmFuZ2VUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJUcmFkZVwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogbShcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwcm9kdWN0XCIsIGpzOiBcInByb2R1Y3RcIiwgdHlwOiByKFwiUHJvZHVjdE9iamVjdFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIlRyYWRlVHlwZVwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiVHJhZGVMaXN0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwidHJhZGVzXCIsIGpzOiBcInRyYWRlc1wiLCB0eXA6IGEocihcIlRyYWRlRWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJUcmFkZUxpc3RUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJUcmFkZUVsZW1lbnRcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IG0oXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwicHJvZHVjdFwiLCBqczogXCJwcm9kdWN0XCIsIHR5cDogcihcIlByb2R1Y3RPYmplY3RcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJUcmFkZVR5cGVcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlRyYW5zYWN0aW9uUmVzdWx0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJDb250ZXh0RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInN0YXR1c1wiLCBqczogXCJzdGF0dXNcIiwgdHlwOiByKFwiVHJhbnNhY3Rpb25TdGF0dXNcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJUcmFuc2FjdGlvblJlc3VsdFR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlZhbHVhdGlvblwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIkNVUlJFTkNZX0lTT0NPREVcIiwganM6IFwiQ1VSUkVOQ1lfSVNPQ09ERVwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImV4cGlyeVRpbWVcIiwganM6IFwiZXhwaXJ5VGltZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBEYXRlKSB9LFxuICAgICAgICB7IGpzb246IFwicHJpY2VcIiwganM6IFwicHJpY2VcIiwgdHlwOiB1KHVuZGVmaW5lZCwgMy4xNCkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJWYWx1YXRpb25UeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ2YWx1YXRpb25UaW1lXCIsIGpzOiBcInZhbHVhdGlvblRpbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgRGF0ZSkgfSxcbiAgICAgICAgeyBqc29uOiBcInZhbHVlXCIsIGpzOiBcInZhbHVlXCIsIHR5cDogMy4xNCB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQWN0aW9uVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5hY3Rpb25cIixcbiAgICBdLFxuICAgIFwiUHVycGxlSW50ZXJhY3Rpb25UeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmluc3RydW1lbnRcIixcbiAgICBdLFxuICAgIFwiVGltZVJhbmdlVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy50aW1lcmFuZ2VcIixcbiAgICBdLFxuICAgIFwiQ2hhcnRTdHlsZVwiOiBbXG4gICAgICAgIFwiYmFyXCIsXG4gICAgICAgIFwiY2FuZGxlXCIsXG4gICAgICAgIFwiY3VzdG9tXCIsXG4gICAgICAgIFwiaGVhdG1hcFwiLFxuICAgICAgICBcImhpc3RvZ3JhbVwiLFxuICAgICAgICBcImxpbmVcIixcbiAgICAgICAgXCJtb3VudGFpblwiLFxuICAgICAgICBcInBpZVwiLFxuICAgICAgICBcInNjYXR0ZXJcIixcbiAgICAgICAgXCJzdGFja2VkLWJhclwiLFxuICAgIF0sXG4gICAgXCJDaGFydFR5cGVcIjogW1xuICAgICAgICBcImZkYzMuY2hhcnRcIixcbiAgICBdLFxuICAgIFwiRmx1ZmZ5SW50ZXJhY3Rpb25UeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmNvbnRhY3RcIixcbiAgICBdLFxuICAgIFwiQ29udGFjdExpc3RUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmNvbnRhY3RMaXN0XCIsXG4gICAgXSxcbiAgICBcIkVudGl0eVR5cGVcIjogW1xuICAgICAgICBcImZkYzMuYWN0aW9uXCIsXG4gICAgICAgIFwiZmRjMy5lbnRpdHkuZmlsZUF0dGFjaG1lbnRcIixcbiAgICBdLFxuICAgIFwiTWVzc2FnZVR5cGVcIjogW1xuICAgICAgICBcImZkYzMubWVzc2FnZVwiLFxuICAgIF0sXG4gICAgXCJDaGF0SW5pdFNldHRpbmdzVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5jaGF0LmluaXRTZXR0aW5nc1wiLFxuICAgIF0sXG4gICAgXCJDaGF0Um9vbVR5cGVcIjogW1xuICAgICAgICBcImZkYzMuY2hhdC5yb29tXCIsXG4gICAgXSxcbiAgICBcIkNoYXRNZXNzYWdlVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5jaGF0Lm1lc3NhZ2VcIixcbiAgICBdLFxuICAgIFwiVGVudGFjbGVkSW50ZXJhY3Rpb25UeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmNvbnRhY3RcIixcbiAgICAgICAgXCJmZGMzLmluc3RydW1lbnRcIixcbiAgICAgICAgXCJmZGMzLm9yZ2FuaXphdGlvblwiLFxuICAgIF0sXG4gICAgXCJDaGF0U2VhcmNoQ3JpdGVyaWFUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmNoYXQuc2VhcmNoQ3JpdGVyaWFcIixcbiAgICBdLFxuICAgIFwiQ291bnRyeVR5cGVcIjogW1xuICAgICAgICBcImZkYzMuY291bnRyeVwiLFxuICAgIF0sXG4gICAgXCJDdXJyZW5jeVR5cGVcIjogW1xuICAgICAgICBcImZkYzMuY3VycmVuY3lcIixcbiAgICBdLFxuICAgIFwiRW1haWxSZWNpcGllbnRzVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5jb250YWN0XCIsXG4gICAgICAgIFwiZmRjMy5jb250YWN0TGlzdFwiLFxuICAgIF0sXG4gICAgXCJFbWFpbFR5cGVcIjogW1xuICAgICAgICBcImZkYzMuZW1haWxcIixcbiAgICBdLFxuICAgIFwiSW5zdHJ1bWVudExpc3RUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmluc3RydW1lbnRMaXN0XCIsXG4gICAgXSxcbiAgICBcIkludGVyYWN0aW9uVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5pbnRlcmFjdGlvblwiLFxuICAgIF0sXG4gICAgXCJOb3RoaW5nVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5ub3RoaW5nXCIsXG4gICAgXSxcbiAgICBcIlByb2R1Y3RUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLnByb2R1Y3RcIixcbiAgICBdLFxuICAgIFwiT3JkZXJUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLm9yZGVyXCIsXG4gICAgXSxcbiAgICBcIk9yZGVyTGlzdFR5cGVcIjogW1xuICAgICAgICBcImZkYzMub3JkZXJMaXN0XCIsXG4gICAgXSxcbiAgICBcIlN0aWNreUludGVyYWN0aW9uVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5vcmdhbml6YXRpb25cIixcbiAgICBdLFxuICAgIFwiUG9zaXRpb25UeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLnBvc2l0aW9uXCIsXG4gICAgXSxcbiAgICBcIlBvcnRmb2xpb1R5cGVcIjogW1xuICAgICAgICBcImZkYzMucG9ydGZvbGlvXCIsXG4gICAgXSxcbiAgICBcIlRyYWRlVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy50cmFkZVwiLFxuICAgIF0sXG4gICAgXCJUcmFkZUxpc3RUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLnRyYWRlTGlzdFwiLFxuICAgIF0sXG4gICAgXCJUcmFuc2FjdGlvblN0YXR1c1wiOiBbXG4gICAgICAgIFwiQ3JlYXRlZFwiLFxuICAgICAgICBcIkRlbGV0ZWRcIixcbiAgICAgICAgXCJGYWlsZWRcIixcbiAgICAgICAgXCJVcGRhdGVkXCIsXG4gICAgXSxcbiAgICBcIlRyYW5zYWN0aW9uUmVzdWx0VHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy50cmFuc2FjdGlvblJlc3VsdFwiLFxuICAgIF0sXG4gICAgXCJWYWx1YXRpb25UeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLnZhbHVhdGlvblwiLFxuICAgIF1cbn07XG5cbi8qKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqIENvcHlyaWdodCBGSU5PUyBGREMzIGNvbnRyaWJ1dG9ycyAtIHNlZSBOT1RJQ0UgZmlsZVxuICovXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgU3RhbmRhcmRJbnRlbnR9IGluc3RlYWRcbiAqL1xudmFyIEludGVudHM7XG4oZnVuY3Rpb24gKEludGVudHMpIHtcbiAgICBJbnRlbnRzW1wiQ3JlYXRlSW50ZXJhY3Rpb25cIl0gPSBcIkNyZWF0ZUludGVyYWN0aW9uXCI7XG4gICAgSW50ZW50c1tcIlNlbmRDaGF0TWVzc2FnZVwiXSA9IFwiU2VuZENoYXRNZXNzYWdlXCI7XG4gICAgSW50ZW50c1tcIlN0YXJ0Q2FsbFwiXSA9IFwiU3RhcnRDYWxsXCI7XG4gICAgSW50ZW50c1tcIlN0YXJ0Q2hhdFwiXSA9IFwiU3RhcnRDaGF0XCI7XG4gICAgSW50ZW50c1tcIlN0YXJ0RW1haWxcIl0gPSBcIlN0YXJ0RW1haWxcIjtcbiAgICBJbnRlbnRzW1wiVmlld0FuYWx5c2lzXCJdID0gXCJWaWV3QW5hbHlzaXNcIjtcbiAgICBJbnRlbnRzW1wiVmlld0NoYXRcIl0gPSBcIlZpZXdDaGF0XCI7XG4gICAgSW50ZW50c1tcIlZpZXdDaGFydFwiXSA9IFwiVmlld0NoYXJ0XCI7XG4gICAgSW50ZW50c1tcIlZpZXdDb250YWN0XCJdID0gXCJWaWV3Q29udGFjdFwiO1xuICAgIEludGVudHNbXCJWaWV3SG9sZGluZ3NcIl0gPSBcIlZpZXdIb2xkaW5nc1wiO1xuICAgIEludGVudHNbXCJWaWV3SW5zdHJ1bWVudFwiXSA9IFwiVmlld0luc3RydW1lbnRcIjtcbiAgICBJbnRlbnRzW1wiVmlld0ludGVyYWN0aW9uc1wiXSA9IFwiVmlld0ludGVyYWN0aW9uc1wiO1xuICAgIEludGVudHNbXCJWaWV3TWVzc2FnZXNcIl0gPSBcIlZpZXdNZXNzYWdlc1wiO1xuICAgIEludGVudHNbXCJWaWV3TmV3c1wiXSA9IFwiVmlld05ld3NcIjtcbiAgICBJbnRlbnRzW1wiVmlld09yZGVyc1wiXSA9IFwiVmlld09yZGVyc1wiO1xuICAgIEludGVudHNbXCJWaWV3UHJvZmlsZVwiXSA9IFwiVmlld1Byb2ZpbGVcIjtcbiAgICBJbnRlbnRzW1wiVmlld1F1b3RlXCJdID0gXCJWaWV3UXVvdGVcIjtcbiAgICBJbnRlbnRzW1wiVmlld1Jlc2VhcmNoXCJdID0gXCJWaWV3UmVzZWFyY2hcIjtcbn0pKEludGVudHMgfHwgKEludGVudHMgPSB7fSkpO1xuXG5leHBvcnQgeyBCcmlkZ2luZ0Vycm9yLCBCcmlkZ2luZ1R5cGVzLCBDaGFubmVsRXJyb3IsIENvbnRleHRUeXBlcywgQ29udmVydCwgSW50ZW50cywgT3BlbkVycm9yLCBSZXNvbHZlRXJyb3IsIFJlc3VsdEVycm9yLCBhZGRDb250ZXh0TGlzdGVuZXIsIGFkZEludGVudExpc3RlbmVyLCBicm9hZGNhc3QsIGNvbXBhcmVWZXJzaW9uTnVtYmVycywgY3JlYXRlUHJpdmF0ZUNoYW5uZWwsIGZkYzNSZWFkeSwgZmluZEluc3RhbmNlcywgZmluZEludGVudCwgZmluZEludGVudHNCeUNvbnRleHQsIGdldEFwcE1ldGFkYXRhLCBnZXRDdXJyZW50Q2hhbm5lbCwgZ2V0SW5mbywgZ2V0T3JDcmVhdGVDaGFubmVsLCBnZXRTeXN0ZW1DaGFubmVscywgZ2V0VXNlckNoYW5uZWxzLCBpc1N0YW5kYXJkQ29udGV4dFR5cGUsIGlzU3RhbmRhcmRJbnRlbnQsIGpvaW5DaGFubmVsLCBqb2luVXNlckNoYW5uZWwsIGxlYXZlQ3VycmVudENoYW5uZWwsIG9wZW4sIHJhaXNlSW50ZW50LCByYWlzZUludGVudEZvckNvbnRleHQsIHZlcnNpb25Jc0F0TGVhc3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZkYzMuZXNtLmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRDdXJyZW50Q2hhbm5lbCB9IGZyb20gXCJAZmlub3MvZmRjM1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdERvbSgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gZWxlbWVudHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXREb20oKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgYXBwQ2hhbm5lbCA9IGF3YWl0IGdldEN1cnJlbnRDaGFubmVsKCk7XG5cblx0XHRpZiAoYXBwQ2hhbm5lbCkge1xuXHRcdFx0YXdhaXQgYXBwQ2hhbm5lbC5hZGRDb250ZXh0TGlzdGVuZXIobnVsbCwgKGN0eCkgPT4ge1xuXHRcdFx0XHRpZiAoY3R4LnR5cGUgPT09IFwiZmRjMy5pbnN0cnVtZW50XCIpIHtcblx0XHRcdFx0XHRjb25zdCByZWNlaXZlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjcmVjZWl2ZWQtaW5zdHJ1bWVudFwiKTtcblx0XHRcdFx0XHRpZiAocmVjZWl2ZUVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdHJlY2VpdmVFbGVtZW50LnZhbHVlID0gY3R4LmlkPy50aWNrZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHNob3dFcnJvcihlcnIpO1xuXHR9XG59XG5cbi8qKlxuICogU2hvdyBhbiBlcnJvciBvbiB0aGUgVUkuXG4gKiBAcGFyYW0gZXJyIFRoZSBlcnJvciB0byBkaXNwbGF5LlxuICovXG5mdW5jdGlvbiBzaG93RXJyb3IoZXJyOiB1bmtub3duKTogdm9pZCB7XG5cdGNvbnN0IGVyckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JcIik7XG5cdGlmIChlcnJEb20pIHtcblx0XHRlcnJEb20uaW5uZXJIVE1MID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGVycik7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==