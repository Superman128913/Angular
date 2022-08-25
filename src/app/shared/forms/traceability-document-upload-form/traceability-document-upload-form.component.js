"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUploadFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var serial_lot_number_validator_1 = require("../../validators/serial-lot-number.validator");
var TraceabilityDocumentUploadFormComponent = /** @class */ (function () {
    function DocumentUploadFormComponent(loggerService, formBuilder, taasApiService) {
        this.loggerService = loggerService;
        this.formBuilder = formBuilder;
        this.taasApiService = taasApiService;
        this.documentEvent = new core_1.EventEmitter();
        // logger
        this.fileName = 'DocumentUploadFormComponent';
        // create document upload form
        this.traceabilityDocumentUploadForm = this.createDocumentUploadForm();
    }
    Object.defineProperty(DocumentUploadFormComponent.prototype, "formControls", {
        /** Public **/
        // convenience getter for easy access to formControls fields
        get: function () {
            return this.traceabilityDocumentUploadForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    DocumentUploadFormComponent.prototype.ngOnInit = function () {
    };
    DocumentUploadFormComponent.prototype.uploadTraceabilityDocument = function (traceabilityDocumentUpdateFormValue) {
        var _this = this;
        var functionName = 'uploadTraceabilityDocument';
        // update traceability document via the api
        this.taasApiService.updateTraceabilityDocument(this.documentId, traceabilityDocumentUpdateFormValue).subscribe(function (document) {
            // log document
            _this.loggerService.debug(_this.fileName, functionName, 'document', document);
            // emit document to output
            _this.documentEvent.emit(document);
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, functionName, 'complete', '');
        });
    };
    /** Private **/
    DocumentUploadFormComponent.prototype.createDocumentUploadForm = function () {
        return this.formBuilder.group({
            partNumber: [
                '',
                forms_1.Validators.required
            ],
            serialNumber: [
                ''
            ],
            lotNumber: [
                ''
            ]
        }, {
            validators: [
                serial_lot_number_validator_1.SerialLotNumberValidator.serialOrLotNumberRequired
            ],
            updateOn: 'blur'
        });
    };
    __decorate([
        (0, core_1.Input)()
    ], DocumentUploadFormComponent.prototype, "documentId", void 0);
    __decorate([
        (0, core_1.Output)()
    ], DocumentUploadFormComponent.prototype, "documentEvent", void 0);
    DocumentUploadFormComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-document-upload-form',
            templateUrl: './traceability-document-upload-form.component.html',
            styleUrls: ['./traceability-document-upload-form.component.scss']
        })
    ], DocumentUploadFormComponent);
    return DocumentUploadFormComponent;
}());
exports.DocumentUploadFormComponent = TraceabilityDocumentUploadFormComponent;
