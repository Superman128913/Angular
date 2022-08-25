import { __decorate } from "tslib";
// Angular
import { Component } from '@angular/core';
// Application
import { GlobalConstants } from '../../shared/global-constants';
let InvestorRelationsComponent = class InvestorRelationsComponent {
    constructor() {
        this.ourStory = GlobalConstants.ourStory;
        this.homePath = GlobalConstants.homePath;
        this.aboutUsPath = GlobalConstants.aboutUsPath;
        this.investorRelationsEmail = GlobalConstants.investorRelationsEmail;
    }
    ngOnInit() {
    }
};
InvestorRelationsComponent = __decorate([
    Component({
        selector: 'app-investor-relations',
        templateUrl: './investor-relations.component.html',
        styleUrls: ['./investor-relations.component.scss']
    })
], InvestorRelationsComponent);
export { InvestorRelationsComponent };
//# sourceMappingURL=investor-relations.component.js.map