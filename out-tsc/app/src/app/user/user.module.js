import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { USER_ROUTES } from './user.routes';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SettingComponent } from './setting/setting.component';
let UserModule = class UserModule {
};
UserModule = __decorate([
    NgModule({
        declarations: [
            ProfileComponent,
            ChangePasswordComponent,
            SettingComponent
        ],
        imports: [
            RouterModule.forChild(USER_ROUTES),
            SharedModule
        ],
        exports: []
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=user.module.js.map