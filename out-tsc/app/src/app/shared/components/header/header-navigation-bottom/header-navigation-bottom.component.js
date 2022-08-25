import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../../global-constants';
let HeaderNavigationBottomComponent = class HeaderNavigationBottomComponent {
    constructor() {
        // traceability
        this.traceabilityLogo = GlobalConstants.traceabilityWordmarkAlabaster;
        this.traceabilityPath = GlobalConstants.traceabilityPath;
        this.traceabilityTitle = GlobalConstants.traceabilityTitle;
        // file share
        this.fileShareLogo = GlobalConstants.fileShareWordmarkAlabaster;
        this.fileSharePath = GlobalConstants.fileSharePath;
        this.fileShareTitle = GlobalConstants.fileShareTitle;
        // contracts manager
        this.contractsManagerLogo = GlobalConstants.contractsManagerWordmark;
        this.contractsManagerPath = GlobalConstants.contractsManagerPath;
        this.contractsManagerTitle = GlobalConstants.contractsManagerTitle;
        // blockchain
        this.blockchainLogo = GlobalConstants.blockchainWordmark;
        this.blockchainPath = GlobalConstants.blockchainPath;
        this.blockchainTitle = GlobalConstants.blockchainTitle;
        // other
        this.homePath = GlobalConstants.homePath;
    }
    ngOnInit() {
    }
};
HeaderNavigationBottomComponent = __decorate([
    Component({
        selector: 'app-header-navigation-bottom',
        templateUrl: './header-navigation-bottom.component.html',
        styleUrls: ['./header-navigation-bottom.component.scss']
    })
], HeaderNavigationBottomComponent);
export { HeaderNavigationBottomComponent };
//# sourceMappingURL=header-navigation-bottom.component.js.map