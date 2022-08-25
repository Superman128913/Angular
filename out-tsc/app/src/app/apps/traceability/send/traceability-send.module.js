import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { TRACEABILITY_SEND_ROUTES } from './traceability-send.routes';
let TraceabilitySendModule = class TraceabilitySendModule {
};
TraceabilitySendModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABILITY_SEND_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilitySendModule);
export { TraceabilitySendModule };
//# sourceMappingURL=traceability-send.module.js.map