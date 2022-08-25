import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(userApiService) {
        this.userApiService = userApiService;
        // validate token is needed to get user from reset password flow
        this.userApiService.validateToken();
    }
    ngOnInit() {
    }
};
ChangePasswordComponent = __decorate([
    Component({
        selector: 'app-change-password',
        templateUrl: './change-password.component.html',
        styleUrls: ['./change-password.component.scss']
    })
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map