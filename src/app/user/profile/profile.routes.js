"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROFILE_ROUTES = void 0;
// Application
var profile_component_1 = require("./profile.component");
exports.PROFILE_ROUTES = [
    {
        path: '',
        component: profile_component_1.ProfileComponent
        // canActivate: [UserAuthGuard]
    }
];
