"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var global_constants_1 = require("../shared/global-constants");
var UserComponent = /** @class */ (function () {
    function UserComponent(storageService, userApiService, notificationService) {
        this.storageService = storageService;
        this.userApiService = userApiService;
        this.notificationService = notificationService;
        // paths
        this.userProfilePath = global_constants_1.GlobalConstants.userProfilePath;
        this.companyRegisterPath = global_constants_1.GlobalConstants.companyRegisterPath;
        this.companyPath = global_constants_1.GlobalConstants.companyPath;
        // generate greeting
        this.generateGreeting();
        // notify confirmation warning
        if (this.storageService.isUserEmailConfirmed() === false) {
            this.notificationService.warning('Your account is not confirmed, please confirm via your email.');
        }
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    /** Public **/
    UserComponent.prototype.resendConfirmationEmail = function () {
        // set email
        var newEmail = this.storageService.getUserEmail();
        // set form values
        var userResendConfirmationFormValue = {
            email: newEmail
        };
        // resend user confirmation email via api
        this.userApiService.resendUserConfirmationEmail(userResendConfirmationFormValue);
    };
    /** Private **/
    UserComponent.prototype.generateGreeting = function () {
        var myDate = new Date();
        var hrs = myDate.getHours();
        var message = '';
        var firstName = this.storageService.getUserFirstName();
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
    };
    UserComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
