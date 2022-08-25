import { __decorate } from "tslib";
// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';
// Application
import { GlobalConstants } from '../../../global-constants';
let SidebarDivisionDropdownComponent = class SidebarDivisionDropdownComponent {
    constructor(router, userApiService, traceabilityStorageService, fileShareStorageService, loggerService) {
        this.router = router;
        this.userApiService = userApiService;
        this.traceabilityStorageService = traceabilityStorageService;
        this.fileShareStorageService = fileShareStorageService;
        this.loggerService = loggerService;
        this.selectedDivisionId = new EventEmitter();
        // public
        this.companyDivisionsRegisterPath = GlobalConstants.companyDivisionsRegisterPath;
        // private
        this.fileName = 'SidebarDivisionDropdownComponent';
    }
    ngOnInit() {
    }
    /** Public **/
    // set default division
    setDefaultDivision(divisionId) {
        let userSettingsFormValue;
        if (this.parentClass === GlobalConstants.traceabilityClass) {
            userSettingsFormValue = {
                defaultTraceabilityId: divisionId
            };
        }
        else if (this.parentClass === GlobalConstants.fileShareClass) {
            userSettingsFormValue = {
                defaultFileShareId: divisionId
            };
        }
        // update user settings via the api
        this.userApiService.updateUserSettings(userSettingsFormValue);
    }
    changeSelectedDivision(divisionId) {
        // emit selectedDivisionId
        this.selectedDivisionId.emit(divisionId);
        if (this.parentClass === GlobalConstants.traceabilityClass) {
            // store selected division id in local storage
            this.traceabilityStorageService.storeSelectedTraceabilityId(divisionId);
            // TODO - refresh data instead of navigate?
            // navigate
            this.router.navigate([GlobalConstants.traceabilityDashboardPath]).then(() => {
                // log message
                this.loggerService.info(this.fileName, 'changeSelectedDivision', 'navigate', 'traceabilityDashboardPath');
            });
        }
        else if (this.parentClass === GlobalConstants.fileShareClass) {
            // store selected division id in local storage
            this.fileShareStorageService.storeSelectedFileShareId(divisionId);
            // TODO - refresh data instead of navigate?
            // navigate
            this.router.navigate([GlobalConstants.fileSharePath]).then(() => {
                // log message
                this.loggerService.info(this.fileName, 'changeSelectedDivision', 'navigate', 'fileSharePath');
            });
        }
    }
};
__decorate([
    Input()
], SidebarDivisionDropdownComponent.prototype, "parentClass", void 0);
__decorate([
    Input()
], SidebarDivisionDropdownComponent.prototype, "division", void 0);
__decorate([
    Input()
], SidebarDivisionDropdownComponent.prototype, "divisions", void 0);
__decorate([
    Input()
], SidebarDivisionDropdownComponent.prototype, "defaultDivisionId", void 0);
__decorate([
    Output()
], SidebarDivisionDropdownComponent.prototype, "selectedDivisionId", void 0);
SidebarDivisionDropdownComponent = __decorate([
    Component({
        selector: 'app-sidebar-division-dropdown',
        templateUrl: './sidebar-division-dropdown.component.html',
        styleUrls: ['./sidebar-division-dropdown.component.scss']
    })
], SidebarDivisionDropdownComponent);
export { SidebarDivisionDropdownComponent };
//# sourceMappingURL=sidebar-division-dropdown.component.js.map