"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var Result_1 = require("./Result");
var builtIn_1 = require("./builtIn");
var Alert_1 = require("./Alert");
exports.Alert = Alert_1.Alert;
var Field_1 = require("./Field");
var _a = require('ntils'), getByPath = _a.getByPath, isFunction = _a.isFunction, isString = _a.isString, each = _a.each;
var EventEmitter = require('eify');
var Validation = /** @class */ (function (_super) {
    __extends(Validation, _super);
    function Validation(component) {
        var _this = _super.call(this) || this;
        _this.__rules = {};
        _this.__results = {};
        _this.__watchers = [];
        _this.__testCount = 0;
        _this.__aliases = {};
        _this.updateComponent = function (validation) {
            if (!_this.component)
                return;
            validation = validation || _this.results;
            _this.component.setState({ validation: validation });
        };
        _this.setRule = function (bind, rule, alias) {
            var rules = Array.isArray(rule) ? rule : [rule];
            if (rules)
                _this.rules[bind] = rules;
            if (alias)
                _this.aliases[alias] = bind;
        };
        _this.setRules = function (map) {
            each(map, function (bind, rules) {
                return _this.setRule(bind, rules);
            });
        };
        _this.setResult = function (bind, result, update) {
            if (update === void 0) { update = true; }
            _this.results[bind] = result;
            if (update)
                _this.updateComponent();
        };
        _this.setResults = function (map) {
            each(map, function (bind, result) { return _this.setResult(bind, result); });
        };
        _this.test = function (bind) { return __awaiter(_this, void 0, void 0, function () {
            var results, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.__testCount++;
                        if (!(bind && isString(bind))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.testOne(bind)];
                    case 1:
                        _a = [_b.sent()];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.testAll()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        results = _a;
                        results.forEach(function (result) { return _this.setResult(result.bind, result, false); });
                        this.updateComponent(this.results);
                        this.emit('test', this);
                        return [2 /*return*/, this.status(bind)];
                }
            });
        }); };
        _this.status = function (bind) {
            bind = _this.aliases[bind] || bind;
            if (bind && isString(bind)) {
                var result = _this.results[bind];
                return result ? result.status : true;
            }
            var binds = Object.keys(_this.results);
            return !binds.some(function (bind) { return !_this.status(bind); });
        };
        _this.result = function (bind) {
            bind = _this.aliases[bind] || bind;
            if (!bind)
                return new Result_1.Result(true);
            return _this.results[bind];
        };
        _this.startWatch = function () {
            each(_this.rules, function (bind, rule) {
                var watcher = _this.model._observer_
                    .watch(function () { return getByPath(_this.model, bind); }, function () { return _this.test(bind); });
                watcher.calc(false);
                _this.__watchers.push(watcher);
            });
        };
        _this.stopWatch = function () {
            _this.__watchers.forEach(function (watcher) { return _this.model._observer_.unWatch(watcher); });
        };
        _this.distory = function () {
            _this.off('test', _this.updateComponent);
        };
        _this.__component = component;
        _this.__model = component.model;
        return _this;
    }
    Object.defineProperty(Validation.prototype, "Alert", {
        get: function () {
            var validation = this;
            if (!this.__alert) {
                this.__alert = function (props) {
                    return Alert_1.Alert(__assign({}, props, { validation: validation }));
                };
            }
            return this.__alert;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "Field", {
        get: function () {
            var validation = this;
            if (!this.__field) {
                this.__field = function (props) {
                    return Field_1.Field(__assign({}, props, { validation: validation }));
                };
            }
            return this.__field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "tests", {
        get: function () {
            return builtIn_1.builtIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "rules", {
        get: function () {
            return this.__rules;
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
    Object.defineProperty(Validation.prototype, "results", {
        get: function () {
            return this.__results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Validation.prototype, "testCount", {
        get: function () {
            return this.__testCount;
        },
        enumerable: true,
        configurable: true
    });
    Validation.prototype.testOne = function (bind) {
        return __awaiter(this, void 0, void 0, function () {
            var rules, value, _i, rules_1, rule, test, status_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bind = this.aliases[bind] || bind;
                        if (!this.model)
                            return [2 /*return*/, new Result_1.Result(true, bind)];
                        rules = this.rules[bind];
                        if (!rules || rules.length < 1)
                            return [2 /*return*/, new Result_1.Result(true, bind)];
                        value = getByPath(this.model, bind);
                        _i = 0, rules_1 = rules;
                        _a.label = 1;
                    case 1:
                        if (!(_i < rules_1.length)) return [3 /*break*/, 4];
                        rule = rules_1[_i];
                        test = isFunction(rule.test) ?
                            rule.test : builtIn_1.builtIn[rule.test];
                        return [4 /*yield*/, test(value)];
                    case 2:
                        status_1 = _a.sent();
                        if (!status_1)
                            return [2 /*return*/, new Result_1.Result(status_1, bind, rule.message)];
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, new Result_1.Result(true, bind)];
                }
            });
        });
    };
    Validation.prototype.testAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var binds;
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.model)
                    return [2 /*return*/, []];
                binds = Object.keys(this.rules);
                return [2 /*return*/, Promise.all(binds.map(function (bind) { return _this.testOne(bind); }))];
            });
        });
    };
    return Validation;
}(EventEmitter));
exports.Validation = Validation;
//# sourceMappingURL=Validation.js.map