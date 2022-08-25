import { __decorate } from "tslib";
// Application
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../shared/global-constants';
let CompanyUserAuthGuard = class CompanyUserAuthGuard {
    constructor(router, userStorageService, userApiService, loggerService, notificationService) {
        this.router = router;
        this.userStorageService = userStorageService;
        this.userApiService = userApiService;
        this.loggerService = loggerService;
        this.notificationService = notificationService;
        this.fileName = 'CompanyUserAuth';
    }
    canActivate(route, state) {
        // set return value
        let bool = false;
        // user is in company
        if (this.userStorageService.isUserInOrganization()) {
            bool = true;
        }
        else if (!this.userStorageService.isUserConfirmed()) { // user is not confirmed
            // resend confirmation email
            const userResendConfirmationFormValue = {
                email: this.userStorageService.getUserEmail()
            };
            this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
            // notification
            this.notificationService.error('Please confirm your account for access.');
        }
        else {
            // navigate
            this.router.navigate([GlobalConstants.companyRegisterPath]).then(() => {
                // log
                this.loggerService.info(this.fileName, 'canActivate()', 'navigate', '');
            });
            // notification
            this.notificationService.error('Please register or request to join an organization for access.');
        }
        // log
        this.loggerService.debug(this.fileName, 'canActivate()', 'return', bool);
        // return
        return bool;
    }
};
CompanyUserAuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CompanyUserAuthGuard);
export { CompanyUserAuthGuard };
//# sourceMappingURL=company-user-auth.guard.service.js.map