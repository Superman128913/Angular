import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
// Libraries
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
let TraceabilityDocumentsDynamicResolver = class TraceabilityDocumentsDynamicResolver {
    constructor(storageService, traceabilityApiService, loggerService) {
        this.storageService = storageService;
        this.traceabilityApiService = traceabilityApiService;
        this.loggerService = loggerService;
        this.fileName = 'TraceabilityDocumentsDynamicResolver';
    }
    resolve(route, state) {
        // function name
        const functionName = 'resolve';
        // set division id
        const divisionId = this.storageService.getSelectedTraceabilityDivisionId();
        // refresh traceability
        return this.traceabilityApiService.getTraceability(divisionId, route.data['resolveMode'], route.data['resolveRequest']).pipe(//route.data.resolvedata
        map((project) => {
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
};
TraceabilityDocumentsDynamicResolver = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TraceabilityDocumentsDynamicResolver);
export { TraceabilityDocumentsDynamicResolver };
//# sourceMappingURL=traceability-documents-dynamic.resolver.js.map