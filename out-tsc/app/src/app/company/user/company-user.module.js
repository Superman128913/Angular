import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_USER_ROUTES } from './company-user.routes';
import { SharedModule } from '../../shared/shared.module';
import { CompanyUserInviteComponent } from './invite/company-user-invite.component';
import { CompanyUserRequestComponent } from './request/company-user-request.component';
let CompanyUserModule = class CompanyUserModule {
};
CompanyUserModule = __decorate([
    NgModule({
        declarations: [
            CompanyUserInviteComponent,
            CompanyUserRequestComponent
        ],
        imports: [
            RouterModule.forChild(COMPANY_USER_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyUserModule);
export { CompanyUserModule };
//# sourceMappingURL=company-user.module.js.map