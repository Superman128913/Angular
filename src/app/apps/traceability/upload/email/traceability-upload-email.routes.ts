// Angular
import {Routes} from '@angular/router';
// Application
import {TraceabilityUploadEmailComponent} from './traceability-upload-email.component';
import {UserAuthGuard} from '../../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../../guards/company-user-auth.guard';

export const TRACEABILITY_UPLOAD_EMAIL_ROUTES: Routes = [
    {
        path: '',
        component: TraceabilityUploadEmailComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
