// Angular
import {Routes} from '@angular/router';
// Application
import {UserAuthGuard} from '../../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../../guards/company-user-auth.guard';
import {TraceabilityRequestNewComponent} from './traceability-request-new.component';

export const TRACEABILITY_REQUEST_NEW_ROUTES: Routes = [
    {
        path: '',
        component: TraceabilityRequestNewComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
