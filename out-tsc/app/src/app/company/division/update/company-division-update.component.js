import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
import { GlobalConstants } from '../../../shared/global-constants';
let CompanyDivisionUpdateComponent = class CompanyDivisionUpdateComponent {
    constructor(activatedRoute, loggerService, companyStorageService) {
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        this.companyStorageService = companyStorageService;
        // private
        this.fileName = 'CompanyDivisionUpdateComponent';
        let companyDivisionId;
        // get company division id from the route
        this.activatedRoute.paramMap.subscribe(params => {
            // set company division id
            companyDivisionId = params.get(GlobalConstants.id);
            // log company division id
            this.loggerService.info(this.fileName, 'constructor', 'companyDivisionId', companyDivisionId);
        });
        // retrieve company division from local storage
        this.companyDivision = this.companyStorageService.getCompanyDivisionById(companyDivisionId);
        // set company division addresses
        this.companyDivisionAddresses =
            this.companyStorageService.getCompanyDivisionAddressesByCompanyDivisionId(companyDivisionId);
    }
    /** Public **/
    ngOnInit() {
    }
};
CompanyDivisionUpdateComponent = __decorate([
    Component({
        selector: 'app-company-division-update',
        templateUrl: './company-division-update.component.html',
        styleUrls: ['./company-division-update.component.scss']
    })
], CompanyDivisionUpdateComponent);
export { CompanyDivisionUpdateComponent };
//# sourceMappingURL=company-division-update.component.js.map