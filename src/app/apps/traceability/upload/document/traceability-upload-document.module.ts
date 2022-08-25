// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../../shared/shared.module';
import {TRACEABILITY_UPLOAD_DOCUMENT_ROUTES} from './traceability-upload-document.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TRACEABILITY_UPLOAD_DOCUMENT_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilityUploadDocumentModule {
}
