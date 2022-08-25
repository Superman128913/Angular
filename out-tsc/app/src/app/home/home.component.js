import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../shared/global-constants';
let HomeComponent = class HomeComponent {
    constructor(router, activatedRoute, loggerService, notificationService, companyApiService, userApiService, userStorageService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        this.notificationService = notificationService;
        this.companyApiService = companyApiService;
        this.userApiService = userApiService;
        this.userStorageService = userStorageService;
        // public
        this.ourDescription = GlobalConstants.ourDescription;
        this.userStatement = GlobalConstants.userStatement;
        this.registerPath = GlobalConstants.registerPath;
        this.blockchainPath = GlobalConstants.blockchainPath;
        // private
        this.fileName = 'HomeComponent';
        // get url variables
        const accountConfirmationSuccess = this.activatedRoute.snapshot.queryParamMap.get('account_confirmation_success');
        const companyUserInviteAcceptanceToken = this.activatedRoute.snapshot.queryParamMap.get('company_user_invite_acceptance_token');
        const companyUserRequestAcceptanceToken = this.activatedRoute.snapshot.queryParamMap.get('company_user_request_acceptance_token');
        const companyDomainConfirmationToken = this.activatedRoute.snapshot.queryParamMap.get('company_domain_confirmation_token');
        // handle url variables
        if (accountConfirmationSuccess) {
            this.handleAccountConfirmation(accountConfirmationSuccess);
        }
        else if (companyDomainConfirmationToken) {
            this.handleCompanyDomainConfirmation(companyDomainConfirmationToken);
        }
        else if (companyUserInviteAcceptanceToken) {
            this.handleCompanyUserInvite(companyUserInviteAcceptanceToken);
        }
        else if (companyUserRequestAcceptanceToken) {
            this.handleCompanyUserRequest(companyUserRequestAcceptanceToken);
        }
    }
    ngOnInit() {
    }
    /** Private **/
    handleAccountConfirmation(accountConfirmationSuccess) {
        // log confirmation success
        this.loggerService.debug(this.fileName, 'ngOnInit', 'accountConfirmationSuccess', accountConfirmationSuccess);
        if (accountConfirmationSuccess === 'true') {
            // validate token to get user information
            this.userApiService.validateToken();
            if (this.userApiService.isUserSignedIn()) {
                // navigate to the user dashboard
                this.router.navigate([GlobalConstants.userPath]).then(() => {
                    // notification
                    this.notificationService.success('Your account has been confirmed.');
                });
            }
            else {
                // navigate to replace params
                this.router.navigate([], {
                    relativeTo: this.activatedRoute,
                    queryParams: {
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        account_confirmation_success: null
                    },
                    queryParamsHandling: 'merge', // remove to replace all query params by provided
                }).then(() => {
                    // notification
                    this.notificationService.success('Your account has been confirmed.');
                });
            }
        }
        else if (accountConfirmationSuccess === 'false') {
            // navigate to replace params
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    account_confirmation_success: null
                },
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            }).then(() => {
                // notification
                this.notificationService.warning('Your account is already confirmed or your token has expired.');
            });
        }
    }
    handleCompanyDomainConfirmation(companyDomainConfirmationToken) {
        // log token
        this.loggerService.debug(this.fileName, 'ngOnInit', 'companyDomainConfirmationToken', companyDomainConfirmationToken);
        const companyDomainConfirmForm = {
            confirmationToken: companyDomainConfirmationToken
        };
        // confirmation company domain
        this.companyApiService.confirmCompanyDomain(companyDomainConfirmForm);
        // navigate to replace params
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                company_domain_confirmation_token: null,
            },
            queryParamsHandling: 'merge', // remove to replace all query params by provided
        }).then(() => {
        });
    }
    handleCompanyUserInvite(companyUserInviteAcceptanceToken) {
        // log token
        this.loggerService.debug(this.fileName, 'ngOnInit', 'companyUserInviteAcceptanceToken', companyUserInviteAcceptanceToken);
        // get accepted
        const accepted = this.activatedRoute.snapshot.queryParamMap.get('accepted');
        if (accepted === 'true') {
            const companyUserInviteAcceptFormValue = {
                acceptanceToken: companyUserInviteAcceptanceToken
            };
            // accept
            this.companyApiService.acceptCompanyUserInvite(companyUserInviteAcceptFormValue);
            // navigate to replace params
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    company_user_invite_acceptance_token: null,
                    accepted: null
                },
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            }).then(() => {
            });
        }
        else {
            const companyUserInviteRejectFormValue = {
                acceptanceToken: companyUserInviteAcceptanceToken,
                userId: this.userStorageService.getUserId()
            };
            // reject
            this.companyApiService.rejectCompanyUserInvite(companyUserInviteRejectFormValue);
            // navigate to replace params
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    company_user_invite_acceptance_token: null,
                    accepted: null
                },
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            }).then(() => {
            });
        }
    }
    handleCompanyUserRequest(companyUserRequestAcceptanceToken) {
        // log token
        this.loggerService.debug(this.fileName, 'ngOnInit', 'companyUserRequestAcceptanceToken', companyUserRequestAcceptanceToken);
        // get accepted
        const accepted = this.activatedRoute.snapshot.queryParamMap.get('accepted');
        if (accepted === 'true') {
            const companyUserRequestAcceptFormValue = {
                acceptanceToken: companyUserRequestAcceptanceToken
            };
            // accept
            this.companyApiService.acceptCompanyUserRequest(companyUserRequestAcceptFormValue);
            // navigate to replace params
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    company_user_request_acceptance_token: null,
                    accepted: null
                },
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            }).then(() => {
            });
        }
        else {
            const companyUserRequestRejectForm = {
                acceptanceToken: companyUserRequestAcceptanceToken
            };
            // reject
            this.companyApiService.rejectCompanyUserRequest(companyUserRequestRejectForm);
            // navigate to replace params
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    company_user_reject_acceptance_token: null,
                    accepted: null
                },
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            }).then(() => {
            });
        }
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map