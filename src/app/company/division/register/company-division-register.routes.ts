// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyDivisionRegisterComponent} from './company-division-register.component';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';

export const COMPANY_DIVISION_REGISTER_ROUTES: Routes = [
    {
        path: '',
        component: CompanyDivisionRegisterComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
