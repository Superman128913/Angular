import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
let TopbarComponent = class TopbarComponent {
    constructor() {
        // input
        this.menu = [];
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], TopbarComponent.prototype, "menu", void 0);
__decorate([
    Input()
], TopbarComponent.prototype, "searchBar", void 0);
TopbarComponent = __decorate([
    Component({
        selector: 'app-topbar',
        templateUrl: './topbar.component.html',
        styleUrls: ['./topbar.component.scss']
    })
], TopbarComponent);
export { TopbarComponent };
//# sourceMappingURL=topbar.component.js.map