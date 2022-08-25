"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUserComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var global_constants_1 = require("../../shared/global-constants");
var CompanyUserComponent = /** @class */ (function () {
    function CompanyUserComponent(storageService, companyApiService, loggerService) {
        this.storageService = storageService;
        this.companyApiService = companyApiService;
        this.loggerService = loggerService;
        this.isUserCompanyAdministrator = false;
        // paths
        this.companyUsersInvitePath = global_constants_1.GlobalConstants.companyUsersInvitePath;
        // set company users list
        this.companyUsersList = this.storageService.getCompanyUsers();
        // log company users list
        console.log('companyUserDashboard companyUsersList: ', this.companyUsersList);
        // set is user company administrator
        this.isUserCompanyAdministrator = this.storageService.isUserCompanyAdmin();
        // log is user company administrator
        this.loggerService.debug('companyUserInviteComponent', 'constructor', 'isUserCompanyAdministrator', this.isUserCompanyAdministrator);
    }
    CompanyUserComponent.prototype.ngOnInit = function () {
    };
    /** Public **/
    CompanyUserComponent.prototype.log = function (message) {
        console.log(message);
    };
    CompanyUserComponent.prototype.isUserCurrentUser = function (userId) {
        return this.storageService.isUserCurrentUser(userId);
    };
    CompanyUserComponent.prototype.resendCompanyUserInvite = function () {
    };
    CompanyUserComponent.prototype.removeUserFromCompany = function (companyUserId) {
        this.companyApiService.removeCompanyUser(companyUserId).subscribe(function (next) {
            // log data
            console.log(next);
            // // remove domain in array
            // this.removeDomainFromDomainsArray(domain);
            //
            // if (this.getCompanyDomainsArray().length === 0) {
            //
            //     // create company domain item with no data
            //     this.getCompanyDomainsArray().push(this.createAdditionalCompanyDomainItem());
            // }
            // log message
            console.log('companyUserDashboardComponent removeUserFromCompany next.');
        }, function (error) {
            // log error
            console.log(error);
            // log message
            console.log('companyUserDashboardComponent removeUserFromCompany error.');
        }, function () {
            // log message
            console.log('companyUserDashboardComponent removeUserFromCompany completed.');
        });
    };
    CompanyUserComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company-user',
            templateUrl: './company-user.component.html',
            styleUrls: ['./company-user.component.scss']
        })
    ], CompanyUserComponent);
    return CompanyUserComponent;
}());
exports.CompanyUserComponent = CompanyUserComponent;
