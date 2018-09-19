(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mota"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("MotaValidation", [, , ], factory);
	else if(typeof exports === 'object')
		exports["MotaValidation"] = factory(require("mota"), require("react"), require("react-dom"));
	else
		root["MotaValidation"] = factory(root["mota"], root["React"], root["ReactDOM"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_15__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 空函数
 */
function noop() { }
exports.noop = noop;
function toString(obj) {
    return Object.prototype.toString.call(obj);
}
exports.toString = toString;
function getType(obj) {
    var str = toString(obj);
    return (/^\[object (.+)\]$/i.exec(str))[1];
}
exports.getType = getType;
/**
 * 验证一个对象是否为NULL
 * @method isNull
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isNull(obj) {
    return obj === undefined || obj === null;
}
exports.isNull = isNull;
/**
 * 除去字符串两端的空格
 * @method trim
 * @param  {String} str 源字符串
 * @return {String}     结果字符串
 * @static
 */
function trim(str) {
    if (isNull(str))
        return str;
    if (str.trim) {
        return str.trim();
    }
    else {
        return str.replace(/(^[\\s]*)|([\\s]*$)/g, '');
    }
}
exports.trim = trim;
/**
 * 替换所有
 * @method replace
 * @param {String} str 源字符串
 * @param {String} str1 要替换的字符串
 * @param {String} str2 替换为的字符串
 * @static
 */
function replace(str, str1, str2) {
    if (isNull(str))
        return str;
    return str.replace(new RegExp(str1, 'g'), str2);
}
exports.replace = replace;
/**
 * 从字符串开头匹配
 * @method startWith
 * @param {String} str1 源字符串
 * @param {String} str2 要匹配的字符串
 * @return {Boolean} 匹配结果
 * @static
 */
function startWith(str1, str2) {
    if (isNull(str1) || isNull(str2))
        return false;
    return str1.indexOf(str2) === 0;
}
exports.startWith = startWith;
/**
 * 是否包含
 * @method contains
 * @param {String} str1 源字符串
 * @param {String} str2 检查包括字符串
 * @return {Boolean} 结果
 * @static
 */
function contains(str1, str2) {
    if (isNull(str1) || isNull(str2))
        return false;
    return str1.indexOf(str2) > -1;
}
exports.contains = contains;
/**
 * 从字符串结束匹配
 * @method endWidth
 * @param {String} str1 源字符串
 * @param {String} str2 匹配字符串
 * @return {Boolean} 匹配结果
 * @static
 */
function endWith(str1, str2) {
    if (isNull(str1) || isNull(str2))
        return false;
    return str1.indexOf(str2) === (str1.length - str2.length);
}
exports.endWith = endWith;
/**
 * 是否包含属性
 * @method hasProperty
 * @param  {Object}  obj  对象
 * @param  {String}  name 属性名
 * @return {Boolean}      结果
 * @static
 */
function has(obj, name) {
    if (isNull(obj) || isNull(name))
        return false;
    return (name in obj) || (obj.hasOwnProperty(name));
}
exports.has = has;
exports.hasProperty = has;
/**
 * 验证一个对象是否为Function
 * @method isFunction
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isFunction(obj) {
    if (isNull(obj))
        return false;
    return typeof obj === 'function';
}
exports.isFunction = isFunction;
/**
 * 验证一个对象是否为 AsyncFunction
 * @method isAsyncFunction
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isAsyncFunction(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'AsyncFunction';
}
exports.isAsyncFunction = isAsyncFunction;
/**
 * 验证一个对象是否为 GeneratorFunction
 * @method isGeneratorFunction
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isGeneratorFunction(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'GeneratorFunction';
}
exports.isGeneratorFunction = isGeneratorFunction;
/**
 * 验证一个对象是否为String
 * @method isString
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isString(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'String';
}
exports.isString = isString;
/**
 * 验证一个对象是否为Number
 * @method isNumber
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isNumber(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'Number';
}
exports.isNumber = isNumber;
/**
 * 验证一个对象是否为Boolean
 * @method isBoolean
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isBoolean(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'Boolean';
}
exports.isBoolean = isBoolean;
/**
 * 验证一个对象是否为HTML Element
 * @method isElement
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isElement(obj) {
    if (isNull(obj))
        return false;
    if (window.Element) {
        return obj instanceof Element;
    }
    else {
        return (obj.tagName && obj.nodeType &&
            obj.nodeName && obj.attributes &&
            obj.ownerDocument);
    }
}
exports.isElement = isElement;
/**
 * 验证一个对象是否为HTML Text Element
 * @method isText
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isText(obj) {
    if (isNull(obj))
        return false;
    return obj instanceof Text;
}
exports.isText = isText;
/**
 * 验证一个对象是否为Object
 * @method isObject
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isObject(obj) {
    if (isNull(obj))
        return false;
    var type = getType(obj);
    return type === 'Object' || type === 'Array';
}
exports.isObject = isObject;
/**
 * 验证一个对象是否为Array或伪Array
 * @method isArray
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isArray(obj) {
    if (isNull(obj))
        return false;
    var v1 = getType(obj) === 'Array';
    var v2 = obj instanceof Array;
    var v3 = !isString(obj) && isNumber(obj.length) && isFunction(obj.splice);
    var v4 = !isString(obj) && isNumber(obj.length) && obj[0];
    return v1 || v2 || v3 || v4;
}
exports.isArray = isArray;
/**
 * 验证是不是一个日期对象
 * @method isDate
 * @param {Object} val   要检查的对象
 * @return {Boolean}           结果
 * @static
 */
function isDate(val) {
    if (isNull(val))
        return false;
    return val instanceof Date;
}
exports.isDate = isDate;
/**
 * 验证是不是一个正则对象
 * @method isDate
 * @param {Object} val   要检查的对象
 * @return {Boolean}           结果
 * @static
 */
function isRegexp(val) {
    return val instanceof RegExp;
}
exports.isRegexp = isRegexp;
/**
 * 转换为数组
 * @method toArray
 * @param {Array|Object} array 伪数组
 * @return {Array} 转换结果数组
 * @static
 */
function toArray(array) {
    if (isNull(array))
        return [];
    return Array.prototype.slice.call(array);
}
exports.toArray = toArray;
/**
 * 转为日期格式
 * @method toDate
 * @param {Number|String} val 日期字符串或整型数值
 * @return {Date} 日期对象
 * @static
 */
function toDate(val) {
    if (isNumber(val))
        return new Date(val);
    else if (isString(val))
        return new Date(replace(replace(val, '-', '/'), 'T', ' '));
    else if (isDate(val))
        return val;
    else
        return null;
}
exports.toDate = toDate;
/**
 * 遍历一个对像或数组
 * @method each
 * @param  {Object or Array}   obj  要遍历的数组或对象
 * @param  {Function} fn            处理函数
 * @return {void}                   无返回值
 * @static
 */
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
exports.each = each;
/**
 * 格式化日期
 * @method formatDate
 * @param {Date|String|Number} date 日期
 * @param {String} format 格式化字符串
 * @param {object} dict 反译字典
 * @return {String} 格式化结果
 * @static
 */
function formatDate(date, format, dict) {
    if (isNull(format) || isNull(date))
        return date;
    date = toDate(date);
    dict = dict || {};
    var placeholder = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'w+': date.getDay(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var key in placeholder) {
        if (new RegExp('(' + key + ')').test(format)) {
            var value = placeholder[key];
            value = dict[value] || value;
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? value : ('00' + value).substr(('' + value).length));
        }
    }
    return format;
}
exports.formatDate = formatDate;
/**
 * 拷贝对象
 * @method copy
 * @param {Object} src 源对象
 * @param {Object} dst 目标对象
 * @static
 */
function copy(src, dst, igonres) {
    dst = dst || (isArray(src) ? [] : {});
    each(src, function (key) {
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
exports.copy = copy;
/**
 * 深度克隆对象
 * @method clone
 * @param {Object} src 源对象
 * @return {Object} 新对象
 * @static
 */
function clone(src, igonres) {
    if (isNull(src) ||
        isString(src) ||
        isNumber(src) ||
        isBoolean(src) ||
        isDate(src)) {
        return src;
    }
    var objClone = src;
    try {
        objClone = new src.constructor();
    }
    catch (ex) { }
    each(src, function (key, value) {
        if (objClone[key] != value && !contains(igonres, key)) {
            if (isObject(value)) {
                objClone[key] = clone(value, igonres);
            }
            else {
                objClone[key] = value;
            }
        }
    });
    ['toString', 'valueOf'].forEach(function (key) {
        if (contains(igonres, key))
            return;
        final(objClone, key, src[key]);
    });
    return objClone;
}
exports.clone = clone;
/**
 * 合并对象
 * @method mix
 * @return 合并后的对象
 * @param {Object} dst 目标对象
 * @param {Object} src 源对象
 * @param {Array} igonres 忽略的属性名,
 * @param {Number} mode 模式
 */
function mix(dst, src, igonres, mode, igonreNull) {
    //根据模式来判断，默认是Obj to Obj的  
    if (mode) {
        switch (mode) {
            case 1:// proto to proto  
                return mix(dst.prototype, src.prototype, igonres, 0);
            case 2:// object to object and proto to proto  
                mix(dst.prototype, src.prototype, igonres, 0);
                break; // pass through  
            case 3:// proto to static  
                return mix(dst, src.prototype, igonres, 0);
            case 4:// static to proto  
                return mix(dst.prototype, src, igonres, 0);
            default: // object to object is what happens below  
        }
    }
    //---
    src = src || {};
    dst = dst || (isArray(src) ? [] : {});
    keys(src).forEach(function (key) {
        if (contains(igonres, key))
            return;
        if (igonreNull && isNull(src[key]))
            return;
        if (isObject(src[key]) &&
            (src[key].constructor == Object ||
                src[key].constructor == Array ||
                src[key].constructor == null)) {
            dst[key] = mix(dst[key], src[key], igonres, 0, igonreNull);
        }
        else {
            dst[key] = src[key];
        }
    });
    return dst;
}
exports.mix = mix;
/**
 * 定义不可遍历的属性
 **/
function final(obj, name, value) {
    if (arguments.length < 1)
        throw new Error('Parameter missing');
    if (arguments.length < 2) {
        return each(obj, function (name, value) {
            final(obj, name, value);
        });
    }
    if (arguments.length < 3)
        return final(obj, name, obj[name]);
    try {
        Object.defineProperty(obj, name, {
            get: function () {
                return value;
            },
            set: function () {
                throw new Error('Cannot assign to final property:' + name);
            },
            enumerable: false,
            configurable: false //不能重写定义
        });
    }
    catch (err) {
        obj[name] = value;
    }
}
exports.final = final;
/**
 * 获取所有 key
 */
function keys(obj) {
    if (Object.keys)
        return Object.keys(obj);
    var keys = [];
    each(obj, function (key) {
        keys.push(key);
    });
    return keys;
}
exports.keys = keys;
/**
 * 创建一个对象
 */
function create(proto, props) {
    if (Object.create)
        return Object.create(proto, props);
    function Cotr() { }
    Cotr.prototype = proto;
    var obj = new Cotr();
    if (props)
        copy(props, obj);
    return obj;
}
exports.create = create;
/**
 * 设置 proto
 * 在不支持 setPrototypeOf 也不支持 __proto__ 的浏览器
 * 中，会采用 copy 方式
 */
function setPrototypeOf(obj, proto) {
    if (Object.setPrototypeOf) {
        return Object.setPrototypeOf(obj, proto || create(null));
    }
    else {
        if (!('__proto__' in Object))
            copy(proto, obj);
        obj.__proto__ = proto;
    }
}
exports.setPrototypeOf = setPrototypeOf;
/**
 * 获取 proto
 */
function getPrototypeOf(obj) {
    if (obj.__proto__)
        return obj.__proto__;
    if (Object.getPrototypeOf)
        return Object.getPrototypeOf(obj);
    if (obj.constructor)
        return obj.constructor.prototype;
}
exports.getPrototypeOf = getPrototypeOf;
/**
 * 是否深度相等
 */
function deepEqual(a, b) {
    if (a === b)
        return true;
    if (!isObject(a) || !isObject(b))
        return false;
    var aKeys = keys(a);
    var bKeys = keys(b);
    if (aKeys.length !== bKeys.length)
        return false;
    var allKeys = aKeys.concat(bKeys);
    var checkedMap = create(null);
    var result = true;
    each(allKeys, function (i, key) {
        if (checkedMap[key])
            return;
        if (!deepEqual(a[key], b[key]))
            result = false;
        checkedMap[key] = true;
    });
    return result;
}
exports.deepEqual = deepEqual;
/**
 * 从一个数值循环到别一个数
 * @param {number} fromNum 开始数值
 * @param {Number} toNum 结束数值
 * @param {Number} step 步长值
 * @param {function} handler 执行函数
 * @returns {void} 无返回
 */
function fromTo(fromNum, toNum, step, handler) {
    if (!handler)
        handler = [step, step = handler][0];
    step = Math.abs(step || 1);
    if (fromNum < toNum) {
        for (var i = fromNum; i <= toNum; i += step)
            handler(i);
    }
    else {
        for (var i = fromNum; i >= toNum; i -= step)
            handler(i);
    }
}
exports.fromTo = fromTo;
/**
 * 生成一个Guid
 * @method newGuid
 * @return {String} GUID字符串
 * @static
 */
function newGuid() {
    function s4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4());
}
exports.newGuid = newGuid;
/**
 * 对象变换
 **/
function map(list, fn) {
    var buffer = isArray(list) ? [] : {};
    each(list, function (name, value) {
        buffer[name] = fn(name, value);
    });
    return buffer;
}
exports.map = map;
/**
 * 通过路径设置属性值
 */
function setByPath(obj, path, value) {
    if (isNull(obj) || isNull(path) || path === '') {
        return;
    }
    if (!isArray(path)) {
        path = path.replace(/\[/, '.').replace(/\]/, '.').split('.');
    }
    each(path, function (index, name) {
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
exports.setByPath = setByPath;
/**
 * 通过路径获取属性值
 */
function getByPath(obj, path, filter) {
    if (isNull(obj) || isNull(path) || path === '')
        return obj;
    if (!isArray(path)) {
        path = path.replace(/\[/, '.').replace(/\]/, '.').split('.');
    }
    each(path, function (index, name) {
        if (isNull(obj) || isNull(name) || name.length < 1)
            return;
        obj = filter ? filter(obj[name], name, obj) : obj[name];
    });
    return obj;
}
exports.getByPath = getByPath;
/**
 * 数组去重
 **/
function unique(array) {
    if (isNull(array))
        return array;
    var newArray = [];
    each(array, function (i, value) {
        if (newArray.indexOf(value) > -1)
            return;
        newArray.push(value);
    });
    return newArray;
}
exports.unique = unique;
/**
 * 解析 function 的参数列表
 **/
function getFunctionArgumentNames(fn) {
    if (!fn)
        return [];
    var src = fn.toString();
    var parts = src.split(')')[0].split('=>')[0].split('(');
    return (parts[1] || parts[0]).split(',').map(function (name) {
        return trim(name);
    }).filter(function (name) {
        return name != 'function';
    });
}
exports.getFunctionArgumentNames = getFunctionArgumentNames;
/**
 * 缩短字符串
 */
function short(str, maxLength) {
    if (!str)
        return str;
    maxLength = maxLength || 40;
    var strLength = str.length;
    var trimLength = maxLength / 2;
    return strLength > maxLength ?
        str.substr(0, trimLength) + '...' + str.substr(strLength - trimLength) :
        str;
}
exports.short = short;
/**
 * 首字母大写
 */
function firstUpper(str) {
    if (!isString(str))
        return '';
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}
exports.firstUpper = firstUpper;
/**
 * 编码正则字符串
 */
function escapeRegExp(str) {
    if (!isString(str))
        return '';
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
exports.escapeRegExp = escapeRegExp;
/**
  * 将字符串转成「驼峰」式
  * @param {string} str 原始字符串
  * @param {number} mode 1 大驼峰，0 小驼峰
  * @return {string} 转换后的字符串
  */
function toCamelCase(str, mode) {
    if (!isString(str))
        return '';
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
exports.toCamelCase = toCamelCase;
/**
 * 将字符串转成分隔形式
 * @param {string} str 原始字符串
 * @return {string} 转换后的字符串
 */
function toSplitCase(str) {
    if (!isString(str))
        return '';
    if (str) {
        str = str.replace(/([A-Z])/g, '-$1');
        if (str[0] == '-')
            str = str.slice(1);
    }
    return str.toLowerCase();
}
exports.toSplitCase = toSplitCase;
function htmlPrefilter(html) {
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    return html.replace(rxhtmlTag, '<$1></$2>');
}
exports.htmlPrefilter = htmlPrefilter;
/**
 * 解析字符串为 dom
 * @param {string} str 字符串
 * @returns {HTMLNode} 解析后的 DOM
 */
function parseHTML(str) {
    str = str || ' ';
    var parent = document.createElement('div');
    parent.innerHTML = htmlPrefilter(trim(str));
    var childNodes = toArray(parent.childNodes);
    //先 clone 一份再通过 innerHTML 清空
    //否则 IE9 下，清空时会导不通过返回的 DOM 没有子结点
    // if (firstNode) firstNode = firstNode.cloneNode(true);
    // window._NPH_.innerHTML = '';
    each(childNodes, function (index, childNode) {
        parent.removeChild(childNode);
    });
    return childNodes;
}
exports.parseHTML = parseHTML;
//# sourceMappingURL=index.js.map

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

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var isString = __webpack_require__(0).isString;
function toElement(content) {
    if (!content)
        content = "";
    return isString(content)
        ? React.createElement("span", {
            children: content
        })
        : content;
}
exports.toElement = toElement;


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
     * 非空值（包括空字符串）
     */
    required: function (value) { return !!value; },
    /**
     * 非空白字符（可视字符）
     */
    nonblank: function (value) { return !/[\s]+/.test(value); },
    /**
     * 数值
     */
    number: function (value) { return !value || !isNaN(value); },
    /**
     * 数值区间
     */
    range: function (min, max) { return function (value) {
        return !value || (value >= min && value <= max);
    }; },
    /**
     * 字符串长度
     */
    len: function (min, max) { return function (value) {
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(2);
var states_1 = __webpack_require__(1);
/**
 * 验证失败提示信息组件
 * @param {IAlertPorps} props 属性
 */
function Alert(props) {
    var validation = props.validation, bind = props.bind, alias = props.alias, children = props.children, _a = props.rules, rules = _a === void 0 ? children : _a;
    if (!validation)
        return utils_1.toElement();
    if (rules)
        validation.setRule(bind, rules, alias);
    var item = validation.item(bind);
    if (!item || item.state !== states_1.states.failed || !item.message) {
        return utils_1.toElement();
    }
    return utils_1.toElement(item.message);
}
exports.Alert = Alert;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var ReactDOM = __webpack_require__(15);
var utils_1 = __webpack_require__(2);
var states_1 = __webpack_require__(1);
var _a = __webpack_require__(0), isArray = _a.isArray, isNull = _a.isNull;
var attrKey = "data-state";
function createStyle() {
    var style = document.createElement("style");
    style.innerHTML = "[" + attrKey + "]{\n    transition-duration:.2s;transition-property:box-shadow;\n  }\n  [" + attrKey + "=\"0\"]{\n    outline:none;box-shadow:0 0 2px 1px rgba(255,0,0,.8);\n  }";
    var container = document.head || document.body;
    container.appendChild(style);
}
createStyle();
function setState(ref, state) {
    var element = ReactDOM.findDOMNode(ref);
    if (!element)
        return;
    element.setAttribute(attrKey, String(state));
}
/**
 * 表单组件容器
 * @param {IFieldPorps} props 属性
 */
function Field(props) {
    var validation = props.validation, bind = props.bind, rules = props.rules, alias = props.alias, children = props.children;
    if (children && isArray(children) && children.length > 0) {
        throw Error("The State(" + bind + ") can only have a sub element");
    }
    if (!validation)
        return utils_1.toElement(children);
    if (rules)
        validation.setRule(bind, rules, alias);
    var state = validation.state(bind);
    if (isNull(state))
        state = states_1.states.unknown;
    return React.cloneElement(utils_1.toElement(children), {
        ref: function (ref) { return setState(ref, state); }
    });
}
exports.Field = Field;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mota_1 = __webpack_require__(11);
var Validation_1 = __webpack_require__(12);
exports.Validation = Validation_1.Validation;
var builtIn_1 = __webpack_require__(5);
exports.builtIn = builtIn_1.builtIn;
exports.tests = builtIn_1.builtIn;
var TestItem_1 = __webpack_require__(4);
exports.TestItem = TestItem_1.TestItem;
var Alert_1 = __webpack_require__(6);
exports.Alert = Alert_1.Alert;
var Field_1 = __webpack_require__(8);
exports.Field = Field_1.Field;
var states_1 = __webpack_require__(1);
exports.states = states_1.states;
var isFunction = __webpack_require__(0).isFunction;
var registerMountHandler = mota_1.utils.registerMountHandler, registerUnmountHandler = mota_1.utils.registerUnmountHandler;
function getValidation(com, options) {
    if (options === void 0) { options = {}; }
    if (!com.model)
        return;
    if (!com.__validation) {
        com.__validation = new Validation_1.Validation(com, options);
    }
    return com.__validation;
}
function decorate(target, options) {
    if (options === void 0) { options = {}; }
    var proto = target.prototype;
    Object.defineProperty(proto, "validation", {
        get: function () {
            return getValidation(this, options);
        }
    });
    registerMountHandler(proto, function () {
        if (!this.validation)
            return;
        if (options.initial === true)
            this.validation.test();
    });
    registerUnmountHandler(proto, function () {
        if (!this.validation)
            return;
        this.validation.distory();
    });
}
function validation(options) {
    if (options === void 0) { options = {}; }
    if (isFunction(options))
        return decorate(options);
    return function (target) {
        return decorate(target, options);
    };
}
exports.validation = validation;
exports.default = validation;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var promise_boost_1 = __webpack_require__(13);
var TestItem_1 = __webpack_require__(4);
var builtIn_1 = __webpack_require__(5);
var Alert_1 = __webpack_require__(6);
exports.Alert = Alert_1.Alert;
var Field_1 = __webpack_require__(8);
var State_1 = __webpack_require__(16);
var states_1 = __webpack_require__(1);
var EventEmitter_1 = __webpack_require__(17);
var _a = __webpack_require__(0), getByPath = _a.getByPath, isFunction = _a.isFunction, isString = _a.isString;
var Validation = /** @class */ (function (_super) {
    __extends(Validation, _super);
    function Validation(component, options) {
        var _this = _super.call(this) || this;
        _this.__items = {};
        _this.__watchers = {};
        _this.__aliases = {};
        _this.__testCount = 0;
        _this.__watchPaused = false;
        _this.updateComponent = function (validation) {
            if (!_this.component)
                return;
            validation = validation || _this.items;
            _this.component.setState({ validation: validation });
        };
        /**
         * 设定验证规则
         * @param {string} bind 要验证的数据
         * @param {IRule | Array<IRule>} rules 规则
         * @param {string} alias 别名
         */
        _this.setRule = function (bind, rules, alias) {
            if (!bind)
                return;
            if (!_this.items[bind])
                _this.items[bind] = new TestItem_1.TestItem(bind);
            if (rules)
                _this.items[bind].rules = Array.isArray(rules) ? rules : [rules];
            if (alias)
                _this.aliases[alias] = bind;
            if (_this.options.auto !== false)
                _this.watch(bind);
        };
        /**
         * 设定验证结果（一般无需主动干预结果）
         * @param {string} bind 对应的数据项
         * @param {states} state 要设定的状态
         * @param {string} message 提示信息
         * @param {boolean} update 是否立即更新组件
         */
        _this.setState = function (bind, state, message, update) {
            if (message === void 0) { message = ""; }
            if (update === void 0) { update = true; }
            if (!bind)
                return;
            _this.items[bind].state = state;
            _this.items[bind].message = message;
            if (update)
                _this.updateComponent();
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
                        this.__testCount++;
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
                        return [2 /*return*/, this.state(bind)];
                }
            });
        }); };
        /**
         * 查询验证结果，传入 bind 时查询指定数据项，省略参数时查询整个表单
         * @param {string} bind 要验证的数据
         * @returns {Promise<states>} 验证结果
         */
        _this.state = function (bind) {
            bind = _this.aliases[bind] || bind;
            if (bind && isString(bind)) {
                var item = _this.items[bind];
                return item ? item.state : states_1.states.unknown;
            }
            var binds = Object.keys(_this.items);
            if (binds.length < 1)
                return states_1.states.unknown;
            if (binds.some(function (bind) { return _this.state(bind) === states_1.states.failed; })) {
                return states_1.states.failed;
            }
            if (binds.some(function (bind) { return _this.state(bind) === states_1.states.testing; })) {
                return states_1.states.testing;
            }
            if (binds.some(function (bind) { return _this.state(bind) === states_1.states.untested; })) {
                return states_1.states.untested;
            }
            return states_1.states.succeed;
        };
        _this.pauseWatch = function () {
            _this.__watchPaused = true;
        };
        _this.resumeWatch = function () {
            _this.__watchPaused = false;
        };
        _this.watch = function (bind) {
            if (_this.__watchers[bind])
                return;
            var watchTimer = null;
            var watcher = _this.model._observer_.watch(function () { return getByPath(_this.model, bind); }, function () {
                if (_this.__watchPaused)
                    return;
                if (watchTimer)
                    clearTimeout(watchTimer);
                watchTimer = setTimeout(function () {
                    if (!watchTimer)
                        return;
                    _this.test(bind);
                    watchTimer = null;
                }, _this.options.debounce || 300);
            });
            watcher.calc(false);
            _this.__watchers[bind] = watcher;
        };
        _this.sartWatch = function () {
            var binds = Object.keys(_this.items);
            binds.forEach(function (bind) { return _this.watch(bind); });
            _this.resumeWatch();
        };
        _this.stopWatch = function () {
            _this.pauseWatch();
            var binds = Object.keys(_this.items);
            binds.forEach(function (bind) { return _this.unWatch(bind); });
        };
        _this.reset = function () {
            Object.keys(_this.items).forEach(function (bind) {
                _this.setState(bind, states_1.states.untested, null, false);
            });
            _this.updateComponent();
        };
        /**
         * 销毁
         */
        _this.distory = function () {
            _this.off("test", _this.updateComponent);
            _this.stopWatch();
        };
        _this.__options = options;
        _this.__component = component;
        _this.__model = component.model;
        _this.__watchPaused = false;
        return _this;
    }
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
                    return Alert_1.Alert(__assign({}, props, { validation: _this }));
                };
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
                    return Field_1.Field(__assign({}, props, { validation: _this }));
                };
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
                    return State_1.State(__assign({}, props, { validation: _this }));
                };
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
        get: function () {
            return this.__aliases;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "model", {
        get: function () {
            return this.__model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "component", {
        get: function () {
            return this.__component;
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
         * 验证次数
         */
        get: function () {
            return this.__testCount;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取验证项
     * @param bind 指定的数据
     * @returns {ITestItem}
     */
    Validation.prototype.item = function (bind) {
        bind = this.aliases[bind] || bind;
        if (!bind)
            return;
        return this.items[bind];
    };
    /**
     * 移除验证规则
     * @param bind 绑定的数据
     */
    Validation.prototype.removeRule = function (bind) {
        bind = this.aliases[bind] || bind;
        if (!bind)
            return;
        this.items[bind] = null;
        delete this.items[bind];
    };
    /**
     * 清理规测
     */
    Validation.prototype.clearRules = function () {
        var _this = this;
        Object.keys(this.items).forEach(function (bind) {
            _this.removeRule(bind);
        });
    };
    Validation.prototype.createTestPending = function (item, value) {
        return __awaiter(this, void 0, void 0, function () {
            var state, message, _i, _a, rule, test;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        state = true, message = "";
                        _i = 0, _a = item.rules;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        rule = _a[_i];
                        test = isFunction(rule.test)
                            ? rule.test
                            : builtIn_1.builtIn[rule.test];
                        if (!isFunction(test)) {
                            throw new Error("Invalid test function: " + rule.test);
                        }
                        return [4 /*yield*/, test(value)];
                    case 2:
                        state = _b.sent();
                        message = rule.message;
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
                        item = this.item(bind);
                        if (!item || !item.rules || item.rules.length < 1)
                            return [2 /*return*/];
                        if (item.pending)
                            item.pending.abort();
                        value = getByPath(this.model, bind);
                        this.setState(bind, states_1.states.testing);
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
    Validation.prototype.unWatch = function (bind) {
        var watcher = this.__watchers[bind];
        if (!watcher)
            return;
        this.model._observer_.unWatch(watcher);
        this.__watchers[bind] = null;
    };
    return Validation;
}(EventEmitter_1.EventEmitter));
exports.Validation = Validation;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var abortable_1 = __webpack_require__(3);
exports.abortable = abortable_1.abortable;
exports.revokeable = abortable_1.abortable;
var Defer_1 = __webpack_require__(14);
exports.Defer = Defer_1.Defer;
//# sourceMappingURL=index.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var abortable_1 = __webpack_require__(3);
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
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
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
    var validation = props.validation, bind = props.bind, when = props.when, alias = props.alias, children = props.children, rules = props.rules;
    if (!validation)
        return utils_1.toElement();
    if (rules)
        validation.setRule(bind, rules, alias);
    var item = validation.item(bind);
    if (!item)
        return utils_1.toElement();
    var whenStates = isArray(when) ? when : [when];
    if (whenStates.indexOf(item.state) < 0)
        return utils_1.toElement();
    return utils_1.toElement(children);
}
exports.State = State;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var _a = __webpack_require__(0), final = _a.final, isArray = _a.isArray, copy = _a.copy, each = _a.each;
/**
 * 事件触发器基类
 */
var EventEmitter = /** @class */ (function () {
    /**
     * 构建一个一个事修的触发器对象
     * @param {object} target 将代理的目标对象可以省略
     * @returns {void} 无返回
     */
    function EventEmitter(target) {
        target = target || this;
        var emitter = target._emitter_;
        if (emitter)
            return emitter;
        final(this, '_target_', target);
        final(target, '_emitter_', this);
        this._isNative_ = this._isNativeObject(this._target_);
        this._listeners_ = this._listeners_ || {};
        this.on = this.$on = this.$addListener = this.addListener;
        this.off = this.$off = this.$removeListener = this.removeListener;
        this.$emit = this.emit;
    }
    /**
     * 检查是否原生支持事件
     * @param {object} obj 对象
     * @returns {void} 检查结果
     */
    EventEmitter.prototype._isNativeObject = function (obj) {
        return obj.addEventListener && obj.removeEventListener && obj.dispatchEvent;
    };
    /**
     * 添加一个事件监听函数
     * @param {string} name 事件名称
     * @param {function} listener 事件处理函数
     * @param {capture} capture 是否是捕获阶段事件(只在代理 dom 对象时有效)
     * @returns {void} 无返回
     */
    EventEmitter.prototype.addListener = function (name, listener, capture) {
        if (this._isNative_) {
            this._addNativeEventListener(name, listener, capture);
        }
        this._listeners_[name] = this._listeners_[name] || [];
        this._listeners_[name].push(listener);
        var maxListeners = EventEmitter._maxListeners;
        if (this._listeners_[name].length > maxListeners) {
            console.warn("The '" + name + "' event listener is not more than " + maxListeners);
        }
    };
    /**
     * 移除「一个/一组/所有」事件监听函数
     * @param {string} name 事件名称
     * @param {function} listener 事件处理函数
     * @param {capture} capture 是否是捕获阶段事件(只在代理 dom 对象时有效)
     * @returns {void} 无返回
     */
    EventEmitter.prototype.removeListener = function (name, listener, capture) {
        if (name && listener) {
            if (this._isNative_) {
                this._removeNativeEventListener(name, listener, capture);
            }
            if (!this._listeners_[name])
                return;
            var index = this._listeners_[name].indexOf(listener);
            this._listeners_[name].splice(index, 1);
        }
        else if (name) {
            if (this._isNative_ && this._listeners_[name]) {
                this._listeners_[name].forEach(function (_listener) {
                    this.removeListener(name, _listener, capture);
                }, this);
            }
            delete this._listeners_[name];
        }
        else {
            each(this._listeners_, function (name) {
                this.removeListener(name, null, capture);
            }, this);
            this._listeners_ = {};
        }
    };
    /**
     * 触发自身的一个事件
     * @param {string} name 事件名称
     * @param {object} data 传递的对象
     * @param {string} canBubble 能否冒泡(只在代理 dom 对象时有效)
     * @param {object} cancelAble 能否取消(只在代理 dom 对象时有效)
     * @returns {void} 无返回
     */
    EventEmitter.prototype.emit = function (name, data, canBubble, cancelAble) {
        if (this._isNative_) {
            return this._emitNativeEvent(name, data, canBubble, cancelAble);
        }
        if (!this._listeners_[name])
            return;
        var stopPropagation = false;
        this._listeners_[name].forEach(function (handler) {
            var rs = handler.call(this._target_, data);
            if (rs === false)
                stopPropagation = true;
        }, this);
        return stopPropagation;
    };
    /**
     * 添加 DOM 元素事件
     * @param {string} name 事件名称
     * @param {function} listener 事件处理函数
     * @param {capture} capture 是否是捕获阶段事件
     * @returns {void} 无返回
     */
    EventEmitter.prototype._addNativeEventListener = function (name, listener, capture) {
        this._target_.addEventListener(name, listener, capture);
        //如果存在已注册的自定义 “组合事件”
        var descriptor = EventEmitter._events[name];
        if (descriptor) {
            descriptor.addListener = descriptor.addListener || descriptor.on;
            descriptor.addListener(this, name, listener, capture);
        }
    };
    /**
     * 移除 DOM 元素事件
     * @param {string} name 事件名称
     * @param {function} listener 事件处理函数
     * @param {capture} capture 是否是捕获阶段事件
     * @returns {void} 无返回
     */
    EventEmitter.prototype._removeNativeEventListener = function (name, listener, capture) {
        this._target_.removeEventListener(name, listener, capture);
        //如果存在已注册的自定义 “组合事件”
        var descriptor = EventEmitter._events[name];
        if (descriptor) {
            descriptor.removeListener = descriptor.removeListener || descriptor.off;
            descriptor.removeListener(this, name, listener, capture);
        }
    };
    /**
     * 触发 DOM 元素事件
     * @param {string} name 事件名称
     * @param {object} data 传递的对象
     * @param {string} canBubble 能否冒泡
     * @param {object} cancelAble 能否取消
     * @returns {void} 无返回
     */
    EventEmitter.prototype._emitNativeEvent = function (name, data, canBubble, cancelAble) {
        var event = document.createEvent('HTMLEvents');
        event.initEvent(name, canBubble, cancelAble);
        copy(data, event, ['data']);
        event.data = data;
        return this._target_.dispatchEvent(event);
    };
    return EventEmitter;
}());
//最多添加多少个 listener
EventEmitter._maxListeners = 1024;
//所有自定义事件
EventEmitter._events = [];
/**
 * 注册自定义事件(只在代理 dom 对象时有效)
 * @param {object} descriptor 事件定义
 * @returns {void} 无返回
 */
EventEmitter.register = function (descriptor) {
    var names = descriptor.name;
    if (!names)
        return;
    if (!isArray(names))
        names = names.split(',');
    names.forEach(function (name) {
        this._events[name] = descriptor;
    }, this);
};
module.exports = EventEmitter;
//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map