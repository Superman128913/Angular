// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
// Application
import {CustomSvgsModule} from '../svgs/custom-svgs.module';
// Components
import {CompanyDivisionAddressFormComponent} from './company-division-address-form/company-division-address-form.component';
import {CompanyDivisionFormComponent} from './company-division-form/company-division-form.component';
import {CompanyRegisterFormComponent} from './company-register-form/company-register-form.component';
import {CompanyUserInviteFormComponent} from './company-user-invite-form/company-user-invite-form.component';
import {
    TraceabilityDocumentUploadFormComponent
} from './traceability-document-upload-form/traceability-document-upload-form.component';
import {UserChangePasswordFormComponent} from './user-change-password-form/user-change-password-form.component';
import {UserProfileFormComponent} from './user-profile-form/user-profile-form.component';
import {UserRegisterFormComponent} from './user-register-form/user-register-form.component';
import {UserResetPasswordFormComponent} from './user-reset-password-form/user-reset-password-form.component';
import {UserSignInFormComponent} from './user-sign-in-form/user-sign-in-form.component';
import {CompanySettingsFormComponent} from './company-settings-form/company-settings-form.component';
import {CompanyDomainFormComponent} from './company-domain-form/company-domain-form.component';
import {UserRegisterHomeFormComponent} from './user-register-home-form/user-register-home-form.component';
import {TraceabilityRequestNewFormComponent} from './traceability-request-new-form/traceability-request-new-form.component';
import {TraceabilityShareFormComponent} from './traceability-share-form/traceability-share-form.component';
import {UserDevToolsComponent} from '../components/dev-tools/user/user-dev-tools.component';
import {CompanyDevToolsComponent} from '../components/dev-tools/company/company-dev-tools.component';
import {TraceabilityDevToolsComponent} from '../components/dev-tools/traceability/traceability-dev-tools.component';
import {CompanyUserRequestFormComponent} from './company-user-request-form/company-user-request-form.component';
import {UserSettingsFormComponent} from './user-settings-form/user-settings-form.component';
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {QRCodeModule} from 'angularx-qrcode';
import {OverlayModule} from '@angular/cdk/overlay';
import {
    TraceabilityDocumentRenameFormComponent
} from './traceability-document-rename-form/traceability-document-rename-form.component';

@NgModule({
    declarations: [
        CompanyDivisionAddressFormComponent,
        CompanyDivisionFormComponent,
        CompanyDomainFormComponent,
        CompanyRegisterFormComponent,
        CompanySettingsFormComponent,
        CompanyUserInviteFormComponent,
        CompanyUserRequestFormComponent,
        TraceabilityDocumentRenameFormComponent,
        TraceabilityDocumentUploadFormComponent,
        TraceabilityRequestNewFormComponent,
        TraceabilityShareFormComponent,
        UserChangePasswordFormComponent,
        UserProfileFormComponent,
        UserRegisterFormComponent,
        UserRegisterHomeFormComponent,
        UserResetPasswordFormComponent,
        UserSettingsFormComponent,
        UserSignInFormComponent,
        UserDevToolsComponent,
        CompanyDevToolsComponent,
        TraceabilityDevToolsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CustomSvgsModule,
        OverlayModule,
        NgbModalModule,
        DataTablesModule,
        NgbModalModule,
        QRCodeModule
    ],
    exports: [
        CompanyDivisionAddressFormComponent,
        CompanyDivisionFormComponent,
        CompanyDomainFormComponent,
        CompanyRegisterFormComponent,
        CompanySettingsFormComponent,
        CompanyUserInviteFormComponent,
        TraceabilityDocumentUploadFormComponent,
        UserChangePasswordFormComponent,
        UserProfileFormComponent,
        UserRegisterFormComponent,
        UserResetPasswordFormComponent,
        UserSignInFormComponent,
        UserRegisterHomeFormComponent,
        TraceabilityRequestNewFormComponent,
        TraceabilityShareFormComponent,
        UserDevToolsComponent,
        CompanyDevToolsComponent,
        TraceabilityDevToolsComponent,
        CompanyUserRequestFormComponent,
        UserSettingsFormComponent,
        TraceabilityDocumentRenameFormComponent
    ],
    providers: [
        NgbActiveModal
    ]
})
export class CustomFormsModule {
}
