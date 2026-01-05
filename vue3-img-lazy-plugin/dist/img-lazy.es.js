function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var check = function(it) {
  return it && it.Math === Math && it;
};
var globalThis_1 = (
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || Function("return this")()
);
var objectGetOwnPropertyDescriptor = {};
var fails$d = function(exec2) {
  try {
    return !!exec2();
  } catch (error) {
    return true;
  }
};
var fails$c = fails$d;
var descriptors = !fails$c(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
});
var fails$b = fails$d;
var functionBindNative = !fails$b(function() {
  var test2 = (function() {
  }).bind();
  return typeof test2 != "function" || test2.hasOwnProperty("prototype");
});
var NATIVE_BIND$2 = functionBindNative;
var call$9 = Function.prototype.call;
var functionCall = NATIVE_BIND$2 ? call$9.bind(call$9) : function() {
  return call$9.apply(call$9, arguments);
};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;
var createPropertyDescriptor$4 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var call$8 = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$2.bind.bind(call$8, call$8);
var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function(fn) {
  return function() {
    return call$8.apply(fn, arguments);
  };
};
var uncurryThis$g = functionUncurryThis;
var toString$5 = uncurryThis$g({}.toString);
var stringSlice$2 = uncurryThis$g("".slice);
var classofRaw$2 = function(it) {
  return stringSlice$2(toString$5(it), 8, -1);
};
var uncurryThis$f = functionUncurryThis;
var fails$a = fails$d;
var classof$6 = classofRaw$2;
var $Object$4 = Object;
var split = uncurryThis$f("".split);
var indexedObject = fails$a(function() {
  return !$Object$4("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$6(it) === "String" ? split(it, "") : $Object$4(it);
} : $Object$4;
var isNullOrUndefined$3 = function(it) {
  return it === null || it === void 0;
};
var isNullOrUndefined$2 = isNullOrUndefined$3;
var $TypeError$7 = TypeError;
var requireObjectCoercible$4 = function(it) {
  if (isNullOrUndefined$2(it))
    throw new $TypeError$7("Can't call method on " + it);
  return it;
};
var IndexedObject$2 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$4;
var toIndexedObject$4 = function(it) {
  return IndexedObject$2(requireObjectCoercible$3(it));
};
var documentAll = typeof document == "object" && document.all;
var isCallable$f = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
  return typeof argument == "function" || argument === documentAll;
} : function(argument) {
  return typeof argument == "function";
};
var isCallable$e = isCallable$f;
var isObject$9 = function(it) {
  return typeof it == "object" ? it !== null : isCallable$e(it);
};
var globalThis$c = globalThis_1;
var isCallable$d = isCallable$f;
var aFunction = function(argument) {
  return isCallable$d(argument) ? argument : void 0;
};
var getBuiltIn$4 = function(namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis$c[namespace]) : globalThis$c[namespace] && globalThis$c[namespace][method];
};
var uncurryThis$e = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);
var globalThis$b = globalThis_1;
var navigator = globalThis$b.navigator;
var userAgent$1 = navigator && navigator.userAgent;
var environmentUserAgent = userAgent$1 ? String(userAgent$1) : "";
var globalThis$a = globalThis_1;
var userAgent = environmentUserAgent;
var process = globalThis$a.process;
var Deno = globalThis$a.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split(".");
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match)
      version = +match[1];
  }
}
var environmentV8Version = version;
var V8_VERSION = environmentV8Version;
var fails$9 = fails$d;
var globalThis$9 = globalThis_1;
var $String$5 = globalThis$9.String;
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$9(function() {
  var symbol = Symbol("symbol detection");
  return !$String$5(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var getBuiltIn$3 = getBuiltIn$4;
var isCallable$c = isCallable$f;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$3 = Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol = getBuiltIn$3("Symbol");
  return isCallable$c($Symbol) && isPrototypeOf($Symbol.prototype, $Object$3(it));
};
var $String$4 = String;
var tryToString$2 = function(argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return "Object";
  }
};
var isCallable$b = isCallable$f;
var tryToString$1 = tryToString$2;
var $TypeError$6 = TypeError;
var aCallable$4 = function(argument) {
  if (isCallable$b(argument))
    return argument;
  throw new $TypeError$6(tryToString$1(argument) + " is not a function");
};
var aCallable$3 = aCallable$4;
var isNullOrUndefined$1 = isNullOrUndefined$3;
var getMethod$3 = function(V, P) {
  var func = V[P];
  return isNullOrUndefined$1(func) ? void 0 : aCallable$3(func);
};
var call$7 = functionCall;
var isCallable$a = isCallable$f;
var isObject$8 = isObject$9;
var $TypeError$5 = TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn, val;
  if (pref === "string" && isCallable$a(fn = input.toString) && !isObject$8(val = call$7(fn, input)))
    return val;
  if (isCallable$a(fn = input.valueOf) && !isObject$8(val = call$7(fn, input)))
    return val;
  if (pref !== "string" && isCallable$a(fn = input.toString) && !isObject$8(val = call$7(fn, input)))
    return val;
  throw new $TypeError$5("Can't convert object to primitive value");
};
var sharedStore = { exports: {} };
var globalThis$8 = globalThis_1;
var defineProperty$4 = Object.defineProperty;
var defineGlobalProperty$3 = function(key, value) {
  try {
    defineProperty$4(globalThis$8, key, { value, configurable: true, writable: true });
  } catch (error) {
    globalThis$8[key] = value;
  }
  return value;
};
var globalThis$7 = globalThis_1;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = "__core-js_shared__";
var store$3 = sharedStore.exports = globalThis$7[SHARED] || defineGlobalProperty$2(SHARED, {});
(store$3.versions || (store$3.versions = [])).push({
  version: "3.47.0",
  mode: "global",
  copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
  license: "https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var sharedStoreExports = sharedStore.exports;
var store$2 = sharedStoreExports;
var shared$3 = function(key, value) {
  return store$2[key] || (store$2[key] = value || {});
};
var requireObjectCoercible$2 = requireObjectCoercible$4;
var $Object$2 = Object;
var toObject$5 = function(argument) {
  return $Object$2(requireObjectCoercible$2(argument));
};
var uncurryThis$d = functionUncurryThis;
var toObject$4 = toObject$5;
var hasOwnProperty = uncurryThis$d({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$4(it), key);
};
var uncurryThis$c = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$c(1.1.toString);
var uid$2 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$4(++id + postfix, 36);
};
var globalThis$6 = globalThis_1;
var shared$2 = shared$3;
var hasOwn$8 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$1 = globalThis$6.Symbol;
var WellKnownSymbolsStore = shared$2("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1["for"] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
var wellKnownSymbol$a = function(name) {
  if (!hasOwn$8(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$8(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol("Symbol." + name);
  }
  return WellKnownSymbolsStore[name];
};
var call$6 = functionCall;
var isObject$7 = isObject$9;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$9 = wellKnownSymbol$a;
var $TypeError$4 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$9("toPrimitive");
var toPrimitive$1 = function(input, pref) {
  if (!isObject$7(input) || isSymbol$1(input))
    return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0)
      pref = "default";
    result = call$6(exoticToPrim, input, pref);
    if (!isObject$7(result) || isSymbol$1(result))
      return result;
    throw new $TypeError$4("Can't convert object to primitive value");
  }
  if (pref === void 0)
    pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;
var toPropertyKey$2 = function(argument) {
  var key = toPrimitive(argument, "string");
  return isSymbol(key) ? key : key + "";
};
var globalThis$5 = globalThis_1;
var isObject$6 = isObject$9;
var document$1 = globalThis$5.document;
var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);
var documentCreateElement$2 = function(it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};
var DESCRIPTORS$a = descriptors;
var fails$8 = fails$d;
var createElement = documentCreateElement$2;
var ie8DomDefine = !DESCRIPTORS$a && !fails$8(function() {
  return Object.defineProperty(createElement("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
});
var DESCRIPTORS$9 = descriptors;
var call$5 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$3 = createPropertyDescriptor$4;
var toIndexedObject$3 = toIndexedObject$4;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$9 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1)
    try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) {
    }
  if (hasOwn$7(O, P))
    return createPropertyDescriptor$3(!call$5(propertyIsEnumerableModule$1.f, O, P), O[P]);
};
var objectDefineProperty = {};
var DESCRIPTORS$8 = descriptors;
var fails$7 = fails$d;
var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$7(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype !== 42;
});
var isObject$5 = isObject$9;
var $String$3 = String;
var $TypeError$3 = TypeError;
var anObject$7 = function(argument) {
  if (isObject$5(argument))
    return argument;
  throw new $TypeError$3($String$3(argument) + " is not an object");
};
var DESCRIPTORS$7 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$6 = anObject$7;
var toPropertyKey = toPropertyKey$2;
var $TypeError$2 = TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$7 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$6(O);
  P = toPropertyKey(P);
  anObject$6(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty2(O, P, Attributes) {
  anObject$6(O);
  P = toPropertyKey(P);
  anObject$6(Attributes);
  if (IE8_DOM_DEFINE)
    try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {
    }
  if ("get" in Attributes || "set" in Attributes)
    throw new $TypeError$2("Accessors not supported");
  if ("value" in Attributes)
    O[P] = Attributes.value;
  return O;
};
var DESCRIPTORS$6 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$2 = createPropertyDescriptor$4;
var createNonEnumerableProperty$4 = DESCRIPTORS$6 ? function(object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$2(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var makeBuiltIn$3 = { exports: {} };
var DESCRIPTORS$5 = descriptors;
var hasOwn$6 = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype;
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$6(FunctionPrototype$1, "name");
var PROPER = EXISTS && (function something() {
}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || DESCRIPTORS$5 && getDescriptor(FunctionPrototype$1, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var uncurryThis$b = functionUncurryThis;
var isCallable$9 = isCallable$f;
var store$1 = sharedStoreExports;
var functionToString$1 = uncurryThis$b(Function.toString);
if (!isCallable$9(store$1.inspectSource)) {
  store$1.inspectSource = function(it) {
    return functionToString$1(it);
  };
}
var inspectSource$2 = store$1.inspectSource;
var globalThis$4 = globalThis_1;
var isCallable$8 = isCallable$f;
var WeakMap$1 = globalThis$4.WeakMap;
var weakMapBasicDetection = isCallable$8(WeakMap$1) && /native code/.test(String(WeakMap$1));
var shared$1 = shared$3;
var uid = uid$2;
var keys = shared$1("keys");
var sharedKey$3 = function(key) {
  return keys[key] || (keys[key] = uid(key));
};
var hiddenKeys$4 = {};
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var globalThis$3 = globalThis_1;
var isObject$4 = isObject$9;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$5 = hasOwnProperty_1;
var shared = sharedStoreExports;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$1 = globalThis$3.TypeError;
var WeakMap = globalThis$3.WeakMap;
var set, get, has;
var enforce = function(it) {
  return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError$1("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  set = function(it, metadata) {
    if (store.has(it))
      throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function(it) {
    return store.get(it) || {};
  };
  has = function(it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2("state");
  hiddenKeys$3[STATE] = true;
  set = function(it, metadata) {
    if (hasOwn$5(it, STATE))
      throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function(it) {
    return hasOwn$5(it, STATE) ? it[STATE] : {};
  };
  has = function(it) {
    return hasOwn$5(it, STATE);
  };
}
var internalState = {
  set,
  get,
  has,
  enforce,
  getterFor
};
var uncurryThis$a = functionUncurryThis;
var fails$6 = fails$d;
var isCallable$7 = isCallable$f;
var hasOwn$4 = hasOwnProperty_1;
var DESCRIPTORS$4 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule$1 = internalState;
var enforceInternalState = InternalStateModule$1.enforce;
var getInternalState$1 = InternalStateModule$1.get;
var $String$2 = String;
var defineProperty$3 = Object.defineProperty;
var stringSlice$1 = uncurryThis$a("".slice);
var replace = uncurryThis$a("".replace);
var join = uncurryThis$a([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$6(function() {
  return defineProperty$3(function() {
  }, "length", { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn$2 = makeBuiltIn$3.exports = function(value, name, options) {
  if (stringSlice$1($String$2(name), 0, 7) === "Symbol(") {
    name = "[" + replace($String$2(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
  }
  if (options && options.getter)
    name = "get " + name;
  if (options && options.setter)
    name = "set " + name;
  if (!hasOwn$4(value, "name") || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
    if (DESCRIPTORS$4)
      defineProperty$3(value, "name", { value: name, configurable: true });
    else
      value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$4(options, "arity") && value.length !== options.arity) {
    defineProperty$3(value, "length", { value: options.arity });
  }
  try {
    if (options && hasOwn$4(options, "constructor") && options.constructor) {
      if (DESCRIPTORS$4)
        defineProperty$3(value, "prototype", { writable: false });
    } else if (value.prototype)
      value.prototype = void 0;
  } catch (error) {
  }
  var state = enforceInternalState(value);
  if (!hasOwn$4(state, "source")) {
    state.source = join(TEMPLATE, typeof name == "string" ? name : "");
  }
  return value;
};
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$7(this) && getInternalState$1(this).source || inspectSource$1(this);
}, "toString");
var makeBuiltInExports = makeBuiltIn$3.exports;
var isCallable$6 = isCallable$f;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$4 = function(O, key, value, options) {
  if (!options)
    options = {};
  var simple = options.enumerable;
  var name = options.name !== void 0 ? options.name : key;
  if (isCallable$6(value))
    makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple)
      O[key] = value;
    else
      defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe)
        delete O[key];
      else if (O[key])
        simple = true;
    } catch (error) {
    }
    if (simple)
      O[key] = value;
    else
      definePropertyModule$3.f(O, key, {
        value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
  }
  return O;
};
var objectGetOwnPropertyNames = {};
var ceil = Math.ceil;
var floor = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};
var trunc2 = mathTrunc;
var toIntegerOrInfinity$3 = function(argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : trunc2(number);
};
var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
var max = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex$1 = function(index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};
var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
var min = Math.min;
var toLength$1 = function(argument) {
  var len = toIntegerOrInfinity$1(argument);
  return len > 0 ? min(len, 9007199254740991) : 0;
};
var toLength = toLength$1;
var lengthOfArrayLike$3 = function(obj) {
  return toLength(obj.length);
};
var toIndexedObject$2 = toIndexedObject$4;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$2 = lengthOfArrayLike$3;
var createMethod$2 = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = lengthOfArrayLike$2(O);
    if (length === 0)
      return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el !== el)
      while (length > index) {
        value = O[index++];
        if (value !== value)
          return true;
      }
    else
      for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el)
          return IS_INCLUDES || index || 0;
      }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};
var uncurryThis$9 = functionUncurryThis;
var hasOwn$3 = hasOwnProperty_1;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$1 = uncurryThis$9([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O)
    !hasOwn$3(hiddenKeys$2, key) && hasOwn$3(O, key) && push$1(result, key);
  while (names.length > i)
    if (hasOwn$3(O, key = names[i++])) {
      ~indexOf(result, key) || push$1(result, key);
    }
  return result;
};
var enumBugKeys$3 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$2 = getBuiltIn$4;
var uncurryThis$8 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$5 = anObject$7;
var concat$1 = uncurryThis$8([].concat);
var ownKeys$1 = getBuiltIn$2("Reflect", "ownKeys") || function ownKeys(it) {
  var keys3 = getOwnPropertyNamesModule.f(anObject$5(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$1(keys3, getOwnPropertySymbols(it)) : keys3;
};
var hasOwn$2 = hasOwnProperty_1;
var ownKeys2 = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;
var copyConstructorProperties$1 = function(target, source, exceptions) {
  var keys3 = ownKeys2(source);
  var defineProperty4 = definePropertyModule$2.f;
  var getOwnPropertyDescriptor3 = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys3.length; i++) {
    var key = keys3[i];
    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
      defineProperty4(target, key, getOwnPropertyDescriptor3(source, key));
    }
  }
};
var fails$5 = fails$d;
var isCallable$5 = isCallable$f;
var replacement = /#|\.prototype\./;
var isForced$1 = function(feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$5(detection) ? fails$5(detection) : !!detection;
};
var normalize = isForced$1.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = "N";
var POLYFILL = isForced$1.POLYFILL = "P";
var isForced_1 = isForced$1;
var globalThis$2 = globalThis_1;
var getOwnPropertyDescriptor2 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var defineBuiltIn$3 = defineBuiltIn$4;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis$2;
  } else if (STATIC) {
    target = globalThis$2[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis$2[TARGET] && globalThis$2[TARGET].prototype;
  }
  if (target)
    for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else
        targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED && targetProperty !== void 0) {
        if (typeof sourceProperty == typeof targetProperty)
          continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$2(sourceProperty, "sham", true);
      }
      defineBuiltIn$3(target, key, sourceProperty, options);
    }
};
var classofRaw$1 = classofRaw$2;
var uncurryThis$7 = functionUncurryThis;
var functionUncurryThisClause = function(fn) {
  if (classofRaw$1(fn) === "Function")
    return uncurryThis$7(fn);
};
var uncurryThis$6 = functionUncurryThisClause;
var aCallable$2 = aCallable$4;
var NATIVE_BIND = functionBindNative;
var bind$2 = uncurryThis$6(uncurryThis$6.bind);
var functionBindContext = function(fn, that) {
  aCallable$2(fn);
  return that === void 0 ? fn : NATIVE_BIND ? bind$2(fn, that) : function() {
    return fn.apply(that, arguments);
  };
};
var call$4 = functionCall;
var anObject$4 = anObject$7;
var getMethod$1 = getMethod$3;
var iteratorClose$1 = function(iterator, kind, value) {
  var innerResult, innerError;
  anObject$4(iterator);
  try {
    innerResult = getMethod$1(iterator, "return");
    if (!innerResult) {
      if (kind === "throw")
        throw value;
      return value;
    }
    innerResult = call$4(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === "throw")
    throw value;
  if (innerError)
    throw innerResult;
  anObject$4(innerResult);
  return value;
};
var anObject$3 = anObject$7;
var iteratorClose = iteratorClose$1;
var callWithSafeIterationClosing$1 = function(iterator, fn, value, ENTRIES2) {
  try {
    return ENTRIES2 ? fn(anObject$3(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, "throw", error);
  }
};
var iterators = {};
var wellKnownSymbol$8 = wellKnownSymbol$a;
var Iterators$3 = iterators;
var ITERATOR$4 = wellKnownSymbol$8("iterator");
var ArrayPrototype = Array.prototype;
var isArrayIteratorMethod$1 = function(it) {
  return it !== void 0 && (Iterators$3.Array === it || ArrayPrototype[ITERATOR$4] === it);
};
var wellKnownSymbol$7 = wellKnownSymbol$a;
var TO_STRING_TAG$2 = wellKnownSymbol$7("toStringTag");
var test = {};
test[TO_STRING_TAG$2] = "z";
var toStringTagSupport = String(test) === "[object z]";
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$4 = isCallable$f;
var classofRaw = classofRaw$2;
var wellKnownSymbol$6 = wellKnownSymbol$a;
var TO_STRING_TAG$1 = wellKnownSymbol$6("toStringTag");
var $Object$1 = Object;
var CORRECT_ARGUMENTS = classofRaw(function() {
  return arguments;
}()) === "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (error) {
  }
};
var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function(it) {
  var O, tag, result;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable$4(O.callee) ? "Arguments" : result;
};
var uncurryThis$5 = functionUncurryThis;
var fails$4 = fails$d;
var isCallable$3 = isCallable$f;
var classof$4 = classof$5;
var getBuiltIn$1 = getBuiltIn$4;
var inspectSource = inspectSource$2;
var noop = function() {
};
var construct = getBuiltIn$1("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$5(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$3(argument))
    return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor2(argument) {
  if (!isCallable$3(argument))
    return false;
  switch (classof$4(argument)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$2 = !construct || fails$4(function() {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var DESCRIPTORS$3 = descriptors;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$4;
var createProperty$1 = function(object, key, value) {
  if (DESCRIPTORS$3)
    definePropertyModule$1.f(object, key, createPropertyDescriptor$1(0, value));
  else
    object[key] = value;
};
var classof$3 = classof$5;
var getMethod = getMethod$3;
var isNullOrUndefined = isNullOrUndefined$3;
var Iterators$2 = iterators;
var wellKnownSymbol$5 = wellKnownSymbol$a;
var ITERATOR$3 = wellKnownSymbol$5("iterator");
var getIteratorMethod$2 = function(it) {
  if (!isNullOrUndefined(it))
    return getMethod(it, ITERATOR$3) || getMethod(it, "@@iterator") || Iterators$2[classof$3(it)];
};
var call$3 = functionCall;
var aCallable$1 = aCallable$4;
var anObject$2 = anObject$7;
var tryToString = tryToString$2;
var getIteratorMethod$1 = getIteratorMethod$2;
var $TypeError$1 = TypeError;
var getIterator$1 = function(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$1(iteratorMethod))
    return anObject$2(call$3(iteratorMethod, argument));
  throw new $TypeError$1(tryToString(argument) + " is not iterable");
};
var bind$1 = functionBindContext;
var call$2 = functionCall;
var toObject$3 = toObject$5;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var isConstructor$1 = isConstructor$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$3;
var createProperty = createProperty$1;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var $Array$1 = Array;
var arrayFrom = function from(arrayLike) {
  var O = toObject$3(arrayLike);
  var IS_CONSTRUCTOR = isConstructor$1(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
  var mapping = mapfn !== void 0;
  if (mapping)
    mapfn = bind$1(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next2, value;
  if (iteratorMethod && !(this === $Array$1 && isArrayIteratorMethod(iteratorMethod))) {
    result = IS_CONSTRUCTOR ? new this() : [];
    iterator = getIterator(O, iteratorMethod);
    next2 = iterator.next;
    for (; !(step = call$2(next2, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike$1(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array$1(length);
    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};
var wellKnownSymbol$4 = wellKnownSymbol$a;
var ITERATOR$2 = wellKnownSymbol$4("iterator");
var SAFE_CLOSING = false;
try {
  var called = 0;
  var iteratorWithReturn = {
    next: function() {
      return { done: !!called++ };
    },
    "return": function() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$2] = function() {
    return this;
  };
  Array.from(iteratorWithReturn, function() {
    throw 2;
  });
} catch (error) {
}
var checkCorrectnessOfIteration$1 = function(exec2, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING)
      return false;
  } catch (error) {
    return false;
  }
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$2] = function() {
      return {
        next: function() {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec2(object);
  } catch (error) {
  }
  return ITERATION_SUPPORT;
};
var $$2 = _export;
var from2 = arrayFrom;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
  Array.from(iterable);
});
$$2({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
  from: from2
});
var makeBuiltIn = makeBuiltInExports;
var defineProperty$2 = objectDefineProperty;
var defineBuiltInAccessor$1 = function(target, name, descriptor) {
  if (descriptor.get)
    makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set)
    makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$2.f(target, name, descriptor);
};
var DESCRIPTORS$2 = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$4 = functionUncurryThis;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis$4(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis$4(nameRE.exec);
var NAME = "name";
if (DESCRIPTORS$2 && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function() {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return "";
      }
    }
  });
}
var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;
var objectKeys$2 = Object.keys || function keys2(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};
var DESCRIPTORS$1 = descriptors;
var uncurryThis$3 = functionUncurryThis;
var call$1 = functionCall;
var fails$3 = fails$d;
var objectKeys$1 = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$5;
var IndexedObject$1 = indexedObject;
var $assign = Object.assign;
var defineProperty$1 = Object.defineProperty;
var concat = uncurryThis$3([].concat);
var objectAssign = !$assign || fails$3(function() {
  if (DESCRIPTORS$1 && $assign({ b: 1 }, $assign(defineProperty$1({}, "a", {
    enumerable: true,
    get: function() {
      defineProperty$1(this, "b", {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1)
    return true;
  var A = {};
  var B = {};
  var symbol = Symbol("assign detection");
  var alphabet = "abcdefghijklmnopqrst";
  A[symbol] = 7;
  alphabet.split("").forEach(function(chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] !== 7 || objectKeys$1($assign({}, B)).join("") !== alphabet;
}) ? function assign(target, source) {
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable2 = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys3 = getOwnPropertySymbols ? concat(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
    var length = keys3.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys3[j++];
      if (!DESCRIPTORS$1 || call$1(propertyIsEnumerable2, S, key))
        T[key] = S[key];
    }
  }
  return T;
} : $assign;
var $$1 = _export;
var assign2 = objectAssign;
$$1({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign2 }, {
  assign: assign2
});
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$2 = classof$5;
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString2() {
  return "[object " + classof$2(this) + "]";
};
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$2 = defineBuiltIn$4;
var toString$3 = objectToString;
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$2(Object.prototype, "toString", toString$3, { unsafe: true });
}
var classof$1 = classof$5;
var $String$1 = String;
var toString$2 = function(argument) {
  if (classof$1(argument) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return $String$1(argument);
};
var uncurryThis$2 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$2;
var requireObjectCoercible$1 = requireObjectCoercible$4;
var charAt$1 = uncurryThis$2("".charAt);
var charCodeAt = uncurryThis$2("".charCodeAt);
var stringSlice = uncurryThis$2("".slice);
var createMethod$1 = function(CONVERT_TO_STRING) {
  return function($this, pos) {
    var S = toString$1(requireObjectCoercible$1($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size)
      return CONVERT_TO_STRING ? "" : void 0;
    first = charCodeAt(S, position);
    return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
  };
};
var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};
var objectDefineProperties = {};
var DESCRIPTORS = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$1 = anObject$7;
var toIndexedObject = toIndexedObject$4;
var objectKeys = objectKeys$2;
objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$1(O);
  var props = toIndexedObject(Properties);
  var keys3 = objectKeys(Properties);
  var length = keys3.length;
  var index = 0;
  var key;
  while (length > index)
    definePropertyModule.f(O, key = keys3[index++], props[key]);
  return O;
};
var getBuiltIn = getBuiltIn$4;
var html$1 = getBuiltIn("document", "documentElement");
var anObject = anObject$7;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO$1 = sharedKey$1("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement$1("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch (error) {
  }
  NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys.length;
  while (length--)
    delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys[IE_PROTO$1] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO$1] = O;
  } else
    result = NullProtoObject();
  return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
};
var fails$2 = fails$d;
var correctPrototypeGetter = !fails$2(function() {
  function F() {
  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});
var hasOwn$1 = hasOwnProperty_1;
var isCallable$2 = isCallable$f;
var toObject$1 = toObject$5;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype = $Object.prototype;
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
  var object = toObject$1(O);
  if (hasOwn$1(object, IE_PROTO))
    return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$2(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype : null;
};
var fails$1 = fails$d;
var isCallable$1 = isCallable$f;
var isObject$3 = isObject$9;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$1 = defineBuiltIn$4;
var wellKnownSymbol$3 = wellKnownSymbol$a;
var ITERATOR$1 = wellKnownSymbol$3("iterator");
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!("next" in arrayIterator))
    BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
      IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject$3(IteratorPrototype$2) || fails$1(function() {
  var test2 = {};
  return IteratorPrototype$2[ITERATOR$1].call(test2) !== test2;
});
if (NEW_ITERATOR_PROTOTYPE)
  IteratorPrototype$2 = {};
if (!isCallable$1(IteratorPrototype$2[ITERATOR$1])) {
  defineBuiltIn$1(IteratorPrototype$2, ITERATOR$1, function() {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};
var defineProperty3 = objectDefineProperty.f;
var hasOwn2 = hasOwnProperty_1;
var wellKnownSymbol$2 = wellKnownSymbol$a;
var TO_STRING_TAG = wellKnownSymbol$2("toStringTag");
var setToStringTag$2 = function(target, TAG, STATIC) {
  if (target && !STATIC)
    target = target.prototype;
  if (target && !hasOwn2(target, TO_STRING_TAG)) {
    defineProperty3(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};
var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create2 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$4;
var setToStringTag$1 = setToStringTag$2;
var Iterators$1 = iterators;
var returnThis$1 = function() {
  return this;
};
var iteratorCreateConstructor = function(IteratorConstructor, NAME2, next2, ENUMERABLE_NEXT) {
  var TO_STRING_TAG2 = NAME2 + " Iterator";
  IteratorConstructor.prototype = create2(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next2) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG2, false);
  Iterators$1[TO_STRING_TAG2] = returnThis$1;
  return IteratorConstructor;
};
var uncurryThis$1 = functionUncurryThis;
var aCallable = aCallable$4;
var functionUncurryThisAccessor = function(object, key, method) {
  try {
    return uncurryThis$1(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {
  }
};
var isObject$2 = isObject$9;
var isPossiblePrototype$1 = function(argument) {
  return isObject$2(argument) || argument === null;
};
var isPossiblePrototype = isPossiblePrototype$1;
var $String = String;
var $TypeError = TypeError;
var aPossiblePrototype$1 = function(argument) {
  if (isPossiblePrototype(argument))
    return argument;
  throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
};
var uncurryThisAccessor = functionUncurryThisAccessor;
var isObject$1 = isObject$9;
var requireObjectCoercible = requireObjectCoercible$4;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var CORRECT_SETTER = false;
  var test2 = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
    setter(test2, []);
    CORRECT_SETTER = test2 instanceof Array;
  } catch (error) {
  }
  return function setPrototypeOf2(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject$1(O))
      return O;
    if (CORRECT_SETTER)
      setter(O, proto);
    else
      O.__proto__ = proto;
    return O;
  };
}() : void 0);
var $ = _export;
var call = functionCall;
var FunctionName = functionName;
var isCallable = isCallable$f;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn = defineBuiltIn$4;
var wellKnownSymbol$1 = wellKnownSymbol$a;
var Iterators = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol$1("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function() {
  return this;
};
var iteratorDefine = function(Iterable, NAME2, IteratorConstructor, next2, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME2, next2);
  var getIterationMethod = function(KIND) {
    if (KIND === DEFAULT && defaultIterator)
      return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
      return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys3() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function() {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG2 = NAME2 + " Iterator";
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME2 === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG2, true);
    }
  }
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, "name", VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() {
        return call(nativeIterator, this);
      };
    }
  }
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED)
      for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
        }
      }
    else
      $({ target: NAME2, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if (IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME2] = defaultIterator;
  return methods;
};
var createIterResultObject$1 = function(value, done) {
  return { value, done };
};
var charAt = stringMultibyte.charAt;
var toString3 = toString$2;
var InternalStateModule = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var STRING_ITERATOR = "String Iterator";
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
defineIterator(String, "String", function(iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString3(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length)
    return createIterResultObject(void 0, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};
var documentCreateElement = documentCreateElement$2;
var classList = documentCreateElement("span").classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;
var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? void 0 : DOMTokenListPrototype$1;
var classof = classofRaw$2;
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof(argument) === "Array";
};
var isArray2 = isArray$1;
var isConstructor3 = isConstructor$2;
var isObject = isObject$9;
var wellKnownSymbol = wellKnownSymbol$a;
var SPECIES = wellKnownSymbol("species");
var $Array = Array;
var arraySpeciesConstructor$1 = function(originalArray) {
  var C;
  if (isArray2(originalArray)) {
    C = originalArray.constructor;
    if (isConstructor3(C) && (C === $Array || isArray2(C.prototype)))
      C = void 0;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null)
        C = void 0;
    }
  }
  return C === void 0 ? $Array : C;
};
var arraySpeciesConstructor = arraySpeciesConstructor$1;
var arraySpeciesCreate$1 = function(originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};
var bind = functionBindContext;
var uncurryThis = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject = toObject$5;
var lengthOfArrayLike = lengthOfArrayLike$3;
var arraySpeciesCreate = arraySpeciesCreate$1;
var push = uncurryThis([].push);
var createMethod = function(TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self2 = IndexedObject(O);
    var length = lengthOfArrayLike(self2);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create3 = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create3($this, length) : IS_FILTER || IS_FILTER_REJECT ? create3($this, 0) : void 0;
    var value, result;
    for (; length > index; index++)
      if (NO_HOLES || index in self2) {
        value = self2[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP)
            target[index] = result;
          else if (result)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return value;
              case 6:
                return index;
              case 2:
                push(target, value);
            }
          else
            switch (TYPE) {
              case 4:
                return false;
              case 7:
                push(target, value);
            }
        }
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};
var fails = fails$d;
var arrayMethodIsStrict$1 = function(METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function() {
    method.call(null, argument || function() {
      return 1;
    }, 1);
  });
};
var $forEach = arrayIteration.forEach;
var arrayMethodIsStrict = arrayMethodIsStrict$1;
var STRICT_METHOD = arrayMethodIsStrict("forEach");
var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
} : [].forEach;
var globalThis$1 = globalThis_1;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var forEach2 = arrayForEach;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var handlePrototype = function(CollectionPrototype) {
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach2)
    try {
      createNonEnumerableProperty(CollectionPrototype, "forEach", forEach2);
    } catch (error) {
      CollectionPrototype.forEach = forEach2;
    }
};
for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(globalThis$1[COLLECTION_NAME] && globalThis$1[COLLECTION_NAME].prototype);
  }
}
handlePrototype(DOMTokenListPrototype);
var LazyLoad = /* @__PURE__ */ function() {
  function LazyLoad2(imgOps, obsOps) {
    _classCallCheck(this, LazyLoad2);
    this.element = [];
    this.imgOptions = Object.assign(this.defaulImgOps, imgOps || {});
    this.observeOptions = Object.assign(this.defaultObserveOptions, obsOps || {});
    this.observer = null;
    this.initObserver();
  }
  return _createClass(LazyLoad2, [{
    key: "defaultObserveOptions",
    get: (
      /**
       * 默认的观察选项
       * @returns 默认的观察选项
       */
      function get2() {
        return {
          threshold: 0.1,
          // 元素进入视口的比例10%
          root: null,
          // 根元素，默认是视口
          rootMargin: "10px"
          // 根元素的外边距
        };
      }
    )
    /**
     * 默认的图片选项
     * @returns 默认的图片选项
     */
  }, {
    key: "defaulImgOps",
    get: function get2() {
      return {
        // 失败占位图
        error: "",
        // 失败图片地址,
        loading: "",
        // 加载占位图
        // 懒加载图片的属性
        attr: "data-src",
        attrImg: "src"
      };
    }
    /**
     * 初始化观察器实例
     */
  }, {
    key: "initObserver",
    value: function initObserver() {
      if (!this.observer) {
        this.observer = new IntersectionObserver(this.observeHandler.bind(this), this.observeOptions);
      }
    }
    /**
     * 初始化元素节点
     * @param {*} el 元素节点或选择器
     * @returns 元素节点数组
     */
  }, {
    key: "elementInit",
    value: function elementInit(el) {
      if (!el) {
        throw new Error("el元素节点参数不能为空");
      }
      var elements = [];
      if (typeof el === "string") {
        elements = document.querySelectorAll(el);
      } else if (el.nodeType === 1) {
        elements = [el];
      } else if (el instanceof NodeList || el instanceof HTMLCollection) {
        elements = Array.from(el);
      } else if (Array.isArray(el)) {
        elements = el;
      }
      return elements;
    }
    /**
     * 安装插件
     * @param {*} app vue实例
     * @param {*} options 插件选项
     */
  }, {
    key: "install",
    value: function install(app, options) {
      var _this = this;
      options = options || {};
      var directiveName = options.name || "lazy";
      app.directive(directiveName, {
        beforeMount: function beforeMount(el, binding) {
          el.setAttribute("data-src", binding.value);
          if (_this.imgOptions.loading) {
            el.src = _this.imgOptions.loading;
          }
        },
        mounted: function mounted(el, binding) {
          _this.observe(el);
        },
        updated: function updated(el, binding) {
          el.setAttribute("data-src", binding.value);
          _this.observe(el);
        },
        unmounted: function unmounted(el) {
          _this.unobserve(el);
        }
      });
    }
    // 手动调用use执行监听指定元素, 确保data-src属性存在,不然加载图片会失败
    /**
     * 手动调用使用插件
     * @param {*} el 元素节点或选择器
     */
  }, {
    key: "use",
    value: function use(el) {
      var _this2 = this;
      this.element = this.elementInit(el);
      this.element.forEach(function(el2) {
        if (_this2.imgOptions.loading) {
          el2.src = _this2.imgOptions.loading;
        }
        _this2.observe(el2);
      });
    }
    /**
     * 观察元素进入视口的回调函数
     * @param {*} entries 观察元素的信息数组
     */
  }, {
    key: "observeHandler",
    value: function observeHandler(entries) {
      var _this3 = this;
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          var dataSrc = img.getAttribute("data-src");
          if (dataSrc) {
            img.onload = function() {
              img.onload = null;
              img.onerror = null;
            };
            img.onerror = function() {
              if (_this3.imgOptions.error) {
                img.src = _this3.imgOptions.error;
              }
              img.onload = null;
              img.onerror = null;
            };
            img.src = dataSrc;
            img.removeAttribute("data-src");
            _this3.unobserve(img);
          }
        }
      });
    }
    /**
     * 监听元素
     * @param {Element} el DOM元素
     */
  }, {
    key: "observe",
    value: function observe(el) {
      this.initObserver();
      if (el.getAttribute("data-src") && !this.isObserving(el)) {
        this.observer.observe(el);
        el.dataset.isObserving = "true";
      }
    }
    /**
     * 检查元素是否正在被观察
     * @param {Element} el DOM元素
     * @returns {boolean} 是否正在被观察
     */
  }, {
    key: "isObserving",
    value: function isObserving(el) {
      return el.dataset.isObserving === "true";
    }
    /**
     * 取消监听元素
     * @param {Element} el DOM元素
     */
  }, {
    key: "unobserve",
    value: function unobserve(el) {
      if (this.observer) {
        this.observer.unobserve(el);
        delete el.dataset.isObserving;
      }
    }
    /**
     * 销毁观察器
     */
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      this.element = [];
    }
  }], [{
    key: "init",
    value: function init(imgOps, obsOps) {
      return new LazyLoad2(imgOps, obsOps);
    }
  }]);
}();
if (window) {
  window.LazyLoad = LazyLoad;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = LazyLoad;
}
export {
  LazyLoad as default
};
//# sourceMappingURL=img-lazy.es.js.map
