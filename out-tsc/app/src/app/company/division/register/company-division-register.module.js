import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_DIVISION_REGISTER_ROUTES } from './company-division-register.routes';
import { SharedModule } from '../../../shared/shared.module';
let CompanyDivisionRegisterModule = class CompanyDivisionRegisterModule {
};
CompanyDivisionRegisterModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_DIVISION_REGISTER_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyDivisionRegisterModule);
export { CompanyDivisionRegisterModule };
//# sourceMappingURL=company-division-register.module.js.map