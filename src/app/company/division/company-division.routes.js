"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPANY_DIVISION_ROUTES = void 0;
// Application
var company_division_component_1 = require("./company-division.component");
exports.COMPANY_DIVISION_ROUTES = [
    {
        path: '',
        component: company_division_component_1.CompanyDivisionComponent
        // canActivate: [CompanyAuthGuard]
    },
    {
        // company division register
        path: 'register',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./register/company-division-register.module'); }).then(function (m) { return m.CompanyDivisionRegisterModule; }); },
        data: {
            breadcrumb: {
                label: 'Register'
            }
        }
        // canActivate: [CompanyAuthGuard]
    },
    {
        // company division update
        path: 'update/:id',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./update/company-division-update.module'); }).then(function (m) { return m.CompanyDivisionUpdateModule; }); },
        data: {
            breadcrumb: {
                label: 'Update'
            }
        }
        // canActivate: [CompanyAuthGuard]
    },
    {
        // company division address register
        path: ':companyDivisionId/address',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./address/company-division-address.module'); }).then(function (m) { return m.CompanyDivisionAddressModule; }); },
        data: {
            breadcrumb: {
                label: 'Address'
            }
        }
        // canActivate: [CompanyAuthGuard]
    },
    {
        // company division address update
        path: ':companyDivisionId/address/:id',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./address/company-division-address.module'); }).then(function (m) { return m.CompanyDivisionAddressModule; }); },
        data: {
            breadcrumb: {
                label: 'Address'
            }
        }
        // canActivate: [CompanyAuthGuard]
    },
    {
        // route not found
        path: '**',
        redirectTo: ''
    }
];
