// Angular
import {Routes} from '@angular/router';
// Application
import {AppsComponent} from './apps.component';
import {UserAuthGuard} from '../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../guards/company-user-auth.guard';

export const APPS_ROUTES: Routes = [
    {
        path: '',
        component: AppsComponent,
        children: [
            {
                // empty child route redirect
                path: '',
                pathMatch: 'full',
                redirectTo: 'traceability'
            },
            {
                // traceability
                path: 'traceability',
                loadChildren: () => import('./traceability/traceability.module').then(m => m.TraceabilityModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: { // xng-breadcrumb
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // file share
                path: 'file-share',
                loadChildren: () => import('./file-share/file-share.module').then(m => m.FileShareModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: { // xng-breadcrumb
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // blockchain
                path: 'blockchain',
                loadChildren: () => import('./blockchain/blockchain.module').then(m => m.BlockchainModule),
                data: { // xng-breadcrumb
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // route not found
                path: '**',
                pathMatch: 'full',
                redirectTo: ''
            }
        ]
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
    }
];
