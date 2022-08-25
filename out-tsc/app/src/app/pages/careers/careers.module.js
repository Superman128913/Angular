import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { CAREERS_ROUTES } from './careers.routes';
import { SharedModule } from '../../shared/shared.module';
let CareersModule = class CareersModule {
};
CareersModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(CAREERS_ROUTES),
            SharedModule
        ]
    })
], CareersModule);
export { CareersModule };
//# sourceMappingURL=careers.module.js.map