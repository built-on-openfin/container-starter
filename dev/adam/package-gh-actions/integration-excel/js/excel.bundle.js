/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@finos/fdc3/dist/fdc3.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/@finos/fdc3/dist/fdc3.esm.js ***!
  \***************************************************/
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

/***/ "./node_modules/@openfin/excel/openfin.excel.js":
/*!******************************************************!*\
  !*** ./node_modules/@openfin/excel/openfin.excel.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdapterError": () => (/* binding */ ue),
/* harmony export */   "ApiError": () => (/* binding */ ge),
/* harmony export */   "EventError": () => (/* binding */ Ce),
/* harmony export */   "ExcelCellBorderLineStyle": () => (/* binding */ ye),
/* harmony export */   "ExcelCellHorizontalAlignment": () => (/* binding */ ve),
/* harmony export */   "ExcelCellPattern": () => (/* binding */ me),
/* harmony export */   "ExcelCellVerticalAlignment": () => (/* binding */ We),
/* harmony export */   "ExcelFilterOperator": () => (/* binding */ be),
/* harmony export */   "InitializationError": () => (/* binding */ fe),
/* harmony export */   "disableLogging": () => (/* binding */ $e),
/* harmony export */   "enableLogging": () => (/* binding */ Ae),
/* harmony export */   "getExcelApplication": () => (/* binding */ xe)
/* harmony export */ });
var e,t,a,r={d:(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},o={};r.d(o,{dq:()=>s,MS:()=>n,xQ:()=>l,sO:()=>he,Zu:()=>de,I3:()=>we,$U:()=>ke,i0:()=>pe,cX:()=>i,U$:()=>d,U7:()=>w,rd:()=>le});class n extends Error{constructor(e="An unexpected error has occurred",t){var a;super(e),t&&(this.innerError=t&&t),this.stack=null===(a=this.stack)||void 0===a?void 0:a.replace(/^(\w*Error)/,`${this.constructor.name}`)}}class s extends n{constructor(e="Failed to execute adapter function",t){super(e,t)}}class l extends n{constructor(e="Failed to raise event",t){super(e,t)}}class i extends n{constructor(e="Failed to initialize adapter",t){super(e,t)}}!function(e){e.ActivateWorkbook="ActivateWorkbook",e.ActivateWorksheet="ActivateWorksheet",e.AddWorksheet="AddWorksheet",e.CalculateWorkbook="CalculateWorkbook",e.CalculateWorksheet="CalculateWorksheet",e.ClearAllCells="ClearAllCells",e.ClearAllCellValues="ClearAllCellValues",e.ClearAllCellFormatting="ClearAllCellFormatting",e.ClearCellValues="ClearCellValues",e.ClearCellFormatting="ClearCellFormatting",e.ClearCells="ClearCells",e.CloseWorkbook="CloseWorkbook",e.CreateWorkbook="CreateWorkbook",e.DeregisterEvent="DeregisterEvent",e.EventFired="EventFired",e.GetCalculationMode="GetCalculationMode",e.GetCells="GetCells",e.GetWorkbookById="GetWorkbookById",e.GetWorkbookName="GetWorkbookName",e.GetWorkbooks="GetWorkbooks",e.GetWorksheetById="GetWorksheetById",e.GetWorksheetByName="GetWorksheetByName",e.GetWorksheetName="GetWorksheetName",e.GetWorksheets="GetWorksheets",e.LogMessage="LogMessage",e.OpenWorkbook="OpenWorkbook",e.ProtectWorksheet="ProtectWorksheet",e.RegisterEvent="RegisterEvent",e.SaveWorkbook="SaveWorkbook",e.SaveWorkbookAs="SaveWorkbookAs",e.SetCellValues="SetCellValues",e.SetCellFormatting="SetCellFormatting",e.SetCellName="SetCellName",e.FilterCells="FilterCells",e.QuitApplication="QuitApplication"}(e||(e={})),function(e){e.Activate="Activate",e.AddWorksheet="AddWorksheet",e.Change="Change",e.Close="Close",e.Deactivate="Deactivate",e.DeleteWorksheet="DeleteWorksheet"}(t||(t={})),function(e){e.Workbook="Workbook",e.Worksheet="Worksheet"}(a||(a={}));let c=!1;const h="[@openfin/excel]",d=()=>{c=!1},w=()=>{c=!0,p("v1.2.1")},k=(e,t)=>{c&&(e.innerError?console.error(t?`${h} ${t}`:h,e,"\n\n(inner)",e.innerError):console.error(t?`${h} ${t}`:h,e))},p=(...e)=>{c&&console.log(h,...e)},u=(...e)=>{c&&console.warn(h,...e)};window.fin||Object.assign(window,{fin:{}}),Object.assign(window.fin,{Integrations:{Excel:{enableLogging:w,disableLogging:d}}});const g=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),C=new Map,y=(t,a)=>async()=>{p(`Worksheet: Activate (${a})`);try{await t.dispatch(e.ActivateWorksheet,a)}catch(e){throw new s}},v=(t,a)=>async()=>{p(`Worksheet: Calculate (${a})`);try{await t.dispatch(e.CalculateWorksheet,a)}catch(e){throw new s}},m=(t,a)=>async()=>{p(`Worksheet: Clear all cell values (${a})`);try{await t.dispatch(e.ClearAllCellValues,a)}catch(e){throw new s}},W=(t,a)=>async()=>{p(`Worksheet: Clear all cell formatting (${a})`);try{await t.dispatch(e.ClearAllCellFormatting,a)}catch(e){throw new s}},b=(t,a)=>async()=>{p(`Worksheet: Clear all cells (${a})`);try{await t.dispatch(e.ClearAllCells,a)}catch(e){throw new s}},f=(t,a)=>async r=>{p(`Worksheet: Clear cell values; cellRange:${r} (${a})`);const o={cellRange:r,objectId:a};try{await t.dispatch(e.ClearCellValues,o)}catch(e){throw new s}},$=(t,a)=>async r=>{p(`Worksheet: Clear cell formatting; cellRange:${r} (${a})`);const o={cellRange:r,objectId:a};try{await t.dispatch(e.ClearCellFormatting,o)}catch(e){throw new s}},A=(t,a)=>async r=>{p(`Worksheet: Clear cells; cellRange:${r} (${a})`);const o={cellRange:r,objectId:a};try{await t.dispatch(e.ClearCells,o)}catch(e){throw new s}},x=(e,t)=>(a,r,o=1e3)=>{if(Number.isNaN(o)||o<=0)throw new n("Update interval must be a positive number");const s=g();p(`Worksheet: Create data stream; streamId:${s}; cellRange:${a}; updateInterval:${o} (${t})`);const l={close:()=>{p(`Closed stream (${s})`),(e=>{var t;try{const a=C.get(e);if(!a)throw new n(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(t=a.timer)&&void 0!==t?t:void 0)&&L(e),C.delete(e)}catch(e){throw k(e),e}})(s)},cellRange:a,id:s,start:()=>{p(`Started streaming (${s})`),F(s,r,e,t)},stop:()=>{p(`Stopped streaming (${s})`),L(s)},updateInterval:o,worksheetId:t};return C.set(s,{dataStream:l}),l},G=(e,t,r,o)=>{const n={eventTarget:a.Worksheet,objectId:t};return{objectId:t,activate:y(e,t),addEventListener:r(e,n),calculate:v(e,t),clearAllCellFormatting:W(e,t),clearAllCells:b(e,t),clearAllCellValues:m(e,t),clearCellFormatting:$(e,t),clearCells:A(e,t),clearCellValues:f(e,t),createDataStream:x(e,t),filterCells:I(e,t),getCells:D(e,t),getName:S(e,t),protect:E(e,t),removeEventListener:o(e),setCellFormatting:N(e,t),setCellName:R(e,t),setCellValues:U(e,t)}},I=(t,a)=>async(r,o,n,l,i,c=!0)=>{p(`Worksheet: Filter cells; cellRange:${r} (${a})`,{columnIndex:o,filterOperator:n,criteria1:l,criteria2:i,visibleDropDown:c});const h={cellRange:r,criteria1:l,criteria2:i,columnIndex:o,filterOperator:n,objectId:a,visibleDropDown:c};try{await t.dispatch(e.FilterCells,h)}catch(e){throw new s}},D=(t,a)=>async r=>{p(`Worksheet: Get cells; cellRange:${r} (${a})`);const o={cellRange:r,objectId:a};let n=[];try{n=await t.dispatch(e.GetCells,o),p(`${r}:`,n)}catch(e){throw new s}return n},S=(t,a)=>async()=>{p(`Worksheet: Get name (${a})`);try{return await t.dispatch(e.GetWorksheetName,a)}catch(e){throw new s}},E=(t,a)=>async()=>{p(`Worksheet: Protect (${a})`);try{await t.dispatch(e.ProtectWorksheet,a)}catch(e){throw new s}},N=(t,a)=>async(r,o)=>{p(`Worksheet: Set cell formatting; cellRange:${r} (${a})`,o);const n={cellRange:r,formatting:o,objectId:a};try{await t.dispatch(e.SetCellFormatting,n)}catch(e){throw new s}},R=(t,a)=>async(r,o)=>{p(`Worksheet: Set cell name; cellRange:${r}; name:${o} (${a})`);const n={cellRange:r,name:o,objectId:a};try{await t.dispatch(e.SetCellName,n)}catch(e){throw new s}},U=(t,a)=>async(r,o)=>{p(`Worksheet: Set cell values; cellRange:${r} (${a})`,o);const n={cellRange:r,objectId:a,valuesMap:o};try{await t.dispatch(e.SetCellValues,n)}catch(e){throw new s}},F=(e,t,a,r)=>{var o;try{const s=C.get(e);if(!s)throw new n(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(o=s.timer)&&void 0!==o?o:void 0)&&L(e);const{cellRange:l,updateInterval:i}=s.dataStream,c=async()=>{const o=await t();try{await U(a,r)(l,[[o]])}catch(t){u(`Unable to update cell range for stream with id ${e}: ${null==t?void 0:t.message}`)}},h=window.setInterval(c,i);s.timer=h}catch(e){throw k(e),e}},L=e=>{var t;try{const a=C.get(e);if(!a)throw new n(`Unable to find registered data stream with id ${e}`);if(void 0===(null!==(t=a.timer)&&void 0!==t?t:void 0))return;window.clearInterval(a.timer),a.timer=void 0}catch(e){throw k(e),e}},j=new Map,B=(a,r)=>async(o,n)=>{if(!r||!r.eventTarget||!r.objectId){const e=new l("Event registration missing required values");throw k(e),e}const i=Object.keys(t).find((e=>e.toLowerCase()===o.toLowerCase()));if(!i){const e=new l(`Unsupported event name: ${o}`);throw k(e),e}r.eventName=t[i],p("Registering event",r);try{const t=await a.dispatch(e.RegisterEvent,r);j.set(t,n)}catch(e){throw new s(void 0,e)}},O=t=>async a=>{let r;for(const[e,t]of j)if(t===a){r=e;break}if(!r)throw new l;p("Deregistering event:",r);try{await t.dispatch(e.DeregisterEvent,r),j.delete(r)}catch(e){throw new s}},V=(t,a)=>async()=>{p(`Workbook: Activate (${a})`);try{return await t.dispatch(e.ActivateWorkbook,a)}catch(e){throw new s}},P=(t,a,r,o)=>async()=>{let n;p(`Workbook: Add worksheet (${a})`);try{n=await t.dispatch(e.AddWorksheet,a)}catch(e){throw new s}return G(t,n,r,o)},M=(t,a)=>async()=>{p(`Workbook: Calculate (${a})`);try{await t.dispatch(e.CalculateWorkbook,a)}catch(e){throw new s}},T=(t,a)=>async()=>{p(`Workbook: Close (${a})`);try{return await t.dispatch(e.CloseWorkbook,a)}catch(e){throw new s}},z=(e,t,r,o)=>{const n={eventTarget:a.Workbook,objectId:t};return{objectId:t,activate:V(e,t),addWorksheet:P(e,t,r,o),addEventListener:r(e,n),calculate:M(e,t),close:T(e,t),getCalculationMode:Q(e,t),getName:H(e,t),getWorksheetByName:q(e,t,r,o),getWorksheets:J(e,t,r,o),removeEventListener:o(e),save:X(e,t),saveAs:Z(e,t)}},Q=(t,a)=>async()=>{p("Workbook: Get calculation mode");try{return await t.dispatch(e.GetCalculationMode,a)}catch(e){throw new s}},H=(t,a)=>async()=>{p(`Workbook: Get name (${a})`);try{return await t.dispatch(e.GetWorkbookName,a)}catch(e){throw new s}},q=(t,a,r,o)=>async n=>{let l;p(`Workbook: Get worksheet by name: ${n} (${a})`);try{if(l=await t.dispatch(e.GetWorksheetByName,{objectId:a,worksheetName:n}),null===l)return null}catch(e){throw new s}return G(t,l,r,o)},J=(t,a,r,o)=>async()=>{let n;p(`Workbook: Get worksheets (${a})`);try{n=await t.dispatch(e.GetWorksheets,a)}catch(e){throw new s}return n.map((e=>G(t,e,r,o)))},X=(t,a)=>async()=>{p(`Workbook: Save (${a})`);try{return await t.dispatch(e.SaveWorkbook,a)}catch(e){throw new s}},Z=(t,a)=>async r=>{p(`Workbook: Save as; filePath:${r} (${a})`);try{return await t.dispatch(e.SaveWorkbookAs,{filePath:r,objectId:a})}catch(e){throw new s}},K=t=>async()=>{let a;p("Application: Create workbook");try{a=await t.dispatch(e.CreateWorkbook)}catch(e){throw new s}return z(t,a,B,O)},Y=t=>async a=>{let r;p(`Application: Get workbook; id:${a}`);try{r=await t.dispatch(e.GetWorkbookById,a)}catch(e){throw new s}return z(t,r,B,O)},_=t=>async()=>{let a;p("Application: Get workbooks");try{a=await t.dispatch(e.GetWorkbooks)}catch(e){throw new s}return a.map((e=>z(t,e,B,O)))},ee=t=>async a=>{p(`Application: Get worksheet; id:${a}`);try{a=await t.dispatch(e.GetWorksheetById,a)}catch(e){throw new s}return G(t,a,B,O)},te=t=>async a=>{let r;p(`Application: Open workbook; filePath:${a}`);try{r=await t.dispatch(e.OpenWorkbook,a)}catch(e){throw new s}return z(t,r,B,O)},ae=t=>async(a=!0)=>{p(`Application: Quit; displayAlerts:${a}`);try{return await t.dispatch(e.QuitApplication,a)}catch(e){throw new s}};var re;!function(e){e[e.Info=1]="Info",e[e.Warn=2]="Warn",e[e.Error=3]="Error"}(re||(re={}));const oe=g();let ne,se;const le=async()=>{try{if(!ne||!await(async e=>(await fin.InterApplicationBus.Channel.getAllChannels()).some((t=>t.channelName===e)))(oe)){await(async()=>{var e;const t=null===(e=(await fin.Application.getCurrentSync().getManifest()).appAssets)||void 0===e?void 0:e.find((e=>"excel-adapter"===e.alias));if(t)return void u("Detected adapter package in app manifest appAssets",t);if(await ce())return void p("Using existing adapter package");const a={alias:"excel-adapter",src:"https://cdn.openfin.co/release/integrations/excel/1.2.1/OpenFin.Excel.zip",target:"OpenFin.Excel.exe",version:"1.2.1"};p("Downloading adapter package",a);try{await fin.System.downloadAsset(a,(()=>{}))}catch(e){throw k("Unable to download adapter package"),e}})();const e=await fin.System.getRuntimeInfo(),t=fin.Application.me.uuid,a=e.version,r=e.securityRealm;p("Initializing adapter",{appId:t,channelName:oe,runtimeVersion:a,securityRealm:r}),ne=await fin.System.launchExternalProcess({alias:"excel-adapter",arguments:`${t} ${a} ${r} ${oe}`}),p(`Adapter running with uuid ${ne.uuid}`)}const o=fin.InterApplicationBus.Channel.connect(oe,{payload:{version:"1.2.1"}}),n=new Promise((e=>{setTimeout(e,2e4)})).then((()=>{throw new Error("Connection to adapter timed out")}));se=await Promise.race([o,n]),p(`Connected to adapter on channel ${oe}`),se.register(e.LogMessage,ie),se.register(e.EventFired,(r=se,e=>{const o=j.get(e.eventRegistrationId);if(!o)throw new l(`No registered event listener found for id: ${e.eventRegistrationId}`);p("Event payload received",e),((e,r,o)=>{var n,s;switch(o.eventTarget){case a.Workbook:switch(null===(n=o.eventName)||void 0===n?void 0:n.toUpperCase()){case t.Activate.toUpperCase():case t.Close.toUpperCase():case t.Deactivate.toUpperCase():return e();case t.AddWorksheet.toUpperCase():case t.DeleteWorksheet.toUpperCase():return e(G(r,o.worksheetObjectId,B,O));default:throw new l(`Unexpected workbook event: ${o.eventName}`)}case a.Worksheet:switch(null===(s=o.eventName)||void 0===s?void 0:s.toUpperCase()){case t.Activate.toUpperCase():return e();case t.Change.toUpperCase():return e(o.changedCells);case t.Deactivate.toUpperCase():return e();default:throw new l(`Unexpected worksheet event: ${o.eventName}`)}default:throw new l(`Unexpected event target: ${o.eventTarget}`)}})(o,r,e)}))}catch(e){const t=new i(void 0,e);throw k(t),t}var r;return{adapter:{channelName:oe,version:"1.2.1"},createWorkbook:K(se),getWorkbookById:Y(se),getWorkbooks:_(se),getWorksheetById:ee(se),openWorkbook:te(se),quit:ae(se)}},ie=e=>{const{message:t,type:a}=e,r="[adapter]";switch(a){case re.Error:k(t,r);break;case re.Info:p(r,t);break;case re.Warn:u(r,t)}},ce=async()=>{try{const e=await fin.System.getAppAssetInfo({alias:"excel-adapter"});return e&&"1.2.1"===e.version}catch(e){return!1}};var he,de,we,ke,pe;!function(e){e.Continuous="Continuous",e.Dash="Dash",e.DashDot="DashDot",e.DashDotDot="DashDotDot",e.Dot="Dot",e.Double="Double",e.SlantDashDot="SlantDashDot",e.None="None"}(he||(he={})),function(e){e.Center="Center",e.CenterAcrossSelection="CenterAcrossSelection",e.Distributed="Distributed",e.Fill="Fill",e.General="General",e.Justify="Justify",e.Left="Left",e.Right="Right"}(de||(de={})),function(e){e.Automatic="Automatic",e.Checker="Checker",e.CrissCross="CrissCross",e.Down="Down",e.Gray16="Gray16",e.Gray25="Gray25",e.Gray50="Gray50",e.Gray75="Gray75",e.Gray8="Gray8",e.Grid="Grid",e.Horizontal="Horizontal",e.LightDown="LightDown",e.LightHorizontal="LightHorizontal",e.LightUp="LightUp",e.LightVertical="LightVertical",e.LinearGradient="LinearGradient",e.None="None",e.RectangularGradient="RectangularGradient",e.SemiGray75="SemiGray75",e.Solid="Solid",e.Up="Up",e.Vertical="Vertical"}(we||(we={})),function(e){e.Bottom="Bottom",e.Center="Center",e.Distributed="Distributed",e.Justify="Justify",e.Top="Top"}(ke||(ke={})),function(e){e.And="And",e.Or="Or",e.Top10Items="Top10Items",e.Bottom10Items="Bottom10Items",e.Top10Percent="Top10Percent",e.Bottom10Percent="Bottom10Percent",e.FilterValues="FilterValues"}(pe||(pe={}));var ue=o.dq,ge=o.MS,Ce=o.xQ,ye=o.sO,ve=o.Zu,me=o.I3,We=o.$U,be=o.i0,fe=o.cX,$e=o.U$,Ae=o.U7,xe=o.rd;

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
/* harmony import */ var _openfin_excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/excel */ "./node_modules/@openfin/excel/openfin.excel.js");
/* harmony import */ var _finos_fdc3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @finos/fdc3 */ "./node_modules/@finos/fdc3/dist/fdc3.esm.js");


