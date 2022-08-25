// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {TAAS_REPORTS_ROUTES} from './traceability-reports.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TAAS_REPORTS_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilityReportsModule {
}
