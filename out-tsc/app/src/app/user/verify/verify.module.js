import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { VERIFY_ROUTES } from './verify.routes';
import { SharedModule } from '../../shared/shared.module';
let VerifyModule = class VerifyModule {
};
VerifyModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(VERIFY_ROUTES),
            SharedModule
        ],
        exports: []
    })
], VerifyModule);
export { VerifyModule };
//# sourceMappingURL=verify.module.js.map