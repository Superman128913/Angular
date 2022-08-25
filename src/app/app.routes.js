"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ROUTES = void 0;
// Application
var home_component_1 = require("./home/home.component");
var admin_auth_guard_1 = require("./guards/admin-auth.guard");
exports.APP_ROUTES = [
    {
        // home
        path: '',
        component: home_component_1.HomeComponent,
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
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/pages.module'); }).then(function (m) { return m.PagesModule; }); },
        data: {
            breadcrumb: {
                label: 'Pages'
            }
        }
    },
    {
        // quality
        path: 'quality',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./quality/quality.module'); }).then(function (m) { return m.QualityModule; }); },
        data: {
            breadcrumb: {
                label: 'Quality'
            }
        }
    },
    {
        // user registration
        path: 'register',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./register/register.module'); }).then(function (m) { return m.RegisterModule; }); },
        data: {
            breadcrumb: {
                label: 'Register'
            }
        }
    },
    {
        // user sign in
        path: 'sign-in',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./sign-in/sign-in.module'); }).then(function (m) { return m.SignInModule; }); },
        data: {
            breadcrumb: {
                label: 'Sign In'
            }
        }
    },
    {
        // user reset password
        path: 'reset-password',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./reset-password/reset-password.module'); }).then(function (m) { return m.ResetPasswordModule; }); },
        data: {
            breadcrumb: {
                label: 'Reset Password'
            }
        }
    },
    {
        // user
        path: 'user',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./user/user.module'); }).then(function (m) { return m.UserModule; }); },
        data: {
            breadcrumb: {
                label: 'User'
            }
        }
    },
    {
        // company
        path: 'company',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./company/company.module'); }).then(function (m) { return m.CompanyModule; }); },
        data: {
            breadcrumb: {
                label: 'Company'
            }
        }
    },
    {
        // taas
        path: 'taas',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./taas/taas.module'); }).then(function (m) { return m.TaasModule; }); },
        data: {
            breadcrumb: {
                label: 'TaaS'
            }
        }
    },
    {
        // admin
        path: 'admin',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./admin/admin.module'); }).then(function (m) { return m.AdminModule; }); },
        data: {
            breadcrumb: {
                disable: true
            }
        },
        canActivate: [admin_auth_guard_1.AdminAuthGuard]
    },
    {
        // if route not found
        path: '**',
        redirectTo: ''
    }
];
