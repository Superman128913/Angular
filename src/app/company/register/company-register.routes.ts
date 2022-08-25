// Angular
import {Routes} from '@angular/router';
// Application
import {CompanyRegisterComponent} from './company-register.component';
import {UserAuthGuard} from '../../guards/user-auth.guard';

export const COMPANY_REGISTER_ROUTES: Routes = [
    {
        path: '',
        component: CompanyRegisterComponent,
        canActivate: [
            UserAuthGuard
        ]
    }
];
