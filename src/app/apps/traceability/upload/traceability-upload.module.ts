// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {TRACEABILITY_UPLOAD_ROUTES} from './traceability-upload.routes';
import {TraceabilityUploadApiComponent} from './api/traceability-upload-api.component';
import {TraceabilityUploadDocumentComponent} from './document/traceability-upload-document.component';
import {TraceabilityUploadEmailComponent} from './email/traceability-upload-email.component';

@NgModule({
    declarations: [
        TraceabilityUploadApiComponent,
        TraceabilityUploadDocumentComponent,
        TraceabilityUploadEmailComponent
    ],
    imports: [
        RouterModule.forChild(TRACEABILITY_UPLOAD_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilityUploadModule {
}
