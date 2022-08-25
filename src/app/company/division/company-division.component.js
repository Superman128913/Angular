"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDivisionComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var global_constants_1 = require("../../shared/global-constants");
var CompanyDivisionComponent = /** @class */ (function () {
    function CompanyDivisionComponent(storageService) {
        this.storageService = storageService;
        // paths
        this.companyDivisionsRegisterPath = global_constants_1.GlobalConstants.companyDivisionsRegisterPath;
        this.companyDivisionsUpdatePath = global_constants_1.GlobalConstants.companyDivisionsUpdatePath;
        // set company divisions list
        this.companyDivisionsList = this.storageService.getCompanyDivisions();
        // log company divisions list
        console.log('companyDivisionsList', this.companyDivisionsList);
    }
    /** Public **/
    CompanyDivisionComponent.prototype.ngOnInit = function () {
    };
    CompanyDivisionComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company-division',
            templateUrl: './company-division.component.html',
            styleUrls: ['./company-division.component.scss']
        })
    ], CompanyDivisionComponent);
    return CompanyDivisionComponent;
}());
exports.CompanyDivisionComponent = CompanyDivisionComponent;
