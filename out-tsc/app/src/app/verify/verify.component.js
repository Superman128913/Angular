import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let VerifyComponent = class VerifyComponent {
    constructor(userApiService, activatedRoute, loggerService) {
        this.userApiService = userApiService;
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        // private
        this.fileName = 'VerifyComponent';
    }
    ngOnInit() {
        // get confirmation token from activated route
        this.activatedRoute.queryParams.subscribe(params => {
            // get confirmation token
            const confirmationToken = params['confirmation_token'];
            if (confirmationToken) {
                // log confirmation token
                this.loggerService.debug(this.fileName, 'ngOnInit', 'confirmationToken: ', confirmationToken);
                // verify email
                this.userApiService.confirmUserEmail(confirmationToken);
            }
        });
    }
};
VerifyComponent = __decorate([
    Component({
        selector: 'app-verify',
        templateUrl: './verify.component.html',
        styleUrls: ['./verify.component.scss']
    })
], VerifyComponent);
export { VerifyComponent };
//# sourceMappingURL=verify.component.js.map