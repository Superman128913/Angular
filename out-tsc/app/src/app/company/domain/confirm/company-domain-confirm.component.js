import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let CompanyDomainConfirmComponent = class CompanyDomainConfirmComponent {
    constructor(companyApiService, activatedRoute, loggerService) {
        this.companyApiService = companyApiService;
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        // private
        this.fileName = 'CompanyDomainConfirmComponent';
    }
    ngOnInit() {
        // get confirmation token from activated route
        this.activatedRoute.queryParams.subscribe(params => {
            // get confirmation token
            const newConfirmationToken = params['confirmation_token'];
            if (newConfirmationToken) {
                // log domain confirmation token
                this.loggerService.debug(this.fileName, 'ngOnInit', 'confirmationToken', newConfirmationToken);
                const companyDomainConfirmForm = {
                    confirmationToken: newConfirmationToken
                };
                // confirmation company domain
                this.companyApiService.confirmCompanyDomain(companyDomainConfirmForm);
            }
        });
    }
};
CompanyDomainConfirmComponent = __decorate([
    Component({
        selector: 'app-company-domain-confirm',
        templateUrl: './company-domain-confirm.component.html',
        styleUrls: ['./company-domain-confirm.component.scss']
    })
], CompanyDomainConfirmComponent);
export { CompanyDomainConfirmComponent };
//# sourceMappingURL=company-domain-confirm.component.js.map