import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { CONFIRMATION_ROUTES } from './confirmation.routes';
import { SharedModule } from '../shared/shared.module';
let ConfirmationModule = class ConfirmationModule {
};
ConfirmationModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(CONFIRMATION_ROUTES),
            SharedModule
        ],
        exports: []
    })
], ConfirmationModule);
export { ConfirmationModule };
//# sourceMappingURL=confirmation.module.js.map