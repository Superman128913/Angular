// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COMPANY_DIVISION_ADDRESS_ROUTES} from './company-division-address.routes';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(COMPANY_DIVISION_ADDRESS_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanyDivisionAddressModule {
}
