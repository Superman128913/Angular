// Angular
import {Routes} from '@angular/router';
// Application
import {TraceabilityUploadComponent} from './traceability-upload.component';
import {UserAuthGuard} from '../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';
import {TraceabilityDocumentsResolver} from '../../../resolvers/traceability-documents.resolver';

export const TRACEABILITY_UPLOAD_ROUTES: Routes = [
    {
        path: '',
        component: TraceabilityUploadComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        children: [
            {
                // empty child route redirect
                path: '',
                pathMatch: 'full',
                redirectTo: 'document'
            },
            {
                // document
                path: 'document',
                loadChildren: () => import('./document/traceability-upload-document.module').then(m => m.TraceabilityUploadDocumentModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: { // xng-breadcrumb
                    breadcrumb: {
                        label: 'Document'
                    },
                    pendingDocuments: true
                },
                resolve: {
                    documents: TraceabilityDocumentsResolver
                }
            },
            {
                // email
                path: 'email',
                loadChildren: () => import('./email/traceability-upload-email.module').then(m => m.TraceabilityUploadEmailModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: { // xng-breadcrumb
                    breadcrumb: {
                        label: 'Email'
                    }
                }
            },
            {
                // api
                path: 'api',
                loadChildren: () => import('./api/traceability-upload-api.module').then(m => m.TraceabilityUploadApiModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: { // xng-breadcrumb
                    breadcrumb: {
                        label: 'API'
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
