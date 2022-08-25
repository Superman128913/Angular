// Application
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
import { FileShareReportsComponent } from './file-share-reports.component';
export const FILE_SHARE_REPORTS_ROUTES = [
    {
        path: '',
        component: FileShareReportsComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=file-share-reports.routes.js.map