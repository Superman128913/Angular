"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var global_constants_1 = require("../../global-constants");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userApiService, storageService) {
        this.userApiService = userApiService;
        this.storageService = storageService;
        // logo
        this.shortLogo = global_constants_1.GlobalConstants.shortLogo;
        this.selectedDivisionId = this.storageService.getDefaultTraceabilityDivisionId();
        // paths
        this.homePath = global_constants_1.GlobalConstants.homePath;
        this.sharePath = global_constants_1.GlobalConstants.fileSharePath;
        this.cmaasPath = global_constants_1.GlobalConstants.contractsManagerPath;
        this.companyDivisionsRegisterPath = global_constants_1.GlobalConstants.companyDivisionsRegisterPath;
        this.userProfilePath = global_constants_1.GlobalConstants.userProfilePath;
        //
        this.copyrightYear = new Date().getFullYear();
        // set user variables
        this.fullName = this.storageService.getUserFullName();
        this.email = this.storageService.getUserEmail();
        // set divisions variable
        this.divisions = this.storageService.getCompanyDivisions();
        // set default traceability division if not set
        if (!this.storageService.getDefaultTraceabilityDivisionId()) {
            this.setDefaultDivision(this.divisions[0].id);
            this.changeSelectedTraceabilityDivision(this.divisions[0].id);
        }
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    /** Public **/
    SidebarComponent.prototype.changeSelectedTraceabilityDivision = function (divisionId) {
        // set local selected division id
        this.selectedDivisionId = divisionId;
        // store selected division id in local storage
        this.storageService.storeSelectedTraceabilityDivisionId(divisionId);
    };
    // set default traceability division
    SidebarComponent.prototype.setDefaultDivision = function (divisionId) {
        var userSettingsFormValue = {
            // NOTE - there should be at least 1 division in order to access to the application
            defaultTraceabilityDivision: divisionId
        };
        // update user settings via the api
        this.userApiService.updateUserSettings(userSettingsFormValue);
    };
    __decorate([
        (0, core_1.Input)()
    ], SidebarComponent.prototype, "logo", void 0);
    __decorate([
        (0, core_1.Input)()
    ], SidebarComponent.prototype, "menu", void 0);
    SidebarComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
