// Angular
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// Application
import {GlobalConstants} from '../shared/global-constants';
import {LoggerService} from '../services/logger.service';
import {NotificationService} from '../services/notification.service';
import {CompanyUserInviteAcceptForm, CompanyUserInviteRejectForm} from '../shared/models/company_user_invite.model';
import {CompanyApiService} from '../services/api/company-api.service';
import {UserStorageService} from '../services/storage/user-storage.service';
import {UserApiService} from '../services/api/user-api.service';
import {CompanyDomainConfirmForm} from '../shared/models/company_domain.model';
import {CompanyUserRequestAcceptForm, CompanyUserRequestRejectForm} from '../shared/models/company_user_request.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // public
    public ourDescription = GlobalConstants.ourDescription;
    public userStatement = GlobalConstants.userStatement;
    public registerPath = GlobalConstants.registerPath;
    public blockchainPath = GlobalConstants.blockchainPath;
    // private
    private fileName = 'HomeComponent';

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private loggerService: LoggerService,
                private notificationService: NotificationService,
                private companyApiService: CompanyApiService,
                private userApiService: UserApiService,
                private userStorageService: UserStorageService) {
        // get url variables
        const accountConfirmationSuccess = this.activatedRoute.snapshot.queryParamMap.get('account_confirmation_success');
        const companyUserInviteAcceptanceToken = this.activatedRoute.snapshot.queryParamMap.get('company_user_invite_acceptance_token');
        const companyUserRequestAcceptanceToken = this.activatedRoute.snapshot.queryParamMap.get('company_user_request_acceptance_token');
        const companyDomainConfirmationToken = this.activatedRoute.snapshot.queryParamMap.get('company_domain_confirmation_token');
        // handle url variables
        if (accountConfirmationSuccess) {
            this.handleAccountConfirmation(accountConfirmationSuccess);
        } else if (companyDomainConfirmationToken) {
            this.handleCompanyDomainConfirmation(companyDomainConfirmationToken);
        } else if (companyUserInviteAcceptanceToken) {
            this.handleCompanyUserInvite(companyUserInviteAcceptanceToken);
        } else if (companyUserRequestAcceptanceToken) {
            this.handleCompanyUserRequest(companyUserRequestAcceptanceToken);
        }
    }

    ngOnInit(): void {
    }

    /** Private **/

    private handleAccountConfirmation(accountConfirmationSuccess: string) {
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
            } else {
                // navigate to replace params
                this.router.navigate(
                    [],
                    {
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
        } else if (accountConfirmationSuccess === 'false') {
            // navigate to replace params
            this.router.navigate(
                [],
                {
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

    private handleCompanyDomainConfirmation(companyDomainConfirmationToken: string) {
        // log token
        this.loggerService.debug(this.fileName, 'ngOnInit', 'companyDomainConfirmationToken', companyDomainConfirmationToken);

        const companyDomainConfirmForm: CompanyDomainConfirmForm = {
            confirmationToken: companyDomainConfirmationToken
        };

        // confirmation company domain
        this.companyApiService.confirmCompanyDomain(companyDomainConfirmForm);

        // navigate to replace params
        this.router.navigate(
            [],
            {
                relativeTo: this.activatedRoute,
                queryParams: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    company_domain_confirmation_token: null,
                },
                queryParamsHandling: 'merge', // remove to replace all query params by provided
            }).then(() => {
        });
    }

    private handleCompanyUserInvite(companyUserInviteAcceptanceToken: string) {
        // log token
        this.loggerService.debug(this.fileName, 'ngOnInit', 'companyUserInviteAcceptanceToken', companyUserInviteAcceptanceToken);

        // get accepted
        const accepted = this.activatedRoute.snapshot.queryParamMap.get('accepted');

        if (accepted === 'true') {
            const companyUserInviteAcceptFormValue: CompanyUserInviteAcceptForm = {
                acceptanceToken: companyUserInviteAcceptanceToken
            };

            // accept
            this.companyApiService.acceptCompanyUserInvite(companyUserInviteAcceptFormValue);

            // navigate to replace params
            this.router.navigate(
                [],
                {
                    relativeTo: this.activatedRoute,
                    queryParams: {
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        company_user_invite_acceptance_token: null,
                        accepted: null
                    },
                    queryParamsHandling: 'merge', // remove to replace all query params by provided
                }).then(() => {
                }
            );
        } else {
            const companyUserInviteRejectFormValue: CompanyUserInviteRejectForm = {
                acceptanceToken: companyUserInviteAcceptanceToken,
                userId: this.userStorageService.getUserId()
            };

            // reject
            this.companyApiService.rejectCompanyUserInvite(companyUserInviteRejectFormValue);

            // navigate to replace params
            this.router.navigate(
                [],
                {
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

    private handleCompanyUserRequest(companyUserRequestAcceptanceToken: string) {
        // log token
        this.loggerService.debug(this.fileName, 'ngOnInit', 'companyUserRequestAcceptanceToken', companyUserRequestAcceptanceToken);

        // get accepted
        const accepted = this.activatedRoute.snapshot.queryParamMap.get('accepted');

        if (accepted === 'true') {
            const companyUserRequestAcceptFormValue: CompanyUserRequestAcceptForm = {
                acceptanceToken: companyUserRequestAcceptanceToken
            };

            // accept
            this.companyApiService.acceptCompanyUserRequest(companyUserRequestAcceptFormValue);

            // navigate to replace params
            this.router.navigate(
                [],
                {
                    relativeTo: this.activatedRoute,
                    queryParams: {
                        // eslint-disable-next-line @typescript-eslint/naming-convention
                        company_user_request_acceptance_token: null,
                        accepted: null
                    },
                    queryParamsHandling: 'merge', // remove to replace all query params by provided
                }).then(() => {
                }
            );
        } else {
            const companyUserRequestRejectForm: CompanyUserRequestRejectForm = {
                acceptanceToken: companyUserRequestAcceptanceToken
            };

            // reject
            this.companyApiService.rejectCompanyUserRequest(companyUserRequestRejectForm);

            // navigate to replace params
            this.router.navigate(
                [],
                {
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
}
