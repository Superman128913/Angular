// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyDivisionUpdateComponent} from './company-division-update.component';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';

export const COMPANY_DIVISION_UPDATE_ROUTES: Routes = [
    {
        path: '',
        component: CompanyDivisionUpdateComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
