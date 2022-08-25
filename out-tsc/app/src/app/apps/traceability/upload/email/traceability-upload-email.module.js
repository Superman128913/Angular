import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../../shared/shared.module';
import { TRACEABILITY_UPLOAD_EMAIL_ROUTES } from './traceability-upload-email.routes';
let TraceabilityUploadEmailModule = class TraceabilityUploadEmailModule {
};
TraceabilityUploadEmailModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABILITY_UPLOAD_EMAIL_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilityUploadEmailModule);
export { TraceabilityUploadEmailModule };
//# sourceMappingURL=traceability-upload-email.module.js.map