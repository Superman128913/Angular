import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../shared/shared.module';
import { TRACEABILITY_ROUTES } from './traceability.routes';
import { TraceabilityDashboardComponent } from './dashboard/traceability-dashboard.component';
import { TraceabilityLibraryComponent } from './library/traceability-library.component';
import { TraceabilityUploadComponent } from './upload/traceability-upload.component';
import { TraceabilityReportsComponent } from './reports/traceability-reports.component';
import { TraceabilitySettingsComponent } from './settings/traceability-settings.component';
import { TraceabilitySendComponent } from './send/traceability-send.component';
import { TraceabilityRequestComponent } from './request/traceability-request.component';
import { TraceabilityReceivedFilesComponent } from './received-files/traceability-received-files.component';
import { DataTablesModule } from 'angular-datatables';
let TraceabilityModule = class TraceabilityModule {
};
TraceabilityModule = __decorate([
    NgModule({
        declarations: [
            TraceabilityDashboardComponent,
            TraceabilityLibraryComponent,
            TraceabilityReportsComponent,
            TraceabilityRequestComponent,
            TraceabilitySendComponent,
            TraceabilitySettingsComponent,
            TraceabilityUploadComponent,
            TraceabilityReceivedFilesComponent
        ],
        imports: [
            RouterModule.forChild(TRACEABILITY_ROUTES),
            SharedModule,
            DataTablesModule
        ],
        exports: []
    })
], TraceabilityModule);
export { TraceabilityModule };
//# sourceMappingURL=traceability.module.js.map