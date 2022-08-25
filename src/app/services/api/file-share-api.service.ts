// Angular
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
// Libraries
import {map} from 'rxjs/operators';
// Application
import {HttpHelperApiService} from './http-helper-api.service';
import {TraceabilityStorageService} from '../storage/traceability-storage.service';
import {LoggerService} from '../logger.service';
import {NotificationService} from '../notification.service';
import {TraceabilityShareForm} from '../../shared/models/file_share.model';
import {GlobalConstants} from '../../shared/global-constants';
import {ErrorHelperApiService} from './error-helper-api.service';

@Injectable({
    providedIn: 'root'
})
export class FileShareApiService {
    private fileName = 'FileShareApiService';
    private basePath = '';

    constructor(private httpHelperApiService: HttpHelperApiService,
                private httpClient: HttpClient,
                private router: Router,
                private traceabilityStorageService: TraceabilityStorageService,
                private loggerService: LoggerService,
                private notificationService: NotificationService,
                private errorHelperApiService: ErrorHelperApiService) {
    }

    /**
     * Get shared files
     *
     * @param documentIds (traceability document id)
     * @param emails (email to share)
     */
     public getSharedFiles(params) {
        // function name
        const functionName = 'getSharedFiles';
        var url = this.basePath + 'sharings';
        if (params && params.sent) url += '?sent=1';

        return this.httpHelperApiService.get(
            url,
        )
        .pipe(
            map(
                (sharing: any) => {
                    return sharing.data;
                },
                (error: HttpErrorResponse) => {
                    // log error
                    this.loggerService.error(this.fileName, functionName, 'error', error);

                    // set display error
                    const displayError = this.errorHelperApiService.getError(error);

                    // notifications
                    if (displayError.status === 500) {
                        this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                    } else if (displayError.message) {
                        this.notificationService.error(displayError.message);
                    }
                })
        );
    }

    public getSharing(id) {
        // function name
        const functionName = 'getSharing';
        var url = this.basePath + 'sharings/' + id;

        return this.httpHelperApiService.get(
            url,
        )
        .pipe(
            map(
                (sharing: any) => {
                    return sharing.data;
                },
                (error: HttpErrorResponse) => {
                    // log error
                    this.loggerService.error(this.fileName, functionName, 'error', error);

                    // set display error
                    const displayError = this.errorHelperApiService.getError(error);

                    // notifications
                    if (displayError.status === 500) {
                        this.notificationService.error(GlobalConstants.errorCodeFiveHundred);
                    } else if (displayError.message) {
                        this.notificationService.error(displayError.message);
                    }
                })
        );
    }

    /**
     * Share traceability document
     *
     * @param documentIds (traceability document id)
     * @param emails (email to share)
     */
    public shareFiles(formValue: TraceabilityShareForm) {
        // function name
        const functionName = 'shareFiles';

        return this.httpHelperApiService.post(
            this.basePath + 'sharings/',
            formValue
        ).subscribe({
            next: (response: any) => {
                this.notificationService.success(response.message);
            },
            error: (error: HttpErrorResponse) => {
                this.notificationService.error(error.message);
            },
            complete: () => {
                // log message
                this.loggerService.info(this.fileName, functionName, 'complete', '');
            }
        });
    }
}
