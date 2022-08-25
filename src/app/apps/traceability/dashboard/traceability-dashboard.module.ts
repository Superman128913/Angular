// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {TRACEABILITY_DASHBOARD_ROUTES} from './traceability-dashboard.routes';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TRACEABILITY_DASHBOARD_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilityDashboardModule {
}
