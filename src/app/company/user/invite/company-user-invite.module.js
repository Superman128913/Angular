"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUserInviteModule = void 0;
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Application
var company_user_invite_routes_1 = require("./company-user-invite.routes");
var shared_module_1 = require("../../../shared/shared.module");
var CompanyUserInviteModule = /** @class */ (function () {
    function CompanyUserInviteModule() {
    }
    CompanyUserInviteModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [],
            imports: [
                router_1.RouterModule.forChild(company_user_invite_routes_1.COMPANY_USER_INVITE_ROUTES),
                shared_module_1.SharedModule
            ],
            exports: []
        })
    ], CompanyUserInviteModule);
    return CompanyUserInviteModule;
}());
exports.CompanyUserInviteModule = CompanyUserInviteModule;
