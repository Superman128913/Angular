// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {INVESTORS_ROUTES} from './investor-relations.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [
        RouterModule.forChild(INVESTORS_ROUTES),
        SharedModule
    ]
})
export class InvestorRelationsModule {
}
