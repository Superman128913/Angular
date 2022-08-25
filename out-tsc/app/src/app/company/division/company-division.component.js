import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let CompanyDivisionComponent = class CompanyDivisionComponent {
    constructor(companyStorageService) {
        this.companyStorageService = companyStorageService;
        // paths
        this.companyDivisionsPath = GlobalConstants.companyDivisionsPath;
        this.companyDivisionsRegisterPath = GlobalConstants.companyDivisionsRegisterPath;
        this.companyDivisionsRegisterTitle = GlobalConstants.companyDivisionsRegisterTitle;
        // set company divisions list
        this.companyDivisionsList = this.companyStorageService.getCompanyDivisions();
    }
    /** Public **/
    ngOnInit() {
    }
};
CompanyDivisionComponent = __decorate([
    Component({
        selector: 'app-company-division',
        templateUrl: './company-division.component.html',
        styleUrls: ['./company-division.component.scss']
    })
], CompanyDivisionComponent);
export { CompanyDivisionComponent };
//# sourceMappingURL=company-division.component.js.map