// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../../shared/shared.module';
import {FILE_SHARE_REPORTS_ROUTES} from './file-share-reports.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(FILE_SHARE_REPORTS_ROUTES),
        SharedModule
    ],
    exports: []
})
export class FileShareReportsModule {
}
