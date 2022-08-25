"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialLotNumberValidator = void 0;
var SerialLotNumberValidator = /** @class */ (function () {
    function SerialLotNumberValidator() {
    }
    SerialLotNumberValidator.serialOrLotNumberRequired = function (control) {
        var serialNumberControl = control.get('serialNumber');
        var lotNumberControl = control.get('lotNumber');
        if ((serialNumberControl === null || serialNumberControl === void 0 ? void 0 : serialNumberControl.value) === '') {
            if ((lotNumberControl === null || lotNumberControl === void 0 ? void 0 : lotNumberControl.value) === '') {
                lotNumberControl.setErrors({
                    required: true
                });
            }
            else {
                serialNumberControl.setErrors(null);
                lotNumberControl.setErrors(null);
            }
        }
        if ((lotNumberControl === null || lotNumberControl === void 0 ? void 0 : lotNumberControl.value) === '') {
            if ((serialNumberControl === null || serialNumberControl === void 0 ? void 0 : serialNumberControl.value) === '') {
                serialNumberControl.setErrors({
                    required: true
                });
            }
            else {
                serialNumberControl.setErrors(null);
                lotNumberControl.setErrors(null);
            }
        }
        return null;
    };
    return SerialLotNumberValidator;
}());
exports.SerialLotNumberValidator = SerialLotNumberValidator;
