import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { TAAS_REPORTS_ROUTES } from './traceability-reports.routes';
let TraceabilityReportsModule = class TraceabilityReportsModule {
};
TraceabilityReportsModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TAAS_REPORTS_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilityReportsModule);
export { TraceabilityReportsModule };
//# sourceMappingURL=traceability-reports.module.js.map