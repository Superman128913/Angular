// Application
import { CompanySettingComponent } from './company-setting.component';
import { CompanyUserAuthGuard } from '../../guards/company-user-auth.guard';
export const COMPANY_SETTINGS_ROUTES = [
    {
        path: '',
        component: CompanySettingComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=company-setting.routes.js.map