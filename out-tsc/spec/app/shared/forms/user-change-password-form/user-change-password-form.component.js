import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { GlobalConstants } from '../../global-constants';
let UserChangePasswordFormComponent = class UserChangePasswordFormComponent {
    constructor(formBuilder, userApiService, userStorageService) {
        this.formBuilder = formBuilder;
        this.userApiService = userApiService;
        this.userStorageService = userStorageService;
        this.showPassword = false;
        // create user change password form
        this.userChangePasswordForm = this.createUserChangePasswordForm();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.userChangePasswordForm.controls;
    }
    ngOnInit() {
    }
    // change password
    changePassword(userChangePasswordFormValue) {
        // set form values
        userChangePasswordFormValue.id = this.userStorageService.getUserId();
        userChangePasswordFormValue.passwordConfirmation = userChangePasswordFormValue.password;
        // change password
        this.userApiService.changeUserPassword(userChangePasswordFormValue);
    }
    // show or hide the password
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
    /** Private **/
    createUserChangePasswordForm() {
        return this.formBuilder.group({
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(GlobalConstants.passwordMinLength),
                    Validators.maxLength(GlobalConstants.passwordMaxLength)
                ]
            ]
        });
    }
};
UserChangePasswordFormComponent = __decorate([
    Component({
        selector: 'app-user-change-password-form',
        templateUrl: './user-change-password-form.component.html',
        styleUrls: ['./user-change-password-form.component.scss']
    })
], UserChangePasswordFormComponent);
export { UserChangePasswordFormComponent };
//# sourceMappingURL=user-change-password-form.component.js.map