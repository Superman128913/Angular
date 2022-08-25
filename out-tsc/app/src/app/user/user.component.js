import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../shared/global-constants';
let UserComponent = class UserComponent {
    constructor(userStorageService, router, loggerService, userApiService, companyApiService) {
        this.userStorageService = userStorageService;
        this.router = router;
        this.loggerService = loggerService;
        this.userApiService = userApiService;
        this.companyApiService = companyApiService;
        // public
        this.greeting = '';
        this.userProfilePath = GlobalConstants.userProfilePath;
        this.userProfileTitle = 'Manage your profile';
        this.companyPath = GlobalConstants.companyPath;
        this.companyTitle = 'Manage your organization';
        this.companyNotRegisteredTitle = 'Confirm your account to register or request to join';
        this.companyRegisterPath = GlobalConstants.companyRegisterPath;
        this.companyRegisterTitle = 'Register or request to join your organization';
        this.companyInviteTitle = 'You have been invited to join, but must accept';
        this.companyRequestTitle = 'Your request to join is pending approval';
        this.userSettingsPath = GlobalConstants.userSettingPath;
        this.userSettingsTitle = 'Manage your settings';
        // generate greeting
        this.generateGreeting();
    }
    ngOnInit() {
    }
    /** Public **/
    resendConfirmationEmail() {
        // set form values
        const userResendConfirmationFormValue = {
            email: this.userStorageService.getUserEmail()
        };
        // resend user confirmation email
        this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
    }
    resendCompanyUserInviteEmail() {
        // set form values
        const companyUserResendInviteFormValue = {
            email: this.userStorageService.getUserEmail()
        };
        // resend company user invite email
        this.companyApiService.resendCompanyUserInviteEmail(companyUserResendInviteFormValue);
    }
    resendCompanyUserRequestEmail() {
        // set form values
        const companyUserResendRequestFormValue = {
            userId: this.userStorageService.getUserId()
        };
        // resend user request email
        this.companyApiService.resendCompanyUserRequestEmail(companyUserResendRequestFormValue);
    }
    /** Private **/
    generateGreeting() {
        const myDate = new Date();
        const hrs = myDate.getHours();
        let message = '';
        const firstName = this.userStorageService.getUserFirstName();
        // set message for greeting
        if (hrs < 12) {
            message = 'Good Morning';
        }
        else if (hrs >= 12 && hrs <= 17) {
            message = 'Good Afternoon';
        }
        else {
            message = 'Good Evening';
        }
        // set greeting for display
        if (firstName === undefined || firstName === null || firstName === '') {
            this.greeting = message + '.';
        }
        else {
            this.greeting = message + ', ' + firstName + '.';
        }
    }
};
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map