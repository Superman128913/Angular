// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COMPANY_DIVISION_ROUTES} from './company-division.routes';
import {SharedModule} from '../../shared/shared.module';
import {CompanyDivisionRegisterComponent} from './register/company-division-register.component';
import {CompanyDivisionAddressComponent} from './address/company-division-address.component';
import {CompanyDivisionUpdateComponent} from './update/company-division-update.component';

@NgModule({
    declarations: [
        CompanyDivisionRegisterComponent,
        CompanyDivisionUpdateComponent,
        CompanyDivisionAddressComponent
    ],
    imports: [
        RouterModule.forChild(COMPANY_DIVISION_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanyDivisionModule {
}
