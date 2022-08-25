"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaasUploadDocumentComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
// Application
var global_constants_1 = require("../../../../shared/global-constants");
var TraceabilityUploadDocumentComponent = /** @class */ (function () {
    // private indexes = [];
    function TaasUploadDocumentComponent(loggerService, taasApiService, storageService, activatedRoute, modalService, fileSaverService, notificationService) {
        var _this = this;
        this.loggerService = loggerService;
        this.taasApiService = taasApiService;
        this.storageService = storageService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.fileSaverService = fileSaverService;
        this.notificationService = notificationService;
        this.fieldClass = 'form-control-plaintext';
        this.disable = true;
        // traceability
        this.documents = [];
        // drag and drop
        this.dragAndDropTitle = global_constants_1.GlobalConstants.dragAndDropTitle;
        // logger
        this.fileName = 'TaasUploadDocumentComponent';
        // set division id
        this.divisionId = this.storageService.getSelectedTraceabilityDivisionId();
        // set documents from resolver
        this.activatedRoute.data.pipe((0, operators_1.map)(function (data) { return data.documents; })).subscribe(function (resolverDocuments) {
            var _a;
            // only save pending documents
            for (var _i = 0, resolverDocuments_1 = resolverDocuments; _i < resolverDocuments_1.length; _i++) {
                var document_1 = resolverDocuments_1[_i];
                if ((_a = document_1.data) === null || _a === void 0 ? void 0 : _a.attributes.pending) {
                    _this.documents.push(document_1);
                }
            }
            _this.documents = resolverDocuments;
        });
        // log documents
        this.loggerService.debug(this.fileName, 'constructor', 'traceability', this.documents);
    }
    /** Public **/
    TaasUploadDocumentComponent.prototype.ngOnInit = function () {
    };
    /**
     * Handle file(s) from browsing or dropping
     *
     * @param files (selected or dropped file(s))
     */
    TaasUploadDocumentComponent.prototype.fileBrowseOrDroppedHandler = function (files) {
        var _this = this;
        var functionName = 'fileBrowseOrDroppedHandler';
        var filesArray = Array.from(files);
        // check that file is pdf and add to the documents array, if file is not pdf remove from files array
        for (var _i = 0, _a = filesArray.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], index = _b[0], file = _b[1];
            if (file.type === 'application/pdf') {
                var empty = [];
                this.documents.push(empty);
            }
            else {
                // pop toastr message
                this.notificationService.toasterNotification('error', 'Only .pdf files are allowed', '');
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
        this.taasApiService.uploadTraceabilityFiles(this.divisionId, filesArray).subscribe(function (next) {
            // log documents
            _this.loggerService.debug(_this.fileName, functionName, 'documents', _this.documents);
            // log next
            _this.loggerService.debug(_this.fileName, functionName, 'next', next);
            var _loop_1 = function (serverDocument) {
                var inArray = _this.documents.some(function (document) { var _a, _b; return ((_a = document.data) === null || _a === void 0 ? void 0 : _a.id) === ((_b = serverDocument.data) === null || _b === void 0 ? void 0 : _b.id); });
                if (!inArray) {
                    var index = _this.documents.findIndex(function (document) { return document.length === 0; });
                    if (typeof index === 'number') {
                        _this.documents.splice(index, 1, serverDocument);
                    }
                    else {
                        _this.documents.push(serverDocument);
                    }
                }
            };
            for (var _i = 0, next_1 = next; _i < next_1.length; _i++) {
                var serverDocument = next_1[_i];
                _loop_1(serverDocument);
            }
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, functionName, 'complete', '');
        });
    };
    /**
     * Update local documents array by removing the uploaded file
     *
     * @param serverDocument
     */
    TaasUploadDocumentComponent.prototype.updateDocuments = function (serverDocument) {
        var index = this.documents.findIndex(function (document) { var _a, _b; return ((_a = document.data) === null || _a === void 0 ? void 0 : _a.id) === ((_b = serverDocument.data) === null || _b === void 0 ? void 0 : _b.id); });
        if (typeof index === 'number') {
            this.documents.splice(index, 1);
        }
    };
    ;
    /**
     * Replace existing file at current index with new file
     *
     * @param index (index of existing file)
     * @param traceabilityDocumentId (traceability document id)
     * @param files (single file in file list)
     */
    TaasUploadDocumentComponent.prototype.replaceFile = function (index, traceabilityDocumentId, files) {
        var _this = this;
        var functionName = 'replaceFile';
        // log files
        this.loggerService.debug(this.fileName, functionName, 'files', files);
        // create array from file list
        var filesArray = Array.from(files);
        for (var _i = 0, filesArray_1 = filesArray; _i < filesArray_1.length; _i++) {
            var file = filesArray_1[_i];
            // upload traceability files
            this.taasApiService.replaceTraceabilityFile(traceabilityDocumentId, file).subscribe(function (next) {
                // log next
                _this.loggerService.debug(_this.fileName, functionName, 'next', next);
                // replace old file with new file
                _this.documents.splice(index, 1, next);
            }, function (error) {
                // log error
                _this.loggerService.error(_this.fileName, functionName, 'error', error);
            }, function () {
                // log message
                _this.loggerService.info(_this.fileName, functionName, 'complete', '');
            });
        }
    };
    /**
     * Download file to disk
     *
     * @param document (document object)
     */
    TaasUploadDocumentComponent.prototype.downloadFile = function (document) {
        var _this = this;
        var _a;
        var functionName = 'downloadFile';
        this.taasApiService.downloadTraceabilityFile((_a = document.data) === null || _a === void 0 ? void 0 : _a.attributes.filePath).subscribe(function (next) {
            var _a;
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'next', next);
            // save file to disk
            _this.fileSaverService.save(next, (_a = document.data) === null || _a === void 0 ? void 0 : _a.attributes.name);
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, functionName, 'complete', '');
        });
    };
    /**
     * Delete file from files list
     *
     * @param traceabilityDocumentId (document id)
     * @param index (document index)
     */
    TaasUploadDocumentComponent.prototype.deleteFile = function (traceabilityDocumentId, index) {
        var _this = this;
        var functionName = 'deleteFile';
        // delete traceability document via the API
        this.taasApiService.deleteTraceabilityDocument(traceabilityDocumentId).subscribe(function (next) {
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'next', next);
            // remove object at index
            _this.documents.splice(index, 1);
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }, function () {
            // log message
            _this.loggerService.info(_this.fileName, functionName, 'complete', '');
        });
    };
    /**
     * View file in new tab
     *
     * @param index (file index)
     */
    TaasUploadDocumentComponent.prototype.viewFile = function (index) {
        var _a;
        var file = this.documents[index];
        window.open((_a = file.data) === null || _a === void 0 ? void 0 : _a.attributes.filePath);
    };
    /**
     * Open modal
     *
     * @param content
     */
    TaasUploadDocumentComponent.prototype.openXl = function (content) {
        this.modalService.open(content, {
            size: 'xl',
            centered: true
        });
    };
    /**
     * Helper function to display file name without file extension
     *
     * @param filename
     */
    TaasUploadDocumentComponent.prototype.displayWithoutFileExtension = function (filename) {
        var name = filename.split('.');
        return name[0];
    };
    __decorate([
        (0, core_1.ViewChild)('fileDrop')
    ], TaasUploadDocumentComponent.prototype, "fileDropElement", void 0);
    TaasUploadDocumentComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-traceability-upload-document',
            templateUrl: './traceability-upload-document.component.html',
            styleUrls: ['./traceability-upload-document.component.scss']
        })
    ], TaasUploadDocumentComponent);
    return TaasUploadDocumentComponent;
}());
exports.TaasUploadDocumentComponent = TraceabilityUploadDocumentComponent;
