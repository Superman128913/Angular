// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {CAREERS_ROUTES} from './careers.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        RouterModule.forChild(CAREERS_ROUTES),
        SharedModule
    ]
})
export class CareersModule {
}
