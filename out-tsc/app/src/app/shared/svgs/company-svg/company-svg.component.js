import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
let CompanySvgComponent = class CompanySvgComponent {
    constructor() {
        this.svgSize = '';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], CompanySvgComponent.prototype, "svgSize", void 0);
CompanySvgComponent = __decorate([
    Component({
        selector: 'app-company-svg',
        templateUrl: './company-svg.component.html',
        styleUrls: ['./company-svg.component.scss']
    })
], CompanySvgComponent);
export { CompanySvgComponent };
//# sourceMappingURL=company-svg.component.js.map