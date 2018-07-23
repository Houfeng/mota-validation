"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var utils_1 = require("./utils");
var isArray = require('ntils').isArray;
function createStyle() {
    var style = document.createElement('style');
    style.innerHTML = "[data-validation-status]{\n    transition-duration:.2s;transition-property:box-shadow;\n  }\n  [data-validation-status=\"false\"]{\n    outline:none;box-shadow:0 0 2px 1px rgba(255,0,0,.8);\n  }";
    var container = document.head || document.body;
    container.appendChild(style);
}
createStyle();
function setStatus(ref, status) {
    var element = ReactDOM.findDOMNode(ref);
    if (!element)
        return;
    element.setAttribute('data-validation-status', String(status));
}
function Status(props) {
    var validation = props.validation, bind = props.bind, rules = props.rules, as = props.as, _a = props.alias, alias = _a === void 0 ? as : _a, children = props.children;
    if (children && isArray(children) && children.length > 0) {
        throw Error("The Status(" + bind + ") can only have a sub element");
    }
    if (!validation)
        return utils_1.toElement(children);
    if (rules)
        validation.setRule(bind, rules, alias);
    var status = validation.status(bind);
    return React.cloneElement(utils_1.toElement(children), { ref: function (ref) { return setStatus(ref, status); } });
}
exports.Status = Status;
//# sourceMappingURL=Status.js.map