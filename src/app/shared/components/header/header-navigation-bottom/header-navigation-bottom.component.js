"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderNavigationBottomComponent = void 0;
// Angular
var core_1 = require("@angular/core");
// Application
var global_constants_1 = require("../../../global-constants");
var HeaderNavigationBottomComponent = /** @class */ (function () {
    function HeaderNavigationBottomComponent() {
        // app logos
        this.traceabilityLogo = global_constants_1.GlobalConstants.traceabilityWordmarkAlabaster;
        // paths
        this.taasPath = global_constants_1.GlobalConstants.traceabilityPath;
        this.sharePath = global_constants_1.GlobalConstants.fileSharePath;
        this.cmaasPath = global_constants_1.GlobalConstants.contractsManagerPath;
    }
    HeaderNavigationBottomComponent.prototype.ngOnInit = function () {
    };
    HeaderNavigationBottomComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-header-navigation-bottom',
            templateUrl: './header-navigation-bottom.component.html',
            styleUrls: ['./header-navigation-bottom.component.scss']
        })
    ], HeaderNavigationBottomComponent);
    return HeaderNavigationBottomComponent;
}());
exports.HeaderNavigationBottomComponent = HeaderNavigationBottomComponent;
