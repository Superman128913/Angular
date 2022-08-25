import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let AboutUsComponent = class AboutUsComponent {
    constructor() {
        this.backedByBlockchainPath = GlobalConstants.backedByBlockchainPath;
        this.careersPath = GlobalConstants.careersPath;
    }
    ngOnInit() {
    }
};
AboutUsComponent = __decorate([
    Component({
        selector: 'app-about-us',
        templateUrl: './about-us.component.html',
        styleUrls: ['./about-us.component.scss']
    })
], AboutUsComponent);
export { AboutUsComponent };
//# sourceMappingURL=about-us.component.js.map