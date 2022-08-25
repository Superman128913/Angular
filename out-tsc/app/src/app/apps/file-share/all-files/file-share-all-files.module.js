import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { FILE_SHARE_ALL_FILES_ROUTES } from './file-share-all-files.routes';
let FileShareAllFilesModule = class FileShareAllFilesModule {
};
FileShareAllFilesModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(FILE_SHARE_ALL_FILES_ROUTES),
            SharedModule
        ],
        exports: []
    })
], FileShareAllFilesModule);
export { FileShareAllFilesModule };
//# sourceMappingURL=file-share-all-files.module.js.map