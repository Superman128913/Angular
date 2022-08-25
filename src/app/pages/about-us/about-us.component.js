"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUsComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.teamSliderConfig = {
            loop: true,
            dots: false,
            navSpeed: 300,
            responsive: {
                991: {
                    items: 4
                },
                767: {
                    items: 3
                },
                586: {
                    items: 2
                },
                0: {
                    items: 2
                }
            }
        };
        this.testimonialSliderConfig = {
            loop: true,
            dots: false,
            navSpeed: 300,
            responsive: {
                991: {
                    items: 2
                },
                0: {
                    items: 1
                }
            }
        };
        // Testimonial Carousel
        this.testimonial = [{
                image: 'assets/images/testimonial/1.jpg',
                name: 'Mark jkcno',
                designation: 'Designer',
                description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give ' +
                    'you a complete user of the system, and expound the actual teachings.',
            }, {
                image: 'assets/images/testimonial/2.jpg',
                name: 'Adegoke Yusuff',
                designation: 'Content Writer',
                description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give ' +
                    'you a complete user of the system, and expound the actual teachings.',
            }, {
                image: 'assets/images/testimonial/1.jpg',
                name: 'John Shipmen',
                designation: 'Lead Developer',
                description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give ' +
                    'you a complete user of the system, and expound the actual teachings.',
            }];
        // Team
        this.team = [{
                image: 'assets/images/team/1.jpg',
                name: 'Mark jkcno',
                designation: 'Designer'
            }, {
                image: 'assets/images/team/2.jpg',
                name: 'Adegoke Yusuff',
                designation: 'Content Writer'
            }, {
                image: 'assets/images/team/3.jpg',
                name: 'John Shipmen',
                designation: 'Lead Developer'
            }, {
                image: 'assets/images/team/4.jpg',
                name: 'Hileri Keol',
                designation: 'CEO & Founder at Company'
            }, {
                image: 'assets/images/team/3.jpg',
                name: 'John Shipmen',
                designation: 'Lead Developer'
            }];
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-about-us',
            templateUrl: './about-us.component.html',
            styleUrls: ['./about-us.component.scss']
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;
