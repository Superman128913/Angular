import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SIGN_IN_ROUTES } from './sign-in.routes';
import { SharedModule } from '../shared/shared.module';
let SignInModule = class SignInModule {
};
SignInModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(SIGN_IN_ROUTES),
            SharedModule
        ],
        exports: []
    })
], SignInModule);
export { SignInModule };
//# sourceMappingURL=sign-in.module.js.map