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
var isString = require('ntils').isString;
function toElement(content) {
    if (!content)
        content = '';
    return isString(content) ? React.createElement('span', {
        children: content
    }) : content;
}
exports.toElement = toElement;
//# sourceMappingURL=utils.js.map