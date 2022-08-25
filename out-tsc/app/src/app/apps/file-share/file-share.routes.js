// Application
import { FileShareComponent } from './file-share.component';
import { GlobalConstants } from '../../shared/global-constants';
import { UserAuthGuard } from '../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../guards/company-user-auth.guard';
export const FILE_SHARE_ROUTES = [
    {
        path: '',
        component: FileShareComponent,
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
                loadChildren: () => import('./dashboard/file-share-dashboard.module').then(m => m.FileShareDashboardModule),
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
                // all files
                path: 'all-files',
                loadChildren: () => import('./all-files/file-share-all-files.module').then(m => m.FileShareAllFilesModule),
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
                // recent files
                path: 'recent-files',
                loadChildren: () => import('./recent-files/file-share-recent-files.module').then(m => m.FileShareRecentFilesModule),
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
                // send files
                path: 'send-files',
                loadChildren: () => import('./send-files/file-share-send-files.module').then(m => m.FileShareSendFilesModule),
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
                // request files
                path: 'request-files',
                loadChildren: () => import('./request-files/file-share-request-files.module').then(m => m.FileShareRequestFilesModule),
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
                loadChildren: () => import('./reports/file-share-reports.module').then(m => m.FileShareReportsModule),
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
                // trash
                path: 'trash',
                loadChildren: () => import('./trash/file-share-trash.module').then(m => m.FileShareTrashModule),
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
                // settings
                path: 'settings',
                loadChildren: () => import('./settings/file-share-settings.module').then(m => m.FileShareSettingsModule),
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
//# sourceMappingURL=file-share.routes.js.map