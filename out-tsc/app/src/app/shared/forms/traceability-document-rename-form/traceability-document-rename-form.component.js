import { __decorate } from "tslib";
// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';
let TraceabilityDocumentRenameFormComponent = class TraceabilityDocumentRenameFormComponent {
    constructor(formBuilder, loggerService, traceabilityApiService) {
        this.formBuilder = formBuilder;
        this.loggerService = loggerService;
        this.traceabilityApiService = traceabilityApiService;
        this.renamedDocumentEvent = new EventEmitter();
        // private
        this.fileName = 'TraceabilityDocumentRenameFormComponent';
    }
    /** Public **/
    // form controls
    get formControls() {
        return this.traceabilityDocumentRenameForm.controls;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        // create form
        // NOTE: must be in ngOnInit and not in constructor to get name
        this.traceabilityDocumentRenameForm = this.createTraceabilityDocumentRenameForm();
        // set name
        this.name = (_b = (_a = this.document.data) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.name.split('.')[0];
        // set extension
        this.extension = (_d = (_c = this.document.data) === null || _c === void 0 ? void 0 : _c.attributes) === null || _d === void 0 ? void 0 : _d.name.split('.')[1];
    }
    renameTraceabilityDocument(traceabilityDocumentRenameFormValue) {
        var _a, _b;
        const functionName = 'renameTraceabilityDocument';
        // add extension to name
        traceabilityDocumentRenameFormValue.name = traceabilityDocumentRenameFormValue.name + '.' + this.extension;
        // update traceability document via the api
        this.traceabilityApiService.renameTraceabilityDocument((_b = (_a = this.document.data) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.id, traceabilityDocumentRenameFormValue).subscribe({
            next: (document) => {
                // log document
                this.loggerService.debug(this.fileName, functionName, 'document', document);
                // emit close modal to output
                this.renamedDocumentEvent.emit(document);
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
    createTraceabilityDocumentRenameForm() {
        return this.formBuilder.group({
            name: [
                this.name
            ]
        });
    }
};
__decorate([
    Input()
], TraceabilityDocumentRenameFormComponent.prototype, "document", void 0);
__decorate([
    Output()
], TraceabilityDocumentRenameFormComponent.prototype, "renamedDocumentEvent", void 0);
TraceabilityDocumentRenameFormComponent = __decorate([
    Component({
        selector: 'app-traceability-document-rename-form',
        templateUrl: './traceability-document-rename-form.component.html',
        styleUrls: ['./traceability-document-rename-form.component.scss']
    })
], TraceabilityDocumentRenameFormComponent);
export { TraceabilityDocumentRenameFormComponent };
//# sourceMappingURL=traceability-document-rename-form.component.js.map