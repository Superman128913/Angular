"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApiService = void 0;
// Angular
var core_1 = require("@angular/core");
// Libraries
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var global_constants_1 = require("../../shared/global-constants");
// noinspection AnonymousFunctionJS
var UserApiService = /** @class */ (function () {
    function UserApiService(router, tokenService, localStorage, sessionStorage, storageService, httpHelperApiService, notificationService, loggerService) {
        this.router = router;
        this.tokenService = tokenService;
        this.localStorage = localStorage;
        this.sessionStorage = sessionStorage;
        this.storageService = storageService;
        this.httpHelperApiService = httpHelperApiService;
        this.notificationService = notificationService;
        this.loggerService = loggerService;
        this.fileName = 'UserApiService';
    }
    /**
     * User Methods
     */
    // register user
    UserApiService.prototype.registerUser = function (userRegistrationFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log user registration form values
        this.loggerService.debug(this.fileName, 'registerUser', 'userRegistrationFormValue', userRegistrationFormValue);
        this.tokenService.registerAccount({
            login: userRegistrationFormValue.email,
            password: userRegistrationFormValue.password,
            passwordConfirmation: userRegistrationFormValue.password,
            userType: global_constants_1.GlobalConstants.userUserType
        }).pipe((0, operators_1.catchError)(function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'registerUser', 'error', error);
            // gather error information
            if (error.error instanceof ErrorEvent) {
                // error type
                type = 'error';
                // client-side error
                message = error.error.message;
            }
            else if (error.status === 422) {
                // error type
                type = 'warning';
                // server-side error
                // email has already been taken
                message = error.error.errors.full_messages + ', please sign in.';
                // store email in session storage
                _this.sessionStorage.store('email', userRegistrationFormValue.email);
                // navigate to sign in
                _this.router.navigate([global_constants_1.GlobalConstants.signInPath]).then(function () {
                    // log message
                    _this.loggerService.info(_this.fileName, 'registerUser', 'navigate', '');
                });
            }
            else if (error.status === 500) {
                // error type
                type = 'error';
                // server-side error
                // email has already been taken
                message = 'Congratulations, you broke it! A team of our best engineers have commandeered a ' +
                    'refurbished Concorde and headed to the cloud to investigate.';
            }
            else {
                // error type
                type = 'error';
                // server-side error
                message = error.error.errors.full_messages;
            }
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // throw error
            return (0, rxjs_1.throwError)(error);
        })).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'registerUser', 'next', next);
            type = 'success';
            message = 'A confirmation email was sent to your account at ' + next.email + '. Please confirm.';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // set user sign in form value
            var userSignInFormValue = {
                email: next.email,
                password: userRegistrationFormValue.password,
                userType: global_constants_1.GlobalConstants.userUserType
            };
            // sign in user
            _this.signInUser(userSignInFormValue);
        }, function (error) {
            // NOTE: this should never be triggered due to catchError
            // log error
            _this.loggerService.error(_this.fileName, 'registerUser', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'registerUser', 'complete', '');
        });
    };
    // sign in user
    UserApiService.prototype.signInUser = function (userSignInFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log user sign in form values
        this.loggerService.debug(this.fileName, 'signInUser', 'userSignInFormValue', userSignInFormValue);
        this.tokenService.signIn({
            login: userSignInFormValue.email,
            password: userSignInFormValue.password,
            userType: userSignInFormValue.userType
        }).pipe((0, operators_1.catchError)(function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'signInUser', 'error', error);
            if (error.error instanceof ErrorEvent) {
                // client-side error
                message = error.error.message;
            }
            else if (error.status === 500) {
                // error type
                type = 'error';
                // server-side error
                // email has already been taken
                message = 'Congratulations, you broke it! A team of our best engineers have commandeered a ' +
                    'refurbished Concorde and headed to the cloud to investigate.';
                // navigate to sign in
                _this.router.navigate([global_constants_1.GlobalConstants.signInPath]).then(function () {
                    // log message
                    _this.loggerService.info(_this.fileName, 'signInUser', 'navigate', '');
                });
            }
            else {
                // server-side error
                message = error.error.errors;
            }
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // throw error
            return (0, rxjs_1.throwError)(error);
        })).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'signInUser', 'next', next);
            // TODO - handle ADMIN sign in
            // store user
            if (next.user.data) {
                _this.storageService.storeUser(next);
            }
            // store company
            if (next.company.data) {
                _this.storageService.storeCompany(next);
            }
            // retrieve from storage
            var email = _this.storageService.getUserEmail();
            var unconfirmedEmail = _this.storageService.getUserUnconfirmedEmail();
            var confirmed = _this.storageService.isUserEmailConfirmed();
            // resend confirmation email
            if (confirmed === false && next.user.data.attributes.signInCount > 1) {
                var confirmationEmail = void 0;
                if (unconfirmedEmail) {
                    confirmationEmail = unconfirmedEmail;
                }
                else {
                    confirmationEmail = email;
                }
                _this.resendUserConfirmationEmail(confirmationEmail);
                // log message
                _this.loggerService.info(_this.fileName, 'signInUser', 'resendConfirmationEmail', '');
            }
            // navigate to the user's dashboard
            _this.router.navigate([global_constants_1.GlobalConstants.userPath]).then(function () {
                // log message
                _this.loggerService.info(_this.fileName, 'signInUser', 'navigate', '');
            });
        }, function (error) {
            // NOTE: this should never be triggered due to catchError
            // log error
            _this.loggerService.error(_this.fileName, 'signInUser', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'signInUser', 'complete', '');
        });
    };
    // sign out user
    UserApiService.prototype.signOutUser = function () {
        var _this = this;
        this.tokenService.signOut().subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'signOutUser', 'next', next);
            // clear all session storage
            _this.sessionStorage.clear();
            // clear all local storage
            _this.localStorage.clear();
            // navigate to home
            _this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                // log message
                _this.loggerService.info(_this.fileName, 'signOutUser', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'signOutUser', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'signOutUser', 'complete', '');
        });
    };
    // update user
    UserApiService.prototype.updateUser = function (userProfileFormValue) {
        var _this = this;
        // log user profile form values
        this.loggerService.debug(this.fileName, 'updateUser', 'userProfileFormValue', userProfileFormValue);
        // update current user data
        this.httpHelperApiService.put('auth/', userProfileFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'updateUser', 'next', next);
            // store user in local storage
            _this.storageService.storeUser(next);
            // navigate to the user's dashboard
            _this.router.navigate([global_constants_1.GlobalConstants.userPath]).then(function () {
                // log message
                _this.loggerService.info(_this.fileName, 'updateUser', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'updateUser', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'updateUser', 'complete', '');
        });
    };
    // update user profile image
    UserApiService.prototype.updateUserProfileImage = function (selectedImage) {
        var _this = this;
        var formData = new FormData();
        formData.append('profileImage', selectedImage);
        // log user profile image
        this.loggerService.debug(this.fileName, 'updateUserProfileImage', 'userProfileImageFormValue', formData);
        // update user profile image
        this.httpHelperApiService.put('user_profiles/' + this.storageService.getUserProfileId(), formData).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'updateUserProfileImage', 'next', next);
            // store user
            if (next.user.data) {
                _this.storageService.storeUser(next);
            }
            // store company
            if (next.company.data) {
                _this.storageService.storeCompany(next);
            }
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'updateUserProfileImage', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'updateUserProfileImage', 'complete', '');
        });
    };
    // delete user
    UserApiService.prototype.deleteUser = function () {
        var _this = this;
        this.tokenService.deleteAccount().subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'deleteUser', 'next', next);
            // clear all session storage
            _this.sessionStorage.clear();
            // clear all local storage
            _this.localStorage.clear();
            // navigate to home
            _this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                // reload page to change header buttons
                window.location.reload();
                // log message
                _this.loggerService.info(_this.fileName, 'deleteUser', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'deleteUser', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'deleteUser', 'complete', '');
        });
    };
    // verify email
    UserApiService.prototype.verifyUserEmail = function (confirmationToken) {
        var _this = this;
        var message = '';
        var title = '';
        // log confirmation token
        this.loggerService.debug(this.fileName, 'verifyUserEmail', 'confirmationToken', confirmationToken);
        this.httpHelperApiService.get('verify?confirmation_token=' + confirmationToken).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'verifyUserEmail', 'next', next);
            // store user
            if (next.user.data) {
                _this.storageService.storeUser(next);
            }
            // store company
            if (next.company.data) {
                _this.storageService.storeCompany(next);
            }
            // retrieve from storage
            var email = _this.storageService.getUserEmail();
            message = 'You have successfully confirmed ' + email + '.';
            title = '';
            // success notification
            _this.notificationService.success(message, title);
            _this.router.navigate([global_constants_1.GlobalConstants.userPath]).then(function () {
                // log message
                _this.loggerService.info(_this.fileName, 'verifyEmail', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'verifyEmail', 'error', error);
            // handle edge cases of the confirmation failing
            // check if user is sign in
            var isUserSignedIn = _this.isUserSignedIn();
            // user is signed in
            if (isUserSignedIn) {
                message = 'The confirmation code no longer exists.';
                title = '';
                // navigate to the user dashboard
                _this.router.navigate([global_constants_1.GlobalConstants.userPath]).then(function () {
                    // log message
                    _this.loggerService.info(_this.fileName, 'verifyEmail', 'error', 'navigate');
                });
            }
            else { // user is not signed in
                message = 'The confirmation code no longer exists. Please sign in.';
                title = '';
                // navigate to user sign in
                _this.router.navigate([global_constants_1.GlobalConstants.signInPath]).then(function () {
                    // log message
                    _this.loggerService.info(_this.fileName, 'verifyEmail', 'navigate', '');
                });
            }
            // error notification
            _this.notificationService.error(message, title);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'verifyEmail', 'complete', '');
        });
    };
    // resend confirmation email
    UserApiService.prototype.resendUserConfirmationEmail = function (userResendConfirmationFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log user resend confirmation form value
        this.loggerService.debug('userApiService', 'resendUserConfirmationEmail', 'userResendConfirmationFormValue', userResendConfirmationFormValue);
        this.httpHelperApiService.post('auth/confirmation/', userResendConfirmationFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'resendUserConfirmationEmail', 'next', next);
            type = 'success';
            message = next.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'resendUserConfirmationEmail', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'resendUserConfirmationEmail', 'complete', '');
        });
    };
    // validate token
    UserApiService.prototype.validateToken = function () {
        var _this = this;
        this.tokenService.validateToken().subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'validateToken', 'next', next);
            // store user
            _this.storageService.storeUser(next);
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'validateToken', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'validateToken', 'complete', '');
        });
    };
    // reset password
    UserApiService.prototype.resetUserPassword = function (userResetPasswordFormValue) {
        var _this = this;
        var type = '';
        var message = '';
        var title = '';
        // log user reset password form value
        this.loggerService.debug(this.fileName, 'resetUserPassword', 'userResetPasswordFormValue', userResetPasswordFormValue);
        this.tokenService.resetPassword({
            login: userResetPasswordFormValue.email,
            userType: global_constants_1.GlobalConstants.userUserType
        }).pipe((0, operators_1.catchError)(function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'resetUserPassword', 'error', error);
            if (error.error instanceof ErrorEvent) {
                // client-side error
                message = error.error.message;
            }
            else if (error.status === 404) {
                // error type
                type = 'success';
                // email doesn't exist
                message = 'An email has been sent to ' + userResetPasswordFormValue.email + ' containing instructions for resetting your password.';
                // navigate to home
                _this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                    // log message
                    _this.loggerService.info(_this.fileName, 'resetUserPassword', 'navigate', '');
                });
            }
            else if (error.status === 500) {
                // error type
                type = 'error';
                // server-side error
                // email has already been taken
                message = 'Congratulations, you broke it! A team of our best engineers have commandeered a ' +
                    'refurbished Concorde and headed to the cloud to investigate.';
                // navigate to sign in
                _this.router.navigate([global_constants_1.GlobalConstants.signInPath]).then(function () {
                    // log message
                    _this.loggerService.info(_this.fileName, 'resetUserPassword', 'navigate', '');
                });
            }
            else {
                // server-side error
                message = error.error.errors;
            }
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // throw error
            return (0, rxjs_1.throwError)(error);
        })).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'resetUserPassword', 'next', next);
            type = 'success';
            message = next.message;
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to home
            _this.router.navigate([global_constants_1.GlobalConstants.homePath]).then(function () {
                // log message
                _this.loggerService.info(_this.fileName, 'resetUserPassword', 'navigate', '');
            });
        }, function (error) {
            // this should never be triggered due to catchError
            // log error
            _this.loggerService.error(_this.fileName, 'resetUserPassword', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'resetUserPassword', 'complete', '');
        });
    };
    // change password
    UserApiService.prototype.changeUserPassword = function (userChangePasswordFormData) {
        var _this = this;
        // log user change password form value
        this.loggerService.debug(this.fileName, 'changeUserPassword', 'userChangePasswordFormData', userChangePasswordFormData);
        // update user password
        this.httpHelperApiService.put('auth/password/', userChangePasswordFormData).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, 'changeUserPassword', 'next', next);
            var type = 'success';
            var message = 'Your password has successfully been updated.';
            var title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // navigate to the user's dashboard
            _this.router.navigate([global_constants_1.GlobalConstants.userPath]).then(function () {
                // log message
                _this.loggerService.info(_this.fileName, 'changeUserPassword', 'navigate', '');
            });
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, 'changeUserPassword', 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, 'changeUserPassword', 'complete', '');
        });
    };
    // update user settings
    UserApiService.prototype.updateUserSettings = function (userSettingsFormValue) {
        var _this = this;
        var functionName = 'updateUserSettings';
        // log user settings form values
        this.loggerService.debug(this.fileName, functionName, 'userSettingsFormValue', userSettingsFormValue);
        // update current user data
        this.httpHelperApiService.put('user_settings/' + this.storageService.getUserSettingId(), userSettingsFormValue).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'next', next);
            // store user
            if (next.user.data) {
                _this.storageService.storeUser(next);
            }
            // store company
            if (next.company.data) {
                _this.storageService.storeCompany(next);
            }
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, functionName, 'complete', '');
        });
    };
    /*
    TODO - Angular Token Auth doesn't seem to work as expected as updatePassword actually goes through
           the RegistrationsController vs the PasswordsController making our PasswordsController update override not work
    */
    // public updatePassword(newPassword: string) {
    //     this.tokenService.updatePassword({
    //         password: newPassword,
    //         passwordConfirmation: newPassword,
    //         userType: 'user'
    //     }).subscribe(
    //         (next: any) => {
    //             // log data
    //             console.log(next);
    //
    //             const type = 'success';
    //             const message = 'Your password has successfully been updated.';
    //             const title = '';
    //
    //             // pop toastr message
    //             this.notificationService.toasterNotification(type, message, title);
    //
    //             // navigate to the user's dashboard
    //             this.router.navigate([GlobalConstants.userPath]).then(() => {
    //                 // log message
    //                 console.log('updatePassword navigate completed.');
    //             });
    //
    //             // log message
    //             console.log('updatePassword next.');
    //         },
    //         error => {
    //             // log error
    //             console.log(error);
    //             // log message
    //             console.log('updatePassword error.');
    //         },
    //         () => {
    //             // log message
    //             console.log('updatePassword completed.');
    //         }
    //     );
    // }
    // public getUserProfile(userId) {
    //     this.get('user_profiles/' + userId).subscribe(
    //         (next: any) => {
    //             // log data
    //             console.log(next);
    //
    //             // store user in local storage
    //             this.localStorage.store('firstName', next.firstName);
    //             this.localStorage.store('lastName', next.lastName);
    //             this.localStorage.store('title', next.title);
    //             this.localStorage.store('mobile', next.mobile);
    //             this.localStorage.store('work', next.work);
    //
    //             // navigate to the user's account
    //             this.router.navigate([GlobalConstants.userPath]).then(() => {
    //                 // log message
    //                 console.log('getUserProfile navigate completed.');
    //             });
    //
    //             // log message
    //             console.log('getUserProfile next.');
    //         },
    //         error => {
    //             // log error
    //             console.log(error);
    //             // log message
    //             console.log('getUserProfile error.');
    //         },
    //         () => {
    //             // log message
    //             console.log('getUserProfile completed.');
    //         }
    //     );
    // }
    /** Helpers **/
    UserApiService.prototype.currentUserType = function (type) {
        return (this.tokenService.currentUserType === type && this.tokenService.userSignedIn());
    };
    UserApiService.prototype.isUserSignedIn = function () {
        return this.tokenService.userSignedIn();
    };
    UserApiService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], UserApiService);
    return UserApiService;
}());
exports.UserApiService = UserApiService;
