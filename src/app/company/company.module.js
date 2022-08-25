"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Application
var company_routes_1 = require("./company.routes");
var shared_module_1 = require("../shared/shared.module");
var company_register_component_1 = require("./register/company-register.component");
var company_division_component_1 = require("./division/company-division.component");
var company_domain_component_1 = require("./domain/company-domain.component");
var company_user_component_1 = require("./user/company-user.component");
var company_setting_component_1 = require("./setting/company-setting.component");
var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                company_register_component_1.CompanyRegisterComponent,
                company_division_component_1.CompanyDivisionComponent,
                company_domain_component_1.CompanyDomainComponent,
                company_user_component_1.CompanyUserComponent,
                company_setting_component_1.CompanySettingComponent
            ],
            imports: [
                router_1.RouterModule.forChild(company_routes_1.COMPANY_ROUTES),
                shared_module_1.SharedModule
            ],
            exports: []
        })
    ], CompanyModule);
    return CompanyModule;
}());
exports.CompanyModule = CompanyModule;
