"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADMIN_ROUTES = void 0;
// Application
var admin_component_1 = require("./admin.component");
var admin_auth_guard_1 = require("../guards/admin-auth.guard");
exports.ADMIN_ROUTES = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        canActivate: [
            admin_auth_guard_1.AdminAuthGuard
        ]
    }
];
