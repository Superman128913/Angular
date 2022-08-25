// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {REGISTER_ROUTES} from './register.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(REGISTER_ROUTES),
        SharedModule
    ],
    exports: []
})
export class RegisterModule {
}
