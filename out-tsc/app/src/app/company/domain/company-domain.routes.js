// Application
import { CompanyDomainComponent } from './company-domain.component';
import { CompanyUserAuthGuard } from '../../guards/company-user-auth.guard';
export const COMPANY_DOMAIN_ROUTES = [
    {
        path: '',
        component: CompanyDomainComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-domain.routes.js.map