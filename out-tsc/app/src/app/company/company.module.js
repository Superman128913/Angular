import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_ROUTES } from './company.routes';
import { SharedModule } from '../shared/shared.module';
import { CompanyRegisterComponent } from './register/company-register.component';
import { CompanyDivisionComponent } from './division/company-division.component';
import { CompanyDomainComponent } from './domain/company-domain.component';
import { CompanyUserComponent } from './user/company-user.component';
import { CompanySettingComponent } from './setting/company-setting.component';
import { CompanyJoinComponent } from './join/company-join.component';
let CompanyModule = class CompanyModule {
};
CompanyModule = __decorate([
    NgModule({
        declarations: [
            CompanyRegisterComponent,
            CompanyDivisionComponent,
            CompanyDomainComponent,
            CompanyUserComponent,
            CompanySettingComponent,
            CompanyJoinComponent
        ],
        imports: [
            RouterModule.forChild(COMPANY_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyModule);
export { CompanyModule };
//# sourceMappingURL=company.module.js.map