import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { CHANGE_PASSWORD_ROUTES } from './change-password.routes';
import { SharedModule } from '../../shared/shared.module';
let ChangePasswordModule = class ChangePasswordModule {
};
ChangePasswordModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(CHANGE_PASSWORD_ROUTES),
            SharedModule
        ],
        exports: []
    })
], ChangePasswordModule);
export { ChangePasswordModule };
//# sourceMappingURL=change-password.module.js.map