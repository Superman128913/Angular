// Application
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
export const APP_ROUTES = [
    {
        // home
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: {
            breadcrumb: {
                skip: true
            }
        }
    },
    {
        // pages
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        data: {
            breadcrumb: {
                label: 'Pages'
            }
        }
    },
    {
        // user registration
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
        data: {
            breadcrumb: {
                label: 'Register'
            }
        }
    },
    {
        // user sign in
        path: 'sign-in',
        loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule),
        data: {
            breadcrumb: {
                label: 'Sign In'
            }
        }
    },
    {
        // user reset password
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule),
        data: {
            breadcrumb: {
                label: 'Reset Password'
            }
        }
    },
    {
        // user confirmation
        path: 'confirmation',
        loadChildren: () => import('./confirmation/confirmation.module').then(m => m.ConfirmationModule),
        data: {
            breadcrumb: {
                label: 'Confirmation'
            }
        }
    },
    {
        // user
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        data: {
            breadcrumb: {
                label: 'User'
            }
        }
    },
    {
        // company
        path: 'company',
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
        data: {
            breadcrumb: {
                label: 'Company'
            }
        }
    },
    {
        // apps
        path: 'apps',
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),
        data: {
            breadcrumb: {
                disable: true
            }
        }
    },
    {
        // admin
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [
            AdminAuthGuard
        ],
        data: {
            breadcrumb: {
                disable: true
            }
        }
    },
    {
        // if route not found
        path: '**',
        redirectTo: ''
    }
];
//# sourceMappingURL=app.routes.js.map