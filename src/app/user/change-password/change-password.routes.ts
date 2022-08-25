// Angular
import {Routes} from '@angular/router';
// Application
import {ChangePasswordComponent} from './change-password.component';

export const CHANGE_PASSWORD_ROUTES: Routes = [
    {
        path: '',
        component: ChangePasswordComponent,
        // canActivate: [
        //     UserAuthGuard
        // ]
    }
];
