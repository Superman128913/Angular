// Application
import { UserAuthGuard } from '../../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../../guards/company-user-auth.guard.service';
import { TraceabilityRequestClosedComponent } from './traceability-request-closed.component';
export const TRACEABILITY_REQUEST_CLOSED_ROUTES = [
    {
        path: '',
        component: TraceabilityRequestClosedComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=traceability-request-complete.routes.js.map
