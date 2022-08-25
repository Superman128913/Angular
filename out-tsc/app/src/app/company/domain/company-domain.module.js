import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_DOMAIN_ROUTES } from './company-domain.routes';
import { SharedModule } from '../../shared/shared.module';
let CompanyDomainModule = class CompanyDomainModule {
};
CompanyDomainModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_DOMAIN_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyDomainModule);
export { CompanyDomainModule };
//# sourceMappingURL=company-domain.module.js.map