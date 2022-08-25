"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySettingComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var CompanySettingComponent = /** @class */ (function () {
    function CompanySettingComponent(formBuilder, storageService, companyApiService) {
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.companyApiService = companyApiService;
        // create user profile form
        this.companySettingsForm = this.createCompanySettingsForm();
        // disable form
        this.companySettingsForm.disable();
    }
    /** Public **/
    CompanySettingComponent.prototype.ngOnInit = function () {
    };
    // update company settings from form
    CompanySettingComponent.prototype.updateCompanySettings = function (companySettingsFormValue) {
    };
    // dev mode helpers
    CompanySettingComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    CompanySettingComponent.prototype.testDeleteCompany = function () {
        // set company id
        var companyId = this.storageService.getCompanyId();
        // delete company via the api
        this.companyApiService.deleteCompany(companyId);
    };
    /** Private **/
    CompanySettingComponent.prototype.createCompanySettingsForm = function () {
        return this.formBuilder.group({});
    };
    CompanySettingComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company-profile',
            templateUrl: './company-setting.component.html',
            styleUrls: ['./company-setting.component.scss']
        })
    ], CompanySettingComponent);
    return CompanySettingComponent;
}());
exports.CompanySettingComponent = CompanySettingComponent;
