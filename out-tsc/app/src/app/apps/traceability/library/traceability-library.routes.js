// Application
import { TraceabilityLibraryComponent } from './traceability-library.component';
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
import { TraceabilityDocumentsResolver } from '../../../resolvers/traceability-documents.resolver';
export const TRACEABILITY_LIBRARY_ROUTES = [
    {
        path: '',
        component: TraceabilityLibraryComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        resolve: {
            documents: TraceabilityDocumentsResolver
        },
        data: {
            allDocuments: true
        }
    }
];
//# sourceMappingURL=traceability-library.routes.js.map