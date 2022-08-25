// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyComponent} from './company.component';
import {CompanyUserAuthGuard} from '../guards/company-user-auth.guard';
import {UserAuthGuard} from '../guards/user-auth.guard';

export const COMPANY_ROUTES: Routes = [
    {
        path: '',
        component: CompanyComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    },
    {
        // company registration
        path: 'register',
        loadChildren: () => import('./register/company-register.module').then(m => m.CompanyRegisterModule),
        canActivate: [
            UserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Register'
            }
        }
    },
    {
        // company join
        path: 'join',
        loadChildren: () => import('./join/company-join.module').then(m => m.CompanyJoinModule),
        canActivate: [
            UserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Join'
            }
        }
    },
    {
        // company division
        path: 'divisions',
        loadChildren: () => import('./division/company-division.module').then(m => m.CompanyDivisionModule),
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Divisions'
            }
        }
    },
    {
        // company domains
        path: 'domains',
        loadChildren: () => import('./domain/company-domain.module').then(m => m.CompanyDomainModule),
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Domains'
            }
        }
    },
    {
        // company users
        path: 'users',
        loadChildren: () => import('./user/company-user.module').then(m => m.CompanyUserModule),
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Users'
            }
        }
    },
    {
        // company settings
        path: 'settings',
        loadChildren: () => import('./setting/company-setting.module').then(m => m.CompanySettingModule),
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Settings'
            }
        }
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
    }
];
