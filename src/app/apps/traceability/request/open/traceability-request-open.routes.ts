// Angular
import {Routes} from '@angular/router';
// Application
import {UserAuthGuard} from '../../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../../guards/company-user-auth.guard';
import {TraceabilityRequestOpenComponent} from './traceability-request-open.component';

export const TRACEABILITY_REQUEST_OPEN_ROUTES: Routes = [
    {
        path: '',
        component: TraceabilityRequestOpenComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
