// Application
import { GlobalConstants } from '../global-constants';
export class SerialLotNumberValidator {
}
SerialLotNumberValidator.serialOrLotNumberRequired = (control) => {
    const serialNumberControl = control.get(GlobalConstants.serialNumber);
    const lotNumberControl = control.get(GlobalConstants.lotNumber);
    if (serialNumberControl?.value === '') {
        if (lotNumberControl?.value === '') {
            lotNumberControl?.setErrors({
                required: true
            });
        }
        else {
            serialNumberControl?.setErrors(null);
            if (lotNumberControl !== null) {
                lotNumberControl?.setErrors(null);
            }
        }
    }
    if (lotNumberControl?.value === '') {
        if (serialNumberControl?.value === '') {
            serialNumberControl?.setErrors({
                required: true
            });
        }
        else {
            lotNumberControl?.setErrors(null);
            if (serialNumberControl !== null) {
                serialNumberControl?.setErrors(null);
            }
        }
    }
    // must return null for validator to work
    return null;
};
//# sourceMappingURL=serial-lot-number.validator.js.map