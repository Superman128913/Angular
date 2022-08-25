import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
let BlockchainSvgComponent = class BlockchainSvgComponent {
    constructor() {
        this.svgSize = '';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], BlockchainSvgComponent.prototype, "svgSize", void 0);
BlockchainSvgComponent = __decorate([
    Component({
        selector: 'app-blockchain-svg',
        templateUrl: './blockchain-svg.component.html',
        styleUrls: ['./blockchain-svg.component.scss']
    })
], BlockchainSvgComponent);
export { BlockchainSvgComponent };
//# sourceMappingURL=blockchain-svg.component.js.map