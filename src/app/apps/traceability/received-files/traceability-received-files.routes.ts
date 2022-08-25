// Angular
import {Routes} from '@angular/router';
// Application
import {UserAuthGuard} from '../../../guards/user-auth.guard';
import {CompanyUserAuthGuard} from '../../../guards/company-user-auth.guard';
import {TraceabilityReceivedFilesComponent} from './traceability-received-files.component';
import {ShareFilesResolver} from '../../../resolvers/share-files.resolver';

export const TRACEABLILTY_RECEIVED_FILES_ROUTES: Routes = [
    {
        path: '',
        component: TraceabilityReceivedFilesComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ],
        resolve: {
            documents: ShareFilesResolver
        },
        data: {
        }
    }
];
