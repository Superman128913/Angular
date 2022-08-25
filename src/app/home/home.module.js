"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeModule = void 0;
// Angular
var core_1 = require("@angular/core");
// Libraries
var ng_image_slider_1 = require("ng-image-slider");
// Application
var home_routes_1 = require("./home.routes");
var shared_module_1 = require("../shared/shared.module");
var router_1 = require("@angular/router");
var authorized_slider_component_1 = require("./authorized-slider/authorized-slider.component");
var main_slider_component_1 = require("./main-slider/main-slider.component");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                authorized_slider_component_1.AuthorizedSliderComponent,
                main_slider_component_1.MainSliderComponent
            ],
            exports: [
                authorized_slider_component_1.AuthorizedSliderComponent,
                main_slider_component_1.MainSliderComponent
            ],
            imports: [
                router_1.RouterModule.forChild(home_routes_1.HOME_ROUTES),
                shared_module_1.SharedModule,
                ng_image_slider_1.NgImageSliderModule
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
