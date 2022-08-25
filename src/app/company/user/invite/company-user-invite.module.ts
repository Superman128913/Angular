// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COMPANY_USER_INVITE_ROUTES} from './company-user-invite.routes';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(COMPANY_USER_INVITE_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanyUserInviteModule {
}
