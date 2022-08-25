// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Libraries
import {CodeInputModule} from 'angular-code-input';
import {QRCodeModule} from 'angularx-qrcode';
// Application
import {CustomSvgsModule} from '../svgs/custom-svgs.module';
import {UserSignInModalComponent} from './user-sign-in-modal/user-sign-in-modal.component';
import {UserSettingsFormModalComponent} from './user-settings-form-modal/user-settings-form-modal.component';
import {
    TraceabilityDocumentRenameModalComponent
} from './traceability-document-rename-modal/traceability-document-rename-modal.component';
import {
    TraceabilityShareModalComponent
} from './traceability-share-modal/traceability-share-modal.component';
import {
    TraceabilityExportModalComponent
} from './traceability-export-modal/traceability-export-modal.component';
import {CustomFormsModule} from '../forms/custom-forms.module';
import { PdfViewerModalComponent } from './pdf-viewer-modal/pdf-viewer-modal.component';

@NgModule({
    declarations: [
        UserSignInModalComponent,
        UserSettingsFormModalComponent,
        TraceabilityDocumentRenameModalComponent,
        TraceabilityShareModalComponent,
        TraceabilityExportModalComponent,
        PdfViewerModalComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CustomSvgsModule,
        CodeInputModule,
        QRCodeModule,
        CustomFormsModule
    ],
    exports: [
        UserSignInModalComponent,
        UserSettingsFormModalComponent,
        TraceabilityDocumentRenameModalComponent,
        TraceabilityShareModalComponent,
        TraceabilityExportModalComponent,
        PdfViewerModalComponent
    ],
    providers: [
    ]
})
export class CustomModalsModule {
}
