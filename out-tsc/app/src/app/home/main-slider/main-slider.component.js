import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Libraries
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// Application
let MainSliderComponent = class MainSliderComponent {
    constructor(config) {
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
    ngOnInit() {
    }
};
MainSliderComponent = __decorate([
    Component({
        selector: 'app-main-slider',
        templateUrl: './main-slider.component.html',
        styleUrls: ['./main-slider.component.scss'],
        providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
    })
], MainSliderComponent);
export { MainSliderComponent };
//# sourceMappingURL=main-slider.component.js.map