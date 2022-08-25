import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Libraries
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
let TraceabilityDocumentsResolver = class TraceabilityDocumentsResolver {
    constructor(traceabilityStorageService, traceabilityApiService, loggerService) {
        this.traceabilityStorageService = traceabilityStorageService;
        this.traceabilityApiService = traceabilityApiService;
        this.loggerService = loggerService;
        this.fileName = 'TraceabilityDocumentsResolver';
    }
    resolve(route, state) {
        // function name
        const functionName = 'resolve';
        const allDocuments = route.data['allDocuments'];
        const pendingDocuments = route.data['pendingDocuments'];
        if (allDocuments) {
            // set division id
            const divisionId = this.traceabilityStorageService.getSelectedTraceabilityId();
            // refresh traceability
            return this.traceabilityApiService.getAllTraceabilityDocuments(divisionId).pipe(map((project) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'project', project);
                return project;
            }), catchError((error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // throw error
                return throwError(error);
            }));
        }
        else if (pendingDocuments) {
            // set division id
            const divisionId = this.traceabilityStorageService.getSelectedTraceabilityId();
            // refresh traceability
            return this.traceabilityApiService.getPendingTraceabilityDocuments(divisionId).pipe(map((project) => {
                // log data
                this.loggerService.debug(this.fileName, functionName, 'project', project);
                return project;
            }), catchError((error) => {
                // log error
                this.loggerService.error(this.fileName, functionName, 'error', error);
                // throw error
                return throwError(error);
            }));
        }
        return null;
    }
};
TraceabilityDocumentsResolver = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TraceabilityDocumentsResolver);
export { TraceabilityDocumentsResolver };
//# sourceMappingURL=traceability-documents.resolver.js.map