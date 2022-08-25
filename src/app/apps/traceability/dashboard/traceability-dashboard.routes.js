"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAAS_DASHBOARD_ROUTES = void 0;
// Application
var taas_dashboard_component_1 = require("./traceability-dashboard.component");
exports.TAAS_DASHBOARD_ROUTES = [
    {
        path: '',
        component: taas_dashboard_component_1.TraceabilityDashboardComponent
        // canActivate: [UserAuthGuard]
    }
];
