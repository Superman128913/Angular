import { __decorate } from "tslib";
// Angular
import { Component, Input } from '@angular/core';
import { GlobalConstants } from '../../global-constants';
let SidebarComponent = class SidebarComponent {
    constructor(router, companyStorageService, userApiService, userStorageService, traceabilityStorageService, fileShareStorageService) {
        this.router = router;
        this.companyStorageService = companyStorageService;
        this.userApiService = userApiService;
        this.userStorageService = userStorageService;
        this.traceabilityStorageService = traceabilityStorageService;
        this.fileShareStorageService = fileShareStorageService;
        this.menu = [];
        // logo
        this.defaultLogo = GlobalConstants.defaultLogo;
        // paths
        this.homePath = GlobalConstants.homePath;
        this.traceabilityPath = GlobalConstants.traceabilityPath;
        this.fileSharePath = GlobalConstants.fileSharePath;
        this.blockchainPath = GlobalConstants.blockchainPath;
        this.contractsManagerPath = GlobalConstants.contractsManagerPath;
        //
        this.copyrightYear = new Date().getFullYear();
        // set divisions variable
        this.divisions = this.companyStorageService.getCompanyDivisions();
    }
    ngOnInit() {
        if (this.parentClass === GlobalConstants.traceabilityClass) {
            this.defaultDivisionId = this.traceabilityStorageService.getDefaultTraceabilityId();
        }
        else if (this.parentClass === GlobalConstants.fileShareClass) {
            this.defaultDivisionId = this.fileShareStorageService.getDefaultFileShareId();
        }
        // set selectedDivisionId
        this.setSelectedDivisionId(this.defaultDivisionId);
    }
    /** Public **/
    setSelectedDivisionId(divisionId) {
        // set selectedDivisionId
        this.selectedDivisionId = divisionId;
    }
};
__decorate([
    Input()
], SidebarComponent.prototype, "parentClass", void 0);
__decorate([
    Input()
], SidebarComponent.prototype, "logo", void 0);
__decorate([
    Input()
], SidebarComponent.prototype, "menu", void 0);
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map