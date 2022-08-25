// Application
import { CompanyRegisterComponent } from './company-register.component';
import { UserAuthGuard } from '../../guards/user-auth.guard';
export const COMPANY_REGISTER_ROUTES = [
    {
        path: '',
        component: CompanyRegisterComponent,
        canActivate: [
            UserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-register.routes.js.map