// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyJoinComponent} from './company-join.component';
import {UserAuthGuard} from '../../guards/user-auth.guard';

export const COMPANY_JOIN_ROUTES: Routes = [
    {
        path: '',
        component: CompanyJoinComponent,
        canActivate: [
            UserAuthGuard
        ]
    }
];
