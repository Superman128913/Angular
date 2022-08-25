import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_DIVISION_UPDATE_ROUTES } from './company-division-update.routes';
import { SharedModule } from '../../../shared/shared.module';
let CompanyDivisionUpdateModule = class CompanyDivisionUpdateModule {
};
CompanyDivisionUpdateModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_DIVISION_UPDATE_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyDivisionUpdateModule);
export { CompanyDivisionUpdateModule };
//# sourceMappingURL=company-division-update.module.js.map