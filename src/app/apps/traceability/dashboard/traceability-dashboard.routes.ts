// Angular
import {Routes} from '@angular/router';
// Application
import {TraceabilityDashboardComponent} from './traceability-dashboard.component';
import {UserAuthGuard} from '../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';

export const TRACEABILITY_DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: TraceabilityDashboardComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
