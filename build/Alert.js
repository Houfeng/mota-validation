"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function Alert(props) {
    var validation = props.validation, bind = props.bind, as = props.as, _a = props.alias, alias = _a === void 0 ? as : _a, children = props.children, _b = props.rules, rules = _b === void 0 ? children : _b;
    if (!validation)
        return utils_1.toElement();
    if (rules)
        validation.setRule(bind, rules, alias);
    var result = validation.result(bind);
    if (!result || result.status || !result.message)
        return utils_1.toElement();
    return utils_1.toElement(result.message);
}
exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map