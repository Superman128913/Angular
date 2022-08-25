// Application
import { TraceabilityRequestComponent } from './traceability-request.component';
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const TRACEABILITY_REQUEST_ROUTES = [
    {
        path: '',
        component: TraceabilityRequestComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        children: [
            {
                // empty child route redirect
                path: '',
                pathMatch: 'full',
                redirectTo: 'new'
            },
            {
                // new
                path: 'new',
                loadChildren: () => import('./new/traceability-request-new.module').then(m => m.TraceabilityRequestNewModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                data: {
                    breadcrumb: {
                        label: 'New'
                    }
                }
            },
            {
                // open
                path: 'open',
                loadChildren: () => import('./open/traceability-request-open.module').then(m => m.TraceabilityRequestOpenModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                // resolve: {
                //     documents: TraceabilityDocumentsDynamicResolver,
                // },
                data: {
                    breadcrumb: {
                        label: 'Open'
                    }
                    // ,
                    // resolveMode: 0,
                    // resolveRequest: -1
                }
            },
            {
                // complete
                path: 'complete',
                loadChildren: () => import('./complete/traceability-request-complete.module').then(m => m.TraceabilityRequestCompleteModule),
                canActivate: [
                    UserAuthGuard,
                    CompanyUserAuthGuard
                ],
                // resolve: {
                //     documents: TraceabilityDocumentsDynamicResolver,
                // },
                data: {
                    breadcrumb: {
                        label: 'Complete'
                    }
                    // ,
                    // resolveMode: 0,
                    // resolveRequest: -1
                }
            }
        ]
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
    }
];
//# sourceMappingURL=traceability-request.routes.js.map