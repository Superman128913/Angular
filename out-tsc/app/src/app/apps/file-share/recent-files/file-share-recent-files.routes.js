// Application
import { FileShareRecentFilesComponent } from './file-share-recent-files.component';
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const FILE_SHARE_RECENT_FILES_ROUTES = [
    {
        path: '',
        component: FileShareRecentFilesComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=file-share-recent-files.routes.js.map