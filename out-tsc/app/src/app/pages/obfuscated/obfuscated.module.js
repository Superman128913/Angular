import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { OBFUSCATED_ROUTES } from './obfuscated.routes';
import { SharedModule } from '../../shared/shared.module';
let ObfuscatedModule = class ObfuscatedModule {
};
ObfuscatedModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(OBFUSCATED_ROUTES),
            SharedModule
        ]
    })
], ObfuscatedModule);
export { ObfuscatedModule };
//# sourceMappingURL=obfuscated.module.js.map