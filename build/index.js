(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("mota"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("MotaValidation", [, , ], factory);
	else if(typeof exports === 'object')
		exports["MotaValidation"] = factory(require("react"), require("mota"), require("react-dom"));
	else
		root["MotaValidation"] = factory(root["React"], root["mota"], root["ReactDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["noop"] = noop;
/* harmony export (immutable) */ __webpack_exports__["toString"] = toString;
/* harmony export (immutable) */ __webpack_exports__["getType"] = getType;
/* harmony export (immutable) */ __webpack_exports__["isNull"] = isNull;
/* harmony export (immutable) */ __webpack_exports__["isFunction"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["isAsyncFunction"] = isAsyncFunction;
/* harmony export (immutable) */ __webpack_exports__["isGeneratorFunction"] = isGeneratorFunction;
/* harmony export (immutable) */ __webpack_exports__["isString"] = isString;
/* harmony export (immutable) */ __webpack_exports__["isNumber"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["isBoolean"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["isElement"] = isElement;
/* harmony export (immutable) */ __webpack_exports__["isText"] = isText;
/* harmony export (immutable) */ __webpack_exports__["isObject"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["isTypedArray"] = isTypedArray;
/* harmony export (immutable) */ __webpack_exports__["isDate"] = isDate;
/* harmony export (immutable) */ __webpack_exports__["isRegExp"] = isRegExp;
/* harmony export (immutable) */ __webpack_exports__["toArray"] = toArray;
/* harmony export (immutable) */ __webpack_exports__["toDate"] = toDate;
/* harmony export (immutable) */ __webpack_exports__["replace"] = replace;
/* harmony export (immutable) */ __webpack_exports__["formatDate"] = formatDate;
/* harmony export (immutable) */ __webpack_exports__["each"] = each;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["mix"] = mix;
/* harmony export (immutable) */ __webpack_exports__["final"] = final;
/* harmony export (immutable) */ __webpack_exports__["deepEqual"] = deepEqual;
/* harmony export (immutable) */ __webpack_exports__["fromTo"] = fromTo;
/* harmony export (immutable) */ __webpack_exports__["newGuid"] = newGuid;
/* harmony export (immutable) */ __webpack_exports__["setByPath"] = setByPath;
/* harmony export (immutable) */ __webpack_exports__["getByPath"] = getByPath;
/* harmony export (immutable) */ __webpack_exports__["getFunctionArgumentNames"] = getFunctionArgumentNames;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNC_REGEXP", function() { return FUNC_REGEXP; });
/* harmony export (immutable) */ __webpack_exports__["isFunctionString"] = isFunctionString;
/* harmony export (immutable) */ __webpack_exports__["toFunction"] = toFunction;
/* harmony export (immutable) */ __webpack_exports__["short"] = short;
/* harmony export (immutable) */ __webpack_exports__["firstUpper"] = firstUpper;
/* harmony export (immutable) */ __webpack_exports__["escapeRegExp"] = escapeRegExp;
/* harmony export (immutable) */ __webpack_exports__["toCamelCase"] = toCamelCase;
/* harmony export (immutable) */ __webpack_exports__["toSplitCase"] = toSplitCase;
/* harmony export (immutable) */ __webpack_exports__["htmlPrefilter"] = htmlPrefilter;
/* harmony export (immutable) */ __webpack_exports__["parseHTML"] = parseHTML;
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function noop() { }
function toString(obj) {
    return Object.prototype.toString.call(obj);
}
function getType(obj) {
    var str = toString(obj);
    return /^\[object (.+)\]$/i.exec(str)[1];
}
function isNull(obj) {
    return obj === undefined || obj === null;
}
function isFunction(obj) {
    if (isNull(obj))
        return false;
    return typeof obj === "function";
}
function isAsyncFunction(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === "AsyncFunction";
}
function isGeneratorFunction(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === "GeneratorFunction";
}
function isString(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === "String";
}
function isNumber(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === "Number";
}
function isBoolean(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === "Boolean";
}
function isElement(obj) {
    if (isNull(obj))
        return false;
    if (typeof Element !== "undefined") {
        return obj instanceof Element;
    }
    else {
        return (obj.tagName &&
            obj.nodeType &&
            obj.nodeName &&
            obj.attributes &&
            obj.ownerDocument);
    }
}
function isText(obj) {
    if (isNull(obj))
        return false;
    return obj instanceof Text;
}
function isObject(obj) {
    if (isNull(obj))
        return false;
    var type = getType(obj);
    return type === "Object" || type === "Array";
}
function isArray(obj) {
    if (isNull(obj))
        return false;
    var v1 = getType(obj) === "Array";
    var v2 = obj instanceof Array;
    var v3 = !isString(obj) && isNumber(obj.length) && isFunction(obj.splice);
    var v4 = !isString(obj) && isNumber(obj.length) && obj[0];
    return v1 || v2 || v3 || v4;
}
function isTypedArray(obj) {
    return ArrayBuffer.isView(obj) && !(obj instanceof DataView);
}
function isDate(val) {
    if (isNull(val))
        return false;
    return val instanceof Date;
}
function isRegExp(val) {
    return val instanceof RegExp;
}
function toArray(array) {
    if (isNull(array))
        return [];
    return Array.prototype.slice.call(array);
}
function toDate(val) {
    if (isNumber(val)) {
        return new Date(val);
    }
    else if (isDate(val)) {
        return val;
    }
    else if (isString(val)) {
        return new Date(replace(replace(val, "-", "/"), "T", " "));
    }
    else {
        return null;
    }
}
function replace(str, from, to) {
    if (isNull(str))
        return str;
    return str.replace(new RegExp(from, "g"), to);
}
function formatDate(value, format, dict) {
    if (isNull(format) || isNull(value))
        return String(value);
    var date = toDate(value);
    dict = dict || {};
    var placeholder = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "w+": date.getDay(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var key in placeholder) {
        if (new RegExp("(" + key + ")").test(format)) {
            var value_1 = placeholder[key];
            value_1 = dict[value_1] || value_1;
            format = format.replace(RegExp.$1, RegExp.$1.length === 1
                ? value_1
                : ("00" + value_1).substr(("" + value_1).length));
        }
    }
    return format;
}
function each(list, handler, scope) {
    if (isNull(list) || isNull(handler))
        return;
    if (isArray(list)) {
        var listLength = list.length;
        for (var i = 0; i < listLength; i++) {
            var rs = handler.call(scope || list[i], i, list[i]);
            if (!isNull(rs))
                return rs;
        }
    }
    else {
        for (var key in list) {
            var rs = handler.call(scope || list[key], key, list[key]);
            if (!isNull(rs))
                return rs;
        }
    }
}
function copy(src, dst, igonres) {
    dst = dst || (isArray(src) ? [] : {});
    Object.keys(src).forEach(function (key) {
        if (igonres && igonres.indexOf(key) > -1)
            return;
        delete dst[key];
        if (Object.getOwnPropertyDescriptor) {
            try {
                Object.defineProperty(dst, key, Object.getOwnPropertyDescriptor(src, key));
            }
            catch (ex) {
                dst[key] = src[key];
            }
        }
        else {
            dst[key] = src[key];
        }
    });
    return dst;
}
function clone(src, igonres) {
    if (isNull(src) ||
        isString(src) ||
        isNumber(src) ||
        isBoolean(src) ||
        isDate(src)) {
        return src;
    }
    if (isTypedArray(src)) {
        return src.slice();
    }
    var objClone;
    try {
        objClone = new src.constructor();
    }
    catch (_a) {
        objClone = {};
    }
    Object.keys(src).forEach(function (key) {
        var value = src[key];
        if (objClone[key] !== value && !igonres.includes(key)) {
            if (isObject(value)) {
                objClone[key] = clone(value, igonres);
            }
            else {
                objClone[key] = value;
            }
        }
    });
    ["toString", "valueOf"].forEach(function (key) {
        if (igonres.includes(key))
            return;
        final(objClone, key, src[key]);
    });
    return objClone;
}
function mix(dst, src, igonres, mode, igonreNull) {
    if (mode) {
        switch (mode) {
            case 1:
                return mix(dst.prototype, src.prototype, igonres, 0);
            case 2:
                mix(dst.prototype, src.prototype, igonres, 0);
                break;
            case 3:
                return mix(dst, src.prototype, igonres, 0);
            case 4:
                return mix(dst.prototype, src, igonres, 0);
            default:
        }
    }
    src = src || {};
    dst = dst || (isArray(src) ? [] : {});
    Object.keys(src).forEach(function (key) {
        if (igonres.includes(key))
            return;
        if (igonreNull && isNull(src[key]))
            return;
        if (isObject(src[key]) &&
            (src[key].constructor === Object ||
                src[key].constructor === Array ||
                src[key].constructor === null)) {
            dst[key] = mix(dst[key], src[key], igonres, 0, igonreNull);
        }
        else {
            dst[key] = src[key];
        }
    });
    return dst;
}
function final(obj, name, value) {
    if (arguments.length === 0)
        throw new Error("Parameter missing");
    if (arguments.length === 1) {
        return Object.keys(obj).forEach(function (name) {
            var value = obj[name];
            final(obj, name, value);
        });
    }
    if (arguments.length === 2)
        return final(obj, name, obj[name]);
    try {
        Object.defineProperty(obj, name, {
            get: function () {
                return value;
            },
            set: function () {
                throw new Error("Cannot assign to final property:" + name);
            },
            enumerable: false,
            configurable: false
        });
    }
    catch (err) {
        obj[name] = value;
    }
}
function deepEqual(a, b) {
    if (a === b)
        return true;
    if (!isObject(a) || !isObject(b))
        return false;
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length)
        return false;
    var allKeys = aKeys.concat(bKeys);
    return !allKeys.some(function (key) { return !deepEqual(a[key], b[key]); });
}
function fromTo(from, to, handler, step) {
    if (step === void 0) { step = 1; }
    step = Math.abs(step || 1);
    if (from < to) {
        for (var i = from; i <= to; i += step)
            handler(i);
    }
    else {
        for (var i = from; i >= to; i -= step)
            handler(i);
    }
}
function newGuid() {
    var s4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4());
}
function setByPath(obj, path, value) {
    if (isNull(obj) || isNull(path) || path === "") {
        return;
    }
    if (!isArray(path)) {
        path = path
            .replace(/\[/, ".")
            .replace(/\]/, ".")
            .split(".");
    }
    path.forEach(function (name, index) {
        if (isNull(name) || name.length < 1)
            return;
        if (index === path.length - 1) {
            obj[name] = value;
        }
        else {
            obj[name] = obj[name] || {};
            obj = obj[name];
        }
    });
}
function getByPath(obj, path, filter) {
    if (isNull(obj) || isNull(path) || path === "")
        return obj;
    if (!isArray(path)) {
        path = path
            .replace(/\[/, ".")
            .replace(/\]/, ".")
            .split(".");
    }
    path.forEach(function (name) {
        if (isNull(obj) || isNull(name) || name.length < 1)
            return;
        obj = filter ? filter(obj[name], name, obj) : obj[name];
    });
    return obj;
}
function getFunctionArgumentNames(fn) {
    if (!fn)
        return [];
    var src = fn.toString();
    var parts = src
        .split(")")[0]
        .split("=>")[0]
        .split("(");
    return (parts[1] || parts[0])
        .split(",")
        .map(function (name) { return (name || "").trim(); })
        .filter(function (name) { return name !== "function"; });
}
var FUNC_REGEXP = /^function\s*\(([\s\S]*?)\)\s*\{([\s\S]*?)\}$/i;
function isFunctionString(str) {
    return FUNC_REGEXP.test(str);
}
function toFunction(str) {
    var info = FUNC_REGEXP.exec(str);
    if (!info || info.length < 3)
        return;
    var params = info[1]
        .split(",")
        .filter(function (p) { return !!p; })
        .map(function (p) { return p.trim(); });
    var body = info[2];
    return new (Function.bind.apply(Function, __spreadArrays([void 0], params, [body])))();
}
function short(str, maxLength) {
    if (!str)
        return str;
    maxLength = maxLength || 40;
    var strLength = str.length;
    var trimLength = maxLength / 2;
    return strLength > maxLength
        ? str.substr(0, trimLength) + "..." + str.substr(strLength - trimLength)
        : str;
}
function firstUpper(str) {
    if (!isString(str))
        return "";
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}
function escapeRegExp(str) {
    if (!isString(str))
        return "";
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function toCamelCase(str, mode) {
    if (!isString(str))
        return "";
    if (str) {
        str = str.replace(/\-[a-z0-9]/g, function ($1) {
            return $1.slice(1).toUpperCase();
        });
        str = str.replace(/^[a-z]/i, function ($1) {
            return mode ? $1.toUpperCase() : $1.toLowerCase();
        });
    }
    return str;
}
function toSplitCase(str) {
    if (!isString(str))
        return "";
    if (str) {
        str = str.replace(/([A-Z])/g, "-$1");
        if (str[0] === "-")
            str = str.slice(1);
    }
    return str.toLowerCase();
}
function htmlPrefilter(html) {
    if (!html)
        return "";
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    return html.replace(rxhtmlTag, "<$1></$2>");
}
function parseHTML(str) {
    str = str || " ";
    var parent = document.createElement("div");
    parent.innerHTML = htmlPrefilter(str);
    var childNodes = toArray(parent.childNodes);
    childNodes.forEach(function (childNode) { return parent.removeChild(childNode); });
    return childNodes;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 验证状态
 */
var states;
(function (states) {
    /**
     * 未知
     */
    states[states["unknown"] = -3] = "unknown";
    /**
     * 未验证
     */
    states[states["untested"] = -2] = "untested";
    /**
     * 验证中
     */
    states[states["testing"] = -1] = "testing";
    /**
     * 失败
     */
    states[states["failed"] = 0] = "failed";
    /**
     * 成功
     */
    states[states["succeed"] = 1] = "succeed";
    /**
     * 成功
     */
    states[states["success"] = 1] = "success";
})(states = exports.states || (exports.states = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var isString = __webpack_require__(0).isString;
function toElement(content, props, type) {
    if (!content)
        content = "";
    return isString(content)
        ? React.createElement(type || "span", __assign({}, props), content)
        : content;
}
exports.toElement = toElement;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var states_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(2);
/**
 * 验证失败提示信息组件
 * @param {IAlertPorps} props 属性
 */
function Alert(props) {
    var validation = props.validation, results = props.results, bind = props.bind, alias = props.alias, children = props.children, _a = props.rules, rules = _a === void 0 ? children : _a, type = props.type, className = props.className;
    if (!validation)
        return utils_1.toElement();
    validation.setRule(bind, rules, alias);
    var result = results.items[bind];
    if (!result)
        return utils_1.toElement();
    var state = result.state, message = result.message;
    if (state !== states_1.states.failed || !message)
        return utils_1.toElement();
    return utils_1.toElement(message, { className: className }, type);
}
exports.Alert = Alert;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 内建验证函数集
 */
exports.builtIn = {
    /**
     * 任意值
     */
    // tslint-disable-next-line
    any: function () { return true; },
    /**
     * 非空值（包括不能是空字符串）
     */
    required: function (value) { return !!value || value === 0; },
    /**
     * 非空白字符（可视字符）
     */
    nonblank: function (value) { return !/[\s]+/.test(value); },
    /**
     * 数值
     */
    number: function (value) { return !value || !isNaN(value); },
    /**
     * 非数值
     */
    nan: function (value) { return !value || isNaN(value); },
    /**
     * 数值区间
     */
    range: function (min, max) { return function (value) {
        return !value || (value >= min && value <= max);
    }; },
    /**
     * 字符串长度
     */
    len: function (min, max, trim) { return function (value) {
        if (trim)
            value = value.trim();
        return value.length >= min && value.length <= max;
    }; },
    /**
     * 邮箱
     */
    email: function (value) { return !value || /[\S]+\@[\S]+/gi.test(value); },
    /**
     * 中文
     */
    zh: function (value) { return !value || /^[\u4e00-\u9fa5\s]{0,}$/.test(value); },
    /**
     * 英文
     */
    en: function (value) { return !value || /^[a-z\s]+$/.test(value); },
    /**
     * IP v4
     */
    ipv4: function (value) { return !value || /\d+\.\d+\.\d+\.\d+/.test(value); },
    /**
     * URL
     */
    url: function (value) { return !value || /^[\S]+\:\/\//.test(value); }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(15);
var states_1 = __webpack_require__(1);
var utils_1 = __webpack_require__(2);
var ATTR_KEY = "data-state";
var STYLE_ID = "mota-validation";
var _a = __webpack_require__(0), isArray = _a.isArray, isNull = _a.isNull;
function createStyle(global) {
    var document = global.document;
    if (!document || document.getElementById(STYLE_ID))
        return;
    var container = document.head || document.body;
    if (!container)
        return;
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = "\n  [" + ATTR_KEY + "]{transition-duration:.2s;transition-property:all;}\n  [" + ATTR_KEY + "=\"0\"]{outline:none;border-color:#f5222d;}\n  [" + ATTR_KEY + "=\"0\"]:focus{box-shadow:0 0 0 2px rgba(245, 34, 45, 0.2);}";
    container.appendChild(style);
}
createStyle(global);
/**
 * 表单组件容器
 * @param {IFieldPorps} props 属性
 */
exports.Field = FieldComponent;
function FieldComponent(props) {
    var validation = props.validation, results = props.results, bind = props.bind, rules = props.rules, alias = props.alias, children = props.children;
    if (children && isArray(children) && children.length > 0) {
        throw Error("The State(" + bind + ") can only have a sub element");
    }
    if (!validation)
        return utils_1.toElement(children);
    validation.setRule(bind, rules, alias);
    var result = results.items[bind] || {};
    if (!result)
        return utils_1.toElement(children);
    var state = result.state;
    if (isNull(state))
        state = states_1.states.unknown;
    return React.cloneElement(utils_1.toElement(children), {
        ref: function (ref) { return setState(ref, state); }
    });
}
function setState(ref, state) {
    var element = ReactDOM.findDOMNode(ref);
    if (!element)
        return;
    if (exports.Field.applyToElement)
        return exports.Field.applyToElement(element, state);
    element.setAttribute(ATTR_KEY, String(state));
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var states_1 = __webpack_require__(1);
var TestItem = /** @class */ (function () {
    function TestItem(bind, rules, state, message, pending) {
        if (rules === void 0) { rules = []; }
        if (state === void 0) { state = states_1.states.untested; }
        if (message === void 0) { message = ""; }
        if (pending === void 0) { pending = null; }
        this.bind = bind;
        this.rules = rules;
        this.state = state;
        this.message = message;
        this.pending = pending;
    }
    return TestItem;
}());
exports.TestItem = TestItem;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_boost_1 = __webpack_require__(16);
var Alert_1 = __webpack_require__(5);
exports.Alert = Alert_1.Alert;
var builtIn_1 = __webpack_require__(6);
var eify_1 = __webpack_require__(18);
var Field_1 = __webpack_require__(7);
var State_1 = __webpack_require__(20);
var states_1 = __webpack_require__(1);
var TestItem_1 = __webpack_require__(8);
var mota_1 = __webpack_require__(4);
var _a = __webpack_require__(0), getByPath = _a.getByPath, isFunction = _a.isFunction, isString = _a.isString;
var DY_TEST_FUNC_CACHE = {};
var Validation = /** @class */ (function (_super) {
    __extends(Validation, _super);
    function Validation(model, options) {
        var _this = _super.call(this) || this;
        _this.__items = {};
        _this.__watchers = {};
        _this.__aliases = {};
        _this.__time = 0;
        _this.__watchPaused = false;
        /**
         * 查询验证结果的 state 值
         * @param bind 绑定表达式，bind 省略时查询整体 state
         */
        _this.state = function (bind) {
            if (!_this.results)
                return states_1.states.unknown;
            if (!bind)
                return _this.results.state;
            if (!_this.results.items || !_this.results.items[bind]) {
                return states_1.states.unknown;
            }
            return _this.results.items[bind].state;
        };
        /**
         * 所有防抖 timers
         */
        _this.watchTimers = {};
        /**
         * 监听一个数据（表达式）
         */
        _this.watch = function (bind) {
            if (_this.__watchers[bind])
                return;
            var watcher = _this.model._observer_.watch(function () { return getByPath(_this.model, bind); }, function () {
                if (_this.__watchPaused)
                    return;
                _this.clearWatchTimer(bind);
                _this.watchTimers[bind] = setTimeout(function () {
                    if (_this.__watchPaused || !_this.watchTimers[bind])
                        return;
                    _this.test(bind);
                    _this.watchTimers[bind] = null;
                }, _this.options.debounce);
            });
            watcher.calc(false);
            _this.__watchers[bind] = watcher;
        };
        /**
         * 设定验证规则
         * @param {string} bind 要验证的数据
         * @param {IRule | Array<IRule>} rules 规则，当 rules===null 时相当于 removeRule
         * @param {string} alias 别名
         */
        _this.setRule = function (bind, rules, alias) {
            if (!bind)
                return;
            if (rules === null)
                return _this.removeRule(bind);
            if (rules && !_this.items[bind])
                _this.items[bind] = new TestItem_1.TestItem(bind);
            if (rules && _this.items[bind]) {
                _this.items[bind].rules = Array.isArray(rules) ? rules : [rules];
            }
            if (rules && !_this.results.items[bind]) {
                _this.results.items[bind] = { state: states_1.states.untested, message: "" };
            }
            if (rules && _this.options.auto !== false)
                _this.watch(bind);
            if (alias)
                _this.aliases[alias] = bind;
        };
        /**
         * 设定验证结果（一般无需主动干预结果）
         * @param {string} bind 对应的数据项
         * @param {states} state 要设定的状态
         * @param {string} message 提示信息
         * @param {boolean} update 是否立即更新组件
         */
        _this.setState = function (bind, state, message) {
            if (message === void 0) { message = ""; }
            if (!bind)
                return;
            if (_this.items[bind]) {
                _this.items[bind].state = state;
                _this.items[bind].message = message;
            }
            if (_this.results.items[bind]) {
                _this.results.items[bind].state = state;
                _this.results.items[bind].message = message;
            }
            _this.results = __assign(__assign({}, _this.results), { time: _this.time, state: _this.getState() });
        };
        /**
         * 触发验证，传入 bind 时验证指定数据项，省略参数时验证整个表单
         * @param {string} bind 要验证的数据
         * @returns {Promise<states>} 验证结果
         */
        _this.test = function (bind) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.__time++;
                        if (!(bind && isString(bind))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.testOne(bind)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.testAll()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.emit("test", this);
                        return [2 /*return*/, this.getState(bind)];
                }
            });
        }); };
        /**
         * 查询验证结果，传入 bind 时查询指定数据项，省略参数时查询整个表单
         * @param {string} bind 要验证的数据
         * @returns {Promise<states>} 验证结果
         */
        _this.getState = function (bind) {
            bind = _this.aliases[bind] || bind;
            if (bind && isString(bind)) {
                var item = _this.items[bind];
                return item ? item.state : states_1.states.unknown;
            }
            var binds = Object.keys(_this.items);
            if (binds.length < 1)
                return states_1.states.unknown;
            if (binds.some(function (bind) { return _this.getState(bind) === states_1.states.failed; })) {
                return states_1.states.failed;
            }
            if (binds.some(function (bind) { return _this.getState(bind) === states_1.states.testing; })) {
                return states_1.states.testing;
            }
            if (binds.some(function (bind) { return _this.getState(bind) === states_1.states.untested; })) {
                return states_1.states.untested;
            }
            return states_1.states.succeed;
        };
        /**
         * 暂停验证监听
         */
        _this.pauseWatch = function () {
            _this.__watchPaused = true;
        };
        /**
         * 恢复验证监听
         */
        _this.resumeWatch = function () {
            _this.__watchPaused = false;
        };
        /**
         * 启动所有验证监听
         */
        _this.sartWatch = function () {
            var binds = Object.keys(_this.items);
            binds.forEach(function (bind) { return _this.watch(bind); });
            _this.resumeWatch();
        };
        /**
         * 停止所有验证监听
         */
        _this.stopWatch = function () {
            _this.pauseWatch();
            var binds = Object.keys(_this.items);
            binds.forEach(function (bind) { return _this.unWatch(bind); });
        };
        /**
         * 重置验证状态
         */
        _this.reset = function () {
            Object.keys(_this.items).forEach(function (bind) {
                _this.setState(bind, states_1.states.untested, "");
            });
        };
        /**
         * 避开验证，希望暂时避开验证进行数据更改，可使用此方法
         * @param {Function} handler 处理函数
         */
        _this.avoid = function (handler) {
            if (!handler)
                return;
            var debounce = _this.options.debounce;
            _this.pauseWatch();
            handler();
            return new Promise(function (resolve) {
                setTimeout(function () {
                    _this.resumeWatch();
                    resolve();
                }, debounce + 16);
            });
        };
        /**
         * 销毁验证对象
         */
        _this.distory = function () {
            return _this.stopWatch();
        };
        options = __assign({ stateKey: "results", debounce: 300 }, options);
        _this.__options = options;
        _this.__model = model;
        _this.__watchPaused = false;
        _this.initResults();
        return _this;
    }
    Validation.prototype.initResults = function () {
        var stateKey = this.options.stateKey;
        var items = {}, time = 0, state = states_1.states.unknown;
        this.__model._observer_.set(stateKey, { state: state, time: time, items: items });
    };
    Object.defineProperty(Validation.prototype, "results", {
        /**
         * 验证结果
         */
        get: function () {
            var stateKey = this.options.stateKey;
            return this.model[stateKey];
        },
        /**
         * 验证结果
         */
        set: function (value) {
            var stateKey = this.options.stateKey;
            this.model[stateKey] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "options", {
        /**
         * 选项
         */
        get: function () {
            return this.__options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "Alert", {
        /**
         * 错误提示组件
         */
        get: function () {
            var _this = this;
            if (!this.__alert) {
                this.__alert = function (props) {
                    return Alert_1.Alert(__assign(__assign({}, props), { results: _this.results, validation: _this }));
                };
                mota_1.utils.defineGetter(this.__alert, "name", "Alert");
            }
            return this.__alert;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "Field", {
        /**
         * 表单组件容器
         */
        get: function () {
            var _this = this;
            if (!this.__field) {
                this.__field = function (props) {
                    return Field_1.Field(__assign(__assign({}, props), { results: _this.results, validation: _this }));
                };
                mota_1.utils.defineGetter(this.__field, "name", "Field");
            }
            return this.__field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "State", {
        /**
         * 状态组件（状态符合时显示）
         */
        get: function () {
            var _this = this;
            if (!this.__state) {
                this.__state = function (props) {
                    return State_1.State(__assign(__assign({}, props), { results: _this.results, validation: _this }));
                };
                mota_1.utils.defineGetter(this.__state, "name", "State");
            }
            return this.__state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "tests", {
        /**
         * 所有内建验证函数
         */
        get: function () {
            return builtIn_1.builtIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "states", {
        /**
         * 验证状态枚举
         */
        get: function () {
            return states_1.states;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "aliases", {
        /**
         * 别名表
         */
        get: function () {
            return this.__aliases;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "model", {
        /**
         * 当前模型
         */
        get: function () {
            return this.__model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "items", {
        /**
         * 所有验证项
         */
        get: function () {
            return this.__items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "testCount", {
        /**
         * 验证次数（将要废弃，请使用 time 属性替代）
         * @deprecated
         */
        get: function () {
            return this.__time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "time", {
        /**
         * 验证次数
         */
        get: function () {
            return this.__time;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取验证项
     * @param bind 指定的数据
     * @returns {ITestItem}
     */
    Validation.prototype.getItem = function (bind) {
        bind = this.aliases[bind] || bind;
        if (!bind)
            return;
        return this.items[bind];
    };
    Validation.prototype.clearWatchTimer = function (bind) {
        if (this.watchTimers[bind])
            clearTimeout(this.watchTimers[bind]);
    };
    /**
     * 移除一个监听表达式
     * @param bind 表达式
     */
    Validation.prototype.unWatch = function (bind) {
        var watcher = this.__watchers[bind];
        if (!watcher)
            return;
        this.model._observer_.unWatch(watcher);
        this.__watchers[bind] = null;
    };
    /**
     * 移除验证规则
     * @param bind 绑定的数据
     */
    Validation.prototype.removeRule = function (bind) {
        var _this = this;
        bind = this.aliases[bind] || bind;
        if (!bind || !this.items[bind])
            return;
        this.unWatch(bind);
        delete this.items[bind];
        return new Promise(function (resolve) {
            mota_1.nextTick(function () {
                _this.setState(bind, states_1.states.success);
                delete _this.results.items[bind];
                resolve();
            });
        });
    };
    /**
     * 清理规测
     */
    Validation.prototype.clearRules = function () {
        var _this = this;
        return Object.keys(this.items).map(function (bind) { return _this.removeRule(bind); });
    };
    Validation.prototype.getTestFuncForString = function (test) {
        if (builtIn_1.builtIn[test])
            return builtIn_1.builtIn[test];
        if (DY_TEST_FUNC_CACHE[test])
            return DY_TEST_FUNC_CACHE[test];
        try {
            // tslint:disable
            var func = /^\./.test(test)
                ? new Function("$", "return $" + test)(this.model)
                : new Function("$", "return $." + test)(builtIn_1.builtIn);
            // tslint:enable
            DY_TEST_FUNC_CACHE[test] = func;
            return DY_TEST_FUNC_CACHE[test];
        }
        catch (_a) {
            throw new Error("Invalid test: " + test);
        }
    };
    Validation.prototype.getTestFunc = function (test) {
        if (isFunction(test))
            return test;
        if (test instanceof RegExp)
            return function (value) { return test.test(value); };
        if (isString(test))
            return this.getTestFuncForString(test);
        throw new Error("Invalid test: " + test);
    };
    Validation.prototype.createTestPending = function (item, value) {
        return __awaiter(this, void 0, void 0, function () {
            var state, message, _i, _a, rule, test_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        state = true, message = "";
                        _i = 0, _a = item.rules;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        rule = _a[_i];
                        test_1 = this.getTestFunc(rule.test);
                        if (!isFunction(test_1))
                            throw new Error("Invalid test: " + test_1);
                        return [4 /*yield*/, test_1(value, this.model)];
                    case 2:
                        state = _b.sent();
                        message = state ? "" : rule.message;
                        if (!state)
                            return [3 /*break*/, 4];
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, { state: state, message: message }];
                }
            });
        });
    };
    Validation.prototype.testOne = function (bind) {
        return __awaiter(this, void 0, void 0, function () {
            var item, value, _a, state, message;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        bind = this.aliases[bind] || bind;
                        if (!bind || !this.model)
                            return [2 /*return*/];
                        item = this.getItem(bind);
                        if (!item || !item.rules)
                            return [2 /*return*/];
                        if (item.pending)
                            item.pending.abort();
                        value = getByPath(this.model, bind);
                        this.setState(bind, states_1.states.testing, "");
                        item.pending = promise_boost_1.abortable(this.createTestPending(item, value));
                        return [4 /*yield*/, item.pending];
                    case 1:
                        _a = _b.sent(), state = _a.state, message = _a.message;
                        this.setState(bind, state ? states_1.states.succeed : states_1.states.failed, message);
                        return [2 /*return*/];
                }
            });
        });
    };
    Validation.prototype.testAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.model)
                            return [2 /*return*/];
                        keys = Object.keys(this.items);
                        return [4 /*yield*/, Promise.all(keys.map(function (bind) { return _this.testOne(bind); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Validation;
}(eify_1.EventEmitter));
exports.Validation = Validation;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 将一个普通通的 promise 转换为一个有 abort 能力的 AbortablePromise
 * @param {Promise} promise 原 promise 实例
 * @returns {Promise} 增强后的 promise
 */
function abortable(promise) {
    var abort = function () { };
    var wrapper = new Promise(function (resolve, reject) {
        abort = function () { resolve = null; reject = null; };
        promise.then(function (val) { return (resolve ? resolve(val) : null); });
        promise.catch(function (err) { return (reject ? reject(err) : null); });
    });
    wrapper.abort = abort;
    return wrapper;
}
exports.abortable = abortable;
//# sourceMappingURL=abortable.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(13));
__export(__webpack_require__(21));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Alert_1 = __webpack_require__(5);
exports.Alert = Alert_1.Alert;
var builtIn_1 = __webpack_require__(6);
exports.builtIn = builtIn_1.builtIn;
exports.tests = builtIn_1.builtIn;
var Field_1 = __webpack_require__(7);
exports.Field = Field_1.Field;
var mota_1 = __webpack_require__(4);
var states_1 = __webpack_require__(1);
exports.states = states_1.states;
var TestItem_1 = __webpack_require__(8);
exports.TestItem = TestItem_1.TestItem;
var Validation_1 = __webpack_require__(9);
exports.Validation = Validation_1.Validation;
var isFunction = __webpack_require__(0).isFunction;
function createValidation(com, options) {
    if (options === void 0) { options = {}; }
    if (!com || !com.model)
        return;
    if (!com.__validation) {
        var validation_1 = new Validation_1.Validation(com.model, options);
        com.__validation = validation_1;
    }
    // 不要动下方这一行
    com.__results = com.model.results;
    return com.__validation;
}
function decorate(target, options) {
    options = __assign({}, options);
    var proto = target.prototype;
    Object.defineProperty(proto, "validation", {
        get: function () {
            return createValidation(this, options);
        }
    });
    mota_1.lifecycle.didMount.add(proto, function () {
        if (!this.validation)
            return;
        if (options.initial === true)
            this.validation.test();
    });
    mota_1.lifecycle.unmount.add(proto, function () {
        if (!this.validation)
            return;
        this.validation.distory();
    });
}
function validation(options) {
    if (isFunction(options))
        return decorate(options);
    return function (target) {
        return decorate(target, options);
    };
}
exports.validation = validation;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var abortable_1 = __webpack_require__(10);
exports.abortable = abortable_1.abortable;
exports.revokeable = abortable_1.abortable;
var Defer_1 = __webpack_require__(17);
exports.Defer = Defer_1.Defer;
//# sourceMappingURL=index.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var abortable_1 = __webpack_require__(10);
var Defer = /** @class */ (function () {
    /**
     * Defer 构造函数
     */
    function Defer() {
        var _this = this;
        this.promise = abortable_1.abortable(new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        }));
        this.abort = this.promise.abort;
    }
    return Defer;
}());
exports.Defer = Defer;
//# sourceMappingURL=Defer.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventEmitter__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return __WEBPACK_IMPORTED_MODULE_0__EventEmitter__["a"]; });



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEmitter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ntils__ = __webpack_require__(0);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
};

var EventEmitter = (function () {
    function EventEmitter(target) {
        this._listeners_ = {};
        this.on = this.addListener;
        this.off = this.removeListener;
        target = target || this;
        var emitter = target._emitter_;
        if (emitter)
            return emitter;
        Object(__WEBPACK_IMPORTED_MODULE_0_ntils__["final"])(this, "_target_", target);
        Object(__WEBPACK_IMPORTED_MODULE_0_ntils__["final"])(target, "_emitter_", this);
        this._isNative_ = this._isNativeObject(this._target_);
        this._listeners_ = this._listeners_ || {};
    }
    EventEmitter.prototype._isNativeObject = function (obj) {
        return obj.addEventListener && obj.removeEventListener && obj.dispatchEvent;
    };
    EventEmitter.prototype.addListener = function (name, listener, capture) {
        if (capture === void 0) { capture = false; }
        if (this._isNative_) {
            this._addNativeEventListener(name, listener, capture);
        }
        this._listeners_[name] = this._listeners_[name] || [];
        this._listeners_[name].push(listener);
        var maxListeners = EventEmitter._maxListeners;
        if (this._listeners_[name].length > maxListeners) {
            console.warn("The '" + name + "' event listener is not more than " + maxListeners, this);
        }
    };
    EventEmitter.prototype.removeListener = function (name, listener, capture) {
        var _this = this;
        if (capture === void 0) { capture = false; }
        if (name && listener) {
            if (this._isNative_) {
                this._removeNativeEventListener(name, listener, capture);
            }
            if (!this._listeners_[name])
                return;
            var index = this._listeners_[name].indexOf(listener);
            if (index > -1)
                this._listeners_[name].splice(index, 1);
        }
        else if (name) {
            if (this._isNative_ && this._listeners_[name]) {
                this._listeners_[name].forEach(function (_listener) {
                    _this.removeListener(name, _listener, capture);
                });
            }
            delete this._listeners_[name];
        }
        else {
            Object.keys(this._listeners_).forEach(function (name) {
                _this.removeListener(name, null, capture);
            });
            this._listeners_ = {};
        }
    };
    EventEmitter.prototype.emit = function (name, data, canBubble, cancelAble) {
        var _this = this;
        if (canBubble === void 0) { canBubble = false; }
        if (cancelAble === void 0) { cancelAble = false; }
        if (this._isNative_) {
            return this._emitNativeEvent(name, data, canBubble, cancelAble);
        }
        if (!this._listeners_[name])
            return;
        var handlers = this._listeners_[name].slice(0);
        handlers.forEach(function (handler) { return handler.call(_this._target_, data); });
    };
    EventEmitter.prototype.emitAsync = function (name, data, canBubble, cancelAble) {
        var _this = this;
        if (canBubble === void 0) { canBubble = false; }
        if (cancelAble === void 0) { cancelAble = false; }
        if (this._isNative_) {
            return this._emitNativeEvent(name, data, canBubble, cancelAble);
        }
        if (!this._listeners_[name])
            return;
        var handlers = this._listeners_[name].slice(0);
        return handlers.reduce(function (result, handler) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, result];
                    case 1:
                        if ((_a.sent()) === false)
                            return [2, false];
                        return [2, handler.call(this._target_, data)];
                }
            });
        }); }, null);
    };
    EventEmitter.prototype.emitParallel = function (name, data, canBubble, cancelAble) {
        var _this = this;
        if (canBubble === void 0) { canBubble = false; }
        if (cancelAble === void 0) { cancelAble = false; }
        if (this._isNative_) {
            return this._emitNativeEvent(name, data, canBubble, cancelAble);
        }
        if (!this._listeners_[name])
            return;
        var handlers = this._listeners_[name].slice(0);
        return Promise.all(handlers.map(function (handler) {
            return handler.call(_this._target_, data);
        }));
    };
    EventEmitter.prototype._addNativeEventListener = function (name, handler, capture) {
        if (capture === void 0) { capture = false; }
        this._target_.addEventListener(name, handler, capture);
        var descriptor = EventEmitter._events[name];
        if (descriptor)
            descriptor.addListener(this, name, handler, capture);
    };
    EventEmitter.prototype._removeNativeEventListener = function (name, handler, capture) {
        if (capture === void 0) { capture = false; }
        this._target_.removeEventListener(name, handler, capture);
        var descriptor = EventEmitter._events[name];
        if (descriptor)
            descriptor.removeListener(this, name, handler, capture);
    };
    EventEmitter.prototype._emitNativeEvent = function (name, data, canBubble, cancelAble) {
        if (canBubble === void 0) { canBubble = false; }
        if (cancelAble === void 0) { cancelAble = false; }
        if (typeof document === "undefined")
            return;
        var event = document.createEvent("HTMLEvents");
        event.initEvent(name, canBubble, cancelAble);
        Object(__WEBPACK_IMPORTED_MODULE_0_ntils__["copy"])(data, event, ["data"]);
        event.data = data;
        return this._target_.dispatchEvent(event);
    };
    EventEmitter._maxListeners = 1024;
    EventEmitter._events = {};
    EventEmitter.register = function (descriptor) {
        var name = descriptor && descriptor.name;
        if (!name)
            return;
        var names = (Object(__WEBPACK_IMPORTED_MODULE_0_ntils__["isArray"])(name) ? name : [name]);
        names.forEach(function (name) { return (EventEmitter._events[name] = descriptor); });
    };
    return EventEmitter;
}());



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(2);
var isArray = __webpack_require__(0).isArray;
/**
 * 状态组件（状态符合时显示）
 * @param {IStateProps} props 属性
 */
function State(props) {
    var validation = props.validation, results = props.results, bind = props.bind, when = props.when, alias = props.alias, children = props.children, rules = props.rules, type = props.type, className = props.className;
    if (!validation)
        return utils_1.toElement();
    validation.setRule(bind, rules, alias);
    var result = results.items[bind];
    if (!result)
        return utils_1.toElement();
    var state = result.state;
    var whenStates = isArray(when) ? when : [when];
    if (whenStates.indexOf(state) < 0)
        return utils_1.toElement();
    return utils_1.toElement(children, { className: className }, type);
}
exports.State = State;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(3);
var mota_1 = __webpack_require__(4);
var Validation_1 = __webpack_require__(9);
function useValidation(model, options) {
    var owner = react_1.useState({})[0];
    if (!owner.validation) {
        options = __assign({}, options);
        owner.validation = new Validation_1.Validation(mota_1.utils.getModelState(model), options);
    }
    react_1.useLayoutEffect(function () {
        options = __assign({}, options);
        if (!owner.validation || options.initial !== true)
            return;
        owner.validation.test();
    }, []);
    react_1.useEffect(function () { return function () {
        if (!owner.validation)
            return;
        owner.validation.distory();
    }; }, []);
    return owner.validation;
}
exports.useValidation = useValidation;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map