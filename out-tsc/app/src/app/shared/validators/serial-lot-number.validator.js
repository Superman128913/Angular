// Application
import { GlobalConstants } from '../global-constants';
export class SerialLotNumberValidator {
}
SerialLotNumberValidator.serialOrLotNumberRequired = (control) => {
    const serialNumberControl = control.get(GlobalConstants.serialNumber);
    const lotNumberControl = control.get(GlobalConstants.lotNumber);
    if ((serialNumberControl === null || serialNumberControl === void 0 ? void 0 : serialNumberControl.value) === '') {
        if ((lotNumberControl === null || lotNumberControl === void 0 ? void 0 : lotNumberControl.value) === '') {
            lotNumberControl === null || lotNumberControl === void 0 ? void 0 : lotNumberControl.setErrors({
                required: true
            });
        }
        else {
            serialNumberControl === null || serialNumberControl === void 0 ? void 0 : serialNumberControl.setErrors(null);
            if (lotNumberControl !== null) {
                lotNumberControl === null || lotNumberControl === void 0 ? void 0 : lotNumberControl.setErrors(null);
            }
        }
    }
    if ((lotNumberControl === null || lotNumberControl === void 0 ? void 0 : lotNumberControl.value) === '') {
        if ((serialNumberControl === null || serialNumberControl === void 0 ? void 0 : serialNumberControl.value) === '') {
            serialNumberControl === null || serialNumberControl === void 0 ? void 0 : serialNumberControl.setErrors({
                required: true
            });
        }
        else {
            lotNumberControl === null || lotNumberControl === void 0 ? void 0 : lotNumberControl.setErrors(null);
            if (serialNumberControl !== null) {
                serialNumberControl === null || serialNumberControl === void 0 ? void 0 : serialNumberControl.setErrors(null);
            }
        }
    }
    // must return null for validator to work
    return null;
};
//# sourceMappingURL=serial-lot-number.validator.js.map