// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {TRACEABILITY_SEND_ROUTES} from './traceability-send.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TRACEABILITY_SEND_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilitySendModule {
}
