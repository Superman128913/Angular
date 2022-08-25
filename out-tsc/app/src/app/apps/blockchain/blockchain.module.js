import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { SharedModule } from '../../shared/shared.module';
import { BLOCKCHAIN_ROUTES } from './blockchain.routes';
let BlockchainModule = class BlockchainModule {
};
BlockchainModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(BLOCKCHAIN_ROUTES),
            SharedModule
        ],
        exports: []
    })
], BlockchainModule);
export { BlockchainModule };
//# sourceMappingURL=blockchain.module.js.map