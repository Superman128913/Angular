"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ROUTES = void 0;
// Application
var user_component_1 = require("./user.component");
exports.USER_ROUTES = [
    {
        path: '',
        component: user_component_1.UserComponent
        // canActivate: [UserAuthGuard]
    },
    {
        // user change password
        path: 'change-password',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./change-password/change-password.module'); }).then(function (m) { return m.ChangePasswordModule; }); },
        data: {
            breadcrumb: {
                label: 'Change Password'
            }
        }
        // canActivate: [UserAuthGuard]
    },
    {
        // user verify user
        path: 'verify',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./verify/verify.module'); }).then(function (m) { return m.VerifyModule; }); },
        data: {
            breadcrumb: {
                disable: true
            }
        }
        // canActivate: [UserAuthGuard]
    },
    {
        // user profile
        path: 'profile',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./profile/profile.module'); }).then(function (m) { return m.ProfileModule; }); },
        data: {
            breadcrumb: {
                label: 'Profile'
            }
        }
        // canActivate: [UserAuthGuard]
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
        // canActivate: [UserAuthGuard]
    }
];
