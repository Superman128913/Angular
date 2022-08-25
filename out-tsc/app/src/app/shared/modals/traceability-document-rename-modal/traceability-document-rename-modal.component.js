import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let TraceabilityDocumentRenameModalComponent = class TraceabilityDocumentRenameModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    closeModal() {
        // close modal
        this.activeModal.close();
    }
    renamedDocument(document) {
        // update document
        this.document = document;
        // close modal
        this.closeModal();
    }
};
TraceabilityDocumentRenameModalComponent = __decorate([
    Component({
        selector: 'app-traceability-document-rename-modal',
        templateUrl: './traceability-document-rename-modal.component.html'
    })
], TraceabilityDocumentRenameModalComponent);
export { TraceabilityDocumentRenameModalComponent };
//# sourceMappingURL=traceability-document-rename-modal.component.js.map