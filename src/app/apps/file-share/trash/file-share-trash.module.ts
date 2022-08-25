// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {FILE_SHARE_TRASH_ROUTES} from './file-share-trash.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(FILE_SHARE_TRASH_ROUTES),
        SharedModule
    ],
    exports: []
})
export class FileShareTrashModule {
}
