// Application
import { TraceabilityComponent } from './traceability.component';
import { GlobalConstants } from '../../shared/global-constants';
import { UserAuthGuard } from '../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../guards/company-user-auth.guard';
export const TRACEABILITY_ROUTES = [
    {
        path: '',
        component: TraceabilityComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        children: [
            {
                // empty child route redirect
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                // dashboard
                path: 'dashboard',
                loadChildren: () => import('./dashboard/traceability-dashboard.module').then(m => m.TraceabilityDashboardModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: {
                    title: GlobalConstants.traceabilityTitle,
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // library
                path: 'library',
                loadChildren: () => import('./library/traceability-library.module').then(m => m.TraceabilityLibraryModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: {
                    title: GlobalConstants.traceabilityTitle,
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // upload
                path: 'upload',
                loadChildren: () => import('./upload/traceability-upload.module').then(m => m.TraceabilityUploadModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: {
                    title: GlobalConstants.traceabilityTitle,
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // send
                path: 'send',
                loadChildren: () => import('./send/traceability-send.module').then(m => m.TraceabilitySendModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: {
                    title: GlobalConstants.traceabilityTitle,
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // request
                path: 'request',
                loadChildren: () => import('./request/traceability-request.module').then(m => m.TraceabilityRequestModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: {
                    title: GlobalConstants.traceabilityTitle,
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // received files
                path: 'received-files',
                loadChildren: () => import('./received-files/traceability-received-files.module').then(m => m.TraceabilityReceivedFilesModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: {
                    title: GlobalConstants.fileShareTitle,
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // reports
                path: 'reports',
                loadChildren: () => import('./reports/traceability-reports.module').then(m => m.TraceabilityReportsModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: {
                    title: GlobalConstants.traceabilityTitle,
                    breadcrumb: {
                        disable: true
                    }
                }
            },
            {
                // settings
                path: 'settings',
                loadChildren: () => import('./settings/traceability-settings.module').then(m => m.TraceabilitySettingsModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: {
                    title: GlobalConstants.traceabilityTitle,
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
//# sourceMappingURL=traceability.routes.js.map