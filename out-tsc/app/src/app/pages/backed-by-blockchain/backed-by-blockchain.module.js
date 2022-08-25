import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { BACKED_BY_BLOCKCHAIN_ROUTES } from './backed-by-blockchain.routes';
import { SharedModule } from '../../shared/shared.module';
let BackedByBlockchainModule = class BackedByBlockchainModule {
};
BackedByBlockchainModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(BACKED_BY_BLOCKCHAIN_ROUTES),
            SharedModule
        ]
    })
], BackedByBlockchainModule);
export { BackedByBlockchainModule };
//# sourceMappingURL=backed-by-blockchain.module.js.map