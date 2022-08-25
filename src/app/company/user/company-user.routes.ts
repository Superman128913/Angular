// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyUserComponent} from './company-user.component';
import {CompanyUserAuthGuard} from '../../guards/company-user-auth.guard';

export const COMPANY_USER_ROUTES: Routes = [
    {
        path: '',
        component: CompanyUserComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    },
    {
        // company user invite
        path: 'invite',
        loadChildren: () => import('./invite/company-user-invite.module').then(m => m.CompanyUserInviteModule),
        canActivate: [
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Invite'
            }
        }
    },
    {
        // company user request
        path: 'request',
        loadChildren: () => import('./request/company-user-request.module').then(m => m.CompanyUserRequestModule),
        canActivate: [
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                disable: true
            }
        }
    }
];
