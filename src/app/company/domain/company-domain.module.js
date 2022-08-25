"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDomainModule = void 0;
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Application
var company_domain_routes_1 = require("./company-domain.routes");
var shared_module_1 = require("../../shared/shared.module");
var company_domain_verify_component_1 = require("./verify/company-domain-verify.component");
var CompanyDomainModule = /** @class */ (function () {
    function CompanyDomainModule() {
    }
    CompanyDomainModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                company_domain_verify_component_1.CompanyDomainVerifyComponent
            ],
            imports: [
                router_1.RouterModule.forChild(company_domain_routes_1.COMPANY_DOMAIN_ROUTES),
                shared_module_1.SharedModule
            ],
            exports: []
        })
    ], CompanyDomainModule);
    return CompanyDomainModule;
}());
exports.CompanyDomainModule = CompanyDomainModule;
