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

/***/ "../../node_modules/@openfin/excel/openfin.excel.js":
/*!**********************************************************!*\
  !*** ../../node_modules/@openfin/excel/openfin.excel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdapterError: () => (/* binding */ ge),
/* harmony export */   ApiError: () => (/* binding */ me),
/* harmony export */   EventError: () => (/* binding */ ye),
/* harmony export */   ExcelCellBorderLineStyle: () => (/* binding */ Ce),
/* harmony export */   ExcelCellHorizontalAlignment: () => (/* binding */ ve),
/* harmony export */   ExcelCellPattern: () => (/* binding */ Ee),
/* harmony export */   ExcelCellVerticalAlignment: () => (/* binding */ We),
/* harmony export */   ExcelFilterOperator: () => (/* binding */ Ae),
/* harmony export */   InitializationError: () => (/* binding */ be),
/* harmony export */   ParameterError: () => (/* binding */ fe),
/* harmony export */   disableLogging: () => (/* binding */ $e),
/* harmony export */   enableLogging: () => (/* binding */ xe),
/* harmony export */   getExcelApplication: () => (/* binding */ Ge)
/* harmony export */ });
var e,t,r,a={d:(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},o={};a.d(o,{dq:()=>AdapterError,MS:()=>ApiError,xQ:()=>EventError,sO:()=>he,Zu:()=>pe,I3:()=>we,$U:()=>ke,i0:()=>ue,cX:()=>InitializationError,_W:()=>ParameterError,U$:()=>l,U7:()=>c,rd:()=>le});class ApiError extends Error{constructor(e="An unexpected error has occurred",t){var r;super(e),t&&(this.innerError=t&&t),this.stack=null===(r=this.stack)||void 0===r?void 0:r.replace(/^(\w*Error)/,`${this.constructor.name}`)}}class AdapterError extends ApiError{constructor(e="Failed to execute adapter function",t){super(e,t)}}class EventError extends ApiError{constructor(e="Failed to raise event",t){super(e,t)}}class InitializationError extends ApiError{constructor(e="Failed to initialize adapter",t){super(e,t)}}class ParameterError extends ApiError{constructor(e="Invalid parameter value",t){super(e,t)}}!function(e){e.ActivateWorkbook="ActivateWorkbook",e.ActivateWorksheet="ActivateWorksheet",e.AddWorksheet="AddWorksheet",e.CalculateWorkbook="CalculateWorkbook",e.CalculateWorksheet="CalculateWorksheet",e.ClearAllCells="ClearAllCells",e.ClearAllCellValues="ClearAllCellValues",e.ClearAllCellFormatting="ClearAllCellFormatting",e.ClearCellValues="ClearCellValues",e.ClearCellFormatting="ClearCellFormatting",e.ClearCells="ClearCells",e.CloseWorkbook="CloseWorkbook",e.CreateWorkbook="CreateWorkbook",e.DeleteWorksheet="DeleteWorksheet",e.DeregisterEvent="DeregisterEvent",e.EventFired="EventFired",e.GetCalculationMode="GetCalculationMode",e.GetCells="GetCells",e.GetWorkbookById="GetWorkbookById",e.GetWorkbookName="GetWorkbookName",e.GetWorkbooks="GetWorkbooks",e.GetWorksheetById="GetWorksheetById",e.GetWorksheetByName="GetWorksheetByName",e.GetWorksheetName="GetWorksheetName",e.GetWorksheets="GetWorksheets",e.LogMessage="LogMessage",e.OpenWorkbook="OpenWorkbook",e.ProtectWorksheet="ProtectWorksheet",e.RegisterEvent="RegisterEvent",e.SaveWorkbook="SaveWorkbook",e.SaveWorkbookAs="SaveWorkbookAs",e.SetCellValues="SetCellValues",e.SetCellFormatting="SetCellFormatting",e.SetCellName="SetCellName",e.SetWorksheetName="SetWorksheetName",e.FilterCells="FilterCells",e.QuitApplication="QuitApplication"}(e||(e={})),function(e){e.Activate="Activate",e.AddWorksheet="AddWorksheet",e.Change="Change",e.Close="Close",e.Deactivate="Deactivate",e.DeleteWorksheet="DeleteWorksheet"}(t||(t={})),function(e){e.Workbook="Workbook",e.Worksheet="Worksheet"}(r||(r={}));const n="1.4.1";let s=!1;const i="[@openfin/excel]",l=()=>{s=!1},c=()=>{s=!0,h(`v${n}`)},d=(e,t)=>{s&&(e.innerError?console.error(t?`${i} ${t}`:i,e,"\n\n(inner)",e.innerError):console.error(t?`${i} ${t}`:i,e))},h=(...e)=>{s&&console.log(i,...e)},p=(...e)=>{s&&console.warn(i,...e)};"undefined"==typeof fin&&Object.assign(window,{fin:{}}),Object.assign(fin,{Integrations:{Excel:{enableLogging:c,disableLogging:l}}});const w=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),k=new Map,u=(t,r)=>async()=>{h(`Worksheet: Activate (${r})`);try{await t.dispatch(e.ActivateWorksheet,r)}catch(e){throw new AdapterError}},g=(t,r)=>async()=>{h(`Worksheet: Calculate (${r})`);try{await t.dispatch(e.CalculateWorksheet,r)}catch(e){throw new AdapterError}},m=(t,r)=>async()=>{h(`Worksheet: Clear all cell values (${r})`);try{await t.dispatch(e.ClearAllCellValues,r)}catch(e){throw new AdapterError}},y=(t,r)=>async()=>{h(`Worksheet: Clear all cell formatting (${r})`);try{await t.dispatch(e.ClearAllCellFormatting,r)}catch(e){throw new AdapterError}},C=(t,r)=>async()=>{h(`Worksheet: Clear all cells (${r})`);try{await t.dispatch(e.ClearAllCells,r)}catch(e){throw new AdapterError}},v=(t,r)=>async a=>{h(`Worksheet: Clear cell values; cellRange:${a} (${r})`);const o={cellRange:a,objectId:r};try{await t.dispatch(e.ClearCellValues,o)}catch(e){throw new AdapterError}},E=(t,r)=>async a=>{h(`Worksheet: Clear cell formatting; cellRange:${a} (${r})`);const o={cellRange:a,objectId:r};try{await t.dispatch(e.ClearCellFormatting,o)}catch(e){throw new AdapterError}},W=(t,r)=>async a=>{h(`Worksheet: Clear cells; cellRange:${a} (${r})`);const o={cellRange:a,objectId:r};try{await t.dispatch(e.ClearCells,o)}catch(e){throw new AdapterError}},A=(e,t)=>(r,a,o=1e3)=>{if(Number.isNaN(o)||o<=0)throw new ApiError("Update interval must be a positive number");const n=w();h(`Worksheet: Create data stream; streamId:${n}; cellRange:${r}; updateInterval:${o} (${t})`);const s={close:()=>{h(`Closed stream (${n})`),(e=>{var t;try{const r=k.get(e);if(!r)throw new ApiError(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(t=r.timer)&&void 0!==t?t:void 0)&&F(e),k.delete(e)}catch(e){throw d(e),e}})(n)},cellRange:r,id:n,start:()=>{h(`Started streaming (${n})`),U(n,a,e,t)},stop:()=>{h(`Stopped streaming (${n})`),F(n)},updateInterval:o,worksheetId:t};return k.set(n,{dataStream:s}),s},b=(e,t,a,o)=>{const n={eventTarget:r.Worksheet,objectId:t};return{objectId:t,activate:u(e,t),addEventListener:a(e,n),calculate:g(e,t),clearAllCellFormatting:y(e,t),clearAllCells:C(e,t),clearAllCellValues:m(e,t),clearCellFormatting:E(e,t),clearCells:W(e,t),clearCellValues:v(e,t),createDataStream:A(e,t),delete:f(e,t),filterCells:$(e,t),getCells:x(e,t),getName:G(e,t),protect:I(e,t),removeEventListener:o(e),setCellFormatting:D(e,t),setCellName:S(e,t),setCellValues:N(e,t),setName:R(e,t)}},f=(t,r)=>async()=>{h(`Worksheet: Delete (${r})`);try{await t.dispatch(e.DeleteWorksheet,r)}catch(e){throw new AdapterError}},$=(t,r)=>async(a,o,n,s,i,l=!0)=>{h(`Worksheet: Filter cells; cellRange:${a} (${r})`,{columnIndex:o,filterOperator:n,criteria1:s,criteria2:i,visibleDropDown:l});const c={cellRange:a,criteria1:s,criteria2:i,columnIndex:o,filterOperator:n,objectId:r,visibleDropDown:l};try{await t.dispatch(e.FilterCells,c)}catch(e){throw new AdapterError}},x=(t,r)=>async a=>{h(`Worksheet: Get cells; cellRange:${a} (${r})`);const o={cellRange:a,objectId:r};let n=[];try{n=await t.dispatch(e.GetCells,o),h(`${a}:`,n)}catch(e){throw new AdapterError}return n},G=(t,r)=>async()=>{h(`Worksheet: Get name (${r})`);try{return await t.dispatch(e.GetWorksheetName,r)}catch(e){throw new AdapterError}},I=(t,r)=>async()=>{h(`Worksheet: Protect (${r})`);try{await t.dispatch(e.ProtectWorksheet,r)}catch(e){throw new AdapterError}},D=(t,r)=>async(a,o)=>{h(`Worksheet: Set cell formatting; cellRange:${a} (${r})`,o);const n={cellRange:a,formatting:o,objectId:r};try{await t.dispatch(e.SetCellFormatting,n)}catch(e){throw new AdapterError}},S=(t,r)=>async(a,o)=>{const n=o.trim();let s;if(!n)throw s=new ParameterError("Cell range name cannot be an empty string"),d(s),s;if(n.length>255)throw s=new ParameterError("Cell range name must be 255 characters or less"),d(s),s;if(/[^a-zA-Z0-9_.?\\"']/.test(n))throw s=new ParameterError("Cell range name contains invalid characters"),d(s),s;if(/^\d|\d$/.test(n))throw s=new ParameterError("Cell range name must not start or end with a number"),d(s),s;h(`Worksheet: Set cell name; cellRange:${a}; newCellRangeName:${n} (${r})`);const i={cellRange:a,name:n,objectId:r};try{await t.dispatch(e.SetCellName,i)}catch(e){throw new AdapterError}},N=(t,r)=>async(a,o)=>{h(`Worksheet: Set cell values; cellRange:${a} (${r})`,o);const n={cellRange:a,objectId:r,valuesMap:o};try{await t.dispatch(e.SetCellValues,n)}catch(e){throw new AdapterError}},R=(t,r)=>async a=>{const o=a.trim();let n;if(!o)throw n=new ParameterError("Worksheet name cannot be an empty string"),d(n),n;if(o.length>31)throw n=new ParameterError("Worksheet name must be 31 characters or less"),d(n),n;h(`Worksheet: Set name; newWorksheetName:${o} (${r})`);const s={newWorksheetName:o,objectId:r};try{return await t.dispatch(e.SetWorksheetName,s)}catch(e){throw new AdapterError}},U=(e,t,r,a)=>{var o;try{const n=k.get(e);if(!n)throw new ApiError(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(o=n.timer)&&void 0!==o?o:void 0)&&F(e);const{cellRange:s,updateInterval:i}=n.dataStream,l=async()=>{const o=await t();try{await N(r,a)(s,[[o]])}catch(t){p(`Unable to update cell range for stream with id ${e}: ${null==t?void 0:t.message}`)}},c=window.setInterval(l,i);n.timer=c}catch(e){throw d(e),e}},F=e=>{var t;try{const r=k.get(e);if(!r)throw new ApiError(`Unable to find registered data stream with id ${e}`);if(void 0===(null!==(t=r.timer)&&void 0!==t?t:void 0))return;window.clearInterval(r.timer),r.timer=void 0}catch(e){throw d(e),e}},L=new Map,P=(r,a)=>async(o,n)=>{if(!a||!a.eventTarget||!a.objectId){const e=new EventError("Event registration missing required values");throw d(e),e}const s=Object.keys(t).find((e=>e.toLowerCase()===o.toLowerCase()));if(!s){const e=new EventError(`Unsupported event name: ${o}`);throw d(e),e}a.eventName=t[s],h("Registering event",a);try{const t=await r.dispatch(e.RegisterEvent,a);L.set(t,n)}catch(e){throw new AdapterError(void 0,e)}},j=t=>async r=>{let a;for(const[e,t]of L)if(t===r){a=e;break}if(!a)throw new EventError;h("Deregistering event:",a);try{await t.dispatch(e.DeregisterEvent,a),L.delete(a)}catch(e){throw new AdapterError}},O=(e,a,o)=>{var n,s;switch(o.eventTarget){case r.Workbook:switch(null===(n=o.eventName)||void 0===n?void 0:n.toUpperCase()){case t.Activate.toUpperCase():case t.Close.toUpperCase():case t.Deactivate.toUpperCase():return e();case t.AddWorksheet.toUpperCase():case t.DeleteWorksheet.toUpperCase():return e(b(a,o.worksheetObjectId,P,j));default:throw new EventError(`Unexpected workbook event: ${o.eventName}`)}case r.Worksheet:switch(null===(s=o.eventName)||void 0===s?void 0:s.toUpperCase()){case t.Activate.toUpperCase():return e();case t.Change.toUpperCase():return e(o.changedCells);case t.Deactivate.toUpperCase():return e();default:throw new EventError(`Unexpected worksheet event: ${o.eventName}`)}default:throw new EventError(`Unexpected event target: ${o.eventTarget}`)}},B=(t,r)=>async()=>{h(`Workbook: Activate (${r})`);try{return await t.dispatch(e.ActivateWorkbook,r)}catch(e){throw new AdapterError}},V=(t,r,a,o)=>async()=>{let n;h(`Workbook: Add worksheet (${r})`);try{n=await t.dispatch(e.AddWorksheet,r)}catch(e){throw new AdapterError}return b(t,n,a,o)},M=(t,r)=>async()=>{h(`Workbook: Calculate (${r})`);try{await t.dispatch(e.CalculateWorkbook,r)}catch(e){throw new AdapterError}},z=(t,r)=>async()=>{h(`Workbook: Close (${r})`);try{return await t.dispatch(e.CloseWorkbook,r)}catch(e){throw new AdapterError}},T=(e,t,a,o)=>{const n={eventTarget:r.Workbook,objectId:t};return{objectId:t,activate:B(e,t),addWorksheet:V(e,t,a,o),addEventListener:a(e,n),calculate:M(e,t),close:z(e,t),getCalculationMode:Q(e,t),getName:H(e,t),getWorksheetByName:_(e,t,a,o),getWorksheets:q(e,t,a,o),removeEventListener:o(e),save:J(e,t),saveAs:K(e,t)}},Q=(t,r)=>async()=>{h("Workbook: Get calculation mode");try{return await t.dispatch(e.GetCalculationMode,r)}catch(e){throw new AdapterError}},H=(t,r)=>async()=>{h(`Workbook: Get name (${r})`);try{return await t.dispatch(e.GetWorkbookName,r)}catch(e){throw new AdapterError}},_=(t,r,a,o)=>async n=>{let s;h(`Workbook: Get worksheet by name: ${n} (${r})`);try{if(s=await t.dispatch(e.GetWorksheetByName,{objectId:r,worksheetName:n}),null===s)return null}catch(e){throw new AdapterError}return b(t,s,a,o)},q=(t,r,a,o)=>async()=>{let n;h(`Workbook: Get worksheets (${r})`);try{n=await t.dispatch(e.GetWorksheets,r)}catch(e){throw new AdapterError}return n.map((e=>b(t,e,a,o)))},J=(t,r)=>async()=>{h(`Workbook: Save (${r})`);try{return await t.dispatch(e.SaveWorkbook,r)}catch(e){throw new AdapterError}},K=(t,r)=>async a=>{h(`Workbook: Save as; filePath:${a} (${r})`);try{return await t.dispatch(e.SaveWorkbookAs,{filePath:a,objectId:r})}catch(e){throw new AdapterError}},X=t=>async()=>{let r;h("Application: Create workbook");try{r=await t.dispatch(e.CreateWorkbook)}catch(e){throw new AdapterError}return T(t,r,P,j)},Z=t=>async r=>{let a;h(`Application: Get workbook; id:${r}`);try{a=await t.dispatch(e.GetWorkbookById,r)}catch(e){throw new AdapterError}return T(t,a,P,j)},Y=t=>async()=>{let r;h("Application: Get workbooks");try{r=await t.dispatch(e.GetWorkbooks)}catch(e){throw new AdapterError}return r.map((e=>T(t,e,P,j)))},ee=t=>async r=>{h(`Application: Get worksheet; id:${r}`);try{r=await t.dispatch(e.GetWorksheetById,r)}catch(e){throw new AdapterError}return b(t,r,P,j)},te=t=>async r=>{let a;h(`Application: Open workbook; filePath:${r}`);try{a=await t.dispatch(e.OpenWorkbook,r)}catch(e){throw new AdapterError}return T(t,a,P,j)},re=t=>async(r=!0)=>{h(`Application: Quit; displayAlerts:${r}`);try{return await t.dispatch(e.QuitApplication,r)}catch(e){throw new AdapterError}};var ae,oe;!function(e){e.ExcelApplication="EXCEL-APP"}(ae||(ae={})),function(e){e[e.Info=1]="Info",e[e.Warn=2]="Warn",e[e.Error=3]="Error"}(oe||(oe={}));const ne="excel-adapter",se=w();let ie;const le=async(t=!1)=>{try{await(async e=>{try{h("Registering usage"),await fin.System.registerUsage({type:"integration-feature",data:{apiVersion:n,componentName:e}})}catch(t){p(`Unable to register usage for feature ${e}: ${null==t?void 0:t.message}`)}})(ae.ExcelApplication);{await(async()=>{var e;const t=null===(e=(await fin.Application.getCurrentSync().getManifest()).appAssets)||void 0===e?void 0:e.find((e=>e.alias===ne));if(t)return void p("Detected adapter package in app manifest appAssets",t);if(await de())return void h("Using existing adapter package");const r={alias:ne,src:`https://cdn.openfin.co/release/integrations/excel/${n}/OpenFin.Excel.zip`,target:"OpenFin.Excel.exe",version:n};h("Downloading adapter package",r);try{await fin.System.downloadAsset(r,(()=>{}))}catch(e){throw d("Unable to download adapter package"),e}})();const{securityRealm:e,port:r}=await fin.System.getRuntimeInfo();let{licenseKey:a}=await fin.Application.getCurrentSync().getManifest();a=null!=a?a:"NO_LICENSE_KEY";const o=fin.me.uuid;h("Initializing adapter",{adapterLoggingEnabled:t,channelName:se,licenseKey:a,port:r,securityRealm:e,uuid:o}),fin.System.launchExternalProcess({alias:ne,arguments:`${o} ${a} ${r} ${e} ${se} ${t}`})}const a=fin.InterApplicationBus.Channel.connect(se,{payload:{version:n}}),o=new Promise((e=>{setTimeout(e,2e4)})).then((()=>{throw new Error("Connection to adapter timed out")}));ie=await Promise.race([a,o]),h(`Connected to adapter ${ie.providerIdentity.uuid} on channel ${se}`),ie.register(e.LogMessage,ce),ie.register(e.EventFired,(r=ie,e=>{const{eventRegistrationId:t}=e,a=L.get(t);if(!a)throw new EventError(`No registered event listener found for id: ${t}`);h("Event payload received",e),O(a,r,e)}))}catch(e){const t=new InitializationError(void 0,e);throw d(t),t}var r;return{adapter:{channelName:se,version:n},createWorkbook:X(ie),getWorkbookById:Z(ie),getWorkbooks:Y(ie),getWorksheetById:ee(ie),openWorkbook:te(ie),quit:re(ie)}},ce=e=>{const{message:t,type:r}=e,a="[adapter]";switch(r){case oe.Error:d(t,a);break;case oe.Info:h(a,t);break;case oe.Warn:p(a,t)}},de=async()=>{try{const e=await fin.System.getAppAssetInfo({alias:ne});return e&&e.version===n}catch(e){return!1}};var he,pe,we,ke,ue;!function(e){e.Continuous="Continuous",e.Dash="Dash",e.DashDot="DashDot",e.DashDotDot="DashDotDot",e.Dot="Dot",e.Double="Double",e.SlantDashDot="SlantDashDot",e.None="None"}(he||(he={})),function(e){e.Center="Center",e.CenterAcrossSelection="CenterAcrossSelection",e.Distributed="Distributed",e.Fill="Fill",e.General="General",e.Justify="Justify",e.Left="Left",e.Right="Right"}(pe||(pe={})),function(e){e.Automatic="Automatic",e.Checker="Checker",e.CrissCross="CrissCross",e.Down="Down",e.Gray16="Gray16",e.Gray25="Gray25",e.Gray50="Gray50",e.Gray75="Gray75",e.Gray8="Gray8",e.Grid="Grid",e.Horizontal="Horizontal",e.LightDown="LightDown",e.LightHorizontal="LightHorizontal",e.LightUp="LightUp",e.LightVertical="LightVertical",e.LinearGradient="LinearGradient",e.None="None",e.RectangularGradient="RectangularGradient",e.SemiGray75="SemiGray75",e.Solid="Solid",e.Up="Up",e.Vertical="Vertical"}(we||(we={})),function(e){e.Bottom="Bottom",e.Center="Center",e.Distributed="Distributed",e.Justify="Justify",e.Top="Top"}(ke||(ke={})),function(e){e.And="And",e.Or="Or",e.Top10Items="Top10Items",e.Bottom10Items="Bottom10Items",e.Top10Percent="Top10Percent",e.Bottom10Percent="Bottom10Percent",e.FilterValues="FilterValues"}(ue||(ue={}));var ge=o.dq,me=o.MS,ye=o.xQ,Ce=o.sO,ve=o.Zu,Ee=o.I3,We=o.$U,Ae=o.i0,be=o.cX,fe=o._W,$e=o.U$,xe=o.U7,Ge=o.rd;

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
/* harmony import */ var _openfin_excel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openfin/excel */ "../../node_modules/@openfin/excel/openfin.excel.js");


const KNOWN_INSTRUMENTS = ["TSLA", "MSFT", "AAPL"];
let excel;
let openWorkbooks;
let selectedWorkbookIndex;
let openWorksheets;
let selectedWorksheetIndex;
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await init();
    }
    catch (error) {
        console.error(error);
    }
});
async function init() {
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
function showError(err) {
    const errDom = document.querySelector("#error");
    if (errDom) {
        errDom.innerHTML = err instanceof Error ? err.message : JSON.stringify(err);
    }
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFrRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQzs7QUFFckM7QUFDQTtBQUNBLGNBQWMsMExBQTBMO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMEJBQTBCOztBQUV3YjtBQUNuZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemdEQSxhQUFhLFVBQVUsK0RBQStELHVCQUF1QixFQUFFLG9EQUFvRCxNQUFNLE9BQU8scUxBQXFMLEVBQUUsNkJBQTZCLG9EQUFvRCxNQUFNLGtIQUFrSCxzQkFBc0IsSUFBSSxvQ0FBb0Msc0RBQXNELFlBQVksa0NBQWtDLHlDQUF5QyxZQUFZLDJDQUEyQyxnREFBZ0QsWUFBWSxzQ0FBc0MsMkNBQTJDLFlBQVksYUFBYSw0d0NBQTR3QyxTQUFTLGVBQWUsb0pBQW9KLFNBQVMsZUFBZSw4Q0FBOEMsU0FBUyxHQUFHLGdCQUFnQixTQUFTLGtDQUFrQyxLQUFLLFFBQVEsV0FBVyxFQUFFLEdBQUcsV0FBVyxvQ0FBb0MsR0FBRyxFQUFFLEVBQUUscURBQXFELEdBQUcsRUFBRSxFQUFFLFFBQVEsWUFBWSx1QkFBdUIsWUFBWSx5QkFBeUIsK0NBQStDLE9BQU8scUJBQXFCLGNBQWMsT0FBTyxtQ0FBbUMsRUFBRSx3RUFBd0UsMkJBQTJCLHFDQUFxQyxnQ0FBZ0MsMEJBQTBCLEVBQUUsSUFBSSxJQUFJLHdDQUF3QyxTQUFTLHdCQUF3QixvQkFBb0IsMkJBQTJCLEVBQUUsSUFBSSxJQUFJLHlDQUF5QyxTQUFTLHdCQUF3QixvQkFBb0IsdUNBQXVDLEVBQUUsSUFBSSxJQUFJLHlDQUF5QyxTQUFTLHdCQUF3QixvQkFBb0IsMkNBQTJDLEVBQUUsSUFBSSxJQUFJLDZDQUE2QyxTQUFTLHdCQUF3QixvQkFBb0IsaUNBQWlDLEVBQUUsSUFBSSxJQUFJLG9DQUFvQyxTQUFTLHdCQUF3QixvQkFBb0IsaUNBQWlDLFlBQVksR0FBRyxHQUFHLEVBQUUsSUFBSSxTQUFTLHdCQUF3QixJQUFJLHNDQUFzQyxTQUFTLHdCQUF3QixvQkFBb0IscUNBQXFDLFlBQVksR0FBRyxHQUFHLEVBQUUsSUFBSSxTQUFTLHdCQUF3QixJQUFJLDBDQUEwQyxTQUFTLHdCQUF3QixvQkFBb0IsMkJBQTJCLFlBQVksR0FBRyxHQUFHLEVBQUUsSUFBSSxTQUFTLHdCQUF3QixJQUFJLGlDQUFpQyxTQUFTLHdCQUF3Qix3QkFBd0IseUZBQXlGLFlBQVksa0NBQWtDLFdBQVcsSUFBSSxZQUFZLElBQUksaUJBQWlCLEdBQUcsR0FBRyxFQUFFLElBQUksU0FBUyxXQUFXLG9CQUFvQixFQUFFLFNBQVMsTUFBTSxJQUFJLGlCQUFpQiwwRUFBMEUsRUFBRSxHQUFHLHFFQUFxRSxTQUFTLGNBQWMsS0FBSyw2QkFBNkIsd0JBQXdCLEVBQUUsZUFBZSxXQUFXLHdCQUF3QixFQUFFLFNBQVMsaUNBQWlDLGdCQUFnQixhQUFhLElBQUksZUFBZSxTQUFTLG9DQUFvQyxPQUFPLHNhQUFzYSxvQkFBb0Isd0JBQXdCLEVBQUUsSUFBSSxJQUFJLHNDQUFzQyxTQUFTLHdCQUF3QixrQ0FBa0MsNEJBQTRCLFlBQVksR0FBRyxHQUFHLEVBQUUsSUFBSSx5RUFBeUUsRUFBRSxTQUFTLGlHQUFpRyxJQUFJLGtDQUFrQyxTQUFTLHdCQUF3QixvQkFBb0IseUJBQXlCLFlBQVksR0FBRyxHQUFHLEVBQUUsSUFBSSxTQUFTLHdCQUF3QixTQUFTLElBQUksc0NBQXNDLEVBQUUsTUFBTSxTQUFTLHVCQUF1QixTQUFTLG9CQUFvQiwwQkFBMEIsRUFBRSxJQUFJLElBQUksOENBQThDLFNBQVMsd0JBQXdCLG9CQUFvQix5QkFBeUIsRUFBRSxJQUFJLElBQUksdUNBQXVDLFNBQVMsd0JBQXdCLHVCQUF1QixtQ0FBbUMsWUFBWSxHQUFHLEdBQUcsRUFBRSxNQUFNLFNBQVMscUNBQXFDLElBQUksd0NBQXdDLFNBQVMsd0JBQXdCLHVCQUF1QixpQkFBaUIsTUFBTSxxRkFBcUYsb0dBQW9HLGtIQUFrSCw4R0FBOEcsNkJBQTZCLFlBQVksSUFBSSxtQkFBbUIsR0FBRyxHQUFHLEVBQUUsSUFBSSxTQUFTLCtCQUErQixJQUFJLGtDQUFrQyxTQUFTLHdCQUF3Qix1QkFBdUIsK0JBQStCLFlBQVksR0FBRyxHQUFHLEVBQUUsTUFBTSxTQUFTLG9DQUFvQyxJQUFJLG9DQUFvQyxTQUFTLHdCQUF3QixvQkFBb0IsaUJBQWlCLE1BQU0sb0ZBQW9GLGlHQUFpRyx3QkFBd0IsbUJBQW1CLEdBQUcsR0FBRyxFQUFFLElBQUksU0FBUywrQkFBK0IsSUFBSSw4Q0FBOEMsU0FBUyx3QkFBd0IsZUFBZSxNQUFNLElBQUksaUJBQWlCLDBFQUEwRSxFQUFFLEdBQUcseURBQXlELE1BQU0sNkJBQTZCLDBCQUEwQixrQkFBa0IsSUFBSSxzQkFBc0IsU0FBUyxvREFBb0QsRUFBRSxJQUFJLHlCQUF5QixJQUFJLDJCQUEyQixVQUFVLFNBQVMsY0FBYyxPQUFPLE1BQU0sSUFBSSxpQkFBaUIsMEVBQTBFLEVBQUUsR0FBRyw2REFBNkQsNkNBQTZDLFNBQVMsY0FBYyxpQ0FBaUMsb0NBQW9DLHFFQUFxRSxhQUFhLG9FQUFvRSxPQUFPLGtEQUFrRCxFQUFFLEdBQUcsYUFBYSwwQ0FBMEMsSUFBSSw0Q0FBNEMsV0FBVyxTQUFTLGtDQUFrQyxnQkFBZ0IsTUFBTSw2QkFBNkIsSUFBSSxNQUFNLDJCQUEyQiw0QkFBNEIsSUFBSSxrREFBa0QsU0FBUyx3QkFBd0IsYUFBYSxRQUFRLHNCQUFzQixrRkFBa0Ysb0dBQW9HLDhHQUE4RywyREFBMkQsWUFBWSxHQUFHLG1GQUFtRix5Q0FBeUMscURBQXFELDJDQUEyQyw0REFBNEQsWUFBWSxHQUFHLHlEQUF5RCxjQUFjLElBQUksb0JBQW9CLHlCQUF5QixFQUFFLElBQUksSUFBSSw4Q0FBOEMsU0FBUyx3QkFBd0Isd0JBQXdCLE1BQU0sOEJBQThCLEVBQUUsSUFBSSxJQUFJLHFDQUFxQyxTQUFTLHVCQUF1QixrQkFBa0Isb0JBQW9CLDBCQUEwQixFQUFFLElBQUksSUFBSSx3Q0FBd0MsU0FBUyx3QkFBd0Isb0JBQW9CLHNCQUFzQixFQUFFLElBQUksSUFBSSwyQ0FBMkMsU0FBUyx3QkFBd0IsZUFBZSxTQUFTLG1DQUFtQyxPQUFPLDZQQUE2UCxvQkFBb0Isb0NBQW9DLElBQUksZ0RBQWdELFNBQVMsd0JBQXdCLG9CQUFvQix5QkFBeUIsRUFBRSxJQUFJLElBQUksNkNBQTZDLFNBQVMsd0JBQXdCLHdCQUF3QixNQUFNLHNDQUFzQyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksNENBQTRDLDJCQUEyQix1QkFBdUIsU0FBUyx1QkFBdUIsa0JBQWtCLHdCQUF3QixNQUFNLCtCQUErQixFQUFFLElBQUksSUFBSSxzQ0FBc0MsU0FBUyx1QkFBdUIsOEJBQThCLG9CQUFvQixxQkFBcUIsRUFBRSxJQUFJLElBQUksMENBQTBDLFNBQVMsd0JBQXdCLG9CQUFvQixzQkFBc0IsV0FBVyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksMENBQTBDLHNCQUFzQixFQUFFLFNBQVMsd0JBQXdCLGdCQUFnQixNQUFNLGtDQUFrQyxJQUFJLHFDQUFxQyxTQUFTLHVCQUF1QixrQkFBa0IsZ0JBQWdCLE1BQU0sOEJBQThCLEtBQUssRUFBRSxHQUFHLElBQUksd0NBQXdDLFNBQVMsdUJBQXVCLGtCQUFrQixnQkFBZ0IsTUFBTSxnQ0FBZ0MsSUFBSSxtQ0FBbUMsU0FBUyx1QkFBdUIsOEJBQThCLGlCQUFpQiwrQkFBK0IsS0FBSyxFQUFFLEdBQUcsSUFBSSx5Q0FBeUMsU0FBUyx1QkFBdUIsa0JBQWtCLGlCQUFpQixNQUFNLCtCQUErQixXQUFXLEVBQUUsR0FBRyxJQUFJLHFDQUFxQyxTQUFTLHVCQUF1QixrQkFBa0IscUJBQXFCLHNCQUFzQixnQkFBZ0IsRUFBRSxHQUFHLElBQUksNkNBQTZDLFNBQVMseUJBQXlCLFVBQVUsYUFBYSwrQkFBK0IsV0FBVyxlQUFlLDJEQUEyRCxXQUFXLEdBQUcsZ0NBQWdDLE9BQU8sdUJBQXVCLElBQUksZ0JBQWdCLElBQUksdURBQXVELGlDQUFpQyw4QkFBOEIsRUFBRSxTQUFTLDBDQUEwQyxFQUFFLElBQUkseUJBQXlCLElBQUksd0JBQXdCLGdCQUFnQixNQUFNLGlJQUFpSSwyRUFBMkUsOERBQThELFNBQVMsa0VBQWtFLEVBQUUsMERBQTBELG1DQUFtQyxJQUFJLHdDQUF3QyxHQUFHLFNBQVMsaURBQWlELElBQUksTUFBTSx1QkFBdUIsbUNBQW1DLElBQUksYUFBYSxzREFBc0QsNkJBQTZCLG9CQUFvQiwwQkFBMEIsa0ZBQWtGLG9DQUFvQyxzQkFBc0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxvREFBb0QsU0FBUyxXQUFXLHFCQUFxQixrQkFBa0IsY0FBYyxtREFBbUQsR0FBRyx1REFBdUQsMEJBQTBCLGFBQWEsR0FBRyxtRUFBbUUsTUFBTSxzQkFBc0IsY0FBYyx5RUFBeUUsRUFBRSxHQUFHLHVDQUF1QyxHQUFHLFNBQVMsMENBQTBDLGFBQWEsTUFBTSxPQUFPLFNBQVMseUJBQXlCLHdIQUF3SCxRQUFRLE1BQU0saUJBQWlCLGlCQUFpQixVQUFVLHFCQUFxQixNQUFNLG9CQUFvQixNQUFNLHFCQUFxQixjQUFjLElBQUksMENBQTBDLFNBQVMsRUFBRSx3QkFBd0IsU0FBUyxXQUFXLG1CQUFtQixhQUFhLGdLQUFnSyxXQUFXLGVBQWUsa0xBQWtMLFdBQVcsZUFBZSwwZUFBMGUsV0FBVyxlQUFlLGdHQUFnRyxXQUFXLGVBQWUsZ0xBQWdMLFdBQVcsR0FBRzs7Ozs7O1VDQXArZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nRDtBQU94QjtBQUV4QixNQUFNLGlCQUFpQixHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVuRCxJQUFJLEtBQW1DLENBQUM7QUFDeEMsSUFBSSxhQUtRLENBQUM7QUFDYixJQUFJLHFCQUF5QyxDQUFDO0FBQzlDLElBQUksY0FLUSxDQUFDO0FBQ2IsSUFBSSxzQkFBMEMsQ0FBQztBQUUvQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDeEQsSUFBSTtRQUNILE1BQU0sSUFBSSxFQUFFLENBQUM7S0FDYjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQjtBQUNGLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxVQUFVLElBQUk7SUFDbEIsSUFBSTtRQUNILE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBYyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25GLElBQUksZ0JBQWdCLEVBQUU7WUFDckIsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDeEM7UUFFRCxLQUFLLEdBQUcsTUFBTSxtRUFBbUIsRUFBRSxDQUFDO1FBRXBDLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztRQUUxQixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksZUFBZSxFQUFFO1lBQ3BCLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ3BELE1BQU0sU0FBUyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7U0FDSDtRQUVELE1BQU0scUJBQXFCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFFLElBQUkscUJBQXFCLEVBQUU7WUFDMUIscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1NBQ2pGO1FBRUQsTUFBTSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDNUUsSUFBSSxzQkFBc0IsRUFBRTtZQUMzQixzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7U0FDbkY7UUFFRCxNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakUsSUFBSSxtQkFBbUIsRUFBRTtZQUN4QixtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQzFELGNBQWMsQ0FBRSxDQUFDLENBQUMsTUFBdUMsQ0FBQyxLQUFLLENBQUMsQ0FDaEUsQ0FBQztTQUNGO1FBRUQsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25FLElBQUksb0JBQW9CLEVBQUU7WUFDekIsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUMzRCxlQUFlLENBQUUsQ0FBQyxDQUFDLE1BQXVDLENBQUMsS0FBSyxDQUFDLENBQ2pFLENBQUM7U0FDRjtRQUVELE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxjQUFjLEVBQUU7WUFDbkIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDbkQsTUFBTSxZQUFZLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztTQUNIO0tBQ0Q7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNiLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNmO0FBQ0YsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVk7SUFDOUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxJQUFJLE1BQU0sRUFBRTtRQUNYLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1RTtBQUNGLENBQUM7QUFFRCxLQUFLLFVBQVUsU0FBUztJQUN2QixJQUFJO1FBQ0gsSUFDQyxhQUFhO1lBQ2IscUJBQXFCLEtBQUssU0FBUztZQUNuQyxjQUFjO1lBQ2Qsc0JBQXNCLEtBQUssU0FBUyxFQUNuQztZQUNELHNDQUFzQztZQUN0QywyREFBMkQ7WUFDM0QsTUFBTSxjQUFjLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEUsTUFBTSxlQUFlLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkU7S0FDRDtJQUFDLE1BQU07UUFDUCxJQUFJLEtBQUssRUFBRTtZQUNWLE1BQU0sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzdCLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtLQUNEO0FBQ0YsQ0FBQztBQUVELEtBQUssVUFBVSxpQkFBaUI7SUFDL0IsSUFBSSxLQUFLLEVBQUU7UUFDVixxQkFBcUIsR0FBRyxTQUFTLENBQUM7UUFDbEMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBb0IsbUJBQW1CLENBQUMsQ0FBQztRQUNyRixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFvQixZQUFZLENBQUMsQ0FBQztRQUV2RSxJQUFJLGFBQWEsSUFBSSxNQUFNLEVBQUU7WUFDNUIsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFOUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDdkIsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFdEIsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUVuQixJQUFJO2dCQUNILE1BQU0sU0FBUyxHQUFHLE1BQU0sS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUU3QyxLQUFLLE1BQU0sSUFBSSxJQUFJLFNBQVMsRUFBRTtvQkFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2xDLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ2xCLElBQUk7d0JBQ0osSUFBSTtxQkFDSixDQUFDLENBQUM7aUJBQ0g7Z0JBRUQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckQsV0FBVyxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztnQkFDbEQsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFM0IsS0FBSyxNQUFNLFlBQVksSUFBSSxhQUFhLEVBQUU7b0JBQ3pDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2hELE1BQU0sQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDckMsTUFBTSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN0QjthQUNEO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7b0JBQVM7Z0JBQ1QsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQy9CO1NBQ0Q7S0FDRDtBQUNGLENBQUM7QUFFRCxLQUFLLFVBQVUsY0FBYyxDQUFDLElBQVk7SUFDekMsSUFBSSxhQUFhLEVBQUU7UUFDbEIsTUFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1FBRXpFLElBQUksZ0JBQWdCLEtBQUsscUJBQXFCLEVBQUU7WUFDL0MscUJBQXFCLEdBQUcsZ0JBQWdCLENBQUM7WUFDekMsSUFBSSxnQkFBZ0IsSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzNEO1NBQ0Q7UUFFRCxNQUFNLGtCQUFrQixFQUFFLENBQUM7S0FDM0I7QUFDRixDQUFDO0FBRUQsS0FBSyxVQUFVLGtCQUFrQjtJQUNoQyxJQUFJLEtBQUssRUFBRTtRQUNWLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztRQUNuQyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFvQixvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW9CLGFBQWEsQ0FBQyxDQUFDO1FBRXhFLElBQUksTUFBTSxJQUFJLGFBQWEsSUFBSSxhQUFhLElBQUkscUJBQXFCLEtBQUssU0FBUyxFQUFFO1lBQ3BGLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRTlCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBRXRCLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFFcEIsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDdEQsSUFBSSxRQUFRLEVBQUU7Z0JBQ2IsSUFBSTtvQkFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBRW5ELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO3dCQUMzQixNQUFNLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDbkMsY0FBYyxDQUFDLElBQUksQ0FBQzs0QkFDbkIsS0FBSzs0QkFDTCxJQUFJO3lCQUNKLENBQUMsQ0FBQztxQkFDSDtvQkFFRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNyRCxXQUFXLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO29CQUNuRCxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDdkIsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQzVCLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUUzQixLQUFLLE1BQU0sYUFBYSxJQUFJLGNBQWMsRUFBRTt3QkFDM0MsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO3dCQUN0QyxNQUFNLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3RCO2lCQUNEO2dCQUFDLE9BQU8sR0FBRyxFQUFFO29CQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZjt3QkFBUztvQkFDVCxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsYUFBYSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQy9CO2FBQ0Q7U0FDRDtLQUNEO0FBQ0YsQ0FBQztBQUVELEtBQUssVUFBVSxlQUFlLENBQUMsSUFBWTtJQUMxQyxJQUFJLGNBQWMsSUFBSSxzQkFBc0IsS0FBSyxTQUFTLEVBQUU7UUFDM0QsTUFBTSxpQkFBaUIsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1FBRTNFLElBQUksaUJBQWlCLEtBQUssc0JBQXNCLEVBQUU7WUFDakQsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDNUQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2pCLE1BQU0sWUFBWSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQy9EO1lBRUQsc0JBQXNCLEdBQUcsaUJBQWlCLENBQUM7WUFDM0MsSUFBSSxzQkFBc0IsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLE1BQU0sY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM5RCxNQUFNLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFFaEcsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFjLG9CQUFvQixDQUFDLENBQUM7Z0JBQ25GLElBQUksZ0JBQWdCLEVBQUU7b0JBQ3JCLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2lCQUN4QztnQkFFRCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFtQixnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNoRixJQUFJLFlBQVksRUFBRTtvQkFDakIsWUFBWSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQzlCO2dCQUNELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW1CLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLFNBQVMsRUFBRTtvQkFDZCxTQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7Z0JBQ0QsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsWUFBWSxDQUFDLENBQUM7Z0JBQ3hFLElBQUksUUFBUSxFQUFFO29CQUNiLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUMxQjthQUNEO1NBQ0Q7S0FDRDtBQUNGLENBQUM7QUFFRCxLQUFLLFVBQVUsZ0JBQWdCLENBQUMsS0FBYTtJQUM1QyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDeEUsSUFBSSxhQUFhLEVBQUU7UUFDbEIsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakUsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDekIsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxNQUFNLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QztTQUNEO0tBQ0Q7QUFDRixDQUFDO0FBRUQsS0FBSyxVQUFVLFlBQVk7SUFDMUIsSUFBSSxjQUFjLElBQUksc0JBQXNCLEtBQUssU0FBUyxFQUFFO1FBQzNELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW1CLGdCQUFnQixDQUFDLENBQUM7UUFDaEYsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsYUFBYSxDQUFDLENBQUM7UUFFMUUsSUFBSSxZQUFZLElBQUksU0FBUyxFQUFFO1lBQzlCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1RjtLQUNEO0FBQ0YsQ0FBQztBQUVELEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxVQUFrQjtJQUNwRCxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQW1CLHVCQUF1QixDQUFDLENBQUM7SUFDM0YsSUFBSSxnQkFBZ0IsRUFBRTtRQUNyQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSTtnQkFDSCxNQUFNLGFBQWEsR0FBRztvQkFDckIsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsRUFBRSxFQUFFO3dCQUNILE1BQU0sRUFBRSxVQUFVO3FCQUNsQjtpQkFDRCxDQUFDO2dCQUVGLE1BQU0sT0FBTyxHQUFHLE1BQU0sOERBQWlCLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxPQUFPLEVBQUU7b0JBQ1osTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUN2QztnQkFFRCxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2FBQ3BDO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ2IsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLEdBQUcsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEY7U0FDRDthQUFNO1lBQ04sZ0JBQWdCLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO1NBQzFEO0tBQ0Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvLi4vLi4vbm9kZV9tb2R1bGVzL0BmaW5vcy9mZGMzL2Rpc3QvZmRjMy5lc20uanMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvLi4vLi4vbm9kZV9tb2R1bGVzL0BvcGVuZmluL2V4Y2VsL29wZW5maW4uZXhjZWwuanMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC8uL2NsaWVudC9zcmMvZXhjZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIENvcHlyaWdodCBGSU5PUyBGREMzIGNvbnRyaWJ1dG9ycyAtIHNlZSBOT1RJQ0UgZmlsZVxyXG4gKi9cbi8qKiBDb25zdGFudHMgcmVwcmVzZW50aW5nIHRoZSBlcnJvcnMgdGhhdCBjYW4gYmUgZW5jb3VudGVyZWQgd2hlbiBjYWxsaW5nIHRoZSBgb3BlbmAgbWV0aG9kIG9uIHRoZSBEZXNrdG9wQWdlbnQgb2JqZWN0IChgZmRjM2ApLiAqL1xudmFyIE9wZW5FcnJvcjtcbihmdW5jdGlvbiAoT3BlbkVycm9yKSB7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGFwcGxpY2F0aW9uIGlzIG5vdCBmb3VuZC4qL1xuICBPcGVuRXJyb3JbXCJBcHBOb3RGb3VuZFwiXSA9IFwiQXBwTm90Rm91bmRcIjtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgYXBwbGljYXRpb24gZmFpbHMgdG8gbGF1bmNoIGNvcnJlY3RseS4qL1xuICBPcGVuRXJyb3JbXCJFcnJvck9uTGF1bmNoXCJdID0gXCJFcnJvck9uTGF1bmNoXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGFwcGxpY2F0aW9uIGxhdW5jaGVzIGJ1dCBmYWlscyB0byBhZGQgYSBjb250ZXh0IGxpc3RlbmVyIGluIG9yZGVyIHRvIHJlY2VpdmUgdGhlIGNvbnRleHQgcGFzc2VkIHRvIHRoZSBgZmRjMy5vcGVuYCBjYWxsLiovXG4gIE9wZW5FcnJvcltcIkFwcFRpbWVvdXRcIl0gPSBcIkFwcFRpbWVvdXRcIjtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSBGREMzIGRlc2t0b3AgYWdlbnQgaW1wbGVtZW50YXRpb24gaXMgbm90IGN1cnJlbnRseSBhYmxlIHRvIGhhbmRsZSB0aGUgcmVxdWVzdC4qL1xuICBPcGVuRXJyb3JbXCJSZXNvbHZlclVuYXZhaWxhYmxlXCJdID0gXCJSZXNvbHZlclVuYXZhaWxhYmxlXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiBhIGNhbGwgdG8gdGhlIGBvcGVuYCBmdW5jdGlvbiBpcyBtYWRlIHdpdGggYW4gaW52YWxpZCBjb250ZXh0IGFyZ3VtZW50LiBDb250ZXh0cyBzaG91bGQgYmUgT2JqZWN0cyB3aXRoIGF0IGxlYXN0IGEgYHR5cGVgIGZpZWxkIHRoYXQgaGFzIGEgYHN0cmluZ2AgdmFsdWUuKi9cbiAgT3BlbkVycm9yW1wiTWFsZm9ybWVkQ29udGV4dFwiXSA9IFwiTWFsZm9ybWVkQ29udGV4dFwiO1xufSkoT3BlbkVycm9yIHx8IChPcGVuRXJyb3IgPSB7fSkpO1xuLyoqIENvbnN0YW50cyByZXByZXNlbnRpbmcgdGhlIGVycm9ycyB0aGF0IGNhbiBiZSBlbmNvdW50ZXJlZCB3aGVuIGNhbGxpbmcgdGhlIGBmaW5kSW50ZW50YCwgYGZpbmRJbnRlbnRzQnlDb250ZXh0YCwgYHJhaXNlSW50ZW50YCBvciBgcmFpc2VJbnRlbnRGb3JDb250ZXh0YCBtZXRob2RzIG9uIHRoZSBEZXNrdG9wQWdlbnQgKGBmZGMzYCkuICovXG52YXIgUmVzb2x2ZUVycm9yO1xuKGZ1bmN0aW9uIChSZXNvbHZlRXJyb3IpIHtcbiAgLyoqIFNIT1VMRCBiZSByZXR1cm5lZCBpZiBubyBhcHBzIGFyZSBhdmFpbGFibGUgdGhhdCBjYW4gcmVzb2x2ZSB0aGUgaW50ZW50IGFuZCBjb250ZXh0IGNvbWJpbmF0aW9uLiovXG4gIFJlc29sdmVFcnJvcltcIk5vQXBwc0ZvdW5kXCJdID0gXCJOb0FwcHNGb3VuZFwiO1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIEZEQzMgZGVza3RvcCBhZ2VudCBpbXBsZW1lbnRhdGlvbiBpcyBub3QgY3VycmVudGx5IGFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0LiovXG4gIFJlc29sdmVFcnJvcltcIlJlc29sdmVyVW5hdmFpbGFibGVcIl0gPSBcIlJlc29sdmVyVW5hdmFpbGFibGVcIjtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSB1c2VyIGNhbmNlbGxlZCB0aGUgcmVzb2x1dGlvbiByZXF1ZXN0LCBmb3IgZXhhbXBsZSBieSBjbG9zaW5nIG9yIGNhbmNlbGxpbmcgYSByZXNvbHZlciBVSS4qL1xuICBSZXNvbHZlRXJyb3JbXCJVc2VyQ2FuY2VsbGVkXCJdID0gXCJVc2VyQ2FuY2VsbGVkUmVzb2x1dGlvblwiO1xuICAvKiogU0hPVUxEIGJlIHJldHVybmVkIGlmIGEgdGltZW91dCBjYW5jZWxzIGFuIGludGVudCByZXNvbHV0aW9uIHRoYXQgcmVxdWlyZWQgdXNlciBpbnRlcmFjdGlvbi4gUGxlYXNlIHVzZSBgUmVzb2x2ZXJVbmF2YWlsYWJsZWAgaW5zdGVhZCBmb3Igc2l0dWF0aW9ucyB3aGVyZSBhIHJlc29sdmVyIFVJIG9yIHNpbWlsYXIgZmFpbHMuKi9cbiAgUmVzb2x2ZUVycm9yW1wiUmVzb2x2ZXJUaW1lb3V0XCJdID0gXCJSZXNvbHZlclRpbWVvdXRcIjtcbiAgLyoqIFJldHVybmVkIGlmIGEgc3BlY2lmaWVkIHRhcmdldCBhcHBsaWNhdGlvbiBpcyBub3QgYXZhaWxhYmxlIG9yIGEgbmV3IGluc3RhbmNlIG9mIGl0IGNhbm5vdCBiZSBvcGVuZWQuICovXG4gIFJlc29sdmVFcnJvcltcIlRhcmdldEFwcFVuYXZhaWxhYmxlXCJdID0gXCJUYXJnZXRBcHBVbmF2YWlsYWJsZVwiO1xuICAvKiogUmV0dXJuZWQgaWYgYSBzcGVjaWZpZWQgdGFyZ2V0IGFwcGxpY2F0aW9uIGluc3RhbmNlIGlzIG5vdCBhdmFpbGFibGUsIGZvciBleGFtcGxlIGJlY2F1c2UgaXQgaGFzIGJlZW4gY2xvc2VkLiAqL1xuICBSZXNvbHZlRXJyb3JbXCJUYXJnZXRJbnN0YW5jZVVuYXZhaWxhYmxlXCJdID0gXCJUYXJnZXRJbnN0YW5jZVVuYXZhaWxhYmxlXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgaW50ZW50IGFuZCBjb250ZXh0IGNvdWxkIG5vdCBiZSBkZWxpdmVyZWQgdG8gdGhlIHNlbGVjdGVkIGFwcGxpY2F0aW9uIG9yIGluc3RhbmNlLCBmb3IgZXhhbXBsZSBiZWNhdXNlIGl0IGhhcyBub3QgYWRkZWQgYW4gaW50ZW50IGhhbmRsZXIgd2l0aGluIGEgdGltZW91dC4qL1xuICBSZXNvbHZlRXJyb3JbXCJJbnRlbnREZWxpdmVyeUZhaWxlZFwiXSA9IFwiSW50ZW50RGVsaXZlcnlGYWlsZWRcIjtcbiAgLyoqIFJldHVybmVkIGlmIGEgY2FsbCB0byBvbmUgb2YgdGhlIGByYWlzZUludGVudGAgZnVuY3Rpb25zIGlzIG1hZGUgd2l0aCBhbiBpbnZhbGlkIGNvbnRleHQgYXJndW1lbnQuIENvbnRleHRzIHNob3VsZCBiZSBPYmplY3RzIHdpdGggYXQgbGVhc3QgYSBgdHlwZWAgZmllbGQgdGhhdCBoYXMgYSBgc3RyaW5nYCB2YWx1ZS4qL1xuICBSZXNvbHZlRXJyb3JbXCJNYWxmb3JtZWRDb250ZXh0XCJdID0gXCJNYWxmb3JtZWRDb250ZXh0XCI7XG59KShSZXNvbHZlRXJyb3IgfHwgKFJlc29sdmVFcnJvciA9IHt9KSk7XG52YXIgUmVzdWx0RXJyb3I7XG4oZnVuY3Rpb24gKFJlc3VsdEVycm9yKSB7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgaW50ZW50IGhhbmRsZXIgZXhpdGVkIHdpdGhvdXQgcmV0dXJuaW5nIGEgdmFsaWQgcmVzdWx0IChhIHByb21pc2UgcmVzb2x2aW5nIHRvIGEgQ29udGV4dCwgQ2hhbm5lbCBvYmplY3Qgb3Igdm9pZCkuICovXG4gIFJlc3VsdEVycm9yW1wiTm9SZXN1bHRSZXR1cm5lZFwiXSA9IFwiTm9SZXN1bHRSZXR1cm5lZFwiO1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIEludGVudCBoYW5kbGVyIGZ1bmN0aW9uIHByb2Nlc3NpbmcgdGhlIHJhaXNlZCBpbnRlbnQgdGhyb3dzIGFuIGVycm9yIG9yIHJlamVjdHMgdGhlIFByb21pc2UgaXQgcmV0dXJuZWQuICovXG4gIFJlc3VsdEVycm9yW1wiSW50ZW50SGFuZGxlclJlamVjdGVkXCJdID0gXCJJbnRlbnRIYW5kbGVyUmVqZWN0ZWRcIjtcbn0pKFJlc3VsdEVycm9yIHx8IChSZXN1bHRFcnJvciA9IHt9KSk7XG52YXIgQ2hhbm5lbEVycm9yO1xuKGZ1bmN0aW9uIChDaGFubmVsRXJyb3IpIHtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgY2hhbm5lbCBpcyBub3QgZm91bmQgd2hlbiBhdHRlbXB0aW5nIHRvIGpvaW4gYSBjaGFubmVsIHZpYSB0aGUgYGpvaW5Vc2VyQ2hhbm5lbGAgZnVuY3Rpb24gIG9mIHRoZSBEZXNrdG9wQWdlbnQgKGBmZGMzYCkuKi9cbiAgQ2hhbm5lbEVycm9yW1wiTm9DaGFubmVsRm91bmRcIl0gPSBcIk5vQ2hhbm5lbEZvdW5kXCI7XG4gIC8qKiBTSE9VTEQgYmUgcmV0dXJuZWQgd2hlbiBhIHJlcXVlc3QgdG8gam9pbiBhIHVzZXIgY2hhbm5lbCBvciB0byBhIHJldHJpZXZlIGEgQ2hhbm5lbCBvYmplY3QgdmlhIHRoZSBgam9pblVzZXJDaGFubmVsYCBvciBgZ2V0T3JDcmVhdGVDaGFubmVsYCBtZXRob2RzIG9mIHRoZSBEZXNrdG9wQWdlbnQgKGBmZGMzYCkgb2JqZWN0IGlzIGRlbmllZC4gKi9cbiAgQ2hhbm5lbEVycm9yW1wiQWNjZXNzRGVuaWVkXCJdID0gXCJBY2Nlc3NEZW5pZWRcIjtcbiAgLyoqIFNIT1VMRCBiZSByZXR1cm5lZCB3aGVuIGEgY2hhbm5lbCBjYW5ub3QgYmUgY3JlYXRlZCBvciByZXRyaWV2ZWQgdmlhIHRoZSBgZ2V0T3JDcmVhdGVDaGFubmVsYCBtZXRob2Qgb2YgdGhlIERlc2t0b3BBZ2VudCAoYGZkYzNgKS4qL1xuICBDaGFubmVsRXJyb3JbXCJDcmVhdGlvbkZhaWxlZFwiXSA9IFwiQ3JlYXRpb25GYWlsZWRcIjtcbiAgLyoqIFJldHVybmVkIGlmIGEgY2FsbCB0byB0aGUgYGJyb2FkY2FzdGAgZnVuY3Rpb25zIGlzIG1hZGUgd2l0aCBhbiBpbnZhbGlkIGNvbnRleHQgYXJndW1lbnQuIENvbnRleHRzIHNob3VsZCBiZSBPYmplY3RzIHdpdGggYXQgbGVhc3QgYSBgdHlwZWAgZmllbGQgdGhhdCBoYXMgYSBgc3RyaW5nYCB2YWx1ZS4qL1xuICBDaGFubmVsRXJyb3JbXCJNYWxmb3JtZWRDb250ZXh0XCJdID0gXCJNYWxmb3JtZWRDb250ZXh0XCI7XG59KShDaGFubmVsRXJyb3IgfHwgKENoYW5uZWxFcnJvciA9IHt9KSk7XG5cbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH07XG4gIHZhciBleHBvcnRzID0ge30sXG4gICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LFxuICAgIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykge1xuICAgICAgb2JqW2tleV0gPSBkZXNjLnZhbHVlO1xuICAgIH0sXG4gICAgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiLFxuICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcixcbiAgICAgIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSxcbiAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpXG4gICAgfSksIGdlbmVyYXRvcjtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgdmFsdWUgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPSBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICAgICAgaWYgKFwiZXhlY3V0aW5nXCIgPT09IHN0YXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgaWYgKFwiY29tcGxldGVkXCIgPT09IHN0YXRlKSB7XG4gICAgICAgIGlmIChcInRocm93XCIgPT09IG1ldGhvZCkgdGhyb3cgYXJnO1xuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuICAgICAgZm9yIChjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZCwgY29udGV4dC5hcmcgPSBhcmc7Oykge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gY29udGV4dC5tZXRob2QpIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKFwic3VzcGVuZGVkU3RhcnRcIiA9PT0gc3RhdGUpIHRocm93IHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5hcmc7XG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG4gICAgICAgIH0gZWxzZSBcInJldHVyblwiID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIHN0YXRlID0gXCJleGVjdXRpbmdcIjtcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAoXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBcImNvbXBsZXRlZFwiIDogXCJzdXNwZW5kZWRZaWVsZFwiLCByZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUgJiYgKHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSBjb250ZXh0Lm1ldGhvZCxcbiAgICAgIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZE5hbWVdO1xuICAgIGlmICh1bmRlZmluZWQgPT09IG1ldGhvZCkgcmV0dXJuIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBcInRocm93XCIgPT09IG1ldGhvZE5hbWUgJiYgZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbWV0aG9kTmFtZSAmJiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIikpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7XG4gICAgICB0cnlMb2M6IGxvY3NbMF1cbiAgICB9O1xuICAgIDEgaW4gbG9jcyAmJiAoZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdKSwgMiBpbiBsb2NzICYmIChlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXSwgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7XG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdW5kZWZpbmVkLCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiAhMFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmVQcm9wZXJ0eShHcCwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIGRlZmluZVByb3BlcnR5KEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCksXG4gICAgICBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkga2V5cy5wdXNoKGtleSk7XG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIChza2lwVGVtcFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJvb3RSZWNvcmQudHlwZSkgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIChleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sXG4gICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiAodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7XG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiAoZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2F0Y2g6IGZ1bmN0aW9uICh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfSwgZXhwb3J0cztcbn1cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG52YXIgREVGQVVMVF9USU1FT1VUID0gNTAwMDtcbnZhciBVbmF2YWlsYWJsZUVycm9yID0gLyojX19QVVJFX18qL25ldyBFcnJvcignRkRDMyBEZXNrdG9wQWdlbnQgbm90IGF2YWlsYWJsZSBhdCBgd2luZG93LmZkYzNgLicpO1xudmFyIFRpbWVvdXRFcnJvciA9IC8qI19fUFVSRV9fKi9uZXcgRXJyb3IoJ1RpbWVkIG91dCB3YWl0aW5nIGZvciBgZmRjM1JlYWR5YCBldmVudC4nKTtcbnZhciBVbmV4cGVjdGVkRXJyb3IgPSAvKiNfX1BVUkVfXyovbmV3IEVycm9yKCdgZmRjM1JlYWR5YCBldmVudCBmaXJlZCwgYnV0IGB3aW5kb3cuZmRjM2Agbm90IHNldCB0byBEZXNrdG9wQWdlbnQuJyk7XG5mdW5jdGlvbiByZWplY3RJZk5vR2xvYmFsKGYpIHtcbiAgcmV0dXJuIHdpbmRvdy5mZGMzID8gZigpIDogUHJvbWlzZS5yZWplY3QoVW5hdmFpbGFibGVFcnJvcik7XG59XG4vKipcclxuICogVXRpbGl0eSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIGltbWVhZGlhdGVseVxyXG4gKiBpZiB0aGUgZGVza3RvcCBhZ2VudCBBUEkgaXMgZm91bmQgYXQgYHdpbmRvdy5mZGMzYC4gSWYgdGhlIEFQSSBpcyBmb3VuZCxcclxuICogdGhlIHByb21pc2Ugd2lsbCByZXNvbHZlIHdoZW4gdGhlIGBmZGMzUmVhZHlgIGV2ZW50IGlzIHJlY2VpdmVkIG9yIGlmIGl0XHJcbiAqIGlzIGZvdW5kIGF0IHRoZSBlbmQgb2YgdGhlIHNwZWNpZmllZCB0aW1lb3V0LiBJZiB0aGUgQVBJIGlzIG5vdCBmb3VuZCwgaXRcclxuICogd2lsbCByZWplY3Qgd2l0aCBhbiBlcnJvci5cclxuICpcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiBhd2FpdCBmZGMzUmVhZHkoKTtcclxuICogY29uc3QgaW50ZW50TGlzdGVuZXIgPSBhd2FpdCBhZGRJbnRlbnRMaXN0ZW5lcihcIlZpZXdDaGFydFwiLCBpbnRlbnRIYW5kbGVyRm4pO1xyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIHdhaXRGb3JNcyBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGZvciB0aGUgRkRDMyBBUEkgdG8gYmVcclxuICogcmVhZHkuIERlZmF1bHRzIHRvIDUgc2Vjb25kcy5cclxuICovXG52YXIgZmRjM1JlYWR5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYgPSAvKiNfX1BVUkVfXyovX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlKHdhaXRGb3JNcykge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGlmICh3YWl0Rm9yTXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgd2FpdEZvck1zID0gREVGQVVMVF9USU1FT1VUO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBnbG9iYWwgaXMgYWxyZWFkeSBhdmFpbGFibGUgcmVzb2x2ZSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5mZGMzKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGlmIGl0cyBub3QgYXZhaWxhYmxlIHNldHVwIGEgdGltZW91dCB0byByZXR1cm4gYSByZWplY3RlZCBwcm9taXNlXG4gICAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzID8gcmVzb2x2ZSgpIDogcmVqZWN0KFRpbWVvdXRFcnJvcik7XG4gICAgICAgICAgICAgIH0sIHdhaXRGb3JNcyk7XG4gICAgICAgICAgICAgIC8vIGxpc3RlbiBmb3IgdGhlIGZkYzNSZWFkeSBldmVudFxuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZmRjM1JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZmRjMyA/IHJlc29sdmUoKSA6IHJlamVjdChVbmV4cGVjdGVkRXJyb3IpO1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZkYzNSZWFkeShfeCkge1xuICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5mdW5jdGlvbiBpc1N0cmluZyhhcHApIHtcbiAgcmV0dXJuICEhYXBwICYmIHR5cGVvZiBhcHAgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gb3BlbihhcHAsIGNvbnRleHQpIHtcbiAgaWYgKGlzU3RyaW5nKGFwcCkpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMub3BlbihhcHAsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5vcGVuKGFwcCwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZpbmRJbnRlbnQoaW50ZW50LCBjb250ZXh0LCByZXN1bHRUeXBlKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZmluZEludGVudChpbnRlbnQsIGNvbnRleHQsIHJlc3VsdFR5cGUpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZpbmRJbnRlbnRzQnlDb250ZXh0KGNvbnRleHQsIHJlc3VsdFR5cGUpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5maW5kSW50ZW50c0J5Q29udGV4dChjb250ZXh0LCByZXN1bHRUeXBlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBicm9hZGNhc3QoY29udGV4dCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmJyb2FkY2FzdChjb250ZXh0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiByYWlzZUludGVudChpbnRlbnQsIGNvbnRleHQsIGFwcCkge1xuICBpZiAoaXNTdHJpbmcoYXBwKSkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5yYWlzZUludGVudChpbnRlbnQsIGNvbnRleHQsIGFwcCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50KGludGVudCwgY29udGV4dCwgYXBwKTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gcmFpc2VJbnRlbnRGb3JDb250ZXh0KGNvbnRleHQsIGFwcCkge1xuICBpZiAoaXNTdHJpbmcoYXBwKSkge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5yYWlzZUludGVudEZvckNvbnRleHQoY29udGV4dCwgYXBwKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMucmFpc2VJbnRlbnRGb3JDb250ZXh0KGNvbnRleHQsIGFwcCk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGFkZEludGVudExpc3RlbmVyKGludGVudCwgaGFuZGxlcikge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmFkZEludGVudExpc3RlbmVyKGludGVudCwgaGFuZGxlcik7XG4gIH0pO1xufVxuZnVuY3Rpb24gYWRkQ29udGV4dExpc3RlbmVyKGNvbnRleHRUeXBlT3JIYW5kbGVyLCBoYW5kbGVyKSB7XG4gIC8vSGFuZGxlIChkZXByZWNhdGVkKSBmdW5jdGlvbiBzaWduYXR1cmUgdGhhdCBhbGxvd2VkIGNvbnRleHRUeXBlIGFyZ3VtZW50IHRvIGJlIG9taXR0ZWRcbiAgaWYgKHR5cGVvZiBjb250ZXh0VHlwZU9ySGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5hZGRDb250ZXh0TGlzdGVuZXIoY29udGV4dFR5cGVPckhhbmRsZXIsIGhhbmRsZXIpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5hZGRDb250ZXh0TGlzdGVuZXIobnVsbCwgY29udGV4dFR5cGVPckhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBnZXRVc2VyQ2hhbm5lbHMoKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAvL2ZhbGxiYWNrIHRvIGdldFN5c3RlbUNoYW5uZWxzIGZvciBGREMzIDwyLjAgaW1wbGVtZW50YXRpb25zXG4gICAgaWYgKHdpbmRvdy5mZGMzLmdldFVzZXJDaGFubmVscykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldFVzZXJDaGFubmVscygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0U3lzdGVtQ2hhbm5lbHMoKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0U3lzdGVtQ2hhbm5lbHMoKSB7XG4gIC8vZmFsbGZvcndhcmQgdG8gZ2V0VXNlckNoYW5uZWxzIGZvciBGREMzIDIuMCsgaW1wbGVtZW50YXRpb25zXG4gIHJldHVybiBnZXRVc2VyQ2hhbm5lbHMoKTtcbn1cbmZ1bmN0aW9uIGpvaW5Vc2VyQ2hhbm5lbChjaGFubmVsSWQpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIC8vZmFsbGJhY2sgdG8gam9pbkNoYW5uZWwgZm9yIEZEQzMgPDIuMCBpbXBsZW1lbnRhdGlvbnNcbiAgICBpZiAod2luZG93LmZkYzMuam9pblVzZXJDaGFubmVsKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMuam9pblVzZXJDaGFubmVsKGNoYW5uZWxJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5qb2luQ2hhbm5lbChjaGFubmVsSWQpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBqb2luQ2hhbm5lbChjaGFubmVsSWQpIHtcbiAgLy9mYWxsZm9yd2FyZCB0byBqb2luVXNlckNoYW5uZWwgZm9yIEZEQzMgMi4wKyBpbXBsZW1lbnRhdGlvbnNcbiAgcmV0dXJuIGpvaW5Vc2VyQ2hhbm5lbChjaGFubmVsSWQpO1xufVxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVDaGFubmVsKGNoYW5uZWxJZCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldE9yQ3JlYXRlQ2hhbm5lbChjaGFubmVsSWQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRDaGFubmVsKCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldEN1cnJlbnRDaGFubmVsKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gbGVhdmVDdXJyZW50Q2hhbm5lbCgpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5sZWF2ZUN1cnJlbnRDaGFubmVsKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUHJpdmF0ZUNoYW5uZWwoKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuY3JlYXRlUHJpdmF0ZUNoYW5uZWwoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRJbmZvKCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldEluZm8oKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRBcHBNZXRhZGF0YShhcHApIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRBcHBNZXRhZGF0YShhcHApO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZpbmRJbnN0YW5jZXMoYXBwKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZmluZEluc3RhbmNlcyhhcHApO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBDb21wYXJlIG51bWVyaWMgc2VtdmVyIHZlcnNpb24gbnVtYmVyIHN0cmluZ3MgKGluIHRoZSBmb3JtIGAxLjIuM2ApLlxyXG4gKlxyXG4gKiBSZXR1cm5zIGAtMWAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgbG93ZXIgdmVyc2lvbiBudW1iZXIgdGhhbiB0aGUgc2Vjb25kLFxyXG4gKiBgMWAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kLCAwIGlmIHRoZSBhcmd1bWVudHMgYXJlXHJcbiAqIGVxdWFsIGFuZCBgbnVsbGAgaWYgYW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBjb21wYXJpc29uLlxyXG4gKlxyXG4gKiBAcGFyYW0gYVxyXG4gKiBAcGFyYW0gYlxyXG4gKi9cbnZhciBjb21wYXJlVmVyc2lvbk51bWJlcnMgPSBmdW5jdGlvbiBjb21wYXJlVmVyc2lvbk51bWJlcnMoYSwgYikge1xuICB0cnkge1xuICAgIHZhciBhVmVyQXJyID0gYS5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuICAgIHZhciBiVmVyQXJyID0gYi5zcGxpdCgnLicpLm1hcChOdW1iZXIpO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBNYXRoLm1heChhVmVyQXJyLmxlbmd0aCwgYlZlckFyci5sZW5ndGgpOyBpbmRleCsrKSB7XG4gICAgICAvKiBJZiBvbmUgdmVyc2lvbiBudW1iZXIgaGFzIG1vcmUgZGlnaXRzIGFuZCB0aGUgb3RoZXIgZG9lcyBub3QsIGFuZCB0aGV5IGFyZSBvdGhlcndpc2UgZXF1YWwsXHJcbiAgICAgICAgIGFzc3VtZSB0aGUgbG9uZ2VyIGlzIGdyZWF0ZXIuIEUuZy4gMS4xLjEgPiAxLjEgKi9cbiAgICAgIGlmIChpbmRleCA9PT0gYVZlckFyci5sZW5ndGggfHwgYVZlckFycltpbmRleF0gPCBiVmVyQXJyW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBiVmVyQXJyLmxlbmd0aCB8fCBhVmVyQXJyW2luZGV4XSA+IGJWZXJBcnJbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb21wYXJlIHZlcnNpb24gc3RyaW5ncycsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSBGREMzIHZlcnNpb24gaW4gYW4gSW1wbGVtZW50YXRpb25NZXRhZGF0YSBvYmplY3QgaXMgZ3JlYXRlciB0aGFuXHJcbiAqIG9yIGVxdWFsIHRvIHRoZSBzdXBwbGllZCBudW1lcmljIHNlbXZlciB2ZXJzaW9uIG51bWJlciBzdHJpbmcgKGluIHRoZSBmb3JtIGAxLjIuM2ApLlxyXG4gKlxyXG4gKiBSZXR1cm5zIGEgYm9vbGVhbiBvciBudWxsIGlmIGFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNvbXBhcmluZyB0aGUgdmVyc2lvbiBudW1iZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0gbWV0YWRhdGFcclxuICogQHBhcmFtIHZlcnNpb25cclxuICovXG52YXIgdmVyc2lvbklzQXRMZWFzdCA9IGZ1bmN0aW9uIHZlcnNpb25Jc0F0TGVhc3QobWV0YWRhdGEsIHZlcnNpb24pIHtcbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlVmVyc2lvbk51bWJlcnMobWV0YWRhdGEuZmRjM1ZlcnNpb24sIHZlcnNpb24pO1xuICByZXR1cm4gY29tcGFyaXNvbiA9PT0gbnVsbCA/IG51bGwgOiBjb21wYXJpc29uID49IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG52YXIgQ29udGV4dFR5cGVzO1xuKGZ1bmN0aW9uIChDb250ZXh0VHlwZXMpIHtcbiAgQ29udGV4dFR5cGVzW1wiQ2hhcnRcIl0gPSBcImZkYzMuY2hhcnRcIjtcbiAgQ29udGV4dFR5cGVzW1wiQ2hhdEluaXRTZXR0aW5nc1wiXSA9IFwiZmRjMy5jaGF0LmluaXRTZXR0aW5nc1wiO1xuICBDb250ZXh0VHlwZXNbXCJDb250YWN0XCJdID0gXCJmZGMzLmNvbnRhY3RcIjtcbiAgQ29udGV4dFR5cGVzW1wiQ29udGFjdExpc3RcIl0gPSBcImZkYzMuY29udGFjdExpc3RcIjtcbiAgQ29udGV4dFR5cGVzW1wiQ291bnRyeVwiXSA9IFwiZmRjMy5jb3VudHJ5XCI7XG4gIENvbnRleHRUeXBlc1tcIkN1cnJlbmN5XCJdID0gXCJmZGMzLmN1cnJlbmN5XCI7XG4gIENvbnRleHRUeXBlc1tcIkVtYWlsXCJdID0gXCJmZGMzLmVtYWlsXCI7XG4gIENvbnRleHRUeXBlc1tcIkluc3RydW1lbnRcIl0gPSBcImZkYzMuaW5zdHJ1bWVudFwiO1xuICBDb250ZXh0VHlwZXNbXCJJbnN0cnVtZW50TGlzdFwiXSA9IFwiZmRjMy5pbnN0cnVtZW50TGlzdFwiO1xuICBDb250ZXh0VHlwZXNbXCJPcmdhbml6YXRpb25cIl0gPSBcImZkYzMub3JnYW5pemF0aW9uXCI7XG4gIENvbnRleHRUeXBlc1tcIlBvcnRmb2xpb1wiXSA9IFwiZmRjMy5wb3J0Zm9saW9cIjtcbiAgQ29udGV4dFR5cGVzW1wiUG9zaXRpb25cIl0gPSBcImZkYzMucG9zaXRpb25cIjtcbiAgQ29udGV4dFR5cGVzW1wiTm90aGluZ1wiXSA9IFwiZmRjMy5ub3RoaW5nXCI7XG4gIENvbnRleHRUeXBlc1tcIlRpbWVSYW5nZVwiXSA9IFwiZmRjMy50aW1lcmFuZ2VcIjtcbiAgQ29udGV4dFR5cGVzW1wiVmFsdWF0aW9uXCJdID0gXCJmZGMzLnZhbHVhdGlvblwiO1xufSkoQ29udGV4dFR5cGVzIHx8IChDb250ZXh0VHlwZXMgPSB7fSkpO1xuXG4vLyBUbyBwYXJzZSB0aGlzIGRhdGE6XG4vL1xuLy8gICBpbXBvcnQgeyBDb252ZXJ0LCBDaGFydCwgQ2hhdEluaXRTZXR0aW5ncywgQ29udGFjdCwgQ29udGFjdExpc3QsIENvbnRleHQsIENvdW50cnksIEN1cnJlbmN5LCBFbWFpbCwgSW5zdHJ1bWVudCwgSW5zdHJ1bWVudExpc3QsIE5vdGhpbmcsIE9yZ2FuaXphdGlvbiwgUG9ydGZvbGlvLCBQb3NpdGlvbiwgVGltZVJhbmdlLCBWYWx1YXRpb24gfSBmcm9tIFwiLi9maWxlXCI7XG4vL1xuLy8gICBjb25zdCBjaGFydCA9IENvbnZlcnQudG9DaGFydChqc29uKTtcbi8vICAgY29uc3QgY2hhdEluaXRTZXR0aW5ncyA9IENvbnZlcnQudG9DaGF0SW5pdFNldHRpbmdzKGpzb24pO1xuLy8gICBjb25zdCBjb250YWN0ID0gQ29udmVydC50b0NvbnRhY3QoanNvbik7XG4vLyAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gQ29udmVydC50b0NvbnRhY3RMaXN0KGpzb24pO1xuLy8gICBjb25zdCBjb250ZXh0ID0gQ29udmVydC50b0NvbnRleHQoanNvbik7XG4vLyAgIGNvbnN0IGNvdW50cnkgPSBDb252ZXJ0LnRvQ291bnRyeShqc29uKTtcbi8vICAgY29uc3QgY3VycmVuY3kgPSBDb252ZXJ0LnRvQ3VycmVuY3koanNvbik7XG4vLyAgIGNvbnN0IGVtYWlsID0gQ29udmVydC50b0VtYWlsKGpzb24pO1xuLy8gICBjb25zdCBpbnN0cnVtZW50ID0gQ29udmVydC50b0luc3RydW1lbnQoanNvbik7XG4vLyAgIGNvbnN0IGluc3RydW1lbnRMaXN0ID0gQ29udmVydC50b0luc3RydW1lbnRMaXN0KGpzb24pO1xuLy8gICBjb25zdCBub3RoaW5nID0gQ29udmVydC50b05vdGhpbmcoanNvbik7XG4vLyAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IENvbnZlcnQudG9Pcmdhbml6YXRpb24oanNvbik7XG4vLyAgIGNvbnN0IHBvcnRmb2xpbyA9IENvbnZlcnQudG9Qb3J0Zm9saW8oanNvbik7XG4vLyAgIGNvbnN0IHBvc2l0aW9uID0gQ29udmVydC50b1Bvc2l0aW9uKGpzb24pO1xuLy8gICBjb25zdCB0aW1lUmFuZ2UgPSBDb252ZXJ0LnRvVGltZVJhbmdlKGpzb24pO1xuLy8gICBjb25zdCB2YWx1YXRpb24gPSBDb252ZXJ0LnRvVmFsdWF0aW9uKGpzb24pO1xuLy9cbi8vIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBKU09OIGRvZXNuJ3Rcbi8vIG1hdGNoIHRoZSBleHBlY3RlZCBpbnRlcmZhY2UsIGV2ZW4gaWYgdGhlIEpTT04gaXMgdmFsaWQuXG52YXIgU3R5bGU7XG4oZnVuY3Rpb24gKFN0eWxlKSB7XG4gIFN0eWxlW1wiQmFyXCJdID0gXCJiYXJcIjtcbiAgU3R5bGVbXCJDYW5kbGVcIl0gPSBcImNhbmRsZVwiO1xuICBTdHlsZVtcIkN1c3RvbVwiXSA9IFwiY3VzdG9tXCI7XG4gIFN0eWxlW1wiSGVhdG1hcFwiXSA9IFwiaGVhdG1hcFwiO1xuICBTdHlsZVtcIkhpc3RvZ3JhbVwiXSA9IFwiaGlzdG9ncmFtXCI7XG4gIFN0eWxlW1wiTGluZVwiXSA9IFwibGluZVwiO1xuICBTdHlsZVtcIk1vdW50YWluXCJdID0gXCJtb3VudGFpblwiO1xuICBTdHlsZVtcIlBpZVwiXSA9IFwicGllXCI7XG4gIFN0eWxlW1wiU2NhdHRlclwiXSA9IFwic2NhdHRlclwiO1xuICBTdHlsZVtcIlN0YWNrZWRCYXJcIl0gPSBcInN0YWNrZWQtYmFyXCI7XG59KShTdHlsZSB8fCAoU3R5bGUgPSB7fSkpO1xuLy8gQ29udmVydHMgSlNPTiBzdHJpbmdzIHRvL2Zyb20geW91ciB0eXBlc1xuLy8gYW5kIGFzc2VydHMgdGhlIHJlc3VsdHMgb2YgSlNPTi5wYXJzZSBhdCBydW50aW1lXG52YXIgQ29udmVydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbnZlcnQoKSB7fVxuICBDb252ZXJ0LnRvQ2hhcnQgPSBmdW5jdGlvbiB0b0NoYXJ0KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDaGFydCcpKTtcbiAgfTtcbiAgQ29udmVydC5jaGFydFRvSnNvbiA9IGZ1bmN0aW9uIGNoYXJ0VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ2hhcnQnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvQ2hhdEluaXRTZXR0aW5ncyA9IGZ1bmN0aW9uIHRvQ2hhdEluaXRTZXR0aW5ncyhqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ2hhdEluaXRTZXR0aW5ncycpKTtcbiAgfTtcbiAgQ29udmVydC5jaGF0SW5pdFNldHRpbmdzVG9Kc29uID0gZnVuY3Rpb24gY2hhdEluaXRTZXR0aW5nc1RvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NoYXRJbml0U2V0dGluZ3MnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvQ29udGFjdCA9IGZ1bmN0aW9uIHRvQ29udGFjdChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ29udGFjdCcpKTtcbiAgfTtcbiAgQ29udmVydC5jb250YWN0VG9Kc29uID0gZnVuY3Rpb24gY29udGFjdFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NvbnRhY3QnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvQ29udGFjdExpc3QgPSBmdW5jdGlvbiB0b0NvbnRhY3RMaXN0KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDb250YWN0TGlzdCcpKTtcbiAgfTtcbiAgQ29udmVydC5jb250YWN0TGlzdFRvSnNvbiA9IGZ1bmN0aW9uIGNvbnRhY3RMaXN0VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ29udGFjdExpc3QnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvQ29udGV4dCA9IGZ1bmN0aW9uIHRvQ29udGV4dChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ29udGV4dCcpKTtcbiAgfTtcbiAgQ29udmVydC5jb250ZXh0VG9Kc29uID0gZnVuY3Rpb24gY29udGV4dFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NvbnRleHQnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvQ291bnRyeSA9IGZ1bmN0aW9uIHRvQ291bnRyeShqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ291bnRyeScpKTtcbiAgfTtcbiAgQ29udmVydC5jb3VudHJ5VG9Kc29uID0gZnVuY3Rpb24gY291bnRyeVRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NvdW50cnknKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvQ3VycmVuY3kgPSBmdW5jdGlvbiB0b0N1cnJlbmN5KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDdXJyZW5jeScpKTtcbiAgfTtcbiAgQ29udmVydC5jdXJyZW5jeVRvSnNvbiA9IGZ1bmN0aW9uIGN1cnJlbmN5VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ3VycmVuY3knKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvRW1haWwgPSBmdW5jdGlvbiB0b0VtYWlsKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdFbWFpbCcpKTtcbiAgfTtcbiAgQ29udmVydC5lbWFpbFRvSnNvbiA9IGZ1bmN0aW9uIGVtYWlsVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignRW1haWwnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvSW5zdHJ1bWVudCA9IGZ1bmN0aW9uIHRvSW5zdHJ1bWVudChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignSW5zdHJ1bWVudCcpKTtcbiAgfTtcbiAgQ29udmVydC5pbnN0cnVtZW50VG9Kc29uID0gZnVuY3Rpb24gaW5zdHJ1bWVudFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0luc3RydW1lbnQnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvSW5zdHJ1bWVudExpc3QgPSBmdW5jdGlvbiB0b0luc3RydW1lbnRMaXN0KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdJbnN0cnVtZW50TGlzdCcpKTtcbiAgfTtcbiAgQ29udmVydC5pbnN0cnVtZW50TGlzdFRvSnNvbiA9IGZ1bmN0aW9uIGluc3RydW1lbnRMaXN0VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignSW5zdHJ1bWVudExpc3QnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvTm90aGluZyA9IGZ1bmN0aW9uIHRvTm90aGluZyhqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignTm90aGluZycpKTtcbiAgfTtcbiAgQ29udmVydC5ub3RoaW5nVG9Kc29uID0gZnVuY3Rpb24gbm90aGluZ1RvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ05vdGhpbmcnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvT3JnYW5pemF0aW9uID0gZnVuY3Rpb24gdG9Pcmdhbml6YXRpb24oanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ09yZ2FuaXphdGlvbicpKTtcbiAgfTtcbiAgQ29udmVydC5vcmdhbml6YXRpb25Ub0pzb24gPSBmdW5jdGlvbiBvcmdhbml6YXRpb25Ub0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdPcmdhbml6YXRpb24nKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvUG9ydGZvbGlvID0gZnVuY3Rpb24gdG9Qb3J0Zm9saW8oanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ1BvcnRmb2xpbycpKTtcbiAgfTtcbiAgQ29udmVydC5wb3J0Zm9saW9Ub0pzb24gPSBmdW5jdGlvbiBwb3J0Zm9saW9Ub0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdQb3J0Zm9saW8nKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvUG9zaXRpb24gPSBmdW5jdGlvbiB0b1Bvc2l0aW9uKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdQb3NpdGlvbicpKTtcbiAgfTtcbiAgQ29udmVydC5wb3NpdGlvblRvSnNvbiA9IGZ1bmN0aW9uIHBvc2l0aW9uVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignUG9zaXRpb24nKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvVGltZVJhbmdlID0gZnVuY3Rpb24gdG9UaW1lUmFuZ2UoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ1RpbWVSYW5nZScpKTtcbiAgfTtcbiAgQ29udmVydC50aW1lUmFuZ2VUb0pzb24gPSBmdW5jdGlvbiB0aW1lUmFuZ2VUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdUaW1lUmFuZ2UnKSksIG51bGwsIDIpO1xuICB9O1xuICBDb252ZXJ0LnRvVmFsdWF0aW9uID0gZnVuY3Rpb24gdG9WYWx1YXRpb24oanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ1ZhbHVhdGlvbicpKTtcbiAgfTtcbiAgQ29udmVydC52YWx1YXRpb25Ub0pzb24gPSBmdW5jdGlvbiB2YWx1YXRpb25Ub0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdWYWx1YXRpb24nKSksIG51bGwsIDIpO1xuICB9O1xuICByZXR1cm4gQ29udmVydDtcbn0oKTtcbmZ1bmN0aW9uIGludmFsaWRWYWx1ZSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50ID0gJyc7XG4gIH1cbiAgdmFyIHByZXR0eVR5cCA9IHByZXR0eVR5cGVOYW1lKHR5cCk7XG4gIHZhciBwYXJlbnRUZXh0ID0gcGFyZW50ID8gXCIgb24gXCIgKyBwYXJlbnQgOiAnJztcbiAgdmFyIGtleVRleHQgPSBrZXkgPyBcIiBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIlwiIDogJyc7XG4gIHRocm93IEVycm9yKFwiSW52YWxpZCB2YWx1ZVwiICsga2V5VGV4dCArIHBhcmVudFRleHQgKyBcIi4gRXhwZWN0ZWQgXCIgKyBwcmV0dHlUeXAgKyBcIiBidXQgZ290IFwiICsgSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG5mdW5jdGlvbiBwcmV0dHlUeXBlTmFtZSh0eXApIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwKSkge1xuICAgIGlmICh0eXAubGVuZ3RoID09PSAyICYmIHR5cFswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gXCJhbiBvcHRpb25hbCBcIiArIHByZXR0eVR5cGVOYW1lKHR5cFsxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIm9uZSBvZiBbXCIgKyB0eXAubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBwcmV0dHlUeXBlTmFtZShhKTtcbiAgICAgIH0pLmpvaW4oJywgJykgKyBcIl1cIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHR5cCA9PT0gJ29iamVjdCcgJiYgdHlwLmxpdGVyYWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0eXAubGl0ZXJhbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHlwZW9mIHR5cDtcbiAgfVxufVxuZnVuY3Rpb24ganNvblRvSlNQcm9wcyh0eXApIHtcbiAgaWYgKHR5cC5qc29uVG9KUyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIHR5cC5wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gbWFwW3AuanNvbl0gPSB7XG4gICAgICAgIGtleTogcC5qcyxcbiAgICAgICAgdHlwOiBwLnR5cFxuICAgICAgfTtcbiAgICB9KTtcbiAgICB0eXAuanNvblRvSlMgPSBtYXA7XG4gIH1cbiAgcmV0dXJuIHR5cC5qc29uVG9KUztcbn1cbmZ1bmN0aW9uIGpzVG9KU09OUHJvcHModHlwKSB7XG4gIGlmICh0eXAuanNUb0pTT04gPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB0eXAucHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIG1hcFtwLmpzXSA9IHtcbiAgICAgICAga2V5OiBwLmpzb24sXG4gICAgICAgIHR5cDogcC50eXBcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdHlwLmpzVG9KU09OID0gbWFwO1xuICB9XG4gIHJldHVybiB0eXAuanNUb0pTT047XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm0odmFsLCB0eXAsIGdldFByb3BzLCBrZXksIHBhcmVudCkge1xuICBpZiAoa2V5ID09PSB2b2lkIDApIHtcbiAgICBrZXkgPSAnJztcbiAgfVxuICBpZiAocGFyZW50ID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnQgPSAnJztcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1QcmltaXRpdmUodHlwLCB2YWwpIHtcbiAgICBpZiAodHlwZW9mIHR5cCA9PT0gdHlwZW9mIHZhbCkgcmV0dXJuIHZhbDtcbiAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXksIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtVW5pb24odHlwcywgdmFsKSB7XG4gICAgLy8gdmFsIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBvbmUgdHlwIGluIHR5cHNcbiAgICB2YXIgbCA9IHR5cHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgX3R5cCA9IHR5cHNbaV07XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHJhbnNmb3JtKHZhbCwgX3R5cCwgZ2V0UHJvcHMpO1xuICAgICAgfSBjYXRjaCAoXykge31cbiAgICB9XG4gICAgcmV0dXJuIGludmFsaWRWYWx1ZSh0eXBzLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1FbnVtKGNhc2VzLCB2YWwpIHtcbiAgICBpZiAoY2FzZXMuaW5kZXhPZih2YWwpICE9PSAtMSkgcmV0dXJuIHZhbDtcbiAgICByZXR1cm4gaW52YWxpZFZhbHVlKGNhc2VzLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGwoYSk7XG4gICAgfSksIHZhbCwga2V5LCBwYXJlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUFycmF5KHR5cCwgdmFsKSB7XG4gICAgLy8gdmFsIG11c3QgYmUgYW4gYXJyYXkgd2l0aCBubyBpbnZhbGlkIGVsZW1lbnRzXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiBpbnZhbGlkVmFsdWUobCgnYXJyYXknKSwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgcmV0dXJuIHZhbC5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGVsLCB0eXAsIGdldFByb3BzKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRlKHZhbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgZCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgaWYgKGlzTmFOKGQudmFsdWVPZigpKSkge1xuICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZShsKCdEYXRlJyksIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZDtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1PYmplY3QocHJvcHMsIGFkZGl0aW9uYWwsIHZhbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXR1cm4gaW52YWxpZFZhbHVlKGwocmVmIHx8ICdvYmplY3QnKSwgdmFsLCBrZXksIHBhcmVudCk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgcHJvcCA9IHByb3BzW2tleV07XG4gICAgICB2YXIgdiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWwsIGtleSkgPyB2YWxba2V5XSA6IHVuZGVmaW5lZDtcbiAgICAgIHJlc3VsdFtwcm9wLmtleV0gPSB0cmFuc2Zvcm0odiwgcHJvcC50eXAsIGdldFByb3BzLCBrZXksIHJlZik7XG4gICAgfSk7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdHJhbnNmb3JtKHZhbFtrZXldLCBhZGRpdGlvbmFsLCBnZXRQcm9wcywga2V5LCByZWYpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKHR5cCA9PT0gJ2FueScpIHJldHVybiB2YWw7XG4gIGlmICh0eXAgPT09IG51bGwpIHtcbiAgICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gdmFsO1xuICAgIHJldHVybiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgfVxuICBpZiAodHlwID09PSBmYWxzZSkgcmV0dXJuIGludmFsaWRWYWx1ZSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpO1xuICB2YXIgcmVmID0gdW5kZWZpbmVkO1xuICB3aGlsZSAodHlwZW9mIHR5cCA9PT0gJ29iamVjdCcgJiYgdHlwLnJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmVmID0gdHlwLnJlZjtcbiAgICB0eXAgPSB0eXBlTWFwW3R5cC5yZWZdO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHR5cCkpIHJldHVybiB0cmFuc2Zvcm1FbnVtKHR5cCwgdmFsKTtcbiAgaWYgKHR5cGVvZiB0eXAgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHR5cC5oYXNPd25Qcm9wZXJ0eSgndW5pb25NZW1iZXJzJykgPyB0cmFuc2Zvcm1Vbmlvbih0eXAudW5pb25NZW1iZXJzLCB2YWwpIDogdHlwLmhhc093blByb3BlcnR5KCdhcnJheUl0ZW1zJykgPyB0cmFuc2Zvcm1BcnJheSh0eXAuYXJyYXlJdGVtcywgdmFsKSA6IHR5cC5oYXNPd25Qcm9wZXJ0eSgncHJvcHMnKSA/IHRyYW5zZm9ybU9iamVjdChnZXRQcm9wcyh0eXApLCB0eXAuYWRkaXRpb25hbCwgdmFsKSA6IGludmFsaWRWYWx1ZSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpO1xuICB9XG4gIC8vIE51bWJlcnMgY2FuIGJlIHBhcnNlZCBieSBEYXRlIGJ1dCBzaG91bGRuJ3QgYmUuXG4gIGlmICh0eXAgPT09IERhdGUgJiYgdHlwZW9mIHZhbCAhPT0gJ251bWJlcicpIHJldHVybiB0cmFuc2Zvcm1EYXRlKHZhbCk7XG4gIHJldHVybiB0cmFuc2Zvcm1QcmltaXRpdmUodHlwLCB2YWwpO1xufVxuZnVuY3Rpb24gY2FzdCh2YWwsIHR5cCkge1xuICByZXR1cm4gdHJhbnNmb3JtKHZhbCwgdHlwLCBqc29uVG9KU1Byb3BzKTtcbn1cbmZ1bmN0aW9uIHVuY2FzdCh2YWwsIHR5cCkge1xuICByZXR1cm4gdHJhbnNmb3JtKHZhbCwgdHlwLCBqc1RvSlNPTlByb3BzKTtcbn1cbmZ1bmN0aW9uIGwodHlwKSB7XG4gIHJldHVybiB7XG4gICAgbGl0ZXJhbDogdHlwXG4gIH07XG59XG5mdW5jdGlvbiBhKHR5cCkge1xuICByZXR1cm4ge1xuICAgIGFycmF5SXRlbXM6IHR5cFxuICB9O1xufVxuZnVuY3Rpb24gdSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHR5cHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdHlwc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHVuaW9uTWVtYmVyczogdHlwc1xuICB9O1xufVxuZnVuY3Rpb24gbyhwcm9wcywgYWRkaXRpb25hbCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBhZGRpdGlvbmFsOiBhZGRpdGlvbmFsXG4gIH07XG59XG5mdW5jdGlvbiBtKGFkZGl0aW9uYWwpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogW10sXG4gICAgYWRkaXRpb25hbDogYWRkaXRpb25hbFxuICB9O1xufVxuZnVuY3Rpb24gcihuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgcmVmOiBuYW1lXG4gIH07XG59XG52YXIgdHlwZU1hcCA9IHtcbiAgQ2hhcnQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2luc3RydW1lbnRzJyxcbiAgICBqczogJ2luc3RydW1lbnRzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9hKCAvKiNfX1BVUkVfXyovcignSW5zdHJ1bWVudEVsZW1lbnQnKSlcbiAgfSwge1xuICAgIGpzb246ICdvdGhlckNvbmZpZycsXG4gICAganM6ICdvdGhlckNvbmZpZycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICdyYW5nZScsXG4gICAganM6ICdyYW5nZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9yKCdUaW1lUmFuZ2VPYmplY3QnKSlcbiAgfSwge1xuICAgIGpzb246ICdzdHlsZScsXG4gICAganM6ICdzdHlsZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9yKCdTdHlsZScpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBJbnN0cnVtZW50RWxlbWVudDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ1B1cnBsZUlEJylcbiAgfSwge1xuICAgIGpzb246ICdtYXJrZXQnLFxuICAgIGpzOiAnbWFya2V0JyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL3IoJ1B1cnBsZU1hcmtldCcpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBQdXJwbGVJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnQkJHJyxcbiAgICBqczogJ0JCRycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0NVU0lQJyxcbiAgICBqczogJ0NVU0lQJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRkRTX0lEJyxcbiAgICBqczogJ0ZEU19JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZJR0knLFxuICAgIGpzOiAnRklHSScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0lTSU4nLFxuICAgIGpzOiAnSVNJTicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1BFUk1JRCcsXG4gICAganM6ICdQRVJNSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdSSUMnLFxuICAgIGpzOiAnUklDJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnU0VET0wnLFxuICAgIGpzOiAnU0VET0wnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICd0aWNrZXInLFxuICAgIGpzOiAndGlja2VyJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFB1cnBsZU1hcmtldDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnQkJHJyxcbiAgICBqczogJ0JCRycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0NPVU5UUllfSVNPQUxQSEEyJyxcbiAgICBqczogJ0NPVU5UUllfSVNPQUxQSEEyJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnTUlDJyxcbiAgICBqczogJ01JQycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBUaW1lUmFuZ2VPYmplY3Q6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2VuZFRpbWUnLFxuICAgIGpzOiAnZW5kVGltZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIERhdGUpXG4gIH0sIHtcbiAgICBqc29uOiAnc3RhcnRUaW1lJyxcbiAgICBqczogJ3N0YXJ0VGltZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIERhdGUpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIENoYXRJbml0U2V0dGluZ3M6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2NoYXROYW1lJyxcbiAgICBqczogJ2NoYXROYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnaW5pdE1lc3NhZ2UnLFxuICAgIGpzOiAnaW5pdE1lc3NhZ2UnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdtZW1iZXJzJyxcbiAgICBqczogJ21lbWJlcnMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovcignQ29udGFjdExpc3RPYmplY3QnKSlcbiAgfSwge1xuICAgIGpzb246ICdvcHRpb25zJyxcbiAgICBqczogJ29wdGlvbnMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnYW55JylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJ2FueSdcbiAgfV0sICdhbnknKSxcbiAgQ29udGFjdExpc3RPYmplY3Q6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2NvbnRhY3RzJyxcbiAgICBqczogJ2NvbnRhY3RzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9hKCAvKiNfX1BVUkVfXyovcignQ29udGFjdEVsZW1lbnQnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ29udGFjdEVsZW1lbnQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdGbHVmZnlJRCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIEZsdWZmeUlEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdlbWFpbCcsXG4gICAganM6ICdlbWFpbCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZEU19JRCcsXG4gICAganM6ICdGRFNfSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ29udGFjdDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ1RlbnRhY2xlZElEJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgVGVudGFjbGVkSUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2VtYWlsJyxcbiAgICBqczogJ2VtYWlsJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRkRTX0lEJyxcbiAgICBqczogJ0ZEU19JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDb250YWN0TGlzdDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnY29udGFjdHMnLFxuICAgIGpzOiAnY29udGFjdHMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL2EoIC8qI19fUFVSRV9fKi9yKCdDb250YWN0RWxlbWVudCcpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDb250ZXh0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfV0sICdhbnknKSxcbiAgQ291bnRyeTogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ0NvdW50cnlJRCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIENvdW50cnlJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnQ09VTlRSWV9JU09BTFBIQTInLFxuICAgIGpzOiAnQ09VTlRSWV9JU09BTFBIQTInLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdDT1VOVFJZX0lTT0FMUEhBMycsXG4gICAganM6ICdDT1VOVFJZX0lTT0FMUEhBMycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0lTT0FMUEhBMicsXG4gICAganM6ICdJU09BTFBIQTInLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdJU09BTFBIQTMnLFxuICAgIGpzOiAnSVNPQUxQSEEzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIEN1cnJlbmN5OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignQ3VycmVuY3lJRCcpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH1dLCAnYW55JyksXG4gIEN1cnJlbmN5SUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0NVUlJFTkNZX0lTT0NPREUnLFxuICAgIGpzOiAnQ1VSUkVOQ1lfSVNPQ09ERScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBFbWFpbDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAncmVjaXBpZW50cycsXG4gICAganM6ICdyZWNpcGllbnRzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdSZWNpcGllbnRzT2JqZWN0JylcbiAgfSwge1xuICAgIGpzb246ICdzdWJqZWN0JyxcbiAgICBqczogJ3N1YmplY3QnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICd0ZXh0Qm9keScsXG4gICAganM6ICd0ZXh0Qm9keScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBSZWNpcGllbnRzT2JqZWN0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9yKCdSZWNpcGllbnRzSUQnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdjb250YWN0cycsXG4gICAganM6ICdjb250YWN0cycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9hKCAvKiNfX1BVUkVfXyovcignQ29udGFjdEVsZW1lbnQnKSkpXG4gIH1dLCAnYW55JyksXG4gIFJlY2lwaWVudHNJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnZW1haWwnLFxuICAgIGpzOiAnZW1haWwnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGRFNfSUQnLFxuICAgIGpzOiAnRkRTX0lEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIEluc3RydW1lbnQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdTdGlja3lJRCcpXG4gIH0sIHtcbiAgICBqc29uOiAnbWFya2V0JyxcbiAgICBqczogJ21hcmtldCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9yKCdGbHVmZnlNYXJrZXQnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgU3RpY2t5SUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0JCRycsXG4gICAganM6ICdCQkcnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdDVVNJUCcsXG4gICAganM6ICdDVVNJUCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZEU19JRCcsXG4gICAganM6ICdGRFNfSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGSUdJJyxcbiAgICBqczogJ0ZJR0knLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdJU0lOJyxcbiAgICBqczogJ0lTSU4nLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdQRVJNSUQnLFxuICAgIGpzOiAnUEVSTUlEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnUklDJyxcbiAgICBqczogJ1JJQycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1NFRE9MJyxcbiAgICBqczogJ1NFRE9MJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAndGlja2VyJyxcbiAgICBqczogJ3RpY2tlcicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBGbHVmZnlNYXJrZXQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0JCRycsXG4gICAganM6ICdCQkcnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdDT1VOVFJZX0lTT0FMUEhBMicsXG4gICAganM6ICdDT1VOVFJZX0lTT0FMUEhBMicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ01JQycsXG4gICAganM6ICdNSUMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgSW5zdHJ1bWVudExpc3Q6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2luc3RydW1lbnRzJyxcbiAgICBqczogJ2luc3RydW1lbnRzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9hKCAvKiNfX1BVUkVfXyovcignSW5zdHJ1bWVudEVsZW1lbnQnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgTm90aGluZzogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIE9yZ2FuaXphdGlvbjogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ09yZ2FuaXphdGlvbklEJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgT3JnYW5pemF0aW9uSUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0ZEU19JRCcsXG4gICAganM6ICdGRFNfSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdMRUknLFxuICAgIGpzOiAnTEVJJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnUEVSTUlEJyxcbiAgICBqczogJ1BFUk1JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBQb3J0Zm9saW86IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ3Bvc2l0aW9ucycsXG4gICAganM6ICdwb3NpdGlvbnMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL2EoIC8qI19fUFVSRV9fKi9yKCdQb3NpdGlvbkVsZW1lbnQnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgUG9zaXRpb25FbGVtZW50OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdob2xkaW5nJyxcbiAgICBqczogJ2hvbGRpbmcnLFxuICAgIHR5cDogMy4xNFxuICB9LCB7XG4gICAganNvbjogJ2luc3RydW1lbnQnLFxuICAgIGpzOiAnaW5zdHJ1bWVudCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignSW5zdHJ1bWVudEVsZW1lbnQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBQb3NpdGlvbjogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaG9sZGluZycsXG4gICAganM6ICdob2xkaW5nJyxcbiAgICB0eXA6IDMuMTRcbiAgfSwge1xuICAgIGpzb246ICdpbnN0cnVtZW50JyxcbiAgICBqczogJ2luc3RydW1lbnQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ0luc3RydW1lbnRFbGVtZW50JylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgVGltZVJhbmdlOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdlbmRUaW1lJyxcbiAgICBqczogJ2VuZFRpbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCBEYXRlKVxuICB9LCB7XG4gICAganNvbjogJ3N0YXJ0VGltZScsXG4gICAganM6ICdzdGFydFRpbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCBEYXRlKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBWYWx1YXRpb246IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0NVUlJFTkNZX0lTT0NPREUnLFxuICAgIGpzOiAnQ1VSUkVOQ1lfSVNPQ09ERScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2V4cGlyeVRpbWUnLFxuICAgIGpzOiAnZXhwaXJ5VGltZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIERhdGUpXG4gIH0sIHtcbiAgICBqc29uOiAncHJpY2UnLFxuICAgIGpzOiAncHJpY2UnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAzLjE0KVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ3ZhbHVhdGlvblRpbWUnLFxuICAgIGpzOiAndmFsdWF0aW9uVGltZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIERhdGUpXG4gIH0sIHtcbiAgICBqc29uOiAndmFsdWUnLFxuICAgIGpzOiAndmFsdWUnLFxuICAgIHR5cDogMy4xNFxuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBTdHlsZTogWydiYXInLCAnY2FuZGxlJywgJ2N1c3RvbScsICdoZWF0bWFwJywgJ2hpc3RvZ3JhbScsICdsaW5lJywgJ21vdW50YWluJywgJ3BpZScsICdzY2F0dGVyJywgJ3N0YWNrZWQtYmFyJ11cbn07XG5cbnZhciBJbnRlbnRzO1xuKGZ1bmN0aW9uIChJbnRlbnRzKSB7XG4gIEludGVudHNbXCJTdGFydENhbGxcIl0gPSBcIlN0YXJ0Q2FsbFwiO1xuICBJbnRlbnRzW1wiU3RhcnRDaGF0XCJdID0gXCJTdGFydENoYXRcIjtcbiAgSW50ZW50c1tcIlN0YXJ0RW1haWxcIl0gPSBcIlN0YXJ0RW1haWxcIjtcbiAgSW50ZW50c1tcIlZpZXdBbmFseXNpc1wiXSA9IFwiVmlld0FuYWx5c2lzXCI7XG4gIEludGVudHNbXCJWaWV3Q2hhcnRcIl0gPSBcIlZpZXdDaGFydFwiO1xuICBJbnRlbnRzW1wiVmlld0NvbnRhY3RcIl0gPSBcIlZpZXdDb250YWN0XCI7XG4gIEludGVudHNbXCJWaWV3SG9sZGluZ3NcIl0gPSBcIlZpZXdIb2xkaW5nc1wiO1xuICBJbnRlbnRzW1wiVmlld0luc3RydW1lbnRcIl0gPSBcIlZpZXdJbnN0cnVtZW50XCI7XG4gIEludGVudHNbXCJWaWV3SW50ZXJhY3Rpb25zXCJdID0gXCJWaWV3SW50ZXJhY3Rpb25zXCI7XG4gIEludGVudHNbXCJWaWV3TmV3c1wiXSA9IFwiVmlld05ld3NcIjtcbiAgSW50ZW50c1tcIlZpZXdPcmRlcnNcIl0gPSBcIlZpZXdPcmRlcnNcIjtcbiAgSW50ZW50c1tcIlZpZXdQcm9maWxlXCJdID0gXCJWaWV3UHJvZmlsZVwiO1xuICBJbnRlbnRzW1wiVmlld1F1b3RlXCJdID0gXCJWaWV3UXVvdGVcIjtcbiAgSW50ZW50c1tcIlZpZXdSZXNlYXJjaFwiXSA9IFwiVmlld1Jlc2VhcmNoXCI7XG59KShJbnRlbnRzIHx8IChJbnRlbnRzID0ge30pKTtcblxuZXhwb3J0IHsgQ2hhbm5lbEVycm9yLCBDb250ZXh0VHlwZXMsIENvbnZlcnQsIEludGVudHMsIE9wZW5FcnJvciwgUmVzb2x2ZUVycm9yLCBSZXN1bHRFcnJvciwgU3R5bGUsIGFkZENvbnRleHRMaXN0ZW5lciwgYWRkSW50ZW50TGlzdGVuZXIsIGJyb2FkY2FzdCwgY29tcGFyZVZlcnNpb25OdW1iZXJzLCBjcmVhdGVQcml2YXRlQ2hhbm5lbCwgZmRjM1JlYWR5LCBmaW5kSW5zdGFuY2VzLCBmaW5kSW50ZW50LCBmaW5kSW50ZW50c0J5Q29udGV4dCwgZ2V0QXBwTWV0YWRhdGEsIGdldEN1cnJlbnRDaGFubmVsLCBnZXRJbmZvLCBnZXRPckNyZWF0ZUNoYW5uZWwsIGdldFN5c3RlbUNoYW5uZWxzLCBnZXRVc2VyQ2hhbm5lbHMsIGpvaW5DaGFubmVsLCBqb2luVXNlckNoYW5uZWwsIGxlYXZlQ3VycmVudENoYW5uZWwsIG9wZW4sIHJhaXNlSW50ZW50LCByYWlzZUludGVudEZvckNvbnRleHQsIHZlcnNpb25Jc0F0TGVhc3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZkYzMuZXNtLmpzLm1hcFxuIiwidmFyIGUsdCxyLGE9e2Q6KGUsdCk9Pntmb3IodmFyIHIgaW4gdClhLm8odCxyKSYmIWEubyhlLHIpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtlbnVtZXJhYmxlOiEwLGdldDp0W3JdfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxvPXt9O2EuZChvLHtkcTooKT0+QWRhcHRlckVycm9yLE1TOigpPT5BcGlFcnJvcix4UTooKT0+RXZlbnRFcnJvcixzTzooKT0+aGUsWnU6KCk9PnBlLEkzOigpPT53ZSwkVTooKT0+a2UsaTA6KCk9PnVlLGNYOigpPT5Jbml0aWFsaXphdGlvbkVycm9yLF9XOigpPT5QYXJhbWV0ZXJFcnJvcixVJDooKT0+bCxVNzooKT0+YyxyZDooKT0+bGV9KTtjbGFzcyBBcGlFcnJvciBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGU9XCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZFwiLHQpe3ZhciByO3N1cGVyKGUpLHQmJih0aGlzLmlubmVyRXJyb3I9dCYmdCksdGhpcy5zdGFjaz1udWxsPT09KHI9dGhpcy5zdGFjayl8fHZvaWQgMD09PXI/dm9pZCAwOnIucmVwbGFjZSgvXihcXHcqRXJyb3IpLyxgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9YCl9fWNsYXNzIEFkYXB0ZXJFcnJvciBleHRlbmRzIEFwaUVycm9ye2NvbnN0cnVjdG9yKGU9XCJGYWlsZWQgdG8gZXhlY3V0ZSBhZGFwdGVyIGZ1bmN0aW9uXCIsdCl7c3VwZXIoZSx0KX19Y2xhc3MgRXZlbnRFcnJvciBleHRlbmRzIEFwaUVycm9ye2NvbnN0cnVjdG9yKGU9XCJGYWlsZWQgdG8gcmFpc2UgZXZlbnRcIix0KXtzdXBlcihlLHQpfX1jbGFzcyBJbml0aWFsaXphdGlvbkVycm9yIGV4dGVuZHMgQXBpRXJyb3J7Y29uc3RydWN0b3IoZT1cIkZhaWxlZCB0byBpbml0aWFsaXplIGFkYXB0ZXJcIix0KXtzdXBlcihlLHQpfX1jbGFzcyBQYXJhbWV0ZXJFcnJvciBleHRlbmRzIEFwaUVycm9ye2NvbnN0cnVjdG9yKGU9XCJJbnZhbGlkIHBhcmFtZXRlciB2YWx1ZVwiLHQpe3N1cGVyKGUsdCl9fSFmdW5jdGlvbihlKXtlLkFjdGl2YXRlV29ya2Jvb2s9XCJBY3RpdmF0ZVdvcmtib29rXCIsZS5BY3RpdmF0ZVdvcmtzaGVldD1cIkFjdGl2YXRlV29ya3NoZWV0XCIsZS5BZGRXb3Jrc2hlZXQ9XCJBZGRXb3Jrc2hlZXRcIixlLkNhbGN1bGF0ZVdvcmtib29rPVwiQ2FsY3VsYXRlV29ya2Jvb2tcIixlLkNhbGN1bGF0ZVdvcmtzaGVldD1cIkNhbGN1bGF0ZVdvcmtzaGVldFwiLGUuQ2xlYXJBbGxDZWxscz1cIkNsZWFyQWxsQ2VsbHNcIixlLkNsZWFyQWxsQ2VsbFZhbHVlcz1cIkNsZWFyQWxsQ2VsbFZhbHVlc1wiLGUuQ2xlYXJBbGxDZWxsRm9ybWF0dGluZz1cIkNsZWFyQWxsQ2VsbEZvcm1hdHRpbmdcIixlLkNsZWFyQ2VsbFZhbHVlcz1cIkNsZWFyQ2VsbFZhbHVlc1wiLGUuQ2xlYXJDZWxsRm9ybWF0dGluZz1cIkNsZWFyQ2VsbEZvcm1hdHRpbmdcIixlLkNsZWFyQ2VsbHM9XCJDbGVhckNlbGxzXCIsZS5DbG9zZVdvcmtib29rPVwiQ2xvc2VXb3JrYm9va1wiLGUuQ3JlYXRlV29ya2Jvb2s9XCJDcmVhdGVXb3JrYm9va1wiLGUuRGVsZXRlV29ya3NoZWV0PVwiRGVsZXRlV29ya3NoZWV0XCIsZS5EZXJlZ2lzdGVyRXZlbnQ9XCJEZXJlZ2lzdGVyRXZlbnRcIixlLkV2ZW50RmlyZWQ9XCJFdmVudEZpcmVkXCIsZS5HZXRDYWxjdWxhdGlvbk1vZGU9XCJHZXRDYWxjdWxhdGlvbk1vZGVcIixlLkdldENlbGxzPVwiR2V0Q2VsbHNcIixlLkdldFdvcmtib29rQnlJZD1cIkdldFdvcmtib29rQnlJZFwiLGUuR2V0V29ya2Jvb2tOYW1lPVwiR2V0V29ya2Jvb2tOYW1lXCIsZS5HZXRXb3JrYm9va3M9XCJHZXRXb3JrYm9va3NcIixlLkdldFdvcmtzaGVldEJ5SWQ9XCJHZXRXb3Jrc2hlZXRCeUlkXCIsZS5HZXRXb3Jrc2hlZXRCeU5hbWU9XCJHZXRXb3Jrc2hlZXRCeU5hbWVcIixlLkdldFdvcmtzaGVldE5hbWU9XCJHZXRXb3Jrc2hlZXROYW1lXCIsZS5HZXRXb3Jrc2hlZXRzPVwiR2V0V29ya3NoZWV0c1wiLGUuTG9nTWVzc2FnZT1cIkxvZ01lc3NhZ2VcIixlLk9wZW5Xb3JrYm9vaz1cIk9wZW5Xb3JrYm9va1wiLGUuUHJvdGVjdFdvcmtzaGVldD1cIlByb3RlY3RXb3Jrc2hlZXRcIixlLlJlZ2lzdGVyRXZlbnQ9XCJSZWdpc3RlckV2ZW50XCIsZS5TYXZlV29ya2Jvb2s9XCJTYXZlV29ya2Jvb2tcIixlLlNhdmVXb3JrYm9va0FzPVwiU2F2ZVdvcmtib29rQXNcIixlLlNldENlbGxWYWx1ZXM9XCJTZXRDZWxsVmFsdWVzXCIsZS5TZXRDZWxsRm9ybWF0dGluZz1cIlNldENlbGxGb3JtYXR0aW5nXCIsZS5TZXRDZWxsTmFtZT1cIlNldENlbGxOYW1lXCIsZS5TZXRXb3Jrc2hlZXROYW1lPVwiU2V0V29ya3NoZWV0TmFtZVwiLGUuRmlsdGVyQ2VsbHM9XCJGaWx0ZXJDZWxsc1wiLGUuUXVpdEFwcGxpY2F0aW9uPVwiUXVpdEFwcGxpY2F0aW9uXCJ9KGV8fChlPXt9KSksZnVuY3Rpb24oZSl7ZS5BY3RpdmF0ZT1cIkFjdGl2YXRlXCIsZS5BZGRXb3Jrc2hlZXQ9XCJBZGRXb3Jrc2hlZXRcIixlLkNoYW5nZT1cIkNoYW5nZVwiLGUuQ2xvc2U9XCJDbG9zZVwiLGUuRGVhY3RpdmF0ZT1cIkRlYWN0aXZhdGVcIixlLkRlbGV0ZVdvcmtzaGVldD1cIkRlbGV0ZVdvcmtzaGVldFwifSh0fHwodD17fSkpLGZ1bmN0aW9uKGUpe2UuV29ya2Jvb2s9XCJXb3JrYm9va1wiLGUuV29ya3NoZWV0PVwiV29ya3NoZWV0XCJ9KHJ8fChyPXt9KSk7Y29uc3Qgbj1cIjEuNC4xXCI7bGV0IHM9ITE7Y29uc3QgaT1cIltAb3BlbmZpbi9leGNlbF1cIixsPSgpPT57cz0hMX0sYz0oKT0+e3M9ITAsaChgdiR7bn1gKX0sZD0oZSx0KT0+e3MmJihlLmlubmVyRXJyb3I/Y29uc29sZS5lcnJvcih0P2Ake2l9ICR7dH1gOmksZSxcIlxcblxcbihpbm5lcilcIixlLmlubmVyRXJyb3IpOmNvbnNvbGUuZXJyb3IodD9gJHtpfSAke3R9YDppLGUpKX0saD0oLi4uZSk9PntzJiZjb25zb2xlLmxvZyhpLC4uLmUpfSxwPSguLi5lKT0+e3MmJmNvbnNvbGUud2FybihpLC4uLmUpfTtcInVuZGVmaW5lZFwiPT10eXBlb2YgZmluJiZPYmplY3QuYXNzaWduKHdpbmRvdyx7ZmluOnt9fSksT2JqZWN0LmFzc2lnbihmaW4se0ludGVncmF0aW9uczp7RXhjZWw6e2VuYWJsZUxvZ2dpbmc6YyxkaXNhYmxlTG9nZ2luZzpsfX19KTtjb25zdCB3PSgpPT5cInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZywoZT0+e2NvbnN0IHQ9MTYqTWF0aC5yYW5kb20oKXwwO3JldHVybihcInhcIj09PWU/dDozJnR8OCkudG9TdHJpbmcoMTYpfSkpLGs9bmV3IE1hcCx1PSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBBY3RpdmF0ZSAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkFjdGl2YXRlV29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxnPSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBDYWxjdWxhdGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DYWxjdWxhdGVXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LG09KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IENsZWFyIGFsbCBjZWxsIHZhbHVlcyAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQWxsQ2VsbFZhbHVlcyxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0seT0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogQ2xlYXIgYWxsIGNlbGwgZm9ybWF0dGluZyAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQWxsQ2VsbEZvcm1hdHRpbmcscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEM9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IENsZWFyIGFsbCBjZWxscyAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQWxsQ2VsbHMscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LHY9KHQscik9PmFzeW5jIGE9PntoKGBXb3Jrc2hlZXQ6IENsZWFyIGNlbGwgdmFsdWVzOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgKTtjb25zdCBvPXtjZWxsUmFuZ2U6YSxvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQ2VsbFZhbHVlcyxvKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sRT0odCxyKT0+YXN5bmMgYT0+e2goYFdvcmtzaGVldDogQ2xlYXIgY2VsbCBmb3JtYXR0aW5nOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgKTtjb25zdCBvPXtjZWxsUmFuZ2U6YSxvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQ2VsbEZvcm1hdHRpbmcsbyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFc9KHQscik9PmFzeW5jIGE9PntoKGBXb3Jrc2hlZXQ6IENsZWFyIGNlbGxzOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgKTtjb25zdCBvPXtjZWxsUmFuZ2U6YSxvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQ2VsbHMsbyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEE9KGUsdCk9PihyLGEsbz0xZTMpPT57aWYoTnVtYmVyLmlzTmFOKG8pfHxvPD0wKXRocm93IG5ldyBBcGlFcnJvcihcIlVwZGF0ZSBpbnRlcnZhbCBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO2NvbnN0IG49dygpO2goYFdvcmtzaGVldDogQ3JlYXRlIGRhdGEgc3RyZWFtOyBzdHJlYW1JZDoke259OyBjZWxsUmFuZ2U6JHtyfTsgdXBkYXRlSW50ZXJ2YWw6JHtvfSAoJHt0fSlgKTtjb25zdCBzPXtjbG9zZTooKT0+e2goYENsb3NlZCBzdHJlYW0gKCR7bn0pYCksKGU9Pnt2YXIgdDt0cnl7Y29uc3Qgcj1rLmdldChlKTtpZighcil0aHJvdyBuZXcgQXBpRXJyb3IoYFVuYWJsZSB0byBmaW5kIHJlZ2lzdGVyZWQgZGF0YSBzdHJlYW0gd2l0aCBpZCAke2V9YCk7dm9pZCAwIT09KG51bGwhPT0odD1yLnRpbWVyKSYmdm9pZCAwIT09dD90OnZvaWQgMCkmJkYoZSksay5kZWxldGUoZSl9Y2F0Y2goZSl7dGhyb3cgZChlKSxlfX0pKG4pfSxjZWxsUmFuZ2U6cixpZDpuLHN0YXJ0OigpPT57aChgU3RhcnRlZCBzdHJlYW1pbmcgKCR7bn0pYCksVShuLGEsZSx0KX0sc3RvcDooKT0+e2goYFN0b3BwZWQgc3RyZWFtaW5nICgke259KWApLEYobil9LHVwZGF0ZUludGVydmFsOm8sd29ya3NoZWV0SWQ6dH07cmV0dXJuIGsuc2V0KG4se2RhdGFTdHJlYW06c30pLHN9LGI9KGUsdCxhLG8pPT57Y29uc3Qgbj17ZXZlbnRUYXJnZXQ6ci5Xb3Jrc2hlZXQsb2JqZWN0SWQ6dH07cmV0dXJue29iamVjdElkOnQsYWN0aXZhdGU6dShlLHQpLGFkZEV2ZW50TGlzdGVuZXI6YShlLG4pLGNhbGN1bGF0ZTpnKGUsdCksY2xlYXJBbGxDZWxsRm9ybWF0dGluZzp5KGUsdCksY2xlYXJBbGxDZWxsczpDKGUsdCksY2xlYXJBbGxDZWxsVmFsdWVzOm0oZSx0KSxjbGVhckNlbGxGb3JtYXR0aW5nOkUoZSx0KSxjbGVhckNlbGxzOlcoZSx0KSxjbGVhckNlbGxWYWx1ZXM6dihlLHQpLGNyZWF0ZURhdGFTdHJlYW06QShlLHQpLGRlbGV0ZTpmKGUsdCksZmlsdGVyQ2VsbHM6JChlLHQpLGdldENlbGxzOngoZSx0KSxnZXROYW1lOkcoZSx0KSxwcm90ZWN0OkkoZSx0KSxyZW1vdmVFdmVudExpc3RlbmVyOm8oZSksc2V0Q2VsbEZvcm1hdHRpbmc6RChlLHQpLHNldENlbGxOYW1lOlMoZSx0KSxzZXRDZWxsVmFsdWVzOk4oZSx0KSxzZXROYW1lOlIoZSx0KX19LGY9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IERlbGV0ZSAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkRlbGV0ZVdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sJD0odCxyKT0+YXN5bmMoYSxvLG4scyxpLGw9ITApPT57aChgV29ya3NoZWV0OiBGaWx0ZXIgY2VsbHM7IGNlbGxSYW5nZToke2F9ICgke3J9KWAse2NvbHVtbkluZGV4Om8sZmlsdGVyT3BlcmF0b3I6bixjcml0ZXJpYTE6cyxjcml0ZXJpYTI6aSx2aXNpYmxlRHJvcERvd246bH0pO2NvbnN0IGM9e2NlbGxSYW5nZTphLGNyaXRlcmlhMTpzLGNyaXRlcmlhMjppLGNvbHVtbkluZGV4Om8sZmlsdGVyT3BlcmF0b3I6bixvYmplY3RJZDpyLHZpc2libGVEcm9wRG93bjpsfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkZpbHRlckNlbGxzLGMpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSx4PSh0LHIpPT5hc3luYyBhPT57aChgV29ya3NoZWV0OiBHZXQgY2VsbHM7IGNlbGxSYW5nZToke2F9ICgke3J9KWApO2NvbnN0IG89e2NlbGxSYW5nZTphLG9iamVjdElkOnJ9O2xldCBuPVtdO3RyeXtuPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRDZWxscyxvKSxoKGAke2F9OmAsbil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gbn0sRz0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogR2V0IG5hbWUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0TmFtZSxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sST0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogUHJvdGVjdCAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlByb3RlY3RXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEQ9KHQscik9PmFzeW5jKGEsbyk9PntoKGBXb3Jrc2hlZXQ6IFNldCBjZWxsIGZvcm1hdHRpbmc7IGNlbGxSYW5nZToke2F9ICgke3J9KWAsbyk7Y29uc3Qgbj17Y2VsbFJhbmdlOmEsZm9ybWF0dGluZzpvLG9iamVjdElkOnJ9O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuU2V0Q2VsbEZvcm1hdHRpbmcsbil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFM9KHQscik9PmFzeW5jKGEsbyk9Pntjb25zdCBuPW8udHJpbSgpO2xldCBzO2lmKCFuKXRocm93IHM9bmV3IFBhcmFtZXRlckVycm9yKFwiQ2VsbCByYW5nZSBuYW1lIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmdcIiksZChzKSxzO2lmKG4ubGVuZ3RoPjI1NSl0aHJvdyBzPW5ldyBQYXJhbWV0ZXJFcnJvcihcIkNlbGwgcmFuZ2UgbmFtZSBtdXN0IGJlIDI1NSBjaGFyYWN0ZXJzIG9yIGxlc3NcIiksZChzKSxzO2lmKC9bXmEtekEtWjAtOV8uP1xcXFxcIiddLy50ZXN0KG4pKXRocm93IHM9bmV3IFBhcmFtZXRlckVycm9yKFwiQ2VsbCByYW5nZSBuYW1lIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyc1wiKSxkKHMpLHM7aWYoL15cXGR8XFxkJC8udGVzdChuKSl0aHJvdyBzPW5ldyBQYXJhbWV0ZXJFcnJvcihcIkNlbGwgcmFuZ2UgbmFtZSBtdXN0IG5vdCBzdGFydCBvciBlbmQgd2l0aCBhIG51bWJlclwiKSxkKHMpLHM7aChgV29ya3NoZWV0OiBTZXQgY2VsbCBuYW1lOyBjZWxsUmFuZ2U6JHthfTsgbmV3Q2VsbFJhbmdlTmFtZToke259ICgke3J9KWApO2NvbnN0IGk9e2NlbGxSYW5nZTphLG5hbWU6bixvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlNldENlbGxOYW1lLGkpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxOPSh0LHIpPT5hc3luYyhhLG8pPT57aChgV29ya3NoZWV0OiBTZXQgY2VsbCB2YWx1ZXM7IGNlbGxSYW5nZToke2F9ICgke3J9KWAsbyk7Y29uc3Qgbj17Y2VsbFJhbmdlOmEsb2JqZWN0SWQ6cix2YWx1ZXNNYXA6b307dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5TZXRDZWxsVmFsdWVzLG4pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxSPSh0LHIpPT5hc3luYyBhPT57Y29uc3Qgbz1hLnRyaW0oKTtsZXQgbjtpZighbyl0aHJvdyBuPW5ldyBQYXJhbWV0ZXJFcnJvcihcIldvcmtzaGVldCBuYW1lIGNhbm5vdCBiZSBhbiBlbXB0eSBzdHJpbmdcIiksZChuKSxuO2lmKG8ubGVuZ3RoPjMxKXRocm93IG49bmV3IFBhcmFtZXRlckVycm9yKFwiV29ya3NoZWV0IG5hbWUgbXVzdCBiZSAzMSBjaGFyYWN0ZXJzIG9yIGxlc3NcIiksZChuKSxuO2goYFdvcmtzaGVldDogU2V0IG5hbWU7IG5ld1dvcmtzaGVldE5hbWU6JHtvfSAoJHtyfSlgKTtjb25zdCBzPXtuZXdXb3Jrc2hlZXROYW1lOm8sb2JqZWN0SWQ6cn07dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuU2V0V29ya3NoZWV0TmFtZSxzKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sVT0oZSx0LHIsYSk9Pnt2YXIgbzt0cnl7Y29uc3Qgbj1rLmdldChlKTtpZighbil0aHJvdyBuZXcgQXBpRXJyb3IoYFVuYWJsZSB0byBmaW5kIHJlZ2lzdGVyZWQgZGF0YSBzdHJlYW0gd2l0aCBpZCAke2V9YCk7dm9pZCAwIT09KG51bGwhPT0obz1uLnRpbWVyKSYmdm9pZCAwIT09bz9vOnZvaWQgMCkmJkYoZSk7Y29uc3R7Y2VsbFJhbmdlOnMsdXBkYXRlSW50ZXJ2YWw6aX09bi5kYXRhU3RyZWFtLGw9YXN5bmMoKT0+e2NvbnN0IG89YXdhaXQgdCgpO3RyeXthd2FpdCBOKHIsYSkocyxbW29dXSl9Y2F0Y2godCl7cChgVW5hYmxlIHRvIHVwZGF0ZSBjZWxsIHJhbmdlIGZvciBzdHJlYW0gd2l0aCBpZCAke2V9OiAke251bGw9PXQ/dm9pZCAwOnQubWVzc2FnZX1gKX19LGM9d2luZG93LnNldEludGVydmFsKGwsaSk7bi50aW1lcj1jfWNhdGNoKGUpe3Rocm93IGQoZSksZX19LEY9ZT0+e3ZhciB0O3RyeXtjb25zdCByPWsuZ2V0KGUpO2lmKCFyKXRocm93IG5ldyBBcGlFcnJvcihgVW5hYmxlIHRvIGZpbmQgcmVnaXN0ZXJlZCBkYXRhIHN0cmVhbSB3aXRoIGlkICR7ZX1gKTtpZih2b2lkIDA9PT0obnVsbCE9PSh0PXIudGltZXIpJiZ2b2lkIDAhPT10P3Q6dm9pZCAwKSlyZXR1cm47d2luZG93LmNsZWFySW50ZXJ2YWwoci50aW1lciksci50aW1lcj12b2lkIDB9Y2F0Y2goZSl7dGhyb3cgZChlKSxlfX0sTD1uZXcgTWFwLFA9KHIsYSk9PmFzeW5jKG8sbik9PntpZighYXx8IWEuZXZlbnRUYXJnZXR8fCFhLm9iamVjdElkKXtjb25zdCBlPW5ldyBFdmVudEVycm9yKFwiRXZlbnQgcmVnaXN0cmF0aW9uIG1pc3NpbmcgcmVxdWlyZWQgdmFsdWVzXCIpO3Rocm93IGQoZSksZX1jb25zdCBzPU9iamVjdC5rZXlzKHQpLmZpbmQoKGU9PmUudG9Mb3dlckNhc2UoKT09PW8udG9Mb3dlckNhc2UoKSkpO2lmKCFzKXtjb25zdCBlPW5ldyBFdmVudEVycm9yKGBVbnN1cHBvcnRlZCBldmVudCBuYW1lOiAke299YCk7dGhyb3cgZChlKSxlfWEuZXZlbnROYW1lPXRbc10saChcIlJlZ2lzdGVyaW5nIGV2ZW50XCIsYSk7dHJ5e2NvbnN0IHQ9YXdhaXQgci5kaXNwYXRjaChlLlJlZ2lzdGVyRXZlbnQsYSk7TC5zZXQodCxuKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yKHZvaWQgMCxlKX19LGo9dD0+YXN5bmMgcj0+e2xldCBhO2Zvcihjb25zdFtlLHRdb2YgTClpZih0PT09cil7YT1lO2JyZWFrfWlmKCFhKXRocm93IG5ldyBFdmVudEVycm9yO2goXCJEZXJlZ2lzdGVyaW5nIGV2ZW50OlwiLGEpO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuRGVyZWdpc3RlckV2ZW50LGEpLEwuZGVsZXRlKGEpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxPPShlLGEsbyk9Pnt2YXIgbixzO3N3aXRjaChvLmV2ZW50VGFyZ2V0KXtjYXNlIHIuV29ya2Jvb2s6c3dpdGNoKG51bGw9PT0obj1vLmV2ZW50TmFtZSl8fHZvaWQgMD09PW4/dm9pZCAwOm4udG9VcHBlckNhc2UoKSl7Y2FzZSB0LkFjdGl2YXRlLnRvVXBwZXJDYXNlKCk6Y2FzZSB0LkNsb3NlLnRvVXBwZXJDYXNlKCk6Y2FzZSB0LkRlYWN0aXZhdGUudG9VcHBlckNhc2UoKTpyZXR1cm4gZSgpO2Nhc2UgdC5BZGRXb3Jrc2hlZXQudG9VcHBlckNhc2UoKTpjYXNlIHQuRGVsZXRlV29ya3NoZWV0LnRvVXBwZXJDYXNlKCk6cmV0dXJuIGUoYihhLG8ud29ya3NoZWV0T2JqZWN0SWQsUCxqKSk7ZGVmYXVsdDp0aHJvdyBuZXcgRXZlbnRFcnJvcihgVW5leHBlY3RlZCB3b3JrYm9vayBldmVudDogJHtvLmV2ZW50TmFtZX1gKX1jYXNlIHIuV29ya3NoZWV0OnN3aXRjaChudWxsPT09KHM9by5ldmVudE5hbWUpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzLnRvVXBwZXJDYXNlKCkpe2Nhc2UgdC5BY3RpdmF0ZS50b1VwcGVyQ2FzZSgpOnJldHVybiBlKCk7Y2FzZSB0LkNoYW5nZS50b1VwcGVyQ2FzZSgpOnJldHVybiBlKG8uY2hhbmdlZENlbGxzKTtjYXNlIHQuRGVhY3RpdmF0ZS50b1VwcGVyQ2FzZSgpOnJldHVybiBlKCk7ZGVmYXVsdDp0aHJvdyBuZXcgRXZlbnRFcnJvcihgVW5leHBlY3RlZCB3b3Jrc2hlZXQgZXZlbnQ6ICR7by5ldmVudE5hbWV9YCl9ZGVmYXVsdDp0aHJvdyBuZXcgRXZlbnRFcnJvcihgVW5leHBlY3RlZCBldmVudCB0YXJnZXQ6ICR7by5ldmVudFRhcmdldH1gKX19LEI9KHQscik9PmFzeW5jKCk9PntoKGBXb3JrYm9vazogQWN0aXZhdGUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuQWN0aXZhdGVXb3JrYm9vayxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sVj0odCxyLGEsbyk9PmFzeW5jKCk9PntsZXQgbjtoKGBXb3JrYm9vazogQWRkIHdvcmtzaGVldCAoJHtyfSlgKTt0cnl7bj1hd2FpdCB0LmRpc3BhdGNoKGUuQWRkV29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIGIodCxuLGEsbyl9LE09KHQscik9PmFzeW5jKCk9PntoKGBXb3JrYm9vazogQ2FsY3VsYXRlICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2FsY3VsYXRlV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LHo9KHQscik9PmFzeW5jKCk9PntoKGBXb3JrYm9vazogQ2xvc2UgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuQ2xvc2VXb3JrYm9vayxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sVD0oZSx0LGEsbyk9Pntjb25zdCBuPXtldmVudFRhcmdldDpyLldvcmtib29rLG9iamVjdElkOnR9O3JldHVybntvYmplY3RJZDp0LGFjdGl2YXRlOkIoZSx0KSxhZGRXb3Jrc2hlZXQ6VihlLHQsYSxvKSxhZGRFdmVudExpc3RlbmVyOmEoZSxuKSxjYWxjdWxhdGU6TShlLHQpLGNsb3NlOnooZSx0KSxnZXRDYWxjdWxhdGlvbk1vZGU6UShlLHQpLGdldE5hbWU6SChlLHQpLGdldFdvcmtzaGVldEJ5TmFtZTpfKGUsdCxhLG8pLGdldFdvcmtzaGVldHM6cShlLHQsYSxvKSxyZW1vdmVFdmVudExpc3RlbmVyOm8oZSksc2F2ZTpKKGUsdCksc2F2ZUFzOksoZSx0KX19LFE9KHQscik9PmFzeW5jKCk9PntoKFwiV29ya2Jvb2s6IEdldCBjYWxjdWxhdGlvbiBtb2RlXCIpO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkdldENhbGN1bGF0aW9uTW9kZSxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sSD0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtib29rOiBHZXQgbmFtZSAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3JrYm9va05hbWUscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LF89KHQscixhLG8pPT5hc3luYyBuPT57bGV0IHM7aChgV29ya2Jvb2s6IEdldCB3b3Jrc2hlZXQgYnkgbmFtZTogJHtufSAoJHtyfSlgKTt0cnl7aWYocz1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0QnlOYW1lLHtvYmplY3RJZDpyLHdvcmtzaGVldE5hbWU6bn0pLG51bGw9PT1zKXJldHVybiBudWxsfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIGIodCxzLGEsbyl9LHE9KHQscixhLG8pPT5hc3luYygpPT57bGV0IG47aChgV29ya2Jvb2s6IEdldCB3b3Jrc2hlZXRzICgke3J9KWApO3RyeXtuPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3Jrc2hlZXRzLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIG4ubWFwKChlPT5iKHQsZSxhLG8pKSl9LEo9KHQscik9PmFzeW5jKCk9PntoKGBXb3JrYm9vazogU2F2ZSAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5TYXZlV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEs9KHQscik9PmFzeW5jIGE9PntoKGBXb3JrYm9vazogU2F2ZSBhczsgZmlsZVBhdGg6JHthfSAoJHtyfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5TYXZlV29ya2Jvb2tBcyx7ZmlsZVBhdGg6YSxvYmplY3RJZDpyfSl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFg9dD0+YXN5bmMoKT0+e2xldCByO2goXCJBcHBsaWNhdGlvbjogQ3JlYXRlIHdvcmtib29rXCIpO3RyeXtyPWF3YWl0IHQuZGlzcGF0Y2goZS5DcmVhdGVXb3JrYm9vayl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gVCh0LHIsUCxqKX0sWj10PT5hc3luYyByPT57bGV0IGE7aChgQXBwbGljYXRpb246IEdldCB3b3JrYm9vazsgaWQ6JHtyfWApO3RyeXthPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3JrYm9va0J5SWQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gVCh0LGEsUCxqKX0sWT10PT5hc3luYygpPT57bGV0IHI7aChcIkFwcGxpY2F0aW9uOiBHZXQgd29ya2Jvb2tzXCIpO3RyeXtyPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3JrYm9va3MpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIHIubWFwKChlPT5UKHQsZSxQLGopKSl9LGVlPXQ9PmFzeW5jIHI9PntoKGBBcHBsaWNhdGlvbjogR2V0IHdvcmtzaGVldDsgaWQ6JHtyfWApO3RyeXtyPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3Jrc2hlZXRCeUlkLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIGIodCxyLFAsail9LHRlPXQ9PmFzeW5jIHI9PntsZXQgYTtoKGBBcHBsaWNhdGlvbjogT3BlbiB3b3JrYm9vazsgZmlsZVBhdGg6JHtyfWApO3RyeXthPWF3YWl0IHQuZGlzcGF0Y2goZS5PcGVuV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn1yZXR1cm4gVCh0LGEsUCxqKX0scmU9dD0+YXN5bmMocj0hMCk9PntoKGBBcHBsaWNhdGlvbjogUXVpdDsgZGlzcGxheUFsZXJ0czoke3J9YCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuUXVpdEFwcGxpY2F0aW9uLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fTt2YXIgYWUsb2U7IWZ1bmN0aW9uKGUpe2UuRXhjZWxBcHBsaWNhdGlvbj1cIkVYQ0VMLUFQUFwifShhZXx8KGFlPXt9KSksZnVuY3Rpb24oZSl7ZVtlLkluZm89MV09XCJJbmZvXCIsZVtlLldhcm49Ml09XCJXYXJuXCIsZVtlLkVycm9yPTNdPVwiRXJyb3JcIn0ob2V8fChvZT17fSkpO2NvbnN0IG5lPVwiZXhjZWwtYWRhcHRlclwiLHNlPXcoKTtsZXQgaWU7Y29uc3QgbGU9YXN5bmModD0hMSk9Pnt0cnl7YXdhaXQoYXN5bmMgZT0+e3RyeXtoKFwiUmVnaXN0ZXJpbmcgdXNhZ2VcIiksYXdhaXQgZmluLlN5c3RlbS5yZWdpc3RlclVzYWdlKHt0eXBlOlwiaW50ZWdyYXRpb24tZmVhdHVyZVwiLGRhdGE6e2FwaVZlcnNpb246bixjb21wb25lbnROYW1lOmV9fSl9Y2F0Y2godCl7cChgVW5hYmxlIHRvIHJlZ2lzdGVyIHVzYWdlIGZvciBmZWF0dXJlICR7ZX06ICR7bnVsbD09dD92b2lkIDA6dC5tZXNzYWdlfWApfX0pKGFlLkV4Y2VsQXBwbGljYXRpb24pO3thd2FpdChhc3luYygpPT57dmFyIGU7Y29uc3QgdD1udWxsPT09KGU9KGF3YWl0IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50U3luYygpLmdldE1hbmlmZXN0KCkpLmFwcEFzc2V0cyl8fHZvaWQgMD09PWU/dm9pZCAwOmUuZmluZCgoZT0+ZS5hbGlhcz09PW5lKSk7aWYodClyZXR1cm4gdm9pZCBwKFwiRGV0ZWN0ZWQgYWRhcHRlciBwYWNrYWdlIGluIGFwcCBtYW5pZmVzdCBhcHBBc3NldHNcIix0KTtpZihhd2FpdCBkZSgpKXJldHVybiB2b2lkIGgoXCJVc2luZyBleGlzdGluZyBhZGFwdGVyIHBhY2thZ2VcIik7Y29uc3Qgcj17YWxpYXM6bmUsc3JjOmBodHRwczovL2Nkbi5vcGVuZmluLmNvL3JlbGVhc2UvaW50ZWdyYXRpb25zL2V4Y2VsLyR7bn0vT3BlbkZpbi5FeGNlbC56aXBgLHRhcmdldDpcIk9wZW5GaW4uRXhjZWwuZXhlXCIsdmVyc2lvbjpufTtoKFwiRG93bmxvYWRpbmcgYWRhcHRlciBwYWNrYWdlXCIscik7dHJ5e2F3YWl0IGZpbi5TeXN0ZW0uZG93bmxvYWRBc3NldChyLCgoKT0+e30pKX1jYXRjaChlKXt0aHJvdyBkKFwiVW5hYmxlIHRvIGRvd25sb2FkIGFkYXB0ZXIgcGFja2FnZVwiKSxlfX0pKCk7Y29uc3R7c2VjdXJpdHlSZWFsbTplLHBvcnQ6cn09YXdhaXQgZmluLlN5c3RlbS5nZXRSdW50aW1lSW5mbygpO2xldHtsaWNlbnNlS2V5OmF9PWF3YWl0IGZpbi5BcHBsaWNhdGlvbi5nZXRDdXJyZW50U3luYygpLmdldE1hbmlmZXN0KCk7YT1udWxsIT1hP2E6XCJOT19MSUNFTlNFX0tFWVwiO2NvbnN0IG89ZmluLm1lLnV1aWQ7aChcIkluaXRpYWxpemluZyBhZGFwdGVyXCIse2FkYXB0ZXJMb2dnaW5nRW5hYmxlZDp0LGNoYW5uZWxOYW1lOnNlLGxpY2Vuc2VLZXk6YSxwb3J0OnIsc2VjdXJpdHlSZWFsbTplLHV1aWQ6b30pLGZpbi5TeXN0ZW0ubGF1bmNoRXh0ZXJuYWxQcm9jZXNzKHthbGlhczpuZSxhcmd1bWVudHM6YCR7b30gJHthfSAke3J9ICR7ZX0gJHtzZX0gJHt0fWB9KX1jb25zdCBhPWZpbi5JbnRlckFwcGxpY2F0aW9uQnVzLkNoYW5uZWwuY29ubmVjdChzZSx7cGF5bG9hZDp7dmVyc2lvbjpufX0pLG89bmV3IFByb21pc2UoKGU9PntzZXRUaW1lb3V0KGUsMmU0KX0pKS50aGVuKCgoKT0+e3Rocm93IG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gdG8gYWRhcHRlciB0aW1lZCBvdXRcIil9KSk7aWU9YXdhaXQgUHJvbWlzZS5yYWNlKFthLG9dKSxoKGBDb25uZWN0ZWQgdG8gYWRhcHRlciAke2llLnByb3ZpZGVySWRlbnRpdHkudXVpZH0gb24gY2hhbm5lbCAke3NlfWApLGllLnJlZ2lzdGVyKGUuTG9nTWVzc2FnZSxjZSksaWUucmVnaXN0ZXIoZS5FdmVudEZpcmVkLChyPWllLGU9Pntjb25zdHtldmVudFJlZ2lzdHJhdGlvbklkOnR9PWUsYT1MLmdldCh0KTtpZighYSl0aHJvdyBuZXcgRXZlbnRFcnJvcihgTm8gcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lciBmb3VuZCBmb3IgaWQ6ICR7dH1gKTtoKFwiRXZlbnQgcGF5bG9hZCByZWNlaXZlZFwiLGUpLE8oYSxyLGUpfSkpfWNhdGNoKGUpe2NvbnN0IHQ9bmV3IEluaXRpYWxpemF0aW9uRXJyb3Iodm9pZCAwLGUpO3Rocm93IGQodCksdH12YXIgcjtyZXR1cm57YWRhcHRlcjp7Y2hhbm5lbE5hbWU6c2UsdmVyc2lvbjpufSxjcmVhdGVXb3JrYm9vazpYKGllKSxnZXRXb3JrYm9va0J5SWQ6WihpZSksZ2V0V29ya2Jvb2tzOlkoaWUpLGdldFdvcmtzaGVldEJ5SWQ6ZWUoaWUpLG9wZW5Xb3JrYm9vazp0ZShpZSkscXVpdDpyZShpZSl9fSxjZT1lPT57Y29uc3R7bWVzc2FnZTp0LHR5cGU6cn09ZSxhPVwiW2FkYXB0ZXJdXCI7c3dpdGNoKHIpe2Nhc2Ugb2UuRXJyb3I6ZCh0LGEpO2JyZWFrO2Nhc2Ugb2UuSW5mbzpoKGEsdCk7YnJlYWs7Y2FzZSBvZS5XYXJuOnAoYSx0KX19LGRlPWFzeW5jKCk9Pnt0cnl7Y29uc3QgZT1hd2FpdCBmaW4uU3lzdGVtLmdldEFwcEFzc2V0SW5mbyh7YWxpYXM6bmV9KTtyZXR1cm4gZSYmZS52ZXJzaW9uPT09bn1jYXRjaChlKXtyZXR1cm4hMX19O3ZhciBoZSxwZSx3ZSxrZSx1ZTshZnVuY3Rpb24oZSl7ZS5Db250aW51b3VzPVwiQ29udGludW91c1wiLGUuRGFzaD1cIkRhc2hcIixlLkRhc2hEb3Q9XCJEYXNoRG90XCIsZS5EYXNoRG90RG90PVwiRGFzaERvdERvdFwiLGUuRG90PVwiRG90XCIsZS5Eb3VibGU9XCJEb3VibGVcIixlLlNsYW50RGFzaERvdD1cIlNsYW50RGFzaERvdFwiLGUuTm9uZT1cIk5vbmVcIn0oaGV8fChoZT17fSkpLGZ1bmN0aW9uKGUpe2UuQ2VudGVyPVwiQ2VudGVyXCIsZS5DZW50ZXJBY3Jvc3NTZWxlY3Rpb249XCJDZW50ZXJBY3Jvc3NTZWxlY3Rpb25cIixlLkRpc3RyaWJ1dGVkPVwiRGlzdHJpYnV0ZWRcIixlLkZpbGw9XCJGaWxsXCIsZS5HZW5lcmFsPVwiR2VuZXJhbFwiLGUuSnVzdGlmeT1cIkp1c3RpZnlcIixlLkxlZnQ9XCJMZWZ0XCIsZS5SaWdodD1cIlJpZ2h0XCJ9KHBlfHwocGU9e30pKSxmdW5jdGlvbihlKXtlLkF1dG9tYXRpYz1cIkF1dG9tYXRpY1wiLGUuQ2hlY2tlcj1cIkNoZWNrZXJcIixlLkNyaXNzQ3Jvc3M9XCJDcmlzc0Nyb3NzXCIsZS5Eb3duPVwiRG93blwiLGUuR3JheTE2PVwiR3JheTE2XCIsZS5HcmF5MjU9XCJHcmF5MjVcIixlLkdyYXk1MD1cIkdyYXk1MFwiLGUuR3JheTc1PVwiR3JheTc1XCIsZS5HcmF5OD1cIkdyYXk4XCIsZS5HcmlkPVwiR3JpZFwiLGUuSG9yaXpvbnRhbD1cIkhvcml6b250YWxcIixlLkxpZ2h0RG93bj1cIkxpZ2h0RG93blwiLGUuTGlnaHRIb3Jpem9udGFsPVwiTGlnaHRIb3Jpem9udGFsXCIsZS5MaWdodFVwPVwiTGlnaHRVcFwiLGUuTGlnaHRWZXJ0aWNhbD1cIkxpZ2h0VmVydGljYWxcIixlLkxpbmVhckdyYWRpZW50PVwiTGluZWFyR3JhZGllbnRcIixlLk5vbmU9XCJOb25lXCIsZS5SZWN0YW5ndWxhckdyYWRpZW50PVwiUmVjdGFuZ3VsYXJHcmFkaWVudFwiLGUuU2VtaUdyYXk3NT1cIlNlbWlHcmF5NzVcIixlLlNvbGlkPVwiU29saWRcIixlLlVwPVwiVXBcIixlLlZlcnRpY2FsPVwiVmVydGljYWxcIn0od2V8fCh3ZT17fSkpLGZ1bmN0aW9uKGUpe2UuQm90dG9tPVwiQm90dG9tXCIsZS5DZW50ZXI9XCJDZW50ZXJcIixlLkRpc3RyaWJ1dGVkPVwiRGlzdHJpYnV0ZWRcIixlLkp1c3RpZnk9XCJKdXN0aWZ5XCIsZS5Ub3A9XCJUb3BcIn0oa2V8fChrZT17fSkpLGZ1bmN0aW9uKGUpe2UuQW5kPVwiQW5kXCIsZS5Pcj1cIk9yXCIsZS5Ub3AxMEl0ZW1zPVwiVG9wMTBJdGVtc1wiLGUuQm90dG9tMTBJdGVtcz1cIkJvdHRvbTEwSXRlbXNcIixlLlRvcDEwUGVyY2VudD1cIlRvcDEwUGVyY2VudFwiLGUuQm90dG9tMTBQZXJjZW50PVwiQm90dG9tMTBQZXJjZW50XCIsZS5GaWx0ZXJWYWx1ZXM9XCJGaWx0ZXJWYWx1ZXNcIn0odWV8fCh1ZT17fSkpO3ZhciBnZT1vLmRxLG1lPW8uTVMseWU9by54USxDZT1vLnNPLHZlPW8uWnUsRWU9by5JMyxXZT1vLiRVLEFlPW8uaTAsYmU9by5jWCxmZT1vLl9XLCRlPW8uVSQseGU9by5VNyxHZT1vLnJkO2V4cG9ydHtnZSBhcyBBZGFwdGVyRXJyb3IsbWUgYXMgQXBpRXJyb3IseWUgYXMgRXZlbnRFcnJvcixDZSBhcyBFeGNlbENlbGxCb3JkZXJMaW5lU3R5bGUsdmUgYXMgRXhjZWxDZWxsSG9yaXpvbnRhbEFsaWdubWVudCxFZSBhcyBFeGNlbENlbGxQYXR0ZXJuLFdlIGFzIEV4Y2VsQ2VsbFZlcnRpY2FsQWxpZ25tZW50LEFlIGFzIEV4Y2VsRmlsdGVyT3BlcmF0b3IsYmUgYXMgSW5pdGlhbGl6YXRpb25FcnJvcixmZSBhcyBQYXJhbWV0ZXJFcnJvciwkZSBhcyBkaXNhYmxlTG9nZ2luZyx4ZSBhcyBlbmFibGVMb2dnaW5nLEdlIGFzIGdldEV4Y2VsQXBwbGljYXRpb259OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0Q3VycmVudENoYW5uZWwgfSBmcm9tIFwiQGZpbm9zL2ZkYzNcIjtcbmltcG9ydCB7XG5cdHR5cGUgQ2VsbCxcblx0dHlwZSBFeGNlbEFwcGxpY2F0aW9uLFxuXHR0eXBlIEV4Y2VsV29ya2Jvb2ssXG5cdHR5cGUgRXhjZWxXb3Jrc2hlZXQsXG5cdGdldEV4Y2VsQXBwbGljYXRpb25cbn0gZnJvbSBcIkBvcGVuZmluL2V4Y2VsXCI7XG5cbmNvbnN0IEtOT1dOX0lOU1RSVU1FTlRTID0gW1wiVFNMQVwiLCBcIk1TRlRcIiwgXCJBQVBMXCJdO1xuXG5sZXQgZXhjZWw6IEV4Y2VsQXBwbGljYXRpb24gfCB1bmRlZmluZWQ7XG5sZXQgb3Blbldvcmtib29rczpcblx0fCB7XG5cdFx0XHRib29rOiBFeGNlbFdvcmtib29rO1xuXHRcdFx0bmFtZTogc3RyaW5nO1xuXHQgIH1bXVxuXHR8IHVuZGVmaW5lZDtcbmxldCBzZWxlY3RlZFdvcmtib29rSW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcbmxldCBvcGVuV29ya3NoZWV0czpcblx0fCB7XG5cdFx0XHRzaGVldDogRXhjZWxXb3Jrc2hlZXQ7XG5cdFx0XHRuYW1lOiBzdHJpbmc7XG5cdCAgfVtdXG5cdHwgdW5kZWZpbmVkO1xubGV0IHNlbGVjdGVkV29ya3NoZWV0SW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHRcdGF3YWl0IGluaXQoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0fVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdHMtY29udGFpbmVyXCIpO1xuXHRcdGlmIChyZXN1bHRzQ29udGFpbmVyKSB7XG5cdFx0XHRyZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9XG5cblx0XHRleGNlbCA9IGF3YWl0IGdldEV4Y2VsQXBwbGljYXRpb24oKTtcblxuXHRcdGF3YWl0IHBvcHVsYXRlV29ya2Jvb2tzKCk7XG5cblx0XHRjb25zdCBvcGVuRXhjZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tZXhjZWxcIik7XG5cdFx0aWYgKG9wZW5FeGNlbEJ1dHRvbikge1xuXHRcdFx0b3BlbkV4Y2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGF3YWl0IG9wZW5FeGNlbCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVmcmVzaFdvcmtib29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3JrYm9vay1yZWZyZXNoXCIpO1xuXHRcdGlmIChyZWZyZXNoV29ya2Jvb2tCdXR0b24pIHtcblx0XHRcdHJlZnJlc2hXb3JrYm9va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gcG9wdWxhdGVXb3JrYm9va3MoKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVmcmVzaFdvcmtzaGVldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya3NoZWV0LXJlZnJlc2hcIik7XG5cdFx0aWYgKHJlZnJlc2hXb3Jrc2hlZXRCdXR0b24pIHtcblx0XHRcdHJlZnJlc2hXb3Jrc2hlZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHBvcHVsYXRlV29ya3NoZWV0cygpKTtcblx0XHR9XG5cblx0XHRjb25zdCBvcGVuV29ya2Jvb2tzU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3JrYm9va3NcIik7XG5cdFx0aWYgKG9wZW5Xb3JrYm9va3NTZWxlY3QpIHtcblx0XHRcdG9wZW5Xb3JrYm9va3NTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBhc3luYyAoZSkgPT5cblx0XHRcdFx0c2VsZWN0V29ya2Jvb2soKGUudGFyZ2V0IGFzIHVua25vd24gYXMgeyB2YWx1ZTogc3RyaW5nIH0pLnZhbHVlKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRjb25zdCBvcGVuV29ya3NoZWV0c1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya3NoZWV0c1wiKTtcblx0XHRpZiAob3BlbldvcmtzaGVldHNTZWxlY3QpIHtcblx0XHRcdG9wZW5Xb3Jrc2hlZXRzU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYXN5bmMgKGUpID0+XG5cdFx0XHRcdHNlbGVjdFdvcmtzaGVldCgoZS50YXJnZXQgYXMgdW5rbm93biBhcyB7IHZhbHVlOiBzdHJpbmcgfSkudmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNldFZhbHVlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXQtdmFsdWVcIik7XG5cdFx0aWYgKHNldFZhbHVlQnV0dG9uKSB7XG5cdFx0XHRzZXRWYWx1ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCBzZXRDZWxsVmFsdWUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0c2hvd0Vycm9yKGVycik7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9yKGVycjogdW5rbm93bik6IHZvaWQge1xuXHRjb25zdCBlcnJEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yXCIpO1xuXHRpZiAoZXJyRG9tKSB7XG5cdFx0ZXJyRG9tLmlubmVySFRNTCA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBKU09OLnN0cmluZ2lmeShlcnIpO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5FeGNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0dHJ5IHtcblx0XHRpZiAoXG5cdFx0XHRvcGVuV29ya2Jvb2tzICYmXG5cdFx0XHRzZWxlY3RlZFdvcmtib29rSW5kZXggIT09IHVuZGVmaW5lZCAmJlxuXHRcdFx0b3BlbldvcmtzaGVldHMgJiZcblx0XHRcdHNlbGVjdGVkV29ya3NoZWV0SW5kZXggIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0Ly8gT3BlbiB0aGUgc2VsZWN0IHdvcmsgYm9vayBhbmQgc2hlZXRcblx0XHRcdC8vIGlmIGFueXRoaW5nIHRocm93cyBhbiBleGNlcHRpb24ganVzdCBvcGVuIGEgbmV3IHdvcmtib29rXG5cdFx0XHRhd2FpdCBzZWxlY3RXb3JrYm9vayhvcGVuV29ya2Jvb2tzW3NlbGVjdGVkV29ya2Jvb2tJbmRleF0ubmFtZSk7XG5cdFx0XHRhd2FpdCBzZWxlY3RXb3Jrc2hlZXQob3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0ubmFtZSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRpZiAoZXhjZWwpIHtcblx0XHRcdGF3YWl0IGV4Y2VsLmNyZWF0ZVdvcmtib29rKCk7XG5cdFx0XHRhd2FpdCBwb3B1bGF0ZVdvcmtib29rcygpO1xuXHRcdH1cblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVdvcmtib29rcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKGV4Y2VsKSB7XG5cdFx0c2VsZWN0ZWRXb3JrYm9va0luZGV4ID0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiN3b3JrYm9vay1yZWZyZXNoXCIpO1xuXHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3dvcmtib29rc1wiKTtcblxuXHRcdGlmIChyZWZyZXNoQnV0dG9uICYmIHNlbGVjdCkge1xuXHRcdFx0cmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0b3Blbldvcmtib29rcyA9IFtdO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB3b3JrYm9va3MgPSBhd2FpdCBleGNlbC5nZXRXb3JrYm9va3MoKTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IGJvb2sgb2Ygd29ya2Jvb2tzKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IGF3YWl0IGJvb2suZ2V0TmFtZSgpO1xuXHRcdFx0XHRcdG9wZW5Xb3JrYm9va3MucHVzaCh7XG5cdFx0XHRcdFx0XHRib29rLFxuXHRcdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgb3B0aW9uRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRvcHRpb25FbXB0eS5pbm5lckhUTUwgPSBcIi0tLS1TZWxlY3Qgd29ya2Jvb2stLS0tXCI7XG5cdFx0XHRcdG9wdGlvbkVtcHR5LnZhbHVlID0gXCJcIjtcblx0XHRcdFx0b3B0aW9uRW1wdHkuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRvcHRpb25FbXB0eS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uRW1wdHkpO1xuXG5cdFx0XHRcdGZvciAoY29uc3Qgb3Blbldvcmtib29rIG9mIG9wZW5Xb3JrYm9va3MpIHtcblx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBvcGVuV29ya2Jvb2submFtZTtcblx0XHRcdFx0XHRvcHRpb24udmFsdWUgPSBvcGVuV29ya2Jvb2submFtZTtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdHNob3dFcnJvcihlcnIpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0c2VsZWN0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VsZWN0V29ya2Jvb2sobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChvcGVuV29ya2Jvb2tzKSB7XG5cdFx0Y29uc3QgbmV3V29ya2Jvb2tJbmRleCA9IG9wZW5Xb3JrYm9va3MuZmluZEluZGV4KCh3KSA9PiB3Lm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0aWYgKG5ld1dvcmtib29rSW5kZXggIT09IHNlbGVjdGVkV29ya2Jvb2tJbmRleCkge1xuXHRcdFx0c2VsZWN0ZWRXb3JrYm9va0luZGV4ID0gbmV3V29ya2Jvb2tJbmRleDtcblx0XHRcdGlmIChuZXdXb3JrYm9va0luZGV4ID49IDApIHtcblx0XHRcdFx0YXdhaXQgb3Blbldvcmtib29rc1tzZWxlY3RlZFdvcmtib29rSW5kZXhdLmJvb2suYWN0aXZhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRhd2FpdCBwb3B1bGF0ZVdvcmtzaGVldHMoKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVdvcmtzaGVldHMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChleGNlbCkge1xuXHRcdHNlbGVjdGVkV29ya3NoZWV0SW5kZXggPSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI3dvcmtzaGVldC1yZWZyZXNoXCIpO1xuXHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3dvcmtzaGVldHNcIik7XG5cblx0XHRpZiAoc2VsZWN0ICYmIHJlZnJlc2hCdXR0b24gJiYgb3Blbldvcmtib29rcyAmJiBzZWxlY3RlZFdvcmtib29rSW5kZXggIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0b3BlbldvcmtzaGVldHMgPSBbXTtcblxuXHRcdFx0Y29uc3Qgd29ya2Jvb2sgPSBvcGVuV29ya2Jvb2tzW3NlbGVjdGVkV29ya2Jvb2tJbmRleF07XG5cdFx0XHRpZiAod29ya2Jvb2spIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBzaGVldHMgPSBhd2FpdCB3b3JrYm9vay5ib29rLmdldFdvcmtzaGVldHMoKTtcblxuXHRcdFx0XHRcdGZvciAoY29uc3Qgc2hlZXQgb2Ygc2hlZXRzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBuYW1lID0gYXdhaXQgc2hlZXQuZ2V0TmFtZSgpO1xuXHRcdFx0XHRcdFx0b3BlbldvcmtzaGVldHMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdHNoZWV0LFxuXHRcdFx0XHRcdFx0XHRuYW1lXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBvcHRpb25FbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRcdFx0b3B0aW9uRW1wdHkuaW5uZXJIVE1MID0gXCItLS0tU2VsZWN0IHdvcmtzaGVldC0tLS1cIjtcblx0XHRcdFx0XHRvcHRpb25FbXB0eS52YWx1ZSA9IFwiXCI7XG5cdFx0XHRcdFx0b3B0aW9uRW1wdHkuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdG9wdGlvbkVtcHR5LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbkVtcHR5KTtcblxuXHRcdFx0XHRcdGZvciAoY29uc3Qgb3BlbldvcmtzaGVldCBvZiBvcGVuV29ya3NoZWV0cykge1xuXHRcdFx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBvcGVuV29ya3NoZWV0Lm5hbWU7XG5cdFx0XHRcdFx0XHRvcHRpb24udmFsdWUgPSBvcGVuV29ya3NoZWV0Lm5hbWU7XG5cdFx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdFx0c2hvd0Vycm9yKGVycik7XG5cdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0c2VsZWN0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0cmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdFdvcmtzaGVldChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG9wZW5Xb3Jrc2hlZXRzICYmIHNlbGVjdGVkV29ya3NoZWV0SW5kZXggIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IG5ld1dvcmtzaGVldEluZGV4ID0gb3BlbldvcmtzaGVldHMuZmluZEluZGV4KCh3KSA9PiB3Lm5hbWUgPT09IG5hbWUpO1xuXG5cdFx0aWYgKG5ld1dvcmtzaGVldEluZGV4ICE9PSBzZWxlY3RlZFdvcmtzaGVldEluZGV4KSB7XG5cdFx0XHRjb25zdCBvbGRXb3Jrc2hlZXQgPSBvcGVuV29ya3NoZWV0c1tzZWxlY3RlZFdvcmtzaGVldEluZGV4XTtcblx0XHRcdGlmIChvbGRXb3Jrc2hlZXQpIHtcblx0XHRcdFx0YXdhaXQgb2xkV29ya3NoZWV0LnNoZWV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoaGFuZGxlQ2VsbENoYW5nZSk7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGVjdGVkV29ya3NoZWV0SW5kZXggPSBuZXdXb3Jrc2hlZXRJbmRleDtcblx0XHRcdGlmIChzZWxlY3RlZFdvcmtzaGVldEluZGV4ID49IDApIHtcblx0XHRcdFx0YXdhaXQgb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0uc2hlZXQuYWN0aXZhdGUoKTtcblx0XHRcdFx0YXdhaXQgb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0uc2hlZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDZWxsQ2hhbmdlKTtcblxuXHRcdFx0XHRjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjcmVzdWx0cy1jb250YWluZXJcIik7XG5cdFx0XHRcdGlmIChyZXN1bHRzQ29udGFpbmVyKSB7XG5cdFx0XHRcdFx0cmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBjZWxsTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2NlbGwtbG9jYXRpb25cIik7XG5cdFx0XHRcdGlmIChjZWxsTG9jYXRpb24pIHtcblx0XHRcdFx0XHRjZWxsTG9jYXRpb24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjZWxsVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2NlbGwtdmFsdWVcIik7XG5cdFx0XHRcdGlmIChjZWxsVmFsdWUpIHtcblx0XHRcdFx0XHRjZWxsVmFsdWUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzZXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjc2V0LXZhbHVlXCIpO1xuXHRcdFx0XHRpZiAoc2V0VmFsdWUpIHtcblx0XHRcdFx0XHRzZXRWYWx1ZS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNlbGxDaGFuZ2UoY2VsbHM6IENlbGxbXSk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBjZWxsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjZWxsLWNoYW5nZXMtY29udGFpbmVyXCIpO1xuXHRpZiAoY2VsbENvbnRhaW5lcikge1xuXHRcdGNlbGxDb250YWluZXIuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoY2VsbHMsIHVuZGVmaW5lZCwgXCIgIFwiKTtcblxuXHRcdGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuXHRcdFx0aWYgKEtOT1dOX0lOU1RSVU1FTlRTLmluY2x1ZGVzKGNlbGwudmFsdWUpKSB7XG5cdFx0XHRcdGF3YWl0IGJyb2FkY2FzdEluc3RydW1lbnQoY2VsbC52YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldENlbGxWYWx1ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG9wZW5Xb3Jrc2hlZXRzICYmIHNlbGVjdGVkV29ya3NoZWV0SW5kZXggIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IGNlbGxMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjY2VsbC1sb2NhdGlvblwiKTtcblx0XHRjb25zdCBjZWxsVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2NlbGwtdmFsdWVcIik7XG5cblx0XHRpZiAoY2VsbExvY2F0aW9uICYmIGNlbGxWYWx1ZSkge1xuXHRcdFx0Y29uc3QgY2VsbHMgPSBbW2NlbGxWYWx1ZS52YWx1ZV1dO1xuXHRcdFx0YXdhaXQgb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0uc2hlZXQuc2V0Q2VsbFZhbHVlcyhjZWxsTG9jYXRpb24udmFsdWUsIGNlbGxzKTtcblx0XHR9XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gYnJvYWRjYXN0SW5zdHJ1bWVudChpbnN0cnVtZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnJvYWRjYXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjYnJvYWRjYXN0LWluc3RydW1lbnRcIik7XG5cdGlmIChicm9hZGNhc3RFbGVtZW50KSB7XG5cdFx0aWYgKHdpbmRvdy5mZGMzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBmZGNJbnN0cnVtZW50ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZmRjMy5pbnN0cnVtZW50XCIsXG5cdFx0XHRcdFx0aWQ6IHtcblx0XHRcdFx0XHRcdHRpY2tlcjogaW5zdHJ1bWVudFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb25zdCBjaGFubmVsID0gYXdhaXQgZ2V0Q3VycmVudENoYW5uZWwoKTtcblx0XHRcdFx0aWYgKGNoYW5uZWwpIHtcblx0XHRcdFx0XHRhd2FpdCBjaGFubmVsLmJyb2FkY2FzdChmZGNJbnN0cnVtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBpbnN0cnVtZW50O1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXJyKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YnJvYWRjYXN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiTm8gRkQzIENoYW5uZWwgYXZhaWxhYmxlXCI7XG5cdFx0fVxuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=