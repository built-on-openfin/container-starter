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


/***/ }),

/***/ "../../node_modules/@openfin/excel/openfin.excel.mjs":
/*!***********************************************************!*\
  !*** ../../node_modules/@openfin/excel/openfin.excel.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdapterError: () => (/* binding */ Ne),
/* harmony export */   ApiError: () => (/* binding */ Se),
/* harmony export */   EventError: () => (/* binding */ De),
/* harmony export */   ExcelCellBorderLineStyle: () => (/* binding */ Ue),
/* harmony export */   ExcelCellHorizontalAlignment: () => (/* binding */ Fe),
/* harmony export */   ExcelCellPattern: () => (/* binding */ Pe),
/* harmony export */   ExcelCellVerticalAlignment: () => (/* binding */ xe),
/* harmony export */   ExcelFilterOperator: () => (/* binding */ Le),
/* harmony export */   InitializationError: () => (/* binding */ Be),
/* harmony export */   InvalidCellRangeAddressError: () => (/* binding */ je),
/* harmony export */   ParameterError: () => (/* binding */ Re),
/* harmony export */   disableLogging: () => (/* binding */ Oe),
/* harmony export */   enableLogging: () => (/* binding */ Ve),
/* harmony export */   getExcelApplication: () => (/* binding */ ze)
/* harmony export */ });
var e,t,r={d:(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},a={};r.d(a,{dq:()=>AdapterError,MS:()=>ApiError,xQ:()=>EventError,sO:()=>We,Zu:()=>fe,I3:()=>$e,$U:()=>Ge,i0:()=>Ie,cX:()=>InitializationError,gH:()=>InvalidCellRangeAddressError,_W:()=>ParameterError,U$:()=>i,U7:()=>l,rd:()=>be});class ApiError extends Error{constructor(e="An unexpected error has occurred",t){var r;super(e),t&&(this.innerError=t&&t),this.stack=null===(r=this.stack)||void 0===r?void 0:r.replace(/^(\w*Error)/,`${this.constructor.name}`)}}class AdapterError extends ApiError{constructor(e="Failed to execute adapter function",t){super(e,t)}}class EventError extends ApiError{constructor(e="Failed to raise event",t){super(e,t)}}class InitializationError extends ApiError{constructor(e="Failed to initialize adapter",t){super(e,t)}}class InvalidCellRangeAddressError extends ApiError{constructor(e="The cell range address is not valid",t){super(e,t)}}class ParameterError extends ApiError{constructor(e="Invalid parameter value",t){super(e,t)}}!function(e){e.ActivateWorkbook="ActivateWorkbook",e.ActivateWorksheet="ActivateWorksheet",e.AddWorksheet="AddWorksheet",e.CalculateWorkbook="CalculateWorkbook",e.CalculateWorksheet="CalculateWorksheet",e.ClearAllCells="ClearAllCells",e.ClearAllCellValues="ClearAllCellValues",e.ClearAllCellFormatting="ClearAllCellFormatting",e.ClearCellValues="ClearCellValues",e.ClearCellFormatting="ClearCellFormatting",e.ClearCells="ClearCells",e.CloseWorkbook="CloseWorkbook",e.CreateWorkbook="CreateWorkbook",e.DeleteWorksheet="DeleteWorksheet",e.DeregisterEvent="DeregisterEvent",e.EventFired="EventFired",e.FilterCells="FilterCells",e.GetActiveWorksheet="GetActiveWorksheet",e.GetCalculationMode="GetCalculationMode",e.GetCellNames="GetCellNames",e.GetCells="GetCells",e.GetRangeAddress="GetRangeAddress",e.GetWorkbookById="GetWorkbookById",e.GetWorkbookFilePath="GetWorkbookFilePath",e.GetWorkbookName="GetWorkbookName",e.GetWorkbooks="GetWorkbooks",e.GetWorkbookWindowBounds="GetWorkbookWindowBounds",e.GetWorksheetById="GetWorksheetById",e.GetWorksheetByName="GetWorksheetByName",e.GetWorksheetName="GetWorksheetName",e.GetWorksheets="GetWorksheets",e.LogMessage="LogMessage",e.OpenWorkbook="OpenWorkbook",e.ProtectWorksheet="ProtectWorksheet",e.QuitApplication="QuitApplication",e.RegisterEvent="RegisterEvent",e.SaveWorkbook="SaveWorkbook",e.SaveWorkbookAs="SaveWorkbookAs",e.SetCellValues="SetCellValues",e.SetCellFormatting="SetCellFormatting",e.SetCellName="SetCellName",e.SetWorkbookWindowBounds="SetWorkbookWindowBounds",e.SetWorksheetName="SetWorksheetName"}(e||(e={})),function(e){e.Activate="Activate",e.ActivateWorksheet="ActivateWorksheet",e.AddWorksheet="AddWorksheet",e.Change="Change",e.Close="Close",e.Deactivate="Deactivate",e.DeleteWorksheet="DeleteWorksheet"}(t||(t={}));const o="1.5.0";let n=!1;const s="[@openfin/excel]",i=()=>{n=!1},l=()=>{n=!0,d(`v${o}`)},c=(e,t)=>{n&&(e.innerError?console.error(t?`${s} ${t}`:s,e,"\n\n(inner)",e.innerError):console.error(t?`${s} ${t}`:s,e))},d=(...e)=>{n&&console.log(s,...e)},h=(...e)=>{n&&console.warn(s,...e)};"undefined"==typeof fin&&Object.assign(window,{fin:{}}),Object.assign(fin,{Integrations:{Excel:{enableLogging:l,disableLogging:i}}});const w=new Map,p=async(r,a,o,n,s)=>{if(!a||!a.eventTarget||!a.objectId){const e=new EventError("Event registration missing required values");throw c(e),e}const i=Object.keys(t).find((e=>e.toLowerCase()===o.toLowerCase()));if(!i){const e=new EventError(`Unsupported event name: ${o}`);throw c(e),e}const l=Object.assign({eventName:t[i]},a);d("Registering event",l);try{const t=await r.dispatch(e.RegisterEvent,l),a={handler:s,listener:n};w.set(t,a)}catch(e){throw new AdapterError(void 0,e)}},k=(e,t)=>{const{eventRegistrationId:r}=e,a=w.get(r);if(!a)throw new EventError(`No registered event listener found for id: ${r}`);d("Event payload received",e),a.handler(e)},u=t=>async r=>{let a;for(const[e,t]of w)if(t.listener===r){a=e;break}if(!a)throw new EventError;d("Deregistering event:",a);try{await t.dispatch(e.DeregisterEvent,a),w.delete(a)}catch(e){throw new AdapterError}};var g;!function(e){e.Workbook="Workbook",e.Worksheet="Worksheet",e.CellRange="CellRange"}(g||(g={}));const m=()=>void 0!==crypto.randomUUID?crypto.randomUUID():"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>{const t=window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>Number(e)/4;return(Number(e)^t).toString(16)})),C=new Map,y=(e,t)=>async(r,a)=>p(e,t,r,a,W(a)),v=(t,r,a)=>async()=>{d(`Cell range: Clear; address:${a} (${r})`);const o={address:a,objectId:r};try{await t.dispatch(e.ClearCells,o)}catch(e){throw new AdapterError}},b=(t,r,a)=>async()=>{d(`Cell range: Clear formatting; address:${a} (${r})`);const o={address:a,objectId:r};try{await t.dispatch(e.ClearCellFormatting,o)}catch(e){throw new AdapterError}},A=(t,r,a)=>async()=>{d(`Cell range: Clear values; address:${a} (${r})`);const o={address:a,objectId:r};try{await t.dispatch(e.ClearCellValues,o)}catch(e){throw new AdapterError}},E=(e,t,r)=>(a,o=1e3)=>{if(o<=0)throw new ApiError("Update interval must be a positive number");const n=m();d(`Cell range: Create data stream; streamId:${n}; address:${r}; updateInterval:${o} (${t})`);const s={address:r,close:()=>{d(`Closed stream (${n})`),(e=>{var t;try{const r=C.get(e);if(!r)throw new ApiError(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(t=r.timer)&&void 0!==t?t:void 0)&&F(e),C.delete(e)}catch(e){throw c(e),e}})(n)},id:n,start:()=>{d(`Started streaming (${n})`),U(n,a,e,t)},stop:()=>{d(`Stopped streaming (${n})`),F(n)},updateInterval:o,worksheetId:t};return C.set(n,{dataStream:s}),s},W=e=>r=>{var a;try{if((null===(a=r.eventName)||void 0===a?void 0:a.toUpperCase())===t.Change.toUpperCase())return e(r.changedCells);throw new EventError(`Unexpected cell range event: ${r.eventName}`)}catch(e){c(e)}},f=(e,t,r)=>async()=>{d(`Cell range: Get cells; address:${r} (${t})`);const a=await $(e,t,r);return d(`${r}:`,a),a},$=async(t,r,a)=>{const o={address:a,objectId:r};try{return await t.dispatch(e.GetCells,o)}catch(e){throw new AdapterError}},G=(t,r,a)=>async()=>{d(`Cell range: Get name; address:${a} (${r})`);const o={address:a,objectId:r};try{return await t.dispatch(e.GetCellNames,o)}catch(e){throw new AdapterError}},I=(t,r,a)=>async(o,n,s,i,l=!0)=>{d(`Cell range: Set filter; address:${a} (${r})`,{columnIndex:o,filterOperator:n,criteria1:s,criteria2:i,visibleDropDown:l});const c={address:a,criteria1:s,criteria2:i,columnIndex:o,filterOperator:n,objectId:r,visibleDropDown:l};try{await t.dispatch(e.FilterCells,c)}catch(e){throw new AdapterError}},N=(t,r,a)=>async o=>{d(`Cell range: Set formatting; address:${a} (${r})`,o);const n={address:a,formatting:o,objectId:r};try{await t.dispatch(e.SetCellFormatting,n)}catch(e){throw new AdapterError}},S=(t,r,a)=>async o=>{const n=o.trim();let s;if(!n)throw s=new ParameterError("Name cannot be an empty string"),c(s),s;if(n.length>255)throw s=new ParameterError("Name must be 255 characters or less"),c(s),s;if(/[^a-zA-Z0-9_.?\\"']/.test(n))throw s=new ParameterError("Name contains invalid characters"),c(s),s;if(/^\d/.test(n))throw s=new ParameterError("Name cannot start with a number"),c(s),s;d(`Cell range: Set name; address:${a}; newName:${n} (${r})`);const i={address:a,name:n,objectId:r};try{await t.dispatch(e.SetCellName,i)}catch(e){throw new AdapterError}},D=(t,r,a)=>async o=>{d(`Cell range: Set values; address:${a} (${r})`,o);const n={address:a,objectId:r,valuesMap:o};try{await t.dispatch(e.SetCellValues,n)}catch(e){throw new AdapterError}},U=(e,t,r,a)=>{var o;try{const n=C.get(e);if(!n)throw new ApiError(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(o=n.timer)&&void 0!==o?o:void 0)&&F(e);const{address:s,updateInterval:i}=n.dataStream,l=async()=>{const o=await t();try{await D(r,a,s)([[o]])}catch(t){h(`Unable to update cell range for stream with id ${e}: ${null==t?void 0:t.message}`)}},c=window.setInterval(l,i);n.timer=c}catch(e){throw c(e),e}},F=e=>{var t;try{const r=C.get(e);if(!r)throw new ApiError(`Unable to find registered data stream with id ${e}`);if(void 0===(null!==(t=r.timer)&&void 0!==t?t:void 0))return;window.clearInterval(r.timer),r.timer=void 0}catch(e){throw c(e),e}},P=(t,r)=>async()=>{d(`Worksheet: Activate (${r})`);try{await t.dispatch(e.ActivateWorksheet,r)}catch(e){throw new AdapterError}},x=(e,t)=>async(r,a)=>p(e,t,r,a,V(a)),L=(t,r)=>async()=>{d(`Worksheet: Calculate (${r})`);try{await t.dispatch(e.CalculateWorksheet,r)}catch(e){throw new AdapterError}},B=(t,r)=>async()=>{d(`Worksheet: Clear all cell formatting (${r})`);try{await t.dispatch(e.ClearAllCellFormatting,r)}catch(e){throw new AdapterError}},j=(t,r)=>async()=>{d(`Worksheet: Clear all cells (${r})`);try{await t.dispatch(e.ClearAllCells,r)}catch(e){throw new AdapterError}},R=(t,r)=>async()=>{d(`Worksheet: Clear all cell values (${r})`);try{await t.dispatch(e.ClearAllCellValues,r)}catch(e){throw new AdapterError}},O=(e,t)=>{const r={eventTarget:g.Worksheet,objectId:t};return{objectId:t,activate:P(e,t),addEventListener:x(e,r),calculate:L(e,t),clearAllCellFormatting:B(e,t),clearAllCells:j(e,t),clearAllCellValues:R(e,t),clearCellFormatting:r=>b(e,t,r)(),clearCells:r=>v(e,t,r)(),clearCellValues:r=>A(e,t,r)(),createDataStream:(r,a,o)=>E(e,t,r)(a,o),delete:z(e,t),filterCells:(r,a,o,n,s,i)=>I(e,t,r)(a,o,n,s,i),getCellRange:M(e,r),getCells:r=>f(e,t,r)(),getName:T(e,t),protect:H(e,t),removeEventListener:u(e),setCellFormatting:(r,a)=>N(e,t,r)(a),setCellName:(r,a)=>S(e,t,r)(a),setCellValues:(r,a)=>D(e,t,r)(a),setName:Q(e,t)}},V=e=>r=>{var a;try{switch(null===(a=r.eventName)||void 0===a?void 0:a.toUpperCase()){case t.Activate.toUpperCase():case t.Deactivate.toUpperCase():return e();case t.Change.toUpperCase():return e(r.changedCells);default:throw new EventError(`Unexpected worksheet event: ${r.eventName}`)}}catch(e){c(e)}},z=(t,r)=>async()=>{d(`Worksheet: Delete (${r})`);try{await t.dispatch(e.DeleteWorksheet,r)}catch(e){throw new AdapterError}},M=(t,r)=>async a=>{const{objectId:o}=r;d(`Worksheet: Get cell range; address:${a} (${o})`);try{const n={address:a,objectId:o},s=await t.dispatch(e.GetRangeAddress,n);return((e,t,r)=>{const{objectId:a}=t,o={cellRangeAddress:r,eventTarget:g.CellRange,objectId:a};return{addEventListener:y(e,o),address:r,clear:v(e,a,r),clearFormatting:b(e,a,r),clearValues:A(e,a,r),createDataStream:E(e,a,r),getCells:f(e,a,r),getNames:G(e,a,r),removeEventListener:u(e),setFilter:I(e,a,r),setFormatting:N(e,a,r),setName:S(e,a,r),setValues:D(e,a,r)}})(t,r,s)}catch(e){if(e.message.indexOf("Unable to get cell range")>=0){const e=new InvalidCellRangeAddressError;throw c(e),e}throw new AdapterError}},T=(t,r)=>async()=>{d(`Worksheet: Get name (${r})`);try{return await t.dispatch(e.GetWorksheetName,r)}catch(e){throw new AdapterError}},H=(t,r)=>async()=>{d(`Worksheet: Protect (${r})`);try{await t.dispatch(e.ProtectWorksheet,r)}catch(e){throw new AdapterError}},Q=(t,r)=>async a=>{const o=a.slice(0,31).replace(/[:\\/?*[\]]/g,"").trim();let n;if(!o)throw n=new ParameterError("Invalid worksheet name"),c(n),n;d(`Worksheet: Set name; newWorksheetName:${o} (${r})`);const s={newWorksheetName:o,objectId:r};try{return await t.dispatch(e.SetWorksheetName,s)}catch(e){throw new AdapterError}},_=(t,r)=>async()=>{d(`Workbook: Activate (${r})`);try{return await t.dispatch(e.ActivateWorkbook,r)}catch(e){throw new AdapterError}},q=(e,t)=>async(r,a)=>p(e,t,r,a,Y(e,a)),J=(t,r)=>async()=>{let a;d(`Workbook: Add worksheet (${r})`);try{a=await t.dispatch(e.AddWorksheet,r)}catch(e){throw new AdapterError}return O(t,a)},K=(t,r)=>async()=>{d(`Workbook: Calculate (${r})`);try{await t.dispatch(e.CalculateWorkbook,r)}catch(e){throw new AdapterError}},X=(t,r)=>async()=>{d(`Workbook: Close (${r})`);try{return await t.dispatch(e.CloseWorkbook,r)}catch(e){throw new AdapterError}},Z=(e,t)=>{const r={eventTarget:g.Workbook,objectId:t};return{objectId:t,activate:_(e,t),addWorksheet:J(e,t),addEventListener:q(e,r),calculate:K(e,t),close:X(e,t),getActiveWorksheet:ee(e,t),getCalculationMode:te(e,t),getFilePath:re(e,t),getName:ae(e,t),getWindowBounds:oe(e,t),getWorksheetByName:ne(e,t),getWorksheets:se(e,t),removeEventListener:u(e),save:ie(e,t),saveAs:le(e,t),setWindowBounds:ce(e,t)}},Y=(e,r)=>a=>{var o;try{switch(null===(o=a.eventName)||void 0===o?void 0:o.toUpperCase()){case t.Activate.toUpperCase():case t.Close.toUpperCase():case t.Deactivate.toUpperCase():return r();case t.ActivateWorksheet.toUpperCase():case t.AddWorksheet.toUpperCase():return r(O(e,a.worksheetObjectId));case t.DeleteWorksheet.toUpperCase():return r(a.worksheetName);default:throw new EventError(`Unexpected workbook event: ${a.eventName}`)}}catch(e){c(e)}},ee=(t,r)=>async()=>{let a;d(`Workbook: Get active worksheet: (${r})`);try{a=await t.dispatch(e.GetActiveWorksheet,r)}catch(e){throw new AdapterError}return O(t,a)},te=(t,r)=>async()=>{d("Workbook: Get calculation mode");try{return await t.dispatch(e.GetCalculationMode,r)}catch(e){throw new AdapterError}},re=(t,r)=>async()=>{d(`Workbook: Get file path (${r})`);try{return await t.dispatch(e.GetWorkbookFilePath,r)}catch(e){throw new AdapterError}},ae=(t,r)=>async()=>{d(`Workbook: Get name (${r})`);try{return await t.dispatch(e.GetWorkbookName,r)}catch(e){throw new AdapterError}},oe=(t,r)=>async()=>{d(`Workbook: Get window bounds (${r})`);try{return await t.dispatch(e.GetWorkbookWindowBounds,r)}catch(e){throw new AdapterError}},ne=(t,r)=>async a=>{let o;d(`Workbook: Get worksheet by name: ${a} (${r})`);try{if(o=await t.dispatch(e.GetWorksheetByName,{objectId:r,worksheetName:a}),null===o)return null}catch(e){throw new AdapterError}return O(t,o)},se=(t,r)=>async()=>{let a;d(`Workbook: Get worksheets (${r})`);try{a=await t.dispatch(e.GetWorksheets,r)}catch(e){throw new AdapterError}return a.map((e=>O(t,e)))},ie=(t,r)=>async()=>{d(`Workbook: Save (${r})`);try{return await t.dispatch(e.SaveWorkbook,r)}catch(e){throw new AdapterError}},le=(t,r)=>async a=>{d(`Workbook: Save as; filePath:${a} (${r})`);try{return await t.dispatch(e.SaveWorkbookAs,{filePath:a,objectId:r})}catch(e){throw new AdapterError}},ce=(t,r)=>async a=>{d(`Workbook: Set window bounds (${r})`,a);const{height:o,left:n,top:s,width:i}=a;if(null!=o&&(Number.isNaN(o)||o<=0)){const e=new ParameterError("Workbook window height must be a number greater than zero.");throw c(e),e}if(null!=n&&Number.isNaN(n)){const e=new ParameterError("Workbook window left position must be a valid number.");throw c(e),e}if(null!=s&&Number.isNaN(s)){const e=new ParameterError("Workbook window top position must be a valid number.");throw c(e),e}if(null!=i&&(Number.isNaN(i)||i<=0)){const e=new ParameterError("Workbook window width must be a number greater than zero.");throw c(e),e}const l={newWindowBounds:a,objectId:r};try{return await t.dispatch(e.SetWorkbookWindowBounds,l)}catch(e){throw new AdapterError}},de=t=>async r=>{let a;d(`Application: Get workbook; id:${r}`);try{a=await t.dispatch(e.GetWorkbookById,r)}catch(e){throw new AdapterError}return Z(t,a)},he=t=>async()=>{let r;d("Application: Get workbooks");try{r=await t.dispatch(e.GetWorkbooks)}catch(e){throw new AdapterError}return r.map((e=>Z(t,e)))},we=t=>async r=>{d(`Application: Get worksheet; id:${r}`);try{r=await t.dispatch(e.GetWorksheetById,r)}catch(e){throw new AdapterError}return O(t,r)},pe=t=>async r=>{let a;d(`Application: Open workbook; filePath:${r}`);try{a=await t.dispatch(e.OpenWorkbook,r)}catch(e){throw new AdapterError}return Z(t,a)},ke=t=>async(r=!0)=>{d(`Application: Quit; displayAlerts:${r}`);try{return await t.dispatch(e.QuitApplication,r)}catch(e){throw new AdapterError}};var ue,ge;!function(e){e.ExcelApplication="EXCEL-APP"}(ue||(ue={})),function(e){e[e.Info=1]="Info",e[e.Warn=2]="Warn",e[e.Error=3]="Error"}(ge||(ge={}));const me="excel-adapter",Ce=m();let ye;const ve=()=>o,be=async(t=!1)=>{try{if(await(async e=>{try{d("Registering usage"),await fin.System.registerUsage({type:"integration-feature",data:{apiVersion:o,componentName:e}})}catch(t){h(`Unable to register usage for feature ${e}: ${null==t?void 0:t.message}`)}})(ue.ExcelApplication),!await(async e=>(await fin.InterApplicationBus.Channel.getAllChannels()).some((t=>t.channelName===e)))(Ce)){await(async()=>{var e;const t=null===(e=(await fin.Application.getCurrentSync().getManifest()).appAssets)||void 0===e?void 0:e.find((e=>e.alias===me));if(t)return void h("Detected adapter package in app manifest appAssets",t);if(await Ee())return void d("Using existing adapter package");const r={alias:me,src:`https://cdn.openfin.co/release/integrations/excel/${ve()}/OpenFin.Excel.zip`,target:"OpenFin.Excel.exe",version:ve()};d("Downloading adapter package",r);try{await fin.System.downloadAsset(r,(()=>{}))}catch(e){throw c("Unable to download adapter package"),e}})();const{securityRealm:e,port:r}=await fin.System.getRuntimeInfo();let{licenseKey:a}=await fin.Application.getCurrentSync().getManifest();a=null!=a?a:"NO_LICENSE_KEY";const o=fin.me.uuid;d("Initializing adapter",{adapterLoggingEnabled:t,channelName:Ce,licenseKey:a,port:r,securityRealm:e,uuid:o}),fin.System.launchExternalProcess({alias:me,arguments:`${o} ${a} ${r} ${e} ${Ce} ${t}`})}const r=fin.InterApplicationBus.Channel.connect(Ce,{payload:{version:ve()}}),a=new Promise((e=>{setTimeout(e,2e4)})).then((()=>{throw new Error("Connection to adapter timed out")}));ye=await Promise.race([r,a]),d(`Connected to adapter ${ye.providerIdentity.uuid} on channel ${Ce}`),ye.register(e.LogMessage,Ae),ye.register(e.EventFired,k)}catch(e){const t=new InitializationError(void 0,e);throw c(t),t}return{adapter:{channelName:Ce,version:ve()},createWorkbook:(r=ye,async()=>{let t;d("Application: Create workbook");try{t=await r.dispatch(e.CreateWorkbook)}catch(e){throw new AdapterError}return Z(r,t)}),getWorkbookById:de(ye),getWorkbooks:he(ye),getWorksheetById:we(ye),openWorkbook:pe(ye),quit:ke(ye)};var r},Ae=(e,t)=>{const{message:r,type:a}=e,o="[adapter]";switch(a){case ge.Error:c(r,o);break;case ge.Info:d(o,r);break;case ge.Warn:h(o,r);break;default:c(new Error(`Unknown log type: ${a}`))}},Ee=async()=>{try{const e=await fin.System.getAppAssetInfo({alias:me});return e&&e.version===ve()}catch(e){return!1}};var We,fe,$e,Ge,Ie;!function(e){e.Continuous="Continuous",e.Dash="Dash",e.DashDot="DashDot",e.DashDotDot="DashDotDot",e.Dot="Dot",e.Double="Double",e.SlantDashDot="SlantDashDot",e.None="None"}(We||(We={})),function(e){e.Center="Center",e.CenterAcrossSelection="CenterAcrossSelection",e.Distributed="Distributed",e.Fill="Fill",e.General="General",e.Justify="Justify",e.Left="Left",e.Right="Right"}(fe||(fe={})),function(e){e.Automatic="Automatic",e.Checker="Checker",e.CrissCross="CrissCross",e.Down="Down",e.Gray16="Gray16",e.Gray25="Gray25",e.Gray50="Gray50",e.Gray75="Gray75",e.Gray8="Gray8",e.Grid="Grid",e.Horizontal="Horizontal",e.LightDown="LightDown",e.LightHorizontal="LightHorizontal",e.LightUp="LightUp",e.LightVertical="LightVertical",e.LinearGradient="LinearGradient",e.None="None",e.RectangularGradient="RectangularGradient",e.SemiGray75="SemiGray75",e.Solid="Solid",e.Up="Up",e.Vertical="Vertical"}($e||($e={})),function(e){e.Bottom="Bottom",e.Center="Center",e.Distributed="Distributed",e.Justify="Justify",e.Top="Top"}(Ge||(Ge={})),function(e){e.And="And",e.Or="Or",e.Top10Items="Top10Items",e.Bottom10Items="Bottom10Items",e.Top10Percent="Top10Percent",e.Bottom10Percent="Bottom10Percent",e.FilterValues="FilterValues"}(Ie||(Ie={}));var Ne=a.dq,Se=a.MS,De=a.xQ,Ue=a.sO,Fe=a.Zu,Pe=a.I3,xe=a.$U,Le=a.i0,Be=a.cX,je=a.gH,Re=a._W,Oe=a.U$,Ve=a.U7,ze=a.rd;

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
/*!*****************************!*\
  !*** ./client/src/excel.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @finos/fdc3 */ "../../node_modules/@finos/fdc3/dist/fdc3.esm.js");
/* harmony import */ var _openfin_excel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openfin/excel */ "../../node_modules/@openfin/excel/openfin.excel.mjs");


const KNOWN_INSTRUMENTS = ["TSLA", "MSFT", "AAPL"];
let excel;
let openWorkbooks;
let selectedWorkbookIndex;
let openWorksheets;
let selectedWorksheetIndex;
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initialize the DOM components.
 */
