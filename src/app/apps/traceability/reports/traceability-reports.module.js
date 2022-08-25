"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.TaasReportsModule = void 0;
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Application
var shared_module_1 = require("../../../shared/shared.module");
var taas_reports_routes_1 = require("./traceability-reports.routes");
var TraceabilityReportsModule = /** @class */ (function () {
    function TaasReportsModule() {
    }

    TaasReportsModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [],
            imports: [
                router_1.RouterModule.forChild(taas_reports_routes_1.TAAS_REPORTS_ROUTES),
                shared_module_1.SharedModule
            ],
            exports: []
        })
    ], TaasReportsModule);
    return TaasReportsModule;
}());
exports.TaasReportsModule = TraceabilityReportsModule;
