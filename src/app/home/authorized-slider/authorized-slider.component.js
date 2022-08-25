"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizedSliderComponent = void 0;
// Angular
var core_1 = require("@angular/core");
// Libraries
// Application
var AuthorizedSliderComponent = /** @class */ (function () {
    function AuthorizedSliderComponent() {
        // TODO - convert to all company items sold and company logos
        this.images = [{
                thumbImage: 'assets/demo/authorized-slider-1.png',
            }, {
                thumbImage: 'assets/demo/authorized-slider-2.png',
            }, {
                thumbImage: 'assets/demo/authorized-slider-3.png',
            }, {
                thumbImage: 'assets/demo/authorized-slider-1.png',
            }, {
                thumbImage: 'assets/demo/authorized-slider-2.png',
            }, {
                thumbImage: 'assets/demo/authorized-slider-3.png',
            }, {
                thumbImage: 'assets/demo/authorized-slider-1.png',
            }, {
                thumbImage: 'assets/demo/authorized-slider-2.png',
            }, {
                thumbImage: 'assets/demo/authorized-slider-3.png',
            }];
        this.infinite = true;
        this.imageSize = {
            space: 12.5
        };
        this.manageImageRatio = true;
        this.imagePopup = false;
        this.autoSlide = {
            interval: 1,
            stopOnHover: false
        };
        this.showArrow = false;
    }
    AuthorizedSliderComponent.prototype.ngOnInit = function () {
    };
    AuthorizedSliderComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-authorized-slider',
            templateUrl: './authorized-slider.component.html',
            styleUrls: ['./authorized-slider.component.scss']
        })
    ], AuthorizedSliderComponent);
    return AuthorizedSliderComponent;
}());
exports.AuthorizedSliderComponent = AuthorizedSliderComponent;
