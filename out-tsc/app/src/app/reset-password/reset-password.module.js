import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { RESET_PASSWORD_ROUTES } from './reset-password.routes';
import { SharedModule } from '../shared/shared.module';
let ResetPasswordModule = class ResetPasswordModule {
};
ResetPasswordModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(RESET_PASSWORD_ROUTES),
            SharedModule
        ],
        exports: []
    })
], ResetPasswordModule);
export { ResetPasswordModule };
//# sourceMappingURL=reset-password.module.js.map