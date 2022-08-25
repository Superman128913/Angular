// Application
import { FileShareTrashComponent } from './file-share-trash.component';
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const FILE_SHARE_TRASH_ROUTES = [
    {
        path: '',
        component: FileShareTrashComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=file-share-trash.routes.js.map