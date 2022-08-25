import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../../shared/shared.module';
import { FILE_SHARE_SETTINGS_ROUTES } from './file-share-settings.routes';
let FileShareSettingsModule = class FileShareSettingsModule {
};
FileShareSettingsModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(FILE_SHARE_SETTINGS_ROUTES),
            SharedModule
        ],
        exports: []
    })
], FileShareSettingsModule);
export { FileShareSettingsModule };
//# sourceMappingURL=file-share-settings.module.js.map