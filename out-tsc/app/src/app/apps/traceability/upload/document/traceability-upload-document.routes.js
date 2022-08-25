// Application
import { TraceabilityUploadDocumentComponent } from './traceability-upload-document.component';
import { UserAuthGuard } from '../../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../../guards/company-user-auth.guard';
export const TRACEABILITY_UPLOAD_DOCUMENT_ROUTES = [
    {
        path: '',
        component: TraceabilityUploadDocumentComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=traceability-upload-document.routes.js.map