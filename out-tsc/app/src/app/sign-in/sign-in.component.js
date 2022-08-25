import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../shared/global-constants';
let SignInComponent = class SignInComponent {
    constructor() {
        this.userStatement = GlobalConstants.userStatement;
    }
    ngOnInit() {
    }
};
SignInComponent = __decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.scss']
    })
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map