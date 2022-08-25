import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { FILE_SHARE_REQUEST_FILES_ROUTES } from './file-share-request-files.routes';
let FileShareRequestFilesModule = class FileShareRequestFilesModule {
};
FileShareRequestFilesModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(FILE_SHARE_REQUEST_FILES_ROUTES),
            SharedModule
        ],
        exports: []
    })
], FileShareRequestFilesModule);
export { FileShareRequestFilesModule };
//# sourceMappingURL=file-share-request-files.module.js.map