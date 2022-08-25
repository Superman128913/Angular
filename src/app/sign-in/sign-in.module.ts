// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SIGN_IN_ROUTES} from './sign-in.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(SIGN_IN_ROUTES),
        SharedModule
    ],
    exports: []
})
export class SignInModule {
}
