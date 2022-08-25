import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let FooterScrollToTopComponent = class FooterScrollToTopComponent {
    constructor(viewScroller) {
        this.viewScroller = viewScroller;
    }
    // Function to scroll to top of page
    scrollToTop() {
        this.viewScroller.scrollToPosition([0, 0]);
    }
    ngOnInit() {
    }
};
FooterScrollToTopComponent = __decorate([
    Component({
        selector: 'app-footer-scroll-to-top',
        templateUrl: './footer-scroll-to-top.component.html',
        styleUrls: ['./footer-scroll-to-top.component.scss']
    })
], FooterScrollToTopComponent);
export { FooterScrollToTopComponent };
//# sourceMappingURL=footer-scroll-to-top.component.js.map