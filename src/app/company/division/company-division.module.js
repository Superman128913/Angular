"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDivisionModule = void 0;
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Application
var company_division_routes_1 = require("./company-division.routes");
var shared_module_1 = require("../../shared/shared.module");
var company_division_register_component_1 = require("./register/company-division-register.component");
var company_division_address_component_1 = require("./address/company-division-address.component");
var company_division_update_component_1 = require("./update/company-division-update.component");
var CompanyDivisionModule = /** @class */ (function () {
    function CompanyDivisionModule() {
    }
    CompanyDivisionModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                company_division_register_component_1.CompanyDivisionRegisterComponent,
                company_division_update_component_1.CompanyDivisionUpdateComponent,
                company_division_address_component_1.CompanyDivisionAddressComponent
            ],
            imports: [
                router_1.RouterModule.forChild(company_division_routes_1.COMPANY_DIVISION_ROUTES),
                shared_module_1.SharedModule
            ],
            exports: []
        })
    ], CompanyDivisionModule);
    return CompanyDivisionModule;
}());
exports.CompanyDivisionModule = CompanyDivisionModule;
