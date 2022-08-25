// Application
import { CompanyDivisionRegisterComponent } from './company-division-register.component';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const COMPANY_DIVISION_REGISTER_ROUTES = [
    {
        path: '',
        component: CompanyDivisionRegisterComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-division-register.routes.js.map