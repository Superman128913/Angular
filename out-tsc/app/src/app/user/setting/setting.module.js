import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SETTING_ROUTES } from './setting.routes';
import { SharedModule } from '../../shared/shared.module';
let SettingModule = class SettingModule {
};
SettingModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(SETTING_ROUTES),
            SharedModule
        ],
        exports: []
    })
], SettingModule);
export { SettingModule };
//# sourceMappingURL=setting.module.js.map