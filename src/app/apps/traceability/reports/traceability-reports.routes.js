"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAAS_REPORTS_ROUTES = void 0;
// Application
var taas_reports_component_1 = require("./traceability-reports.component");
exports.TAAS_REPORTS_ROUTES = [
    {
        path: '',
        component: taas_reports_component_1.TraceabilityReportsComponent
        // canActivate: [UserAuthGuard]
    }
];
