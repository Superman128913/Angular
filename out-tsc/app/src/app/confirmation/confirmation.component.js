import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let ConfirmationComponent = class ConfirmationComponent {
    constructor(userApiService, activatedRoute, loggerService) {
        this.userApiService = userApiService;
        this.activatedRoute = activatedRoute;
        this.loggerService = loggerService;
        // private
        this.fileName = 'ConfirmationComponent';
    }
    ngOnInit() {
        // get confirmation token from activated route
        this.activatedRoute.queryParams.subscribe(params => {
            // get confirmation token
            const confirmationToken = params['confirmation_token'];
            if (confirmationToken) {
                // log confirmation token
                this.loggerService.debug(this.fileName, 'ngOnInit', 'confirmationToken: ', confirmationToken);
                // confirmation email
                this.userApiService.confirmUserEmail(confirmationToken);
            }
        });
    }
};
ConfirmationComponent = __decorate([
    Component({
        selector: 'app-confirmation',
        templateUrl: './confirmation.component.html',
        styleUrls: ['./confirmation.component.scss']
    })
], ConfirmationComponent);
export { ConfirmationComponent };
//# sourceMappingURL=confirmation.component.js.map