import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COOKIE_POLICY_ROUTES } from './cookie-policy.routes';
import { SharedModule } from '../../shared/shared.module';
let CookiePolicyModule = class CookiePolicyModule {
};
CookiePolicyModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(COOKIE_POLICY_ROUTES),
            SharedModule
        ]
    })
], CookiePolicyModule);
export { CookiePolicyModule };
//# sourceMappingURL=cookie-policy.module.js.map