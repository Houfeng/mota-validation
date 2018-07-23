"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mota_1 = require("mota");
var Validation_1 = require("./Validation");
exports.Validation = Validation_1.Validation;
var builtIn_1 = require("./builtIn");
exports.builtIn = builtIn_1.builtIn;
exports.tests = builtIn_1.builtIn;
var Result_1 = require("./Result");
exports.Result = Result_1.Result;
var Alert_1 = require("./Alert");
exports.Alert = Alert_1.Alert;
var isFunction = require('ntils').isFunction;
var registerMountHandler = mota_1.utils.registerMountHandler, registerUnmountHandler = mota_1.utils.registerUnmountHandler;
function getValidation(com) {
    if (!com.model)
        return;
    if (!com.__validation) {
        com.__validation = new Validation_1.Validation(com);
    }
    return com.__validation;
}
function decorate(target, options) {
    if (options === void 0) { options = {}; }
    var proto = target.prototype;
    Object.defineProperty(proto, 'validation', {
        get: function () { return getValidation(this); }
    });
    registerMountHandler(proto, function () {
        if (!this.validation)
            return;
        if (options.initial === true)
            this.validation.test();
        if (options.auto !== false)
            this.validation.startWatch();
    });
    registerUnmountHandler(proto, function () {
        if (!this.validation)
            return;
        this.validation.stopWatch();
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
;
//# sourceMappingURL=index.js.map