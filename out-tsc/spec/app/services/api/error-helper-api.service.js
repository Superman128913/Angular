import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ErrorHelperApiService = class ErrorHelperApiService {
    constructor() {
    }
    getError(serverError) {
        // get error status
        const errorStatus = serverError.status;
        // set error message
        let errorMessage = '';
        if (serverError.error?.error) {
            errorMessage = serverError.error?.error;
        }
        else if (serverError.error?.errors?.full_messages) {
            errorMessage = serverError.error?.errors?.full_messages;
        }
        else if (serverError.error?.errors) {
            errorMessage = serverError.error?.errors;
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