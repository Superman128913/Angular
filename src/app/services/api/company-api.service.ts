// Angular
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
// Libraries
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
// Application
import {NotificationService} from '../notification.service';
import {HttpHelperApiService} from './http-helper-api.service';
import {CompanyApiSuccessResponse, CompanyRegistrationForm} from '../../shared/models/company.model';
import {
    CompanyUserInviteAcceptForm,
    CompanyUserInviteCreateForm,
    CompanyUserInviteRejectForm,
    CompanyUserInviteResendForm
} from '../../shared/models/company_user_invite.model';
import {
    CompanyUserRequestAcceptForm,
    CompanyUserRequestCreateForm,
    CompanyUserRequestRejectForm,
    CompanyUserRequestResendForm
} from '../../shared/models/company_user_request.model';
import {CompanyDivisionRegisterForm, CompanyDivisionUpdateForm} from '../../shared/models/company_division.model';
import {
    CompanyDivisionAddressDestroyForm,
    CompanyDivisionAddressRegisterForm,
    CompanyDivisionAddressUpdateForm
} from '../../shared/models/company_division_address.model';
import {
    CompanyDomainConfirmForm,
    CompanyDomainDeleteForm,
    CompanyDomainRegisterForm,
    CompanyDomainResendConfirmationForm
} from '../../shared/models/company_domain.model';
import {LoggerService} from '../logger.service';
import {GlobalConstants} from '../../shared/global-constants';
import {ErrorHelperApiService} from './error-helper-api.service';
import {UserStorageService} from '../storage/user-storage.service';
import {CompanyStorageService} from '../storage/company-storage.service';
import {UserApiSuccessResponse} from '../../shared/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class CompanyApiService {

    private fileName = 'CompanyApiService';

    constructor(private router: Router,
                private userStorageService: UserStorageService,
                private companyStorageService: CompanyStorageService,
                private httpHelperApiService: HttpHelperApiService,
                private notificationService: NotificationService,
                private loggerService: LoggerService,
                private errorHelperApiService: ErrorHelperApiService) {
    }

    /**
     * Company
     **/

    /**
     * Register Company
     *
     * @param companyRegistrationFormValue
     */
    public registerCompany(companyRegistrationFormValue: CompanyRegistrationForm) {
        // function name
        const functionName = 'registerCompany';

        // log value
        this.loggerService.debug(this.fileName, functionName, 'companyRegistrationFormValue', companyRegistrationFormValue);

        // post
        this.httpHelperApiService.post(
            'companies/',
            companyRegistrationFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
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
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public deleteCompany(companyId: bigint) {
        // function name
        const functionName = 'deleteCompany';

        // log company id
        this.loggerService.debug(this.fileName, functionName, 'companyId', companyId);

        this.httpHelperApiService.delete(
            'companies/' + companyId
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public registerCompanyDivision(companyDivisionRegisterFormValue: CompanyDivisionRegisterForm) {
        // function name
        const functionName = 'registerCompanyDivision';

        // log company division registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionRegisterFormValue', companyDivisionRegisterFormValue);

        return this.httpHelperApiService.post(
            'company_divisions/',
            companyDivisionRegisterFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public updateCompanyDivision(companyDivisionUpdateFormValue: CompanyDivisionUpdateForm) {
        // function name
        const functionName = 'updateCompanyDivision';

        // log company division update form value
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionUpdateFormValue', companyDivisionUpdateFormValue);

        // update company division
        this.httpHelperApiService.put(
            'company_divisions/' + companyDivisionUpdateFormValue.id,
            companyDivisionUpdateFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public deleteCompanyDivision(companyDivisionId: bigint) {
        // function name
        const functionName = 'deleteCompanyDivision';

        // log company division id
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionId', companyDivisionId);

        this.httpHelperApiService.delete(
            'company_divisions/' + companyDivisionId
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public registerCompanyDivisionAddress(companyDivisionAddressRegisterFormValue: CompanyDivisionAddressRegisterForm,
                                          companyDivisionId: bigint) {
        // function name
        const functionName = 'registerCompanyDivisionAddress';

        // log company division address registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionAddressRegisterFormValue', companyDivisionAddressRegisterFormValue);

        return this.httpHelperApiService.post(
            'company_division_addresses/',
            companyDivisionAddressRegisterFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public updateCompanyDivisionAddress(companyDivisionAddressUpdateFormValue: CompanyDivisionAddressUpdateForm,
                                        companyDivisionId: bigint) {
        // function name
        const functionName = 'updateCompanyDivisionAddress';

        // log company division address update form value
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionAddressUpdateFormValue', companyDivisionAddressUpdateFormValue);

        // update company division
        this.httpHelperApiService.put(
            'company_division_addresses/' + companyDivisionAddressUpdateFormValue.id,
            companyDivisionAddressUpdateFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public deleteCompanyDivisionAddress(companyDivisionAddressDestroyFormValue: CompanyDivisionAddressDestroyForm,
                                        companyDivisionId: bigint) {
        // function name
        const functionName = 'deleteCompanyDivisionAddress';

        // log company division id
        this.loggerService.debug(this.fileName, functionName, 'companyDivisionAddressDestroyFormValue', companyDivisionAddressDestroyFormValue);

        this.httpHelperApiService.delete(
            'company_division_addresses/' + companyDivisionAddressDestroyFormValue.id
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public registerCompanyDomain(companyDomainRegisterFormValue: CompanyDomainRegisterForm) {
        // function name
        const functionName = 'registerCompanyDomain';

        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyDomainRegisterFormValue', companyDomainRegisterFormValue);

        return this.httpHelperApiService.post(
            'company_domains/',
            companyDomainRegisterFormValue
        ).pipe(
            map((project: CompanyApiSuccessResponse) => {
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
            }), catchError((error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 422) {
                    this.notificationService.warning(displayError.message);
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }

                // throw error
                return throwError(error);
            })
        );
    }

    /**
     * Delete Company Domain
     *
     * @param companyDomainDeleteFormValue
     */
    public deleteCompanyDomain(companyDomainDeleteFormValue: CompanyDomainDeleteForm) {
        // function name
        const functionName = 'deleteCompanyDomain';

        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyDomainDeleteFormValue', companyDomainDeleteFormValue);

        return this.httpHelperApiService.delete(
            'company_domains/' + companyDomainDeleteFormValue.id
        ).pipe(
            map((project: CompanyApiSuccessResponse) => {
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
            }, (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            })
        );
    }

    /**
     * Confirm Company Domain
     *
     * @param companyDomainConfirmFormValue
     */
    public confirmCompanyDomain(companyDomainConfirmFormValue: CompanyDomainConfirmForm) {
        // function name
        const functionName = 'confirmCompanyDomain';

        // log data
        this.loggerService.debug(this.fileName, functionName, 'companyDomainConfirmFormValue', companyDomainConfirmFormValue);

        this.httpHelperApiService.post(
            'company_domains/confirm',
            companyDomainConfirmFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: any) => {
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
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public resendCompanyDomainConfirmationEmail(companyDomainResendConfirmationFormValue: CompanyDomainResendConfirmationForm) {
        // function name
        const functionName = 'resendCompanyDomainConfirmationEmail';

        // log email
        this.loggerService.debug(this.fileName, functionName, 'companyDomainResendConfirmationFormValue', companyDomainResendConfirmationFormValue);

        this.httpHelperApiService.post(
            'company_domains/resend_confirmation',
            companyDomainResendConfirmationFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);

                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public removeCompanyUser(companyUserId: bigint) {
        // function name
        const functionName = 'removeCompanyUser';

        // log company user form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserId', companyUserId);

        return this.httpHelperApiService.delete(
            'company_users/' + companyUserId
        ).subscribe({
            next: (response: any) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);

                // store user
                if (response.user?.data) {
                    this.userStorageService.storeUser(response);
                }
                // store company
                if (response.company?.data) {
                    this.companyStorageService.storeCompany(response);
                } else { // user leaving organization
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
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public createCompanyUserRequest(companyUserRequestCreateFormValue: CompanyUserRequestCreateForm) {
        // function name
        const functionName = 'createCompanyUserRequest';

        // log email
        this.loggerService.debug(this.fileName, functionName, 'companyUserRequestCreateFormValue', companyUserRequestCreateFormValue);

        this.httpHelperApiService.post(
            'company_user_requests/',
            companyUserRequestCreateFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public acceptCompanyUserRequest(companyUserRequestAcceptFormValue: CompanyUserRequestAcceptForm) {
        // function name
        const functionName = 'acceptCompanyUserRequest';

        // log form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserRequestAcceptFormValue', companyUserRequestAcceptFormValue);

        // update company division
        this.httpHelperApiService.post(
            'company_user_requests/accept',
            companyUserRequestAcceptFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
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
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public rejectCompanyUserRequest(companyUserRequestRejectFormValue: CompanyUserRequestRejectForm) {
        // function name
        const functionName = 'rejectCompanyUserRequest';

        // log form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserRequestRejectFormValue', companyUserRequestRejectFormValue);

        // update company division
        this.httpHelperApiService.post(
            'company_user_requests/reject',
            companyUserRequestRejectFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
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
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public resendCompanyUserRequestEmail(companyUserRequestResendFormValue: CompanyUserRequestResendForm) {
        // function name
        const functionName = 'resendCompanyUserRequestEmail';

        // log form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserRequestResendFormValue', companyUserRequestResendFormValue);

        this.httpHelperApiService.post(
            'company_user_requests/resend',
            companyUserRequestResendFormValue
        ).subscribe({
            next: (response: UserApiSuccessResponse) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);

                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public createCompanyUserInvite(companyUserInviteCreateFormValue: CompanyUserInviteCreateForm) {
        // function name
        const functionName = 'createCompanyUserInvite';

        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserInviteCreateFormValue', companyUserInviteCreateFormValue);

        return this.httpHelperApiService.post(
            'company_user_invites/',
            companyUserInviteCreateFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
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
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public acceptCompanyUserInvite(companyUserInviteAcceptFormValue: CompanyUserInviteAcceptForm) {
        // function name
        const functionName = 'acceptCompanyUserInvite';

        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserInviteAcceptFormValue', companyUserInviteAcceptFormValue);

        return this.httpHelperApiService.post(
            'company_user_invites/accept',
            companyUserInviteAcceptFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
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
                } else if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public rejectCompanyUserInvite(companyUserInviteRejectFormValue: CompanyUserInviteRejectForm) {
        // function name
        const functionName = 'rejectCompanyUserInvite';

        // log company registration form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserInviteRejectFormValue', companyUserInviteRejectFormValue);

        return this.httpHelperApiService.post(
            'company_user_invites/reject',
            companyUserInviteRejectFormValue
        ).subscribe({
            next: (response: CompanyApiSuccessResponse) => {
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
            error: (error: HttpErrorResponse) => {
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
                } else if (displayError.status === 404) {
                    if (displayError.message) {
                        this.notificationService.warning(displayError.message);
                    }
                } else if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
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
    public resendCompanyUserInviteEmail(companyUserInviteResendFormValue: CompanyUserInviteResendForm) {
        // function name
        const functionName = 'resendCompanyUserInviteEmail';

        // log user resend confirmation form value
        this.loggerService.debug(this.fileName, functionName, 'companyUserInviteResendFormValue', companyUserInviteResendFormValue);

        this.httpHelperApiService.post(
            'company_user_invites/resend',
            companyUserInviteResendFormValue
        ).subscribe({
            next: (response: UserApiSuccessResponse) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);

                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error: HttpErrorResponse) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);

                // set display error
                const displayError = this.errorHelperApiService.getError(error);

                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                } else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
}
