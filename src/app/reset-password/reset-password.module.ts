// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {RESET_PASSWORD_ROUTES} from './reset-password.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(RESET_PASSWORD_ROUTES),
        SharedModule
    ],
    exports: []
})
export class ResetPasswordModule {
}
