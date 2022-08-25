// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {QUALITY_ROUTES} from './quality.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        RouterModule.forChild(QUALITY_ROUTES),
        SharedModule
    ]
})
export class QualityModule {
}
