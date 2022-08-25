// Angular
import {Routes} from '@angular/router';
// Application
import {UserAuthGuard} from '../../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../../guards/company-user-auth.guard';
import {TraceabilityRequestCompleteComponent} from './traceability-request-complete.component';

export const TRACEABILITY_REQUEST_COMPLETE_ROUTES: Routes = [
    {
        path: '',
        component: TraceabilityRequestCompleteComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
