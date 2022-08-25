import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { ADMIN_ROUTES } from './admin.routes';
import { SharedModule } from '../shared/shared.module';
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(ADMIN_ROUTES),
            SharedModule
        ]
    })
], AdminModule);
export { AdminModule };
//# sourceMappingURL=admin.module.js.map