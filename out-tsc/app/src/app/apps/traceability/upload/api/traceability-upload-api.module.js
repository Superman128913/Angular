import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../../shared/shared.module';
import { TRACEABILITY_UPLOAD_API_ROUTES } from './traceability-upload-api.routes';
let TraceabilityUploadApiModule = class TraceabilityUploadApiModule {
};
TraceabilityUploadApiModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABILITY_UPLOAD_API_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilityUploadApiModule);
export { TraceabilityUploadApiModule };
//# sourceMappingURL=traceability-upload-api.module.js.map