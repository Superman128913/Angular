// Application
import { TraceabilityUploadApiComponent } from './traceability-upload-api.component';
import { UserAuthGuard } from '../../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../../guards/company-user-auth.guard';
export const TRACEABILITY_UPLOAD_API_ROUTES = [
    {
        path: '',
        component: TraceabilityUploadApiComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=traceability-upload-api.routes.js.map