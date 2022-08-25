"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPANY_USER_ROUTES = void 0;
// Application
var company_user_component_1 = require("./company-user.component");
exports.COMPANY_USER_ROUTES = [
    {
        path: '',
        component: company_user_component_1.CompanyUserComponent
    },
    {
        // company user invite
        path: 'invite',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./invite/company-user-invite.module'); }).then(function (m) { return m.CompanyUserInviteModule; }); },
        data: {
            breadcrumb: {
                label: 'Invite'
            }
        }
        // canActivate: [CompanyAuthGuard]
    }
];
