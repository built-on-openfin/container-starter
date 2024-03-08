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
/* harmony export */   ChannelError: () => (/* binding */ ChannelError),
/* harmony export */   ContextTypes: () => (/* binding */ ContextTypes),
/* harmony export */   Convert: () => (/* binding */ Convert),
/* harmony export */   Intents: () => (/* binding */ Intents),
/* harmony export */   OpenError: () => (/* binding */ OpenError),
/* harmony export */   ResolveError: () => (/* binding */ ResolveError),
/* harmony export */   ResultError: () => (/* binding */ ResultError),
/* harmony export */   Style: () => (/* binding */ Style),
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
/* harmony export */   joinChannel: () => (/* binding */ joinChannel),
/* harmony export */   joinUserChannel: () => (/* binding */ joinUserChannel),
/* harmony export */   leaveCurrentChannel: () => (/* binding */ leaveCurrentChannel),
/* harmony export */   open: () => (/* binding */ open),
/* harmony export */   raiseIntent: () => (/* binding */ raiseIntent),
/* harmony export */   raiseIntentForContext: () => (/* binding */ raiseIntentForContext),
/* harmony export */   versionIsAtLeast: () => (/* binding */ versionIsAtLeast)
/* harmony export */ });
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

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

var DEFAULT_TIMEOUT = 5000;
var UnavailableError = /*#__PURE__*/new Error('FDC3 DesktopAgent not available at `window.fdc3`.');
var TimeoutError = /*#__PURE__*/new Error('Timed out waiting for `fdc3Ready` event.');
var UnexpectedError = /*#__PURE__*/new Error('`fdc3Ready` event fired, but `window.fdc3` not set to DesktopAgent.');
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
var fdc3Ready = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(waitForMs) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (waitForMs === void 0) {
            waitForMs = DEFAULT_TIMEOUT;
          }
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            // if the global is already available resolve immediately
            if (window.fdc3) {
              resolve();
            } else {
              // if its not available setup a timeout to return a rejected promise
              var timeout = setTimeout(function () {
                return window.fdc3 ? resolve() : reject(TimeoutError);
              }, waitForMs);
              // listen for the fdc3Ready event
              window.addEventListener('fdc3Ready', function () {
                clearTimeout(timeout);
                window.fdc3 ? resolve() : reject(UnexpectedError);
              }, {
                once: true
              });
            }
          }));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fdc3Ready(_x) {
    return _ref.apply(this, arguments);
  };
}();
function isString(app) {
  return !!app && typeof app === 'string';
}
function open(app, context) {
  if (isString(app)) {
    return rejectIfNoGlobal(function () {
      return window.fdc3.open(app, context);
    });
  } else {
    return rejectIfNoGlobal(function () {
      return window.fdc3.open(app, context);
    });
  }
}
function findIntent(intent, context, resultType) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.findIntent(intent, context, resultType);
  });
}
function findIntentsByContext(context, resultType) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.findIntentsByContext(context, resultType);
  });
}
function broadcast(context) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.broadcast(context);
  });
}
function raiseIntent(intent, context, app) {
  if (isString(app)) {
    return rejectIfNoGlobal(function () {
      return window.fdc3.raiseIntent(intent, context, app);
    });
  } else {
    return rejectIfNoGlobal(function () {
      return window.fdc3.raiseIntent(intent, context, app);
    });
  }
}
function raiseIntentForContext(context, app) {
  if (isString(app)) {
    return rejectIfNoGlobal(function () {
      return window.fdc3.raiseIntentForContext(context, app);
    });
  } else {
    return rejectIfNoGlobal(function () {
      return window.fdc3.raiseIntentForContext(context, app);
    });
  }
}
function addIntentListener(intent, handler) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.addIntentListener(intent, handler);
  });
}
function addContextListener(contextTypeOrHandler, handler) {
  //Handle (deprecated) function signature that allowed contextType argument to be omitted
  if (typeof contextTypeOrHandler !== 'function') {
    return rejectIfNoGlobal(function () {
      return window.fdc3.addContextListener(contextTypeOrHandler, handler);
    });
  } else {
    return rejectIfNoGlobal(function () {
      return window.fdc3.addContextListener(null, contextTypeOrHandler);
    });
  }
}
function getUserChannels() {
  return rejectIfNoGlobal(function () {
    //fallback to getSystemChannels for FDC3 <2.0 implementations
    if (window.fdc3.getUserChannels) {
      return window.fdc3.getUserChannels();
    } else {
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
    } else {
      return window.fdc3.joinChannel(channelId);
    }
  });
}
function joinChannel(channelId) {
  //fallforward to joinUserChannel for FDC3 2.0+ implementations
  return joinUserChannel(channelId);
}
function getOrCreateChannel(channelId) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.getOrCreateChannel(channelId);
  });
}
function getCurrentChannel() {
  return rejectIfNoGlobal(function () {
    return window.fdc3.getCurrentChannel();
  });
}
function leaveCurrentChannel() {
  return rejectIfNoGlobal(function () {
    return window.fdc3.leaveCurrentChannel();
  });
}
function createPrivateChannel() {
  return rejectIfNoGlobal(function () {
    return window.fdc3.createPrivateChannel();
  });
}
function getInfo() {
  return rejectIfNoGlobal(function () {
    return window.fdc3.getInfo();
  });
}
function getAppMetadata(app) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.getAppMetadata(app);
  });
}
function findInstances(app) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.findInstances(app);
  });
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
var compareVersionNumbers = function compareVersionNumbers(a, b) {
  try {
    var aVerArr = a.split('.').map(Number);
    var bVerArr = b.split('.').map(Number);
    for (var index = 0; index < Math.max(aVerArr.length, bVerArr.length); index++) {
      /* If one version number has more digits and the other does not, and they are otherwise equal,
         assume the longer is greater. E.g. 1.1.1 > 1.1 */
      if (index === aVerArr.length || aVerArr[index] < bVerArr[index]) {
        return -1;
      } else if (index === bVerArr.length || aVerArr[index] > bVerArr[index]) {
        return 1;
      }
    }
    return 0;
  } catch (e) {
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
var versionIsAtLeast = function versionIsAtLeast(metadata, version) {
  var comparison = compareVersionNumbers(metadata.fdc3Version, version);
  return comparison === null ? null : comparison >= 0 ? true : false;
};

var ContextTypes;
(function (ContextTypes) {
  ContextTypes["Chart"] = "fdc3.chart";
  ContextTypes["ChatInitSettings"] = "fdc3.chat.initSettings";
  ContextTypes["Contact"] = "fdc3.contact";
  ContextTypes["ContactList"] = "fdc3.contactList";
  ContextTypes["Country"] = "fdc3.country";
  ContextTypes["Currency"] = "fdc3.currency";
  ContextTypes["Email"] = "fdc3.email";
  ContextTypes["Instrument"] = "fdc3.instrument";
  ContextTypes["InstrumentList"] = "fdc3.instrumentList";
  ContextTypes["Organization"] = "fdc3.organization";
  ContextTypes["Portfolio"] = "fdc3.portfolio";
  ContextTypes["Position"] = "fdc3.position";
  ContextTypes["Nothing"] = "fdc3.nothing";
  ContextTypes["TimeRange"] = "fdc3.timerange";
  ContextTypes["Valuation"] = "fdc3.valuation";
})(ContextTypes || (ContextTypes = {}));

// To parse this data:
//
//   import { Convert, Chart, ChatInitSettings, Contact, ContactList, Context, Country, Currency, Email, Instrument, InstrumentList, Nothing, Organization, Portfolio, Position, TimeRange, Valuation } from "./file";
//
//   const chart = Convert.toChart(json);
//   const chatInitSettings = Convert.toChatInitSettings(json);
//   const contact = Convert.toContact(json);
//   const contactList = Convert.toContactList(json);
//   const context = Convert.toContext(json);
//   const country = Convert.toCountry(json);
//   const currency = Convert.toCurrency(json);
//   const email = Convert.toEmail(json);
//   const instrument = Convert.toInstrument(json);
//   const instrumentList = Convert.toInstrumentList(json);
//   const nothing = Convert.toNothing(json);
//   const organization = Convert.toOrganization(json);
//   const portfolio = Convert.toPortfolio(json);
//   const position = Convert.toPosition(json);
//   const timeRange = Convert.toTimeRange(json);
//   const valuation = Convert.toValuation(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
var Style;
(function (Style) {
  Style["Bar"] = "bar";
  Style["Candle"] = "candle";
  Style["Custom"] = "custom";
  Style["Heatmap"] = "heatmap";
  Style["Histogram"] = "histogram";
  Style["Line"] = "line";
  Style["Mountain"] = "mountain";
  Style["Pie"] = "pie";
  Style["Scatter"] = "scatter";
  Style["StackedBar"] = "stacked-bar";
})(Style || (Style = {}));
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert = /*#__PURE__*/function () {
  function Convert() {}
  Convert.toChart = function toChart(json) {
    return cast(JSON.parse(json), r('Chart'));
  };
  Convert.chartToJson = function chartToJson(value) {
    return JSON.stringify(uncast(value, r('Chart')), null, 2);
  };
  Convert.toChatInitSettings = function toChatInitSettings(json) {
    return cast(JSON.parse(json), r('ChatInitSettings'));
  };
  Convert.chatInitSettingsToJson = function chatInitSettingsToJson(value) {
    return JSON.stringify(uncast(value, r('ChatInitSettings')), null, 2);
  };
  Convert.toContact = function toContact(json) {
    return cast(JSON.parse(json), r('Contact'));
  };
  Convert.contactToJson = function contactToJson(value) {
    return JSON.stringify(uncast(value, r('Contact')), null, 2);
  };
  Convert.toContactList = function toContactList(json) {
    return cast(JSON.parse(json), r('ContactList'));
  };
  Convert.contactListToJson = function contactListToJson(value) {
    return JSON.stringify(uncast(value, r('ContactList')), null, 2);
  };
  Convert.toContext = function toContext(json) {
    return cast(JSON.parse(json), r('Context'));
  };
  Convert.contextToJson = function contextToJson(value) {
    return JSON.stringify(uncast(value, r('Context')), null, 2);
  };
  Convert.toCountry = function toCountry(json) {
    return cast(JSON.parse(json), r('Country'));
  };
  Convert.countryToJson = function countryToJson(value) {
    return JSON.stringify(uncast(value, r('Country')), null, 2);
  };
  Convert.toCurrency = function toCurrency(json) {
    return cast(JSON.parse(json), r('Currency'));
  };
  Convert.currencyToJson = function currencyToJson(value) {
    return JSON.stringify(uncast(value, r('Currency')), null, 2);
  };
  Convert.toEmail = function toEmail(json) {
    return cast(JSON.parse(json), r('Email'));
  };
  Convert.emailToJson = function emailToJson(value) {
    return JSON.stringify(uncast(value, r('Email')), null, 2);
  };
  Convert.toInstrument = function toInstrument(json) {
    return cast(JSON.parse(json), r('Instrument'));
  };
  Convert.instrumentToJson = function instrumentToJson(value) {
    return JSON.stringify(uncast(value, r('Instrument')), null, 2);
  };
  Convert.toInstrumentList = function toInstrumentList(json) {
    return cast(JSON.parse(json), r('InstrumentList'));
  };
  Convert.instrumentListToJson = function instrumentListToJson(value) {
    return JSON.stringify(uncast(value, r('InstrumentList')), null, 2);
  };
  Convert.toNothing = function toNothing(json) {
    return cast(JSON.parse(json), r('Nothing'));
  };
  Convert.nothingToJson = function nothingToJson(value) {
    return JSON.stringify(uncast(value, r('Nothing')), null, 2);
  };
  Convert.toOrganization = function toOrganization(json) {
    return cast(JSON.parse(json), r('Organization'));
  };
  Convert.organizationToJson = function organizationToJson(value) {
    return JSON.stringify(uncast(value, r('Organization')), null, 2);
  };
  Convert.toPortfolio = function toPortfolio(json) {
    return cast(JSON.parse(json), r('Portfolio'));
  };
  Convert.portfolioToJson = function portfolioToJson(value) {
    return JSON.stringify(uncast(value, r('Portfolio')), null, 2);
  };
  Convert.toPosition = function toPosition(json) {
    return cast(JSON.parse(json), r('Position'));
  };
  Convert.positionToJson = function positionToJson(value) {
    return JSON.stringify(uncast(value, r('Position')), null, 2);
  };
  Convert.toTimeRange = function toTimeRange(json) {
    return cast(JSON.parse(json), r('TimeRange'));
  };
  Convert.timeRangeToJson = function timeRangeToJson(value) {
    return JSON.stringify(uncast(value, r('TimeRange')), null, 2);
  };
  Convert.toValuation = function toValuation(json) {
    return cast(JSON.parse(json), r('Valuation'));
  };
  Convert.valuationToJson = function valuationToJson(value) {
    return JSON.stringify(uncast(value, r('Valuation')), null, 2);
  };
  return Convert;
}();
function invalidValue(typ, val, key, parent) {
  if (parent === void 0) {
    parent = '';
  }
  var prettyTyp = prettyTypeName(typ);
  var parentText = parent ? " on " + parent : '';
  var keyText = key ? " for key \"" + key + "\"" : '';
  throw Error("Invalid value" + keyText + parentText + ". Expected " + prettyTyp + " but got " + JSON.stringify(val));
}
function prettyTypeName(typ) {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return "an optional " + prettyTypeName(typ[1]);
    } else {
      return "one of [" + typ.map(function (a) {
        return prettyTypeName(a);
      }).join(', ') + "]";
    }
  } else if (typeof typ === 'object' && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}
function jsonToJSProps(typ) {
  if (typ.jsonToJS === undefined) {
    var map = {};
    typ.props.forEach(function (p) {
      return map[p.json] = {
        key: p.js,
        typ: p.typ
      };
    });
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}
function jsToJSONProps(typ) {
  if (typ.jsToJSON === undefined) {
    var map = {};
    typ.props.forEach(function (p) {
      return map[p.js] = {
        key: p.json,
        typ: p.typ
      };
    });
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}
function transform(val, typ, getProps, key, parent) {
  if (key === void 0) {
    key = '';
  }
  if (parent === void 0) {
    parent = '';
  }
  function transformPrimitive(typ, val) {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }
  function transformUnion(typs, val) {
    // val must validate against one typ in typs
    var l = typs.length;
    for (var i = 0; i < l; i++) {
      var _typ = typs[i];
      try {
        return transform(val, _typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }
  function transformEnum(cases, val) {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases.map(function (a) {
      return l(a);
    }), val, key, parent);
  }
  function transformArray(typ, val) {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent);
    return val.map(function (el) {
      return transform(el, typ, getProps);
    });
  }
  function transformDate(val) {
    if (val === null) {
      return null;
    }
    var d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l('Date'), val, key, parent);
    }
    return d;
  }
  function transformObject(props, additional, val) {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue(l(ref || 'object'), val, key, parent);
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
  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  var ref = undefined;
  while (typeof typ === 'object' && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers') ? transformUnion(typ.unionMembers, val) : typ.hasOwnProperty('arrayItems') ? transformArray(typ.arrayItems, val) : typ.hasOwnProperty('props') ? transformObject(getProps(typ), typ.additional, val) : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}
function cast(val, typ) {
  return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
  return transform(val, typ, jsToJSONProps);
}
function l(typ) {
  return {
    literal: typ
  };
}
function a(typ) {
  return {
    arrayItems: typ
  };
}
function u() {
  for (var _len = arguments.length, typs = new Array(_len), _key = 0; _key < _len; _key++) {
    typs[_key] = arguments[_key];
  }
  return {
    unionMembers: typs
  };
}
function o(props, additional) {
  return {
    props: props,
    additional: additional
  };
}
function m(additional) {
  return {
    props: [],
    additional: additional
  };
}
function r(name) {
  return {
    ref: name
  };
}
var typeMap = {
  Chart: /*#__PURE__*/o([{
    json: 'instruments',
    js: 'instruments',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('InstrumentElement'))
  }, {
    json: 'otherConfig',
    js: 'otherConfig',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'range',
    js: 'range',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/r('TimeRangeObject'))
  }, {
    json: 'style',
    js: 'style',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/r('Style'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  InstrumentElement: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('PurpleID')
  }, {
    json: 'market',
    js: 'market',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/r('PurpleMarket'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  PurpleID: /*#__PURE__*/o([{
    json: 'BBG',
    js: 'BBG',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'CUSIP',
    js: 'CUSIP',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FIGI',
    js: 'FIGI',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ISIN',
    js: 'ISIN',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'PERMID',
    js: 'PERMID',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'RIC',
    js: 'RIC',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'SEDOL',
    js: 'SEDOL',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ticker',
    js: 'ticker',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  PurpleMarket: /*#__PURE__*/o([{
    json: 'BBG',
    js: 'BBG',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'COUNTRY_ISOALPHA2',
    js: 'COUNTRY_ISOALPHA2',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'MIC',
    js: 'MIC',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  TimeRangeObject: /*#__PURE__*/o([{
    json: 'endTime',
    js: 'endTime',
    typ: /*#__PURE__*/u(undefined, Date)
  }, {
    json: 'startTime',
    js: 'startTime',
    typ: /*#__PURE__*/u(undefined, Date)
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  ChatInitSettings: /*#__PURE__*/o([{
    json: 'chatName',
    js: 'chatName',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'initMessage',
    js: 'initMessage',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'members',
    js: 'members',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/r('ContactListObject'))
  }, {
    json: 'options',
    js: 'options',
    typ: /*#__PURE__*/u(undefined, 'any')
  }, {
    json: 'type',
    js: 'type',
    typ: 'any'
  }], 'any'),
  ContactListObject: /*#__PURE__*/o([{
    json: 'contacts',
    js: 'contacts',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('ContactElement'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  ContactElement: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('FluffyID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  FluffyID: /*#__PURE__*/o([{
    json: 'email',
    js: 'email',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Contact: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('TentacledID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  TentacledID: /*#__PURE__*/o([{
    json: 'email',
    js: 'email',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  ContactList: /*#__PURE__*/o([{
    json: 'contacts',
    js: 'contacts',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('ContactElement'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Context: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }], 'any'),
  Country: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('CountryID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  CountryID: /*#__PURE__*/o([{
    json: 'COUNTRY_ISOALPHA2',
    js: 'COUNTRY_ISOALPHA2',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'COUNTRY_ISOALPHA3',
    js: 'COUNTRY_ISOALPHA3',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ISOALPHA2',
    js: 'ISOALPHA2',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ISOALPHA3',
    js: 'ISOALPHA3',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Currency: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('CurrencyID')
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }], 'any'),
  CurrencyID: /*#__PURE__*/o([{
    json: 'CURRENCY_ISOCODE',
    js: 'CURRENCY_ISOCODE',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Email: /*#__PURE__*/o([{
    json: 'recipients',
    js: 'recipients',
    typ: /*#__PURE__*/r('RecipientsObject')
  }, {
    json: 'subject',
    js: 'subject',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'textBody',
    js: 'textBody',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  RecipientsObject: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/r('RecipientsID'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'contacts',
    js: 'contacts',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/a( /*#__PURE__*/r('ContactElement')))
  }], 'any'),
  RecipientsID: /*#__PURE__*/o([{
    json: 'email',
    js: 'email',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Instrument: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('StickyID')
  }, {
    json: 'market',
    js: 'market',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/r('FluffyMarket'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  StickyID: /*#__PURE__*/o([{
    json: 'BBG',
    js: 'BBG',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'CUSIP',
    js: 'CUSIP',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FIGI',
    js: 'FIGI',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ISIN',
    js: 'ISIN',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'PERMID',
    js: 'PERMID',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'RIC',
    js: 'RIC',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'SEDOL',
    js: 'SEDOL',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ticker',
    js: 'ticker',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  FluffyMarket: /*#__PURE__*/o([{
    json: 'BBG',
    js: 'BBG',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'COUNTRY_ISOALPHA2',
    js: 'COUNTRY_ISOALPHA2',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'MIC',
    js: 'MIC',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  InstrumentList: /*#__PURE__*/o([{
    json: 'instruments',
    js: 'instruments',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('InstrumentElement'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Nothing: /*#__PURE__*/o([{
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Organization: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('OrganizationID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  OrganizationID: /*#__PURE__*/o([{
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'LEI',
    js: 'LEI',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'PERMID',
    js: 'PERMID',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Portfolio: /*#__PURE__*/o([{
    json: 'positions',
    js: 'positions',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('PositionElement'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  PositionElement: /*#__PURE__*/o([{
    json: 'holding',
    js: 'holding',
    typ: 3.14
  }, {
    json: 'instrument',
    js: 'instrument',
    typ: /*#__PURE__*/r('InstrumentElement')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Position: /*#__PURE__*/o([{
    json: 'holding',
    js: 'holding',
    typ: 3.14
  }, {
    json: 'instrument',
    js: 'instrument',
    typ: /*#__PURE__*/r('InstrumentElement')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  TimeRange: /*#__PURE__*/o([{
    json: 'endTime',
    js: 'endTime',
    typ: /*#__PURE__*/u(undefined, Date)
  }, {
    json: 'startTime',
    js: 'startTime',
    typ: /*#__PURE__*/u(undefined, Date)
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Valuation: /*#__PURE__*/o([{
    json: 'CURRENCY_ISOCODE',
    js: 'CURRENCY_ISOCODE',
    typ: ''
  }, {
    json: 'expiryTime',
    js: 'expiryTime',
    typ: /*#__PURE__*/u(undefined, Date)
  }, {
    json: 'price',
    js: 'price',
    typ: /*#__PURE__*/u(undefined, 3.14)
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'valuationTime',
    js: 'valuationTime',
    typ: /*#__PURE__*/u(undefined, Date)
  }, {
    json: 'value',
    js: 'value',
    typ: 3.14
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m('any'))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Style: ['bar', 'candle', 'custom', 'heatmap', 'histogram', 'line', 'mountain', 'pie', 'scatter', 'stacked-bar']
};

var Intents;
(function (Intents) {
  Intents["StartCall"] = "StartCall";
  Intents["StartChat"] = "StartChat";
  Intents["StartEmail"] = "StartEmail";
  Intents["ViewAnalysis"] = "ViewAnalysis";
  Intents["ViewChart"] = "ViewChart";
  Intents["ViewContact"] = "ViewContact";
  Intents["ViewHoldings"] = "ViewHoldings";
  Intents["ViewInstrument"] = "ViewInstrument";
  Intents["ViewInteractions"] = "ViewInteractions";
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
    if (openWorksheets && selectedWorksheetIndex !== undefined) {
        const newWorksheetIndex = openWorksheets.findIndex((w) => w.name === name);
        if (newWorksheetIndex !== selectedWorksheetIndex) {
            const oldWorksheet = openWorksheets[selectedWorksheetIndex];
            if (oldWorksheet) {
                await oldWorksheet.sheet.removeEventListener(handleCellChange);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFrRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQzs7QUFFckM7QUFDQTtBQUNBLGNBQWMsMExBQTBMO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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QUM7Z0JBQ2QsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLEdBQUcsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkYsQ0FBQztRQUNGLENBQUM7YUFBTSxDQUFDO1lBQ1AsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO1FBQzNELENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4uLy4uL25vZGVfbW9kdWxlcy9AZmlub3MvZmRjMy9kaXN0L2ZkYzMuZXNtLmpzIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4uLy4uL25vZGVfbW9kdWxlcy9Ab3BlbmZpbi9leGNlbC9vcGVuZmluLmV4Y2VsLm1qcyIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4vY2xpZW50L3NyYy9leGNlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQ29weXJpZ2h0IEZJTk9TIEZEQzMgY29udHJpYnV0b3JzIC0gc2VlIE5PVElDRSBmaWxlXHJcbiAqL1xuLyoqIENvbnN0YW50cyByZXByZXNlbnRpbmcgdGhlIGVycm9ycyB0aGF0IGNhbiBiZSBlbmNvdW50ZXJlZCB3aGVuIGNhbGxpbmcgdGhlIGBvcGVuYCBtZXRob2Qgb24gdGhlIERlc2t0b3BBZ2VudCBvYmplY3QgKGBmZGMzYCkuICovXG52YXIgT3BlbkVycm9yO1xuKGZ1bmN0aW9uIChPcGVuRXJyb3IpIHtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgYXBwbGljYXRpb24gaXMgbm90IGZvdW5kLiovXG4gIE9wZW5FcnJvcltcIkFwcE5vdEZvdW5kXCJdID0gXCJBcHBOb3RGb3VuZFwiO1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBhcHBsaWNhdGlvbiBmYWlscyB0byBsYXVuY2ggY29ycmVjdGx5LiovXG4gIE9wZW5FcnJvcltcIkVycm9yT25MYXVuY2hcIl0gPSBcIkVycm9yT25MYXVuY2hcIjtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgYXBwbGljYXRpb24gbGF1bmNoZXMgYnV0IGZhaWxzIHRvIGFkZCBhIGNvbnRleHQgbGlzdGVuZXIgaW4gb3JkZXIgdG8gcmVjZWl2ZSB0aGUgY29udGV4dCBwYXNzZWQgdG8gdGhlIGBmZGMzLm9wZW5gIGNhbGwuKi9cbiAgT3BlbkVycm9yW1wiQXBwVGltZW91dFwiXSA9IFwiQXBwVGltZW91dFwiO1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIEZEQzMgZGVza3RvcCBhZ2VudCBpbXBsZW1lbnRhdGlvbiBpcyBub3QgY3VycmVudGx5IGFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0LiovXG4gIE9wZW5FcnJvcltcIlJlc29sdmVyVW5hdmFpbGFibGVcIl0gPSBcIlJlc29sdmVyVW5hdmFpbGFibGVcIjtcbiAgLyoqIFJldHVybmVkIGlmIGEgY2FsbCB0byB0aGUgYG9wZW5gIGZ1bmN0aW9uIGlzIG1hZGUgd2l0aCBhbiBpbnZhbGlkIGNvbnRleHQgYXJndW1lbnQuIENvbnRleHRzIHNob3VsZCBiZSBPYmplY3RzIHdpdGggYXQgbGVhc3QgYSBgdHlwZWAgZmllbGQgdGhhdCBoYXMgYSBgc3RyaW5nYCB2YWx1ZS4qL1xuICBPcGVuRXJyb3JbXCJNYWxmb3JtZWRDb250ZXh0XCJdID0gXCJNYWxmb3JtZWRDb250ZXh0XCI7XG59KShPcGVuRXJyb3IgfHwgKE9wZW5FcnJvciA9IHt9KSk7XG4vKiogQ29uc3RhbnRzIHJlcHJlc2VudGluZyB0aGUgZXJyb3JzIHRoYXQgY2FuIGJlIGVuY291bnRlcmVkIHdoZW4gY2FsbGluZyB0aGUgYGZpbmRJbnRlbnRgLCBgZmluZEludGVudHNCeUNvbnRleHRgLCBgcmFpc2VJbnRlbnRgIG9yIGByYWlzZUludGVudEZvckNvbnRleHRgIG1ldGhvZHMgb24gdGhlIERlc2t0b3BBZ2VudCAoYGZkYzNgKS4gKi9cbnZhciBSZXNvbHZlRXJyb3I7XG4oZnVuY3Rpb24gKFJlc29sdmVFcnJvcikge1xuICAvKiogU0hPVUxEIGJlIHJldHVybmVkIGlmIG5vIGFwcHMgYXJlIGF2YWlsYWJsZSB0aGF0IGNhbiByZXNvbHZlIHRoZSBpbnRlbnQgYW5kIGNvbnRleHQgY29tYmluYXRpb24uKi9cbiAgUmVzb2x2ZUVycm9yW1wiTm9BcHBzRm91bmRcIl0gPSBcIk5vQXBwc0ZvdW5kXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgRkRDMyBkZXNrdG9wIGFnZW50IGltcGxlbWVudGF0aW9uIGlzIG5vdCBjdXJyZW50bHkgYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuKi9cbiAgUmVzb2x2ZUVycm9yW1wiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiXSA9IFwiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiO1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIHVzZXIgY2FuY2VsbGVkIHRoZSByZXNvbHV0aW9uIHJlcXVlc3QsIGZvciBleGFtcGxlIGJ5IGNsb3Npbmcgb3IgY2FuY2VsbGluZyBhIHJlc29sdmVyIFVJLiovXG4gIFJlc29sdmVFcnJvcltcIlVzZXJDYW5jZWxsZWRcIl0gPSBcIlVzZXJDYW5jZWxsZWRSZXNvbHV0aW9uXCI7XG4gIC8qKiBTSE9VTEQgYmUgcmV0dXJuZWQgaWYgYSB0aW1lb3V0IGNhbmNlbHMgYW4gaW50ZW50IHJlc29sdXRpb24gdGhhdCByZXF1aXJlZCB1c2VyIGludGVyYWN0aW9uLiBQbGVhc2UgdXNlIGBSZXNvbHZlclVuYXZhaWxhYmxlYCBpbnN0ZWFkIGZvciBzaXR1YXRpb25zIHdoZXJlIGEgcmVzb2x2ZXIgVUkgb3Igc2ltaWxhciBmYWlscy4qL1xuICBSZXNvbHZlRXJyb3JbXCJSZXNvbHZlclRpbWVvdXRcIl0gPSBcIlJlc29sdmVyVGltZW91dFwiO1xuICAvKiogUmV0dXJuZWQgaWYgYSBzcGVjaWZpZWQgdGFyZ2V0IGFwcGxpY2F0aW9uIGlzIG5vdCBhdmFpbGFibGUgb3IgYSBuZXcgaW5zdGFuY2Ugb2YgaXQgY2Fubm90IGJlIG9wZW5lZC4gKi9cbiAgUmVzb2x2ZUVycm9yW1wiVGFyZ2V0QXBwVW5hdmFpbGFibGVcIl0gPSBcIlRhcmdldEFwcFVuYXZhaWxhYmxlXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiBhIHNwZWNpZmllZCB0YXJnZXQgYXBwbGljYXRpb24gaW5zdGFuY2UgaXMgbm90IGF2YWlsYWJsZSwgZm9yIGV4YW1wbGUgYmVjYXVzZSBpdCBoYXMgYmVlbiBjbG9zZWQuICovXG4gIFJlc29sdmVFcnJvcltcIlRhcmdldEluc3RhbmNlVW5hdmFpbGFibGVcIl0gPSBcIlRhcmdldEluc3RhbmNlVW5hdmFpbGFibGVcIjtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSBpbnRlbnQgYW5kIGNvbnRleHQgY291bGQgbm90IGJlIGRlbGl2ZXJlZCB0byB0aGUgc2VsZWN0ZWQgYXBwbGljYXRpb24gb3IgaW5zdGFuY2UsIGZvciBleGFtcGxlIGJlY2F1c2UgaXQgaGFzIG5vdCBhZGRlZCBhbiBpbnRlbnQgaGFuZGxlciB3aXRoaW4gYSB0aW1lb3V0LiovXG4gIFJlc29sdmVFcnJvcltcIkludGVudERlbGl2ZXJ5RmFpbGVkXCJdID0gXCJJbnRlbnREZWxpdmVyeUZhaWxlZFwiO1xuICAvKiogUmV0dXJuZWQgaWYgYSBjYWxsIHRvIG9uZSBvZiB0aGUgYHJhaXNlSW50ZW50YCBmdW5jdGlvbnMgaXMgbWFkZSB3aXRoIGFuIGludmFsaWQgY29udGV4dCBhcmd1bWVudC4gQ29udGV4dHMgc2hvdWxkIGJlIE9iamVjdHMgd2l0aCBhdCBsZWFzdCBhIGB0eXBlYCBmaWVsZCB0aGF0IGhhcyBhIGBzdHJpbmdgIHZhbHVlLiovXG4gIFJlc29sdmVFcnJvcltcIk1hbGZvcm1lZENvbnRleHRcIl0gPSBcIk1hbGZvcm1lZENvbnRleHRcIjtcbn0pKFJlc29sdmVFcnJvciB8fCAoUmVzb2x2ZUVycm9yID0ge30pKTtcbnZhciBSZXN1bHRFcnJvcjtcbihmdW5jdGlvbiAoUmVzdWx0RXJyb3IpIHtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSBpbnRlbnQgaGFuZGxlciBleGl0ZWQgd2l0aG91dCByZXR1cm5pbmcgYSB2YWxpZCByZXN1bHQgKGEgcHJvbWlzZSByZXNvbHZpbmcgdG8gYSBDb250ZXh0LCBDaGFubmVsIG9iamVjdCBvciB2b2lkKS4gKi9cbiAgUmVzdWx0RXJyb3JbXCJOb1Jlc3VsdFJldHVybmVkXCJdID0gXCJOb1Jlc3VsdFJldHVybmVkXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgSW50ZW50IGhhbmRsZXIgZnVuY3Rpb24gcHJvY2Vzc2luZyB0aGUgcmFpc2VkIGludGVudCB0aHJvd3MgYW4gZXJyb3Igb3IgcmVqZWN0cyB0aGUgUHJvbWlzZSBpdCByZXR1cm5lZC4gKi9cbiAgUmVzdWx0RXJyb3JbXCJJbnRlbnRIYW5kbGVyUmVqZWN0ZWRcIl0gPSBcIkludGVudEhhbmRsZXJSZWplY3RlZFwiO1xufSkoUmVzdWx0RXJyb3IgfHwgKFJlc3VsdEVycm9yID0ge30pKTtcbnZhciBDaGFubmVsRXJyb3I7XG4oZnVuY3Rpb24gKENoYW5uZWxFcnJvcikge1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBjaGFubmVsIGlzIG5vdCBmb3VuZCB3aGVuIGF0dGVtcHRpbmcgdG8gam9pbiBhIGNoYW5uZWwgdmlhIHRoZSBgam9pblVzZXJDaGFubmVsYCBmdW5jdGlvbiAgb2YgdGhlIERlc2t0b3BBZ2VudCAoYGZkYzNgKS4qL1xuICBDaGFubmVsRXJyb3JbXCJOb0NoYW5uZWxGb3VuZFwiXSA9IFwiTm9DaGFubmVsRm91bmRcIjtcbiAgLyoqIFNIT1VMRCBiZSByZXR1cm5lZCB3aGVuIGEgcmVxdWVzdCB0byBqb2luIGEgdXNlciBjaGFubmVsIG9yIHRvIGEgcmV0cmlldmUgYSBDaGFubmVsIG9iamVjdCB2aWEgdGhlIGBqb2luVXNlckNoYW5uZWxgIG9yIGBnZXRPckNyZWF0ZUNoYW5uZWxgIG1ldGhvZHMgb2YgdGhlIERlc2t0b3BBZ2VudCAoYGZkYzNgKSBvYmplY3QgaXMgZGVuaWVkLiAqL1xuICBDaGFubmVsRXJyb3JbXCJBY2Nlc3NEZW5pZWRcIl0gPSBcIkFjY2Vzc0RlbmllZFwiO1xuICAvKiogU0hPVUxEIGJlIHJldHVybmVkIHdoZW4gYSBjaGFubmVsIGNhbm5vdCBiZSBjcmVhdGVkIG9yIHJldHJpZXZlZCB2aWEgdGhlIGBnZXRPckNyZWF0ZUNoYW5uZWxgIG1ldGhvZCBvZiB0aGUgRGVza3RvcEFnZW50IChgZmRjM2ApLiovXG4gIENoYW5uZWxFcnJvcltcIkNyZWF0aW9uRmFpbGVkXCJdID0gXCJDcmVhdGlvbkZhaWxlZFwiO1xuICAvKiogUmV0dXJuZWQgaWYgYSBjYWxsIHRvIHRoZSBgYnJvYWRjYXN0YCBmdW5jdGlvbnMgaXMgbWFkZSB3aXRoIGFuIGludmFsaWQgY29udGV4dCBhcmd1bWVudC4gQ29udGV4dHMgc2hvdWxkIGJlIE9iamVjdHMgd2l0aCBhdCBsZWFzdCBhIGB0eXBlYCBmaWVsZCB0aGF0IGhhcyBhIGBzdHJpbmdgIHZhbHVlLiovXG4gIENoYW5uZWxFcnJvcltcIk1hbGZvcm1lZENvbnRleHRcIl0gPSBcIk1hbGZvcm1lZENvbnRleHRcIjtcbn0pKENoYW5uZWxFcnJvciB8fCAoQ2hhbm5lbEVycm9yID0ge30pKTtcblxuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfTtcbiAgdmFyIGV4cG9ydHMgPSB7fSxcbiAgICBPcCA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHksXG4gICAgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKG9iaiwga2V5LCBkZXNjKSB7XG4gICAgICBvYmpba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgfSxcbiAgICAkU3ltYm9sID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSxcbiAgICBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIHdyaXRhYmxlOiAhMFxuICAgIH0pLCBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLFxuICAgICAgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpLFxuICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZ2VuZXJhdG9yLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dClcbiAgICB9KSwgZ2VuZXJhdG9yO1xuICB9XG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IGVyclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJiBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpICYmIChJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKFwidGhyb3dcIiAhPT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmcsXG4gICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB2YWx1ZSAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpID8gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pIDogUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkLCByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgfVxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoXCJleGVjdXRpbmdcIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7XG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZztcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgc3RhdGUgPSBcImV4ZWN1dGluZ1wiO1xuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kLFxuICAgICAgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSByZXR1cm4gY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbWV0aG9kTmFtZSAmJiBkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4gJiYgKGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQsIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpLCBcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB8fCBcInJldHVyblwiICE9PSBtZXRob2ROYW1lICYmIChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBtZXRob2ROYW1lICsgXCInIG1ldGhvZFwiKSksIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgcmV0dXJuIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcsIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTtcbiAgfVxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHtcbiAgICAgIHRyeUxvYzogbG9jc1swXVxuICAgIH07XG4gICAgMSBpbiBsb2NzICYmIChlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV0pLCAyIGluIGxvY3MgJiYgKGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdLCBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIiwgZGVsZXRlIHJlY29yZC5hcmcsIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhYmxlLm5leHQpIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgZm9yICg7ICsraSA8IGl0ZXJhYmxlLmxlbmd0aDspIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHJldHVybiBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV0sIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZG9uZVJlc3VsdFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6ICEwXG4gICAgfTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgZGVmaW5lUHJvcGVydHkoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZ2VuRnVuICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpO1xuICB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6IChnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApLCBnZW5GdW47XG4gIH0sIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IGFyZ1xuICAgIH07XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICB2b2lkIDAgPT09IFByb21pc2VJbXBsICYmIChQcm9taXNlSW1wbCA9IFByb21pc2UpO1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksIFByb21pc2VJbXBsKTtcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KSwgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKSxcbiAgICAgIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBrZXlzLnB1c2goa2V5KTtcbiAgICByZXR1cm4ga2V5cy5yZXZlcnNlKCksIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBmb3IgKDsga2V5cy5sZW5ndGg7KSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdW5kZWZpbmVkLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIXNraXBUZW1wUmVzZXQpIGZvciAodmFyIG5hbWUgaW4gdGhpcykgXCJ0XCIgPT09IG5hbWUuY2hhckF0KDApICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkgJiYgKHRoaXNbbmFtZV0gPSB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSxcbiAgICAgICAgICByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICBpZiAoXCJyb290XCIgPT09IGVudHJ5LnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc0ZpbmFsbHkpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uICh0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTtcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gdHlwZSwgcmVjb3JkLmFyZyA9IGFyZywgZmluYWxseUVudHJ5ID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHRocm93IHJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSByZWNvcmQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6IFwicmV0dXJuXCIgPT09IHJlY29yZC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlICYmIGFmdGVyTG9jICYmICh0aGlzLm5leHQgPSBhZnRlckxvYyksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShlbnRyeSksIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG4gICAgfSxcbiAgICBjYXRjaDogZnVuY3Rpb24gKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiAoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9LCBleHBvcnRzO1xufVxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbnZhciBERUZBVUxUX1RJTUVPVVQgPSA1MDAwO1xudmFyIFVuYXZhaWxhYmxlRXJyb3IgPSAvKiNfX1BVUkVfXyovbmV3IEVycm9yKCdGREMzIERlc2t0b3BBZ2VudCBub3QgYXZhaWxhYmxlIGF0IGB3aW5kb3cuZmRjM2AuJyk7XG52YXIgVGltZW91dEVycm9yID0gLyojX19QVVJFX18qL25ldyBFcnJvcignVGltZWQgb3V0IHdhaXRpbmcgZm9yIGBmZGMzUmVhZHlgIGV2ZW50LicpO1xudmFyIFVuZXhwZWN0ZWRFcnJvciA9IC8qI19fUFVSRV9fKi9uZXcgRXJyb3IoJ2BmZGMzUmVhZHlgIGV2ZW50IGZpcmVkLCBidXQgYHdpbmRvdy5mZGMzYCBub3Qgc2V0IHRvIERlc2t0b3BBZ2VudC4nKTtcbmZ1bmN0aW9uIHJlamVjdElmTm9HbG9iYWwoZikge1xuICByZXR1cm4gd2luZG93LmZkYzMgPyBmKCkgOiBQcm9taXNlLnJlamVjdChVbmF2YWlsYWJsZUVycm9yKTtcbn1cbi8qKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgaW1tZWFkaWF0ZWx5XHJcbiAqIGlmIHRoZSBkZXNrdG9wIGFnZW50IEFQSSBpcyBmb3VuZCBhdCBgd2luZG93LmZkYzNgLiBJZiB0aGUgQVBJIGlzIGZvdW5kLFxyXG4gKiB0aGUgcHJvbWlzZSB3aWxsIHJlc29sdmUgd2hlbiB0aGUgYGZkYzNSZWFkeWAgZXZlbnQgaXMgcmVjZWl2ZWQgb3IgaWYgaXRcclxuICogaXMgZm91bmQgYXQgdGhlIGVuZCBvZiB0aGUgc3BlY2lmaWVkIHRpbWVvdXQuIElmIHRoZSBBUEkgaXMgbm90IGZvdW5kLCBpdFxyXG4gKiB3aWxsIHJlamVjdCB3aXRoIGFuIGVycm9yLlxyXG4gKlxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIGF3YWl0IGZkYzNSZWFkeSgpO1xyXG4gKiBjb25zdCBpbnRlbnRMaXN0ZW5lciA9IGF3YWl0IGFkZEludGVudExpc3RlbmVyKFwiVmlld0NoYXJ0XCIsIGludGVudEhhbmRsZXJGbik7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0gd2FpdEZvck1zIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgZm9yIHRoZSBGREMzIEFQSSB0byBiZVxyXG4gKiByZWFkeS4gRGVmYXVsdHMgdG8gNSBzZWNvbmRzLlxyXG4gKi9cbnZhciBmZGMzUmVhZHkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUod2FpdEZvck1zKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUoKS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgaWYgKHdhaXRGb3JNcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB3YWl0Rm9yTXMgPSBERUZBVUxUX1RJTUVPVVQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGdsb2JhbCBpcyBhbHJlYWR5IGF2YWlsYWJsZSByZXNvbHZlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAod2luZG93LmZkYzMpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gaWYgaXRzIG5vdCBhdmFpbGFibGUgc2V0dXAgYSB0aW1lb3V0IHRvIHJldHVybiBhIHJlamVjdGVkIHByb21pc2VcbiAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmZkYzMgPyByZXNvbHZlKCkgOiByZWplY3QoVGltZW91dEVycm9yKTtcbiAgICAgICAgICAgICAgfSwgd2FpdEZvck1zKTtcbiAgICAgICAgICAgICAgLy8gbGlzdGVuIGZvciB0aGUgZmRjM1JlYWR5IGV2ZW50XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmZGMzUmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5mZGMzID8gcmVzb2x2ZSgpIDogcmVqZWN0KFVuZXhwZWN0ZWRFcnJvcik7XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlKTtcbiAgfSkpO1xuICByZXR1cm4gZnVuY3Rpb24gZmRjM1JlYWR5KF94KSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcbmZ1bmN0aW9uIGlzU3RyaW5nKGFwcCkge1xuICByZXR1cm4gISFhcHAgJiYgdHlwZW9mIGFwcCA9PT0gJ3N0cmluZyc7XG59XG5mdW5jdGlvbiBvcGVuKGFwcCwgY29udGV4dCkge1xuICBpZiAoaXNTdHJpbmcoYXBwKSkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5vcGVuKGFwcCwgY29udGV4dCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLm9wZW4oYXBwLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gZmluZEludGVudChpbnRlbnQsIGNvbnRleHQsIHJlc3VsdFR5cGUpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5maW5kSW50ZW50KGludGVudCwgY29udGV4dCwgcmVzdWx0VHlwZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZmluZEludGVudHNCeUNvbnRleHQoY29udGV4dCwgcmVzdWx0VHlwZSkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmZpbmRJbnRlbnRzQnlDb250ZXh0KGNvbnRleHQsIHJlc3VsdFR5cGUpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGJyb2FkY2FzdChjb250ZXh0KSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuYnJvYWRjYXN0KGNvbnRleHQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJhaXNlSW50ZW50KGludGVudCwgY29udGV4dCwgYXBwKSB7XG4gIGlmIChpc1N0cmluZyhhcHApKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50KGludGVudCwgY29udGV4dCwgYXBwKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMucmFpc2VJbnRlbnQoaW50ZW50LCBjb250ZXh0LCBhcHApO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiByYWlzZUludGVudEZvckNvbnRleHQoY29udGV4dCwgYXBwKSB7XG4gIGlmIChpc1N0cmluZyhhcHApKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50Rm9yQ29udGV4dChjb250ZXh0LCBhcHApO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5yYWlzZUludGVudEZvckNvbnRleHQoY29udGV4dCwgYXBwKTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gYWRkSW50ZW50TGlzdGVuZXIoaW50ZW50LCBoYW5kbGVyKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuYWRkSW50ZW50TGlzdGVuZXIoaW50ZW50LCBoYW5kbGVyKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRDb250ZXh0TGlzdGVuZXIoY29udGV4dFR5cGVPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgLy9IYW5kbGUgKGRlcHJlY2F0ZWQpIGZ1bmN0aW9uIHNpZ25hdHVyZSB0aGF0IGFsbG93ZWQgY29udGV4dFR5cGUgYXJndW1lbnQgdG8gYmUgb21pdHRlZFxuICBpZiAodHlwZW9mIGNvbnRleHRUeXBlT3JIYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmFkZENvbnRleHRMaXN0ZW5lcihjb250ZXh0VHlwZU9ySGFuZGxlciwgaGFuZGxlcik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmFkZENvbnRleHRMaXN0ZW5lcihudWxsLCBjb250ZXh0VHlwZU9ySGFuZGxlcik7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFVzZXJDaGFubmVscygpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIC8vZmFsbGJhY2sgdG8gZ2V0U3lzdGVtQ2hhbm5lbHMgZm9yIEZEQzMgPDIuMCBpbXBsZW1lbnRhdGlvbnNcbiAgICBpZiAod2luZG93LmZkYzMuZ2V0VXNlckNoYW5uZWxzKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0VXNlckNoYW5uZWxzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRTeXN0ZW1DaGFubmVscygpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRTeXN0ZW1DaGFubmVscygpIHtcbiAgLy9mYWxsZm9yd2FyZCB0byBnZXRVc2VyQ2hhbm5lbHMgZm9yIEZEQzMgMi4wKyBpbXBsZW1lbnRhdGlvbnNcbiAgcmV0dXJuIGdldFVzZXJDaGFubmVscygpO1xufVxuZnVuY3Rpb24gam9pblVzZXJDaGFubmVsKGNoYW5uZWxJZCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgLy9mYWxsYmFjayB0byBqb2luQ2hhbm5lbCBmb3IgRkRDMyA8Mi4wIGltcGxlbWVudGF0aW9uc1xuICAgIGlmICh3aW5kb3cuZmRjMy5qb2luVXNlckNoYW5uZWwpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5qb2luVXNlckNoYW5uZWwoY2hhbm5lbElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmpvaW5DaGFubmVsKGNoYW5uZWxJZCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGpvaW5DaGFubmVsKGNoYW5uZWxJZCkge1xuICAvL2ZhbGxmb3J3YXJkIHRvIGpvaW5Vc2VyQ2hhbm5lbCBmb3IgRkRDMyAyLjArIGltcGxlbWVudGF0aW9uc1xuICByZXR1cm4gam9pblVzZXJDaGFubmVsKGNoYW5uZWxJZCk7XG59XG5mdW5jdGlvbiBnZXRPckNyZWF0ZUNoYW5uZWwoY2hhbm5lbElkKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0T3JDcmVhdGVDaGFubmVsKGNoYW5uZWxJZCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudENoYW5uZWwoKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0Q3VycmVudENoYW5uZWwoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBsZWF2ZUN1cnJlbnRDaGFubmVsKCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmxlYXZlQ3VycmVudENoYW5uZWwoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVQcml2YXRlQ2hhbm5lbCgpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5jcmVhdGVQcml2YXRlQ2hhbm5lbCgpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEluZm8oKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0SW5mbygpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEFwcE1ldGFkYXRhKGFwcCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldEFwcE1ldGFkYXRhKGFwcCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZmluZEluc3RhbmNlcyhhcHApIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5maW5kSW5zdGFuY2VzKGFwcCk7XG4gIH0pO1xufVxuLyoqXHJcbiAqIENvbXBhcmUgbnVtZXJpYyBzZW12ZXIgdmVyc2lvbiBudW1iZXIgc3RyaW5ncyAoaW4gdGhlIGZvcm0gYDEuMi4zYCkuXHJcbiAqXHJcbiAqIFJldHVybnMgYC0xYCBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSBsb3dlciB2ZXJzaW9uIG51bWJlciB0aGFuIHRoZSBzZWNvbmQsXHJcbiAqIGAxYCBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmQsIDAgaWYgdGhlIGFyZ3VtZW50cyBhcmVcclxuICogZXF1YWwgYW5kIGBudWxsYCBpZiBhbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIGNvbXBhcmlzb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBhXHJcbiAqIEBwYXJhbSBiXHJcbiAqL1xudmFyIGNvbXBhcmVWZXJzaW9uTnVtYmVycyA9IGZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uTnVtYmVycyhhLCBiKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFWZXJBcnIgPSBhLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG4gICAgdmFyIGJWZXJBcnIgPSBiLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IE1hdGgubWF4KGFWZXJBcnIubGVuZ3RoLCBiVmVyQXJyLmxlbmd0aCk7IGluZGV4KyspIHtcbiAgICAgIC8qIElmIG9uZSB2ZXJzaW9uIG51bWJlciBoYXMgbW9yZSBkaWdpdHMgYW5kIHRoZSBvdGhlciBkb2VzIG5vdCwgYW5kIHRoZXkgYXJlIG90aGVyd2lzZSBlcXVhbCxcclxuICAgICAgICAgYXNzdW1lIHRoZSBsb25nZXIgaXMgZ3JlYXRlci4gRS5nLiAxLjEuMSA+IDEuMSAqL1xuICAgICAgaWYgKGluZGV4ID09PSBhVmVyQXJyLmxlbmd0aCB8fCBhVmVyQXJyW2luZGV4XSA8IGJWZXJBcnJbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGJWZXJBcnIubGVuZ3RoIHx8IGFWZXJBcnJbaW5kZXhdID4gYlZlckFycltpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNvbXBhcmUgdmVyc2lvbiBzdHJpbmdzJywgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4vKipcclxuICogQ2hlY2sgaWYgdGhlIEZEQzMgdmVyc2lvbiBpbiBhbiBJbXBsZW1lbnRhdGlvbk1ldGFkYXRhIG9iamVjdCBpcyBncmVhdGVyIHRoYW5cclxuICogb3IgZXF1YWwgdG8gdGhlIHN1cHBsaWVkIG51bWVyaWMgc2VtdmVyIHZlcnNpb24gbnVtYmVyIHN0cmluZyAoaW4gdGhlIGZvcm0gYDEuMi4zYCkuXHJcbiAqXHJcbiAqIFJldHVybnMgYSBib29sZWFuIG9yIG51bGwgaWYgYW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY29tcGFyaW5nIHRoZSB2ZXJzaW9uIG51bWJlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXRhZGF0YVxyXG4gKiBAcGFyYW0gdmVyc2lvblxyXG4gKi9cbnZhciB2ZXJzaW9uSXNBdExlYXN0ID0gZnVuY3Rpb24gdmVyc2lvbklzQXRMZWFzdChtZXRhZGF0YSwgdmVyc2lvbikge1xuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVWZXJzaW9uTnVtYmVycyhtZXRhZGF0YS5mZGMzVmVyc2lvbiwgdmVyc2lvbik7XG4gIHJldHVybiBjb21wYXJpc29uID09PSBudWxsID8gbnVsbCA6IGNvbXBhcmlzb24gPj0gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbnZhciBDb250ZXh0VHlwZXM7XG4oZnVuY3Rpb24gKENvbnRleHRUeXBlcykge1xuICBDb250ZXh0VHlwZXNbXCJDaGFydFwiXSA9IFwiZmRjMy5jaGFydFwiO1xuICBDb250ZXh0VHlwZXNbXCJDaGF0SW5pdFNldHRpbmdzXCJdID0gXCJmZGMzLmNoYXQuaW5pdFNldHRpbmdzXCI7XG4gIENvbnRleHRUeXBlc1tcIkNvbnRhY3RcIl0gPSBcImZkYzMuY29udGFjdFwiO1xuICBDb250ZXh0VHlwZXNbXCJDb250YWN0TGlzdFwiXSA9IFwiZmRjMy5jb250YWN0TGlzdFwiO1xuICBDb250ZXh0VHlwZXNbXCJDb3VudHJ5XCJdID0gXCJmZGMzLmNvdW50cnlcIjtcbiAgQ29udGV4dFR5cGVzW1wiQ3VycmVuY3lcIl0gPSBcImZkYzMuY3VycmVuY3lcIjtcbiAgQ29udGV4dFR5cGVzW1wiRW1haWxcIl0gPSBcImZkYzMuZW1haWxcIjtcbiAgQ29udGV4dFR5cGVzW1wiSW5zdHJ1bWVudFwiXSA9IFwiZmRjMy5pbnN0cnVtZW50XCI7XG4gIENvbnRleHRUeXBlc1tcIkluc3RydW1lbnRMaXN0XCJdID0gXCJmZGMzLmluc3RydW1lbnRMaXN0XCI7XG4gIENvbnRleHRUeXBlc1tcIk9yZ2FuaXphdGlvblwiXSA9IFwiZmRjMy5vcmdhbml6YXRpb25cIjtcbiAgQ29udGV4dFR5cGVzW1wiUG9ydGZvbGlvXCJdID0gXCJmZGMzLnBvcnRmb2xpb1wiO1xuICBDb250ZXh0VHlwZXNbXCJQb3NpdGlvblwiXSA9IFwiZmRjMy5wb3NpdGlvblwiO1xuICBDb250ZXh0VHlwZXNbXCJOb3RoaW5nXCJdID0gXCJmZGMzLm5vdGhpbmdcIjtcbiAgQ29udGV4dFR5cGVzW1wiVGltZVJhbmdlXCJdID0gXCJmZGMzLnRpbWVyYW5nZVwiO1xuICBDb250ZXh0VHlwZXNbXCJWYWx1YXRpb25cIl0gPSBcImZkYzMudmFsdWF0aW9uXCI7XG59KShDb250ZXh0VHlwZXMgfHwgKENvbnRleHRUeXBlcyA9IHt9KSk7XG5cbi8vIFRvIHBhcnNlIHRoaXMgZGF0YTpcbi8vXG4vLyAgIGltcG9ydCB7IENvbnZlcnQsIENoYXJ0LCBDaGF0SW5pdFNldHRpbmdzLCBDb250YWN0LCBDb250YWN0TGlzdCwgQ29udGV4dCwgQ291bnRyeSwgQ3VycmVuY3ksIEVtYWlsLCBJbnN0cnVtZW50LCBJbnN0cnVtZW50TGlzdCwgTm90aGluZywgT3JnYW5pemF0aW9uLCBQb3J0Zm9saW8sIFBvc2l0aW9uLCBUaW1lUmFuZ2UsIFZhbHVhdGlvbiB9IGZyb20gXCIuL2ZpbGVcIjtcbi8vXG4vLyAgIGNvbnN0IGNoYXJ0ID0gQ29udmVydC50b0NoYXJ0KGpzb24pO1xuLy8gICBjb25zdCBjaGF0SW5pdFNldHRpbmdzID0gQ29udmVydC50b0NoYXRJbml0U2V0dGluZ3MoanNvbik7XG4vLyAgIGNvbnN0IGNvbnRhY3QgPSBDb252ZXJ0LnRvQ29udGFjdChqc29uKTtcbi8vICAgY29uc3QgY29udGFjdExpc3QgPSBDb252ZXJ0LnRvQ29udGFjdExpc3QoanNvbik7XG4vLyAgIGNvbnN0IGNvbnRleHQgPSBDb252ZXJ0LnRvQ29udGV4dChqc29uKTtcbi8vICAgY29uc3QgY291bnRyeSA9IENvbnZlcnQudG9Db3VudHJ5KGpzb24pO1xuLy8gICBjb25zdCBjdXJyZW5jeSA9IENvbnZlcnQudG9DdXJyZW5jeShqc29uKTtcbi8vICAgY29uc3QgZW1haWwgPSBDb252ZXJ0LnRvRW1haWwoanNvbik7XG4vLyAgIGNvbnN0IGluc3RydW1lbnQgPSBDb252ZXJ0LnRvSW5zdHJ1bWVudChqc29uKTtcbi8vICAgY29uc3QgaW5zdHJ1bWVudExpc3QgPSBDb252ZXJ0LnRvSW5zdHJ1bWVudExpc3QoanNvbik7XG4vLyAgIGNvbnN0IG5vdGhpbmcgPSBDb252ZXJ0LnRvTm90aGluZyhqc29uKTtcbi8vICAgY29uc3Qgb3JnYW5pemF0aW9uID0gQ29udmVydC50b09yZ2FuaXphdGlvbihqc29uKTtcbi8vICAgY29uc3QgcG9ydGZvbGlvID0gQ29udmVydC50b1BvcnRmb2xpbyhqc29uKTtcbi8vICAgY29uc3QgcG9zaXRpb24gPSBDb252ZXJ0LnRvUG9zaXRpb24oanNvbik7XG4vLyAgIGNvbnN0IHRpbWVSYW5nZSA9IENvbnZlcnQudG9UaW1lUmFuZ2UoanNvbik7XG4vLyAgIGNvbnN0IHZhbHVhdGlvbiA9IENvbnZlcnQudG9WYWx1YXRpb24oanNvbik7XG4vL1xuLy8gVGhlc2UgZnVuY3Rpb25zIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIEpTT04gZG9lc24ndFxuLy8gbWF0Y2ggdGhlIGV4cGVjdGVkIGludGVyZmFjZSwgZXZlbiBpZiB0aGUgSlNPTiBpcyB2YWxpZC5cbnZhciBTdHlsZTtcbihmdW5jdGlvbiAoU3R5bGUpIHtcbiAgU3R5bGVbXCJCYXJcIl0gPSBcImJhclwiO1xuICBTdHlsZVtcIkNhbmRsZVwiXSA9IFwiY2FuZGxlXCI7XG4gIFN0eWxlW1wiQ3VzdG9tXCJdID0gXCJjdXN0b21cIjtcbiAgU3R5bGVbXCJIZWF0bWFwXCJdID0gXCJoZWF0bWFwXCI7XG4gIFN0eWxlW1wiSGlzdG9ncmFtXCJdID0gXCJoaXN0b2dyYW1cIjtcbiAgU3R5bGVbXCJMaW5lXCJdID0gXCJsaW5lXCI7XG4gIFN0eWxlW1wiTW91bnRhaW5cIl0gPSBcIm1vdW50YWluXCI7XG4gIFN0eWxlW1wiUGllXCJdID0gXCJwaWVcIjtcbiAgU3R5bGVbXCJTY2F0dGVyXCJdID0gXCJzY2F0dGVyXCI7XG4gIFN0eWxlW1wiU3RhY2tlZEJhclwiXSA9IFwic3RhY2tlZC1iYXJcIjtcbn0pKFN0eWxlIHx8IChTdHlsZSA9IHt9KSk7XG4vLyBDb252ZXJ0cyBKU09OIHN0cmluZ3MgdG8vZnJvbSB5b3VyIHR5cGVzXG4vLyBhbmQgYXNzZXJ0cyB0aGUgcmVzdWx0cyBvZiBKU09OLnBhcnNlIGF0IHJ1bnRpbWVcbnZhciBDb252ZXJ0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29udmVydCgpIHt9XG4gIENvbnZlcnQudG9DaGFydCA9IGZ1bmN0aW9uIHRvQ2hhcnQoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NoYXJ0JykpO1xuICB9O1xuICBDb252ZXJ0LmNoYXJ0VG9Kc29uID0gZnVuY3Rpb24gY2hhcnRUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDaGFydCcpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9DaGF0SW5pdFNldHRpbmdzID0gZnVuY3Rpb24gdG9DaGF0SW5pdFNldHRpbmdzKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDaGF0SW5pdFNldHRpbmdzJykpO1xuICB9O1xuICBDb252ZXJ0LmNoYXRJbml0U2V0dGluZ3NUb0pzb24gPSBmdW5jdGlvbiBjaGF0SW5pdFNldHRpbmdzVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ2hhdEluaXRTZXR0aW5ncycpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9Db250YWN0ID0gZnVuY3Rpb24gdG9Db250YWN0KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDb250YWN0JykpO1xuICB9O1xuICBDb252ZXJ0LmNvbnRhY3RUb0pzb24gPSBmdW5jdGlvbiBjb250YWN0VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ29udGFjdCcpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9Db250YWN0TGlzdCA9IGZ1bmN0aW9uIHRvQ29udGFjdExpc3QoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NvbnRhY3RMaXN0JykpO1xuICB9O1xuICBDb252ZXJ0LmNvbnRhY3RMaXN0VG9Kc29uID0gZnVuY3Rpb24gY29udGFjdExpc3RUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDb250YWN0TGlzdCcpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9Db250ZXh0ID0gZnVuY3Rpb24gdG9Db250ZXh0KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDb250ZXh0JykpO1xuICB9O1xuICBDb252ZXJ0LmNvbnRleHRUb0pzb24gPSBmdW5jdGlvbiBjb250ZXh0VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ29udGV4dCcpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9Db3VudHJ5ID0gZnVuY3Rpb24gdG9Db3VudHJ5KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDb3VudHJ5JykpO1xuICB9O1xuICBDb252ZXJ0LmNvdW50cnlUb0pzb24gPSBmdW5jdGlvbiBjb3VudHJ5VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ291bnRyeScpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9DdXJyZW5jeSA9IGZ1bmN0aW9uIHRvQ3VycmVuY3koanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0N1cnJlbmN5JykpO1xuICB9O1xuICBDb252ZXJ0LmN1cnJlbmN5VG9Kc29uID0gZnVuY3Rpb24gY3VycmVuY3lUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDdXJyZW5jeScpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9FbWFpbCA9IGZ1bmN0aW9uIHRvRW1haWwoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0VtYWlsJykpO1xuICB9O1xuICBDb252ZXJ0LmVtYWlsVG9Kc29uID0gZnVuY3Rpb24gZW1haWxUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdFbWFpbCcpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9JbnN0cnVtZW50ID0gZnVuY3Rpb24gdG9JbnN0cnVtZW50KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdJbnN0cnVtZW50JykpO1xuICB9O1xuICBDb252ZXJ0Lmluc3RydW1lbnRUb0pzb24gPSBmdW5jdGlvbiBpbnN0cnVtZW50VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignSW5zdHJ1bWVudCcpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9JbnN0cnVtZW50TGlzdCA9IGZ1bmN0aW9uIHRvSW5zdHJ1bWVudExpc3QoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0luc3RydW1lbnRMaXN0JykpO1xuICB9O1xuICBDb252ZXJ0Lmluc3RydW1lbnRMaXN0VG9Kc29uID0gZnVuY3Rpb24gaW5zdHJ1bWVudExpc3RUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdJbnN0cnVtZW50TGlzdCcpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9Ob3RoaW5nID0gZnVuY3Rpb24gdG9Ob3RoaW5nKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdOb3RoaW5nJykpO1xuICB9O1xuICBDb252ZXJ0Lm5vdGhpbmdUb0pzb24gPSBmdW5jdGlvbiBub3RoaW5nVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignTm90aGluZycpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9Pcmdhbml6YXRpb24gPSBmdW5jdGlvbiB0b09yZ2FuaXphdGlvbihqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignT3JnYW5pemF0aW9uJykpO1xuICB9O1xuICBDb252ZXJ0Lm9yZ2FuaXphdGlvblRvSnNvbiA9IGZ1bmN0aW9uIG9yZ2FuaXphdGlvblRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ09yZ2FuaXphdGlvbicpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9Qb3J0Zm9saW8gPSBmdW5jdGlvbiB0b1BvcnRmb2xpbyhqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignUG9ydGZvbGlvJykpO1xuICB9O1xuICBDb252ZXJ0LnBvcnRmb2xpb1RvSnNvbiA9IGZ1bmN0aW9uIHBvcnRmb2xpb1RvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ1BvcnRmb2xpbycpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9Qb3NpdGlvbiA9IGZ1bmN0aW9uIHRvUG9zaXRpb24oanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ1Bvc2l0aW9uJykpO1xuICB9O1xuICBDb252ZXJ0LnBvc2l0aW9uVG9Kc29uID0gZnVuY3Rpb24gcG9zaXRpb25Ub0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdQb3NpdGlvbicpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9UaW1lUmFuZ2UgPSBmdW5jdGlvbiB0b1RpbWVSYW5nZShqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignVGltZVJhbmdlJykpO1xuICB9O1xuICBDb252ZXJ0LnRpbWVSYW5nZVRvSnNvbiA9IGZ1bmN0aW9uIHRpbWVSYW5nZVRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ1RpbWVSYW5nZScpKSwgbnVsbCwgMik7XG4gIH07XG4gIENvbnZlcnQudG9WYWx1YXRpb24gPSBmdW5jdGlvbiB0b1ZhbHVhdGlvbihqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignVmFsdWF0aW9uJykpO1xuICB9O1xuICBDb252ZXJ0LnZhbHVhdGlvblRvSnNvbiA9IGZ1bmN0aW9uIHZhbHVhdGlvblRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ1ZhbHVhdGlvbicpKSwgbnVsbCwgMik7XG4gIH07XG4gIHJldHVybiBDb252ZXJ0O1xufSgpO1xuZnVuY3Rpb24gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXksIHBhcmVudCkge1xuICBpZiAocGFyZW50ID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnQgPSAnJztcbiAgfVxuICB2YXIgcHJldHR5VHlwID0gcHJldHR5VHlwZU5hbWUodHlwKTtcbiAgdmFyIHBhcmVudFRleHQgPSBwYXJlbnQgPyBcIiBvbiBcIiArIHBhcmVudCA6ICcnO1xuICB2YXIga2V5VGV4dCA9IGtleSA/IFwiIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiXCIgOiAnJztcbiAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHZhbHVlXCIgKyBrZXlUZXh0ICsgcGFyZW50VGV4dCArIFwiLiBFeHBlY3RlZCBcIiArIHByZXR0eVR5cCArIFwiIGJ1dCBnb3QgXCIgKyBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbmZ1bmN0aW9uIHByZXR0eVR5cGVOYW1lKHR5cCkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0eXApKSB7XG4gICAgaWYgKHR5cC5sZW5ndGggPT09IDIgJiYgdHlwWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBcImFuIG9wdGlvbmFsIFwiICsgcHJldHR5VHlwZU5hbWUodHlwWzFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwib25lIG9mIFtcIiArIHR5cC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHByZXR0eVR5cGVOYW1lKGEpO1xuICAgICAgfSkuam9pbignLCAnKSArIFwiXVwiO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwID09PSAnb2JqZWN0JyAmJiB0eXAubGl0ZXJhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHR5cC5saXRlcmFsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0eXBlb2YgdHlwO1xuICB9XG59XG5mdW5jdGlvbiBqc29uVG9KU1Byb3BzKHR5cCkge1xuICBpZiAodHlwLmpzb25Ub0pTID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgdHlwLnByb3BzLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBtYXBbcC5qc29uXSA9IHtcbiAgICAgICAga2V5OiBwLmpzLFxuICAgICAgICB0eXA6IHAudHlwXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHR5cC5qc29uVG9KUyA9IG1hcDtcbiAgfVxuICByZXR1cm4gdHlwLmpzb25Ub0pTO1xufVxuZnVuY3Rpb24ganNUb0pTT05Qcm9wcyh0eXApIHtcbiAgaWYgKHR5cC5qc1RvSlNPTiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIHR5cC5wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gbWFwW3AuanNdID0ge1xuICAgICAgICBrZXk6IHAuanNvbixcbiAgICAgICAgdHlwOiBwLnR5cFxuICAgICAgfTtcbiAgICB9KTtcbiAgICB0eXAuanNUb0pTT04gPSBtYXA7XG4gIH1cbiAgcmV0dXJuIHR5cC5qc1RvSlNPTjtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybSh2YWwsIHR5cCwgZ2V0UHJvcHMsIGtleSwgcGFyZW50KSB7XG4gIGlmIChrZXkgPT09IHZvaWQgMCkge1xuICAgIGtleSA9ICcnO1xuICB9XG4gIGlmIChwYXJlbnQgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudCA9ICcnO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVByaW1pdGl2ZSh0eXAsIHZhbCkge1xuICAgIGlmICh0eXBlb2YgdHlwID09PSB0eXBlb2YgdmFsKSByZXR1cm4gdmFsO1xuICAgIHJldHVybiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Vbmlvbih0eXBzLCB2YWwpIHtcbiAgICAvLyB2YWwgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IG9uZSB0eXAgaW4gdHlwc1xuICAgIHZhciBsID0gdHlwcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBfdHlwID0gdHlwc1tpXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm0odmFsLCBfdHlwLCBnZXRQcm9wcyk7XG4gICAgICB9IGNhdGNoIChfKSB7fVxuICAgIH1cbiAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cHMsIHZhbCwga2V5LCBwYXJlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUVudW0oY2FzZXMsIHZhbCkge1xuICAgIGlmIChjYXNlcy5pbmRleE9mKHZhbCkgIT09IC0xKSByZXR1cm4gdmFsO1xuICAgIHJldHVybiBpbnZhbGlkVmFsdWUoY2FzZXMubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gbChhKTtcbiAgICB9KSwgdmFsLCBrZXksIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtQXJyYXkodHlwLCB2YWwpIHtcbiAgICAvLyB2YWwgbXVzdCBiZSBhbiBhcnJheSB3aXRoIG5vIGludmFsaWQgZWxlbWVudHNcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIGludmFsaWRWYWx1ZShsKCdhcnJheScpLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICByZXR1cm4gdmFsLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oZWwsIHR5cCwgZ2V0UHJvcHMpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybURhdGUodmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBkID0gbmV3IERhdGUodmFsKTtcbiAgICBpZiAoaXNOYU4oZC52YWx1ZU9mKCkpKSB7XG4gICAgICByZXR1cm4gaW52YWxpZFZhbHVlKGwoJ0RhdGUnKSwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgfVxuICAgIHJldHVybiBkO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybU9iamVjdChwcm9wcywgYWRkaXRpb25hbCwgdmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUobChyZWYgfHwgJ29iamVjdCcpLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBwcm9wID0gcHJvcHNba2V5XTtcbiAgICAgIHZhciB2ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSA/IHZhbFtrZXldIDogdW5kZWZpbmVkO1xuICAgICAgcmVzdWx0W3Byb3Aua2V5XSA9IHRyYW5zZm9ybSh2LCBwcm9wLnR5cCwgZ2V0UHJvcHMsIGtleSwgcmVmKTtcbiAgICB9KTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0cmFuc2Zvcm0odmFsW2tleV0sIGFkZGl0aW9uYWwsIGdldFByb3BzLCBrZXksIHJlZik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAodHlwID09PSAnYW55JykgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cCA9PT0gbnVsbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwpIHJldHVybiB2YWw7XG4gICAgcmV0dXJuIGludmFsaWRWYWx1ZSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpO1xuICB9XG4gIGlmICh0eXAgPT09IGZhbHNlKSByZXR1cm4gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXksIHBhcmVudCk7XG4gIHZhciByZWYgPSB1bmRlZmluZWQ7XG4gIHdoaWxlICh0eXBlb2YgdHlwID09PSAnb2JqZWN0JyAmJiB0eXAucmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICByZWYgPSB0eXAucmVmO1xuICAgIHR5cCA9IHR5cGVNYXBbdHlwLnJlZl07XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwKSkgcmV0dXJuIHRyYW5zZm9ybUVudW0odHlwLCB2YWwpO1xuICBpZiAodHlwZW9mIHR5cCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdHlwLmhhc093blByb3BlcnR5KCd1bmlvbk1lbWJlcnMnKSA/IHRyYW5zZm9ybVVuaW9uKHR5cC51bmlvbk1lbWJlcnMsIHZhbCkgOiB0eXAuaGFzT3duUHJvcGVydHkoJ2FycmF5SXRlbXMnKSA/IHRyYW5zZm9ybUFycmF5KHR5cC5hcnJheUl0ZW1zLCB2YWwpIDogdHlwLmhhc093blByb3BlcnR5KCdwcm9wcycpID8gdHJhbnNmb3JtT2JqZWN0KGdldFByb3BzKHR5cCksIHR5cC5hZGRpdGlvbmFsLCB2YWwpIDogaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXksIHBhcmVudCk7XG4gIH1cbiAgLy8gTnVtYmVycyBjYW4gYmUgcGFyc2VkIGJ5IERhdGUgYnV0IHNob3VsZG4ndCBiZS5cbiAgaWYgKHR5cCA9PT0gRGF0ZSAmJiB0eXBlb2YgdmFsICE9PSAnbnVtYmVyJykgcmV0dXJuIHRyYW5zZm9ybURhdGUodmFsKTtcbiAgcmV0dXJuIHRyYW5zZm9ybVByaW1pdGl2ZSh0eXAsIHZhbCk7XG59XG5mdW5jdGlvbiBjYXN0KHZhbCwgdHlwKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0odmFsLCB0eXAsIGpzb25Ub0pTUHJvcHMpO1xufVxuZnVuY3Rpb24gdW5jYXN0KHZhbCwgdHlwKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0odmFsLCB0eXAsIGpzVG9KU09OUHJvcHMpO1xufVxuZnVuY3Rpb24gbCh0eXApIHtcbiAgcmV0dXJuIHtcbiAgICBsaXRlcmFsOiB0eXBcbiAgfTtcbn1cbmZ1bmN0aW9uIGEodHlwKSB7XG4gIHJldHVybiB7XG4gICAgYXJyYXlJdGVtczogdHlwXG4gIH07XG59XG5mdW5jdGlvbiB1KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHlwcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0eXBzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIHJldHVybiB7XG4gICAgdW5pb25NZW1iZXJzOiB0eXBzXG4gIH07XG59XG5mdW5jdGlvbiBvKHByb3BzLCBhZGRpdGlvbmFsKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWxcbiAgfTtcbn1cbmZ1bmN0aW9uIG0oYWRkaXRpb25hbCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiBbXSxcbiAgICBhZGRpdGlvbmFsOiBhZGRpdGlvbmFsXG4gIH07XG59XG5mdW5jdGlvbiByKG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICByZWY6IG5hbWVcbiAgfTtcbn1cbnZhciB0eXBlTWFwID0ge1xuICBDaGFydDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaW5zdHJ1bWVudHMnLFxuICAgIGpzOiAnaW5zdHJ1bWVudHMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL2EoIC8qI19fUFVSRV9fKi9yKCdJbnN0cnVtZW50RWxlbWVudCcpKVxuICB9LCB7XG4gICAganNvbjogJ290aGVyQ29uZmlnJyxcbiAgICBqczogJ290aGVyQ29uZmlnJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ3JhbmdlJyxcbiAgICBqczogJ3JhbmdlJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL3IoJ1RpbWVSYW5nZU9iamVjdCcpKVxuICB9LCB7XG4gICAganNvbjogJ3N0eWxlJyxcbiAgICBqczogJ3N0eWxlJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL3IoJ1N0eWxlJykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIEluc3RydW1lbnRFbGVtZW50OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignUHVycGxlSUQnKVxuICB9LCB7XG4gICAganNvbjogJ21hcmtldCcsXG4gICAganM6ICdtYXJrZXQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovcignUHVycGxlTWFya2V0JykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFB1cnBsZUlEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdCQkcnLFxuICAgIGpzOiAnQkJHJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnQ1VTSVAnLFxuICAgIGpzOiAnQ1VTSVAnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGRFNfSUQnLFxuICAgIGpzOiAnRkRTX0lEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRklHSScsXG4gICAganM6ICdGSUdJJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnSVNJTicsXG4gICAganM6ICdJU0lOJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnUEVSTUlEJyxcbiAgICBqczogJ1BFUk1JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1JJQycsXG4gICAganM6ICdSSUMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdTRURPTCcsXG4gICAganM6ICdTRURPTCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ3RpY2tlcicsXG4gICAganM6ICd0aWNrZXInLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgUHVycGxlTWFya2V0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdCQkcnLFxuICAgIGpzOiAnQkJHJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnQ09VTlRSWV9JU09BTFBIQTInLFxuICAgIGpzOiAnQ09VTlRSWV9JU09BTFBIQTInLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdNSUMnLFxuICAgIGpzOiAnTUlDJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFRpbWVSYW5nZU9iamVjdDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnZW5kVGltZScsXG4gICAganM6ICdlbmRUaW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgRGF0ZSlcbiAgfSwge1xuICAgIGpzb246ICdzdGFydFRpbWUnLFxuICAgIGpzOiAnc3RhcnRUaW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgRGF0ZSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ2hhdEluaXRTZXR0aW5nczogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnY2hhdE5hbWUnLFxuICAgIGpzOiAnY2hhdE5hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdpbml0TWVzc2FnZScsXG4gICAganM6ICdpbml0TWVzc2FnZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ21lbWJlcnMnLFxuICAgIGpzOiAnbWVtYmVycycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9yKCdDb250YWN0TGlzdE9iamVjdCcpKVxuICB9LCB7XG4gICAganNvbjogJ29wdGlvbnMnLFxuICAgIGpzOiAnb3B0aW9ucycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICdhbnknKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnYW55J1xuICB9XSwgJ2FueScpLFxuICBDb250YWN0TGlzdE9iamVjdDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnY29udGFjdHMnLFxuICAgIGpzOiAnY29udGFjdHMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL2EoIC8qI19fUFVSRV9fKi9yKCdDb250YWN0RWxlbWVudCcpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDb250YWN0RWxlbWVudDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ0ZsdWZmeUlEJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgRmx1ZmZ5SUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2VtYWlsJyxcbiAgICBqczogJ2VtYWlsJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRkRTX0lEJyxcbiAgICBqczogJ0ZEU19JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDb250YWN0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignVGVudGFjbGVkSUQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBUZW50YWNsZWRJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnZW1haWwnLFxuICAgIGpzOiAnZW1haWwnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGRFNfSUQnLFxuICAgIGpzOiAnRkRTX0lEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIENvbnRhY3RMaXN0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdjb250YWN0cycsXG4gICAganM6ICdjb250YWN0cycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovYSggLyojX19QVVJFX18qL3IoJ0NvbnRhY3RFbGVtZW50JykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIENvbnRleHQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9XSwgJ2FueScpLFxuICBDb3VudHJ5OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignQ291bnRyeUlEJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ291bnRyeUlEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdDT1VOVFJZX0lTT0FMUEhBMicsXG4gICAganM6ICdDT1VOVFJZX0lTT0FMUEhBMicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0NPVU5UUllfSVNPQUxQSEEzJyxcbiAgICBqczogJ0NPVU5UUllfSVNPQUxQSEEzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnSVNPQUxQSEEyJyxcbiAgICBqczogJ0lTT0FMUEhBMicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0lTT0FMUEhBMycsXG4gICAganM6ICdJU09BTFBIQTMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ3VycmVuY3k6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdDdXJyZW5jeUlEJylcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfV0sICdhbnknKSxcbiAgQ3VycmVuY3lJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnQ1VSUkVOQ1lfSVNPQ09ERScsXG4gICAganM6ICdDVVJSRU5DWV9JU09DT0RFJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIEVtYWlsOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdyZWNpcGllbnRzJyxcbiAgICBqczogJ3JlY2lwaWVudHMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ1JlY2lwaWVudHNPYmplY3QnKVxuICB9LCB7XG4gICAganNvbjogJ3N1YmplY3QnLFxuICAgIGpzOiAnc3ViamVjdCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ3RleHRCb2R5JyxcbiAgICBqczogJ3RleHRCb2R5JyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFJlY2lwaWVudHNPYmplY3Q6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL3IoJ1JlY2lwaWVudHNJRCcpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ2NvbnRhY3RzJyxcbiAgICBqczogJ2NvbnRhY3RzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL2EoIC8qI19fUFVSRV9fKi9yKCdDb250YWN0RWxlbWVudCcpKSlcbiAgfV0sICdhbnknKSxcbiAgUmVjaXBpZW50c0lEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdlbWFpbCcsXG4gICAganM6ICdlbWFpbCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZEU19JRCcsXG4gICAganM6ICdGRFNfSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgSW5zdHJ1bWVudDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ1N0aWNreUlEJylcbiAgfSwge1xuICAgIGpzb246ICdtYXJrZXQnLFxuICAgIGpzOiAnbWFya2V0JyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL3IoJ0ZsdWZmeU1hcmtldCcpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBTdGlja3lJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnQkJHJyxcbiAgICBqczogJ0JCRycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0NVU0lQJyxcbiAgICBqczogJ0NVU0lQJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRkRTX0lEJyxcbiAgICBqczogJ0ZEU19JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZJR0knLFxuICAgIGpzOiAnRklHSScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0lTSU4nLFxuICAgIGpzOiAnSVNJTicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1BFUk1JRCcsXG4gICAganM6ICdQRVJNSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdSSUMnLFxuICAgIGpzOiAnUklDJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnU0VET0wnLFxuICAgIGpzOiAnU0VET0wnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICd0aWNrZXInLFxuICAgIGpzOiAndGlja2VyJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIEZsdWZmeU1hcmtldDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnQkJHJyxcbiAgICBqczogJ0JCRycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0NPVU5UUllfSVNPQUxQSEEyJyxcbiAgICBqczogJ0NPVU5UUllfSVNPQUxQSEEyJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnTUlDJyxcbiAgICBqczogJ01JQycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBJbnN0cnVtZW50TGlzdDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaW5zdHJ1bWVudHMnLFxuICAgIGpzOiAnaW5zdHJ1bWVudHMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL2EoIC8qI19fUFVSRV9fKi9yKCdJbnN0cnVtZW50RWxlbWVudCcpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBOb3RoaW5nOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgT3JnYW5pemF0aW9uOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignT3JnYW5pemF0aW9uSUQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBPcmdhbml6YXRpb25JRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnRkRTX0lEJyxcbiAgICBqczogJ0ZEU19JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0xFSScsXG4gICAganM6ICdMRUknLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdQRVJNSUQnLFxuICAgIGpzOiAnUEVSTUlEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFBvcnRmb2xpbzogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAncG9zaXRpb25zJyxcbiAgICBqczogJ3Bvc2l0aW9ucycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovYSggLyojX19QVVJFX18qL3IoJ1Bvc2l0aW9uRWxlbWVudCcpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBQb3NpdGlvbkVsZW1lbnQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2hvbGRpbmcnLFxuICAgIGpzOiAnaG9sZGluZycsXG4gICAgdHlwOiAzLjE0XG4gIH0sIHtcbiAgICBqc29uOiAnaW5zdHJ1bWVudCcsXG4gICAganM6ICdpbnN0cnVtZW50JyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdJbnN0cnVtZW50RWxlbWVudCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFBvc2l0aW9uOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdob2xkaW5nJyxcbiAgICBqczogJ2hvbGRpbmcnLFxuICAgIHR5cDogMy4xNFxuICB9LCB7XG4gICAganNvbjogJ2luc3RydW1lbnQnLFxuICAgIGpzOiAnaW5zdHJ1bWVudCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignSW5zdHJ1bWVudEVsZW1lbnQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBUaW1lUmFuZ2U6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2VuZFRpbWUnLFxuICAgIGpzOiAnZW5kVGltZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIERhdGUpXG4gIH0sIHtcbiAgICBqc29uOiAnc3RhcnRUaW1lJyxcbiAgICBqczogJ3N0YXJ0VGltZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIERhdGUpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFZhbHVhdGlvbjogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnQ1VSUkVOQ1lfSVNPQ09ERScsXG4gICAganM6ICdDVVJSRU5DWV9JU09DT0RFJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnZXhwaXJ5VGltZScsXG4gICAganM6ICdleHBpcnlUaW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgRGF0ZSlcbiAgfSwge1xuICAgIGpzb246ICdwcmljZScsXG4gICAganM6ICdwcmljZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIDMuMTQpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAndmFsdWF0aW9uVGltZScsXG4gICAganM6ICd2YWx1YXRpb25UaW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgRGF0ZSlcbiAgfSwge1xuICAgIGpzb246ICd2YWx1ZScsXG4gICAganM6ICd2YWx1ZScsXG4gICAgdHlwOiAzLjE0XG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFN0eWxlOiBbJ2JhcicsICdjYW5kbGUnLCAnY3VzdG9tJywgJ2hlYXRtYXAnLCAnaGlzdG9ncmFtJywgJ2xpbmUnLCAnbW91bnRhaW4nLCAncGllJywgJ3NjYXR0ZXInLCAnc3RhY2tlZC1iYXInXVxufTtcblxudmFyIEludGVudHM7XG4oZnVuY3Rpb24gKEludGVudHMpIHtcbiAgSW50ZW50c1tcIlN0YXJ0Q2FsbFwiXSA9IFwiU3RhcnRDYWxsXCI7XG4gIEludGVudHNbXCJTdGFydENoYXRcIl0gPSBcIlN0YXJ0Q2hhdFwiO1xuICBJbnRlbnRzW1wiU3RhcnRFbWFpbFwiXSA9IFwiU3RhcnRFbWFpbFwiO1xuICBJbnRlbnRzW1wiVmlld0FuYWx5c2lzXCJdID0gXCJWaWV3QW5hbHlzaXNcIjtcbiAgSW50ZW50c1tcIlZpZXdDaGFydFwiXSA9IFwiVmlld0NoYXJ0XCI7XG4gIEludGVudHNbXCJWaWV3Q29udGFjdFwiXSA9IFwiVmlld0NvbnRhY3RcIjtcbiAgSW50ZW50c1tcIlZpZXdIb2xkaW5nc1wiXSA9IFwiVmlld0hvbGRpbmdzXCI7XG4gIEludGVudHNbXCJWaWV3SW5zdHJ1bWVudFwiXSA9IFwiVmlld0luc3RydW1lbnRcIjtcbiAgSW50ZW50c1tcIlZpZXdJbnRlcmFjdGlvbnNcIl0gPSBcIlZpZXdJbnRlcmFjdGlvbnNcIjtcbiAgSW50ZW50c1tcIlZpZXdOZXdzXCJdID0gXCJWaWV3TmV3c1wiO1xuICBJbnRlbnRzW1wiVmlld09yZGVyc1wiXSA9IFwiVmlld09yZGVyc1wiO1xuICBJbnRlbnRzW1wiVmlld1Byb2ZpbGVcIl0gPSBcIlZpZXdQcm9maWxlXCI7XG4gIEludGVudHNbXCJWaWV3UXVvdGVcIl0gPSBcIlZpZXdRdW90ZVwiO1xuICBJbnRlbnRzW1wiVmlld1Jlc2VhcmNoXCJdID0gXCJWaWV3UmVzZWFyY2hcIjtcbn0pKEludGVudHMgfHwgKEludGVudHMgPSB7fSkpO1xuXG5leHBvcnQgeyBDaGFubmVsRXJyb3IsIENvbnRleHRUeXBlcywgQ29udmVydCwgSW50ZW50cywgT3BlbkVycm9yLCBSZXNvbHZlRXJyb3IsIFJlc3VsdEVycm9yLCBTdHlsZSwgYWRkQ29udGV4dExpc3RlbmVyLCBhZGRJbnRlbnRMaXN0ZW5lciwgYnJvYWRjYXN0LCBjb21wYXJlVmVyc2lvbk51bWJlcnMsIGNyZWF0ZVByaXZhdGVDaGFubmVsLCBmZGMzUmVhZHksIGZpbmRJbnN0YW5jZXMsIGZpbmRJbnRlbnQsIGZpbmRJbnRlbnRzQnlDb250ZXh0LCBnZXRBcHBNZXRhZGF0YSwgZ2V0Q3VycmVudENoYW5uZWwsIGdldEluZm8sIGdldE9yQ3JlYXRlQ2hhbm5lbCwgZ2V0U3lzdGVtQ2hhbm5lbHMsIGdldFVzZXJDaGFubmVscywgam9pbkNoYW5uZWwsIGpvaW5Vc2VyQ2hhbm5lbCwgbGVhdmVDdXJyZW50Q2hhbm5lbCwgb3BlbiwgcmFpc2VJbnRlbnQsIHJhaXNlSW50ZW50Rm9yQ29udGV4dCwgdmVyc2lvbklzQXRMZWFzdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmRjMy5lc20uanMubWFwXG4iLCJ2YXIgZSx0LHI9e2Q6KGUsdCk9Pntmb3IodmFyIGEgaW4gdClyLm8odCxhKSYmIXIubyhlLGEpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxhLHtlbnVtZXJhYmxlOiEwLGdldDp0W2FdfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxhPXt9O3IuZChhLHtkcTooKT0+QWRhcHRlckVycm9yLE1TOigpPT5BcGlFcnJvcix4UTooKT0+RXZlbnRFcnJvcixzTzooKT0+V2UsWnU6KCk9PmZlLEkzOigpPT4kZSwkVTooKT0+R2UsaTA6KCk9PkllLGNYOigpPT5Jbml0aWFsaXphdGlvbkVycm9yLGdIOigpPT5JbnZhbGlkQ2VsbFJhbmdlQWRkcmVzc0Vycm9yLF9XOigpPT5QYXJhbWV0ZXJFcnJvcixVJDooKT0+aSxVNzooKT0+bCxyZDooKT0+YmV9KTtjbGFzcyBBcGlFcnJvciBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGU9XCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZFwiLHQpe3ZhciByO3N1cGVyKGUpLHQmJih0aGlzLmlubmVyRXJyb3I9dCYmdCksdGhpcy5zdGFjaz1udWxsPT09KHI9dGhpcy5zdGFjayl8fHZvaWQgMD09PXI/dm9pZCAwOnIucmVwbGFjZSgvXihcXHcqRXJyb3IpLyxgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9YCl9fWNsYXNzIEFkYXB0ZXJFcnJvciBleHRlbmRzIEFwaUVycm9ye2NvbnN0cnVjdG9yKGU9XCJGYWlsZWQgdG8gZXhlY3V0ZSBhZGFwdGVyIGZ1bmN0aW9uXCIsdCl7c3VwZXIoZSx0KX19Y2xhc3MgRXZlbnRFcnJvciBleHRlbmRzIEFwaUVycm9ye2NvbnN0cnVjdG9yKGU9XCJGYWlsZWQgdG8gcmFpc2UgZXZlbnRcIix0KXtzdXBlcihlLHQpfX1jbGFzcyBJbml0aWFsaXphdGlvbkVycm9yIGV4dGVuZHMgQXBpRXJyb3J7Y29uc3RydWN0b3IoZT1cIkZhaWxlZCB0byBpbml0aWFsaXplIGFkYXB0ZXJcIix0KXtzdXBlcihlLHQpfX1jbGFzcyBJbnZhbGlkQ2VsbFJhbmdlQWRkcmVzc0Vycm9yIGV4dGVuZHMgQXBpRXJyb3J7Y29uc3RydWN0b3IoZT1cIlRoZSBjZWxsIHJhbmdlIGFkZHJlc3MgaXMgbm90IHZhbGlkXCIsdCl7c3VwZXIoZSx0KX19Y2xhc3MgUGFyYW1ldGVyRXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiSW52YWxpZCBwYXJhbWV0ZXIgdmFsdWVcIix0KXtzdXBlcihlLHQpfX0hZnVuY3Rpb24oZSl7ZS5BY3RpdmF0ZVdvcmtib29rPVwiQWN0aXZhdGVXb3JrYm9va1wiLGUuQWN0aXZhdGVXb3Jrc2hlZXQ9XCJBY3RpdmF0ZVdvcmtzaGVldFwiLGUuQWRkV29ya3NoZWV0PVwiQWRkV29ya3NoZWV0XCIsZS5DYWxjdWxhdGVXb3JrYm9vaz1cIkNhbGN1bGF0ZVdvcmtib29rXCIsZS5DYWxjdWxhdGVXb3Jrc2hlZXQ9XCJDYWxjdWxhdGVXb3Jrc2hlZXRcIixlLkNsZWFyQWxsQ2VsbHM9XCJDbGVhckFsbENlbGxzXCIsZS5DbGVhckFsbENlbGxWYWx1ZXM9XCJDbGVhckFsbENlbGxWYWx1ZXNcIixlLkNsZWFyQWxsQ2VsbEZvcm1hdHRpbmc9XCJDbGVhckFsbENlbGxGb3JtYXR0aW5nXCIsZS5DbGVhckNlbGxWYWx1ZXM9XCJDbGVhckNlbGxWYWx1ZXNcIixlLkNsZWFyQ2VsbEZvcm1hdHRpbmc9XCJDbGVhckNlbGxGb3JtYXR0aW5nXCIsZS5DbGVhckNlbGxzPVwiQ2xlYXJDZWxsc1wiLGUuQ2xvc2VXb3JrYm9vaz1cIkNsb3NlV29ya2Jvb2tcIixlLkNyZWF0ZVdvcmtib29rPVwiQ3JlYXRlV29ya2Jvb2tcIixlLkRlbGV0ZVdvcmtzaGVldD1cIkRlbGV0ZVdvcmtzaGVldFwiLGUuRGVyZWdpc3RlckV2ZW50PVwiRGVyZWdpc3RlckV2ZW50XCIsZS5FdmVudEZpcmVkPVwiRXZlbnRGaXJlZFwiLGUuRmlsdGVyQ2VsbHM9XCJGaWx0ZXJDZWxsc1wiLGUuR2V0QWN0aXZlV29ya3NoZWV0PVwiR2V0QWN0aXZlV29ya3NoZWV0XCIsZS5HZXRDYWxjdWxhdGlvbk1vZGU9XCJHZXRDYWxjdWxhdGlvbk1vZGVcIixlLkdldENlbGxOYW1lcz1cIkdldENlbGxOYW1lc1wiLGUuR2V0Q2VsbHM9XCJHZXRDZWxsc1wiLGUuR2V0UmFuZ2VBZGRyZXNzPVwiR2V0UmFuZ2VBZGRyZXNzXCIsZS5HZXRXb3JrYm9va0J5SWQ9XCJHZXRXb3JrYm9va0J5SWRcIixlLkdldFdvcmtib29rRmlsZVBhdGg9XCJHZXRXb3JrYm9va0ZpbGVQYXRoXCIsZS5HZXRXb3JrYm9va05hbWU9XCJHZXRXb3JrYm9va05hbWVcIixlLkdldFdvcmtib29rcz1cIkdldFdvcmtib29rc1wiLGUuR2V0V29ya2Jvb2tXaW5kb3dCb3VuZHM9XCJHZXRXb3JrYm9va1dpbmRvd0JvdW5kc1wiLGUuR2V0V29ya3NoZWV0QnlJZD1cIkdldFdvcmtzaGVldEJ5SWRcIixlLkdldFdvcmtzaGVldEJ5TmFtZT1cIkdldFdvcmtzaGVldEJ5TmFtZVwiLGUuR2V0V29ya3NoZWV0TmFtZT1cIkdldFdvcmtzaGVldE5hbWVcIixlLkdldFdvcmtzaGVldHM9XCJHZXRXb3Jrc2hlZXRzXCIsZS5Mb2dNZXNzYWdlPVwiTG9nTWVzc2FnZVwiLGUuT3Blbldvcmtib29rPVwiT3Blbldvcmtib29rXCIsZS5Qcm90ZWN0V29ya3NoZWV0PVwiUHJvdGVjdFdvcmtzaGVldFwiLGUuUXVpdEFwcGxpY2F0aW9uPVwiUXVpdEFwcGxpY2F0aW9uXCIsZS5SZWdpc3RlckV2ZW50PVwiUmVnaXN0ZXJFdmVudFwiLGUuU2F2ZVdvcmtib29rPVwiU2F2ZVdvcmtib29rXCIsZS5TYXZlV29ya2Jvb2tBcz1cIlNhdmVXb3JrYm9va0FzXCIsZS5TZXRDZWxsVmFsdWVzPVwiU2V0Q2VsbFZhbHVlc1wiLGUuU2V0Q2VsbEZvcm1hdHRpbmc9XCJTZXRDZWxsRm9ybWF0dGluZ1wiLGUuU2V0Q2VsbE5hbWU9XCJTZXRDZWxsTmFtZVwiLGUuU2V0V29ya2Jvb2tXaW5kb3dCb3VuZHM9XCJTZXRXb3JrYm9va1dpbmRvd0JvdW5kc1wiLGUuU2V0V29ya3NoZWV0TmFtZT1cIlNldFdvcmtzaGVldE5hbWVcIn0oZXx8KGU9e30pKSxmdW5jdGlvbihlKXtlLkFjdGl2YXRlPVwiQWN0aXZhdGVcIixlLkFjdGl2YXRlV29ya3NoZWV0PVwiQWN0aXZhdGVXb3Jrc2hlZXRcIixlLkFkZFdvcmtzaGVldD1cIkFkZFdvcmtzaGVldFwiLGUuQ2hhbmdlPVwiQ2hhbmdlXCIsZS5DbG9zZT1cIkNsb3NlXCIsZS5EZWFjdGl2YXRlPVwiRGVhY3RpdmF0ZVwiLGUuRGVsZXRlV29ya3NoZWV0PVwiRGVsZXRlV29ya3NoZWV0XCJ9KHR8fCh0PXt9KSk7Y29uc3Qgbz1cIjEuNS4wXCI7bGV0IG49ITE7Y29uc3Qgcz1cIltAb3BlbmZpbi9leGNlbF1cIixpPSgpPT57bj0hMX0sbD0oKT0+e249ITAsZChgdiR7b31gKX0sYz0oZSx0KT0+e24mJihlLmlubmVyRXJyb3I/Y29uc29sZS5lcnJvcih0P2Ake3N9ICR7dH1gOnMsZSxcIlxcblxcbihpbm5lcilcIixlLmlubmVyRXJyb3IpOmNvbnNvbGUuZXJyb3IodD9gJHtzfSAke3R9YDpzLGUpKX0sZD0oLi4uZSk9PntuJiZjb25zb2xlLmxvZyhzLC4uLmUpfSxoPSguLi5lKT0+e24mJmNvbnNvbGUud2FybihzLC4uLmUpfTtcInVuZGVmaW5lZFwiPT10eXBlb2YgZmluJiZPYmplY3QuYXNzaWduKHdpbmRvdyx7ZmluOnt9fSksT2JqZWN0LmFzc2lnbihmaW4se0ludGVncmF0aW9uczp7RXhjZWw6e2VuYWJsZUxvZ2dpbmc6bCxkaXNhYmxlTG9nZ2luZzppfX19KTtjb25zdCB3PW5ldyBNYXAscD1hc3luYyhyLGEsbyxuLHMpPT57aWYoIWF8fCFhLmV2ZW50VGFyZ2V0fHwhYS5vYmplY3RJZCl7Y29uc3QgZT1uZXcgRXZlbnRFcnJvcihcIkV2ZW50IHJlZ2lzdHJhdGlvbiBtaXNzaW5nIHJlcXVpcmVkIHZhbHVlc1wiKTt0aHJvdyBjKGUpLGV9Y29uc3QgaT1PYmplY3Qua2V5cyh0KS5maW5kKChlPT5lLnRvTG93ZXJDYXNlKCk9PT1vLnRvTG93ZXJDYXNlKCkpKTtpZighaSl7Y29uc3QgZT1uZXcgRXZlbnRFcnJvcihgVW5zdXBwb3J0ZWQgZXZlbnQgbmFtZTogJHtvfWApO3Rocm93IGMoZSksZX1jb25zdCBsPU9iamVjdC5hc3NpZ24oe2V2ZW50TmFtZTp0W2ldfSxhKTtkKFwiUmVnaXN0ZXJpbmcgZXZlbnRcIixsKTt0cnl7Y29uc3QgdD1hd2FpdCByLmRpc3BhdGNoKGUuUmVnaXN0ZXJFdmVudCxsKSxhPXtoYW5kbGVyOnMsbGlzdGVuZXI6bn07dy5zZXQodCxhKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yKHZvaWQgMCxlKX19LGs9KGUsdCk9Pntjb25zdHtldmVudFJlZ2lzdHJhdGlvbklkOnJ9PWUsYT13LmdldChyKTtpZighYSl0aHJvdyBuZXcgRXZlbnRFcnJvcihgTm8gcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lciBmb3VuZCBmb3IgaWQ6ICR7cn1gKTtkKFwiRXZlbnQgcGF5bG9hZCByZWNlaXZlZFwiLGUpLGEuaGFuZGxlcihlKX0sdT10PT5hc3luYyByPT57bGV0IGE7Zm9yKGNvbnN0W2UsdF1vZiB3KWlmKHQubGlzdGVuZXI9PT1yKXthPWU7YnJlYWt9aWYoIWEpdGhyb3cgbmV3IEV2ZW50RXJyb3I7ZChcIkRlcmVnaXN0ZXJpbmcgZXZlbnQ6XCIsYSk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5EZXJlZ2lzdGVyRXZlbnQsYSksdy5kZWxldGUoYSl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19O3ZhciBnOyFmdW5jdGlvbihlKXtlLldvcmtib29rPVwiV29ya2Jvb2tcIixlLldvcmtzaGVldD1cIldvcmtzaGVldFwiLGUuQ2VsbFJhbmdlPVwiQ2VsbFJhbmdlXCJ9KGd8fChnPXt9KSk7Y29uc3QgbT0oKT0+dm9pZCAwIT09Y3J5cHRvLnJhbmRvbVVVSUQ/Y3J5cHRvLnJhbmRvbVVVSUQoKTpcIjEwMDAwMDAwLTEwMDAtNDAwMC04MDAwLTEwMDAwMDAwMDAwMFwiLnJlcGxhY2UoL1swMThdL2csKGU9Pntjb25zdCB0PXdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSYxNT4+TnVtYmVyKGUpLzQ7cmV0dXJuKE51bWJlcihlKV50KS50b1N0cmluZygxNil9KSksQz1uZXcgTWFwLHk9KGUsdCk9PmFzeW5jKHIsYSk9PnAoZSx0LHIsYSxXKGEpKSx2PSh0LHIsYSk9PmFzeW5jKCk9PntkKGBDZWxsIHJhbmdlOiBDbGVhcjsgYWRkcmVzczoke2F9ICgke3J9KWApO2NvbnN0IG89e2FkZHJlc3M6YSxvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQ2VsbHMsbyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LGI9KHQscixhKT0+YXN5bmMoKT0+e2QoYENlbGwgcmFuZ2U6IENsZWFyIGZvcm1hdHRpbmc7IGFkZHJlc3M6JHthfSAoJHtyfSlgKTtjb25zdCBvPXthZGRyZXNzOmEsb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckNlbGxGb3JtYXR0aW5nLG8pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxBPSh0LHIsYSk9PmFzeW5jKCk9PntkKGBDZWxsIHJhbmdlOiBDbGVhciB2YWx1ZXM7IGFkZHJlc3M6JHthfSAoJHtyfSlgKTtjb25zdCBvPXthZGRyZXNzOmEsb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckNlbGxWYWx1ZXMsbyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEU9KGUsdCxyKT0+KGEsbz0xZTMpPT57aWYobzw9MCl0aHJvdyBuZXcgQXBpRXJyb3IoXCJVcGRhdGUgaW50ZXJ2YWwgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtjb25zdCBuPW0oKTtkKGBDZWxsIHJhbmdlOiBDcmVhdGUgZGF0YSBzdHJlYW07IHN0cmVhbUlkOiR7bn07IGFkZHJlc3M6JHtyfTsgdXBkYXRlSW50ZXJ2YWw6JHtvfSAoJHt0fSlgKTtjb25zdCBzPXthZGRyZXNzOnIsY2xvc2U6KCk9PntkKGBDbG9zZWQgc3RyZWFtICgke259KWApLChlPT57dmFyIHQ7dHJ5e2NvbnN0IHI9Qy5nZXQoZSk7aWYoIXIpdGhyb3cgbmV3IEFwaUVycm9yKGBVbmFibGUgdG8gZmluZCByZWdpc3RlcmVkIGRhdGEgc3RyZWFtIHdpdGggaWQgJHtlfWApO3ZvaWQgMCE9PShudWxsIT09KHQ9ci50aW1lcikmJnZvaWQgMCE9PXQ/dDp2b2lkIDApJiZGKGUpLEMuZGVsZXRlKGUpfWNhdGNoKGUpe3Rocm93IGMoZSksZX19KShuKX0saWQ6bixzdGFydDooKT0+e2QoYFN0YXJ0ZWQgc3RyZWFtaW5nICgke259KWApLFUobixhLGUsdCl9LHN0b3A6KCk9PntkKGBTdG9wcGVkIHN0cmVhbWluZyAoJHtufSlgKSxGKG4pfSx1cGRhdGVJbnRlcnZhbDpvLHdvcmtzaGVldElkOnR9O3JldHVybiBDLnNldChuLHtkYXRhU3RyZWFtOnN9KSxzfSxXPWU9PnI9Pnt2YXIgYTt0cnl7aWYoKG51bGw9PT0oYT1yLmV2ZW50TmFtZSl8fHZvaWQgMD09PWE/dm9pZCAwOmEudG9VcHBlckNhc2UoKSk9PT10LkNoYW5nZS50b1VwcGVyQ2FzZSgpKXJldHVybiBlKHIuY2hhbmdlZENlbGxzKTt0aHJvdyBuZXcgRXZlbnRFcnJvcihgVW5leHBlY3RlZCBjZWxsIHJhbmdlIGV2ZW50OiAke3IuZXZlbnROYW1lfWApfWNhdGNoKGUpe2MoZSl9fSxmPShlLHQscik9PmFzeW5jKCk9PntkKGBDZWxsIHJhbmdlOiBHZXQgY2VsbHM7IGFkZHJlc3M6JHtyfSAoJHt0fSlgKTtjb25zdCBhPWF3YWl0ICQoZSx0LHIpO3JldHVybiBkKGAke3J9OmAsYSksYX0sJD1hc3luYyh0LHIsYSk9Pntjb25zdCBvPXthZGRyZXNzOmEsb2JqZWN0SWQ6cn07dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuR2V0Q2VsbHMsbyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEc9KHQscixhKT0+YXN5bmMoKT0+e2QoYENlbGwgcmFuZ2U6IEdldCBuYW1lOyBhZGRyZXNzOiR7YX0gKCR7cn0pYCk7Y29uc3Qgbz17YWRkcmVzczphLG9iamVjdElkOnJ9O3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkdldENlbGxOYW1lcyxvKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sST0odCxyLGEpPT5hc3luYyhvLG4scyxpLGw9ITApPT57ZChgQ2VsbCByYW5nZTogU2V0IGZpbHRlcjsgYWRkcmVzczoke2F9ICgke3J9KWAse2NvbHVtbkluZGV4Om8sZmlsdGVyT3BlcmF0b3I6bixjcml0ZXJpYTE6cyxjcml0ZXJpYTI6aSx2aXNpYmxlRHJvcERvd246bH0pO2NvbnN0IGM9e2FkZHJlc3M6YSxjcml0ZXJpYTE6cyxjcml0ZXJpYTI6aSxjb2x1bW5JbmRleDpvLGZpbHRlck9wZXJhdG9yOm4sb2JqZWN0SWQ6cix2aXNpYmxlRHJvcERvd246bH07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5GaWx0ZXJDZWxscyxjKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sTj0odCxyLGEpPT5hc3luYyBvPT57ZChgQ2VsbCByYW5nZTogU2V0IGZvcm1hdHRpbmc7IGFkZHJlc3M6JHthfSAoJHtyfSlgLG8pO2NvbnN0IG49e2FkZHJlc3M6YSxmb3JtYXR0aW5nOm8sb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5TZXRDZWxsRm9ybWF0dGluZyxuKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sUz0odCxyLGEpPT5hc3luYyBvPT57Y29uc3Qgbj1vLnRyaW0oKTtsZXQgcztpZighbil0aHJvdyBzPW5ldyBQYXJhbWV0ZXJFcnJvcihcIk5hbWUgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZ1wiKSxjKHMpLHM7aWYobi5sZW5ndGg+MjU1KXRocm93IHM9bmV3IFBhcmFtZXRlckVycm9yKFwiTmFtZSBtdXN0IGJlIDI1NSBjaGFyYWN0ZXJzIG9yIGxlc3NcIiksYyhzKSxzO2lmKC9bXmEtekEtWjAtOV8uP1xcXFxcIiddLy50ZXN0KG4pKXRocm93IHM9bmV3IFBhcmFtZXRlckVycm9yKFwiTmFtZSBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNcIiksYyhzKSxzO2lmKC9eXFxkLy50ZXN0KG4pKXRocm93IHM9bmV3IFBhcmFtZXRlckVycm9yKFwiTmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCBhIG51bWJlclwiKSxjKHMpLHM7ZChgQ2VsbCByYW5nZTogU2V0IG5hbWU7IGFkZHJlc3M6JHthfTsgbmV3TmFtZToke259ICgke3J9KWApO2NvbnN0IGk9e2FkZHJlc3M6YSxuYW1lOm4sb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5TZXRDZWxsTmFtZSxpKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sRD0odCxyLGEpPT5hc3luYyBvPT57ZChgQ2VsbCByYW5nZTogU2V0IHZhbHVlczsgYWRkcmVzczoke2F9ICgke3J9KWAsbyk7Y29uc3Qgbj17YWRkcmVzczphLG9iamVjdElkOnIsdmFsdWVzTWFwOm99O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuU2V0Q2VsbFZhbHVlcyxuKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sVT0oZSx0LHIsYSk9Pnt2YXIgbzt0cnl7Y29uc3Qgbj1DLmdldChlKTtpZighbil0aHJvdyBuZXcgQXBpRXJyb3IoYFVuYWJsZSB0byBmaW5kIHJlZ2lzdGVyZWQgZGF0YSBzdHJlYW0gd2l0aCBpZCAke2V9YCk7dm9pZCAwIT09KG51bGwhPT0obz1uLnRpbWVyKSYmdm9pZCAwIT09bz9vOnZvaWQgMCkmJkYoZSk7Y29uc3R7YWRkcmVzczpzLHVwZGF0ZUludGVydmFsOml9PW4uZGF0YVN0cmVhbSxsPWFzeW5jKCk9Pntjb25zdCBvPWF3YWl0IHQoKTt0cnl7YXdhaXQgRChyLGEscykoW1tvXV0pfWNhdGNoKHQpe2goYFVuYWJsZSB0byB1cGRhdGUgY2VsbCByYW5nZSBmb3Igc3RyZWFtIHdpdGggaWQgJHtlfTogJHtudWxsPT10P3ZvaWQgMDp0Lm1lc3NhZ2V9YCl9fSxjPXdpbmRvdy5zZXRJbnRlcnZhbChsLGkpO24udGltZXI9Y31jYXRjaChlKXt0aHJvdyBjKGUpLGV9fSxGPWU9Pnt2YXIgdDt0cnl7Y29uc3Qgcj1DLmdldChlKTtpZighcil0aHJvdyBuZXcgQXBpRXJyb3IoYFVuYWJsZSB0byBmaW5kIHJlZ2lzdGVyZWQgZGF0YSBzdHJlYW0gd2l0aCBpZCAke2V9YCk7aWYodm9pZCAwPT09KG51bGwhPT0odD1yLnRpbWVyKSYmdm9pZCAwIT09dD90OnZvaWQgMCkpcmV0dXJuO3dpbmRvdy5jbGVhckludGVydmFsKHIudGltZXIpLHIudGltZXI9dm9pZCAwfWNhdGNoKGUpe3Rocm93IGMoZSksZX19LFA9KHQscik9PmFzeW5jKCk9PntkKGBXb3Jrc2hlZXQ6IEFjdGl2YXRlICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQWN0aXZhdGVXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LHg9KGUsdCk9PmFzeW5jKHIsYSk9PnAoZSx0LHIsYSxWKGEpKSxMPSh0LHIpPT5hc3luYygpPT57ZChgV29ya3NoZWV0OiBDYWxjdWxhdGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DYWxjdWxhdGVXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEI9KHQscik9PmFzeW5jKCk9PntkKGBXb3Jrc2hlZXQ6IENsZWFyIGFsbCBjZWxsIGZvcm1hdHRpbmcgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxGb3JtYXR0aW5nLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxqPSh0LHIpPT5hc3luYygpPT57ZChgV29ya3NoZWV0OiBDbGVhciBhbGwgY2VsbHMgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxzLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxSPSh0LHIpPT5hc3luYygpPT57ZChgV29ya3NoZWV0OiBDbGVhciBhbGwgY2VsbCB2YWx1ZXMgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxWYWx1ZXMscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LE89KGUsdCk9Pntjb25zdCByPXtldmVudFRhcmdldDpnLldvcmtzaGVldCxvYmplY3RJZDp0fTtyZXR1cm57b2JqZWN0SWQ6dCxhY3RpdmF0ZTpQKGUsdCksYWRkRXZlbnRMaXN0ZW5lcjp4KGUsciksY2FsY3VsYXRlOkwoZSx0KSxjbGVhckFsbENlbGxGb3JtYXR0aW5nOkIoZSx0KSxjbGVhckFsbENlbGxzOmooZSx0KSxjbGVhckFsbENlbGxWYWx1ZXM6UihlLHQpLGNsZWFyQ2VsbEZvcm1hdHRpbmc6cj0+YihlLHQscikoKSxjbGVhckNlbGxzOnI9PnYoZSx0LHIpKCksY2xlYXJDZWxsVmFsdWVzOnI9PkEoZSx0LHIpKCksY3JlYXRlRGF0YVN0cmVhbToocixhLG8pPT5FKGUsdCxyKShhLG8pLGRlbGV0ZTp6KGUsdCksZmlsdGVyQ2VsbHM6KHIsYSxvLG4scyxpKT0+SShlLHQscikoYSxvLG4scyxpKSxnZXRDZWxsUmFuZ2U6TShlLHIpLGdldENlbGxzOnI9PmYoZSx0LHIpKCksZ2V0TmFtZTpUKGUsdCkscHJvdGVjdDpIKGUsdCkscmVtb3ZlRXZlbnRMaXN0ZW5lcjp1KGUpLHNldENlbGxGb3JtYXR0aW5nOihyLGEpPT5OKGUsdCxyKShhKSxzZXRDZWxsTmFtZToocixhKT0+UyhlLHQscikoYSksc2V0Q2VsbFZhbHVlczoocixhKT0+RChlLHQscikoYSksc2V0TmFtZTpRKGUsdCl9fSxWPWU9PnI9Pnt2YXIgYTt0cnl7c3dpdGNoKG51bGw9PT0oYT1yLmV2ZW50TmFtZSl8fHZvaWQgMD09PWE/dm9pZCAwOmEudG9VcHBlckNhc2UoKSl7Y2FzZSB0LkFjdGl2YXRlLnRvVXBwZXJDYXNlKCk6Y2FzZSB0LkRlYWN0aXZhdGUudG9VcHBlckNhc2UoKTpyZXR1cm4gZSgpO2Nhc2UgdC5DaGFuZ2UudG9VcHBlckNhc2UoKTpyZXR1cm4gZShyLmNoYW5nZWRDZWxscyk7ZGVmYXVsdDp0aHJvdyBuZXcgRXZlbnRFcnJvcihgVW5leHBlY3RlZCB3b3Jrc2hlZXQgZXZlbnQ6ICR7ci5ldmVudE5hbWV9YCl9fWNhdGNoKGUpe2MoZSl9fSx6PSh0LHIpPT5hc3luYygpPT57ZChgV29ya3NoZWV0OiBEZWxldGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5EZWxldGVXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LE09KHQscik9PmFzeW5jIGE9Pntjb25zdHtvYmplY3RJZDpvfT1yO2QoYFdvcmtzaGVldDogR2V0IGNlbGwgcmFuZ2U7IGFkZHJlc3M6JHthfSAoJHtvfSlgKTt0cnl7Y29uc3Qgbj17YWRkcmVzczphLG9iamVjdElkOm99LHM9YXdhaXQgdC5kaXNwYXRjaChlLkdldFJhbmdlQWRkcmVzcyxuKTtyZXR1cm4oKGUsdCxyKT0+e2NvbnN0e29iamVjdElkOmF9PXQsbz17Y2VsbFJhbmdlQWRkcmVzczpyLGV2ZW50VGFyZ2V0OmcuQ2VsbFJhbmdlLG9iamVjdElkOmF9O3JldHVybnthZGRFdmVudExpc3RlbmVyOnkoZSxvKSxhZGRyZXNzOnIsY2xlYXI6dihlLGEsciksY2xlYXJGb3JtYXR0aW5nOmIoZSxhLHIpLGNsZWFyVmFsdWVzOkEoZSxhLHIpLGNyZWF0ZURhdGFTdHJlYW06RShlLGEsciksZ2V0Q2VsbHM6ZihlLGEsciksZ2V0TmFtZXM6RyhlLGEscikscmVtb3ZlRXZlbnRMaXN0ZW5lcjp1KGUpLHNldEZpbHRlcjpJKGUsYSxyKSxzZXRGb3JtYXR0aW5nOk4oZSxhLHIpLHNldE5hbWU6UyhlLGEsciksc2V0VmFsdWVzOkQoZSxhLHIpfX0pKHQscixzKX1jYXRjaChlKXtpZihlLm1lc3NhZ2UuaW5kZXhPZihcIlVuYWJsZSB0byBnZXQgY2VsbCByYW5nZVwiKT49MCl7Y29uc3QgZT1uZXcgSW52YWxpZENlbGxSYW5nZUFkZHJlc3NFcnJvcjt0aHJvdyBjKGUpLGV9dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFQ9KHQscik9PmFzeW5jKCk9PntkKGBXb3Jrc2hlZXQ6IEdldCBuYW1lICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtzaGVldE5hbWUscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEg9KHQscik9PmFzeW5jKCk9PntkKGBXb3Jrc2hlZXQ6IFByb3RlY3QgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5Qcm90ZWN0V29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxRPSh0LHIpPT5hc3luYyBhPT57Y29uc3Qgbz1hLnNsaWNlKDAsMzEpLnJlcGxhY2UoL1s6XFxcXC8/KltcXF1dL2csXCJcIikudHJpbSgpO2xldCBuO2lmKCFvKXRocm93IG49bmV3IFBhcmFtZXRlckVycm9yKFwiSW52YWxpZCB3b3Jrc2hlZXQgbmFtZVwiKSxjKG4pLG47ZChgV29ya3NoZWV0OiBTZXQgbmFtZTsgbmV3V29ya3NoZWV0TmFtZToke299ICgke3J9KWApO2NvbnN0IHM9e25ld1dvcmtzaGVldE5hbWU6byxvYmplY3RJZDpyfTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5TZXRXb3Jrc2hlZXROYW1lLHMpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxfPSh0LHIpPT5hc3luYygpPT57ZChgV29ya2Jvb2s6IEFjdGl2YXRlICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkFjdGl2YXRlV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LHE9KGUsdCk9PmFzeW5jKHIsYSk9PnAoZSx0LHIsYSxZKGUsYSkpLEo9KHQscik9PmFzeW5jKCk9PntsZXQgYTtkKGBXb3JrYm9vazogQWRkIHdvcmtzaGVldCAoJHtyfSlgKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuQWRkV29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIE8odCxhKX0sSz0odCxyKT0+YXN5bmMoKT0+e2QoYFdvcmtib29rOiBDYWxjdWxhdGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DYWxjdWxhdGVXb3JrYm9vayxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sWD0odCxyKT0+YXN5bmMoKT0+e2QoYFdvcmtib29rOiBDbG9zZSAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5DbG9zZVdvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxaPShlLHQpPT57Y29uc3Qgcj17ZXZlbnRUYXJnZXQ6Zy5Xb3JrYm9vayxvYmplY3RJZDp0fTtyZXR1cm57b2JqZWN0SWQ6dCxhY3RpdmF0ZTpfKGUsdCksYWRkV29ya3NoZWV0OkooZSx0KSxhZGRFdmVudExpc3RlbmVyOnEoZSxyKSxjYWxjdWxhdGU6SyhlLHQpLGNsb3NlOlgoZSx0KSxnZXRBY3RpdmVXb3Jrc2hlZXQ6ZWUoZSx0KSxnZXRDYWxjdWxhdGlvbk1vZGU6dGUoZSx0KSxnZXRGaWxlUGF0aDpyZShlLHQpLGdldE5hbWU6YWUoZSx0KSxnZXRXaW5kb3dCb3VuZHM6b2UoZSx0KSxnZXRXb3Jrc2hlZXRCeU5hbWU6bmUoZSx0KSxnZXRXb3Jrc2hlZXRzOnNlKGUsdCkscmVtb3ZlRXZlbnRMaXN0ZW5lcjp1KGUpLHNhdmU6aWUoZSx0KSxzYXZlQXM6bGUoZSx0KSxzZXRXaW5kb3dCb3VuZHM6Y2UoZSx0KX19LFk9KGUscik9PmE9Pnt2YXIgbzt0cnl7c3dpdGNoKG51bGw9PT0obz1hLmV2ZW50TmFtZSl8fHZvaWQgMD09PW8/dm9pZCAwOm8udG9VcHBlckNhc2UoKSl7Y2FzZSB0LkFjdGl2YXRlLnRvVXBwZXJDYXNlKCk6Y2FzZSB0LkNsb3NlLnRvVXBwZXJDYXNlKCk6Y2FzZSB0LkRlYWN0aXZhdGUudG9VcHBlckNhc2UoKTpyZXR1cm4gcigpO2Nhc2UgdC5BY3RpdmF0ZVdvcmtzaGVldC50b1VwcGVyQ2FzZSgpOmNhc2UgdC5BZGRXb3Jrc2hlZXQudG9VcHBlckNhc2UoKTpyZXR1cm4gcihPKGUsYS53b3Jrc2hlZXRPYmplY3RJZCkpO2Nhc2UgdC5EZWxldGVXb3Jrc2hlZXQudG9VcHBlckNhc2UoKTpyZXR1cm4gcihhLndvcmtzaGVldE5hbWUpO2RlZmF1bHQ6dGhyb3cgbmV3IEV2ZW50RXJyb3IoYFVuZXhwZWN0ZWQgd29ya2Jvb2sgZXZlbnQ6ICR7YS5ldmVudE5hbWV9YCl9fWNhdGNoKGUpe2MoZSl9fSxlZT0odCxyKT0+YXN5bmMoKT0+e2xldCBhO2QoYFdvcmtib29rOiBHZXQgYWN0aXZlIHdvcmtzaGVldDogKCR7cn0pYCk7dHJ5e2E9YXdhaXQgdC5kaXNwYXRjaChlLkdldEFjdGl2ZVdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBPKHQsYSl9LHRlPSh0LHIpPT5hc3luYygpPT57ZChcIldvcmtib29rOiBHZXQgY2FsY3VsYXRpb24gbW9kZVwiKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRDYWxjdWxhdGlvbk1vZGUscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LHJlPSh0LHIpPT5hc3luYygpPT57ZChgV29ya2Jvb2s6IEdldCBmaWxlIHBhdGggKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya2Jvb2tGaWxlUGF0aCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sYWU9KHQscik9PmFzeW5jKCk9PntkKGBXb3JrYm9vazogR2V0IG5hbWUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya2Jvb2tOYW1lLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxvZT0odCxyKT0+YXN5bmMoKT0+e2QoYFdvcmtib29rOiBHZXQgd2luZG93IGJvdW5kcyAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3JrYm9va1dpbmRvd0JvdW5kcyxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sbmU9KHQscik9PmFzeW5jIGE9PntsZXQgbztkKGBXb3JrYm9vazogR2V0IHdvcmtzaGVldCBieSBuYW1lOiAke2F9ICgke3J9KWApO3RyeXtpZihvPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3Jrc2hlZXRCeU5hbWUse29iamVjdElkOnIsd29ya3NoZWV0TmFtZTphfSksbnVsbD09PW8pcmV0dXJuIG51bGx9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gTyh0LG8pfSxzZT0odCxyKT0+YXN5bmMoKT0+e2xldCBhO2QoYFdvcmtib29rOiBHZXQgd29ya3NoZWV0cyAoJHtyfSlgKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0cyxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBhLm1hcCgoZT0+Tyh0LGUpKSl9LGllPSh0LHIpPT5hc3luYygpPT57ZChgV29ya2Jvb2s6IFNhdmUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuU2F2ZVdvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxsZT0odCxyKT0+YXN5bmMgYT0+e2QoYFdvcmtib29rOiBTYXZlIGFzOyBmaWxlUGF0aDoke2F9ICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlNhdmVXb3JrYm9va0FzLHtmaWxlUGF0aDphLG9iamVjdElkOnJ9KX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sY2U9KHQscik9PmFzeW5jIGE9PntkKGBXb3JrYm9vazogU2V0IHdpbmRvdyBib3VuZHMgKCR7cn0pYCxhKTtjb25zdHtoZWlnaHQ6byxsZWZ0Om4sdG9wOnMsd2lkdGg6aX09YTtpZihudWxsIT1vJiYoTnVtYmVyLmlzTmFOKG8pfHxvPD0wKSl7Y29uc3QgZT1uZXcgUGFyYW1ldGVyRXJyb3IoXCJXb3JrYm9vayB3aW5kb3cgaGVpZ2h0IG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIHplcm8uXCIpO3Rocm93IGMoZSksZX1pZihudWxsIT1uJiZOdW1iZXIuaXNOYU4obikpe2NvbnN0IGU9bmV3IFBhcmFtZXRlckVycm9yKFwiV29ya2Jvb2sgd2luZG93IGxlZnQgcG9zaXRpb24gbXVzdCBiZSBhIHZhbGlkIG51bWJlci5cIik7dGhyb3cgYyhlKSxlfWlmKG51bGwhPXMmJk51bWJlci5pc05hTihzKSl7Y29uc3QgZT1uZXcgUGFyYW1ldGVyRXJyb3IoXCJXb3JrYm9vayB3aW5kb3cgdG9wIHBvc2l0aW9uIG11c3QgYmUgYSB2YWxpZCBudW1iZXIuXCIpO3Rocm93IGMoZSksZX1pZihudWxsIT1pJiYoTnVtYmVyLmlzTmFOKGkpfHxpPD0wKSl7Y29uc3QgZT1uZXcgUGFyYW1ldGVyRXJyb3IoXCJXb3JrYm9vayB3aW5kb3cgd2lkdGggbXVzdCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gemVyby5cIik7dGhyb3cgYyhlKSxlfWNvbnN0IGw9e25ld1dpbmRvd0JvdW5kczphLG9iamVjdElkOnJ9O3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlNldFdvcmtib29rV2luZG93Qm91bmRzLGwpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxkZT10PT5hc3luYyByPT57bGV0IGE7ZChgQXBwbGljYXRpb246IEdldCB3b3JrYm9vazsgaWQ6JHtyfWApO3RyeXthPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3JrYm9va0J5SWQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gWih0LGEpfSxoZT10PT5hc3luYygpPT57bGV0IHI7ZChcIkFwcGxpY2F0aW9uOiBHZXQgd29ya2Jvb2tzXCIpO3RyeXtyPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3JrYm9va3MpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIHIubWFwKChlPT5aKHQsZSkpKX0sd2U9dD0+YXN5bmMgcj0+e2QoYEFwcGxpY2F0aW9uOiBHZXQgd29ya3NoZWV0OyBpZDoke3J9YCk7dHJ5e3I9YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtzaGVldEJ5SWQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gTyh0LHIpfSxwZT10PT5hc3luYyByPT57bGV0IGE7ZChgQXBwbGljYXRpb246IE9wZW4gd29ya2Jvb2s7IGZpbGVQYXRoOiR7cn1gKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuT3Blbldvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIFoodCxhKX0sa2U9dD0+YXN5bmMocj0hMCk9PntkKGBBcHBsaWNhdGlvbjogUXVpdDsgZGlzcGxheUFsZXJ0czoke3J9YCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuUXVpdEFwcGxpY2F0aW9uLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fTt2YXIgdWUsZ2U7IWZ1bmN0aW9uKGUpe2UuRXhjZWxBcHBsaWNhdGlvbj1cIkVYQ0VMLUFQUFwifSh1ZXx8KHVlPXt9KSksZnVuY3Rpb24oZSl7ZVtlLkluZm89MV09XCJJbmZvXCIsZVtlLldhcm49Ml09XCJXYXJuXCIsZVtlLkVycm9yPTNdPVwiRXJyb3JcIn0oZ2V8fChnZT17fSkpO2NvbnN0IG1lPVwiZXhjZWwtYWRhcHRlclwiLENlPW0oKTtsZXQgeWU7Y29uc3QgdmU9KCk9Pm8sYmU9YXN5bmModD0hMSk9Pnt0cnl7aWYoYXdhaXQoYXN5bmMgZT0+e3RyeXtkKFwiUmVnaXN0ZXJpbmcgdXNhZ2VcIiksYXdhaXQgZmluLlN5c3RlbS5yZWdpc3RlclVzYWdlKHt0eXBlOlwiaW50ZWdyYXRpb24tZmVhdHVyZVwiLGRhdGE6e2FwaVZlcnNpb246byxjb21wb25lbnROYW1lOmV9fSl9Y2F0Y2godCl7aChgVW5hYmxlIHRvIHJlZ2lzdGVyIHVzYWdlIGZvciBmZWF0dXJlICR7ZX06ICR7bnVsbD09dD92b2lkIDA6dC5tZXNzYWdlfWApfX0pKHVlLkV4Y2VsQXBwbGljYXRpb24pLCFhd2FpdChhc3luYyBlPT4oYXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5nZXRBbGxDaGFubmVscygpKS5zb21lKCh0PT50LmNoYW5uZWxOYW1lPT09ZSkpKShDZSkpe2F3YWl0KGFzeW5jKCk9Pnt2YXIgZTtjb25zdCB0PW51bGw9PT0oZT0oYXdhaXQgZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnRTeW5jKCkuZ2V0TWFuaWZlc3QoKSkuYXBwQXNzZXRzKXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5maW5kKChlPT5lLmFsaWFzPT09bWUpKTtpZih0KXJldHVybiB2b2lkIGgoXCJEZXRlY3RlZCBhZGFwdGVyIHBhY2thZ2UgaW4gYXBwIG1hbmlmZXN0IGFwcEFzc2V0c1wiLHQpO2lmKGF3YWl0IEVlKCkpcmV0dXJuIHZvaWQgZChcIlVzaW5nIGV4aXN0aW5nIGFkYXB0ZXIgcGFja2FnZVwiKTtjb25zdCByPXthbGlhczptZSxzcmM6YGh0dHBzOi8vY2RuLm9wZW5maW4uY28vcmVsZWFzZS9pbnRlZ3JhdGlvbnMvZXhjZWwvJHt2ZSgpfS9PcGVuRmluLkV4Y2VsLnppcGAsdGFyZ2V0OlwiT3BlbkZpbi5FeGNlbC5leGVcIix2ZXJzaW9uOnZlKCl9O2QoXCJEb3dubG9hZGluZyBhZGFwdGVyIHBhY2thZ2VcIixyKTt0cnl7YXdhaXQgZmluLlN5c3RlbS5kb3dubG9hZEFzc2V0KHIsKCgpPT57fSkpfWNhdGNoKGUpe3Rocm93IGMoXCJVbmFibGUgdG8gZG93bmxvYWQgYWRhcHRlciBwYWNrYWdlXCIpLGV9fSkoKTtjb25zdHtzZWN1cml0eVJlYWxtOmUscG9ydDpyfT1hd2FpdCBmaW4uU3lzdGVtLmdldFJ1bnRpbWVJbmZvKCk7bGV0e2xpY2Vuc2VLZXk6YX09YXdhaXQgZmluLkFwcGxpY2F0aW9uLmdldEN1cnJlbnRTeW5jKCkuZ2V0TWFuaWZlc3QoKTthPW51bGwhPWE/YTpcIk5PX0xJQ0VOU0VfS0VZXCI7Y29uc3Qgbz1maW4ubWUudXVpZDtkKFwiSW5pdGlhbGl6aW5nIGFkYXB0ZXJcIix7YWRhcHRlckxvZ2dpbmdFbmFibGVkOnQsY2hhbm5lbE5hbWU6Q2UsbGljZW5zZUtleTphLHBvcnQ6cixzZWN1cml0eVJlYWxtOmUsdXVpZDpvfSksZmluLlN5c3RlbS5sYXVuY2hFeHRlcm5hbFByb2Nlc3Moe2FsaWFzOm1lLGFyZ3VtZW50czpgJHtvfSAke2F9ICR7cn0gJHtlfSAke0NlfSAke3R9YH0pfWNvbnN0IHI9ZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KENlLHtwYXlsb2FkOnt2ZXJzaW9uOnZlKCl9fSksYT1uZXcgUHJvbWlzZSgoZT0+e3NldFRpbWVvdXQoZSwyZTQpfSkpLnRoZW4oKCgpPT57dGhyb3cgbmV3IEVycm9yKFwiQ29ubmVjdGlvbiB0byBhZGFwdGVyIHRpbWVkIG91dFwiKX0pKTt5ZT1hd2FpdCBQcm9taXNlLnJhY2UoW3IsYV0pLGQoYENvbm5lY3RlZCB0byBhZGFwdGVyICR7eWUucHJvdmlkZXJJZGVudGl0eS51dWlkfSBvbiBjaGFubmVsICR7Q2V9YCkseWUucmVnaXN0ZXIoZS5Mb2dNZXNzYWdlLEFlKSx5ZS5yZWdpc3RlcihlLkV2ZW50RmlyZWQsayl9Y2F0Y2goZSl7Y29uc3QgdD1uZXcgSW5pdGlhbGl6YXRpb25FcnJvcih2b2lkIDAsZSk7dGhyb3cgYyh0KSx0fXJldHVybnthZGFwdGVyOntjaGFubmVsTmFtZTpDZSx2ZXJzaW9uOnZlKCl9LGNyZWF0ZVdvcmtib29rOihyPXllLGFzeW5jKCk9PntsZXQgdDtkKFwiQXBwbGljYXRpb246IENyZWF0ZSB3b3JrYm9va1wiKTt0cnl7dD1hd2FpdCByLmRpc3BhdGNoKGUuQ3JlYXRlV29ya2Jvb2spfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIFoocix0KX0pLGdldFdvcmtib29rQnlJZDpkZSh5ZSksZ2V0V29ya2Jvb2tzOmhlKHllKSxnZXRXb3Jrc2hlZXRCeUlkOndlKHllKSxvcGVuV29ya2Jvb2s6cGUoeWUpLHF1aXQ6a2UoeWUpfTt2YXIgcn0sQWU9KGUsdCk9Pntjb25zdHttZXNzYWdlOnIsdHlwZTphfT1lLG89XCJbYWRhcHRlcl1cIjtzd2l0Y2goYSl7Y2FzZSBnZS5FcnJvcjpjKHIsbyk7YnJlYWs7Y2FzZSBnZS5JbmZvOmQobyxyKTticmVhaztjYXNlIGdlLldhcm46aChvLHIpO2JyZWFrO2RlZmF1bHQ6YyhuZXcgRXJyb3IoYFVua25vd24gbG9nIHR5cGU6ICR7YX1gKSl9fSxFZT1hc3luYygpPT57dHJ5e2NvbnN0IGU9YXdhaXQgZmluLlN5c3RlbS5nZXRBcHBBc3NldEluZm8oe2FsaWFzOm1lfSk7cmV0dXJuIGUmJmUudmVyc2lvbj09PXZlKCl9Y2F0Y2goZSl7cmV0dXJuITF9fTt2YXIgV2UsZmUsJGUsR2UsSWU7IWZ1bmN0aW9uKGUpe2UuQ29udGludW91cz1cIkNvbnRpbnVvdXNcIixlLkRhc2g9XCJEYXNoXCIsZS5EYXNoRG90PVwiRGFzaERvdFwiLGUuRGFzaERvdERvdD1cIkRhc2hEb3REb3RcIixlLkRvdD1cIkRvdFwiLGUuRG91YmxlPVwiRG91YmxlXCIsZS5TbGFudERhc2hEb3Q9XCJTbGFudERhc2hEb3RcIixlLk5vbmU9XCJOb25lXCJ9KFdlfHwoV2U9e30pKSxmdW5jdGlvbihlKXtlLkNlbnRlcj1cIkNlbnRlclwiLGUuQ2VudGVyQWNyb3NzU2VsZWN0aW9uPVwiQ2VudGVyQWNyb3NzU2VsZWN0aW9uXCIsZS5EaXN0cmlidXRlZD1cIkRpc3RyaWJ1dGVkXCIsZS5GaWxsPVwiRmlsbFwiLGUuR2VuZXJhbD1cIkdlbmVyYWxcIixlLkp1c3RpZnk9XCJKdXN0aWZ5XCIsZS5MZWZ0PVwiTGVmdFwiLGUuUmlnaHQ9XCJSaWdodFwifShmZXx8KGZlPXt9KSksZnVuY3Rpb24oZSl7ZS5BdXRvbWF0aWM9XCJBdXRvbWF0aWNcIixlLkNoZWNrZXI9XCJDaGVja2VyXCIsZS5Dcmlzc0Nyb3NzPVwiQ3Jpc3NDcm9zc1wiLGUuRG93bj1cIkRvd25cIixlLkdyYXkxNj1cIkdyYXkxNlwiLGUuR3JheTI1PVwiR3JheTI1XCIsZS5HcmF5NTA9XCJHcmF5NTBcIixlLkdyYXk3NT1cIkdyYXk3NVwiLGUuR3JheTg9XCJHcmF5OFwiLGUuR3JpZD1cIkdyaWRcIixlLkhvcml6b250YWw9XCJIb3Jpem9udGFsXCIsZS5MaWdodERvd249XCJMaWdodERvd25cIixlLkxpZ2h0SG9yaXpvbnRhbD1cIkxpZ2h0SG9yaXpvbnRhbFwiLGUuTGlnaHRVcD1cIkxpZ2h0VXBcIixlLkxpZ2h0VmVydGljYWw9XCJMaWdodFZlcnRpY2FsXCIsZS5MaW5lYXJHcmFkaWVudD1cIkxpbmVhckdyYWRpZW50XCIsZS5Ob25lPVwiTm9uZVwiLGUuUmVjdGFuZ3VsYXJHcmFkaWVudD1cIlJlY3Rhbmd1bGFyR3JhZGllbnRcIixlLlNlbWlHcmF5NzU9XCJTZW1pR3JheTc1XCIsZS5Tb2xpZD1cIlNvbGlkXCIsZS5VcD1cIlVwXCIsZS5WZXJ0aWNhbD1cIlZlcnRpY2FsXCJ9KCRlfHwoJGU9e30pKSxmdW5jdGlvbihlKXtlLkJvdHRvbT1cIkJvdHRvbVwiLGUuQ2VudGVyPVwiQ2VudGVyXCIsZS5EaXN0cmlidXRlZD1cIkRpc3RyaWJ1dGVkXCIsZS5KdXN0aWZ5PVwiSnVzdGlmeVwiLGUuVG9wPVwiVG9wXCJ9KEdlfHwoR2U9e30pKSxmdW5jdGlvbihlKXtlLkFuZD1cIkFuZFwiLGUuT3I9XCJPclwiLGUuVG9wMTBJdGVtcz1cIlRvcDEwSXRlbXNcIixlLkJvdHRvbTEwSXRlbXM9XCJCb3R0b20xMEl0ZW1zXCIsZS5Ub3AxMFBlcmNlbnQ9XCJUb3AxMFBlcmNlbnRcIixlLkJvdHRvbTEwUGVyY2VudD1cIkJvdHRvbTEwUGVyY2VudFwiLGUuRmlsdGVyVmFsdWVzPVwiRmlsdGVyVmFsdWVzXCJ9KEllfHwoSWU9e30pKTt2YXIgTmU9YS5kcSxTZT1hLk1TLERlPWEueFEsVWU9YS5zTyxGZT1hLlp1LFBlPWEuSTMseGU9YS4kVSxMZT1hLmkwLEJlPWEuY1gsamU9YS5nSCxSZT1hLl9XLE9lPWEuVSQsVmU9YS5VNyx6ZT1hLnJkO2V4cG9ydHtOZSBhcyBBZGFwdGVyRXJyb3IsU2UgYXMgQXBpRXJyb3IsRGUgYXMgRXZlbnRFcnJvcixVZSBhcyBFeGNlbENlbGxCb3JkZXJMaW5lU3R5bGUsRmUgYXMgRXhjZWxDZWxsSG9yaXpvbnRhbEFsaWdubWVudCxQZSBhcyBFeGNlbENlbGxQYXR0ZXJuLHhlIGFzIEV4Y2VsQ2VsbFZlcnRpY2FsQWxpZ25tZW50LExlIGFzIEV4Y2VsRmlsdGVyT3BlcmF0b3IsQmUgYXMgSW5pdGlhbGl6YXRpb25FcnJvcixqZSBhcyBJbnZhbGlkQ2VsbFJhbmdlQWRkcmVzc0Vycm9yLFJlIGFzIFBhcmFtZXRlckVycm9yLE9lIGFzIGRpc2FibGVMb2dnaW5nLFZlIGFzIGVuYWJsZUxvZ2dpbmcsemUgYXMgZ2V0RXhjZWxBcHBsaWNhdGlvbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRDdXJyZW50Q2hhbm5lbCB9IGZyb20gXCJAZmlub3MvZmRjM1wiO1xuaW1wb3J0IHtcblx0dHlwZSBDZWxsLFxuXHR0eXBlIEV4Y2VsQXBwbGljYXRpb24sXG5cdHR5cGUgRXhjZWxXb3JrYm9vayxcblx0dHlwZSBFeGNlbFdvcmtzaGVldCxcblx0Z2V0RXhjZWxBcHBsaWNhdGlvblxufSBmcm9tIFwiQG9wZW5maW4vZXhjZWxcIjtcblxuY29uc3QgS05PV05fSU5TVFJVTUVOVFMgPSBbXCJUU0xBXCIsIFwiTVNGVFwiLCBcIkFBUExcIl07XG5cbmxldCBleGNlbDogRXhjZWxBcHBsaWNhdGlvbiB8IHVuZGVmaW5lZDtcbmxldCBvcGVuV29ya2Jvb2tzOlxuXHR8IHtcblx0XHRcdGJvb2s6IEV4Y2VsV29ya2Jvb2s7XG5cdFx0XHRuYW1lOiBzdHJpbmc7XG5cdCAgfVtdXG5cdHwgdW5kZWZpbmVkO1xubGV0IHNlbGVjdGVkV29ya2Jvb2tJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xubGV0IG9wZW5Xb3Jrc2hlZXRzOlxuXHR8IHtcblx0XHRcdHNoZWV0OiBFeGNlbFdvcmtzaGVldDtcblx0XHRcdG5hbWU6IHN0cmluZztcblx0ICB9W11cblx0fCB1bmRlZmluZWQ7XG5sZXQgc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdERvbSgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBET00gY29tcG9uZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjcmVzdWx0cy1jb250YWluZXJcIik7XG5cdFx0aWYgKHJlc3VsdHNDb250YWluZXIpIHtcblx0XHRcdHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH1cblxuXHRcdGV4Y2VsID0gYXdhaXQgZ2V0RXhjZWxBcHBsaWNhdGlvbigpO1xuXG5cdFx0YXdhaXQgcG9wdWxhdGVXb3JrYm9va3MoKTtcblxuXHRcdGNvbnN0IG9wZW5FeGNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1leGNlbFwiKTtcblx0XHRpZiAob3BlbkV4Y2VsQnV0dG9uKSB7XG5cdFx0XHRvcGVuRXhjZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0YXdhaXQgb3BlbkV4Y2VsKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCByZWZyZXNoV29ya2Jvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtib29rLXJlZnJlc2hcIik7XG5cdFx0aWYgKHJlZnJlc2hXb3JrYm9va0J1dHRvbikge1xuXHRcdFx0cmVmcmVzaFdvcmtib29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBwb3B1bGF0ZVdvcmtib29rcygpKTtcblx0XHR9XG5cblx0XHRjb25zdCByZWZyZXNoV29ya3NoZWV0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3Jrc2hlZXQtcmVmcmVzaFwiKTtcblx0XHRpZiAocmVmcmVzaFdvcmtzaGVldEJ1dHRvbikge1xuXHRcdFx0cmVmcmVzaFdvcmtzaGVldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gcG9wdWxhdGVXb3Jrc2hlZXRzKCkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZW5Xb3JrYm9va3NTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtib29rc1wiKTtcblx0XHRpZiAob3Blbldvcmtib29rc1NlbGVjdCkge1xuXHRcdFx0b3Blbldvcmtib29rc1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jIChlKSA9PlxuXHRcdFx0XHRzZWxlY3RXb3JrYm9vaygoZS50YXJnZXQgYXMgdW5rbm93biBhcyB7IHZhbHVlOiBzdHJpbmcgfSkudmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZW5Xb3Jrc2hlZXRzU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3Jrc2hlZXRzXCIpO1xuXHRcdGlmIChvcGVuV29ya3NoZWV0c1NlbGVjdCkge1xuXHRcdFx0b3BlbldvcmtzaGVldHNTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBhc3luYyAoZSkgPT5cblx0XHRcdFx0c2VsZWN0V29ya3NoZWV0KChlLnRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6IHN0cmluZyB9KS52YWx1ZSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2V0VmFsdWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldC12YWx1ZVwiKTtcblx0XHRpZiAoc2V0VmFsdWVCdXR0b24pIHtcblx0XHRcdHNldFZhbHVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGF3YWl0IHNldENlbGxWYWx1ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRzaG93RXJyb3IoZXJyKTtcblx0fVxufVxuXG4vKipcbiAqIFNob3cgYW4gZXJyb3Igb24gdGhlIFVJLlxuICogQHBhcmFtIGVyciBUaGUgZXJyb3IgdG8gZGlzcGxheS5cbiAqL1xuZnVuY3Rpb24gc2hvd0Vycm9yKGVycjogdW5rbm93bik6IHZvaWQge1xuXHRjb25zdCBlcnJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yXCIpO1xuXHRpZiAoZXJyRG9tKSB7XG5cdFx0ZXJyRG9tLmlubmVySFRNTCA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBKU09OLnN0cmluZ2lmeShlcnIpO1xuXHR9XG59XG5cbi8qKlxuICogT3BlbiB0aGUgZXhjZWwgaW5zdGFuY2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG9wZW5FeGNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRpZiAoXG5cdFx0XHRvcGVuV29ya2Jvb2tzICYmXG5cdFx0XHRzZWxlY3RlZFdvcmtib29rSW5kZXggIT09IHVuZGVmaW5lZCAmJlxuXHRcdFx0b3BlbldvcmtzaGVldHMgJiZcblx0XHRcdHNlbGVjdGVkV29ya3NoZWV0SW5kZXggIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0Ly8gT3BlbiB0aGUgc2VsZWN0IHdvcmsgYm9vayBhbmQgc2hlZXRcblx0XHRcdC8vIGlmIGFueXRoaW5nIHRocm93cyBhbiBleGNlcHRpb24ganVzdCBvcGVuIGEgbmV3IHdvcmtib29rXG5cdFx0XHRhd2FpdCBzZWxlY3RXb3JrYm9vayhvcGVuV29ya2Jvb2tzW3NlbGVjdGVkV29ya2Jvb2tJbmRleF0ubmFtZSk7XG5cdFx0XHRhd2FpdCBzZWxlY3RXb3Jrc2hlZXQob3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0ubmFtZSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRpZiAoZXhjZWwpIHtcblx0XHRcdGF3YWl0IGV4Y2VsLmNyZWF0ZVdvcmtib29rKCk7XG5cdFx0XHRhd2FpdCBwb3B1bGF0ZVdvcmtib29rcygpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFBvcHVsYXRlIHRoZSBsaXN0IG9mIHdvcmtib29rcy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXb3JrYm9va3MoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChleGNlbCkge1xuXHRcdHNlbGVjdGVkV29ya2Jvb2tJbmRleCA9IHVuZGVmaW5lZDtcblx0XHRjb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjd29ya2Jvb2stcmVmcmVzaFwiKTtcblx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiN3b3JrYm9va3NcIik7XG5cblx0XHRpZiAocmVmcmVzaEJ1dHRvbiAmJiBzZWxlY3QpIHtcblx0XHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0c2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG5cblx0XHRcdG9wZW5Xb3JrYm9va3MgPSBbXTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3Qgd29ya2Jvb2tzID0gYXdhaXQgZXhjZWwuZ2V0V29ya2Jvb2tzKCk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBib29rIG9mIHdvcmtib29rcykge1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBhd2FpdCBib29rLmdldE5hbWUoKTtcblx0XHRcdFx0XHRvcGVuV29ya2Jvb2tzLnB1c2goe1xuXHRcdFx0XHRcdFx0Ym9vayxcblx0XHRcdFx0XHRcdG5hbWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IG9wdGlvbkVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0b3B0aW9uRW1wdHkuaW5uZXJIVE1MID0gXCItLS0tU2VsZWN0IHdvcmtib29rLS0tLVwiO1xuXHRcdFx0XHRvcHRpb25FbXB0eS52YWx1ZSA9IFwiXCI7XG5cdFx0XHRcdG9wdGlvbkVtcHR5LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0b3B0aW9uRW1wdHkuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbkVtcHR5KTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IG9wZW5Xb3JrYm9vayBvZiBvcGVuV29ya2Jvb2tzKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gb3Blbldvcmtib29rLm5hbWU7XG5cdFx0XHRcdFx0b3B0aW9uLnZhbHVlID0gb3Blbldvcmtib29rLm5hbWU7XG5cdFx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHRzaG93RXJyb3IoZXJyKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRyZWZyZXNoQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogU2VsZWN0IGEgd29ya2Jvb2suXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgd29ya2Jvb2sgdG8gc2VsZWN0LlxuICovXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RXb3JrYm9vayhuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG9wZW5Xb3JrYm9va3MpIHtcblx0XHRjb25zdCBuZXdXb3JrYm9va0luZGV4ID0gb3Blbldvcmtib29rcy5maW5kSW5kZXgoKHcpID0+IHcubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAobmV3V29ya2Jvb2tJbmRleCAhPT0gc2VsZWN0ZWRXb3JrYm9va0luZGV4KSB7XG5cdFx0XHRzZWxlY3RlZFdvcmtib29rSW5kZXggPSBuZXdXb3JrYm9va0luZGV4O1xuXHRcdFx0aWYgKG5ld1dvcmtib29rSW5kZXggPj0gMCkge1xuXHRcdFx0XHRhd2FpdCBvcGVuV29ya2Jvb2tzW3NlbGVjdGVkV29ya2Jvb2tJbmRleF0uYm9vay5hY3RpdmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGF3YWl0IHBvcHVsYXRlV29ya3NoZWV0cygpO1xuXHR9XG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIHdvcmtzaGVldHMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlV29ya3NoZWV0cygpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKGV4Y2VsKSB7XG5cdFx0c2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCA9IHVuZGVmaW5lZDtcblx0XHRjb25zdCByZWZyZXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjd29ya3NoZWV0LXJlZnJlc2hcIik7XG5cdFx0Y29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIjd29ya3NoZWV0c1wiKTtcblxuXHRcdGlmIChzZWxlY3QgJiYgcmVmcmVzaEJ1dHRvbiAmJiBvcGVuV29ya2Jvb2tzICYmIHNlbGVjdGVkV29ya2Jvb2tJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWZyZXNoQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuXHRcdFx0c2VsZWN0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdHNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdFx0XHRvcGVuV29ya3NoZWV0cyA9IFtdO1xuXG5cdFx0XHRjb25zdCB3b3JrYm9vayA9IG9wZW5Xb3JrYm9va3Nbc2VsZWN0ZWRXb3JrYm9va0luZGV4XTtcblx0XHRcdGlmICh3b3JrYm9vaykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHNoZWV0cyA9IGF3YWl0IHdvcmtib29rLmJvb2suZ2V0V29ya3NoZWV0cygpO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBzaGVldCBvZiBzaGVldHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBhd2FpdCBzaGVldC5nZXROYW1lKCk7XG5cdFx0XHRcdFx0XHRvcGVuV29ya3NoZWV0cy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0c2hlZXQsXG5cdFx0XHRcdFx0XHRcdG5hbWVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbkVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0XHRvcHRpb25FbXB0eS5pbm5lckhUTUwgPSBcIi0tLS1TZWxlY3Qgd29ya3NoZWV0LS0tLVwiO1xuXHRcdFx0XHRcdG9wdGlvbkVtcHR5LnZhbHVlID0gXCJcIjtcblx0XHRcdFx0XHRvcHRpb25FbXB0eS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0b3B0aW9uRW1wdHkuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uRW1wdHkpO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBvcGVuV29ya3NoZWV0IG9mIG9wZW5Xb3Jrc2hlZXRzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRcdFx0b3B0aW9uLmlubmVySFRNTCA9IG9wZW5Xb3Jrc2hlZXQubmFtZTtcblx0XHRcdFx0XHRcdG9wdGlvbi52YWx1ZSA9IG9wZW5Xb3Jrc2hlZXQubmFtZTtcblx0XHRcdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0XHRzaG93RXJyb3IoZXJyKTtcblx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRyZWZyZXNoQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBTZWxlY3QgYSB3b3Jrc2hlZXQuXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB3b3Jrc2hlZXQgdG8gc2VsZWN0LlxuICovXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RXb3Jrc2hlZXQobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChvcGVuV29ya3NoZWV0cyAmJiBzZWxlY3RlZFdvcmtzaGVldEluZGV4ICE9PSB1bmRlZmluZWQpIHtcblx0XHRjb25zdCBuZXdXb3Jrc2hlZXRJbmRleCA9IG9wZW5Xb3Jrc2hlZXRzLmZpbmRJbmRleCgodykgPT4gdy5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChuZXdXb3Jrc2hlZXRJbmRleCAhPT0gc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCkge1xuXHRcdFx0Y29uc3Qgb2xkV29ya3NoZWV0ID0gb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF07XG5cdFx0XHRpZiAob2xkV29ya3NoZWV0KSB7XG5cdFx0XHRcdGF3YWl0IG9sZFdvcmtzaGVldC5zaGVldC5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZUNlbGxDaGFuZ2UpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3RlZFdvcmtzaGVldEluZGV4ID0gbmV3V29ya3NoZWV0SW5kZXg7XG5cdFx0XHRpZiAoc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCA+PSAwKSB7XG5cdFx0XHRcdGF3YWl0IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdLnNoZWV0LmFjdGl2YXRlKCk7XG5cdFx0XHRcdGF3YWl0IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdLnNoZWV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ2VsbENoYW5nZSk7XG5cblx0XHRcdFx0Y29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdHMtY29udGFpbmVyXCIpO1xuXHRcdFx0XHRpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuXHRcdFx0XHRcdHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY2VsbExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjZWxsLWxvY2F0aW9uXCIpO1xuXHRcdFx0XHRpZiAoY2VsbExvY2F0aW9uKSB7XG5cdFx0XHRcdFx0Y2VsbExvY2F0aW9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY2VsbFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjZWxsLXZhbHVlXCIpO1xuXHRcdFx0XHRpZiAoY2VsbFZhbHVlKSB7XG5cdFx0XHRcdFx0Y2VsbFZhbHVlLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qgc2V0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3NldC12YWx1ZVwiKTtcblx0XHRcdFx0aWYgKHNldFZhbHVlKSB7XG5cdFx0XHRcdFx0c2V0VmFsdWUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEhhbmRsZSBhIGNoYW5nZSBmcm9tIHRoZSBleGNlbCB3b3Jrc2hlZXQuXG4gKiBAcGFyYW0gY2VsbHMgVGhlIGNlbGxzIHRoYXQgd2VyZSBjaGFuZ2VkLlxuICovXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVDZWxsQ2hhbmdlKGNlbGxzOiBDZWxsW10pOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY2VsbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2VsbC1jaGFuZ2VzLWNvbnRhaW5lclwiKTtcblx0aWYgKGNlbGxDb250YWluZXIpIHtcblx0XHRjZWxsQ29udGFpbmVyLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGNlbGxzLCB1bmRlZmluZWQsIFwiICBcIik7XG5cblx0XHRmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcblx0XHRcdGlmIChLTk9XTl9JTlNUUlVNRU5UUy5pbmNsdWRlcyhjZWxsLnZhbHVlKSkge1xuXHRcdFx0XHRhd2FpdCBicm9hZGNhc3RJbnN0cnVtZW50KGNlbGwudmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFNldCBhIGNlbGwgdmFsdWUgaW4gZXhjZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldENlbGxWYWx1ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG9wZW5Xb3Jrc2hlZXRzICYmIHNlbGVjdGVkV29ya3NoZWV0SW5kZXggIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IGNlbGxMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjY2VsbC1sb2NhdGlvblwiKTtcblx0XHRjb25zdCBjZWxsVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2NlbGwtdmFsdWVcIik7XG5cblx0XHRpZiAoY2VsbExvY2F0aW9uICYmIGNlbGxWYWx1ZSkge1xuXHRcdFx0Y29uc3QgY2VsbHMgPSBbW2NlbGxWYWx1ZS52YWx1ZV1dO1xuXHRcdFx0YXdhaXQgb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0uc2hlZXQuc2V0Q2VsbFZhbHVlcyhjZWxsTG9jYXRpb24udmFsdWUsIGNlbGxzKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBCcm9hZGNhc3QgYW5kIEZEQzMgaW5zdHJ1bWVudC5cbiAqIEBwYXJhbSBpbnN0cnVtZW50IFRoZSBpbnN0cnVtZW50IHRvIGJyb2FkY2FzdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYnJvYWRjYXN0SW5zdHJ1bWVudChpbnN0cnVtZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnJvYWRjYXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjYnJvYWRjYXN0LWluc3RydW1lbnRcIik7XG5cdGlmIChicm9hZGNhc3RFbGVtZW50KSB7XG5cdFx0aWYgKHdpbmRvdy5mZGMzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBmZGNJbnN0cnVtZW50ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZmRjMy5pbnN0cnVtZW50XCIsXG5cdFx0XHRcdFx0aWQ6IHtcblx0XHRcdFx0XHRcdHRpY2tlcjogaW5zdHJ1bWVudFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb25zdCBjaGFubmVsID0gYXdhaXQgZ2V0Q3VycmVudENoYW5uZWwoKTtcblx0XHRcdFx0aWYgKGNoYW5uZWwpIHtcblx0XHRcdFx0XHRhd2FpdCBjaGFubmVsLmJyb2FkY2FzdChmZGNJbnN0cnVtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBpbnN0cnVtZW50O1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXJyKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YnJvYWRjYXN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiTm8gRkQzIENoYW5uZWwgYXZhaWxhYmxlXCI7XG5cdFx0fVxuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=