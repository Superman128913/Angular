// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COMPANY_REGISTER_ROUTES} from './company-register.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(COMPANY_REGISTER_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanyRegisterModule {
}
