import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
let PdfViewerComponent = class PdfViewerComponent {
    constructor(loggerService, httpHelperApiService) {
        this.loggerService = loggerService;
        this.httpHelperApiService = httpHelperApiService;
        this.src = '';
        this.fileName = 'PdfViewerComponent';
        // check if file exists
        // this.checkIfFileExists();
    }
    ngOnInit() {
    }
    // do anything with "pdf"
    afterLoadComplete(pdf) {
        this.loggerService.debug(this.fileName, 'afterLoadComplete', 'pdf', pdf);
    }
    // do anything with progress data. For example progress indicator
    onProgress(progressData) {
        this.loggerService.debug(this.fileName, 'onProgress', 'progressData', progressData);
    }
};
__decorate([
    Input()
], PdfViewerComponent.prototype, "src", void 0);
__decorate([
    Input()
], PdfViewerComponent.prototype, "originalSize", void 0);
__decorate([
    Input()
], PdfViewerComponent.prototype, "fitToPage", void 0);
PdfViewerComponent = __decorate([
    Component({
        selector: 'app-pdf-viewer',
        templateUrl: './pdf-viewer.component.html',
        styleUrls: ['./pdf-viewer.component.scss']
    })
], PdfViewerComponent);
export { PdfViewerComponent };
//# sourceMappingURL=pdf-viewer.component.js.map