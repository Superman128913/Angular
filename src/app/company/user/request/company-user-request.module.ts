// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {COMPANY_USER_REQUEST_ROUTES} from './company-user-request.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(COMPANY_USER_REQUEST_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanyUserRequestModule {
}
