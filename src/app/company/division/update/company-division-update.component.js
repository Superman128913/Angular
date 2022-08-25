"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDivisionUpdateComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CompanyDivisionUpdateComponent = /** @class */ (function () {
    function CompanyDivisionUpdateComponent(companyApiService, activatedRoute, formBuilder, storageService) {
        var _this = this;
        this.companyApiService = companyApiService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        // form variables
        this.fieldClass = 'form-control-plaintext';
        // get company division id from the route
        this.activatedRoute.paramMap.subscribe(function (params) {
            // set company division id
            _this.companyDivisionId = params.get('id');
            // log company division id
            console.log(_this.companyDivisionId);
        });
        // retrieve company division from local storage
        this.companyDivision = this.storageService.getCompanyDivisionById(this.companyDivisionId);
        // log company division
        console.log('companyDivisionUpdateComponent createCompanyDivisionUpdateForm: ', this.companyDivision);
        // create company division update form
        this.companyDivisionUpdateForm = this.createCompanyDivisionUpdateForm();
        // disable company division update form
        this.companyDivisionUpdateForm.disable();
        // set company division addresses list
        this.companyDivisionAddressesList = this.storageService.getCompanyDivisionAddressesByCompanyDivisionId(this.companyDivisionId);
        // log company division addresses list
        console.log('companyDivisionUpdateComponent companyDivisionAddressesList: ', this.companyDivisionAddressesList);
    }
    Object.defineProperty(CompanyDivisionUpdateComponent.prototype, "f", {
        /** Public **/
        // convenience getter for easy access to form fields
        get: function () {
            return this.companyDivisionUpdateForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CompanyDivisionUpdateComponent.prototype.ngOnInit = function () {
    };
    // enable form
    CompanyDivisionUpdateComponent.prototype.enableForm = function () {
        this.fieldClass = 'form-control';
        // enable form
        this.companyDivisionUpdateForm.enable();
    };
    // update company division from form
    CompanyDivisionUpdateComponent.prototype.updateCompanyDivision = function (companyDivisionUpdateFormValue) {
        // add company division id to the value
        companyDivisionUpdateFormValue.id = this.companyDivisionId;
        // add company id to the value
        companyDivisionUpdateFormValue.companyId = this.storageService.getCompanyId();
        // add user id to the value
        companyDivisionUpdateFormValue.userId = this.storageService.getUserId();
        // update company division via api
        this.companyApiService.updateCompanyDivision(companyDivisionUpdateFormValue);
    };
    // delete company division from form
    CompanyDivisionUpdateComponent.prototype.deleteCompanyDivision = function () {
        // delete company division via the API
        this.companyApiService.deleteCompanyDivision(this.companyDivisionId);
    };
    // dev mode helpers
    CompanyDivisionUpdateComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    // delete company division from form
    CompanyDivisionUpdateComponent.prototype.testDeleteCompanyDivision = function () {
        // delete company division address via the API
        this.companyApiService.deleteCompanyDivision(this.companyDivisionId);
    };
    /** Private **/
    CompanyDivisionUpdateComponent.prototype.createCompanyDivisionUpdateForm = function () {
        return this.formBuilder.group({
            name: [
                this.companyDivision.name, [
                    forms_1.Validators.required
                ]
            ],
            website: [
                this.companyDivision.website
            ],
            email: [
                this.companyDivision.email
            ],
            phone: [
                this.companyDivision.phone
            ],
            fax: [
                this.companyDivision.fax
            ],
            ein: [
                this.companyDivision.ein, [
                    forms_1.Validators.minLength(9),
                    forms_1.Validators.maxLength(9)
                ]
            ],
            dunsNumber: [
                this.companyDivision.dunsNumber, [
                    forms_1.Validators.minLength(9),
                    forms_1.Validators.maxLength(9)
                ]
            ],
            cageCode: [
                this.companyDivision.cageCode, [
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(5)
                ]
            ],
            about: [
                this.companyDivision.about
            ],
            logoUrl: [
                this.companyDivision.logoUrl
            ],
            linkedinUrl: [
                this.companyDivision.linkedinUrl
            ],
            twitterUrl: [
                this.companyDivision.twitterUrl
            ]
        });
    };
    CompanyDivisionUpdateComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company-division-update',
            templateUrl: './company-division-update.component.html',
            styleUrls: ['./company-division-update.component.scss']
        })
    ], CompanyDivisionUpdateComponent);
    return CompanyDivisionUpdateComponent;
}());
exports.CompanyDivisionUpdateComponent = CompanyDivisionUpdateComponent;
