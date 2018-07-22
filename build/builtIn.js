"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builtIn = {
    /**
     * 任意值
     */
    any: function (value) { return true; },
    /**
     * 非空值（包括空字符串）
     */
    required: function (value) { return !!value; },
    /**
     * 非空白字符（可视字符）
     */
    nonblank: function (value) { return /[\S]+/.test(value); },
    /**
     * 数值
     */
    number: function (value) { return !value || !isNaN(value); },
    /**
     * 数值区间
     */
    range: function (min, max) {
        return function (value) { return !value || value >= min && value <= max; };
    },
    /**
     * 字符串长度
     */
    len: function (min, max) {
        return function (value) { return value.length >= min && value.length <= max; };
    },
    /**
     * 邮箱
     */
    email: function (value) { return !value || /[\S]+\@[\S]+/ig.test(value); },
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
    url: function (value) { return !value || /^[\S]+\:\/\//.test(value); },
};
//# sourceMappingURL=builtIn.js.map