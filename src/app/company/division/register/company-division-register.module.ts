// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COMPANY_DIVISION_REGISTER_ROUTES} from './company-division-register.routes';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(COMPANY_DIVISION_REGISTER_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanyDivisionRegisterModule {
}
