// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SETTING_ROUTES} from './setting.routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(SETTING_ROUTES),
        SharedModule
    ],
    exports: []
})
export class SettingModule {
}
