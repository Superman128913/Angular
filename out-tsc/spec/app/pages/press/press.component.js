import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let PressComponent = class PressComponent {
    constructor() {
        this.pressEmail = GlobalConstants.pressEmail;
    }
    ngOnInit() {
    }
};
PressComponent = __decorate([
    Component({
        selector: 'app-press',
        templateUrl: './press.component.html',
        styleUrls: ['./press.component.scss']
    })
], PressComponent);
export { PressComponent };
//# sourceMappingURL=press.component.js.map