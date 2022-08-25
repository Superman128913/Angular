// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {ADMIN_ROUTES} from './admin.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(ADMIN_ROUTES),
        SharedModule
    ]
})
export class AdminModule {
}
