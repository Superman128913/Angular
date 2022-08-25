// Angular
import {Routes} from '@angular/router';
// Application
import {AdminComponent} from './admin.component';
import {AdminAuthGuard} from '../guards/admin-auth.guard';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [
            AdminAuthGuard
        ]
    }
];
