/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@openfin/notifications/dist/client/index.js"
/*!**********************************************************************!*\
  !*** ../../node_modules/@openfin/notifications/dist/client/index.js ***!
  \**********************************************************************/
(module) {

!function(e,t){ true?module.exports=t():0}(this,(()=>(()=>{"use strict";var e={2:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(637),t),o(n(155),t)},7:e=>{var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function r(){r.init.call(this)}e.exports=r,e.exports.once=function(e,t){return new Promise((function(n,i){function o(n){e.removeListener(t,r),i(n)}function r(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}g(e,t,r,{once:!0}),"error"!==t&&function(e,t){"function"==typeof e.on&&g(e,"error",t,{once:!0})}(e,o)}))},r.EventEmitter=r,r.prototype._events=void 0,r.prototype._eventsCount=0,r.prototype._maxListeners=void 0;var a=10;function s(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function l(e,t,n,i){var o,r,a,l;if(s(n),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),r=e._events),a=r[t]),void 0===a)a=r[t]=n,++e._eventsCount;else if("function"==typeof a?a=r[t]=i?[n,a]:[a,n]:i?a.unshift(n):a.push(n),(o=c(e))>0&&a.length>o&&!a.warned){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=a.length,l=u,console&&console.warn&&console.warn(l)}return e}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=u.bind(i);return o.listener=n,i.wrapFn=o,o}function f(e,t,n){var i=e._events;if(void 0===i)return[];var o=i[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):v(o,o.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function g(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(r){i.once&&e.removeEventListener(t,o),n(r)}))}}Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),r.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return c(this)},r.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,r=this._events;if(void 0!==r)o=o&&void 0===r.error;else if(!o)return!1;if(o){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var c=r[e];if(void 0===c)return!1;if("function"==typeof c)i(c,this,t);else{var l=c.length,u=v(c,l);for(n=0;n<l;++n)i(u[n],this,t)}return!0},r.prototype.addListener=function(e,t){return l(this,e,t,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(e,t){return l(this,e,t,!0)},r.prototype.once=function(e,t){return s(t),this.on(e,d(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,d(this,e,t)),this},r.prototype.removeListener=function(e,t){var n,i,o,r,a;if(s(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,r=n.length-1;r>=0;r--)if(n[r]===t||n[r].listener===t){a=n[r].listener,o=r;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,a||t)}return this},r.prototype.off=r.prototype.removeListener,r.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,r=Object.keys(n);for(i=0;i<r.length;++i)"removeListener"!==(o=r[i])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},r.prototype.listeners=function(e){return f(this,e,!0)},r.prototype.rawListeners=function(e){return f(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},r.prototype.listenerCount=p,r.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},36:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Log=void 0;const i=n(329);class o{static async error(e){try{const t=o.getPrefixedMessage(e);console.error(t),await i.finContext.System.log("error",t)}catch(e){o.handleError(e,"Failed to log error")}}static async warn(e){try{const t=o.getPrefixedMessage(e);console.warn(t),await i.finContext.System.log("warning",t)}catch(e){o.handleError(e,"Failed to log warning")}}static async info(e){try{const t=o.getPrefixedMessage(e);console.info(t),await i.finContext.System.log("info",t)}catch(e){o.handleError(e,"Failed to log info")}}static getPrefixedMessage(e){return`${o.LOG_PREFIX} ${e}`}static handleError(e,t){e instanceof Error?console.error(`${t} - ${e.name}: ${e.message}`):console.error(`${t} - ${JSON.stringify(e)}`)}}t.Log=o,o.LOG_PREFIX="[@openfin/notifications]"},89:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DeferredPromise=class{constructor(){const e=new Promise(((e,t)=>{this._resolve=e,this._reject=t}));this._promise=e}get promise(){return this._promise}get resolve(){return this._resolve}get reject(){return this._reject}}},93:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},96:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},155:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetType=t.TimeWidgetType=t.DateWidgetType=t.RadioGroupWidgetType=t.CheckboxGroupWidgetType=t.BooleanWidgetType=t.NumberWidgetType=t.StringWidgetType=void 0,t.StringWidgetType={Text:"Text",Dropdown:"Dropdown"},t.NumberWidgetType={Number:"Number"},t.BooleanWidgetType={Toggle:"Toggle",Checkbox:"Checkbox"},t.CheckboxGroupWidgetType={CheckboxGroup:"CheckboxGroup"},t.RadioGroupWidgetType={RadioGroup:"RadioGroup"},t.DateWidgetType={Date:"Date"},t.TimeWidgetType={Time:"Time"},t.WidgetType=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t.StringWidgetType),t.NumberWidgetType),t.BooleanWidgetType),t.CheckboxGroupWidgetType),t.RadioGroupWidgetType),t.DateWidgetType),t.TimeWidgetType)},158:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ActionBodyClickType=t.ActionNoopType=t.ActionTrigger=void 0,(n=t.ActionTrigger||(t.ActionTrigger={})).CONTROL="control",n.SELECT="select",n.CLOSE="close",n.EXPIRE="expire",n.PROGRAMMATIC="programmatic",(t.ActionNoopType||(t.ActionNoopType={})).EVENT_DISMISS="event_dismiss",(t.ActionBodyClickType||(t.ActionBodyClickType={})).DISMISS_EVENT="dismiss_event"},166:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.connectAsExternalClient=t.externalDispatchMethod=void 0;const i=n(471);let o;t.externalDispatchMethod=async(e,t)=>{if(!o)throw new Error("Not connected to the notification center. Did you call connectToNotifications()?.");return o.dispatch(e,t)},t.connectAsExternalClient=async function(e){const{externalProviderConfig:t}=e,n={id:t.id,title:t.title,icon:t.icon};console.log("Connecting to the Notification Center..."),o=await t.finContext.InterApplicationBus.Channel.connect(t.serviceId,{wait:!0,payload:{version:"2.13.1",providerInfo:n}}),console.log("Connected to the Notification Center.");const r=(0,i.getEventRouter)();o.setDefaultAction((()=>!1)),o.register("WARN",(e=>console.warn(e))),o.register("event",(e=>{r.dispatchEvent(e)})),o.onDisconnection((()=>{console.warn("Disconnected from the Notification Center"),o=null,setTimeout((()=>{console.log("Attempting to reconnect to the Notification Center"),e.retry(e)}),300)}))}},217:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isConnectedToAtLeast=t.getStatus=void 0;const o=i(n(667)),r=n(785),a=n(902),s=n(349);function c(){return(0,r.withStrictTimeout)(500,(0,a.tryServiceDispatch)(s.APITopic.GET_PROVIDER_STATUS,void 0),"").catch((()=>({connected:!1,version:null,templateAPIVersion:null})))}t.getStatus=c,t.isConnectedToAtLeast=async function(e){const t=await c();if(t.connected&&null!==t.version){const n=(0,o.default)(t.version,e);if(0===n||1===n)return!0}return!1}},312:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.extractConfigFromManifest=void 0;const i=n(36);t.extractConfigFromManifest=async function(){try{const e=await fin.Application.getCurrentSync().getManifest();if(!(null==e?void 0:e.notifications))return;const{customManifest:t,routingOptions:n}=e.notifications;return(null==n?void 0:n.routerChannelName)?(i.Log.info("Routing option detected in manifest. Using router configuration."),{routingOptions:n}):(i.Log.info("Custom manifest option detected in manifest. Using custom manifest configuration."),{customManifest:t})}catch(e){return}}},329:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setFinContext=t.finContext=void 0,t.setFinContext=e=>{t.finContext=e}},349:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.eventTypes=t.APITopic=t.getChannelName=t.SERVICE_CHANNEL=t.SERVICE_IDENTITY=void 0,t.SERVICE_IDENTITY={uuid:"notifications-service",name:"notifications-service"},t.SERVICE_CHANNEL="of-notifications-service-v1",t.getChannelName=e=>e===t.SERVICE_IDENTITY.uuid?t.SERVICE_CHANNEL:`${e}-${t.SERVICE_CHANNEL}`,(n=t.APITopic||(t.APITopic={})).CREATE_NOTIFICATION="create-notification",n.UPDATE_NOTIFICATION="update-notification",n.CLEAR_NOTIFICATION="clear-notification",n.SET_REMINDER="set-reminder",n.CANCEL_REMINDER="cancel-reminder",n.GET_APP_NOTIFICATIONS="fetch-app-notifications",n.CLEAR_APP_NOTIFICATIONS="clear-app-notifications",n.TOGGLE_NOTIFICATION_CENTER="toggle-notification-center",n.ADD_EVENT_LISTENER="add-event-listener",n.REMOVE_EVENT_LISTENER="remove-event-listener",n.GET_PROVIDER_STATUS="get-provider-status",n.GET_NOTIFICATIONS_COUNT="get-notifications-count",n.SHOW_NOTIFICATION_CENTER="show-notification-center",n.HIDE_NOTIFICATION_CENTER="hide-notification-center",n.REGISTER_PLATFORM="register-notifications-platform",n.DEREGISTER_PLATFORM="deregister-notifications-platform",n.SET_FORM_STATUS_OPTIONS="set-form-status-options",n.SET_FORM_VALIDATION_ERRORS="set-form-validation-errors",n.GET_USER_SETTINGS_STATUS="get-user-settings-status",n.SET_DEFAULT_PLATFORM_SHORTCUT="set-default-platform-shortcut",n.SET_NOTIFICATION_SECURITY_RULE="set-notification-security-rule",t.eventTypes=["notification-created","notification-closed","notification-action","notification-form-submitted","notification-form-values-changed","notifications-count-changed","notification-sound-toggled","notification-reminder-created","notification-reminder-removed","notification-toast-dismissed"]},403:(e,t)=>{var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.IndicatorColor=t.IndicatorType=void 0,(i=t.IndicatorType||(t.IndicatorType={})).FAILURE="failure",i.WARNING="warning",i.SUCCESS="success",(n=t.IndicatorColor||(t.IndicatorColor={})).RED="red",n.GREEN="green",n.YELLOW="yellow",n.BLUE="blue",n.PURPLE="purple",n.GRAY="gray",n.ORANGE="orange",n.MAGENTA="magenta",n.TEAL="teal"},405:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)},s=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.setAllowedOrigins=t.getUserSettingStatus=t.UserSettings=t.getNotificationsCount=t.hide=t.show=t.setDefaultPlatformShortcut=t.toggleNotificationCenter=t.clearAll=t.getAll=t.cancelReminder=t.setReminder=t.clear=t.update=t.create=t.removeEventListener=t.addEventListener=t.VERSION=t.NotificationIndicatorType=t.IndicatorColor=t.NotificationIndicatorWithCustomColor=t.NotificationIndicator=t.NotificationOptions=t.provider=t.actions=void 0;const c=n(158),l=n(902),u=n(349),d=n(471),f=r(n(217));t.provider=f;const p=n(855),v=n(403);Object.defineProperty(t,"NotificationIndicator",{enumerable:!0,get:function(){return v.NotificationIndicator}}),Object.defineProperty(t,"NotificationIndicatorWithCustomColor",{enumerable:!0,get:function(){return v.NotificationIndicatorWithCustomColor}}),Object.defineProperty(t,"NotificationIndicatorType",{enumerable:!0,get:function(){return v.IndicatorType}}),Object.defineProperty(t,"IndicatorColor",{enumerable:!0,get:function(){return v.IndicatorColor}});const g=n(965);Object.defineProperty(t,"NotificationOptions",{enumerable:!0,get:function(){return g.NotificationOptions}});const m=r(n(158));t.actions=m,a(n(158),t),a(n(578),t),a(n(93),t),a(n(2),t),a(n(520),t),a(n(96),t),a(n(470),t),t.VERSION="2.13.1";const h=(0,d.getEventRouter)();function y(e){const{notification:t}=e;return Object.assign(Object.assign({},e),{notification:Object.assign(Object.assign({},t),{date:new Date(t.date),expires:null!==t.expires?new Date(t.expires):null})})}h.registerDeserializer("notification-created",(e=>y(e))),h.registerDeserializer("notification-toast-dismissed",(e=>y(e))),h.registerDeserializer("notification-closed",(e=>y(e))),h.registerDeserializer("notification-action",(e=>{var t;const n=y(e),{controlSource:i,controlIndex:o}=n,r=s(n,["controlSource","controlIndex"]);return e.trigger===c.ActionTrigger.CONTROL?Object.assign(Object.assign({},r),{control:null===(t=e.notification[i])||void 0===t?void 0:t[o]}):r})),h.registerDeserializer("notifications-count-changed",(e=>e)),h.registerDeserializer("notification-reminder-created",(e=>{const t=y(e),{reminderDate:n}=t,i=s(t,["reminderDate"]);return Object.assign(Object.assign({},i),{reminderDate:new Date(n)})})),h.registerDeserializer("notification-reminder-removed",(e=>y(e))),h.registerDeserializer("notification-sound-toggled",(e=>e)),t.addEventListener=async function(e,t){(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t);const n=d.eventEmitter.listenerCount(e);"notification-form-submitted"===e&&(t=function(e){return t=>{const n=t.notification.id;t.setFormStatus=e=>(0,l.tryServiceDispatch)(u.APITopic.SET_FORM_STATUS_OPTIONS,Object.assign(Object.assign({},e),{_notificationId:n})),e(t)}}(t)),"notification-form-values-changed"===e&&(t=function(e){return t=>{t.setErrors=e=>(0,l.tryServiceDispatch)(u.APITopic.SET_FORM_VALIDATION_ERRORS,{errors:e,notificationId:t.notification.id}),e(t)}}(t)),d.eventEmitter.addListener(e,t),0===n&&1===d.eventEmitter.listenerCount(e)&&await(0,l.tryServiceDispatch)(u.APITopic.ADD_EVENT_LISTENER,e)},t.removeEventListener=async function(e,t){(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t),1===d.eventEmitter.listenerCount(e)&&d.eventEmitter.listeners(e)[0]===t&&await(0,l.tryServiceDispatch)(u.APITopic.REMOVE_EVENT_LISTENER,e),d.eventEmitter.removeListener(e,t)},t.create=async function(e,t){if("object"!=typeof e||null===e)throw new Error("Invalid argument passed to create: argument must be an object and must not be null");if(void 0!==e.date&&!(e.date instanceof Date))throw new Error('Invalid argument passed to create: "date" must be a valid Date object');if(void 0!==e.expires&&null!==e.expires&&!(e.expires instanceof Date))throw new Error('Invalid argument passed to create: "expires" must be null or a valid Date object');if(t&&t.reminderDate){if(!1===e.allowReminder)throw new Error('You must not specify a reminder date for a notification with "allowReminder" option set to false.');if(!(t.reminderDate instanceof Date))throw new Error('Invalid argument passed to reminder Options: "date" must a valid Date object');if(e.expires&&e.expires.getTime()<t.reminderDate.getTime())throw new Error("Expiration date must not be earlier than reminder date.")}void 0!==e.category&&null!==e.category||(e.category="default");const n=await(0,l.tryServiceDispatch)(u.APITopic.CREATE_NOTIFICATION,Object.assign(Object.assign({},e),{date:e.date&&e.date.getTime(),expires:e.expires&&e.expires.getTime(),reminder:(null==t?void 0:t.reminderDate)&&t.reminderDate.getTime()}));return Object.assign(Object.assign({},n),{date:new Date(n.date),expires:null!==n.expires?new Date(n.expires):null})},t.update=async function(e){if("object"!=typeof e||null===e)throw new Error("Invalid argument passed to create: argument must be an object and must not be null");if(!e.id)throw new Error('Invalid argument passed to create: "id" must be Id of previously created Notification');const t=await(0,l.tryServiceDispatch)(u.APITopic.UPDATE_NOTIFICATION,Object.assign({},e));return Object.assign({},t)},t.clear=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.CLEAR_NOTIFICATION,{id:e})},t.setReminder=async function(e,t){if(!(t instanceof Date))throw new Error('Invalid argument passed to setReminder: "reminderDate" must a valid Date object');if(t.getTime()<Date.now())throw new Error('Invalid argument passed to setReminder: "reminderDate" was set to a Date in the past, must be a Date in the future.');const n=await(0,l.tryServiceDispatch)(u.APITopic.SET_REMINDER,{id:e,reminder:t.getTime()});return n?console.log(`[Client::setReminder] Reminder set for notification: ${e}`):console.log(`[Client::setReminder] Notification not found for id: ${e}`),n},t.cancelReminder=async function(e){const t=await(0,l.tryServiceDispatch)(u.APITopic.CANCEL_REMINDER,{id:e});return t?console.log(`[Client::cancelReminder] Reminder canceled for notification: ${e}`):console.log(`[Client::cancelReminder] Notification not found for id: ${e}`),t},t.getAll=async function(){return(await(0,l.tryServiceDispatch)(u.APITopic.GET_APP_NOTIFICATIONS,void 0)).map((e=>Object.assign(Object.assign({},e),{indicator:e.indicator||null,date:new Date(e.date),expires:null!==e.expires?new Date(e.expires):null})))},t.clearAll=async function(){return(0,l.tryServiceDispatch)(u.APITopic.CLEAR_APP_NOTIFICATIONS,void 0)},t.toggleNotificationCenter=async function(){return(0,l.tryServiceDispatch)(u.APITopic.TOGGLE_NOTIFICATION_CENTER,void 0)},t.setDefaultPlatformShortcut=function(e){return(0,l.tryServiceDispatch)(u.APITopic.SET_DEFAULT_PLATFORM_SHORTCUT,e)},t.show=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.SHOW_NOTIFICATION_CENTER,e)},t.hide=async function(){return(0,l.tryServiceDispatch)(u.APITopic.HIDE_NOTIFICATION_CENTER,void 0)},t.getNotificationsCount=async function(){return(0,l.tryServiceDispatch)(u.APITopic.GET_NOTIFICATIONS_COUNT,void 0)},(t.UserSettings||(t.UserSettings={})).SOUND_ENABLED="soundEnabled",t.getUserSettingStatus=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.GET_USER_SETTINGS_STATUS,e)},t.setAllowedOrigins=async e=>(0,l.tryServiceDispatch)(u.APITopic.SET_NOTIFICATION_SECURITY_RULE,{allowedOrigins:e})},468:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},470:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(134),t),o(n(468),t),o(n(965),t),o(n(929),t)},471:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.getEventRouter=t.eventEmitter=t.EventRouter=void 0;const o=n(7),r=n(902),a=n(349);class s{constructor(e){this._emitterProviders={},this._deserializers={},this._defaultEmitter=e}registerEmitterProvider(e,t){this._emitterProviders[e]=t}registerDeserializer(e,t){this._deserializers[e]=t}dispatchEvent(e){const{type:t,target:n}=e,o=i(e,["type","target"]);let s;if(!n)throw new Error("Invalid event, no target specified");if("default"===n)s=this._defaultEmitter;else{if(!this._emitterProviders[n.type])throw new Error(`Invalid target, no provider registered for '${n.type}'`);s=this._emitterProviders[n.type](n.id)}const c=Object.assign({type:t},o),l=this._deserializers[t];l?s.emit(t,l(c)):"notification-form-submitted"===t?function(e,t){let n=!1;e.preventDefault=()=>n=!0,t.emit("notification-form-submitted",e),n||(0,r.tryServiceDispatch)(a.APITopic.SET_FORM_STATUS_OPTIONS,{formStatus:"submitted",_notificationId:e.notification.id})}(c,s):s.emit(t,c)}}let c;t.EventRouter=s,t.eventEmitter=new o.EventEmitter,t.getEventRouter=function(){return c||(c=new s(t.eventEmitter)),c}},520:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},536:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.NotificationsRegistration=void 0;const r=n(329),a=n(902),s=n(855),c=n(610),l=n(312),u=n(797);Object.defineProperty(t,"NotificationsRegistration",{enumerable:!0,get:function(){return u.NotificationsRegistration}});const d=n(166),f=n(217),p=n(919);o(n(405),t);class v extends Error{constructor(e){super(e),this.name="NotificationsRegistrationError"}}t.register=async function e(t){if((null==t?void 0:t.customManifest)&&console.warn("The customManifest option is not supported anymore and will be ignored. Use manifest configuration instead."),null==t?void 0:t.externalProviderConfig){const{externalProviderConfig:n}=t,{finContext:i}=n||{};if(!i)throw new v("fin context must be provided for external notification providers.");return(0,p.validateExternalProviderInfo)(n),(0,s.setValidationMethod)((()=>{})),(0,a.setDispatchMethod)(d.externalDispatchMethod),await(0,d.connectAsExternalClient)({externalProviderConfig:n,retry:e}),{clientAPIVersion:"2.13.1",notificationsVersion:(await(0,f.getStatus)()).version||"unknown"}}if("undefined"!=typeof fin&&"undefined"!=typeof window){(0,r.setFinContext)(fin),(0,s.setValidationMethod)(c.defaultValidateEnvironment),(0,a.setDispatchMethod)(c.defaultDispatch);const e=await(0,l.extractConfigFromManifest)();return(0,u.register)(e)}throw new Error("You are neither in OpenFin environment nor provided an external OpenFin connection.")}},578:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},610:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defaultValidateEnvironment=t.defaultDispatch=void 0;const i=n(793),o=n(329);t.defaultDispatch=async function(e,t){return(await(0,i.getChannelClient)()).dispatch(e,t)},t.defaultValidateEnvironment=function(){if(void 0===o.finContext)throw new Error("fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.")}},637:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FieldType=void 0,t.FieldType={string:"string",number:"number",boolean:"boolean",date:"date",checkboxGroup:"checkboxGroup",radioGroup:"radioGroup",time:"time"}},667:e=>{e.exports=void 0},777:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(89);async function o(e,t){let n=0;for(const i of e)await t(i,n,e),n++}async function r(e,t){await Promise.all(e.map(t))}function a(e,t,n){const o=new i.DeferredPromise,r=e.add(((...e)=>{t(...e)&&(r.remove(),o.resolve())}));return n&&n.catch((e=>{r.remove(),o.reject(e)})),s(o.promise)}function s(e){return e.catch((()=>{})),e}t.serialForEach=o,t.serialMap=async function(e,t){const n=[];return await o(e,(async(e,i,o)=>{n.push(await t(e,i,o))})),n},t.serialFilter=async function(e,t){const n=[];return await o(e,(async(e,i,o)=>{await t(e,i,o)&&n.push(e)})),n},t.parallelForEach=r,t.parallelMap=async function(e,t){const n=[];return await r(e,(async(e,i,o)=>{n[i]=await t(e,i,o)})),n},t.parallelFilter=async function(e,t){const n=[];return await r(e,(async(e,i,o)=>{n[i]=await t(e,i,o)})),e.filter(((e,t)=>n[t]))},t.withStrictTimeout=function(e,t,n){const i=new Promise(((t,i)=>setTimeout((()=>i(new Error(n))),e)));return s(Promise.race([i,t]))},t.withTimeout=function(e,t){const n=new Promise((t=>setTimeout((()=>t([!0,void 0])),e))),i=t.then((e=>[!1,e]));return Promise.race([n,i])},t.untilTrue=function(e,t,n){return t()?Promise.resolve():a(e,t,n)},t.untilSignal=a,t.allowReject=s},785:(e,t,n)=>{function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n(777)),i(n(89))},793:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChannelClient=t.clearAwaitedChannelClient=t.initAwaitedChannelClient=t.ServiceConfig=void 0;const i=n(349),o=n(36),r=n(329);t.ServiceConfig={serviceChannel:i.SERVICE_CHANNEL,serviceUuid:i.SERVICE_IDENTITY.uuid,routingEnabled:!1};const a=async({wait:e})=>{await o.Log.info(`Connecting to Notifications (${t.ServiceConfig.serviceChannel})...`);const n=await r.finContext.InterApplicationBus.Channel.connect(t.ServiceConfig.serviceChannel,{wait:e,payload:{version:"2.13.1"}});return await o.Log.info(`Successfully connected to Notifications (${t.ServiceConfig.serviceChannel}).`),n};let s,c;t.initAwaitedChannelClient=()=>s?{channelClientPromise:s,isInit:!1}:(s=a({wait:!0}),s.catch((e=>(0,t.clearAwaitedChannelClient)())),{channelClientPromise:s,isInit:!0}),t.clearAwaitedChannelClient=()=>{s=null},t.getChannelClient=async()=>s||(async()=>{if(!c){try{c=await a({wait:!1}),c.setDefaultAction((()=>!1))}catch(e){throw await o.Log.error('Could not find channel provider. Did you call "notifications.register()"?'),e}c.onDisconnection((()=>{c=null}))}return c})()},797:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.ChannelClientHandlers=void 0;const i=n(349),o=n(471),r=n(36),a=n(793),s=n(217),c=n(329);class l{}t.ChannelClientHandlers=l,l.handleDefaultAction=()=>!1,l.handleEventAction=e=>{(0,o.getEventRouter)().dispatchEvent(e)},l.handleWarnAction=async e=>{await r.Log.warn(e)},l.handleDisconnection=async()=>{(0,a.getChannelClient)()&&(await r.Log.warn("Disconnected from Notifications. Reconnecting..."),(0,a.clearAwaitedChannelClient)(),await f(),await p())};let u=null;t.register=async e=>{if(null==e?void 0:e.externalProviderConfig)throw new Error("It appears you are attempting to use an external provider configuration with the desktop client. This usually suggests that the Client API package version in use is deprecated.");if(u)return u;try{return u=d(e),await u}finally{u=null}};const d=async e=>{const t=e;if(null==t?void 0:t.routingOptions){const e=t.routingOptions.routerChannelName;if(!e)throw new Error("When a router config is provided, the router channel name must also be provided and cannot be an empty string.");r.Log.info(`Connecting to router channel: ${e}`),a.ServiceConfig.serviceChannel=e,a.ServiceConfig.routingEnabled=!0}else if(null==t?void 0:t.customManifest){const e=t.customManifest;if(r.Log.info(`Connecting to private instance: ${e.manifestUuid} at ${e.manifestUrl}`),!e.manifestUrl)throw new Error("When a custom manifest config is provided, the manifest url must be provided and cannot be an empty string.");if(!e.manifestUuid)throw new Error("When a custom manifest config is provided, the manifest UUID must be provided and cannot be an empty string.");a.ServiceConfig.serviceChannel=`${e.manifestUuid}-${i.SERVICE_CHANNEL}`,a.ServiceConfig.serviceUuid=e.manifestUuid,a.ServiceConfig.serviceManifestUrl=e.manifestUrl,await f()}else a.ServiceConfig.serviceChannel=i.SERVICE_CHANNEL,await f();return await p(),{clientAPIVersion:"2.13.1",notificationsVersion:(await(0,s.getStatus)()).version||"unknown"}},f=async()=>{if(!a.ServiceConfig.routingEnabled)try{const e=a.ServiceConfig.serviceManifestUrl,t=window.navigator.userAgent.toLowerCase().includes("windows"),n=e||"fins://system-apps/notification-center";t?(await r.Log.info("Launching Notifications via fin.System.launchManifest..."),await c.finContext.System.launchManifest(n,{noUi:!0})):(await r.Log.info("Launching Notifications via fin.System.openUrlWithBrowser..."),await c.finContext.System.openUrlWithBrowser(n))}catch(e){throw e instanceof Error?await r.Log.error(`Failed to launch Notifications - ${e.name}: ${e.message}`):await r.Log.error(`Failed to launch Notifications - ${JSON.stringify(e)}`),e}},p=async()=>{try{const{channelClientPromise:e,isInit:t}=(0,a.initAwaitedChannelClient)(),n=await e;t&&(n.setDefaultAction(l.handleDefaultAction),n.register("event",l.handleEventAction),n.register("WARN",l.handleWarnAction),n.onDisconnection(l.handleDisconnection),!a.ServiceConfig.routingEnabled)&&c.finContext.Application.wrapSync({uuid:a.ServiceConfig.serviceUuid}).once("closed",l.handleDisconnection)}catch(e){throw e instanceof Error?await r.Log.error(`Failed to connect to Notifications - ${e.name}: ${e.message}`):await r.Log.error(`Failed to connect to Notifications - ${JSON.stringify(e)}`),e}}},855:(e,t)=>{function n(e,t){let n;try{n=JSON.stringify(e)}catch(e){n=t}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.setValidationMethod=t.validateEnvironment=t.safeStringify=t.sanitizeEventType=t.sanitizeFunction=void 0,t.sanitizeFunction=function(e){if("function"!=typeof e)throw new Error(`Invalid argument passed: ${n(e,"The provided value")} is not a valid function`);return e},t.sanitizeEventType=function(e){if("notification-action"===e||"notification-created"===e||"notification-toast-dismissed"===e||"notification-closed"===e||"notifications-count-changed"===e||"notification-form-submitted"===e||"notification-reminder-created"===e||"notification-reminder-removed"===e||"notification-form-values-changed"===e||"notification-sound-toggled"===e)return e;throw new Error(`Invalid argument passed: ${n(e,"The provided event type")} is not a valid Notifications event type`)},t.safeStringify=n,t.validateEnvironment=()=>{throw new Error("fin is not defined. The notifications module is only intended for use in an OpenFin application.")},t.setValidationMethod=e=>{t.validateEnvironment=e}},902:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setDispatchMethod=t.tryServiceDispatch=void 0,t.tryServiceDispatch=async(e,t)=>{throw new Error("Environment is not initialized..")},t.setDispatchMethod=e=>{t.tryServiceDispatch=e}},919:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateExternalProviderInfo=void 0,t.validateExternalProviderInfo=function(e){if(!e.id)throw new Error("id must be a non-zero length and must be a unique identifier of the provider.");if(!e.title)throw new Error("title must be a non-zero length.");if(!e.serviceId)throw new Error("serviceId must be a non-zero length and must match the service id of the Web Notification Center instance.")}},929:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},965:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateFragmentNames=t.PresentationTemplateFragmentNames=t.ContainerTemplateFragmentNames=t.TemplateNames=void 0,t.TemplateNames={markdown:"markdown",list:"list",custom:"custom"},t.ContainerTemplateFragmentNames={container:"container"},t.PresentationTemplateFragmentNames={text:"text",image:"image",list:"list",actionableText:"actionableText"},t.TemplateFragmentNames=Object.assign(Object.assign({},t.ContainerTemplateFragmentNames),t.PresentationTemplateFragmentNames)}},t={};return function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}(536)})()));

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/notifications */ "../../node_modules/@openfin/notifications/dist/client/index.js");
/* harmony import */ var _openfin_notifications__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_notifications__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable linebreak-style */

