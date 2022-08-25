"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPANY_DOMAIN_ROUTES = void 0;
// Application
var company_domain_component_1 = require("./company-domain.component");
exports.COMPANY_DOMAIN_ROUTES = [
    {
        path: '',
        component: company_domain_component_1.CompanyDomainComponent
    },
    {
        // company domain verify
        path: 'verify',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./verify/company-domain-verify.module'); }).then(function (m) { return m.CompanyDomainVerifyModule; }); },
        data: {
            breadcrumb: {
                disable: true
            }
        }
        // canActivate: [CompanyAuthGuard]
    }
];
