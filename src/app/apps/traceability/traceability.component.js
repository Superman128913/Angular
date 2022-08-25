"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaasComponent = void 0;
// Angular
var core_1 = require("@angular/core");
// Application
var global_constants_1 = require("../../shared/global-constants");
var TraceabilityComponent = /** @class */ (function () {
    // public modifyVisible = false;
    // public modifyAsset;
    // public assets;
    // public assetUpdateForm: FormGroup;
    function TaasComponent() {
        // sidebar
        this.traceabilityLogo = global_constants_1.GlobalConstants.traceabilityWordmarkAlabaster;
        this.menu = [
            {
                image: 'bi bi-files',
                title: 'Dashboard',
                path: global_constants_1.GlobalConstants.traceabilityDashboardPath
            },
            {
                image: 'bi bi-archive',
                title: 'Library',
                path: global_constants_1.GlobalConstants.traceabilityLibraryPath
            },
            {
                image: 'bi bi-file-arrow-up',
                title: 'Upload',
                path: global_constants_1.GlobalConstants.traceabilityUploadPath
            },
            {
                image: 'bi bi-send',
                title: 'Send',
                path: global_constants_1.GlobalConstants.traceabilitySendPath
            },
            {
                image: 'bi bi-reply',
                title: 'Request',
                path: global_constants_1.GlobalConstants.traceabilityRequestPath
            },
            {
                image: 'bi bi-file-bar-graph',
                title: 'Reports',
                path: global_constants_1.GlobalConstants.traceabilityReportsPath
            },
            {
                image: 'bi bi-gear',
                title: 'Settings',
                path: global_constants_1.GlobalConstants.traceabilitySettingsPath
            }
        ];
    }
    TaasComponent.prototype.ngOnInit = function () {
    };
    TaasComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-traceability',
            templateUrl: './traceability.component.html',
            styleUrls: ['./traceability.component.scss']
        })
    ], TaasComponent);
    return TaasComponent;
}());
exports.TaasComponent = TraceabilityComponent;
