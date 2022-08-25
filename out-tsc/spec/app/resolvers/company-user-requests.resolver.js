import { __decorate } from "tslib";
// Angular
import { Injectable } from '@angular/core';
let CompanyUserRequestsResolver = class CompanyUserRequestsResolver {
    constructor(traceabilityStorageService, traceabilityApiService, loggerService, companyApiService, userStorageService) {
        this.traceabilityStorageService = traceabilityStorageService;
        this.traceabilityApiService = traceabilityApiService;
        this.loggerService = loggerService;
        this.companyApiService = companyApiService;
        this.userStorageService = userStorageService;
        this.fileName = 'CompanyUserRequestsResolver';
    }
    resolve(route, state) {
        // function name
        const functionName = 'resolve';
        // get approval token from company user request flow
        const routeApprovalToken = route.queryParams['approval_token'];
        if (routeApprovalToken) {
            // log approval token
            this.loggerService.debug(this.fileName, functionName, 'routeApprovalToken', routeApprovalToken);
            // get approval
            const approval = route.queryParams['approval'];
            // log approval
            this.loggerService.debug(this.fileName, functionName, 'approval', approval);
            if (approval === 'true') {
                // set form value
                const companyUserRequestApproveFormValue = {
                    userId: this.userStorageService.getUserId(),
                    acceptanceToken: routeApprovalToken
                };
                // approve company user request
                this.companyApiService.acceptCompanyUserRequest(companyUserRequestApproveFormValue);
            }
            else if (approval === 'false') {
                // decline company user request
                this.companyApiService.rejectCompanyUserRequest(routeApprovalToken);
            }
        }
        return null;
    }
};
CompanyUserRequestsResolver = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CompanyUserRequestsResolver);
export { CompanyUserRequestsResolver };
//# sourceMappingURL=company-user-requests.resolver.js.map