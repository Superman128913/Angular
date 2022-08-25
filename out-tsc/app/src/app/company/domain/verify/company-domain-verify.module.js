import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_DOMAIN_VERIFY_ROUTES } from './company-domain-verify.routes';
import { SharedModule } from '../../../shared/shared.module';
let CompanyDomainVerifyModule = class CompanyDomainVerifyModule {
};
CompanyDomainVerifyModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_DOMAIN_VERIFY_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyDomainVerifyModule);
export { CompanyDomainVerifyModule };
//# sourceMappingURL=company-domain-verify.module.js.map