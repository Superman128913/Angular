// Application
import { CompanyUserInviteComponent } from './company-user-invite.component';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const COMPANY_USER_INVITE_ROUTES = [
    {
        path: '',
        component: CompanyUserInviteComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-user-invite.routes.js.map