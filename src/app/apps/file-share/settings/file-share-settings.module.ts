// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {FILE_SHARE_SETTINGS_ROUTES} from './file-share-settings.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(FILE_SHARE_SETTINGS_ROUTES),
        SharedModule
    ],
    exports: []
})
export class FileShareSettingsModule {
}
