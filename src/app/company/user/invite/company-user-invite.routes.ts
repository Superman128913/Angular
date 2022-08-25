// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyUserInviteComponent} from './company-user-invite.component';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';

export const COMPANY_USER_INVITE_ROUTES: Routes = [
    {
        path: '',
        component: CompanyUserInviteComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
