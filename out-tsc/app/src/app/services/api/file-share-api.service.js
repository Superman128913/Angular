import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Libraries
import { map } from 'rxjs/operators';
import { GlobalConstants } from '../../shared/global-constants';
let FileShareApiService = class FileShareApiService {
    constructor(httpHelperApiService, httpClient, router, traceabilityStorageService, loggerService, notificationService, errorHelperApiService) {
        this.httpHelperApiService = httpHelperApiService;
        this.httpClient = httpClient;
        this.router = router;
        this.traceabilityStorageService = traceabilityStorageService;
        this.loggerService = loggerService;
        this.notificationService = notificationService;
        this.errorHelperApiService = errorHelperApiService;
        this.fileName = 'FileShareApiService';
        this.basePath = '';
    }
    /**
     * Get shared files
     *
     * @param documentIds (traceability document id)
     * @param emails (email to share)
     */
    getSharedFiles(params) {
        // function name
        const functionName = 'getSharedFiles';
        var url = this.basePath + 'sharings';
        if (params && params.sent)
            url += '?sent=1';
        return this.httpHelperApiService.get(url)
            .pipe(map((sharing) => {
            return sharing.data;
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
    getSharing(id) {
        // function name
        const functionName = 'getSharing';
        var url = this.basePath + 'sharings/' + id;
        return this.httpHelperApiService.get(url)
            .pipe(map((sharing) => {
            return sharing.data;
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
     * Share traceability document
     *
     * @param documentIds (traceability document id)
     * @param emails (email to share)
     */
    shareFiles(formValue) {
        // function name
        const functionName = 'shareFiles';
        return this.httpHelperApiService.post(this.basePath + 'sharings/', formValue).subscribe({
            next: (response) => {
                this.notificationService.success(response.message);
            },
            error: (error) => {
                this.notificationService.error(error.message);
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
};
FileShareApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FileShareApiService);
export { FileShareApiService };
//# sourceMappingURL=file-share-api.service.js.map