// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {TRACEABILITY_REQUEST_ROUTES} from './traceability-request.routes';
import { TraceabilityRequestNewComponent } from './new/traceability-request-new.component';
import { TraceabilityRequestOpenComponent } from './open/traceability-request-open.component';
import { TraceabilityRequestCompleteComponent } from './complete/traceability-request-complete.component';

@NgModule({
    declarations: [
        TraceabilityRequestNewComponent,
        TraceabilityRequestOpenComponent,
        TraceabilityRequestCompleteComponent
    ],
    imports: [
        RouterModule.forChild(TRACEABILITY_REQUEST_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilityRequestModule {
}
