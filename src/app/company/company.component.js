"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyComponent = void 0;
// Angular
var core_1 = require("@angular/core");
// Application
var global_constants_1 = require("../shared/global-constants");
var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
        // paths
        this.companyDivisionsPath = global_constants_1.GlobalConstants.companyDivisionsPath;
        this.companyUsersPath = global_constants_1.GlobalConstants.companyUsersPath;
        this.companyDomainsPath = global_constants_1.GlobalConstants.companyDomainsPath;
        this.companySettingsPath = global_constants_1.GlobalConstants.companySettingsPath;
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company',
            templateUrl: './company.component.html',
            styleUrls: ['./company.component.scss']
        })
    ], CompanyComponent);
    return CompanyComponent;
}());
exports.CompanyComponent = CompanyComponent;
