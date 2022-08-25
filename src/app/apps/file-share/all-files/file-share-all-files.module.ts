// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {FILE_SHARE_ALL_FILES_ROUTES} from './file-share-all-files.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(FILE_SHARE_ALL_FILES_ROUTES),
        SharedModule
    ],
    exports: []
})
export class FileShareAllFilesModule {
}
