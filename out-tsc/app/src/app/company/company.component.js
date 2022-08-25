import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../shared/global-constants';
let CompanyComponent = class CompanyComponent {
    constructor() {
        // paths
        this.companyDivisionsPath = GlobalConstants.companyDivisionsPath;
        this.companyUsersPath = GlobalConstants.companyUsersPath;
        this.companyDomainsPath = GlobalConstants.companyDomainsPath;
        this.companySettingsPath = GlobalConstants.companySettingsPath;
    }
    ngOnInit() {
    }
};
CompanyComponent = __decorate([
    Component({
        selector: 'app-company',
        templateUrl: './company.component.html',
        styleUrls: ['./company.component.scss']
    })
], CompanyComponent);
export { CompanyComponent };
//# sourceMappingURL=company.component.js.map