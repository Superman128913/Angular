"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSliderComponent = void 0;
// Angular
var core_1 = require("@angular/core");
// Libraries
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// Application
var MainSliderComponent = /** @class */ (function () {
    function MainSliderComponent(config) {
        this.slides = [
            {
                imagePath: 'assets/main-slider/main-slider-2.jpg',
                imageAlt: '',
                imageTitle: '',
                pitch: 'Provide full material disclosure to your customers or request it from your suppliers'
            }
            // {
            //     path: 'assets/main-slider/main-slider-2.jpg',
            //     alt: '',
            //     title: ''
            // }
        ];
        config.animation = true;
        config.interval = 10000; // ms
        config.keyboard = true;
        config.pauseOnFocus = false;
        config.pauseOnHover = false;
        config.showNavigationArrows = false;
        config.showNavigationIndicators = false;
        config.wrap = true;
    }
    MainSliderComponent.prototype.ngOnInit = function () {
    };
    MainSliderComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-main-slider',
            templateUrl: './main-slider.component.html',
            styleUrls: ['./main-slider.component.scss'],
            providers: [ng_bootstrap_1.NgbCarouselConfig] // add NgbCarouselConfig to the component providers
        })
    ], MainSliderComponent);
    return MainSliderComponent;
}());
exports.MainSliderComponent = MainSliderComponent;
