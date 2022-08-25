// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../../shared/shared.module';
import {TRACEABILITY_REQUEST_NEW_ROUTES} from './traceability-request-new.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TRACEABILITY_REQUEST_NEW_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilityRequestNewModule {
}
