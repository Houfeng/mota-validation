"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewModel = /** @class */ (function () {
    function ViewModel() {
        var _this = this;
        this.params = {
            name: '',
            age: '',
            email: ''
        };
        this.submit = function () {
            console.log(_this.params);
        };
    }
    return ViewModel;
}());
exports.default = ViewModel;
//# sourceMappingURL=ViewModel.js.map