import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { TRACEABILITY_DASHBOARD_ROUTES } from './traceability-dashboard.routes';
import { SharedModule } from '../../../shared/shared.module';
let TraceabilityDashboardModule = class TraceabilityDashboardModule {
};
TraceabilityDashboardModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABILITY_DASHBOARD_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilityDashboardModule);
export { TraceabilityDashboardModule };
//# sourceMappingURL=traceability-dashboard.module.js.map