"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPANY_ROUTES = void 0;
// Application
var company_component_1 = require("./company.component");
exports.COMPANY_ROUTES = [
    {
        path: '',
        component: company_component_1.CompanyComponent
        // canActivate: [CompanyAuthGuard]
    },
    {
        // company registration
        path: 'register',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./register/company-register.module'); }).then(function (m) { return m.CompanyRegisterModule; }); },
        data: {
            breadcrumb: {
                label: 'Register'
            }
        }
        // canActivate: [CompanyAuthGuard]
    },
    {
        // company division
        path: 'divisions',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./division/company-division.module'); }).then(function (m) { return m.CompanyDivisionModule; }); },
        data: {
            breadcrumb: {
                label: 'Divisions'
            }
        }
        // canActivate: [CompanyAuthGuard]
    },
    {
        // company domains
        path: 'domains',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./domain/company-domain.module'); }).then(function (m) { return m.CompanyDomainModule; }); },
        data: {
            breadcrumb: {
                label: 'Domains'
            }
        }
        // canActivate: [CompanyAuthGuard]
    },
    {
        // company users
        path: 'users',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./user/company-user.module'); }).then(function (m) { return m.CompanyUserModule; }); },
        data: {
            breadcrumb: {
                label: 'Users'
            }
        }
        // canActivate: [CompanyAuthGuard]
    },
    {
        // company settings
        path: 'settings',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./setting/company-setting.module'); }).then(function (m) { return m.CompanySettingModule; }); },
        data: {
            breadcrumb: {
                label: 'Settings'
            }
        }
        // canActivate: [CompanyAuthGuard]
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
        // canActivate: [CompanyAuthGuard]
    }
];
