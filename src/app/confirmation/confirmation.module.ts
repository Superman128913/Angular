// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {CONFIRMATION_ROUTES} from './confirmation.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(CONFIRMATION_ROUTES),
        SharedModule
    ],
    exports: []
})
export class ConfirmationModule {
}
