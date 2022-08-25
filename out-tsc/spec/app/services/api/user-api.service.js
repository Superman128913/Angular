import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../shared/global-constants';
//import {CompanyDomainForm} from "../../shared/models/company_domain.model";
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
let UserApiService = class UserApiService {
    constructor(router, angularTokenService, localStorageService, sessionStorageService, userStorageService, companyStorageService, httpHelperApiService, notificationService, loggerService, errorHelperApiService) {
        this.router = router;
        this.angularTokenService = angularTokenService;
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.userStorageService = userStorageService;
        this.companyStorageService = companyStorageService;
        this.httpHelperApiService = httpHelperApiService;
        this.notificationService = notificationService;
        this.loggerService = loggerService;
        this.errorHelperApiService = errorHelperApiService;
        this.fileName = 'UserApiService';
    }
    /**
     * User Methods
     */
    // register user
    registerUser(userRegistrationFormValue) {
        const functionName = 'registerUser';
        // log user registration form values
        this.loggerService.debug(this.fileName, functionName, 'userRegistrationFormValue', userRegistrationFormValue);
        this.angularTokenService.registerAccount({
            login: userRegistrationFormValue.email,
            password: userRegistrationFormValue.password,
            passwordConfirmation: userRegistrationFormValue.password,
            userType: GlobalConstants.userUserType
        }).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // store user
                if (response.user?.data) {
                    this.userStorageService.storeUser(response);
                }
                // store company
                if (response.company?.data) {
                    this.companyStorageService.storeCompany(response);
                }
                // navigate to the user's dashboard
                this.router.navigate([GlobalConstants.userPath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 422) { // user exists
                    // store email in session storage
                    this.userStorageService.storeEmail(userRegistrationFormValue.email);
                    // notification
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message + ', please sign in.');
                    }
                    // navigate to sign in
                    this.router.navigate([GlobalConstants.signInPath]).then(() => {
                        // log message
                        this.loggerService.info(this.fileName, functionName, 'navigate', '');
                    });
                }
                else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // sign in user
    signInUser(userSignInFormValue, otp = '0') {
        // function name
        const functionName = 'signInUser';
        //let otpNum = Number(otp);
        // log user sign in form values
        this.loggerService.debug(this.fileName, functionName, 'userSignInFormValue', userSignInFormValue);
        this.angularTokenService.signIn({
            login: userSignInFormValue.email,
            password: userSignInFormValue.password,
            userType: userSignInFormValue.userType
        }, otp).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // store user
                if (response.user?.data) {
                    this.userStorageService.storeUser(response);
                }
                // store company
                if (response.company?.data) {
                    this.companyStorageService.storeCompany(response);
                }
                // resend confirmation email
                if (this.userStorageService.isUserConfirmed() === false && response.user?.data.attributes.signInCount > 1) {
                    const unconfirmedEmail = this.userStorageService.getUserUnconfirmedEmail();
                    let confirmationEmail;
                    if (unconfirmedEmail) {
                        confirmationEmail = unconfirmedEmail;
                    }
                    else {
                        confirmationEmail = this.userStorageService.getUserEmail();
                    }
                    this.resendUserConfirmationEmail(confirmationEmail);
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'resendConfirmationEmail', '');
                }
                // navigate to the user's dashboard
                this.router.navigate([GlobalConstants.userPath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // NOTE: this should never be triggered due to catchError
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // sign out user
    signOutUser() {
        const functionName = 'signOutUser';
        this.angularTokenService.signOut().subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // clear all session storage
                this.sessionStorageService.clear();
                // clear all local storage
                this.localStorageService.clear();
                // navigate to home
                this.router.navigate([GlobalConstants.homePath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // update user
    updateUser(userProfileFormValue) {
        // function name
        const functionName = 'updateUser';
        // log user profile form values
        this.loggerService.debug(this.fileName, functionName, 'userProfileFormValue', userProfileFormValue);
        // update current user data
        this.httpHelperApiService.put('auth/', userProfileFormValue).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // store user
                if (response.user?.data) {
                    this.userStorageService.storeUser(response);
                }
                // store company
                if (response.company?.data) {
                    this.companyStorageService.storeCompany(response);
                }
                // navigate to the user's dashboard
                this.router.navigate([GlobalConstants.userPath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // update user profile image
    updateUserProfileImage(selectedImage) {
        // function name
        const functionName = 'updateUserProfileImage';
        const formData = new FormData();
        formData.append('profileImage', selectedImage);
        // log user profile image
        this.loggerService.debug(this.fileName, functionName, 'userProfileImageFormValue', formData);
        // update user profile image
        this.httpHelperApiService.put('user_profiles/' + this.userStorageService.getUserProfileId(), formData).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // store user
                if (response.user?.data) {
                    this.userStorageService.storeUser(response);
                }
                // store company
                if (response.company?.data) {
                    this.companyStorageService.storeCompany(response);
                }
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // delete user
    deleteUser() {
        const functionName = 'deleteUser';
        this.angularTokenService.deleteAccount().subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // clear all session storage
                this.sessionStorageService.clear();
                // clear all local storage
                this.localStorageService.clear();
                // navigate to home
                this.router.navigate([GlobalConstants.homePath]).then(() => {
                    // TODO - figure out a way to no have to reload
                    // reload page to change header buttons
                    window.location.reload();
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // confirm email
    confirmUserEmail(confirmationToken) {
        // function name
        const functionName = 'confirmUserEmail';
        // log confirmation token
        this.loggerService.debug(this.fileName, functionName, 'confirmationToken', confirmationToken);
        this.httpHelperApiService.get('auth/confirmation?confirmation_token=' + confirmationToken).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // store user
                if (response.user?.data) {
                    this.userStorageService.storeUser(response);
                }
                // store company
                if (response.company?.data) {
                    this.companyStorageService.storeCompany(response);
                }
                // navigate
                if (this.isUserSignedIn()) {
                    // user dashboard
                    this.router.navigate([GlobalConstants.userPath]).then(() => {
                        // log message
                        this.loggerService.info(this.fileName, functionName, 'navigate', GlobalConstants.userPath);
                    });
                }
                else {
                    // sign in
                    this.router.navigate([GlobalConstants.signInPath]).then(() => {
                        // log message
                        this.loggerService.info(this.fileName, functionName, 'navigate', GlobalConstants.signInPath);
                    });
                }
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // navigate to the user dashboard
                this.router.navigate([GlobalConstants.userPath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'error', 'navigate');
                });
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // resend confirmation email
    resendUserConfirmationEmail(userResendConfirmationFormValue) {
        // function name
        const functionName = 'resendUserConfirmationEmail';
        // log user resend confirmation form value
        this.loggerService.debug(this.fileName, functionName, 'userResendConfirmationFormValue', userResendConfirmationFormValue);
        this.httpHelperApiService.post('auth/confirmation/', userResendConfirmationFormValue).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // validate token
    validateToken() {
        const functionName = 'validateToken';
        this.angularTokenService.validateToken().subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // store user
                if (response.user?.data) {
                    this.userStorageService.storeUser(response);
                }
                // store company
                if (response.company?.data) {
                    this.companyStorageService.storeCompany(response);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    /**
     * Reset Password
     *
     * @param userResetPasswordFormValue
     */
    resetUserPassword(userResetPasswordFormValue) {
        // function name
        const functionName = 'resetUserPassword';
        // log form value
        this.loggerService.debug(this.fileName, functionName, 'userResetPasswordFormValue', userResetPasswordFormValue);
        this.angularTokenService.resetPassword({
            login: userResetPasswordFormValue.email,
            userType: GlobalConstants.userUserType
        }).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // navigate to home
                this.router.navigate([GlobalConstants.homePath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // this should never be triggered due to catchError
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    // navigate to sign in
                    this.router.navigate([GlobalConstants.signInPath]).then(() => {
                        // log message
                        this.loggerService.info(this.fileName, functionName, 'navigate', '');
                    });
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    /**
     * Change Password
     *
     * @param userChangePasswordFormValue
     */
    changeUserPassword(userChangePasswordFormValue) {
        // function name
        const functionName = 'changeUserPassword';
        // log user change password form value
        this.loggerService.debug(this.fileName, functionName, 'userChangePasswordFormValue', userChangePasswordFormValue);
        // update user password
        this.httpHelperApiService.put('auth/password/', userChangePasswordFormValue).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // store user
                if (response.user?.data) {
                    this.userStorageService.storeUser(response);
                }
                // store company
                if (response.company?.data) {
                    this.companyStorageService.storeCompany(response);
                }
                // navigate to the user's dashboard
                this.router.navigate([GlobalConstants.userPath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    // update user settings
    updateUserSettings(userSettingsFormValue) {
        const functionName = 'updateUserSettings';
        // log user settings form values
        this.loggerService.debug(this.fileName, functionName, 'userSettingsFormValue', userSettingsFormValue);
        // set user setting id
        const userSettings = this.userStorageService.getUserSettings();
        // update current user data
        this.httpHelperApiService.put('user_settings/' + userSettings.id, userSettingsFormValue).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // store user
                if (response.user?.data) {
                    this.userStorageService.storeUser(response);
                }
                // store company
                if (response.company?.data) {
                    this.companyStorageService.storeCompany(response);
                }
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    /**
     * MFA
     **/
    // check if otp is required for user
    checkUserOTPRequirement(userOTPRequirementFormValue) {
        // function name
        const functionName = 'checkUserOTPRequirement';
        return this.httpHelperApiService.post('mfa_qr/required', userOTPRequirementFormValue).pipe(map((response) => response, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 422) {
                this.notificationService.warning(displayError.message);
            }
            else if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    getQrUrl() {
        // function name
        const functionName = 'getQrUrl';
        return this.httpHelperApiService.get('mfa_qr/').pipe(map((response) => response), catchError((error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
            // throw error
            return throwError(() => error);
        }));
    }
    enableMfa(code) {
        // function name
        const functionName = 'enableMfa';
        // TODO - convert to model and pass
        return this.httpHelperApiService.put('mfa_qr/' + code, null).pipe(map((response) => response), catchError((error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
            // throw error
            return throwError(() => error);
        }));
    }
    disableMfa() {
        // function name
        const functionName = 'disableMfa';
        // set user id
        const userId = this.userStorageService.getUserId();
        return this.httpHelperApiService.delete('mfa_qr/' + userId).pipe(map((response) => response), catchError((error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
            // throw error
            return throwError(() => error);
        }));
    }
    /**
     * Helpers
     **/
    isUserSignedIn() {
        return this.angularTokenService.userSignedIn();
    }
    currentUserType(type) {
        return (this.angularTokenService.currentUserType === type && this.angularTokenService.userSignedIn());
    }
};
UserApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserApiService);
export { UserApiService };
//# sourceMappingURL=user-api.service.js.map