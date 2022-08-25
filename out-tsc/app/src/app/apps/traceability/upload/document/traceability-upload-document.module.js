import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../../shared/shared.module';
import { TRACEABILITY_UPLOAD_DOCUMENT_ROUTES } from './traceability-upload-document.routes';
let TraceabilityUploadDocumentModule = class TraceabilityUploadDocumentModule {
};
TraceabilityUploadDocumentModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABILITY_UPLOAD_DOCUMENT_ROUTES),
            SharedModule
        ],
        exports: []
    })
], TraceabilityUploadDocumentModule);
export { TraceabilityUploadDocumentModule };
//# sourceMappingURL=traceability-upload-document.module.js.map