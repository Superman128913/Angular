import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let QualityComponent = class QualityComponent {
    constructor() {
        this.qualityPolicy = GlobalConstants.qualityPolicy;
        this.healthASndSafetyPolicy = GlobalConstants.healthASndSafetyPolicy;
        this.qualityEmail = GlobalConstants.qualityEmail;
        this.documents = [];
        this.qualityPolicyFilePath = '../assets/quality/Quality Policy.pdf';
        this.healthASndSafetyPolicyFilePath = '../assets/quality/Health and Safety Policy.pdf';
    }
    ngOnInit() {
        // NOTE: setTimeout is required in order to allow smooth scrolling to top of page
        // something is called in the pdf-viewer that skips the smooth scroll
        setTimeout(() => {
            this.documents = [
                {
                    filePath: this.qualityPolicyFilePath,
                    title: 'Download'
                },
                {
                    filePath: this.healthASndSafetyPolicyFilePath,
                    title: 'Download'
                }
            ];
        }, 5);
    }
};
QualityComponent = __decorate([
    Component({
        selector: 'app-quality',
        templateUrl: './quality.component.html',
        styleUrls: ['./quality.component.scss']
    })
], QualityComponent);
export { QualityComponent };
//# sourceMappingURL=quality.component.js.map