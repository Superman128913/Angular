import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../../../shared/global-constants';
let TraceabilityRequestComponent = class TraceabilityRequestComponent {
    constructor() {
        // set menu
        this.topbarMenuItems = [
            {
                image: 'bi-reply',
                title: 'New',
                path: GlobalConstants.traceabilityRequestNewPath
            },
            {
                image: 'bi-envelope-open',
                title: 'Open',
                path: GlobalConstants.traceabilityRequestOpenPath
            },
            {
                image: 'bi-envelope',
                title: 'Closed',
                path: GlobalConstants.traceabilityRequestClosedPath
            }
        ];
    }
    ngOnInit() {
    }
};
TraceabilityRequestComponent = __decorate([
    Component({
        selector: 'app-traceability-request',
        templateUrl: './traceability-request.component.html',
        styleUrls: ['./traceability-request.component.scss']
    })
], TraceabilityRequestComponent);
export { TraceabilityRequestComponent };
//# sourceMappingURL=traceability-request.component.js.map