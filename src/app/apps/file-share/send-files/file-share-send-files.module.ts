// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {FILE_SHARE_SEND_FILES_ROUTES} from './file-share-send-files.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(FILE_SHARE_SEND_FILES_ROUTES),
        SharedModule
    ],
    exports: []
})
export class FileShareSendFilesModule {
}
