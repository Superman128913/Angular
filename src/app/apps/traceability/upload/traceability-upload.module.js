"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.TaasUploadModule = void 0;
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Application
var shared_module_1 = require("../../../shared/shared.module");
var taas_upload_routes_1 = require("./traceability-upload.routes");
var taas_upload_document_component_1 = require("./document/traceability-upload-document.component");
var taas_upload_api_component_1 = require("./api/traceability-upload-api.component");
var TraceabilityUploadModule = /** @class */ (function () {
    function TaasUploadModule() {
    }

    TaasUploadModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                taas_upload_document_component_1.TraceabilityUploadDocumentComponent,
                taas_upload_api_component_1.TraceabilityUploadApiComponent
            ],
            imports: [
                router_1.RouterModule.forChild(taas_upload_routes_1.TAAS_UPLOAD_ROUTES),
                shared_module_1.SharedModule
            ],
            exports: []
        })
    ], TaasUploadModule);
    return TaasUploadModule;
}());
exports.TaasUploadModule = TraceabilityUploadModule;
