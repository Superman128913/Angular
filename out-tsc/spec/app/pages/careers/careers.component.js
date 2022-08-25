import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let CareersComponent = class CareersComponent {
    constructor() {
        this.linkedInUrl = GlobalConstants.linkedInUrl;
        this.ourPrincples = GlobalConstants.ourPrinciples;
        console.log(this.ourPrincples);
    }
    ngOnInit() {
    }
};
CareersComponent = __decorate([
    Component({
        selector: 'app-careers',
        templateUrl: './careers.component.html',
        styleUrls: ['./careers.component.scss']
    })
], CareersComponent);
export { CareersComponent };
//# sourceMappingURL=careers.component.js.map