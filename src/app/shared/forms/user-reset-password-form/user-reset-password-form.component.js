"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResetPasswordFormComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// Application
var global_constants_1 = require("../../global-constants");
var UserResetPasswordFormComponent = /** @class */ (function () {
    function UserResetPasswordFormComponent(formBuilder, userApiService) {
        this.formBuilder = formBuilder;
        this.userApiService = userApiService;
        // paths
        this.signInPath = global_constants_1.GlobalConstants.signInPath;
        this.registerPath = global_constants_1.GlobalConstants.registerPath;
        // create user reset password forms
        this.userResetPasswordForm = this.createUserResetPasswordForm();
    }
    Object.defineProperty(UserResetPasswordFormComponent.prototype, "formControls", {
        /** Public **/
        // convenience getter for easy access to form fields
        get: function () {
            return this.userResetPasswordForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    UserResetPasswordFormComponent.prototype.ngOnInit = function () {
    };
    // reset password
    UserResetPasswordFormComponent.prototype.resetPassword = function (userResetPasswordFormValue) {
        // reset user password via the API
        this.userApiService.resetUserPassword(userResetPasswordFormValue);
    };
    // dev mode helpers
    UserResetPasswordFormComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    UserResetPasswordFormComponent.prototype.testResendResetPassword = function () {
        // set userResetPasswordFormValue
        var userResetPasswordFormValue = {
            email: 'jamey.rose@aeroplicity.com'
        };
        // reset user password via the api
        this.userApiService.resetUserPassword(userResetPasswordFormValue);
    };
    /** Private **/
    UserResetPasswordFormComponent.prototype.createUserResetPasswordForm = function () {
        return this.formBuilder.group({
            email: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.email,
                    forms_1.Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')
                ]
            ]
        });
    };
    UserResetPasswordFormComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-user-reset-password-form',
            templateUrl: './user-reset-password-form.component.html',
            styleUrls: ['./user-reset-password-form.component.scss']
        })
    ], UserResetPasswordFormComponent);
    return UserResetPasswordFormComponent;
}());
exports.UserResetPasswordFormComponent = UserResetPasswordFormComponent;
