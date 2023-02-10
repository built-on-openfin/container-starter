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
/* harmony export */   "ChannelError": () => (/* binding */ ChannelError),
/* harmony export */   "ContextTypes": () => (/* binding */ ContextTypes),
/* harmony export */   "Convert": () => (/* binding */ Convert),
/* harmony export */   "Intents": () => (/* binding */ Intents),
/* harmony export */   "OpenError": () => (/* binding */ OpenError),
/* harmony export */   "ResolveError": () => (/* binding */ ResolveError),
/* harmony export */   "addContextListener": () => (/* binding */ addContextListener),
/* harmony export */   "addIntentListener": () => (/* binding */ addIntentListener),
/* harmony export */   "broadcast": () => (/* binding */ broadcast),
/* harmony export */   "compareVersionNumbers": () => (/* binding */ compareVersionNumbers),
/* harmony export */   "fdc3Ready": () => (/* binding */ fdc3Ready),
/* harmony export */   "findIntent": () => (/* binding */ findIntent),
/* harmony export */   "findIntentsByContext": () => (/* binding */ findIntentsByContext),
/* harmony export */   "getCurrentChannel": () => (/* binding */ getCurrentChannel),
/* harmony export */   "getInfo": () => (/* binding */ getInfo),
/* harmony export */   "getOrCreateChannel": () => (/* binding */ getOrCreateChannel),
/* harmony export */   "getSystemChannels": () => (/* binding */ getSystemChannels),
/* harmony export */   "joinChannel": () => (/* binding */ joinChannel),
/* harmony export */   "leaveCurrentChannel": () => (/* binding */ leaveCurrentChannel),
/* harmony export */   "open": () => (/* binding */ open),
/* harmony export */   "raiseIntent": () => (/* binding */ raiseIntent),
/* harmony export */   "raiseIntentForContext": () => (/* binding */ raiseIntentForContext),
/* harmony export */   "versionIsAtLeast": () => (/* binding */ versionIsAtLeast)
/* harmony export */ });
/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2019 FINOS FDC3 contributors - see NOTICE file
 */
var OpenError;

(function (OpenError) {
  OpenError["AppNotFound"] = "AppNotFound";
  OpenError["ErrorOnLaunch"] = "ErrorOnLaunch";
  OpenError["AppTimeout"] = "AppTimeout";
  OpenError["ResolverUnavailable"] = "ResolverUnavailable";
})(OpenError || (OpenError = {}));

var ResolveError;

(function (ResolveError) {
  ResolveError["NoAppsFound"] = "NoAppsFound";
  ResolveError["ResolverUnavailable"] = "ResolverUnavailable";
  ResolveError["ResolverTimeout"] = "ResolverTimeout";
})(ResolveError || (ResolveError = {}));

var ChannelError;

(function (ChannelError) {
  ChannelError["NoChannelFound"] = "NoChannelFound";
  ChannelError["AccessDenied"] = "AccessDenied";
  ChannelError["CreationFailed"] = "CreationFailed";
})(ChannelError || (ChannelError = {}));

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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var DEFAULT_TIMEOUT = 5000;
var UnavailableError = /*#__PURE__*/new Error('FDC3 DesktopAgent not available at `window.fdc3`.');
var TimeoutError = /*#__PURE__*/new Error('Timed out waiting for `fdc3Ready` event.');
var UnexpectedError = /*#__PURE__*/new Error('`fdc3Ready` event fired, but `window.fdc3` not set to DesktopAgent.');

function rejectIfNoGlobal(f) {
  return window.fdc3 ? f() : Promise.reject(UnavailableError);
}

function throwIfNoGlobal(f) {
  if (!window.fdc3) {
    throw UnavailableError;
  }

  return f();
}

var fdc3Ready = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(waitForMs) {
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
                }, waitForMs); // listen for the fdc3Ready event

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
      }
    }, _callee);
  }));

  return function fdc3Ready(_x) {
    return _ref.apply(this, arguments);
  };
}();
function open(app, context) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.open(app, context);
  });
}
function findIntent(intent, context) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.findIntent(intent, context);
  });
}
function findIntentsByContext(context) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.findIntentsByContext(context);
  });
}
function broadcast(context) {
  throwIfNoGlobal(function () {
    return window.fdc3.broadcast(context);
  });
}
function raiseIntent(intent, context, app) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.raiseIntent(intent, context, app);
  });
}
function raiseIntentForContext(context, app) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.raiseIntentForContext(context, app);
  });
}
function addIntentListener(intent, handler) {
  return throwIfNoGlobal(function () {
    return window.fdc3.addIntentListener(intent, handler);
  });
}
function addContextListener(contextTypeOrHandler, handler) {
  if (typeof contextTypeOrHandler !== 'function') {
    return throwIfNoGlobal(function () {
      return window.fdc3.addContextListener(contextTypeOrHandler, handler);
    });
  } else {
    return throwIfNoGlobal(function () {
      return window.fdc3.addContextListener(contextTypeOrHandler);
    });
  }
}
function getSystemChannels() {
  return rejectIfNoGlobal(function () {
    return window.fdc3.getSystemChannels();
  });
}
function joinChannel(channelId) {
  return rejectIfNoGlobal(function () {
    return window.fdc3.joinChannel(channelId);
  });
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
function getInfo() {
  return throwIfNoGlobal(function () {
    return window.fdc3.getInfo();
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
  ContextTypes["Contact"] = "fdc3.contact";
  ContextTypes["ContactList"] = "fdc3.contactList";
  ContextTypes["Country"] = "fdc3.country";
  ContextTypes["Instrument"] = "fdc3.instrument";
  ContextTypes["Organization"] = "fdc3.organization";
  ContextTypes["Portfolio"] = "fdc3.portfolio";
  ContextTypes["Position"] = "fdc3.position";
})(ContextTypes || (ContextTypes = {}));

// To parse this data:
//
//   import { Convert, Context, Contact, ContactList, Instrument, InstrumentList, Country, Organization, Portfolio, Position } from "./file";
//
//   const context = Convert.toContext(json);
//   const contact = Convert.toContact(json);
//   const contactList = Convert.toContactList(json);
//   const instrument = Convert.toInstrument(json);
//   const instrumentList = Convert.toInstrumentList(json);
//   const country = Convert.toCountry(json);
//   const organization = Convert.toOrganization(json);
//   const portfolio = Convert.toPortfolio(json);
//   const position = Convert.toPosition(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert = /*#__PURE__*/function () {
  function Convert() {}

  Convert.toContext = function toContext(json) {
    return cast(JSON.parse(json), r('Context'));
  };

  Convert.contextToJson = function contextToJson(value) {
    return JSON.stringify(uncast(value, r('Context')), null, 2);
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

  Convert.toCountry = function toCountry(json) {
    return cast(JSON.parse(json), r('Country'));
  };

  Convert.countryToJson = function countryToJson(value) {
    return JSON.stringify(uncast(value, r('Country')), null, 2);
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

  return Convert;
}();

function invalidValue(typ, val, key) {
  if (key === void 0) {
    key = '';
  }

  if (key) {
    throw Error("Invalid value for key \"" + key + "\". Expected type " + JSON.stringify(typ) + " but got " + JSON.stringify(val));
  }

  throw Error("Invalid value " + JSON.stringify(val) + " for type " + JSON.stringify(typ));
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

function transform(val, typ, getProps, key) {
  if (key === void 0) {
    key = '';
  }

  function transformPrimitive(typ, val) {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
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

    return invalidValue(typs, val);
  }

  function transformEnum(cases, val) {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ, val) {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val);
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
      return invalidValue('Date', val);
    }

    return d;
  }

  function transformObject(props, additional, val) {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val);
    }

    var result = {};
    Object.getOwnPropertyNames(props).forEach(function (key) {
      var prop = props[key];
      var v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === 'any') return val;

  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }

  if (typ === false) return invalidValue(typ, val);

  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }

  if (Array.isArray(typ)) return transformEnum(typ, val);

  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers') ? transformUnion(typ.unionMembers, val) : typ.hasOwnProperty('arrayItems') ? transformArray(typ.arrayItems, val) : typ.hasOwnProperty('props') ? transformObject(getProps(typ), typ.additional, val) : invalidValue(typ, val);
  } // Numbers can be parsed by Date but shouldn't be.


  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast(val, typ) {
  return transform(val, typ, jsonToJSProps);
}

