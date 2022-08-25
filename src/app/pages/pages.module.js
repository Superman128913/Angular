"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesModule = void 0;
// Angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Application
var pages_routes_1 = require("./pages.routes");
var shared_module_1 = require("../shared/shared.module");
var about_us_component_1 = require("./about-us/about-us.component");
var blockchain_component_1 = require("./blockchain/blockchain.component");
var careers_component_1 = require("./careers/careers.component");
var conditions_of_use_component_1 = require("./conditions-of-use/conditions-of-use.component");
var cookie_policy_component_1 = require("./cookie-policy/cookie-policy.component");
var investors_component_1 = require("./investors/investors.component");
var press_center_component_1 = require("./press-center/press-center.component");
var privacy_notice_component_1 = require("./privacy-notice/privacy-notice.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                about_us_component_1.AboutUsComponent,
                blockchain_component_1.BlockchainComponent,
                careers_component_1.CareersComponent,
                conditions_of_use_component_1.ConditionsOfUseComponent,
                cookie_policy_component_1.CookiePolicyComponent,
                investors_component_1.InvestorsComponent,
                press_center_component_1.PressCenterComponent,
                privacy_notice_component_1.PrivacyNoticeComponent
            ],
            imports: [
                router_1.RouterModule.forChild(pages_routes_1.PAGES_ROUTES),
                shared_module_1.SharedModule
            ],
            exports: []
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
