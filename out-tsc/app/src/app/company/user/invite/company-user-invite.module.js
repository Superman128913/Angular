import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_USER_INVITE_ROUTES } from './company-user-invite.routes';
import { SharedModule } from '../../../shared/shared.module';
let CompanyUserInviteModule = class CompanyUserInviteModule {
};
CompanyUserInviteModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_USER_INVITE_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyUserInviteModule);
export { CompanyUserInviteModule };
//# sourceMappingURL=company-user-invite.module.js.map