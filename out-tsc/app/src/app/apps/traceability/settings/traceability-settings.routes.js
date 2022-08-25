// Application
import { TraceabilitySettingsComponent } from './traceability-settings.component';
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const TAAS_SETTINGS_ROUTES = [
    {
        path: '',
        component: TraceabilitySettingsComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=traceability-settings.routes.js.map