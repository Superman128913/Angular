import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Libraries
// Application
let AuthorizedSliderComponent = class AuthorizedSliderComponent {
    constructor() {
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
    ngOnInit() {
    }
};
AuthorizedSliderComponent = __decorate([
    Component({
        selector: 'app-authorized-slider',
        templateUrl: './authorized-slider.component.html',
        styleUrls: ['./authorized-slider.component.scss']
    })
], AuthorizedSliderComponent);
export { AuthorizedSliderComponent };
//# sourceMappingURL=authorized-slider.component.js.map