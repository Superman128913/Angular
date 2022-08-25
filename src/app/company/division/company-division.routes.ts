// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyDivisionComponent} from './company-division.component';
import {CompanyUserAuthGuard} from '../../guards/company-user-auth.guard';

export const COMPANY_DIVISION_ROUTES: Routes = [
    {
        path: '',
        component: CompanyDivisionComponent,
        canActivate: [
            CompanyUserAuthGuard
        ]
    },
    {
        // company division register
        path: 'register',
        loadChildren: () => import('./register/company-division-register.module').then(m => m.CompanyDivisionRegisterModule),
        canActivate: [
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Register'
            }
        }
    },
    {
        // company division update
        path: ':id',
        loadChildren: () => import('./update/company-division-update.module').then(m => m.CompanyDivisionUpdateModule),
        canActivate: [
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: ''
            }
        }
    },
    {
        // company division address register
        path: ':companyDivisionId/address',
        loadChildren: () => import('./address/company-division-address.module').then(m => m.CompanyDivisionAddressModule),
        canActivate: [
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Address'
            }
        }
    },
    {
        // company division address update
        path: ':companyDivisionId/address/:id',
        loadChildren: () => import('./address/company-division-address.module').then(m => m.CompanyDivisionAddressModule),
        canActivate: [
            CompanyUserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Address'
            }
        }
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
    }
];
