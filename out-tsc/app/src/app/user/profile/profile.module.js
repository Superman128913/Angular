import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { PROFILE_ROUTES } from './profile.routes';
import { SharedModule } from '../../shared/shared.module';
let ProfileModule = class ProfileModule {
};
ProfileModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(PROFILE_ROUTES),
            SharedModule
        ],
        exports: []
    })
], ProfileModule);
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map