import { __decorate } from "tslib";
// Angular
import { Component, ViewChild } from '@angular/core';
// Application
import { GlobalConstants } from '../../../../shared/global-constants';
import { TraceabilityDocumentRenameModalComponent } from '../../../../shared/modals/traceability-document-rename-modal/traceability-document-rename-modal.component';
let TraceabilityUploadDocumentComponent = class TraceabilityUploadDocumentComponent {
    // private indexes = [];
    constructor(loggerService, traceabilityApiService, traceabilityStorageService, activatedRoute, modalService, fileSaverService, notificationService) {
        this.loggerService = loggerService;
        this.traceabilityApiService = traceabilityApiService;
        this.traceabilityStorageService = traceabilityStorageService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.fileSaverService = fileSaverService;
        this.notificationService = notificationService;
        this.disable = true;
        // traceability
        this.documents = [];
        // drag and drop
        this.dragAndDropTitle = GlobalConstants.dragAndDropTitle;
        // logger
        this.fileName = 'TraceabilityUploadDocumentComponent';
        // set division id
        this.divisionId = this.traceabilityStorageService.getSelectedTraceabilityId();
        // set documents from resolver
        this.documents = this.activatedRoute.snapshot.data['documents'];
        // log documents
        this.loggerService.debug(this.fileName, 'constructor', 'documents', this.documents);
    }
    /** Public **/
    ngOnInit() {
    }
    /**
     * Handle file(s) from browsing or dropping
     *
     * @param files (selected or dropped file(s))
     */
    fileBrowseOrDroppedHandler(files) {
        const functionName = 'fileBrowseOrDroppedHandler';
        const filesArray = Array.from(files);
        // check that file is pdf and add to the documents array, if file is not pdf remove from files array
        for (const [index, file] of filesArray.entries()) {
            if (file.type === 'application/pdf') {
                const empty = [];
                this.documents.push(empty);
            }
            else {
                // notification
                this.notificationService.error('Only .pdf files are allowed.');
                filesArray.splice(index, 1);
            }
        }
        // log files
        this.loggerService.debug(this.fileName, functionName, 'documents', this.documents);
        // log files
        this.loggerService.debug(this.fileName, functionName, 'filesArray', filesArray);
        // check if file array is empty and avoid api call
        if (filesArray.length === 0) {
            return;
        }
        // upload traceability files
        this.traceabilityApiService.uploadTraceabilityFiles(this.divisionId, filesArray).subscribe({
            next: (next) => {
                // log documents
                this.loggerService.debug(this.fileName, functionName, 'documents', this.documents);
                // log next
                this.loggerService.debug(this.fileName, functionName, 'next', next);
                for (const serverDocument of next) {
                    const inArray = this.documents.some(document => { var _a, _b; return ((_a = document.data) === null || _a === void 0 ? void 0 : _a.id) === ((_b = serverDocument.data) === null || _b === void 0 ? void 0 : _b.id); });
                    if (!inArray) {
                        const index = this.documents.findIndex(document => document.length === 0);
                        if (typeof index === 'number') {
                            this.documents.splice(index, 1, serverDocument);
                        }
                        else {
                            this.documents.push(serverDocument);
                        }
                    }
                }
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
    /**
     * Update local documents array by removing the uploaded file
     *
     * @param serverDocument
     */
    updateDocuments(serverDocument) {
        const index = this.documents.findIndex(document => { var _a, _b; return ((_a = document.data) === null || _a === void 0 ? void 0 : _a.id) === ((_b = serverDocument.data) === null || _b === void 0 ? void 0 : _b.id); });
        if (typeof index === 'number') {
            this.documents.splice(index, 1);
        }
    }
    ;
    /**
     * Rename existing file at current index
     *
     * @param index (index of existing file)
     */
    renameFile(index) {
        // set document
        const document = this.documents[index];
        // open modal
        this.openModal(TraceabilityDocumentRenameModalComponent, document, 'md');
    }
    /**
     * Replace existing file at current index with new file
     *
     * @param index (index of existing file)
     * @param traceabilityDocumentId (traceability document id)
     * @param files (single file in file list)
     */
    replaceFile(index, traceabilityDocumentId, files) {
        const functionName = 'replaceFile';
        // log files
        this.loggerService.debug(this.fileName, functionName, 'files', files);
        // set current document data to null
        const document = this.documents[index];
        document.data = null;
        // create array from file list
        const filesArray = Array.from(files);
        for (const file of filesArray) {
            // upload traceability files
            this.traceabilityApiService.replaceTraceabilityFile(traceabilityDocumentId, file).subscribe({
                next: (next) => {
                    // log next
                    this.loggerService.debug(this.fileName, functionName, 'next', next);
                    // replace old file with new file
                    this.documents.splice(index, 1, next);
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
    }
    /**
     * Download file to disk
     *
     * @param document (document object)
     */
    downloadFile(document) {
        var _a;
        const functionName = 'downloadFile';
        this.traceabilityApiService.downloadTraceabilityFile((_a = document.data) === null || _a === void 0 ? void 0 : _a.attributes.filePath).subscribe({
            next: (next) => {
                var _a;
                // log data
                this.loggerService.debug(this.fileName, functionName, 'next', next);
                // save file to disk
                this.fileSaverService.save(next, (_a = document.data) === null || _a === void 0 ? void 0 : _a.attributes.name);
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
    /**
     * Delete file from files list
     *
     * @param traceabilityDocumentId (document id)
     * @param index (document index)
     */
    deleteFile(traceabilityDocumentId, index) {
        const functionName = 'deleteFile';
        // set current document data to null
        const document = this.documents[index];
        document.data = null;
        // delete traceability document via the API
        this.traceabilityApiService.deleteTraceabilityDocument(traceabilityDocumentId).subscribe({
            next: (next) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'next', next);
                // remove object at index
                this.documents.splice(index, 1);
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
    /**
     * View file in new tab
     *
     * @param index (file index)
     */
    viewFile(index) {
        var _a;
        const file = this.documents[index];
        window.open((_a = file.data) === null || _a === void 0 ? void 0 : _a.attributes.filePath);
    }
    /**
     * Open modal
     *
     * @param content
     * @param document
     * @param modalSize
     */
    openModal(content, document, modalSize) {
        const modalRef = this.modalService.open(content, {
            size: modalSize,
            centered: true,
            backdrop: 'static',
            keyboard: false
        });
        modalRef.componentInstance.document = document;
    }
    /**
     * Helper function to display file name without file extension
     *
     * @param filename
     */
    displayWithoutFileExtension(filename) {
        const name = filename.split('.');
        return name[0];
    }
};
__decorate([
    ViewChild('fileDrop')
], TraceabilityUploadDocumentComponent.prototype, "fileDropElement", void 0);
TraceabilityUploadDocumentComponent = __decorate([
    Component({
        selector: 'app-traceability-upload-document',
        templateUrl: './traceability-upload-document.component.html',
        styleUrls: ['./traceability-upload-document.component.scss']
    })
], TraceabilityUploadDocumentComponent);
export { TraceabilityUploadDocumentComponent };
//# sourceMappingURL=traceability-upload-document.component.js.map