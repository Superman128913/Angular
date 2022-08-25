// Application
import { TraceabilitySendComponent } from './traceability-send.component';
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
import { ShareFilesResolver } from '../../../resolvers/share-files.resolver';
export const TRACEABILITY_SEND_ROUTES = [
    {
        path: '',
        component: TraceabilitySendComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        resolve: {
            documents: ShareFilesResolver
        },
        data: {
            sent: true
        }
    }
];
//# sourceMappingURL=traceability-send.routes.js.map