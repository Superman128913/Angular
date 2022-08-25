import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { QUALITY_ROUTES } from './quality.routes';
import { SharedModule } from '../../shared/shared.module';
let QualityModule = class QualityModule {
};
QualityModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(QUALITY_ROUTES),
            SharedModule
        ]
    })
], QualityModule);
export { QualityModule };
//# sourceMappingURL=quality.module.js.map