// Angular
import {Routes} from '@angular/router';
// Application
import {TraceabilityReportsComponent} from './traceability-reports.component';
import {UserAuthGuard} from '../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';

export const TAAS_REPORTS_ROUTES: Routes = [
    {
        path: '',
        component: TraceabilityReportsComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
