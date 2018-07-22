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
        _this.submit = function () {
            _this.validation.test();
            _this.model.submit();
        };
        return _this;
    }
    App.prototype.render = function () {
        var _a = this.validation, Alert = _a.Alert, Status = _a.Status, tests = _a.tests;
        return React.createElement("div", null,
            React.createElement("div", { className: "row" },
                "\u59D3\u540D:",
                React.createElement(Status, { bind: "params.name", rules: [{ test: 'required' }] },
                    React.createElement("input", { "data-bind": "params.name" }))),
            React.createElement("div", { className: "row" },
                "\u5E74\u9F84:",
                React.createElement(Status, { bind: "params.age" },
                    React.createElement("input", { "data-bind": "params.age" })),
                React.createElement(Alert, { bind: "params.age" }, [
                    { test: 'required', message: '请输入年龄' },
                    { test: 'number', message: '年龄必须为数值' },
                    { test: tests.range(18, 60), message: '年龄需在 18 ~ 60 之间' }
                ])),
            React.createElement("div", { className: "row" },
                "\u90AE\u7BB1:",
                React.createElement(Status, { bind: "params.email", rules: [
                        { test: 'required' }, { test: 'email' }
                    ] },
                    React.createElement("input", { "data-bind": "params.email" }))),
            React.createElement("div", { className: "row" },
                "\u63D0\u4EA4:",
                React.createElement("button", { disabled: !this.validation.status(), onClick: this.submit }, "\u7ACB\u5373\u63D0\u4EA4")));
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