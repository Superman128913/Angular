import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { FILE_SHARE_DASHBOARD_ROUTES } from './file-share-dashboard.routes';
import { SharedModule } from '../../../shared/shared.module';
let FileShareDashboardModule = class FileShareDashboardModule {
};
FileShareDashboardModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(FILE_SHARE_DASHBOARD_ROUTES),
            SharedModule
        ],
        exports: []
    })
], FileShareDashboardModule);
export { FileShareDashboardModule };
//# sourceMappingURL=file-share-dashboard.module.js.map