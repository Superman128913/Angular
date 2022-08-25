import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { TAAS_SETTINGS_ROUTES } from './traceability-settings.routes';
let TraceabilitySettingsModule = class TraceabilitySettingsModule {
};
TraceabilitySettingsModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TAAS_SETTINGS_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilitySettingsModule);
export { TraceabilitySettingsModule };
//# sourceMappingURL=traceability-settings.module.js.map