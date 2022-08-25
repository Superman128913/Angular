"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERIFY_ROUTES = void 0;
// Application
var verify_component_1 = require("./confirmation.component");
exports.VERIFY_ROUTES = [
    {
        path: '',
        component: verify_component_1.ConfirmationComponent
        // canActivate: [UserAuthGuard]
    }
];
