import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../global-constants';
let AppsSectionComponent = class AppsSectionComponent {
    constructor() {
        // traceability
        this.traceabilityPath = GlobalConstants.traceabilityPath;
        this.traceabilityDescription = GlobalConstants.traceabilityDescription;
        this.traceabilityTitle = GlobalConstants.traceabilityTitle;
        // file share
        this.fileSharePath = GlobalConstants.fileSharePath;
        this.fileShareDescription = GlobalConstants.fileShareDescription;
        this.fileShareTitle = GlobalConstants.fileShareTitle;
        // contracts manager
        this.contractsManagerPath = GlobalConstants.contractsManagerPath;
        this.contractsManagerDescription = GlobalConstants.contractsManagerDescription;
        this.contractsManagerTitle = GlobalConstants.contractsManagerTitle;
        // blockchain
        this.blockchainPath = GlobalConstants.blockchainPath;
        this.blockchainDescription = GlobalConstants.blockchainDescription;
        this.blockchainTitle = GlobalConstants.blockchainTitle;
    }
    ngOnInit() {
    }
};
AppsSectionComponent = __decorate([
    Component({
        selector: 'app-apps-section',
        templateUrl: './apps-section.component.html',
        styleUrls: ['./apps-section.component.scss']
    })
], AppsSectionComponent);
export { AppsSectionComponent };
//# sourceMappingURL=apps-section.component.js.map