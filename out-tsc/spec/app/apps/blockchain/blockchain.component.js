import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let BlockchainComponent = class BlockchainComponent {
    constructor() {
        this.blockchainSolutionsEmail = GlobalConstants.blockchainSolutionsEmail;
    }
    ngOnInit() {
    }
};
BlockchainComponent = __decorate([
    Component({
        selector: 'app-blockchain',
        templateUrl: './blockchain.component.html',
        styleUrls: ['./blockchain.component.scss']
    })
], BlockchainComponent);
export { BlockchainComponent };
//# sourceMappingURL=blockchain.component.js.map