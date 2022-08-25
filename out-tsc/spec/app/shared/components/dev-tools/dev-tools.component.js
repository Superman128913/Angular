import { __decorate } from "tslib";
let DevToolsComponent = class DevToolsComponent {
    constructor() {
        this.addCompanyDomainItem = new EventEmitter();
        this.registerCompanyDomain = new EventEmitter();
        // private
        this.fileName = 'DevToolsComponent';
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DevToolsComponent.prototype, "companyDivision", void 0);
__decorate([
    Input()
], DevToolsComponent.prototype, "companyDivisionAddress", void 0);
__decorate([
    Output()
], DevToolsComponent.prototype, "addCompanyDomainItem", void 0);
__decorate([
    Output()
], DevToolsComponent.prototype, "registerCompanyDomain", void 0);
DevToolsComponent = __decorate([
    Component({
        selector: 'app-dev-tools',
        templateUrl: './dev-tools.component.html',
        styleUrls: ['./dev-tools.component.scss']
    })
], DevToolsComponent);
export { DevToolsComponent };
//# sourceMappingURL=dev-tools.component.js.map