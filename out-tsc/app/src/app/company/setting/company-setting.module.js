import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_SETTINGS_ROUTES } from './company-setting.routes';
import { SharedModule } from '../../shared/shared.module';
let CompanySettingModule = class CompanySettingModule {
};
CompanySettingModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_SETTINGS_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanySettingModule);
export { CompanySettingModule };
//# sourceMappingURL=company-setting.module.js.map