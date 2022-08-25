// Application
import { CompanyJoinComponent } from './company-join.component';
import { UserAuthGuard } from '../../guards/user-auth.guard';
export const COMPANY_JOIN_ROUTES = [
    {
        path: '',
        component: CompanyJoinComponent,
        canActivate: [
            UserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-join.routes.js.map