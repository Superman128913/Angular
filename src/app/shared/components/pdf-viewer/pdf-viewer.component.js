"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfViewerComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var PdfViewerComponent = /** @class */ (function () {
    function PdfViewerComponent(loggerService, httpHelperApiService) {
        this.loggerService = loggerService;
        this.httpHelperApiService = httpHelperApiService;
        this.fileName = 'TaasUploadDocumentComponent';
        // check if file exists
        // this.checkIfFileExists();
    }
    PdfViewerComponent.prototype.ngOnInit = function () {
    };
    // do anything with "pdf"
    PdfViewerComponent.prototype.afterLoadComplete = function (pdf) {
        this.loggerService.debug(this.fileName, 'afterLoadComplete', 'pdf', pdf);
    };
    // do anything with progress data. For example progress indicator
    PdfViewerComponent.prototype.onProgress = function (progressData) {
        this.loggerService.debug(this.fileName, 'onProgress', 'progressData', progressData);
    };
    __decorate([
        (0, core_1.Input)()
    ], PdfViewerComponent.prototype, "src", void 0);
    PdfViewerComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-pdf-viewer',
            templateUrl: './pdf-viewer.component.html',
            styleUrls: ['./pdf-viewer.component.scss']
        })
    ], PdfViewerComponent);
    return PdfViewerComponent;
}());
exports.PdfViewerComponent = PdfViewerComponent;
