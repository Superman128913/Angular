import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { REGISTER_ROUTES } from './register.routes';
import { SharedModule } from '../shared/shared.module';
let RegisterModule = class RegisterModule {
};
RegisterModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(REGISTER_ROUTES),
            SharedModule
        ],
        exports: []
    })
], RegisterModule);
export { RegisterModule };
//# sourceMappingURL=register.module.js.map