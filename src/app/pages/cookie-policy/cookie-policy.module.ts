// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COOKIE_POLICY_ROUTES} from './cookie-policy.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        RouterModule.forChild(COOKIE_POLICY_ROUTES),
        SharedModule
    ]
})
export class CookiePolicyModule {
}
