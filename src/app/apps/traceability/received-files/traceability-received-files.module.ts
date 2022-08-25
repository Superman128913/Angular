// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {TRACEABLILTY_RECEIVED_FILES_ROUTES} from './traceability-received-files.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TRACEABLILTY_RECEIVED_FILES_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilityReceivedFilesModule {
}
