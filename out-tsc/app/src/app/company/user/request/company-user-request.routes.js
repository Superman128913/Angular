// Application
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
import { CompanyUserRequestComponent } from './company-user-request.component';
export const COMPANY_USER_REQUEST_ROUTES = [
    {
        path: '',
        component: CompanyUserRequestComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-user-request.routes.js.map