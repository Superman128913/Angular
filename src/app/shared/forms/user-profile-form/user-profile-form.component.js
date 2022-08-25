"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileFormComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var global_constants_1 = require("../../global-constants");
var UserProfileFormComponent = /** @class */ (function () {
    function UserProfileFormComponent(storageService, formBuilder, userApiService) {
        this.storageService = storageService;
        this.formBuilder = formBuilder;
        this.userApiService = userApiService;
        // form variables
        this.placeholderText = 'Please edit to enter your information.';
        this.fieldClass = 'form-control-plaintext';
        // paths
        this.companyPath = global_constants_1.GlobalConstants.companyPath;
        this.companyRegisterPath = global_constants_1.GlobalConstants.companyRegisterPath;
        this.userChangePasswordPath = global_constants_1.GlobalConstants.userChangePasswordPath;
        // create user profile form
        this.userProfileForm = this.createUserProfileForm();
        // disable form
        this.userProfileForm.disable();
    }
    Object.defineProperty(UserProfileFormComponent.prototype, "formControls", {
        /** Public **/
        // convenience getter for easy access to form fields
        get: function () {
            return this.userProfileForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    UserProfileFormComponent.prototype.ngOnInit = function () {
    };
    // enable forms
    UserProfileFormComponent.prototype.enableForm = function () {
        this.fieldClass = 'form-control';
        // enable forms
        this.userProfileForm.enable();
    };
    UserProfileFormComponent.prototype.resendConfirmationEmail = function () {
        // set userResendConfirmationFormValue
        var userResendConfirmationFormValue = {
            email: this.storageService.getUserEmail()
        };
        // resend user confirmation email via api
        this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
    };
    // update user profile from forms
    UserProfileFormComponent.prototype.updateUserProfile = function (userProfileFormValue) {
        // add user id to the value
        userProfileFormValue.id = this.storageService.getUserId();
        // update user via api
        this.userApiService.updateUser(userProfileFormValue);
    };
    // update user profile image
    UserProfileFormComponent.prototype.updateUserProfileImage = function (selectedProfileImage) {
        // update user profile image via api
        this.userApiService.updateUserProfileImage(selectedProfileImage);
    };
    // dev mode helpers
    UserProfileFormComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    UserProfileFormComponent.prototype.testDeleteUser = function () {
        // delete user via the API
        this.userApiService.deleteUser();
    };
    /** Private **/
    UserProfileFormComponent.prototype.createUserProfileForm = function () {
        // retrieve user from local storage
        var firstName = this.storageService.getUserFirstName();
        var lastName = this.storageService.getUserLastName();
        var title = this.storageService.getUserTitle();
        var email = this.storageService.getUserEmail();
        var mobile = this.storageService.getUserMobile();
        var work = this.storageService.getUserWork();
        return this.formBuilder.group({
            firstName: [
                firstName,
                forms_1.Validators.required
            ],
            lastName: [
                lastName,
                forms_1.Validators.required
            ],
            title: [
                title,
                forms_1.Validators.required
            ],
            email: [
                email,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.email,
                    forms_1.Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')
                ]
            ],
            mobile: [
                mobile
            ],
            work: [
                work
            ]
        });
    };
    UserProfileFormComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-user-profile-form',
            templateUrl: './user-profile-form.component.html',
            styleUrls: ['./user-profile-form.component.scss']
        })
    ], UserProfileFormComponent);
    return UserProfileFormComponent;
}());
exports.UserProfileFormComponent = UserProfileFormComponent;
