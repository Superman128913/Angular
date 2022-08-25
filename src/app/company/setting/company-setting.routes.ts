// Angular
import {Routes} from '@angular/router';
// Application
import {CompanySettingComponent} from './company-setting.component';
import {CompanyUserAuthGuard} from '../../guards/company-user-auth.guard';

export const COMPANY_SETTINGS_ROUTES: Routes = [
    {
        path: '',
        component: CompanySettingComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    }
];
