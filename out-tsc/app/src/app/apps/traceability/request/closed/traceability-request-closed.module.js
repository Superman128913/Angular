import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../../shared/shared.module';
import { TRACEABILITY_REQUEST_CLOSED_ROUTES } from './traceability-request-closed.routes';
let TraceabilityRequestClosedModule = class TraceabilityRequestClosedModule {
};
TraceabilityRequestClosedModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABILITY_REQUEST_CLOSED_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilityRequestClosedModule);
export { TraceabilityRequestClosedModule };
//# sourceMappingURL=traceability-request-complete.module.js.map
