// Angular
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
// Libraries
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
// Application
import {TraceabilityStorageService} from '../services/storage/traceability-storage.service';
import {TraceabilityApiService} from '../services/api/traceability-api.service';
import {LoggerService} from '../services/logger.service';

@Injectable({
    providedIn: 'root'
})
export class TraceabilityDocumentsResolver implements Resolve<any> {

    private fileName = 'TraceabilityDocumentsResolver';

    constructor(private traceabilityStorageService: TraceabilityStorageService,
                private traceabilityApiService: TraceabilityApiService,
                private loggerService: LoggerService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        // function name
        const functionName = 'resolve';

        const allDocuments = route.data['allDocuments'];
        const pendingDocuments = route.data['pendingDocuments'];

        if (allDocuments) {
            // set division id
            const divisionId = this.traceabilityStorageService.getSelectedTraceabilityId();

            // refresh traceability
            return this.traceabilityApiService.getAllTraceabilityDocuments(
                divisionId
            ).pipe(
                map(
                    (project: any) => {
                        // log data
                        this.loggerService.debug(this.fileName, functionName, 'project', project);

                        return project;
                    }),
                catchError(
                    (error: HttpErrorResponse) => {
                        // log error
                        this.loggerService.error(this.fileName, functionName, 'error', error);

                        // throw error
                        return throwError(error);
                    }));
        } else if (pendingDocuments) {
            // set division id
            const divisionId = this.traceabilityStorageService.getSelectedTraceabilityId();

            // refresh traceability
            return this.traceabilityApiService.getPendingTraceabilityDocuments(
                divisionId
            ).pipe(
                map(
                    (project: any) => {
                        // log data
                        this.loggerService.debug(this.fileName, functionName, 'project', project);

                        return project;
                    }),
                catchError(
                    (error: HttpErrorResponse) => {
                        // log error
                        this.loggerService.error(this.fileName, functionName, 'error', error);

                        // throw error
                        return throwError(error);
                    }));
        }

        return null;
    }
}
