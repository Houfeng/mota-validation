"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NONE = "";
function Alert(props) {
    var validation = props.validation, bind = props.bind, as = props.as, _a = props.alias, alias = _a === void 0 ? as : _a, _b = props.children, children = _b === void 0 ? [] : _b, _c = props.rules, rules = _c === void 0 ? children : _c;
    if (!validation)
        return NONE;
    if (rules)
        validation.setRule(bind, rules, alias);
    var result = validation.result(bind);
    if (!result || result.status)
        return NONE;
    return result.message || NONE;
}
exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map