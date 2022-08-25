// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COMPANY_DOMAIN_ROUTES} from './company-domain.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(COMPANY_DOMAIN_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanyDomainModule {
}
