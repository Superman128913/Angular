// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {TAAS_SETTINGS_ROUTES} from './traceability-settings.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(TAAS_SETTINGS_ROUTES),
        SharedModule
    ],
    exports: []
})
export class TraceabilitySettingsModule {
}
