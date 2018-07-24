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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var mota_1 = require("mota");
var ViewModel_1 = __importDefault(require("./ViewModel"));
var __1 = require("../");
require("./index.less");
var root = document.getElementById('root');
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hack = function () {
            _this.validation.setResult('params.email', { status: false, message: 'aaa' });
        };
        _this.submit = function () { return __awaiter(_this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validation.test()];
                    case 1:
                        status = _a.sent();
                        if (!status)
                            return [2 /*return*/];
                        this.model.submit();
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    App.prototype.render = function () {
        var _a = this.validation, Alert = _a.Alert, Field = _a.Field, tests = _a.tests;
        return React.createElement("div", null,
            React.createElement("div", { className: "row" },
                "\u59D3\u540D:",
                React.createElement(Field, { bind: "params.name", rules: [{ test: 'required' }] },
                    React.createElement("input", { "data-bind": "params.name" }))),
            React.createElement("div", { className: "row" },
                "\u5E74\u9F84:",
                React.createElement(Field, { bind: "params.age" },
                    React.createElement("input", { "data-bind": "params.age" })),
                React.createElement(Alert, { bind: "params.age" }, [
                    { test: 'required', message: '请输入年龄' },
                    { test: 'number', message: '年龄必须为数值' },
                    { test: tests.range(18, 60), message: '年龄需在 18 ~ 60 之间' }
                ])),
            React.createElement("div", { className: "row" },
                "\u90AE\u7BB1:",
                React.createElement(Field, { bind: "params.email", rules: [
                        { test: 'required' }, { test: 'email' }
                    ] },
                    React.createElement("input", { "data-bind": "params.email" })),
                React.createElement(Alert, { bind: "params.email" })),
            React.createElement("div", { className: "row" },
                "\u63D0\u4EA4:",
                React.createElement("button", { disabled: !this.validation.status(), onClick: this.submit }, "\u7ACB\u5373\u63D0\u4EA4"),
                React.createElement("button", { onClick: this.hack }, "\u624B\u52A8\u66F4\u65B0\u72B6\u6001")));
    };
    App = __decorate([
        mota_1.model(ViewModel_1.default),
        mota_1.binding,
        __1.validation
    ], App);
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App, null), root);
//# sourceMappingURL=index.js.map