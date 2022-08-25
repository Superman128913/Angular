// Application
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
import { FileShareSettingsComponent } from './file-share-settings.component';
export const FILE_SHARE_SETTINGS_ROUTES = [
    {
        path: '',
        component: FileShareSettingsComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=file-share-settings.routes.js.map