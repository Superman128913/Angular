// Angular
import {Routes} from '@angular/router';
// Application
import {UserAuthGuard} from '../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';
import {FileShareReportsComponent} from './file-share-reports.component';

export const FILE_SHARE_REPORTS_ROUTES: Routes = [
    {
        path: '',
        component: FileShareReportsComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
