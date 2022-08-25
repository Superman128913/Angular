import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let CompanyDomainVerifyComponent = class CompanyDomainVerifyComponent {
    constructor(companyApiService, activatedRoute, loggerService) {
        this.companyApiService = companyApiService;
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        // private
        this.fileName = 'CompanyDomainVerifyComponent';
    }
    ngOnInit() {
        // get confirmation token from activated route
        this.activatedRoute.queryParams.subscribe(params => {
            // get confirmation token
            const confirmationToken = params['confirmation_token'];
            if (confirmationToken) {
                // log domain confirmation token
                this.loggerService.debug(this.fileName, 'ngOnInit', 'confirmationToken', confirmationToken);
                // confirmation company domain
                this.companyApiService.confirmCompanyDomain(confirmationToken);
            }
        });
    }
};
CompanyDomainVerifyComponent = __decorate([
    Component({
        selector: 'app-company-domain-confirmation',
        templateUrl: './company-domain-verify.component.html',
        styleUrls: ['./company-domain-verify.component.scss']
    })
], CompanyDomainVerifyComponent);
export { CompanyDomainVerifyComponent };
//# sourceMappingURL=company-domain-verify.component.js.map