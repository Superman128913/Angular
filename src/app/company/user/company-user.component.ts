// Angular
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// Application
import {UserStorageService} from '../../services/storage/user-storage.service';
import {CompanyUser} from '../../shared/models/company_user.model';
import {CompanyApiService} from '../../services/api/company-api.service';
import {LoggerService} from '../../services/logger.service';
import {GlobalConstants} from '../../shared/global-constants';
import {CompanyStorageService} from '../../services/storage/company-storage.service';

@Component({
    selector: 'app-company-user',
    templateUrl: './company-user.component.html',
    styleUrls: ['./company-user.component.scss']
})
export class CompanyUserComponent implements OnInit {

    // initialize company users variables
    public companyUsersList: Array<CompanyUser>;
    public isUserCompanyAdministrator = false;
    // paths
    public companyUsersInvitePath = GlobalConstants.companyUsersInvitePath;
    // private
    private fileName = 'CompanyUserComponent';

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private userStorageService: UserStorageService,
                private companyStorageService: CompanyStorageService,
                private companyApiService: CompanyApiService,
                private loggerService: LoggerService) {
        // set company users list
        this.companyUsersList = this.companyStorageService.getCompanyUsers();
        // set is user company administrator
        this.isUserCompanyAdministrator = this.userStorageService.isCurrentUserCompanyAdmin();
        // log is user company administrator
        this.loggerService.debug(
            this.fileName,
            'constructor',
            'isUserCompanyAdministrator',
            this.isUserCompanyAdministrator
        );
    }

    ngOnInit(): void {
    }

    /** Public **/

    public isUserCurrentUser(userId: bigint) {
        return this.userStorageService.isUserCurrentUser(userId);
    }

    public isCurrentUserLastCompanyAdmin() {
        return this.userStorageService.isCurrentUserLastCompanyAdmin();
    }

    public resendCompanyUserInvite() {

    }

    public removeUserFromCompany(companyUserId: bigint) {
        // remove company user
        this.companyApiService.removeCompanyUser(companyUserId);
    }



    /** Private **/

}
