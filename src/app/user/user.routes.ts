// Angular
import {Routes} from '@angular/router';
// Application
import {UserComponent} from './user.component';
import {UserAuthGuard} from '../guards/user-auth.guard';

export const USER_ROUTES: Routes = [
    {
        path: '',
        component: UserComponent,
        canActivate: [
            UserAuthGuard
        ]
    },
    {
        // user change password
        path: 'change-password',
        loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule),
        // canActivate: [
        //     UserAuthGuard
        // ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Change Password'
            }
        }
    },
    {
        // user profile
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        canActivate: [
            UserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Profile'
            }
        }
    },
    {
        // user setting
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule),
        canActivate: [
            UserAuthGuard
        ],
        data: { // xng-breadcrumb
            breadcrumb: {
                label: 'Setting'
            }
        }
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
    }
];
