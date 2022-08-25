import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_REGISTER_ROUTES } from './company-register.routes';
import { SharedModule } from '../../shared/shared.module';
let CompanyRegisterModule = class CompanyRegisterModule {
};
CompanyRegisterModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_REGISTER_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyRegisterModule);
export { CompanyRegisterModule };
//# sourceMappingURL=company-register.module.js.map