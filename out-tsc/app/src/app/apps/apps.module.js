import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../shared/shared.module';
import { APPS_ROUTES } from './apps.routes';
import { TraceabilityComponent } from './traceability/traceability.component';
import { FileShareComponent } from './file-share/file-share.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
let AppsModule = class AppsModule {
};
AppsModule = __decorate([
    NgModule({
        declarations: [
            TraceabilityComponent,
            FileShareComponent,
            BlockchainComponent
        ],
        imports: [
            RouterModule.forChild(APPS_ROUTES),
            SharedModule
        ],
        exports: []
    })
], AppsModule);
export { AppsModule };
//# sourceMappingURL=apps.module.js.map