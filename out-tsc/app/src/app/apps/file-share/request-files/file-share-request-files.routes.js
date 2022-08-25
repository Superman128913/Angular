// Application
import { FileShareRequestFilesComponent } from './file-share-request-files.component';
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const FILE_SHARE_REQUEST_FILES_ROUTES = [
    {
        path: '',
        component: FileShareRequestFilesComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=file-share-request-files.routes.js.map