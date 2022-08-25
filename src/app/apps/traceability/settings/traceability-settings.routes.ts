// Angular
import {Routes} from '@angular/router';
// Application
import {TraceabilitySettingsComponent} from './traceability-settings.component';
import {UserAuthGuard} from '../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';

export const TAAS_SETTINGS_ROUTES: Routes = [
    {
        path: '',
        component: TraceabilitySettingsComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
