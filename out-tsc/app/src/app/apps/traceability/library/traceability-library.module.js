import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Libraries
import { DataTablesModule } from 'angular-datatables';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { TRACEABILITY_LIBRARY_ROUTES } from './traceability-library.routes';
let TraceabilityLibraryModule = class TraceabilityLibraryModule {
};
TraceabilityLibraryModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(TRACEABILITY_LIBRARY_ROUTES),
            SharedModule,
            DataTablesModule
        ],
        exports: []
    })
], TraceabilityLibraryModule);
export { TraceabilityLibraryModule };
//# sourceMappingURL=traceability-library.module.js.map