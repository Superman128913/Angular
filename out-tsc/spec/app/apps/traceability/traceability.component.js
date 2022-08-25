import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let TraceabilityComponent = class TraceabilityComponent {
    // public modifyVisible = false;
    // public modifyAsset;
    // public assets;
    // public assetUpdateForm: FormGroup;
    constructor() {
        // sidebar
        this.traceabilityLogo = GlobalConstants.traceabilityWordmarkAlabaster;
        this.traceabilityClass = GlobalConstants.traceabilityClass;
        this.sidebarMenuItems = [
            {
                image: 'bi bi-files',
                title: 'Dashboard',
                path: GlobalConstants.traceabilityDashboardPath
            },
            {
                image: 'bi bi-archive',
                title: 'Library',
                path: GlobalConstants.traceabilityLibraryPath
            },
            {
                image: 'bi bi-file-arrow-up',
                title: 'Upload',
                path: GlobalConstants.traceabilityUploadPath
            },
            // send
            {
                image: 'bi bi-send',
                title: 'Send',
                path: GlobalConstants.traceabilitySendPath
            },
            // request
            {
                image: 'bi bi-reply',
                title: 'Request',
                path: GlobalConstants.traceabilityRequestPath
            },
            {
                image: 'bi bi-file-bar-graph',
                title: 'Reports',
                path: GlobalConstants.traceabilityReportsPath
            },
            {
                image: 'bi bi-gear',
                title: 'Settings',
                path: GlobalConstants.traceabilitySettingsPath
            }
        ];
    }
    ngOnInit() {
    }
};
TraceabilityComponent = __decorate([
    Component({
        selector: 'app-traceability',
        templateUrl: './traceability.component.html',
        styleUrls: ['./traceability.component.scss']
    })
], TraceabilityComponent);
export { TraceabilityComponent };
//# sourceMappingURL=traceability.component.js.map