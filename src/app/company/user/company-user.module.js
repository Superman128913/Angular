"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUserModule = void 0;
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Application
var company_user_routes_1 = require("./company-user.routes");
var shared_module_1 = require("../../shared/shared.module");
var company_user_invite_component_1 = require("./invite/company-user-invite.component");
var CompanyUserModule = /** @class */ (function () {
    function CompanyUserModule() {
    }
    CompanyUserModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                company_user_invite_component_1.CompanyUserInviteComponent
            ],
            imports: [
                router_1.RouterModule.forChild(company_user_routes_1.COMPANY_USER_ROUTES),
                shared_module_1.SharedModule
            ],
            exports: []
        })
    ], CompanyUserModule);
    return CompanyUserModule;
}());
exports.CompanyUserModule = CompanyUserModule;
