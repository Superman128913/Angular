import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_JOIN_ROUTES } from './company-join.routes';
import { SharedModule } from '../../shared/shared.module';
let CompanyJoinModule = class CompanyJoinModule {
};
CompanyJoinModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_JOIN_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyJoinModule);
export { CompanyJoinModule };
//# sourceMappingURL=company-join.module.js.map