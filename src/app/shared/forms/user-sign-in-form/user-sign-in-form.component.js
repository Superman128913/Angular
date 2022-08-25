"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignInFormComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// Application
var global_constants_1 = require("../../global-constants");
var UserSignInFormComponent = /** @class */ (function () {
    function UserSignInFormComponent(formBuilder, sessionStorage, userApiService) {
        this.formBuilder = formBuilder;
        this.sessionStorage = sessionStorage;
        this.userApiService = userApiService;
        // flag to show or hide the password
        this.showPassword = false;
        // paths
        this.conditionsOfUsePath = global_constants_1.GlobalConstants.conditionsOfUsePath;
        this.privacyNoticePath = global_constants_1.GlobalConstants.privacyNoticePath;
        this.registerPath = global_constants_1.GlobalConstants.registerPath;
        this.resetPasswordPath = global_constants_1.GlobalConstants.resetPasswordPath;
        // create user sign in form
        this.userSignInForm = this.createUserSignInForm();
    }
    Object.defineProperty(UserSignInFormComponent.prototype, "formControls", {
        /** Public **/
        // convenience getter for easy access to form fields
        get: function () {
            return this.userSignInForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    UserSignInFormComponent.prototype.ngOnInit = function () {
    };
    // show or hide the password
    UserSignInFormComponent.prototype.togglePassword = function () {
        this.showPassword = !this.showPassword;
    };
    // sign in user
    UserSignInFormComponent.prototype.signInUser = function (userSignInFormValue) {
        // sign in user via the API
        this.userApiService.signInUser(userSignInFormValue);
    };
    // dev mode helpers
    UserSignInFormComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    UserSignInFormComponent.prototype.testSignInSeedUser = function () {
        var newEmail = 'jamey.rose@aeroplicity.com';
        var newPassword = '123456789';
        // set user sign in form value
        var userSignInFormValue = {
            email: newEmail,
            password: newPassword,
            userType: global_constants_1.GlobalConstants.userUserType
        };
        // sign in user via the API
        this.userApiService.signInUser(userSignInFormValue);
    };
    UserSignInFormComponent.prototype.testSignInAdmin = function () {
        var newEmail = 'jamey.rose@aeroplicity.com';
        var newPassword = 'testtest12345!';
        // set user sign in form value
        var userSignInFormValue = {
            email: newEmail,
            password: newPassword,
            userType: global_constants_1.GlobalConstants.adminUserType
        };
        // sign in user via the API
        this.userApiService.signInUser(userSignInFormValue);
    };
    UserSignInFormComponent.prototype.testResendConfirmationEmail = function () {
        var newEmail = 'jamey.rose@aeroplicity.com';
        // set user resend confirmation form value
        var userResendConfirmationFormValue = {
            email: newEmail
        };
        // resend user confirmation email vis the API
        this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
    };
    /** Private **/
    UserSignInFormComponent.prototype.createUserSignInForm = function () {
        var email = this.sessionStorage.retrieve('email');
        return this.formBuilder.group({
            email: [
                email,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.email,
                    forms_1.Validators.pattern(global_constants_1.GlobalConstants.emailPattern)
                ]
            ],
            // TODO - set validator based on how we configure Devise
            password: [
                '',
                [
                    forms_1.Validators.required
                ]
            ]
        });
    };
    UserSignInFormComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-user-sign-in-form',
            templateUrl: './user-sign-in-form.component.html',
            styleUrls: ['./user-sign-in-form.component.scss']
        })
    ], UserSignInFormComponent);
    return UserSignInFormComponent;
}());
exports.UserSignInFormComponent = UserSignInFormComponent;
