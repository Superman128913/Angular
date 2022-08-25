"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaasApiService = void 0;
// Angular
var core_1 = require("@angular/core");
// Libraries
var operators_1 = require("rxjs/operators");
var TraceabilityApiService = /** @class */ (function () {
    function TaasApiService(httpHelperApiService, httpClient, storageService, loggerService, notificationService) {
        this.httpHelperApiService = httpHelperApiService;
        this.httpClient = httpClient;
        this.storageService = storageService;
        this.loggerService = loggerService;
        this.notificationService = notificationService;
        this.fileName = 'TaasApiService';
    }

    /**
     * get single instance of traceability
     *
     * @param companyDivisionId (company division id)
     */
    TaasApiService.prototype.getTraceability = function (companyDivisionId) {
        var _this = this;
        var functionName = 'getTraceability';
        // set traceability id
        var traceabilityId = this.storageService.getTraceabilityId(companyDivisionId);
        // log traceability id
        this.loggerService.debug(this.fileName, functionName, 'traceabilityId', traceabilityId);
        return this.httpHelperApiService.get('traceabilities/' + traceabilityId).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'project', project);
            // store traceability
            if (project.traceability.data) {
                _this.storageService.storeTraceability(project);
            }
            return project.traceability.data.attributes.documents;
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }));
    };
    /**
     * upload traceability files to traceability
     *
     * @param companyDivisionId (company division id)
     * @param files (list of selected files)
     */
    TaasApiService.prototype.uploadTraceabilityFiles = function (companyDivisionId, files) {
        var _this = this;
        var functionName = 'uploadTraceabilityFiles';
        var type = '';
        var message = '';
        var title = '';
        // set form data
        var formData = new FormData();
        // NOTE - false positive https://www.w3.org/TR/FileAPI/#filelist-section
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (var i = 0; i < files.length; i++) {
            formData.append('files[]', files[i]);
        }
        // log form data
        this.loggerService.debug(this.fileName, functionName, 'files[]', formData);
        // set traceability id
        var traceabilityId = this.storageService.getTraceabilityId(companyDivisionId);
        // log traceability id
        this.loggerService.debug(this.fileName, functionName, 'traceabilityId', traceabilityId);
        // upload traceability files
        return this.httpHelperApiService.put('traceabilities/' + traceabilityId + '/upload_files', formData).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'project', project);
            type = 'success';
            message = project.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // return documents
            return project.documents;
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }));
    };
    /**
     * Replace traceability file with new file
     *
     * @param traceabilityDocumentId (traceability document id)
     * @param file (single file)
     */
    TaasApiService.prototype.replaceTraceabilityFile = function (traceabilityDocumentId, file) {
        var _this = this;
        var functionName = 'replaceTraceabilityFile';
        var type = '';
        var message = '';
        var title = '';
        // set form data
        var formData = new FormData();
        formData.append('file', file);
        // log form data
        this.loggerService.debug(this.fileName, functionName, 'file', formData);
        // replace traceability document
        return this.httpHelperApiService.put('traceability_documents/' + traceabilityDocumentId, formData).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'project', project);
            type = 'success';
            message = project.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // return document
            return project.document;
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }));
    };
    /**
     * Download traceability file
     *
     * @param filePath (file path to file location)
     */
    TaasApiService.prototype.downloadTraceabilityFile = function (filePath) {
        var _this = this;
        var functionName = 'downloadTraceabilityFile';
        var type = '';
        var message = '';
        var title = '';
        // replace traceability document
        return this.httpClient.get(filePath, { responseType: 'blob' }).pipe((0, operators_1.map)(function (document) {
            // log document
            _this.loggerService.debug(_this.fileName, functionName, 'document', document);
            type = 'success';
            message = 'Document downloaded.';
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // return document
            return document;
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }));

    };
    /**
     * update traceability document
     *
     * @param traceabilityDocumentId (traceability document id)
     * @param traceabilityDocumentUpdateFormValue (TraceabilityDocumentUpdateForm model)
     */
    TaasApiService.prototype.updateTraceabilityDocument = function (traceabilityDocumentId, traceabilityDocumentUpdateFormValue) {
        var _this = this;
        var functionName = 'updateTraceabilityDocument';
        var type = '';
        var message = '';
        var title = '';
        return this.httpHelperApiService.put('traceability_documents/' + traceabilityDocumentId, traceabilityDocumentUpdateFormValue).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'project', project);
            type = 'success';
            message = project.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
            // return document
            return project.document;
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }));
    };
    /**
     * delete traceability document from traceability
     *
     * @param traceabilityDocumentId (traceability document id)
     */
    TaasApiService.prototype.deleteTraceabilityDocument = function (traceabilityDocumentId) {
        var _this = this;
        var functionName = 'deleteTraceabilityDocument';
        var type = '';
        var message = '';
        var title = '';
        return this.httpHelperApiService.delete('traceability_documents/' + traceabilityDocumentId).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'project', project);
            type = 'success';
            message = project.message;
            title = '';
            // pop toastr message
            _this.notificationService.toasterNotification(type, message, title);
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }));
    };
    /**
     * check if the url exists (used for testing if an S3 file is available)
     *
     * @param url (url that the asset is located at)
     */
    TaasApiService.prototype.doesFileExist = function (url) {
        var _this = this;
        var functionName = 'fileExists';
        return this.httpHelperApiService.head(url).pipe((0, operators_1.map)(function (project) {
            // log data
            _this.loggerService.debug(_this.fileName, functionName, 'project', project);
        }, function (error) {
            // log error
            _this.loggerService.error(_this.fileName, functionName, 'error', error);
        }));
    };
    TraceabilityApiService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], TaasApiService);
    return TaasApiService;
}());
exports.TaasApiService = TraceabilityApiService;
