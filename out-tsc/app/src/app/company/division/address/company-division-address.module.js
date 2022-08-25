import { __decorate } from "tslib";
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Application
import { COMPANY_DIVISION_ADDRESS_ROUTES } from './company-division-address.routes';
import { SharedModule } from '../../../shared/shared.module';
let CompanyDivisionAddressModule = class CompanyDivisionAddressModule {
};
CompanyDivisionAddressModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forChild(COMPANY_DIVISION_ADDRESS_ROUTES),
            SharedModule
        ],
        exports: []
    })
], CompanyDivisionAddressModule);
export { CompanyDivisionAddressModule };
//# sourceMappingURL=company-division-address.module.js.map