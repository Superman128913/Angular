import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Libraries
import { map } from 'rxjs/operators';
import { GlobalConstants } from '../../shared/global-constants';
let TraceabilityApiService = class TraceabilityApiService {
    constructor(httpHelperApiService, httpClient, router, traceabilityStorageService, loggerService, notificationService, errorHelperApiService) {
        this.httpHelperApiService = httpHelperApiService;
        this.httpClient = httpClient;
        this.router = router;
        this.traceabilityStorageService = traceabilityStorageService;
        this.loggerService = loggerService;
        this.notificationService = notificationService;
        this.errorHelperApiService = errorHelperApiService;
        this.fileName = 'TraceabilityApiService';
        this.basePath = '';
    }
    /**
     * Get single instance of traceability
     *
     * @param companyDivisionId (company division id)
     * @param newMode
     * @param newRequest
     */
    getTraceability(companyDivisionId, newMode = 0, newRequest = -2) {
        // function name
        const functionName = 'getTraceability';
        // set traceability id
        const traceabilityId = this.traceabilityStorageService.getTraceabilityId(companyDivisionId);
        // log traceability id
        this.loggerService.debug(this.fileName, functionName, 'traceabilityId', traceabilityId);
        const options = {
            mode: newMode,
            request: newRequest
        };
        const params = new URLSearchParams();
        // NOTE - false positive https://www.w3.org/TR/FileAPI/#filelist-section
        // eslint-disable-next-line @typescript-eslint/prefer-for-of,guard-for-in
        for (const key in options) {
            params.set(key, options[key]);
        }
        const newPath = this.basePath + 'traceabilities/' + traceabilityId + '?' + params.toString();
        return this.httpHelperApiService.get(newPath).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            return project.documents;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Traceability Documents
     */
    /**
     * Get all traceability documents
     *
     * @param companyDivisionId (company division id)
     */
    getAllTraceabilityDocuments(companyDivisionId) {
        // function name
        const functionName = 'getAllTraceabilityDocuments';
        // set traceability id
        const traceabilityId = this.traceabilityStorageService.getTraceabilityId(companyDivisionId);
        // log traceability id
        this.loggerService.debug(this.fileName, functionName, 'traceabilityId', traceabilityId);
        return this.httpHelperApiService.get('traceabilities/' + traceabilityId + '/all_documents').pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            return project.documents;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Get pending traceability documents
     *
     * @param companyDivisionId (company division id)
     */
    getPendingTraceabilityDocuments(companyDivisionId) {
        // function name
        const functionName = 'getPendingTraceabilityDocuments';
        // set traceability id
        const traceabilityId = this.traceabilityStorageService.getTraceabilityId(companyDivisionId);
        // log traceability id
        this.loggerService.debug(this.fileName, functionName, 'traceabilityId', traceabilityId);
        return this.httpHelperApiService.get('traceabilities/' + traceabilityId + '/pending_documents').pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            return project.documents;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Get approved traceability documents
     *
     * @param companyDivisionId (company division id)
     */
    getApprovedTraceabilityDocuments(companyDivisionId) {
        // function name
        const functionName = 'getApprovedTraceabilityDocuments';
        // set traceability id
        const traceabilityId = this.traceabilityStorageService.getTraceabilityId(companyDivisionId);
        // log traceability id
        this.loggerService.debug(this.fileName, functionName, 'traceabilityId', traceabilityId);
        return this.httpHelperApiService.get('traceabilities/' + traceabilityId + '/approved_documents').pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            return project.documents;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Upload traceability files to traceability
     *
     * @param companyDivisionId (company division id)
     * @param files (list of selected files)
     * @param source (TODO - this is overly complicated - make another function)
     */
    uploadTraceabilityFiles(companyDivisionId, files, source = 'upload') {
        // function name
        const functionName = 'uploadTraceabilityFiles';
        // set form data
        const formData = new FormData();
        // NOTE - false positive https://www.w3.org/TR/FileAPI/#filelist-section
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < files.length; i++) {
            formData.append('files[]', files[i]);
        }
        // log form data
        this.loggerService.debug(this.fileName, functionName, 'files[]', formData);
        // set traceability id
        const traceabilityId = this.traceabilityStorageService.getTraceabilityId(companyDivisionId);
        // log traceability id
        this.loggerService.debug(this.fileName, functionName, 'traceabilityId', traceabilityId);
        let path = this.basePath + 'traceabilities/' + traceabilityId + '/upload_files';
        if (source === 'request') {
            path = this.basePath + 'traceability_requests/' + traceabilityId + '/upload_files';
        }
        // upload traceability files
        return this.httpHelperApiService.put(path, formData).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            // notification
            if (project.message) {
                this.notificationService.success(project.message);
            }
            // return documents
            return project.documents;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Replace traceability file with new file
     *
     * @param traceabilityDocumentId (traceability document id)
     * @param file (single file)
     */
    replaceTraceabilityFile(traceabilityDocumentId, file) {
        // function name
        const functionName = 'replaceTraceabilityFile';
        // set form data
        const formData = new FormData();
        formData.append('file', file);
        // log form data
        this.loggerService.debug(this.fileName, functionName, 'file', formData);
        // replace traceability document
        return this.httpHelperApiService.put(this.basePath + 'traceability_documents/' + traceabilityDocumentId, formData).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            // notification
            if (project.message) {
                this.notificationService.success(project.message);
            }
            // return document
            return project.document;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Download traceability file
     *
     * @param filePath (file path to file location)
     */
    downloadTraceabilityFile(filePath) {
        // function name
        const functionName = 'downloadTraceabilityFile';
        // replace traceability document
        return this.httpClient.get(filePath, {
            responseType: 'blob'
        }).pipe(map((document) => {
            // log document
            this.loggerService.debug(this.fileName, functionName, 'document', document);
            // notification
            this.notificationService.success('Document downloaded.');
            // return document
            return document;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Update traceability document
     *
     * @param traceabilityDocumentId (traceability document id)
     * @param traceabilityDocumentUpdateFormValue (TraceabilityDocumentUpdateForm model)
     */
    updateTraceabilityDocument(traceabilityDocumentId, traceabilityDocumentUpdateFormValue) {
        // function name
        const functionName = 'updateTraceabilityDocument';
        return this.httpHelperApiService.put(this.basePath + 'traceability_documents/' + traceabilityDocumentId, traceabilityDocumentUpdateFormValue).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            // notification
            if (project.message) {
                this.notificationService.success(project.message);
            }
            // return document
            return project.document;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Rename traceability document
     *
     * @param traceabilityDocumentId (traceability document id)
     * @param traceabilityDocumentUpdateFormValue (TraceabilityDocumentUpdateForm model)
     */
    renameTraceabilityDocument(traceabilityDocumentId, traceabilityDocumentRenameFormValue) {
        // function name
        const functionName = 'renameTraceabilityDocument';
        return this.httpHelperApiService.put(this.basePath + 'traceability_documents/rename/' + traceabilityDocumentId, traceabilityDocumentRenameFormValue).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            // notification
            if (project.message) {
                this.notificationService.success(project.message);
            }
            // return document
            return project.document;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Delete traceability document from traceability
     *
     * @param traceabilityDocumentId (traceability document id)
     */
    deleteTraceabilityDocument(traceabilityDocumentId) {
        // function name
        const functionName = 'deleteTraceabilityDocument';
        return this.httpHelperApiService.delete(this.basePath + 'traceability_documents/' + traceabilityDocumentId).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            // notification
            if (project.message) {
                this.notificationService.success(project.message);
            }
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Check if the url exists (used for testing if an S3 file is available)
     *
     * @param url (url that the asset is located at)
     */
    doesFileExist(url) {
        const functionName = 'fileExists';
        return this.httpHelperApiService.head(url).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
        }));
    }
    /**
     * Traceability Requests
     */
    /**
     * Get single instance of traceability filter pending
     *
     * @param companyDivisionId (company division id)
     */
    // TODO - Maybe can be deleted
    getTraceabilityRequests(companyDivisionId) {
        // function name
        const functionName = 'getTraceabilityRequests';
        // set traceability id
        const traceabilityId = this.traceabilityStorageService.getTraceabilityId(companyDivisionId);
        // log traceability id
        this.loggerService.debug(this.fileName, functionName, 'traceabilityId', traceabilityId);
        return this.httpHelperApiService.get(this.basePath + 'traceability_requests/' + traceabilityId).pipe(map((project) => {
            // log data
            this.loggerService.debug(this.fileName, functionName, 'project', project);
            return project.requests;
        }, (error) => {
            // log error
            this.loggerService.error(this.fileName, functionName, 'error', error);
            // set display error
            const displayError = this.errorHelperApiService.getError(error);
            // notifications
            if (displayError.status === 500) {
                this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
            }
            else if (displayError.message) {
                this.notificationService.error(displayError.message);
            }
        }));
    }
    /**
     * Create traceability document request
     *
     * @param traceabilityRequestCreateFormValue: TraceabilityDocumentRequestForm
     */
    createTraceabilityRequest(traceabilityRequestCreateFormValue) {
        // function name
        const functionName = 'createTraceabilityRequest';
        // log form data
        this.loggerService.debug(this.fileName, functionName, 'traceabilityRequestCreateFormValue', traceabilityRequestCreateFormValue);
        // upload traceability files
        this.httpHelperApiService.post(this.basePath + 'traceability_requests/', traceabilityRequestCreateFormValue).subscribe({
            next: (response) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'response', response);
                // navigate
                this.router.navigate([GlobalConstants.traceabilityRequestOpenPath]).then(() => {
                    // log message
                    this.loggerService.info(this.fileName, functionName, 'navigate', '');
                });
                // notification
                if (response.message) {
                    this.notificationService.success(response.message);
                }
            },
            error: (error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // set display error
                const displayError = this.errorHelperApiService.getError(error);
                // notifications
                if (displayError.status === 500) {
                    this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                }
                else if (displayError.message) {
                    this.notificationService.error(displayError.message);
                }
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
};
TraceabilityApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TraceabilityApiService);
export { TraceabilityApiService };
//# sourceMappingURL=traceability-api.service.js.map