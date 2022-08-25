import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../../global-constants';
let FooterCopyrightComponent = class FooterCopyrightComponent {
    constructor() {
        this.copyrightYear = new Date().getFullYear();
        // paths
        this.conditionsOfUsePath = GlobalConstants.conditionsOfUsePath;
        this.privacyNoticePath = GlobalConstants.privacyNoticePath;
    }
    ngOnInit() {
    }
};
FooterCopyrightComponent = __decorate([
    Component({
        selector: 'app-footer-copyright',
        templateUrl: './footer-copyright.component.html',
        styleUrls: ['./footer-copyright.component.scss']
    })
], FooterCopyrightComponent);
export { FooterCopyrightComponent };
//# sourceMappingURL=footer-copyright.component.js.map