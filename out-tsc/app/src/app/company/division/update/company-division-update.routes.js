// Application
import { CompanyDivisionUpdateComponent } from './company-division-update.component';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const COMPANY_DIVISION_UPDATE_ROUTES = [
    {
        path: '',
        component: CompanyDivisionUpdateComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-division-update.routes.js.map