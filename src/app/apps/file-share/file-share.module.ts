// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {SharedModule} from '../../shared/shared.module';
import {FILE_SHARE_ROUTES} from './file-share.routes';
import {FileShareDashboardComponent} from './dashboard/file-share-dashboard.component';
import {FileShareAllFilesComponent} from './all-files/file-share-all-files.component';
import {FileShareRecentFilesComponent} from './recent-files/file-share-recent-files.component';
import {FileShareTrashComponent} from './trash/file-share-trash.component';
import {FileShareRequestFilesComponent} from './request-files/file-share-request-files.component';
import {FileShareReportsComponent} from './reports/file-share-reports.component';
import {FileShareSettingsComponent} from './settings/file-share-settings.component';
import {FileShareSendFilesComponent} from './send-files/file-share-send-files.component';

@NgModule({
    declarations: [
        FileShareDashboardComponent,
        FileShareAllFilesComponent,
        FileShareRecentFilesComponent,
        FileShareTrashComponent,
        FileShareRequestFilesComponent,
        FileShareReportsComponent,
        FileShareSettingsComponent,
        FileShareSendFilesComponent
    ],
    imports: [
        RouterModule.forChild(FILE_SHARE_ROUTES),
        SharedModule
    ],
    exports: []
})
export class FileShareModule {
}
