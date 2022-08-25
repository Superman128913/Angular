// Angular
import {Routes} from '@angular/router';
// Application
import {FileShareRequestFilesComponent} from './file-share-request-files.component';
import {UserAuthGuard} from '../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';

export const FILE_SHARE_REQUEST_FILES_ROUTES: Routes = [
    {
        path: '',
        component: FileShareRequestFilesComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
