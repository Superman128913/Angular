// Application
import { CompanyUserComponent } from './company-user.component';
import { CompanyUserAuthGuard } from '../../guards/company-user-auth.guard';
export const COMPANY_USER_ROUTES = [
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
        data: {
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
        data: {
            breadcrumb: {
                disable: true
            }
        }
    }
];
//# sourceMappingURL=company-user.routes.js.map