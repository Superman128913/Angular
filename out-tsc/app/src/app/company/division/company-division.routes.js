// Application
import { CompanyDivisionComponent } from './company-division.component';
import { CompanyUserAuthGuard } from '../../guards/company-user-auth.guard';
export const COMPANY_DIVISION_ROUTES = [
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
        data: {
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
        data: {
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
        data: {
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
        data: {
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
//# sourceMappingURL=company-division.routes.js.map