const NOTIFICATION_SOUND_URL = "https://built-on-openfin.github.io/container-starter/dev/shared/navigation-history/use-notifications/assets/notification.mp3";
// Keep track of notifications we are updating
const updatableNotifications = {};
let updatableNotificationTimer;
let loggingElement;
let codeElement;
let connected = false;
let connectedVersion;
let statusIntervalId;
let lastConnectionStatus;
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
        await initializeNotifications();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initializes the DOM elements and sets up event listeners for UI controls.
 */
async function initDom() {
    loggingElement = document.querySelector("#logging");
    codeElement = document.querySelector("#code");
    const loggingContainer = document.querySelector("#logging-container");
    const codeContainer = document.querySelector("#code-container");
    if (!codeElement || !loggingElement || !loggingContainer || !codeContainer) {
        return;
    }
    loggingAddEntry(`Library Version: ${_openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.VERSION}`);
    const btnLoggingClear = document.querySelector("#btnLoggingClear");
    if (btnLoggingClear) {
        btnLoggingClear.addEventListener("click", () => {
            if (loggingElement) {
                loggingElement.textContent = "";
            }
        });
    }
    const btnCodeCopy = document.querySelector("#btnCodeCopy");
    if (btnCodeCopy) {
        btnCodeCopy.addEventListener("click", async () => {
            if (codeElement) {
                await fin.Clipboard.writeText({ data: codeElement.value });
            }
        });
    }
    const btnCodeNotification = document.querySelector("#btnCodeNotification");
    if (btnCodeNotification) {
        btnCodeNotification.addEventListener("click", async () => {
            try {
                if (codeElement) {
                    const notificationOptions = JSON.parse(codeElement.value);
                    notificationOptions.id = randomUUID();
                    codeShowExample(notificationOptions);
                    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notificationOptions);
                }
            }
            catch { }
        });
    }
    codeElement.addEventListener("input", () => {
        if (codeElement) {
            try {
                JSON.parse(codeElement.value);
                codeElement.classList.remove("error");
            }
            catch {
                codeElement.classList.add("error");
            }
        }
    });
    codeContainer.style.display = "none";
    if (loggingContainer) {
        loggingContainer.style.display = "flex";
    }
    const btnViewLogging = document.querySelector("#btnViewLogging");
    if (btnViewLogging) {
        btnViewLogging.addEventListener("click", () => {
            loggingContainer.style.display = "flex";
            codeContainer.style.display = "none";
        });
    }
    const btnViewCode = document.querySelector("#btnViewCode");
    if (btnViewCode) {
        btnViewCode.addEventListener("click", () => {
            loggingContainer.style.display = "none";
            codeContainer.style.display = "flex";
        });
    }
    const btnNotificationSimple = document.querySelector("#btnNotificationSimple");
    if (btnNotificationSimple) {
        btnNotificationSimple.addEventListener("click", async () => showSimpleNotification());
    }
    const btnNotificationBodyDismiss = document.querySelector("#btnNotificationBodyDismiss");
    if (btnNotificationBodyDismiss) {
        btnNotificationBodyDismiss.addEventListener("click", async () => showSimpleNotificationBodyDismiss());
    }
    const btnNotificationBodyDismissAction = document.querySelector("#btnNotificationBodyDismissAction");
    if (btnNotificationBodyDismissAction) {
        btnNotificationBodyDismissAction.addEventListener("click", async () => showSimpleNotificationBodyDismissAction());
    }
    const btnNotificationActionable = document.querySelector("#btnNotificationActionable");
    if (btnNotificationActionable) {
        btnNotificationActionable.addEventListener("click", async () => showActionableNotification());
    }
    const btnNotificationForm = document.querySelector("#btnNotificationForm");
    if (btnNotificationForm) {
        btnNotificationForm.addEventListener("click", async () => showFormNotification());
    }
    const btnNotificationFormAdvanced = document.querySelector("#btnNotificationFormAdvanced");
    if (btnNotificationFormAdvanced) {
        btnNotificationFormAdvanced.addEventListener("click", async () => showFormAdvancedNotification());
    }
    const btnNotificationUpdatable = document.querySelector("#btnNotificationUpdatable");
    if (btnNotificationUpdatable) {
        btnNotificationUpdatable.addEventListener("click", async () => showUpdatableNotification());
    }
    const btnNotificationCustom = document.querySelector("#btnNotificationCustom");
    if (btnNotificationCustom) {
        btnNotificationCustom.addEventListener("click", async () => showCustomNotification());
    }
    const btnNotificationWithSound = document.querySelector("#btnNotificationWithSound");
    if (btnNotificationWithSound) {
        btnNotificationWithSound.addEventListener("click", async () => showSoundNotification(NOTIFICATION_SOUND_URL));
    }
    const btnNotificationCenterUserSettings = document.querySelector("#btnNotificationCenterUserSettings");
    if (btnNotificationCenterUserSettings) {
        btnNotificationCenterUserSettings.addEventListener("click", async () => getNotificationCenterUserSettings());
    }
    const btnNotificationWithIndicator = document.querySelector("#btnNotificationWithIndicator");
    if (btnNotificationWithIndicator) {
        btnNotificationWithIndicator.addEventListener("click", async () => showIndicatorNotification());
    }
    const btnNotificationWithCustomIndicator = document.querySelector("#btnNotificationWithCustomIndicator");
    if (btnNotificationWithCustomIndicator) {
        btnNotificationWithCustomIndicator.addEventListener("click", async () => showCustomIndicatorNotification());
    }
    const btnNotificationsCenterShow = document.querySelector("#btnNotificationsCenterShow");
    if (btnNotificationsCenterShow) {
        btnNotificationsCenterShow.addEventListener("click", async () => {
            try {
                btnNotificationsCenterShow.disabled = true;
                await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.show();
            }
            catch (err) {
                loggingAddEntry(`${err}`);
            }
            finally {
                btnNotificationsCenterShow.disabled = false;
            }
        });
    }
    const btnNotificationsCenterHide = document.querySelector("#btnNotificationsCenterHide");
    if (btnNotificationsCenterHide) {
        btnNotificationsCenterHide.addEventListener("click", async () => {
            try {
                btnNotificationsCenterHide.disabled = true;
                await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.hide();
            }
            catch (err) {
                loggingAddEntry(`${err}`);
            }
            finally {
                btnNotificationsCenterHide.disabled = false;
            }
        });
    }
    const btnNotificationStudioOpen = document.querySelector("#btnNotificationStudioOpen");
    if (btnNotificationStudioOpen) {
        btnNotificationStudioOpen.addEventListener("click", async () => {
            try {
                btnNotificationStudioOpen.disabled = true;
                await fin.Application.startFromManifest("https://cdn.openfin.co/studio/notification/app.json");
            }
            finally {
                btnNotificationStudioOpen.disabled = false;
            }
        });
    }
}
/**
 * Initializes the notifications by registering and logging the count.
 */
async function initializeNotifications() {
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.register();
    await initializeListeners();
    console.log("Number of notifications:", await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.getNotificationsCount());
}
/**
 * Initialize the listeners for the events from the notification center.
 */
async function initializeListeners() {
    // Listen for new notifications being created
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-created", (event) => {
        loggingAddEntry(`Created: ${event.notification.id}`);
    });
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-closed", (event) => {
        loggingAddEntry(`Closed: ${event.notification.id}`);
        if (updatableNotifications[event.notification.id]) {
            delete updatableNotifications[event.notification.id];
            if (Object.keys(updatableNotifications).length === 0) {
                window.clearInterval(updatableNotificationTimer);
                updatableNotificationTimer = undefined;
            }
        }
    });
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-action", async (event) => {
        if (event?.result?.actionId === "open-web-site") {
            await fin.System.openUrlWithBrowser(event?.result?.url);
        }
        else if (event?.result?.BODY_CLICK === "dismiss_event") {
            if (event.notification?.customData?.action) {
                loggingAddEntry(`\tData: ${event?.notification?.customData ? JSON.stringify(event.notification.customData) : "None"}`);
            }
            else {
                loggingAddEntry("\tNo action");
            }
            loggingAddEntry("\tBody click dismiss");
        }
        else {
            loggingAddEntry(`\tData: ${event?.result?.customData ? JSON.stringify(event.result.customData) : "None"}`);
            loggingAddEntry(`\tTask: ${event?.result?.task ?? "None"}`);
            loggingAddEntry(`Action: ${event.notification.id}`);
        }
        console.log(event);
    });
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-toast-dismissed", (event) => {
        loggingAddEntry(`Toast Dismissed: ${event.notification.id}`);
    });
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-form-submitted", (event) => {
        loggingAddEntry(`\tData: ${event?.form ? JSON.stringify(event.form) : "None"}`);
        loggingAddEntry(`Form: ${event.notification.id}`);
        console.log(event);
    });
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notifications-count-changed", (event) => {
        showNotificationCount(event.count);
    });
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.addEventListener("notification-sound-toggled", (event) => {
        loggingAddEntry(`Sound Enabled: ${event.notificationSoundEnabled}`);
    });
    addConnectionChangedEventListener((status) => {
        if (status.connected !== connected) {
            connected = status.connected;
            connectedVersion = status.version;
            updateConnectedState();
        }
    });
}
/**
 * Generates a random UUID string.
 * @returns A randomly generated UUID.
 */
function randomUUID() {
    if ("randomUUID" in window.crypto) {
        // If the browser supports window.crypto.randomUUID, use it
        // eslint-disable-next-line no-restricted-syntax
        return window.crypto.randomUUID();
    }
    // Polyfill the window.crypto.randomUUID if we are running in a non secure context that doesn't have it
    // we are still using window.crypto.getRandomValues which is always available
    // https://stackoverflow.com/a/2117523/2800218
    /**
     * Get random hex value.
     * @param c The number to base the random value on.
     * @returns The random value.
     */
    function getRandomHex(c) {
        // eslint-disable-next-line no-bitwise
        const rnd = window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4));
        return (
        // eslint-disable-next-line no-bitwise
        (Number(c) ^ rnd).toString(16));
    }
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, getRandomHex);
}
/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry) {
    if (loggingElement) {
        loggingElement.textContent = `${entry}\n\n${loggingElement.textContent}`;
    }
}
/**
 * Update the code example with the notification.
 * @param notificationOptions The options to show in the code example.
 */
function codeShowExample(notificationOptions) {
    if (codeElement) {
        codeElement.value = JSON.stringify(notificationOptions, undefined, "  ");
    }
}
/**
 * Update the connected state on the view.
 */
function updateConnectedState() {
    loggingAddEntry(`Is Connected: ${connected}`);
    if (connected) {
        loggingAddEntry(`Connected Version: ${connectedVersion}`);
    }
    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.disabled = !connected;
    }
}
/**
 * Update the notification count on the view.
 * @param count The new count to display.
 */
function showNotificationCount(count) {
    const btnNotificationsCenterShow = document.querySelector("#btnNotificationsCenterShow");
    if (btnNotificationsCenterShow) {
        btnNotificationsCenterShow.textContent = `Show [${count}]`;
    }
}
/**
 * Display a very basic simple notification.
 */
