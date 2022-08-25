// Application
import { CompanyDomainVerifyComponent } from './company-domain-verify.component';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard.service';
export const COMPANY_DOMAIN_VERIFY_ROUTES = [
    {
        path: '',
        component: CompanyDomainVerifyComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-domain-verify.routes.js.map