import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Libraries
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { GlobalConstants } from '../../shared/global-constants';
let CompanyApiService = class CompanyApiService {
    constructor(router, userStorageService, companyStorageService, httpHelperApiService, notificationService, loggerService, errorHelperApiService) {
        this.router = router;
        this.userStorageService = userStorageService;
        this.companyStorageService = companyStorageService;
        this.httpHelperApiService = httpHelperApiService;
        this.notificationService = notificationService;
        this.loggerService = loggerService;
        this.errorHelperApiService = errorHelperApiService;
        this.fileName = 'CompanyApiService';
    }
    /**
     * Company
     **/
    /**
     * Register Company
     *
     * @param companyRegistrationFormValue
     */
    registerCompany(companyRegistrationFormValue) {
        // function name
        const functionName = 'registerCompany';
        // log value
        this.loggerService.debug(this.fileName, functionName, 'companyRegistrationFormValue', companyRegistrationFormValue);
        // post
        this.httpHelperApiService.post('companies/', companyRegistrationFormValue).subscribe({
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
                // navigate to the company dashboard
                this.router.navigate([GlobalConstants.companyPath]).then(() => {
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
                if (displayError.status === 422) { // domain exists
                    // store email in session storage
                    this.userStorageService.storeDomain(companyRegistrationFormValue.domain);
                    // notification
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
                    // navigate to company join
                    this.router.navigate([GlobalConstants.companyJoinPath]).then(() => {
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
    /**
     * Delete Company
     *
     * @param companyId
     */
    deleteCompany(companyId) {
        // function name
        const functionName = 'deleteCompany';
        // log company id
        this.loggerService.debug(this.fileName, functionName, 'companyId', companyId);
        this.httpHelperApiService.delete('companies/' + companyId).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // clear company
                this.companyStorageService.clearCompany();
                // navigate to the user dashboard
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
    /**
     * Company Divisions
     **/
    /**
     * Register Company Division
     *
     * @param companyDivisionRegisterFormValue
     */
    registerCompanyDivision(companyDivisionRegisterFormValue) {
        // function name
        const functionName = 'registerCompanyDivision';
        // log company division registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionRegisterFormValue', companyDivisionRegisterFormValue);
        return this.httpHelperApiService.post('company_divisions/', companyDivisionRegisterFormValue).subscribe({
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
                // navigate to company division
                this.router.navigate([GlobalConstants.companyDivisionsPath]).then(() => {
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
    /**
     * Update Company Division
     *
     * @param companyDivisionUpdateFormValue
     */
    updateCompanyDivision(companyDivisionUpdateFormValue) {
        // function name
        const functionName = 'updateCompanyDivision';
        // log company division update form value
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionUpdateFormValue', companyDivisionUpdateFormValue);
        // update company division
        this.httpHelperApiService.put('company_divisions/' + companyDivisionUpdateFormValue.id, companyDivisionUpdateFormValue).subscribe({
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
                // navigate to company division
                this.router.navigate([GlobalConstants.companyDivisionsPath]).then(() => {
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
    /**
     * Delete Company Division
     *
     * @param companyDivisionId
     */
    deleteCompanyDivision(companyDivisionId) {
        // function name
        const functionName = 'deleteCompanyDivision';
        // log company division id
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionId', companyDivisionId);
        this.httpHelperApiService.delete('company_divisions/' + companyDivisionId).subscribe({
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
                // navigate to the company division dashboard
                this.router.navigate([GlobalConstants.companyDivisionsPath]).then(() => {
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
    /**
     * Company Division Addresses
     **/
    /**
     * Register Company Division Address
     *
     * @param companyDivisionAddressRegisterFormValue
     * @param companyDivisionId
     */
    registerCompanyDivisionAddress(companyDivisionAddressRegisterFormValue, companyDivisionId) {
        // function name
        const functionName = 'registerCompanyDivisionAddress';
        // log company division address registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionAddressRegisterFormValue', companyDivisionAddressRegisterFormValue);
        return this.httpHelperApiService.post('company_division_addresses/', companyDivisionAddressRegisterFormValue).subscribe({
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
                // navigate to company division
                this.router.navigate([
                    GlobalConstants.companyDivisionsPath,
                    companyDivisionId
                ]).then(() => {
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
    /**
     * Update Company Division Address
     *
     * @param companyDivisionAddressUpdateFormValue
     * @param companyDivisionId
     */
    updateCompanyDivisionAddress(companyDivisionAddressUpdateFormValue, companyDivisionId) {
        // function name
        const functionName = 'updateCompanyDivisionAddress';
        // log company division address update form value
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionAddressUpdateFormValue', companyDivisionAddressUpdateFormValue);
        // update company division
        this.httpHelperApiService.put('company_division_addresses/' + companyDivisionAddressUpdateFormValue.id, companyDivisionAddressUpdateFormValue).subscribe({
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
                // navigate to company division
                this.router.navigate([
                    GlobalConstants.companyDivisionsPath,
                    companyDivisionId
                ]).then(() => {
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
    /**
     * Delete Company Division
     *
     * @param companyDivisionAddressDestroyFormValue
     * @param companyDivisionId
     */
    deleteCompanyDivisionAddress(companyDivisionAddressDestroyFormValue, companyDivisionId) {
        // function name
        const functionName = 'deleteCompanyDivisionAddress';
        // log company division id
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionAddressDestroyFormValue', companyDivisionAddressDestroyFormValue);
        this.httpHelperApiService.delete('company_division_addresses/' + companyDivisionAddressDestroyFormValue.id).subscribe({
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
                // navigate to the company division
                this.router.navigate([
                    GlobalConstants.companyDivisionsPath,
                    companyDivisionId
                ]).then(() => {
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
    /**
     * Company Domains
     **/
    /**
     * Register Company Domain
     *
     * @param companyDomainRegisterFormValue
     */
    registerCompanyDomain(companyDomainRegisterFormValue) {
        // function name
        const functionName = 'registerCompanyDomain';
        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyDomainRegisterFormValue', companyDomainRegisterFormValue);
        return this.httpHelperApiService.post('company_domains/', companyDomainRegisterFormValue).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            // store user
            if (project.user?.data) {
                this.userStorageService.storeUser(project);
            }
            // store company
            if (project.company?.data) {
                this.companyStorageService.storeCompany(project);
            }
            // notification
            if (project.message) {
                this.notificationService.success(project.message);
            }
        }), catchError((error) => {
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
            // throw error
            return throwError(error);
        }));
    }
    /**
     * Delete Company Domain
     *
     * @param companyDomainDeleteFormValue
     */
    deleteCompanyDomain(companyDomainDeleteFormValue) {
        // function name
        const functionName = 'deleteCompanyDomain';
        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyDomainDeleteFormValue', companyDomainDeleteFormValue);
        return this.httpHelperApiService.delete('company_domains/' + companyDomainDeleteFormValue.id).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            // store user
            if (project.user?.data) {
                this.userStorageService.storeUser(project);
            }
            // store company
            if (project.company?.data) {
                this.companyStorageService.storeCompany(project);
            }
            // notification
            if (project.message) {
                this.notificationService.success(project.message);
            }
        }, (error) => {
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
        }));
    }
    /**
     * Confirm Company Domain
     *
     * @param companyDomainConfirmFormValue
     */
    confirmCompanyDomain(companyDomainConfirmFormValue) {
        // function name
        const functionName = 'confirmCompanyDomain';
        // log data
        this.loggerService.debug(this.fileName, functionName, 'companyDomainConfirmFormValue', companyDomainConfirmFormValue);
        this.httpHelperApiService.post('company_domains/confirm', companyDomainConfirmFormValue).subscribe({
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
                this.router.navigate([GlobalConstants.companyDomainsPath]).then(() => {
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
                if (displayError.status === 404) { // confirmation code not found
                    // navigate
                    this.router.navigate([GlobalConstants.companyDomainsPath]).then(() => {
                        // log message
                        this.loggerService.info(this.fileName, functionName, 'navigate', '');
                    });
                    // notification
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
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
    /**
     * Resend Comapny Domain Confirmation Email
     *
     * @param companyDomainResendConfirmationFormValue
     */
    resendCompanyDomainConfirmationEmail(companyDomainResendConfirmationFormValue) {
        // function name
        const functionName = 'resendCompanyDomainConfirmationEmail';
        // log email
        this.loggerService.debug(this.fileName, functionName, 'companyDomainResendConfirmationFormValue', companyDomainResendConfirmationFormValue);
        this.httpHelperApiService.post('company_domains/resend_confirmation', companyDomainResendConfirmationFormValue).subscribe({
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
                if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
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
    /**
     * Company User
     */
    /**
     * Remove Company User
     *
     * @param companyUserId
     */
    removeCompanyUser(companyUserId) {
        // function name
        const functionName = 'removeCompanyUser';
        // log company user form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserId', companyUserId);
        return this.httpHelperApiService.delete('company_users/' + companyUserId).subscribe({
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
                else { // user leaving organization
                    this.companyStorageService.clearCompany();
                }
                // navigate to user
                this.router.navigate([GlobalConstants.userPath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, 'removeUserFromCompany', 'navigate', '');
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
    /**
     * Company User Request
     **/
    /**
     * Create Company User Request
     *
     * @param companyUserRequestCreateFormValue
     */
    createCompanyUserRequest(companyUserRequestCreateFormValue) {
        // function name
        const functionName = 'createCompanyUserRequest';
        // log email
        this.loggerService.debug(this.fileName, functionName, 'companyUserRequestCreateFormValue', companyUserRequestCreateFormValue);
        this.httpHelperApiService.post('company_user_requests/', companyUserRequestCreateFormValue).subscribe({
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
                if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
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
    /**
     * Accept Company User Request
     *
     * @param companyUserRequestAcceptFormValue
     */
    acceptCompanyUserRequest(companyUserRequestAcceptFormValue) {
        // function name
        const functionName = 'acceptCompanyUserRequest';
        // log form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserRequestAcceptFormValue', companyUserRequestAcceptFormValue);
        // update company division
        this.httpHelperApiService.post('company_user_requests/accept', companyUserRequestAcceptFormValue).subscribe({
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
                // navigate to company users
                this.router.navigate([GlobalConstants.companyUsersPath]).then(() => {
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
                // navigate to company users
                this.router.navigate([GlobalConstants.companyUsersPath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
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
    /**
     * Reject Company User Request
     *
     * @param companyUserRequestRejectFormValue
     */
    rejectCompanyUserRequest(companyUserRequestRejectFormValue) {
        // function name
        const functionName = 'rejectCompanyUserRequest';
        // log form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserRequestRejectFormValue', companyUserRequestRejectFormValue);
        // update company division
        this.httpHelperApiService.post('company_user_requests/reject', companyUserRequestRejectFormValue).subscribe({
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
                // navigate to company users
                this.router.navigate([GlobalConstants.companyUsersPath]).then(() => {
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
                // navigate to company users
                this.router.navigate([GlobalConstants.companyUsersPath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
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
    /**
     * Reset Company User Request
     *
     * @param companyUserRequestResendFormValue
     */
    resendCompanyUserRequestEmail(companyUserRequestResendFormValue) {
        // function name
        const functionName = 'resendCompanyUserRequestEmail';
        // log form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserRequestResendFormValue', companyUserRequestResendFormValue);
        this.httpHelperApiService.post('company_user_requests/resend', companyUserRequestResendFormValue).subscribe({
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
    /**
     * Company User Invite
     */
    /**
     * Create Company User Invite
     *
     * @param companyUserInviteCreateFormValue
     */
    createCompanyUserInvite(companyUserInviteCreateFormValue) {
        // function name
        const functionName = 'createCompanyUserInvite';
        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserInviteCreateFormValue', companyUserInviteCreateFormValue);
        return this.httpHelperApiService.post('company_user_invites/', companyUserInviteCreateFormValue).subscribe({
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
                console.log(displayError);
                // notifications
                if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
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
    /**
     * Accept Company User Invite
     *
     * @param companyUserInviteAcceptFormValue
     */
    acceptCompanyUserInvite(companyUserInviteAcceptFormValue) {
        // function name
        const functionName = 'acceptCompanyUserInvite';
        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserInviteAcceptFormValue', companyUserInviteAcceptFormValue);
        return this.httpHelperApiService.post('company_user_invites/accept', companyUserInviteAcceptFormValue).subscribe({
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
                // navigate to company
                this.router.navigate([GlobalConstants.companyPath]).then(() => {
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
                if (displayError.status === 401) { // user not registered
                    // TODO - pass invitation information so that the user accepts after they register / auto fill email
                    // navigate to register
                    this.router.navigate([GlobalConstants.registerPath]).then(() => {
                        // log message
                        this.loggerService.info(this.fileName, functionName, 'navigate', '');
                    });
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
                }
                else if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
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
    /**
     * Reject Company User Invite
     *
     * @param companyUserInviteRejectFormValue
     */
    rejectCompanyUserInvite(companyUserInviteRejectFormValue) {
        // function name
        const functionName = 'rejectCompanyUserInvite';
        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserInviteRejectFormValue', companyUserInviteRejectFormValue);
        return this.httpHelperApiService.post('company_user_invites/reject', companyUserInviteRejectFormValue).subscribe({
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
                if (displayError.status === 401) { // user not registered
                    // navigate to register
                    this.router.navigate([GlobalConstants.registerPath]).then(() => {
                        // log message
                        this.loggerService.info(this.fileName, functionName, 'navigate', '');
                    });
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
                }
                else if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
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
    /**
     * Resend Company User Invite
     *
     * @param companyUserInviteResendFormValue
     */
    resendCompanyUserInviteEmail(companyUserInviteResendFormValue) {
        // function name
        const functionName = 'resendCompanyUserInviteEmail';
        // log user resend confirmation form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserInviteResendFormValue', companyUserInviteResendFormValue);
        this.httpHelperApiService.post('company_user_invites/resend', companyUserInviteResendFormValue).subscribe({
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
};
CompanyApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CompanyApiService);
export { CompanyApiService };
//# sourceMappingURL=company-api.service.js.map