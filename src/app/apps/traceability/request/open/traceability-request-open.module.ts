// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../../shared/shared.module';
import {TRACEABILITY_REQUEST_OPEN_ROUTES} from './traceability-request-open.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TRACEABILITY_REQUEST_OPEN_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilityRequestOpenModule {
}
