import { __decorate } from "tslib";
// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { SerialLotNumberValidator } from '../../validators/serial-lot-number.validator';
let TraceabilityDocumentUploadFormComponent = class TraceabilityDocumentUploadFormComponent {
    constructor(loggerService, formBuilder, traceabilityApiService) {
        this.loggerService = loggerService;
        this.formBuilder = formBuilder;
        this.traceabilityApiService = traceabilityApiService;
        this.documentEvent = new EventEmitter();
        // private
        this.fileName = 'TraceabilityDocumentUploadFormComponent';
        // create form
        this.traceabilityDocumentUploadForm = this.createDocumentUploadForm();
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.traceabilityDocumentUploadForm.controls;
    }
    ngOnInit() {
    }
    uploadTraceabilityDocument(traceabilityDocumentUpdateFormValue) {
        const functionName = 'uploadTraceabilityDocument';
        // update traceability document via the api
        this.traceabilityApiService.updateTraceabilityDocument(this.documentId, traceabilityDocumentUpdateFormValue).subscribe({
            next: (document) => {
                // log document
                this.loggerService.debug(this.fileName, functionName, 'document', document);
                // emit document to output
                this.documentEvent.emit(document);
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
    /** Private **/
    createDocumentUploadForm() {
        return this.formBuilder.group({
            partNumber: [
                '',
                Validators.required
            ],
            serialNumber: [
                ''
            ],
            lotNumber: [
                ''
            ]
        }, {
            validators: [
                SerialLotNumberValidator.serialOrLotNumberRequired
            ],
            updateOn: 'blur'
        });
    }
};
__decorate([
    Input()
], TraceabilityDocumentUploadFormComponent.prototype, "documentId", void 0);
__decorate([
    Output()
], TraceabilityDocumentUploadFormComponent.prototype, "documentEvent", void 0);
TraceabilityDocumentUploadFormComponent = __decorate([
    Component({
        selector: 'app-traceability-document-upload-form',
        templateUrl: './traceability-document-upload-form.component.html',
        styleUrls: ['./traceability-document-upload-form.component.scss']
    })
], TraceabilityDocumentUploadFormComponent);
export { TraceabilityDocumentUploadFormComponent };
//# sourceMappingURL=traceability-document-upload-form.component.js.map