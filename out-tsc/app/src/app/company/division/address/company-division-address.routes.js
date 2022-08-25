// Application
import { CompanyDivisionAddressComponent } from './company-division-address.component';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const COMPANY_DIVISION_ADDRESS_ROUTES = [
    {
        path: '',
        component: CompanyDivisionAddressComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-division-address.routes.js.map