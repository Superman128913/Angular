import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../../../shared/global-constants';
let TraceabilityUploadComponent = class TraceabilityUploadComponent {
    constructor() {
        this.topbarMenuItems = [
            {
                image: 'bi bi-file-arrow-up',
                title: 'Document',
                path: GlobalConstants.traceabilityUploadDocumentPath
            },
            {
                image: 'bi bi-envelope-open',
                title: 'Email',
                path: GlobalConstants.traceabilityUploadEmailPath
            },
            {
                image: 'bi bi-file-code',
                title: 'API',
                path: GlobalConstants.traceabilityUploadApiPath
            }
        ];
    }
    ngOnInit() {
    }
};
TraceabilityUploadComponent = __decorate([
    Component({
        selector: 'app-traceability-upload',
        templateUrl: './traceability-upload.component.html',
        styleUrls: ['./traceability-upload.component.scss']
    })
], TraceabilityUploadComponent);
export { TraceabilityUploadComponent };
//# sourceMappingURL=traceability-upload.component.js.map