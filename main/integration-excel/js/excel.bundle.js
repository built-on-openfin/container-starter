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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFrRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQzs7QUFFckM7QUFDQTtBQUNBLGNBQWMsMExBQTBMO0FBQ3hNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtB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aUI7b0JBQ3ZCLEVBQUUsRUFBRTt3QkFDSCxNQUFNLEVBQUUsVUFBVTtxQkFDbEI7aUJBQ0QsQ0FBQztnQkFFRixNQUFNLE9BQU8sR0FBRyxNQUFNLDhEQUFpQixFQUFFLENBQUM7Z0JBQzFDLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQ2IsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELGdCQUFnQixDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDckMsQ0FBQztZQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2QsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLEdBQUcsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkYsQ0FBQztRQUNGLENBQUM7YUFBTSxDQUFDO1lBQ1AsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLDBCQUEwQixDQUFDO1FBQzNELENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4uLy4uL25vZGVfbW9kdWxlcy9AZmlub3MvZmRjMy9kaXN0L2ZkYzMuZXNtLmpzIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4uLy4uL25vZGVfbW9kdWxlcy9Ab3BlbmZpbi9leGNlbC9vcGVuZmluLmV4Y2VsLmpzIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvLi9jbGllbnQvc3JjL2V4Y2VsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxyXG4gKiBDb3B5cmlnaHQgRklOT1MgRkRDMyBjb250cmlidXRvcnMgLSBzZWUgTk9USUNFIGZpbGVcclxuICovXG4vKiogQ29uc3RhbnRzIHJlcHJlc2VudGluZyB0aGUgZXJyb3JzIHRoYXQgY2FuIGJlIGVuY291bnRlcmVkIHdoZW4gY2FsbGluZyB0aGUgYG9wZW5gIG1ldGhvZCBvbiB0aGUgRGVza3RvcEFnZW50IG9iamVjdCAoYGZkYzNgKS4gKi9cbnZhciBPcGVuRXJyb3I7XG4oZnVuY3Rpb24gKE9wZW5FcnJvcikge1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBhcHBsaWNhdGlvbiBpcyBub3QgZm91bmQuKi9cbiAgT3BlbkVycm9yW1wiQXBwTm90Rm91bmRcIl0gPSBcIkFwcE5vdEZvdW5kXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGFwcGxpY2F0aW9uIGZhaWxzIHRvIGxhdW5jaCBjb3JyZWN0bHkuKi9cbiAgT3BlbkVycm9yW1wiRXJyb3JPbkxhdW5jaFwiXSA9IFwiRXJyb3JPbkxhdW5jaFwiO1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBhcHBsaWNhdGlvbiBsYXVuY2hlcyBidXQgZmFpbHMgdG8gYWRkIGEgY29udGV4dCBsaXN0ZW5lciBpbiBvcmRlciB0byByZWNlaXZlIHRoZSBjb250ZXh0IHBhc3NlZCB0byB0aGUgYGZkYzMub3BlbmAgY2FsbC4qL1xuICBPcGVuRXJyb3JbXCJBcHBUaW1lb3V0XCJdID0gXCJBcHBUaW1lb3V0XCI7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgRkRDMyBkZXNrdG9wIGFnZW50IGltcGxlbWVudGF0aW9uIGlzIG5vdCBjdXJyZW50bHkgYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuKi9cbiAgT3BlbkVycm9yW1wiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiXSA9IFwiUmVzb2x2ZXJVbmF2YWlsYWJsZVwiO1xuICAvKiogUmV0dXJuZWQgaWYgYSBjYWxsIHRvIHRoZSBgb3BlbmAgZnVuY3Rpb24gaXMgbWFkZSB3aXRoIGFuIGludmFsaWQgY29udGV4dCBhcmd1bWVudC4gQ29udGV4dHMgc2hvdWxkIGJlIE9iamVjdHMgd2l0aCBhdCBsZWFzdCBhIGB0eXBlYCBmaWVsZCB0aGF0IGhhcyBhIGBzdHJpbmdgIHZhbHVlLiovXG4gIE9wZW5FcnJvcltcIk1hbGZvcm1lZENvbnRleHRcIl0gPSBcIk1hbGZvcm1lZENvbnRleHRcIjtcbn0pKE9wZW5FcnJvciB8fCAoT3BlbkVycm9yID0ge30pKTtcbi8qKiBDb25zdGFudHMgcmVwcmVzZW50aW5nIHRoZSBlcnJvcnMgdGhhdCBjYW4gYmUgZW5jb3VudGVyZWQgd2hlbiBjYWxsaW5nIHRoZSBgZmluZEludGVudGAsIGBmaW5kSW50ZW50c0J5Q29udGV4dGAsIGByYWlzZUludGVudGAgb3IgYHJhaXNlSW50ZW50Rm9yQ29udGV4dGAgbWV0aG9kcyBvbiB0aGUgRGVza3RvcEFnZW50IChgZmRjM2ApLiAqL1xudmFyIFJlc29sdmVFcnJvcjtcbihmdW5jdGlvbiAoUmVzb2x2ZUVycm9yKSB7XG4gIC8qKiBTSE9VTEQgYmUgcmV0dXJuZWQgaWYgbm8gYXBwcyBhcmUgYXZhaWxhYmxlIHRoYXQgY2FuIHJlc29sdmUgdGhlIGludGVudCBhbmQgY29udGV4dCBjb21iaW5hdGlvbi4qL1xuICBSZXNvbHZlRXJyb3JbXCJOb0FwcHNGb3VuZFwiXSA9IFwiTm9BcHBzRm91bmRcIjtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSBGREMzIGRlc2t0b3AgYWdlbnQgaW1wbGVtZW50YXRpb24gaXMgbm90IGN1cnJlbnRseSBhYmxlIHRvIGhhbmRsZSB0aGUgcmVxdWVzdC4qL1xuICBSZXNvbHZlRXJyb3JbXCJSZXNvbHZlclVuYXZhaWxhYmxlXCJdID0gXCJSZXNvbHZlclVuYXZhaWxhYmxlXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgdXNlciBjYW5jZWxsZWQgdGhlIHJlc29sdXRpb24gcmVxdWVzdCwgZm9yIGV4YW1wbGUgYnkgY2xvc2luZyBvciBjYW5jZWxsaW5nIGEgcmVzb2x2ZXIgVUkuKi9cbiAgUmVzb2x2ZUVycm9yW1wiVXNlckNhbmNlbGxlZFwiXSA9IFwiVXNlckNhbmNlbGxlZFJlc29sdXRpb25cIjtcbiAgLyoqIFNIT1VMRCBiZSByZXR1cm5lZCBpZiBhIHRpbWVvdXQgY2FuY2VscyBhbiBpbnRlbnQgcmVzb2x1dGlvbiB0aGF0IHJlcXVpcmVkIHVzZXIgaW50ZXJhY3Rpb24uIFBsZWFzZSB1c2UgYFJlc29sdmVyVW5hdmFpbGFibGVgIGluc3RlYWQgZm9yIHNpdHVhdGlvbnMgd2hlcmUgYSByZXNvbHZlciBVSSBvciBzaW1pbGFyIGZhaWxzLiovXG4gIFJlc29sdmVFcnJvcltcIlJlc29sdmVyVGltZW91dFwiXSA9IFwiUmVzb2x2ZXJUaW1lb3V0XCI7XG4gIC8qKiBSZXR1cm5lZCBpZiBhIHNwZWNpZmllZCB0YXJnZXQgYXBwbGljYXRpb24gaXMgbm90IGF2YWlsYWJsZSBvciBhIG5ldyBpbnN0YW5jZSBvZiBpdCBjYW5ub3QgYmUgb3BlbmVkLiAqL1xuICBSZXNvbHZlRXJyb3JbXCJUYXJnZXRBcHBVbmF2YWlsYWJsZVwiXSA9IFwiVGFyZ2V0QXBwVW5hdmFpbGFibGVcIjtcbiAgLyoqIFJldHVybmVkIGlmIGEgc3BlY2lmaWVkIHRhcmdldCBhcHBsaWNhdGlvbiBpbnN0YW5jZSBpcyBub3QgYXZhaWxhYmxlLCBmb3IgZXhhbXBsZSBiZWNhdXNlIGl0IGhhcyBiZWVuIGNsb3NlZC4gKi9cbiAgUmVzb2x2ZUVycm9yW1wiVGFyZ2V0SW5zdGFuY2VVbmF2YWlsYWJsZVwiXSA9IFwiVGFyZ2V0SW5zdGFuY2VVbmF2YWlsYWJsZVwiO1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIGludGVudCBhbmQgY29udGV4dCBjb3VsZCBub3QgYmUgZGVsaXZlcmVkIHRvIHRoZSBzZWxlY3RlZCBhcHBsaWNhdGlvbiBvciBpbnN0YW5jZSwgZm9yIGV4YW1wbGUgYmVjYXVzZSBpdCBoYXMgbm90IGFkZGVkIGFuIGludGVudCBoYW5kbGVyIHdpdGhpbiBhIHRpbWVvdXQuKi9cbiAgUmVzb2x2ZUVycm9yW1wiSW50ZW50RGVsaXZlcnlGYWlsZWRcIl0gPSBcIkludGVudERlbGl2ZXJ5RmFpbGVkXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiBhIGNhbGwgdG8gb25lIG9mIHRoZSBgcmFpc2VJbnRlbnRgIGZ1bmN0aW9ucyBpcyBtYWRlIHdpdGggYW4gaW52YWxpZCBjb250ZXh0IGFyZ3VtZW50LiBDb250ZXh0cyBzaG91bGQgYmUgT2JqZWN0cyB3aXRoIGF0IGxlYXN0IGEgYHR5cGVgIGZpZWxkIHRoYXQgaGFzIGEgYHN0cmluZ2AgdmFsdWUuKi9cbiAgUmVzb2x2ZUVycm9yW1wiTWFsZm9ybWVkQ29udGV4dFwiXSA9IFwiTWFsZm9ybWVkQ29udGV4dFwiO1xufSkoUmVzb2x2ZUVycm9yIHx8IChSZXNvbHZlRXJyb3IgPSB7fSkpO1xudmFyIFJlc3VsdEVycm9yO1xuKGZ1bmN0aW9uIChSZXN1bHRFcnJvcikge1xuICAvKiogUmV0dXJuZWQgaWYgdGhlIGludGVudCBoYW5kbGVyIGV4aXRlZCB3aXRob3V0IHJldHVybmluZyBhIHZhbGlkIHJlc3VsdCAoYSBwcm9taXNlIHJlc29sdmluZyB0byBhIENvbnRleHQsIENoYW5uZWwgb2JqZWN0IG9yIHZvaWQpLiAqL1xuICBSZXN1bHRFcnJvcltcIk5vUmVzdWx0UmV0dXJuZWRcIl0gPSBcIk5vUmVzdWx0UmV0dXJuZWRcIjtcbiAgLyoqIFJldHVybmVkIGlmIHRoZSBJbnRlbnQgaGFuZGxlciBmdW5jdGlvbiBwcm9jZXNzaW5nIHRoZSByYWlzZWQgaW50ZW50IHRocm93cyBhbiBlcnJvciBvciByZWplY3RzIHRoZSBQcm9taXNlIGl0IHJldHVybmVkLiAqL1xuICBSZXN1bHRFcnJvcltcIkludGVudEhhbmRsZXJSZWplY3RlZFwiXSA9IFwiSW50ZW50SGFuZGxlclJlamVjdGVkXCI7XG59KShSZXN1bHRFcnJvciB8fCAoUmVzdWx0RXJyb3IgPSB7fSkpO1xudmFyIENoYW5uZWxFcnJvcjtcbihmdW5jdGlvbiAoQ2hhbm5lbEVycm9yKSB7XG4gIC8qKiBSZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGNoYW5uZWwgaXMgbm90IGZvdW5kIHdoZW4gYXR0ZW1wdGluZyB0byBqb2luIGEgY2hhbm5lbCB2aWEgdGhlIGBqb2luVXNlckNoYW5uZWxgIGZ1bmN0aW9uICBvZiB0aGUgRGVza3RvcEFnZW50IChgZmRjM2ApLiovXG4gIENoYW5uZWxFcnJvcltcIk5vQ2hhbm5lbEZvdW5kXCJdID0gXCJOb0NoYW5uZWxGb3VuZFwiO1xuICAvKiogU0hPVUxEIGJlIHJldHVybmVkIHdoZW4gYSByZXF1ZXN0IHRvIGpvaW4gYSB1c2VyIGNoYW5uZWwgb3IgdG8gYSByZXRyaWV2ZSBhIENoYW5uZWwgb2JqZWN0IHZpYSB0aGUgYGpvaW5Vc2VyQ2hhbm5lbGAgb3IgYGdldE9yQ3JlYXRlQ2hhbm5lbGAgbWV0aG9kcyBvZiB0aGUgRGVza3RvcEFnZW50IChgZmRjM2ApIG9iamVjdCBpcyBkZW5pZWQuICovXG4gIENoYW5uZWxFcnJvcltcIkFjY2Vzc0RlbmllZFwiXSA9IFwiQWNjZXNzRGVuaWVkXCI7XG4gIC8qKiBTSE9VTEQgYmUgcmV0dXJuZWQgd2hlbiBhIGNoYW5uZWwgY2Fubm90IGJlIGNyZWF0ZWQgb3IgcmV0cmlldmVkIHZpYSB0aGUgYGdldE9yQ3JlYXRlQ2hhbm5lbGAgbWV0aG9kIG9mIHRoZSBEZXNrdG9wQWdlbnQgKGBmZGMzYCkuKi9cbiAgQ2hhbm5lbEVycm9yW1wiQ3JlYXRpb25GYWlsZWRcIl0gPSBcIkNyZWF0aW9uRmFpbGVkXCI7XG4gIC8qKiBSZXR1cm5lZCBpZiBhIGNhbGwgdG8gdGhlIGBicm9hZGNhc3RgIGZ1bmN0aW9ucyBpcyBtYWRlIHdpdGggYW4gaW52YWxpZCBjb250ZXh0IGFyZ3VtZW50LiBDb250ZXh0cyBzaG91bGQgYmUgT2JqZWN0cyB3aXRoIGF0IGxlYXN0IGEgYHR5cGVgIGZpZWxkIHRoYXQgaGFzIGEgYHN0cmluZ2AgdmFsdWUuKi9cbiAgQ2hhbm5lbEVycm9yW1wiTWFsZm9ybWVkQ29udGV4dFwiXSA9IFwiTWFsZm9ybWVkQ29udGV4dFwiO1xufSkoQ2hhbm5lbEVycm9yIHx8IChDaGFubmVsRXJyb3IgPSB7fSkpO1xuXG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9O1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgIE9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHtcbiAgICAgIG9ialtrZXldID0gZGVzYy52YWx1ZTtcbiAgICB9LFxuICAgICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LFxuICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsXG4gICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KVxuICAgIH0pLCBnZW5lcmF0b3I7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZyxcbiAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIHZhbHVlICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkgOiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICB9XG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIGlmIChcImNvbXBsZXRlZFwiID09PSBzdGF0ZSkge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBtZXRob2QpIHRocm93IGFyZztcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICAgIGlmIChcInN1c3BlbmRlZFN0YXJ0XCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQuYXJnO1xuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2ROYW1lID0gY29udGV4dC5tZXRob2QsXG4gICAgICBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTtcbiAgICBpZiAodW5kZWZpbmVkID09PSBtZXRob2QpIHJldHVybiBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBtZXRob2ROYW1lICYmIGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybiAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG1ldGhvZE5hbWUgJiYgKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgIHJldHVybiBpbmZvID8gaW5mby5kb25lID8gKGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlLCBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSBjb250ZXh0Lm1ldGhvZCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCkgOiBpbmZvIDogKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZG9uZTogITBcbiAgICB9O1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWN0b3IgJiYgKGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSk7XG4gIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCksIGdlbkZ1bjtcbiAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogYXJnXG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIHZvaWQgMCA9PT0gUHJvbWlzZUltcGwgJiYgKFByb21pc2VJbXBsID0gUHJvbWlzZSk7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdCh2YWwpLFxuICAgICAga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiAoc2tpcFRlbXBSZXNldCkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiAoZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiLCByZWNvcmQuYXJnID0gZXhjZXB0aW9uLCBjb250ZXh0Lm5leHQgPSBsb2MsIGNhdWdodCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldLFxuICAgICAgICAgIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpLFxuICAgICAgICAgICAgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzRmluYWxseSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmluYWxseUVudHJ5ICYmIChcImJyZWFrXCIgPT09IHR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0eXBlKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MgJiYgKGZpbmFsbHlFbnRyeSA9IG51bGwpO1xuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIHJldHVybiBcImJyZWFrXCIgPT09IHJlY29yZC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gcmVjb3JkLnR5cGUgPyB0aGlzLm5leHQgPSByZWNvcmQuYXJnIDogXCJyZXR1cm5cIiA9PT0gcmVjb3JkLnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUgJiYgYWZ0ZXJMb2MgJiYgKHRoaXMubmV4dCA9IGFmdGVyTG9jKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhdGNoOiBmdW5jdGlvbiAodHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH0sIGV4cG9ydHM7XG59XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxudmFyIERFRkFVTFRfVElNRU9VVCA9IDUwMDA7XG52YXIgVW5hdmFpbGFibGVFcnJvciA9IC8qI19fUFVSRV9fKi9uZXcgRXJyb3IoJ0ZEQzMgRGVza3RvcEFnZW50IG5vdCBhdmFpbGFibGUgYXQgYHdpbmRvdy5mZGMzYC4nKTtcbnZhciBUaW1lb3V0RXJyb3IgPSAvKiNfX1BVUkVfXyovbmV3IEVycm9yKCdUaW1lZCBvdXQgd2FpdGluZyBmb3IgYGZkYzNSZWFkeWAgZXZlbnQuJyk7XG52YXIgVW5leHBlY3RlZEVycm9yID0gLyojX19QVVJFX18qL25ldyBFcnJvcignYGZkYzNSZWFkeWAgZXZlbnQgZmlyZWQsIGJ1dCBgd2luZG93LmZkYzNgIG5vdCBzZXQgdG8gRGVza3RvcEFnZW50LicpO1xuZnVuY3Rpb24gcmVqZWN0SWZOb0dsb2JhbChmKSB7XG4gIHJldHVybiB3aW5kb3cuZmRjMyA/IGYoKSA6IFByb21pc2UucmVqZWN0KFVuYXZhaWxhYmxlRXJyb3IpO1xufVxuLyoqXHJcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBpbW1lYWRpYXRlbHlcclxuICogaWYgdGhlIGRlc2t0b3AgYWdlbnQgQVBJIGlzIGZvdW5kIGF0IGB3aW5kb3cuZmRjM2AuIElmIHRoZSBBUEkgaXMgZm91bmQsXHJcbiAqIHRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aGVuIHRoZSBgZmRjM1JlYWR5YCBldmVudCBpcyByZWNlaXZlZCBvciBpZiBpdFxyXG4gKiBpcyBmb3VuZCBhdCB0aGUgZW5kIG9mIHRoZSBzcGVjaWZpZWQgdGltZW91dC4gSWYgdGhlIEFQSSBpcyBub3QgZm91bmQsIGl0XHJcbiAqIHdpbGwgcmVqZWN0IHdpdGggYW4gZXJyb3IuXHJcbiAqXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogYXdhaXQgZmRjM1JlYWR5KCk7XHJcbiAqIGNvbnN0IGludGVudExpc3RlbmVyID0gYXdhaXQgYWRkSW50ZW50TGlzdGVuZXIoXCJWaWV3Q2hhcnRcIiwgaW50ZW50SGFuZGxlckZuKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSB3YWl0Rm9yTXMgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBmb3IgdGhlIEZEQzMgQVBJIHRvIGJlXHJcbiAqIHJlYWR5LiBEZWZhdWx0cyB0byA1IHNlY29uZHMuXHJcbiAqL1xudmFyIGZkYzNSZWFkeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gLyojX19QVVJFX18qL19hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSh3YWl0Rm9yTXMpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBpZiAod2FpdEZvck1zID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHdhaXRGb3JNcyA9IERFRkFVTFRfVElNRU9VVDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgZ2xvYmFsIGlzIGFscmVhZHkgYXZhaWxhYmxlIHJlc29sdmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZmRjMykge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBpZiBpdHMgbm90IGF2YWlsYWJsZSBzZXR1cCBhIHRpbWVvdXQgdG8gcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZVxuICAgICAgICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZmRjMyA/IHJlc29sdmUoKSA6IHJlamVjdChUaW1lb3V0RXJyb3IpO1xuICAgICAgICAgICAgICB9LCB3YWl0Rm9yTXMpO1xuICAgICAgICAgICAgICAvLyBsaXN0ZW4gZm9yIHRoZSBmZGMzUmVhZHkgZXZlbnRcbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZkYzNSZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmZkYzMgPyByZXNvbHZlKCkgOiByZWplY3QoVW5leHBlY3RlZEVycm9yKTtcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG4gIHJldHVybiBmdW5jdGlvbiBmZGMzUmVhZHkoX3gpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuZnVuY3Rpb24gaXNTdHJpbmcoYXBwKSB7XG4gIHJldHVybiAhIWFwcCAmJiB0eXBlb2YgYXBwID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIG9wZW4oYXBwLCBjb250ZXh0KSB7XG4gIGlmIChpc1N0cmluZyhhcHApKSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLm9wZW4oYXBwLCBjb250ZXh0KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMub3BlbihhcHAsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBmaW5kSW50ZW50KGludGVudCwgY29udGV4dCwgcmVzdWx0VHlwZSkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmZpbmRJbnRlbnQoaW50ZW50LCBjb250ZXh0LCByZXN1bHRUeXBlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBmaW5kSW50ZW50c0J5Q29udGV4dChjb250ZXh0LCByZXN1bHRUeXBlKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZmluZEludGVudHNCeUNvbnRleHQoY29udGV4dCwgcmVzdWx0VHlwZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gYnJvYWRjYXN0KGNvbnRleHQpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5icm9hZGNhc3QoY29udGV4dCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmFpc2VJbnRlbnQoaW50ZW50LCBjb250ZXh0LCBhcHApIHtcbiAgaWYgKGlzU3RyaW5nKGFwcCkpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMucmFpc2VJbnRlbnQoaW50ZW50LCBjb250ZXh0LCBhcHApO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5yYWlzZUludGVudChpbnRlbnQsIGNvbnRleHQsIGFwcCk7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJhaXNlSW50ZW50Rm9yQ29udGV4dChjb250ZXh0LCBhcHApIHtcbiAgaWYgKGlzU3RyaW5nKGFwcCkpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMucmFpc2VJbnRlbnRGb3JDb250ZXh0KGNvbnRleHQsIGFwcCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50Rm9yQ29udGV4dChjb250ZXh0LCBhcHApO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBhZGRJbnRlbnRMaXN0ZW5lcihpbnRlbnQsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5hZGRJbnRlbnRMaXN0ZW5lcihpbnRlbnQsIGhhbmRsZXIpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGFkZENvbnRleHRMaXN0ZW5lcihjb250ZXh0VHlwZU9ySGFuZGxlciwgaGFuZGxlcikge1xuICAvL0hhbmRsZSAoZGVwcmVjYXRlZCkgZnVuY3Rpb24gc2lnbmF0dXJlIHRoYXQgYWxsb3dlZCBjb250ZXh0VHlwZSBhcmd1bWVudCB0byBiZSBvbWl0dGVkXG4gIGlmICh0eXBlb2YgY29udGV4dFR5cGVPckhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMuYWRkQ29udGV4dExpc3RlbmVyKGNvbnRleHRUeXBlT3JIYW5kbGVyLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMuYWRkQ29udGV4dExpc3RlbmVyKG51bGwsIGNvbnRleHRUeXBlT3JIYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0VXNlckNoYW5uZWxzKCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgLy9mYWxsYmFjayB0byBnZXRTeXN0ZW1DaGFubmVscyBmb3IgRkRDMyA8Mi4wIGltcGxlbWVudGF0aW9uc1xuICAgIGlmICh3aW5kb3cuZmRjMy5nZXRVc2VyQ2hhbm5lbHMpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRVc2VyQ2hhbm5lbHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldFN5c3RlbUNoYW5uZWxzKCk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGdldFN5c3RlbUNoYW5uZWxzKCkge1xuICAvL2ZhbGxmb3J3YXJkIHRvIGdldFVzZXJDaGFubmVscyBmb3IgRkRDMyAyLjArIGltcGxlbWVudGF0aW9uc1xuICByZXR1cm4gZ2V0VXNlckNoYW5uZWxzKCk7XG59XG5mdW5jdGlvbiBqb2luVXNlckNoYW5uZWwoY2hhbm5lbElkKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAvL2ZhbGxiYWNrIHRvIGpvaW5DaGFubmVsIGZvciBGREMzIDwyLjAgaW1wbGVtZW50YXRpb25zXG4gICAgaWYgKHdpbmRvdy5mZGMzLmpvaW5Vc2VyQ2hhbm5lbCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmpvaW5Vc2VyQ2hhbm5lbChjaGFubmVsSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMuam9pbkNoYW5uZWwoY2hhbm5lbElkKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gam9pbkNoYW5uZWwoY2hhbm5lbElkKSB7XG4gIC8vZmFsbGZvcndhcmQgdG8gam9pblVzZXJDaGFubmVsIGZvciBGREMzIDIuMCsgaW1wbGVtZW50YXRpb25zXG4gIHJldHVybiBqb2luVXNlckNoYW5uZWwoY2hhbm5lbElkKTtcbn1cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlQ2hhbm5lbChjaGFubmVsSWQpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRPckNyZWF0ZUNoYW5uZWwoY2hhbm5lbElkKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50Q2hhbm5lbCgpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRDdXJyZW50Q2hhbm5lbCgpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGxlYXZlQ3VycmVudENoYW5uZWwoKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMubGVhdmVDdXJyZW50Q2hhbm5lbCgpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVByaXZhdGVDaGFubmVsKCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmNyZWF0ZVByaXZhdGVDaGFubmVsKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRJbmZvKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0QXBwTWV0YWRhdGEoYXBwKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0QXBwTWV0YWRhdGEoYXBwKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBmaW5kSW5zdGFuY2VzKGFwcCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmZpbmRJbnN0YW5jZXMoYXBwKTtcbiAgfSk7XG59XG4vKipcclxuICogQ29tcGFyZSBudW1lcmljIHNlbXZlciB2ZXJzaW9uIG51bWJlciBzdHJpbmdzIChpbiB0aGUgZm9ybSBgMS4yLjNgKS5cclxuICpcclxuICogUmV0dXJucyBgLTFgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhIGxvd2VyIHZlcnNpb24gbnVtYmVyIHRoYW4gdGhlIHNlY29uZCxcclxuICogYDFgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBncmVhdGVyIHRoYW4gdGhlIHNlY29uZCwgMCBpZiB0aGUgYXJndW1lbnRzIGFyZVxyXG4gKiBlcXVhbCBhbmQgYG51bGxgIGlmIGFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgY29tcGFyaXNvbi5cclxuICpcclxuICogQHBhcmFtIGFcclxuICogQHBhcmFtIGJcclxuICovXG52YXIgY29tcGFyZVZlcnNpb25OdW1iZXJzID0gZnVuY3Rpb24gY29tcGFyZVZlcnNpb25OdW1iZXJzKGEsIGIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYVZlckFyciA9IGEuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTtcbiAgICB2YXIgYlZlckFyciA9IGIuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgTWF0aC5tYXgoYVZlckFyci5sZW5ndGgsIGJWZXJBcnIubGVuZ3RoKTsgaW5kZXgrKykge1xuICAgICAgLyogSWYgb25lIHZlcnNpb24gbnVtYmVyIGhhcyBtb3JlIGRpZ2l0cyBhbmQgdGhlIG90aGVyIGRvZXMgbm90LCBhbmQgdGhleSBhcmUgb3RoZXJ3aXNlIGVxdWFsLFxyXG4gICAgICAgICBhc3N1bWUgdGhlIGxvbmdlciBpcyBncmVhdGVyLiBFLmcuIDEuMS4xID4gMS4xICovXG4gICAgICBpZiAoaW5kZXggPT09IGFWZXJBcnIubGVuZ3RoIHx8IGFWZXJBcnJbaW5kZXhdIDwgYlZlckFycltpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYlZlckFyci5sZW5ndGggfHwgYVZlckFycltpbmRleF0gPiBiVmVyQXJyW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY29tcGFyZSB2ZXJzaW9uIHN0cmluZ3MnLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgRkRDMyB2ZXJzaW9uIGluIGFuIEltcGxlbWVudGF0aW9uTWV0YWRhdGEgb2JqZWN0IGlzIGdyZWF0ZXIgdGhhblxyXG4gKiBvciBlcXVhbCB0byB0aGUgc3VwcGxpZWQgbnVtZXJpYyBzZW12ZXIgdmVyc2lvbiBudW1iZXIgc3RyaW5nIChpbiB0aGUgZm9ybSBgMS4yLjNgKS5cclxuICpcclxuICogUmV0dXJucyBhIGJvb2xlYW4gb3IgbnVsbCBpZiBhbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjb21wYXJpbmcgdGhlIHZlcnNpb24gbnVtYmVycy5cclxuICpcclxuICogQHBhcmFtIG1ldGFkYXRhXHJcbiAqIEBwYXJhbSB2ZXJzaW9uXHJcbiAqL1xudmFyIHZlcnNpb25Jc0F0TGVhc3QgPSBmdW5jdGlvbiB2ZXJzaW9uSXNBdExlYXN0KG1ldGFkYXRhLCB2ZXJzaW9uKSB7XG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZVZlcnNpb25OdW1iZXJzKG1ldGFkYXRhLmZkYzNWZXJzaW9uLCB2ZXJzaW9uKTtcbiAgcmV0dXJuIGNvbXBhcmlzb24gPT09IG51bGwgPyBudWxsIDogY29tcGFyaXNvbiA+PSAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxudmFyIENvbnRleHRUeXBlcztcbihmdW5jdGlvbiAoQ29udGV4dFR5cGVzKSB7XG4gIENvbnRleHRUeXBlc1tcIkNoYXJ0XCJdID0gXCJmZGMzLmNoYXJ0XCI7XG4gIENvbnRleHRUeXBlc1tcIkNoYXRJbml0U2V0dGluZ3NcIl0gPSBcImZkYzMuY2hhdC5pbml0U2V0dGluZ3NcIjtcbiAgQ29udGV4dFR5cGVzW1wiQ29udGFjdFwiXSA9IFwiZmRjMy5jb250YWN0XCI7XG4gIENvbnRleHRUeXBlc1tcIkNvbnRhY3RMaXN0XCJdID0gXCJmZGMzLmNvbnRhY3RMaXN0XCI7XG4gIENvbnRleHRUeXBlc1tcIkNvdW50cnlcIl0gPSBcImZkYzMuY291bnRyeVwiO1xuICBDb250ZXh0VHlwZXNbXCJDdXJyZW5jeVwiXSA9IFwiZmRjMy5jdXJyZW5jeVwiO1xuICBDb250ZXh0VHlwZXNbXCJFbWFpbFwiXSA9IFwiZmRjMy5lbWFpbFwiO1xuICBDb250ZXh0VHlwZXNbXCJJbnN0cnVtZW50XCJdID0gXCJmZGMzLmluc3RydW1lbnRcIjtcbiAgQ29udGV4dFR5cGVzW1wiSW5zdHJ1bWVudExpc3RcIl0gPSBcImZkYzMuaW5zdHJ1bWVudExpc3RcIjtcbiAgQ29udGV4dFR5cGVzW1wiT3JnYW5pemF0aW9uXCJdID0gXCJmZGMzLm9yZ2FuaXphdGlvblwiO1xuICBDb250ZXh0VHlwZXNbXCJQb3J0Zm9saW9cIl0gPSBcImZkYzMucG9ydGZvbGlvXCI7XG4gIENvbnRleHRUeXBlc1tcIlBvc2l0aW9uXCJdID0gXCJmZGMzLnBvc2l0aW9uXCI7XG4gIENvbnRleHRUeXBlc1tcIk5vdGhpbmdcIl0gPSBcImZkYzMubm90aGluZ1wiO1xuICBDb250ZXh0VHlwZXNbXCJUaW1lUmFuZ2VcIl0gPSBcImZkYzMudGltZXJhbmdlXCI7XG4gIENvbnRleHRUeXBlc1tcIlZhbHVhdGlvblwiXSA9IFwiZmRjMy52YWx1YXRpb25cIjtcbn0pKENvbnRleHRUeXBlcyB8fCAoQ29udGV4dFR5cGVzID0ge30pKTtcblxuLy8gVG8gcGFyc2UgdGhpcyBkYXRhOlxuLy9cbi8vICAgaW1wb3J0IHsgQ29udmVydCwgQ2hhcnQsIENoYXRJbml0U2V0dGluZ3MsIENvbnRhY3QsIENvbnRhY3RMaXN0LCBDb250ZXh0LCBDb3VudHJ5LCBDdXJyZW5jeSwgRW1haWwsIEluc3RydW1lbnQsIEluc3RydW1lbnRMaXN0LCBOb3RoaW5nLCBPcmdhbml6YXRpb24sIFBvcnRmb2xpbywgUG9zaXRpb24sIFRpbWVSYW5nZSwgVmFsdWF0aW9uIH0gZnJvbSBcIi4vZmlsZVwiO1xuLy9cbi8vICAgY29uc3QgY2hhcnQgPSBDb252ZXJ0LnRvQ2hhcnQoanNvbik7XG4vLyAgIGNvbnN0IGNoYXRJbml0U2V0dGluZ3MgPSBDb252ZXJ0LnRvQ2hhdEluaXRTZXR0aW5ncyhqc29uKTtcbi8vICAgY29uc3QgY29udGFjdCA9IENvbnZlcnQudG9Db250YWN0KGpzb24pO1xuLy8gICBjb25zdCBjb250YWN0TGlzdCA9IENvbnZlcnQudG9Db250YWN0TGlzdChqc29uKTtcbi8vICAgY29uc3QgY29udGV4dCA9IENvbnZlcnQudG9Db250ZXh0KGpzb24pO1xuLy8gICBjb25zdCBjb3VudHJ5ID0gQ29udmVydC50b0NvdW50cnkoanNvbik7XG4vLyAgIGNvbnN0IGN1cnJlbmN5ID0gQ29udmVydC50b0N1cnJlbmN5KGpzb24pO1xuLy8gICBjb25zdCBlbWFpbCA9IENvbnZlcnQudG9FbWFpbChqc29uKTtcbi8vICAgY29uc3QgaW5zdHJ1bWVudCA9IENvbnZlcnQudG9JbnN0cnVtZW50KGpzb24pO1xuLy8gICBjb25zdCBpbnN0cnVtZW50TGlzdCA9IENvbnZlcnQudG9JbnN0cnVtZW50TGlzdChqc29uKTtcbi8vICAgY29uc3Qgbm90aGluZyA9IENvbnZlcnQudG9Ob3RoaW5nKGpzb24pO1xuLy8gICBjb25zdCBvcmdhbml6YXRpb24gPSBDb252ZXJ0LnRvT3JnYW5pemF0aW9uKGpzb24pO1xuLy8gICBjb25zdCBwb3J0Zm9saW8gPSBDb252ZXJ0LnRvUG9ydGZvbGlvKGpzb24pO1xuLy8gICBjb25zdCBwb3NpdGlvbiA9IENvbnZlcnQudG9Qb3NpdGlvbihqc29uKTtcbi8vICAgY29uc3QgdGltZVJhbmdlID0gQ29udmVydC50b1RpbWVSYW5nZShqc29uKTtcbi8vICAgY29uc3QgdmFsdWF0aW9uID0gQ29udmVydC50b1ZhbHVhdGlvbihqc29uKTtcbi8vXG4vLyBUaGVzZSBmdW5jdGlvbnMgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgSlNPTiBkb2Vzbid0XG4vLyBtYXRjaCB0aGUgZXhwZWN0ZWQgaW50ZXJmYWNlLCBldmVuIGlmIHRoZSBKU09OIGlzIHZhbGlkLlxudmFyIFN0eWxlO1xuKGZ1bmN0aW9uIChTdHlsZSkge1xuICBTdHlsZVtcIkJhclwiXSA9IFwiYmFyXCI7XG4gIFN0eWxlW1wiQ2FuZGxlXCJdID0gXCJjYW5kbGVcIjtcbiAgU3R5bGVbXCJDdXN0b21cIl0gPSBcImN1c3RvbVwiO1xuICBTdHlsZVtcIkhlYXRtYXBcIl0gPSBcImhlYXRtYXBcIjtcbiAgU3R5bGVbXCJIaXN0b2dyYW1cIl0gPSBcImhpc3RvZ3JhbVwiO1xuICBTdHlsZVtcIkxpbmVcIl0gPSBcImxpbmVcIjtcbiAgU3R5bGVbXCJNb3VudGFpblwiXSA9IFwibW91bnRhaW5cIjtcbiAgU3R5bGVbXCJQaWVcIl0gPSBcInBpZVwiO1xuICBTdHlsZVtcIlNjYXR0ZXJcIl0gPSBcInNjYXR0ZXJcIjtcbiAgU3R5bGVbXCJTdGFja2VkQmFyXCJdID0gXCJzdGFja2VkLWJhclwiO1xufSkoU3R5bGUgfHwgKFN0eWxlID0ge30pKTtcbi8vIENvbnZlcnRzIEpTT04gc3RyaW5ncyB0by9mcm9tIHlvdXIgdHlwZXNcbi8vIGFuZCBhc3NlcnRzIHRoZSByZXN1bHRzIG9mIEpTT04ucGFyc2UgYXQgcnVudGltZVxudmFyIENvbnZlcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb252ZXJ0KCkge31cbiAgQ29udmVydC50b0NoYXJ0ID0gZnVuY3Rpb24gdG9DaGFydChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ2hhcnQnKSk7XG4gIH07XG4gIENvbnZlcnQuY2hhcnRUb0pzb24gPSBmdW5jdGlvbiBjaGFydFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NoYXJ0JykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b0NoYXRJbml0U2V0dGluZ3MgPSBmdW5jdGlvbiB0b0NoYXRJbml0U2V0dGluZ3MoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NoYXRJbml0U2V0dGluZ3MnKSk7XG4gIH07XG4gIENvbnZlcnQuY2hhdEluaXRTZXR0aW5nc1RvSnNvbiA9IGZ1bmN0aW9uIGNoYXRJbml0U2V0dGluZ3NUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDaGF0SW5pdFNldHRpbmdzJykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b0NvbnRhY3QgPSBmdW5jdGlvbiB0b0NvbnRhY3QoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NvbnRhY3QnKSk7XG4gIH07XG4gIENvbnZlcnQuY29udGFjdFRvSnNvbiA9IGZ1bmN0aW9uIGNvbnRhY3RUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDb250YWN0JykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b0NvbnRhY3RMaXN0ID0gZnVuY3Rpb24gdG9Db250YWN0TGlzdChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ29udGFjdExpc3QnKSk7XG4gIH07XG4gIENvbnZlcnQuY29udGFjdExpc3RUb0pzb24gPSBmdW5jdGlvbiBjb250YWN0TGlzdFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NvbnRhY3RMaXN0JykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b0NvbnRleHQgPSBmdW5jdGlvbiB0b0NvbnRleHQoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NvbnRleHQnKSk7XG4gIH07XG4gIENvbnZlcnQuY29udGV4dFRvSnNvbiA9IGZ1bmN0aW9uIGNvbnRleHRUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDb250ZXh0JykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b0NvdW50cnkgPSBmdW5jdGlvbiB0b0NvdW50cnkoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NvdW50cnknKSk7XG4gIH07XG4gIENvbnZlcnQuY291bnRyeVRvSnNvbiA9IGZ1bmN0aW9uIGNvdW50cnlUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDb3VudHJ5JykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b0N1cnJlbmN5ID0gZnVuY3Rpb24gdG9DdXJyZW5jeShqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ3VycmVuY3knKSk7XG4gIH07XG4gIENvbnZlcnQuY3VycmVuY3lUb0pzb24gPSBmdW5jdGlvbiBjdXJyZW5jeVRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0N1cnJlbmN5JykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b0VtYWlsID0gZnVuY3Rpb24gdG9FbWFpbChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignRW1haWwnKSk7XG4gIH07XG4gIENvbnZlcnQuZW1haWxUb0pzb24gPSBmdW5jdGlvbiBlbWFpbFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0VtYWlsJykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b0luc3RydW1lbnQgPSBmdW5jdGlvbiB0b0luc3RydW1lbnQoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0luc3RydW1lbnQnKSk7XG4gIH07XG4gIENvbnZlcnQuaW5zdHJ1bWVudFRvSnNvbiA9IGZ1bmN0aW9uIGluc3RydW1lbnRUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdJbnN0cnVtZW50JykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b0luc3RydW1lbnRMaXN0ID0gZnVuY3Rpb24gdG9JbnN0cnVtZW50TGlzdChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignSW5zdHJ1bWVudExpc3QnKSk7XG4gIH07XG4gIENvbnZlcnQuaW5zdHJ1bWVudExpc3RUb0pzb24gPSBmdW5jdGlvbiBpbnN0cnVtZW50TGlzdFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0luc3RydW1lbnRMaXN0JykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b05vdGhpbmcgPSBmdW5jdGlvbiB0b05vdGhpbmcoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ05vdGhpbmcnKSk7XG4gIH07XG4gIENvbnZlcnQubm90aGluZ1RvSnNvbiA9IGZ1bmN0aW9uIG5vdGhpbmdUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdOb3RoaW5nJykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b09yZ2FuaXphdGlvbiA9IGZ1bmN0aW9uIHRvT3JnYW5pemF0aW9uKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdPcmdhbml6YXRpb24nKSk7XG4gIH07XG4gIENvbnZlcnQub3JnYW5pemF0aW9uVG9Kc29uID0gZnVuY3Rpb24gb3JnYW5pemF0aW9uVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignT3JnYW5pemF0aW9uJykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b1BvcnRmb2xpbyA9IGZ1bmN0aW9uIHRvUG9ydGZvbGlvKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdQb3J0Zm9saW8nKSk7XG4gIH07XG4gIENvbnZlcnQucG9ydGZvbGlvVG9Kc29uID0gZnVuY3Rpb24gcG9ydGZvbGlvVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignUG9ydGZvbGlvJykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b1Bvc2l0aW9uID0gZnVuY3Rpb24gdG9Qb3NpdGlvbihqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignUG9zaXRpb24nKSk7XG4gIH07XG4gIENvbnZlcnQucG9zaXRpb25Ub0pzb24gPSBmdW5jdGlvbiBwb3NpdGlvblRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ1Bvc2l0aW9uJykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b1RpbWVSYW5nZSA9IGZ1bmN0aW9uIHRvVGltZVJhbmdlKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdUaW1lUmFuZ2UnKSk7XG4gIH07XG4gIENvbnZlcnQudGltZVJhbmdlVG9Kc29uID0gZnVuY3Rpb24gdGltZVJhbmdlVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignVGltZVJhbmdlJykpLCBudWxsLCAyKTtcbiAgfTtcbiAgQ29udmVydC50b1ZhbHVhdGlvbiA9IGZ1bmN0aW9uIHRvVmFsdWF0aW9uKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdWYWx1YXRpb24nKSk7XG4gIH07XG4gIENvbnZlcnQudmFsdWF0aW9uVG9Kc29uID0gZnVuY3Rpb24gdmFsdWF0aW9uVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignVmFsdWF0aW9uJykpLCBudWxsLCAyKTtcbiAgfTtcbiAgcmV0dXJuIENvbnZlcnQ7XG59KCk7XG5mdW5jdGlvbiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudCA9ICcnO1xuICB9XG4gIHZhciBwcmV0dHlUeXAgPSBwcmV0dHlUeXBlTmFtZSh0eXApO1xuICB2YXIgcGFyZW50VGV4dCA9IHBhcmVudCA/IFwiIG9uIFwiICsgcGFyZW50IDogJyc7XG4gIHZhciBrZXlUZXh0ID0ga2V5ID8gXCIgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIiA6ICcnO1xuICB0aHJvdyBFcnJvcihcIkludmFsaWQgdmFsdWVcIiArIGtleVRleHQgKyBwYXJlbnRUZXh0ICsgXCIuIEV4cGVjdGVkIFwiICsgcHJldHR5VHlwICsgXCIgYnV0IGdvdCBcIiArIEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxuZnVuY3Rpb24gcHJldHR5VHlwZU5hbWUodHlwKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHR5cCkpIHtcbiAgICBpZiAodHlwLmxlbmd0aCA9PT0gMiAmJiB0eXBbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFwiYW4gb3B0aW9uYWwgXCIgKyBwcmV0dHlUeXBlTmFtZSh0eXBbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJvbmUgb2YgW1wiICsgdHlwLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gcHJldHR5VHlwZU5hbWUoYSk7XG4gICAgICB9KS5qb2luKCcsICcpICsgXCJdXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB0eXAgPT09ICdvYmplY3QnICYmIHR5cC5saXRlcmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHlwLmxpdGVyYWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXA7XG4gIH1cbn1cbmZ1bmN0aW9uIGpzb25Ub0pTUHJvcHModHlwKSB7XG4gIGlmICh0eXAuanNvblRvSlMgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB0eXAucHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIG1hcFtwLmpzb25dID0ge1xuICAgICAgICBrZXk6IHAuanMsXG4gICAgICAgIHR5cDogcC50eXBcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdHlwLmpzb25Ub0pTID0gbWFwO1xuICB9XG4gIHJldHVybiB0eXAuanNvblRvSlM7XG59XG5mdW5jdGlvbiBqc1RvSlNPTlByb3BzKHR5cCkge1xuICBpZiAodHlwLmpzVG9KU09OID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgdHlwLnByb3BzLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBtYXBbcC5qc10gPSB7XG4gICAgICAgIGtleTogcC5qc29uLFxuICAgICAgICB0eXA6IHAudHlwXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHR5cC5qc1RvSlNPTiA9IG1hcDtcbiAgfVxuICByZXR1cm4gdHlwLmpzVG9KU09OO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtKHZhbCwgdHlwLCBnZXRQcm9wcywga2V5LCBwYXJlbnQpIHtcbiAgaWYgKGtleSA9PT0gdm9pZCAwKSB7XG4gICAga2V5ID0gJyc7XG4gIH1cbiAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50ID0gJyc7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtUHJpbWl0aXZlKHR5cCwgdmFsKSB7XG4gICAgaWYgKHR5cGVvZiB0eXAgPT09IHR5cGVvZiB2YWwpIHJldHVybiB2YWw7XG4gICAgcmV0dXJuIGludmFsaWRWYWx1ZSh0eXAsIHZhbCwga2V5LCBwYXJlbnQpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVVuaW9uKHR5cHMsIHZhbCkge1xuICAgIC8vIHZhbCBtdXN0IHZhbGlkYXRlIGFnYWluc3Qgb25lIHR5cCBpbiB0eXBzXG4gICAgdmFyIGwgPSB0eXBzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIF90eXAgPSB0eXBzW2ldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybSh2YWwsIF90eXAsIGdldFByb3BzKTtcbiAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgfVxuICAgIHJldHVybiBpbnZhbGlkVmFsdWUodHlwcywgdmFsLCBrZXksIHBhcmVudCk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRW51bShjYXNlcywgdmFsKSB7XG4gICAgaWYgKGNhc2VzLmluZGV4T2YodmFsKSAhPT0gLTEpIHJldHVybiB2YWw7XG4gICAgcmV0dXJuIGludmFsaWRWYWx1ZShjYXNlcy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBsKGEpO1xuICAgIH0pLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1BcnJheSh0eXAsIHZhbCkge1xuICAgIC8vIHZhbCBtdXN0IGJlIGFuIGFycmF5IHdpdGggbm8gaW52YWxpZCBlbGVtZW50c1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gaW52YWxpZFZhbHVlKGwoJ2FycmF5JyksIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIHJldHVybiB2YWwubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShlbCwgdHlwLCBnZXRQcm9wcyk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRGF0ZSh2YWwpIHtcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSh2YWwpO1xuICAgIGlmIChpc05hTihkLnZhbHVlT2YoKSkpIHtcbiAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUobCgnRGF0ZScpLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGQ7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtT2JqZWN0KHByb3BzLCBhZGRpdGlvbmFsLCB2YWwpIHtcbiAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZShsKHJlZiB8fCAnb2JqZWN0JyksIHZhbCwga2V5LCBwYXJlbnQpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHByb3AgPSBwcm9wc1trZXldO1xuICAgICAgdmFyIHYgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsLCBrZXkpID8gdmFsW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgICByZXN1bHRbcHJvcC5rZXldID0gdHJhbnNmb3JtKHYsIHByb3AudHlwLCBnZXRQcm9wcywga2V5LCByZWYpO1xuICAgIH0pO1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRyYW5zZm9ybSh2YWxba2V5XSwgYWRkaXRpb25hbCwgZ2V0UHJvcHMsIGtleSwgcmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICh0eXAgPT09ICdhbnknKSByZXR1cm4gdmFsO1xuICBpZiAodHlwID09PSBudWxsKSB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuIHZhbDtcbiAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXksIHBhcmVudCk7XG4gIH1cbiAgaWYgKHR5cCA9PT0gZmFsc2UpIHJldHVybiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgdmFyIHJlZiA9IHVuZGVmaW5lZDtcbiAgd2hpbGUgKHR5cGVvZiB0eXAgPT09ICdvYmplY3QnICYmIHR5cC5yZWYgIT09IHVuZGVmaW5lZCkge1xuICAgIHJlZiA9IHR5cC5yZWY7XG4gICAgdHlwID0gdHlwZU1hcFt0eXAucmVmXTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0eXApKSByZXR1cm4gdHJhbnNmb3JtRW51bSh0eXAsIHZhbCk7XG4gIGlmICh0eXBlb2YgdHlwID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB0eXAuaGFzT3duUHJvcGVydHkoJ3VuaW9uTWVtYmVycycpID8gdHJhbnNmb3JtVW5pb24odHlwLnVuaW9uTWVtYmVycywgdmFsKSA6IHR5cC5oYXNPd25Qcm9wZXJ0eSgnYXJyYXlJdGVtcycpID8gdHJhbnNmb3JtQXJyYXkodHlwLmFycmF5SXRlbXMsIHZhbCkgOiB0eXAuaGFzT3duUHJvcGVydHkoJ3Byb3BzJykgPyB0cmFuc2Zvcm1PYmplY3QoZ2V0UHJvcHModHlwKSwgdHlwLmFkZGl0aW9uYWwsIHZhbCkgOiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSwgcGFyZW50KTtcbiAgfVxuICAvLyBOdW1iZXJzIGNhbiBiZSBwYXJzZWQgYnkgRGF0ZSBidXQgc2hvdWxkbid0IGJlLlxuICBpZiAodHlwID09PSBEYXRlICYmIHR5cGVvZiB2YWwgIT09ICdudW1iZXInKSByZXR1cm4gdHJhbnNmb3JtRGF0ZSh2YWwpO1xuICByZXR1cm4gdHJhbnNmb3JtUHJpbWl0aXZlKHR5cCwgdmFsKTtcbn1cbmZ1bmN0aW9uIGNhc3QodmFsLCB0eXApIHtcbiAgcmV0dXJuIHRyYW5zZm9ybSh2YWwsIHR5cCwganNvblRvSlNQcm9wcyk7XG59XG5mdW5jdGlvbiB1bmNhc3QodmFsLCB0eXApIHtcbiAgcmV0dXJuIHRyYW5zZm9ybSh2YWwsIHR5cCwganNUb0pTT05Qcm9wcyk7XG59XG5mdW5jdGlvbiBsKHR5cCkge1xuICByZXR1cm4ge1xuICAgIGxpdGVyYWw6IHR5cFxuICB9O1xufVxuZnVuY3Rpb24gYSh0eXApIHtcbiAgcmV0dXJuIHtcbiAgICBhcnJheUl0ZW1zOiB0eXBcbiAgfTtcbn1cbmZ1bmN0aW9uIHUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0eXBzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHR5cHNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1bmlvbk1lbWJlcnM6IHR5cHNcbiAgfTtcbn1cbmZ1bmN0aW9uIG8ocHJvcHMsIGFkZGl0aW9uYWwpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgYWRkaXRpb25hbDogYWRkaXRpb25hbFxuICB9O1xufVxuZnVuY3Rpb24gbShhZGRpdGlvbmFsKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IFtdLFxuICAgIGFkZGl0aW9uYWw6IGFkZGl0aW9uYWxcbiAgfTtcbn1cbmZ1bmN0aW9uIHIobmFtZSkge1xuICByZXR1cm4ge1xuICAgIHJlZjogbmFtZVxuICB9O1xufVxudmFyIHR5cGVNYXAgPSB7XG4gIENoYXJ0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpbnN0cnVtZW50cycsXG4gICAganM6ICdpbnN0cnVtZW50cycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovYSggLyojX19QVVJFX18qL3IoJ0luc3RydW1lbnRFbGVtZW50JykpXG4gIH0sIHtcbiAgICBqc29uOiAnb3RoZXJDb25maWcnLFxuICAgIGpzOiAnb3RoZXJDb25maWcnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAncmFuZ2UnLFxuICAgIGpzOiAncmFuZ2UnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovcignVGltZVJhbmdlT2JqZWN0JykpXG4gIH0sIHtcbiAgICBqc29uOiAnc3R5bGUnLFxuICAgIGpzOiAnc3R5bGUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovcignU3R5bGUnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgSW5zdHJ1bWVudEVsZW1lbnQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdQdXJwbGVJRCcpXG4gIH0sIHtcbiAgICBqc29uOiAnbWFya2V0JyxcbiAgICBqczogJ21hcmtldCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9yKCdQdXJwbGVNYXJrZXQnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgUHVycGxlSUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0JCRycsXG4gICAganM6ICdCQkcnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdDVVNJUCcsXG4gICAganM6ICdDVVNJUCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZEU19JRCcsXG4gICAganM6ICdGRFNfSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGSUdJJyxcbiAgICBqczogJ0ZJR0knLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdJU0lOJyxcbiAgICBqczogJ0lTSU4nLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdQRVJNSUQnLFxuICAgIGpzOiAnUEVSTUlEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnUklDJyxcbiAgICBqczogJ1JJQycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1NFRE9MJyxcbiAgICBqczogJ1NFRE9MJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAndGlja2VyJyxcbiAgICBqczogJ3RpY2tlcicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBQdXJwbGVNYXJrZXQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0JCRycsXG4gICAganM6ICdCQkcnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdDT1VOVFJZX0lTT0FMUEhBMicsXG4gICAganM6ICdDT1VOVFJZX0lTT0FMUEhBMicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ01JQycsXG4gICAganM6ICdNSUMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgVGltZVJhbmdlT2JqZWN0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdlbmRUaW1lJyxcbiAgICBqczogJ2VuZFRpbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCBEYXRlKVxuICB9LCB7XG4gICAganNvbjogJ3N0YXJ0VGltZScsXG4gICAganM6ICdzdGFydFRpbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCBEYXRlKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDaGF0SW5pdFNldHRpbmdzOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdjaGF0TmFtZScsXG4gICAganM6ICdjaGF0TmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ2luaXRNZXNzYWdlJyxcbiAgICBqczogJ2luaXRNZXNzYWdlJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnbWVtYmVycycsXG4gICAganM6ICdtZW1iZXJzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL3IoJ0NvbnRhY3RMaXN0T2JqZWN0JykpXG4gIH0sIHtcbiAgICBqc29uOiAnb3B0aW9ucycsXG4gICAganM6ICdvcHRpb25zJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJ2FueScpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICdhbnknXG4gIH1dLCAnYW55JyksXG4gIENvbnRhY3RMaXN0T2JqZWN0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdjb250YWN0cycsXG4gICAganM6ICdjb250YWN0cycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovYSggLyojX19QVVJFX18qL3IoJ0NvbnRhY3RFbGVtZW50JykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIENvbnRhY3RFbGVtZW50OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignRmx1ZmZ5SUQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBGbHVmZnlJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnZW1haWwnLFxuICAgIGpzOiAnZW1haWwnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGRFNfSUQnLFxuICAgIGpzOiAnRkRTX0lEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIENvbnRhY3Q6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdUZW50YWNsZWRJRCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFRlbnRhY2xlZElEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdlbWFpbCcsXG4gICAganM6ICdlbWFpbCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZEU19JRCcsXG4gICAganM6ICdGRFNfSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ29udGFjdExpc3Q6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2NvbnRhY3RzJyxcbiAgICBqczogJ2NvbnRhY3RzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9hKCAvKiNfX1BVUkVfXyovcignQ29udGFjdEVsZW1lbnQnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ29udGV4dDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH1dLCAnYW55JyksXG4gIENvdW50cnk6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdDb3VudHJ5SUQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDb3VudHJ5SUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0NPVU5UUllfSVNPQUxQSEEyJyxcbiAgICBqczogJ0NPVU5UUllfSVNPQUxQSEEyJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnQ09VTlRSWV9JU09BTFBIQTMnLFxuICAgIGpzOiAnQ09VTlRSWV9JU09BTFBIQTMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdJU09BTFBIQTInLFxuICAgIGpzOiAnSVNPQUxQSEEyJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnSVNPQUxQSEEzJyxcbiAgICBqczogJ0lTT0FMUEhBMycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDdXJyZW5jeTogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ0N1cnJlbmN5SUQnKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9XSwgJ2FueScpLFxuICBDdXJyZW5jeUlEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdDVVJSRU5DWV9JU09DT0RFJyxcbiAgICBqczogJ0NVUlJFTkNZX0lTT0NPREUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgRW1haWw6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ3JlY2lwaWVudHMnLFxuICAgIGpzOiAncmVjaXBpZW50cycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignUmVjaXBpZW50c09iamVjdCcpXG4gIH0sIHtcbiAgICBqc29uOiAnc3ViamVjdCcsXG4gICAganM6ICdzdWJqZWN0JyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAndGV4dEJvZHknLFxuICAgIGpzOiAndGV4dEJvZHknLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgUmVjaXBpZW50c09iamVjdDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovcignUmVjaXBpZW50c0lEJykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnY29udGFjdHMnLFxuICAgIGpzOiAnY29udGFjdHMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovYSggLyojX19QVVJFX18qL3IoJ0NvbnRhY3RFbGVtZW50JykpKVxuICB9XSwgJ2FueScpLFxuICBSZWNpcGllbnRzSUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2VtYWlsJyxcbiAgICBqczogJ2VtYWlsJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRkRTX0lEJyxcbiAgICBqczogJ0ZEU19JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBJbnN0cnVtZW50OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignU3RpY2t5SUQnKVxuICB9LCB7XG4gICAganNvbjogJ21hcmtldCcsXG4gICAganM6ICdtYXJrZXQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovcignRmx1ZmZ5TWFya2V0JykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFN0aWNreUlEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdCQkcnLFxuICAgIGpzOiAnQkJHJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnQ1VTSVAnLFxuICAgIGpzOiAnQ1VTSVAnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGRFNfSUQnLFxuICAgIGpzOiAnRkRTX0lEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRklHSScsXG4gICAganM6ICdGSUdJJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnSVNJTicsXG4gICAganM6ICdJU0lOJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnUEVSTUlEJyxcbiAgICBqczogJ1BFUk1JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1JJQycsXG4gICAganM6ICdSSUMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdTRURPTCcsXG4gICAganM6ICdTRURPTCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ3RpY2tlcicsXG4gICAganM6ICd0aWNrZXInLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgRmx1ZmZ5TWFya2V0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdCQkcnLFxuICAgIGpzOiAnQkJHJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnQ09VTlRSWV9JU09BTFBIQTInLFxuICAgIGpzOiAnQ09VTlRSWV9JU09BTFBIQTInLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdNSUMnLFxuICAgIGpzOiAnTUlDJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIEluc3RydW1lbnRMaXN0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpbnN0cnVtZW50cycsXG4gICAganM6ICdpbnN0cnVtZW50cycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovYSggLyojX19QVVJFX18qL3IoJ0luc3RydW1lbnRFbGVtZW50JykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIE5vdGhpbmc6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJ2FueScpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBPcmdhbml6YXRpb246IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdPcmdhbml6YXRpb25JRCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIE9yZ2FuaXphdGlvbklEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdGRFNfSUQnLFxuICAgIGpzOiAnRkRTX0lEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnTEVJJyxcbiAgICBqczogJ0xFSScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1BFUk1JRCcsXG4gICAganM6ICdQRVJNSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgUG9ydGZvbGlvOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdwb3NpdGlvbnMnLFxuICAgIGpzOiAncG9zaXRpb25zJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9hKCAvKiNfX1BVUkVfXyovcignUG9zaXRpb25FbGVtZW50JykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFBvc2l0aW9uRWxlbWVudDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaG9sZGluZycsXG4gICAganM6ICdob2xkaW5nJyxcbiAgICB0eXA6IDMuMTRcbiAgfSwge1xuICAgIGpzb246ICdpbnN0cnVtZW50JyxcbiAgICBqczogJ2luc3RydW1lbnQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ0luc3RydW1lbnRFbGVtZW50JylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgUG9zaXRpb246IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2hvbGRpbmcnLFxuICAgIGpzOiAnaG9sZGluZycsXG4gICAgdHlwOiAzLjE0XG4gIH0sIHtcbiAgICBqc29uOiAnaW5zdHJ1bWVudCcsXG4gICAganM6ICdpbnN0cnVtZW50JyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdJbnN0cnVtZW50RWxlbWVudCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnYW55JykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIFRpbWVSYW5nZTogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnZW5kVGltZScsXG4gICAganM6ICdlbmRUaW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgRGF0ZSlcbiAgfSwge1xuICAgIGpzb246ICdzdGFydFRpbWUnLFxuICAgIGpzOiAnc3RhcnRUaW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgRGF0ZSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgVmFsdWF0aW9uOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdDVVJSRU5DWV9JU09DT0RFJyxcbiAgICBqczogJ0NVUlJFTkNZX0lTT0NPREUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdleHBpcnlUaW1lJyxcbiAgICBqczogJ2V4cGlyeVRpbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCBEYXRlKVxuICB9LCB7XG4gICAganNvbjogJ3ByaWNlJyxcbiAgICBqczogJ3ByaWNlJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgMy4xNClcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICd2YWx1YXRpb25UaW1lJyxcbiAgICBqczogJ3ZhbHVhdGlvblRpbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCBEYXRlKVxuICB9LCB7XG4gICAganNvbjogJ3ZhbHVlJyxcbiAgICBqczogJ3ZhbHVlJyxcbiAgICB0eXA6IDMuMTRcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCdhbnknKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgU3R5bGU6IFsnYmFyJywgJ2NhbmRsZScsICdjdXN0b20nLCAnaGVhdG1hcCcsICdoaXN0b2dyYW0nLCAnbGluZScsICdtb3VudGFpbicsICdwaWUnLCAnc2NhdHRlcicsICdzdGFja2VkLWJhciddXG59O1xuXG52YXIgSW50ZW50cztcbihmdW5jdGlvbiAoSW50ZW50cykge1xuICBJbnRlbnRzW1wiU3RhcnRDYWxsXCJdID0gXCJTdGFydENhbGxcIjtcbiAgSW50ZW50c1tcIlN0YXJ0Q2hhdFwiXSA9IFwiU3RhcnRDaGF0XCI7XG4gIEludGVudHNbXCJTdGFydEVtYWlsXCJdID0gXCJTdGFydEVtYWlsXCI7XG4gIEludGVudHNbXCJWaWV3QW5hbHlzaXNcIl0gPSBcIlZpZXdBbmFseXNpc1wiO1xuICBJbnRlbnRzW1wiVmlld0NoYXJ0XCJdID0gXCJWaWV3Q2hhcnRcIjtcbiAgSW50ZW50c1tcIlZpZXdDb250YWN0XCJdID0gXCJWaWV3Q29udGFjdFwiO1xuICBJbnRlbnRzW1wiVmlld0hvbGRpbmdzXCJdID0gXCJWaWV3SG9sZGluZ3NcIjtcbiAgSW50ZW50c1tcIlZpZXdJbnN0cnVtZW50XCJdID0gXCJWaWV3SW5zdHJ1bWVudFwiO1xuICBJbnRlbnRzW1wiVmlld0ludGVyYWN0aW9uc1wiXSA9IFwiVmlld0ludGVyYWN0aW9uc1wiO1xuICBJbnRlbnRzW1wiVmlld05ld3NcIl0gPSBcIlZpZXdOZXdzXCI7XG4gIEludGVudHNbXCJWaWV3T3JkZXJzXCJdID0gXCJWaWV3T3JkZXJzXCI7XG4gIEludGVudHNbXCJWaWV3UHJvZmlsZVwiXSA9IFwiVmlld1Byb2ZpbGVcIjtcbiAgSW50ZW50c1tcIlZpZXdRdW90ZVwiXSA9IFwiVmlld1F1b3RlXCI7XG4gIEludGVudHNbXCJWaWV3UmVzZWFyY2hcIl0gPSBcIlZpZXdSZXNlYXJjaFwiO1xufSkoSW50ZW50cyB8fCAoSW50ZW50cyA9IHt9KSk7XG5cbmV4cG9ydCB7IENoYW5uZWxFcnJvciwgQ29udGV4dFR5cGVzLCBDb252ZXJ0LCBJbnRlbnRzLCBPcGVuRXJyb3IsIFJlc29sdmVFcnJvciwgUmVzdWx0RXJyb3IsIFN0eWxlLCBhZGRDb250ZXh0TGlzdGVuZXIsIGFkZEludGVudExpc3RlbmVyLCBicm9hZGNhc3QsIGNvbXBhcmVWZXJzaW9uTnVtYmVycywgY3JlYXRlUHJpdmF0ZUNoYW5uZWwsIGZkYzNSZWFkeSwgZmluZEluc3RhbmNlcywgZmluZEludGVudCwgZmluZEludGVudHNCeUNvbnRleHQsIGdldEFwcE1ldGFkYXRhLCBnZXRDdXJyZW50Q2hhbm5lbCwgZ2V0SW5mbywgZ2V0T3JDcmVhdGVDaGFubmVsLCBnZXRTeXN0ZW1DaGFubmVscywgZ2V0VXNlckNoYW5uZWxzLCBqb2luQ2hhbm5lbCwgam9pblVzZXJDaGFubmVsLCBsZWF2ZUN1cnJlbnRDaGFubmVsLCBvcGVuLCByYWlzZUludGVudCwgcmFpc2VJbnRlbnRGb3JDb250ZXh0LCB2ZXJzaW9uSXNBdExlYXN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZGMzLmVzbS5qcy5tYXBcbiIsInZhciBlLHQscixhPXtkOihlLHQpPT57Zm9yKHZhciByIGluIHQpYS5vKHQscikmJiFhLm8oZSxyKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7ZW51bWVyYWJsZTohMCxnZXQ6dFtyXX0pfSxvOihlLHQpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbz17fTthLmQobyx7ZHE6KCk9PkFkYXB0ZXJFcnJvcixNUzooKT0+QXBpRXJyb3IseFE6KCk9PkV2ZW50RXJyb3Isc086KCk9PmhlLFp1OigpPT5wZSxJMzooKT0+d2UsJFU6KCk9PmtlLGkwOigpPT51ZSxjWDooKT0+SW5pdGlhbGl6YXRpb25FcnJvcixfVzooKT0+UGFyYW1ldGVyRXJyb3IsVSQ6KCk9PmwsVTc6KCk9PmMscmQ6KCk9PmxlfSk7Y2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlPVwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWRcIix0KXt2YXIgcjtzdXBlcihlKSx0JiYodGhpcy5pbm5lckVycm9yPXQmJnQpLHRoaXMuc3RhY2s9bnVsbD09PShyPXRoaXMuc3RhY2spfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnJlcGxhY2UoL14oXFx3KkVycm9yKS8sYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfWApfX1jbGFzcyBBZGFwdGVyRXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiRmFpbGVkIHRvIGV4ZWN1dGUgYWRhcHRlciBmdW5jdGlvblwiLHQpe3N1cGVyKGUsdCl9fWNsYXNzIEV2ZW50RXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiRmFpbGVkIHRvIHJhaXNlIGV2ZW50XCIsdCl7c3VwZXIoZSx0KX19Y2xhc3MgSW5pdGlhbGl6YXRpb25FcnJvciBleHRlbmRzIEFwaUVycm9ye2NvbnN0cnVjdG9yKGU9XCJGYWlsZWQgdG8gaW5pdGlhbGl6ZSBhZGFwdGVyXCIsdCl7c3VwZXIoZSx0KX19Y2xhc3MgUGFyYW1ldGVyRXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiSW52YWxpZCBwYXJhbWV0ZXIgdmFsdWVcIix0KXtzdXBlcihlLHQpfX0hZnVuY3Rpb24oZSl7ZS5BY3RpdmF0ZVdvcmtib29rPVwiQWN0aXZhdGVXb3JrYm9va1wiLGUuQWN0aXZhdGVXb3Jrc2hlZXQ9XCJBY3RpdmF0ZVdvcmtzaGVldFwiLGUuQWRkV29ya3NoZWV0PVwiQWRkV29ya3NoZWV0XCIsZS5DYWxjdWxhdGVXb3JrYm9vaz1cIkNhbGN1bGF0ZVdvcmtib29rXCIsZS5DYWxjdWxhdGVXb3Jrc2hlZXQ9XCJDYWxjdWxhdGVXb3Jrc2hlZXRcIixlLkNsZWFyQWxsQ2VsbHM9XCJDbGVhckFsbENlbGxzXCIsZS5DbGVhckFsbENlbGxWYWx1ZXM9XCJDbGVhckFsbENlbGxWYWx1ZXNcIixlLkNsZWFyQWxsQ2VsbEZvcm1hdHRpbmc9XCJDbGVhckFsbENlbGxGb3JtYXR0aW5nXCIsZS5DbGVhckNlbGxWYWx1ZXM9XCJDbGVhckNlbGxWYWx1ZXNcIixlLkNsZWFyQ2VsbEZvcm1hdHRpbmc9XCJDbGVhckNlbGxGb3JtYXR0aW5nXCIsZS5DbGVhckNlbGxzPVwiQ2xlYXJDZWxsc1wiLGUuQ2xvc2VXb3JrYm9vaz1cIkNsb3NlV29ya2Jvb2tcIixlLkNyZWF0ZVdvcmtib29rPVwiQ3JlYXRlV29ya2Jvb2tcIixlLkRlbGV0ZVdvcmtzaGVldD1cIkRlbGV0ZVdvcmtzaGVldFwiLGUuRGVyZWdpc3RlckV2ZW50PVwiRGVyZWdpc3RlckV2ZW50XCIsZS5FdmVudEZpcmVkPVwiRXZlbnRGaXJlZFwiLGUuR2V0Q2FsY3VsYXRpb25Nb2RlPVwiR2V0Q2FsY3VsYXRpb25Nb2RlXCIsZS5HZXRDZWxscz1cIkdldENlbGxzXCIsZS5HZXRXb3JrYm9va0J5SWQ9XCJHZXRXb3JrYm9va0J5SWRcIixlLkdldFdvcmtib29rTmFtZT1cIkdldFdvcmtib29rTmFtZVwiLGUuR2V0V29ya2Jvb2tzPVwiR2V0V29ya2Jvb2tzXCIsZS5HZXRXb3Jrc2hlZXRCeUlkPVwiR2V0V29ya3NoZWV0QnlJZFwiLGUuR2V0V29ya3NoZWV0QnlOYW1lPVwiR2V0V29ya3NoZWV0QnlOYW1lXCIsZS5HZXRXb3Jrc2hlZXROYW1lPVwiR2V0V29ya3NoZWV0TmFtZVwiLGUuR2V0V29ya3NoZWV0cz1cIkdldFdvcmtzaGVldHNcIixlLkxvZ01lc3NhZ2U9XCJMb2dNZXNzYWdlXCIsZS5PcGVuV29ya2Jvb2s9XCJPcGVuV29ya2Jvb2tcIixlLlByb3RlY3RXb3Jrc2hlZXQ9XCJQcm90ZWN0V29ya3NoZWV0XCIsZS5SZWdpc3RlckV2ZW50PVwiUmVnaXN0ZXJFdmVudFwiLGUuU2F2ZVdvcmtib29rPVwiU2F2ZVdvcmtib29rXCIsZS5TYXZlV29ya2Jvb2tBcz1cIlNhdmVXb3JrYm9va0FzXCIsZS5TZXRDZWxsVmFsdWVzPVwiU2V0Q2VsbFZhbHVlc1wiLGUuU2V0Q2VsbEZvcm1hdHRpbmc9XCJTZXRDZWxsRm9ybWF0dGluZ1wiLGUuU2V0Q2VsbE5hbWU9XCJTZXRDZWxsTmFtZVwiLGUuU2V0V29ya3NoZWV0TmFtZT1cIlNldFdvcmtzaGVldE5hbWVcIixlLkZpbHRlckNlbGxzPVwiRmlsdGVyQ2VsbHNcIixlLlF1aXRBcHBsaWNhdGlvbj1cIlF1aXRBcHBsaWNhdGlvblwifShlfHwoZT17fSkpLGZ1bmN0aW9uKGUpe2UuQWN0aXZhdGU9XCJBY3RpdmF0ZVwiLGUuQWRkV29ya3NoZWV0PVwiQWRkV29ya3NoZWV0XCIsZS5DaGFuZ2U9XCJDaGFuZ2VcIixlLkNsb3NlPVwiQ2xvc2VcIixlLkRlYWN0aXZhdGU9XCJEZWFjdGl2YXRlXCIsZS5EZWxldGVXb3Jrc2hlZXQ9XCJEZWxldGVXb3Jrc2hlZXRcIn0odHx8KHQ9e30pKSxmdW5jdGlvbihlKXtlLldvcmtib29rPVwiV29ya2Jvb2tcIixlLldvcmtzaGVldD1cIldvcmtzaGVldFwifShyfHwocj17fSkpO2NvbnN0IG49XCIxLjQuMVwiO2xldCBzPSExO2NvbnN0IGk9XCJbQG9wZW5maW4vZXhjZWxdXCIsbD0oKT0+e3M9ITF9LGM9KCk9PntzPSEwLGgoYHYke259YCl9LGQ9KGUsdCk9PntzJiYoZS5pbm5lckVycm9yP2NvbnNvbGUuZXJyb3IodD9gJHtpfSAke3R9YDppLGUsXCJcXG5cXG4oaW5uZXIpXCIsZS5pbm5lckVycm9yKTpjb25zb2xlLmVycm9yKHQ/YCR7aX0gJHt0fWA6aSxlKSl9LGg9KC4uLmUpPT57cyYmY29uc29sZS5sb2coaSwuLi5lKX0scD0oLi4uZSk9PntzJiZjb25zb2xlLndhcm4oaSwuLi5lKX07XCJ1bmRlZmluZWRcIj09dHlwZW9mIGZpbiYmT2JqZWN0LmFzc2lnbih3aW5kb3cse2Zpbjp7fX0pLE9iamVjdC5hc3NpZ24oZmluLHtJbnRlZ3JhdGlvbnM6e0V4Y2VsOntlbmFibGVMb2dnaW5nOmMsZGlzYWJsZUxvZ2dpbmc6bH19fSk7Y29uc3Qgdz0oKT0+XCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csKGU9Pntjb25zdCB0PTE2Kk1hdGgucmFuZG9tKCl8MDtyZXR1cm4oXCJ4XCI9PT1lP3Q6MyZ0fDgpLnRvU3RyaW5nKDE2KX0pKSxrPW5ldyBNYXAsdT0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogQWN0aXZhdGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5BY3RpdmF0ZVdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sZz0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogQ2FsY3VsYXRlICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2FsY3VsYXRlV29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxtPSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBDbGVhciBhbGwgY2VsbCB2YWx1ZXMgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxWYWx1ZXMscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LHk9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IENsZWFyIGFsbCBjZWxsIGZvcm1hdHRpbmcgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxGb3JtYXR0aW5nLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxDPSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBDbGVhciBhbGwgY2VsbHMgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxzLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSx2PSh0LHIpPT5hc3luYyBhPT57aChgV29ya3NoZWV0OiBDbGVhciBjZWxsIHZhbHVlczsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCk7Y29uc3Qgbz17Y2VsbFJhbmdlOmEsb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckNlbGxWYWx1ZXMsbyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEU9KHQscik9PmFzeW5jIGE9PntoKGBXb3Jrc2hlZXQ6IENsZWFyIGNlbGwgZm9ybWF0dGluZzsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCk7Y29uc3Qgbz17Y2VsbFJhbmdlOmEsb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckNlbGxGb3JtYXR0aW5nLG8pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxXPSh0LHIpPT5hc3luYyBhPT57aChgV29ya3NoZWV0OiBDbGVhciBjZWxsczsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCk7Y29uc3Qgbz17Y2VsbFJhbmdlOmEsb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckNlbGxzLG8pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxBPShlLHQpPT4ocixhLG89MWUzKT0+e2lmKE51bWJlci5pc05hTihvKXx8bzw9MCl0aHJvdyBuZXcgQXBpRXJyb3IoXCJVcGRhdGUgaW50ZXJ2YWwgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtjb25zdCBuPXcoKTtoKGBXb3Jrc2hlZXQ6IENyZWF0ZSBkYXRhIHN0cmVhbTsgc3RyZWFtSWQ6JHtufTsgY2VsbFJhbmdlOiR7cn07IHVwZGF0ZUludGVydmFsOiR7b30gKCR7dH0pYCk7Y29uc3Qgcz17Y2xvc2U6KCk9PntoKGBDbG9zZWQgc3RyZWFtICgke259KWApLChlPT57dmFyIHQ7dHJ5e2NvbnN0IHI9ay5nZXQoZSk7aWYoIXIpdGhyb3cgbmV3IEFwaUVycm9yKGBVbmFibGUgdG8gZmluZCByZWdpc3RlcmVkIGRhdGEgc3RyZWFtIHdpdGggaWQgJHtlfWApO3ZvaWQgMCE9PShudWxsIT09KHQ9ci50aW1lcikmJnZvaWQgMCE9PXQ/dDp2b2lkIDApJiZGKGUpLGsuZGVsZXRlKGUpfWNhdGNoKGUpe3Rocm93IGQoZSksZX19KShuKX0sY2VsbFJhbmdlOnIsaWQ6bixzdGFydDooKT0+e2goYFN0YXJ0ZWQgc3RyZWFtaW5nICgke259KWApLFUobixhLGUsdCl9LHN0b3A6KCk9PntoKGBTdG9wcGVkIHN0cmVhbWluZyAoJHtufSlgKSxGKG4pfSx1cGRhdGVJbnRlcnZhbDpvLHdvcmtzaGVldElkOnR9O3JldHVybiBrLnNldChuLHtkYXRhU3RyZWFtOnN9KSxzfSxiPShlLHQsYSxvKT0+e2NvbnN0IG49e2V2ZW50VGFyZ2V0OnIuV29ya3NoZWV0LG9iamVjdElkOnR9O3JldHVybntvYmplY3RJZDp0LGFjdGl2YXRlOnUoZSx0KSxhZGRFdmVudExpc3RlbmVyOmEoZSxuKSxjYWxjdWxhdGU6ZyhlLHQpLGNsZWFyQWxsQ2VsbEZvcm1hdHRpbmc6eShlLHQpLGNsZWFyQWxsQ2VsbHM6QyhlLHQpLGNsZWFyQWxsQ2VsbFZhbHVlczptKGUsdCksY2xlYXJDZWxsRm9ybWF0dGluZzpFKGUsdCksY2xlYXJDZWxsczpXKGUsdCksY2xlYXJDZWxsVmFsdWVzOnYoZSx0KSxjcmVhdGVEYXRhU3RyZWFtOkEoZSx0KSxkZWxldGU6ZihlLHQpLGZpbHRlckNlbGxzOiQoZSx0KSxnZXRDZWxsczp4KGUsdCksZ2V0TmFtZTpHKGUsdCkscHJvdGVjdDpJKGUsdCkscmVtb3ZlRXZlbnRMaXN0ZW5lcjpvKGUpLHNldENlbGxGb3JtYXR0aW5nOkQoZSx0KSxzZXRDZWxsTmFtZTpTKGUsdCksc2V0Q2VsbFZhbHVlczpOKGUsdCksc2V0TmFtZTpSKGUsdCl9fSxmPSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBEZWxldGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5EZWxldGVXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LCQ9KHQscik9PmFzeW5jKGEsbyxuLHMsaSxsPSEwKT0+e2goYFdvcmtzaGVldDogRmlsdGVyIGNlbGxzOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgLHtjb2x1bW5JbmRleDpvLGZpbHRlck9wZXJhdG9yOm4sY3JpdGVyaWExOnMsY3JpdGVyaWEyOmksdmlzaWJsZURyb3BEb3duOmx9KTtjb25zdCBjPXtjZWxsUmFuZ2U6YSxjcml0ZXJpYTE6cyxjcml0ZXJpYTI6aSxjb2x1bW5JbmRleDpvLGZpbHRlck9wZXJhdG9yOm4sb2JqZWN0SWQ6cix2aXNpYmxlRHJvcERvd246bH07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5GaWx0ZXJDZWxscyxjKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0seD0odCxyKT0+YXN5bmMgYT0+e2goYFdvcmtzaGVldDogR2V0IGNlbGxzOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgKTtjb25zdCBvPXtjZWxsUmFuZ2U6YSxvYmplY3RJZDpyfTtsZXQgbj1bXTt0cnl7bj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0Q2VsbHMsbyksaChgJHthfTpgLG4pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIG59LEc9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IEdldCBuYW1lICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtzaGVldE5hbWUscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEk9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IFByb3RlY3QgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5Qcm90ZWN0V29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxEPSh0LHIpPT5hc3luYyhhLG8pPT57aChgV29ya3NoZWV0OiBTZXQgY2VsbCBmb3JtYXR0aW5nOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgLG8pO2NvbnN0IG49e2NlbGxSYW5nZTphLGZvcm1hdHRpbmc6byxvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlNldENlbGxGb3JtYXR0aW5nLG4pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxTPSh0LHIpPT5hc3luYyhhLG8pPT57Y29uc3Qgbj1vLnRyaW0oKTtsZXQgcztpZighbil0aHJvdyBzPW5ldyBQYXJhbWV0ZXJFcnJvcihcIkNlbGwgcmFuZ2UgbmFtZSBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nXCIpLGQocykscztpZihuLmxlbmd0aD4yNTUpdGhyb3cgcz1uZXcgUGFyYW1ldGVyRXJyb3IoXCJDZWxsIHJhbmdlIG5hbWUgbXVzdCBiZSAyNTUgY2hhcmFjdGVycyBvciBsZXNzXCIpLGQocykscztpZigvW15hLXpBLVowLTlfLj9cXFxcXCInXS8udGVzdChuKSl0aHJvdyBzPW5ldyBQYXJhbWV0ZXJFcnJvcihcIkNlbGwgcmFuZ2UgbmFtZSBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNcIiksZChzKSxzO2lmKC9eXFxkfFxcZCQvLnRlc3QobikpdGhyb3cgcz1uZXcgUGFyYW1ldGVyRXJyb3IoXCJDZWxsIHJhbmdlIG5hbWUgbXVzdCBub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBudW1iZXJcIiksZChzKSxzO2goYFdvcmtzaGVldDogU2V0IGNlbGwgbmFtZTsgY2VsbFJhbmdlOiR7YX07IG5ld0NlbGxSYW5nZU5hbWU6JHtufSAoJHtyfSlgKTtjb25zdCBpPXtjZWxsUmFuZ2U6YSxuYW1lOm4sb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5TZXRDZWxsTmFtZSxpKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sTj0odCxyKT0+YXN5bmMoYSxvKT0+e2goYFdvcmtzaGVldDogU2V0IGNlbGwgdmFsdWVzOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgLG8pO2NvbnN0IG49e2NlbGxSYW5nZTphLG9iamVjdElkOnIsdmFsdWVzTWFwOm99O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuU2V0Q2VsbFZhbHVlcyxuKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sUj0odCxyKT0+YXN5bmMgYT0+e2NvbnN0IG89YS50cmltKCk7bGV0IG47aWYoIW8pdGhyb3cgbj1uZXcgUGFyYW1ldGVyRXJyb3IoXCJXb3Jrc2hlZXQgbmFtZSBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nXCIpLGQobiksbjtpZihvLmxlbmd0aD4zMSl0aHJvdyBuPW5ldyBQYXJhbWV0ZXJFcnJvcihcIldvcmtzaGVldCBuYW1lIG11c3QgYmUgMzEgY2hhcmFjdGVycyBvciBsZXNzXCIpLGQobiksbjtoKGBXb3Jrc2hlZXQ6IFNldCBuYW1lOyBuZXdXb3Jrc2hlZXROYW1lOiR7b30gKCR7cn0pYCk7Y29uc3Qgcz17bmV3V29ya3NoZWV0TmFtZTpvLG9iamVjdElkOnJ9O3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlNldFdvcmtzaGVldE5hbWUscyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFU9KGUsdCxyLGEpPT57dmFyIG87dHJ5e2NvbnN0IG49ay5nZXQoZSk7aWYoIW4pdGhyb3cgbmV3IEFwaUVycm9yKGBVbmFibGUgdG8gZmluZCByZWdpc3RlcmVkIGRhdGEgc3RyZWFtIHdpdGggaWQgJHtlfWApO3ZvaWQgMCE9PShudWxsIT09KG89bi50aW1lcikmJnZvaWQgMCE9PW8/bzp2b2lkIDApJiZGKGUpO2NvbnN0e2NlbGxSYW5nZTpzLHVwZGF0ZUludGVydmFsOml9PW4uZGF0YVN0cmVhbSxsPWFzeW5jKCk9Pntjb25zdCBvPWF3YWl0IHQoKTt0cnl7YXdhaXQgTihyLGEpKHMsW1tvXV0pfWNhdGNoKHQpe3AoYFVuYWJsZSB0byB1cGRhdGUgY2VsbCByYW5nZSBmb3Igc3RyZWFtIHdpdGggaWQgJHtlfTogJHtudWxsPT10P3ZvaWQgMDp0Lm1lc3NhZ2V9YCl9fSxjPXdpbmRvdy5zZXRJbnRlcnZhbChsLGkpO24udGltZXI9Y31jYXRjaChlKXt0aHJvdyBkKGUpLGV9fSxGPWU9Pnt2YXIgdDt0cnl7Y29uc3Qgcj1rLmdldChlKTtpZighcil0aHJvdyBuZXcgQXBpRXJyb3IoYFVuYWJsZSB0byBmaW5kIHJlZ2lzdGVyZWQgZGF0YSBzdHJlYW0gd2l0aCBpZCAke2V9YCk7aWYodm9pZCAwPT09KG51bGwhPT0odD1yLnRpbWVyKSYmdm9pZCAwIT09dD90OnZvaWQgMCkpcmV0dXJuO3dpbmRvdy5jbGVhckludGVydmFsKHIudGltZXIpLHIudGltZXI9dm9pZCAwfWNhdGNoKGUpe3Rocm93IGQoZSksZX19LEw9bmV3IE1hcCxQPShyLGEpPT5hc3luYyhvLG4pPT57aWYoIWF8fCFhLmV2ZW50VGFyZ2V0fHwhYS5vYmplY3RJZCl7Y29uc3QgZT1uZXcgRXZlbnRFcnJvcihcIkV2ZW50IHJlZ2lzdHJhdGlvbiBtaXNzaW5nIHJlcXVpcmVkIHZhbHVlc1wiKTt0aHJvdyBkKGUpLGV9Y29uc3Qgcz1PYmplY3Qua2V5cyh0KS5maW5kKChlPT5lLnRvTG93ZXJDYXNlKCk9PT1vLnRvTG93ZXJDYXNlKCkpKTtpZighcyl7Y29uc3QgZT1uZXcgRXZlbnRFcnJvcihgVW5zdXBwb3J0ZWQgZXZlbnQgbmFtZTogJHtvfWApO3Rocm93IGQoZSksZX1hLmV2ZW50TmFtZT10W3NdLGgoXCJSZWdpc3RlcmluZyBldmVudFwiLGEpO3RyeXtjb25zdCB0PWF3YWl0IHIuZGlzcGF0Y2goZS5SZWdpc3RlckV2ZW50LGEpO0wuc2V0KHQsbil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcih2b2lkIDAsZSl9fSxqPXQ9PmFzeW5jIHI9PntsZXQgYTtmb3IoY29uc3RbZSx0XW9mIEwpaWYodD09PXIpe2E9ZTticmVha31pZighYSl0aHJvdyBuZXcgRXZlbnRFcnJvcjtoKFwiRGVyZWdpc3RlcmluZyBldmVudDpcIixhKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkRlcmVnaXN0ZXJFdmVudCxhKSxMLmRlbGV0ZShhKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sTz0oZSxhLG8pPT57dmFyIG4scztzd2l0Y2goby5ldmVudFRhcmdldCl7Y2FzZSByLldvcmtib29rOnN3aXRjaChudWxsPT09KG49by5ldmVudE5hbWUpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLnRvVXBwZXJDYXNlKCkpe2Nhc2UgdC5BY3RpdmF0ZS50b1VwcGVyQ2FzZSgpOmNhc2UgdC5DbG9zZS50b1VwcGVyQ2FzZSgpOmNhc2UgdC5EZWFjdGl2YXRlLnRvVXBwZXJDYXNlKCk6cmV0dXJuIGUoKTtjYXNlIHQuQWRkV29ya3NoZWV0LnRvVXBwZXJDYXNlKCk6Y2FzZSB0LkRlbGV0ZVdvcmtzaGVldC50b1VwcGVyQ2FzZSgpOnJldHVybiBlKGIoYSxvLndvcmtzaGVldE9iamVjdElkLFAsaikpO2RlZmF1bHQ6dGhyb3cgbmV3IEV2ZW50RXJyb3IoYFVuZXhwZWN0ZWQgd29ya2Jvb2sgZXZlbnQ6ICR7by5ldmVudE5hbWV9YCl9Y2FzZSByLldvcmtzaGVldDpzd2l0Y2gobnVsbD09PShzPW8uZXZlbnROYW1lKXx8dm9pZCAwPT09cz92b2lkIDA6cy50b1VwcGVyQ2FzZSgpKXtjYXNlIHQuQWN0aXZhdGUudG9VcHBlckNhc2UoKTpyZXR1cm4gZSgpO2Nhc2UgdC5DaGFuZ2UudG9VcHBlckNhc2UoKTpyZXR1cm4gZShvLmNoYW5nZWRDZWxscyk7Y2FzZSB0LkRlYWN0aXZhdGUudG9VcHBlckNhc2UoKTpyZXR1cm4gZSgpO2RlZmF1bHQ6dGhyb3cgbmV3IEV2ZW50RXJyb3IoYFVuZXhwZWN0ZWQgd29ya3NoZWV0IGV2ZW50OiAke28uZXZlbnROYW1lfWApfWRlZmF1bHQ6dGhyb3cgbmV3IEV2ZW50RXJyb3IoYFVuZXhwZWN0ZWQgZXZlbnQgdGFyZ2V0OiAke28uZXZlbnRUYXJnZXR9YCl9fSxCPSh0LHIpPT5hc3luYygpPT57aChgV29ya2Jvb2s6IEFjdGl2YXRlICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkFjdGl2YXRlV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFY9KHQscixhLG8pPT5hc3luYygpPT57bGV0IG47aChgV29ya2Jvb2s6IEFkZCB3b3Jrc2hlZXQgKCR7cn0pYCk7dHJ5e249YXdhaXQgdC5kaXNwYXRjaChlLkFkZFdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBiKHQsbixhLG8pfSxNPSh0LHIpPT5hc3luYygpPT57aChgV29ya2Jvb2s6IENhbGN1bGF0ZSAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNhbGN1bGF0ZVdvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSx6PSh0LHIpPT5hc3luYygpPT57aChgV29ya2Jvb2s6IENsb3NlICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkNsb3NlV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFQ9KGUsdCxhLG8pPT57Y29uc3Qgbj17ZXZlbnRUYXJnZXQ6ci5Xb3JrYm9vayxvYmplY3RJZDp0fTtyZXR1cm57b2JqZWN0SWQ6dCxhY3RpdmF0ZTpCKGUsdCksYWRkV29ya3NoZWV0OlYoZSx0LGEsbyksYWRkRXZlbnRMaXN0ZW5lcjphKGUsbiksY2FsY3VsYXRlOk0oZSx0KSxjbG9zZTp6KGUsdCksZ2V0Q2FsY3VsYXRpb25Nb2RlOlEoZSx0KSxnZXROYW1lOkgoZSx0KSxnZXRXb3Jrc2hlZXRCeU5hbWU6XyhlLHQsYSxvKSxnZXRXb3Jrc2hlZXRzOnEoZSx0LGEsbykscmVtb3ZlRXZlbnRMaXN0ZW5lcjpvKGUpLHNhdmU6SihlLHQpLHNhdmVBczpLKGUsdCl9fSxRPSh0LHIpPT5hc3luYygpPT57aChcIldvcmtib29rOiBHZXQgY2FsY3VsYXRpb24gbW9kZVwiKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRDYWxjdWxhdGlvbk1vZGUscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEg9KHQscik9PmFzeW5jKCk9PntoKGBXb3JrYm9vazogR2V0IG5hbWUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya2Jvb2tOYW1lLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxfPSh0LHIsYSxvKT0+YXN5bmMgbj0+e2xldCBzO2goYFdvcmtib29rOiBHZXQgd29ya3NoZWV0IGJ5IG5hbWU6ICR7bn0gKCR7cn0pYCk7dHJ5e2lmKHM9YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtzaGVldEJ5TmFtZSx7b2JqZWN0SWQ6cix3b3Jrc2hlZXROYW1lOm59KSxudWxsPT09cylyZXR1cm4gbnVsbH1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBiKHQscyxhLG8pfSxxPSh0LHIsYSxvKT0+YXN5bmMoKT0+e2xldCBuO2goYFdvcmtib29rOiBHZXQgd29ya3NoZWV0cyAoJHtyfSlgKTt0cnl7bj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0cyxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBuLm1hcCgoZT0+Yih0LGUsYSxvKSkpfSxKPSh0LHIpPT5hc3luYygpPT57aChgV29ya2Jvb2s6IFNhdmUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuU2F2ZVdvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxLPSh0LHIpPT5hc3luYyBhPT57aChgV29ya2Jvb2s6IFNhdmUgYXM7IGZpbGVQYXRoOiR7YX0gKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuU2F2ZVdvcmtib29rQXMse2ZpbGVQYXRoOmEsb2JqZWN0SWQ6cn0pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxYPXQ9PmFzeW5jKCk9PntsZXQgcjtoKFwiQXBwbGljYXRpb246IENyZWF0ZSB3b3JrYm9va1wiKTt0cnl7cj1hd2FpdCB0LmRpc3BhdGNoKGUuQ3JlYXRlV29ya2Jvb2spfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIFQodCxyLFAsail9LFo9dD0+YXN5bmMgcj0+e2xldCBhO2goYEFwcGxpY2F0aW9uOiBHZXQgd29ya2Jvb2s7IGlkOiR7cn1gKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya2Jvb2tCeUlkLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIFQodCxhLFAsail9LFk9dD0+YXN5bmMoKT0+e2xldCByO2goXCJBcHBsaWNhdGlvbjogR2V0IHdvcmtib29rc1wiKTt0cnl7cj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya2Jvb2tzKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiByLm1hcCgoZT0+VCh0LGUsUCxqKSkpfSxlZT10PT5hc3luYyByPT57aChgQXBwbGljYXRpb246IEdldCB3b3Jrc2hlZXQ7IGlkOiR7cn1gKTt0cnl7cj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0QnlJZCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBiKHQscixQLGopfSx0ZT10PT5hc3luYyByPT57bGV0IGE7aChgQXBwbGljYXRpb246IE9wZW4gd29ya2Jvb2s7IGZpbGVQYXRoOiR7cn1gKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuT3Blbldvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIFQodCxhLFAsail9LHJlPXQ9PmFzeW5jKHI9ITApPT57aChgQXBwbGljYXRpb246IFF1aXQ7IGRpc3BsYXlBbGVydHM6JHtyfWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlF1aXRBcHBsaWNhdGlvbixyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX07dmFyIGFlLG9lOyFmdW5jdGlvbihlKXtlLkV4Y2VsQXBwbGljYXRpb249XCJFWENFTC1BUFBcIn0oYWV8fChhZT17fSkpLGZ1bmN0aW9uKGUpe2VbZS5JbmZvPTFdPVwiSW5mb1wiLGVbZS5XYXJuPTJdPVwiV2FyblwiLGVbZS5FcnJvcj0zXT1cIkVycm9yXCJ9KG9lfHwob2U9e30pKTtjb25zdCBuZT1cImV4Y2VsLWFkYXB0ZXJcIixzZT13KCk7bGV0IGllO2NvbnN0IGxlPWFzeW5jKHQ9ITEpPT57dHJ5e2F3YWl0KGFzeW5jIGU9Pnt0cnl7aChcIlJlZ2lzdGVyaW5nIHVzYWdlXCIpLGF3YWl0IGZpbi5TeXN0ZW0ucmVnaXN0ZXJVc2FnZSh7dHlwZTpcImludGVncmF0aW9uLWZlYXR1cmVcIixkYXRhOnthcGlWZXJzaW9uOm4sY29tcG9uZW50TmFtZTplfX0pfWNhdGNoKHQpe3AoYFVuYWJsZSB0byByZWdpc3RlciB1c2FnZSBmb3IgZmVhdHVyZSAke2V9OiAke251bGw9PXQ/dm9pZCAwOnQubWVzc2FnZX1gKX19KShhZS5FeGNlbEFwcGxpY2F0aW9uKTt7YXdhaXQoYXN5bmMoKT0+e3ZhciBlO2NvbnN0IHQ9bnVsbD09PShlPShhd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKS5nZXRNYW5pZmVzdCgpKS5hcHBBc3NldHMpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmZpbmQoKGU9PmUuYWxpYXM9PT1uZSkpO2lmKHQpcmV0dXJuIHZvaWQgcChcIkRldGVjdGVkIGFkYXB0ZXIgcGFja2FnZSBpbiBhcHAgbWFuaWZlc3QgYXBwQXNzZXRzXCIsdCk7aWYoYXdhaXQgZGUoKSlyZXR1cm4gdm9pZCBoKFwiVXNpbmcgZXhpc3RpbmcgYWRhcHRlciBwYWNrYWdlXCIpO2NvbnN0IHI9e2FsaWFzOm5lLHNyYzpgaHR0cHM6Ly9jZG4ub3BlbmZpbi5jby9yZWxlYXNlL2ludGVncmF0aW9ucy9leGNlbC8ke259L09wZW5GaW4uRXhjZWwuemlwYCx0YXJnZXQ6XCJPcGVuRmluLkV4Y2VsLmV4ZVwiLHZlcnNpb246bn07aChcIkRvd25sb2FkaW5nIGFkYXB0ZXIgcGFja2FnZVwiLHIpO3RyeXthd2FpdCBmaW4uU3lzdGVtLmRvd25sb2FkQXNzZXQociwoKCk9Pnt9KSl9Y2F0Y2goZSl7dGhyb3cgZChcIlVuYWJsZSB0byBkb3dubG9hZCBhZGFwdGVyIHBhY2thZ2VcIiksZX19KSgpO2NvbnN0e3NlY3VyaXR5UmVhbG06ZSxwb3J0OnJ9PWF3YWl0IGZpbi5TeXN0ZW0uZ2V0UnVudGltZUluZm8oKTtsZXR7bGljZW5zZUtleTphfT1hd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKS5nZXRNYW5pZmVzdCgpO2E9bnVsbCE9YT9hOlwiTk9fTElDRU5TRV9LRVlcIjtjb25zdCBvPWZpbi5tZS51dWlkO2goXCJJbml0aWFsaXppbmcgYWRhcHRlclwiLHthZGFwdGVyTG9nZ2luZ0VuYWJsZWQ6dCxjaGFubmVsTmFtZTpzZSxsaWNlbnNlS2V5OmEscG9ydDpyLHNlY3VyaXR5UmVhbG06ZSx1dWlkOm99KSxmaW4uU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2Vzcyh7YWxpYXM6bmUsYXJndW1lbnRzOmAke299ICR7YX0gJHtyfSAke2V9ICR7c2V9ICR7dH1gfSl9Y29uc3QgYT1maW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3Qoc2Use3BheWxvYWQ6e3ZlcnNpb246bn19KSxvPW5ldyBQcm9taXNlKChlPT57c2V0VGltZW91dChlLDJlNCl9KSkudGhlbigoKCk9Pnt0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0aW9uIHRvIGFkYXB0ZXIgdGltZWQgb3V0XCIpfSkpO2llPWF3YWl0IFByb21pc2UucmFjZShbYSxvXSksaChgQ29ubmVjdGVkIHRvIGFkYXB0ZXIgJHtpZS5wcm92aWRlcklkZW50aXR5LnV1aWR9IG9uIGNoYW5uZWwgJHtzZX1gKSxpZS5yZWdpc3RlcihlLkxvZ01lc3NhZ2UsY2UpLGllLnJlZ2lzdGVyKGUuRXZlbnRGaXJlZCwocj1pZSxlPT57Y29uc3R7ZXZlbnRSZWdpc3RyYXRpb25JZDp0fT1lLGE9TC5nZXQodCk7aWYoIWEpdGhyb3cgbmV3IEV2ZW50RXJyb3IoYE5vIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXIgZm91bmQgZm9yIGlkOiAke3R9YCk7aChcIkV2ZW50IHBheWxvYWQgcmVjZWl2ZWRcIixlKSxPKGEscixlKX0pKX1jYXRjaChlKXtjb25zdCB0PW5ldyBJbml0aWFsaXphdGlvbkVycm9yKHZvaWQgMCxlKTt0aHJvdyBkKHQpLHR9dmFyIHI7cmV0dXJue2FkYXB0ZXI6e2NoYW5uZWxOYW1lOnNlLHZlcnNpb246bn0sY3JlYXRlV29ya2Jvb2s6WChpZSksZ2V0V29ya2Jvb2tCeUlkOlooaWUpLGdldFdvcmtib29rczpZKGllKSxnZXRXb3Jrc2hlZXRCeUlkOmVlKGllKSxvcGVuV29ya2Jvb2s6dGUoaWUpLHF1aXQ6cmUoaWUpfX0sY2U9ZT0+e2NvbnN0e21lc3NhZ2U6dCx0eXBlOnJ9PWUsYT1cIlthZGFwdGVyXVwiO3N3aXRjaChyKXtjYXNlIG9lLkVycm9yOmQodCxhKTticmVhaztjYXNlIG9lLkluZm86aChhLHQpO2JyZWFrO2Nhc2Ugb2UuV2FybjpwKGEsdCl9fSxkZT1hc3luYygpPT57dHJ5e2NvbnN0IGU9YXdhaXQgZmluLlN5c3RlbS5nZXRBcHBBc3NldEluZm8oe2FsaWFzOm5lfSk7cmV0dXJuIGUmJmUudmVyc2lvbj09PW59Y2F0Y2goZSl7cmV0dXJuITF9fTt2YXIgaGUscGUsd2Usa2UsdWU7IWZ1bmN0aW9uKGUpe2UuQ29udGludW91cz1cIkNvbnRpbnVvdXNcIixlLkRhc2g9XCJEYXNoXCIsZS5EYXNoRG90PVwiRGFzaERvdFwiLGUuRGFzaERvdERvdD1cIkRhc2hEb3REb3RcIixlLkRvdD1cIkRvdFwiLGUuRG91YmxlPVwiRG91YmxlXCIsZS5TbGFudERhc2hEb3Q9XCJTbGFudERhc2hEb3RcIixlLk5vbmU9XCJOb25lXCJ9KGhlfHwoaGU9e30pKSxmdW5jdGlvbihlKXtlLkNlbnRlcj1cIkNlbnRlclwiLGUuQ2VudGVyQWNyb3NzU2VsZWN0aW9uPVwiQ2VudGVyQWNyb3NzU2VsZWN0aW9uXCIsZS5EaXN0cmlidXRlZD1cIkRpc3RyaWJ1dGVkXCIsZS5GaWxsPVwiRmlsbFwiLGUuR2VuZXJhbD1cIkdlbmVyYWxcIixlLkp1c3RpZnk9XCJKdXN0aWZ5XCIsZS5MZWZ0PVwiTGVmdFwiLGUuUmlnaHQ9XCJSaWdodFwifShwZXx8KHBlPXt9KSksZnVuY3Rpb24oZSl7ZS5BdXRvbWF0aWM9XCJBdXRvbWF0aWNcIixlLkNoZWNrZXI9XCJDaGVja2VyXCIsZS5Dcmlzc0Nyb3NzPVwiQ3Jpc3NDcm9zc1wiLGUuRG93bj1cIkRvd25cIixlLkdyYXkxNj1cIkdyYXkxNlwiLGUuR3JheTI1PVwiR3JheTI1XCIsZS5HcmF5NTA9XCJHcmF5NTBcIixlLkdyYXk3NT1cIkdyYXk3NVwiLGUuR3JheTg9XCJHcmF5OFwiLGUuR3JpZD1cIkdyaWRcIixlLkhvcml6b250YWw9XCJIb3Jpem9udGFsXCIsZS5MaWdodERvd249XCJMaWdodERvd25cIixlLkxpZ2h0SG9yaXpvbnRhbD1cIkxpZ2h0SG9yaXpvbnRhbFwiLGUuTGlnaHRVcD1cIkxpZ2h0VXBcIixlLkxpZ2h0VmVydGljYWw9XCJMaWdodFZlcnRpY2FsXCIsZS5MaW5lYXJHcmFkaWVudD1cIkxpbmVhckdyYWRpZW50XCIsZS5Ob25lPVwiTm9uZVwiLGUuUmVjdGFuZ3VsYXJHcmFkaWVudD1cIlJlY3Rhbmd1bGFyR3JhZGllbnRcIixlLlNlbWlHcmF5NzU9XCJTZW1pR3JheTc1XCIsZS5Tb2xpZD1cIlNvbGlkXCIsZS5VcD1cIlVwXCIsZS5WZXJ0aWNhbD1cIlZlcnRpY2FsXCJ9KHdlfHwod2U9e30pKSxmdW5jdGlvbihlKXtlLkJvdHRvbT1cIkJvdHRvbVwiLGUuQ2VudGVyPVwiQ2VudGVyXCIsZS5EaXN0cmlidXRlZD1cIkRpc3RyaWJ1dGVkXCIsZS5KdXN0aWZ5PVwiSnVzdGlmeVwiLGUuVG9wPVwiVG9wXCJ9KGtlfHwoa2U9e30pKSxmdW5jdGlvbihlKXtlLkFuZD1cIkFuZFwiLGUuT3I9XCJPclwiLGUuVG9wMTBJdGVtcz1cIlRvcDEwSXRlbXNcIixlLkJvdHRvbTEwSXRlbXM9XCJCb3R0b20xMEl0ZW1zXCIsZS5Ub3AxMFBlcmNlbnQ9XCJUb3AxMFBlcmNlbnRcIixlLkJvdHRvbTEwUGVyY2VudD1cIkJvdHRvbTEwUGVyY2VudFwiLGUuRmlsdGVyVmFsdWVzPVwiRmlsdGVyVmFsdWVzXCJ9KHVlfHwodWU9e30pKTt2YXIgZ2U9by5kcSxtZT1vLk1TLHllPW8ueFEsQ2U9by5zTyx2ZT1vLlp1LEVlPW8uSTMsV2U9by4kVSxBZT1vLmkwLGJlPW8uY1gsZmU9by5fVywkZT1vLlUkLHhlPW8uVTcsR2U9by5yZDtleHBvcnR7Z2UgYXMgQWRhcHRlckVycm9yLG1lIGFzIEFwaUVycm9yLHllIGFzIEV2ZW50RXJyb3IsQ2UgYXMgRXhjZWxDZWxsQm9yZGVyTGluZVN0eWxlLHZlIGFzIEV4Y2VsQ2VsbEhvcml6b250YWxBbGlnbm1lbnQsRWUgYXMgRXhjZWxDZWxsUGF0dGVybixXZSBhcyBFeGNlbENlbGxWZXJ0aWNhbEFsaWdubWVudCxBZSBhcyBFeGNlbEZpbHRlck9wZXJhdG9yLGJlIGFzIEluaXRpYWxpemF0aW9uRXJyb3IsZmUgYXMgUGFyYW1ldGVyRXJyb3IsJGUgYXMgZGlzYWJsZUxvZ2dpbmcseGUgYXMgZW5hYmxlTG9nZ2luZyxHZSBhcyBnZXRFeGNlbEFwcGxpY2F0aW9ufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldEN1cnJlbnRDaGFubmVsIH0gZnJvbSBcIkBmaW5vcy9mZGMzXCI7XG5pbXBvcnQge1xuXHR0eXBlIENlbGwsXG5cdHR5cGUgRXhjZWxBcHBsaWNhdGlvbixcblx0dHlwZSBFeGNlbFdvcmtib29rLFxuXHR0eXBlIEV4Y2VsV29ya3NoZWV0LFxuXHRnZXRFeGNlbEFwcGxpY2F0aW9uXG59IGZyb20gXCJAb3BlbmZpbi9leGNlbFwiO1xuXG5jb25zdCBLTk9XTl9JTlNUUlVNRU5UUyA9IFtcIlRTTEFcIiwgXCJNU0ZUXCIsIFwiQUFQTFwiXTtcblxubGV0IGV4Y2VsOiBFeGNlbEFwcGxpY2F0aW9uIHwgdW5kZWZpbmVkO1xubGV0IG9wZW5Xb3JrYm9va3M6XG5cdHwge1xuXHRcdFx0Ym9vazogRXhjZWxXb3JrYm9vaztcblx0XHRcdG5hbWU6IHN0cmluZztcblx0ICB9W11cblx0fCB1bmRlZmluZWQ7XG5sZXQgc2VsZWN0ZWRXb3JrYm9va0luZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5sZXQgb3BlbldvcmtzaGVldHM6XG5cdHwge1xuXHRcdFx0c2hlZXQ6IEV4Y2VsV29ya3NoZWV0O1xuXHRcdFx0bmFtZTogc3RyaW5nO1xuXHQgIH1bXVxuXHR8IHVuZGVmaW5lZDtcbmxldCBzZWxlY3RlZFdvcmtzaGVldEluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBjb21wb25lbnRzLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXN1bHRzLWNvbnRhaW5lclwiKTtcblx0XHRpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuXHRcdFx0cmVzdWx0c0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fVxuXG5cdFx0ZXhjZWwgPSBhd2FpdCBnZXRFeGNlbEFwcGxpY2F0aW9uKCk7XG5cblx0XHRhd2FpdCBwb3B1bGF0ZVdvcmtib29rcygpO1xuXG5cdFx0Y29uc3Qgb3BlbkV4Y2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLWV4Y2VsXCIpO1xuXHRcdGlmIChvcGVuRXhjZWxCdXR0b24pIHtcblx0XHRcdG9wZW5FeGNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRhd2FpdCBvcGVuRXhjZWwoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZnJlc2hXb3JrYm9va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya2Jvb2stcmVmcmVzaFwiKTtcblx0XHRpZiAocmVmcmVzaFdvcmtib29rQnV0dG9uKSB7XG5cdFx0XHRyZWZyZXNoV29ya2Jvb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHBvcHVsYXRlV29ya2Jvb2tzKCkpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZnJlc2hXb3Jrc2hlZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzaGVldC1yZWZyZXNoXCIpO1xuXHRcdGlmIChyZWZyZXNoV29ya3NoZWV0QnV0dG9uKSB7XG5cdFx0XHRyZWZyZXNoV29ya3NoZWV0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBwb3B1bGF0ZVdvcmtzaGVldHMoKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3Blbldvcmtib29rc1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya2Jvb2tzXCIpO1xuXHRcdGlmIChvcGVuV29ya2Jvb2tzU2VsZWN0KSB7XG5cdFx0XHRvcGVuV29ya2Jvb2tzU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYXN5bmMgKGUpID0+XG5cdFx0XHRcdHNlbGVjdFdvcmtib29rKChlLnRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6IHN0cmluZyB9KS52YWx1ZSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3BlbldvcmtzaGVldHNTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmtzaGVldHNcIik7XG5cdFx0aWYgKG9wZW5Xb3Jrc2hlZXRzU2VsZWN0KSB7XG5cdFx0XHRvcGVuV29ya3NoZWV0c1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jIChlKSA9PlxuXHRcdFx0XHRzZWxlY3RXb3Jrc2hlZXQoKGUudGFyZ2V0IGFzIHVua25vd24gYXMgeyB2YWx1ZTogc3RyaW5nIH0pLnZhbHVlKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRjb25zdCBzZXRWYWx1ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0LXZhbHVlXCIpO1xuXHRcdGlmIChzZXRWYWx1ZUJ1dHRvbikge1xuXHRcdFx0c2V0VmFsdWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0YXdhaXQgc2V0Q2VsbFZhbHVlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHNob3dFcnJvcihlcnIpO1xuXHR9XG59XG5cbi8qKlxuICogU2hvdyBhbiBlcnJvciBvbiB0aGUgVUkuXG4gKiBAcGFyYW0gZXJyIFRoZSBlcnJvciB0byBkaXNwbGF5LlxuICovXG5mdW5jdGlvbiBzaG93RXJyb3IoZXJyOiB1bmtub3duKTogdm9pZCB7XG5cdGNvbnN0IGVyckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JcIik7XG5cdGlmIChlcnJEb20pIHtcblx0XHRlcnJEb20uaW5uZXJIVE1MID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGVycik7XG5cdH1cbn1cblxuLyoqXG4gKiBPcGVuIHRoZSBleGNlbCBpbnN0YW5jZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gb3BlbkV4Y2VsKCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGlmIChcblx0XHRcdG9wZW5Xb3JrYm9va3MgJiZcblx0XHRcdHNlbGVjdGVkV29ya2Jvb2tJbmRleCAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRvcGVuV29ya3NoZWV0cyAmJlxuXHRcdFx0c2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHQvLyBPcGVuIHRoZSBzZWxlY3Qgd29yayBib29rIGFuZCBzaGVldFxuXHRcdFx0Ly8gaWYgYW55dGhpbmcgdGhyb3dzIGFuIGV4Y2VwdGlvbiBqdXN0IG9wZW4gYSBuZXcgd29ya2Jvb2tcblx0XHRcdGF3YWl0IHNlbGVjdFdvcmtib29rKG9wZW5Xb3JrYm9va3Nbc2VsZWN0ZWRXb3JrYm9va0luZGV4XS5uYW1lKTtcblx0XHRcdGF3YWl0IHNlbGVjdFdvcmtzaGVldChvcGVuV29ya3NoZWV0c1tzZWxlY3RlZFdvcmtzaGVldEluZGV4XS5uYW1lKTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdGlmIChleGNlbCkge1xuXHRcdFx0YXdhaXQgZXhjZWwuY3JlYXRlV29ya2Jvb2soKTtcblx0XHRcdGF3YWl0IHBvcHVsYXRlV29ya2Jvb2tzKCk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIGxpc3Qgb2Ygd29ya2Jvb2tzLlxuICovXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVdvcmtib29rcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKGV4Y2VsKSB7XG5cdFx0c2VsZWN0ZWRXb3JrYm9va0luZGV4ID0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiN3b3JrYm9vay1yZWZyZXNoXCIpO1xuXHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3dvcmtib29rc1wiKTtcblxuXHRcdGlmIChyZWZyZXNoQnV0dG9uICYmIHNlbGVjdCkge1xuXHRcdFx0cmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdFx0b3Blbldvcmtib29rcyA9IFtdO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB3b3JrYm9va3MgPSBhd2FpdCBleGNlbC5nZXRXb3JrYm9va3MoKTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IGJvb2sgb2Ygd29ya2Jvb2tzKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmFtZSA9IGF3YWl0IGJvb2suZ2V0TmFtZSgpO1xuXHRcdFx0XHRcdG9wZW5Xb3JrYm9va3MucHVzaCh7XG5cdFx0XHRcdFx0XHRib29rLFxuXHRcdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgb3B0aW9uRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRvcHRpb25FbXB0eS5pbm5lckhUTUwgPSBcIi0tLS1TZWxlY3Qgd29ya2Jvb2stLS0tXCI7XG5cdFx0XHRcdG9wdGlvbkVtcHR5LnZhbHVlID0gXCJcIjtcblx0XHRcdFx0b3B0aW9uRW1wdHkuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRvcHRpb25FbXB0eS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdHNlbGVjdC5hcHBlbmQob3B0aW9uRW1wdHkpO1xuXG5cdFx0XHRcdGZvciAoY29uc3Qgb3Blbldvcmtib29rIG9mIG9wZW5Xb3JrYm9va3MpIHtcblx0XHRcdFx0XHRjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRcdG9wdGlvbi5pbm5lckhUTUwgPSBvcGVuV29ya2Jvb2submFtZTtcblx0XHRcdFx0XHRvcHRpb24udmFsdWUgPSBvcGVuV29ya2Jvb2submFtZTtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdHNob3dFcnJvcihlcnIpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0c2VsZWN0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBTZWxlY3QgYSB3b3JrYm9vay5cbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB3b3JrYm9vayB0byBzZWxlY3QuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdFdvcmtib29rKG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAob3Blbldvcmtib29rcykge1xuXHRcdGNvbnN0IG5ld1dvcmtib29rSW5kZXggPSBvcGVuV29ya2Jvb2tzLmZpbmRJbmRleCgodykgPT4gdy5uYW1lID09PSBuYW1lKTtcblxuXHRcdGlmIChuZXdXb3JrYm9va0luZGV4ICE9PSBzZWxlY3RlZFdvcmtib29rSW5kZXgpIHtcblx0XHRcdHNlbGVjdGVkV29ya2Jvb2tJbmRleCA9IG5ld1dvcmtib29rSW5kZXg7XG5cdFx0XHRpZiAobmV3V29ya2Jvb2tJbmRleCA+PSAwKSB7XG5cdFx0XHRcdGF3YWl0IG9wZW5Xb3JrYm9va3Nbc2VsZWN0ZWRXb3JrYm9va0luZGV4XS5ib29rLmFjdGl2YXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXdhaXQgcG9wdWxhdGVXb3Jrc2hlZXRzKCk7XG5cdH1cbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgd29ya3NoZWV0cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXb3Jrc2hlZXRzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoZXhjZWwpIHtcblx0XHRzZWxlY3RlZFdvcmtzaGVldEluZGV4ID0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiN3b3Jrc2hlZXQtcmVmcmVzaFwiKTtcblx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiN3b3Jrc2hlZXRzXCIpO1xuXG5cdFx0aWYgKHNlbGVjdCAmJiByZWZyZXNoQnV0dG9uICYmIG9wZW5Xb3JrYm9va3MgJiYgc2VsZWN0ZWRXb3JrYm9va0luZGV4ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0c2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG5cblx0XHRcdG9wZW5Xb3Jrc2hlZXRzID0gW107XG5cblx0XHRcdGNvbnN0IHdvcmtib29rID0gb3Blbldvcmtib29rc1tzZWxlY3RlZFdvcmtib29rSW5kZXhdO1xuXHRcdFx0aWYgKHdvcmtib29rKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qgc2hlZXRzID0gYXdhaXQgd29ya2Jvb2suYm9vay5nZXRXb3Jrc2hlZXRzKCk7XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IHNoZWV0IG9mIHNoZWV0cykge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmFtZSA9IGF3YWl0IHNoZWV0LmdldE5hbWUoKTtcblx0XHRcdFx0XHRcdG9wZW5Xb3Jrc2hlZXRzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRzaGVldCxcblx0XHRcdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9uRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0XHRcdG9wdGlvbkVtcHR5LmlubmVySFRNTCA9IFwiLS0tLVNlbGVjdCB3b3Jrc2hlZXQtLS0tXCI7XG5cdFx0XHRcdFx0b3B0aW9uRW1wdHkudmFsdWUgPSBcIlwiO1xuXHRcdFx0XHRcdG9wdGlvbkVtcHR5LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRvcHRpb25FbXB0eS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb25FbXB0eSk7XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IG9wZW5Xb3Jrc2hlZXQgb2Ygb3BlbldvcmtzaGVldHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0XHRcdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gb3BlbldvcmtzaGVldC5uYW1lO1xuXHRcdFx0XHRcdFx0b3B0aW9uLnZhbHVlID0gb3BlbldvcmtzaGVldC5uYW1lO1xuXHRcdFx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb24pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHRcdHNob3dFcnJvcihlcnIpO1xuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFNlbGVjdCBhIHdvcmtzaGVldC5cbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHdvcmtzaGVldCB0byBzZWxlY3QuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdFdvcmtzaGVldChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG9wZW5Xb3Jrc2hlZXRzKSB7XG5cdFx0Y29uc3QgbmV3V29ya3NoZWV0SW5kZXggPSBvcGVuV29ya3NoZWV0cy5maW5kSW5kZXgoKHcpID0+IHcubmFtZSA9PT0gbmFtZSk7XG5cblx0XHRpZiAobmV3V29ya3NoZWV0SW5kZXggIT09IHNlbGVjdGVkV29ya3NoZWV0SW5kZXgpIHtcblx0XHRcdGlmIChzZWxlY3RlZFdvcmtzaGVldEluZGV4ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29uc3Qgb2xkV29ya3NoZWV0ID0gb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF07XG5cdFx0XHRcdGlmIChvbGRXb3Jrc2hlZXQpIHtcblx0XHRcdFx0XHRhd2FpdCBvbGRXb3Jrc2hlZXQuc2hlZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVDZWxsQ2hhbmdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3RlZFdvcmtzaGVldEluZGV4ID0gbmV3V29ya3NoZWV0SW5kZXg7XG5cdFx0XHRpZiAoc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCA+PSAwKSB7XG5cdFx0XHRcdGF3YWl0IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdLnNoZWV0LmFjdGl2YXRlKCk7XG5cdFx0XHRcdGF3YWl0IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdLnNoZWV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ2VsbENoYW5nZSk7XG5cblx0XHRcdFx0Y29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI3Jlc3VsdHMtY29udGFpbmVyXCIpO1xuXHRcdFx0XHRpZiAocmVzdWx0c0NvbnRhaW5lcikge1xuXHRcdFx0XHRcdHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgY2VsbExvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjZWxsLWxvY2F0aW9uXCIpO1xuXHRcdFx0XHRpZiAoY2VsbExvY2F0aW9uKSB7XG5cdFx0XHRcdFx0Y2VsbExvY2F0aW9uLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY2VsbFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjZWxsLXZhbHVlXCIpO1xuXHRcdFx0XHRpZiAoY2VsbFZhbHVlKSB7XG5cdFx0XHRcdFx0Y2VsbFZhbHVlLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qgc2V0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3NldC12YWx1ZVwiKTtcblx0XHRcdFx0aWYgKHNldFZhbHVlKSB7XG5cdFx0XHRcdFx0c2V0VmFsdWUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEhhbmRsZSBhIGNoYW5nZSBmcm9tIHRoZSBleGNlbCB3b3Jrc2hlZXQuXG4gKiBAcGFyYW0gY2VsbHMgVGhlIGNlbGxzIHRoYXQgd2VyZSBjaGFuZ2VkLlxuICovXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVDZWxsQ2hhbmdlKGNlbGxzOiBDZWxsW10pOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgY2VsbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2VsbC1jaGFuZ2VzLWNvbnRhaW5lclwiKTtcblx0aWYgKGNlbGxDb250YWluZXIpIHtcblx0XHRjZWxsQ29udGFpbmVyLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGNlbGxzLCB1bmRlZmluZWQsIFwiICBcIik7XG5cblx0XHRmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcblx0XHRcdGlmIChLTk9XTl9JTlNUUlVNRU5UUy5pbmNsdWRlcyhjZWxsLnZhbHVlKSkge1xuXHRcdFx0XHRhd2FpdCBicm9hZGNhc3RJbnN0cnVtZW50KGNlbGwudmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFNldCBhIGNlbGwgdmFsdWUgaW4gZXhjZWwuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldENlbGxWYWx1ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG9wZW5Xb3Jrc2hlZXRzICYmIHNlbGVjdGVkV29ya3NoZWV0SW5kZXggIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IGNlbGxMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjY2VsbC1sb2NhdGlvblwiKTtcblx0XHRjb25zdCBjZWxsVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2NlbGwtdmFsdWVcIik7XG5cblx0XHRpZiAoY2VsbExvY2F0aW9uICYmIGNlbGxWYWx1ZSkge1xuXHRcdFx0Y29uc3QgY2VsbHMgPSBbW2NlbGxWYWx1ZS52YWx1ZV1dO1xuXHRcdFx0YXdhaXQgb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0uc2hlZXQuc2V0Q2VsbFZhbHVlcyhjZWxsTG9jYXRpb24udmFsdWUsIGNlbGxzKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBCcm9hZGNhc3QgYW5kIEZEQzMgaW5zdHJ1bWVudC5cbiAqIEBwYXJhbSBpbnN0cnVtZW50IFRoZSBpbnN0cnVtZW50IHRvIGJyb2FkY2FzdC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYnJvYWRjYXN0SW5zdHJ1bWVudChpbnN0cnVtZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnJvYWRjYXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjYnJvYWRjYXN0LWluc3RydW1lbnRcIik7XG5cdGlmIChicm9hZGNhc3RFbGVtZW50KSB7XG5cdFx0aWYgKHdpbmRvdy5mZGMzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBmZGNJbnN0cnVtZW50ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZmRjMy5pbnN0cnVtZW50XCIsXG5cdFx0XHRcdFx0aWQ6IHtcblx0XHRcdFx0XHRcdHRpY2tlcjogaW5zdHJ1bWVudFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb25zdCBjaGFubmVsID0gYXdhaXQgZ2V0Q3VycmVudENoYW5uZWwoKTtcblx0XHRcdFx0aWYgKGNoYW5uZWwpIHtcblx0XHRcdFx0XHRhd2FpdCBjaGFubmVsLmJyb2FkY2FzdChmZGNJbnN0cnVtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBpbnN0cnVtZW50O1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXJyKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YnJvYWRjYXN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiTm8gRkQzIENoYW5uZWwgYXZhaWxhYmxlXCI7XG5cdFx0fVxuXHR9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=