function uncast(val, typ) {
  return transform(val, typ, jsToJSONProps);
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
  Context: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }], 'any'),
  ContactList: /*#__PURE__*/o([{
    json: 'contacts',
    js: 'contacts',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('Contact'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Contact: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('ContactID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  ContactID: /*#__PURE__*/o([{
    json: 'email',
    js: 'email',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'FDS_ID',
    js: 'FDS_ID',
    typ: /*#__PURE__*/u(undefined, '')
  }], ''),
  InstrumentList: /*#__PURE__*/o([{
    json: 'instruments',
    js: 'instruments',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('Instrument'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  Instrument: /*#__PURE__*/o([{
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/r('InstrumentID')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any'),
  InstrumentID: /*#__PURE__*/o([{
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
  }], ''),
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
    json: 'ISOALPHA2',
    js: 'ISOALPHA2',
    typ: /*#__PURE__*/u(undefined, '')
  }, {
    json: 'ISOALPHA3',
    js: 'ISOALPHA3',
    typ: /*#__PURE__*/u(undefined, '')
  }], ''),
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
  }], ''),
  Portfolio: /*#__PURE__*/o([{
    json: 'positions',
    js: 'positions',
    typ: /*#__PURE__*/a( /*#__PURE__*/r('Position'))
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
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
    typ: /*#__PURE__*/r('Instrument')
  }, {
    json: 'type',
    js: 'type',
    typ: ''
  }, {
    json: 'id',
    js: 'id',
    typ: /*#__PURE__*/u(undefined, /*#__PURE__*/m(''))
  }, {
    json: 'name',
    js: 'name',
    typ: /*#__PURE__*/u(undefined, '')
  }], 'any')
};

var Intents;

(function (Intents) {
  Intents["StartCall"] = "StartCall";
  Intents["StartChat"] = "StartChat";
  Intents["ViewChart"] = "ViewChart";
  Intents["ViewContact"] = "ViewContact";
  Intents["ViewQuote"] = "ViewQuote";
  Intents["ViewNews"] = "ViewNews";
  Intents["ViewInstrument"] = "ViewInstrument";
  Intents["ViewAnalysis"] = "ViewAnalysis";
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
/* harmony export */   "AdapterError": () => (/* binding */ ge),
/* harmony export */   "ApiError": () => (/* binding */ me),
/* harmony export */   "EventError": () => (/* binding */ ye),
/* harmony export */   "ExcelCellBorderLineStyle": () => (/* binding */ Ce),
/* harmony export */   "ExcelCellHorizontalAlignment": () => (/* binding */ ve),
/* harmony export */   "ExcelCellPattern": () => (/* binding */ Ee),
/* harmony export */   "ExcelCellVerticalAlignment": () => (/* binding */ We),
/* harmony export */   "ExcelFilterOperator": () => (/* binding */ Ae),
/* harmony export */   "InitializationError": () => (/* binding */ be),
/* harmony export */   "ParameterError": () => (/* binding */ fe),
/* harmony export */   "disableLogging": () => (/* binding */ $e),
/* harmony export */   "enableLogging": () => (/* binding */ xe),
/* harmony export */   "getExcelApplication": () => (/* binding */ Ge)
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
        resultsContainer.style.display = "none";
        excel = await (0,_openfin_excel__WEBPACK_IMPORTED_MODULE_1__.getExcelApplication)();
        await populateWorkbooks();
        const openExcelButton = document.querySelector("#open-excel");
        openExcelButton.addEventListener("click", async () => {
            await openExcel();
        });
        const refreshWorkbookButton = document.querySelector("#workbook-refresh");
        refreshWorkbookButton.addEventListener("click", async () => populateWorkbooks());
        const refreshWorksheetButton = document.querySelector("#worksheet-refresh");
        refreshWorksheetButton.addEventListener("click", async () => populateWorksheets());
        const openWorkbooksSelect = document.querySelector("#workbooks");
        openWorkbooksSelect.addEventListener("change", async (e) => selectWorkbook(e.target.value));
        const openWorksheetsSelect = document.querySelector("#worksheets");
        openWorksheetsSelect.addEventListener("change", async (e) => selectWorksheet(e.target.value));
        const setValueButton = document.querySelector("#set-value");
        setValueButton.addEventListener("click", async () => {
            await setCellValue();
        });
    }
    catch (err) {
        showError(err);
    }
}
function showError(err) {
    const errDom = document.querySelector("#error");
    errDom.innerHTML = err.message;
}
async function openExcel() {
    try {
        // Open the select work book and sheet
        // if anything throws an exception just open a new workbook
        await selectWorkbook(openWorkbooks[selectedWorkbookIndex].name);
        await selectWorksheet(openWorksheets[selectedWorksheetIndex].name);
    }
    catch {
        await excel.createWorkbook();
        await populateWorkbooks();
    }
}
async function populateWorkbooks() {
    if (excel) {
        selectedWorkbookIndex = undefined;
        const refreshButton = document.querySelector("#workbook-refresh");
        refreshButton.disabled = true;
        const select = document.querySelector("#workbooks");
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
async function selectWorkbook(name) {
    const newWorkbookIndex = openWorkbooks.findIndex((w) => w.name === name);
    if (newWorkbookIndex !== selectedWorkbookIndex) {
        selectedWorkbookIndex = newWorkbookIndex;
        if (newWorkbookIndex >= 0) {
            await openWorkbooks[selectedWorkbookIndex].book.activate();
        }
    }
    await populateWorksheets();
}
async function populateWorksheets() {
    if (excel) {
        selectedWorksheetIndex = undefined;
        const refreshButton = document.querySelector("#worksheet-refresh");
        refreshButton.disabled = true;
        const select = document.querySelector("#worksheets");
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
async function selectWorksheet(name) {
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
            resultsContainer.style.display = "flex";
            document.querySelector("#cell-location").disabled = false;
            document.querySelector("#cell-value").disabled = false;
            document.querySelector("#set-value").disabled = false;
        }
    }
}
async function handleCellChange(cells) {
    const cellContainer = document.querySelector("#cell-changes-container");
    cellContainer.innerHTML = JSON.stringify(cells, undefined, "  ");
    for (const cell of cells) {
        if (KNOWN_INSTRUMENTS.includes(cell.value)) {
            await broadcastInstrument(cell.value);
        }
    }
}
async function setCellValue() {
    if (openWorksheets && selectedWorksheetIndex !== undefined) {
        const cellLocation = document.querySelector("#cell-location");
        const cellValue = document.querySelector("#cell-value");
        await openWorksheets[selectedWorksheetIndex].sheet.setCellValues(cellLocation.value, [[cellValue.value]]);
    }
}
async function broadcastInstrument(instrument) {
    const broadcastElement = document.querySelector("#broadcast-instrument");
    if (window.fdc3) {
        try {
            const fdcInstrument = {
                type: "fdc3.instrument",
                id: {
                    ticker: instrument
                }
            };
            const channel = await (0,_finos_fdc3__WEBPACK_IMPORTED_MODULE_0__.getCurrentChannel)();
            channel.broadcast(fdcInstrument);
            broadcastElement.value = instrument;
        }
        catch (err) {
            broadcastElement.value = err.message;
        }
    }
    else {
        broadcastElement.textContent = "No FD3 Channel available";
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFLGFBQWE7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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QUM7S0FDMUQ7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvLi4vLi4vbm9kZV9tb2R1bGVzL0BmaW5vcy9mZGMzL2Rpc3QvZmRjMy5lc20uanMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvLi4vLi4vbm9kZV9tb2R1bGVzL0BvcGVuZmluL2V4Y2VsL29wZW5maW4uZXhjZWwuanMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC8uL2NsaWVudC9zcmMvZXhjZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXHJcbiAqIENvcHlyaWdodCAyMDE5IEZJTk9TIEZEQzMgY29udHJpYnV0b3JzIC0gc2VlIE5PVElDRSBmaWxlXHJcbiAqL1xudmFyIE9wZW5FcnJvcjtcblxuKGZ1bmN0aW9uIChPcGVuRXJyb3IpIHtcbiAgT3BlbkVycm9yW1wiQXBwTm90Rm91bmRcIl0gPSBcIkFwcE5vdEZvdW5kXCI7XG4gIE9wZW5FcnJvcltcIkVycm9yT25MYXVuY2hcIl0gPSBcIkVycm9yT25MYXVuY2hcIjtcbiAgT3BlbkVycm9yW1wiQXBwVGltZW91dFwiXSA9IFwiQXBwVGltZW91dFwiO1xuICBPcGVuRXJyb3JbXCJSZXNvbHZlclVuYXZhaWxhYmxlXCJdID0gXCJSZXNvbHZlclVuYXZhaWxhYmxlXCI7XG59KShPcGVuRXJyb3IgfHwgKE9wZW5FcnJvciA9IHt9KSk7XG5cbnZhciBSZXNvbHZlRXJyb3I7XG5cbihmdW5jdGlvbiAoUmVzb2x2ZUVycm9yKSB7XG4gIFJlc29sdmVFcnJvcltcIk5vQXBwc0ZvdW5kXCJdID0gXCJOb0FwcHNGb3VuZFwiO1xuICBSZXNvbHZlRXJyb3JbXCJSZXNvbHZlclVuYXZhaWxhYmxlXCJdID0gXCJSZXNvbHZlclVuYXZhaWxhYmxlXCI7XG4gIFJlc29sdmVFcnJvcltcIlJlc29sdmVyVGltZW91dFwiXSA9IFwiUmVzb2x2ZXJUaW1lb3V0XCI7XG59KShSZXNvbHZlRXJyb3IgfHwgKFJlc29sdmVFcnJvciA9IHt9KSk7XG5cbnZhciBDaGFubmVsRXJyb3I7XG5cbihmdW5jdGlvbiAoQ2hhbm5lbEVycm9yKSB7XG4gIENoYW5uZWxFcnJvcltcIk5vQ2hhbm5lbEZvdW5kXCJdID0gXCJOb0NoYW5uZWxGb3VuZFwiO1xuICBDaGFubmVsRXJyb3JbXCJBY2Nlc3NEZW5pZWRcIl0gPSBcIkFjY2Vzc0RlbmllZFwiO1xuICBDaGFubmVsRXJyb3JbXCJDcmVhdGlvbkZhaWxlZFwiXSA9IFwiQ3JlYXRpb25GYWlsZWRcIjtcbn0pKENoYW5uZWxFcnJvciB8fCAoQ2hhbm5lbEVycm9yID0ge30pKTtcblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgcnVudGltZV8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZCQxOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCQxKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkJDE7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCQxO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCQxLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCQxO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkJDE7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQkMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCQxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZCQxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gICBtb2R1bGUuZXhwb3J0cyBcbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbn0pO1xuXG52YXIgREVGQVVMVF9USU1FT1VUID0gNTAwMDtcbnZhciBVbmF2YWlsYWJsZUVycm9yID0gLyojX19QVVJFX18qL25ldyBFcnJvcignRkRDMyBEZXNrdG9wQWdlbnQgbm90IGF2YWlsYWJsZSBhdCBgd2luZG93LmZkYzNgLicpO1xudmFyIFRpbWVvdXRFcnJvciA9IC8qI19fUFVSRV9fKi9uZXcgRXJyb3IoJ1RpbWVkIG91dCB3YWl0aW5nIGZvciBgZmRjM1JlYWR5YCBldmVudC4nKTtcbnZhciBVbmV4cGVjdGVkRXJyb3IgPSAvKiNfX1BVUkVfXyovbmV3IEVycm9yKCdgZmRjM1JlYWR5YCBldmVudCBmaXJlZCwgYnV0IGB3aW5kb3cuZmRjM2Agbm90IHNldCB0byBEZXNrdG9wQWdlbnQuJyk7XG5cbmZ1bmN0aW9uIHJlamVjdElmTm9HbG9iYWwoZikge1xuICByZXR1cm4gd2luZG93LmZkYzMgPyBmKCkgOiBQcm9taXNlLnJlamVjdChVbmF2YWlsYWJsZUVycm9yKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dJZk5vR2xvYmFsKGYpIHtcbiAgaWYgKCF3aW5kb3cuZmRjMykge1xuICAgIHRocm93IFVuYXZhaWxhYmxlRXJyb3I7XG4gIH1cblxuICByZXR1cm4gZigpO1xufVxuXG52YXIgZmRjM1JlYWR5ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYgPSAvKiNfX1BVUkVfXyovX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9ydW50aW1lXzEubWFyayhmdW5jdGlvbiBfY2FsbGVlKHdhaXRGb3JNcykge1xuICAgIHJldHVybiBydW50aW1lXzEud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGlmICh3YWl0Rm9yTXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICB3YWl0Rm9yTXMgPSBERUZBVUxUX1RJTUVPVVQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAvLyBpZiB0aGUgZ2xvYmFsIGlzIGFscmVhZHkgYXZhaWxhYmxlIHJlc29sdmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5mZGMzKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIGl0cyBub3QgYXZhaWxhYmxlIHNldHVwIGEgdGltZW91dCB0byByZXR1cm4gYSByZWplY3RlZCBwcm9taXNlXG4gICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZmRjMyA/IHJlc29sdmUoKSA6IHJlamVjdChUaW1lb3V0RXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sIHdhaXRGb3JNcyk7IC8vIGxpc3RlbiBmb3IgdGhlIGZkYzNSZWFkeSBldmVudFxuXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZkYzNSZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5mZGMzID8gcmVzb2x2ZSgpIDogcmVqZWN0KFVuZXhwZWN0ZWRFcnJvcik7XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGZkYzNSZWFkeShfeCkge1xuICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5mdW5jdGlvbiBvcGVuKGFwcCwgY29udGV4dCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLm9wZW4oYXBwLCBjb250ZXh0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBmaW5kSW50ZW50KGludGVudCwgY29udGV4dCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmZpbmRJbnRlbnQoaW50ZW50LCBjb250ZXh0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBmaW5kSW50ZW50c0J5Q29udGV4dChjb250ZXh0KSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZmluZEludGVudHNCeUNvbnRleHQoY29udGV4dCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gYnJvYWRjYXN0KGNvbnRleHQpIHtcbiAgdGhyb3dJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuYnJvYWRjYXN0KGNvbnRleHQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJhaXNlSW50ZW50KGludGVudCwgY29udGV4dCwgYXBwKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMucmFpc2VJbnRlbnQoaW50ZW50LCBjb250ZXh0LCBhcHApO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJhaXNlSW50ZW50Rm9yQ29udGV4dChjb250ZXh0LCBhcHApIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5yYWlzZUludGVudEZvckNvbnRleHQoY29udGV4dCwgYXBwKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRJbnRlbnRMaXN0ZW5lcihpbnRlbnQsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIHRocm93SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmFkZEludGVudExpc3RlbmVyKGludGVudCwgaGFuZGxlcik7XG4gIH0pO1xufVxuZnVuY3Rpb24gYWRkQ29udGV4dExpc3RlbmVyKGNvbnRleHRUeXBlT3JIYW5kbGVyLCBoYW5kbGVyKSB7XG4gIGlmICh0eXBlb2YgY29udGV4dFR5cGVPckhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhyb3dJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuZmRjMy5hZGRDb250ZXh0TGlzdGVuZXIoY29udGV4dFR5cGVPckhhbmRsZXIsIGhhbmRsZXIpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aHJvd0lmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmFkZENvbnRleHRMaXN0ZW5lcihjb250ZXh0VHlwZU9ySGFuZGxlcik7XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFN5c3RlbUNoYW5uZWxzKCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmdldFN5c3RlbUNoYW5uZWxzKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gam9pbkNoYW5uZWwoY2hhbm5lbElkKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuam9pbkNoYW5uZWwoY2hhbm5lbElkKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRPckNyZWF0ZUNoYW5uZWwoY2hhbm5lbElkKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0T3JDcmVhdGVDaGFubmVsKGNoYW5uZWxJZCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudENoYW5uZWwoKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0Q3VycmVudENoYW5uZWwoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBsZWF2ZUN1cnJlbnRDaGFubmVsKCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLmxlYXZlQ3VycmVudENoYW5uZWwoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRJbmZvKCkge1xuICByZXR1cm4gdGhyb3dJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0SW5mbygpO1xuICB9KTtcbn1cbi8qKlxyXG4gKiBDb21wYXJlIG51bWVyaWMgc2VtdmVyIHZlcnNpb24gbnVtYmVyIHN0cmluZ3MgKGluIHRoZSBmb3JtIGAxLjIuM2ApLlxyXG4gKlxyXG4gKiBSZXR1cm5zIGAtMWAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgbG93ZXIgdmVyc2lvbiBudW1iZXIgdGhhbiB0aGUgc2Vjb25kLFxyXG4gKiBgMWAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGdyZWF0ZXIgdGhhbiB0aGUgc2Vjb25kLCAwIGlmIHRoZSBhcmd1bWVudHMgYXJlXHJcbiAqIGVxdWFsIGFuZCBgbnVsbGAgaWYgYW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBjb21wYXJpc29uLlxyXG4gKlxyXG4gKiBAcGFyYW0gYVxyXG4gKiBAcGFyYW0gYlxyXG4gKi9cblxudmFyIGNvbXBhcmVWZXJzaW9uTnVtYmVycyA9IGZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uTnVtYmVycyhhLCBiKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFWZXJBcnIgPSBhLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG4gICAgdmFyIGJWZXJBcnIgPSBiLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgTWF0aC5tYXgoYVZlckFyci5sZW5ndGgsIGJWZXJBcnIubGVuZ3RoKTsgaW5kZXgrKykge1xuICAgICAgLyogSWYgb25lIHZlcnNpb24gbnVtYmVyIGhhcyBtb3JlIGRpZ2l0cyBhbmQgdGhlIG90aGVyIGRvZXMgbm90LCBhbmQgdGhleSBhcmUgb3RoZXJ3aXNlIGVxdWFsLFxyXG4gICAgICAgICBhc3N1bWUgdGhlIGxvbmdlciBpcyBncmVhdGVyLiBFLmcuIDEuMS4xID4gMS4xICovXG4gICAgICBpZiAoaW5kZXggPT09IGFWZXJBcnIubGVuZ3RoIHx8IGFWZXJBcnJbaW5kZXhdIDwgYlZlckFycltpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYlZlckFyci5sZW5ndGggfHwgYVZlckFycltpbmRleF0gPiBiVmVyQXJyW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb21wYXJlIHZlcnNpb24gc3RyaW5ncycsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSBGREMzIHZlcnNpb24gaW4gYW4gSW1wbGVtZW50YXRpb25NZXRhZGF0YSBvYmplY3QgaXMgZ3JlYXRlciB0aGFuXHJcbiAqIG9yIGVxdWFsIHRvIHRoZSBzdXBwbGllZCBudW1lcmljIHNlbXZlciB2ZXJzaW9uIG51bWJlciBzdHJpbmcgKGluIHRoZSBmb3JtIGAxLjIuM2ApLlxyXG4gKlxyXG4gKiBSZXR1cm5zIGEgYm9vbGVhbiBvciBudWxsIGlmIGFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNvbXBhcmluZyB0aGUgdmVyc2lvbiBudW1iZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0gbWV0YWRhdGFcclxuICogQHBhcmFtIHZlcnNpb25cclxuICovXG5cbnZhciB2ZXJzaW9uSXNBdExlYXN0ID0gZnVuY3Rpb24gdmVyc2lvbklzQXRMZWFzdChtZXRhZGF0YSwgdmVyc2lvbikge1xuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVWZXJzaW9uTnVtYmVycyhtZXRhZGF0YS5mZGMzVmVyc2lvbiwgdmVyc2lvbik7XG4gIHJldHVybiBjb21wYXJpc29uID09PSBudWxsID8gbnVsbCA6IGNvbXBhcmlzb24gPj0gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbnZhciBDb250ZXh0VHlwZXM7XG5cbihmdW5jdGlvbiAoQ29udGV4dFR5cGVzKSB7XG4gIENvbnRleHRUeXBlc1tcIkNvbnRhY3RcIl0gPSBcImZkYzMuY29udGFjdFwiO1xuICBDb250ZXh0VHlwZXNbXCJDb250YWN0TGlzdFwiXSA9IFwiZmRjMy5jb250YWN0TGlzdFwiO1xuICBDb250ZXh0VHlwZXNbXCJDb3VudHJ5XCJdID0gXCJmZGMzLmNvdW50cnlcIjtcbiAgQ29udGV4dFR5cGVzW1wiSW5zdHJ1bWVudFwiXSA9IFwiZmRjMy5pbnN0cnVtZW50XCI7XG4gIENvbnRleHRUeXBlc1tcIk9yZ2FuaXphdGlvblwiXSA9IFwiZmRjMy5vcmdhbml6YXRpb25cIjtcbiAgQ29udGV4dFR5cGVzW1wiUG9ydGZvbGlvXCJdID0gXCJmZGMzLnBvcnRmb2xpb1wiO1xuICBDb250ZXh0VHlwZXNbXCJQb3NpdGlvblwiXSA9IFwiZmRjMy5wb3NpdGlvblwiO1xufSkoQ29udGV4dFR5cGVzIHx8IChDb250ZXh0VHlwZXMgPSB7fSkpO1xuXG4vLyBUbyBwYXJzZSB0aGlzIGRhdGE6XG4vL1xuLy8gICBpbXBvcnQgeyBDb252ZXJ0LCBDb250ZXh0LCBDb250YWN0LCBDb250YWN0TGlzdCwgSW5zdHJ1bWVudCwgSW5zdHJ1bWVudExpc3QsIENvdW50cnksIE9yZ2FuaXphdGlvbiwgUG9ydGZvbGlvLCBQb3NpdGlvbiB9IGZyb20gXCIuL2ZpbGVcIjtcbi8vXG4vLyAgIGNvbnN0IGNvbnRleHQgPSBDb252ZXJ0LnRvQ29udGV4dChqc29uKTtcbi8vICAgY29uc3QgY29udGFjdCA9IENvbnZlcnQudG9Db250YWN0KGpzb24pO1xuLy8gICBjb25zdCBjb250YWN0TGlzdCA9IENvbnZlcnQudG9Db250YWN0TGlzdChqc29uKTtcbi8vICAgY29uc3QgaW5zdHJ1bWVudCA9IENvbnZlcnQudG9JbnN0cnVtZW50KGpzb24pO1xuLy8gICBjb25zdCBpbnN0cnVtZW50TGlzdCA9IENvbnZlcnQudG9JbnN0cnVtZW50TGlzdChqc29uKTtcbi8vICAgY29uc3QgY291bnRyeSA9IENvbnZlcnQudG9Db3VudHJ5KGpzb24pO1xuLy8gICBjb25zdCBvcmdhbml6YXRpb24gPSBDb252ZXJ0LnRvT3JnYW5pemF0aW9uKGpzb24pO1xuLy8gICBjb25zdCBwb3J0Zm9saW8gPSBDb252ZXJ0LnRvUG9ydGZvbGlvKGpzb24pO1xuLy8gICBjb25zdCBwb3NpdGlvbiA9IENvbnZlcnQudG9Qb3NpdGlvbihqc29uKTtcbi8vXG4vLyBUaGVzZSBmdW5jdGlvbnMgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgSlNPTiBkb2Vzbid0XG4vLyBtYXRjaCB0aGUgZXhwZWN0ZWQgaW50ZXJmYWNlLCBldmVuIGlmIHRoZSBKU09OIGlzIHZhbGlkLlxuLy8gQ29udmVydHMgSlNPTiBzdHJpbmdzIHRvL2Zyb20geW91ciB0eXBlc1xuLy8gYW5kIGFzc2VydHMgdGhlIHJlc3VsdHMgb2YgSlNPTi5wYXJzZSBhdCBydW50aW1lXG52YXIgQ29udmVydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbnZlcnQoKSB7fVxuXG4gIENvbnZlcnQudG9Db250ZXh0ID0gZnVuY3Rpb24gdG9Db250ZXh0KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDb250ZXh0JykpO1xuICB9O1xuXG4gIENvbnZlcnQuY29udGV4dFRvSnNvbiA9IGZ1bmN0aW9uIGNvbnRleHRUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDb250ZXh0JykpLCBudWxsLCAyKTtcbiAgfTtcblxuICBDb252ZXJ0LnRvQ29udGFjdCA9IGZ1bmN0aW9uIHRvQ29udGFjdChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ29udGFjdCcpKTtcbiAgfTtcblxuICBDb252ZXJ0LmNvbnRhY3RUb0pzb24gPSBmdW5jdGlvbiBjb250YWN0VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ29udGFjdCcpKSwgbnVsbCwgMik7XG4gIH07XG5cbiAgQ29udmVydC50b0NvbnRhY3RMaXN0ID0gZnVuY3Rpb24gdG9Db250YWN0TGlzdChqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ29udGFjdExpc3QnKSk7XG4gIH07XG5cbiAgQ29udmVydC5jb250YWN0TGlzdFRvSnNvbiA9IGZ1bmN0aW9uIGNvbnRhY3RMaXN0VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ29udGFjdExpc3QnKSksIG51bGwsIDIpO1xuICB9O1xuXG4gIENvbnZlcnQudG9JbnN0cnVtZW50ID0gZnVuY3Rpb24gdG9JbnN0cnVtZW50KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdJbnN0cnVtZW50JykpO1xuICB9O1xuXG4gIENvbnZlcnQuaW5zdHJ1bWVudFRvSnNvbiA9IGZ1bmN0aW9uIGluc3RydW1lbnRUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdJbnN0cnVtZW50JykpLCBudWxsLCAyKTtcbiAgfTtcblxuICBDb252ZXJ0LnRvSW5zdHJ1bWVudExpc3QgPSBmdW5jdGlvbiB0b0luc3RydW1lbnRMaXN0KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdJbnN0cnVtZW50TGlzdCcpKTtcbiAgfTtcblxuICBDb252ZXJ0Lmluc3RydW1lbnRMaXN0VG9Kc29uID0gZnVuY3Rpb24gaW5zdHJ1bWVudExpc3RUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdJbnN0cnVtZW50TGlzdCcpKSwgbnVsbCwgMik7XG4gIH07XG5cbiAgQ29udmVydC50b0NvdW50cnkgPSBmdW5jdGlvbiB0b0NvdW50cnkoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NvdW50cnknKSk7XG4gIH07XG5cbiAgQ29udmVydC5jb3VudHJ5VG9Kc29uID0gZnVuY3Rpb24gY291bnRyeVRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NvdW50cnknKSksIG51bGwsIDIpO1xuICB9O1xuXG4gIENvbnZlcnQudG9Pcmdhbml6YXRpb24gPSBmdW5jdGlvbiB0b09yZ2FuaXphdGlvbihqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignT3JnYW5pemF0aW9uJykpO1xuICB9O1xuXG4gIENvbnZlcnQub3JnYW5pemF0aW9uVG9Kc29uID0gZnVuY3Rpb24gb3JnYW5pemF0aW9uVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignT3JnYW5pemF0aW9uJykpLCBudWxsLCAyKTtcbiAgfTtcblxuICBDb252ZXJ0LnRvUG9ydGZvbGlvID0gZnVuY3Rpb24gdG9Qb3J0Zm9saW8oanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ1BvcnRmb2xpbycpKTtcbiAgfTtcblxuICBDb252ZXJ0LnBvcnRmb2xpb1RvSnNvbiA9IGZ1bmN0aW9uIHBvcnRmb2xpb1RvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ1BvcnRmb2xpbycpKSwgbnVsbCwgMik7XG4gIH07XG5cbiAgQ29udmVydC50b1Bvc2l0aW9uID0gZnVuY3Rpb24gdG9Qb3NpdGlvbihqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignUG9zaXRpb24nKSk7XG4gIH07XG5cbiAgQ29udmVydC5wb3NpdGlvblRvSnNvbiA9IGZ1bmN0aW9uIHBvc2l0aW9uVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignUG9zaXRpb24nKSksIG51bGwsIDIpO1xuICB9O1xuXG4gIHJldHVybiBDb252ZXJ0O1xufSgpO1xuXG5mdW5jdGlvbiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSkge1xuICBpZiAoa2V5ID09PSB2b2lkIDApIHtcbiAgICBrZXkgPSAnJztcbiAgfVxuXG4gIGlmIChrZXkpIHtcbiAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuIEV4cGVjdGVkIHR5cGUgXCIgKyBKU09OLnN0cmluZ2lmeSh0eXApICsgXCIgYnV0IGdvdCBcIiArIEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICB9XG5cbiAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIFwiICsgSlNPTi5zdHJpbmdpZnkodmFsKSArIFwiIGZvciB0eXBlIFwiICsgSlNPTi5zdHJpbmdpZnkodHlwKSk7XG59XG5cbmZ1bmN0aW9uIGpzb25Ub0pTUHJvcHModHlwKSB7XG4gIGlmICh0eXAuanNvblRvSlMgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB0eXAucHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIG1hcFtwLmpzb25dID0ge1xuICAgICAgICBrZXk6IHAuanMsXG4gICAgICAgIHR5cDogcC50eXBcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdHlwLmpzb25Ub0pTID0gbWFwO1xuICB9XG5cbiAgcmV0dXJuIHR5cC5qc29uVG9KUztcbn1cblxuZnVuY3Rpb24ganNUb0pTT05Qcm9wcyh0eXApIHtcbiAgaWYgKHR5cC5qc1RvSlNPTiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIHR5cC5wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gbWFwW3AuanNdID0ge1xuICAgICAgICBrZXk6IHAuanNvbixcbiAgICAgICAgdHlwOiBwLnR5cFxuICAgICAgfTtcbiAgICB9KTtcbiAgICB0eXAuanNUb0pTT04gPSBtYXA7XG4gIH1cblxuICByZXR1cm4gdHlwLmpzVG9KU09OO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odmFsLCB0eXAsIGdldFByb3BzLCBrZXkpIHtcbiAgaWYgKGtleSA9PT0gdm9pZCAwKSB7XG4gICAga2V5ID0gJyc7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1QcmltaXRpdmUodHlwLCB2YWwpIHtcbiAgICBpZiAodHlwZW9mIHR5cCA9PT0gdHlwZW9mIHZhbCkgcmV0dXJuIHZhbDtcbiAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cCwgdmFsLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtVW5pb24odHlwcywgdmFsKSB7XG4gICAgLy8gdmFsIG11c3QgdmFsaWRhdGUgYWdhaW5zdCBvbmUgdHlwIGluIHR5cHNcbiAgICB2YXIgbCA9IHR5cHMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBfdHlwID0gdHlwc1tpXTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybSh2YWwsIF90eXAsIGdldFByb3BzKTtcbiAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIGludmFsaWRWYWx1ZSh0eXBzLCB2YWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRW51bShjYXNlcywgdmFsKSB7XG4gICAgaWYgKGNhc2VzLmluZGV4T2YodmFsKSAhPT0gLTEpIHJldHVybiB2YWw7XG4gICAgcmV0dXJuIGludmFsaWRWYWx1ZShjYXNlcywgdmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybUFycmF5KHR5cCwgdmFsKSB7XG4gICAgLy8gdmFsIG11c3QgYmUgYW4gYXJyYXkgd2l0aCBubyBpbnZhbGlkIGVsZW1lbnRzXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiBpbnZhbGlkVmFsdWUoJ2FycmF5JywgdmFsKTtcbiAgICByZXR1cm4gdmFsLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oZWwsIHR5cCwgZ2V0UHJvcHMpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRGF0ZSh2YWwpIHtcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZCA9IG5ldyBEYXRlKHZhbCk7XG5cbiAgICBpZiAoaXNOYU4oZC52YWx1ZU9mKCkpKSB7XG4gICAgICByZXR1cm4gaW52YWxpZFZhbHVlKCdEYXRlJywgdmFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybU9iamVjdChwcm9wcywgYWRkaXRpb25hbCwgdmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUoJ29iamVjdCcsIHZhbCk7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBwcm9wID0gcHJvcHNba2V5XTtcbiAgICAgIHZhciB2ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSA/IHZhbFtrZXldIDogdW5kZWZpbmVkO1xuICAgICAgcmVzdWx0W3Byb3Aua2V5XSA9IHRyYW5zZm9ybSh2LCBwcm9wLnR5cCwgZ2V0UHJvcHMsIHByb3Aua2V5KTtcbiAgICB9KTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0cmFuc2Zvcm0odmFsW2tleV0sIGFkZGl0aW9uYWwsIGdldFByb3BzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAodHlwID09PSAnYW55JykgcmV0dXJuIHZhbDtcblxuICBpZiAodHlwID09PSBudWxsKSB7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuIHZhbDtcbiAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cCwgdmFsKTtcbiAgfVxuXG4gIGlmICh0eXAgPT09IGZhbHNlKSByZXR1cm4gaW52YWxpZFZhbHVlKHR5cCwgdmFsKTtcblxuICB3aGlsZSAodHlwZW9mIHR5cCA9PT0gJ29iamVjdCcgJiYgdHlwLnJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdHlwID0gdHlwZU1hcFt0eXAucmVmXTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHR5cCkpIHJldHVybiB0cmFuc2Zvcm1FbnVtKHR5cCwgdmFsKTtcblxuICBpZiAodHlwZW9mIHR5cCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdHlwLmhhc093blByb3BlcnR5KCd1bmlvbk1lbWJlcnMnKSA/IHRyYW5zZm9ybVVuaW9uKHR5cC51bmlvbk1lbWJlcnMsIHZhbCkgOiB0eXAuaGFzT3duUHJvcGVydHkoJ2FycmF5SXRlbXMnKSA/IHRyYW5zZm9ybUFycmF5KHR5cC5hcnJheUl0ZW1zLCB2YWwpIDogdHlwLmhhc093blByb3BlcnR5KCdwcm9wcycpID8gdHJhbnNmb3JtT2JqZWN0KGdldFByb3BzKHR5cCksIHR5cC5hZGRpdGlvbmFsLCB2YWwpIDogaW52YWxpZFZhbHVlKHR5cCwgdmFsKTtcbiAgfSAvLyBOdW1iZXJzIGNhbiBiZSBwYXJzZWQgYnkgRGF0ZSBidXQgc2hvdWxkbid0IGJlLlxuXG5cbiAgaWYgKHR5cCA9PT0gRGF0ZSAmJiB0eXBlb2YgdmFsICE9PSAnbnVtYmVyJykgcmV0dXJuIHRyYW5zZm9ybURhdGUodmFsKTtcbiAgcmV0dXJuIHRyYW5zZm9ybVByaW1pdGl2ZSh0eXAsIHZhbCk7XG59XG5cbmZ1bmN0aW9uIGNhc3QodmFsLCB0eXApIHtcbiAgcmV0dXJuIHRyYW5zZm9ybSh2YWwsIHR5cCwganNvblRvSlNQcm9wcyk7XG59XG5cbmZ1bmN0aW9uIHVuY2FzdCh2YWwsIHR5cCkge1xuICByZXR1cm4gdHJhbnNmb3JtKHZhbCwgdHlwLCBqc1RvSlNPTlByb3BzKTtcbn1cblxuZnVuY3Rpb24gYSh0eXApIHtcbiAgcmV0dXJuIHtcbiAgICBhcnJheUl0ZW1zOiB0eXBcbiAgfTtcbn1cblxuZnVuY3Rpb24gdSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHR5cHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdHlwc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdW5pb25NZW1iZXJzOiB0eXBzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG8ocHJvcHMsIGFkZGl0aW9uYWwpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgYWRkaXRpb25hbDogYWRkaXRpb25hbFxuICB9O1xufVxuXG5mdW5jdGlvbiBtKGFkZGl0aW9uYWwpIHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogW10sXG4gICAgYWRkaXRpb25hbDogYWRkaXRpb25hbFxuICB9O1xufVxuXG5mdW5jdGlvbiByKG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICByZWY6IG5hbWVcbiAgfTtcbn1cblxudmFyIHR5cGVNYXAgPSB7XG4gIENvbnRleHQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJycpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9XSwgJ2FueScpLFxuICBDb250YWN0TGlzdDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnY29udGFjdHMnLFxuICAgIGpzOiAnY29udGFjdHMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL2EoIC8qI19fUFVSRV9fKi9yKCdDb250YWN0JykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnJykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIENvbnRhY3Q6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdDb250YWN0SUQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDb250YWN0SUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2VtYWlsJyxcbiAgICBqczogJ2VtYWlsJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRkRTX0lEJyxcbiAgICBqczogJ0ZEU19JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJycpLFxuICBJbnN0cnVtZW50TGlzdDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaW5zdHJ1bWVudHMnLFxuICAgIGpzOiAnaW5zdHJ1bWVudHMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL2EoIC8qI19fUFVSRV9fKi9yKCdJbnN0cnVtZW50JykpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnJykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIEluc3RydW1lbnQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdJbnN0cnVtZW50SUQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBJbnN0cnVtZW50SUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0JCRycsXG4gICAganM6ICdCQkcnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdDVVNJUCcsXG4gICAganM6ICdDVVNJUCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZEU19JRCcsXG4gICAganM6ICdGRFNfSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGSUdJJyxcbiAgICBqczogJ0ZJR0knLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdJU0lOJyxcbiAgICBqczogJ0lTSU4nLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdQRVJNSUQnLFxuICAgIGpzOiAnUEVSTUlEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnUklDJyxcbiAgICBqczogJ1JJQycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1NFRE9MJyxcbiAgICBqczogJ1NFRE9MJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAndGlja2VyJyxcbiAgICBqczogJ3RpY2tlcicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJycpLFxuICBDb3VudHJ5OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovcignQ291bnRyeUlEJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ291bnRyeUlEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdJU09BTFBIQTInLFxuICAgIGpzOiAnSVNPQUxQSEEyJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnSVNPQUxQSEEzJyxcbiAgICBqczogJ0lTT0FMUEhBMycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJycpLFxuICBPcmdhbml6YXRpb246IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdPcmdhbml6YXRpb25JRCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIE9yZ2FuaXphdGlvbklEOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdGRFNfSUQnLFxuICAgIGpzOiAnRkRTX0lEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnTEVJJyxcbiAgICBqczogJ0xFSScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1BFUk1JRCcsXG4gICAganM6ICdQRVJNSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICcnKSxcbiAgUG9ydGZvbGlvOiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdwb3NpdGlvbnMnLFxuICAgIGpzOiAncG9zaXRpb25zJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9hKCAvKiNfX1BVUkVfXyovcignUG9zaXRpb24nKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCcnKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgUG9zaXRpb246IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2hvbGRpbmcnLFxuICAgIGpzOiAnaG9sZGluZycsXG4gICAgdHlwOiAzLjE0XG4gIH0sIHtcbiAgICBqc29uOiAnaW5zdHJ1bWVudCcsXG4gICAganM6ICdpbnN0cnVtZW50JyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdJbnN0cnVtZW50JylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCcnKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKVxufTtcblxudmFyIEludGVudHM7XG5cbihmdW5jdGlvbiAoSW50ZW50cykge1xuICBJbnRlbnRzW1wiU3RhcnRDYWxsXCJdID0gXCJTdGFydENhbGxcIjtcbiAgSW50ZW50c1tcIlN0YXJ0Q2hhdFwiXSA9IFwiU3RhcnRDaGF0XCI7XG4gIEludGVudHNbXCJWaWV3Q2hhcnRcIl0gPSBcIlZpZXdDaGFydFwiO1xuICBJbnRlbnRzW1wiVmlld0NvbnRhY3RcIl0gPSBcIlZpZXdDb250YWN0XCI7XG4gIEludGVudHNbXCJWaWV3UXVvdGVcIl0gPSBcIlZpZXdRdW90ZVwiO1xuICBJbnRlbnRzW1wiVmlld05ld3NcIl0gPSBcIlZpZXdOZXdzXCI7XG4gIEludGVudHNbXCJWaWV3SW5zdHJ1bWVudFwiXSA9IFwiVmlld0luc3RydW1lbnRcIjtcbiAgSW50ZW50c1tcIlZpZXdBbmFseXNpc1wiXSA9IFwiVmlld0FuYWx5c2lzXCI7XG59KShJbnRlbnRzIHx8IChJbnRlbnRzID0ge30pKTtcblxuZXhwb3J0IHsgQ2hhbm5lbEVycm9yLCBDb250ZXh0VHlwZXMsIENvbnZlcnQsIEludGVudHMsIE9wZW5FcnJvciwgUmVzb2x2ZUVycm9yLCBhZGRDb250ZXh0TGlzdGVuZXIsIGFkZEludGVudExpc3RlbmVyLCBicm9hZGNhc3QsIGNvbXBhcmVWZXJzaW9uTnVtYmVycywgZmRjM1JlYWR5LCBmaW5kSW50ZW50LCBmaW5kSW50ZW50c0J5Q29udGV4dCwgZ2V0Q3VycmVudENoYW5uZWwsIGdldEluZm8sIGdldE9yQ3JlYXRlQ2hhbm5lbCwgZ2V0U3lzdGVtQ2hhbm5lbHMsIGpvaW5DaGFubmVsLCBsZWF2ZUN1cnJlbnRDaGFubmVsLCBvcGVuLCByYWlzZUludGVudCwgcmFpc2VJbnRlbnRGb3JDb250ZXh0LCB2ZXJzaW9uSXNBdExlYXN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZGMzLmVzbS5qcy5tYXBcbiIsInZhciBlLHQscixhPXtkOihlLHQpPT57Zm9yKHZhciByIGluIHQpYS5vKHQscikmJiFhLm8oZSxyKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7ZW51bWVyYWJsZTohMCxnZXQ6dFtyXX0pfSxvOihlLHQpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbz17fTthLmQobyx7ZHE6KCk9PkFkYXB0ZXJFcnJvcixNUzooKT0+QXBpRXJyb3IseFE6KCk9PkV2ZW50RXJyb3Isc086KCk9PmhlLFp1OigpPT5wZSxJMzooKT0+d2UsJFU6KCk9PmtlLGkwOigpPT51ZSxjWDooKT0+SW5pdGlhbGl6YXRpb25FcnJvcixfVzooKT0+UGFyYW1ldGVyRXJyb3IsVSQ6KCk9PmwsVTc6KCk9PmMscmQ6KCk9PmxlfSk7Y2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlPVwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWRcIix0KXt2YXIgcjtzdXBlcihlKSx0JiYodGhpcy5pbm5lckVycm9yPXQmJnQpLHRoaXMuc3RhY2s9bnVsbD09PShyPXRoaXMuc3RhY2spfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLnJlcGxhY2UoL14oXFx3KkVycm9yKS8sYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfWApfX1jbGFzcyBBZGFwdGVyRXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiRmFpbGVkIHRvIGV4ZWN1dGUgYWRhcHRlciBmdW5jdGlvblwiLHQpe3N1cGVyKGUsdCl9fWNsYXNzIEV2ZW50RXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiRmFpbGVkIHRvIHJhaXNlIGV2ZW50XCIsdCl7c3VwZXIoZSx0KX19Y2xhc3MgSW5pdGlhbGl6YXRpb25FcnJvciBleHRlbmRzIEFwaUVycm9ye2NvbnN0cnVjdG9yKGU9XCJGYWlsZWQgdG8gaW5pdGlhbGl6ZSBhZGFwdGVyXCIsdCl7c3VwZXIoZSx0KX19Y2xhc3MgUGFyYW1ldGVyRXJyb3IgZXh0ZW5kcyBBcGlFcnJvcntjb25zdHJ1Y3RvcihlPVwiSW52YWxpZCBwYXJhbWV0ZXIgdmFsdWVcIix0KXtzdXBlcihlLHQpfX0hZnVuY3Rpb24oZSl7ZS5BY3RpdmF0ZVdvcmtib29rPVwiQWN0aXZhdGVXb3JrYm9va1wiLGUuQWN0aXZhdGVXb3Jrc2hlZXQ9XCJBY3RpdmF0ZVdvcmtzaGVldFwiLGUuQWRkV29ya3NoZWV0PVwiQWRkV29ya3NoZWV0XCIsZS5DYWxjdWxhdGVXb3JrYm9vaz1cIkNhbGN1bGF0ZVdvcmtib29rXCIsZS5DYWxjdWxhdGVXb3Jrc2hlZXQ9XCJDYWxjdWxhdGVXb3Jrc2hlZXRcIixlLkNsZWFyQWxsQ2VsbHM9XCJDbGVhckFsbENlbGxzXCIsZS5DbGVhckFsbENlbGxWYWx1ZXM9XCJDbGVhckFsbENlbGxWYWx1ZXNcIixlLkNsZWFyQWxsQ2VsbEZvcm1hdHRpbmc9XCJDbGVhckFsbENlbGxGb3JtYXR0aW5nXCIsZS5DbGVhckNlbGxWYWx1ZXM9XCJDbGVhckNlbGxWYWx1ZXNcIixlLkNsZWFyQ2VsbEZvcm1hdHRpbmc9XCJDbGVhckNlbGxGb3JtYXR0aW5nXCIsZS5DbGVhckNlbGxzPVwiQ2xlYXJDZWxsc1wiLGUuQ2xvc2VXb3JrYm9vaz1cIkNsb3NlV29ya2Jvb2tcIixlLkNyZWF0ZVdvcmtib29rPVwiQ3JlYXRlV29ya2Jvb2tcIixlLkRlbGV0ZVdvcmtzaGVldD1cIkRlbGV0ZVdvcmtzaGVldFwiLGUuRGVyZWdpc3RlckV2ZW50PVwiRGVyZWdpc3RlckV2ZW50XCIsZS5FdmVudEZpcmVkPVwiRXZlbnRGaXJlZFwiLGUuR2V0Q2FsY3VsYXRpb25Nb2RlPVwiR2V0Q2FsY3VsYXRpb25Nb2RlXCIsZS5HZXRDZWxscz1cIkdldENlbGxzXCIsZS5HZXRXb3JrYm9va0J5SWQ9XCJHZXRXb3JrYm9va0J5SWRcIixlLkdldFdvcmtib29rTmFtZT1cIkdldFdvcmtib29rTmFtZVwiLGUuR2V0V29ya2Jvb2tzPVwiR2V0V29ya2Jvb2tzXCIsZS5HZXRXb3Jrc2hlZXRCeUlkPVwiR2V0V29ya3NoZWV0QnlJZFwiLGUuR2V0V29ya3NoZWV0QnlOYW1lPVwiR2V0V29ya3NoZWV0QnlOYW1lXCIsZS5HZXRXb3Jrc2hlZXROYW1lPVwiR2V0V29ya3NoZWV0TmFtZVwiLGUuR2V0V29ya3NoZWV0cz1cIkdldFdvcmtzaGVldHNcIixlLkxvZ01lc3NhZ2U9XCJMb2dNZXNzYWdlXCIsZS5PcGVuV29ya2Jvb2s9XCJPcGVuV29ya2Jvb2tcIixlLlByb3RlY3RXb3Jrc2hlZXQ9XCJQcm90ZWN0V29ya3NoZWV0XCIsZS5SZWdpc3RlckV2ZW50PVwiUmVnaXN0ZXJFdmVudFwiLGUuU2F2ZVdvcmtib29rPVwiU2F2ZVdvcmtib29rXCIsZS5TYXZlV29ya2Jvb2tBcz1cIlNhdmVXb3JrYm9va0FzXCIsZS5TZXRDZWxsVmFsdWVzPVwiU2V0Q2VsbFZhbHVlc1wiLGUuU2V0Q2VsbEZvcm1hdHRpbmc9XCJTZXRDZWxsRm9ybWF0dGluZ1wiLGUuU2V0Q2VsbE5hbWU9XCJTZXRDZWxsTmFtZVwiLGUuU2V0V29ya3NoZWV0TmFtZT1cIlNldFdvcmtzaGVldE5hbWVcIixlLkZpbHRlckNlbGxzPVwiRmlsdGVyQ2VsbHNcIixlLlF1aXRBcHBsaWNhdGlvbj1cIlF1aXRBcHBsaWNhdGlvblwifShlfHwoZT17fSkpLGZ1bmN0aW9uKGUpe2UuQWN0aXZhdGU9XCJBY3RpdmF0ZVwiLGUuQWRkV29ya3NoZWV0PVwiQWRkV29ya3NoZWV0XCIsZS5DaGFuZ2U9XCJDaGFuZ2VcIixlLkNsb3NlPVwiQ2xvc2VcIixlLkRlYWN0aXZhdGU9XCJEZWFjdGl2YXRlXCIsZS5EZWxldGVXb3Jrc2hlZXQ9XCJEZWxldGVXb3Jrc2hlZXRcIn0odHx8KHQ9e30pKSxmdW5jdGlvbihlKXtlLldvcmtib29rPVwiV29ya2Jvb2tcIixlLldvcmtzaGVldD1cIldvcmtzaGVldFwifShyfHwocj17fSkpO2NvbnN0IG49XCIxLjQuMVwiO2xldCBzPSExO2NvbnN0IGk9XCJbQG9wZW5maW4vZXhjZWxdXCIsbD0oKT0+e3M9ITF9LGM9KCk9PntzPSEwLGgoYHYke259YCl9LGQ9KGUsdCk9PntzJiYoZS5pbm5lckVycm9yP2NvbnNvbGUuZXJyb3IodD9gJHtpfSAke3R9YDppLGUsXCJcXG5cXG4oaW5uZXIpXCIsZS5pbm5lckVycm9yKTpjb25zb2xlLmVycm9yKHQ/YCR7aX0gJHt0fWA6aSxlKSl9LGg9KC4uLmUpPT57cyYmY29uc29sZS5sb2coaSwuLi5lKX0scD0oLi4uZSk9PntzJiZjb25zb2xlLndhcm4oaSwuLi5lKX07XCJ1bmRlZmluZWRcIj09dHlwZW9mIGZpbiYmT2JqZWN0LmFzc2lnbih3aW5kb3cse2Zpbjp7fX0pLE9iamVjdC5hc3NpZ24oZmluLHtJbnRlZ3JhdGlvbnM6e0V4Y2VsOntlbmFibGVMb2dnaW5nOmMsZGlzYWJsZUxvZ2dpbmc6bH19fSk7Y29uc3Qgdz0oKT0+XCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csKGU9Pntjb25zdCB0PTE2Kk1hdGgucmFuZG9tKCl8MDtyZXR1cm4oXCJ4XCI9PT1lP3Q6MyZ0fDgpLnRvU3RyaW5nKDE2KX0pKSxrPW5ldyBNYXAsdT0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogQWN0aXZhdGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5BY3RpdmF0ZVdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sZz0odCxyKT0+YXN5bmMoKT0+e2goYFdvcmtzaGVldDogQ2FsY3VsYXRlICgke3J9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2FsY3VsYXRlV29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxtPSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBDbGVhciBhbGwgY2VsbCB2YWx1ZXMgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxWYWx1ZXMscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LHk9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IENsZWFyIGFsbCBjZWxsIGZvcm1hdHRpbmcgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxGb3JtYXR0aW5nLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxDPSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBDbGVhciBhbGwgY2VsbHMgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxzLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSx2PSh0LHIpPT5hc3luYyBhPT57aChgV29ya3NoZWV0OiBDbGVhciBjZWxsIHZhbHVlczsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCk7Y29uc3Qgbz17Y2VsbFJhbmdlOmEsb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckNlbGxWYWx1ZXMsbyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEU9KHQscik9PmFzeW5jIGE9PntoKGBXb3Jrc2hlZXQ6IENsZWFyIGNlbGwgZm9ybWF0dGluZzsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCk7Y29uc3Qgbz17Y2VsbFJhbmdlOmEsb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckNlbGxGb3JtYXR0aW5nLG8pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxXPSh0LHIpPT5hc3luYyBhPT57aChgV29ya3NoZWV0OiBDbGVhciBjZWxsczsgY2VsbFJhbmdlOiR7YX0gKCR7cn0pYCk7Y29uc3Qgbz17Y2VsbFJhbmdlOmEsb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckNlbGxzLG8pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxBPShlLHQpPT4ocixhLG89MWUzKT0+e2lmKE51bWJlci5pc05hTihvKXx8bzw9MCl0aHJvdyBuZXcgQXBpRXJyb3IoXCJVcGRhdGUgaW50ZXJ2YWwgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtjb25zdCBuPXcoKTtoKGBXb3Jrc2hlZXQ6IENyZWF0ZSBkYXRhIHN0cmVhbTsgc3RyZWFtSWQ6JHtufTsgY2VsbFJhbmdlOiR7cn07IHVwZGF0ZUludGVydmFsOiR7b30gKCR7dH0pYCk7Y29uc3Qgcz17Y2xvc2U6KCk9PntoKGBDbG9zZWQgc3RyZWFtICgke259KWApLChlPT57dmFyIHQ7dHJ5e2NvbnN0IHI9ay5nZXQoZSk7aWYoIXIpdGhyb3cgbmV3IEFwaUVycm9yKGBVbmFibGUgdG8gZmluZCByZWdpc3RlcmVkIGRhdGEgc3RyZWFtIHdpdGggaWQgJHtlfWApO3ZvaWQgMCE9PShudWxsIT09KHQ9ci50aW1lcikmJnZvaWQgMCE9PXQ/dDp2b2lkIDApJiZGKGUpLGsuZGVsZXRlKGUpfWNhdGNoKGUpe3Rocm93IGQoZSksZX19KShuKX0sY2VsbFJhbmdlOnIsaWQ6bixzdGFydDooKT0+e2goYFN0YXJ0ZWQgc3RyZWFtaW5nICgke259KWApLFUobixhLGUsdCl9LHN0b3A6KCk9PntoKGBTdG9wcGVkIHN0cmVhbWluZyAoJHtufSlgKSxGKG4pfSx1cGRhdGVJbnRlcnZhbDpvLHdvcmtzaGVldElkOnR9O3JldHVybiBrLnNldChuLHtkYXRhU3RyZWFtOnN9KSxzfSxiPShlLHQsYSxvKT0+e2NvbnN0IG49e2V2ZW50VGFyZ2V0OnIuV29ya3NoZWV0LG9iamVjdElkOnR9O3JldHVybntvYmplY3RJZDp0LGFjdGl2YXRlOnUoZSx0KSxhZGRFdmVudExpc3RlbmVyOmEoZSxuKSxjYWxjdWxhdGU6ZyhlLHQpLGNsZWFyQWxsQ2VsbEZvcm1hdHRpbmc6eShlLHQpLGNsZWFyQWxsQ2VsbHM6QyhlLHQpLGNsZWFyQWxsQ2VsbFZhbHVlczptKGUsdCksY2xlYXJDZWxsRm9ybWF0dGluZzpFKGUsdCksY2xlYXJDZWxsczpXKGUsdCksY2xlYXJDZWxsVmFsdWVzOnYoZSx0KSxjcmVhdGVEYXRhU3RyZWFtOkEoZSx0KSxkZWxldGU6ZihlLHQpLGZpbHRlckNlbGxzOiQoZSx0KSxnZXRDZWxsczp4KGUsdCksZ2V0TmFtZTpHKGUsdCkscHJvdGVjdDpJKGUsdCkscmVtb3ZlRXZlbnRMaXN0ZW5lcjpvKGUpLHNldENlbGxGb3JtYXR0aW5nOkQoZSx0KSxzZXRDZWxsTmFtZTpTKGUsdCksc2V0Q2VsbFZhbHVlczpOKGUsdCksc2V0TmFtZTpSKGUsdCl9fSxmPSh0LHIpPT5hc3luYygpPT57aChgV29ya3NoZWV0OiBEZWxldGUgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5EZWxldGVXb3Jrc2hlZXQscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LCQ9KHQscik9PmFzeW5jKGEsbyxuLHMsaSxsPSEwKT0+e2goYFdvcmtzaGVldDogRmlsdGVyIGNlbGxzOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgLHtjb2x1bW5JbmRleDpvLGZpbHRlck9wZXJhdG9yOm4sY3JpdGVyaWExOnMsY3JpdGVyaWEyOmksdmlzaWJsZURyb3BEb3duOmx9KTtjb25zdCBjPXtjZWxsUmFuZ2U6YSxjcml0ZXJpYTE6cyxjcml0ZXJpYTI6aSxjb2x1bW5JbmRleDpvLGZpbHRlck9wZXJhdG9yOm4sb2JqZWN0SWQ6cix2aXNpYmxlRHJvcERvd246bH07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5GaWx0ZXJDZWxscyxjKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0seD0odCxyKT0+YXN5bmMgYT0+e2goYFdvcmtzaGVldDogR2V0IGNlbGxzOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgKTtjb25zdCBvPXtjZWxsUmFuZ2U6YSxvYmplY3RJZDpyfTtsZXQgbj1bXTt0cnl7bj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0Q2VsbHMsbyksaChgJHthfTpgLG4pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIG59LEc9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IEdldCBuYW1lICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtzaGVldE5hbWUscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEk9KHQscik9PmFzeW5jKCk9PntoKGBXb3Jrc2hlZXQ6IFByb3RlY3QgKCR7cn0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5Qcm90ZWN0V29ya3NoZWV0LHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxEPSh0LHIpPT5hc3luYyhhLG8pPT57aChgV29ya3NoZWV0OiBTZXQgY2VsbCBmb3JtYXR0aW5nOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgLG8pO2NvbnN0IG49e2NlbGxSYW5nZTphLGZvcm1hdHRpbmc6byxvYmplY3RJZDpyfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlNldENlbGxGb3JtYXR0aW5nLG4pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxTPSh0LHIpPT5hc3luYyhhLG8pPT57Y29uc3Qgbj1vLnRyaW0oKTtsZXQgcztpZighbil0aHJvdyBzPW5ldyBQYXJhbWV0ZXJFcnJvcihcIkNlbGwgcmFuZ2UgbmFtZSBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nXCIpLGQocykscztpZihuLmxlbmd0aD4yNTUpdGhyb3cgcz1uZXcgUGFyYW1ldGVyRXJyb3IoXCJDZWxsIHJhbmdlIG5hbWUgbXVzdCBiZSAyNTUgY2hhcmFjdGVycyBvciBsZXNzXCIpLGQocykscztpZigvW15hLXpBLVowLTlfLj9cXFxcXCInXS8udGVzdChuKSl0aHJvdyBzPW5ldyBQYXJhbWV0ZXJFcnJvcihcIkNlbGwgcmFuZ2UgbmFtZSBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnNcIiksZChzKSxzO2lmKC9eXFxkfFxcZCQvLnRlc3QobikpdGhyb3cgcz1uZXcgUGFyYW1ldGVyRXJyb3IoXCJDZWxsIHJhbmdlIG5hbWUgbXVzdCBub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBudW1iZXJcIiksZChzKSxzO2goYFdvcmtzaGVldDogU2V0IGNlbGwgbmFtZTsgY2VsbFJhbmdlOiR7YX07IG5ld0NlbGxSYW5nZU5hbWU6JHtufSAoJHtyfSlgKTtjb25zdCBpPXtjZWxsUmFuZ2U6YSxuYW1lOm4sb2JqZWN0SWQ6cn07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5TZXRDZWxsTmFtZSxpKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sTj0odCxyKT0+YXN5bmMoYSxvKT0+e2goYFdvcmtzaGVldDogU2V0IGNlbGwgdmFsdWVzOyBjZWxsUmFuZ2U6JHthfSAoJHtyfSlgLG8pO2NvbnN0IG49e2NlbGxSYW5nZTphLG9iamVjdElkOnIsdmFsdWVzTWFwOm99O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuU2V0Q2VsbFZhbHVlcyxuKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sUj0odCxyKT0+YXN5bmMgYT0+e2NvbnN0IG89YS50cmltKCk7bGV0IG47aWYoIW8pdGhyb3cgbj1uZXcgUGFyYW1ldGVyRXJyb3IoXCJXb3Jrc2hlZXQgbmFtZSBjYW5ub3QgYmUgYW4gZW1wdHkgc3RyaW5nXCIpLGQobiksbjtpZihvLmxlbmd0aD4zMSl0aHJvdyBuPW5ldyBQYXJhbWV0ZXJFcnJvcihcIldvcmtzaGVldCBuYW1lIG11c3QgYmUgMzEgY2hhcmFjdGVycyBvciBsZXNzXCIpLGQobiksbjtoKGBXb3Jrc2hlZXQ6IFNldCBuYW1lOyBuZXdXb3Jrc2hlZXROYW1lOiR7b30gKCR7cn0pYCk7Y29uc3Qgcz17bmV3V29ya3NoZWV0TmFtZTpvLG9iamVjdElkOnJ9O3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlNldFdvcmtzaGVldE5hbWUscyl9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFU9KGUsdCxyLGEpPT57dmFyIG87dHJ5e2NvbnN0IG49ay5nZXQoZSk7aWYoIW4pdGhyb3cgbmV3IEFwaUVycm9yKGBVbmFibGUgdG8gZmluZCByZWdpc3RlcmVkIGRhdGEgc3RyZWFtIHdpdGggaWQgJHtlfWApO3ZvaWQgMCE9PShudWxsIT09KG89bi50aW1lcikmJnZvaWQgMCE9PW8/bzp2b2lkIDApJiZGKGUpO2NvbnN0e2NlbGxSYW5nZTpzLHVwZGF0ZUludGVydmFsOml9PW4uZGF0YVN0cmVhbSxsPWFzeW5jKCk9Pntjb25zdCBvPWF3YWl0IHQoKTt0cnl7YXdhaXQgTihyLGEpKHMsW1tvXV0pfWNhdGNoKHQpe3AoYFVuYWJsZSB0byB1cGRhdGUgY2VsbCByYW5nZSBmb3Igc3RyZWFtIHdpdGggaWQgJHtlfTogJHtudWxsPT10P3ZvaWQgMDp0Lm1lc3NhZ2V9YCl9fSxjPXdpbmRvdy5zZXRJbnRlcnZhbChsLGkpO24udGltZXI9Y31jYXRjaChlKXt0aHJvdyBkKGUpLGV9fSxGPWU9Pnt2YXIgdDt0cnl7Y29uc3Qgcj1rLmdldChlKTtpZighcil0aHJvdyBuZXcgQXBpRXJyb3IoYFVuYWJsZSB0byBmaW5kIHJlZ2lzdGVyZWQgZGF0YSBzdHJlYW0gd2l0aCBpZCAke2V9YCk7aWYodm9pZCAwPT09KG51bGwhPT0odD1yLnRpbWVyKSYmdm9pZCAwIT09dD90OnZvaWQgMCkpcmV0dXJuO3dpbmRvdy5jbGVhckludGVydmFsKHIudGltZXIpLHIudGltZXI9dm9pZCAwfWNhdGNoKGUpe3Rocm93IGQoZSksZX19LEw9bmV3IE1hcCxQPShyLGEpPT5hc3luYyhvLG4pPT57aWYoIWF8fCFhLmV2ZW50VGFyZ2V0fHwhYS5vYmplY3RJZCl7Y29uc3QgZT1uZXcgRXZlbnRFcnJvcihcIkV2ZW50IHJlZ2lzdHJhdGlvbiBtaXNzaW5nIHJlcXVpcmVkIHZhbHVlc1wiKTt0aHJvdyBkKGUpLGV9Y29uc3Qgcz1PYmplY3Qua2V5cyh0KS5maW5kKChlPT5lLnRvTG93ZXJDYXNlKCk9PT1vLnRvTG93ZXJDYXNlKCkpKTtpZighcyl7Y29uc3QgZT1uZXcgRXZlbnRFcnJvcihgVW5zdXBwb3J0ZWQgZXZlbnQgbmFtZTogJHtvfWApO3Rocm93IGQoZSksZX1hLmV2ZW50TmFtZT10W3NdLGgoXCJSZWdpc3RlcmluZyBldmVudFwiLGEpO3RyeXtjb25zdCB0PWF3YWl0IHIuZGlzcGF0Y2goZS5SZWdpc3RlckV2ZW50LGEpO0wuc2V0KHQsbil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcih2b2lkIDAsZSl9fSxqPXQ9PmFzeW5jIHI9PntsZXQgYTtmb3IoY29uc3RbZSx0XW9mIEwpaWYodD09PXIpe2E9ZTticmVha31pZighYSl0aHJvdyBuZXcgRXZlbnRFcnJvcjtoKFwiRGVyZWdpc3RlcmluZyBldmVudDpcIixhKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkRlcmVnaXN0ZXJFdmVudCxhKSxMLmRlbGV0ZShhKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX0sTz0oZSxhLG8pPT57dmFyIG4scztzd2l0Y2goby5ldmVudFRhcmdldCl7Y2FzZSByLldvcmtib29rOnN3aXRjaChudWxsPT09KG49by5ldmVudE5hbWUpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLnRvVXBwZXJDYXNlKCkpe2Nhc2UgdC5BY3RpdmF0ZS50b1VwcGVyQ2FzZSgpOmNhc2UgdC5DbG9zZS50b1VwcGVyQ2FzZSgpOmNhc2UgdC5EZWFjdGl2YXRlLnRvVXBwZXJDYXNlKCk6cmV0dXJuIGUoKTtjYXNlIHQuQWRkV29ya3NoZWV0LnRvVXBwZXJDYXNlKCk6Y2FzZSB0LkRlbGV0ZVdvcmtzaGVldC50b1VwcGVyQ2FzZSgpOnJldHVybiBlKGIoYSxvLndvcmtzaGVldE9iamVjdElkLFAsaikpO2RlZmF1bHQ6dGhyb3cgbmV3IEV2ZW50RXJyb3IoYFVuZXhwZWN0ZWQgd29ya2Jvb2sgZXZlbnQ6ICR7by5ldmVudE5hbWV9YCl9Y2FzZSByLldvcmtzaGVldDpzd2l0Y2gobnVsbD09PShzPW8uZXZlbnROYW1lKXx8dm9pZCAwPT09cz92b2lkIDA6cy50b1VwcGVyQ2FzZSgpKXtjYXNlIHQuQWN0aXZhdGUudG9VcHBlckNhc2UoKTpyZXR1cm4gZSgpO2Nhc2UgdC5DaGFuZ2UudG9VcHBlckNhc2UoKTpyZXR1cm4gZShvLmNoYW5nZWRDZWxscyk7Y2FzZSB0LkRlYWN0aXZhdGUudG9VcHBlckNhc2UoKTpyZXR1cm4gZSgpO2RlZmF1bHQ6dGhyb3cgbmV3IEV2ZW50RXJyb3IoYFVuZXhwZWN0ZWQgd29ya3NoZWV0IGV2ZW50OiAke28uZXZlbnROYW1lfWApfWRlZmF1bHQ6dGhyb3cgbmV3IEV2ZW50RXJyb3IoYFVuZXhwZWN0ZWQgZXZlbnQgdGFyZ2V0OiAke28uZXZlbnRUYXJnZXR9YCl9fSxCPSh0LHIpPT5hc3luYygpPT57aChgV29ya2Jvb2s6IEFjdGl2YXRlICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkFjdGl2YXRlV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFY9KHQscixhLG8pPT5hc3luYygpPT57bGV0IG47aChgV29ya2Jvb2s6IEFkZCB3b3Jrc2hlZXQgKCR7cn0pYCk7dHJ5e249YXdhaXQgdC5kaXNwYXRjaChlLkFkZFdvcmtzaGVldCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBiKHQsbixhLG8pfSxNPSh0LHIpPT5hc3luYygpPT57aChgV29ya2Jvb2s6IENhbGN1bGF0ZSAoJHtyfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNhbGN1bGF0ZVdvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSx6PSh0LHIpPT5hc3luYygpPT57aChgV29ya2Jvb2s6IENsb3NlICgke3J9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkNsb3NlV29ya2Jvb2sscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LFQ9KGUsdCxhLG8pPT57Y29uc3Qgbj17ZXZlbnRUYXJnZXQ6ci5Xb3JrYm9vayxvYmplY3RJZDp0fTtyZXR1cm57b2JqZWN0SWQ6dCxhY3RpdmF0ZTpCKGUsdCksYWRkV29ya3NoZWV0OlYoZSx0LGEsbyksYWRkRXZlbnRMaXN0ZW5lcjphKGUsbiksY2FsY3VsYXRlOk0oZSx0KSxjbG9zZTp6KGUsdCksZ2V0Q2FsY3VsYXRpb25Nb2RlOlEoZSx0KSxnZXROYW1lOkgoZSx0KSxnZXRXb3Jrc2hlZXRCeU5hbWU6XyhlLHQsYSxvKSxnZXRXb3Jrc2hlZXRzOnEoZSx0LGEsbykscmVtb3ZlRXZlbnRMaXN0ZW5lcjpvKGUpLHNhdmU6SihlLHQpLHNhdmVBczpLKGUsdCl9fSxRPSh0LHIpPT5hc3luYygpPT57aChcIldvcmtib29rOiBHZXQgY2FsY3VsYXRpb24gbW9kZVwiKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRDYWxjdWxhdGlvbk1vZGUscil9Y2F0Y2goZSl7dGhyb3cgbmV3IEFkYXB0ZXJFcnJvcn19LEg9KHQscik9PmFzeW5jKCk9PntoKGBXb3JrYm9vazogR2V0IG5hbWUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya2Jvb2tOYW1lLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxfPSh0LHIsYSxvKT0+YXN5bmMgbj0+e2xldCBzO2goYFdvcmtib29rOiBHZXQgd29ya3NoZWV0IGJ5IG5hbWU6ICR7bn0gKCR7cn0pYCk7dHJ5e2lmKHM9YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtzaGVldEJ5TmFtZSx7b2JqZWN0SWQ6cix3b3Jrc2hlZXROYW1lOm59KSxudWxsPT09cylyZXR1cm4gbnVsbH1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBiKHQscyxhLG8pfSxxPSh0LHIsYSxvKT0+YXN5bmMoKT0+e2xldCBuO2goYFdvcmtib29rOiBHZXQgd29ya3NoZWV0cyAoJHtyfSlgKTt0cnl7bj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0cyxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBuLm1hcCgoZT0+Yih0LGUsYSxvKSkpfSxKPSh0LHIpPT5hc3luYygpPT57aChgV29ya2Jvb2s6IFNhdmUgKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuU2F2ZVdvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxLPSh0LHIpPT5hc3luYyBhPT57aChgV29ya2Jvb2s6IFNhdmUgYXM7IGZpbGVQYXRoOiR7YX0gKCR7cn0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuU2F2ZVdvcmtib29rQXMse2ZpbGVQYXRoOmEsb2JqZWN0SWQ6cn0pfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9fSxYPXQ9PmFzeW5jKCk9PntsZXQgcjtoKFwiQXBwbGljYXRpb246IENyZWF0ZSB3b3JrYm9va1wiKTt0cnl7cj1hd2FpdCB0LmRpc3BhdGNoKGUuQ3JlYXRlV29ya2Jvb2spfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIFQodCxyLFAsail9LFo9dD0+YXN5bmMgcj0+e2xldCBhO2goYEFwcGxpY2F0aW9uOiBHZXQgd29ya2Jvb2s7IGlkOiR7cn1gKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya2Jvb2tCeUlkLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIFQodCxhLFAsail9LFk9dD0+YXN5bmMoKT0+e2xldCByO2goXCJBcHBsaWNhdGlvbjogR2V0IHdvcmtib29rc1wiKTt0cnl7cj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya2Jvb2tzKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiByLm1hcCgoZT0+VCh0LGUsUCxqKSkpfSxlZT10PT5hc3luYyByPT57aChgQXBwbGljYXRpb246IEdldCB3b3Jrc2hlZXQ7IGlkOiR7cn1gKTt0cnl7cj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0QnlJZCxyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfXJldHVybiBiKHQscixQLGopfSx0ZT10PT5hc3luYyByPT57bGV0IGE7aChgQXBwbGljYXRpb246IE9wZW4gd29ya2Jvb2s7IGZpbGVQYXRoOiR7cn1gKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuT3Blbldvcmtib29rLHIpfWNhdGNoKGUpe3Rocm93IG5ldyBBZGFwdGVyRXJyb3J9cmV0dXJuIFQodCxhLFAsail9LHJlPXQ9PmFzeW5jKHI9ITApPT57aChgQXBwbGljYXRpb246IFF1aXQ7IGRpc3BsYXlBbGVydHM6JHtyfWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlF1aXRBcHBsaWNhdGlvbixyKX1jYXRjaChlKXt0aHJvdyBuZXcgQWRhcHRlckVycm9yfX07dmFyIGFlLG9lOyFmdW5jdGlvbihlKXtlLkV4Y2VsQXBwbGljYXRpb249XCJFWENFTC1BUFBcIn0oYWV8fChhZT17fSkpLGZ1bmN0aW9uKGUpe2VbZS5JbmZvPTFdPVwiSW5mb1wiLGVbZS5XYXJuPTJdPVwiV2FyblwiLGVbZS5FcnJvcj0zXT1cIkVycm9yXCJ9KG9lfHwob2U9e30pKTtjb25zdCBuZT1cImV4Y2VsLWFkYXB0ZXJcIixzZT13KCk7bGV0IGllO2NvbnN0IGxlPWFzeW5jKHQ9ITEpPT57dHJ5e2F3YWl0KGFzeW5jIGU9Pnt0cnl7aChcIlJlZ2lzdGVyaW5nIHVzYWdlXCIpLGF3YWl0IGZpbi5TeXN0ZW0ucmVnaXN0ZXJVc2FnZSh7dHlwZTpcImludGVncmF0aW9uLWZlYXR1cmVcIixkYXRhOnthcGlWZXJzaW9uOm4sY29tcG9uZW50TmFtZTplfX0pfWNhdGNoKHQpe3AoYFVuYWJsZSB0byByZWdpc3RlciB1c2FnZSBmb3IgZmVhdHVyZSAke2V9OiAke251bGw9PXQ/dm9pZCAwOnQubWVzc2FnZX1gKX19KShhZS5FeGNlbEFwcGxpY2F0aW9uKTt7YXdhaXQoYXN5bmMoKT0+e3ZhciBlO2NvbnN0IHQ9bnVsbD09PShlPShhd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKS5nZXRNYW5pZmVzdCgpKS5hcHBBc3NldHMpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmZpbmQoKGU9PmUuYWxpYXM9PT1uZSkpO2lmKHQpcmV0dXJuIHZvaWQgcChcIkRldGVjdGVkIGFkYXB0ZXIgcGFja2FnZSBpbiBhcHAgbWFuaWZlc3QgYXBwQXNzZXRzXCIsdCk7aWYoYXdhaXQgZGUoKSlyZXR1cm4gdm9pZCBoKFwiVXNpbmcgZXhpc3RpbmcgYWRhcHRlciBwYWNrYWdlXCIpO2NvbnN0IHI9e2FsaWFzOm5lLHNyYzpgaHR0cHM6Ly9jZG4ub3BlbmZpbi5jby9yZWxlYXNlL2ludGVncmF0aW9ucy9leGNlbC8ke259L09wZW5GaW4uRXhjZWwuemlwYCx0YXJnZXQ6XCJPcGVuRmluLkV4Y2VsLmV4ZVwiLHZlcnNpb246bn07aChcIkRvd25sb2FkaW5nIGFkYXB0ZXIgcGFja2FnZVwiLHIpO3RyeXthd2FpdCBmaW4uU3lzdGVtLmRvd25sb2FkQXNzZXQociwoKCk9Pnt9KSl9Y2F0Y2goZSl7dGhyb3cgZChcIlVuYWJsZSB0byBkb3dubG9hZCBhZGFwdGVyIHBhY2thZ2VcIiksZX19KSgpO2NvbnN0e3NlY3VyaXR5UmVhbG06ZSxwb3J0OnJ9PWF3YWl0IGZpbi5TeXN0ZW0uZ2V0UnVudGltZUluZm8oKTtsZXR7bGljZW5zZUtleTphfT1hd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKS5nZXRNYW5pZmVzdCgpO2E9bnVsbCE9YT9hOlwiTk9fTElDRU5TRV9LRVlcIjtjb25zdCBvPWZpbi5tZS51dWlkO2goXCJJbml0aWFsaXppbmcgYWRhcHRlclwiLHthZGFwdGVyTG9nZ2luZ0VuYWJsZWQ6dCxjaGFubmVsTmFtZTpzZSxsaWNlbnNlS2V5OmEscG9ydDpyLHNlY3VyaXR5UmVhbG06ZSx1dWlkOm99KSxmaW4uU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2Vzcyh7YWxpYXM6bmUsYXJndW1lbnRzOmAke299ICR7YX0gJHtyfSAke2V9ICR7c2V9ICR7dH1gfSl9Y29uc3QgYT1maW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3Qoc2Use3BheWxvYWQ6e3ZlcnNpb246bn19KSxvPW5ldyBQcm9taXNlKChlPT57c2V0VGltZW91dChlLDJlNCl9KSkudGhlbigoKCk9Pnt0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0aW9uIHRvIGFkYXB0ZXIgdGltZWQgb3V0XCIpfSkpO2llPWF3YWl0IFByb21pc2UucmFjZShbYSxvXSksaChgQ29ubmVjdGVkIHRvIGFkYXB0ZXIgJHtpZS5wcm92aWRlcklkZW50aXR5LnV1aWR9IG9uIGNoYW5uZWwgJHtzZX1gKSxpZS5yZWdpc3RlcihlLkxvZ01lc3NhZ2UsY2UpLGllLnJlZ2lzdGVyKGUuRXZlbnRGaXJlZCwocj1pZSxlPT57Y29uc3R7ZXZlbnRSZWdpc3RyYXRpb25JZDp0fT1lLGE9TC5nZXQodCk7aWYoIWEpdGhyb3cgbmV3IEV2ZW50RXJyb3IoYE5vIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXIgZm91bmQgZm9yIGlkOiAke3R9YCk7aChcIkV2ZW50IHBheWxvYWQgcmVjZWl2ZWRcIixlKSxPKGEscixlKX0pKX1jYXRjaChlKXtjb25zdCB0PW5ldyBJbml0aWFsaXphdGlvbkVycm9yKHZvaWQgMCxlKTt0aHJvdyBkKHQpLHR9dmFyIHI7cmV0dXJue2FkYXB0ZXI6e2NoYW5uZWxOYW1lOnNlLHZlcnNpb246bn0sY3JlYXRlV29ya2Jvb2s6WChpZSksZ2V0V29ya2Jvb2tCeUlkOlooaWUpLGdldFdvcmtib29rczpZKGllKSxnZXRXb3Jrc2hlZXRCeUlkOmVlKGllKSxvcGVuV29ya2Jvb2s6dGUoaWUpLHF1aXQ6cmUoaWUpfX0sY2U9ZT0+e2NvbnN0e21lc3NhZ2U6dCx0eXBlOnJ9PWUsYT1cIlthZGFwdGVyXVwiO3N3aXRjaChyKXtjYXNlIG9lLkVycm9yOmQodCxhKTticmVhaztjYXNlIG9lLkluZm86aChhLHQpO2JyZWFrO2Nhc2Ugb2UuV2FybjpwKGEsdCl9fSxkZT1hc3luYygpPT57dHJ5e2NvbnN0IGU9YXdhaXQgZmluLlN5c3RlbS5nZXRBcHBBc3NldEluZm8oe2FsaWFzOm5lfSk7cmV0dXJuIGUmJmUudmVyc2lvbj09PW59Y2F0Y2goZSl7cmV0dXJuITF9fTt2YXIgaGUscGUsd2Usa2UsdWU7IWZ1bmN0aW9uKGUpe2UuQ29udGludW91cz1cIkNvbnRpbnVvdXNcIixlLkRhc2g9XCJEYXNoXCIsZS5EYXNoRG90PVwiRGFzaERvdFwiLGUuRGFzaERvdERvdD1cIkRhc2hEb3REb3RcIixlLkRvdD1cIkRvdFwiLGUuRG91YmxlPVwiRG91YmxlXCIsZS5TbGFudERhc2hEb3Q9XCJTbGFudERhc2hEb3RcIixlLk5vbmU9XCJOb25lXCJ9KGhlfHwoaGU9e30pKSxmdW5jdGlvbihlKXtlLkNlbnRlcj1cIkNlbnRlclwiLGUuQ2VudGVyQWNyb3NzU2VsZWN0aW9uPVwiQ2VudGVyQWNyb3NzU2VsZWN0aW9uXCIsZS5EaXN0cmlidXRlZD1cIkRpc3RyaWJ1dGVkXCIsZS5GaWxsPVwiRmlsbFwiLGUuR2VuZXJhbD1cIkdlbmVyYWxcIixlLkp1c3RpZnk9XCJKdXN0aWZ5XCIsZS5MZWZ0PVwiTGVmdFwiLGUuUmlnaHQ9XCJSaWdodFwifShwZXx8KHBlPXt9KSksZnVuY3Rpb24oZSl7ZS5BdXRvbWF0aWM9XCJBdXRvbWF0aWNcIixlLkNoZWNrZXI9XCJDaGVja2VyXCIsZS5Dcmlzc0Nyb3NzPVwiQ3Jpc3NDcm9zc1wiLGUuRG93bj1cIkRvd25cIixlLkdyYXkxNj1cIkdyYXkxNlwiLGUuR3JheTI1PVwiR3JheTI1XCIsZS5HcmF5NTA9XCJHcmF5NTBcIixlLkdyYXk3NT1cIkdyYXk3NVwiLGUuR3JheTg9XCJHcmF5OFwiLGUuR3JpZD1cIkdyaWRcIixlLkhvcml6b250YWw9XCJIb3Jpem9udGFsXCIsZS5MaWdodERvd249XCJMaWdodERvd25cIixlLkxpZ2h0SG9yaXpvbnRhbD1cIkxpZ2h0SG9yaXpvbnRhbFwiLGUuTGlnaHRVcD1cIkxpZ2h0VXBcIixlLkxpZ2h0VmVydGljYWw9XCJMaWdodFZlcnRpY2FsXCIsZS5MaW5lYXJHcmFkaWVudD1cIkxpbmVhckdyYWRpZW50XCIsZS5Ob25lPVwiTm9uZVwiLGUuUmVjdGFuZ3VsYXJHcmFkaWVudD1cIlJlY3Rhbmd1bGFyR3JhZGllbnRcIixlLlNlbWlHcmF5NzU9XCJTZW1pR3JheTc1XCIsZS5Tb2xpZD1cIlNvbGlkXCIsZS5VcD1cIlVwXCIsZS5WZXJ0aWNhbD1cIlZlcnRpY2FsXCJ9KHdlfHwod2U9e30pKSxmdW5jdGlvbihlKXtlLkJvdHRvbT1cIkJvdHRvbVwiLGUuQ2VudGVyPVwiQ2VudGVyXCIsZS5EaXN0cmlidXRlZD1cIkRpc3RyaWJ1dGVkXCIsZS5KdXN0aWZ5PVwiSnVzdGlmeVwiLGUuVG9wPVwiVG9wXCJ9KGtlfHwoa2U9e30pKSxmdW5jdGlvbihlKXtlLkFuZD1cIkFuZFwiLGUuT3I9XCJPclwiLGUuVG9wMTBJdGVtcz1cIlRvcDEwSXRlbXNcIixlLkJvdHRvbTEwSXRlbXM9XCJCb3R0b20xMEl0ZW1zXCIsZS5Ub3AxMFBlcmNlbnQ9XCJUb3AxMFBlcmNlbnRcIixlLkJvdHRvbTEwUGVyY2VudD1cIkJvdHRvbTEwUGVyY2VudFwiLGUuRmlsdGVyVmFsdWVzPVwiRmlsdGVyVmFsdWVzXCJ9KHVlfHwodWU9e30pKTt2YXIgZ2U9by5kcSxtZT1vLk1TLHllPW8ueFEsQ2U9by5zTyx2ZT1vLlp1LEVlPW8uSTMsV2U9by4kVSxBZT1vLmkwLGJlPW8uY1gsZmU9by5fVywkZT1vLlUkLHhlPW8uVTcsR2U9by5yZDtleHBvcnR7Z2UgYXMgQWRhcHRlckVycm9yLG1lIGFzIEFwaUVycm9yLHllIGFzIEV2ZW50RXJyb3IsQ2UgYXMgRXhjZWxDZWxsQm9yZGVyTGluZVN0eWxlLHZlIGFzIEV4Y2VsQ2VsbEhvcml6b250YWxBbGlnbm1lbnQsRWUgYXMgRXhjZWxDZWxsUGF0dGVybixXZSBhcyBFeGNlbENlbGxWZXJ0aWNhbEFsaWdubWVudCxBZSBhcyBFeGNlbEZpbHRlck9wZXJhdG9yLGJlIGFzIEluaXRpYWxpemF0aW9uRXJyb3IsZmUgYXMgUGFyYW1ldGVyRXJyb3IsJGUgYXMgZGlzYWJsZUxvZ2dpbmcseGUgYXMgZW5hYmxlTG9nZ2luZyxHZSBhcyBnZXRFeGNlbEFwcGxpY2F0aW9ufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldEN1cnJlbnRDaGFubmVsIH0gZnJvbSBcIkBmaW5vcy9mZGMzXCI7XG5pbXBvcnQgeyBDZWxsLCBFeGNlbEFwcGxpY2F0aW9uLCBFeGNlbFdvcmtib29rLCBFeGNlbFdvcmtzaGVldCwgZ2V0RXhjZWxBcHBsaWNhdGlvbiB9IGZyb20gXCJAb3BlbmZpbi9leGNlbFwiO1xuXG5jb25zdCBLTk9XTl9JTlNUUlVNRU5UUyA9IFtcIlRTTEFcIiwgXCJNU0ZUXCIsIFwiQUFQTFwiXTtcblxubGV0IGV4Y2VsOiBFeGNlbEFwcGxpY2F0aW9uIHwgdW5kZWZpbmVkO1xubGV0IG9wZW5Xb3JrYm9va3M6XG5cdHwge1xuXHRcdFx0Ym9vazogRXhjZWxXb3JrYm9vaztcblx0XHRcdG5hbWU6IHN0cmluZztcblx0ICB9W11cblx0fCB1bmRlZmluZWQ7XG5sZXQgc2VsZWN0ZWRXb3JrYm9va0luZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5sZXQgb3BlbldvcmtzaGVldHM6XG5cdHwge1xuXHRcdFx0c2hlZXQ6IEV4Y2VsV29ya3NoZWV0O1xuXHRcdFx0bmFtZTogc3RyaW5nO1xuXHQgIH1bXVxuXHR8IHVuZGVmaW5lZDtcbmxldCBzZWxlY3RlZFdvcmtzaGVldEluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0KCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXN1bHRzLWNvbnRhaW5lclwiKTtcblx0XHRyZXN1bHRzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXHRcdGV4Y2VsID0gYXdhaXQgZ2V0RXhjZWxBcHBsaWNhdGlvbigpO1xuXG5cdFx0YXdhaXQgcG9wdWxhdGVXb3JrYm9va3MoKTtcblxuXHRcdGNvbnN0IG9wZW5FeGNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1leGNlbFwiKTtcblx0XHRvcGVuRXhjZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGF3YWl0IG9wZW5FeGNlbCgpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgcmVmcmVzaFdvcmtib29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3JrYm9vay1yZWZyZXNoXCIpO1xuXHRcdHJlZnJlc2hXb3JrYm9va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4gcG9wdWxhdGVXb3JrYm9va3MoKSk7XG5cblx0XHRjb25zdCByZWZyZXNoV29ya3NoZWV0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3Jrc2hlZXQtcmVmcmVzaFwiKTtcblx0XHRyZWZyZXNoV29ya3NoZWV0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBwb3B1bGF0ZVdvcmtzaGVldHMoKSk7XG5cblx0XHRjb25zdCBvcGVuV29ya2Jvb2tzU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3JrYm9va3NcIik7XG5cdFx0b3Blbldvcmtib29rc1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jIChlKSA9PlxuXHRcdFx0c2VsZWN0V29ya2Jvb2soKGUudGFyZ2V0IGFzIHVua25vd24gYXMgeyB2YWx1ZTogc3RyaW5nIH0pLnZhbHVlKVxuXHRcdCk7XG5cblx0XHRjb25zdCBvcGVuV29ya3NoZWV0c1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya3NoZWV0c1wiKTtcblx0XHRvcGVuV29ya3NoZWV0c1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jIChlKSA9PlxuXHRcdFx0c2VsZWN0V29ya3NoZWV0KChlLnRhcmdldCBhcyB1bmtub3duIGFzIHsgdmFsdWU6IHN0cmluZyB9KS52YWx1ZSlcblx0XHQpO1xuXG5cdFx0Y29uc3Qgc2V0VmFsdWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldC12YWx1ZVwiKTtcblx0XHRzZXRWYWx1ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0YXdhaXQgc2V0Q2VsbFZhbHVlKCk7XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHNob3dFcnJvcihlcnIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHNob3dFcnJvcihlcnIpIHtcblx0Y29uc3QgZXJyRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvclwiKTtcblx0ZXJyRG9tLmlubmVySFRNTCA9IGVyci5tZXNzYWdlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuRXhjZWwoKTogUHJvbWlzZTx2b2lkPiB7XG5cdHRyeSB7XG5cdFx0Ly8gT3BlbiB0aGUgc2VsZWN0IHdvcmsgYm9vayBhbmQgc2hlZXRcblx0XHQvLyBpZiBhbnl0aGluZyB0aHJvd3MgYW4gZXhjZXB0aW9uIGp1c3Qgb3BlbiBhIG5ldyB3b3JrYm9va1xuXHRcdGF3YWl0IHNlbGVjdFdvcmtib29rKG9wZW5Xb3JrYm9va3Nbc2VsZWN0ZWRXb3JrYm9va0luZGV4XS5uYW1lKTtcblx0XHRhd2FpdCBzZWxlY3RXb3Jrc2hlZXQob3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0ubmFtZSk7XG5cdH0gY2F0Y2gge1xuXHRcdGF3YWl0IGV4Y2VsLmNyZWF0ZVdvcmtib29rKCk7XG5cdFx0YXdhaXQgcG9wdWxhdGVXb3JrYm9va3MoKTtcblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVdvcmtib29rcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKGV4Y2VsKSB7XG5cdFx0c2VsZWN0ZWRXb3JrYm9va0luZGV4ID0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHJlZnJlc2hCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3b3JrYm9vay1yZWZyZXNoXCIpO1xuXHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG5cdFx0Y29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIjd29ya2Jvb2tzXCIpO1xuXHRcdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0c2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG5cblx0XHRvcGVuV29ya2Jvb2tzID0gW107XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgd29ya2Jvb2tzID0gYXdhaXQgZXhjZWwuZ2V0V29ya2Jvb2tzKCk7XG5cblx0XHRcdGZvciAoY29uc3QgYm9vayBvZiB3b3JrYm9va3MpIHtcblx0XHRcdFx0Y29uc3QgbmFtZSA9IGF3YWl0IGJvb2suZ2V0TmFtZSgpO1xuXHRcdFx0XHRvcGVuV29ya2Jvb2tzLnB1c2goe1xuXHRcdFx0XHRcdGJvb2ssXG5cdFx0XHRcdFx0bmFtZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3B0aW9uRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdFx0b3B0aW9uRW1wdHkuaW5uZXJIVE1MID0gXCItLS0tU2VsZWN0IHdvcmtib29rLS0tLVwiO1xuXHRcdFx0b3B0aW9uRW1wdHkudmFsdWUgPSBcIlwiO1xuXHRcdFx0b3B0aW9uRW1wdHkuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0b3B0aW9uRW1wdHkuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb25FbXB0eSk7XG5cblx0XHRcdGZvciAoY29uc3Qgb3Blbldvcmtib29rIG9mIG9wZW5Xb3JrYm9va3MpIHtcblx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0b3B0aW9uLmlubmVySFRNTCA9IG9wZW5Xb3JrYm9vay5uYW1lO1xuXHRcdFx0XHRvcHRpb24udmFsdWUgPSBvcGVuV29ya2Jvb2submFtZTtcblx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb24pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0c2hvd0Vycm9yKGVycik7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0cmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RXb3JrYm9vayhuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgbmV3V29ya2Jvb2tJbmRleCA9IG9wZW5Xb3JrYm9va3MuZmluZEluZGV4KCh3KSA9PiB3Lm5hbWUgPT09IG5hbWUpO1xuXG5cdGlmIChuZXdXb3JrYm9va0luZGV4ICE9PSBzZWxlY3RlZFdvcmtib29rSW5kZXgpIHtcblx0XHRzZWxlY3RlZFdvcmtib29rSW5kZXggPSBuZXdXb3JrYm9va0luZGV4O1xuXHRcdGlmIChuZXdXb3JrYm9va0luZGV4ID49IDApIHtcblx0XHRcdGF3YWl0IG9wZW5Xb3JrYm9va3Nbc2VsZWN0ZWRXb3JrYm9va0luZGV4XS5ib29rLmFjdGl2YXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0YXdhaXQgcG9wdWxhdGVXb3Jrc2hlZXRzKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlV29ya3NoZWV0cygpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKGV4Y2VsKSB7XG5cdFx0c2VsZWN0ZWRXb3Jrc2hlZXRJbmRleCA9IHVuZGVmaW5lZDtcblx0XHRjb25zdCByZWZyZXNoQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd29ya3NoZWV0LXJlZnJlc2hcIik7XG5cdFx0cmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiN3b3Jrc2hlZXRzXCIpO1xuXHRcdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0c2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG5cblx0XHRvcGVuV29ya3NoZWV0cyA9IFtdO1xuXG5cdFx0Y29uc3Qgd29ya2Jvb2sgPSBvcGVuV29ya2Jvb2tzW3NlbGVjdGVkV29ya2Jvb2tJbmRleF07XG5cdFx0aWYgKHdvcmtib29rKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBzaGVldHMgPSBhd2FpdCB3b3JrYm9vay5ib29rLmdldFdvcmtzaGVldHMoKTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHNoZWV0IG9mIHNoZWV0cykge1xuXHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBhd2FpdCBzaGVldC5nZXROYW1lKCk7XG5cdFx0XHRcdFx0b3BlbldvcmtzaGVldHMucHVzaCh7XG5cdFx0XHRcdFx0XHRzaGVldCxcblx0XHRcdFx0XHRcdG5hbWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IG9wdGlvbkVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0b3B0aW9uRW1wdHkuaW5uZXJIVE1MID0gXCItLS0tU2VsZWN0IHdvcmtzaGVldC0tLS1cIjtcblx0XHRcdFx0b3B0aW9uRW1wdHkudmFsdWUgPSBcIlwiO1xuXHRcdFx0XHRvcHRpb25FbXB0eS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdG9wdGlvbkVtcHR5LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0c2VsZWN0LmFwcGVuZChvcHRpb25FbXB0eSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCBvcGVuV29ya3NoZWV0IG9mIG9wZW5Xb3Jrc2hlZXRzKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRcdFx0XHRvcHRpb24uaW5uZXJIVE1MID0gb3BlbldvcmtzaGVldC5uYW1lO1xuXHRcdFx0XHRcdG9wdGlvbi52YWx1ZSA9IG9wZW5Xb3Jrc2hlZXQubmFtZTtcblx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kKG9wdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdHNob3dFcnJvcihlcnIpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0c2VsZWN0LmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VsZWN0V29ya3NoZWV0KG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBuZXdXb3Jrc2hlZXRJbmRleCA9IG9wZW5Xb3Jrc2hlZXRzLmZpbmRJbmRleCgodykgPT4gdy5uYW1lID09PSBuYW1lKTtcblxuXHRpZiAobmV3V29ya3NoZWV0SW5kZXggIT09IHNlbGVjdGVkV29ya3NoZWV0SW5kZXgpIHtcblx0XHRjb25zdCBvbGRXb3Jrc2hlZXQgPSBvcGVuV29ya3NoZWV0c1tzZWxlY3RlZFdvcmtzaGVldEluZGV4XTtcblx0XHRpZiAob2xkV29ya3NoZWV0KSB7XG5cdFx0XHRhd2FpdCBvbGRXb3Jrc2hlZXQuc2hlZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVDZWxsQ2hhbmdlKTtcblx0XHR9XG5cblx0XHRzZWxlY3RlZFdvcmtzaGVldEluZGV4ID0gbmV3V29ya3NoZWV0SW5kZXg7XG5cdFx0aWYgKHNlbGVjdGVkV29ya3NoZWV0SW5kZXggPj0gMCkge1xuXHRcdFx0YXdhaXQgb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF0uc2hlZXQuYWN0aXZhdGUoKTtcblx0XHRcdGF3YWl0IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdLnNoZWV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlQ2VsbENoYW5nZSk7XG5cblx0XHRcdGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihcIiNyZXN1bHRzLWNvbnRhaW5lclwiKTtcblx0XHRcdHJlc3VsdHNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2NlbGwtbG9jYXRpb25cIikuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjY2VsbC12YWx1ZVwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNzZXQtdmFsdWVcIikuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2VsbENoYW5nZShjZWxsczogQ2VsbFtdKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGNlbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NlbGwtY2hhbmdlcy1jb250YWluZXJcIik7XG5cdGNlbGxDb250YWluZXIuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoY2VsbHMsIHVuZGVmaW5lZCwgXCIgIFwiKTtcblxuXHRmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcblx0XHRpZiAoS05PV05fSU5TVFJVTUVOVFMuaW5jbHVkZXMoY2VsbC52YWx1ZSkpIHtcblx0XHRcdGF3YWl0IGJyb2FkY2FzdEluc3RydW1lbnQoY2VsbC52YWx1ZSk7XG5cdFx0fVxuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldENlbGxWYWx1ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKG9wZW5Xb3Jrc2hlZXRzICYmIHNlbGVjdGVkV29ya3NoZWV0SW5kZXggIT09IHVuZGVmaW5lZCkge1xuXHRcdGNvbnN0IGNlbGxMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjY2VsbC1sb2NhdGlvblwiKTtcblx0XHRjb25zdCBjZWxsVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI2NlbGwtdmFsdWVcIik7XG5cblx0XHRhd2FpdCBvcGVuV29ya3NoZWV0c1tzZWxlY3RlZFdvcmtzaGVldEluZGV4XS5zaGVldC5zZXRDZWxsVmFsdWVzKGNlbGxMb2NhdGlvbi52YWx1ZSwgW1tjZWxsVmFsdWUudmFsdWVdXSk7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gYnJvYWRjYXN0SW5zdHJ1bWVudChpbnN0cnVtZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYnJvYWRjYXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjYnJvYWRjYXN0LWluc3RydW1lbnRcIik7XG5cdGlmICh3aW5kb3cuZmRjMykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBmZGNJbnN0cnVtZW50ID0ge1xuXHRcdFx0XHR0eXBlOiBcImZkYzMuaW5zdHJ1bWVudFwiLFxuXHRcdFx0XHRpZDoge1xuXHRcdFx0XHRcdHRpY2tlcjogaW5zdHJ1bWVudFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBjaGFubmVsID0gYXdhaXQgZ2V0Q3VycmVudENoYW5uZWwoKTtcblx0XHRcdGNoYW5uZWwuYnJvYWRjYXN0KGZkY0luc3RydW1lbnQpO1xuXG5cdFx0XHRicm9hZGNhc3RFbGVtZW50LnZhbHVlID0gaW5zdHJ1bWVudDtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGJyb2FkY2FzdEVsZW1lbnQudmFsdWUgPSBlcnIubWVzc2FnZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0YnJvYWRjYXN0RWxlbWVudC50ZXh0Q29udGVudCA9IFwiTm8gRkQzIENoYW5uZWwgYXZhaWxhYmxlXCI7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==