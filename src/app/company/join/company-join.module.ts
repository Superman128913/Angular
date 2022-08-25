// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COMPANY_JOIN_ROUTES} from './company-join.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(COMPANY_JOIN_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanyJoinModule {
}
