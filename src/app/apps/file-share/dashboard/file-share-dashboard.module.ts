// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// Application
import {FILE_SHARE_DASHBOARD_ROUTES} from './file-share-dashboard.routes';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(FILE_SHARE_DASHBOARD_ROUTES),
        SharedModule
    ],
    exports: []
})
export class FileShareDashboardModule {
}
