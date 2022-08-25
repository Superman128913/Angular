import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { PRESS_CENTER_ROUTES } from './press.routes';
import { SharedModule } from '../../shared/shared.module';
let PressModule = class PressModule {
};
PressModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(PRESS_CENTER_ROUTES),
            SharedModule
        ]
    })
], PressModule);
export { PressModule };
//# sourceMappingURL=press.module.js.map