async function initDom() {
    try {
        const resultsContainer = document.querySelector("#results-container");
        if (resultsContainer) {
            resultsContainer.style.display = "none";
        }
        excel = await (0,_openfin_excel__WEBPACK_IMPORTED_MODULE_1__.getExcelApplication)();
        await populateWorkbooks();
        const openExcelButton = document.querySelector("#open-excel");
        if (openExcelButton) {
            openExcelButton.addEventListener("click", async () => {
                await openExcel();
            });
        }
        const refreshWorkbookButton = document.querySelector("#workbook-refresh");
        if (refreshWorkbookButton) {
            refreshWorkbookButton.addEventListener("click", async () => populateWorkbooks());
        }
        const refreshWorksheetButton = document.querySelector("#worksheet-refresh");
        if (refreshWorksheetButton) {
            refreshWorksheetButton.addEventListener("click", async () => populateWorksheets());
        }
        const openWorkbooksSelect = document.querySelector("#workbooks");
        if (openWorkbooksSelect) {
            openWorkbooksSelect.addEventListener("change", async (e) => selectWorkbook(e.target.value));
        }
        const openWorksheetsSelect = document.querySelector("#worksheets");
        if (openWorksheetsSelect) {
            openWorksheetsSelect.addEventListener("change", async (e) => selectWorksheet(e.target.value));
        }
        const setValueButton = document.querySelector("#set-value");
        if (setValueButton) {
            setValueButton.addEventListener("click", async () => {
                await setCellValue();
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
/**
 * Open the excel instance.
 */
async function openExcel() {
    try {
        if (openWorkbooks &&
            selectedWorkbookIndex !== undefined &&
            openWorksheets &&
            selectedWorksheetIndex !== undefined) {
            // Open the select work book and sheet
            // if anything throws an exception just open a new workbook
            await selectWorkbook(openWorkbooks[selectedWorkbookIndex].name);
            await selectWorksheet(openWorksheets[selectedWorksheetIndex].name);
        }
    }
    catch {
        if (excel) {
            await excel.createWorkbook();
            await populateWorkbooks();
        }
    }
}
/**
 * Populate the list of workbooks.
 */
async function populateWorkbooks() {
    if (excel) {
        selectedWorkbookIndex = undefined;
        const refreshButton = document.querySelector("#workbook-refresh");
        const select = document.querySelector("#workbooks");
        if (refreshButton && select) {
            refreshButton.disabled = true;
            select.disabled = true;
            select.innerHTML = "";
            openWorkbooks = [];
            try {
                const workbooks = await excel.getWorkbooks();
                for (const book of workbooks) {
                    const name = await book.getName();
                    openWorkbooks.push({
                        book,
                        name
                    });
                }
                const optionEmpty = document.createElement("option");
                optionEmpty.innerHTML = "----Select workbook----";
                optionEmpty.value = "";
                optionEmpty.selected = true;
                optionEmpty.disabled = true;
                select.append(optionEmpty);
                for (const openWorkbook of openWorkbooks) {
                    const option = document.createElement("option");
                    option.innerHTML = openWorkbook.name;
                    option.value = openWorkbook.name;
                    select.append(option);
                }
            }
            catch (err) {
                console.error(err);
                showError(err);
            }
            finally {
                select.disabled = false;
                refreshButton.disabled = false;
            }
        }
    }
}
/**
 * Select a workbook.
 * @param name The name of the workbook to select.
 */
async function selectWorkbook(name) {
    if (openWorkbooks) {
        const newWorkbookIndex = openWorkbooks.findIndex((w) => w.name === name);
        if (newWorkbookIndex !== selectedWorkbookIndex) {
            selectedWorkbookIndex = newWorkbookIndex;
            if (newWorkbookIndex >= 0) {
                await openWorkbooks[selectedWorkbookIndex].book.activate();
            }
        }
        await populateWorksheets();
    }
}
/**
 * Populate the worksheets.
 */
async function populateWorksheets() {
    if (excel) {
        selectedWorksheetIndex = undefined;
        const refreshButton = document.querySelector("#worksheet-refresh");
        const select = document.querySelector("#worksheets");
        if (select && refreshButton && openWorkbooks && selectedWorkbookIndex !== undefined) {
            refreshButton.disabled = true;
            select.disabled = true;
            select.innerHTML = "";
            openWorksheets = [];
            const workbook = openWorkbooks[selectedWorkbookIndex];
            if (workbook) {
                try {
                    const sheets = await workbook.book.getWorksheets();
                    for (const sheet of sheets) {
                        const name = await sheet.getName();
                        openWorksheets.push({
                            sheet,
                            name
                        });
                    }
                    const optionEmpty = document.createElement("option");
                    optionEmpty.innerHTML = "----Select worksheet----";
                    optionEmpty.value = "";
                    optionEmpty.selected = true;
                    optionEmpty.disabled = true;
                    select.append(optionEmpty);
                    for (const openWorksheet of openWorksheets) {
                        const option = document.createElement("option");
                        option.innerHTML = openWorksheet.name;
                        option.value = openWorksheet.name;
                        select.append(option);
                    }
                }
                catch (err) {
                    console.error(err);
                    showError(err);
                }
                finally {
                    select.disabled = false;
                    refreshButton.disabled = false;
                }
            }
        }
    }
}
/**
 * Select a worksheet.
 * @param name The name of worksheet to select.
 */
async function selectWorksheet(name) {
    if (openWorksheets) {
        const newWorksheetIndex = openWorksheets.findIndex((w) => w.name === name);
        if (newWorksheetIndex !== selectedWorksheetIndex) {
            if (selectedWorksheetIndex !== undefined) {
                const oldWorksheet = openWorksheets[selectedWorksheetIndex];
                if (oldWorksheet) {
                    await oldWorksheet.sheet.removeEventListener(handleCellChange);
                }
            }
            selectedWorksheetIndex = newWorksheetIndex;
            if (selectedWorksheetIndex >= 0) {
                await openWorksheets[selectedWorksheetIndex].sheet.activate();
                await openWorksheets[selectedWorksheetIndex].sheet.addEventListener("change", handleCellChange);
                const resultsContainer = document.querySelector("#results-container");
                if (resultsContainer) {
                    resultsContainer.style.display = "flex";
                }
                const cellLocation = document.querySelector("#cell-location");
                if (cellLocation) {
                    cellLocation.disabled = false;
                }
                const cellValue = document.querySelector("#cell-value");
                if (cellValue) {
                    cellValue.disabled = false;
                }
                const setValue = document.querySelector("#set-value");
                if (setValue) {
                    setValue.disabled = false;
                }
            }
        }
    }
}
/**
 * Handle a change from the excel worksheet.
 * @param cells The cells that were changed.
 */
async function handleCellChange(cells) {
    const cellContainer = document.querySelector("#cell-changes-container");
    if (cellContainer) {
        cellContainer.innerHTML = JSON.stringify(cells, undefined, "  ");
        for (const cell of cells) {
            if (KNOWN_INSTRUMENTS.includes(cell.value)) {
                await broadcastInstrument(cell.value);
            }
        }
    }
}
/**
 * Set a cell value in excel.
 */
async function setCellValue() {
    if (openWorksheets && selectedWorksheetIndex !== undefined) {
        const cellLocation = document.querySelector("#cell-location");
        const cellValue = document.querySelector("#cell-value");
        if (cellLocation && cellValue) {
            const cells = [[cellValue.value]];
            await openWorksheets[selectedWorksheetIndex].sheet.setCellValues(cellLocation.value, cells);
        }
    }
}
/**
 * Broadcast and FDC3 instrument.
 * @param instrument The instrument to broadcast.
 */
async function broadcastInstrument(instrument) {
    const broadcastElement = document.querySelector("#broadcast-instrument");
    if (broadcastElement) {
        if (window.fdc3) {
            try {
                const fdcInstrument = {
                    type: "fdc3.instrument",
                    id: {
                        ticker: instrument
                    }
                };
                const channel = await (0,_finos_fdc3__WEBPACK_IMPORTED_MODULE_0__.getCurrentChannel)();
                if (channel) {
                    await channel.broadcast(fdcInstrument);
                }
                broadcastElement.value = instrument;
            }
            catch (err) {
                broadcastElement.value = err instanceof Error ? err.message : JSON.stringify(err);
            }
        }
        else {
            broadcastElement.textContent = "No FD3 Channel available";
        }
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsY0FBYywyZ0VBQTJnRTtBQUN6aEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsNkJBQTZCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvQ0FBb0M7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDO2FBQU0sQ0FBQztZQUNQLGdCQUFnQixDQUFDLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztRQUMzRCxDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC8uLi8uLi9ub2RlX21vZHVsZXMvQGZpbm9zL2ZkYzMvZGlzdC9mZGMzLmVzbS5qcyIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC8uLi8uLi9ub2RlX21vZHVsZXMvQG9wZW5maW4vZXhjZWwvb3BlbmZpbi5leGNlbC5tanMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC8uL2NsaWVudC9zcmMvZXhjZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVG8gcGFyc2UgdGhpcyBkYXRhOlxuLy9cbi8vICAgaW1wb3J0IHsgQ29udmVydCwgQWdlbnRFcnJvclJlc3BvbnNlTWVzc2FnZSwgQWdlbnRSZXF1ZXN0TWVzc2FnZSwgQWdlbnRSZXNwb25zZU1lc3NhZ2UsIEJyaWRnZUVycm9yUmVzcG9uc2VNZXNzYWdlLCBCcmlkZ2VSZXF1ZXN0TWVzc2FnZSwgQnJpZGdlUmVzcG9uc2VNZXNzYWdlLCBCcm9hZGNhc3RBZ2VudFJlcXVlc3QsIEJyb2FkY2FzdEJyaWRnZVJlcXVlc3QsIENvbm5lY3Rpb25TdGVwTWVzc2FnZSwgQ29ubmVjdGlvblN0ZXAySGVsbG8sIENvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZSwgQ29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWQsIENvbm5lY3Rpb25TdGVwNkNvbm5lY3RlZEFnZW50c1VwZGF0ZSwgRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZSwgRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdCwgRmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2UsIEZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlLCBGaW5kSW5zdGFuY2VzQnJpZGdlUmVxdWVzdCwgRmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlLCBGaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlLCBGaW5kSW50ZW50QWdlbnRSZXF1ZXN0LCBGaW5kSW50ZW50QWdlbnRSZXNwb25zZSwgRmluZEludGVudEJyaWRnZUVycm9yUmVzcG9uc2UsIEZpbmRJbnRlbnRCcmlkZ2VSZXF1ZXN0LCBGaW5kSW50ZW50QnJpZGdlUmVzcG9uc2UsIEZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlLCBGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdCwgRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlc3BvbnNlLCBGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2UsIEZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVxdWVzdCwgRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXNwb25zZSwgR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2UsIEdldEFwcE1ldGFkYXRhQWdlbnRSZXF1ZXN0LCBHZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2UsIEdldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZSwgR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0LCBHZXRBcHBNZXRhZGF0YUJyaWRnZVJlc3BvbnNlLCBPcGVuQWdlbnRFcnJvclJlc3BvbnNlLCBPcGVuQWdlbnRSZXF1ZXN0LCBPcGVuQWdlbnRSZXNwb25zZSwgT3BlbkJyaWRnZUVycm9yUmVzcG9uc2UsIE9wZW5CcmlkZ2VSZXF1ZXN0LCBPcGVuQnJpZGdlUmVzcG9uc2UsIFByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0LCBQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3QsIFByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0LCBQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEJyaWRnZVJlcXVlc3QsIFByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3QsIFByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRCcmlkZ2VSZXF1ZXN0LCBQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0LCBQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQnJpZGdlUmVxdWVzdCwgUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3QsIFByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QnJpZGdlUmVxdWVzdCwgUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0LCBQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVCcmlkZ2VSZXF1ZXN0LCBSYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZSwgUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3QsIFJhaXNlSW50ZW50QWdlbnRSZXNwb25zZSwgUmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlLCBSYWlzZUludGVudEJyaWRnZVJlcXVlc3QsIFJhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2UsIFJhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlLCBSYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2UsIFJhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZSwgUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VSZXNwb25zZSwgQ29udGV4dCB9IGZyb20gXCIuL2ZpbGVcIjtcbi8vXG4vLyAgIGNvbnN0IGZEQzNEZXNrdG9wQWdlbnRBUElTY2hlbWEgPSBDb252ZXJ0LnRvRkRDM0Rlc2t0b3BBZ2VudEFQSVNjaGVtYShqc29uKTtcbi8vICAgY29uc3QgYWdlbnRFcnJvclJlc3BvbnNlTWVzc2FnZSA9IENvbnZlcnQudG9BZ2VudEVycm9yUmVzcG9uc2VNZXNzYWdlKGpzb24pO1xuLy8gICBjb25zdCBhZ2VudFJlcXVlc3RNZXNzYWdlID0gQ29udmVydC50b0FnZW50UmVxdWVzdE1lc3NhZ2UoanNvbik7XG4vLyAgIGNvbnN0IGFnZW50UmVzcG9uc2VNZXNzYWdlID0gQ29udmVydC50b0FnZW50UmVzcG9uc2VNZXNzYWdlKGpzb24pO1xuLy8gICBjb25zdCBicmlkZ2VFcnJvclJlc3BvbnNlTWVzc2FnZSA9IENvbnZlcnQudG9CcmlkZ2VFcnJvclJlc3BvbnNlTWVzc2FnZShqc29uKTtcbi8vICAgY29uc3QgYnJpZGdlUmVxdWVzdE1lc3NhZ2UgPSBDb252ZXJ0LnRvQnJpZGdlUmVxdWVzdE1lc3NhZ2UoanNvbik7XG4vLyAgIGNvbnN0IGJyaWRnZVJlc3BvbnNlTWVzc2FnZSA9IENvbnZlcnQudG9CcmlkZ2VSZXNwb25zZU1lc3NhZ2UoanNvbik7XG4vLyAgIGNvbnN0IGJyb2FkY2FzdEFnZW50UmVxdWVzdCA9IENvbnZlcnQudG9Ccm9hZGNhc3RBZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IGJyb2FkY2FzdEJyaWRnZVJlcXVlc3QgPSBDb252ZXJ0LnRvQnJvYWRjYXN0QnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgYnJpZGdpbmdDb21tb25zID0gQ29udmVydC50b0JyaWRnaW5nQ29tbW9ucyhqc29uKTtcbi8vICAgY29uc3QgY29ubmVjdGlvblN0ZXBNZXNzYWdlID0gQ29udmVydC50b0Nvbm5lY3Rpb25TdGVwTWVzc2FnZShqc29uKTtcbi8vICAgY29uc3QgY29ubmVjdGlvblN0ZXAySGVsbG8gPSBDb252ZXJ0LnRvQ29ubmVjdGlvblN0ZXAySGVsbG8oanNvbik7XG4vLyAgIGNvbnN0IGNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZSA9IENvbnZlcnQudG9Db25uZWN0aW9uU3RlcDNIYW5kc2hha2UoanNvbik7XG4vLyAgIGNvbnN0IGNvbm5lY3Rpb25TdGVwNEF1dGhlbnRpY2F0aW9uRmFpbGVkID0gQ29udmVydC50b0Nvbm5lY3Rpb25TdGVwNEF1dGhlbnRpY2F0aW9uRmFpbGVkKGpzb24pO1xuLy8gICBjb25zdCBjb25uZWN0aW9uU3RlcDZDb25uZWN0ZWRBZ2VudHNVcGRhdGUgPSBDb252ZXJ0LnRvQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlKGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3QgPSBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgZmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2UgPSBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW5zdGFuY2VzQnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9GaW5kSW5zdGFuY2VzQnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgZmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnN0YW5jZXNCcmlkZ2VSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZSA9IENvbnZlcnQudG9GaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW50ZW50QWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b0ZpbmRJbnRlbnRBZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnRlbnRBZ2VudFJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnRlbnRBZ2VudFJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZSA9IENvbnZlcnQudG9GaW5kSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZmluZEludGVudEJyaWRnZVJlcXVlc3QgPSBDb252ZXJ0LnRvRmluZEludGVudEJyaWRnZVJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZSA9IENvbnZlcnQudG9GaW5kSW50ZW50QnJpZGdlUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBmaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdCA9IENvbnZlcnQudG9GaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgZmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VFcnJvclJlc3BvbnNlID0gQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlRXJyb3JSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXF1ZXN0ID0gQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgZmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXNwb25zZSA9IENvbnZlcnQudG9GaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBnZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZSA9IENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3QgZ2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3QgPSBDb252ZXJ0LnRvR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IGdldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZSA9IENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGdldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZSA9IENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUJyaWRnZUVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGdldEFwcE1ldGFkYXRhQnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUJyaWRnZVJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IGdldEFwcE1ldGFkYXRhQnJpZGdlUmVzcG9uc2UgPSBDb252ZXJ0LnRvR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3Qgb3BlbkFnZW50RXJyb3JSZXNwb25zZSA9IENvbnZlcnQudG9PcGVuQWdlbnRFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBvcGVuQWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b09wZW5BZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IG9wZW5BZ2VudFJlc3BvbnNlID0gQ29udmVydC50b09wZW5BZ2VudFJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCBvcGVuQnJpZGdlRXJyb3JSZXNwb25zZSA9IENvbnZlcnQudG9PcGVuQnJpZGdlRXJyb3JSZXNwb25zZShqc29uKTtcbi8vICAgY29uc3Qgb3BlbkJyaWRnZVJlcXVlc3QgPSBDb252ZXJ0LnRvT3BlbkJyaWRnZVJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IG9wZW5CcmlkZ2VSZXNwb25zZSA9IENvbnZlcnQudG9PcGVuQnJpZGdlUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IHByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b1ByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBwcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3QgPSBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RCcmlkZ2VSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBwcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgcHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRCcmlkZ2VSZXF1ZXN0ID0gQ29udmVydC50b1ByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgcHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBwcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgcHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCBwcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgcHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3QgPSBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IHByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QnJpZGdlUmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEJyaWRnZVJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IHByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUFnZW50UmVxdWVzdCA9IENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3QoanNvbik7XG4vLyAgIGNvbnN0IHByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUJyaWRnZVJlcXVlc3QgPSBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQnJpZGdlUmVxdWVzdChqc29uKTtcbi8vICAgY29uc3QgcmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2UgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IHJhaXNlSW50ZW50QWdlbnRSZXF1ZXN0ID0gQ29udmVydC50b1JhaXNlSW50ZW50QWdlbnRSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCByYWlzZUludGVudEFnZW50UmVzcG9uc2UgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRBZ2VudFJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCByYWlzZUludGVudEJyaWRnZUVycm9yUmVzcG9uc2UgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCByYWlzZUludGVudEJyaWRnZVJlcXVlc3QgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRCcmlkZ2VSZXF1ZXN0KGpzb24pO1xuLy8gICBjb25zdCByYWlzZUludGVudEJyaWRnZVJlc3BvbnNlID0gQ29udmVydC50b1JhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IHJhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlID0gQ29udmVydC50b1JhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCByYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2UgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRSZXN1bHRBZ2VudFJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCByYWlzZUludGVudFJlc3VsdEJyaWRnZUVycm9yUmVzcG9uc2UgPSBDb252ZXJ0LnRvUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VFcnJvclJlc3BvbnNlKGpzb24pO1xuLy8gICBjb25zdCByYWlzZUludGVudFJlc3VsdEJyaWRnZVJlc3BvbnNlID0gQ29udmVydC50b1JhaXNlSW50ZW50UmVzdWx0QnJpZGdlUmVzcG9uc2UoanNvbik7XG4vLyAgIGNvbnN0IGNvbnRleHQgPSBDb252ZXJ0LnRvQ29udGV4dChqc29uKTtcbi8vXG4vLyBUaGVzZSBmdW5jdGlvbnMgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgSlNPTiBkb2Vzbid0XG4vLyBtYXRjaCB0aGUgZXhwZWN0ZWQgaW50ZXJmYWNlLCBldmVuIGlmIHRoZSBKU09OIGlzIHZhbGlkLlxuLy8gQ29udmVydHMgSlNPTiBzdHJpbmdzIHRvL2Zyb20geW91ciB0eXBlc1xuLy8gYW5kIGFzc2VydHMgdGhlIHJlc3VsdHMgb2YgSlNPTi5wYXJzZSBhdCBydW50aW1lXG52YXIgQ29udmVydCQxID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnZlcnQoKSB7XG4gICAgfVxuICAgIENvbnZlcnQudG9GREMzRGVza3RvcEFnZW50QVBJU2NoZW1hID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCBcImFueVwiKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZkRDM0Rlc2t0b3BBZ2VudEFQSVNjaGVtYVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIFwiYW55XCIpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9BZ2VudEVycm9yUmVzcG9uc2VNZXNzYWdlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJBZ2VudEVycm9yUmVzcG9uc2VNZXNzYWdlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuYWdlbnRFcnJvclJlc3BvbnNlTWVzc2FnZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkFnZW50RXJyb3JSZXNwb25zZU1lc3NhZ2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9BZ2VudFJlcXVlc3RNZXNzYWdlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJBZ2VudFJlcXVlc3RNZXNzYWdlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuYWdlbnRSZXF1ZXN0TWVzc2FnZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkFnZW50UmVxdWVzdE1lc3NhZ2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9BZ2VudFJlc3BvbnNlTWVzc2FnZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiQWdlbnRSZXNwb25zZU1lc3NhZ2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5hZ2VudFJlc3BvbnNlTWVzc2FnZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkFnZW50UmVzcG9uc2VNZXNzYWdlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQnJpZGdlRXJyb3JSZXNwb25zZU1lc3NhZ2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkJyaWRnZUVycm9yUmVzcG9uc2VNZXNzYWdlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuYnJpZGdlRXJyb3JSZXNwb25zZU1lc3NhZ2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJCcmlkZ2VFcnJvclJlc3BvbnNlTWVzc2FnZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0JyaWRnZVJlcXVlc3RNZXNzYWdlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJCcmlkZ2VSZXF1ZXN0TWVzc2FnZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmJyaWRnZVJlcXVlc3RNZXNzYWdlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQnJpZGdlUmVxdWVzdE1lc3NhZ2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9CcmlkZ2VSZXNwb25zZU1lc3NhZ2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkJyaWRnZVJlc3BvbnNlTWVzc2FnZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmJyaWRnZVJlc3BvbnNlTWVzc2FnZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkJyaWRnZVJlc3BvbnNlTWVzc2FnZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0Jyb2FkY2FzdEFnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiQnJvYWRjYXN0QWdlbnRSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuYnJvYWRjYXN0QWdlbnRSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQnJvYWRjYXN0QWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQnJvYWRjYXN0QnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiQnJvYWRjYXN0QnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmJyb2FkY2FzdEJyaWRnZVJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJCcm9hZGNhc3RCcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQnJpZGdpbmdDb21tb25zID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCBtJDEoXCJhbnlcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5icmlkZ2luZ0NvbW1vbnNUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCBtJDEoXCJhbnlcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Db25uZWN0aW9uU3RlcE1lc3NhZ2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkNvbm5lY3Rpb25TdGVwTWVzc2FnZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvbm5lY3Rpb25TdGVwTWVzc2FnZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkNvbm5lY3Rpb25TdGVwTWVzc2FnZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0Nvbm5lY3Rpb25TdGVwMkhlbGxvID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJDb25uZWN0aW9uU3RlcDJIZWxsb1wiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvbm5lY3Rpb25TdGVwMkhlbGxvVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQ29ubmVjdGlvblN0ZXAySGVsbG9cIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Db25uZWN0aW9uU3RlcDNIYW5kc2hha2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0Nvbm5lY3Rpb25TdGVwNEF1dGhlbnRpY2F0aW9uRmFpbGVkID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJDb25uZWN0aW9uU3RlcDRBdXRoZW50aWNhdGlvbkZhaWxlZFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvbm5lY3Rpb25TdGVwNEF1dGhlbnRpY2F0aW9uRmFpbGVkVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQ29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWRcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Db25uZWN0aW9uU3RlcDZDb25uZWN0ZWRBZ2VudHNVcGRhdGUgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkNvbm5lY3Rpb25TdGVwNkNvbm5lY3RlZEFnZW50c1VwZGF0ZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvbm5lY3Rpb25TdGVwNkNvbm5lY3RlZEFnZW50c1VwZGF0ZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkNvbm5lY3Rpb25TdGVwNkNvbm5lY3RlZEFnZW50c1VwZGF0ZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW5zdGFuY2VzQWdlbnRSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnN0YW5jZXNBZ2VudFJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnN0YW5jZXNBZ2VudFJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW5zdGFuY2VzQnJpZGdlRXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEluc3RhbmNlc0JyaWRnZUVycm9yUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW5zdGFuY2VzQnJpZGdlRXJyb3JSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEluc3RhbmNlc0JyaWRnZVJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnN0YW5jZXNCcmlkZ2VSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEluc3RhbmNlc0JyaWRnZVJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnN0YW5jZXNCcmlkZ2VSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEludGVudEFnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEludGVudEFnZW50UmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnRlbnRBZ2VudFJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW50ZW50QWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEludGVudEFnZW50UmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnRlbnRBZ2VudFJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEludGVudEFnZW50UmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW50ZW50QWdlbnRSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEludGVudEJyaWRnZUVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW50ZW50QnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEludGVudEJyaWRnZVJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW50ZW50QnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEludGVudEJyaWRnZVJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW50ZW50QnJpZGdlUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW50ZW50QnJpZGdlUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW50ZW50QnJpZGdlUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudEVycm9yUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9GaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5maW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0dldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmdldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUFnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5nZXRBcHBNZXRhZGF0YUFnZW50UmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvR2V0QXBwTWV0YWRhdGFBZ2VudFJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5nZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9HZXRBcHBNZXRhZGF0YUJyaWRnZUVycm9yUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkdldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmdldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIkdldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0dldEFwcE1ldGFkYXRhQnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuZ2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmdldEFwcE1ldGFkYXRhQnJpZGdlUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJHZXRBcHBNZXRhZGF0YUJyaWRnZVJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvT3BlbkFnZW50RXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiT3BlbkFnZW50RXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lm9wZW5BZ2VudEVycm9yUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJPcGVuQWdlbnRFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvT3BlbkFnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiT3BlbkFnZW50UmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lm9wZW5BZ2VudFJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJPcGVuQWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvT3BlbkFnZW50UmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIk9wZW5BZ2VudFJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQub3BlbkFnZW50UmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJPcGVuQWdlbnRSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b09wZW5CcmlkZ2VFcnJvclJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJPcGVuQnJpZGdlRXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lm9wZW5CcmlkZ2VFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiT3BlbkJyaWRnZUVycm9yUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9PcGVuQnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiT3BlbkJyaWRnZVJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5vcGVuQnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIk9wZW5CcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvT3BlbkJyaWRnZVJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJPcGVuQnJpZGdlUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5vcGVuQnJpZGdlUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJPcGVuQnJpZGdlUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEFnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEFnZW50UmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RCcmlkZ2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRBZ2VudFJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRCcmlkZ2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEJyaWRnZVJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEJyaWRnZVJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEJyaWRnZVJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEJyaWRnZVJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRCcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJBZ2VudFJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckJyaWRnZVJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckJyaWRnZVJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQnJpZGdlUmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1ByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QWdlbnRSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Qcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEJyaWRnZVJlcXVlc3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QnJpZGdlUmVxdWVzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QnJpZGdlUmVxdWVzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1ByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUFnZW50UmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQnJpZGdlUmVxdWVzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQnJpZGdlUmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUJyaWRnZVJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVCcmlkZ2VSZXF1ZXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJSYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1JhaXNlSW50ZW50QWdlbnRSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJSYWlzZUludGVudEFnZW50UmVxdWVzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnJhaXNlSW50ZW50QWdlbnRSZXF1ZXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9SYWlzZUludGVudEFnZW50UmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlJhaXNlSW50ZW50QWdlbnRSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnJhaXNlSW50ZW50QWdlbnRSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlJhaXNlSW50ZW50QWdlbnRSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1JhaXNlSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUmFpc2VJbnRlbnRCcmlkZ2VSZXF1ZXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJSYWlzZUludGVudEJyaWRnZVJlcXVlc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5yYWlzZUludGVudEJyaWRnZVJlcXVlc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJSYWlzZUludGVudEJyaWRnZVJlcXVlc3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9SYWlzZUludGVudEJyaWRnZVJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJSYWlzZUludGVudEJyaWRnZVJlc3BvbnNlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucmFpc2VJbnRlbnRCcmlkZ2VSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlJhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9SYWlzZUludGVudFJlc3VsdEFnZW50RXJyb3JSZXNwb25zZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0JDEoSlNPTi5wYXJzZShqc29uKSwgciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5yYWlzZUludGVudFJlc3VsdEFnZW50RXJyb3JSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUmFpc2VJbnRlbnRSZXN1bHRBZ2VudFJlc3BvbnNlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QkMShKU09OLnBhcnNlKGpzb24pLCByJDEoXCJSYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5yYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCQxKHZhbHVlLCByJDEoXCJSYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9SYWlzZUludGVudFJlc3VsdEJyaWRnZUVycm9yUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnJhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0JDEodmFsdWUsIHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1JhaXNlSW50ZW50UmVzdWx0QnJpZGdlUmVzcG9uc2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlUmVzcG9uc2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5yYWlzZUludGVudFJlc3VsdEJyaWRnZVJlc3BvbnNlVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VSZXNwb25zZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0NvbnRleHQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdCQxKEpTT04ucGFyc2UoanNvbiksIHIkMShcIkNvbnRleHRcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5jb250ZXh0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QkMSh2YWx1ZSwgciQxKFwiQ29udGV4dFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnZlcnQ7XG59KCkpO1xuZnVuY3Rpb24gaW52YWxpZFZhbHVlJDEodHlwLCB2YWwsIGtleSwgcGFyZW50KSB7XG4gICAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7IHBhcmVudCA9ICcnOyB9XG4gICAgdmFyIHByZXR0eVR5cCA9IHByZXR0eVR5cGVOYW1lJDEodHlwKTtcbiAgICB2YXIgcGFyZW50VGV4dCA9IHBhcmVudCA/IFwiIG9uIFwiLmNvbmNhdChwYXJlbnQpIDogJyc7XG4gICAgdmFyIGtleVRleHQgPSBrZXkgPyBcIiBmb3Iga2V5IFxcXCJcIi5jb25jYXQoa2V5LCBcIlxcXCJcIikgOiAnJztcbiAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgdmFsdWVcIi5jb25jYXQoa2V5VGV4dCkuY29uY2F0KHBhcmVudFRleHQsIFwiLiBFeHBlY3RlZCBcIikuY29uY2F0KHByZXR0eVR5cCwgXCIgYnV0IGdvdCBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZhbCkpKTtcbn1cbmZ1bmN0aW9uIHByZXR0eVR5cGVOYW1lJDEodHlwKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwKSkge1xuICAgICAgICBpZiAodHlwLmxlbmd0aCA9PT0gMiAmJiB0eXBbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYW4gb3B0aW9uYWwgXCIuY29uY2F0KHByZXR0eVR5cGVOYW1lJDEodHlwWzFdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJvbmUgb2YgW1wiLmNvbmNhdCh0eXAubWFwKGZ1bmN0aW9uIChhKSB7IHJldHVybiBwcmV0dHlUeXBlTmFtZSQxKGEpOyB9KS5qb2luKFwiLCBcIiksIFwiXVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdHlwID09PSBcIm9iamVjdFwiICYmIHR5cC5saXRlcmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHR5cC5saXRlcmFsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0eXA7XG4gICAgfVxufVxuZnVuY3Rpb24ganNvblRvSlNQcm9wcyQxKHR5cCkge1xuICAgIGlmICh0eXAuanNvblRvSlMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbWFwXzEgPSB7fTtcbiAgICAgICAgdHlwLnByb3BzLmZvckVhY2goZnVuY3Rpb24gKHApIHsgcmV0dXJuIG1hcF8xW3AuanNvbl0gPSB7IGtleTogcC5qcywgdHlwOiBwLnR5cCB9OyB9KTtcbiAgICAgICAgdHlwLmpzb25Ub0pTID0gbWFwXzE7XG4gICAgfVxuICAgIHJldHVybiB0eXAuanNvblRvSlM7XG59XG5mdW5jdGlvbiBqc1RvSlNPTlByb3BzJDEodHlwKSB7XG4gICAgaWYgKHR5cC5qc1RvSlNPTiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBtYXBfMiA9IHt9O1xuICAgICAgICB0eXAucHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocCkgeyByZXR1cm4gbWFwXzJbcC5qc10gPSB7IGtleTogcC5qc29uLCB0eXA6IHAudHlwIH07IH0pO1xuICAgICAgICB0eXAuanNUb0pTT04gPSBtYXBfMjtcbiAgICB9XG4gICAgcmV0dXJuIHR5cC5qc1RvSlNPTjtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybSQxKHZhbCwgdHlwLCBnZXRQcm9wcywga2V5LCBwYXJlbnQpIHtcbiAgICBpZiAoa2V5ID09PSB2b2lkIDApIHsga2V5ID0gJyc7IH1cbiAgICBpZiAocGFyZW50ID09PSB2b2lkIDApIHsgcGFyZW50ID0gJyc7IH1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1QcmltaXRpdmUodHlwLCB2YWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0eXAgPT09IHR5cGVvZiB2YWwpXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlJDEodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtVW5pb24odHlwcywgdmFsKSB7XG4gICAgICAgIC8vIHZhbCBtdXN0IHZhbGlkYXRlIGFnYWluc3Qgb25lIHR5cCBpbiB0eXBzXG4gICAgICAgIHZhciBsID0gdHlwcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdHlwXzEgPSB0eXBzW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtJDEodmFsLCB0eXBfMSwgZ2V0UHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUkMSh0eXBzLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtRW51bShjYXNlcywgdmFsKSB7XG4gICAgICAgIGlmIChjYXNlcy5pbmRleE9mKHZhbCkgIT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZSQxKGNhc2VzLm1hcChmdW5jdGlvbiAoYSkgeyByZXR1cm4gbCQxKGEpOyB9KSwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUFycmF5KHR5cCwgdmFsKSB7XG4gICAgICAgIC8vIHZhbCBtdXN0IGJlIGFuIGFycmF5IHdpdGggbm8gaW52YWxpZCBlbGVtZW50c1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSlcbiAgICAgICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUkMShsJDEoXCJhcnJheVwiKSwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgICAgIHJldHVybiB2YWwubWFwKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gdHJhbnNmb3JtJDEoZWwsIHR5cCwgZ2V0UHJvcHMpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtRGF0ZSh2YWwpIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSh2YWwpO1xuICAgICAgICBpZiAoaXNOYU4oZC52YWx1ZU9mKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlJDEobCQxKFwiRGF0ZVwiKSwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybU9iamVjdChwcm9wcywgYWRkaXRpb25hbCwgdmFsKSB7XG4gICAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUkMShsJDEocmVmIHx8IFwib2JqZWN0XCIpLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIHZhciB2ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSA/IHZhbFtrZXldIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVzdWx0W3Byb3Aua2V5XSA9IHRyYW5zZm9ybSQxKHYsIHByb3AudHlwLCBnZXRQcm9wcywga2V5LCByZWYpO1xuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB0cmFuc2Zvcm0kMSh2YWxba2V5XSwgYWRkaXRpb25hbCwgZ2V0UHJvcHMsIGtleSwgcmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmICh0eXAgPT09IFwiYW55XCIpXG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgaWYgKHR5cCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodmFsID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZSQxKHR5cCwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgfVxuICAgIGlmICh0eXAgPT09IGZhbHNlKVxuICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlJDEodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB2YXIgcmVmID0gdW5kZWZpbmVkO1xuICAgIHdoaWxlICh0eXBlb2YgdHlwID09PSBcIm9iamVjdFwiICYmIHR5cC5yZWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZWYgPSB0eXAucmVmO1xuICAgICAgICB0eXAgPSB0eXBlTWFwJDFbdHlwLnJlZl07XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHR5cCkpXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1FbnVtKHR5cCwgdmFsKTtcbiAgICBpZiAodHlwZW9mIHR5cCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdHlwLmhhc093blByb3BlcnR5KFwidW5pb25NZW1iZXJzXCIpID8gdHJhbnNmb3JtVW5pb24odHlwLnVuaW9uTWVtYmVycywgdmFsKVxuICAgICAgICAgICAgOiB0eXAuaGFzT3duUHJvcGVydHkoXCJhcnJheUl0ZW1zXCIpID8gdHJhbnNmb3JtQXJyYXkodHlwLmFycmF5SXRlbXMsIHZhbClcbiAgICAgICAgICAgICAgICA6IHR5cC5oYXNPd25Qcm9wZXJ0eShcInByb3BzXCIpID8gdHJhbnNmb3JtT2JqZWN0KGdldFByb3BzKHR5cCksIHR5cC5hZGRpdGlvbmFsLCB2YWwpXG4gICAgICAgICAgICAgICAgICAgIDogaW52YWxpZFZhbHVlJDEodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgLy8gTnVtYmVycyBjYW4gYmUgcGFyc2VkIGJ5IERhdGUgYnV0IHNob3VsZG4ndCBiZS5cbiAgICBpZiAodHlwID09PSBEYXRlICYmIHR5cGVvZiB2YWwgIT09IFwibnVtYmVyXCIpXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1EYXRlKHZhbCk7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByaW1pdGl2ZSh0eXAsIHZhbCk7XG59XG5mdW5jdGlvbiBjYXN0JDEodmFsLCB0eXApIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtJDEodmFsLCB0eXAsIGpzb25Ub0pTUHJvcHMkMSk7XG59XG5mdW5jdGlvbiB1bmNhc3QkMSh2YWwsIHR5cCkge1xuICAgIHJldHVybiB0cmFuc2Zvcm0kMSh2YWwsIHR5cCwganNUb0pTT05Qcm9wcyQxKTtcbn1cbmZ1bmN0aW9uIGwkMSh0eXApIHtcbiAgICByZXR1cm4geyBsaXRlcmFsOiB0eXAgfTtcbn1cbmZ1bmN0aW9uIGEkMSh0eXApIHtcbiAgICByZXR1cm4geyBhcnJheUl0ZW1zOiB0eXAgfTtcbn1cbmZ1bmN0aW9uIHUkMSgpIHtcbiAgICB2YXIgdHlwcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHR5cHNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdW5pb25NZW1iZXJzOiB0eXBzIH07XG59XG5mdW5jdGlvbiBvJDEocHJvcHMsIGFkZGl0aW9uYWwpIHtcbiAgICByZXR1cm4geyBwcm9wczogcHJvcHMsIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWwgfTtcbn1cbmZ1bmN0aW9uIG0kMShhZGRpdGlvbmFsKSB7XG4gICAgcmV0dXJuIHsgcHJvcHM6IFtdLCBhZGRpdGlvbmFsOiBhZGRpdGlvbmFsIH07XG59XG5mdW5jdGlvbiByJDEobmFtZSkge1xuICAgIHJldHVybiB7IHJlZjogbmFtZSB9O1xufVxudmFyIHR5cGVNYXAkMSA9IHtcbiAgICBcIkFnZW50RXJyb3JSZXNwb25zZU1lc3NhZ2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkFnZW50UmVzcG9uc2VNZXRhZGF0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRXJyb3JSZXNwb25zZU1lc3NhZ2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJSZXNwb25zZU1lc3NhZ2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQWdlbnRSZXNwb25zZU1ldGFkYXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkVycm9yUmVzcG9uc2VNZXNzYWdlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJBZ2VudFJlcXVlc3RNZXNzYWdlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJBZ2VudFJlcXVlc3RNZXRhZGF0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogbSQxKFwiYW55XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJSZXF1ZXN0TWVzc2FnZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJBZ2VudFJlcXVlc3RNZXRhZGF0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJCcmlkZ2VQYXJ0aWNpcGFudElkZW50aWZpZXJcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJTb3VyY2VJZGVudGlmaWVyXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJCcmlkZ2VQYXJ0aWNpcGFudElkZW50aWZpZXJcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJhcHBJZFwiLCBqczogXCJhcHBJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiU291cmNlSWRlbnRpZmllclwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50XCIsIGpzOiBcImRlc2t0b3BBZ2VudFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQWdlbnRSZXNwb25zZU1lc3NhZ2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkFnZW50UmVzcG9uc2VNZXRhZGF0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogbSQxKFwiYW55XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJSZXNwb25zZU1lc3NhZ2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQnJpZGdlRXJyb3JSZXNwb25zZU1lc3NhZ2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkJyaWRnZUVycm9yUmVzcG9uc2VNZXNzYWdlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUmVzcG9uc2VFcnJvck1lc3NhZ2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQnJpZGdlRXJyb3JSZXNwb25zZU1lc3NhZ2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvckRldGFpbHNcIiwganM6IFwiZXJyb3JEZXRhaWxzXCIsIHR5cDogYSQxKHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJlcnJvclNvdXJjZXNcIiwganM6IFwiZXJyb3JTb3VyY2VzXCIsIHR5cDogYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJSZXNwb25zZUVycm9yTWVzc2FnZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkJyaWRnZVJlcXVlc3RNZXNzYWdlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJCcmlkZ2VSZXF1ZXN0TWV0YWRhdGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IG0kMShcImFueVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkJyaWRnZVJlcXVlc3RNZXRhZGF0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJCcmlkZ2VQYXJ0aWNpcGFudElkZW50aWZpZXJcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJCcmlkZ2VQYXJ0aWNpcGFudElkZW50aWZpZXJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQnJpZGdlUmVzcG9uc2VNZXNzYWdlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJCcmlkZ2VSZXNwb25zZU1lc3NhZ2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiBtJDEoXCJhbnlcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IFwiXCIgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJCcmlkZ2VSZXNwb25zZU1lc3NhZ2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvckRldGFpbHNcIiwganM6IFwiZXJyb3JEZXRhaWxzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZXNcIiwganM6IFwic291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQnJvYWRjYXN0QWdlbnRSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJCcm9hZGNhc3RBZ2VudFJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJCcm9hZGNhc3RBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJCcm9hZGNhc3RBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQnJvYWRjYXN0QWdlbnRSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiU291cmNlT2JqZWN0XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlNvdXJjZU9iamVjdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJkZXNrdG9wQWdlbnRcIiwganM6IFwiZGVza3RvcEFnZW50XCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RhbmNlSWRcIiwganM6IFwiaW5zdGFuY2VJZFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJCcm9hZGNhc3RBZ2VudFJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsSWRcIiwganM6IFwiY2hhbm5lbElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogciQxKFwiQ29udGV4dEVsZW1lbnRcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb250ZXh0RWxlbWVudFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBtJDEoXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQnJvYWRjYXN0QnJpZGdlUmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiQnJvYWRjYXN0QnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkJyb2FkY2FzdEJyaWRnZVJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJCcm9hZGNhc3RBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQnJvYWRjYXN0QnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiTWV0YVNvdXJjZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJkZXNrdG9wQWdlbnRcIiwganM6IFwiZGVza3RvcEFnZW50XCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiaW5zdGFuY2VJZFwiLCBqczogXCJpbnN0YW5jZUlkXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkJyb2FkY2FzdEJyaWRnZVJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsSWRcIiwganM6IFwiY2hhbm5lbElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogciQxKFwiQ29udGV4dEVsZW1lbnRcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcE1lc3NhZ2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkNvbm5lY3Rpb25TdGVwTWV0YWRhdGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IG0kMShcImFueVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXBNZXNzYWdlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwTWV0YWRhdGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcDJIZWxsb1wiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXAySGVsbG9NZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJDb25uZWN0aW9uU3RlcDJIZWxsb1BheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkNvbm5lY3Rpb25TdGVwMkhlbGxvVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwMkhlbGxvTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcDJIZWxsb1BheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImF1dGhSZXF1aXJlZFwiLCBqczogXCJhdXRoUmVxdWlyZWRcIiwgdHlwOiB0cnVlIH0sXG4gICAgICAgIHsganNvbjogXCJhdXRoVG9rZW5cIiwganM6IFwiYXV0aFRva2VuXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudEJyaWRnZVZlcnNpb25cIiwganM6IFwiZGVza3RvcEFnZW50QnJpZGdlVmVyc2lvblwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInN1cHBvcnRlZEZEQzNWZXJzaW9uc1wiLCBqczogXCJzdXBwb3J0ZWRGREMzVmVyc2lvbnNcIiwgdHlwOiBhJDEoXCJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcDNIYW5kc2hha2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcDNIYW5kc2hha2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ29ubmVjdGlvblN0ZXAzSGFuZHNoYWtlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXV0aFRva2VuXCIsIGpzOiBcImF1dGhUb2tlblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsc1N0YXRlXCIsIGpzOiBcImNoYW5uZWxzU3RhdGVcIiwgdHlwOiBtJDEoYSQxKHIkMShcIkNvbnRleHRFbGVtZW50XCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImltcGxlbWVudGF0aW9uTWV0YWRhdGFcIiwganM6IFwiaW1wbGVtZW50YXRpb25NZXRhZGF0YVwiLCB0eXA6IHIkMShcIkNvbm5lY3RpbmdBZ2VudEltcGxlbWVudGF0aW9uTWV0YWRhdGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RlZE5hbWVcIiwganM6IFwicmVxdWVzdGVkTmFtZVwiLCB0eXA6IFwiXCIgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW5nQWdlbnRJbXBsZW1lbnRhdGlvbk1ldGFkYXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJmZGMzVmVyc2lvblwiLCBqczogXCJmZGMzVmVyc2lvblwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcIm9wdGlvbmFsRmVhdHVyZXNcIiwganM6IFwib3B0aW9uYWxGZWF0dXJlc1wiLCB0eXA6IHIkMShcIk9wdGlvbmFsRmVhdHVyZXNcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInByb3ZpZGVyXCIsIGpzOiBcInByb3ZpZGVyXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicHJvdmlkZXJWZXJzaW9uXCIsIGpzOiBcInByb3ZpZGVyVmVyc2lvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3B0aW9uYWxGZWF0dXJlc1wiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiRGVza3RvcEFnZW50QnJpZGdpbmdcIiwganM6IFwiRGVza3RvcEFnZW50QnJpZGdpbmdcIiwgdHlwOiB0cnVlIH0sXG4gICAgICAgIHsganNvbjogXCJPcmlnaW5hdGluZ0FwcE1ldGFkYXRhXCIsIGpzOiBcIk9yaWdpbmF0aW5nQXBwTWV0YWRhdGFcIiwgdHlwOiB0cnVlIH0sXG4gICAgICAgIHsganNvbjogXCJVc2VyQ2hhbm5lbE1lbWJlcnNoaXBBUElzXCIsIGpzOiBcIlVzZXJDaGFubmVsTWVtYmVyc2hpcEFQSXNcIiwgdHlwOiB0cnVlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkNvbm5lY3Rpb25TdGVwNEF1dGhlbnRpY2F0aW9uRmFpbGVkTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWRQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJDb25uZWN0aW9uU3RlcDRBdXRoZW50aWNhdGlvbkZhaWxlZFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJDb25uZWN0aW9uU3RlcDRBdXRoZW50aWNhdGlvbkZhaWxlZE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ29ubmVjdGlvblN0ZXA0QXV0aGVudGljYXRpb25GYWlsZWRQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXNzYWdlXCIsIGpzOiBcIm1lc3NhZ2VcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwNkNvbm5lY3RlZEFnZW50c1VwZGF0ZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwNkNvbm5lY3RlZEFnZW50c1VwZGF0ZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ29ubmVjdGlvblN0ZXA2Q29ubmVjdGVkQWdlbnRzVXBkYXRlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYWRkQWdlbnRcIiwganM6IFwiYWRkQWdlbnRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiYWxsQWdlbnRzXCIsIGpzOiBcImFsbEFnZW50c1wiLCB0eXA6IGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJbXBsZW1lbnRhdGlvbk1ldGFkYXRhXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiY2hhbm5lbHNTdGF0ZVwiLCBqczogXCJjaGFubmVsc1N0YXRlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgbSQxKGEkMShyJDEoXCJDb250ZXh0RWxlbWVudFwiKSkpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVtb3ZlQWdlbnRcIiwganM6IFwicmVtb3ZlQWdlbnRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkRlc2t0b3BBZ2VudEltcGxlbWVudGF0aW9uTWV0YWRhdGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJmZGMzVmVyc2lvblwiLCBqczogXCJmZGMzVmVyc2lvblwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcIm9wdGlvbmFsRmVhdHVyZXNcIiwganM6IFwib3B0aW9uYWxGZWF0dXJlc1wiLCB0eXA6IHIkMShcIk9wdGlvbmFsRmVhdHVyZXNcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInByb3ZpZGVyXCIsIGpzOiBcInByb3ZpZGVyXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicHJvdmlkZXJWZXJzaW9uXCIsIGpzOiBcInByb3ZpZGVyVmVyc2lvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNBZ2VudEVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIkVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJEZXN0aW5hdGlvbk9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIlNvdXJjZUlkZW50aWZpZXJcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkRlc3RpbmF0aW9uT2JqZWN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXNrdG9wQWdlbnRcIiwganM6IFwiZGVza3RvcEFnZW50XCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaW5zdGFuY2VJZFwiLCBqczogXCJpbnN0YW5jZUlkXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBcIiwganM6IFwiYXBwXCIsIHR5cDogciQxKFwiQXBwSWRlbnRpZmllclwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkFwcElkZW50aWZpZXJcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcElkXCIsIGpzOiBcImFwcElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50XCIsIGpzOiBcImRlc2t0b3BBZ2VudFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiRmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNBZ2VudFJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0FnZW50UmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNBZ2VudFJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW5zdGFuY2VzQWdlbnRSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcElkZW50aWZpZXJzXCIsIGpzOiBcImFwcElkZW50aWZpZXJzXCIsIHR5cDogYSQxKHIkMShcIkFwcE1ldGFkYXRhXCIpKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkFwcE1ldGFkYXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBJZFwiLCBqczogXCJhcHBJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImRlc2NyaXB0aW9uXCIsIGpzOiBcImRlc2NyaXB0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWNvbnNcIiwganM6IFwiaWNvbnNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiSWNvblwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaW5zdGFuY2VNZXRhZGF0YVwiLCBqczogXCJpbnN0YW5jZU1ldGFkYXRhXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgbSQxKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3VsdFR5cGVcIiwganM6IFwicmVzdWx0VHlwZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHUkMShudWxsLCBcIlwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInNjcmVlbnNob3RzXCIsIGpzOiBcInNjcmVlbnNob3RzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkltYWdlXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpdGxlXCIsIGpzOiBcInRpdGxlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRvb2x0aXBcIiwganM6IFwidG9vbHRpcFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ2ZXJzaW9uXCIsIGpzOiBcInZlcnNpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkljb25cIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInNpemVcIiwganM6IFwic2l6ZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJzcmNcIiwganM6IFwic3JjXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJJbWFnZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibGFiZWxcIiwganM6IFwibGFiZWxcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwic2l6ZVwiLCBqczogXCJzaXplXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInNyY1wiLCBqczogXCJzcmNcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNCcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW5zdGFuY2VzQnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0JyaWRnZUVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIkVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNCcmlkZ2VSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnN0YW5jZXNCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0FnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiRGVzdGluYXRpb25PYmplY3RcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJNZXRhU291cmNlT2JqZWN0XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk1ldGFTb3VyY2VPYmplY3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcElkXCIsIGpzOiBcImFwcElkXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImRlc2t0b3BBZ2VudFwiLCBqczogXCJkZXNrdG9wQWdlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiRmluZEluc3RhbmNlc0JyaWRnZVJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBcIiwganM6IFwiYXBwXCIsIHR5cDogciQxKFwiQXBwSWRlbnRpZmllclwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnN0YW5jZXNCcmlkZ2VSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEluc3RhbmNlc0FnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW5zdGFuY2VzQnJpZGdlUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvckRldGFpbHNcIiwganM6IFwiZXJyb3JEZXRhaWxzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZXNcIiwganM6IFwic291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEluc3RhbmNlc0JyaWRnZVJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSWRlbnRpZmllcnNcIiwganM6IFwiYXBwSWRlbnRpZmllcnNcIiwgdHlwOiBhJDEociQxKFwiQXBwTWV0YWRhdGFcIikpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIkVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRBZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRBZ2VudFJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QWdlbnRSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEludGVudEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QWdlbnRSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiU291cmNlSWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkJyaWRnZVBhcnRpY2lwYW50SWRlbnRpZmllclwiKSkgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QWdlbnRSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiQ29udGV4dEVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRcIiwganM6IFwiaW50ZW50XCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzdWx0VHlwZVwiLCBqczogXCJyZXN1bHRUeXBlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QWdlbnRSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEludGVudEFnZW50UmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QWdlbnRSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEFnZW50UmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRBZ2VudFJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwSW50ZW50XCIsIGpzOiBcImFwcEludGVudFwiLCB0eXA6IHIkMShcIkFwcEludGVudFwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkFwcEludGVudFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwc1wiLCBqczogXCJhcHBzXCIsIHR5cDogYSQxKHIkMShcIkFwcE1ldGFkYXRhXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiaW50ZW50XCIsIGpzOiBcImludGVudFwiLCB0eXA6IHIkMShcIkludGVudE1ldGFkYXRhXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiSW50ZW50TWV0YWRhdGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRpc3BsYXlOYW1lXCIsIGpzOiBcImRpc3BsYXlOYW1lXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEludGVudEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEJyaWRnZUVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIkVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRCcmlkZ2VSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50QnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiRmluZEludGVudEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIkJyaWRnZVBhcnRpY2lwYW50SWRlbnRpZmllclwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiQnJpZGdlUGFydGljaXBhbnRJZGVudGlmaWVyXCIpKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiQ29udGV4dEVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRcIiwganM6IFwiaW50ZW50XCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzdWx0VHlwZVwiLCBqczogXCJyZXN1bHRUeXBlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50QnJpZGdlUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudEJyaWRnZVJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JEZXRhaWxzXCIsIGpzOiBcImVycm9yRGV0YWlsc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VzXCIsIGpzOiBcInNvdXJjZXNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRCcmlkZ2VSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcEludGVudFwiLCBqczogXCJhcHBJbnRlbnRcIiwgdHlwOiByJDEoXCJBcHBJbnRlbnRcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudEVycm9yUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogciQxKFwiRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIlNvdXJjZU9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkJyaWRnZVBhcnRpY2lwYW50SWRlbnRpZmllclwiKSkgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHIkMShcIkNvbnRleHRFbGVtZW50XCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcEludGVudHNcIiwganM6IFwiYXBwSW50ZW50c1wiLCB0eXA6IGEkMShyJDEoXCJBcHBJbnRlbnRcIikpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZUVycm9yUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvckRldGFpbHNcIiwganM6IFwiZXJyb3JEZXRhaWxzXCIsIHR5cDogYSQxKHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJlcnJvclNvdXJjZXNcIiwganM6IFwiZXJyb3JTb3VyY2VzXCIsIHR5cDogYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlRXJyb3JSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogciQxKFwiRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJNZXRhU291cmNlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJCcmlkZ2VQYXJ0aWNpcGFudElkZW50aWZpZXJcIikpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogciQxKFwiQ29udGV4dEVsZW1lbnRcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJGaW5kSW50ZW50c0J5Q29udGV4dEJyaWRnZVJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkZpbmRJbnRlbnRzQnlDb250ZXh0QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkZpbmRJbnRlbnRzQnlDb250ZXh0QnJpZGdlUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvckRldGFpbHNcIiwganM6IFwiZXJyb3JEZXRhaWxzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZXNcIiwganM6IFwic291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRCcmlkZ2VSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcEludGVudHNcIiwganM6IFwiYXBwSW50ZW50c1wiLCB0eXA6IGEkMShyJDEoXCJBcHBJbnRlbnRcIikpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvclwiLCBqczogXCJlcnJvclwiLCB0eXA6IHIkMShcIkVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkRlc3RpbmF0aW9uT2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiU291cmNlSWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBcIiwganM6IFwiYXBwXCIsIHR5cDogciQxKFwiQXBwRGVzdGluYXRpb25JZGVudGlmaWVyXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQXBwRGVzdGluYXRpb25JZGVudGlmaWVyXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXNrdG9wQWdlbnRcIiwganM6IFwiZGVza3RvcEFnZW50XCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFBZ2VudFJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJHZXRBcHBNZXRhZGF0YUFnZW50RXJyb3JSZXNwb25zZVR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUFnZW50UmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcE1ldGFkYXRhXCIsIGpzOiBcImFwcE1ldGFkYXRhXCIsIHR5cDogciQxKFwiQXBwTWV0YWRhdGFcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUJyaWRnZUVycm9yUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJFcnJvck1lc3NhZ2VcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUJyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQnJpZGdlUmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiRGVzdGluYXRpb25PYmplY3RcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJNZXRhU291cmNlT2JqZWN0XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiByJDEoXCJBcHBEZXN0aW5hdGlvbklkZW50aWZpZXJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJHZXRBcHBNZXRhZGF0YUJyaWRnZVJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJHZXRBcHBNZXRhZGF0YUJyaWRnZVJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIkdldEFwcE1ldGFkYXRhQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQnJpZGdlUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvckRldGFpbHNcIiwganM6IFwiZXJyb3JEZXRhaWxzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwiZXJyb3JTb3VyY2VzXCIsIGpzOiBcImVycm9yU291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZXNcIiwganM6IFwic291cmNlc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJEZXNrdG9wQWdlbnRJZGVudGlmaWVyXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFCcmlkZ2VSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcE1ldGFkYXRhXCIsIGpzOiBcImFwcE1ldGFkYXRhXCIsIHR5cDogciQxKFwiQXBwTWV0YWRhdGFcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQWdlbnRFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJPcGVuQWdlbnRFcnJvclJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiT3BlbkFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIk9wZW5BZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkFnZW50RXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogciQxKFwiT3BlbkVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5BZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIk9wZW5BZ2VudFJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJPcGVuQWdlbnRSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiT3BlbkFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQWdlbnRSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJEZXN0aW5hdGlvbk9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIlNvdXJjZU9iamVjdFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQWdlbnRSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiYXBwXCIsIGpzOiBcImFwcFwiLCB0eXA6IHIkMShcIkFwcFRvT3BlblwiKSB9LFxuICAgICAgICB7IGpzb246IFwiY29udGV4dFwiLCBqczogXCJjb250ZXh0XCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiQ29udGV4dEVsZW1lbnRcIikpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQXBwVG9PcGVuXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXNrdG9wQWdlbnRcIiwganM6IFwiZGVza3RvcEFnZW50XCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiYXBwSWRcIiwganM6IFwiYXBwSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0YW5jZUlkXCIsIGpzOiBcImluc3RhbmNlSWRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiT3BlbkFnZW50UmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIk9wZW5BZ2VudFJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiT3BlbkFnZW50UmVzcG9uc2VQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJPcGVuQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5BZ2VudFJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQWdlbnRSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcElkZW50aWZpZXJcIiwganM6IFwiYXBwSWRlbnRpZmllclwiLCB0eXA6IHIkMShcIkFwcElkZW50aWZpZXJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQnJpZGdlRXJyb3JSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiT3BlbkJyaWRnZUVycm9yUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJPcGVuQnJpZGdlRXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIk9wZW5BZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkJyaWRnZUVycm9yUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJlcnJvckRldGFpbHNcIiwganM6IFwiZXJyb3JEZXRhaWxzXCIsIHR5cDogYSQxKHIkMShcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJlcnJvclNvdXJjZXNcIiwganM6IFwiZXJyb3JTb3VyY2VzXCIsIHR5cDogYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5CcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJPcGVuRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkJyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIk9wZW5CcmlkZ2VSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiT3BlbkJyaWRnZVJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJPcGVuQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5CcmlkZ2VSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJEZXN0aW5hdGlvbk9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkJyaWRnZVJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBcIiwganM6IFwiYXBwXCIsIHR5cDogciQxKFwiQXBwVG9PcGVuXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJDb250ZXh0RWxlbWVudFwiKSkgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJPcGVuQnJpZGdlUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIk9wZW5CcmlkZ2VSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIk9wZW5CcmlkZ2VSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIk9wZW5BZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiT3BlbkJyaWRnZVJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JEZXRhaWxzXCIsIGpzOiBcImVycm9yRGV0YWlsc1wiLCB0eXA6IHUkMSh1bmRlZmluZWQsIGEkMShyJDEoXCJSZXNwb25zZUVycm9yRGV0YWlsXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VzXCIsIGpzOiBcInNvdXJjZXNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk9wZW5CcmlkZ2VSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcElkZW50aWZpZXJcIiwganM6IFwiYXBwSWRlbnRpZmllclwiLCB0eXA6IHIkMShcIkFwcElkZW50aWZpZXJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEFnZW50UmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEFnZW50UmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJNZXRhRGVzdGluYXRpb25cIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJTb3VyY2VPYmplY3RcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIk1ldGFEZXN0aW5hdGlvblwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50XCIsIGpzOiBcImRlc2t0b3BBZ2VudFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImFwcElkXCIsIGpzOiBcImFwcElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiaW5zdGFuY2VJZFwiLCBqczogXCJpbnN0YW5jZUlkXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlByaXZhdGVDaGFubmVsQnJvYWRjYXN0QWdlbnRSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY2hhbm5lbElkXCIsIGpzOiBcImNoYW5uZWxJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHIkMShcIkNvbnRleHRFbGVtZW50XCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RCcmlkZ2VSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEJyb2FkY2FzdEJyaWRnZVJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIk1ldGFEZXN0aW5hdGlvblwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY2hhbm5lbElkXCIsIGpzOiBcImNoYW5uZWxJZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHIkMShcIkNvbnRleHRFbGVtZW50XCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRBZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyQWRkZWRBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiU291cmNlT2JqZWN0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJsaXN0ZW5lclR5cGVcIiwganM6IFwibGlzdGVuZXJUeXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyVHlwZXNcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEJyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lckFkZGVkQnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiTWV0YVNvdXJjZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEJyaWRnZVJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsSWRcIiwganM6IFwiY2hhbm5lbElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwibGlzdGVuZXJUeXBlXCIsIGpzOiBcImxpc3RlbmVyVHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclR5cGVzXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIk1ldGFEZXN0aW5hdGlvblwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIlNvdXJjZU9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEFnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJsaXN0ZW5lclR5cGVcIiwganM6IFwibGlzdGVuZXJUeXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyVHlwZXNcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEJyaWRnZVJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQnJpZGdlUmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclJlbW92ZWRBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEJyaWRnZVJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIk1ldGFEZXN0aW5hdGlvblwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHIkMShcIk1ldGFTb3VyY2VcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyUmVtb3ZlZEJyaWRnZVJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsSWRcIiwganM6IFwiY2hhbm5lbElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwibGlzdGVuZXJUeXBlXCIsIGpzOiBcImxpc3RlbmVyVHlwZVwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsRXZlbnRMaXN0ZW5lclR5cGVzXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJBZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIk1ldGFEZXN0aW5hdGlvblwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIlNvdXJjZU9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0VHlwZVwiLCBqczogXCJjb250ZXh0VHlwZVwiLCB0eXA6IHUkMShudWxsLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25BZGRDb250ZXh0TGlzdGVuZXJCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiTWV0YVNvdXJjZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJQcml2YXRlQ2hhbm5lbE9uQWRkQ29udGV4dExpc3RlbmVyQnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0VHlwZVwiLCBqczogXCJjb250ZXh0VHlwZVwiLCB0eXA6IHUkMShudWxsLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QWdlbnRSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uRGlzY29ubmVjdEFnZW50UmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QWdlbnRSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3RNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJkZXN0aW5hdGlvblwiLCBqczogXCJkZXN0aW5hdGlvblwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIk1ldGFEZXN0aW5hdGlvblwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlXCIsIGpzOiBcInNvdXJjZVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIlNvdXJjZU9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsSWRcIiwganM6IFwiY2hhbm5lbElkXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QnJpZGdlUmVxdWVzdFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0UGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkRpc2Nvbm5lY3RCcmlkZ2VSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJNZXRhRGVzdGluYXRpb25cIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJNZXRhU291cmNlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3RNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPblVuc3Vic2NyaWJlQWdlbnRSZXF1ZXN0TWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJNZXRhRGVzdGluYXRpb25cIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJTb3VyY2VPYmplY3RcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUFnZW50UmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxJZFwiLCBqczogXCJjaGFubmVsSWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0VHlwZVwiLCBqczogXCJjb250ZXh0VHlwZVwiLCB0eXA6IHUkMShudWxsLCBcIlwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUJyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIkVSZXF1ZXN0TWV0YWRhdGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUJyaWRnZVJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJQcml2YXRlQ2hhbm5lbE9uVW5zdWJzY3JpYmVBZ2VudFJlcXVlc3RUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiRVJlcXVlc3RNZXRhZGF0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGVzdGluYXRpb25cIiwganM6IFwiZGVzdGluYXRpb25cIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJNZXRhRGVzdGluYXRpb25cIikpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJNZXRhU291cmNlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUJyaWRnZVJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjaGFubmVsSWRcIiwganM6IFwiY2hhbm5lbElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiY29udGV4dFR5cGVcIiwganM6IFwiY29udGV4dFR5cGVcIiwgdHlwOiB1JDEobnVsbCwgXCJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEFnZW50RXJyb3JSZXNwb25zZVBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yXCIsIGpzOiBcImVycm9yXCIsIHR5cDogciQxKFwiRXJyb3JNZXNzYWdlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QWdlbnRSZXF1ZXN0TWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3RQYXlsb2FkXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudEFnZW50UmVxdWVzdFR5cGVcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEFnZW50UmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJTb3VyY2VPYmplY3RcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRBZ2VudFJlcXVlc3RQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJhcHBcIiwganM6IFwiYXBwXCIsIHR5cDogciQxKFwiQXBwRGVzdGluYXRpb25JZGVudGlmaWVyXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiByJDEoXCJDb250ZXh0RWxlbWVudFwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaW50ZW50XCIsIGpzOiBcImludGVudFwiLCB0eXA6IFwiXCIgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEFnZW50UmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QWdlbnRSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QWdlbnRSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QWdlbnRSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRBZ2VudFJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiaW50ZW50UmVzb2x1dGlvblwiLCBqczogXCJpbnRlbnRSZXNvbHV0aW9uXCIsIHR5cDogciQxKFwiSW50ZW50UmVzb2x1dGlvblwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkludGVudFJlc29sdXRpb25cIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImludGVudFwiLCBqczogXCJpbnRlbnRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJzb3VyY2VcIiwganM6IFwic291cmNlXCIsIHR5cDogciQxKFwiQXBwSWRlbnRpZmllclwiKSB9LFxuICAgICAgICB7IGpzb246IFwidmVyc2lvblwiLCBqczogXCJ2ZXJzaW9uXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEJyaWRnZUVycm9yUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRCcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJFcnJvck1lc3NhZ2VcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEJyaWRnZVJlcXVlc3RcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdE1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdFBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QWdlbnRSZXF1ZXN0VHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdE1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImRlc3RpbmF0aW9uXCIsIGpzOiBcImRlc3RpbmF0aW9uXCIsIHR5cDogciQxKFwiTWV0YURlc3RpbmF0aW9uXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInNvdXJjZVwiLCBqczogXCJzb3VyY2VcIiwgdHlwOiByJDEoXCJNZXRhU291cmNlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QnJpZGdlUmVxdWVzdFBheWxvYWRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiByJDEoXCJBcHBEZXN0aW5hdGlvbklkZW50aWZpZXJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHIkMShcIkNvbnRleHRFbGVtZW50XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRcIiwganM6IFwiaW50ZW50XCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50QnJpZGdlUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudEJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRCcmlkZ2VSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJlcnJvclNvdXJjZXNcIiwganM6IFwiZXJyb3JTb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlc1wiLCBqczogXCJzb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudEJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiaW50ZW50UmVzb2x1dGlvblwiLCBqczogXCJpbnRlbnRSZXNvbHV0aW9uXCIsIHR5cDogciQxKFwiSW50ZW50UmVzb2x1dGlvblwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJtZXRhXCIsIGpzOiBcIm1ldGFcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudFJlc3VsdEFnZW50RXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VNZXRhXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJyZXF1ZXN0VXVpZFwiLCBqczogXCJyZXF1ZXN0VXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInJlc3BvbnNlVXVpZFwiLCBqczogXCJyZXNwb25zZVV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lc3RhbXBcIiwganM6IFwidGltZXN0YW1wXCIsIHR5cDogRGF0ZSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudFJlc3VsdEVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRSZXNwb25zZVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwibWV0YVwiLCBqczogXCJtZXRhXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudFJlc3BvbnNlTWV0YVwiKSB9LFxuICAgICAgICB7IGpzb246IFwicGF5bG9hZFwiLCBqczogXCJwYXlsb2FkXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudFJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudFJlc3BvbnNlTWV0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudFJlc3VsdEFnZW50UmVzcG9uc2VQYXlsb2FkXCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRSZXN1bHRcIiwganM6IFwiaW50ZW50UmVzdWx0XCIsIHR5cDogciQxKFwiSW50ZW50UmVzdWx0XCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiSW50ZW50UmVzdWx0XCI6IG8kMShbXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCByJDEoXCJDb250ZXh0RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImNoYW5uZWxcIiwganM6IFwiY2hhbm5lbFwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkNoYW5uZWxcIikpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiQ2hhbm5lbFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZGlzcGxheU1ldGFkYXRhXCIsIGpzOiBcImRpc3BsYXlNZXRhZGF0YVwiLCB0eXA6IHUkMSh1bmRlZmluZWQsIHIkMShcIkRpc3BsYXlNZXRhZGF0YVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkRpc3BsYXlNZXRhZGF0YVwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiY29sb3JcIiwganM6IFwiY29sb3JcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiZ2x5cGhcIiwganM6IFwiZ2x5cGhcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudFJlc3VsdEJyaWRnZUVycm9yUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInBheWxvYWRcIiwganM6IFwicGF5bG9hZFwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZVBheWxvYWRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlRXJyb3JSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImVycm9yU291cmNlc1wiLCBqczogXCJlcnJvclNvdXJjZXNcIiwgdHlwOiBhJDEociQxKFwiRGVza3RvcEFnZW50SWRlbnRpZmllclwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJlcXVlc3RVdWlkXCIsIGpzOiBcInJlcXVlc3RVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwicmVzcG9uc2VVdWlkXCIsIGpzOiBcInJlc3BvbnNlVXVpZFwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInRpbWVzdGFtcFwiLCBqczogXCJ0aW1lc3RhbXBcIiwgdHlwOiBEYXRlIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VFcnJvclJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiZXJyb3JcIiwganM6IFwiZXJyb3JcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudFJlc3VsdEVycm9yTWVzc2FnZVwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlUmVzcG9uc2VcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcIm1ldGFcIiwganM6IFwibWV0YVwiLCB0eXA6IHIkMShcIlJhaXNlSW50ZW50UmVzdWx0QnJpZGdlUmVzcG9uc2VNZXRhXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXlsb2FkXCIsIGpzOiBcInBheWxvYWRcIiwgdHlwOiByJDEoXCJSYWlzZUludGVudFJlc3VsdEJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogciQxKFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCIpIH0sXG4gICAgXSwgZmFsc2UpLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRCcmlkZ2VSZXNwb25zZU1ldGFcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImVycm9yRGV0YWlsc1wiLCBqczogXCJlcnJvckRldGFpbHNcIiwgdHlwOiB1JDEodW5kZWZpbmVkLCBhJDEociQxKFwiUmVzcG9uc2VFcnJvckRldGFpbFwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJlcnJvclNvdXJjZXNcIiwganM6IFwiZXJyb3JTb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwicmVxdWVzdFV1aWRcIiwganM6IFwicmVxdWVzdFV1aWRcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJyZXNwb25zZVV1aWRcIiwganM6IFwicmVzcG9uc2VVdWlkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwic291cmNlc1wiLCBqczogXCJzb3VyY2VzXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgYSQxKHIkMShcIkRlc2t0b3BBZ2VudElkZW50aWZpZXJcIikpKSB9LFxuICAgICAgICB7IGpzb246IFwidGltZXN0YW1wXCIsIGpzOiBcInRpbWVzdGFtcFwiLCB0eXA6IERhdGUgfSxcbiAgICBdLCBmYWxzZSksXG4gICAgXCJSYWlzZUludGVudFJlc3VsdEJyaWRnZVJlc3BvbnNlUGF5bG9hZFwiOiBvJDEoW1xuICAgICAgICB7IGpzb246IFwiaW50ZW50UmVzdWx0XCIsIGpzOiBcImludGVudFJlc3VsdFwiLCB0eXA6IHIkMShcIkludGVudFJlc3VsdFwiKSB9LFxuICAgIF0sIGZhbHNlKSxcbiAgICBcIkNvbnRleHRcIjogbyQxKFtcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgbSQxKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSQxKHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IFwiXCIgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlJlc3BvbnNlRXJyb3JEZXRhaWxcIjogW1xuICAgICAgICBcIkFjY2Vzc0RlbmllZFwiLFxuICAgICAgICBcIkFnZW50RGlzY29ubmVjdGVkXCIsXG4gICAgICAgIFwiQXBwTm90Rm91bmRcIixcbiAgICAgICAgXCJBcHBUaW1lb3V0XCIsXG4gICAgICAgIFwiQ3JlYXRpb25GYWlsZWRcIixcbiAgICAgICAgXCJEZXNrdG9wQWdlbnROb3RGb3VuZFwiLFxuICAgICAgICBcIkVycm9yT25MYXVuY2hcIixcbiAgICAgICAgXCJJbnRlbnREZWxpdmVyeUZhaWxlZFwiLFxuICAgICAgICBcIkludGVudEhhbmRsZXJSZWplY3RlZFwiLFxuICAgICAgICBcIk1hbGZvcm1lZENvbnRleHRcIixcbiAgICAgICAgXCJNYWxmb3JtZWRNZXNzYWdlXCIsXG4gICAgICAgIFwiTm9BcHBzRm91bmRcIixcbiAgICAgICAgXCJOb0NoYW5uZWxGb3VuZFwiLFxuICAgICAgICBcIk5vUmVzdWx0UmV0dXJuZWRcIixcbiAgICAgICAgXCJOb3RDb25uZWN0ZWRUb0JyaWRnZVwiLFxuICAgICAgICBcIlJlc29sdmVyVGltZW91dFwiLFxuICAgICAgICBcIlJlc29sdmVyVW5hdmFpbGFibGVcIixcbiAgICAgICAgXCJSZXNwb25zZVRvQnJpZGdlVGltZWRPdXRcIixcbiAgICAgICAgXCJUYXJnZXRBcHBVbmF2YWlsYWJsZVwiLFxuICAgICAgICBcIlRhcmdldEluc3RhbmNlVW5hdmFpbGFibGVcIixcbiAgICAgICAgXCJVc2VyQ2FuY2VsbGVkUmVzb2x1dGlvblwiLFxuICAgIF0sXG4gICAgXCJSZXNwb25zZU1lc3NhZ2VUeXBlXCI6IFtcbiAgICAgICAgXCJmaW5kSW5zdGFuY2VzUmVzcG9uc2VcIixcbiAgICAgICAgXCJmaW5kSW50ZW50UmVzcG9uc2VcIixcbiAgICAgICAgXCJmaW5kSW50ZW50c0J5Q29udGV4dFJlc3BvbnNlXCIsXG4gICAgICAgIFwiZ2V0QXBwTWV0YWRhdGFSZXNwb25zZVwiLFxuICAgICAgICBcIm9wZW5SZXNwb25zZVwiLFxuICAgICAgICBcInJhaXNlSW50ZW50UmVzcG9uc2VcIixcbiAgICAgICAgXCJyYWlzZUludGVudFJlc3VsdFJlc3BvbnNlXCIsXG4gICAgXSxcbiAgICBcIlJlcXVlc3RNZXNzYWdlVHlwZVwiOiBbXG4gICAgICAgIFwiYnJvYWRjYXN0UmVxdWVzdFwiLFxuICAgICAgICBcImZpbmRJbnN0YW5jZXNSZXF1ZXN0XCIsXG4gICAgICAgIFwiZmluZEludGVudFJlcXVlc3RcIixcbiAgICAgICAgXCJmaW5kSW50ZW50c0J5Q29udGV4dFJlcXVlc3RcIixcbiAgICAgICAgXCJnZXRBcHBNZXRhZGF0YVJlcXVlc3RcIixcbiAgICAgICAgXCJvcGVuUmVxdWVzdFwiLFxuICAgICAgICBcIlByaXZhdGVDaGFubmVsLmJyb2FkY2FzdFwiLFxuICAgICAgICBcIlByaXZhdGVDaGFubmVsLmV2ZW50TGlzdGVuZXJBZGRlZFwiLFxuICAgICAgICBcIlByaXZhdGVDaGFubmVsLmV2ZW50TGlzdGVuZXJSZW1vdmVkXCIsXG4gICAgICAgIFwiUHJpdmF0ZUNoYW5uZWwub25BZGRDb250ZXh0TGlzdGVuZXJcIixcbiAgICAgICAgXCJQcml2YXRlQ2hhbm5lbC5vbkRpc2Nvbm5lY3RcIixcbiAgICAgICAgXCJQcml2YXRlQ2hhbm5lbC5vblVuc3Vic2NyaWJlXCIsXG4gICAgICAgIFwicmFpc2VJbnRlbnRSZXF1ZXN0XCIsXG4gICAgXSxcbiAgICBcIkJyb2FkY2FzdEFnZW50UmVxdWVzdFR5cGVcIjogW1xuICAgICAgICBcImJyb2FkY2FzdFJlcXVlc3RcIixcbiAgICBdLFxuICAgIFwiQ29ubmVjdGlvblN0ZXBNZXNzYWdlVHlwZVwiOiBbXG4gICAgICAgIFwiYXV0aGVudGljYXRpb25GYWlsZWRcIixcbiAgICAgICAgXCJjb25uZWN0ZWRBZ2VudHNVcGRhdGVcIixcbiAgICAgICAgXCJoYW5kc2hha2VcIixcbiAgICAgICAgXCJoZWxsb1wiLFxuICAgIF0sXG4gICAgXCJDb25uZWN0aW9uU3RlcDJIZWxsb1R5cGVcIjogW1xuICAgICAgICBcImhlbGxvXCIsXG4gICAgXSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwM0hhbmRzaGFrZVR5cGVcIjogW1xuICAgICAgICBcImhhbmRzaGFrZVwiLFxuICAgIF0sXG4gICAgXCJDb25uZWN0aW9uU3RlcDRBdXRoZW50aWNhdGlvbkZhaWxlZFR5cGVcIjogW1xuICAgICAgICBcImF1dGhlbnRpY2F0aW9uRmFpbGVkXCIsXG4gICAgXSxcbiAgICBcIkNvbm5lY3Rpb25TdGVwNkNvbm5lY3RlZEFnZW50c1VwZGF0ZVR5cGVcIjogW1xuICAgICAgICBcImNvbm5lY3RlZEFnZW50c1VwZGF0ZVwiLFxuICAgIF0sXG4gICAgXCJFcnJvck1lc3NhZ2VcIjogW1xuICAgICAgICBcIkFnZW50RGlzY29ubmVjdGVkXCIsXG4gICAgICAgIFwiRGVza3RvcEFnZW50Tm90Rm91bmRcIixcbiAgICAgICAgXCJJbnRlbnREZWxpdmVyeUZhaWxlZFwiLFxuICAgICAgICBcIk1hbGZvcm1lZENvbnRleHRcIixcbiAgICAgICAgXCJNYWxmb3JtZWRNZXNzYWdlXCIsXG4gICAgICAgIFwiTm9BcHBzRm91bmRcIixcbiAgICAgICAgXCJOb3RDb25uZWN0ZWRUb0JyaWRnZVwiLFxuICAgICAgICBcIlJlc29sdmVyVGltZW91dFwiLFxuICAgICAgICBcIlJlc29sdmVyVW5hdmFpbGFibGVcIixcbiAgICAgICAgXCJSZXNwb25zZVRvQnJpZGdlVGltZWRPdXRcIixcbiAgICAgICAgXCJUYXJnZXRBcHBVbmF2YWlsYWJsZVwiLFxuICAgICAgICBcIlRhcmdldEluc3RhbmNlVW5hdmFpbGFibGVcIixcbiAgICAgICAgXCJVc2VyQ2FuY2VsbGVkUmVzb2x1dGlvblwiLFxuICAgIF0sXG4gICAgXCJGaW5kSW5zdGFuY2VzQWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiOiBbXG4gICAgICAgIFwiZmluZEluc3RhbmNlc1Jlc3BvbnNlXCIsXG4gICAgXSxcbiAgICBcIkZpbmRJbnN0YW5jZXNBZ2VudFJlcXVlc3RUeXBlXCI6IFtcbiAgICAgICAgXCJmaW5kSW5zdGFuY2VzUmVxdWVzdFwiLFxuICAgIF0sXG4gICAgXCJGaW5kSW50ZW50QWdlbnRFcnJvclJlc3BvbnNlVHlwZVwiOiBbXG4gICAgICAgIFwiZmluZEludGVudFJlc3BvbnNlXCIsXG4gICAgXSxcbiAgICBcIkZpbmRJbnRlbnRBZ2VudFJlcXVlc3RUeXBlXCI6IFtcbiAgICAgICAgXCJmaW5kSW50ZW50UmVxdWVzdFwiLFxuICAgIF0sXG4gICAgXCJGaW5kSW50ZW50c0J5Q29udGV4dEFnZW50RXJyb3JSZXNwb25zZVR5cGVcIjogW1xuICAgICAgICBcImZpbmRJbnRlbnRzQnlDb250ZXh0UmVzcG9uc2VcIixcbiAgICBdLFxuICAgIFwiRmluZEludGVudHNCeUNvbnRleHRBZ2VudFJlcXVlc3RUeXBlXCI6IFtcbiAgICAgICAgXCJmaW5kSW50ZW50c0J5Q29udGV4dFJlcXVlc3RcIixcbiAgICBdLFxuICAgIFwiR2V0QXBwTWV0YWRhdGFBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCI6IFtcbiAgICAgICAgXCJnZXRBcHBNZXRhZGF0YVJlc3BvbnNlXCIsXG4gICAgXSxcbiAgICBcIkdldEFwcE1ldGFkYXRhQWdlbnRSZXF1ZXN0VHlwZVwiOiBbXG4gICAgICAgIFwiZ2V0QXBwTWV0YWRhdGFSZXF1ZXN0XCIsXG4gICAgXSxcbiAgICBcIk9wZW5FcnJvck1lc3NhZ2VcIjogW1xuICAgICAgICBcIkFnZW50RGlzY29ubmVjdGVkXCIsXG4gICAgICAgIFwiQXBwTm90Rm91bmRcIixcbiAgICAgICAgXCJBcHBUaW1lb3V0XCIsXG4gICAgICAgIFwiRGVza3RvcEFnZW50Tm90Rm91bmRcIixcbiAgICAgICAgXCJFcnJvck9uTGF1bmNoXCIsXG4gICAgICAgIFwiTWFsZm9ybWVkQ29udGV4dFwiLFxuICAgICAgICBcIk1hbGZvcm1lZE1lc3NhZ2VcIixcbiAgICAgICAgXCJOb3RDb25uZWN0ZWRUb0JyaWRnZVwiLFxuICAgICAgICBcIlJlc29sdmVyVW5hdmFpbGFibGVcIixcbiAgICAgICAgXCJSZXNwb25zZVRvQnJpZGdlVGltZWRPdXRcIixcbiAgICBdLFxuICAgIFwiT3BlbkFnZW50RXJyb3JSZXNwb25zZVR5cGVcIjogW1xuICAgICAgICBcIm9wZW5SZXNwb25zZVwiLFxuICAgIF0sXG4gICAgXCJPcGVuQWdlbnRSZXF1ZXN0VHlwZVwiOiBbXG4gICAgICAgIFwib3BlblJlcXVlc3RcIixcbiAgICBdLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxCcm9hZGNhc3RBZ2VudFJlcXVlc3RUeXBlXCI6IFtcbiAgICAgICAgXCJQcml2YXRlQ2hhbm5lbC5icm9hZGNhc3RcIixcbiAgICBdLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxFdmVudExpc3RlbmVyVHlwZXNcIjogW1xuICAgICAgICBcIm9uQWRkQ29udGV4dExpc3RlbmVyXCIsXG4gICAgICAgIFwib25EaXNjb25uZWN0XCIsXG4gICAgICAgIFwib25VbnN1YnNjcmliZVwiLFxuICAgIF0sXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJBZGRlZEFnZW50UmVxdWVzdFR5cGVcIjogW1xuICAgICAgICBcIlByaXZhdGVDaGFubmVsLmV2ZW50TGlzdGVuZXJBZGRlZFwiLFxuICAgIF0sXG4gICAgXCJQcml2YXRlQ2hhbm5lbEV2ZW50TGlzdGVuZXJSZW1vdmVkQWdlbnRSZXF1ZXN0VHlwZVwiOiBbXG4gICAgICAgIFwiUHJpdmF0ZUNoYW5uZWwuZXZlbnRMaXN0ZW5lclJlbW92ZWRcIixcbiAgICBdLFxuICAgIFwiUHJpdmF0ZUNoYW5uZWxPbkFkZENvbnRleHRMaXN0ZW5lckFnZW50UmVxdWVzdFR5cGVcIjogW1xuICAgICAgICBcIlByaXZhdGVDaGFubmVsLm9uQWRkQ29udGV4dExpc3RlbmVyXCIsXG4gICAgXSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25EaXNjb25uZWN0QWdlbnRSZXF1ZXN0VHlwZVwiOiBbXG4gICAgICAgIFwiUHJpdmF0ZUNoYW5uZWwub25EaXNjb25uZWN0XCIsXG4gICAgXSxcbiAgICBcIlByaXZhdGVDaGFubmVsT25VbnN1YnNjcmliZUFnZW50UmVxdWVzdFR5cGVcIjogW1xuICAgICAgICBcIlByaXZhdGVDaGFubmVsLm9uVW5zdWJzY3JpYmVcIixcbiAgICBdLFxuICAgIFwiUmFpc2VJbnRlbnRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCI6IFtcbiAgICAgICAgXCJyYWlzZUludGVudFJlc3BvbnNlXCIsXG4gICAgXSxcbiAgICBcIlJhaXNlSW50ZW50QWdlbnRSZXF1ZXN0VHlwZVwiOiBbXG4gICAgICAgIFwicmFpc2VJbnRlbnRSZXF1ZXN0XCIsXG4gICAgXSxcbiAgICBcIlJhaXNlSW50ZW50UmVzdWx0RXJyb3JNZXNzYWdlXCI6IFtcbiAgICAgICAgXCJBZ2VudERpc2Nvbm5lY3RlZFwiLFxuICAgICAgICBcIkludGVudEhhbmRsZXJSZWplY3RlZFwiLFxuICAgICAgICBcIk1hbGZvcm1lZE1lc3NhZ2VcIixcbiAgICAgICAgXCJOb1Jlc3VsdFJldHVybmVkXCIsXG4gICAgICAgIFwiTm90Q29ubmVjdGVkVG9CcmlkZ2VcIixcbiAgICAgICAgXCJSZXNwb25zZVRvQnJpZGdlVGltZWRPdXRcIixcbiAgICBdLFxuICAgIFwiUmFpc2VJbnRlbnRSZXN1bHRBZ2VudEVycm9yUmVzcG9uc2VUeXBlXCI6IFtcbiAgICAgICAgXCJyYWlzZUludGVudFJlc3VsdFJlc3BvbnNlXCIsXG4gICAgXSxcbiAgICBcIlR5cGVcIjogW1xuICAgICAgICBcImFwcFwiLFxuICAgICAgICBcInByaXZhdGVcIixcbiAgICAgICAgXCJ1c2VyXCIsXG4gICAgXVxufTtcblxudmFyIEJyaWRnaW5nVHlwZXMgPSB7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIENvbnZlcnQ6IENvbnZlcnQkMVxufTtcblxuLyoqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICogQ29weXJpZ2h0IEZJTk9TIEZEQzMgY29udHJpYnV0b3JzIC0gc2VlIE5PVElDRSBmaWxlXG4gKi9cbi8qKiBDb25zdGFudHMgcmVwcmVzZW50aW5nIHRoZSBlcnJvcnMgdGhhdCBjYW4gYmUgZW5jb3VudGVyZWQgd2hlbiBjYWxsaW5nIHRoZSBgb3BlbmAgbWV0aG9kIG9uIHRoZSBEZXNrdG9wQWdlbnQgb2JqZWN0IChgZmRjM2ApLiAqL1xudmFyIE9wZW5FcnJvcjtcbihmdW5jdGlvbiAoT3BlbkVycm9yKSB7XG4gICAgLyoqIFJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgYXBwbGljYXRpb24gaXMgbm90IGZvdW5kLiovXG4gICAgT3BlbkVycm9yW1wiQXBwTm90Rm91bmRcIl0gPSBcIkFwcE5vdEZvdW5kXCI7XG4gICAgLyoqIFJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgYXBwbGljYXRpb24gZmFpbHMgdG8gbGF1bmNoIGNvcnJlY3RseS4qL1xuICAgIE9wZW5FcnJvcltcIkVycm9yT25MYXVuY2hcIl0gPSBcIkVycm9yT25MYXVuY2hcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBhcHBsaWNhdGlvbiBsYXVuY2hlcyBidXQgZmFpbHMgdG8gYWRkIGEgY29udGV4dCBsaXN0ZW5lciBpbiBvcmRlciB0byByZWNlaXZlIHRoZSBjb250ZXh0IHBhc3NlZCB0byB0aGUgYGZkYzMub3BlbmAgY2FsbC4qL1xuICAgIE9wZW5FcnJvcltcIkFwcFRpbWVvdXRcIl0gPSBcIkFwcFRpbWVvdXRcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgdGhlIEZEQzMgZGVza3RvcCBhZ2VudCBpbXBsZW1lbnRhdGlvbiBpcyBub3QgY3VycmVudGx5IGFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0LiovXG4gICAgT3BlbkVycm9yW1wiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiXSA9IFwiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiO1xuICAgIC8qKiBSZXR1cm5lZCBpZiBhIGNhbGwgdG8gdGhlIGBvcGVuYCBmdW5jdGlvbiBpcyBtYWRlIHdpdGggYW4gaW52YWxpZCBjb250ZXh0IGFyZ3VtZW50LiBDb250ZXh0cyBzaG91bGQgYmUgT2JqZWN0cyB3aXRoIGF0IGxlYXN0IGEgYHR5cGVgIGZpZWxkIHRoYXQgaGFzIGEgYHN0cmluZ2AgdmFsdWUuKi9cbiAgICBPcGVuRXJyb3JbXCJNYWxmb3JtZWRDb250ZXh0XCJdID0gXCJNYWxmb3JtZWRDb250ZXh0XCI7XG4gICAgLyoqIEBleHBlcmltZW50YWwgUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBEZXNrdG9wIEFnZW50IGlzIG5vdCBmb3VuZCwgdmlhIGEgY29ubmVjdGVkIERlc2t0b3AgQWdlbnQgQnJpZGdlLiovXG4gICAgT3BlbkVycm9yW1wiRGVza3RvcEFnZW50Tm90Rm91bmRcIl0gPSBcIkRlc2t0b3BBZ2VudE5vdEZvdW5kXCI7XG59KShPcGVuRXJyb3IgfHwgKE9wZW5FcnJvciA9IHt9KSk7XG4vKiogQ29uc3RhbnRzIHJlcHJlc2VudGluZyB0aGUgZXJyb3JzIHRoYXQgY2FuIGJlIGVuY291bnRlcmVkIHdoZW4gY2FsbGluZyB0aGUgYGZpbmRJbnRlbnRgLCBgZmluZEludGVudHNCeUNvbnRleHRgLCBgcmFpc2VJbnRlbnRgIG9yIGByYWlzZUludGVudEZvckNvbnRleHRgIG1ldGhvZHMgb24gdGhlIERlc2t0b3BBZ2VudCAoYGZkYzNgKS4gKi9cbnZhciBSZXNvbHZlRXJyb3I7XG4oZnVuY3Rpb24gKFJlc29sdmVFcnJvcikge1xuICAgIC8qKiBTSE9VTEQgYmUgcmV0dXJuZWQgaWYgbm8gYXBwcyBhcmUgYXZhaWxhYmxlIHRoYXQgY2FuIHJlc29sdmUgdGhlIGludGVudCBhbmQgY29udGV4dCBjb21iaW5hdGlvbi4qL1xuICAgIFJlc29sdmVFcnJvcltcIk5vQXBwc0ZvdW5kXCJdID0gXCJOb0FwcHNGb3VuZFwiO1xuICAgIC8qKiBSZXR1cm5lZCBpZiB0aGUgRkRDMyBkZXNrdG9wIGFnZW50IGltcGxlbWVudGF0aW9uIGlzIG5vdCBjdXJyZW50bHkgYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuKi9cbiAgICBSZXNvbHZlRXJyb3JbXCJSZXNvbHZlclVuYXZhaWxhYmxlXCJdID0gXCJSZXNvbHZlclVuYXZhaWxhYmxlXCI7XG4gICAgLyoqIFJldHVybmVkIGlmIHRoZSB1c2VyIGNhbmNlbGxlZCB0aGUgcmVzb2x1dGlvbiByZXF1ZXN0LCBmb3IgZXhhbXBsZSBieSBjbG9zaW5nIG9yIGNhbmNlbGxpbmcgYSByZXNvbHZlciBVSS4qL1xuICAgIFJlc29sdmVFcnJvcltcIlVzZXJDYW5jZWxsZWRcIl0gPSBcIlVzZXJDYW5jZWxsZWRSZXNvbHV0aW9uXCI7XG4gICAgLyoqIFNIT1VMRCBiZSByZXR1cm5lZCBpZiBhIHRpbWVvdXQgY2FuY2VscyBhbiBpbnRlbnQgcmVzb2x1dGlvbiB0aGF0IHJlcXVpcmVkIHVzZXIgaW50ZXJhY3Rpb24uIFBsZWFzZSB1c2UgYFJlc29sdmVyVW5hdmFpbGFibGVgIGluc3RlYWQgZm9yIHNpdHVhdGlvbnMgd2hlcmUgYSByZXNvbHZlciBVSSBvciBzaW1pbGFyIGZhaWxzLiovXG4gICAgUmVzb2x2ZUVycm9yW1wiUmVzb2x2ZXJUaW1lb3V0XCJdID0gXCJSZXNvbHZlclRpbWVvdXRcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgYSBzcGVjaWZpZWQgdGFyZ2V0IGFwcGxpY2F0aW9uIGlzIG5vdCBhdmFpbGFibGUgb3IgYSBuZXcgaW5zdGFuY2Ugb2YgaXQgY2Fubm90IGJlIG9wZW5lZC4gKi9cbiAgICBSZXNvbHZlRXJyb3JbXCJUYXJnZXRBcHBVbmF2YWlsYWJsZVwiXSA9IFwiVGFyZ2V0QXBwVW5hdmFpbGFibGVcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgYSBzcGVjaWZpZWQgdGFyZ2V0IGFwcGxpY2F0aW9uIGluc3RhbmNlIGlzIG5vdCBhdmFpbGFibGUsIGZvciBleGFtcGxlIGJlY2F1c2UgaXQgaGFzIGJlZW4gY2xvc2VkLiAqL1xuICAgIFJlc29sdmVFcnJvcltcIlRhcmdldEluc3RhbmNlVW5hdmFpbGFibGVcIl0gPSBcIlRhcmdldEluc3RhbmNlVW5hdmFpbGFibGVcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgdGhlIGludGVudCBhbmQgY29udGV4dCBjb3VsZCBub3QgYmUgZGVsaXZlcmVkIHRvIHRoZSBzZWxlY3RlZCBhcHBsaWNhdGlvbiBvciBpbnN0YW5jZSwgZm9yIGV4YW1wbGUgYmVjYXVzZSBpdCBoYXMgbm90IGFkZGVkIGFuIGludGVudCBoYW5kbGVyIHdpdGhpbiBhIHRpbWVvdXQuKi9cbiAgICBSZXNvbHZlRXJyb3JbXCJJbnRlbnREZWxpdmVyeUZhaWxlZFwiXSA9IFwiSW50ZW50RGVsaXZlcnlGYWlsZWRcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgYSBjYWxsIHRvIG9uZSBvZiB0aGUgYHJhaXNlSW50ZW50YCBmdW5jdGlvbnMgaXMgbWFkZSB3aXRoIGFuIGludmFsaWQgY29udGV4dCBhcmd1bWVudC4gQ29udGV4dHMgc2hvdWxkIGJlIE9iamVjdHMgd2l0aCBhdCBsZWFzdCBhIGB0eXBlYCBmaWVsZCB0aGF0IGhhcyBhIGBzdHJpbmdgIHZhbHVlLiovXG4gICAgUmVzb2x2ZUVycm9yW1wiTWFsZm9ybWVkQ29udGV4dFwiXSA9IFwiTWFsZm9ybWVkQ29udGV4dFwiO1xuICAgIC8qKiBAZXhwZXJpbWVudGFsIFJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgRGVza3RvcCBBZ2VudCBpcyBub3QgZm91bmQsIHZpYSBhIGNvbm5lY3RlZCBEZXNrdG9wIEFnZW50IEJyaWRnZS4qL1xuICAgIFJlc29sdmVFcnJvcltcIkRlc2t0b3BBZ2VudE5vdEZvdW5kXCJdID0gXCJEZXNrdG9wQWdlbnROb3RGb3VuZFwiO1xufSkoUmVzb2x2ZUVycm9yIHx8IChSZXNvbHZlRXJyb3IgPSB7fSkpO1xudmFyIFJlc3VsdEVycm9yO1xuKGZ1bmN0aW9uIChSZXN1bHRFcnJvcikge1xuICAgIC8qKiBSZXR1cm5lZCBpZiB0aGUgaW50ZW50IGhhbmRsZXIgZXhpdGVkIHdpdGhvdXQgcmV0dXJuaW5nIGEgdmFsaWQgcmVzdWx0IChhIHByb21pc2UgcmVzb2x2aW5nIHRvIGEgQ29udGV4dCwgQ2hhbm5lbCBvYmplY3Qgb3Igdm9pZCkuICovXG4gICAgUmVzdWx0RXJyb3JbXCJOb1Jlc3VsdFJldHVybmVkXCJdID0gXCJOb1Jlc3VsdFJldHVybmVkXCI7XG4gICAgLyoqIFJldHVybmVkIGlmIHRoZSBJbnRlbnQgaGFuZGxlciBmdW5jdGlvbiBwcm9jZXNzaW5nIHRoZSByYWlzZWQgaW50ZW50IHRocm93cyBhbiBlcnJvciBvciByZWplY3RzIHRoZSBQcm9taXNlIGl0IHJldHVybmVkLiAqL1xuICAgIFJlc3VsdEVycm9yW1wiSW50ZW50SGFuZGxlclJlamVjdGVkXCJdID0gXCJJbnRlbnRIYW5kbGVyUmVqZWN0ZWRcIjtcbn0pKFJlc3VsdEVycm9yIHx8IChSZXN1bHRFcnJvciA9IHt9KSk7XG52YXIgQ2hhbm5lbEVycm9yO1xuKGZ1bmN0aW9uIChDaGFubmVsRXJyb3IpIHtcbiAgICAvKiogUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBjaGFubmVsIGlzIG5vdCBmb3VuZCB3aGVuIGF0dGVtcHRpbmcgdG8gam9pbiBhIGNoYW5uZWwgdmlhIHRoZSBgam9pblVzZXJDaGFubmVsYCBmdW5jdGlvbiAgb2YgdGhlIERlc2t0b3BBZ2VudCAoYGZkYzNgKS4qL1xuICAgIENoYW5uZWxFcnJvcltcIk5vQ2hhbm5lbEZvdW5kXCJdID0gXCJOb0NoYW5uZWxGb3VuZFwiO1xuICAgIC8qKiBTSE9VTEQgYmUgcmV0dXJuZWQgd2hlbiBhIHJlcXVlc3QgdG8gam9pbiBhIHVzZXIgY2hhbm5lbCBvciB0byBhIHJldHJpZXZlIGEgQ2hhbm5lbCBvYmplY3QgdmlhIHRoZSBgam9pblVzZXJDaGFubmVsYCBvciBgZ2V0T3JDcmVhdGVDaGFubmVsYCBtZXRob2RzIG9mIHRoZSBEZXNrdG9wQWdlbnQgKGBmZGMzYCkgb2JqZWN0IGlzIGRlbmllZC4gKi9cbiAgICBDaGFubmVsRXJyb3JbXCJBY2Nlc3NEZW5pZWRcIl0gPSBcIkFjY2Vzc0RlbmllZFwiO1xuICAgIC8qKiBTSE9VTEQgYmUgcmV0dXJuZWQgd2hlbiBhIGNoYW5uZWwgY2Fubm90IGJlIGNyZWF0ZWQgb3IgcmV0cmlldmVkIHZpYSB0aGUgYGdldE9yQ3JlYXRlQ2hhbm5lbGAgbWV0aG9kIG9mIHRoZSBEZXNrdG9wQWdlbnQgKGBmZGMzYCkuKi9cbiAgICBDaGFubmVsRXJyb3JbXCJDcmVhdGlvbkZhaWxlZFwiXSA9IFwiQ3JlYXRpb25GYWlsZWRcIjtcbiAgICAvKiogUmV0dXJuZWQgaWYgYSBjYWxsIHRvIHRoZSBgYnJvYWRjYXN0YCBmdW5jdGlvbnMgaXMgbWFkZSB3aXRoIGFuIGludmFsaWQgY29udGV4dCBhcmd1bWVudC4gQ29udGV4dHMgc2hvdWxkIGJlIE9iamVjdHMgd2l0aCBhdCBsZWFzdCBhIGB0eXBlYCBmaWVsZCB0aGF0IGhhcyBhIGBzdHJpbmdgIHZhbHVlLiovXG4gICAgQ2hhbm5lbEVycm9yW1wiTWFsZm9ybWVkQ29udGV4dFwiXSA9IFwiTWFsZm9ybWVkQ29udGV4dFwiO1xufSkoQ2hhbm5lbEVycm9yIHx8IChDaGFubmVsRXJyb3IgPSB7fSkpO1xudmFyIEJyaWRnaW5nRXJyb3I7XG4oZnVuY3Rpb24gKEJyaWRnaW5nRXJyb3IpIHtcbiAgICAvKiogQGV4cGVyaW1lbnRhbCBSZXR1cm5lZCBpZiBhIERlc2t0b3AgQWdlbnQgZGlkIG5vdCByZXR1cm4gYSByZXNwb25zZSwgdmlhIERlc2t0b3AgQWdlbnQgQnJpZGdpbmcsIHdpdGhpbiB0aGUgYWxsb3RlZCB0aW1lb3V0LiAqL1xuICAgIEJyaWRnaW5nRXJyb3JbXCJSZXNwb25zZVRpbWVkT3V0XCJdID0gXCJSZXNwb25zZVRvQnJpZGdlVGltZWRPdXRcIjtcbiAgICAvKiogQGV4cGVyaW1lbnRhbCBSZXR1cm5lZCBpZiBhIERlc2t0b3AgQWdlbnQgdGhhdCBoYXMgYmVlbiB0YXJnZXRlZCBieSBhIHBhcnRpY3VsYXIgcmVxdWVzdCBoYXMgYmVlbiBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgQnJpZGdlIGJlZm9yZSBhIHJlc3BvbnNlIGhhcyBiZWVuIHJlY2VpdmVkIGZyb20gaXQuICovXG4gICAgQnJpZGdpbmdFcnJvcltcIkFnZW50RGlzY29ubmVjdGVkXCJdID0gXCJBZ2VudERpc2Nvbm5lY3RlZFwiO1xuICAgIC8qKiBAZXhwZXJpbWVudGFsIFJldHVybmVkIGZvciBGREMzIEFQSSBjYWxscyB0aGF0IGFyZSBzcGVjaWZpZWQgd2l0aCBhcmd1bWVudHMgaW5kaWNhdGluZyB0aGF0IGEgcmVtb3RlIERlc2t0b3AgYWdlbnQgc2hvdWxkIGJlIHRhcmdldGVkIChlLmcuIHJhaXNlSW50ZW50IHdpdGggYW4gYXBwIG9uIGEgcmVtb3RlIERlc2t0b3BBZ2VudCB0YXJnZXRlZCksIHdoZW4gdGhlIGxvY2FsIERlc2t0b3AgQWdlbnQgaXMgbm90IGNvbm5lY3RlZCB0byBhIGJyaWRnZS4gKi9cbiAgICBCcmlkZ2luZ0Vycm9yW1wiTm90Q29ubmVjdGVkVG9CcmlkZ2VcIl0gPSBcIk5vdENvbm5lY3RlZFRvQnJpZGdlXCI7XG4gICAgLyoqIEBleHBlcmltZW50YWwgUmV0dXJuZWQgaWYgYSBtZXNzYWdlIHRvIGEgQnJpZGdlIGRldmlhdGVzIGZyb20gdGhlIHNjaGVtYSBmb3IgdGhhdCBtZXNzYWdlIHN1ZmZpY2llbnRseSB0aGF0IGl0IGNvdWxkIG5vdCBiZSBwcm9jZXNzZWQuICovXG4gICAgQnJpZGdpbmdFcnJvcltcIk1hbGZvcm1lZE1lc3NhZ2VcIl0gPSBcIk1hbGZvcm1lZE1lc3NhZ2VcIjtcbn0pKEJyaWRnaW5nRXJyb3IgfHwgKEJyaWRnaW5nRXJyb3IgPSB7fSkpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXHJcblxyXG5cclxuZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxudHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XHJcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XHJcbn07XG5cbi8qKlxuICogRW5zdXJlcyBhdCBjb21waWxlIHRpbWUgdGhhdCB0aGUgZ2l2ZW4gc3RyaW5nIHR1cGxlIGlzIGV4aGF1c3RpdmUgb24gYSBnaXZlbiB1bmlvbiB0eXBlLCBpLmUuIGNvbnRhaW5zIEFMTCBwb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIFVOSU9OX1RZUEUuXG4gKi9cbnZhciBleGhhdXN0aXZlU3RyaW5nVHVwbGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHR1cGxlID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdHVwbGVbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIHR1cGxlO1xufTsgfTtcblxudmFyIFNUQU5EQVJEX0NPTlRFWFRfVFlQRVMgPSBleGhhdXN0aXZlU3RyaW5nVHVwbGUoKSgnZmRjMy5hY3Rpb24nLCAnZmRjMy5jaGFydCcsICdmZGMzLmNoYXQuaW5pdFNldHRpbmdzJywgJ2ZkYzMuY2hhdC5tZXNzYWdlJywgJ2ZkYzMuY2hhdC5yb29tJywgJ2ZkYzMuY2hhdC5zZWFyY2hDcml0ZXJpYScsICdmZGMzLmNvbnRhY3QnLCAnZmRjMy5jb250YWN0TGlzdCcsICdmZGMzLmNvdW50cnknLCAnZmRjMy5jdXJyZW5jeScsICdmZGMzLmVtYWlsJywgJ2ZkYzMuaW5zdHJ1bWVudCcsICdmZGMzLmluc3RydW1lbnRMaXN0JywgJ2ZkYzMuaW50ZXJhY3Rpb24nLCAnZmRjMy5tZXNzYWdlJywgJ2ZkYzMub3JnYW5pemF0aW9uJywgJ2ZkYzMucG9ydGZvbGlvJywgJ2ZkYzMucG9zaXRpb24nLCAnZmRjMy5ub3RoaW5nJywgJ2ZkYzMudGltZXJhbmdlJywgJ2ZkYzMudHJhbnNhY3Rpb25SZXN1bHQnLCAnZmRjMy52YWx1YXRpb24nKTtcbi8vIHVzZWQgaW50ZXJuYWxseSB0byBjaGVjayBpZiBhIGdpdmVuIGludGVudC9jb250ZXh0IGlzIGEgc3RhbmRhcmQgb25lXG52YXIgU3RhbmRhcmRDb250ZXh0c1NldCA9IG5ldyBTZXQoU1RBTkRBUkRfQ09OVEVYVF9UWVBFUyk7XG5cbnZhciBTVEFOREFSRF9JTlRFTlRTID0gZXhoYXVzdGl2ZVN0cmluZ1R1cGxlKCkoJ0NyZWF0ZUludGVyYWN0aW9uJywgJ1NlbmRDaGF0TWVzc2FnZScsICdTdGFydENhbGwnLCAnU3RhcnRDaGF0JywgJ1N0YXJ0RW1haWwnLCAnVmlld0FuYWx5c2lzJywgJ1ZpZXdDaGF0JywgJ1ZpZXdDaGFydCcsICdWaWV3Q29udGFjdCcsICdWaWV3SG9sZGluZ3MnLCAnVmlld0luc3RydW1lbnQnLCAnVmlld0ludGVyYWN0aW9ucycsICdWaWV3TWVzc2FnZXMnLCAnVmlld05ld3MnLCAnVmlld09yZGVycycsICdWaWV3UHJvZmlsZScsICdWaWV3UXVvdGUnLCAnVmlld1Jlc2VhcmNoJyk7XG4vLyB1c2VkIGludGVybmFsbHkgdG8gY2hlY2sgaWYgYSBnaXZlbiBpbnRlbnQvY29udGV4dCBpcyBhIHN0YW5kYXJkIG9uZVxudmFyIFN0YW5kYXJkSW50ZW50c1NldCA9IG5ldyBTZXQoU1RBTkRBUkRfSU5URU5UUyk7XG5cbnZhciBERUZBVUxUX1RJTUVPVVQgPSA1MDAwO1xudmFyIFVuYXZhaWxhYmxlRXJyb3IgPSBuZXcgRXJyb3IoJ0ZEQzMgRGVza3RvcEFnZW50IG5vdCBhdmFpbGFibGUgYXQgYHdpbmRvdy5mZGMzYC4nKTtcbnZhciBUaW1lb3V0RXJyb3IgPSBuZXcgRXJyb3IoJ1RpbWVkIG91dCB3YWl0aW5nIGZvciBgZmRjM1JlYWR5YCBldmVudC4nKTtcbnZhciBVbmV4cGVjdGVkRXJyb3IgPSBuZXcgRXJyb3IoJ2BmZGMzUmVhZHlgIGV2ZW50IGZpcmVkLCBidXQgYHdpbmRvdy5mZGMzYCBub3Qgc2V0IHRvIERlc2t0b3BBZ2VudC4nKTtcbmZ1bmN0aW9uIHJlamVjdElmTm9HbG9iYWwoZikge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMyA/IGYoKSA6IFByb21pc2UucmVqZWN0KFVuYXZhaWxhYmxlRXJyb3IpO1xufVxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgaW1tZWFkaWF0ZWx5XG4gKiBpZiB0aGUgZGVza3RvcCBhZ2VudCBBUEkgaXMgZm91bmQgYXQgYHdpbmRvdy5mZGMzYC4gSWYgdGhlIEFQSSBpcyBmb3VuZCxcbiAqIHRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aGVuIHRoZSBgZmRjM1JlYWR5YCBldmVudCBpcyByZWNlaXZlZCBvciBpZiBpdFxuICogaXMgZm91bmQgYXQgdGhlIGVuZCBvZiB0aGUgc3BlY2lmaWVkIHRpbWVvdXQuIElmIHRoZSBBUEkgaXMgbm90IGZvdW5kLCBpdFxuICogd2lsbCByZWplY3Qgd2l0aCBhbiBlcnJvci5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBhd2FpdCBmZGMzUmVhZHkoKTtcbiAqIGNvbnN0IGludGVudExpc3RlbmVyID0gYXdhaXQgYWRkSW50ZW50TGlzdGVuZXIoXCJWaWV3Q2hhcnRcIiwgaW50ZW50SGFuZGxlckZuKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB3YWl0Rm9yTXMgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBmb3IgdGhlIEZEQzMgQVBJIHRvIGJlXG4gKiByZWFkeS4gRGVmYXVsdHMgdG8gNSBzZWNvbmRzLlxuICovXG52YXIgZmRjM1JlYWR5ID0gZnVuY3Rpb24gKHdhaXRGb3JNcykge1xuICAgIGlmICh3YWl0Rm9yTXMgPT09IHZvaWQgMCkgeyB3YWl0Rm9yTXMgPSBERUZBVUxUX1RJTUVPVVQ7IH1cbiAgICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGdsb2JhbCBpcyBhbHJlYWR5IGF2YWlsYWJsZSByZXNvbHZlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZmRjMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXRzIG5vdCBhdmFpbGFibGUgc2V0dXAgYSB0aW1lb3V0IHRvIHJldHVybiBhIHJlamVjdGVkIHByb21pc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0XzEgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuICh3aW5kb3cuZmRjMyA/IHJlc29sdmUoKSA6IHJlamVjdChUaW1lb3V0RXJyb3IpKTsgfSwgd2FpdEZvck1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpc3RlbiBmb3IgdGhlIGZkYzNSZWFkeSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZkYzNSZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dF8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZmRjMyA/IHJlc29sdmUoKSA6IHJlamVjdChVbmV4cGVjdGVkRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBpc1N0cmluZyhhcHApIHtcbiAgICByZXR1cm4gISFhcHAgJiYgdHlwZW9mIGFwcCA9PT0gJ3N0cmluZyc7XG59XG5mdW5jdGlvbiBvcGVuKGFwcCwgY29udGV4dCkge1xuICAgIGlmIChpc1N0cmluZyhhcHApKSB7XG4gICAgICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLm9wZW4oYXBwLCBjb250ZXh0KTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5vcGVuKGFwcCwgY29udGV4dCk7IH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZpbmRJbnRlbnQoaW50ZW50LCBjb250ZXh0LCByZXN1bHRUeXBlKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMuZmluZEludGVudChpbnRlbnQsIGNvbnRleHQsIHJlc3VsdFR5cGUpOyB9KTtcbn1cbmZ1bmN0aW9uIGZpbmRJbnRlbnRzQnlDb250ZXh0KGNvbnRleHQsIHJlc3VsdFR5cGUpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5maW5kSW50ZW50c0J5Q29udGV4dChjb250ZXh0LCByZXN1bHRUeXBlKTsgfSk7XG59XG5mdW5jdGlvbiBicm9hZGNhc3QoY29udGV4dCkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLmJyb2FkY2FzdChjb250ZXh0KTsgfSk7XG59XG5mdW5jdGlvbiByYWlzZUludGVudChpbnRlbnQsIGNvbnRleHQsIGFwcCkge1xuICAgIGlmIChpc1N0cmluZyhhcHApKSB7XG4gICAgICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50KGludGVudCwgY29udGV4dCwgYXBwKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5yYWlzZUludGVudChpbnRlbnQsIGNvbnRleHQsIGFwcCk7IH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJhaXNlSW50ZW50Rm9yQ29udGV4dChjb250ZXh0LCBhcHApIHtcbiAgICBpZiAoaXNTdHJpbmcoYXBwKSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5yYWlzZUludGVudEZvckNvbnRleHQoY29udGV4dCwgYXBwKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5yYWlzZUludGVudEZvckNvbnRleHQoY29udGV4dCwgYXBwKTsgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkSW50ZW50TGlzdGVuZXIoaW50ZW50LCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMuYWRkSW50ZW50TGlzdGVuZXIoaW50ZW50LCBoYW5kbGVyKTsgfSk7XG59XG5mdW5jdGlvbiBhZGRDb250ZXh0TGlzdGVuZXIoY29udGV4dFR5cGVPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgICAvL0hhbmRsZSAoZGVwcmVjYXRlZCkgZnVuY3Rpb24gc2lnbmF0dXJlIHRoYXQgYWxsb3dlZCBjb250ZXh0VHlwZSBhcmd1bWVudCB0byBiZSBvbWl0dGVkXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0VHlwZU9ySGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5hZGRDb250ZXh0TGlzdGVuZXIoY29udGV4dFR5cGVPckhhbmRsZXIsIGhhbmRsZXIpOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLmFkZENvbnRleHRMaXN0ZW5lcihudWxsLCBjb250ZXh0VHlwZU9ySGFuZGxlcik7IH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFVzZXJDaGFubmVscygpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vZmFsbGJhY2sgdG8gZ2V0U3lzdGVtQ2hhbm5lbHMgZm9yIEZEQzMgPDIuMCBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgaWYgKHdpbmRvdy5mZGMzLmdldFVzZXJDaGFubmVscykge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldFVzZXJDaGFubmVscygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldFN5c3RlbUNoYW5uZWxzKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFN5c3RlbUNoYW5uZWxzKCkge1xuICAgIC8vZmFsbGZvcndhcmQgdG8gZ2V0VXNlckNoYW5uZWxzIGZvciBGREMzIDIuMCsgaW1wbGVtZW50YXRpb25zXG4gICAgcmV0dXJuIGdldFVzZXJDaGFubmVscygpO1xufVxuZnVuY3Rpb24gam9pblVzZXJDaGFubmVsKGNoYW5uZWxJZCkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9mYWxsYmFjayB0byBqb2luQ2hhbm5lbCBmb3IgRkRDMyA8Mi4wIGltcGxlbWVudGF0aW9uc1xuICAgICAgICBpZiAod2luZG93LmZkYzMuam9pblVzZXJDaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmZkYzMuam9pblVzZXJDaGFubmVsKGNoYW5uZWxJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmZkYzMuam9pbkNoYW5uZWwoY2hhbm5lbElkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gam9pbkNoYW5uZWwoY2hhbm5lbElkKSB7XG4gICAgLy9mYWxsZm9yd2FyZCB0byBqb2luVXNlckNoYW5uZWwgZm9yIEZEQzMgMi4wKyBpbXBsZW1lbnRhdGlvbnNcbiAgICByZXR1cm4gam9pblVzZXJDaGFubmVsKGNoYW5uZWxJZCk7XG59XG5mdW5jdGlvbiBnZXRPckNyZWF0ZUNoYW5uZWwoY2hhbm5lbElkKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMuZ2V0T3JDcmVhdGVDaGFubmVsKGNoYW5uZWxJZCk7IH0pO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudENoYW5uZWwoKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMuZ2V0Q3VycmVudENoYW5uZWwoKTsgfSk7XG59XG5mdW5jdGlvbiBsZWF2ZUN1cnJlbnRDaGFubmVsKCkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLmxlYXZlQ3VycmVudENoYW5uZWwoKTsgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVQcml2YXRlQ2hhbm5lbCgpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5jcmVhdGVQcml2YXRlQ2hhbm5lbCgpOyB9KTtcbn1cbmZ1bmN0aW9uIGdldEluZm8oKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LmZkYzMuZ2V0SW5mbygpOyB9KTtcbn1cbmZ1bmN0aW9uIGdldEFwcE1ldGFkYXRhKGFwcCkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpbmRvdy5mZGMzLmdldEFwcE1ldGFkYXRhKGFwcCk7IH0pO1xufVxuZnVuY3Rpb24gZmluZEluc3RhbmNlcyhhcHApIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuZmRjMy5maW5kSW5zdGFuY2VzKGFwcCk7IH0pO1xufVxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gY29udGV4dCBpcyBhIHN0YW5kYXJkIGNvbnRleHQgdHlwZS5cbiAqIEBwYXJhbSBjb250ZXh0VHlwZVxuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQ29udGV4dFR5cGUoY29udGV4dFR5cGUpIHtcbiAgICByZXR1cm4gU3RhbmRhcmRDb250ZXh0c1NldC5oYXMoY29udGV4dFR5cGUpO1xufVxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gaW50ZW50IGlzIGEgc3RhbmRhcmQgaW50ZW50LlxuICogQHBhcmFtIGludGVudFxuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkSW50ZW50KGludGVudCkge1xuICAgIHJldHVybiBTdGFuZGFyZEludGVudHNTZXQuaGFzKGludGVudCk7XG59XG4vKipcbiAqIENvbXBhcmUgbnVtZXJpYyBzZW12ZXIgdmVyc2lvbiBudW1iZXIgc3RyaW5ncyAoaW4gdGhlIGZvcm0gYDEuMi4zYCkuXG4gKlxuICogUmV0dXJucyBgLTFgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIGxvd2VyIHZlcnNpb24gbnVtYmVyIHRoYW4gdGhlIHNlY29uZCxcbiAqIGAxYCBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmQsIDAgaWYgdGhlIGFyZ3VtZW50cyBhcmVcbiAqIGVxdWFsIGFuZCBgbnVsbGAgaWYgYW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBjb21wYXJpc29uLlxuICpcbiAqIEBwYXJhbSBhXG4gKiBAcGFyYW0gYlxuICovXG52YXIgY29tcGFyZVZlcnNpb25OdW1iZXJzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgYVZlckFyciA9IGEuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgdmFyIGJWZXJBcnIgPSBiLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBNYXRoLm1heChhVmVyQXJyLmxlbmd0aCwgYlZlckFyci5sZW5ndGgpOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvKiBJZiBvbmUgdmVyc2lvbiBudW1iZXIgaGFzIG1vcmUgZGlnaXRzIGFuZCB0aGUgb3RoZXIgZG9lcyBub3QsIGFuZCB0aGV5IGFyZSBvdGhlcndpc2UgZXF1YWwsXG4gICAgICAgICAgICAgICBhc3N1bWUgdGhlIGxvbmdlciBpcyBncmVhdGVyLiBFLmcuIDEuMS4xID4gMS4xICovXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGFWZXJBcnIubGVuZ3RoIHx8IGFWZXJBcnJbaW5kZXhdIDwgYlZlckFycltpbmRleF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gYlZlckFyci5sZW5ndGggfHwgYVZlckFycltpbmRleF0gPiBiVmVyQXJyW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY29tcGFyZSB2ZXJzaW9uIHN0cmluZ3MnLCBlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufTtcbi8qKlxuICogQ2hlY2sgaWYgdGhlIEZEQzMgdmVyc2lvbiBpbiBhbiBJbXBsZW1lbnRhdGlvbk1ldGFkYXRhIG9iamVjdCBpcyBncmVhdGVyIHRoYW5cbiAqIG9yIGVxdWFsIHRvIHRoZSBzdXBwbGllZCBudW1lcmljIHNlbXZlciB2ZXJzaW9uIG51bWJlciBzdHJpbmcgKGluIHRoZSBmb3JtIGAxLjIuM2ApLlxuICpcbiAqIFJldHVybnMgYSBib29sZWFuIG9yIG51bGwgaWYgYW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY29tcGFyaW5nIHRoZSB2ZXJzaW9uIG51bWJlcnMuXG4gKlxuICogQHBhcmFtIG1ldGFkYXRhXG4gKiBAcGFyYW0gdmVyc2lvblxuICovXG52YXIgdmVyc2lvbklzQXRMZWFzdCA9IGZ1bmN0aW9uIChtZXRhZGF0YSwgdmVyc2lvbikge1xuICAgIHZhciBjb21wYXJpc29uID0gY29tcGFyZVZlcnNpb25OdW1iZXJzKG1ldGFkYXRhLmZkYzNWZXJzaW9uLCB2ZXJzaW9uKTtcbiAgICByZXR1cm4gY29tcGFyaXNvbiA9PT0gbnVsbCA/IG51bGwgOiBjb21wYXJpc29uID49IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKipcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKiBDb3B5cmlnaHQgRklOT1MgRkRDMyBjb250cmlidXRvcnMgLSBzZWUgTk9USUNFIGZpbGVcbiAqL1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIFN0YW5kYXJkQ29udGV4dFR5cGV9IGluc3RlYWRcbiAqL1xudmFyIENvbnRleHRUeXBlcztcbihmdW5jdGlvbiAoQ29udGV4dFR5cGVzKSB7XG4gICAgQ29udGV4dFR5cGVzW1wiQ2hhcnRcIl0gPSBcImZkYzMuY2hhcnRcIjtcbiAgICBDb250ZXh0VHlwZXNbXCJDaGF0SW5pdFNldHRpbmdzXCJdID0gXCJmZGMzLmNoYXQuaW5pdFNldHRpbmdzXCI7XG4gICAgQ29udGV4dFR5cGVzW1wiQ2hhdFJvb21cIl0gPSBcImZkYzMuY2hhdC5yb29tXCI7XG4gICAgQ29udGV4dFR5cGVzW1wiQ29udGFjdFwiXSA9IFwiZmRjMy5jb250YWN0XCI7XG4gICAgQ29udGV4dFR5cGVzW1wiQ29udGFjdExpc3RcIl0gPSBcImZkYzMuY29udGFjdExpc3RcIjtcbiAgICBDb250ZXh0VHlwZXNbXCJDb3VudHJ5XCJdID0gXCJmZGMzLmNvdW50cnlcIjtcbiAgICBDb250ZXh0VHlwZXNbXCJDdXJyZW5jeVwiXSA9IFwiZmRjMy5jdXJyZW5jeVwiO1xuICAgIENvbnRleHRUeXBlc1tcIkVtYWlsXCJdID0gXCJmZGMzLmVtYWlsXCI7XG4gICAgQ29udGV4dFR5cGVzW1wiSW5zdHJ1bWVudFwiXSA9IFwiZmRjMy5pbnN0cnVtZW50XCI7XG4gICAgQ29udGV4dFR5cGVzW1wiSW5zdHJ1bWVudExpc3RcIl0gPSBcImZkYzMuaW5zdHJ1bWVudExpc3RcIjtcbiAgICBDb250ZXh0VHlwZXNbXCJJbnRlcmFjdGlvblwiXSA9IFwiZmRjMy5pbnRlcmFjdGlvblwiO1xuICAgIENvbnRleHRUeXBlc1tcIk5vdGhpbmdcIl0gPSBcImZkYzMubm90aGluZ1wiO1xuICAgIENvbnRleHRUeXBlc1tcIk9yZ2FuaXphdGlvblwiXSA9IFwiZmRjMy5vcmdhbml6YXRpb25cIjtcbiAgICBDb250ZXh0VHlwZXNbXCJQb3J0Zm9saW9cIl0gPSBcImZkYzMucG9ydGZvbGlvXCI7XG4gICAgQ29udGV4dFR5cGVzW1wiUG9zaXRpb25cIl0gPSBcImZkYzMucG9zaXRpb25cIjtcbiAgICBDb250ZXh0VHlwZXNbXCJDaGF0U2VhcmNoQ3JpdGVyaWFcIl0gPSBcImZkYzMuY2hhdC5zZWFyY2hDcml0ZXJpYVwiO1xuICAgIENvbnRleHRUeXBlc1tcIlRpbWVSYW5nZVwiXSA9IFwiZmRjMy50aW1lcmFuZ2VcIjtcbiAgICBDb250ZXh0VHlwZXNbXCJUcmFuc2FjdGlvblJlc3VsdFwiXSA9IFwiZmRjMy50cmFuc2FjdGlvblJlc3VsdFwiO1xuICAgIENvbnRleHRUeXBlc1tcIlZhbHVhdGlvblwiXSA9IFwiZmRjMy52YWx1YXRpb25cIjtcbn0pKENvbnRleHRUeXBlcyB8fCAoQ29udGV4dFR5cGVzID0ge30pKTtcblxuLy8gVG8gcGFyc2UgdGhpcyBkYXRhOlxuLy9cbi8vICAgaW1wb3J0IHsgQ29udmVydCwgQWN0aW9uLCBDaGFydCwgQ2hhdEluaXRTZXR0aW5ncywgQ2hhdE1lc3NhZ2UsIENoYXRSb29tLCBDaGF0U2VhcmNoQ3JpdGVyaWEsIENvbnRhY3QsIENvbnRhY3RMaXN0LCBDb250ZXh0LCBDb3VudHJ5LCBDdXJyZW5jeSwgRW1haWwsIEluc3RydW1lbnQsIEluc3RydW1lbnRMaXN0LCBJbnRlcmFjdGlvbiwgTWVzc2FnZSwgTm90aGluZywgT3JkZXIsIE9yZGVyTGlzdCwgT3JnYW5pemF0aW9uLCBQb3J0Zm9saW8sIFBvc2l0aW9uLCBQcm9kdWN0LCBUaW1lUmFuZ2UsIFRyYWRlLCBUcmFkZUxpc3QsIFRyYW5zYWN0aW9uUmVzdWx0LCBWYWx1YXRpb24gfSBmcm9tIFwiLi9maWxlXCI7XG4vL1xuLy8gICBjb25zdCBhY3Rpb24gPSBDb252ZXJ0LnRvQWN0aW9uKGpzb24pO1xuLy8gICBjb25zdCBjaGFydCA9IENvbnZlcnQudG9DaGFydChqc29uKTtcbi8vICAgY29uc3QgY2hhdEluaXRTZXR0aW5ncyA9IENvbnZlcnQudG9DaGF0SW5pdFNldHRpbmdzKGpzb24pO1xuLy8gICBjb25zdCBjaGF0TWVzc2FnZSA9IENvbnZlcnQudG9DaGF0TWVzc2FnZShqc29uKTtcbi8vICAgY29uc3QgY2hhdFJvb20gPSBDb252ZXJ0LnRvQ2hhdFJvb20oanNvbik7XG4vLyAgIGNvbnN0IGNoYXRTZWFyY2hDcml0ZXJpYSA9IENvbnZlcnQudG9DaGF0U2VhcmNoQ3JpdGVyaWEoanNvbik7XG4vLyAgIGNvbnN0IGNvbnRhY3QgPSBDb252ZXJ0LnRvQ29udGFjdChqc29uKTtcbi8vICAgY29uc3QgY29udGFjdExpc3QgPSBDb252ZXJ0LnRvQ29udGFjdExpc3QoanNvbik7XG4vLyAgIGNvbnN0IGNvbnRleHQgPSBDb252ZXJ0LnRvQ29udGV4dChqc29uKTtcbi8vICAgY29uc3QgY291bnRyeSA9IENvbnZlcnQudG9Db3VudHJ5KGpzb24pO1xuLy8gICBjb25zdCBjdXJyZW5jeSA9IENvbnZlcnQudG9DdXJyZW5jeShqc29uKTtcbi8vICAgY29uc3QgZW1haWwgPSBDb252ZXJ0LnRvRW1haWwoanNvbik7XG4vLyAgIGNvbnN0IGluc3RydW1lbnQgPSBDb252ZXJ0LnRvSW5zdHJ1bWVudChqc29uKTtcbi8vICAgY29uc3QgaW5zdHJ1bWVudExpc3QgPSBDb252ZXJ0LnRvSW5zdHJ1bWVudExpc3QoanNvbik7XG4vLyAgIGNvbnN0IGludGVyYWN0aW9uID0gQ29udmVydC50b0ludGVyYWN0aW9uKGpzb24pO1xuLy8gICBjb25zdCBtZXNzYWdlID0gQ29udmVydC50b01lc3NhZ2UoanNvbik7XG4vLyAgIGNvbnN0IG5vdGhpbmcgPSBDb252ZXJ0LnRvTm90aGluZyhqc29uKTtcbi8vICAgY29uc3Qgb3JkZXIgPSBDb252ZXJ0LnRvT3JkZXIoanNvbik7XG4vLyAgIGNvbnN0IG9yZGVyTGlzdCA9IENvbnZlcnQudG9PcmRlckxpc3QoanNvbik7XG4vLyAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IENvbnZlcnQudG9Pcmdhbml6YXRpb24oanNvbik7XG4vLyAgIGNvbnN0IHBvcnRmb2xpbyA9IENvbnZlcnQudG9Qb3J0Zm9saW8oanNvbik7XG4vLyAgIGNvbnN0IHBvc2l0aW9uID0gQ29udmVydC50b1Bvc2l0aW9uKGpzb24pO1xuLy8gICBjb25zdCBwcm9kdWN0ID0gQ29udmVydC50b1Byb2R1Y3QoanNvbik7XG4vLyAgIGNvbnN0IHRpbWVSYW5nZSA9IENvbnZlcnQudG9UaW1lUmFuZ2UoanNvbik7XG4vLyAgIGNvbnN0IHRyYWRlID0gQ29udmVydC50b1RyYWRlKGpzb24pO1xuLy8gICBjb25zdCB0cmFkZUxpc3QgPSBDb252ZXJ0LnRvVHJhZGVMaXN0KGpzb24pO1xuLy8gICBjb25zdCB0cmFuc2FjdGlvblJlc3VsdCA9IENvbnZlcnQudG9UcmFuc2FjdGlvblJlc3VsdChqc29uKTtcbi8vICAgY29uc3QgdmFsdWF0aW9uID0gQ29udmVydC50b1ZhbHVhdGlvbihqc29uKTtcbi8vXG4vLyBUaGVzZSBmdW5jdGlvbnMgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgSlNPTiBkb2Vzbid0XG4vLyBtYXRjaCB0aGUgZXhwZWN0ZWQgaW50ZXJmYWNlLCBldmVuIGlmIHRoZSBKU09OIGlzIHZhbGlkLlxuLyoqXG4gKiBGcmVlIHRleHQgdG8gYmUgdXNlZCBmb3IgYSBrZXl3b3JkIHNlYXJjaFxuICpcbiAqIGBpbnRlcmFjdGlvblR5cGVgIFNIT1VMRCBiZSBvbmUgb2YgYCdJbnN0YW50IE1lc3NhZ2UnYCwgYCdFbWFpbCdgLCBgJ0NhbGwnYCwgb3JcbiAqIGAnTWVldGluZydgIGFsdGhvdWdoIG90aGVyIHN0cmluZyB2YWx1ZXMgYXJlIHBlcm1pdHRlZC5cbiAqL1xuLy8gQ29udmVydHMgSlNPTiBzdHJpbmdzIHRvL2Zyb20geW91ciB0eXBlc1xuLy8gYW5kIGFzc2VydHMgdGhlIHJlc3VsdHMgb2YgSlNPTi5wYXJzZSBhdCBydW50aW1lXG52YXIgQ29udmVydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb252ZXJ0KCkge1xuICAgIH1cbiAgICBDb252ZXJ0LnRvQWN0aW9uID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIkFjdGlvblwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmFjdGlvblRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiQWN0aW9uXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQ2hhcnQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiQ2hhcnRcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5jaGFydFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiQ2hhcnRcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9DaGF0SW5pdFNldHRpbmdzID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIkNoYXRJbml0U2V0dGluZ3NcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5jaGF0SW5pdFNldHRpbmdzVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJDaGF0SW5pdFNldHRpbmdzXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQ2hhdE1lc3NhZ2UgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiQ2hhdE1lc3NhZ2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5jaGF0TWVzc2FnZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiQ2hhdE1lc3NhZ2VcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9DaGF0Um9vbSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJDaGF0Um9vbVwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNoYXRSb29tVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJDaGF0Um9vbVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0NoYXRTZWFyY2hDcml0ZXJpYSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJDaGF0U2VhcmNoQ3JpdGVyaWFcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5jaGF0U2VhcmNoQ3JpdGVyaWFUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkNoYXRTZWFyY2hDcml0ZXJpYVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0NvbnRhY3QgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiQ29udGFjdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvbnRhY3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkNvbnRhY3RcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Db250YWN0TGlzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJDb250YWN0TGlzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvbnRhY3RMaXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJDb250YWN0TGlzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0NvbnRleHQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiQ29udGV4dFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmNvbnRleHRUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkNvbnRleHRcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9Db3VudHJ5ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIkNvdW50cnlcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5jb3VudHJ5VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJDb3VudHJ5XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvQ3VycmVuY3kgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiQ3VycmVuY3lcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5jdXJyZW5jeVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiQ3VycmVuY3lcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9FbWFpbCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJFbWFpbFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LmVtYWlsVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJFbWFpbFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0luc3RydW1lbnQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiSW5zdHJ1bWVudFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lmluc3RydW1lbnRUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkluc3RydW1lbnRcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9JbnN0cnVtZW50TGlzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJJbnN0cnVtZW50TGlzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lmluc3RydW1lbnRMaXN0VG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJJbnN0cnVtZW50TGlzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b0ludGVyYWN0aW9uID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIkludGVyYWN0aW9uXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQuaW50ZXJhY3Rpb25Ub0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIkludGVyYWN0aW9uXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvTWVzc2FnZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJNZXNzYWdlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQubWVzc2FnZVRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiTWVzc2FnZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b05vdGhpbmcgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiTm90aGluZ1wiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lm5vdGhpbmdUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIk5vdGhpbmdcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9PcmRlciA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJPcmRlclwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0Lm9yZGVyVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJPcmRlclwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b09yZGVyTGlzdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJPcmRlckxpc3RcIikpO1xuICAgIH07XG4gICAgQ29udmVydC5vcmRlckxpc3RUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIk9yZGVyTGlzdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b09yZ2FuaXphdGlvbiA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJPcmdhbml6YXRpb25cIikpO1xuICAgIH07XG4gICAgQ29udmVydC5vcmdhbml6YXRpb25Ub0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIk9yZ2FuaXphdGlvblwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1BvcnRmb2xpbyA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJQb3J0Zm9saW9cIikpO1xuICAgIH07XG4gICAgQ29udmVydC5wb3J0Zm9saW9Ub0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIlBvcnRmb2xpb1wiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1Bvc2l0aW9uID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIlBvc2l0aW9uXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucG9zaXRpb25Ub0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIlBvc2l0aW9uXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvUHJvZHVjdCA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJQcm9kdWN0XCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQucHJvZHVjdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiUHJvZHVjdFwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1RpbWVSYW5nZSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoXCJUaW1lUmFuZ2VcIikpO1xuICAgIH07XG4gICAgQ29udmVydC50aW1lUmFuZ2VUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIlRpbWVSYW5nZVwiKSksIG51bGwsIDIpO1xuICAgIH07XG4gICAgQ29udmVydC50b1RyYWRlID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIlRyYWRlXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQudHJhZGVUb0pzb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcihcIlRyYWRlXCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvVHJhZGVMaXN0ID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcihcIlRyYWRlTGlzdFwiKSk7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRyYWRlTGlzdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiVHJhZGVMaXN0XCIpKSwgbnVsbCwgMik7XG4gICAgfTtcbiAgICBDb252ZXJ0LnRvVHJhbnNhY3Rpb25SZXN1bHQgPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiVHJhbnNhY3Rpb25SZXN1bHRcIikpO1xuICAgIH07XG4gICAgQ29udmVydC50cmFuc2FjdGlvblJlc3VsdFRvSnNvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKFwiVHJhbnNhY3Rpb25SZXN1bHRcIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIENvbnZlcnQudG9WYWx1YXRpb24gPSBmdW5jdGlvbiAoanNvbikge1xuICAgICAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKFwiVmFsdWF0aW9uXCIpKTtcbiAgICB9O1xuICAgIENvbnZlcnQudmFsdWF0aW9uVG9Kc29uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoXCJWYWx1YXRpb25cIikpLCBudWxsLCAyKTtcbiAgICB9O1xuICAgIHJldHVybiBDb252ZXJ0O1xufSgpKTtcbmZ1bmN0aW9uIGludmFsaWRWYWx1ZSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50ID09PSB2b2lkIDApIHsgcGFyZW50ID0gJyc7IH1cbiAgICB2YXIgcHJldHR5VHlwID0gcHJldHR5VHlwZU5hbWUodHlwKTtcbiAgICB2YXIgcGFyZW50VGV4dCA9IHBhcmVudCA/IFwiIG9uIFwiLmNvbmNhdChwYXJlbnQpIDogJyc7XG4gICAgdmFyIGtleVRleHQgPSBrZXkgPyBcIiBmb3Iga2V5IFxcXCJcIi5jb25jYXQoa2V5LCBcIlxcXCJcIikgOiAnJztcbiAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgdmFsdWVcIi5jb25jYXQoa2V5VGV4dCkuY29uY2F0KHBhcmVudFRleHQsIFwiLiBFeHBlY3RlZCBcIikuY29uY2F0KHByZXR0eVR5cCwgXCIgYnV0IGdvdCBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZhbCkpKTtcbn1cbmZ1bmN0aW9uIHByZXR0eVR5cGVOYW1lKHR5cCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHR5cCkpIHtcbiAgICAgICAgaWYgKHR5cC5sZW5ndGggPT09IDIgJiYgdHlwWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcImFuIG9wdGlvbmFsIFwiLmNvbmNhdChwcmV0dHlUeXBlTmFtZSh0eXBbMV0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIm9uZSBvZiBbXCIuY29uY2F0KHR5cC5tYXAoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHByZXR0eVR5cGVOYW1lKGEpOyB9KS5qb2luKFwiLCBcIiksIFwiXVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdHlwID09PSBcIm9iamVjdFwiICYmIHR5cC5saXRlcmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHR5cC5saXRlcmFsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0eXA7XG4gICAgfVxufVxuZnVuY3Rpb24ganNvblRvSlNQcm9wcyh0eXApIHtcbiAgICBpZiAodHlwLmpzb25Ub0pTID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1hcF8xID0ge307XG4gICAgICAgIHR5cC5wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBtYXBfMVtwLmpzb25dID0geyBrZXk6IHAuanMsIHR5cDogcC50eXAgfTsgfSk7XG4gICAgICAgIHR5cC5qc29uVG9KUyA9IG1hcF8xO1xuICAgIH1cbiAgICByZXR1cm4gdHlwLmpzb25Ub0pTO1xufVxuZnVuY3Rpb24ganNUb0pTT05Qcm9wcyh0eXApIHtcbiAgICBpZiAodHlwLmpzVG9KU09OID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1hcF8yID0ge307XG4gICAgICAgIHR5cC5wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7IHJldHVybiBtYXBfMltwLmpzXSA9IHsga2V5OiBwLmpzb24sIHR5cDogcC50eXAgfTsgfSk7XG4gICAgICAgIHR5cC5qc1RvSlNPTiA9IG1hcF8yO1xuICAgIH1cbiAgICByZXR1cm4gdHlwLmpzVG9KU09OO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtKHZhbCwgdHlwLCBnZXRQcm9wcywga2V5LCBwYXJlbnQpIHtcbiAgICBpZiAoa2V5ID09PSB2b2lkIDApIHsga2V5ID0gJyc7IH1cbiAgICBpZiAocGFyZW50ID09PSB2b2lkIDApIHsgcGFyZW50ID0gJyc7IH1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1QcmltaXRpdmUodHlwLCB2YWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0eXAgPT09IHR5cGVvZiB2YWwpXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zZm9ybVVuaW9uKHR5cHMsIHZhbCkge1xuICAgICAgICAvLyB2YWwgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IG9uZSB0eXAgaW4gdHlwc1xuICAgICAgICB2YXIgbCA9IHR5cHMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIHR5cF8xID0gdHlwc1tpXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybSh2YWwsIHR5cF8xLCBnZXRQcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykgeyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZSh0eXBzLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtRW51bShjYXNlcywgdmFsKSB7XG4gICAgICAgIGlmIChjYXNlcy5pbmRleE9mKHZhbCkgIT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZShjYXNlcy5tYXAoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGwoYSk7IH0pLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNmb3JtQXJyYXkodHlwLCB2YWwpIHtcbiAgICAgICAgLy8gdmFsIG11c3QgYmUgYW4gYXJyYXkgd2l0aCBubyBpbnZhbGlkIGVsZW1lbnRzXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKVxuICAgICAgICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZShsKFwiYXJyYXlcIiksIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgICAgICByZXR1cm4gdmFsLm1hcChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIHRyYW5zZm9ybShlbCwgdHlwLCBnZXRQcm9wcyk7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRlKHZhbCkge1xuICAgICAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgICAgIGlmIChpc05hTihkLnZhbHVlT2YoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUobChcIkRhdGVcIiksIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1PYmplY3QocHJvcHMsIGFkZGl0aW9uYWwsIHZhbCkge1xuICAgICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlKGwocmVmIHx8IFwib2JqZWN0XCIpLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIHZhciB2ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSA/IHZhbFtrZXldIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVzdWx0W3Byb3Aua2V5XSA9IHRyYW5zZm9ybSh2LCBwcm9wLnR5cCwgZ2V0UHJvcHMsIGtleSwgcmVmKTtcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdHJhbnNmb3JtKHZhbFtrZXldLCBhZGRpdGlvbmFsLCBnZXRQcm9wcywga2V5LCByZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaWYgKHR5cCA9PT0gXCJhbnlcIilcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICBpZiAodHlwID09PSBudWxsKSB7XG4gICAgICAgIGlmICh2YWwgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgfVxuICAgIGlmICh0eXAgPT09IGZhbHNlKVxuICAgICAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgdmFyIHJlZiA9IHVuZGVmaW5lZDtcbiAgICB3aGlsZSAodHlwZW9mIHR5cCA9PT0gXCJvYmplY3RcIiAmJiB0eXAucmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVmID0gdHlwLnJlZjtcbiAgICAgICAgdHlwID0gdHlwZU1hcFt0eXAucmVmXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodHlwKSlcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUVudW0odHlwLCB2YWwpO1xuICAgIGlmICh0eXBlb2YgdHlwID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiB0eXAuaGFzT3duUHJvcGVydHkoXCJ1bmlvbk1lbWJlcnNcIikgPyB0cmFuc2Zvcm1Vbmlvbih0eXAudW5pb25NZW1iZXJzLCB2YWwpXG4gICAgICAgICAgICA6IHR5cC5oYXNPd25Qcm9wZXJ0eShcImFycmF5SXRlbXNcIikgPyB0cmFuc2Zvcm1BcnJheSh0eXAuYXJyYXlJdGVtcywgdmFsKVxuICAgICAgICAgICAgICAgIDogdHlwLmhhc093blByb3BlcnR5KFwicHJvcHNcIikgPyB0cmFuc2Zvcm1PYmplY3QoZ2V0UHJvcHModHlwKSwgdHlwLmFkZGl0aW9uYWwsIHZhbClcbiAgICAgICAgICAgICAgICAgICAgOiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgLy8gTnVtYmVycyBjYW4gYmUgcGFyc2VkIGJ5IERhdGUgYnV0IHNob3VsZG4ndCBiZS5cbiAgICBpZiAodHlwID09PSBEYXRlICYmIHR5cGVvZiB2YWwgIT09IFwibnVtYmVyXCIpXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1EYXRlKHZhbCk7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByaW1pdGl2ZSh0eXAsIHZhbCk7XG59XG5mdW5jdGlvbiBjYXN0KHZhbCwgdHlwKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybSh2YWwsIHR5cCwganNvblRvSlNQcm9wcyk7XG59XG5mdW5jdGlvbiB1bmNhc3QodmFsLCB0eXApIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtKHZhbCwgdHlwLCBqc1RvSlNPTlByb3BzKTtcbn1cbmZ1bmN0aW9uIGwodHlwKSB7XG4gICAgcmV0dXJuIHsgbGl0ZXJhbDogdHlwIH07XG59XG5mdW5jdGlvbiBhKHR5cCkge1xuICAgIHJldHVybiB7IGFycmF5SXRlbXM6IHR5cCB9O1xufVxuZnVuY3Rpb24gdSgpIHtcbiAgICB2YXIgdHlwcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHR5cHNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdW5pb25NZW1iZXJzOiB0eXBzIH07XG59XG5mdW5jdGlvbiBvKHByb3BzLCBhZGRpdGlvbmFsKSB7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHByb3BzLCBhZGRpdGlvbmFsOiBhZGRpdGlvbmFsIH07XG59XG5mdW5jdGlvbiBtKGFkZGl0aW9uYWwpIHtcbiAgICByZXR1cm4geyBwcm9wczogW10sIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWwgfTtcbn1cbmZ1bmN0aW9uIHIobmFtZSkge1xuICAgIHJldHVybiB7IHJlZjogbmFtZSB9O1xufVxudmFyIHR5cGVNYXAgPSB7XG4gICAgXCJBY3Rpb25cIjogbyhbXG4gICAgICAgIHsganNvbjogXCJhcHBcIiwganM6IFwiYXBwXCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJBY3Rpb25UYXJnZXRBcHBcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiByKFwiQ29udGV4dEVsZW1lbnRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImludGVudFwiLCBqczogXCJpbnRlbnRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpdGxlXCIsIGpzOiBcInRpdGxlXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkFjdGlvblR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkFjdGlvblRhcmdldEFwcFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImFwcElkXCIsIGpzOiBcImFwcElkXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiZGVza3RvcEFnZW50XCIsIGpzOiBcImRlc2t0b3BBZ2VudFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaW5zdGFuY2VJZFwiLCBqczogXCJpbnN0YW5jZUlkXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDb250ZXh0RWxlbWVudFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IFwiXCIgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNoYXJ0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaW5zdHJ1bWVudHNcIiwganM6IFwiaW5zdHJ1bWVudHNcIiwgdHlwOiBhKHIoXCJJbnN0cnVtZW50RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm90aGVyQ29uZmlnXCIsIGpzOiBcIm90aGVyQ29uZmlnXCIsIHR5cDogdSh1bmRlZmluZWQsIGEocihcIkNvbnRleHRFbGVtZW50XCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInJhbmdlXCIsIGpzOiBcInJhbmdlXCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJUaW1lUmFuZ2VPYmplY3RcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJzdHlsZVwiLCBqczogXCJzdHlsZVwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiQ2hhcnRTdHlsZVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJDaGFydFR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkluc3RydW1lbnRFbGVtZW50XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiByKFwiUHVycGxlSW5zdHJ1bWVudElkZW50aWZpZXJzXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJtYXJrZXRcIiwganM6IFwibWFya2V0XCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJPcmdhbml6YXRpb25NYXJrZXRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiUHVycGxlSW50ZXJhY3Rpb25UeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlB1cnBsZUluc3RydW1lbnRJZGVudGlmaWVyc1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIkJCR1wiLCBqczogXCJCQkdcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkNVU0lQXCIsIGpzOiBcIkNVU0lQXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJGRFNfSURcIiwganM6IFwiRkRTX0lEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJGSUdJXCIsIGpzOiBcIkZJR0lcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIklTSU5cIiwganM6IFwiSVNJTlwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiUEVSTUlEXCIsIGpzOiBcIlBFUk1JRFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiUklDXCIsIGpzOiBcIlJJQ1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiU0VET0xcIiwganM6IFwiU0VET0xcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpY2tlclwiLCBqczogXCJ0aWNrZXJcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIk9yZ2FuaXphdGlvbk1hcmtldFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIkJCR1wiLCBqczogXCJCQkdcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkNPVU5UUllfSVNPQUxQSEEyXCIsIGpzOiBcIkNPVU5UUllfSVNPQUxQSEEyXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJNSUNcIiwganM6IFwiTUlDXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlRpbWVSYW5nZU9iamVjdFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImVuZFRpbWVcIiwganM6IFwiZW5kVGltZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBEYXRlKSB9LFxuICAgICAgICB7IGpzb246IFwic3RhcnRUaW1lXCIsIGpzOiBcInN0YXJ0VGltZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBEYXRlKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIlRpbWVSYW5nZVR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNoYXRJbml0U2V0dGluZ3NcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJjaGF0TmFtZVwiLCBqczogXCJjaGF0TmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwibWVtYmVyc1wiLCBqczogXCJtZW1iZXJzXCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJDb250YWN0TGlzdE9iamVjdFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm1lc3NhZ2VcIiwganM6IFwibWVzc2FnZVwiLCB0eXA6IHUodW5kZWZpbmVkLCB1KHIoXCJNZXNzYWdlT2JqZWN0XCIpLCBcIlwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm9wdGlvbnNcIiwganM6IFwib3B0aW9uc1wiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiQ2hhdE9wdGlvbnNcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiQ2hhdEluaXRTZXR0aW5nc1R5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNvbnRhY3RMaXN0T2JqZWN0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiY29udGFjdHNcIiwganM6IFwiY29udGFjdHNcIiwgdHlwOiBhKHIoXCJDb250YWN0RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJDb250YWN0TGlzdFR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNvbnRhY3RFbGVtZW50XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiByKFwiUHVycGxlQ29udGFjdElkZW50aWZpZXJzXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiRmx1ZmZ5SW50ZXJhY3Rpb25UeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlB1cnBsZUNvbnRhY3RJZGVudGlmaWVyc1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImVtYWlsXCIsIGpzOiBcImVtYWlsXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJGRFNfSURcIiwganM6IFwiRkRTX0lEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJNZXNzYWdlT2JqZWN0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiZW50aXRpZXNcIiwganM6IFwiZW50aXRpZXNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShyKFwiUHVycGxlQWN0aW9uXCIpKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInRleHRcIiwganM6IFwidGV4dFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiUHVycGxlTWVzc2FnZVRleHRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiTWVzc2FnZVR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlB1cnBsZUFjdGlvblwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImFwcFwiLCBqczogXCJhcHBcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkFjdGlvblRhcmdldEFwcFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiQ29udGV4dEVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnRlbnRcIiwganM6IFwiaW50ZW50XCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aXRsZVwiLCBqczogXCJ0aXRsZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkVudGl0eVR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImRhdGFcIiwganM6IFwiZGF0YVwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiUHVycGxlRGF0YVwiKSkgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlB1cnBsZURhdGFcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJkYXRhVXJpXCIsIGpzOiBcImRhdGFVcmlcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiBcIlwiIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJQdXJwbGVNZXNzYWdlVGV4dFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcInRleHQvbWFya2Rvd25cIiwganM6IFwidGV4dC9tYXJrZG93blwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGV4dC9wbGFpblwiLCBqczogXCJ0ZXh0L3BsYWluXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDaGF0T3B0aW9uc1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImFsbG93QWRkVXNlclwiLCBqczogXCJhbGxvd0FkZFVzZXJcIiwgdHlwOiB1KHVuZGVmaW5lZCwgdHJ1ZSkgfSxcbiAgICAgICAgeyBqc29uOiBcImFsbG93SGlzdG9yeUJyb3dzaW5nXCIsIGpzOiBcImFsbG93SGlzdG9yeUJyb3dzaW5nXCIsIHR5cDogdSh1bmRlZmluZWQsIHRydWUpIH0sXG4gICAgICAgIHsganNvbjogXCJhbGxvd01lc3NhZ2VDb3B5XCIsIGpzOiBcImFsbG93TWVzc2FnZUNvcHlcIiwgdHlwOiB1KHVuZGVmaW5lZCwgdHJ1ZSkgfSxcbiAgICAgICAgeyBqc29uOiBcImdyb3VwUmVjaXBpZW50c1wiLCBqczogXCJncm91cFJlY2lwaWVudHNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgdHJ1ZSkgfSxcbiAgICAgICAgeyBqc29uOiBcImlzUHVibGljXCIsIGpzOiBcImlzUHVibGljXCIsIHR5cDogdSh1bmRlZmluZWQsIHRydWUpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDaGF0TWVzc2FnZVwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImNoYXRSb29tXCIsIGpzOiBcImNoYXRSb29tXCIsIHR5cDogcihcIkNoYXRSb29tT2JqZWN0XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJtZXNzYWdlXCIsIGpzOiBcIm1lc3NhZ2VcIiwgdHlwOiByKFwiTWVzc2FnZU9iamVjdFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkNoYXRNZXNzYWdlVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ2hhdFJvb21PYmplY3RcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IG0oXCJhbnlcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwicHJvdmlkZXJOYW1lXCIsIGpzOiBcInByb3ZpZGVyTmFtZVwiLCB0eXA6IFwiXCIgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJDaGF0Um9vbVR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInVybFwiLCBqczogXCJ1cmxcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNoYXRSb29tXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiBtKFwiYW55XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInByb3ZpZGVyTmFtZVwiLCBqczogXCJwcm92aWRlck5hbWVcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiQ2hhdFJvb21UeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ1cmxcIiwganM6IFwidXJsXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDaGF0U2VhcmNoQ3JpdGVyaWFcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJjcml0ZXJpYVwiLCBqczogXCJjcml0ZXJpYVwiLCB0eXA6IGEodShyKFwiT3JnYW5pemF0aW9uT2JqZWN0XCIpLCBcIlwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJDaGF0U2VhcmNoQ3JpdGVyaWFUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJPcmdhbml6YXRpb25PYmplY3RcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHIoXCJJZGVudGlmaWVyc1wiKSB9LFxuICAgICAgICB7IGpzb246IFwibWFya2V0XCIsIGpzOiBcIm1hcmtldFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiT3JnYW5pemF0aW9uTWFya2V0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIlRlbnRhY2xlZEludGVyYWN0aW9uVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJJZGVudGlmaWVyc1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIkJCR1wiLCBqczogXCJCQkdcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkNVU0lQXCIsIGpzOiBcIkNVU0lQXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJGRFNfSURcIiwganM6IFwiRkRTX0lEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJGSUdJXCIsIGpzOiBcIkZJR0lcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIklTSU5cIiwganM6IFwiSVNJTlwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiUEVSTUlEXCIsIGpzOiBcIlBFUk1JRFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiUklDXCIsIGpzOiBcIlJJQ1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiU0VET0xcIiwganM6IFwiU0VET0xcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRpY2tlclwiLCBqczogXCJ0aWNrZXJcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIkxFSVwiLCBqczogXCJMRUlcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImVtYWlsXCIsIGpzOiBcImVtYWlsXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDb250YWN0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiByKFwiRmx1ZmZ5Q29udGFjdElkZW50aWZpZXJzXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiRmx1ZmZ5SW50ZXJhY3Rpb25UeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkZsdWZmeUNvbnRhY3RJZGVudGlmaWVyc1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImVtYWlsXCIsIGpzOiBcImVtYWlsXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJGRFNfSURcIiwganM6IFwiRkRTX0lEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDb250YWN0TGlzdFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImNvbnRhY3RzXCIsIGpzOiBcImNvbnRhY3RzXCIsIHR5cDogYShyKFwiQ29udGFjdEVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiQ29udGFjdExpc3RUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJDb250ZXh0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ291bnRyeVwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogcihcIkNvdW50cnlJRFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkNvdW50cnlUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkNvdW50cnlJRFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIkNPVU5UUllfSVNPQUxQSEEyXCIsIGpzOiBcIkNPVU5UUllfSVNPQUxQSEEyXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJDT1VOVFJZX0lTT0FMUEhBM1wiLCBqczogXCJDT1VOVFJZX0lTT0FMUEhBM1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiSVNPQUxQSEEyXCIsIGpzOiBcIklTT0FMUEhBMlwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiSVNPQUxQSEEzXCIsIGpzOiBcIklTT0FMUEhBM1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiQ3VycmVuY3lcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHIoXCJDdXJyZW5jeUlEXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJDdXJyZW5jeVR5cGVcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkN1cnJlbmN5SURcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJDVVJSRU5DWV9JU09DT0RFXCIsIGpzOiBcIkNVUlJFTkNZX0lTT0NPREVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkVtYWlsXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwicmVjaXBpZW50c1wiLCBqczogXCJyZWNpcGllbnRzXCIsIHR5cDogcihcIkVtYWlsUmVjaXBpZW50c1wiKSB9LFxuICAgICAgICB7IGpzb246IFwic3ViamVjdFwiLCBqczogXCJzdWJqZWN0XCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0ZXh0Qm9keVwiLCBqczogXCJ0ZXh0Qm9keVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkVtYWlsVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiRW1haWxSZWNpcGllbnRzXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkVtYWlsUmVjaXBpZW50c0lEXCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkVtYWlsUmVjaXBpZW50c1R5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiY29udGFjdHNcIiwganM6IFwiY29udGFjdHNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgYShyKFwiQ29udGFjdEVsZW1lbnRcIikpKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiRW1haWxSZWNpcGllbnRzSURcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJlbWFpbFwiLCBqczogXCJlbWFpbFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiRkRTX0lEXCIsIGpzOiBcIkZEU19JRFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiSW5zdHJ1bWVudFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogcihcIkZsdWZmeUluc3RydW1lbnRJZGVudGlmaWVyc1wiKSB9LFxuICAgICAgICB7IGpzb246IFwibWFya2V0XCIsIGpzOiBcIm1hcmtldFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiUHVycGxlTWFya2V0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIlB1cnBsZUludGVyYWN0aW9uVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJGbHVmZnlJbnN0cnVtZW50SWRlbnRpZmllcnNcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJCQkdcIiwganM6IFwiQkJHXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJDVVNJUFwiLCBqczogXCJDVVNJUFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiRkRTX0lEXCIsIGpzOiBcIkZEU19JRFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiRklHSVwiLCBqczogXCJGSUdJXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJJU0lOXCIsIGpzOiBcIklTSU5cIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIlBFUk1JRFwiLCBqczogXCJQRVJNSURcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIlJJQ1wiLCBqczogXCJSSUNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIlNFRE9MXCIsIGpzOiBcIlNFRE9MXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aWNrZXJcIiwganM6IFwidGlja2VyXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJQdXJwbGVNYXJrZXRcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJCQkdcIiwganM6IFwiQkJHXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJDT1VOVFJZX0lTT0FMUEhBMlwiLCBqczogXCJDT1VOVFJZX0lTT0FMUEhBMlwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiTUlDXCIsIGpzOiBcIk1JQ1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJJbnN0cnVtZW50TGlzdFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImluc3RydW1lbnRzXCIsIGpzOiBcImluc3RydW1lbnRzXCIsIHR5cDogYShyKFwiSW5zdHJ1bWVudEVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiSW5zdHJ1bWVudExpc3RUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJJbnRlcmFjdGlvblwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImRlc2NyaXB0aW9uXCIsIGpzOiBcImRlc2NyaXB0aW9uXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkludGVyYWN0aW9uSURcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJpbml0aWF0b3JcIiwganM6IFwiaW5pdGlhdG9yXCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJDb250YWN0RWxlbWVudFwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImludGVyYWN0aW9uVHlwZVwiLCBqczogXCJpbnRlcmFjdGlvblR5cGVcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJvcmlnaW5cIiwganM6IFwib3JpZ2luXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJwYXJ0aWNpcGFudHNcIiwganM6IFwicGFydGljaXBhbnRzXCIsIHR5cDogcihcIkNvbnRhY3RMaXN0T2JqZWN0XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0aW1lUmFuZ2VcIiwganM6IFwidGltZVJhbmdlXCIsIHR5cDogcihcIlRpbWVSYW5nZU9iamVjdFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIkludGVyYWN0aW9uVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJJbnRlcmFjdGlvbklEXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiU0FMRVNGT1JDRVwiLCBqczogXCJTQUxFU0ZPUkNFXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJTSU5HTEVUUkFDS1wiLCBqczogXCJTSU5HTEVUUkFDS1wiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwiVVJJXCIsIGpzOiBcIlVSSVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiTWVzc2FnZVwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImVudGl0aWVzXCIsIGpzOiBcImVudGl0aWVzXCIsIHR5cDogdSh1bmRlZmluZWQsIG0ocihcIkZsdWZmeUFjdGlvblwiKSkpIH0sXG4gICAgICAgIHsganNvbjogXCJ0ZXh0XCIsIGpzOiBcInRleHRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkZsdWZmeU1lc3NhZ2VUZXh0XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIk1lc3NhZ2VUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJGbHVmZnlBY3Rpb25cIjogbyhbXG4gICAgICAgIHsganNvbjogXCJhcHBcIiwganM6IFwiYXBwXCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJBY3Rpb25UYXJnZXRBcHBcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJjb250ZXh0XCIsIGpzOiBcImNvbnRleHRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkNvbnRleHRFbGVtZW50XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwiaW50ZW50XCIsIGpzOiBcImludGVudFwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidGl0bGVcIiwganM6IFwidGl0bGVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJFbnRpdHlUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJkYXRhXCIsIGpzOiBcImRhdGFcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkZsdWZmeURhdGFcIikpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJGbHVmZnlEYXRhXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiZGF0YVVyaVwiLCBqczogXCJkYXRhVXJpXCIsIHR5cDogXCJcIiB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogXCJcIiB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiRmx1ZmZ5TWVzc2FnZVRleHRcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJ0ZXh0L21hcmtkb3duXCIsIGpzOiBcInRleHQvbWFya2Rvd25cIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInRleHQvcGxhaW5cIiwganM6IFwidGV4dC9wbGFpblwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiTm90aGluZ1wiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJOb3RoaW5nVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiT3JkZXJcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJkZXRhaWxzXCIsIGpzOiBcImRldGFpbHNcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIlB1cnBsZU9yZGVyRGV0YWlsc1wiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogbShcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiT3JkZXJUeXBlXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJQdXJwbGVPcmRlckRldGFpbHNcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJwcm9kdWN0XCIsIGpzOiBcInByb2R1Y3RcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIlByb2R1Y3RPYmplY3RcIikpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJQcm9kdWN0T2JqZWN0XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiBtKFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0cnVtZW50XCIsIGpzOiBcImluc3RydW1lbnRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgcihcIkluc3RydW1lbnRFbGVtZW50XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiUHJvZHVjdFR5cGVcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIk9yZGVyTGlzdFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcIm9yZGVyc1wiLCBqczogXCJvcmRlcnNcIiwgdHlwOiBhKHIoXCJPcmRlckVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiT3JkZXJMaXN0VHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiT3JkZXJFbGVtZW50XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiZGV0YWlsc1wiLCBqczogXCJkZXRhaWxzXCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJGbHVmZnlPcmRlckRldGFpbHNcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IG0oXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIk9yZGVyVHlwZVwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiRmx1ZmZ5T3JkZXJEZXRhaWxzXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwicHJvZHVjdFwiLCBqczogXCJwcm9kdWN0XCIsIHR5cDogdSh1bmRlZmluZWQsIHIoXCJQcm9kdWN0T2JqZWN0XCIpKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiT3JnYW5pemF0aW9uXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiByKFwiT3JnYW5pemF0aW9uSWRlbnRpZmllcnNcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJTdGlja3lJbnRlcmFjdGlvblR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiT3JnYW5pemF0aW9uSWRlbnRpZmllcnNcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJGRFNfSURcIiwganM6IFwiRkRTX0lEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJMRUlcIiwganM6IFwiTEVJXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJQRVJNSURcIiwganM6IFwiUEVSTUlEXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJQb3J0Zm9saW9cIjogbyhbXG4gICAgICAgIHsganNvbjogXCJwb3NpdGlvbnNcIiwganM6IFwicG9zaXRpb25zXCIsIHR5cDogYShyKFwiUG9zaXRpb25FbGVtZW50XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIlBvcnRmb2xpb1R5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlBvc2l0aW9uRWxlbWVudFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImhvbGRpbmdcIiwganM6IFwiaG9sZGluZ1wiLCB0eXA6IDMuMTQgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RydW1lbnRcIiwganM6IFwiaW5zdHJ1bWVudFwiLCB0eXA6IHIoXCJJbnN0cnVtZW50RWxlbWVudFwiKSB9LFxuICAgICAgICB7IGpzb246IFwidHlwZVwiLCBqczogXCJ0eXBlXCIsIHR5cDogcihcIlBvc2l0aW9uVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiUG9zaXRpb25cIjogbyhbXG4gICAgICAgIHsganNvbjogXCJob2xkaW5nXCIsIGpzOiBcImhvbGRpbmdcIiwgdHlwOiAzLjE0IH0sXG4gICAgICAgIHsganNvbjogXCJpbnN0cnVtZW50XCIsIGpzOiBcImluc3RydW1lbnRcIiwgdHlwOiByKFwiSW5zdHJ1bWVudEVsZW1lbnRcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJQb3NpdGlvblR5cGVcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlByb2R1Y3RcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IG0oXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcImluc3RydW1lbnRcIiwganM6IFwiaW5zdHJ1bWVudFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiSW5zdHJ1bWVudEVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJQcm9kdWN0VHlwZVwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiVGltZVJhbmdlXCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiZW5kVGltZVwiLCBqczogXCJlbmRUaW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIERhdGUpIH0sXG4gICAgICAgIHsganNvbjogXCJzdGFydFRpbWVcIiwganM6IFwic3RhcnRUaW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIERhdGUpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiVGltZVJhbmdlVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiVHJhZGVcIjogbyhbXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IG0oXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgICAgICB7IGpzb246IFwicHJvZHVjdFwiLCBqczogXCJwcm9kdWN0XCIsIHR5cDogcihcIlByb2R1Y3RPYmplY3RcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInR5cGVcIiwganM6IFwidHlwZVwiLCB0eXA6IHIoXCJUcmFkZVR5cGVcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIlRyYWRlTGlzdFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcInRyYWRlc1wiLCBqczogXCJ0cmFkZXNcIiwgdHlwOiBhKHIoXCJUcmFkZUVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiVHJhZGVMaXN0VHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiB1KHVuZGVmaW5lZCwgbShcImFueVwiKSkgfSxcbiAgICAgICAgeyBqc29uOiBcIm5hbWVcIiwganM6IFwibmFtZVwiLCB0eXA6IHUodW5kZWZpbmVkLCBcIlwiKSB9LFxuICAgIF0sIFwiYW55XCIpLFxuICAgIFwiVHJhZGVFbGVtZW50XCI6IG8oW1xuICAgICAgICB7IGpzb246IFwiaWRcIiwganM6IFwiaWRcIiwgdHlwOiBtKFwiXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICAgICAgeyBqc29uOiBcInByb2R1Y3RcIiwganM6IFwicHJvZHVjdFwiLCB0eXA6IHIoXCJQcm9kdWN0T2JqZWN0XCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiVHJhZGVUeXBlXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJUcmFuc2FjdGlvblJlc3VsdFwiOiBvKFtcbiAgICAgICAgeyBqc29uOiBcImNvbnRleHRcIiwganM6IFwiY29udGV4dFwiLCB0eXA6IHUodW5kZWZpbmVkLCByKFwiQ29udGV4dEVsZW1lbnRcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJzdGF0dXNcIiwganM6IFwic3RhdHVzXCIsIHR5cDogcihcIlRyYW5zYWN0aW9uU3RhdHVzXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiVHJhbnNhY3Rpb25SZXN1bHRUeXBlXCIpIH0sXG4gICAgICAgIHsganNvbjogXCJpZFwiLCBqczogXCJpZFwiLCB0eXA6IHUodW5kZWZpbmVkLCBtKFwiYW55XCIpKSB9LFxuICAgICAgICB7IGpzb246IFwibmFtZVwiLCBqczogXCJuYW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIFwiXCIpIH0sXG4gICAgXSwgXCJhbnlcIiksXG4gICAgXCJWYWx1YXRpb25cIjogbyhbXG4gICAgICAgIHsganNvbjogXCJDVVJSRU5DWV9JU09DT0RFXCIsIGpzOiBcIkNVUlJFTkNZX0lTT0NPREVcIiwgdHlwOiBcIlwiIH0sXG4gICAgICAgIHsganNvbjogXCJleHBpcnlUaW1lXCIsIGpzOiBcImV4cGlyeVRpbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgRGF0ZSkgfSxcbiAgICAgICAgeyBqc29uOiBcInByaWNlXCIsIGpzOiBcInByaWNlXCIsIHR5cDogdSh1bmRlZmluZWQsIDMuMTQpIH0sXG4gICAgICAgIHsganNvbjogXCJ0eXBlXCIsIGpzOiBcInR5cGVcIiwgdHlwOiByKFwiVmFsdWF0aW9uVHlwZVwiKSB9LFxuICAgICAgICB7IGpzb246IFwidmFsdWF0aW9uVGltZVwiLCBqczogXCJ2YWx1YXRpb25UaW1lXCIsIHR5cDogdSh1bmRlZmluZWQsIERhdGUpIH0sXG4gICAgICAgIHsganNvbjogXCJ2YWx1ZVwiLCBqczogXCJ2YWx1ZVwiLCB0eXA6IDMuMTQgfSxcbiAgICAgICAgeyBqc29uOiBcImlkXCIsIGpzOiBcImlkXCIsIHR5cDogdSh1bmRlZmluZWQsIG0oXCJhbnlcIikpIH0sXG4gICAgICAgIHsganNvbjogXCJuYW1lXCIsIGpzOiBcIm5hbWVcIiwgdHlwOiB1KHVuZGVmaW5lZCwgXCJcIikgfSxcbiAgICBdLCBcImFueVwiKSxcbiAgICBcIkFjdGlvblR5cGVcIjogW1xuICAgICAgICBcImZkYzMuYWN0aW9uXCIsXG4gICAgXSxcbiAgICBcIlB1cnBsZUludGVyYWN0aW9uVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5pbnN0cnVtZW50XCIsXG4gICAgXSxcbiAgICBcIlRpbWVSYW5nZVR5cGVcIjogW1xuICAgICAgICBcImZkYzMudGltZXJhbmdlXCIsXG4gICAgXSxcbiAgICBcIkNoYXJ0U3R5bGVcIjogW1xuICAgICAgICBcImJhclwiLFxuICAgICAgICBcImNhbmRsZVwiLFxuICAgICAgICBcImN1c3RvbVwiLFxuICAgICAgICBcImhlYXRtYXBcIixcbiAgICAgICAgXCJoaXN0b2dyYW1cIixcbiAgICAgICAgXCJsaW5lXCIsXG4gICAgICAgIFwibW91bnRhaW5cIixcbiAgICAgICAgXCJwaWVcIixcbiAgICAgICAgXCJzY2F0dGVyXCIsXG4gICAgICAgIFwic3RhY2tlZC1iYXJcIixcbiAgICBdLFxuICAgIFwiQ2hhcnRUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmNoYXJ0XCIsXG4gICAgXSxcbiAgICBcIkZsdWZmeUludGVyYWN0aW9uVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5jb250YWN0XCIsXG4gICAgXSxcbiAgICBcIkNvbnRhY3RMaXN0VHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5jb250YWN0TGlzdFwiLFxuICAgIF0sXG4gICAgXCJFbnRpdHlUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmFjdGlvblwiLFxuICAgICAgICBcImZkYzMuZW50aXR5LmZpbGVBdHRhY2htZW50XCIsXG4gICAgXSxcbiAgICBcIk1lc3NhZ2VUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLm1lc3NhZ2VcIixcbiAgICBdLFxuICAgIFwiQ2hhdEluaXRTZXR0aW5nc1R5cGVcIjogW1xuICAgICAgICBcImZkYzMuY2hhdC5pbml0U2V0dGluZ3NcIixcbiAgICBdLFxuICAgIFwiQ2hhdFJvb21UeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmNoYXQucm9vbVwiLFxuICAgIF0sXG4gICAgXCJDaGF0TWVzc2FnZVR5cGVcIjogW1xuICAgICAgICBcImZkYzMuY2hhdC5tZXNzYWdlXCIsXG4gICAgXSxcbiAgICBcIlRlbnRhY2xlZEludGVyYWN0aW9uVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5jb250YWN0XCIsXG4gICAgICAgIFwiZmRjMy5pbnN0cnVtZW50XCIsXG4gICAgICAgIFwiZmRjMy5vcmdhbml6YXRpb25cIixcbiAgICBdLFxuICAgIFwiQ2hhdFNlYXJjaENyaXRlcmlhVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5jaGF0LnNlYXJjaENyaXRlcmlhXCIsXG4gICAgXSxcbiAgICBcIkNvdW50cnlUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmNvdW50cnlcIixcbiAgICBdLFxuICAgIFwiQ3VycmVuY3lUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmN1cnJlbmN5XCIsXG4gICAgXSxcbiAgICBcIkVtYWlsUmVjaXBpZW50c1R5cGVcIjogW1xuICAgICAgICBcImZkYzMuY29udGFjdFwiLFxuICAgICAgICBcImZkYzMuY29udGFjdExpc3RcIixcbiAgICBdLFxuICAgIFwiRW1haWxUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLmVtYWlsXCIsXG4gICAgXSxcbiAgICBcIkluc3RydW1lbnRMaXN0VHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5pbnN0cnVtZW50TGlzdFwiLFxuICAgIF0sXG4gICAgXCJJbnRlcmFjdGlvblR5cGVcIjogW1xuICAgICAgICBcImZkYzMuaW50ZXJhY3Rpb25cIixcbiAgICBdLFxuICAgIFwiTm90aGluZ1R5cGVcIjogW1xuICAgICAgICBcImZkYzMubm90aGluZ1wiLFxuICAgIF0sXG4gICAgXCJQcm9kdWN0VHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5wcm9kdWN0XCIsXG4gICAgXSxcbiAgICBcIk9yZGVyVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5vcmRlclwiLFxuICAgIF0sXG4gICAgXCJPcmRlckxpc3RUeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLm9yZGVyTGlzdFwiLFxuICAgIF0sXG4gICAgXCJTdGlja3lJbnRlcmFjdGlvblR5cGVcIjogW1xuICAgICAgICBcImZkYzMub3JnYW5pemF0aW9uXCIsXG4gICAgXSxcbiAgICBcIlBvc2l0aW9uVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy5wb3NpdGlvblwiLFxuICAgIF0sXG4gICAgXCJQb3J0Zm9saW9UeXBlXCI6IFtcbiAgICAgICAgXCJmZGMzLnBvcnRmb2xpb1wiLFxuICAgIF0sXG4gICAgXCJUcmFkZVR5cGVcIjogW1xuICAgICAgICBcImZkYzMudHJhZGVcIixcbiAgICBdLFxuICAgIFwiVHJhZGVMaXN0VHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy50cmFkZUxpc3RcIixcbiAgICBdLFxuICAgIFwiVHJhbnNhY3Rpb25TdGF0dXNcIjogW1xuICAgICAgICBcIkNyZWF0ZWRcIixcbiAgICAgICAgXCJEZWxldGVkXCIsXG4gICAgICAgIFwiRmFpbGVkXCIsXG4gICAgICAgIFwiVXBkYXRlZFwiLFxuICAgIF0sXG4gICAgXCJUcmFuc2FjdGlvblJlc3VsdFR5cGVcIjogW1xuICAgICAgICBcImZkYzMudHJhbnNhY3Rpb25SZXN1bHRcIixcbiAgICBdLFxuICAgIFwiVmFsdWF0aW9uVHlwZVwiOiBbXG4gICAgICAgIFwiZmRjMy52YWx1YXRpb25cIixcbiAgICBdXG59O1xuXG4vKipcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKiBDb3B5cmlnaHQgRklOT1MgRkRDMyBjb250cmlidXRvcnMgLSBzZWUgTk9USUNFIGZpbGVcbiAqL1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIFN0YW5kYXJkSW50ZW50fSBpbnN0ZWFkXG4gKi9cbnZhciBJbnRlbnRzO1xuKGZ1bmN0aW9uIChJbnRlbnRzKSB7XG4gICAgSW50ZW50c1tcIkNyZWF0ZUludGVyYWN0aW9uXCJdID0gXCJDcmVhdGVJbnRlcmFjdGlvblwiO1xuICAgIEludGVudHNbXCJTZW5kQ2hhdE1lc3NhZ2VcIl0gPSBcIlNlbmRDaGF0TWVzc2FnZVwiO1xuICAgIEludGVudHNbXCJTdGFydENhbGxcIl0gPSBcIlN0YXJ0Q2FsbFwiO1xuICAgIEludGVudHNbXCJTdGFydENoYXRcIl0gPSBcIlN0YXJ0Q2hhdFwiO1xuICAgIEludGVudHNbXCJTdGFydEVtYWlsXCJdID0gXCJTdGFydEVtYWlsXCI7XG4gICAgSW50ZW50c1tcIlZpZXdBbmFseXNpc1wiXSA9IFwiVmlld0FuYWx5c2lzXCI7XG4gICAgSW50ZW50c1tcIlZpZXdDaGF0XCJdID0gXCJWaWV3Q2hhdFwiO1xuICAgIEludGVudHNbXCJWaWV3Q2hhcnRcIl0gPSBcIlZpZXdDaGFydFwiO1xuICAgIEludGVudHNbXCJWaWV3Q29udGFjdFwiXSA9IFwiVmlld0NvbnRhY3RcIjtcbiAgICBJbnRlbnRzW1wiVmlld0hvbGRpbmdzXCJdID0gXCJWaWV3SG9sZGluZ3NcIjtcbiAgICBJbnRlbnRzW1wiVmlld0luc3RydW1lbnRcIl0gPSBcIlZpZXdJbnN0cnVtZW50XCI7XG4gICAgSW50ZW50c1tcIlZpZXdJbnRlcmFjdGlvbnNcIl0gPSBcIlZpZXdJbnRlcmFjdGlvbnNcIjtcbiAgICBJbnRlbnRzW1wiVmlld01lc3NhZ2VzXCJdID0gXCJWaWV3TWVzc2FnZXNcIjtcbiAgICBJbnRlbnRzW1wiVmlld05ld3NcIl0gPSBcIlZpZXdOZXdzXCI7XG4gICAgSW50ZW50c1tcIlZpZXdPcmRlcnNcIl0gPSBcIlZpZXdPcmRlcnNcIjtcbiAgICBJbnRlbnRzW1wiVmlld1Byb2ZpbGVcIl0gPSBcIlZpZXdQcm9maWxlXCI7XG4gICAgSW50ZW50c1tcIlZpZXdRdW90ZVwiXSA9IFwiVmlld1F1b3RlXCI7XG4gICAgSW50ZW50c1tcIlZpZXdSZXNlYXJjaFwiXSA9IFwiVmlld1Jlc2VhcmNoXCI7XG59KShJbnRlbnRzIHx8IChJbnRlbnRzID0ge30pKTtcblxuZXhwb3J0IHsgQnJpZGdpbmdFcnJvciwgQnJpZGdpbmdUeXBlcywgQ2hhbm5lbEVycm9yLCBDb250ZXh0VHlwZXMsIENvbnZlcnQsIEludGVudHMsIE9wZW5FcnJvciwgUmVzb2x2ZUVycm9yLCBSZXN1bHRFcnJvciwgYWRkQ29udGV4dExpc3RlbmVyLCBhZGRJbnRlbnRMaXN0ZW5lciwgYnJvYWRjYXN0LCBjb21wYXJlVmVyc2lvbk51bWJlcnMsIGNyZWF0ZVByaXZhdGVDaGFubmVsLCBmZGMzUmVhZHksIGZpbmRJbnN0YW5jZXMsIGZpbmRJbnRlbnQsIGZpbmRJbnRlbnRzQnlDb250ZXh0LCBnZXRBcHBNZXRhZGF0YSwgZ2V0Q3VycmVudENoYW5uZWwsIGdldEluZm8sIGdldE9yQ3JlYXRlQ2hhbm5lbCwgZ2V0U3lzdGVtQ2hhbm5lbHMsIGdldFVzZXJDaGFubmVscywgaXNTdGFuZGFyZENvbnRleHRUeXBlLCBpc1N0YW5kYXJkSW50ZW50LCBqb2luQ2hhbm5lbCwgam9pblVzZXJDaGFubmVsLCBsZWF2ZUN1cnJlbnRDaGFubmVsLCBvcGVuLCByYWlzZUludGVudCwgcmFpc2VJbnRlbnRGb3JDb250ZXh0LCB2ZXJzaW9uSXNBdExlYXN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZGMzLmVzbS5qcy5tYXBcbiIsInZhciBlLHQscj17ZDooZSx0KT0+e2Zvcih2YXIgYSBpbiB0KXIubyh0LGEpJiYhci5vKGUsYSkmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGEse2VudW1lcmFibGU6ITAsZ2V0OnRbYV19KX0sbzooZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LGE9e307ci5kKGEse2RxOigpPT5BZGFwdGVyRXJyb3IsTVM6KCk9PkFwaUVycm9yLHhROigpPT5FdmVudEVycm9yLHNPOigpPT5XZSxadTooKT0+ZmUsSTM6KCk9PiRlLCRVOigpPT5HZSxpMDooKT0+SWUsY1g6KCk9PkluaXRpYWxpemF0aW9uRXJyb3IsZ0g6KCk9PkludmFsaWRDZWxsUmFuZ2VBZGRyZXNzRXJyb3IsX1c6KCk9PlBhcmFtZXRlckVycm9yLFUkOigpPT5pLFU3OigpPT5sLHJkOigpPT5iZX0pO2NsYXNzIEFwaUVycm9yIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZT1cIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCIsdCl7dmFyIHI7c3VwZXIoZSksdCYmKHRoaXMuaW5uZXJFcnJvcj10JiZ0KSx0aGlzLnN0YWNrPW51bGw9PT0ocj10aGlzLnN0YWNrKXx8dm9pZCAwPT09cj92b2lkIDA6ci5yZXBsYWNlKC9eKFxcdypFcnJvcikvLGAke3RoaXMuY29uc3RydWN0b3IubmFtZX1gKX19Y2xhc3MgQWRhcHRlckVycm9yIGV4dGVuZHMgQXBpRXJyb3J7Y29uc3RydWN0b3IoZT1cIkZhaWxlZCB0byBleGVjdXRlIGFkYXB0ZXIgZnVuY3Rpb25cIix0KXtzdXBlcihlLHQpfX1jbGFzcyBFdmVudEVycm9yIGV4dGVuZHMgQXBpRXJyb3J7Y29uc3RydWN0b3IoZT1cIkZhaWxlZCB0byByYWlzZSBldmVudFwiLHQpe3N1cGVyKGUsdCl9fWNsYXNzIEluaXRpYWxpemF0aW9uRXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiRmFpbGVkIHRvIGluaXRpYWxpemUgYWRhcHRlclwiLHQpe3N1cGVyKGUsdCl9fWNsYXNzIEludmFsaWRDZWxsUmFuZ2VBZGRyZXNzRXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiVGhlIGNlbGwgcmFuZ2UgYWRkcmVzcyBpcyBub3QgdmFsaWRcIix0KXtzdXBlcihlLHQpfX1jbGFzcyBQYXJhbWV0ZXJFcnJvciBleHRlbmRzIEFwaUVycm9ye2NvbnN0cnVjdG9yKGU9XCJJbnZhbGlkIHBhcmFtZXRlciB2YWx1ZVwiLHQpe3N1cGVyKGUsdCl9fSFmdW5jdGlvbihlKXtlLkFjdGl2YXRlV29ya2Jvb2s9XCJBY3RpdmF0ZVdvcmtib29rXCIsZS5BY3RpdmF0ZVdvcmtzaGVldD1cIkFjdGl2YXRlV29ya3NoZWV0XCIsZS5BZGRXb3Jrc2hlZXQ9XCJBZGRXb3Jrc2hlZXRcIixlLkNhbGN1bGF0ZVdvcmtib29rPVwiQ2FsY3VsYXRlV29ya2Jvb2tcIixlLkNhbGN1bGF0ZVdvcmtzaGVldD1cIkNhbGN1bGF0ZVdvcmtzaGVldFwiLGUuQ2xlYXJBbGxDZWxscz1cIkNsZWFyQWxsQ2VsbHNcIixlLkNsZWFyQWxsQ2VsbFZhbHVlcz1cIkNsZWFyQWxsQ2VsbFZhbHVlc1wiLGUuQ2xlYXJBbGxDZWxsRm9ybWF0dGluZz1cIkNsZWFyQWxsQ2VsbEZvcm1hdHRpbmdcIixlLkNsZWFyQ2VsbFZhbHVlcz1cIkNsZWFyQ2VsbFZhbHVlc1wiLGUuQ2xlYXJDZWxsRm9ybWF0dGluZz1cIkNsZWFyQ2VsbEZvcm1hdHRpbmdcIixlLkNsZWFyQ2VsbHM9XCJDbGVhckNlbGxzXCIsZS5DbG9zZVdvcmtib29rPVwiQ2xvc2VXb3JrYm9va1wiLGUuQ3JlYXRlV29ya2Jvb2s9XCJDcmVhdGVXb3JrYm9va1wiLGUuRGVsZXRlV29ya3NoZWV0PVwiRGVsZXRlV29ya3NoZWV0XCIsZS5EZXJlZ2lzdGVyRXZlbnQ9XCJEZXJlZ2lzdGVyRXZlbnRcIixlLkV2ZW50RmlyZWQ9XCJFdmVudEZpcmVkXCIsZS5GaWx0ZXJDZWxscz1cIkZpbHRlckNlbGxzXCIsZS5HZXRBY3RpdmVXb3Jrc2hlZXQ9XCJHZXRBY3RpdmVXb3Jrc2hlZXRcIixlLkdldENhbGN1bGF0aW9uTW9kZT1cIkdldENhbGN1bGF0aW9uTW9kZVwiLGUuR2V0Q2VsbE5hbWVzPVwiR2V0Q2VsbE5hbWVzXCIsZS5HZXRDZWxscz1cIkdldENlbGxzXCIsZS5HZXRSYW5nZUFkZHJlc3M9XCJHZXRSYW5nZUFkZHJlc3NcIixlLkdldFdvcmtib29rQnlJZD1cIkdldFdvcmtib29rQnlJZFwiLGUuR2V0V29ya2Jvb2tGaWxlUGF0aD1cIkdldFdvcmtib29rRmlsZVBhdGhcIixlLkdldFdvcmtib29rTmFtZT1cIkdldFdvcmtib29rTmFtZVwiLGUuR2V0V29ya2Jvb2tzPVwiR2V0V29ya2Jvb2tzXCIsZS5HZXRXb3JrYm9va1dpbmRvd0JvdW5kcz1cIkdldFdvcmtib29rV2luZG93Qm91bmRzXCIsZS5HZXRXb3Jrc2hlZXRCeUlkPVwiR2V0V29ya3NoZWV0QnlJZFwiLGUuR2V0V29ya3NoZWV0QnlOYW1lPVwiR2V0V29ya3NoZWV0QnlOYW1lXCIsZS5HZXRXb3Jrc2hlZXROYW1lPVwiR2V0V29ya3NoZWV0TmFtZVwiLGUuR2V0V29ya3NoZWV0cz1cIkdldFdvcmtzaGVldHNcIixlLkxvZ01lc3NhZ2U9XCJMb2dNZXNzYWdlXCIsZS5PcGVuV29ya2Jvb2s9XCJPcGVuV29ya2Jvb2tcIixlLlByb3RlY3RXb3Jrc2hlZXQ9XCJQcm90ZWN0V29ya3NoZWV0XCIsZS5RdWl0QXBwbGljYXRpb249XCJRdWl0QXBwbGljYXRpb25cIixlLlJlZ2lzdGVyRXZlbnQ9XCJSZWdpc3RlckV2ZW50XCIsZS5TYXZlV29ya2Jvb2s9XCJTYXZlV29ya2Jvb2tcIixlLlNhdmVXb3JrYm9va0FzPVwiU2F2ZVdvcmtib29rQXNcIixlLlNldENlbGxWYWx1ZXM9XCJTZXRDZWxsVmFsdWVzXCIsZS5TZXRDZWxsRm9ybWF0dGluZz1cIlNldENlbGxGb3JtYXR0aW5nXCIsZS5TZXRDZWxsTmFtZT1cIlNldENlbGxOYW1lXCIsZS5TZXRXb3JrYm9va1dpbmRvd0JvdW5kcz1cIlNldFdvcmtib29rV2luZG93Qm91bmRzXCIsZS5TZXRXb3Jrc2hlZXROYW1lPVwiU2V0V29ya3NoZWV0TmFtZVwifShlfHwoZT17fSkpLGZ1bmN0aW9uKGUpe2UuQWN0aXZhdGU9XCJBY3RpdmF0ZVwiLGUuQWN0aXZhdGVXb3Jrc2hlZXQ9XCJBY3RpdmF0ZVdvcmtzaGVldFwiLGUuQWRkV29ya3NoZWV0PVwiQWRkV29ya3NoZWV0XCIsZS5DaGFuZ2U9XCJDaGFuZ2VcIixlLkNsb3NlPVwiQ2xvc2VcIixlLkRlYWN0aXZhdGU9XCJEZWFjdGl2YXRlXCIsZS5EZWxldGVXb3Jrc2hlZXQ9XCJEZWxldGVXb3Jrc2hlZXRcIn0odHx8KHQ9e30pKTtjb25zdCBvPVwiMS41LjBcIjtsZXQgbj0hMTtjb25zdCBzPVwiW0BvcGVuZmluL2V4Y2VsXVwiLGk9KCk9PntuPSExfSxsPSgpPT57bj0hMCxkKGB2JHtvfWApfSxjPShlLHQpPT57biYmKGUuaW5uZXJFcnJvcj9jb25zb2xlLmVycm9yKHQ/YCR7c30gJHt0fWA6cyxlLFwiXFxuXFxuKGlubmVyKVwiLGUuaW5uZXJFcnJvcik6Y29uc29sZS5lcnJvcih0P2Ake3N9ICR7dH1gOnMsZSkpfSxkPSguLi5lKT0+e24mJmNvbnNvbGUubG9nKHMsLi4uZSl9LGg9KC4uLmUpPT57biYmY29uc29sZS53YXJuKHMsLi4uZSl9O1widW5kZWZpbmVkXCI9PXR5cGVvZiBmaW4mJk9iamVjdC5hc3NpZ24od2luZG93LHtmaW46e319KSxPYmplY3QuYXNzaWduKGZpbix7SW50ZWdyYXRpb25zOntFeGNlbDp7ZW5hYmxlTG9nZ2luZzpsLGRpc2FibGVMb2dnaW5nOml9fX0pO2NvbnN0IHc9bmV3IE1hcCxwPWFzeW5jKHIsYSxvLG4scyk9PntpZighYXx8IWEuZXZlbnRUYXJnZXR8fCFhLm9iamVjdElkKXtjb25zdCBlPW5ldyBFdmVudEVycm9yKFwiRXZlbnQgcmVnaXN0cmF0aW9uIG1pc3NpbmcgcmVxdWlyZWQgdmFsdWVzXCIpO3Rocm93IGMoZSksZX1jb25zdCBpPU9iamVjdC5rZXlzKHQpLmZpbmQoKGU9PmUudG9Mb3dlckNhc2UoKT09PW8udG9Mb3dlckNhc2UoKSkpO2lmKCFpKXtjb25zdCBlPW5ldyBFdmVudEVycm9yKGBVbnN1cHBvcnRlZCBldmVudCBuYW1lOiAke299YCk7dGhyb3cgYyhlKSxlfWNvbnN0IGw9T2JqZWN0LmFzc2lnbih7ZXZlbnROYW1lOnRbaV19LGEpO2QoXCJSZWdpc3RlcmluZyBldmVudFwiLGwpO3RyeXtjb25zdCB0PWF3YWl0IHIuZGlzcGF0Y2goZS5SZWdpc3RlckV2ZW50LGwpLGE9e2hhbmRsZXI6cyxsaXN0ZW5lcjpufTt3LnNldCh0LGEpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3Iodm9pZCAwLGUpfX0saz0oZSx0KT0+e2NvbnN0e2V2ZW50UmVnaXN0cmF0aW9uSWQ6cn09ZSxhPXcuZ2V0KHIpO2lmKCFhKXRocm93IG5ldyBFdmVudEVycm9yKGBObyByZWdpc3RlcmVkIGV2ZW50IGxpc3RlbmVyIGZvdW5kIGZvciBpZDogJHtyfWApO2QoXCJFdmVudCBwYXlsb2FkIHJlY2VpdmVkXCIsZSksYS5oYW5kbGVyKGUpfSx1PXQ9PmFzeW5jIHI9PntsZXQgYTtmb3IoY29uc3RbZSx0XW9mIHcpaWYodC5saXN0ZW5lcj09PXIpe2E9ZTticmVha31pZighYSl0aHJvdyBuZXcgRXZlbnRFcnJvcjtkKFwiRGVyZWdpc3RlcmluZyBldmVudDpcIixhKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkRlcmVnaXN0ZXJFdmVudCxhKSx3LmRlbGV0ZShhKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX07dmFyIGc7IWZ1bmN0aW9uKGUpe2UuV29ya2Jvb2s9XCJXb3JrYm9va1wiLGUuV29ya3NoZWV0PVwiV29ya3NoZWV0XCIsZS5DZWxsUmFuZ2U9XCJDZWxsUmFuZ2VcIn0oZ3x8KGc9e30pKTtjb25zdCBtPSgpPT52b2lkIDAhPT1jcnlwdG8ucmFuZG9tVVVJRD9jcnlwdG8ucmFuZG9tVVVJRCgpOlwiMTAwMDAwMDAtMTAwMC00MDAwLTgwMDAtMTAwMDAwMDAwMDAwXCIucmVwbGFjZSgvWzAxOF0vZywoZT0+e2NvbnN0IHQ9d2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdJjE1Pj5OdW1iZXIoZSkvNDtyZXR1cm4oTnVtYmVyKGUpXnQpLnRvU3RyaW5nKDE2KX0pKSxDPW5ldyBNYXAseT0oZSx0KT0+YXN5bmMocixhKT0+cChlLHQscixhLFcoYSkpLHY9KHQscixhKT0+YXN5bmMoKT0+e2QoYENlbGwgcmFuZ2U6IENsZWFyOyBhZGRyZXNzOiR7YX0gKCR7cn0pYCk7Y29uc3Qgbz17YWRkcmVzczphLG9iamVjdElkOnJ9O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2xlYXJDZWxscyxvKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sYj0odCxyLGEpPT5hc3luYygpPT57ZChgQ2VsbCByYW5nZTogQ2xlYXIgZm9ybWF0dGluZzsgYWRkcmVzczoke2F9ICgke3J9KWApO2NvbnN0IG89e2FkZHJlc3M6YSxvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQ2VsbEZvcm1hdHRpbmcsbyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEE9KHQscixhKT0+YXN5bmMoKT0+e2QoYENlbGwgcmFuZ2U6IENsZWFyIHZhbHVlczsgYWRkcmVzczoke2F9ICgke3J9KWApO2NvbnN0IG89e2FkZHJlc3M6YSxvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQ2VsbFZhbHVlcyxvKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sRT0oZSx0LHIpPT4oYSxvPTFlMyk9PntpZihvPD0wKXRocm93IG5ldyBBcGlFcnJvcihcIlVwZGF0ZSBpbnRlcnZhbCBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO2NvbnN0IG49bSgpO2QoYENlbGwgcmFuZ2U6IENyZWF0ZSBkYXRhIHN0cmVhbTsgc3RyZWFtSWQ6JHtufTsgYWRkcmVzczoke3J9OyB1cGRhdGVJbnRlcnZhbDoke299ICgke3R9KWApO2NvbnN0IHM9e2FkZHJlc3M6cixjbG9zZTooKT0+e2QoYENsb3NlZCBzdHJlYW0gKCR7bn0pYCksKGU9Pnt2YXIgdDt0cnl7Y29uc3Qgcj1DLmdldChlKTtpZighcil0aHJvdyBuZXcgQXBpRXJyb3IoYFVuYWJsZSB0byBmaW5kIHJlZ2lzdGVyZWQgZGF0YSBzdHJlYW0gd2l0aCBpZCAke2V9YCk7dm9pZCAwIT09KG51bGwhPT0odD1yLnRpbWVyKSYmdm9pZCAwIT09dD90OnZvaWQgMCkmJkYoZSksQy5kZWxldGUoZSl9Y2F0Y2goZSl7dGhyb3cgYyhlKSxlfX0pKG4pfSxpZDpuLHN0YXJ0OigpPT57ZChgU3RhcnRlZCBzdHJlYW1pbmcgKCR7bn0pYCksVShuLGEsZSx0KX0sc3RvcDooKT0+e2QoYFN0b3BwZWQgc3RyZWFtaW5nICgke259KWApLEYobil9LHVwZGF0ZUludGVydmFsOm8sd29ya3NoZWV0SWQ6dH07cmV0dXJuIEMuc2V0KG4se2RhdGFTdHJlYW06c30pLHN9LFc9ZT0+cj0+e3ZhciBhO3RyeXtpZigobnVsbD09PShhPXIuZXZlbnROYW1lKXx8dm9pZCAwPT09YT92b2lkIDA6YS50b1VwcGVyQ2FzZSgpKT09PXQuQ2hhbmdlLnRvVXBwZXJDYXNlKCkpcmV0dXJuIGUoci5jaGFuZ2VkQ2VsbHMpO3Rocm93IG5ldyBFdmVudEVycm9yKGBVbmV4cGVjdGVkIGNlbGwgcmFuZ2UgZXZlbnQ6ICR7ci5ldmVudE5hbWV9YCl9Y2F0Y2goZSl7YyhlKX19LGY9KGUsdCxyKT0+YXN5bmMoKT0+e2QoYENlbGwgcmFuZ2U6IEdldCBjZWxsczsgYWRkcmVzczoke3J9ICgke3R9KWApO2NvbnN0IGE9YXdhaXQgJChlLHQscik7cmV0dXJuIGQoYCR7cn06YCxhKSxhfSwkPWFzeW5jKHQscixhKT0+e2NvbnN0IG89e2FkZHJlc3M6YSxvYmplY3RJZDpyfTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRDZWxscyxvKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sRz0odCxyLGEpPT5hc3luYygpPT57ZChgQ2VsbCByYW5nZTogR2V0IG5hbWU7IGFkZHJlc3M6JHthfSAoJHtyfSlgKTtjb25zdCBvPXthZGRyZXNzOmEsb2JqZWN0SWQ6cn07dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuR2V0Q2VsbE5hbWVzLG8pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxJPSh0LHIsYSk9PmFzeW5jKG8sbixzLGksbD0hMCk9PntkKGBDZWxsIHJhbmdlOiBTZXQgZmlsdGVyOyBhZGRyZXNzOiR7YX0gKCR7cn0pYCx7Y29sdW1uSW5kZXg6byxmaWx0ZXJPcGVyYXRvcjpuLGNyaXRlcmlhMTpzLGNyaXRlcmlhMjppLHZpc2libGVEcm9wRG93bjpsfSk7Y29uc3QgYz17YWRkcmVzczphLGNyaXRlcmlhMTpzLGNyaXRlcmlhMjppLGNvbHVtbkluZGV4Om8sZmlsdGVyT3BlcmF0b3I6bixvYmplY3RJZDpyLHZpc2libGVEcm9wRG93bjpsfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkZpbHRlckNlbGxzLGMpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxOPSh0LHIsYSk9PmFzeW5jIG89PntkKGBDZWxsIHJhbmdlOiBTZXQgZm9ybWF0dGluZzsgYWRkcmVzczoke2F9ICgke3J9KWAsbyk7Y29uc3Qgbj17YWRkcmVzczphLGZvcm1hdHRpbmc6byxvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlNldENlbGxGb3JtYXR0aW5nLG4pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxTPSh0LHIsYSk9PmFzeW5jIG89Pntjb25zdCBuPW8udHJpbSgpO2xldCBzO2lmKCFuKXRocm93IHM9bmV3IFBhcmFtZXRlckVycm9yKFwiTmFtZSBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nXCIpLGMocykscztpZihuLmxlbmd0aD4yNTUpdGhyb3cgcz1uZXcgUGFyYW1ldGVyRXJyb3IoXCJOYW1lIG11c3QgYmUgMjU1IGNoYXJhY3RlcnMgb3IgbGVzc1wiKSxjKHMpLHM7aWYoL1teYS16QS1aMC05Xy4/XFxcXFwiJ10vLnRlc3QobikpdGhyb3cgcz1uZXcgUGFyYW1ldGVyRXJyb3IoXCJOYW1lIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc1wiKSxjKHMpLHM7aWYoL15cXGQvLnRlc3QobikpdGhyb3cgcz1uZXcgUGFyYW1ldGVyRXJyb3IoXCJOYW1lIGNhbm5vdCBzdGFydCB3aXRoIGEgbnVtYmVyXCIpLGMocykscztkKGBDZWxsIHJhbmdlOiBTZXQgbmFtZTsgYWRkcmVzczoke2F9OyBuZXdOYW1lOiR7bn0gKCR7cn0pYCk7Y29uc3QgaT17YWRkcmVzczphLG5hbWU6bixvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlNldENlbGxOYW1lLGkpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxEPSh0LHIsYSk9PmFzeW5jIG89PntkKGBDZWxsIHJhbmdlOiBTZXQgdmFsdWVzOyBhZGRyZXNzOiR7YX0gKCR7cn0pYCxvKTtjb25zdCBuPXthZGRyZXNzOmEsb2JqZWN0SWQ6cix2YWx1ZXNNYXA6b307dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5TZXRDZWxsVmFsdWVzLG4pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxVPShlLHQscixhKT0+e3ZhciBvO3RyeXtjb25zdCBuPUMuZ2V0KGUpO2lmKCFuKXRocm93IG5ldyBBcGlFcnJvcihgVW5hYmxlIHRvIGZpbmQgcmVnaXN0ZXJlZCBkYXRhIHN0cmVhbSB3aXRoIGlkICR7ZX1gKTt2b2lkIDAhPT0obnVsbCE9PShvPW4udGltZXIpJiZ2b2lkIDAhPT1vP286dm9pZCAwKSYmRihlKTtjb25zdHthZGRyZXNzOnMsdXBkYXRlSW50ZXJ2YWw6aX09bi5kYXRhU3RyZWFtLGw9YXN5bmMoKT0+e2NvbnN0IG89YXdhaXQgdCgpO3RyeXthd2FpdCBEKHIsYSxzKShbW29dXSl9Y2F0Y2godCl7aChgVW5hYmxlIHRvIHVwZGF0ZSBjZWxsIHJhbmdlIGZvciBzdHJlYW0gd2l0aCBpZCAke2V9OiAke251bGw9PXQ/dm9pZCAwOnQubWVzc2FnZX1gKX19LGM9d2luZG93LnNldEludGVydmFsKGwsaSk7bi50aW1lcj1jfWNhdGNoKGUpe3Rocm93IGMoZSksZX19LEY9ZT0+e3ZhciB0O3RyeXtjb25zdCByPUMuZ2V0KGUpO2lmKCFyKXRocm93IG5ldyBBcGlFcnJvcihgVW5hYmxlIHRvIGZpbmQgcmVnaXN0ZXJlZCBkYXRhIHN0cmVhbSB3aXRoIGlkICR7ZX1gKTtpZih2b2lkIDA9PT0obnVsbCE9PSh0PXIudGltZXIpJiZ2b2lkIDAhPT10P3Q6dm9pZCAwKSlyZXR1cm47d2luZG93LmNsZWFySW50ZXJ2YWwoci50aW1lciksci50aW1lcj12b2lkIDB9Y2F0Y2goZSl7dGhyb3cgYyhlKSxlfX0sUD0odCxyKT0+YXN5bmMoKT0+e2QoYFdvcmtzaGVldDogQWN0aXZhdGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5BY3RpdmF0ZVdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0seD0oZSx0KT0+YXN5bmMocixhKT0+cChlLHQscixhLFYoYSkpLEw9KHQscik9PmFzeW5jKCk9PntkKGBXb3Jrc2hlZXQ6IENhbGN1bGF0ZSAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNhbGN1bGF0ZVdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sQj0odCxyKT0+YXN5bmMoKT0+e2QoYFdvcmtzaGVldDogQ2xlYXIgYWxsIGNlbGwgZm9ybWF0dGluZyAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQWxsQ2VsbEZvcm1hdHRpbmcscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LGo9KHQscik9PmFzeW5jKCk9PntkKGBXb3Jrc2hlZXQ6IENsZWFyIGFsbCBjZWxscyAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQWxsQ2VsbHMscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFI9KHQscik9PmFzeW5jKCk9PntkKGBXb3Jrc2hlZXQ6IENsZWFyIGFsbCBjZWxsIHZhbHVlcyAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQWxsQ2VsbFZhbHVlcyxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sTz0oZSx0KT0+e2NvbnN0IHI9e2V2ZW50VGFyZ2V0OmcuV29ya3NoZWV0LG9iamVjdElkOnR9O3JldHVybntvYmplY3RJZDp0LGFjdGl2YXRlOlAoZSx0KSxhZGRFdmVudExpc3RlbmVyOngoZSxyKSxjYWxjdWxhdGU6TChlLHQpLGNsZWFyQWxsQ2VsbEZvcm1hdHRpbmc6QihlLHQpLGNsZWFyQWxsQ2VsbHM6aihlLHQpLGNsZWFyQWxsQ2VsbFZhbHVlczpSKGUsdCksY2xlYXJDZWxsRm9ybWF0dGluZzpyPT5iKGUsdCxyKSgpLGNsZWFyQ2VsbHM6cj0+dihlLHQscikoKSxjbGVhckNlbGxWYWx1ZXM6cj0+QShlLHQscikoKSxjcmVhdGVEYXRhU3RyZWFtOihyLGEsbyk9PkUoZSx0LHIpKGEsbyksZGVsZXRlOnooZSx0KSxmaWx0ZXJDZWxsczoocixhLG8sbixzLGkpPT5JKGUsdCxyKShhLG8sbixzLGkpLGdldENlbGxSYW5nZTpNKGUsciksZ2V0Q2VsbHM6cj0+ZihlLHQscikoKSxnZXROYW1lOlQoZSx0KSxwcm90ZWN0OkgoZSx0KSxyZW1vdmVFdmVudExpc3RlbmVyOnUoZSksc2V0Q2VsbEZvcm1hdHRpbmc6KHIsYSk9Pk4oZSx0LHIpKGEpLHNldENlbGxOYW1lOihyLGEpPT5TKGUsdCxyKShhKSxzZXRDZWxsVmFsdWVzOihyLGEpPT5EKGUsdCxyKShhKSxzZXROYW1lOlEoZSx0KX19LFY9ZT0+cj0+e3ZhciBhO3RyeXtzd2l0Y2gobnVsbD09PShhPXIuZXZlbnROYW1lKXx8dm9pZCAwPT09YT92b2lkIDA6YS50b1VwcGVyQ2FzZSgpKXtjYXNlIHQuQWN0aXZhdGUudG9VcHBlckNhc2UoKTpjYXNlIHQuRGVhY3RpdmF0ZS50b1VwcGVyQ2FzZSgpOnJldHVybiBlKCk7Y2FzZSB0LkNoYW5nZS50b1VwcGVyQ2FzZSgpOnJldHVybiBlKHIuY2hhbmdlZENlbGxzKTtkZWZhdWx0OnRocm93IG5ldyBFdmVudEVycm9yKGBVbmV4cGVjdGVkIHdvcmtzaGVldCBldmVudDogJHtyLmV2ZW50TmFtZX1gKX19Y2F0Y2goZSl7YyhlKX19LHo9KHQscik9PmFzeW5jKCk9PntkKGBXb3Jrc2hlZXQ6IERlbGV0ZSAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkRlbGV0ZVdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sTT0odCxyKT0+YXN5bmMgYT0+e2NvbnN0e29iamVjdElkOm99PXI7ZChgV29ya3NoZWV0OiBHZXQgY2VsbCByYW5nZTsgYWRkcmVzczoke2F9ICgke299KWApO3RyeXtjb25zdCBuPXthZGRyZXNzOmEsb2JqZWN0SWQ6b30scz1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0UmFuZ2VBZGRyZXNzLG4pO3JldHVybigoZSx0LHIpPT57Y29uc3R7b2JqZWN0SWQ6YX09dCxvPXtjZWxsUmFuZ2VBZGRyZXNzOnIsZXZlbnRUYXJnZXQ6Zy5DZWxsUmFuZ2Usb2JqZWN0SWQ6YX07cmV0dXJue2FkZEV2ZW50TGlzdGVuZXI6eShlLG8pLGFkZHJlc3M6cixjbGVhcjp2KGUsYSxyKSxjbGVhckZvcm1hdHRpbmc6YihlLGEsciksY2xlYXJWYWx1ZXM6QShlLGEsciksY3JlYXRlRGF0YVN0cmVhbTpFKGUsYSxyKSxnZXRDZWxsczpmKGUsYSxyKSxnZXROYW1lczpHKGUsYSxyKSxyZW1vdmVFdmVudExpc3RlbmVyOnUoZSksc2V0RmlsdGVyOkkoZSxhLHIpLHNldEZvcm1hdHRpbmc6TihlLGEsciksc2V0TmFtZTpTKGUsYSxyKSxzZXRWYWx1ZXM6RChlLGEscil9fSkodCxyLHMpfWNhdGNoKGUpe2lmKGUubWVzc2FnZS5pbmRleE9mKFwiVW5hYmxlIHRvIGdldCBjZWxsIHJhbmdlXCIpPj0wKXtjb25zdCBlPW5ldyBJbnZhbGlkQ2VsbFJhbmdlQWRkcmVzc0Vycm9yO3Rocm93IGMoZSksZX10aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sVD0odCxyKT0+YXN5bmMoKT0+e2QoYFdvcmtzaGVldDogR2V0IG5hbWUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0TmFtZSxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sSD0odCxyKT0+YXN5bmMoKT0+e2QoYFdvcmtzaGVldDogUHJvdGVjdCAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlByb3RlY3RXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFE9KHQscik9PmFzeW5jIGE9Pntjb25zdCBvPWEuc2xpY2UoMCwzMSkucmVwbGFjZSgvWzpcXFxcLz8qW1xcXV0vZyxcIlwiKS50cmltKCk7bGV0IG47aWYoIW8pdGhyb3cgbj1uZXcgUGFyYW1ldGVyRXJyb3IoXCJJbnZhbGlkIHdvcmtzaGVldCBuYW1lXCIpLGMobiksbjtkKGBXb3Jrc2hlZXQ6IFNldCBuYW1lOyBuZXdXb3Jrc2hlZXROYW1lOiR7b30gKCR7cn0pYCk7Y29uc3Qgcz17bmV3V29ya3NoZWV0TmFtZTpvLG9iamVjdElkOnJ9O3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlNldFdvcmtzaGVldE5hbWUscyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LF89KHQscik9PmFzeW5jKCk9PntkKGBXb3JrYm9vazogQWN0aXZhdGUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuQWN0aXZhdGVXb3JrYm9vayxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0scT0oZSx0KT0+YXN5bmMocixhKT0+cChlLHQscixhLFkoZSxhKSksSj0odCxyKT0+YXN5bmMoKT0+e2xldCBhO2QoYFdvcmtib29rOiBBZGQgd29ya3NoZWV0ICgke3J9KWApO3RyeXthPWF3YWl0IHQuZGlzcGF0Y2goZS5BZGRXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gTyh0LGEpfSxLPSh0LHIpPT5hc3luYygpPT57ZChgV29ya2Jvb2s6IENhbGN1bGF0ZSAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNhbGN1bGF0ZVdvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxYPSh0LHIpPT5hc3luYygpPT57ZChgV29ya2Jvb2s6IENsb3NlICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkNsb3NlV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFo9KGUsdCk9Pntjb25zdCByPXtldmVudFRhcmdldDpnLldvcmtib29rLG9iamVjdElkOnR9O3JldHVybntvYmplY3RJZDp0LGFjdGl2YXRlOl8oZSx0KSxhZGRXb3Jrc2hlZXQ6SihlLHQpLGFkZEV2ZW50TGlzdGVuZXI6cShlLHIpLGNhbGN1bGF0ZTpLKGUsdCksY2xvc2U6WChlLHQpLGdldEFjdGl2ZVdvcmtzaGVldDplZShlLHQpLGdldENhbGN1bGF0aW9uTW9kZTp0ZShlLHQpLGdldEZpbGVQYXRoOnJlKGUsdCksZ2V0TmFtZTphZShlLHQpLGdldFdpbmRvd0JvdW5kczpvZShlLHQpLGdldFdvcmtzaGVldEJ5TmFtZTpuZShlLHQpLGdldFdvcmtzaGVldHM6c2UoZSx0KSxyZW1vdmVFdmVudExpc3RlbmVyOnUoZSksc2F2ZTppZShlLHQpLHNhdmVBczpsZShlLHQpLHNldFdpbmRvd0JvdW5kczpjZShlLHQpfX0sWT0oZSxyKT0+YT0+e3ZhciBvO3RyeXtzd2l0Y2gobnVsbD09PShvPWEuZXZlbnROYW1lKXx8dm9pZCAwPT09bz92b2lkIDA6by50b1VwcGVyQ2FzZSgpKXtjYXNlIHQuQWN0aXZhdGUudG9VcHBlckNhc2UoKTpjYXNlIHQuQ2xvc2UudG9VcHBlckNhc2UoKTpjYXNlIHQuRGVhY3RpdmF0ZS50b1VwcGVyQ2FzZSgpOnJldHVybiByKCk7Y2FzZSB0LkFjdGl2YXRlV29ya3NoZWV0LnRvVXBwZXJDYXNlKCk6Y2FzZSB0LkFkZFdvcmtzaGVldC50b1VwcGVyQ2FzZSgpOnJldHVybiByKE8oZSxhLndvcmtzaGVldE9iamVjdElkKSk7Y2FzZSB0LkRlbGV0ZVdvcmtzaGVldC50b1VwcGVyQ2FzZSgpOnJldHVybiByKGEud29ya3NoZWV0TmFtZSk7ZGVmYXVsdDp0aHJvdyBuZXcgRXZlbnRFcnJvcihgVW5leHBlY3RlZCB3b3JrYm9vayBldmVudDogJHthLmV2ZW50TmFtZX1gKX19Y2F0Y2goZSl7YyhlKX19LGVlPSh0LHIpPT5hc3luYygpPT57bGV0IGE7ZChgV29ya2Jvb2s6IEdldCBhY3RpdmUgd29ya3NoZWV0OiAoJHtyfSlgKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0QWN0aXZlV29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIE8odCxhKX0sdGU9KHQscik9PmFzeW5jKCk9PntkKFwiV29ya2Jvb2s6IEdldCBjYWxjdWxhdGlvbiBtb2RlXCIpO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkdldENhbGN1bGF0aW9uTW9kZSxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0scmU9KHQscik9PmFzeW5jKCk9PntkKGBXb3JrYm9vazogR2V0IGZpbGUgcGF0aCAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3JrYm9va0ZpbGVQYXRoLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxhZT0odCxyKT0+YXN5bmMoKT0+e2QoYFdvcmtib29rOiBHZXQgbmFtZSAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3JrYm9va05hbWUscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LG9lPSh0LHIpPT5hc3luYygpPT57ZChgV29ya2Jvb2s6IEdldCB3aW5kb3cgYm91bmRzICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtib29rV2luZG93Qm91bmRzLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxuZT0odCxyKT0+YXN5bmMgYT0+e2xldCBvO2QoYFdvcmtib29rOiBHZXQgd29ya3NoZWV0IGJ5IG5hbWU6ICR7YX0gKCR7cn0pYCk7dHJ5e2lmKG89YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtzaGVldEJ5TmFtZSx7b2JqZWN0SWQ6cix3b3Jrc2hlZXROYW1lOmF9KSxudWxsPT09bylyZXR1cm4gbnVsbH1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBPKHQsbyl9LHNlPSh0LHIpPT5hc3luYygpPT57bGV0IGE7ZChgV29ya2Jvb2s6IEdldCB3b3Jrc2hlZXRzICgke3J9KWApO3RyeXthPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3Jrc2hlZXRzLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIGEubWFwKChlPT5PKHQsZSkpKX0saWU9KHQscik9PmFzeW5jKCk9PntkKGBXb3JrYm9vazogU2F2ZSAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5TYXZlV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LGxlPSh0LHIpPT5hc3luYyBhPT57ZChgV29ya2Jvb2s6IFNhdmUgYXM7IGZpbGVQYXRoOiR7YX0gKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuU2F2ZVdvcmtib29rQXMse2ZpbGVQYXRoOmEsb2JqZWN0SWQ6cn0pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxjZT0odCxyKT0+YXN5bmMgYT0+e2QoYFdvcmtib29rOiBTZXQgd2luZG93IGJvdW5kcyAoJHtyfSlgLGEpO2NvbnN0e2hlaWdodDpvLGxlZnQ6bix0b3A6cyx3aWR0aDppfT1hO2lmKG51bGwhPW8mJihOdW1iZXIuaXNOYU4obyl8fG88PTApKXtjb25zdCBlPW5ldyBQYXJhbWV0ZXJFcnJvcihcIldvcmtib29rIHdpbmRvdyBoZWlnaHQgbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gemVyby5cIik7dGhyb3cgYyhlKSxlfWlmKG51bGwhPW4mJk51bWJlci5pc05hTihuKSl7Y29uc3QgZT1uZXcgUGFyYW1ldGVyRXJyb3IoXCJXb3JrYm9vayB3aW5kb3cgbGVmdCBwb3NpdGlvbiBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyLlwiKTt0aHJvdyBjKGUpLGV9aWYobnVsbCE9cyYmTnVtYmVyLmlzTmFOKHMpKXtjb25zdCBlPW5ldyBQYXJhbWV0ZXJFcnJvcihcIldvcmtib29rIHdpbmRvdyB0b3AgcG9zaXRpb24gbXVzdCBiZSBhIHZhbGlkIG51bWJlci5cIik7dGhyb3cgYyhlKSxlfWlmKG51bGwhPWkmJihOdW1iZXIuaXNOYU4oaSl8fGk8PTApKXtjb25zdCBlPW5ldyBQYXJhbWV0ZXJFcnJvcihcIldvcmtib29rIHdpbmRvdyB3aWR0aCBtdXN0IGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiB6ZXJvLlwiKTt0aHJvdyBjKGUpLGV9Y29uc3QgbD17bmV3V2luZG93Qm91bmRzOmEsb2JqZWN0SWQ6cn07dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuU2V0V29ya2Jvb2tXaW5kb3dCb3VuZHMsbCl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LGRlPXQ9PmFzeW5jIHI9PntsZXQgYTtkKGBBcHBsaWNhdGlvbjogR2V0IHdvcmtib29rOyBpZDoke3J9YCk7dHJ5e2E9YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtib29rQnlJZCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBaKHQsYSl9LGhlPXQ9PmFzeW5jKCk9PntsZXQgcjtkKFwiQXBwbGljYXRpb246IEdldCB3b3JrYm9va3NcIik7dHJ5e3I9YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtib29rcyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gci5tYXAoKGU9PloodCxlKSkpfSx3ZT10PT5hc3luYyByPT57ZChgQXBwbGljYXRpb246IEdldCB3b3Jrc2hlZXQ7IGlkOiR7cn1gKTt0cnl7cj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0QnlJZCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBPKHQscil9LHBlPXQ9PmFzeW5jIHI9PntsZXQgYTtkKGBBcHBsaWNhdGlvbjogT3BlbiB3b3JrYm9vazsgZmlsZVBhdGg6JHtyfWApO3RyeXthPWF3YWl0IHQuZGlzcGF0Y2goZS5PcGVuV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gWih0LGEpfSxrZT10PT5hc3luYyhyPSEwKT0+e2QoYEFwcGxpY2F0aW9uOiBRdWl0OyBkaXNwbGF5QWxlcnRzOiR7cn1gKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5RdWl0QXBwbGljYXRpb24scil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19O3ZhciB1ZSxnZTshZnVuY3Rpb24oZSl7ZS5FeGNlbEFwcGxpY2F0aW9uPVwiRVhDRUwtQVBQXCJ9KHVlfHwodWU9e30pKSxmdW5jdGlvbihlKXtlW2UuSW5mbz0xXT1cIkluZm9cIixlW2UuV2Fybj0yXT1cIldhcm5cIixlW2UuRXJyb3I9M109XCJFcnJvclwifShnZXx8KGdlPXt9KSk7Y29uc3QgbWU9XCJleGNlbC1hZGFwdGVyXCIsQ2U9bSgpO2xldCB5ZTtjb25zdCB2ZT0oKT0+byxiZT1hc3luYyh0PSExKT0+e3RyeXtpZihhd2FpdChhc3luYyBlPT57dHJ5e2QoXCJSZWdpc3RlcmluZyB1c2FnZVwiKSxhd2FpdCBmaW4uU3lzdGVtLnJlZ2lzdGVyVXNhZ2Uoe3R5cGU6XCJpbnRlZ3JhdGlvbi1mZWF0dXJlXCIsZGF0YTp7YXBpVmVyc2lvbjpvLGNvbXBvbmVudE5hbWU6ZX19KX1jYXRjaCh0KXtoKGBVbmFibGUgdG8gcmVnaXN0ZXIgdXNhZ2UgZm9yIGZlYXR1cmUgJHtlfTogJHtudWxsPT10P3ZvaWQgMDp0Lm1lc3NhZ2V9YCl9fSkodWUuRXhjZWxBcHBsaWNhdGlvbiksIWF3YWl0KGFzeW5jIGU9Pihhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmdldEFsbENoYW5uZWxzKCkpLnNvbWUoKHQ9PnQuY2hhbm5lbE5hbWU9PT1lKSkpKENlKSl7YXdhaXQoYXN5bmMoKT0+e3ZhciBlO2NvbnN0IHQ9bnVsbD09PShlPShhd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKS5nZXRNYW5pZmVzdCgpKS5hcHBBc3NldHMpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmZpbmQoKGU9PmUuYWxpYXM9PT1tZSkpO2lmKHQpcmV0dXJuIHZvaWQgaChcIkRldGVjdGVkIGFkYXB0ZXIgcGFja2FnZSBpbiBhcHAgbWFuaWZlc3QgYXBwQXNzZXRzXCIsdCk7aWYoYXdhaXQgRWUoKSlyZXR1cm4gdm9pZCBkKFwiVXNpbmcgZXhpc3RpbmcgYWRhcHRlciBwYWNrYWdlXCIpO2NvbnN0IHI9e2FsaWFzOm1lLHNyYzpgaHR0cHM6Ly9jZG4ub3BlbmZpbi5jby9yZWxlYXNlL2ludGVncmF0aW9ucy9leGNlbC8ke3ZlKCl9L09wZW5GaW4uRXhjZWwuemlwYCx0YXJnZXQ6XCJPcGVuRmluLkV4Y2VsLmV4ZVwiLHZlcnNpb246dmUoKX07ZChcIkRvd25sb2FkaW5nIGFkYXB0ZXIgcGFja2FnZVwiLHIpO3RyeXthd2FpdCBmaW4uU3lzdGVtLmRvd25sb2FkQXNzZXQociwoKCk9Pnt9KSl9Y2F0Y2goZSl7dGhyb3cgYyhcIlVuYWJsZSB0byBkb3dubG9hZCBhZGFwdGVyIHBhY2thZ2VcIiksZX19KSgpO2NvbnN0e3NlY3VyaXR5UmVhbG06ZSxwb3J0OnJ9PWF3YWl0IGZpbi5TeXN0ZW0uZ2V0UnVudGltZUluZm8oKTtsZXR7bGljZW5zZUtleTphfT1hd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKS5nZXRNYW5pZmVzdCgpO2E9bnVsbCE9YT9hOlwiTk9fTElDRU5TRV9LRVlcIjtjb25zdCBvPWZpbi5tZS51dWlkO2QoXCJJbml0aWFsaXppbmcgYWRhcHRlclwiLHthZGFwdGVyTG9nZ2luZ0VuYWJsZWQ6dCxjaGFubmVsTmFtZTpDZSxsaWNlbnNlS2V5OmEscG9ydDpyLHNlY3VyaXR5UmVhbG06ZSx1dWlkOm99KSxmaW4uU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2Vzcyh7YWxpYXM6bWUsYXJndW1lbnRzOmAke299ICR7YX0gJHtyfSAke2V9ICR7Q2V9ICR7dH1gfSl9Y29uc3Qgcj1maW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QoQ2Use3BheWxvYWQ6e3ZlcnNpb246dmUoKX19KSxhPW5ldyBQcm9taXNlKChlPT57c2V0VGltZW91dChlLDJlNCl9KSkudGhlbigoKCk9Pnt0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0aW9uIHRvIGFkYXB0ZXIgdGltZWQgb3V0XCIpfSkpO3llPWF3YWl0IFByb21pc2UucmFjZShbcixhXSksZChgQ29ubmVjdGVkIHRvIGFkYXB0ZXIgJHt5ZS5wcm92aWRlcklkZW50aXR5LnV1aWR9IG9uIGNoYW5uZWwgJHtDZX1gKSx5ZS5yZWdpc3RlcihlLkxvZ01lc3NhZ2UsQWUpLHllLnJlZ2lzdGVyKGUuRXZlbnRGaXJlZCxrKX1jYXRjaChlKXtjb25zdCB0PW5ldyBJbml0aWFsaXphdGlvbkVycm9yKHZvaWQgMCxlKTt0aHJvdyBjKHQpLHR9cmV0dXJue2FkYXB0ZXI6e2NoYW5uZWxOYW1lOkNlLHZlcnNpb246dmUoKX0sY3JlYXRlV29ya2Jvb2s6KHI9eWUsYXN5bmMoKT0+e2xldCB0O2QoXCJBcHBsaWNhdGlvbjogQ3JlYXRlIHdvcmtib29rXCIpO3RyeXt0PWF3YWl0IHIuZGlzcGF0Y2goZS5DcmVhdGVXb3JrYm9vayl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gWihyLHQpfSksZ2V0V29ya2Jvb2tCeUlkOmRlKHllKSxnZXRXb3JrYm9va3M6aGUoeWUpLGdldFdvcmtzaGVldEJ5SWQ6d2UoeWUpLG9wZW5Xb3JrYm9vazpwZSh5ZSkscXVpdDprZSh5ZSl9O3ZhciByfSxBZT0oZSx0KT0+e2NvbnN0e21lc3NhZ2U6cix0eXBlOmF9PWUsbz1cIlthZGFwdGVyXVwiO3N3aXRjaChhKXtjYXNlIGdlLkVycm9yOmMocixvKTticmVhaztjYXNlIGdlLkluZm86ZChvLHIpO2JyZWFrO2Nhc2UgZ2UuV2FybjpoKG8scik7YnJlYWs7ZGVmYXVsdDpjKG5ldyBFcnJvcihgVW5rbm93biBsb2cgdHlwZTogJHthfWApKX19LEVlPWFzeW5jKCk9Pnt0cnl7Y29uc3QgZT1hd2FpdCBmaW4uU3lzdGVtLmdldEFwcEFzc2V0SW5mbyh7YWxpYXM6bWV9KTtyZXR1cm4gZSYmZS52ZXJzaW9uPT09dmUoKX1jYXRjaChlKXtyZXR1cm4hMX19O3ZhciBXZSxmZSwkZSxHZSxJZTshZnVuY3Rpb24oZSl7ZS5Db250aW51b3VzPVwiQ29udGludW91c1wiLGUuRGFzaD1cIkRhc2hcIixlLkRhc2hEb3Q9XCJEYXNoRG90XCIsZS5EYXNoRG90RG90PVwiRGFzaERvdERvdFwiLGUuRG90PVwiRG90XCIsZS5Eb3VibGU9XCJEb3VibGVcIixlLlNsYW50RGFzaERvdD1cIlNsYW50RGFzaERvdFwiLGUuTm9uZT1cIk5vbmVcIn0oV2V8fChXZT17fSkpLGZ1bmN0aW9uKGUpe2UuQ2VudGVyPVwiQ2VudGVyXCIsZS5DZW50ZXJBY3Jvc3NTZWxlY3Rpb249XCJDZW50ZXJBY3Jvc3NTZWxlY3Rpb25cIixlLkRpc3RyaWJ1dGVkPVwiRGlzdHJpYnV0ZWRcIixlLkZpbGw9XCJGaWxsXCIsZS5HZW5lcmFsPVwiR2VuZXJhbFwiLGUuSnVzdGlmeT1cIkp1c3RpZnlcIixlLkxlZnQ9XCJMZWZ0XCIsZS5SaWdodD1cIlJpZ2h0XCJ9KGZlfHwoZmU9e30pKSxmdW5jdGlvbihlKXtlLkF1dG9tYXRpYz1cIkF1dG9tYXRpY1wiLGUuQ2hlY2tlcj1cIkNoZWNrZXJcIixlLkNyaXNzQ3Jvc3M9XCJDcmlzc0Nyb3NzXCIsZS5Eb3duPVwiRG93blwiLGUuR3JheTE2PVwiR3JheTE2XCIsZS5HcmF5MjU9XCJHcmF5MjVcIixlLkdyYXk1MD1cIkdyYXk1MFwiLGUuR3JheTc1PVwiR3JheTc1XCIsZS5HcmF5OD1cIkdyYXk4XCIsZS5HcmlkPVwiR3JpZFwiLGUuSG9yaXpvbnRhbD1cIkhvcml6b250YWxcIixlLkxpZ2h0RG93bj1cIkxpZ2h0RG93blwiLGUuTGlnaHRIb3Jpem9udGFsPVwiTGlnaHRIb3Jpem9udGFsXCIsZS5MaWdodFVwPVwiTGlnaHRVcFwiLGUuTGlnaHRWZXJ0aWNhbD1cIkxpZ2h0VmVydGljYWxcIixlLkxpbmVhckdyYWRpZW50PVwiTGluZWFyR3JhZGllbnRcIixlLk5vbmU9XCJOb25lXCIsZS5SZWN0YW5ndWxhckdyYWRpZW50PVwiUmVjdGFuZ3VsYXJHcmFkaWVudFwiLGUuU2VtaUdyYXk3NT1cIlNlbWlHcmF5NzVcIixlLlNvbGlkPVwiU29saWRcIixlLlVwPVwiVXBcIixlLlZlcnRpY2FsPVwiVmVydGljYWxcIn0oJGV8fCgkZT17fSkpLGZ1bmN0aW9uKGUpe2UuQm90dG9tPVwiQm90dG9tXCIsZS5DZW50ZXI9XCJDZW50ZXJcIixlLkRpc3RyaWJ1dGVkPVwiRGlzdHJpYnV0ZWRcIixlLkp1c3RpZnk9XCJKdXN0aWZ5XCIsZS5Ub3A9XCJUb3BcIn0oR2V8fChHZT17fSkpLGZ1bmN0aW9uKGUpe2UuQW5kPVwiQW5kXCIsZS5Pcj1cIk9yXCIsZS5Ub3AxMEl0ZW1zPVwiVG9wMTBJdGVtc1wiLGUuQm90dG9tMTBJdGVtcz1cIkJvdHRvbTEwSXRlbXNcIixlLlRvcDEwUGVyY2VudD1cIlRvcDEwUGVyY2VudFwiLGUuQm90dG9tMTBQZXJjZW50PVwiQm90dG9tMTBQZXJjZW50XCIsZS5GaWx0ZXJWYWx1ZXM9XCJGaWx0ZXJWYWx1ZXNcIn0oSWV8fChJZT17fSkpO3ZhciBOZT1hLmRxLFNlPWEuTVMsRGU9YS54USxVZT1hLnNPLEZlPWEuWnUsUGU9YS5JMyx4ZT1hLiRVLExlPWEuaTAsQmU9YS5jWCxqZT1hLmdILFJlPWEuX1csT2U9YS5VJCxWZT1hLlU3LHplPWEucmQ7ZXhwb3J0e05lIGFzIEFkYXB0ZXJFcnJvcixTZSBhcyBBcGlFcnJvcixEZSBhcyBFdmVudEVycm9yLFVlIGFzIEV4Y2VsQ2VsbEJvcmRlckxpbmVTdHlsZSxGZSBhcyBFeGNlbENlbGxIb3Jpem9udGFsQWxpZ25tZW50LFBlIGFzIEV4Y2VsQ2VsbFBhdHRlcm4seGUgYXMgRXhjZWxDZWxsVmVydGljYWxBbGlnbm1lbnQsTGUgYXMgRXhjZWxGaWx0ZXJPcGVyYXRvcixCZSBhcyBJbml0aWFsaXphdGlvbkVycm9yLGplIGFzIEludmFsaWRDZWxsUmFuZ2VBZGRyZXNzRXJyb3IsUmUgYXMgUGFyYW1ldGVyRXJyb3IsT2UgYXMgZGlzYWJsZUxvZ2dpbmcsVmUgYXMgZW5hYmxlTG9nZ2luZyx6ZSBhcyBnZXRFeGNlbEFwcGxpY2F0aW9ufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldEN1cnJlbnRDaGFubmVsIH0gZnJvbSBcIkBmaW5vcy9mZGMzXCI7XG5pbXBvcnQge1xuXHR0eXBlIENlbGwsXG5cdHR5cGUgRXhjZWxBcHBsaWNhdGlvbixcblx0dHlwZSBFeGNlbFdvcmtib29rLFxuXHR0eXBlIEV4Y2VsV29ya3NoZWV0LFxuXHRnZXRFeGNlbEFwcGxpY2F0aW9uXG59IGZyb20gXCJAb3BlbmZpbi9leGNlbFwiO1xuXG5jb25zdCBLTk9XTl9JTlNUUlVNRU5UUyA9IFtcIlRTTEFcIiwgXCJNU0ZUXCIsIFwiQUFQTFwiXTtcblxubGV0IGV4Y2VsOiBFeGNlbEFwcGxpY2F0aW9uIHwgdW5kZWZpbmVkO1xubGV0IG9wZW5Xb3JrYm9va3M6XG5cdHwge1xuXHRcdFx0Ym9vazogRXhjZWxXb3JrYm9vaztcblx0XHRcdG5hbWU6IHN0cmluZztcblx0ICB9W11cblx0fCB1bmRlZmluZWQ7XG5sZXQgc2VsZWN0ZWRXb3JrYm9va0luZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5sZXQgb3BlbldvcmtzaGVldHM6XG5cdHwge1xuXHRcdFx0c2hlZXQ6IEV4Y2VsV29ya3NoZWV0O1xuXHRcdFx0bmFtZTogc3RyaW5nO1xuXHQgIH1bXVxuXHR8IHVuZGVmaW5lZDtcbmxldCBzZWxlY3RlZFdvcmtzaGVldEluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBjb21wb25lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXN1bHRzLWNvbnRhaW5lclwiKTtcblx0XHRpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuXHRcdFx0cmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fVxuXG5cdFx0ZXhjZWwgPSBhd2FpdCBnZXRFeGNlbEFwcGxpY2F0aW9uKCk7XG5cblx0XHRhd2FpdCBwb3B1bGF0ZVdvcmtib29rcygpO1xuXG5cdFx0Y29uc3Qgb3BlbkV4Y2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLWV4Y2VsXCIpO1xuXHRcdGlmIChvcGVuRXhjZWxCdXR0b24pIHtcblx0XHRcdG9wZW5FeGNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCBvcGVuRXhjZWwoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZnJlc2hXb3JrYm9va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya2Jvb2stcmVmcmVzaFwiKTtcblx0XHRpZiAocmVmcmVzaFdvcmtib29rQnV0dG9uKSB7XG5cdFx0XHRyZWZyZXNoV29ya2Jvb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHBvcHVsYXRlV29ya2Jvb2tzKCkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZnJlc2hXb3Jrc2hlZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzaGVldC1yZWZyZXNoXCIpO1xuXHRcdGlmIChyZWZyZXNoV29ya3NoZWV0QnV0dG9uKSB7XG5cdFx0XHRyZWZyZXNoV29ya3NoZWV0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBwb3B1bGF0ZVdvcmtzaGVldHMoKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3Blbldvcmtib29rc1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya2Jvb2tzXCIpO1xuXHRcdGlmIChvcGVuV29ya2Jvb2tzU2VsZWN0KSB7XG5cdFx0XHRvcGVuV29ya2Jvb2tzU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYXN5bmMgKGUpID0+XG5cdFx0XHRcdHNlbGVjdFdvcmtib29rKChlLnRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6IHN0cmluZyB9KS52YWx1ZSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3BlbldvcmtzaGVldHNTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzaGVldHNcIik7XG5cdFx0aWYgKG9wZW5Xb3Jrc2hlZXRzU2VsZWN0KSB7XG5cdFx0XHRvcGVuV29ya3NoZWV0c1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jIChlKSA9PlxuXHRcdFx0XHRzZWxlY3RXb3Jrc2hlZXQoKGUudGFyZ2V0IGFzIHVua25vd24gYXMgeyB2YWx1ZTogc3RyaW5nIH0pLnZhbHVlKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRjb25zdCBzZXRWYWx1ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0LXZhbHVlXCIpO1xuXHRcdGlmIChzZXRWYWx1ZUJ1dHRvbikge1xuXHRcdFx0c2V0VmFsdWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0YXdhaXQgc2V0Q2VsbFZhbHVlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHNob3dFcnJvcihlcnIpO1xuXHR9XG59XG5cbi8qKlxuICogU2hvdyBhbiBlcnJvciBvbiB0aGUgVUkuXG4gKiBAcGFyYW0gZXJyIFRoZSBlcnJvciB0byBkaXNwbGF5LlxuICovXG5mdW5jdGlvbiBzaG93RXJyb3IoZXJyOiB1bmtub3duKTogdm9pZCB7XG5cdGNvbnN0IGVyckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JcIik7XG5cdGlmIChlcnJEb20pIHtcblx0XHRlcnJEb20uaW5uZXJIVE1MID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGVycik7XG5cdH1cbn1cblxuLyoqXG4gKiBPcGVuIHRoZSBleGNlbCBpbnN0YW5jZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb3BlbkV4Y2VsKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGlmIChcblx0XHRcdG9wZW5Xb3JrYm9va3MgJiZcblx0XHRcdHNlbGVjdGVkV29ya2Jvb2tJbmRleCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRvcGVuV29ya3NoZWV0cyAmJlxuXHRcdFx0c2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHQvLyBPcGVuIHRoZSBzZWxlY3Qgd29yayBib29rIGFuZCBzaGVldFxuXHRcdFx0Ly8gaWYgYW55dGhpbmcgdGhyb3dzIGFuIGV4Y2VwdGlvbiBqdXN0IG9wZW4gYSBuZXcgd29ya2Jvb2tcblx0XHRcdGF3YWl0IHNlbGVjdFdvcmtib29rKG9wZW5Xb3JrYm9va3Nbc2VsZWN0ZWRXb3JrYm9va0luZGV4XS5uYW1lKTtcblx0XHRcdGF3YWl0IHNlbGVjdFdvcmtzaGVldChvcGVuV29ya3NoZWV0c1tzZWxlY3RlZFdvcmtzaGVldEluZGV4XS5uYW1lKTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdGlmIChleGNlbCkge1xuXHRcdFx0YXdhaXQgZXhjZWwuY3JlYXRlV29ya2Jvb2soKTtcblx0XHRcdGF3YWl0IHBvcHVsYXRlV29ya2Jvb2tzKCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIGxpc3Qgb2Ygd29ya2Jvb2tzLlxuICovXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVdvcmtib29rcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKGV4Y2VsKSB7XG5cdFx0c2VsZWN0ZWRXb3JrYm9va0luZGV4ID0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiN3b3JrYm9vay1yZWZyZXNoXCIpO1xuXHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3dvcmtib29rc1wiKTtcblxuXHRcdGlmIChyZWZyZXNoQnV0dG9uICYmIHNlbGVjdCkge1xuXHRcdFx0cmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0b3Blbldvcmtib29rcyA9IFtdO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB3b3JrYm9va3MgPSBhd2FpdCBleGNlbC5nZXRXb3JrYm9va3MoKTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IGJvb2sgb2Ygd29ya2Jvb2tzKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IGF3YWl0IGJvb2suZ2V0TmFtZSgpO1xuXHRcdFx0XHRcdG9wZW5Xb3JrYm9va3MucHVzaCh7XG5cdFx0XHRcdFx0XHRib29rLFxuXHRcdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgb3B0aW9uRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRvcHRpb25FbXB0eS5pbm5lckhUTUwgPSBcIi0tLS1TZWxlY3Qgd29ya2Jvb2stLS0tXCI7XG5cdFx0XHRcdG9wdGlvbkVtcHR5LnZhbHVlID0gXCJcIjtcblx0XHRcdFx0b3B0aW9uRW1wdHkuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRvcHRpb25FbXB0eS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uRW1wdHkpO1xuXG5cdFx0XHRcdGZvciAoY29uc3Qgb3Blbldvcmtib29rIG9mIG9wZW5Xb3JrYm9va3MpIHtcblx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBvcGVuV29ya2Jvb2submFtZTtcblx0XHRcdFx0XHRvcHRpb24udmFsdWUgPSBvcGVuV29ya2Jvb2submFtZTtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdHNob3dFcnJvcihlcnIpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0c2VsZWN0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBTZWxlY3QgYSB3b3JrYm9vay5cbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB3b3JrYm9vayB0byBzZWxlY3QuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdFdvcmtib29rKG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAob3Blbldvcmtib29rcykge1xuXHRcdGNvbnN0IG5ld1dvcmtib29rSW5kZXggPSBvcGVuV29ya2Jvb2tzLmZpbmRJbmRleCgodykgPT4gdy5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChuZXdXb3JrYm9va0luZGV4ICE9PSBzZWxlY3RlZFdvcmtib29rSW5kZXgpIHtcblx0XHRcdHNlbGVjdGVkV29ya2Jvb2tJbmRleCA9IG5ld1dvcmtib29rSW5kZXg7XG5cdFx0XHRpZiAobmV3V29ya2Jvb2tJbmRleCA+PSAwKSB7XG5cdFx0XHRcdGF3YWl0IG9wZW5Xb3JrYm9va3Nbc2VsZWN0ZWRXb3JrYm9va0luZGV4XS5ib29rLmFjdGl2YXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXdhaXQgcG9wdWxhdGVXb3Jrc2hlZXRzKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgd29ya3NoZWV0cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXb3Jrc2hlZXRzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoZXhjZWwpIHtcblx0XHRzZWxlY3RlZFdvcmtzaGVldEluZGV4ID0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiN3b3Jrc2hlZXQtcmVmcmVzaFwiKTtcblx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiN3b3Jrc2hlZXRzXCIpO1xuXG5cdFx0aWYgKHNlbGVjdCAmJiByZWZyZXNoQnV0dG9uICYmIG9wZW5Xb3JrYm9va3MgJiYgc2VsZWN0ZWRXb3JrYm9va0luZGV4ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0c2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG5cblx0XHRcdG9wZW5Xb3Jrc2hlZXRzID0gW107XG5cblx0XHRcdGNvbnN0IHdvcmtib29rID0gb3Blbldvcmtib29rc1tzZWxlY3RlZFdvcmtib29rSW5kZXhdO1xuXHRcdFx0aWYgKHdvcmtib29rKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qgc2hlZXRzID0gYXdhaXQgd29ya2Jvb2suYm9vay5nZXRXb3Jrc2hlZXRzKCk7XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IHNoZWV0IG9mIHNoZWV0cykge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmFtZSA9IGF3YWl0IHNoZWV0LmdldE5hbWUoKTtcblx0XHRcdFx0XHRcdG9wZW5Xb3Jrc2hlZXRzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRzaGVldCxcblx0XHRcdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9uRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRcdG9wdGlvbkVtcHR5LmlubmVySFRNTCA9IFwiLS0tLVNlbGVjdCB3b3Jrc2hlZXQtLS0tXCI7XG5cdFx0XHRcdFx0b3B0aW9uRW1wdHkudmFsdWUgPSBcIlwiO1xuXHRcdFx0XHRcdG9wdGlvbkVtcHR5LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRvcHRpb25FbXB0eS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb25FbXB0eSk7XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IG9wZW5Xb3Jrc2hlZXQgb2Ygb3BlbldvcmtzaGVldHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRcdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gb3BlbldvcmtzaGVldC5uYW1lO1xuXHRcdFx0XHRcdFx0b3B0aW9uLnZhbHVlID0gb3BlbldvcmtzaGVldC5uYW1lO1xuXHRcdFx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb24pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHRcdHNob3dFcnJvcihlcnIpO1xuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFNlbGVjdCBhIHdvcmtzaGVldC5cbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHdvcmtzaGVldCB0byBzZWxlY3QuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdFdvcmtzaGVldChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG9wZW5Xb3Jrc2hlZXRzKSB7XG5cdFx0Y29uc3QgbmV3V29ya3NoZWV0SW5kZXggPSBvcGVuV29ya3NoZWV0cy5maW5kSW5kZXgoKHcpID0+IHcubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAobmV3V29ya3NoZWV0SW5kZXggIT09IHNlbGVjdGVkV29ya3NoZWV0SW5kZXgpIHtcblx0XHRcdGlmIChzZWxlY3RlZFdvcmtzaGVldEluZGV4ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29uc3Qgb2xkV29ya3NoZWV0ID0gb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF07XG5cdFx0XHRcdGlmIChvbGRXb3Jrc2hlZXQpIHtcblx0XHRcdFx0XHRhd2FpdCBvbGRXb3Jrc2hlZXQuc2hlZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVDZWxsQ2hhbmdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3RlZFdvcmtzaGVldEluZGV4ID0gbmV3V29ya3NoZWV0SW5kZXg7XG5cdFx0XHRpZiAoc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCA+PSAwKSB7XG5cdFx0XHRcdGF3YWl0IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdLnNoZWV0LmFjdGl2YXRlKCk7XG5cdFx0XHRcdGF3YWl0IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdLnNoZWV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ2VsbENoYW5nZSk7XG5cblx0XHRcdFx0Y29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdHMtY29udGFpbmVyXCIpO1xuXHRcdFx0XHRpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuXHRcdFx0XHRcdHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY2VsbExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjZWxsLWxvY2F0aW9uXCIpO1xuXHRcdFx0XHRpZiAoY2VsbExvY2F0aW9uKSB7XG5cdFx0XHRcdFx0Y2VsbExvY2F0aW9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY2VsbFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjZWxsLXZhbHVlXCIpO1xuXHRcdFx0XHRpZiAoY2VsbFZhbHVlKSB7XG5cdFx0XHRcdFx0Y2VsbFZhbHVlLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qgc2V0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3NldC12YWx1ZVwiKTtcblx0XHRcdFx0aWYgKHNldFZhbHVlKSB7XG5cdFx0XHRcdFx0c2V0VmFsdWUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEhhbmRsZSBhIGNoYW5nZSBmcm9tIHRoZSBleGNlbCB3b3Jrc2hlZXQuXG4gKiBAcGFyYW0gY2VsbHMgVGhlIGNlbGxzIHRoYXQgd2VyZSBjaGFuZ2VkLlxuICovXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVDZWxsQ2hhbmdlKGNlbGxzOiBDZWxsW10pOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY2VsbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2VsbC1jaGFuZ2VzLWNvbnRhaW5lclwiKTtcblx0aWYgKGNlbGxDb250YWluZXIpIHtcblx0XHRjZWxsQ29udGFpbmVyLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGNlbGxzLCB1bmRlZmluZWQsIFwiICBcIik7XG5cblx0XHRmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcblx0XHRcdGlmIChLTk9XTl9JTlNUUlVNRU5UUy5pbmNsdWRlcyhjZWxsLnZhbHVlKSkge1xuXHRcdFx0XHRhd2FpdCBicm9hZGNhc3RJbnN0cnVtZW50KGNlbGwudmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFNldCBhIGNlbGwgdmFsdWUgaW4gZXhjZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldENlbGxWYWx1ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG9wZW5Xb3Jrc2hlZXRzICYmIHNlbGVjdGVkV29ya3NoZWV0SW5kZXggIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IGNlbGxMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjY2VsbC1sb2NhdGlvblwiKTtcblx0XHRjb25zdCBjZWxsVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2NlbGwtdmFsdWVcIik7XG5cblx0XHRpZiAoY2VsbExvY2F0aW9uICYmIGNlbGxWYWx1ZSkge1xuXHRcdFx0Y29uc3QgY2VsbHMgPSBbW2NlbGxWYWx1ZS52YWx1ZV1dO1xuXHRcdFx0YXdhaXQgb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0uc2hlZXQuc2V0Q2VsbFZhbHVlcyhjZWxsTG9jYXRpb24udmFsdWUsIGNlbGxzKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBCcm9hZGNhc3QgYW5kIEZEQzMgaW5zdHJ1bWVudC5cbiAqIEBwYXJhbSBpbnN0cnVtZW50IFRoZSBpbnN0cnVtZW50IHRvIGJyb2FkY2FzdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYnJvYWRjYXN0SW5zdHJ1bWVudChpbnN0cnVtZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnJvYWRjYXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjYnJvYWRjYXN0LWluc3RydW1lbnRcIik7XG5cdGlmIChicm9hZGNhc3RFbGVtZW50KSB7XG5cdFx0aWYgKHdpbmRvdy5mZGMzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBmZGNJbnN0cnVtZW50ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZmRjMy5pbnN0cnVtZW50XCIsXG5cdFx0XHRcdFx0aWQ6IHtcblx0XHRcdFx0XHRcdHRpY2tlcjogaW5zdHJ1bWVudFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb25zdCBjaGFubmVsID0gYXdhaXQgZ2V0Q3VycmVudENoYW5uZWwoKTtcblx0XHRcdFx0aWYgKGNoYW5uZWwpIHtcblx0XHRcdFx0XHRhd2FpdCBjaGFubmVsLmJyb2FkY2FzdChmZGNJbnN0cnVtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBpbnN0cnVtZW50O1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXJyKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YnJvYWRjYXN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiTm8gRkQzIENoYW5uZWwgYXZhaWxhYmxlXCI7XG5cdFx0fVxuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=