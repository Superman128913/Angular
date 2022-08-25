"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserChangePasswordFormComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserChangePasswordFormComponent = /** @class */ (function () {
    function UserChangePasswordFormComponent(formBuilder, userApiService, storageService) {
        this.formBuilder = formBuilder;
        this.userApiService = userApiService;
        this.storageService = storageService;
        // flag to show or hide the password
        this.showPassword = false;
        // create user change password form
        this.userChangePasswordForm = this.createUserChangePasswordForm();
    }
    Object.defineProperty(UserChangePasswordFormComponent.prototype, "formControls", {
        /** Public **/
        // convenience getter for easy access to form fields
        get: function () {
            return this.userChangePasswordForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    UserChangePasswordFormComponent.prototype.ngOnInit = function () {
    };
    // change password
    UserChangePasswordFormComponent.prototype.changePassword = function (userChangePasswordFormValue) {
        // set form values
        userChangePasswordFormValue.passwordConfirmation = userChangePasswordFormValue.password;
        userChangePasswordFormValue.id = this.storageService.getUserId();
        // update the user's password via the API
        this.userApiService.changeUserPassword(userChangePasswordFormValue);
    };
    // show or hide the password
    UserChangePasswordFormComponent.prototype.togglePassword = function () {
        this.showPassword = !this.showPassword;
    };
    // dev mode helpers
    UserChangePasswordFormComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    UserChangePasswordFormComponent.prototype.testChangePassword = function () {
        // set password
        var newPassword = '123456789';
        // set user id
        var userId = this.storageService.getUserId();
        // set form values
        var userChangePasswordFormValue = {
            password: newPassword,
            passwordConfirmation: newPassword,
            id: userId
        };
        // update the user's password via the API
        this.userApiService.changeUserPassword(userChangePasswordFormValue);
    };
    /** Private **/
    UserChangePasswordFormComponent.prototype.createUserChangePasswordForm = function () {
        return this.formBuilder.group({
            password: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8)
                ]
            ]
        });
    };
    UserChangePasswordFormComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-user-change-password-form',
            templateUrl: './user-change-password-form.component.html',
            styleUrls: ['./user-change-password-form.component.scss']
        })
    ], UserChangePasswordFormComponent);
    return UserChangePasswordFormComponent;
}());
exports.UserChangePasswordFormComponent = UserChangePasswordFormComponent;