async function showSimpleNotification() {
    const notification = {
        title: "Simple Notification",
        body: "This is a simple notification",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        soundOptions: {
            mode: "silent"
        }
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which can be dismissed by clicking on the body.
 */
async function showSimpleNotificationBodyDismiss() {
    const notification = {
        title: "Simple Notification",
        body: "This is a simple notification that be dismissed by clicking the body",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        onSelect: { BODY_CLICK: _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.ActionBodyClickType.DISMISS_EVENT }
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which can be dismissed by clicking on the body and then trigger a custom action.
 */
async function showSimpleNotificationBodyDismissAction() {
    const notification = {
        title: "Simple Notification",
        body: "This is a simple notification that be dismissed by clicking the body and trigger custom action",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        onSelect: { BODY_CLICK: _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.ActionBodyClickType.DISMISS_EVENT },
        customData: {
            action: "custom-action",
            data: {
                message: "Body click custom action"
            }
        }
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which has action buttons, the events returned will
 * be handled the the notification-action listener.
 */
async function showActionableNotification() {
    const notification = {
        title: "Actionable Notification",
        body: "This is a notification that has an action",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        buttons: [
            {
                title: "Acknowledged",
                type: "button",
                cta: true,
                onClick: {
                    task: "acknowledge-task",
                    customData: {
                        message: "This is the response data"
                    }
                }
            },
            {
                title: "Cancel",
                type: "button"
            }
        ]
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which has form fields, the data from the form will
 * be returned to the notification-form-submitted listener.
 */
async function showFormNotification() {
    const notification = {
        title: "Form Notification",
        body: "This is a notification that has form data",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        form: [
            {
                key: "amount",
                label: "Amount",
                type: "number",
                widget: {
                    type: "Number",
                    max: 100,
                    min: 1
                },
                validation: {
                    min: {
                        arg: 1,
                        invalidMessage: "Must be at least 1"
                    },
                    max: {
                        arg: 100,
                        invalidMessage: "Cannot be more than 100"
                    },
                    required: {
                        arg: true
                    }
                }
            }
        ],
        buttons: [
            {
                title: "Save",
                type: "button",
                cta: true,
                submit: true
            },
            {
                title: "Cancel",
                type: "button"
            }
        ]
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification which has form fields, the data from the form will
 * be returned to the notification-form-submitted listener.
 */
async function showFormAdvancedNotification() {
    const notification = {
        title: "Form Advanced Notification",
        body: "This is a notification that has form data",
        toast: "transient",
        category: "default",
        template: "markdown",
        id: randomUUID(),
        form: [
            {
                type: "string",
                key: "book",
                label: "Book",
                helperText: "This is used to look up for book",
                widget: {
                    type: "Text",
                    placeholder: "Book name"
                },
                validation: {
                    min: {
                        arg: 7,
                        invalidMessage: "Must be at least 7 chars long"
                    },
                    max: {
                        arg: 9,
                        invalidMessage: "Must be at most 9 chars long"
                    },
                    required: {
                        arg: true
                    }
                },
                value: "1234554"
            },
            {
                type: "time",
                key: "what_time",
                label: "Chose time?",
                helperText: "Some time choosing helper text",
                value: {
                    hour: 12
                },
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "Time"
                }
            },
            {
                type: "date",
                key: "date_pickup",
                label: "When to pick up?",
                helperText: "Some date choosing helper text",
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "Date"
                }
            },
            {
                type: "string",
                key: "book2",
                label: "Book Type",
                helperText: "This is used to look up for book",
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "Dropdown",
                    options: [
                        {
                            value: "book1",
                            label: "Book 1"
                        },
                        {
                            value: "book2",
                            label: "Book 2"
                        },
                        {
                            value: "book3",
                            label: "Book 3"
                        }
                    ]
                }
            },
            {
                type: "radioGroup",
                key: "radioGroupDemo",
                label: "Chose one",
                helperText: "Some radio choosing helper text",
                value: "option_1",
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "RadioGroup",
                    group: [
                        {
                            label: "Option 1",
                            value: "option_1"
                        },
                        {
                            label: "Option 2",
                            value: "option_2"
                        },
                        {
                            label: "Option 3",
                            value: "option_3"
                        }
                    ]
                }
            },
            {
                type: "checkboxGroup",
                key: "checkboxGroupDemo",
                label: "Chose Multiple",
                helperText: "Some checkbox choosing helper text",
                value: ["option_1", "option_2"],
                validation: {
                    required: {
                        arg: true
                    }
                },
                widget: {
                    type: "CheckboxGroup",
                    group: [
                        {
                            label: "Option 1",
                            value: "option_1"
                        },
                        {
                            label: "Option 2",
                            value: "option_2"
                        },
                        {
                            label: "Option 3",
                            value: "option_3"
                        }
                    ]
                }
            },
            {
                type: "string",
                key: "description",
                label: "Description",
                value: "very long text....",
                helperText: "This is used to look up for book",
                widget: {
                    type: "Text",
                    multiline: true,
                    placeholder: "Write description",
                    rows: 5
                }
            },
            {
                type: "number",
                key: "age",
                label: "Age",
                helperText: "This is used to look up for book",
                widget: {
                    type: "Number",
                    placeholder: "Enter age",
                    min: 1,
                    max: 8
                },
                validation: {
                    min: {
                        arg: 0
                    },
                    max: {
                        arg: 9
                    },
                    required: {
                        arg: true
                    }
                }
            }
        ],
        buttons: [
            {
                title: "Save",
                type: "button",
                cta: true,
                submit: true
            },
            {
                title: "Cancel",
                type: "button"
            }
        ]
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification that can be updated.
 */
async function showUpdatableNotification() {
    const id = randomUUID();
    const notification = {
        title: "Updatable Notification",
        body: "This is an updatable notification",
        toast: "transient",
        category: "default",
        template: "markdown",
        customData: {
            count: 0
        },
        id
    };
    if (Object.keys(updatableNotifications).length === 0) {
        updatableNotificationTimer = window.setInterval(async () => {
            for (const notificationId in updatableNotifications) {
                updatableNotifications[notificationId].customData.count++;
                const notificationUpdate = {
                    template: "markdown",
                    body: `This is an updatable notification ${updatableNotifications[notificationId].customData.count}`,
                    id: notificationId
                };
                await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.update(notificationUpdate);
            }
        }, 1000);
    }
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
    updatableNotifications[id] = notification;
}
/**
 * Show a notification with custom content.
 */
async function showCustomNotification() {
    const notification = {
        title: "Custom Notification",
        toast: "transient",
        category: "default",
        template: "custom",
        id: randomUUID(),
        templateOptions: {
            body: {
                compositions: [
                    {
                        minTemplateAPIVersion: "1",
                        layout: {
                            type: "container",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            },
                            children: [
                                {
                                    type: "text",
                                    dataKey: "subTitle",
                                    style: {
                                        fontSize: "12px",
                                        fontWeight: "bold"
                                    }
                                },
                                {
                                    type: "container",
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        {
                                            type: "text",
                                            dataKey: "firstValueTitle",
                                            style: {
                                                fontSize: "12px"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "firstValue",
                                            style: {
                                                fontSize: "14px",
                                                color: "red"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "container",
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        marginBottom: "10px"
                                    },
                                    children: [
                                        {
                                            type: "text",
                                            dataKey: "secondValueTitle",
                                            style: {
                                                fontSize: "12px"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "secondValue",
                                            style: {
                                                fontSize: "14px",
                                                color: "blue"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "image",
                                    dataKey: "exampleImageUrl",
                                    style: {
                                        height: "100px"
                                    }
                                },
                                {
                                    type: "actionableText",
                                    dataKey: "actionableUrlTitle",
                                    tooltipKey: "actionableUrlTooltip",
                                    onClick: {
                                        actionId: "open-web-site",
                                        url: "https://here.io"
                                    }
                                },
                                {
                                    type: "container",
                                    style: {
                                        display: "grid",
                                        flexDirection: "row",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        marginBottom: "10px",
                                        overflow: "auto"
                                    },
                                    children: [
                                        {
                                            type: "text",
                                            dataKey: "c0",
                                            style: {
                                                fontSize: "10px",
                                                marginBottom: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap",
                                                fontWeight: "bold",
                                                backgroundColor: "green"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "c1",
                                            style: {
                                                fontSize: "10px",
                                                marginBottom: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap",
                                                fontWeight: "bold",
                                                backgroundColor: "red"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "c2",
                                            style: {
                                                fontSize: "10px",
                                                marginBottom: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap",
                                                fontWeight: "bold",
                                                backgroundColor: "blue"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d00",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d01",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d02",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d10",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d11",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        },
                                        {
                                            type: "text",
                                            dataKey: "d12",
                                            style: {
                                                fontSize: "10px",
                                                padding: "3px",
                                                whiteSpace: "nowrap"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        templateData: {
            subTitle: "Sub Title 🚀",
            firstValueTitle: "First Value",
            firstValue: "100",
            secondValueTitle: "Second Value",
            secondValue: "200",
            c0: "Col 1",
            c1: "Col 2",
            c2: "Col 3",
            d00: "50",
            d01: "150",
            d02: "250",
            d10: "550",
            d11: "650",
            d12: "750",
            exampleImageUrl: "https://built-on-openfin.github.io/container-starter/dev/shared/navigation-history/use-notifications/images/example.png",
            actionableUrlTitle: "HERE Website",
            actionableUrlTooltip: "http://www.here.io"
        }
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Show a notification and play a sound with it.
 * @param notificationSoundUrl The url of the sounds file to play.
 */
async function showSoundNotification(notificationSoundUrl) {
    // we disable the sound if it is enabled at the Notification Center level
    const notification = {
        title: "Sound Notification",
        body: "This is a notification with sound 🔉",
        toast: "transient",
        category: "default",
        template: "markdown",
        soundOptions: { mode: "silent" },
        id: randomUUID()
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
    await playNotification(notificationSoundUrl);
}
/**
 * Get the user settings for the notification center.
 */
async function getNotificationCenterUserSettings() {
    const status = await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.getUserSettingStatus("soundEnabled" /* Notifications.UserSettings.SOUND_ENABLED */);
    loggingAddEntry(`Sound Enabled: ${status}`);
}
/**
 * Display a notification that has an indicator bar on the left.
 */
async function showIndicatorNotification() {
    const notification = {
        title: "Indicator Notification",
        toast: "transient",
        indicator: {
            text: "Limit"
        },
        category: "default",
        template: "custom",
        id: randomUUID(),
        templateOptions: {
            body: {
                compositions: [
                    {
                        minTemplateAPIVersion: "1",
                        layout: {
                            type: "container",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            },
                            children: [
                                {
                                    type: "text",
                                    dataKey: "content"
                                }
                            ]
                        }
                    }
                ]
            },
            indicator: {
                align: "left",
                color: _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.IndicatorColor.RED
            }
        },
        templateData: {
            content: "This is a custom notification with a red indicator showing to the left of the toast"
        }
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Display a notification that has an custom indicator bar color theme.
 */
async function showCustomIndicatorNotification() {
    const notification = {
        title: "Custom Indicator Notification",
        toast: "transient",
        category: "default",
        template: "custom",
        id: randomUUID(),
        templateOptions: {
            body: {
                compositions: [
                    {
                        minTemplateAPIVersion: "1",
                        layout: {
                            type: "container",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px"
                            },
                            children: [
                                {
                                    type: "text",
                                    dataKey: "content"
                                }
                            ]
                        }
                    }
                ]
            },
            indicator: {
                align: "right"
            }
        },
        indicator: {
            color: "custom-indicator",
            fallback: _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.IndicatorColor.RED,
            text: "ALERT!!!"
        },
        templateData: {
            content: "This is a custom notification with custom indicator styling"
        }
    };
    codeShowExample(notification);
    await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.create(notification);
}
/**
 * Play a sound.
 * @param notificationSoundUrl The url of the notification to play.
 */
async function playNotification(notificationSoundUrl) {
    const audio = new Audio(notificationSoundUrl);
    await audio.play();
}
/**
 * Add a listener which checks for the connection changed event.
 * @param callback The callback to call when the connection state changes.
 */
function addConnectionChangedEventListener(callback) {
    if (statusIntervalId === undefined) {
        statusIntervalId = window.setInterval(async () => {
            const status = await _openfin_notifications__WEBPACK_IMPORTED_MODULE_0__.provider.getStatus();
            if (status.connected !== lastConnectionStatus) {
                lastConnectionStatus = status.connected;
                callback(status);
            }
        }, 1000);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQixDQUFDO1FBQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1YsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvLi4vLi4vbm9kZV9tb2R1bGVzL0BvcGVuZmluL25vdGlmaWNhdGlvbnMvZGlzdC9jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29udGFpbmVyLXVzZS1ub3RpZmljYXRpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb250YWluZXItdXNlLW5vdGlmaWNhdGlvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbnRhaW5lci11c2Utbm90aWZpY2F0aW9ucy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0c1tcImhlcmUtbm90aWZpY2F0aW9ucy1jbGllbnRcIl09dCgpOmVbXCJoZXJlLW5vdGlmaWNhdGlvbnMtY2xpZW50XCJdPXQoKX0odGhpcywoKCk9PigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXsyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9bik7dmFyIG89T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LG4pO28mJiEoXCJnZXRcImluIG8/IXQuX19lc01vZHVsZTpvLndyaXRhYmxlfHxvLmNvbmZpZ3VyYWJsZSl8fChvPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0W25dfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGksbyl9OmZ1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pLGVbaV09dFtuXX0pLG89dGhpcyYmdGhpcy5fX2V4cG9ydFN0YXJ8fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCI9PT1ufHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKXx8aSh0LGUsbil9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8obig2MzcpLHQpLG8obigxNTUpLHQpfSw3OmU9Pnt2YXIgdCxuPVwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0P1JlZmxlY3Q6bnVsbCxpPW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4uYXBwbHk/bi5hcHBseTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGUsdCxuKX07dD1uJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLm93bktleXM/bi5vd25LZXlzOk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM/ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpKX06ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpfTt2YXIgbz1OdW1iZXIuaXNOYU58fGZ1bmN0aW9uKGUpe3JldHVybiBlIT1lfTtmdW5jdGlvbiByKCl7ci5pbml0LmNhbGwodGhpcyl9ZS5leHBvcnRzPXIsZS5leHBvcnRzLm9uY2U9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4saSl7ZnVuY3Rpb24gbyhuKXtlLnJlbW92ZUxpc3RlbmVyKHQsciksaShuKX1mdW5jdGlvbiByKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZS5yZW1vdmVMaXN0ZW5lciYmZS5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsbyksbihbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfWcoZSx0LHIse29uY2U6ITB9KSxcImVycm9yXCIhPT10JiZmdW5jdGlvbihlLHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUub24mJmcoZSxcImVycm9yXCIsdCx7b25jZTohMH0pfShlLG8pfSkpfSxyLkV2ZW50RW1pdHRlcj1yLHIucHJvdG90eXBlLl9ldmVudHM9dm9pZCAwLHIucHJvdG90eXBlLl9ldmVudHNDb3VudD0wLHIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnM9dm9pZCAwO3ZhciBhPTEwO2Z1bmN0aW9uIHMoZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnK3R5cGVvZiBlKX1mdW5jdGlvbiBjKGUpe3JldHVybiB2b2lkIDA9PT1lLl9tYXhMaXN0ZW5lcnM/ci5kZWZhdWx0TWF4TGlzdGVuZXJzOmUuX21heExpc3RlbmVyc31mdW5jdGlvbiBsKGUsdCxuLGkpe3ZhciBvLHIsYSxsO2lmKHMobiksdm9pZCAwPT09KHI9ZS5fZXZlbnRzKT8ocj1lLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSxlLl9ldmVudHNDb3VudD0wKToodm9pZCAwIT09ci5uZXdMaXN0ZW5lciYmKGUuZW1pdChcIm5ld0xpc3RlbmVyXCIsdCxuLmxpc3RlbmVyP24ubGlzdGVuZXI6bikscj1lLl9ldmVudHMpLGE9clt0XSksdm9pZCAwPT09YSlhPXJbdF09biwrK2UuX2V2ZW50c0NvdW50O2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYT9hPXJbdF09aT9bbixhXTpbYSxuXTppP2EudW5zaGlmdChuKTphLnB1c2gobiksKG89YyhlKSk+MCYmYS5sZW5ndGg+byYmIWEud2FybmVkKXthLndhcm5lZD0hMDt2YXIgdT1uZXcgRXJyb3IoXCJQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuIFwiK2EubGVuZ3RoK1wiIFwiK1N0cmluZyh0KStcIiBsaXN0ZW5lcnMgYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0XCIpO3UubmFtZT1cIk1heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZ1wiLHUuZW1pdHRlcj1lLHUudHlwZT10LHUuY291bnQ9YS5sZW5ndGgsbD11LGNvbnNvbGUmJmNvbnNvbGUud2FybiYmY29uc29sZS53YXJuKGwpfXJldHVybiBlfWZ1bmN0aW9uIHUoKXtpZighdGhpcy5maXJlZClyZXR1cm4gdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLHRoaXMud3JhcEZuKSx0aGlzLmZpcmVkPSEwLDA9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk6dGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCxhcmd1bWVudHMpfWZ1bmN0aW9uIGQoZSx0LG4pe3ZhciBpPXtmaXJlZDohMSx3cmFwRm46dm9pZCAwLHRhcmdldDplLHR5cGU6dCxsaXN0ZW5lcjpufSxvPXUuYmluZChpKTtyZXR1cm4gby5saXN0ZW5lcj1uLGkud3JhcEZuPW8sb31mdW5jdGlvbiBmKGUsdCxuKXt2YXIgaT1lLl9ldmVudHM7aWYodm9pZCAwPT09aSlyZXR1cm5bXTt2YXIgbz1pW3RdO3JldHVybiB2b2lkIDA9PT1vP1tdOlwiZnVuY3Rpb25cIj09dHlwZW9mIG8/bj9bby5saXN0ZW5lcnx8b106W29dOm4/ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PW5ldyBBcnJheShlLmxlbmd0aCksbj0wO248dC5sZW5ndGg7KytuKXRbbl09ZVtuXS5saXN0ZW5lcnx8ZVtuXTtyZXR1cm4gdH0obyk6dihvLG8ubGVuZ3RoKX1mdW5jdGlvbiBwKGUpe3ZhciB0PXRoaXMuX2V2ZW50cztpZih2b2lkIDAhPT10KXt2YXIgbj10W2VdO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pcmV0dXJuIDE7aWYodm9pZCAwIT09bilyZXR1cm4gbi5sZW5ndGh9cmV0dXJuIDB9ZnVuY3Rpb24gdihlLHQpe2Zvcih2YXIgbj1uZXcgQXJyYXkodCksaT0wO2k8dDsrK2kpbltpXT1lW2ldO3JldHVybiBufWZ1bmN0aW9uIGcoZSx0LG4saSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZS5vbilpLm9uY2U/ZS5vbmNlKHQsbik6ZS5vbih0LG4pO2Vsc2V7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZS5hZGRFdmVudExpc3RlbmVyKXRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIGUpO2UuYWRkRXZlbnRMaXN0ZW5lcih0LChmdW5jdGlvbiBvKHIpe2kub25jZSYmZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbyksbihyKX0pKX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGF9LHNldDpmdW5jdGlvbihlKXtpZihcIm51bWJlclwiIT10eXBlb2YgZXx8ZTwwfHxvKGUpKXRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJytlK1wiLlwiKTthPWV9fSksci5pbml0PWZ1bmN0aW9uKCl7dm9pZCAwIT09dGhpcy5fZXZlbnRzJiZ0aGlzLl9ldmVudHMhPT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50c3x8KHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTApLHRoaXMuX21heExpc3RlbmVycz10aGlzLl9tYXhMaXN0ZW5lcnN8fHZvaWQgMH0sci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzPWZ1bmN0aW9uKGUpe2lmKFwibnVtYmVyXCIhPXR5cGVvZiBlfHxlPDB8fG8oZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnK2UrXCIuXCIpO3JldHVybiB0aGlzLl9tYXhMaXN0ZW5lcnM9ZSx0aGlzfSxyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnM9ZnVuY3Rpb24oKXtyZXR1cm4gYyh0aGlzKX0sci5wcm90b3R5cGUuZW1pdD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9W10sbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdC5wdXNoKGFyZ3VtZW50c1tuXSk7dmFyIG89XCJlcnJvclwiPT09ZSxyPXRoaXMuX2V2ZW50cztpZih2b2lkIDAhPT1yKW89byYmdm9pZCAwPT09ci5lcnJvcjtlbHNlIGlmKCFvKXJldHVybiExO2lmKG8pe3ZhciBhO2lmKHQubGVuZ3RoPjAmJihhPXRbMF0pLGEgaW5zdGFuY2VvZiBFcnJvcil0aHJvdyBhO3ZhciBzPW5ldyBFcnJvcihcIlVuaGFuZGxlZCBlcnJvci5cIisoYT9cIiAoXCIrYS5tZXNzYWdlK1wiKVwiOlwiXCIpKTt0aHJvdyBzLmNvbnRleHQ9YSxzfXZhciBjPXJbZV07aWYodm9pZCAwPT09YylyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBjKWkoYyx0aGlzLHQpO2Vsc2V7dmFyIGw9Yy5sZW5ndGgsdT12KGMsbCk7Zm9yKG49MDtuPGw7KytuKWkodVtuXSx0aGlzLHQpfXJldHVybiEwfSxyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3JldHVybiBsKHRoaXMsZSx0LCExKX0sci5wcm90b3R5cGUub249ci5wcm90b3R5cGUuYWRkTGlzdGVuZXIsci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGwodGhpcyxlLHQsITApfSxyLnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHModCksdGhpcy5vbihlLGQodGhpcyxlLHQpKSx0aGlzfSxyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHModCksdGhpcy5wcmVwZW5kTGlzdGVuZXIoZSxkKHRoaXMsZSx0KSksdGhpc30sci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXt2YXIgbixpLG8scixhO2lmKHModCksdm9pZCAwPT09KGk9dGhpcy5fZXZlbnRzKSlyZXR1cm4gdGhpcztpZih2b2lkIDA9PT0obj1pW2VdKSlyZXR1cm4gdGhpcztpZihuPT09dHx8bi5saXN0ZW5lcj09PXQpMD09LS10aGlzLl9ldmVudHNDb3VudD90aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKTooZGVsZXRlIGlbZV0saS5yZW1vdmVMaXN0ZW5lciYmdGhpcy5lbWl0KFwicmVtb3ZlTGlzdGVuZXJcIixlLG4ubGlzdGVuZXJ8fHQpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pe2ZvcihvPS0xLHI9bi5sZW5ndGgtMTtyPj0wO3ItLSlpZihuW3JdPT09dHx8bltyXS5saXN0ZW5lcj09PXQpe2E9bltyXS5saXN0ZW5lcixvPXI7YnJlYWt9aWYobzwwKXJldHVybiB0aGlzOzA9PT1vP24uc2hpZnQoKTpmdW5jdGlvbihlLHQpe2Zvcig7dCsxPGUubGVuZ3RoO3QrKyllW3RdPWVbdCsxXTtlLnBvcCgpfShuLG8pLDE9PT1uLmxlbmd0aCYmKGlbZV09blswXSksdm9pZCAwIT09aS5yZW1vdmVMaXN0ZW5lciYmdGhpcy5lbWl0KFwicmVtb3ZlTGlzdGVuZXJcIixlLGF8fHQpfXJldHVybiB0aGlzfSxyLnByb3RvdHlwZS5vZmY9ci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIsci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3ZhciB0LG4saTtpZih2b2lkIDA9PT0obj10aGlzLl9ldmVudHMpKXJldHVybiB0aGlzO2lmKHZvaWQgMD09PW4ucmVtb3ZlTGlzdGVuZXIpcmV0dXJuIDA9PT1hcmd1bWVudHMubGVuZ3RoPyh0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wKTp2b2lkIDAhPT1uW2VdJiYoMD09LS10aGlzLl9ldmVudHNDb3VudD90aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKTpkZWxldGUgbltlXSksdGhpcztpZigwPT09YXJndW1lbnRzLmxlbmd0aCl7dmFyIG8scj1PYmplY3Qua2V5cyhuKTtmb3IoaT0wO2k8ci5sZW5ndGg7KytpKVwicmVtb3ZlTGlzdGVuZXJcIiE9PShvPXJbaV0pJiZ0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhvKTtyZXR1cm4gdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoXCJyZW1vdmVMaXN0ZW5lclwiKSx0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wLHRoaXN9aWYoXCJmdW5jdGlvblwiPT10eXBlb2YodD1uW2VdKSl0aGlzLnJlbW92ZUxpc3RlbmVyKGUsdCk7ZWxzZSBpZih2b2lkIDAhPT10KWZvcihpPXQubGVuZ3RoLTE7aT49MDtpLS0pdGhpcy5yZW1vdmVMaXN0ZW5lcihlLHRbaV0pO3JldHVybiB0aGlzfSxyLnByb3RvdHlwZS5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuIGYodGhpcyxlLCEwKX0sci5wcm90b3R5cGUucmF3TGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3JldHVybiBmKHRoaXMsZSwhMSl9LHIubGlzdGVuZXJDb3VudD1mdW5jdGlvbihlLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUubGlzdGVuZXJDb3VudD9lLmxpc3RlbmVyQ291bnQodCk6cC5jYWxsKGUsdCl9LHIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQ9cCxyLnByb3RvdHlwZS5ldmVudE5hbWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50PjA/dCh0aGlzLl9ldmVudHMpOltdfX0sMzY6KGUsdCxuKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuTG9nPXZvaWQgMDtjb25zdCBpPW4oMzI5KTtjbGFzcyBve3N0YXRpYyBhc3luYyBlcnJvcihlKXt0cnl7Y29uc3QgdD1vLmdldFByZWZpeGVkTWVzc2FnZShlKTtjb25zb2xlLmVycm9yKHQpLGF3YWl0IGkuZmluQ29udGV4dC5TeXN0ZW0ubG9nKFwiZXJyb3JcIix0KX1jYXRjaChlKXtvLmhhbmRsZUVycm9yKGUsXCJGYWlsZWQgdG8gbG9nIGVycm9yXCIpfX1zdGF0aWMgYXN5bmMgd2FybihlKXt0cnl7Y29uc3QgdD1vLmdldFByZWZpeGVkTWVzc2FnZShlKTtjb25zb2xlLndhcm4odCksYXdhaXQgaS5maW5Db250ZXh0LlN5c3RlbS5sb2coXCJ3YXJuaW5nXCIsdCl9Y2F0Y2goZSl7by5oYW5kbGVFcnJvcihlLFwiRmFpbGVkIHRvIGxvZyB3YXJuaW5nXCIpfX1zdGF0aWMgYXN5bmMgaW5mbyhlKXt0cnl7Y29uc3QgdD1vLmdldFByZWZpeGVkTWVzc2FnZShlKTtjb25zb2xlLmluZm8odCksYXdhaXQgaS5maW5Db250ZXh0LlN5c3RlbS5sb2coXCJpbmZvXCIsdCl9Y2F0Y2goZSl7by5oYW5kbGVFcnJvcihlLFwiRmFpbGVkIHRvIGxvZyBpbmZvXCIpfX1zdGF0aWMgZ2V0UHJlZml4ZWRNZXNzYWdlKGUpe3JldHVybmAke28uTE9HX1BSRUZJWH0gJHtlfWB9c3RhdGljIGhhbmRsZUVycm9yKGUsdCl7ZSBpbnN0YW5jZW9mIEVycm9yP2NvbnNvbGUuZXJyb3IoYCR7dH0gLSAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApOmNvbnNvbGUuZXJyb3IoYCR7dH0gLSAke0pTT04uc3RyaW5naWZ5KGUpfWApfX10LkxvZz1vLG8uTE9HX1BSRUZJWD1cIltAb3BlbmZpbi9ub3RpZmljYXRpb25zXVwifSw4OTooZSx0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRGVmZXJyZWRQcm9taXNlPWNsYXNze2NvbnN0cnVjdG9yKCl7Y29uc3QgZT1uZXcgUHJvbWlzZSgoKGUsdCk9Pnt0aGlzLl9yZXNvbHZlPWUsdGhpcy5fcmVqZWN0PXR9KSk7dGhpcy5fcHJvbWlzZT1lfWdldCBwcm9taXNlKCl7cmV0dXJuIHRoaXMuX3Byb21pc2V9Z2V0IHJlc29sdmUoKXtyZXR1cm4gdGhpcy5fcmVzb2x2ZX1nZXQgcmVqZWN0KCl7cmV0dXJuIHRoaXMuX3JlamVjdH19fSw5MzooZSx0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSw5NjooZSx0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSwxMzQ6KGUsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sMTU1OihlLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5XaWRnZXRUeXBlPXQuVGltZVdpZGdldFR5cGU9dC5EYXRlV2lkZ2V0VHlwZT10LlJhZGlvR3JvdXBXaWRnZXRUeXBlPXQuQ2hlY2tib3hHcm91cFdpZGdldFR5cGU9dC5Cb29sZWFuV2lkZ2V0VHlwZT10Lk51bWJlcldpZGdldFR5cGU9dC5TdHJpbmdXaWRnZXRUeXBlPXZvaWQgMCx0LlN0cmluZ1dpZGdldFR5cGU9e1RleHQ6XCJUZXh0XCIsRHJvcGRvd246XCJEcm9wZG93blwifSx0Lk51bWJlcldpZGdldFR5cGU9e051bWJlcjpcIk51bWJlclwifSx0LkJvb2xlYW5XaWRnZXRUeXBlPXtUb2dnbGU6XCJUb2dnbGVcIixDaGVja2JveDpcIkNoZWNrYm94XCJ9LHQuQ2hlY2tib3hHcm91cFdpZGdldFR5cGU9e0NoZWNrYm94R3JvdXA6XCJDaGVja2JveEdyb3VwXCJ9LHQuUmFkaW9Hcm91cFdpZGdldFR5cGU9e1JhZGlvR3JvdXA6XCJSYWRpb0dyb3VwXCJ9LHQuRGF0ZVdpZGdldFR5cGU9e0RhdGU6XCJEYXRlXCJ9LHQuVGltZVdpZGdldFR5cGU9e1RpbWU6XCJUaW1lXCJ9LHQuV2lkZ2V0VHlwZT1PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQuU3RyaW5nV2lkZ2V0VHlwZSksdC5OdW1iZXJXaWRnZXRUeXBlKSx0LkJvb2xlYW5XaWRnZXRUeXBlKSx0LkNoZWNrYm94R3JvdXBXaWRnZXRUeXBlKSx0LlJhZGlvR3JvdXBXaWRnZXRUeXBlKSx0LkRhdGVXaWRnZXRUeXBlKSx0LlRpbWVXaWRnZXRUeXBlKX0sMTU4OihlLHQpPT57dmFyIG47T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5BY3Rpb25Cb2R5Q2xpY2tUeXBlPXQuQWN0aW9uTm9vcFR5cGU9dC5BY3Rpb25UcmlnZ2VyPXZvaWQgMCwobj10LkFjdGlvblRyaWdnZXJ8fCh0LkFjdGlvblRyaWdnZXI9e30pKS5DT05UUk9MPVwiY29udHJvbFwiLG4uU0VMRUNUPVwic2VsZWN0XCIsbi5DTE9TRT1cImNsb3NlXCIsbi5FWFBJUkU9XCJleHBpcmVcIixuLlBST0dSQU1NQVRJQz1cInByb2dyYW1tYXRpY1wiLCh0LkFjdGlvbk5vb3BUeXBlfHwodC5BY3Rpb25Ob29wVHlwZT17fSkpLkVWRU5UX0RJU01JU1M9XCJldmVudF9kaXNtaXNzXCIsKHQuQWN0aW9uQm9keUNsaWNrVHlwZXx8KHQuQWN0aW9uQm9keUNsaWNrVHlwZT17fSkpLkRJU01JU1NfRVZFTlQ9XCJkaXNtaXNzX2V2ZW50XCJ9LDE2NjooZSx0LG4pPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5jb25uZWN0QXNFeHRlcm5hbENsaWVudD10LmV4dGVybmFsRGlzcGF0Y2hNZXRob2Q9dm9pZCAwO2NvbnN0IGk9big0NzEpO2xldCBvO3QuZXh0ZXJuYWxEaXNwYXRjaE1ldGhvZD1hc3luYyhlLHQpPT57aWYoIW8pdGhyb3cgbmV3IEVycm9yKFwiTm90IGNvbm5lY3RlZCB0byB0aGUgbm90aWZpY2F0aW9uIGNlbnRlci4gRGlkIHlvdSBjYWxsIGNvbm5lY3RUb05vdGlmaWNhdGlvbnMoKT8uXCIpO3JldHVybiBvLmRpc3BhdGNoKGUsdCl9LHQuY29ubmVjdEFzRXh0ZXJuYWxDbGllbnQ9YXN5bmMgZnVuY3Rpb24oZSl7Y29uc3R7ZXh0ZXJuYWxQcm92aWRlckNvbmZpZzp0fT1lLG49e2lkOnQuaWQsdGl0bGU6dC50aXRsZSxpY29uOnQuaWNvbn07Y29uc29sZS5sb2coXCJDb25uZWN0aW5nIHRvIHRoZSBOb3RpZmljYXRpb24gQ2VudGVyLi4uXCIpLG89YXdhaXQgdC5maW5Db250ZXh0LkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KHQuc2VydmljZUlkLHt3YWl0OiEwLHBheWxvYWQ6e3ZlcnNpb246XCIyLjEzLjFcIixwcm92aWRlckluZm86bn19KSxjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byB0aGUgTm90aWZpY2F0aW9uIENlbnRlci5cIik7Y29uc3Qgcj0oMCxpLmdldEV2ZW50Um91dGVyKSgpO28uc2V0RGVmYXVsdEFjdGlvbigoKCk9PiExKSksby5yZWdpc3RlcihcIldBUk5cIiwoZT0+Y29uc29sZS53YXJuKGUpKSksby5yZWdpc3RlcihcImV2ZW50XCIsKGU9PntyLmRpc3BhdGNoRXZlbnQoZSl9KSksby5vbkRpc2Nvbm5lY3Rpb24oKCgpPT57Y29uc29sZS53YXJuKFwiRGlzY29ubmVjdGVkIGZyb20gdGhlIE5vdGlmaWNhdGlvbiBDZW50ZXJcIiksbz1udWxsLHNldFRpbWVvdXQoKCgpPT57Y29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIHJlY29ubmVjdCB0byB0aGUgTm90aWZpY2F0aW9uIENlbnRlclwiKSxlLnJldHJ5KGUpfSksMzAwKX0pKX19LDIxNzpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5pc0Nvbm5lY3RlZFRvQXRMZWFzdD10LmdldFN0YXR1cz12b2lkIDA7Y29uc3Qgbz1pKG4oNjY3KSkscj1uKDc4NSksYT1uKDkwMikscz1uKDM0OSk7ZnVuY3Rpb24gYygpe3JldHVybigwLHIud2l0aFN0cmljdFRpbWVvdXQpKDUwMCwoMCxhLnRyeVNlcnZpY2VEaXNwYXRjaCkocy5BUElUb3BpYy5HRVRfUFJPVklERVJfU1RBVFVTLHZvaWQgMCksXCJcIikuY2F0Y2goKCgpPT4oe2Nvbm5lY3RlZDohMSx2ZXJzaW9uOm51bGwsdGVtcGxhdGVBUElWZXJzaW9uOm51bGx9KSkpfXQuZ2V0U3RhdHVzPWMsdC5pc0Nvbm5lY3RlZFRvQXRMZWFzdD1hc3luYyBmdW5jdGlvbihlKXtjb25zdCB0PWF3YWl0IGMoKTtpZih0LmNvbm5lY3RlZCYmbnVsbCE9PXQudmVyc2lvbil7Y29uc3Qgbj0oMCxvLmRlZmF1bHQpKHQudmVyc2lvbixlKTtpZigwPT09bnx8MT09PW4pcmV0dXJuITB9cmV0dXJuITF9fSwzMTI6KGUsdCxuKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZXh0cmFjdENvbmZpZ0Zyb21NYW5pZmVzdD12b2lkIDA7Y29uc3QgaT1uKDM2KTt0LmV4dHJhY3RDb25maWdGcm9tTWFuaWZlc3Q9YXN5bmMgZnVuY3Rpb24oKXt0cnl7Y29uc3QgZT1hd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKS5nZXRNYW5pZmVzdCgpO2lmKCEobnVsbD09ZT92b2lkIDA6ZS5ub3RpZmljYXRpb25zKSlyZXR1cm47Y29uc3R7Y3VzdG9tTWFuaWZlc3Q6dCxyb3V0aW5nT3B0aW9uczpufT1lLm5vdGlmaWNhdGlvbnM7cmV0dXJuKG51bGw9PW4/dm9pZCAwOm4ucm91dGVyQ2hhbm5lbE5hbWUpPyhpLkxvZy5pbmZvKFwiUm91dGluZyBvcHRpb24gZGV0ZWN0ZWQgaW4gbWFuaWZlc3QuIFVzaW5nIHJvdXRlciBjb25maWd1cmF0aW9uLlwiKSx7cm91dGluZ09wdGlvbnM6bn0pOihpLkxvZy5pbmZvKFwiQ3VzdG9tIG1hbmlmZXN0IG9wdGlvbiBkZXRlY3RlZCBpbiBtYW5pZmVzdC4gVXNpbmcgY3VzdG9tIG1hbmlmZXN0IGNvbmZpZ3VyYXRpb24uXCIpLHtjdXN0b21NYW5pZmVzdDp0fSl9Y2F0Y2goZSl7cmV0dXJufX19LDMyOTooZSx0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuc2V0RmluQ29udGV4dD10LmZpbkNvbnRleHQ9dm9pZCAwLHQuc2V0RmluQ29udGV4dD1lPT57dC5maW5Db250ZXh0PWV9fSwzNDk6KGUsdCk9Pnt2YXIgbjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmV2ZW50VHlwZXM9dC5BUElUb3BpYz10LmdldENoYW5uZWxOYW1lPXQuU0VSVklDRV9DSEFOTkVMPXQuU0VSVklDRV9JREVOVElUWT12b2lkIDAsdC5TRVJWSUNFX0lERU5USVRZPXt1dWlkOlwibm90aWZpY2F0aW9ucy1zZXJ2aWNlXCIsbmFtZTpcIm5vdGlmaWNhdGlvbnMtc2VydmljZVwifSx0LlNFUlZJQ0VfQ0hBTk5FTD1cIm9mLW5vdGlmaWNhdGlvbnMtc2VydmljZS12MVwiLHQuZ2V0Q2hhbm5lbE5hbWU9ZT0+ZT09PXQuU0VSVklDRV9JREVOVElUWS51dWlkP3QuU0VSVklDRV9DSEFOTkVMOmAke2V9LSR7dC5TRVJWSUNFX0NIQU5ORUx9YCwobj10LkFQSVRvcGljfHwodC5BUElUb3BpYz17fSkpLkNSRUFURV9OT1RJRklDQVRJT049XCJjcmVhdGUtbm90aWZpY2F0aW9uXCIsbi5VUERBVEVfTk9USUZJQ0FUSU9OPVwidXBkYXRlLW5vdGlmaWNhdGlvblwiLG4uQ0xFQVJfTk9USUZJQ0FUSU9OPVwiY2xlYXItbm90aWZpY2F0aW9uXCIsbi5TRVRfUkVNSU5ERVI9XCJzZXQtcmVtaW5kZXJcIixuLkNBTkNFTF9SRU1JTkRFUj1cImNhbmNlbC1yZW1pbmRlclwiLG4uR0VUX0FQUF9OT1RJRklDQVRJT05TPVwiZmV0Y2gtYXBwLW5vdGlmaWNhdGlvbnNcIixuLkNMRUFSX0FQUF9OT1RJRklDQVRJT05TPVwiY2xlYXItYXBwLW5vdGlmaWNhdGlvbnNcIixuLlRPR0dMRV9OT1RJRklDQVRJT05fQ0VOVEVSPVwidG9nZ2xlLW5vdGlmaWNhdGlvbi1jZW50ZXJcIixuLkFERF9FVkVOVF9MSVNURU5FUj1cImFkZC1ldmVudC1saXN0ZW5lclwiLG4uUkVNT1ZFX0VWRU5UX0xJU1RFTkVSPVwicmVtb3ZlLWV2ZW50LWxpc3RlbmVyXCIsbi5HRVRfUFJPVklERVJfU1RBVFVTPVwiZ2V0LXByb3ZpZGVyLXN0YXR1c1wiLG4uR0VUX05PVElGSUNBVElPTlNfQ09VTlQ9XCJnZXQtbm90aWZpY2F0aW9ucy1jb3VudFwiLG4uU0hPV19OT1RJRklDQVRJT05fQ0VOVEVSPVwic2hvdy1ub3RpZmljYXRpb24tY2VudGVyXCIsbi5ISURFX05PVElGSUNBVElPTl9DRU5URVI9XCJoaWRlLW5vdGlmaWNhdGlvbi1jZW50ZXJcIixuLlJFR0lTVEVSX1BMQVRGT1JNPVwicmVnaXN0ZXItbm90aWZpY2F0aW9ucy1wbGF0Zm9ybVwiLG4uREVSRUdJU1RFUl9QTEFURk9STT1cImRlcmVnaXN0ZXItbm90aWZpY2F0aW9ucy1wbGF0Zm9ybVwiLG4uU0VUX0ZPUk1fU1RBVFVTX09QVElPTlM9XCJzZXQtZm9ybS1zdGF0dXMtb3B0aW9uc1wiLG4uU0VUX0ZPUk1fVkFMSURBVElPTl9FUlJPUlM9XCJzZXQtZm9ybS12YWxpZGF0aW9uLWVycm9yc1wiLG4uR0VUX1VTRVJfU0VUVElOR1NfU1RBVFVTPVwiZ2V0LXVzZXItc2V0dGluZ3Mtc3RhdHVzXCIsbi5TRVRfREVGQVVMVF9QTEFURk9STV9TSE9SVENVVD1cInNldC1kZWZhdWx0LXBsYXRmb3JtLXNob3J0Y3V0XCIsbi5TRVRfTk9USUZJQ0FUSU9OX1NFQ1VSSVRZX1JVTEU9XCJzZXQtbm90aWZpY2F0aW9uLXNlY3VyaXR5LXJ1bGVcIix0LmV2ZW50VHlwZXM9W1wibm90aWZpY2F0aW9uLWNyZWF0ZWRcIixcIm5vdGlmaWNhdGlvbi1jbG9zZWRcIixcIm5vdGlmaWNhdGlvbi1hY3Rpb25cIixcIm5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZFwiLFwibm90aWZpY2F0aW9uLWZvcm0tdmFsdWVzLWNoYW5nZWRcIixcIm5vdGlmaWNhdGlvbnMtY291bnQtY2hhbmdlZFwiLFwibm90aWZpY2F0aW9uLXNvdW5kLXRvZ2dsZWRcIixcIm5vdGlmaWNhdGlvbi1yZW1pbmRlci1jcmVhdGVkXCIsXCJub3RpZmljYXRpb24tcmVtaW5kZXItcmVtb3ZlZFwiLFwibm90aWZpY2F0aW9uLXRvYXN0LWRpc21pc3NlZFwiXX0sNDAzOihlLHQpPT57dmFyIG4saTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkluZGljYXRvckNvbG9yPXQuSW5kaWNhdG9yVHlwZT12b2lkIDAsKGk9dC5JbmRpY2F0b3JUeXBlfHwodC5JbmRpY2F0b3JUeXBlPXt9KSkuRkFJTFVSRT1cImZhaWx1cmVcIixpLldBUk5JTkc9XCJ3YXJuaW5nXCIsaS5TVUNDRVNTPVwic3VjY2Vzc1wiLChuPXQuSW5kaWNhdG9yQ29sb3J8fCh0LkluZGljYXRvckNvbG9yPXt9KSkuUkVEPVwicmVkXCIsbi5HUkVFTj1cImdyZWVuXCIsbi5ZRUxMT1c9XCJ5ZWxsb3dcIixuLkJMVUU9XCJibHVlXCIsbi5QVVJQTEU9XCJwdXJwbGVcIixuLkdSQVk9XCJncmF5XCIsbi5PUkFOR0U9XCJvcmFuZ2VcIixuLk1BR0VOVEE9XCJtYWdlbnRhXCIsbi5URUFMPVwidGVhbFwifSw0MDU6ZnVuY3Rpb24oZSx0LG4pe3ZhciBpPXRoaXMmJnRoaXMuX19jcmVhdGVCaW5kaW5nfHwoT2JqZWN0LmNyZWF0ZT9mdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKTt2YXIgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsbik7byYmIShcImdldFwiaW4gbz8hdC5fX2VzTW9kdWxlOm8ud3JpdGFibGV8fG8uY29uZmlndXJhYmxlKXx8KG89e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbbl19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSxvKX06ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9biksZVtpXT10W25dfSksbz10aGlzJiZ0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdHx8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSl9OmZ1bmN0aW9uKGUsdCl7ZS5kZWZhdWx0PXR9KSxyPXRoaXMmJnRoaXMuX19pbXBvcnRTdGFyfHxmdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSlcImRlZmF1bHRcIiE9PW4mJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZpKHQsZSxuKTtyZXR1cm4gbyh0LGUpLHR9LGE9dGhpcyYmdGhpcy5fX2V4cG9ydFN0YXJ8fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCI9PT1ufHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKXx8aSh0LGUsbil9LHM9dGhpcyYmdGhpcy5fX3Jlc3R8fGZ1bmN0aW9uKGUsdCl7dmFyIG49e307Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJnQuaW5kZXhPZihpKTwwJiYobltpXT1lW2ldKTtpZihudWxsIT1lJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihpPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxpLmxlbmd0aDtvKyspdC5pbmRleE9mKGlbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLGlbb10pJiYobltpW29dXT1lW2lbb11dKX1yZXR1cm4gbn07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5zZXRBbGxvd2VkT3JpZ2lucz10LmdldFVzZXJTZXR0aW5nU3RhdHVzPXQuVXNlclNldHRpbmdzPXQuZ2V0Tm90aWZpY2F0aW9uc0NvdW50PXQuaGlkZT10LnNob3c9dC5zZXREZWZhdWx0UGxhdGZvcm1TaG9ydGN1dD10LnRvZ2dsZU5vdGlmaWNhdGlvbkNlbnRlcj10LmNsZWFyQWxsPXQuZ2V0QWxsPXQuY2FuY2VsUmVtaW5kZXI9dC5zZXRSZW1pbmRlcj10LmNsZWFyPXQudXBkYXRlPXQuY3JlYXRlPXQucmVtb3ZlRXZlbnRMaXN0ZW5lcj10LmFkZEV2ZW50TGlzdGVuZXI9dC5WRVJTSU9OPXQuTm90aWZpY2F0aW9uSW5kaWNhdG9yVHlwZT10LkluZGljYXRvckNvbG9yPXQuTm90aWZpY2F0aW9uSW5kaWNhdG9yV2l0aEN1c3RvbUNvbG9yPXQuTm90aWZpY2F0aW9uSW5kaWNhdG9yPXQuTm90aWZpY2F0aW9uT3B0aW9ucz10LnByb3ZpZGVyPXQuYWN0aW9ucz12b2lkIDA7Y29uc3QgYz1uKDE1OCksbD1uKDkwMiksdT1uKDM0OSksZD1uKDQ3MSksZj1yKG4oMjE3KSk7dC5wcm92aWRlcj1mO2NvbnN0IHA9big4NTUpLHY9big0MDMpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiTm90aWZpY2F0aW9uSW5kaWNhdG9yXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHYuTm90aWZpY2F0aW9uSW5kaWNhdG9yfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiTm90aWZpY2F0aW9uSW5kaWNhdG9yV2l0aEN1c3RvbUNvbG9yXCIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHYuTm90aWZpY2F0aW9uSW5kaWNhdG9yV2l0aEN1c3RvbUNvbG9yfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiTm90aWZpY2F0aW9uSW5kaWNhdG9yVHlwZVwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2LkluZGljYXRvclR5cGV9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJJbmRpY2F0b3JDb2xvclwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB2LkluZGljYXRvckNvbG9yfX0pO2NvbnN0IGc9big5NjUpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiTm90aWZpY2F0aW9uT3B0aW9uc1wiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBnLk5vdGlmaWNhdGlvbk9wdGlvbnN9fSk7Y29uc3QgbT1yKG4oMTU4KSk7dC5hY3Rpb25zPW0sYShuKDE1OCksdCksYShuKDU3OCksdCksYShuKDkzKSx0KSxhKG4oMiksdCksYShuKDUyMCksdCksYShuKDk2KSx0KSxhKG4oNDcwKSx0KSx0LlZFUlNJT049XCIyLjEzLjFcIjtjb25zdCBoPSgwLGQuZ2V0RXZlbnRSb3V0ZXIpKCk7ZnVuY3Rpb24geShlKXtjb25zdHtub3RpZmljYXRpb246dH09ZTtyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtub3RpZmljYXRpb246T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHtkYXRlOm5ldyBEYXRlKHQuZGF0ZSksZXhwaXJlczpudWxsIT09dC5leHBpcmVzP25ldyBEYXRlKHQuZXhwaXJlcyk6bnVsbH0pfSl9aC5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1jcmVhdGVkXCIsKGU9PnkoZSkpKSxoLnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9uLXRvYXN0LWRpc21pc3NlZFwiLChlPT55KGUpKSksaC5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1jbG9zZWRcIiwoZT0+eShlKSkpLGgucmVnaXN0ZXJEZXNlcmlhbGl6ZXIoXCJub3RpZmljYXRpb24tYWN0aW9uXCIsKGU9Pnt2YXIgdDtjb25zdCBuPXkoZSkse2NvbnRyb2xTb3VyY2U6aSxjb250cm9sSW5kZXg6b309bixyPXMobixbXCJjb250cm9sU291cmNlXCIsXCJjb250cm9sSW5kZXhcIl0pO3JldHVybiBlLnRyaWdnZXI9PT1jLkFjdGlvblRyaWdnZXIuQ09OVFJPTD9PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse2NvbnRyb2w6bnVsbD09PSh0PWUubm90aWZpY2F0aW9uW2ldKXx8dm9pZCAwPT09dD92b2lkIDA6dFtvXX0pOnJ9KSksaC5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbnMtY291bnQtY2hhbmdlZFwiLChlPT5lKSksaC5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1yZW1pbmRlci1jcmVhdGVkXCIsKGU9Pntjb25zdCB0PXkoZSkse3JlbWluZGVyRGF0ZTpufT10LGk9cyh0LFtcInJlbWluZGVyRGF0ZVwiXSk7cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxpKSx7cmVtaW5kZXJEYXRlOm5ldyBEYXRlKG4pfSl9KSksaC5yZWdpc3RlckRlc2VyaWFsaXplcihcIm5vdGlmaWNhdGlvbi1yZW1pbmRlci1yZW1vdmVkXCIsKGU9PnkoZSkpKSxoLnJlZ2lzdGVyRGVzZXJpYWxpemVyKFwibm90aWZpY2F0aW9uLXNvdW5kLXRvZ2dsZWRcIiwoZT0+ZSkpLHQuYWRkRXZlbnRMaXN0ZW5lcj1hc3luYyBmdW5jdGlvbihlLHQpeygwLHAudmFsaWRhdGVFbnZpcm9ubWVudCkoKSxlPSgwLHAuc2FuaXRpemVFdmVudFR5cGUpKGUpLHQ9KDAscC5zYW5pdGl6ZUZ1bmN0aW9uKSh0KTtjb25zdCBuPWQuZXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQoZSk7XCJub3RpZmljYXRpb24tZm9ybS1zdWJtaXR0ZWRcIj09PWUmJih0PWZ1bmN0aW9uKGUpe3JldHVybiB0PT57Y29uc3Qgbj10Lm5vdGlmaWNhdGlvbi5pZDt0LnNldEZvcm1TdGF0dXM9ZT0+KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuU0VUX0ZPUk1fU1RBVFVTX09QVElPTlMsT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtfbm90aWZpY2F0aW9uSWQ6bn0pKSxlKHQpfX0odCkpLFwibm90aWZpY2F0aW9uLWZvcm0tdmFsdWVzLWNoYW5nZWRcIj09PWUmJih0PWZ1bmN0aW9uKGUpe3JldHVybiB0PT57dC5zZXRFcnJvcnM9ZT0+KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuU0VUX0ZPUk1fVkFMSURBVElPTl9FUlJPUlMse2Vycm9yczplLG5vdGlmaWNhdGlvbklkOnQubm90aWZpY2F0aW9uLmlkfSksZSh0KX19KHQpKSxkLmV2ZW50RW1pdHRlci5hZGRMaXN0ZW5lcihlLHQpLDA9PT1uJiYxPT09ZC5ldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChlKSYmYXdhaXQoMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5BRERfRVZFTlRfTElTVEVORVIsZSl9LHQucmVtb3ZlRXZlbnRMaXN0ZW5lcj1hc3luYyBmdW5jdGlvbihlLHQpeygwLHAudmFsaWRhdGVFbnZpcm9ubWVudCkoKSxlPSgwLHAuc2FuaXRpemVFdmVudFR5cGUpKGUpLHQ9KDAscC5zYW5pdGl6ZUZ1bmN0aW9uKSh0KSwxPT09ZC5ldmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudChlKSYmZC5ldmVudEVtaXR0ZXIubGlzdGVuZXJzKGUpWzBdPT09dCYmYXdhaXQoMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5SRU1PVkVfRVZFTlRfTElTVEVORVIsZSksZC5ldmVudEVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoZSx0KX0sdC5jcmVhdGU9YXN5bmMgZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlOiBhcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCBhbmQgbXVzdCBub3QgYmUgbnVsbFwiKTtpZih2b2lkIDAhPT1lLmRhdGUmJiEoZS5kYXRlIGluc3RhbmNlb2YgRGF0ZSkpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGU6IFwiZGF0ZVwiIG11c3QgYmUgYSB2YWxpZCBEYXRlIG9iamVjdCcpO2lmKHZvaWQgMCE9PWUuZXhwaXJlcyYmbnVsbCE9PWUuZXhwaXJlcyYmIShlLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZTogXCJleHBpcmVzXCIgbXVzdCBiZSBudWxsIG9yIGEgdmFsaWQgRGF0ZSBvYmplY3QnKTtpZih0JiZ0LnJlbWluZGVyRGF0ZSl7aWYoITE9PT1lLmFsbG93UmVtaW5kZXIpdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBub3Qgc3BlY2lmeSBhIHJlbWluZGVyIGRhdGUgZm9yIGEgbm90aWZpY2F0aW9uIHdpdGggXCJhbGxvd1JlbWluZGVyXCIgb3B0aW9uIHNldCB0byBmYWxzZS4nKTtpZighKHQucmVtaW5kZXJEYXRlIGluc3RhbmNlb2YgRGF0ZSkpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byByZW1pbmRlciBPcHRpb25zOiBcImRhdGVcIiBtdXN0IGEgdmFsaWQgRGF0ZSBvYmplY3QnKTtpZihlLmV4cGlyZXMmJmUuZXhwaXJlcy5nZXRUaW1lKCk8dC5yZW1pbmRlckRhdGUuZ2V0VGltZSgpKXRocm93IG5ldyBFcnJvcihcIkV4cGlyYXRpb24gZGF0ZSBtdXN0IG5vdCBiZSBlYXJsaWVyIHRoYW4gcmVtaW5kZXIgZGF0ZS5cIil9dm9pZCAwIT09ZS5jYXRlZ29yeSYmbnVsbCE9PWUuY2F0ZWdvcnl8fChlLmNhdGVnb3J5PVwiZGVmYXVsdFwiKTtjb25zdCBuPWF3YWl0KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuQ1JFQVRFX05PVElGSUNBVElPTixPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sZSkse2RhdGU6ZS5kYXRlJiZlLmRhdGUuZ2V0VGltZSgpLGV4cGlyZXM6ZS5leHBpcmVzJiZlLmV4cGlyZXMuZ2V0VGltZSgpLHJlbWluZGVyOihudWxsPT10P3ZvaWQgMDp0LnJlbWluZGVyRGF0ZSkmJnQucmVtaW5kZXJEYXRlLmdldFRpbWUoKX0pKTtyZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LG4pLHtkYXRlOm5ldyBEYXRlKG4uZGF0ZSksZXhwaXJlczpudWxsIT09bi5leHBpcmVzP25ldyBEYXRlKG4uZXhwaXJlcyk6bnVsbH0pfSx0LnVwZGF0ZT1hc3luYyBmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlOiBhcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCBhbmQgbXVzdCBub3QgYmUgbnVsbFwiKTtpZighZS5pZCl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZTogXCJpZFwiIG11c3QgYmUgSWQgb2YgcHJldmlvdXNseSBjcmVhdGVkIE5vdGlmaWNhdGlvbicpO2NvbnN0IHQ9YXdhaXQoMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5VUERBVEVfTk9USUZJQ0FUSU9OLE9iamVjdC5hc3NpZ24oe30sZSkpO3JldHVybiBPYmplY3QuYXNzaWduKHt9LHQpfSx0LmNsZWFyPWFzeW5jIGZ1bmN0aW9uKGUpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkNMRUFSX05PVElGSUNBVElPTix7aWQ6ZX0pfSx0LnNldFJlbWluZGVyPWFzeW5jIGZ1bmN0aW9uKGUsdCl7aWYoISh0IGluc3RhbmNlb2YgRGF0ZSkpdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byBzZXRSZW1pbmRlcjogXCJyZW1pbmRlckRhdGVcIiBtdXN0IGEgdmFsaWQgRGF0ZSBvYmplY3QnKTtpZih0LmdldFRpbWUoKTxEYXRlLm5vdygpKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gc2V0UmVtaW5kZXI6IFwicmVtaW5kZXJEYXRlXCIgd2FzIHNldCB0byBhIERhdGUgaW4gdGhlIHBhc3QsIG11c3QgYmUgYSBEYXRlIGluIHRoZSBmdXR1cmUuJyk7Y29uc3Qgbj1hd2FpdCgwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlNFVF9SRU1JTkRFUix7aWQ6ZSxyZW1pbmRlcjp0LmdldFRpbWUoKX0pO3JldHVybiBuP2NvbnNvbGUubG9nKGBbQ2xpZW50OjpzZXRSZW1pbmRlcl0gUmVtaW5kZXIgc2V0IGZvciBub3RpZmljYXRpb246ICR7ZX1gKTpjb25zb2xlLmxvZyhgW0NsaWVudDo6c2V0UmVtaW5kZXJdIE5vdGlmaWNhdGlvbiBub3QgZm91bmQgZm9yIGlkOiAke2V9YCksbn0sdC5jYW5jZWxSZW1pbmRlcj1hc3luYyBmdW5jdGlvbihlKXtjb25zdCB0PWF3YWl0KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuQ0FOQ0VMX1JFTUlOREVSLHtpZDplfSk7cmV0dXJuIHQ/Y29uc29sZS5sb2coYFtDbGllbnQ6OmNhbmNlbFJlbWluZGVyXSBSZW1pbmRlciBjYW5jZWxlZCBmb3Igbm90aWZpY2F0aW9uOiAke2V9YCk6Y29uc29sZS5sb2coYFtDbGllbnQ6OmNhbmNlbFJlbWluZGVyXSBOb3RpZmljYXRpb24gbm90IGZvdW5kIGZvciBpZDogJHtlfWApLHR9LHQuZ2V0QWxsPWFzeW5jIGZ1bmN0aW9uKCl7cmV0dXJuKGF3YWl0KDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuR0VUX0FQUF9OT1RJRklDQVRJT05TLHZvaWQgMCkpLm1hcCgoZT0+T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LGUpLHtpbmRpY2F0b3I6ZS5pbmRpY2F0b3J8fG51bGwsZGF0ZTpuZXcgRGF0ZShlLmRhdGUpLGV4cGlyZXM6bnVsbCE9PWUuZXhwaXJlcz9uZXcgRGF0ZShlLmV4cGlyZXMpOm51bGx9KSkpfSx0LmNsZWFyQWxsPWFzeW5jIGZ1bmN0aW9uKCl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuQ0xFQVJfQVBQX05PVElGSUNBVElPTlMsdm9pZCAwKX0sdC50b2dnbGVOb3RpZmljYXRpb25DZW50ZXI9YXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5UT0dHTEVfTk9USUZJQ0FUSU9OX0NFTlRFUix2b2lkIDApfSx0LnNldERlZmF1bHRQbGF0Zm9ybVNob3J0Y3V0PWZ1bmN0aW9uKGUpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLlNFVF9ERUZBVUxUX1BMQVRGT1JNX1NIT1JUQ1VULGUpfSx0LnNob3c9YXN5bmMgZnVuY3Rpb24oZSl7cmV0dXJuKDAsbC50cnlTZXJ2aWNlRGlzcGF0Y2gpKHUuQVBJVG9waWMuU0hPV19OT1RJRklDQVRJT05fQ0VOVEVSLGUpfSx0LmhpZGU9YXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5ISURFX05PVElGSUNBVElPTl9DRU5URVIsdm9pZCAwKX0sdC5nZXROb3RpZmljYXRpb25zQ291bnQ9YXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5HRVRfTk9USUZJQ0FUSU9OU19DT1VOVCx2b2lkIDApfSwodC5Vc2VyU2V0dGluZ3N8fCh0LlVzZXJTZXR0aW5ncz17fSkpLlNPVU5EX0VOQUJMRUQ9XCJzb3VuZEVuYWJsZWRcIix0LmdldFVzZXJTZXR0aW5nU3RhdHVzPWFzeW5jIGZ1bmN0aW9uKGUpe3JldHVybigwLGwudHJ5U2VydmljZURpc3BhdGNoKSh1LkFQSVRvcGljLkdFVF9VU0VSX1NFVFRJTkdTX1NUQVRVUyxlKX0sdC5zZXRBbGxvd2VkT3JpZ2lucz1hc3luYyBlPT4oMCxsLnRyeVNlcnZpY2VEaXNwYXRjaCkodS5BUElUb3BpYy5TRVRfTk9USUZJQ0FUSU9OX1NFQ1VSSVRZX1JVTEUse2FsbG93ZWRPcmlnaW5zOmV9KX0sNDY4OihlLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LDQ3MDpmdW5jdGlvbihlLHQsbil7dmFyIGk9dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pO3ZhciBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxuKTtvJiYhKFwiZ2V0XCJpbiBvPyF0Ll9fZXNNb2R1bGU6by53cml0YWJsZXx8by5jb25maWd1cmFibGUpfHwobz17ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdFtuXX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLG8pfTpmdW5jdGlvbihlLHQsbixpKXt2b2lkIDA9PT1pJiYoaT1uKSxlW2ldPXRbbl19KSxvPXRoaXMmJnRoaXMuX19leHBvcnRTdGFyfHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgbiBpbiBlKVwiZGVmYXVsdFwiPT09bnx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil8fGkodCxlLG4pfTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxvKG4oMTM0KSx0KSxvKG4oNDY4KSx0KSxvKG4oOTY1KSx0KSxvKG4oOTI5KSx0KX0sNDcxOmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzJiZ0aGlzLl9fcmVzdHx8ZnVuY3Rpb24oZSx0KXt2YXIgbj17fTtmb3IodmFyIGkgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxpKSYmdC5pbmRleE9mKGkpPDAmJihuW2ldPWVbaV0pO2lmKG51bGwhPWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPGkubGVuZ3RoO28rKyl0LmluZGV4T2YoaVtvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsaVtvXSkmJihuW2lbb11dPWVbaVtvXV0pfXJldHVybiBufTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmdldEV2ZW50Um91dGVyPXQuZXZlbnRFbWl0dGVyPXQuRXZlbnRSb3V0ZXI9dm9pZCAwO2NvbnN0IG89big3KSxyPW4oOTAyKSxhPW4oMzQ5KTtjbGFzcyBze2NvbnN0cnVjdG9yKGUpe3RoaXMuX2VtaXR0ZXJQcm92aWRlcnM9e30sdGhpcy5fZGVzZXJpYWxpemVycz17fSx0aGlzLl9kZWZhdWx0RW1pdHRlcj1lfXJlZ2lzdGVyRW1pdHRlclByb3ZpZGVyKGUsdCl7dGhpcy5fZW1pdHRlclByb3ZpZGVyc1tlXT10fXJlZ2lzdGVyRGVzZXJpYWxpemVyKGUsdCl7dGhpcy5fZGVzZXJpYWxpemVyc1tlXT10fWRpc3BhdGNoRXZlbnQoZSl7Y29uc3R7dHlwZTp0LHRhcmdldDpufT1lLG89aShlLFtcInR5cGVcIixcInRhcmdldFwiXSk7bGV0IHM7aWYoIW4pdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBldmVudCwgbm8gdGFyZ2V0IHNwZWNpZmllZFwiKTtpZihcImRlZmF1bHRcIj09PW4pcz10aGlzLl9kZWZhdWx0RW1pdHRlcjtlbHNle2lmKCF0aGlzLl9lbWl0dGVyUHJvdmlkZXJzW24udHlwZV0pdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHRhcmdldCwgbm8gcHJvdmlkZXIgcmVnaXN0ZXJlZCBmb3IgJyR7bi50eXBlfSdgKTtzPXRoaXMuX2VtaXR0ZXJQcm92aWRlcnNbbi50eXBlXShuLmlkKX1jb25zdCBjPU9iamVjdC5hc3NpZ24oe3R5cGU6dH0sbyksbD10aGlzLl9kZXNlcmlhbGl6ZXJzW3RdO2w/cy5lbWl0KHQsbChjKSk6XCJub3RpZmljYXRpb24tZm9ybS1zdWJtaXR0ZWRcIj09PXQ/ZnVuY3Rpb24oZSx0KXtsZXQgbj0hMTtlLnByZXZlbnREZWZhdWx0PSgpPT5uPSEwLHQuZW1pdChcIm5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZFwiLGUpLG58fCgwLHIudHJ5U2VydmljZURpc3BhdGNoKShhLkFQSVRvcGljLlNFVF9GT1JNX1NUQVRVU19PUFRJT05TLHtmb3JtU3RhdHVzOlwic3VibWl0dGVkXCIsX25vdGlmaWNhdGlvbklkOmUubm90aWZpY2F0aW9uLmlkfSl9KGMscyk6cy5lbWl0KHQsYyl9fWxldCBjO3QuRXZlbnRSb3V0ZXI9cyx0LmV2ZW50RW1pdHRlcj1uZXcgby5FdmVudEVtaXR0ZXIsdC5nZXRFdmVudFJvdXRlcj1mdW5jdGlvbigpe3JldHVybiBjfHwoYz1uZXcgcyh0LmV2ZW50RW1pdHRlcikpLGN9fSw1MjA6KGUsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sNTM2OmZ1bmN0aW9uKGUsdCxuKXt2YXIgaT10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LG4saSl7dm9pZCAwPT09aSYmKGk9bik7dmFyIG89T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LG4pO28mJiEoXCJnZXRcImluIG8/IXQuX19lc01vZHVsZTpvLndyaXRhYmxlfHxvLmNvbmZpZ3VyYWJsZSl8fChvPXtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0W25dfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGksbyl9OmZ1bmN0aW9uKGUsdCxuLGkpe3ZvaWQgMD09PWkmJihpPW4pLGVbaV09dFtuXX0pLG89dGhpcyYmdGhpcy5fX2V4cG9ydFN0YXJ8fGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCI9PT1ufHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKXx8aSh0LGUsbil9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQucmVnaXN0ZXI9dC5Ob3RpZmljYXRpb25zUmVnaXN0cmF0aW9uPXZvaWQgMDtjb25zdCByPW4oMzI5KSxhPW4oOTAyKSxzPW4oODU1KSxjPW4oNjEwKSxsPW4oMzEyKSx1PW4oNzk3KTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIk5vdGlmaWNhdGlvbnNSZWdpc3RyYXRpb25cIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdS5Ob3RpZmljYXRpb25zUmVnaXN0cmF0aW9ufX0pO2NvbnN0IGQ9bigxNjYpLGY9bigyMTcpLHA9big5MTkpO28obig0MDUpLHQpO2NsYXNzIHYgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLm5hbWU9XCJOb3RpZmljYXRpb25zUmVnaXN0cmF0aW9uRXJyb3JcIn19dC5yZWdpc3Rlcj1hc3luYyBmdW5jdGlvbiBlKHQpe2lmKChudWxsPT10P3ZvaWQgMDp0LmN1c3RvbU1hbmlmZXN0KSYmY29uc29sZS53YXJuKFwiVGhlIGN1c3RvbU1hbmlmZXN0IG9wdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGFueW1vcmUgYW5kIHdpbGwgYmUgaWdub3JlZC4gVXNlIG1hbmlmZXN0IGNvbmZpZ3VyYXRpb24gaW5zdGVhZC5cIiksbnVsbD09dD92b2lkIDA6dC5leHRlcm5hbFByb3ZpZGVyQ29uZmlnKXtjb25zdHtleHRlcm5hbFByb3ZpZGVyQ29uZmlnOm59PXQse2ZpbkNvbnRleHQ6aX09bnx8e307aWYoIWkpdGhyb3cgbmV3IHYoXCJmaW4gY29udGV4dCBtdXN0IGJlIHByb3ZpZGVkIGZvciBleHRlcm5hbCBub3RpZmljYXRpb24gcHJvdmlkZXJzLlwiKTtyZXR1cm4oMCxwLnZhbGlkYXRlRXh0ZXJuYWxQcm92aWRlckluZm8pKG4pLCgwLHMuc2V0VmFsaWRhdGlvbk1ldGhvZCkoKCgpPT57fSkpLCgwLGEuc2V0RGlzcGF0Y2hNZXRob2QpKGQuZXh0ZXJuYWxEaXNwYXRjaE1ldGhvZCksYXdhaXQoMCxkLmNvbm5lY3RBc0V4dGVybmFsQ2xpZW50KSh7ZXh0ZXJuYWxQcm92aWRlckNvbmZpZzpuLHJldHJ5OmV9KSx7Y2xpZW50QVBJVmVyc2lvbjpcIjIuMTMuMVwiLG5vdGlmaWNhdGlvbnNWZXJzaW9uOihhd2FpdCgwLGYuZ2V0U3RhdHVzKSgpKS52ZXJzaW9ufHxcInVua25vd25cIn19aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGZpbiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7KDAsci5zZXRGaW5Db250ZXh0KShmaW4pLCgwLHMuc2V0VmFsaWRhdGlvbk1ldGhvZCkoYy5kZWZhdWx0VmFsaWRhdGVFbnZpcm9ubWVudCksKDAsYS5zZXREaXNwYXRjaE1ldGhvZCkoYy5kZWZhdWx0RGlzcGF0Y2gpO2NvbnN0IGU9YXdhaXQoMCxsLmV4dHJhY3RDb25maWdGcm9tTWFuaWZlc3QpKCk7cmV0dXJuKDAsdS5yZWdpc3RlcikoZSl9dGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBuZWl0aGVyIGluIE9wZW5GaW4gZW52aXJvbm1lbnQgbm9yIHByb3ZpZGVkIGFuIGV4dGVybmFsIE9wZW5GaW4gY29ubmVjdGlvbi5cIil9fSw1Nzg6KGUsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sNjEwOihlLHQsbik9PntPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHRWYWxpZGF0ZUVudmlyb25tZW50PXQuZGVmYXVsdERpc3BhdGNoPXZvaWQgMDtjb25zdCBpPW4oNzkzKSxvPW4oMzI5KTt0LmRlZmF1bHREaXNwYXRjaD1hc3luYyBmdW5jdGlvbihlLHQpe3JldHVybihhd2FpdCgwLGkuZ2V0Q2hhbm5lbENsaWVudCkoKSkuZGlzcGF0Y2goZSx0KX0sdC5kZWZhdWx0VmFsaWRhdGVFbnZpcm9ubWVudD1mdW5jdGlvbigpe2lmKHZvaWQgMD09PW8uZmluQ29udGV4dCl0aHJvdyBuZXcgRXJyb3IoXCJmaW4gaXMgbm90IGRlZmluZWQuIFRoZSBvcGVuZmluLW5vdGlmaWNhdGlvbnMgbW9kdWxlIGlzIG9ubHkgaW50ZW5kZWQgZm9yIHVzZSBpbiBhbiBPcGVuRmluIGFwcGxpY2F0aW9uLlwiKX19LDYzNzooZSx0KT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRmllbGRUeXBlPXZvaWQgMCx0LkZpZWxkVHlwZT17c3RyaW5nOlwic3RyaW5nXCIsbnVtYmVyOlwibnVtYmVyXCIsYm9vbGVhbjpcImJvb2xlYW5cIixkYXRlOlwiZGF0ZVwiLGNoZWNrYm94R3JvdXA6XCJjaGVja2JveEdyb3VwXCIscmFkaW9Hcm91cDpcInJhZGlvR3JvdXBcIix0aW1lOlwidGltZVwifX0sNjY3OmU9PntlLmV4cG9ydHM9dm9pZCAwfSw3Nzc6KGUsdCxuKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGk9big4OSk7YXN5bmMgZnVuY3Rpb24gbyhlLHQpe2xldCBuPTA7Zm9yKGNvbnN0IGkgb2YgZSlhd2FpdCB0KGksbixlKSxuKyt9YXN5bmMgZnVuY3Rpb24gcihlLHQpe2F3YWl0IFByb21pc2UuYWxsKGUubWFwKHQpKX1mdW5jdGlvbiBhKGUsdCxuKXtjb25zdCBvPW5ldyBpLkRlZmVycmVkUHJvbWlzZSxyPWUuYWRkKCgoLi4uZSk9Pnt0KC4uLmUpJiYoci5yZW1vdmUoKSxvLnJlc29sdmUoKSl9KSk7cmV0dXJuIG4mJm4uY2F0Y2goKGU9PntyLnJlbW92ZSgpLG8ucmVqZWN0KGUpfSkpLHMoby5wcm9taXNlKX1mdW5jdGlvbiBzKGUpe3JldHVybiBlLmNhdGNoKCgoKT0+e30pKSxlfXQuc2VyaWFsRm9yRWFjaD1vLHQuc2VyaWFsTWFwPWFzeW5jIGZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1bXTtyZXR1cm4gYXdhaXQgbyhlLChhc3luYyhlLGksbyk9PntuLnB1c2goYXdhaXQgdChlLGksbykpfSkpLG59LHQuc2VyaWFsRmlsdGVyPWFzeW5jIGZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1bXTtyZXR1cm4gYXdhaXQgbyhlLChhc3luYyhlLGksbyk9Pnthd2FpdCB0KGUsaSxvKSYmbi5wdXNoKGUpfSkpLG59LHQucGFyYWxsZWxGb3JFYWNoPXIsdC5wYXJhbGxlbE1hcD1hc3luYyBmdW5jdGlvbihlLHQpe2NvbnN0IG49W107cmV0dXJuIGF3YWl0IHIoZSwoYXN5bmMoZSxpLG8pPT57bltpXT1hd2FpdCB0KGUsaSxvKX0pKSxufSx0LnBhcmFsbGVsRmlsdGVyPWFzeW5jIGZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1bXTtyZXR1cm4gYXdhaXQgcihlLChhc3luYyhlLGksbyk9PntuW2ldPWF3YWl0IHQoZSxpLG8pfSkpLGUuZmlsdGVyKCgoZSx0KT0+blt0XSkpfSx0LndpdGhTdHJpY3RUaW1lb3V0PWZ1bmN0aW9uKGUsdCxuKXtjb25zdCBpPW5ldyBQcm9taXNlKCgodCxpKT0+c2V0VGltZW91dCgoKCk9PmkobmV3IEVycm9yKG4pKSksZSkpKTtyZXR1cm4gcyhQcm9taXNlLnJhY2UoW2ksdF0pKX0sdC53aXRoVGltZW91dD1mdW5jdGlvbihlLHQpe2NvbnN0IG49bmV3IFByb21pc2UoKHQ9PnNldFRpbWVvdXQoKCgpPT50KFshMCx2b2lkIDBdKSksZSkpKSxpPXQudGhlbigoZT0+WyExLGVdKSk7cmV0dXJuIFByb21pc2UucmFjZShbbixpXSl9LHQudW50aWxUcnVlPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdCgpP1Byb21pc2UucmVzb2x2ZSgpOmEoZSx0LG4pfSx0LnVudGlsU2lnbmFsPWEsdC5hbGxvd1JlamVjdD1zfSw3ODU6KGUsdCxuKT0+e2Z1bmN0aW9uIGkoZSl7Zm9yKHZhciBuIGluIGUpdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09ZVtuXSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksaShuKDc3NykpLGkobig4OSkpfSw3OTM6KGUsdCxuKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuZ2V0Q2hhbm5lbENsaWVudD10LmNsZWFyQXdhaXRlZENoYW5uZWxDbGllbnQ9dC5pbml0QXdhaXRlZENoYW5uZWxDbGllbnQ9dC5TZXJ2aWNlQ29uZmlnPXZvaWQgMDtjb25zdCBpPW4oMzQ5KSxvPW4oMzYpLHI9bigzMjkpO3QuU2VydmljZUNvbmZpZz17c2VydmljZUNoYW5uZWw6aS5TRVJWSUNFX0NIQU5ORUwsc2VydmljZVV1aWQ6aS5TRVJWSUNFX0lERU5USVRZLnV1aWQscm91dGluZ0VuYWJsZWQ6ITF9O2NvbnN0IGE9YXN5bmMoe3dhaXQ6ZX0pPT57YXdhaXQgby5Mb2cuaW5mbyhgQ29ubmVjdGluZyB0byBOb3RpZmljYXRpb25zICgke3QuU2VydmljZUNvbmZpZy5zZXJ2aWNlQ2hhbm5lbH0pLi4uYCk7Y29uc3Qgbj1hd2FpdCByLmZpbkNvbnRleHQuSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QodC5TZXJ2aWNlQ29uZmlnLnNlcnZpY2VDaGFubmVsLHt3YWl0OmUscGF5bG9hZDp7dmVyc2lvbjpcIjIuMTMuMVwifX0pO3JldHVybiBhd2FpdCBvLkxvZy5pbmZvKGBTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIE5vdGlmaWNhdGlvbnMgKCR7dC5TZXJ2aWNlQ29uZmlnLnNlcnZpY2VDaGFubmVsfSkuYCksbn07bGV0IHMsYzt0LmluaXRBd2FpdGVkQ2hhbm5lbENsaWVudD0oKT0+cz97Y2hhbm5lbENsaWVudFByb21pc2U6cyxpc0luaXQ6ITF9OihzPWEoe3dhaXQ6ITB9KSxzLmNhdGNoKChlPT4oMCx0LmNsZWFyQXdhaXRlZENoYW5uZWxDbGllbnQpKCkpKSx7Y2hhbm5lbENsaWVudFByb21pc2U6cyxpc0luaXQ6ITB9KSx0LmNsZWFyQXdhaXRlZENoYW5uZWxDbGllbnQ9KCk9PntzPW51bGx9LHQuZ2V0Q2hhbm5lbENsaWVudD1hc3luYygpPT5zfHwoYXN5bmMoKT0+e2lmKCFjKXt0cnl7Yz1hd2FpdCBhKHt3YWl0OiExfSksYy5zZXREZWZhdWx0QWN0aW9uKCgoKT0+ITEpKX1jYXRjaChlKXt0aHJvdyBhd2FpdCBvLkxvZy5lcnJvcignQ291bGQgbm90IGZpbmQgY2hhbm5lbCBwcm92aWRlci4gRGlkIHlvdSBjYWxsIFwibm90aWZpY2F0aW9ucy5yZWdpc3RlcigpXCI/JyksZX1jLm9uRGlzY29ubmVjdGlvbigoKCk9PntjPW51bGx9KSl9cmV0dXJuIGN9KSgpfSw3OTc6KGUsdCxuKT0+e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQucmVnaXN0ZXI9dC5DaGFubmVsQ2xpZW50SGFuZGxlcnM9dm9pZCAwO2NvbnN0IGk9bigzNDkpLG89big0NzEpLHI9bigzNiksYT1uKDc5Mykscz1uKDIxNyksYz1uKDMyOSk7Y2xhc3MgbHt9dC5DaGFubmVsQ2xpZW50SGFuZGxlcnM9bCxsLmhhbmRsZURlZmF1bHRBY3Rpb249KCk9PiExLGwuaGFuZGxlRXZlbnRBY3Rpb249ZT0+eygwLG8uZ2V0RXZlbnRSb3V0ZXIpKCkuZGlzcGF0Y2hFdmVudChlKX0sbC5oYW5kbGVXYXJuQWN0aW9uPWFzeW5jIGU9Pnthd2FpdCByLkxvZy53YXJuKGUpfSxsLmhhbmRsZURpc2Nvbm5lY3Rpb249YXN5bmMoKT0+eygwLGEuZ2V0Q2hhbm5lbENsaWVudCkoKSYmKGF3YWl0IHIuTG9nLndhcm4oXCJEaXNjb25uZWN0ZWQgZnJvbSBOb3RpZmljYXRpb25zLiBSZWNvbm5lY3RpbmcuLi5cIiksKDAsYS5jbGVhckF3YWl0ZWRDaGFubmVsQ2xpZW50KSgpLGF3YWl0IGYoKSxhd2FpdCBwKCkpfTtsZXQgdT1udWxsO3QucmVnaXN0ZXI9YXN5bmMgZT0+e2lmKG51bGw9PWU/dm9pZCAwOmUuZXh0ZXJuYWxQcm92aWRlckNvbmZpZyl0aHJvdyBuZXcgRXJyb3IoXCJJdCBhcHBlYXJzIHlvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYW4gZXh0ZXJuYWwgcHJvdmlkZXIgY29uZmlndXJhdGlvbiB3aXRoIHRoZSBkZXNrdG9wIGNsaWVudC4gVGhpcyB1c3VhbGx5IHN1Z2dlc3RzIHRoYXQgdGhlIENsaWVudCBBUEkgcGFja2FnZSB2ZXJzaW9uIGluIHVzZSBpcyBkZXByZWNhdGVkLlwiKTtpZih1KXJldHVybiB1O3RyeXtyZXR1cm4gdT1kKGUpLGF3YWl0IHV9ZmluYWxseXt1PW51bGx9fTtjb25zdCBkPWFzeW5jIGU9Pntjb25zdCB0PWU7aWYobnVsbD09dD92b2lkIDA6dC5yb3V0aW5nT3B0aW9ucyl7Y29uc3QgZT10LnJvdXRpbmdPcHRpb25zLnJvdXRlckNoYW5uZWxOYW1lO2lmKCFlKXRocm93IG5ldyBFcnJvcihcIldoZW4gYSByb3V0ZXIgY29uZmlnIGlzIHByb3ZpZGVkLCB0aGUgcm91dGVyIGNoYW5uZWwgbmFtZSBtdXN0IGFsc28gYmUgcHJvdmlkZWQgYW5kIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuXCIpO3IuTG9nLmluZm8oYENvbm5lY3RpbmcgdG8gcm91dGVyIGNoYW5uZWw6ICR7ZX1gKSxhLlNlcnZpY2VDb25maWcuc2VydmljZUNoYW5uZWw9ZSxhLlNlcnZpY2VDb25maWcucm91dGluZ0VuYWJsZWQ9ITB9ZWxzZSBpZihudWxsPT10P3ZvaWQgMDp0LmN1c3RvbU1hbmlmZXN0KXtjb25zdCBlPXQuY3VzdG9tTWFuaWZlc3Q7aWYoci5Mb2cuaW5mbyhgQ29ubmVjdGluZyB0byBwcml2YXRlIGluc3RhbmNlOiAke2UubWFuaWZlc3RVdWlkfSBhdCAke2UubWFuaWZlc3RVcmx9YCksIWUubWFuaWZlc3RVcmwpdGhyb3cgbmV3IEVycm9yKFwiV2hlbiBhIGN1c3RvbSBtYW5pZmVzdCBjb25maWcgaXMgcHJvdmlkZWQsIHRoZSBtYW5pZmVzdCB1cmwgbXVzdCBiZSBwcm92aWRlZCBhbmQgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZy5cIik7aWYoIWUubWFuaWZlc3RVdWlkKXRocm93IG5ldyBFcnJvcihcIldoZW4gYSBjdXN0b20gbWFuaWZlc3QgY29uZmlnIGlzIHByb3ZpZGVkLCB0aGUgbWFuaWZlc3QgVVVJRCBtdXN0IGJlIHByb3ZpZGVkIGFuZCBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nLlwiKTthLlNlcnZpY2VDb25maWcuc2VydmljZUNoYW5uZWw9YCR7ZS5tYW5pZmVzdFV1aWR9LSR7aS5TRVJWSUNFX0NIQU5ORUx9YCxhLlNlcnZpY2VDb25maWcuc2VydmljZVV1aWQ9ZS5tYW5pZmVzdFV1aWQsYS5TZXJ2aWNlQ29uZmlnLnNlcnZpY2VNYW5pZmVzdFVybD1lLm1hbmlmZXN0VXJsLGF3YWl0IGYoKX1lbHNlIGEuU2VydmljZUNvbmZpZy5zZXJ2aWNlQ2hhbm5lbD1pLlNFUlZJQ0VfQ0hBTk5FTCxhd2FpdCBmKCk7cmV0dXJuIGF3YWl0IHAoKSx7Y2xpZW50QVBJVmVyc2lvbjpcIjIuMTMuMVwiLG5vdGlmaWNhdGlvbnNWZXJzaW9uOihhd2FpdCgwLHMuZ2V0U3RhdHVzKSgpKS52ZXJzaW9ufHxcInVua25vd25cIn19LGY9YXN5bmMoKT0+e2lmKCFhLlNlcnZpY2VDb25maWcucm91dGluZ0VuYWJsZWQpdHJ5e2NvbnN0IGU9YS5TZXJ2aWNlQ29uZmlnLnNlcnZpY2VNYW5pZmVzdFVybCx0PXdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJ3aW5kb3dzXCIpLG49ZXx8XCJmaW5zOi8vc3lzdGVtLWFwcHMvbm90aWZpY2F0aW9uLWNlbnRlclwiO3Q/KGF3YWl0IHIuTG9nLmluZm8oXCJMYXVuY2hpbmcgTm90aWZpY2F0aW9ucyB2aWEgZmluLlN5c3RlbS5sYXVuY2hNYW5pZmVzdC4uLlwiKSxhd2FpdCBjLmZpbkNvbnRleHQuU3lzdGVtLmxhdW5jaE1hbmlmZXN0KG4se25vVWk6ITB9KSk6KGF3YWl0IHIuTG9nLmluZm8oXCJMYXVuY2hpbmcgTm90aWZpY2F0aW9ucyB2aWEgZmluLlN5c3RlbS5vcGVuVXJsV2l0aEJyb3dzZXIuLi5cIiksYXdhaXQgYy5maW5Db250ZXh0LlN5c3RlbS5vcGVuVXJsV2l0aEJyb3dzZXIobikpfWNhdGNoKGUpe3Rocm93IGUgaW5zdGFuY2VvZiBFcnJvcj9hd2FpdCByLkxvZy5lcnJvcihgRmFpbGVkIHRvIGxhdW5jaCBOb3RpZmljYXRpb25zIC0gJHtlLm5hbWV9OiAke2UubWVzc2FnZX1gKTphd2FpdCByLkxvZy5lcnJvcihgRmFpbGVkIHRvIGxhdW5jaCBOb3RpZmljYXRpb25zIC0gJHtKU09OLnN0cmluZ2lmeShlKX1gKSxlfX0scD1hc3luYygpPT57dHJ5e2NvbnN0e2NoYW5uZWxDbGllbnRQcm9taXNlOmUsaXNJbml0OnR9PSgwLGEuaW5pdEF3YWl0ZWRDaGFubmVsQ2xpZW50KSgpLG49YXdhaXQgZTt0JiYobi5zZXREZWZhdWx0QWN0aW9uKGwuaGFuZGxlRGVmYXVsdEFjdGlvbiksbi5yZWdpc3RlcihcImV2ZW50XCIsbC5oYW5kbGVFdmVudEFjdGlvbiksbi5yZWdpc3RlcihcIldBUk5cIixsLmhhbmRsZVdhcm5BY3Rpb24pLG4ub25EaXNjb25uZWN0aW9uKGwuaGFuZGxlRGlzY29ubmVjdGlvbiksIWEuU2VydmljZUNvbmZpZy5yb3V0aW5nRW5hYmxlZCkmJmMuZmluQ29udGV4dC5BcHBsaWNhdGlvbi53cmFwU3luYyh7dXVpZDphLlNlcnZpY2VDb25maWcuc2VydmljZVV1aWR9KS5vbmNlKFwiY2xvc2VkXCIsbC5oYW5kbGVEaXNjb25uZWN0aW9uKX1jYXRjaChlKXt0aHJvdyBlIGluc3RhbmNlb2YgRXJyb3I/YXdhaXQgci5Mb2cuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0IHRvIE5vdGlmaWNhdGlvbnMgLSAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApOmF3YWl0IHIuTG9nLmVycm9yKGBGYWlsZWQgdG8gY29ubmVjdCB0byBOb3RpZmljYXRpb25zIC0gJHtKU09OLnN0cmluZ2lmeShlKX1gKSxlfX19LDg1NTooZSx0KT0+e2Z1bmN0aW9uIG4oZSx0KXtsZXQgbjt0cnl7bj1KU09OLnN0cmluZ2lmeShlKX1jYXRjaChlKXtuPXR9cmV0dXJuIG59T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5zZXRWYWxpZGF0aW9uTWV0aG9kPXQudmFsaWRhdGVFbnZpcm9ubWVudD10LnNhZmVTdHJpbmdpZnk9dC5zYW5pdGl6ZUV2ZW50VHlwZT10LnNhbml0aXplRnVuY3Rpb249dm9pZCAwLHQuc2FuaXRpemVGdW5jdGlvbj1mdW5jdGlvbihlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhcmd1bWVudCBwYXNzZWQ6ICR7bihlLFwiVGhlIHByb3ZpZGVkIHZhbHVlXCIpfSBpcyBub3QgYSB2YWxpZCBmdW5jdGlvbmApO3JldHVybiBlfSx0LnNhbml0aXplRXZlbnRUeXBlPWZ1bmN0aW9uKGUpe2lmKFwibm90aWZpY2F0aW9uLWFjdGlvblwiPT09ZXx8XCJub3RpZmljYXRpb24tY3JlYXRlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tdG9hc3QtZGlzbWlzc2VkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi1jbG9zZWRcIj09PWV8fFwibm90aWZpY2F0aW9ucy1jb3VudC1jaGFuZ2VkXCI9PT1lfHxcIm5vdGlmaWNhdGlvbi1mb3JtLXN1Ym1pdHRlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tcmVtaW5kZXItY3JlYXRlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tcmVtaW5kZXItcmVtb3ZlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tZm9ybS12YWx1ZXMtY2hhbmdlZFwiPT09ZXx8XCJub3RpZmljYXRpb24tc291bmQtdG9nZ2xlZFwiPT09ZSlyZXR1cm4gZTt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYXJndW1lbnQgcGFzc2VkOiAke24oZSxcIlRoZSBwcm92aWRlZCBldmVudCB0eXBlXCIpfSBpcyBub3QgYSB2YWxpZCBOb3RpZmljYXRpb25zIGV2ZW50IHR5cGVgKX0sdC5zYWZlU3RyaW5naWZ5PW4sdC52YWxpZGF0ZUVudmlyb25tZW50PSgpPT57dGhyb3cgbmV3IEVycm9yKFwiZmluIGlzIG5vdCBkZWZpbmVkLiBUaGUgbm90aWZpY2F0aW9ucyBtb2R1bGUgaXMgb25seSBpbnRlbmRlZCBmb3IgdXNlIGluIGFuIE9wZW5GaW4gYXBwbGljYXRpb24uXCIpfSx0LnNldFZhbGlkYXRpb25NZXRob2Q9ZT0+e3QudmFsaWRhdGVFbnZpcm9ubWVudD1lfX0sOTAyOihlLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5zZXREaXNwYXRjaE1ldGhvZD10LnRyeVNlcnZpY2VEaXNwYXRjaD12b2lkIDAsdC50cnlTZXJ2aWNlRGlzcGF0Y2g9YXN5bmMoZSx0KT0+e3Rocm93IG5ldyBFcnJvcihcIkVudmlyb25tZW50IGlzIG5vdCBpbml0aWFsaXplZC4uXCIpfSx0LnNldERpc3BhdGNoTWV0aG9kPWU9Pnt0LnRyeVNlcnZpY2VEaXNwYXRjaD1lfX0sOTE5OihlLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC52YWxpZGF0ZUV4dGVybmFsUHJvdmlkZXJJbmZvPXZvaWQgMCx0LnZhbGlkYXRlRXh0ZXJuYWxQcm92aWRlckluZm89ZnVuY3Rpb24oZSl7aWYoIWUuaWQpdGhyb3cgbmV3IEVycm9yKFwiaWQgbXVzdCBiZSBhIG5vbi16ZXJvIGxlbmd0aCBhbmQgbXVzdCBiZSBhIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBwcm92aWRlci5cIik7aWYoIWUudGl0bGUpdGhyb3cgbmV3IEVycm9yKFwidGl0bGUgbXVzdCBiZSBhIG5vbi16ZXJvIGxlbmd0aC5cIik7aWYoIWUuc2VydmljZUlkKXRocm93IG5ldyBFcnJvcihcInNlcnZpY2VJZCBtdXN0IGJlIGEgbm9uLXplcm8gbGVuZ3RoIGFuZCBtdXN0IG1hdGNoIHRoZSBzZXJ2aWNlIGlkIG9mIHRoZSBXZWIgTm90aWZpY2F0aW9uIENlbnRlciBpbnN0YW5jZS5cIil9fSw5Mjk6KGUsdCk9PntPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sOTY1OihlLHQpPT57T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5UZW1wbGF0ZUZyYWdtZW50TmFtZXM9dC5QcmVzZW50YXRpb25UZW1wbGF0ZUZyYWdtZW50TmFtZXM9dC5Db250YWluZXJUZW1wbGF0ZUZyYWdtZW50TmFtZXM9dC5UZW1wbGF0ZU5hbWVzPXZvaWQgMCx0LlRlbXBsYXRlTmFtZXM9e21hcmtkb3duOlwibWFya2Rvd25cIixsaXN0OlwibGlzdFwiLGN1c3RvbTpcImN1c3RvbVwifSx0LkNvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnROYW1lcz17Y29udGFpbmVyOlwiY29udGFpbmVyXCJ9LHQuUHJlc2VudGF0aW9uVGVtcGxhdGVGcmFnbWVudE5hbWVzPXt0ZXh0OlwidGV4dFwiLGltYWdlOlwiaW1hZ2VcIixsaXN0OlwibGlzdFwiLGFjdGlvbmFibGVUZXh0OlwiYWN0aW9uYWJsZVRleHRcIn0sdC5UZW1wbGF0ZUZyYWdtZW50TmFtZXM9T2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQuQ29udGFpbmVyVGVtcGxhdGVGcmFnbWVudE5hbWVzKSx0LlByZXNlbnRhdGlvblRlbXBsYXRlRnJhZ21lbnROYW1lcyl9fSx0PXt9O3JldHVybiBmdW5jdGlvbiBuKGkpe3ZhciBvPXRbaV07aWYodm9pZCAwIT09bylyZXR1cm4gby5leHBvcnRzO3ZhciByPXRbaV09e2V4cG9ydHM6e319O3JldHVybiBlW2ldLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLG4pLHIuZXhwb3J0c30oNTM2KX0pKCkpKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cbmltcG9ydCAqIGFzIE5vdGlmaWNhdGlvbnMgZnJvbSBcIkBvcGVuZmluL25vdGlmaWNhdGlvbnNcIjtcblxuY29uc3QgTk9USUZJQ0FUSU9OX1NPVU5EX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUwL2Fzc2V0cy9ub3RpZmljYXRpb24ubXAzXCI7XG5cbi8vIEtlZXAgdHJhY2sgb2Ygbm90aWZpY2F0aW9ucyB3ZSBhcmUgdXBkYXRpbmdcbmNvbnN0IHVwZGF0YWJsZU5vdGlmaWNhdGlvbnM6IHtcblx0W2lkOiBzdHJpbmddOiBOb3RpZmljYXRpb25zLlRlbXBsYXRlTWFya2Rvd24gJiB7IGN1c3RvbURhdGE6IHsgY291bnQ6IG51bWJlciB9IH07XG59ID0ge307XG5sZXQgdXBkYXRhYmxlTm90aWZpY2F0aW9uVGltZXI6IG51bWJlciB8IHVuZGVmaW5lZDtcblxubGV0IGxvZ2dpbmdFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG5sZXQgY29kZUVsZW1lbnQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBudWxsO1xuXG5sZXQgY29ubmVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5sZXQgY29ubmVjdGVkVmVyc2lvbjogc3RyaW5nIHwgbnVsbDtcbmxldCBzdGF0dXNJbnRlcnZhbElkOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5sZXQgbGFzdENvbm5lY3Rpb25TdGF0dXM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdFx0YXdhaXQgaW5pdGlhbGl6ZU5vdGlmaWNhdGlvbnMoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgdGhlIERPTSBlbGVtZW50cyBhbmQgc2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIFVJIGNvbnRyb2xzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRsb2dnaW5nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nZ2luZ1wiKTtcblx0Y29kZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvZGVcIik7XG5cdGNvbnN0IGxvZ2dpbmdDb250YWluZXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nZ2luZy1jb250YWluZXJcIik7XG5cdGNvbnN0IGNvZGVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29kZS1jb250YWluZXJcIik7XG5cblx0aWYgKCFjb2RlRWxlbWVudCB8fCAhbG9nZ2luZ0VsZW1lbnQgfHwgIWxvZ2dpbmdDb250YWluZXIgfHwgIWNvZGVDb250YWluZXIpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsb2dnaW5nQWRkRW50cnkoYExpYnJhcnkgVmVyc2lvbjogJHtOb3RpZmljYXRpb25zLlZFUlNJT059YCk7XG5cblx0Y29uc3QgYnRuTG9nZ2luZ0NsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Mb2dnaW5nQ2xlYXJcIik7XG5cdGlmIChidG5Mb2dnaW5nQ2xlYXIpIHtcblx0XHRidG5Mb2dnaW5nQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGlmIChsb2dnaW5nRWxlbWVudCkge1xuXHRcdFx0XHRsb2dnaW5nRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Db2RlQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuQ29kZUNvcHlcIik7XG5cdGlmIChidG5Db2RlQ29weSkge1xuXHRcdGJ0bkNvZGVDb3B5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRpZiAoY29kZUVsZW1lbnQpIHtcblx0XHRcdFx0YXdhaXQgZmluLkNsaXBib2FyZC53cml0ZVRleHQoeyBkYXRhOiBjb2RlRWxlbWVudC52YWx1ZSB9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bkNvZGVOb3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bkNvZGVOb3RpZmljYXRpb25cIik7XG5cdGlmIChidG5Db2RlTm90aWZpY2F0aW9uKSB7XG5cdFx0YnRuQ29kZU5vdGlmaWNhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKGNvZGVFbGVtZW50KSB7XG5cdFx0XHRcdFx0Y29uc3Qgbm90aWZpY2F0aW9uT3B0aW9uczogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0gSlNPTi5wYXJzZShjb2RlRWxlbWVudC52YWx1ZSk7XG5cdFx0XHRcdFx0bm90aWZpY2F0aW9uT3B0aW9ucy5pZCA9IHJhbmRvbVVVSUQoKTtcblx0XHRcdFx0XHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uT3B0aW9ucyk7XG5cdFx0XHRcdFx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uT3B0aW9ucyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge31cblx0XHR9KTtcblx0fVxuXG5cdGNvZGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG5cdFx0aWYgKGNvZGVFbGVtZW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRKU09OLnBhcnNlKGNvZGVFbGVtZW50LnZhbHVlKTtcblx0XHRcdFx0Y29kZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvZGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdGNvZGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5cdGlmIChsb2dnaW5nQ29udGFpbmVyKSB7XG5cdFx0bG9nZ2luZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdH1cblxuXHRjb25zdCBidG5WaWV3TG9nZ2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuVmlld0xvZ2dpbmdcIik7XG5cdGlmIChidG5WaWV3TG9nZ2luZykge1xuXHRcdGJ0blZpZXdMb2dnaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRsb2dnaW5nQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHRcdGNvZGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgYnRuVmlld0NvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0blZpZXdDb2RlXCIpO1xuXHRpZiAoYnRuVmlld0NvZGUpIHtcblx0XHRidG5WaWV3Q29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0bG9nZ2luZ0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRjb2RlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvblNpbXBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTm90aWZpY2F0aW9uU2ltcGxlXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uU2ltcGxlKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uU2ltcGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBzaG93U2ltcGxlTm90aWZpY2F0aW9uKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3MpIHtcblx0XHRidG5Ob3RpZmljYXRpb25Cb2R5RGlzbWlzcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gc2hvd1NpbXBsZU5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3NBY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzQWN0aW9uXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uQm9keURpc21pc3NBY3Rpb24pIHtcblx0XHRidG5Ob3RpZmljYXRpb25Cb2R5RGlzbWlzc0FjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT5cblx0XHRcdHNob3dTaW1wbGVOb3RpZmljYXRpb25Cb2R5RGlzbWlzc0FjdGlvbigpXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbkFjdGlvbmFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvbkFjdGlvbmFibGVcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25BY3Rpb25hYmxlKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uQWN0aW9uYWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gc2hvd0FjdGlvbmFibGVOb3RpZmljYXRpb24oKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25Gb3JtXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uRm9ybSkge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHNob3dGb3JtTm90aWZpY2F0aW9uKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uRm9ybUFkdmFuY2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25Gb3JtQWR2YW5jZWRcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25Gb3JtQWR2YW5jZWQpIHtcblx0XHRidG5Ob3RpZmljYXRpb25Gb3JtQWR2YW5jZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHNob3dGb3JtQWR2YW5jZWROb3RpZmljYXRpb24oKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25VcGRhdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bk5vdGlmaWNhdGlvblVwZGF0YWJsZVwiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvblVwZGF0YWJsZSkge1xuXHRcdGJ0bk5vdGlmaWNhdGlvblVwZGF0YWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gc2hvd1VwZGF0YWJsZU5vdGlmaWNhdGlvbigpKTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvbkN1c3RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTm90aWZpY2F0aW9uQ3VzdG9tXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uQ3VzdG9tKSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uQ3VzdG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBzaG93Q3VzdG9tTm90aWZpY2F0aW9uKCkpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uV2l0aFNvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25XaXRoU291bmRcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25XaXRoU291bmQpIHtcblx0XHRidG5Ob3RpZmljYXRpb25XaXRoU291bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+XG5cdFx0XHRzaG93U291bmROb3RpZmljYXRpb24oTk9USUZJQ0FUSU9OX1NPVU5EX1VSTClcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uQ2VudGVyVXNlclNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3NcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3MpIHtcblx0XHRidG5Ob3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+XG5cdFx0XHRnZXROb3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3MoKVxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25XaXRoSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25XaXRoSW5kaWNhdG9yXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uV2l0aEluZGljYXRvcikge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbldpdGhJbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHNob3dJbmRpY2F0b3JOb3RpZmljYXRpb24oKSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25XaXRoQ3VzdG9tSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5Ob3RpZmljYXRpb25XaXRoQ3VzdG9tSW5kaWNhdG9yXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uV2l0aEN1c3RvbUluZGljYXRvcikge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbldpdGhDdXN0b21JbmRpY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+XG5cdFx0XHRzaG93Q3VzdG9tSW5kaWNhdG9yTm90aWZpY2F0aW9uKClcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgYnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG5Ob3RpZmljYXRpb25zQ2VudGVyU2hvd1wiKTtcblx0aWYgKGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93KSB7XG5cdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0YXdhaXQgTm90aWZpY2F0aW9ucy5zaG93KCk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGAke2Vycn1gKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBidG5Ob3RpZmljYXRpb25zQ2VudGVySGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bk5vdGlmaWNhdGlvbnNDZW50ZXJIaWRlXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uc0NlbnRlckhpZGUpIHtcblx0XHRidG5Ob3RpZmljYXRpb25zQ2VudGVySGlkZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlckhpZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRhd2FpdCBOb3RpZmljYXRpb25zLmhpZGUoKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoYCR7ZXJyfWApO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0YnRuTm90aWZpY2F0aW9uc0NlbnRlckhpZGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGJ0bk5vdGlmaWNhdGlvblN0dWRpb09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG5Ob3RpZmljYXRpb25TdHVkaW9PcGVuXCIpO1xuXHRpZiAoYnRuTm90aWZpY2F0aW9uU3R1ZGlvT3Blbikge1xuXHRcdGJ0bk5vdGlmaWNhdGlvblN0dWRpb09wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGJ0bk5vdGlmaWNhdGlvblN0dWRpb09wZW4uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRhd2FpdCBmaW4uQXBwbGljYXRpb24uc3RhcnRGcm9tTWFuaWZlc3QoXCJodHRwczovL2Nkbi5vcGVuZmluLmNvL3N0dWRpby9ub3RpZmljYXRpb24vYXBwLmpzb25cIik7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRidG5Ob3RpZmljYXRpb25TdHVkaW9PcGVuLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgbm90aWZpY2F0aW9ucyBieSByZWdpc3RlcmluZyBhbmQgbG9nZ2luZyB0aGUgY291bnQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVOb3RpZmljYXRpb25zKCk6IFByb21pc2U8dm9pZD4ge1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLnJlZ2lzdGVyKCk7XG5cdGF3YWl0IGluaXRpYWxpemVMaXN0ZW5lcnMoKTtcblx0Y29uc29sZS5sb2coXCJOdW1iZXIgb2Ygbm90aWZpY2F0aW9uczpcIiwgYXdhaXQgTm90aWZpY2F0aW9ucy5nZXROb3RpZmljYXRpb25zQ291bnQoKSk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgbGlzdGVuZXJzIGZvciB0aGUgZXZlbnRzIGZyb20gdGhlIG5vdGlmaWNhdGlvbiBjZW50ZXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVMaXN0ZW5lcnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdC8vIExpc3RlbiBmb3IgbmV3IG5vdGlmaWNhdGlvbnMgYmVpbmcgY3JlYXRlZFxuXHRhd2FpdCBOb3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb24tY3JlYXRlZFwiLCAoZXZlbnQpID0+IHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYENyZWF0ZWQ6ICR7ZXZlbnQubm90aWZpY2F0aW9uLmlkfWApO1xuXHR9KTtcblxuXHRhd2FpdCBOb3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb24tY2xvc2VkXCIsIChldmVudCkgPT4ge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgQ2xvc2VkOiAke2V2ZW50Lm5vdGlmaWNhdGlvbi5pZH1gKTtcblxuXHRcdGlmICh1cGRhdGFibGVOb3RpZmljYXRpb25zW2V2ZW50Lm5vdGlmaWNhdGlvbi5pZF0pIHtcblx0XHRcdGRlbGV0ZSB1cGRhdGFibGVOb3RpZmljYXRpb25zW2V2ZW50Lm5vdGlmaWNhdGlvbi5pZF07XG5cdFx0XHRpZiAoT2JqZWN0LmtleXModXBkYXRhYmxlTm90aWZpY2F0aW9ucykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHdpbmRvdy5jbGVhckludGVydmFsKHVwZGF0YWJsZU5vdGlmaWNhdGlvblRpbWVyKTtcblx0XHRcdFx0dXBkYXRhYmxlTm90aWZpY2F0aW9uVGltZXIgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRhd2FpdCBOb3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb24tYWN0aW9uXCIsIGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGlmIChldmVudD8ucmVzdWx0Py5hY3Rpb25JZCA9PT0gXCJvcGVuLXdlYi1zaXRlXCIpIHtcblx0XHRcdGF3YWl0IGZpbi5TeXN0ZW0ub3BlblVybFdpdGhCcm93c2VyKGV2ZW50Py5yZXN1bHQ/LnVybCBhcyBzdHJpbmcpO1xuXHRcdH0gZWxzZSBpZiAoZXZlbnQ/LnJlc3VsdD8uQk9EWV9DTElDSyA9PT0gXCJkaXNtaXNzX2V2ZW50XCIpIHtcblx0XHRcdGlmIChldmVudC5ub3RpZmljYXRpb24/LmN1c3RvbURhdGE/LmFjdGlvbikge1xuXHRcdFx0XHRsb2dnaW5nQWRkRW50cnkoXG5cdFx0XHRcdFx0YFxcdERhdGE6ICR7XG5cdFx0XHRcdFx0XHRldmVudD8ubm90aWZpY2F0aW9uPy5jdXN0b21EYXRhID8gSlNPTi5zdHJpbmdpZnkoZXZlbnQubm90aWZpY2F0aW9uLmN1c3RvbURhdGEpIDogXCJOb25lXCJcblx0XHRcdFx0XHR9YFxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiXFx0Tm8gYWN0aW9uXCIpO1xuXHRcdFx0fVxuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KFwiXFx0Qm9keSBjbGljayBkaXNtaXNzXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoXG5cdFx0XHRcdGBcXHREYXRhOiAke2V2ZW50Py5yZXN1bHQ/LmN1c3RvbURhdGEgPyBKU09OLnN0cmluZ2lmeShldmVudC5yZXN1bHQuY3VzdG9tRGF0YSkgOiBcIk5vbmVcIn1gXG5cdFx0XHQpO1xuXHRcdFx0bG9nZ2luZ0FkZEVudHJ5KGBcXHRUYXNrOiAke2V2ZW50Py5yZXN1bHQ/LnRhc2sgPz8gXCJOb25lXCJ9YCk7XG5cdFx0XHRsb2dnaW5nQWRkRW50cnkoYEFjdGlvbjogJHtldmVudC5ub3RpZmljYXRpb24uaWR9YCk7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coZXZlbnQpO1xuXHR9KTtcblxuXHRhd2FpdCBOb3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb24tdG9hc3QtZGlzbWlzc2VkXCIsIChldmVudCkgPT4ge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgVG9hc3QgRGlzbWlzc2VkOiAke2V2ZW50Lm5vdGlmaWNhdGlvbi5pZH1gKTtcblx0fSk7XG5cblx0YXdhaXQgTm90aWZpY2F0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLWZvcm0tc3VibWl0dGVkXCIsIChldmVudCkgPT4ge1xuXHRcdGxvZ2dpbmdBZGRFbnRyeShgXFx0RGF0YTogJHtldmVudD8uZm9ybSA/IEpTT04uc3RyaW5naWZ5KGV2ZW50LmZvcm0pIDogXCJOb25lXCJ9YCk7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBGb3JtOiAke2V2ZW50Lm5vdGlmaWNhdGlvbi5pZH1gKTtcblx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cdH0pO1xuXG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbnMtY291bnQtY2hhbmdlZFwiLCAoZXZlbnQpID0+IHtcblx0XHRzaG93Tm90aWZpY2F0aW9uQ291bnQoZXZlbnQuY291bnQpO1xuXHR9KTtcblxuXHRhd2FpdCBOb3RpZmljYXRpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJub3RpZmljYXRpb24tc291bmQtdG9nZ2xlZFwiLCAoZXZlbnQpID0+IHtcblx0XHRsb2dnaW5nQWRkRW50cnkoYFNvdW5kIEVuYWJsZWQ6ICR7ZXZlbnQubm90aWZpY2F0aW9uU291bmRFbmFibGVkfWApO1xuXHR9KTtcblxuXHRhZGRDb25uZWN0aW9uQ2hhbmdlZEV2ZW50TGlzdGVuZXIoKHN0YXR1cykgPT4ge1xuXHRcdGlmIChzdGF0dXMuY29ubmVjdGVkICE9PSBjb25uZWN0ZWQpIHtcblx0XHRcdGNvbm5lY3RlZCA9IHN0YXR1cy5jb25uZWN0ZWQ7XG5cdFx0XHRjb25uZWN0ZWRWZXJzaW9uID0gc3RhdHVzLnZlcnNpb247XG5cdFx0XHR1cGRhdGVDb25uZWN0ZWRTdGF0ZSgpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIFVVSUQgc3RyaW5nLlxuICogQHJldHVybnMgQSByYW5kb21seSBnZW5lcmF0ZWQgVVVJRC5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tVVVJRCgpOiBzdHJpbmcge1xuXHRpZiAoXCJyYW5kb21VVUlEXCIgaW4gd2luZG93LmNyeXB0bykge1xuXHRcdC8vIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIHdpbmRvdy5jcnlwdG8ucmFuZG9tVVVJRCwgdXNlIGl0XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0cmV0dXJuIHdpbmRvdy5jcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHR9XG5cdC8vIFBvbHlmaWxsIHRoZSB3aW5kb3cuY3J5cHRvLnJhbmRvbVVVSUQgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gYSBub24gc2VjdXJlIGNvbnRleHQgdGhhdCBkb2Vzbid0IGhhdmUgaXRcblx0Ly8gd2UgYXJlIHN0aWxsIHVzaW5nIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzIHdoaWNoIGlzIGFsd2F5cyBhdmFpbGFibGVcblx0Ly8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjMvMjgwMDIxOFxuXHQvKipcblx0ICogR2V0IHJhbmRvbSBoZXggdmFsdWUuXG5cdCAqIEBwYXJhbSBjIFRoZSBudW1iZXIgdG8gYmFzZSB0aGUgcmFuZG9tIHZhbHVlIG9uLlxuXHQgKiBAcmV0dXJucyBUaGUgcmFuZG9tIHZhbHVlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0UmFuZG9tSGV4KGM6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRjb25zdCBybmQgPSB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJiAoMTUgPj4gKE51bWJlcihjKSAvIDQpKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2Vcblx0XHRcdChOdW1iZXIoYykgXiBybmQpLnRvU3RyaW5nKDE2KVxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIFwiMTAwMDAwMDAtMTAwMC00MDAwLTgwMDAtMTAwMDAwMDAwMDAwXCIucmVwbGFjZSgvWzAxOF0vZywgZ2V0UmFuZG9tSGV4KTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgZW50cnkgaW4gdG8gdGhlIGxvZ2dpbmcgd2luZG93LlxuICogQHBhcmFtIGVudHJ5IFRoZSBlbnRyeSB0byBhZGQuXG4gKi9cbmZ1bmN0aW9uIGxvZ2dpbmdBZGRFbnRyeShlbnRyeTogc3RyaW5nKTogdm9pZCB7XG5cdGlmIChsb2dnaW5nRWxlbWVudCkge1xuXHRcdGxvZ2dpbmdFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZW50cnl9XFxuXFxuJHtsb2dnaW5nRWxlbWVudC50ZXh0Q29udGVudH1gO1xuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBjb2RlIGV4YW1wbGUgd2l0aCB0aGUgbm90aWZpY2F0aW9uLlxuICogQHBhcmFtIG5vdGlmaWNhdGlvbk9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gc2hvdyBpbiB0aGUgY29kZSBleGFtcGxlLlxuICovXG5mdW5jdGlvbiBjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uT3B0aW9uczogTm90aWZpY2F0aW9uT3B0aW9ucyk6IHZvaWQge1xuXHRpZiAoY29kZUVsZW1lbnQpIHtcblx0XHRjb2RlRWxlbWVudC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG5vdGlmaWNhdGlvbk9wdGlvbnMsIHVuZGVmaW5lZCwgXCIgIFwiKTtcblx0fVxufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgY29ubmVjdGVkIHN0YXRlIG9uIHRoZSB2aWV3LlxuICovXG5mdW5jdGlvbiB1cGRhdGVDb25uZWN0ZWRTdGF0ZSgpOiB2b2lkIHtcblx0bG9nZ2luZ0FkZEVudHJ5KGBJcyBDb25uZWN0ZWQ6ICR7Y29ubmVjdGVkfWApO1xuXHRpZiAoY29ubmVjdGVkKSB7XG5cdFx0bG9nZ2luZ0FkZEVudHJ5KGBDb25uZWN0ZWQgVmVyc2lvbjogJHtjb25uZWN0ZWRWZXJzaW9ufWApO1xuXHR9XG5cblx0Y29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG5cdGZvciAoY29uc3QgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcblx0XHRidXR0b24uZGlzYWJsZWQgPSAhY29ubmVjdGVkO1xuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBub3RpZmljYXRpb24gY291bnQgb24gdGhlIHZpZXcuXG4gKiBAcGFyYW0gY291bnQgVGhlIG5ldyBjb3VudCB0byBkaXNwbGF5LlxuICovXG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uQ291bnQoY291bnQ6IG51bWJlcik6IHZvaWQge1xuXHRjb25zdCBidG5Ob3RpZmljYXRpb25zQ2VudGVyU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuTm90aWZpY2F0aW9uc0NlbnRlclNob3dcIik7XG5cdGlmIChidG5Ob3RpZmljYXRpb25zQ2VudGVyU2hvdykge1xuXHRcdGJ0bk5vdGlmaWNhdGlvbnNDZW50ZXJTaG93LnRleHRDb250ZW50ID0gYFNob3cgWyR7Y291bnR9XWA7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXNwbGF5IGEgdmVyeSBiYXNpYyBzaW1wbGUgbm90aWZpY2F0aW9uLlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93U2ltcGxlTm90aWZpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJTaW1wbGUgTm90aWZpY2F0aW9uXCIsXG5cdFx0Ym9keTogXCJUaGlzIGlzIGEgc2ltcGxlIG5vdGlmaWNhdGlvblwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJtYXJrZG93blwiLFxuXHRcdGlkOiByYW5kb21VVUlEKCksXG5cdFx0c291bmRPcHRpb25zOiB7XG5cdFx0XHRtb2RlOiBcInNpbGVudFwiXG5cdFx0fVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xufVxuXG4vKipcbiAqIFNob3cgYSBub3RpZmljYXRpb24gd2hpY2ggY2FuIGJlIGRpc21pc3NlZCBieSBjbGlja2luZyBvbiB0aGUgYm9keS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd1NpbXBsZU5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJTaW1wbGUgTm90aWZpY2F0aW9uXCIsXG5cdFx0Ym9keTogXCJUaGlzIGlzIGEgc2ltcGxlIG5vdGlmaWNhdGlvbiB0aGF0IGJlIGRpc21pc3NlZCBieSBjbGlja2luZyB0aGUgYm9keVwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJtYXJrZG93blwiLFxuXHRcdGlkOiByYW5kb21VVUlEKCksXG5cdFx0b25TZWxlY3Q6IHsgQk9EWV9DTElDSzogTm90aWZpY2F0aW9ucy5BY3Rpb25Cb2R5Q2xpY2tUeXBlLkRJU01JU1NfRVZFTlQgfVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xufVxuXG4vKipcbiAqIFNob3cgYSBub3RpZmljYXRpb24gd2hpY2ggY2FuIGJlIGRpc21pc3NlZCBieSBjbGlja2luZyBvbiB0aGUgYm9keSBhbmQgdGhlbiB0cmlnZ2VyIGEgY3VzdG9tIGFjdGlvbi5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd1NpbXBsZU5vdGlmaWNhdGlvbkJvZHlEaXNtaXNzQWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJTaW1wbGUgTm90aWZpY2F0aW9uXCIsXG5cdFx0Ym9keTogXCJUaGlzIGlzIGEgc2ltcGxlIG5vdGlmaWNhdGlvbiB0aGF0IGJlIGRpc21pc3NlZCBieSBjbGlja2luZyB0aGUgYm9keSBhbmQgdHJpZ2dlciBjdXN0b20gYWN0aW9uXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCIsXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKSxcblx0XHRvblNlbGVjdDogeyBCT0RZX0NMSUNLOiBOb3RpZmljYXRpb25zLkFjdGlvbkJvZHlDbGlja1R5cGUuRElTTUlTU19FVkVOVCB9LFxuXHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdGFjdGlvbjogXCJjdXN0b20tYWN0aW9uXCIsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdG1lc3NhZ2U6IFwiQm9keSBjbGljayBjdXN0b20gYWN0aW9uXCJcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG59XG5cbi8qKlxuICogU2hvdyBhIG5vdGlmaWNhdGlvbiB3aGljaCBoYXMgYWN0aW9uIGJ1dHRvbnMsIHRoZSBldmVudHMgcmV0dXJuZWQgd2lsbFxuICogYmUgaGFuZGxlZCB0aGUgdGhlIG5vdGlmaWNhdGlvbi1hY3Rpb24gbGlzdGVuZXIuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dBY3Rpb25hYmxlTm90aWZpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJBY3Rpb25hYmxlIE5vdGlmaWNhdGlvblwiLFxuXHRcdGJvZHk6IFwiVGhpcyBpcyBhIG5vdGlmaWNhdGlvbiB0aGF0IGhhcyBhbiBhY3Rpb25cIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRpZDogcmFuZG9tVVVJRCgpLFxuXHRcdGJ1dHRvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGl0bGU6IFwiQWNrbm93bGVkZ2VkXCIsXG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdGN0YTogdHJ1ZSxcblx0XHRcdFx0b25DbGljazoge1xuXHRcdFx0XHRcdHRhc2s6IFwiYWNrbm93bGVkZ2UtdGFza1wiLFxuXHRcdFx0XHRcdGN1c3RvbURhdGE6IHtcblx0XHRcdFx0XHRcdG1lc3NhZ2U6IFwiVGhpcyBpcyB0aGUgcmVzcG9uc2UgZGF0YVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJDYW5jZWxcIixcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIlxuXHRcdFx0fVxuXHRcdF1cblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBTaG93IGEgbm90aWZpY2F0aW9uIHdoaWNoIGhhcyBmb3JtIGZpZWxkcywgdGhlIGRhdGEgZnJvbSB0aGUgZm9ybSB3aWxsXG4gKiBiZSByZXR1cm5lZCB0byB0aGUgbm90aWZpY2F0aW9uLWZvcm0tc3VibWl0dGVkIGxpc3RlbmVyLlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93Rm9ybU5vdGlmaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiRm9ybSBOb3RpZmljYXRpb25cIixcblx0XHRib2R5OiBcIlRoaXMgaXMgYSBub3RpZmljYXRpb24gdGhhdCBoYXMgZm9ybSBkYXRhXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiZGVmYXVsdFwiLFxuXHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCIsXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKSxcblx0XHRmb3JtOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGtleTogXCJhbW91bnRcIixcblx0XHRcdFx0bGFiZWw6IFwiQW1vdW50XCIsXG5cdFx0XHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiTnVtYmVyXCIsXG5cdFx0XHRcdFx0bWF4OiAxMDAsXG5cdFx0XHRcdFx0bWluOiAxXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRtaW46IHtcblx0XHRcdFx0XHRcdGFyZzogMSxcblx0XHRcdFx0XHRcdGludmFsaWRNZXNzYWdlOiBcIk11c3QgYmUgYXQgbGVhc3QgMVwiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRtYXg6IHtcblx0XHRcdFx0XHRcdGFyZzogMTAwLFxuXHRcdFx0XHRcdFx0aW52YWxpZE1lc3NhZ2U6IFwiQ2Fubm90IGJlIG1vcmUgdGhhbiAxMDBcIlxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdGFyZzogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0YnV0dG9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJTYXZlXCIsXG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdGN0YTogdHJ1ZSxcblx0XHRcdFx0c3VibWl0OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJDYW5jZWxcIixcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIlxuXHRcdFx0fVxuXHRcdF1cblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBTaG93IGEgbm90aWZpY2F0aW9uIHdoaWNoIGhhcyBmb3JtIGZpZWxkcywgdGhlIGRhdGEgZnJvbSB0aGUgZm9ybSB3aWxsXG4gKiBiZSByZXR1cm5lZCB0byB0aGUgbm90aWZpY2F0aW9uLWZvcm0tc3VibWl0dGVkIGxpc3RlbmVyLlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93Rm9ybUFkdmFuY2VkTm90aWZpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJGb3JtIEFkdmFuY2VkIE5vdGlmaWNhdGlvblwiLFxuXHRcdGJvZHk6IFwiVGhpcyBpcyBhIG5vdGlmaWNhdGlvbiB0aGF0IGhhcyBmb3JtIGRhdGFcIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRpZDogcmFuZG9tVVVJRCgpLFxuXHRcdGZvcm06IFtcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdFx0a2V5OiBcImJvb2tcIixcblx0XHRcdFx0bGFiZWw6IFwiQm9va1wiLFxuXHRcdFx0XHRoZWxwZXJUZXh0OiBcIlRoaXMgaXMgdXNlZCB0byBsb29rIHVwIGZvciBib29rXCIsXG5cdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiVGV4dFwiLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIkJvb2sgbmFtZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRtaW46IHtcblx0XHRcdFx0XHRcdGFyZzogNyxcblx0XHRcdFx0XHRcdGludmFsaWRNZXNzYWdlOiBcIk11c3QgYmUgYXQgbGVhc3QgNyBjaGFycyBsb25nXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG1heDoge1xuXHRcdFx0XHRcdFx0YXJnOiA5LFxuXHRcdFx0XHRcdFx0aW52YWxpZE1lc3NhZ2U6IFwiTXVzdCBiZSBhdCBtb3N0IDkgY2hhcnMgbG9uZ1wiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0YXJnOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWx1ZTogXCIxMjM0NTU0XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IFwidGltZVwiLFxuXHRcdFx0XHRrZXk6IFwid2hhdF90aW1lXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkNob3NlIHRpbWU/XCIsXG5cdFx0XHRcdGhlbHBlclRleHQ6IFwiU29tZSB0aW1lIGNob29zaW5nIGhlbHBlciB0ZXh0XCIsXG5cdFx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdFx0aG91cjogMTJcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRhcmc6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiVGltZVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IFwiZGF0ZVwiLFxuXHRcdFx0XHRrZXk6IFwiZGF0ZV9waWNrdXBcIixcblx0XHRcdFx0bGFiZWw6IFwiV2hlbiB0byBwaWNrIHVwP1wiLFxuXHRcdFx0XHRoZWxwZXJUZXh0OiBcIlNvbWUgZGF0ZSBjaG9vc2luZyBoZWxwZXIgdGV4dFwiLFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdGFyZzogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0d2lkZ2V0OiB7XG5cdFx0XHRcdFx0dHlwZTogXCJEYXRlXCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdFx0a2V5OiBcImJvb2syXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkJvb2sgVHlwZVwiLFxuXHRcdFx0XHRoZWxwZXJUZXh0OiBcIlRoaXMgaXMgdXNlZCB0byBsb29rIHVwIGZvciBib29rXCIsXG5cdFx0XHRcdHZhbGlkYXRpb246IHtcblx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0YXJnOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR3aWRnZXQ6IHtcblx0XHRcdFx0XHR0eXBlOiBcIkRyb3Bkb3duXCIsXG5cdFx0XHRcdFx0b3B0aW9uczogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogXCJib29rMVwiLFxuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJCb29rIDFcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmFsdWU6IFwiYm9vazJcIixcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiQm9vayAyXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBcImJvb2szXCIsXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIkJvb2sgM1wiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiBcInJhZGlvR3JvdXBcIixcblx0XHRcdFx0a2V5OiBcInJhZGlvR3JvdXBEZW1vXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkNob3NlIG9uZVwiLFxuXHRcdFx0XHRoZWxwZXJUZXh0OiBcIlNvbWUgcmFkaW8gY2hvb3NpbmcgaGVscGVyIHRleHRcIixcblx0XHRcdFx0dmFsdWU6IFwib3B0aW9uXzFcIixcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRhcmc6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiUmFkaW9Hcm91cFwiLFxuXHRcdFx0XHRcdGdyb3VwOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIk9wdGlvbiAxXCIsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBcIm9wdGlvbl8xXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIk9wdGlvbiAyXCIsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBcIm9wdGlvbl8yXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIk9wdGlvbiAzXCIsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBcIm9wdGlvbl8zXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IFwiY2hlY2tib3hHcm91cFwiLFxuXHRcdFx0XHRrZXk6IFwiY2hlY2tib3hHcm91cERlbW9cIixcblx0XHRcdFx0bGFiZWw6IFwiQ2hvc2UgTXVsdGlwbGVcIixcblx0XHRcdFx0aGVscGVyVGV4dDogXCJTb21lIGNoZWNrYm94IGNob29zaW5nIGhlbHBlciB0ZXh0XCIsXG5cdFx0XHRcdHZhbHVlOiBbXCJvcHRpb25fMVwiLCBcIm9wdGlvbl8yXCJdLFxuXHRcdFx0XHR2YWxpZGF0aW9uOiB7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdGFyZzogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0d2lkZ2V0OiB7XG5cdFx0XHRcdFx0dHlwZTogXCJDaGVja2JveEdyb3VwXCIsXG5cdFx0XHRcdFx0Z3JvdXA6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiT3B0aW9uIDFcIixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IFwib3B0aW9uXzFcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiT3B0aW9uIDJcIixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IFwib3B0aW9uXzJcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiT3B0aW9uIDNcIixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IFwib3B0aW9uXzNcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdFx0a2V5OiBcImRlc2NyaXB0aW9uXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG5cdFx0XHRcdHZhbHVlOiBcInZlcnkgbG9uZyB0ZXh0Li4uLlwiLFxuXHRcdFx0XHRoZWxwZXJUZXh0OiBcIlRoaXMgaXMgdXNlZCB0byBsb29rIHVwIGZvciBib29rXCIsXG5cdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdHR5cGU6IFwiVGV4dFwiLFxuXHRcdFx0XHRcdG11bHRpbGluZTogdHJ1ZSxcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCJXcml0ZSBkZXNjcmlwdGlvblwiLFxuXHRcdFx0XHRcdHJvd3M6IDVcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogXCJudW1iZXJcIixcblx0XHRcdFx0a2V5OiBcImFnZVwiLFxuXHRcdFx0XHRsYWJlbDogXCJBZ2VcIixcblx0XHRcdFx0aGVscGVyVGV4dDogXCJUaGlzIGlzIHVzZWQgdG8gbG9vayB1cCBmb3IgYm9va1wiLFxuXHRcdFx0XHR3aWRnZXQ6IHtcblx0XHRcdFx0XHR0eXBlOiBcIk51bWJlclwiLFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIkVudGVyIGFnZVwiLFxuXHRcdFx0XHRcdG1pbjogMSxcblx0XHRcdFx0XHRtYXg6IDhcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWRhdGlvbjoge1xuXHRcdFx0XHRcdG1pbjoge1xuXHRcdFx0XHRcdFx0YXJnOiAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRtYXg6IHtcblx0XHRcdFx0XHRcdGFyZzogOVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdGFyZzogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0YnV0dG9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJTYXZlXCIsXG5cdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdGN0YTogdHJ1ZSxcblx0XHRcdFx0c3VibWl0OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0aXRsZTogXCJDYW5jZWxcIixcblx0XHRcdFx0dHlwZTogXCJidXR0b25cIlxuXHRcdFx0fVxuXHRcdF1cblx0fTtcblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBTaG93IGEgbm90aWZpY2F0aW9uIHRoYXQgY2FuIGJlIHVwZGF0ZWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dVcGRhdGFibGVOb3RpZmljYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGlkID0gcmFuZG9tVVVJRCgpO1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyAmIHsgY3VzdG9tRGF0YTogeyBjb3VudDogbnVtYmVyIH0gfSA9IHtcblx0XHR0aXRsZTogXCJVcGRhdGFibGUgTm90aWZpY2F0aW9uXCIsXG5cdFx0Ym9keTogXCJUaGlzIGlzIGFuIHVwZGF0YWJsZSBub3RpZmljYXRpb25cIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRjdXN0b21EYXRhOiB7XG5cdFx0XHRjb3VudDogMFxuXHRcdH0sXG5cdFx0aWRcblx0fTtcblxuXHRpZiAoT2JqZWN0LmtleXModXBkYXRhYmxlTm90aWZpY2F0aW9ucykubGVuZ3RoID09PSAwKSB7XG5cdFx0dXBkYXRhYmxlTm90aWZpY2F0aW9uVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBub3RpZmljYXRpb25JZCBpbiB1cGRhdGFibGVOb3RpZmljYXRpb25zKSB7XG5cdFx0XHRcdHVwZGF0YWJsZU5vdGlmaWNhdGlvbnNbbm90aWZpY2F0aW9uSWRdLmN1c3RvbURhdGEuY291bnQrKztcblx0XHRcdFx0Y29uc3Qgbm90aWZpY2F0aW9uVXBkYXRlOiBOb3RpZmljYXRpb25zLlVwZGF0YWJsZU5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRcdFx0XHRib2R5OiBgVGhpcyBpcyBhbiB1cGRhdGFibGUgbm90aWZpY2F0aW9uICR7dXBkYXRhYmxlTm90aWZpY2F0aW9uc1tub3RpZmljYXRpb25JZF0uY3VzdG9tRGF0YS5jb3VudH1gLFxuXHRcdFx0XHRcdGlkOiBub3RpZmljYXRpb25JZFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGF3YWl0IE5vdGlmaWNhdGlvbnMudXBkYXRlKG5vdGlmaWNhdGlvblVwZGF0ZSk7XG5cdFx0XHR9XG5cdFx0fSwgMTAwMCk7XG5cdH1cblxuXHRjb2RlU2hvd0V4YW1wbGUobm90aWZpY2F0aW9uKTtcblx0YXdhaXQgTm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uKTtcblxuXHR1cGRhdGFibGVOb3RpZmljYXRpb25zW2lkXSA9IG5vdGlmaWNhdGlvbjtcbn1cblxuLyoqXG4gKiBTaG93IGEgbm90aWZpY2F0aW9uIHdpdGggY3VzdG9tIGNvbnRlbnQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dDdXN0b21Ob3RpZmljYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdHRpdGxlOiBcIkN1c3RvbSBOb3RpZmljYXRpb25cIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwiY3VzdG9tXCIsXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKSxcblx0XHR0ZW1wbGF0ZU9wdGlvbnM6IHtcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0Y29tcG9zaXRpb25zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bWluVGVtcGxhdGVBUElWZXJzaW9uOiBcIjFcIixcblx0XHRcdFx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiBcImNvbnRhaW5lclwiLFxuXHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0Z2FwOiBcIjEwcHhcIlxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJzdWJUaXRsZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJjb250YWluZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTBweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiZmlyc3RWYWx1ZVRpdGxlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEycHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiZmlyc3RWYWx1ZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxNHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogXCJyZWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJjb250YWluZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTBweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwic2Vjb25kVmFsdWVUaXRsZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMnB4XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcInNlY29uZFZhbHVlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjE0cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBcImJsdWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJpbWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJleGFtcGxlSW1hZ2VVcmxcIixcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjdGlvbmFibGVUZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImFjdGlvbmFibGVVcmxUaXRsZVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0dG9vbHRpcEtleTogXCJhY3Rpb25hYmxlVXJsVG9vbHRpcFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljazoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25JZDogXCJvcGVuLXdlYi1zaXRlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCJodHRwczovL2hlcmUuaW9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJjb250YWluZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZ3JpZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnIgMWZyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBcImF1dG9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImMwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjNweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3dyYXBcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImMxXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjNweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3dyYXBcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJlZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJjMlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIzcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJibHVlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImQwMFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjNweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3dyYXBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiZDAxXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJkMDJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIzcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm93cmFwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInRleHRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImQxMFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjNweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3dyYXBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFLZXk6IFwiZDExXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiM3B4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJkMTJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogXCIzcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm93cmFwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHRlbXBsYXRlRGF0YToge1xuXHRcdFx0c3ViVGl0bGU6IFwiU3ViIFRpdGxlIPCfmoBcIixcblx0XHRcdGZpcnN0VmFsdWVUaXRsZTogXCJGaXJzdCBWYWx1ZVwiLFxuXHRcdFx0Zmlyc3RWYWx1ZTogXCIxMDBcIixcblx0XHRcdHNlY29uZFZhbHVlVGl0bGU6IFwiU2Vjb25kIFZhbHVlXCIsXG5cdFx0XHRzZWNvbmRWYWx1ZTogXCIyMDBcIixcblx0XHRcdGMwOiBcIkNvbCAxXCIsXG5cdFx0XHRjMTogXCJDb2wgMlwiLFxuXHRcdFx0YzI6IFwiQ29sIDNcIixcblx0XHRcdGQwMDogXCI1MFwiLFxuXHRcdFx0ZDAxOiBcIjE1MFwiLFxuXHRcdFx0ZDAyOiBcIjI1MFwiLFxuXHRcdFx0ZDEwOiBcIjU1MFwiLFxuXHRcdFx0ZDExOiBcIjY1MFwiLFxuXHRcdFx0ZDEyOiBcIjc1MFwiLFxuXHRcdFx0ZXhhbXBsZUltYWdlVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9pbWFnZXMvZXhhbXBsZS5wbmdcIixcblx0XHRcdGFjdGlvbmFibGVVcmxUaXRsZTogXCJIRVJFIFdlYnNpdGVcIixcblx0XHRcdGFjdGlvbmFibGVVcmxUb29sdGlwOiBcImh0dHA6Ly93d3cuaGVyZS5pb1wiXG5cdFx0fVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xufVxuXG4vKipcbiAqIFNob3cgYSBub3RpZmljYXRpb24gYW5kIHBsYXkgYSBzb3VuZCB3aXRoIGl0LlxuICogQHBhcmFtIG5vdGlmaWNhdGlvblNvdW5kVXJsIFRoZSB1cmwgb2YgdGhlIHNvdW5kcyBmaWxlIHRvIHBsYXkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNob3dTb3VuZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Tb3VuZFVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdC8vIHdlIGRpc2FibGUgdGhlIHNvdW5kIGlmIGl0IGlzIGVuYWJsZWQgYXQgdGhlIE5vdGlmaWNhdGlvbiBDZW50ZXIgbGV2ZWxcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiU291bmQgTm90aWZpY2F0aW9uXCIsXG5cdFx0Ym9keTogXCJUaGlzIGlzIGEgbm90aWZpY2F0aW9uIHdpdGggc291bmQg8J+UiVwiLFxuXHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJtYXJrZG93blwiLFxuXHRcdHNvdW5kT3B0aW9uczogeyBtb2RlOiBcInNpbGVudFwiIH0sXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBwbGF5Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvblNvdW5kVXJsKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHVzZXIgc2V0dGluZ3MgZm9yIHRoZSBub3RpZmljYXRpb24gY2VudGVyLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXROb3RpZmljYXRpb25DZW50ZXJVc2VyU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IHN0YXR1cyA9IGF3YWl0IE5vdGlmaWNhdGlvbnMuZ2V0VXNlclNldHRpbmdTdGF0dXMoTm90aWZpY2F0aW9ucy5Vc2VyU2V0dGluZ3MuU09VTkRfRU5BQkxFRCk7XG5cdGxvZ2dpbmdBZGRFbnRyeShgU291bmQgRW5hYmxlZDogJHtzdGF0dXN9YCk7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIG5vdGlmaWNhdGlvbiB0aGF0IGhhcyBhbiBpbmRpY2F0b3IgYmFyIG9uIHRoZSBsZWZ0LlxuICovXG5hc3luYyBmdW5jdGlvbiBzaG93SW5kaWNhdG9yTm90aWZpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbnMuTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHR0aXRsZTogXCJJbmRpY2F0b3IgTm90aWZpY2F0aW9uXCIsXG5cdFx0dG9hc3Q6IFwidHJhbnNpZW50XCIsXG5cdFx0aW5kaWNhdG9yOiB7XG5cdFx0XHR0ZXh0OiBcIkxpbWl0XCJcblx0XHR9LFxuXHRcdGNhdGVnb3J5OiBcImRlZmF1bHRcIixcblx0XHR0ZW1wbGF0ZTogXCJjdXN0b21cIixcblx0XHRpZDogcmFuZG9tVVVJRCgpLFxuXHRcdHRlbXBsYXRlT3B0aW9uczoge1xuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRjb21wb3NpdGlvbnM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtaW5UZW1wbGF0ZUFQSVZlcnNpb246IFwiMVwiLFxuXHRcdFx0XHRcdFx0bGF5b3V0OiB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiY29udGFpbmVyXCIsXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRnYXA6IFwiMTBweFwiXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhS2V5OiBcImNvbnRlbnRcIlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdGluZGljYXRvcjoge1xuXHRcdFx0XHRhbGlnbjogXCJsZWZ0XCIsXG5cdFx0XHRcdGNvbG9yOiBOb3RpZmljYXRpb25zLkluZGljYXRvckNvbG9yLlJFRFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dGVtcGxhdGVEYXRhOiB7XG5cdFx0XHRjb250ZW50OiBcIlRoaXMgaXMgYSBjdXN0b20gbm90aWZpY2F0aW9uIHdpdGggYSByZWQgaW5kaWNhdG9yIHNob3dpbmcgdG8gdGhlIGxlZnQgb2YgdGhlIHRvYXN0XCJcblx0XHR9XG5cdH07XG5cblx0Y29kZVNob3dFeGFtcGxlKG5vdGlmaWNhdGlvbik7XG5cdGF3YWl0IE5vdGlmaWNhdGlvbnMuY3JlYXRlKG5vdGlmaWNhdGlvbik7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIG5vdGlmaWNhdGlvbiB0aGF0IGhhcyBhbiBjdXN0b20gaW5kaWNhdG9yIGJhciBjb2xvciB0aGVtZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2hvd0N1c3RvbUluZGljYXRvck5vdGlmaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbk9wdGlvbnMgPSB7XG5cdFx0dGl0bGU6IFwiQ3VzdG9tIEluZGljYXRvciBOb3RpZmljYXRpb25cIixcblx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0dGVtcGxhdGU6IFwiY3VzdG9tXCIsXG5cdFx0aWQ6IHJhbmRvbVVVSUQoKSxcblx0XHR0ZW1wbGF0ZU9wdGlvbnM6IHtcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0Y29tcG9zaXRpb25zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bWluVGVtcGxhdGVBUElWZXJzaW9uOiBcIjFcIixcblx0XHRcdFx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiBcImNvbnRhaW5lclwiLFxuXHRcdFx0XHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0Z2FwOiBcIjEwcHhcIlxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUtleTogXCJjb250ZW50XCJcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHRpbmRpY2F0b3I6IHtcblx0XHRcdFx0YWxpZ246IFwicmlnaHRcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5kaWNhdG9yOiB7XG5cdFx0XHRjb2xvcjogXCJjdXN0b20taW5kaWNhdG9yXCIsXG5cdFx0XHRmYWxsYmFjazogTm90aWZpY2F0aW9ucy5JbmRpY2F0b3JDb2xvci5SRUQsXG5cdFx0XHR0ZXh0OiBcIkFMRVJUISEhXCJcblx0XHR9LFxuXHRcdHRlbXBsYXRlRGF0YToge1xuXHRcdFx0Y29udGVudDogXCJUaGlzIGlzIGEgY3VzdG9tIG5vdGlmaWNhdGlvbiB3aXRoIGN1c3RvbSBpbmRpY2F0b3Igc3R5bGluZ1wiXG5cdFx0fVxuXHR9O1xuXG5cdGNvZGVTaG93RXhhbXBsZShub3RpZmljYXRpb24pO1xuXHRhd2FpdCBOb3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb24pO1xufVxuXG4vKipcbiAqIFBsYXkgYSBzb3VuZC5cbiAqIEBwYXJhbSBub3RpZmljYXRpb25Tb3VuZFVybCBUaGUgdXJsIG9mIHRoZSBub3RpZmljYXRpb24gdG8gcGxheS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcGxheU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Tb3VuZFVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKG5vdGlmaWNhdGlvblNvdW5kVXJsKTtcblx0YXdhaXQgYXVkaW8ucGxheSgpO1xufVxuXG4vKipcbiAqIEFkZCBhIGxpc3RlbmVyIHdoaWNoIGNoZWNrcyBmb3IgdGhlIGNvbm5lY3Rpb24gY2hhbmdlZCBldmVudC5cbiAqIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgdG8gY2FsbCB3aGVuIHRoZSBjb25uZWN0aW9uIHN0YXRlIGNoYW5nZXMuXG4gKi9cbmZ1bmN0aW9uIGFkZENvbm5lY3Rpb25DaGFuZ2VkRXZlbnRMaXN0ZW5lcihcblx0Y2FsbGJhY2s6IChzdGF0dXM6IE5vdGlmaWNhdGlvbnMucHJvdmlkZXIuUHJvdmlkZXJTdGF0dXMpID0+IHZvaWRcbik6IHZvaWQge1xuXHRpZiAoc3RhdHVzSW50ZXJ2YWxJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0c3RhdHVzSW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBzdGF0dXMgPSBhd2FpdCBOb3RpZmljYXRpb25zLnByb3ZpZGVyLmdldFN0YXR1cygpO1xuXHRcdFx0aWYgKHN0YXR1cy5jb25uZWN0ZWQgIT09IGxhc3RDb25uZWN0aW9uU3RhdHVzKSB7XG5cdFx0XHRcdGxhc3RDb25uZWN0aW9uU3RhdHVzID0gc3RhdHVzLmNvbm5lY3RlZDtcblx0XHRcdFx0Y2FsbGJhY2soc3RhdHVzKTtcblx0XHRcdH1cblx0XHR9LCAxMDAwKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9