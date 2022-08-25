import { __decorate } from "tslib";
// Angular
import { Component, isDevMode } from '@angular/core';
import { GlobalConstants } from '../../../global-constants';
import { UserSignInModalComponent } from '../../../modals/user-sign-in-modal/user-sign-in-modal.component';
let UserDevToolsComponent = class UserDevToolsComponent {
    constructor(userApiService, loggerService, userStorageService, modalService) {
        this.userApiService = userApiService;
        this.loggerService = loggerService;
        this.userStorageService = userStorageService;
        this.modalService = modalService;
        // private
        this.fileName = 'UserDevToolsComponent';
    }
    ngOnInit() {
    }
    isDevMode() {
        return isDevMode();
    }
    testChangePassword() {
        // set password
        const formPassword = '123456789';
        // set form values
        const userChangePasswordFormValue = {
            id: this.userStorageService.getUserId(),
            password: formPassword,
            passwordConfirmation: formPassword
        };
        // change password
        this.userApiService.changeUserPassword(userChangePasswordFormValue);
    }
    testDeleteUser() {
        // delete user via the API
        this.userApiService.deleteUser();
    }
    testRegisterSeedUser() {
        const newEmail = 'jamey.rose@aeroplicity.com';
        const newPassword = '123456789';
        // set user registration forms value
        const userRegistrationFormValue = {
            email: newEmail,
            password: newPassword
        };
        // register user via the API
        this.userApiService.registerUser(userRegistrationFormValue);
    }
    testRegisterAeroplicityUser() {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let hash = '';
        for (let i = 0; i < 8; i++) {
            hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        const newEmail = hash + '@aeroplicity.com';
        const newPassword = '123456789';
        // set user registration forms value
        const userRegistrationFormValue = {
            email: newEmail,
            password: newPassword
        };
        // register user via the API
        this.userApiService.registerUser(userRegistrationFormValue);
    }
    testRegisterRandomUser() {
        const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let hash = '';
        for (let i = 0; i < 8; i++) {
            hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        const newEmail = hash + '@' + hash + '.com';
        const newPassword = '123456789';
        // set user registration forms value
        const userRegistrationFormValue = {
            email: newEmail,
            password: newPassword
        };
        // register user via the API
        this.userApiService.registerUser(userRegistrationFormValue);
    }
    testResendResetPassword() {
        // set userResetPasswordFormValue
        const userResetPasswordFormValue = {
            email: 'jamey.rose@aeroplicity.com'
        };
        // reset user password via the api
        this.userApiService.resetUserPassword(userResetPasswordFormValue);
    }
    testSignInSeedUser() {
        const newEmail = 'jamey.rose@aeroplicity.com';
        const newPassword = '123456789';
        // set otp requirement form value
        const userOTPRequirementFormValue = {
            email: newEmail,
            password: newPassword
        };
        // set user sign in form value
        const userSignInFormValue = {
            email: newEmail,
            password: newPassword,
            userType: GlobalConstants.userUserType
        };
        // check if user needs OTP
        this.userApiService.checkUserOTPRequirement(userOTPRequirementFormValue).subscribe({
            next: (next) => {
                if (next.mfaEnabled) {
                    const modalRef = this.modalService.open(UserSignInModalComponent, {
                        centered: true,
                        backdrop: 'static',
                        keyboard: false
                    });
                    modalRef.componentInstance.email = userOTPRequirementFormValue.email;
                    modalRef.componentInstance.password = userOTPRequirementFormValue.password;
                }
                else {
                    // sign in user via the API
                    this.userApiService.signInUser(userSignInFormValue);
                }
            }
        });
    }
    testSignInAdmin() {
        const newEmail = 'jamey.rose@aeroplicity.com';
        const newPassword = 'testtest12345!';
        // set otp requirement form value
        const userOTPRequirementFormValue = {
            email: newEmail,
            password: newPassword
        };
        // set user sign in form value
        const userSignInFormValue = {
            email: newEmail,
            password: newPassword,
            userType: GlobalConstants.adminUserType
        };
        // check if user needs OTP
        this.userApiService.checkUserOTPRequirement(userOTPRequirementFormValue).subscribe({
            next: (next) => {
                if (next.mfaEnabled) {
                    const modalRef = this.modalService.open(UserSignInModalComponent, {
                        centered: true,
                        backdrop: 'static',
                        keyboard: false
                    });
                    modalRef.componentInstance.email = userOTPRequirementFormValue.email;
                    modalRef.componentInstance.password = userOTPRequirementFormValue.password;
                }
                else {
                    // sign in user via the API
                    this.userApiService.signInUser(userSignInFormValue);
                }
            }
        });
    }
    testResendConfirmationEmail() {
        const newEmail = 'jamey.rose@aeroplicity.com';
        // set user resend confirmation form value
        const userResendConfirmationFormValue = {
            email: newEmail
        };
        // resend user confirmation email vis the API
        this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
    }
};
UserDevToolsComponent = __decorate([
    Component({
        selector: 'app-user-dev-tools',
        templateUrl: './user-dev-tools.component.html',
        styleUrls: ['./user-dev-tools.component.scss']
    })
], UserDevToolsComponent);
export { UserDevToolsComponent };
//# sourceMappingURL=user-dev-tools.component.js.map