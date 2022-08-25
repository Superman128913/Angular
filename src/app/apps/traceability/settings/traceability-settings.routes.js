"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAAS_SETTINGS_ROUTES = void 0;
// Application
var taas_settings_component_1 = require("./traceability-settings.component");
exports.TAAS_SETTINGS_ROUTES = [
    {
        path: '',
        component: taas_settings_component_1.TraceabilitySettingsComponent
        // canActivate: [UserAuthGuard]
    }
];
