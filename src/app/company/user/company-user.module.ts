// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COMPANY_USER_ROUTES} from './company-user.routes';
import {SharedModule} from '../../shared/shared.module';
import {CompanyUserInviteComponent} from './invite/company-user-invite.component';
import {CompanyUserRequestComponent} from './request/company-user-request.component';

@NgModule({
    declarations: [
        CompanyUserInviteComponent,
        CompanyUserRequestComponent
    ],
    imports: [
        RouterModule.forChild(COMPANY_USER_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanyUserModule {
}
