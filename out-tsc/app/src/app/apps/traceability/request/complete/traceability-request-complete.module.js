import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../../shared/shared.module';
import { TRACEABILITY_REQUEST_COMPLETE_ROUTES } from './traceability-request-complete.routes';
let TraceabilityRequestCompleteModule = class TraceabilityRequestCompleteModule {
};
TraceabilityRequestCompleteModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABILITY_REQUEST_COMPLETE_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilityRequestCompleteModule);
export { TraceabilityRequestCompleteModule };
//# sourceMappingURL=traceability-request-complete.module.js.map