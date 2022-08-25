import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../../shared/shared.module';
import { TRACEABILITY_REQUEST_OPEN_ROUTES } from './traceability-request-open.routes';
let TraceabilityRequestOpenModule = class TraceabilityRequestOpenModule {
};
TraceabilityRequestOpenModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABILITY_REQUEST_OPEN_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilityRequestOpenModule);
export { TraceabilityRequestOpenModule };
//# sourceMappingURL=traceability-request-open.module.js.map