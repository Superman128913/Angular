import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { INVESTORS_ROUTES } from './investor-relations.routes';
import { SharedModule } from '../../shared/shared.module';
let InvestorRelationsModule = class InvestorRelationsModule {
};
InvestorRelationsModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            RouterModule.forChild(INVESTORS_ROUTES),
            SharedModule
        ]
    })
], InvestorRelationsModule);
export { InvestorRelationsModule };
//# sourceMappingURL=investor-relations.module.js.map