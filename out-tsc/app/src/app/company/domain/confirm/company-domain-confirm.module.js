import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_DOMAIN_CONFIRM_ROUTES } from './company-domain-confirm.routes';
import { SharedModule } from '../../../shared/shared.module';
let CompanyDomainConfirmModule = class CompanyDomainConfirmModule {
};
CompanyDomainConfirmModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_DOMAIN_CONFIRM_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyDomainConfirmModule);
export { CompanyDomainConfirmModule };
//# sourceMappingURL=company-domain-confirm.module.js.map