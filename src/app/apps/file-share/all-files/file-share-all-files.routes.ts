// Angular
import {Routes} from '@angular/router';
// Application
import {FileShareAllFilesComponent} from './file-share-all-files.component';
import {UserAuthGuard} from '../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';

export const FILE_SHARE_ALL_FILES_ROUTES: Routes = [
    {
        path: '',
        component: FileShareAllFilesComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
