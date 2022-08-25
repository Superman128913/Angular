import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
// Application
import { GlobalConstants } from '../../global-constants';
let UserRegisterFormComponent = class UserRegisterFormComponent {
    constructor(formBuilder, loggerService, userStorageService, userApiService) {
        this.formBuilder = formBuilder;
        this.loggerService = loggerService;
        this.userStorageService = userStorageService;
        this.userApiService = userApiService;
        this.showPassword = false;
        this.emailPlaceholder = GlobalConstants.emailPlaceholder;
        // paths
        this.conditionsOfUsePath = GlobalConstants.conditionsOfUsePath;
        this.privacyNoticePath = GlobalConstants.privacyNoticePath;
        this.signInPath = GlobalConstants.signInPath;
        // create user registration forms
        this.userRegistrationForm = this.createUserRegistrationForm();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.userRegistrationForm.controls;
    }
    ngOnInit() {
    }
    // register user
    registerUser(userRegistrationFormValue) {
        // register the user via the API
        this.userApiService.registerUser(userRegistrationFormValue);
    }
    // show or hide the password
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
    /** Private **/
    createUserRegistrationForm() {
        return this.formBuilder.group({
            email: [
                this.userStorageService.getUserEmail(),
                [
                    Validators.required,
                    Validators.email,
                    Validators.pattern(GlobalConstants.emailPattern)
                ]
            ],
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
UserRegisterFormComponent = __decorate([
    Component({
        selector: 'app-user-register-form',
        templateUrl: './user-register-form.component.html',
        styleUrls: ['./user-register-form.component.scss']
    })
], UserRegisterFormComponent);
export { UserRegisterFormComponent };
//# sourceMappingURL=user-register-form.component.js.map