import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ErrorHelperApiService = class ErrorHelperApiService {
    constructor() {
    }
    getError(serverError) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        // get error status
        const errorStatus = serverError.status;
        // set error message
        let errorMessage = '';
        if ((_a = serverError.error) === null || _a === void 0 ? void 0 : _a.error) {
            errorMessage = (_b = serverError.error) === null || _b === void 0 ? void 0 : _b.error;
        }
        else if ((_d = (_c = serverError.error) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d.full_messages) {
            errorMessage = (_f = (_e = serverError.error) === null || _e === void 0 ? void 0 : _e.errors) === null || _f === void 0 ? void 0 : _f.full_messages;
        }
        else if ((_g = serverError.error) === null || _g === void 0 ? void 0 : _g.errors) {
            errorMessage = (_h = serverError.error) === null || _h === void 0 ? void 0 : _h.errors;
        }
        // set error
        const displayError = {
            status: errorStatus,
            message: errorMessage
        };
        // return error
        return displayError;
    }
};
ErrorHelperApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ErrorHelperApiService);
export { ErrorHelperApiService };
//# sourceMappingURL=error-helper-api.service.js.map