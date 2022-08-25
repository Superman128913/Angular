"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterScrollToTopComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var FooterScrollToTopComponent = /** @class */ (function () {
    function FooterScrollToTopComponent(viewScroller) {
        this.viewScroller = viewScroller;
    }
    // Function to scroll to top of page
    FooterScrollToTopComponent.prototype.scrollToTop = function () {
        this.viewScroller.scrollToPosition([0, 0]);
    };
    FooterScrollToTopComponent.prototype.ngOnInit = function () {
    };
    FooterScrollToTopComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-footer-scroll-to-top',
            templateUrl: './footer-scroll-to-top.component.html',
            styleUrls: ['./footer-scroll-to-top.component.scss']
        })
    ], FooterScrollToTopComponent);
    return FooterScrollToTopComponent;
}());
exports.FooterScrollToTopComponent = FooterScrollToTopComponent;
