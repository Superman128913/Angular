// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';
import {CompanyUserRequestComponent} from './company-user-request.component';

export const COMPANY_USER_REQUEST_ROUTES: Routes = [
    {
        path: '',
        component: CompanyUserRequestComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
