// Application
import { FileShareAllFilesComponent } from './file-share-all-files.component';
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const FILE_SHARE_ALL_FILES_ROUTES = [
    {
        path: '',
        component: FileShareAllFilesComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=file-share-all-files.routes.js.map