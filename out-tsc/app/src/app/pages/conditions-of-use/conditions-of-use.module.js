import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { CONDITIONS_OF_USE_ROUTES } from './conditions-of-use.routes';
import { SharedModule } from '../../shared/shared.module';
let ConditionsOfUseModule = class ConditionsOfUseModule {
};
ConditionsOfUseModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(CONDITIONS_OF_USE_ROUTES),
            SharedModule
        ]
    })
], ConditionsOfUseModule);
export { ConditionsOfUseModule };
//# sourceMappingURL=conditions-of-use.module.js.map