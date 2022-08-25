import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let UserMfaEnabledResolver = class UserMfaEnabledResolver {
    constructor(userApiService, userStorageService, loggerService) {
        this.userApiService = userApiService;
        this.userStorageService = userStorageService;
        this.loggerService = loggerService;
        this.fileName = 'UserMfaEnabledResolver';
    }
    resolve(route, state) {
        // function name
        const functionName = 'resolve';
        const newEmail = this.userStorageService.getUserEmail();
        // set otp requirement form value
        const userOTPRequirementFormValue = {
            email: newEmail
        };
        return this.userApiService.checkUserOTPRequirement(userOTPRequirementFormValue).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            // return data
            return project.mfaEnabled;
        }));
    }
};
UserMfaEnabledResolver = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserMfaEnabledResolver);
export { UserMfaEnabledResolver };
//# sourceMappingURL=user-mfa-enabled.resolver.js.map