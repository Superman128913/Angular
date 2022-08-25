import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../../shared/global-constants';
let CompanyUserComponent = class CompanyUserComponent {
    constructor(router, activatedRoute, userStorageService, companyStorageService, companyApiService, loggerService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userStorageService = userStorageService;
        this.companyStorageService = companyStorageService;
        this.companyApiService = companyApiService;
        this.loggerService = loggerService;
        this.isUserCompanyAdministrator = false;
        // paths
        this.companyUsersInvitePath = GlobalConstants.companyUsersInvitePath;
        // private
        this.fileName = 'CompanyUserComponent';
        // set company users list
        this.companyUsersList = this.companyStorageService.getCompanyUsers();
        // set is user company administrator
        this.isUserCompanyAdministrator = this.userStorageService.isCurrentUserCompanyAdmin();
        // log is user company administrator
        this.loggerService.debug(this.fileName, 'constructor', 'isUserCompanyAdministrator', this.isUserCompanyAdministrator);
    }
    ngOnInit() {
    }
    /** Public **/
    isUserCurrentUser(userId) {
        return this.userStorageService.isUserCurrentUser(userId);
    }
    isCurrentUserLastCompanyAdmin() {
        return this.userStorageService.isCurrentUserLastCompanyAdmin();
    }
    resendCompanyUserInvite() {
    }
    removeUserFromCompany(companyUserId) {
        // remove company user
        this.companyApiService.removeCompanyUser(companyUserId);
    }
};
CompanyUserComponent = __decorate([
    Component({
        selector: 'app-company-user',
        templateUrl: './company-user.component.html',
        styleUrls: ['./company-user.component.scss']
    })
], CompanyUserComponent);
export { CompanyUserComponent };
//# sourceMappingURL=company-user.component.js.map