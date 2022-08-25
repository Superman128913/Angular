import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { PRIVACY_NOTICE_ROUTES } from './privacy-notice.routes';
import { SharedModule } from '../../shared/shared.module';
let PrivacyNoticeModule = class PrivacyNoticeModule {
};
PrivacyNoticeModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(PRIVACY_NOTICE_ROUTES),
            SharedModule
        ]
    })
], PrivacyNoticeModule);
export { PrivacyNoticeModule };
//# sourceMappingURL=privacy-notice.module.js.map