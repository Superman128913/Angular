import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { FILE_SHARE_REPORTS_ROUTES } from './file-share-reports.routes';
let FileShareReportsModule = class FileShareReportsModule {
};
FileShareReportsModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(FILE_SHARE_REPORTS_ROUTES),
            SharedModule
        ],
        exports: []
    })
], FileShareReportsModule);
export { FileShareReportsModule };
//# sourceMappingURL=file-share-reports.module.js.map