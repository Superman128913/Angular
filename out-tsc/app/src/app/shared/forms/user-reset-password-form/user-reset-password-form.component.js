import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
// Application
import { GlobalConstants } from '../../global-constants';
let UserResetPasswordFormComponent = class UserResetPasswordFormComponent {
    constructor(formBuilder, userApiService) {
        this.formBuilder = formBuilder;
        this.userApiService = userApiService;
        this.emailPlaceholder = GlobalConstants.emailPlaceholder;
        // paths
        this.signInPath = GlobalConstants.signInPath;
        this.registerPath = GlobalConstants.registerPath;
        // create user reset password forms
        this.userResetPasswordForm = this.createUserResetPasswordForm();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.userResetPasswordForm.controls;
    }
    ngOnInit() {
    }
    // reset password
    resetPassword(userResetPasswordFormValue) {
        // reset user password via the API
        this.userApiService.resetUserPassword(userResetPasswordFormValue);
    }
    /** Private **/
    createUserResetPasswordForm() {
        return this.formBuilder.group({
            email: [
                '',
                [
                    Validators.required,
                    Validators.email,
                    Validators.pattern(GlobalConstants.emailPattern)
                ]
            ]
        });
    }
};
UserResetPasswordFormComponent = __decorate([
    Component({
        selector: 'app-user-reset-password-form',
        templateUrl: './user-reset-password-form.component.html',
        styleUrls: ['./user-reset-password-form.component.scss']
    })
], UserResetPasswordFormComponent);
export { UserResetPasswordFormComponent };
//# sourceMappingURL=user-reset-password-form.component.js.map