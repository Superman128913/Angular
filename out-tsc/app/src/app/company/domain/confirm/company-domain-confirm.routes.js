// Application
import { CompanyDomainConfirmComponent } from './company-domain-confirm.component';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard.service';
export const COMPANY_DOMAIN_CONFIRM_ROUTES = [
    {
        path: '',
        component: CompanyDomainConfirmComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-domain-confirm.routes.js.map