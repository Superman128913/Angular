import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { FILE_SHARE_RECENT_FILES_ROUTES } from './file-share-recent-files.routes';
let FileShareRecentFilesModule = class FileShareRecentFilesModule {
};
FileShareRecentFilesModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(FILE_SHARE_RECENT_FILES_ROUTES),
            SharedModule
        ],
        exports: []
    })
], FileShareRecentFilesModule);
export { FileShareRecentFilesModule };
//# sourceMappingURL=file-share-recent-files.module.js.map