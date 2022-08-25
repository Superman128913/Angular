// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyDomainComponent} from './company-domain.component';
import {CompanyUserAuthGuard} from '../../guards/company-user-auth.guard';

export const COMPANY_DOMAIN_ROUTES: Routes = [
    {
        path: '',
        component: CompanyDomainComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
