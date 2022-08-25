"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaasUploadComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var global_constants_1 = require("../../../shared/global-constants");
var TraceabilityUploadComponent = /** @class */ (function () {
    function TaasUploadComponent() {
        this.menu = [
            {
                image: 'bi bi-file-arrow-up',
                title: 'Document',
                path: global_constants_1.GlobalConstants.traceabilityUploadDocumentPath
            },
            {
                image: 'bi bi-envelope-open',
                title: 'Email',
                path: global_constants_1.GlobalConstants.traceabilityUploadEmailPath
            },
            {
                image: 'bi bi-file-code',
                title: 'API',
                path: global_constants_1.GlobalConstants.traceabilityUploadApiPath
            }
        ];
    }
    TaasUploadComponent.prototype.ngOnInit = function () {
    };
    TaasUploadComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-traceability-upload',
            templateUrl: './traceability-upload.component.html',
            styleUrls: ['./traceability-upload.component.scss']
        })
    ], TaasUploadComponent);
    return TaasUploadComponent;
}());
exports.TaasUploadComponent = TraceabilityUploadComponent;
