"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAAS_REQUEST_ROUTES = void 0;
// Application
var taas_request_component_1 = require("./traceability-request.component");
exports.TAAS_REQUEST_ROUTES = [
    {
        path: '',
        component: taas_request_component_1.TraceabilityRequestComponent
        // canActivate: [UserAuthGuard]
    }
];
