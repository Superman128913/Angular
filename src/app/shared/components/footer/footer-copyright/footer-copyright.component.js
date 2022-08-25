"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterCopyrightComponent = void 0;
// Angular
var core_1 = require("@angular/core");
// Application
var global_constants_1 = require("../../../global-constants");
var FooterCopyrightComponent = /** @class */ (function () {
    function FooterCopyrightComponent() {
        this.copyrightYear = new Date().getFullYear();
        // paths
        this.conditionsOfUsePath = global_constants_1.GlobalConstants.conditionsOfUsePath;
        this.privacyNoticePath = global_constants_1.GlobalConstants.privacyNoticePath;
    }
    FooterCopyrightComponent.prototype.ngOnInit = function () {
    };
    FooterCopyrightComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-footer-copyright',
            templateUrl: './footer-copyright.component.html',
            styleUrls: ['./footer-copyright.component.scss']
        })
    ], FooterCopyrightComponent);
    return FooterCopyrightComponent;
}());
exports.FooterCopyrightComponent = FooterCopyrightComponent;
