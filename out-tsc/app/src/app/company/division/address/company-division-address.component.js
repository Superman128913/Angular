import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../../../shared/global-constants';
// Application
let CompanyDivisionAddressComponent = class CompanyDivisionAddressComponent {
    constructor(activatedRoute, loggerService) {
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        // private
        this.fileName = 'CompanyDivisionAddressComponent';
        // get division id from the route
        this.activatedRoute.paramMap.subscribe(params => {
            // set company division id
            this.companyDivisionId = params.get(GlobalConstants.companyDivisionId);
            // log company division id
            this.loggerService.debug(this.fileName, 'constructor', 'companyDivisionId', this.companyDivisionId);
            // set company division address id
            this.companyDivisionAddressId = params.get(GlobalConstants.id);
            // log company division address id
            this.loggerService.debug(this.fileName, 'constructor', 'companyDivisionAddressId', this.companyDivisionAddressId);
        });
    }
    /** Public **/
    ngOnInit() {
    }
};
CompanyDivisionAddressComponent = __decorate([
    Component({
        selector: 'app-company-division-address',
        templateUrl: './company-division-address.component.html',
        styleUrls: ['./company-division-address.component.scss']
    })
], CompanyDivisionAddressComponent);
export { CompanyDivisionAddressComponent };
//# sourceMappingURL=company-division-address.component.js.map