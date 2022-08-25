import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { FILE_SHARE_TRASH_ROUTES } from './file-share-trash.routes';
let FileShareTrashModule = class FileShareTrashModule {
};
FileShareTrashModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(FILE_SHARE_TRASH_ROUTES),
            SharedModule
        ],
        exports: []
    })
], FileShareTrashModule);
export { FileShareTrashModule };
//# sourceMappingURL=file-share-trash.module.js.map