const knownInstruments = ["TSLA", "MSFT", "AAPL"];
let excel;
let openWorkbooks;
let selectedWorkbookIndex;
let openWorksheets;
let selectedWorksheetIndex;
document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    }
    catch (error) {
        console.error(error);
    }
});
async function init() {
    try {
        excel = await (0,_openfin_excel__WEBPACK_IMPORTED_MODULE_0__.getExcelApplication)();
        await populateWorkbooks();
        const refreshWorkbookButton = document.getElementById("workbook-refresh");
        refreshWorkbookButton.addEventListener("click", () => populateWorkbooks());
        const refreshWorksheetButton = document.getElementById("worksheet-refresh");
        refreshWorksheetButton.addEventListener("click", () => populateWorksheets());
        const openWorkbooksSelect = document.getElementById("workbooks");
        openWorkbooksSelect.addEventListener("change", async (e) => await selectWorkbook(e.target.value));
        const openWorksheetsSelect = document.getElementById("worksheets");
        openWorksheetsSelect.addEventListener("change", async (e) => await selectWorksheet(e.target.value));
    }
    catch (err) {
        showError(err);
    }
}
function showError(err) {
    const errDom = document.getElementById("error");
    errDom.innerHTML = err.message;
}
async function populateWorkbooks() {
    if (excel) {
        selectedWorkbookIndex = undefined;
        const refreshButton = document.getElementById("workbook-refresh");
        refreshButton.disabled = true;
        const select = document.getElementById("workbooks");
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
            const option = document.createElement("option");
            option.innerHTML = "----Select workbook----";
            option.value = "";
            option.selected = true;
            option.disabled = true;
            select.appendChild(option);
            for (const openWorkbook of openWorkbooks) {
                const option = document.createElement("option");
                option.innerHTML = openWorkbook.name;
                option.value = openWorkbook.name;
                select.appendChild(option);
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
    const newWorkbookIndex = openWorkbooks.findIndex(w => w.name === name);
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
        const refreshButton = document.getElementById("worksheet-refresh");
        refreshButton.disabled = true;
        const cellContainer = document.getElementById("cell-container");
        cellContainer.style.display = "none";
        const select = document.getElementById("worksheets");
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
                const option = document.createElement("option");
                option.innerHTML = "----Select worksheet----";
                option.value = "";
                option.selected = true;
                option.disabled = true;
                select.appendChild(option);
                for (const openWorksheet of openWorksheets) {
                    const option = document.createElement("option");
                    option.innerHTML = openWorksheet.name;
                    option.value = openWorksheet.name;
                    select.appendChild(option);
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
    const newWorksheetIndex = openWorksheets.findIndex(w => w.name === name);
    if (newWorksheetIndex !== selectedWorksheetIndex) {
        const oldWorksheet = openWorksheets[selectedWorksheetIndex];
        if (oldWorksheet) {
            await oldWorksheet.sheet.removeEventListener(handleCellChange);
        }
        selectedWorksheetIndex = newWorksheetIndex;
        if (selectedWorksheetIndex >= 0) {
            await openWorksheets[selectedWorksheetIndex].sheet.activate();
            await openWorksheets[selectedWorksheetIndex].sheet.addEventListener("change", handleCellChange);
            document.getElementById("cell-container").style.display = "block";
        }
    }
}
async function handleCellChange(cells) {
    const cellContainer = document.getElementById("cell-changes-container");
    cellContainer.innerHTML = JSON.stringify(cells);
    for (const cell of cells) {
        if (knownInstruments.includes(cell.value)) {
            await broadcastInstrument(cell.value);
        }
    }
}
async function broadcastInstrument(instrument) {
    const broadcastContainer = document.getElementById("broadcast-container");
    broadcastContainer.style.display = "block";
    const broadcastElement = document.getElementById("broadcast-instrument");
    if (window.fdc3) {
        try {
            const fdcInstrument = {
                type: "fdc3.instrument",
                id: {
                    ticker: instrument
                }
            };
            const channel = await (0,_finos_fdc3__WEBPACK_IMPORTED_MODULE_1__.getCurrentChannel)();
            channel.broadcast(fdcInstrument);
            broadcastElement.innerText = instrument;
        }
        catch (err) {
            broadcastElement.innerText = err.message;
        }
    }
    else {
        broadcastElement.innerText = "No FD3 Channel available";
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQjs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0VBQXNFLGFBQWE7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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LEdBQUcsTUFBTSw4REFBaUIsRUFBRSxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFakMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUMzQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDNUM7S0FDSjtTQUFNO1FBQ0gsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO0tBQzNEO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4vbm9kZV9tb2R1bGVzL0BmaW5vcy9mZGMzL2Rpc3QvZmRjMy5lc20uanMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvLi9ub2RlX21vZHVsZXMvQG9wZW5maW4vZXhjZWwvb3BlbmZpbi5leGNlbC5qcyIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50ZWdyYXRpb24tZXhjZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRlZ3JhdGlvbi1leGNlbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4vY2xpZW50L3NyYy9leGNlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcclxuICogQ29weXJpZ2h0IDIwMTkgRklOT1MgRkRDMyBjb250cmlidXRvcnMgLSBzZWUgTk9USUNFIGZpbGVcclxuICovXG52YXIgT3BlbkVycm9yO1xuXG4oZnVuY3Rpb24gKE9wZW5FcnJvcikge1xuICBPcGVuRXJyb3JbXCJBcHBOb3RGb3VuZFwiXSA9IFwiQXBwTm90Rm91bmRcIjtcbiAgT3BlbkVycm9yW1wiRXJyb3JPbkxhdW5jaFwiXSA9IFwiRXJyb3JPbkxhdW5jaFwiO1xuICBPcGVuRXJyb3JbXCJBcHBUaW1lb3V0XCJdID0gXCJBcHBUaW1lb3V0XCI7XG4gIE9wZW5FcnJvcltcIlJlc29sdmVyVW5hdmFpbGFibGVcIl0gPSBcIlJlc29sdmVyVW5hdmFpbGFibGVcIjtcbn0pKE9wZW5FcnJvciB8fCAoT3BlbkVycm9yID0ge30pKTtcblxudmFyIFJlc29sdmVFcnJvcjtcblxuKGZ1bmN0aW9uIChSZXNvbHZlRXJyb3IpIHtcbiAgUmVzb2x2ZUVycm9yW1wiTm9BcHBzRm91bmRcIl0gPSBcIk5vQXBwc0ZvdW5kXCI7XG4gIFJlc29sdmVFcnJvcltcIlJlc29sdmVyVW5hdmFpbGFibGVcIl0gPSBcIlJlc29sdmVyVW5hdmFpbGFibGVcIjtcbiAgUmVzb2x2ZUVycm9yW1wiUmVzb2x2ZXJUaW1lb3V0XCJdID0gXCJSZXNvbHZlclRpbWVvdXRcIjtcbn0pKFJlc29sdmVFcnJvciB8fCAoUmVzb2x2ZUVycm9yID0ge30pKTtcblxudmFyIENoYW5uZWxFcnJvcjtcblxuKGZ1bmN0aW9uIChDaGFubmVsRXJyb3IpIHtcbiAgQ2hhbm5lbEVycm9yW1wiTm9DaGFubmVsRm91bmRcIl0gPSBcIk5vQ2hhbm5lbEZvdW5kXCI7XG4gIENoYW5uZWxFcnJvcltcIkFjY2Vzc0RlbmllZFwiXSA9IFwiQWNjZXNzRGVuaWVkXCI7XG4gIENoYW5uZWxFcnJvcltcIkNyZWF0aW9uRmFpbGVkXCJdID0gXCJDcmVhdGlvbkZhaWxlZFwiO1xufSkoQ2hhbm5lbEVycm9yIHx8IChDaGFubmVsRXJyb3IgPSB7fSkpO1xuXG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBydW50aW1lXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkJDE7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkJDEpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCQxO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkJDEsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkJDE7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQkMTtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZCQxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkJDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkJDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgIG1vZHVsZS5leHBvcnRzIFxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxufSk7XG5cbnZhciBERUZBVUxUX1RJTUVPVVQgPSA1MDAwO1xudmFyIFVuYXZhaWxhYmxlRXJyb3IgPSAvKiNfX1BVUkVfXyovbmV3IEVycm9yKCdGREMzIERlc2t0b3BBZ2VudCBub3QgYXZhaWxhYmxlIGF0IGB3aW5kb3cuZmRjM2AuJyk7XG52YXIgVGltZW91dEVycm9yID0gLyojX19QVVJFX18qL25ldyBFcnJvcignVGltZWQgb3V0IHdhaXRpbmcgZm9yIGBmZGMzUmVhZHlgIGV2ZW50LicpO1xudmFyIFVuZXhwZWN0ZWRFcnJvciA9IC8qI19fUFVSRV9fKi9uZXcgRXJyb3IoJ2BmZGMzUmVhZHlgIGV2ZW50IGZpcmVkLCBidXQgYHdpbmRvdy5mZGMzYCBub3Qgc2V0IHRvIERlc2t0b3BBZ2VudC4nKTtcblxuZnVuY3Rpb24gcmVqZWN0SWZOb0dsb2JhbChmKSB7XG4gIHJldHVybiB3aW5kb3cuZmRjMyA/IGYoKSA6IFByb21pc2UucmVqZWN0KFVuYXZhaWxhYmxlRXJyb3IpO1xufVxuXG5mdW5jdGlvbiB0aHJvd0lmTm9HbG9iYWwoZikge1xuICBpZiAoIXdpbmRvdy5mZGMzKSB7XG4gICAgdGhyb3cgVW5hdmFpbGFibGVFcnJvcjtcbiAgfVxuXG4gIHJldHVybiBmKCk7XG59XG5cbnZhciBmZGMzUmVhZHkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3J1bnRpbWVfMS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUod2FpdEZvck1zKSB7XG4gICAgcmV0dXJuIHJ1bnRpbWVfMS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgaWYgKHdhaXRGb3JNcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHdhaXRGb3JNcyA9IERFRkFVTFRfVElNRU9VVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBnbG9iYWwgaXMgYWxyZWFkeSBhdmFpbGFibGUgcmVzb2x2ZSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICBpZiAod2luZG93LmZkYzMpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXRzIG5vdCBhdmFpbGFibGUgc2V0dXAgYSB0aW1lb3V0IHRvIHJldHVybiBhIHJlamVjdGVkIHByb21pc2VcbiAgICAgICAgICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzID8gcmVzb2x2ZSgpIDogcmVqZWN0KFRpbWVvdXRFcnJvcik7XG4gICAgICAgICAgICAgICAgfSwgd2FpdEZvck1zKTsgLy8gbGlzdGVuIGZvciB0aGUgZmRjM1JlYWR5IGV2ZW50XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZmRjM1JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmZkYzMgPyByZXNvbHZlKCkgOiByZWplY3QoVW5leHBlY3RlZEVycm9yKTtcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gZmRjM1JlYWR5KF94KSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcbmZ1bmN0aW9uIG9wZW4oYXBwLCBjb250ZXh0KSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMub3BlbihhcHAsIGNvbnRleHQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZpbmRJbnRlbnQoaW50ZW50LCBjb250ZXh0KSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZmluZEludGVudChpbnRlbnQsIGNvbnRleHQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZpbmRJbnRlbnRzQnlDb250ZXh0KGNvbnRleHQpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5maW5kSW50ZW50c0J5Q29udGV4dChjb250ZXh0KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBicm9hZGNhc3QoY29udGV4dCkge1xuICB0aHJvd0lmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5icm9hZGNhc3QoY29udGV4dCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmFpc2VJbnRlbnQoaW50ZW50LCBjb250ZXh0LCBhcHApIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5yYWlzZUludGVudChpbnRlbnQsIGNvbnRleHQsIGFwcCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcmFpc2VJbnRlbnRGb3JDb250ZXh0KGNvbnRleHQsIGFwcCkge1xuICByZXR1cm4gcmVqZWN0SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5mZGMzLnJhaXNlSW50ZW50Rm9yQ29udGV4dChjb250ZXh0LCBhcHApO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGFkZEludGVudExpc3RlbmVyKGludGVudCwgaGFuZGxlcikge1xuICByZXR1cm4gdGhyb3dJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuYWRkSW50ZW50TGlzdGVuZXIoaW50ZW50LCBoYW5kbGVyKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRDb250ZXh0TGlzdGVuZXIoY29udGV4dFR5cGVPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgaWYgKHR5cGVvZiBjb250ZXh0VHlwZU9ySGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0aHJvd0lmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5mZGMzLmFkZENvbnRleHRMaXN0ZW5lcihjb250ZXh0VHlwZU9ySGFuZGxlciwgaGFuZGxlcik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRocm93SWZOb0dsb2JhbChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gd2luZG93LmZkYzMuYWRkQ29udGV4dExpc3RlbmVyKGNvbnRleHRUeXBlT3JIYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0U3lzdGVtQ2hhbm5lbHMoKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMuZ2V0U3lzdGVtQ2hhbm5lbHMoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBqb2luQ2hhbm5lbChjaGFubmVsSWQpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5qb2luQ2hhbm5lbChjaGFubmVsSWQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlQ2hhbm5lbChjaGFubmVsSWQpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRPckNyZWF0ZUNoYW5uZWwoY2hhbm5lbElkKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50Q2hhbm5lbCgpIHtcbiAgcmV0dXJuIHJlamVjdElmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRDdXJyZW50Q2hhbm5lbCgpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGxlYXZlQ3VycmVudENoYW5uZWwoKSB7XG4gIHJldHVybiByZWplY3RJZk5vR2xvYmFsKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gd2luZG93LmZkYzMubGVhdmVDdXJyZW50Q2hhbm5lbCgpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldEluZm8oKSB7XG4gIHJldHVybiB0aHJvd0lmTm9HbG9iYWwoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB3aW5kb3cuZmRjMy5nZXRJbmZvKCk7XG4gIH0pO1xufVxuLyoqXHJcbiAqIENvbXBhcmUgbnVtZXJpYyBzZW12ZXIgdmVyc2lvbiBudW1iZXIgc3RyaW5ncyAoaW4gdGhlIGZvcm0gYDEuMi4zYCkuXHJcbiAqXHJcbiAqIFJldHVybnMgYC0xYCBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSBsb3dlciB2ZXJzaW9uIG51bWJlciB0aGFuIHRoZSBzZWNvbmQsXHJcbiAqIGAxYCBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmQsIDAgaWYgdGhlIGFyZ3VtZW50cyBhcmVcclxuICogZXF1YWwgYW5kIGBudWxsYCBpZiBhbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIGNvbXBhcmlzb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBhXHJcbiAqIEBwYXJhbSBiXHJcbiAqL1xuXG52YXIgY29tcGFyZVZlcnNpb25OdW1iZXJzID0gZnVuY3Rpb24gY29tcGFyZVZlcnNpb25OdW1iZXJzKGEsIGIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYVZlckFyciA9IGEuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTtcbiAgICB2YXIgYlZlckFyciA9IGIuc3BsaXQoJy4nKS5tYXAoTnVtYmVyKTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBNYXRoLm1heChhVmVyQXJyLmxlbmd0aCwgYlZlckFyci5sZW5ndGgpOyBpbmRleCsrKSB7XG4gICAgICAvKiBJZiBvbmUgdmVyc2lvbiBudW1iZXIgaGFzIG1vcmUgZGlnaXRzIGFuZCB0aGUgb3RoZXIgZG9lcyBub3QsIGFuZCB0aGV5IGFyZSBvdGhlcndpc2UgZXF1YWwsXHJcbiAgICAgICAgIGFzc3VtZSB0aGUgbG9uZ2VyIGlzIGdyZWF0ZXIuIEUuZy4gMS4xLjEgPiAxLjEgKi9cbiAgICAgIGlmIChpbmRleCA9PT0gYVZlckFyci5sZW5ndGggfHwgYVZlckFycltpbmRleF0gPCBiVmVyQXJyW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBiVmVyQXJyLmxlbmd0aCB8fCBhVmVyQXJyW2luZGV4XSA+IGJWZXJBcnJbaW5kZXhdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNvbXBhcmUgdmVyc2lvbiBzdHJpbmdzJywgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4vKipcclxuICogQ2hlY2sgaWYgdGhlIEZEQzMgdmVyc2lvbiBpbiBhbiBJbXBsZW1lbnRhdGlvbk1ldGFkYXRhIG9iamVjdCBpcyBncmVhdGVyIHRoYW5cclxuICogb3IgZXF1YWwgdG8gdGhlIHN1cHBsaWVkIG51bWVyaWMgc2VtdmVyIHZlcnNpb24gbnVtYmVyIHN0cmluZyAoaW4gdGhlIGZvcm0gYDEuMi4zYCkuXHJcbiAqXHJcbiAqIFJldHVybnMgYSBib29sZWFuIG9yIG51bGwgaWYgYW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY29tcGFyaW5nIHRoZSB2ZXJzaW9uIG51bWJlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXRhZGF0YVxyXG4gKiBAcGFyYW0gdmVyc2lvblxyXG4gKi9cblxudmFyIHZlcnNpb25Jc0F0TGVhc3QgPSBmdW5jdGlvbiB2ZXJzaW9uSXNBdExlYXN0KG1ldGFkYXRhLCB2ZXJzaW9uKSB7XG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZVZlcnNpb25OdW1iZXJzKG1ldGFkYXRhLmZkYzNWZXJzaW9uLCB2ZXJzaW9uKTtcbiAgcmV0dXJuIGNvbXBhcmlzb24gPT09IG51bGwgPyBudWxsIDogY29tcGFyaXNvbiA+PSAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxudmFyIENvbnRleHRUeXBlcztcblxuKGZ1bmN0aW9uIChDb250ZXh0VHlwZXMpIHtcbiAgQ29udGV4dFR5cGVzW1wiQ29udGFjdFwiXSA9IFwiZmRjMy5jb250YWN0XCI7XG4gIENvbnRleHRUeXBlc1tcIkNvbnRhY3RMaXN0XCJdID0gXCJmZGMzLmNvbnRhY3RMaXN0XCI7XG4gIENvbnRleHRUeXBlc1tcIkNvdW50cnlcIl0gPSBcImZkYzMuY291bnRyeVwiO1xuICBDb250ZXh0VHlwZXNbXCJJbnN0cnVtZW50XCJdID0gXCJmZGMzLmluc3RydW1lbnRcIjtcbiAgQ29udGV4dFR5cGVzW1wiT3JnYW5pemF0aW9uXCJdID0gXCJmZGMzLm9yZ2FuaXphdGlvblwiO1xuICBDb250ZXh0VHlwZXNbXCJQb3J0Zm9saW9cIl0gPSBcImZkYzMucG9ydGZvbGlvXCI7XG4gIENvbnRleHRUeXBlc1tcIlBvc2l0aW9uXCJdID0gXCJmZGMzLnBvc2l0aW9uXCI7XG59KShDb250ZXh0VHlwZXMgfHwgKENvbnRleHRUeXBlcyA9IHt9KSk7XG5cbi8vIFRvIHBhcnNlIHRoaXMgZGF0YTpcbi8vXG4vLyAgIGltcG9ydCB7IENvbnZlcnQsIENvbnRleHQsIENvbnRhY3QsIENvbnRhY3RMaXN0LCBJbnN0cnVtZW50LCBJbnN0cnVtZW50TGlzdCwgQ291bnRyeSwgT3JnYW5pemF0aW9uLCBQb3J0Zm9saW8sIFBvc2l0aW9uIH0gZnJvbSBcIi4vZmlsZVwiO1xuLy9cbi8vICAgY29uc3QgY29udGV4dCA9IENvbnZlcnQudG9Db250ZXh0KGpzb24pO1xuLy8gICBjb25zdCBjb250YWN0ID0gQ29udmVydC50b0NvbnRhY3QoanNvbik7XG4vLyAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gQ29udmVydC50b0NvbnRhY3RMaXN0KGpzb24pO1xuLy8gICBjb25zdCBpbnN0cnVtZW50ID0gQ29udmVydC50b0luc3RydW1lbnQoanNvbik7XG4vLyAgIGNvbnN0IGluc3RydW1lbnRMaXN0ID0gQ29udmVydC50b0luc3RydW1lbnRMaXN0KGpzb24pO1xuLy8gICBjb25zdCBjb3VudHJ5ID0gQ29udmVydC50b0NvdW50cnkoanNvbik7XG4vLyAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IENvbnZlcnQudG9Pcmdhbml6YXRpb24oanNvbik7XG4vLyAgIGNvbnN0IHBvcnRmb2xpbyA9IENvbnZlcnQudG9Qb3J0Zm9saW8oanNvbik7XG4vLyAgIGNvbnN0IHBvc2l0aW9uID0gQ29udmVydC50b1Bvc2l0aW9uKGpzb24pO1xuLy9cbi8vIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBKU09OIGRvZXNuJ3Rcbi8vIG1hdGNoIHRoZSBleHBlY3RlZCBpbnRlcmZhY2UsIGV2ZW4gaWYgdGhlIEpTT04gaXMgdmFsaWQuXG4vLyBDb252ZXJ0cyBKU09OIHN0cmluZ3MgdG8vZnJvbSB5b3VyIHR5cGVzXG4vLyBhbmQgYXNzZXJ0cyB0aGUgcmVzdWx0cyBvZiBKU09OLnBhcnNlIGF0IHJ1bnRpbWVcbnZhciBDb252ZXJ0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29udmVydCgpIHt9XG5cbiAgQ29udmVydC50b0NvbnRleHQgPSBmdW5jdGlvbiB0b0NvbnRleHQoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0NvbnRleHQnKSk7XG4gIH07XG5cbiAgQ29udmVydC5jb250ZXh0VG9Kc29uID0gZnVuY3Rpb24gY29udGV4dFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0NvbnRleHQnKSksIG51bGwsIDIpO1xuICB9O1xuXG4gIENvbnZlcnQudG9Db250YWN0ID0gZnVuY3Rpb24gdG9Db250YWN0KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDb250YWN0JykpO1xuICB9O1xuXG4gIENvbnZlcnQuY29udGFjdFRvSnNvbiA9IGZ1bmN0aW9uIGNvbnRhY3RUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDb250YWN0JykpLCBudWxsLCAyKTtcbiAgfTtcblxuICBDb252ZXJ0LnRvQ29udGFjdExpc3QgPSBmdW5jdGlvbiB0b0NvbnRhY3RMaXN0KGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdDb250YWN0TGlzdCcpKTtcbiAgfTtcblxuICBDb252ZXJ0LmNvbnRhY3RMaXN0VG9Kc29uID0gZnVuY3Rpb24gY29udGFjdExpc3RUb0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdDb250YWN0TGlzdCcpKSwgbnVsbCwgMik7XG4gIH07XG5cbiAgQ29udmVydC50b0luc3RydW1lbnQgPSBmdW5jdGlvbiB0b0luc3RydW1lbnQoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0luc3RydW1lbnQnKSk7XG4gIH07XG5cbiAgQ29udmVydC5pbnN0cnVtZW50VG9Kc29uID0gZnVuY3Rpb24gaW5zdHJ1bWVudFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0luc3RydW1lbnQnKSksIG51bGwsIDIpO1xuICB9O1xuXG4gIENvbnZlcnQudG9JbnN0cnVtZW50TGlzdCA9IGZ1bmN0aW9uIHRvSW5zdHJ1bWVudExpc3QoanNvbikge1xuICAgIHJldHVybiBjYXN0KEpTT04ucGFyc2UoanNvbiksIHIoJ0luc3RydW1lbnRMaXN0JykpO1xuICB9O1xuXG4gIENvbnZlcnQuaW5zdHJ1bWVudExpc3RUb0pzb24gPSBmdW5jdGlvbiBpbnN0cnVtZW50TGlzdFRvSnNvbih2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh1bmNhc3QodmFsdWUsIHIoJ0luc3RydW1lbnRMaXN0JykpLCBudWxsLCAyKTtcbiAgfTtcblxuICBDb252ZXJ0LnRvQ291bnRyeSA9IGZ1bmN0aW9uIHRvQ291bnRyeShqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignQ291bnRyeScpKTtcbiAgfTtcblxuICBDb252ZXJ0LmNvdW50cnlUb0pzb24gPSBmdW5jdGlvbiBjb3VudHJ5VG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignQ291bnRyeScpKSwgbnVsbCwgMik7XG4gIH07XG5cbiAgQ29udmVydC50b09yZ2FuaXphdGlvbiA9IGZ1bmN0aW9uIHRvT3JnYW5pemF0aW9uKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdPcmdhbml6YXRpb24nKSk7XG4gIH07XG5cbiAgQ29udmVydC5vcmdhbml6YXRpb25Ub0pzb24gPSBmdW5jdGlvbiBvcmdhbml6YXRpb25Ub0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdPcmdhbml6YXRpb24nKSksIG51bGwsIDIpO1xuICB9O1xuXG4gIENvbnZlcnQudG9Qb3J0Zm9saW8gPSBmdW5jdGlvbiB0b1BvcnRmb2xpbyhqc29uKSB7XG4gICAgcmV0dXJuIGNhc3QoSlNPTi5wYXJzZShqc29uKSwgcignUG9ydGZvbGlvJykpO1xuICB9O1xuXG4gIENvbnZlcnQucG9ydGZvbGlvVG9Kc29uID0gZnVuY3Rpb24gcG9ydGZvbGlvVG9Kc29uKHZhbHVlKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHVuY2FzdCh2YWx1ZSwgcignUG9ydGZvbGlvJykpLCBudWxsLCAyKTtcbiAgfTtcblxuICBDb252ZXJ0LnRvUG9zaXRpb24gPSBmdW5jdGlvbiB0b1Bvc2l0aW9uKGpzb24pIHtcbiAgICByZXR1cm4gY2FzdChKU09OLnBhcnNlKGpzb24pLCByKCdQb3NpdGlvbicpKTtcbiAgfTtcblxuICBDb252ZXJ0LnBvc2l0aW9uVG9Kc29uID0gZnVuY3Rpb24gcG9zaXRpb25Ub0pzb24odmFsdWUpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodW5jYXN0KHZhbHVlLCByKCdQb3NpdGlvbicpKSwgbnVsbCwgMik7XG4gIH07XG5cbiAgcmV0dXJuIENvbnZlcnQ7XG59KCk7XG5cbmZ1bmN0aW9uIGludmFsaWRWYWx1ZSh0eXAsIHZhbCwga2V5KSB7XG4gIGlmIChrZXkgPT09IHZvaWQgMCkge1xuICAgIGtleSA9ICcnO1xuICB9XG5cbiAgaWYgKGtleSkge1xuICAgIHRocm93IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIi4gRXhwZWN0ZWQgdHlwZSBcIiArIEpTT04uc3RyaW5naWZ5KHR5cCkgKyBcIiBidXQgZ290IFwiICsgSlNPTi5zdHJpbmdpZnkodmFsKSk7XG4gIH1cblxuICB0aHJvdyBFcnJvcihcIkludmFsaWQgdmFsdWUgXCIgKyBKU09OLnN0cmluZ2lmeSh2YWwpICsgXCIgZm9yIHR5cGUgXCIgKyBKU09OLnN0cmluZ2lmeSh0eXApKTtcbn1cblxuZnVuY3Rpb24ganNvblRvSlNQcm9wcyh0eXApIHtcbiAgaWYgKHR5cC5qc29uVG9KUyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIHR5cC5wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gbWFwW3AuanNvbl0gPSB7XG4gICAgICAgIGtleTogcC5qcyxcbiAgICAgICAgdHlwOiBwLnR5cFxuICAgICAgfTtcbiAgICB9KTtcbiAgICB0eXAuanNvblRvSlMgPSBtYXA7XG4gIH1cblxuICByZXR1cm4gdHlwLmpzb25Ub0pTO1xufVxuXG5mdW5jdGlvbiBqc1RvSlNPTlByb3BzKHR5cCkge1xuICBpZiAodHlwLmpzVG9KU09OID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgdHlwLnByb3BzLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBtYXBbcC5qc10gPSB7XG4gICAgICAgIGtleTogcC5qc29uLFxuICAgICAgICB0eXA6IHAudHlwXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHR5cC5qc1RvSlNPTiA9IG1hcDtcbiAgfVxuXG4gIHJldHVybiB0eXAuanNUb0pTT047XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSh2YWwsIHR5cCwgZ2V0UHJvcHMsIGtleSkge1xuICBpZiAoa2V5ID09PSB2b2lkIDApIHtcbiAgICBrZXkgPSAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybVByaW1pdGl2ZSh0eXAsIHZhbCkge1xuICAgIGlmICh0eXBlb2YgdHlwID09PSB0eXBlb2YgdmFsKSByZXR1cm4gdmFsO1xuICAgIHJldHVybiBpbnZhbGlkVmFsdWUodHlwLCB2YWwsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Vbmlvbih0eXBzLCB2YWwpIHtcbiAgICAvLyB2YWwgbXVzdCB2YWxpZGF0ZSBhZ2FpbnN0IG9uZSB0eXAgaW4gdHlwc1xuICAgIHZhciBsID0gdHlwcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIF90eXAgPSB0eXBzW2ldO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHJhbnNmb3JtKHZhbCwgX3R5cCwgZ2V0UHJvcHMpO1xuICAgICAgfSBjYXRjaCAoXykge31cbiAgICB9XG5cbiAgICByZXR1cm4gaW52YWxpZFZhbHVlKHR5cHMsIHZhbCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1FbnVtKGNhc2VzLCB2YWwpIHtcbiAgICBpZiAoY2FzZXMuaW5kZXhPZih2YWwpICE9PSAtMSkgcmV0dXJuIHZhbDtcbiAgICByZXR1cm4gaW52YWxpZFZhbHVlKGNhc2VzLCB2YWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtQXJyYXkodHlwLCB2YWwpIHtcbiAgICAvLyB2YWwgbXVzdCBiZSBhbiBhcnJheSB3aXRoIG5vIGludmFsaWQgZWxlbWVudHNcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIGludmFsaWRWYWx1ZSgnYXJyYXknLCB2YWwpO1xuICAgIHJldHVybiB2YWwubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShlbCwgdHlwLCBnZXRQcm9wcyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRlKHZhbCkge1xuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBkID0gbmV3IERhdGUodmFsKTtcblxuICAgIGlmIChpc05hTihkLnZhbHVlT2YoKSkpIHtcbiAgICAgIHJldHVybiBpbnZhbGlkVmFsdWUoJ0RhdGUnLCB2YWwpO1xuICAgIH1cblxuICAgIHJldHVybiBkO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtT2JqZWN0KHByb3BzLCBhZGRpdGlvbmFsLCB2YWwpIHtcbiAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuIGludmFsaWRWYWx1ZSgnb2JqZWN0JywgdmFsKTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHByb3AgPSBwcm9wc1trZXldO1xuICAgICAgdmFyIHYgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsLCBrZXkpID8gdmFsW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgICByZXN1bHRbcHJvcC5rZXldID0gdHJhbnNmb3JtKHYsIHByb3AudHlwLCBnZXRQcm9wcywgcHJvcC5rZXkpO1xuICAgIH0pO1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRyYW5zZm9ybSh2YWxba2V5XSwgYWRkaXRpb25hbCwgZ2V0UHJvcHMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmICh0eXAgPT09ICdhbnknKSByZXR1cm4gdmFsO1xuXG4gIGlmICh0eXAgPT09IG51bGwpIHtcbiAgICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gdmFsO1xuICAgIHJldHVybiBpbnZhbGlkVmFsdWUodHlwLCB2YWwpO1xuICB9XG5cbiAgaWYgKHR5cCA9PT0gZmFsc2UpIHJldHVybiBpbnZhbGlkVmFsdWUodHlwLCB2YWwpO1xuXG4gIHdoaWxlICh0eXBlb2YgdHlwID09PSAnb2JqZWN0JyAmJiB0eXAucmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICB0eXAgPSB0eXBlTWFwW3R5cC5yZWZdO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwKSkgcmV0dXJuIHRyYW5zZm9ybUVudW0odHlwLCB2YWwpO1xuXG4gIGlmICh0eXBlb2YgdHlwID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB0eXAuaGFzT3duUHJvcGVydHkoJ3VuaW9uTWVtYmVycycpID8gdHJhbnNmb3JtVW5pb24odHlwLnVuaW9uTWVtYmVycywgdmFsKSA6IHR5cC5oYXNPd25Qcm9wZXJ0eSgnYXJyYXlJdGVtcycpID8gdHJhbnNmb3JtQXJyYXkodHlwLmFycmF5SXRlbXMsIHZhbCkgOiB0eXAuaGFzT3duUHJvcGVydHkoJ3Byb3BzJykgPyB0cmFuc2Zvcm1PYmplY3QoZ2V0UHJvcHModHlwKSwgdHlwLmFkZGl0aW9uYWwsIHZhbCkgOiBpbnZhbGlkVmFsdWUodHlwLCB2YWwpO1xuICB9IC8vIE51bWJlcnMgY2FuIGJlIHBhcnNlZCBieSBEYXRlIGJ1dCBzaG91bGRuJ3QgYmUuXG5cblxuICBpZiAodHlwID09PSBEYXRlICYmIHR5cGVvZiB2YWwgIT09ICdudW1iZXInKSByZXR1cm4gdHJhbnNmb3JtRGF0ZSh2YWwpO1xuICByZXR1cm4gdHJhbnNmb3JtUHJpbWl0aXZlKHR5cCwgdmFsKTtcbn1cblxuZnVuY3Rpb24gY2FzdCh2YWwsIHR5cCkge1xuICByZXR1cm4gdHJhbnNmb3JtKHZhbCwgdHlwLCBqc29uVG9KU1Byb3BzKTtcbn1cblxuZnVuY3Rpb24gdW5jYXN0KHZhbCwgdHlwKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0odmFsLCB0eXAsIGpzVG9KU09OUHJvcHMpO1xufVxuXG5mdW5jdGlvbiBhKHR5cCkge1xuICByZXR1cm4ge1xuICAgIGFycmF5SXRlbXM6IHR5cFxuICB9O1xufVxuXG5mdW5jdGlvbiB1KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHlwcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0eXBzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1bmlvbk1lbWJlcnM6IHR5cHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbyhwcm9wcywgYWRkaXRpb25hbCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBhZGRpdGlvbmFsOiBhZGRpdGlvbmFsXG4gIH07XG59XG5cbmZ1bmN0aW9uIG0oYWRkaXRpb25hbCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiBbXSxcbiAgICBhZGRpdGlvbmFsOiBhZGRpdGlvbmFsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHIobmFtZSkge1xuICByZXR1cm4ge1xuICAgIHJlZjogbmFtZVxuICB9O1xufVxuXG52YXIgdHlwZU1hcCA9IHtcbiAgQ29udGV4dDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAvKiNfX1BVUkVfXyovbSgnJykpXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH1dLCAnYW55JyksXG4gIENvbnRhY3RMaXN0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdjb250YWN0cycsXG4gICAganM6ICdjb250YWN0cycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovYSggLyojX19QVVJFX18qL3IoJ0NvbnRhY3QnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCcnKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgQ29udGFjdDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ0NvbnRhY3RJRCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIENvbnRhY3RJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnZW1haWwnLFxuICAgIGpzOiAnZW1haWwnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdGRFNfSUQnLFxuICAgIGpzOiAnRkRTX0lEJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnJyksXG4gIEluc3RydW1lbnRMaXN0OiAvKiNfX1BVUkVfXyovbyhbe1xuICAgIGpzb246ICdpbnN0cnVtZW50cycsXG4gICAganM6ICdpbnN0cnVtZW50cycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovYSggLyojX19QVVJFX18qL3IoJ0luc3RydW1lbnQnKSlcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICdpZCcsXG4gICAganM6ICdpZCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsIC8qI19fUFVSRV9fKi9tKCcnKSlcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgSW5zdHJ1bWVudDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ0luc3RydW1lbnRJRCcpXG4gIH0sIHtcbiAgICBqc29uOiAndHlwZScsXG4gICAganM6ICd0eXBlJyxcbiAgICB0eXA6ICcnXG4gIH0sIHtcbiAgICBqc29uOiAnbmFtZScsXG4gICAganM6ICduYW1lJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnYW55JyksXG4gIEluc3RydW1lbnRJRDogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnQkJHJyxcbiAgICBqczogJ0JCRycsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0NVU0lQJyxcbiAgICBqczogJ0NVU0lQJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnRkRTX0lEJyxcbiAgICBqczogJ0ZEU19JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0ZJR0knLFxuICAgIGpzOiAnRklHSScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ0lTSU4nLFxuICAgIGpzOiAnSVNJTicsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9LCB7XG4gICAganNvbjogJ1BFUk1JRCcsXG4gICAganM6ICdQRVJNSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdSSUMnLFxuICAgIGpzOiAnUklDJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnU0VET0wnLFxuICAgIGpzOiAnU0VET0wnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICd0aWNrZXInLFxuICAgIGpzOiAndGlja2VyJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnJyksXG4gIENvdW50cnk6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi9yKCdDb3VudHJ5SUQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBDb3VudHJ5SUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0lTT0FMUEhBMicsXG4gICAganM6ICdJU09BTFBIQTInLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdJU09BTFBIQTMnLFxuICAgIGpzOiAnSVNPQUxQSEEzJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH1dLCAnJyksXG4gIE9yZ2FuaXphdGlvbjogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaWQnLFxuICAgIGpzOiAnaWQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ09yZ2FuaXphdGlvbklEJylcbiAgfSwge1xuICAgIGpzb246ICd0eXBlJyxcbiAgICBqczogJ3R5cGUnLFxuICAgIHR5cDogJydcbiAgfSwge1xuICAgIGpzb246ICduYW1lJyxcbiAgICBqczogJ25hbWUnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfV0sICdhbnknKSxcbiAgT3JnYW5pemF0aW9uSUQ6IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ0ZEU19JRCcsXG4gICAganM6ICdGRFNfSUQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3UodW5kZWZpbmVkLCAnJylcbiAgfSwge1xuICAgIGpzb246ICdMRUknLFxuICAgIGpzOiAnTEVJJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgJycpXG4gIH0sIHtcbiAgICBqc29uOiAnUEVSTUlEJyxcbiAgICBqczogJ1BFUk1JRCcsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJycpLFxuICBQb3J0Zm9saW86IC8qI19fUFVSRV9fKi9vKFt7XG4gICAganNvbjogJ3Bvc2l0aW9ucycsXG4gICAganM6ICdwb3NpdGlvbnMnLFxuICAgIHR5cDogLyojX19QVVJFX18qL2EoIC8qI19fUFVSRV9fKi9yKCdQb3NpdGlvbicpKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJycpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpLFxuICBQb3NpdGlvbjogLyojX19QVVJFX18qL28oW3tcbiAgICBqc29uOiAnaG9sZGluZycsXG4gICAganM6ICdob2xkaW5nJyxcbiAgICB0eXA6IDMuMTRcbiAgfSwge1xuICAgIGpzb246ICdpbnN0cnVtZW50JyxcbiAgICBqczogJ2luc3RydW1lbnQnLFxuICAgIHR5cDogLyojX19QVVJFX18qL3IoJ0luc3RydW1lbnQnKVxuICB9LCB7XG4gICAganNvbjogJ3R5cGUnLFxuICAgIGpzOiAndHlwZScsXG4gICAgdHlwOiAnJ1xuICB9LCB7XG4gICAganNvbjogJ2lkJyxcbiAgICBqczogJ2lkJyxcbiAgICB0eXA6IC8qI19fUFVSRV9fKi91KHVuZGVmaW5lZCwgLyojX19QVVJFX18qL20oJycpKVxuICB9LCB7XG4gICAganNvbjogJ25hbWUnLFxuICAgIGpzOiAnbmFtZScsXG4gICAgdHlwOiAvKiNfX1BVUkVfXyovdSh1bmRlZmluZWQsICcnKVxuICB9XSwgJ2FueScpXG59O1xuXG52YXIgSW50ZW50cztcblxuKGZ1bmN0aW9uIChJbnRlbnRzKSB7XG4gIEludGVudHNbXCJTdGFydENhbGxcIl0gPSBcIlN0YXJ0Q2FsbFwiO1xuICBJbnRlbnRzW1wiU3RhcnRDaGF0XCJdID0gXCJTdGFydENoYXRcIjtcbiAgSW50ZW50c1tcIlZpZXdDaGFydFwiXSA9IFwiVmlld0NoYXJ0XCI7XG4gIEludGVudHNbXCJWaWV3Q29udGFjdFwiXSA9IFwiVmlld0NvbnRhY3RcIjtcbiAgSW50ZW50c1tcIlZpZXdRdW90ZVwiXSA9IFwiVmlld1F1b3RlXCI7XG4gIEludGVudHNbXCJWaWV3TmV3c1wiXSA9IFwiVmlld05ld3NcIjtcbiAgSW50ZW50c1tcIlZpZXdJbnN0cnVtZW50XCJdID0gXCJWaWV3SW5zdHJ1bWVudFwiO1xuICBJbnRlbnRzW1wiVmlld0FuYWx5c2lzXCJdID0gXCJWaWV3QW5hbHlzaXNcIjtcbn0pKEludGVudHMgfHwgKEludGVudHMgPSB7fSkpO1xuXG5leHBvcnQgeyBDaGFubmVsRXJyb3IsIENvbnRleHRUeXBlcywgQ29udmVydCwgSW50ZW50cywgT3BlbkVycm9yLCBSZXNvbHZlRXJyb3IsIGFkZENvbnRleHRMaXN0ZW5lciwgYWRkSW50ZW50TGlzdGVuZXIsIGJyb2FkY2FzdCwgY29tcGFyZVZlcnNpb25OdW1iZXJzLCBmZGMzUmVhZHksIGZpbmRJbnRlbnQsIGZpbmRJbnRlbnRzQnlDb250ZXh0LCBnZXRDdXJyZW50Q2hhbm5lbCwgZ2V0SW5mbywgZ2V0T3JDcmVhdGVDaGFubmVsLCBnZXRTeXN0ZW1DaGFubmVscywgam9pbkNoYW5uZWwsIGxlYXZlQ3VycmVudENoYW5uZWwsIG9wZW4sIHJhaXNlSW50ZW50LCByYWlzZUludGVudEZvckNvbnRleHQsIHZlcnNpb25Jc0F0TGVhc3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZkYzMuZXNtLmpzLm1hcFxuIiwidmFyIGUsdCxhLHI9e2Q6KGUsdCk9Pntmb3IodmFyIGEgaW4gdClyLm8odCxhKSYmIXIubyhlLGEpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxhLHtlbnVtZXJhYmxlOiEwLGdldDp0W2FdfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxvPXt9O3IuZChvLHtkcTooKT0+cyxNUzooKT0+bix4UTooKT0+bCxzTzooKT0+aGUsWnU6KCk9PmRlLEkzOigpPT53ZSwkVTooKT0+a2UsaTA6KCk9PnBlLGNYOigpPT5pLFUkOigpPT5kLFU3OigpPT53LHJkOigpPT5sZX0pO2NsYXNzIG4gZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlPVwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWRcIix0KXt2YXIgYTtzdXBlcihlKSx0JiYodGhpcy5pbm5lckVycm9yPXQmJnQpLHRoaXMuc3RhY2s9bnVsbD09PShhPXRoaXMuc3RhY2spfHx2b2lkIDA9PT1hP3ZvaWQgMDphLnJlcGxhY2UoL14oXFx3KkVycm9yKS8sYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfWApfX1jbGFzcyBzIGV4dGVuZHMgbntjb25zdHJ1Y3RvcihlPVwiRmFpbGVkIHRvIGV4ZWN1dGUgYWRhcHRlciBmdW5jdGlvblwiLHQpe3N1cGVyKGUsdCl9fWNsYXNzIGwgZXh0ZW5kcyBue2NvbnN0cnVjdG9yKGU9XCJGYWlsZWQgdG8gcmFpc2UgZXZlbnRcIix0KXtzdXBlcihlLHQpfX1jbGFzcyBpIGV4dGVuZHMgbntjb25zdHJ1Y3RvcihlPVwiRmFpbGVkIHRvIGluaXRpYWxpemUgYWRhcHRlclwiLHQpe3N1cGVyKGUsdCl9fSFmdW5jdGlvbihlKXtlLkFjdGl2YXRlV29ya2Jvb2s9XCJBY3RpdmF0ZVdvcmtib29rXCIsZS5BY3RpdmF0ZVdvcmtzaGVldD1cIkFjdGl2YXRlV29ya3NoZWV0XCIsZS5BZGRXb3Jrc2hlZXQ9XCJBZGRXb3Jrc2hlZXRcIixlLkNhbGN1bGF0ZVdvcmtib29rPVwiQ2FsY3VsYXRlV29ya2Jvb2tcIixlLkNhbGN1bGF0ZVdvcmtzaGVldD1cIkNhbGN1bGF0ZVdvcmtzaGVldFwiLGUuQ2xlYXJBbGxDZWxscz1cIkNsZWFyQWxsQ2VsbHNcIixlLkNsZWFyQWxsQ2VsbFZhbHVlcz1cIkNsZWFyQWxsQ2VsbFZhbHVlc1wiLGUuQ2xlYXJBbGxDZWxsRm9ybWF0dGluZz1cIkNsZWFyQWxsQ2VsbEZvcm1hdHRpbmdcIixlLkNsZWFyQ2VsbFZhbHVlcz1cIkNsZWFyQ2VsbFZhbHVlc1wiLGUuQ2xlYXJDZWxsRm9ybWF0dGluZz1cIkNsZWFyQ2VsbEZvcm1hdHRpbmdcIixlLkNsZWFyQ2VsbHM9XCJDbGVhckNlbGxzXCIsZS5DbG9zZVdvcmtib29rPVwiQ2xvc2VXb3JrYm9va1wiLGUuQ3JlYXRlV29ya2Jvb2s9XCJDcmVhdGVXb3JrYm9va1wiLGUuRGVyZWdpc3RlckV2ZW50PVwiRGVyZWdpc3RlckV2ZW50XCIsZS5FdmVudEZpcmVkPVwiRXZlbnRGaXJlZFwiLGUuR2V0Q2FsY3VsYXRpb25Nb2RlPVwiR2V0Q2FsY3VsYXRpb25Nb2RlXCIsZS5HZXRDZWxscz1cIkdldENlbGxzXCIsZS5HZXRXb3JrYm9va0J5SWQ9XCJHZXRXb3JrYm9va0J5SWRcIixlLkdldFdvcmtib29rTmFtZT1cIkdldFdvcmtib29rTmFtZVwiLGUuR2V0V29ya2Jvb2tzPVwiR2V0V29ya2Jvb2tzXCIsZS5HZXRXb3Jrc2hlZXRCeUlkPVwiR2V0V29ya3NoZWV0QnlJZFwiLGUuR2V0V29ya3NoZWV0QnlOYW1lPVwiR2V0V29ya3NoZWV0QnlOYW1lXCIsZS5HZXRXb3Jrc2hlZXROYW1lPVwiR2V0V29ya3NoZWV0TmFtZVwiLGUuR2V0V29ya3NoZWV0cz1cIkdldFdvcmtzaGVldHNcIixlLkxvZ01lc3NhZ2U9XCJMb2dNZXNzYWdlXCIsZS5PcGVuV29ya2Jvb2s9XCJPcGVuV29ya2Jvb2tcIixlLlByb3RlY3RXb3Jrc2hlZXQ9XCJQcm90ZWN0V29ya3NoZWV0XCIsZS5SZWdpc3RlckV2ZW50PVwiUmVnaXN0ZXJFdmVudFwiLGUuU2F2ZVdvcmtib29rPVwiU2F2ZVdvcmtib29rXCIsZS5TYXZlV29ya2Jvb2tBcz1cIlNhdmVXb3JrYm9va0FzXCIsZS5TZXRDZWxsVmFsdWVzPVwiU2V0Q2VsbFZhbHVlc1wiLGUuU2V0Q2VsbEZvcm1hdHRpbmc9XCJTZXRDZWxsRm9ybWF0dGluZ1wiLGUuU2V0Q2VsbE5hbWU9XCJTZXRDZWxsTmFtZVwiLGUuRmlsdGVyQ2VsbHM9XCJGaWx0ZXJDZWxsc1wiLGUuUXVpdEFwcGxpY2F0aW9uPVwiUXVpdEFwcGxpY2F0aW9uXCJ9KGV8fChlPXt9KSksZnVuY3Rpb24oZSl7ZS5BY3RpdmF0ZT1cIkFjdGl2YXRlXCIsZS5BZGRXb3Jrc2hlZXQ9XCJBZGRXb3Jrc2hlZXRcIixlLkNoYW5nZT1cIkNoYW5nZVwiLGUuQ2xvc2U9XCJDbG9zZVwiLGUuRGVhY3RpdmF0ZT1cIkRlYWN0aXZhdGVcIixlLkRlbGV0ZVdvcmtzaGVldD1cIkRlbGV0ZVdvcmtzaGVldFwifSh0fHwodD17fSkpLGZ1bmN0aW9uKGUpe2UuV29ya2Jvb2s9XCJXb3JrYm9va1wiLGUuV29ya3NoZWV0PVwiV29ya3NoZWV0XCJ9KGF8fChhPXt9KSk7bGV0IGM9ITE7Y29uc3QgaD1cIltAb3BlbmZpbi9leGNlbF1cIixkPSgpPT57Yz0hMX0sdz0oKT0+e2M9ITAscChcInYxLjIuMVwiKX0saz0oZSx0KT0+e2MmJihlLmlubmVyRXJyb3I/Y29uc29sZS5lcnJvcih0P2Ake2h9ICR7dH1gOmgsZSxcIlxcblxcbihpbm5lcilcIixlLmlubmVyRXJyb3IpOmNvbnNvbGUuZXJyb3IodD9gJHtofSAke3R9YDpoLGUpKX0scD0oLi4uZSk9PntjJiZjb25zb2xlLmxvZyhoLC4uLmUpfSx1PSguLi5lKT0+e2MmJmNvbnNvbGUud2FybihoLC4uLmUpfTt3aW5kb3cuZmlufHxPYmplY3QuYXNzaWduKHdpbmRvdyx7ZmluOnt9fSksT2JqZWN0LmFzc2lnbih3aW5kb3cuZmluLHtJbnRlZ3JhdGlvbnM6e0V4Y2VsOntlbmFibGVMb2dnaW5nOncsZGlzYWJsZUxvZ2dpbmc6ZH19fSk7Y29uc3QgZz0oKT0+XCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csKGU9Pntjb25zdCB0PTE2Kk1hdGgucmFuZG9tKCl8MDtyZXR1cm4oXCJ4XCI9PT1lP3Q6MyZ0fDgpLnRvU3RyaW5nKDE2KX0pKSxDPW5ldyBNYXAseT0odCxhKT0+YXN5bmMoKT0+e3AoYFdvcmtzaGVldDogQWN0aXZhdGUgKCR7YX0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5BY3RpdmF0ZVdvcmtzaGVldCxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LHY9KHQsYSk9PmFzeW5jKCk9PntwKGBXb3Jrc2hlZXQ6IENhbGN1bGF0ZSAoJHthfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNhbGN1bGF0ZVdvcmtzaGVldCxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LG09KHQsYSk9PmFzeW5jKCk9PntwKGBXb3Jrc2hlZXQ6IENsZWFyIGFsbCBjZWxsIHZhbHVlcyAoJHthfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQWxsQ2VsbFZhbHVlcyxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LFc9KHQsYSk9PmFzeW5jKCk9PntwKGBXb3Jrc2hlZXQ6IENsZWFyIGFsbCBjZWxsIGZvcm1hdHRpbmcgKCR7YX0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckFsbENlbGxGb3JtYXR0aW5nLGEpfWNhdGNoKGUpe3Rocm93IG5ldyBzfX0sYj0odCxhKT0+YXN5bmMoKT0+e3AoYFdvcmtzaGVldDogQ2xlYXIgYWxsIGNlbGxzICgke2F9KWApO3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2xlYXJBbGxDZWxscyxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LGY9KHQsYSk9PmFzeW5jIHI9PntwKGBXb3Jrc2hlZXQ6IENsZWFyIGNlbGwgdmFsdWVzOyBjZWxsUmFuZ2U6JHtyfSAoJHthfSlgKTtjb25zdCBvPXtjZWxsUmFuZ2U6cixvYmplY3RJZDphfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkNsZWFyQ2VsbFZhbHVlcyxvKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LCQ9KHQsYSk9PmFzeW5jIHI9PntwKGBXb3Jrc2hlZXQ6IENsZWFyIGNlbGwgZm9ybWF0dGluZzsgY2VsbFJhbmdlOiR7cn0gKCR7YX0pYCk7Y29uc3Qgbz17Y2VsbFJhbmdlOnIsb2JqZWN0SWQ6YX07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DbGVhckNlbGxGb3JtYXR0aW5nLG8pfWNhdGNoKGUpe3Rocm93IG5ldyBzfX0sQT0odCxhKT0+YXN5bmMgcj0+e3AoYFdvcmtzaGVldDogQ2xlYXIgY2VsbHM7IGNlbGxSYW5nZToke3J9ICgke2F9KWApO2NvbnN0IG89e2NlbGxSYW5nZTpyLG9iamVjdElkOmF9O3RyeXthd2FpdCB0LmRpc3BhdGNoKGUuQ2xlYXJDZWxscyxvKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LHg9KGUsdCk9PihhLHIsbz0xZTMpPT57aWYoTnVtYmVyLmlzTmFOKG8pfHxvPD0wKXRocm93IG5ldyBuKFwiVXBkYXRlIGludGVydmFsIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7Y29uc3Qgcz1nKCk7cChgV29ya3NoZWV0OiBDcmVhdGUgZGF0YSBzdHJlYW07IHN0cmVhbUlkOiR7c307IGNlbGxSYW5nZToke2F9OyB1cGRhdGVJbnRlcnZhbDoke299ICgke3R9KWApO2NvbnN0IGw9e2Nsb3NlOigpPT57cChgQ2xvc2VkIHN0cmVhbSAoJHtzfSlgKSwoZT0+e3ZhciB0O3RyeXtjb25zdCBhPUMuZ2V0KGUpO2lmKCFhKXRocm93IG5ldyBuKGBVbmFibGUgdG8gZmluZCByZWdpc3RlcmVkIGRhdGEgc3RyZWFtIHdpdGggaWQgJHtlfWApO3ZvaWQgMCE9PShudWxsIT09KHQ9YS50aW1lcikmJnZvaWQgMCE9PXQ/dDp2b2lkIDApJiZMKGUpLEMuZGVsZXRlKGUpfWNhdGNoKGUpe3Rocm93IGsoZSksZX19KShzKX0sY2VsbFJhbmdlOmEsaWQ6cyxzdGFydDooKT0+e3AoYFN0YXJ0ZWQgc3RyZWFtaW5nICgke3N9KWApLEYocyxyLGUsdCl9LHN0b3A6KCk9PntwKGBTdG9wcGVkIHN0cmVhbWluZyAoJHtzfSlgKSxMKHMpfSx1cGRhdGVJbnRlcnZhbDpvLHdvcmtzaGVldElkOnR9O3JldHVybiBDLnNldChzLHtkYXRhU3RyZWFtOmx9KSxsfSxHPShlLHQscixvKT0+e2NvbnN0IG49e2V2ZW50VGFyZ2V0OmEuV29ya3NoZWV0LG9iamVjdElkOnR9O3JldHVybntvYmplY3RJZDp0LGFjdGl2YXRlOnkoZSx0KSxhZGRFdmVudExpc3RlbmVyOnIoZSxuKSxjYWxjdWxhdGU6dihlLHQpLGNsZWFyQWxsQ2VsbEZvcm1hdHRpbmc6VyhlLHQpLGNsZWFyQWxsQ2VsbHM6YihlLHQpLGNsZWFyQWxsQ2VsbFZhbHVlczptKGUsdCksY2xlYXJDZWxsRm9ybWF0dGluZzokKGUsdCksY2xlYXJDZWxsczpBKGUsdCksY2xlYXJDZWxsVmFsdWVzOmYoZSx0KSxjcmVhdGVEYXRhU3RyZWFtOngoZSx0KSxmaWx0ZXJDZWxsczpJKGUsdCksZ2V0Q2VsbHM6RChlLHQpLGdldE5hbWU6UyhlLHQpLHByb3RlY3Q6RShlLHQpLHJlbW92ZUV2ZW50TGlzdGVuZXI6byhlKSxzZXRDZWxsRm9ybWF0dGluZzpOKGUsdCksc2V0Q2VsbE5hbWU6UihlLHQpLHNldENlbGxWYWx1ZXM6VShlLHQpfX0sST0odCxhKT0+YXN5bmMocixvLG4sbCxpLGM9ITApPT57cChgV29ya3NoZWV0OiBGaWx0ZXIgY2VsbHM7IGNlbGxSYW5nZToke3J9ICgke2F9KWAse2NvbHVtbkluZGV4Om8sZmlsdGVyT3BlcmF0b3I6bixjcml0ZXJpYTE6bCxjcml0ZXJpYTI6aSx2aXNpYmxlRHJvcERvd246Y30pO2NvbnN0IGg9e2NlbGxSYW5nZTpyLGNyaXRlcmlhMTpsLGNyaXRlcmlhMjppLGNvbHVtbkluZGV4Om8sZmlsdGVyT3BlcmF0b3I6bixvYmplY3RJZDphLHZpc2libGVEcm9wRG93bjpjfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkZpbHRlckNlbGxzLGgpfWNhdGNoKGUpe3Rocm93IG5ldyBzfX0sRD0odCxhKT0+YXN5bmMgcj0+e3AoYFdvcmtzaGVldDogR2V0IGNlbGxzOyBjZWxsUmFuZ2U6JHtyfSAoJHthfSlgKTtjb25zdCBvPXtjZWxsUmFuZ2U6cixvYmplY3RJZDphfTtsZXQgbj1bXTt0cnl7bj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0Q2VsbHMsbykscChgJHtyfTpgLG4pfWNhdGNoKGUpe3Rocm93IG5ldyBzfXJldHVybiBufSxTPSh0LGEpPT5hc3luYygpPT57cChgV29ya3NoZWV0OiBHZXQgbmFtZSAoJHthfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3Jrc2hlZXROYW1lLGEpfWNhdGNoKGUpe3Rocm93IG5ldyBzfX0sRT0odCxhKT0+YXN5bmMoKT0+e3AoYFdvcmtzaGVldDogUHJvdGVjdCAoJHthfSlgKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlByb3RlY3RXb3Jrc2hlZXQsYSl9Y2F0Y2goZSl7dGhyb3cgbmV3IHN9fSxOPSh0LGEpPT5hc3luYyhyLG8pPT57cChgV29ya3NoZWV0OiBTZXQgY2VsbCBmb3JtYXR0aW5nOyBjZWxsUmFuZ2U6JHtyfSAoJHthfSlgLG8pO2NvbnN0IG49e2NlbGxSYW5nZTpyLGZvcm1hdHRpbmc6byxvYmplY3RJZDphfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlNldENlbGxGb3JtYXR0aW5nLG4pfWNhdGNoKGUpe3Rocm93IG5ldyBzfX0sUj0odCxhKT0+YXN5bmMocixvKT0+e3AoYFdvcmtzaGVldDogU2V0IGNlbGwgbmFtZTsgY2VsbFJhbmdlOiR7cn07IG5hbWU6JHtvfSAoJHthfSlgKTtjb25zdCBuPXtjZWxsUmFuZ2U6cixuYW1lOm8sb2JqZWN0SWQ6YX07dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5TZXRDZWxsTmFtZSxuKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LFU9KHQsYSk9PmFzeW5jKHIsbyk9PntwKGBXb3Jrc2hlZXQ6IFNldCBjZWxsIHZhbHVlczsgY2VsbFJhbmdlOiR7cn0gKCR7YX0pYCxvKTtjb25zdCBuPXtjZWxsUmFuZ2U6cixvYmplY3RJZDphLHZhbHVlc01hcDpvfTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLlNldENlbGxWYWx1ZXMsbil9Y2F0Y2goZSl7dGhyb3cgbmV3IHN9fSxGPShlLHQsYSxyKT0+e3ZhciBvO3RyeXtjb25zdCBzPUMuZ2V0KGUpO2lmKCFzKXRocm93IG5ldyBuKGBVbmFibGUgdG8gZmluZCByZWdpc3RlcmVkIGRhdGEgc3RyZWFtIHdpdGggaWQgJHtlfWApO3ZvaWQgMCE9PShudWxsIT09KG89cy50aW1lcikmJnZvaWQgMCE9PW8/bzp2b2lkIDApJiZMKGUpO2NvbnN0e2NlbGxSYW5nZTpsLHVwZGF0ZUludGVydmFsOml9PXMuZGF0YVN0cmVhbSxjPWFzeW5jKCk9Pntjb25zdCBvPWF3YWl0IHQoKTt0cnl7YXdhaXQgVShhLHIpKGwsW1tvXV0pfWNhdGNoKHQpe3UoYFVuYWJsZSB0byB1cGRhdGUgY2VsbCByYW5nZSBmb3Igc3RyZWFtIHdpdGggaWQgJHtlfTogJHtudWxsPT10P3ZvaWQgMDp0Lm1lc3NhZ2V9YCl9fSxoPXdpbmRvdy5zZXRJbnRlcnZhbChjLGkpO3MudGltZXI9aH1jYXRjaChlKXt0aHJvdyBrKGUpLGV9fSxMPWU9Pnt2YXIgdDt0cnl7Y29uc3QgYT1DLmdldChlKTtpZighYSl0aHJvdyBuZXcgbihgVW5hYmxlIHRvIGZpbmQgcmVnaXN0ZXJlZCBkYXRhIHN0cmVhbSB3aXRoIGlkICR7ZX1gKTtpZih2b2lkIDA9PT0obnVsbCE9PSh0PWEudGltZXIpJiZ2b2lkIDAhPT10P3Q6dm9pZCAwKSlyZXR1cm47d2luZG93LmNsZWFySW50ZXJ2YWwoYS50aW1lciksYS50aW1lcj12b2lkIDB9Y2F0Y2goZSl7dGhyb3cgayhlKSxlfX0saj1uZXcgTWFwLEI9KGEscik9PmFzeW5jKG8sbik9PntpZighcnx8IXIuZXZlbnRUYXJnZXR8fCFyLm9iamVjdElkKXtjb25zdCBlPW5ldyBsKFwiRXZlbnQgcmVnaXN0cmF0aW9uIG1pc3NpbmcgcmVxdWlyZWQgdmFsdWVzXCIpO3Rocm93IGsoZSksZX1jb25zdCBpPU9iamVjdC5rZXlzKHQpLmZpbmQoKGU9PmUudG9Mb3dlckNhc2UoKT09PW8udG9Mb3dlckNhc2UoKSkpO2lmKCFpKXtjb25zdCBlPW5ldyBsKGBVbnN1cHBvcnRlZCBldmVudCBuYW1lOiAke299YCk7dGhyb3cgayhlKSxlfXIuZXZlbnROYW1lPXRbaV0scChcIlJlZ2lzdGVyaW5nIGV2ZW50XCIscik7dHJ5e2NvbnN0IHQ9YXdhaXQgYS5kaXNwYXRjaChlLlJlZ2lzdGVyRXZlbnQscik7ai5zZXQodCxuKX1jYXRjaChlKXt0aHJvdyBuZXcgcyh2b2lkIDAsZSl9fSxPPXQ9PmFzeW5jIGE9PntsZXQgcjtmb3IoY29uc3RbZSx0XW9mIGopaWYodD09PWEpe3I9ZTticmVha31pZighcil0aHJvdyBuZXcgbDtwKFwiRGVyZWdpc3RlcmluZyBldmVudDpcIixyKTt0cnl7YXdhaXQgdC5kaXNwYXRjaChlLkRlcmVnaXN0ZXJFdmVudCxyKSxqLmRlbGV0ZShyKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LFY9KHQsYSk9PmFzeW5jKCk9PntwKGBXb3JrYm9vazogQWN0aXZhdGUgKCR7YX0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuQWN0aXZhdGVXb3JrYm9vayxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LFA9KHQsYSxyLG8pPT5hc3luYygpPT57bGV0IG47cChgV29ya2Jvb2s6IEFkZCB3b3Jrc2hlZXQgKCR7YX0pYCk7dHJ5e249YXdhaXQgdC5kaXNwYXRjaChlLkFkZFdvcmtzaGVldCxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc31yZXR1cm4gRyh0LG4scixvKX0sTT0odCxhKT0+YXN5bmMoKT0+e3AoYFdvcmtib29rOiBDYWxjdWxhdGUgKCR7YX0pYCk7dHJ5e2F3YWl0IHQuZGlzcGF0Y2goZS5DYWxjdWxhdGVXb3JrYm9vayxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LFQ9KHQsYSk9PmFzeW5jKCk9PntwKGBXb3JrYm9vazogQ2xvc2UgKCR7YX0pYCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuQ2xvc2VXb3JrYm9vayxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LHo9KGUsdCxyLG8pPT57Y29uc3Qgbj17ZXZlbnRUYXJnZXQ6YS5Xb3JrYm9vayxvYmplY3RJZDp0fTtyZXR1cm57b2JqZWN0SWQ6dCxhY3RpdmF0ZTpWKGUsdCksYWRkV29ya3NoZWV0OlAoZSx0LHIsbyksYWRkRXZlbnRMaXN0ZW5lcjpyKGUsbiksY2FsY3VsYXRlOk0oZSx0KSxjbG9zZTpUKGUsdCksZ2V0Q2FsY3VsYXRpb25Nb2RlOlEoZSx0KSxnZXROYW1lOkgoZSx0KSxnZXRXb3Jrc2hlZXRCeU5hbWU6cShlLHQscixvKSxnZXRXb3Jrc2hlZXRzOkooZSx0LHIsbykscmVtb3ZlRXZlbnRMaXN0ZW5lcjpvKGUpLHNhdmU6WChlLHQpLHNhdmVBczpaKGUsdCl9fSxRPSh0LGEpPT5hc3luYygpPT57cChcIldvcmtib29rOiBHZXQgY2FsY3VsYXRpb24gbW9kZVwiKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5HZXRDYWxjdWxhdGlvbk1vZGUsYSl9Y2F0Y2goZSl7dGhyb3cgbmV3IHN9fSxIPSh0LGEpPT5hc3luYygpPT57cChgV29ya2Jvb2s6IEdldCBuYW1lICgke2F9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtib29rTmFtZSxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LHE9KHQsYSxyLG8pPT5hc3luYyBuPT57bGV0IGw7cChgV29ya2Jvb2s6IEdldCB3b3Jrc2hlZXQgYnkgbmFtZTogJHtufSAoJHthfSlgKTt0cnl7aWYobD1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0QnlOYW1lLHtvYmplY3RJZDphLHdvcmtzaGVldE5hbWU6bn0pLG51bGw9PT1sKXJldHVybiBudWxsfWNhdGNoKGUpe3Rocm93IG5ldyBzfXJldHVybiBHKHQsbCxyLG8pfSxKPSh0LGEscixvKT0+YXN5bmMoKT0+e2xldCBuO3AoYFdvcmtib29rOiBHZXQgd29ya3NoZWV0cyAoJHthfSlgKTt0cnl7bj1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0cyxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc31yZXR1cm4gbi5tYXAoKGU9PkcodCxlLHIsbykpKX0sWD0odCxhKT0+YXN5bmMoKT0+e3AoYFdvcmtib29rOiBTYXZlICgke2F9KWApO3RyeXtyZXR1cm4gYXdhaXQgdC5kaXNwYXRjaChlLlNhdmVXb3JrYm9vayxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc319LFo9KHQsYSk9PmFzeW5jIHI9PntwKGBXb3JrYm9vazogU2F2ZSBhczsgZmlsZVBhdGg6JHtyfSAoJHthfSlgKTt0cnl7cmV0dXJuIGF3YWl0IHQuZGlzcGF0Y2goZS5TYXZlV29ya2Jvb2tBcyx7ZmlsZVBhdGg6cixvYmplY3RJZDphfSl9Y2F0Y2goZSl7dGhyb3cgbmV3IHN9fSxLPXQ9PmFzeW5jKCk9PntsZXQgYTtwKFwiQXBwbGljYXRpb246IENyZWF0ZSB3b3JrYm9va1wiKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuQ3JlYXRlV29ya2Jvb2spfWNhdGNoKGUpe3Rocm93IG5ldyBzfXJldHVybiB6KHQsYSxCLE8pfSxZPXQ9PmFzeW5jIGE9PntsZXQgcjtwKGBBcHBsaWNhdGlvbjogR2V0IHdvcmtib29rOyBpZDoke2F9YCk7dHJ5e3I9YXdhaXQgdC5kaXNwYXRjaChlLkdldFdvcmtib29rQnlJZCxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc31yZXR1cm4geih0LHIsQixPKX0sXz10PT5hc3luYygpPT57bGV0IGE7cChcIkFwcGxpY2F0aW9uOiBHZXQgd29ya2Jvb2tzXCIpO3RyeXthPWF3YWl0IHQuZGlzcGF0Y2goZS5HZXRXb3JrYm9va3MpfWNhdGNoKGUpe3Rocm93IG5ldyBzfXJldHVybiBhLm1hcCgoZT0+eih0LGUsQixPKSkpfSxlZT10PT5hc3luYyBhPT57cChgQXBwbGljYXRpb246IEdldCB3b3Jrc2hlZXQ7IGlkOiR7YX1gKTt0cnl7YT1hd2FpdCB0LmRpc3BhdGNoKGUuR2V0V29ya3NoZWV0QnlJZCxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc31yZXR1cm4gRyh0LGEsQixPKX0sdGU9dD0+YXN5bmMgYT0+e2xldCByO3AoYEFwcGxpY2F0aW9uOiBPcGVuIHdvcmtib29rOyBmaWxlUGF0aDoke2F9YCk7dHJ5e3I9YXdhaXQgdC5kaXNwYXRjaChlLk9wZW5Xb3JrYm9vayxhKX1jYXRjaChlKXt0aHJvdyBuZXcgc31yZXR1cm4geih0LHIsQixPKX0sYWU9dD0+YXN5bmMoYT0hMCk9PntwKGBBcHBsaWNhdGlvbjogUXVpdDsgZGlzcGxheUFsZXJ0czoke2F9YCk7dHJ5e3JldHVybiBhd2FpdCB0LmRpc3BhdGNoKGUuUXVpdEFwcGxpY2F0aW9uLGEpfWNhdGNoKGUpe3Rocm93IG5ldyBzfX07dmFyIHJlOyFmdW5jdGlvbihlKXtlW2UuSW5mbz0xXT1cIkluZm9cIixlW2UuV2Fybj0yXT1cIldhcm5cIixlW2UuRXJyb3I9M109XCJFcnJvclwifShyZXx8KHJlPXt9KSk7Y29uc3Qgb2U9ZygpO2xldCBuZSxzZTtjb25zdCBsZT1hc3luYygpPT57dHJ5e2lmKCFuZXx8IWF3YWl0KGFzeW5jIGU9Pihhd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmdldEFsbENoYW5uZWxzKCkpLnNvbWUoKHQ9PnQuY2hhbm5lbE5hbWU9PT1lKSkpKG9lKSl7YXdhaXQoYXN5bmMoKT0+e3ZhciBlO2NvbnN0IHQ9bnVsbD09PShlPShhd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudFN5bmMoKS5nZXRNYW5pZmVzdCgpKS5hcHBBc3NldHMpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmZpbmQoKGU9PlwiZXhjZWwtYWRhcHRlclwiPT09ZS5hbGlhcykpO2lmKHQpcmV0dXJuIHZvaWQgdShcIkRldGVjdGVkIGFkYXB0ZXIgcGFja2FnZSBpbiBhcHAgbWFuaWZlc3QgYXBwQXNzZXRzXCIsdCk7aWYoYXdhaXQgY2UoKSlyZXR1cm4gdm9pZCBwKFwiVXNpbmcgZXhpc3RpbmcgYWRhcHRlciBwYWNrYWdlXCIpO2NvbnN0IGE9e2FsaWFzOlwiZXhjZWwtYWRhcHRlclwiLHNyYzpcImh0dHBzOi8vY2RuLm9wZW5maW4uY28vcmVsZWFzZS9pbnRlZ3JhdGlvbnMvZXhjZWwvMS4yLjEvT3BlbkZpbi5FeGNlbC56aXBcIix0YXJnZXQ6XCJPcGVuRmluLkV4Y2VsLmV4ZVwiLHZlcnNpb246XCIxLjIuMVwifTtwKFwiRG93bmxvYWRpbmcgYWRhcHRlciBwYWNrYWdlXCIsYSk7dHJ5e2F3YWl0IGZpbi5TeXN0ZW0uZG93bmxvYWRBc3NldChhLCgoKT0+e30pKX1jYXRjaChlKXt0aHJvdyBrKFwiVW5hYmxlIHRvIGRvd25sb2FkIGFkYXB0ZXIgcGFja2FnZVwiKSxlfX0pKCk7Y29uc3QgZT1hd2FpdCBmaW4uU3lzdGVtLmdldFJ1bnRpbWVJbmZvKCksdD1maW4uQXBwbGljYXRpb24ubWUudXVpZCxhPWUudmVyc2lvbixyPWUuc2VjdXJpdHlSZWFsbTtwKFwiSW5pdGlhbGl6aW5nIGFkYXB0ZXJcIix7YXBwSWQ6dCxjaGFubmVsTmFtZTpvZSxydW50aW1lVmVyc2lvbjphLHNlY3VyaXR5UmVhbG06cn0pLG5lPWF3YWl0IGZpbi5TeXN0ZW0ubGF1bmNoRXh0ZXJuYWxQcm9jZXNzKHthbGlhczpcImV4Y2VsLWFkYXB0ZXJcIixhcmd1bWVudHM6YCR7dH0gJHthfSAke3J9ICR7b2V9YH0pLHAoYEFkYXB0ZXIgcnVubmluZyB3aXRoIHV1aWQgJHtuZS51dWlkfWApfWNvbnN0IG89ZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KG9lLHtwYXlsb2FkOnt2ZXJzaW9uOlwiMS4yLjFcIn19KSxuPW5ldyBQcm9taXNlKChlPT57c2V0VGltZW91dChlLDJlNCl9KSkudGhlbigoKCk9Pnt0aHJvdyBuZXcgRXJyb3IoXCJDb25uZWN0aW9uIHRvIGFkYXB0ZXIgdGltZWQgb3V0XCIpfSkpO3NlPWF3YWl0IFByb21pc2UucmFjZShbbyxuXSkscChgQ29ubmVjdGVkIHRvIGFkYXB0ZXIgb24gY2hhbm5lbCAke29lfWApLHNlLnJlZ2lzdGVyKGUuTG9nTWVzc2FnZSxpZSksc2UucmVnaXN0ZXIoZS5FdmVudEZpcmVkLChyPXNlLGU9Pntjb25zdCBvPWouZ2V0KGUuZXZlbnRSZWdpc3RyYXRpb25JZCk7aWYoIW8pdGhyb3cgbmV3IGwoYE5vIHJlZ2lzdGVyZWQgZXZlbnQgbGlzdGVuZXIgZm91bmQgZm9yIGlkOiAke2UuZXZlbnRSZWdpc3RyYXRpb25JZH1gKTtwKFwiRXZlbnQgcGF5bG9hZCByZWNlaXZlZFwiLGUpLCgoZSxyLG8pPT57dmFyIG4scztzd2l0Y2goby5ldmVudFRhcmdldCl7Y2FzZSBhLldvcmtib29rOnN3aXRjaChudWxsPT09KG49by5ldmVudE5hbWUpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLnRvVXBwZXJDYXNlKCkpe2Nhc2UgdC5BY3RpdmF0ZS50b1VwcGVyQ2FzZSgpOmNhc2UgdC5DbG9zZS50b1VwcGVyQ2FzZSgpOmNhc2UgdC5EZWFjdGl2YXRlLnRvVXBwZXJDYXNlKCk6cmV0dXJuIGUoKTtjYXNlIHQuQWRkV29ya3NoZWV0LnRvVXBwZXJDYXNlKCk6Y2FzZSB0LkRlbGV0ZVdvcmtzaGVldC50b1VwcGVyQ2FzZSgpOnJldHVybiBlKEcocixvLndvcmtzaGVldE9iamVjdElkLEIsTykpO2RlZmF1bHQ6dGhyb3cgbmV3IGwoYFVuZXhwZWN0ZWQgd29ya2Jvb2sgZXZlbnQ6ICR7by5ldmVudE5hbWV9YCl9Y2FzZSBhLldvcmtzaGVldDpzd2l0Y2gobnVsbD09PShzPW8uZXZlbnROYW1lKXx8dm9pZCAwPT09cz92b2lkIDA6cy50b1VwcGVyQ2FzZSgpKXtjYXNlIHQuQWN0aXZhdGUudG9VcHBlckNhc2UoKTpyZXR1cm4gZSgpO2Nhc2UgdC5DaGFuZ2UudG9VcHBlckNhc2UoKTpyZXR1cm4gZShvLmNoYW5nZWRDZWxscyk7Y2FzZSB0LkRlYWN0aXZhdGUudG9VcHBlckNhc2UoKTpyZXR1cm4gZSgpO2RlZmF1bHQ6dGhyb3cgbmV3IGwoYFVuZXhwZWN0ZWQgd29ya3NoZWV0IGV2ZW50OiAke28uZXZlbnROYW1lfWApfWRlZmF1bHQ6dGhyb3cgbmV3IGwoYFVuZXhwZWN0ZWQgZXZlbnQgdGFyZ2V0OiAke28uZXZlbnRUYXJnZXR9YCl9fSkobyxyLGUpfSkpfWNhdGNoKGUpe2NvbnN0IHQ9bmV3IGkodm9pZCAwLGUpO3Rocm93IGsodCksdH12YXIgcjtyZXR1cm57YWRhcHRlcjp7Y2hhbm5lbE5hbWU6b2UsdmVyc2lvbjpcIjEuMi4xXCJ9LGNyZWF0ZVdvcmtib29rOksoc2UpLGdldFdvcmtib29rQnlJZDpZKHNlKSxnZXRXb3JrYm9va3M6XyhzZSksZ2V0V29ya3NoZWV0QnlJZDplZShzZSksb3Blbldvcmtib29rOnRlKHNlKSxxdWl0OmFlKHNlKX19LGllPWU9Pntjb25zdHttZXNzYWdlOnQsdHlwZTphfT1lLHI9XCJbYWRhcHRlcl1cIjtzd2l0Y2goYSl7Y2FzZSByZS5FcnJvcjprKHQscik7YnJlYWs7Y2FzZSByZS5JbmZvOnAocix0KTticmVhaztjYXNlIHJlLldhcm46dShyLHQpfX0sY2U9YXN5bmMoKT0+e3RyeXtjb25zdCBlPWF3YWl0IGZpbi5TeXN0ZW0uZ2V0QXBwQXNzZXRJbmZvKHthbGlhczpcImV4Y2VsLWFkYXB0ZXJcIn0pO3JldHVybiBlJiZcIjEuMi4xXCI9PT1lLnZlcnNpb259Y2F0Y2goZSl7cmV0dXJuITF9fTt2YXIgaGUsZGUsd2Usa2UscGU7IWZ1bmN0aW9uKGUpe2UuQ29udGludW91cz1cIkNvbnRpbnVvdXNcIixlLkRhc2g9XCJEYXNoXCIsZS5EYXNoRG90PVwiRGFzaERvdFwiLGUuRGFzaERvdERvdD1cIkRhc2hEb3REb3RcIixlLkRvdD1cIkRvdFwiLGUuRG91YmxlPVwiRG91YmxlXCIsZS5TbGFudERhc2hEb3Q9XCJTbGFudERhc2hEb3RcIixlLk5vbmU9XCJOb25lXCJ9KGhlfHwoaGU9e30pKSxmdW5jdGlvbihlKXtlLkNlbnRlcj1cIkNlbnRlclwiLGUuQ2VudGVyQWNyb3NzU2VsZWN0aW9uPVwiQ2VudGVyQWNyb3NzU2VsZWN0aW9uXCIsZS5EaXN0cmlidXRlZD1cIkRpc3RyaWJ1dGVkXCIsZS5GaWxsPVwiRmlsbFwiLGUuR2VuZXJhbD1cIkdlbmVyYWxcIixlLkp1c3RpZnk9XCJKdXN0aWZ5XCIsZS5MZWZ0PVwiTGVmdFwiLGUuUmlnaHQ9XCJSaWdodFwifShkZXx8KGRlPXt9KSksZnVuY3Rpb24oZSl7ZS5BdXRvbWF0aWM9XCJBdXRvbWF0aWNcIixlLkNoZWNrZXI9XCJDaGVja2VyXCIsZS5Dcmlzc0Nyb3NzPVwiQ3Jpc3NDcm9zc1wiLGUuRG93bj1cIkRvd25cIixlLkdyYXkxNj1cIkdyYXkxNlwiLGUuR3JheTI1PVwiR3JheTI1XCIsZS5HcmF5NTA9XCJHcmF5NTBcIixlLkdyYXk3NT1cIkdyYXk3NVwiLGUuR3JheTg9XCJHcmF5OFwiLGUuR3JpZD1cIkdyaWRcIixlLkhvcml6b250YWw9XCJIb3Jpem9udGFsXCIsZS5MaWdodERvd249XCJMaWdodERvd25cIixlLkxpZ2h0SG9yaXpvbnRhbD1cIkxpZ2h0SG9yaXpvbnRhbFwiLGUuTGlnaHRVcD1cIkxpZ2h0VXBcIixlLkxpZ2h0VmVydGljYWw9XCJMaWdodFZlcnRpY2FsXCIsZS5MaW5lYXJHcmFkaWVudD1cIkxpbmVhckdyYWRpZW50XCIsZS5Ob25lPVwiTm9uZVwiLGUuUmVjdGFuZ3VsYXJHcmFkaWVudD1cIlJlY3Rhbmd1bGFyR3JhZGllbnRcIixlLlNlbWlHcmF5NzU9XCJTZW1pR3JheTc1XCIsZS5Tb2xpZD1cIlNvbGlkXCIsZS5VcD1cIlVwXCIsZS5WZXJ0aWNhbD1cIlZlcnRpY2FsXCJ9KHdlfHwod2U9e30pKSxmdW5jdGlvbihlKXtlLkJvdHRvbT1cIkJvdHRvbVwiLGUuQ2VudGVyPVwiQ2VudGVyXCIsZS5EaXN0cmlidXRlZD1cIkRpc3RyaWJ1dGVkXCIsZS5KdXN0aWZ5PVwiSnVzdGlmeVwiLGUuVG9wPVwiVG9wXCJ9KGtlfHwoa2U9e30pKSxmdW5jdGlvbihlKXtlLkFuZD1cIkFuZFwiLGUuT3I9XCJPclwiLGUuVG9wMTBJdGVtcz1cIlRvcDEwSXRlbXNcIixlLkJvdHRvbTEwSXRlbXM9XCJCb3R0b20xMEl0ZW1zXCIsZS5Ub3AxMFBlcmNlbnQ9XCJUb3AxMFBlcmNlbnRcIixlLkJvdHRvbTEwUGVyY2VudD1cIkJvdHRvbTEwUGVyY2VudFwiLGUuRmlsdGVyVmFsdWVzPVwiRmlsdGVyVmFsdWVzXCJ9KHBlfHwocGU9e30pKTt2YXIgdWU9by5kcSxnZT1vLk1TLENlPW8ueFEseWU9by5zTyx2ZT1vLlp1LG1lPW8uSTMsV2U9by4kVSxiZT1vLmkwLGZlPW8uY1gsJGU9by5VJCxBZT1vLlU3LHhlPW8ucmQ7ZXhwb3J0e3VlIGFzIEFkYXB0ZXJFcnJvcixnZSBhcyBBcGlFcnJvcixDZSBhcyBFdmVudEVycm9yLHllIGFzIEV4Y2VsQ2VsbEJvcmRlckxpbmVTdHlsZSx2ZSBhcyBFeGNlbENlbGxIb3Jpem9udGFsQWxpZ25tZW50LG1lIGFzIEV4Y2VsQ2VsbFBhdHRlcm4sV2UgYXMgRXhjZWxDZWxsVmVydGljYWxBbGlnbm1lbnQsYmUgYXMgRXhjZWxGaWx0ZXJPcGVyYXRvcixmZSBhcyBJbml0aWFsaXphdGlvbkVycm9yLCRlIGFzIGRpc2FibGVMb2dnaW5nLEFlIGFzIGVuYWJsZUxvZ2dpbmcseGUgYXMgZ2V0RXhjZWxBcHBsaWNhdGlvbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDZWxsLCBFeGNlbEFwcGxpY2F0aW9uLCBFeGNlbFdvcmtib29rLCBFeGNlbFdvcmtzaGVldCwgZ2V0RXhjZWxBcHBsaWNhdGlvbiB9IGZyb20gJ0BvcGVuZmluL2V4Y2VsJztcbmltcG9ydCB7IGdldEN1cnJlbnRDaGFubmVsIH0gZnJvbSBcIkBmaW5vcy9mZGMzXCI7XG5cbmNvbnN0IGtub3duSW5zdHJ1bWVudHMgPSBbXCJUU0xBXCIsIFwiTVNGVFwiLCBcIkFBUExcIl07XG5cbmxldCBleGNlbDogRXhjZWxBcHBsaWNhdGlvbiB8IHVuZGVmaW5lZDtcbmxldCBvcGVuV29ya2Jvb2tzOiB7XG4gICAgYm9vazogRXhjZWxXb3JrYm9vaztcbiAgICBuYW1lOiBzdHJpbmc7XG59W10gfCB1bmRlZmluZWQ7XG5sZXQgc2VsZWN0ZWRXb3JrYm9va0luZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5sZXQgb3BlbldvcmtzaGVldHM6IHtcbiAgICBzaGVldDogRXhjZWxXb3Jrc2hlZXQ7XG4gICAgbmFtZTogc3RyaW5nO1xufVtdIHwgdW5kZWZpbmVkO1xubGV0IHNlbGVjdGVkV29ya3NoZWV0SW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBpbml0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxufSlcblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgICBleGNlbCA9IGF3YWl0IGdldEV4Y2VsQXBwbGljYXRpb24oKTtcblxuICAgICAgICBhd2FpdCBwb3B1bGF0ZVdvcmtib29rcygpO1xuXG4gICAgICAgIGNvbnN0IHJlZnJlc2hXb3JrYm9va0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya2Jvb2stcmVmcmVzaFwiKTtcbiAgICAgICAgcmVmcmVzaFdvcmtib29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwb3B1bGF0ZVdvcmtib29rcygpKTtcblxuICAgICAgICBjb25zdCByZWZyZXNoV29ya3NoZWV0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrc2hlZXQtcmVmcmVzaFwiKTtcbiAgICAgICAgcmVmcmVzaFdvcmtzaGVldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcG9wdWxhdGVXb3Jrc2hlZXRzKCkpO1xuXG4gICAgICAgIGNvbnN0IG9wZW5Xb3JrYm9va3NTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtib29rc1wiKTtcbiAgICAgICAgb3Blbldvcmtib29rc1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jIChlKSA9PiBhd2FpdCBzZWxlY3RXb3JrYm9vaygoZS50YXJnZXQgYXMgYW55KS52YWx1ZSkpXG5cbiAgICAgICAgY29uc3Qgb3BlbldvcmtzaGVldHNTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtzaGVldHNcIik7XG4gICAgICAgIG9wZW5Xb3Jrc2hlZXRzU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYXN5bmMgKGUpID0+IGF3YWl0IHNlbGVjdFdvcmtzaGVldCgoZS50YXJnZXQgYXMgYW55KS52YWx1ZSkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNob3dFcnJvcihlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9yKGVycikge1xuICAgIGNvbnN0IGVyckRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIik7XG4gICAgZXJyRG9tLmlubmVySFRNTCA9IGVyci5tZXNzYWdlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZVdvcmtib29rcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoZXhjZWwpIHtcbiAgICAgICAgc2VsZWN0ZWRXb3JrYm9va0luZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCByZWZyZXNoQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya2Jvb2stcmVmcmVzaFwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgcmVmcmVzaEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrYm9va3NcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgIHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIG9wZW5Xb3JrYm9va3MgPSBbXTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgd29ya2Jvb2tzID0gYXdhaXQgZXhjZWwuZ2V0V29ya2Jvb2tzKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgYm9vayBvZiB3b3JrYm9va3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYXdhaXQgYm9vay5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgb3Blbldvcmtib29rcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYm9vayxcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gXCItLS0tU2VsZWN0IHdvcmtib29rLS0tLVwiO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3Blbldvcmtib29rIG9mIG9wZW5Xb3JrYm9va3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBvcGVuV29ya2Jvb2submFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcGVuV29ya2Jvb2submFtZVxuICAgICAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHNob3dFcnJvcihlcnIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2VsZWN0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZWZyZXNoQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdFdvcmtib29rKG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG5ld1dvcmtib29rSW5kZXggPSBvcGVuV29ya2Jvb2tzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gbmFtZSk7XG5cbiAgICBpZiAobmV3V29ya2Jvb2tJbmRleCAhPT0gc2VsZWN0ZWRXb3JrYm9va0luZGV4KSB7XG4gICAgICAgIHNlbGVjdGVkV29ya2Jvb2tJbmRleCA9IG5ld1dvcmtib29rSW5kZXg7XG4gICAgICAgIGlmIChuZXdXb3JrYm9va0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIGF3YWl0IG9wZW5Xb3JrYm9va3Nbc2VsZWN0ZWRXb3JrYm9va0luZGV4XS5ib29rLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBwb3B1bGF0ZVdvcmtzaGVldHMoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVXb3Jrc2hlZXRzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChleGNlbCkge1xuICAgICAgICBzZWxlY3RlZFdvcmtzaGVldEluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCByZWZyZXNoQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya3NoZWV0LXJlZnJlc2hcIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIHJlZnJlc2hCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGNlbGxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlbGwtY29udGFpbmVyXCIpO1xuICAgICAgICBjZWxsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtzaGVldHNcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgIHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIG9wZW5Xb3Jrc2hlZXRzID0gW107XG5cbiAgICAgICAgY29uc3Qgd29ya2Jvb2sgPSBvcGVuV29ya2Jvb2tzW3NlbGVjdGVkV29ya2Jvb2tJbmRleF07XG4gICAgICAgIGlmICh3b3JrYm9vaykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldHMgPSBhd2FpdCB3b3JrYm9vay5ib29rLmdldFdvcmtzaGVldHMoKTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2hlZXQgb2Ygc2hlZXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBhd2FpdCBzaGVldC5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Xb3Jrc2hlZXRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hlZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gXCItLS0tU2VsZWN0IHdvcmtzaGVldC0tLS1cIjtcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3BlbldvcmtzaGVldCBvZiBvcGVuV29ya3NoZWV0cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gb3BlbldvcmtzaGVldC5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcGVuV29ya3NoZWV0Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHNob3dFcnJvcihlcnIpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZWxlY3QuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZWZyZXNoQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdFdvcmtzaGVldChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBuZXdXb3Jrc2hlZXRJbmRleCA9IG9wZW5Xb3Jrc2hlZXRzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gbmFtZSk7XG5cbiAgICBpZiAobmV3V29ya3NoZWV0SW5kZXggIT09IHNlbGVjdGVkV29ya3NoZWV0SW5kZXgpIHtcbiAgICAgICAgY29uc3Qgb2xkV29ya3NoZWV0ID0gb3BlbldvcmtzaGVldHNbc2VsZWN0ZWRXb3Jrc2hlZXRJbmRleF07XG4gICAgICAgIGlmIChvbGRXb3Jrc2hlZXQpIHtcbiAgICAgICAgICAgIGF3YWl0IG9sZFdvcmtzaGVldC5zaGVldC5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZUNlbGxDaGFuZ2UpXG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFdvcmtzaGVldEluZGV4ID0gbmV3V29ya3NoZWV0SW5kZXg7XG4gICAgICAgIGlmIChzZWxlY3RlZFdvcmtzaGVldEluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGF3YWl0IG9wZW5Xb3Jrc2hlZXRzW3NlbGVjdGVkV29ya3NoZWV0SW5kZXhdLnNoZWV0LmFjdGl2YXRlKCk7XG4gICAgICAgICAgICBhd2FpdCBvcGVuV29ya3NoZWV0c1tzZWxlY3RlZFdvcmtzaGVldEluZGV4XS5zaGVldC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNlbGxDaGFuZ2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVDZWxsQ2hhbmdlKGNlbGxzOiBDZWxsW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjZWxsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxsLWNoYW5nZXMtY29udGFpbmVyXCIpO1xuICAgIGNlbGxDb250YWluZXIuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoY2VsbHMpO1xuXG4gICAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgICAgIGlmIChrbm93bkluc3RydW1lbnRzLmluY2x1ZGVzKGNlbGwudmFsdWUpKSB7XG4gICAgICAgICAgICBhd2FpdCBicm9hZGNhc3RJbnN0cnVtZW50KGNlbGwudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBicm9hZGNhc3RJbnN0cnVtZW50KGluc3RydW1lbnQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGJyb2FkY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJvYWRjYXN0LWNvbnRhaW5lclwiKTtcbiAgICBicm9hZGNhc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIGNvbnN0IGJyb2FkY2FzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyb2FkY2FzdC1pbnN0cnVtZW50XCIpO1xuICAgIGlmICh3aW5kb3cuZmRjMykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZmRjSW5zdHJ1bWVudCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZkYzMuaW5zdHJ1bWVudFwiLFxuICAgICAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2tlcjogaW5zdHJ1bWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5uZWwgPSBhd2FpdCBnZXRDdXJyZW50Q2hhbm5lbCgpO1xuICAgICAgICAgICAgY2hhbm5lbC5icm9hZGNhc3QoZmRjSW5zdHJ1bWVudCk7XG5cbiAgICAgICAgICAgIGJyb2FkY2FzdEVsZW1lbnQuaW5uZXJUZXh0ID0gaW5zdHJ1bWVudDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBicm9hZGNhc3RFbGVtZW50LmlubmVyVGV4dCA9IGVyci5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnJvYWRjYXN0RWxlbWVudC5pbm5lclRleHQgPSBcIk5vIEZEMyBDaGFubmVsIGF2YWlsYWJsZVwiO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=