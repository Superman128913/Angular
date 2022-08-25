// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {COMPANY_SETTINGS_ROUTES} from './company-setting.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(COMPANY_SETTINGS_ROUTES),
        SharedModule
    ],
    exports: []
})
export class CompanySettingModule {
}
