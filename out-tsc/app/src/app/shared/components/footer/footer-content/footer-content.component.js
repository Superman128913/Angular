import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../../global-constants';
let FooterContentComponent = class FooterContentComponent {
    constructor() {
        // logo
        this.invertedLogo = GlobalConstants.invertedWordmark;
        this.shortLogo = GlobalConstants.defaultLogo;
        //
        this.tagLine = GlobalConstants.tagLine;
        this.missionStatement = GlobalConstants.missionStatement;
        this.linkedInUrl = GlobalConstants.linkedInUrl;
        this.twitterUrl = GlobalConstants.twitterUrl;
        // paths
        this.homePath = GlobalConstants.homePath;
        this.aboutUsPath = GlobalConstants.aboutUsPath;
        this.backedByBlockchainPath = GlobalConstants.backedByBlockchainPath;
        this.qualityPath = GlobalConstants.qualityPath;
        this.locationsPath = GlobalConstants.locationsPath;
        this.careersPath = GlobalConstants.careersPath;
        this.investorRelationsPath = GlobalConstants.investorRelationsPath;
        this.pressPath = GlobalConstants.pressPath;
        this.traceabilityPath = GlobalConstants.traceabilityPath;
        this.fileSharePath = GlobalConstants.fileSharePath;
        this.contractsManagerPath = GlobalConstants.contractsManagerPath;
        this.blockchainPath = GlobalConstants.blockchainPath;
    }
    ngOnInit() {
    }
};
FooterContentComponent = __decorate([
    Component({
        selector: 'app-footer-content',
        templateUrl: './footer-content.component.html',
        styleUrls: ['./footer-content.component.scss']
    })
], FooterContentComponent);
export { FooterContentComponent };
//# sourceMappingURL=footer-content.component.js.map