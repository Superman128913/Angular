import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Libraries
import { CodeInputModule } from 'angular-code-input';
import { QRCodeModule } from 'angularx-qrcode';
// Application
import { SvgsModule } from '../svgs/svgs.module';
import { UserSignInModalComponent } from './user-sign-in-modal/user-sign-in-modal.component';
import { UserSettingsFormModalComponent } from './user-settings-form-modal/user-settings-form-modal.component';
import { TraceabilityDocumentRenameModalComponent } from './traceability-document-rename-modal/traceability-document-rename-modal.component';
import { CustomFormsModule } from '../forms/custom-forms.module';
let CustomModalsModule = class CustomModalsModule {
};
CustomModalsModule = __decorate([
    NgModule({
        declarations: [
            UserSignInModalComponent,
            UserSettingsFormModalComponent,
            TraceabilityDocumentRenameModalComponent
        ],
        imports: [
            CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
            SvgsModule,
            CodeInputModule,
            QRCodeModule,
            CustomFormsModule
        ],
        exports: [
            UserSignInModalComponent,
            UserSettingsFormModalComponent
        ],
        providers: []
    })
], CustomModalsModule);
export { CustomModalsModule };
//# sourceMappingURL=custom-modals.module.js.map