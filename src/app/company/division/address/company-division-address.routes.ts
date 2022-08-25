// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyDivisionAddressComponent} from './company-division-address.component';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';

export const COMPANY_DIVISION_ADDRESS_ROUTES: Routes = [
    {
        path: '',
        component: CompanyDivisionAddressComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
