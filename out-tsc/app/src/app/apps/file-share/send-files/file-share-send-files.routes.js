// Application
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
import { FileShareSendFilesComponent } from './file-share-send-files.component';
export const FILE_SHARE_SEND_FILES_ROUTES = [
    {
        path: '',
        component: FileShareSendFilesComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
    }
];
//# sourceMappingURL=file-share-send-files.routes.js.map