"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_PASSWORD_ROUTES = void 0;
// Application
var change_password_component_1 = require("./change-password.component");
exports.CHANGE_PASSWORD_ROUTES = [
    {
        path: '',
        component: change_password_component_1.ChangePasswordComponent
        // canActivate: [UserAuthGuard]
    }
];
