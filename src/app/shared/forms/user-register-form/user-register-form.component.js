"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterFormComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// Application
var global_constants_1 = require("../../global-constants");
var UserRegisterFormComponent = /** @class */ (function () {
    function UserRegisterFormComponent(formBuilder, loggerService, userApiService) {
        this.formBuilder = formBuilder;
        this.loggerService = loggerService;
        this.userApiService = userApiService;
        // flag to show or hide the password
        this.showPassword = false;
        // paths
        this.conditionsOfUsePath = global_constants_1.GlobalConstants.conditionsOfUsePath;
        this.privacyNoticePath = global_constants_1.GlobalConstants.privacyNoticePath;
        this.signInPath = global_constants_1.GlobalConstants.signInPath;
        // create user registration forms
        this.userRegistrationForm = this.createUserRegistrationForm();
    }
    Object.defineProperty(UserRegisterFormComponent.prototype, "formControls", {
        /** Public **/
        // convenience getter for easy access to forms fields
        get: function () {
            return this.userRegistrationForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    UserRegisterFormComponent.prototype.ngOnInit = function () {
    };
    // register user
    UserRegisterFormComponent.prototype.registerUser = function (userRegistrationFormValue) {
        // log data
        this.loggerService.debug('UserRegisterFormComponent', 'registerUser', 'userRegistrationFormValue', userRegistrationFormValue);
        // register the user via the API
        this.userApiService.registerUser(userRegistrationFormValue);
    };
    // show or hide the password
    UserRegisterFormComponent.prototype.togglePassword = function () {
        this.showPassword = !this.showPassword;
    };
    // dev mode helpers
    UserRegisterFormComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    UserRegisterFormComponent.prototype.testRegisterSeedUser = function () {
        var newEmail = 'jamey.rose@aeroplicity.com';
        var newPassword = '123456789';
        // set user registration forms value
        var userRegistrationFormValue = {
            email: newEmail,
            password: newPassword
        };
        // register user via the API
        this.userApiService.registerUser(userRegistrationFormValue);
    };
    UserRegisterFormComponent.prototype.testRegisterUser = function () {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var hash = '';
        for (var i = 0; i < 12; i++) {
            hash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var newEmail = hash + '@aeroplicity.com';
        var newPassword = '123456789';
        // set user registration forms value
        var userRegistrationFormValue = {
            email: newEmail,
            password: newPassword
        };
        // register user via the API
        this.userApiService.registerUser(userRegistrationFormValue);
    };
    /** Private **/
    UserRegisterFormComponent.prototype.createUserRegistrationForm = function () {
        return this.formBuilder.group({
            email: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.email,
                    forms_1.Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')
                ]
            ],
            // TODO - set validator based on how we configure Devise
            password: [
                '',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8)
                ]
            ]
        });
    };
    UserRegisterFormComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-user-register-form',
            templateUrl: './user-register-form.component.html',
            styleUrls: ['./user-register-form.component.scss']
        })
    ], UserRegisterFormComponent);
    return UserRegisterFormComponent;
}());
exports.UserRegisterFormComponent = UserRegisterFormComponent;
