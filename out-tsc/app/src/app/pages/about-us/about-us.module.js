import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { ABOUT_US_ROUTES } from './about-us.routes';
import { SharedModule } from '../../shared/shared.module';
let AboutUsModule = class AboutUsModule {
};
AboutUsModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(ABOUT_US_ROUTES),
            SharedModule
        ]
    })
], AboutUsModule);
export { AboutUsModule };
//# sourceMappingURL=about-us.module.js.map