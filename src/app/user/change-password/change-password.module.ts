// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {CHANGE_PASSWORD_ROUTES} from './change-password.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(CHANGE_PASSWORD_ROUTES),
        SharedModule
    ],
    exports: []
})
export class ChangePasswordModule {
}
