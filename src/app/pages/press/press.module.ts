// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {PRESS_CENTER_ROUTES} from './press.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        RouterModule.forChild(PRESS_CENTER_ROUTES),
        SharedModule
    ]
})
export class PressModule {
}
