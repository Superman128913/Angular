// Application
import { UserComponent } from './user.component';
import { UserAuthGuard } from '../guards/user-auth.guard';
export const USER_ROUTES = [
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
        data: {
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
        data: {
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
        data: {
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
//# sourceMappingURL=user.routes.js.map