"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDivisionAddressComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CompanyDivisionAddressComponent = /** @class */ (function () {
    function CompanyDivisionAddressComponent(companyApiService, activatedRoute, formBuilder, storageService) {
        var _this = this;
        this.companyApiService = companyApiService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        // form variables
        this.fieldClass = 'form-control-plaintext';
        // get division id from the route
        this.activatedRoute.paramMap.subscribe(function (params) {
            // set company division id
            _this.companyDivisionId = params.get('companyDivisionId');
            // log company division id
            console.log('companyDivisionAddressComponent companyDivisionId:', _this.companyDivisionId);
            // set company division address id
            _this.companyDivisionAddressId = params.get('id');
            // log company division address id
            console.log('companyDivisionAddressComponent companyDivisionAddressId:', _this.companyDivisionAddressId);
        });
        // update
        if (this.companyDivisionAddressId) {
            // retrieve company division address from local storage
            this.companyDivisionAddress = this.storageService.getCompanyDivisionAddressById(this.companyDivisionAddressId);
            // log company division address
            console.log('companyDivisionAddressComponent companyDivisionAddress: ', this.companyDivisionAddress);
        }
        // create division address form
        this.companyDivisionAddressForm = this.createCompanyDivisionAddressForm();
        // update
        if (this.companyDivisionAddressId) {
            // set fields as plain text
            this.fieldClass = 'form-control-plaintext';
            // disable division address form
            this.companyDivisionAddressForm.disable();
        }
        // register
        else {
            // set fields as form control
            this.fieldClass = 'form-control';
        }
    }
    Object.defineProperty(CompanyDivisionAddressComponent.prototype, "f", {
        /** Public **/
        // convenience getter for easy access to form fields
        get: function () {
            return this.companyDivisionAddressForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CompanyDivisionAddressComponent.prototype.ngOnInit = function () {
    };
    // enable form
    CompanyDivisionAddressComponent.prototype.enableForm = function () {
        this.fieldClass = 'form-control';
        // enable form
        this.companyDivisionAddressForm.enable();
    };
    // register company division address
    CompanyDivisionAddressComponent.prototype.registerOrUpdateCompanyDivisionAddress = function (companyDivisionAddressFormValue) {
        // update
        if (this.companyDivisionAddressId) {
            var companyDivisionAddressUpdateFormValue = {
                id: this.companyDivisionAddress.id,
                address: companyDivisionAddressFormValue.address,
                additionalAddressDetails: companyDivisionAddressFormValue.additionalAddressDetails,
                city: companyDivisionAddressFormValue.city,
                zipPostalCode: companyDivisionAddressFormValue.zipPostalCode,
                stateProvinceCounty: companyDivisionAddressFormValue.stateProvinceCounty,
                country: companyDivisionAddressFormValue.country,
                // formattedAddress:
                //     companyDivisionAddressFormValue.address +
                //     ', ' +
                //     companyDivisionAddressFormValue.additionalAddressDetails +
                //     ', ' +
                //     companyDivisionAddressFormValue.city +
                //     ', ' +
                //     companyDivisionAddressFormValue.zipPostalCode +
                //     ' ' +
                //     companyDivisionAddressFormValue.stateProvinceCounty +
                //     ', ' +
                //     companyDivisionAddressFormValue.country,
                companyDivisionId: this.companyDivisionId
            };
            // log data
            console.log({ 'companyDivisionAddressComponent updateCompanyDivisionAddress:': companyDivisionAddressUpdateFormValue });
            // update company division address via api
            this.companyApiService.updateCompanyDivisionAddress(companyDivisionAddressUpdateFormValue);
        }
        // register
        else {
            var companyDivisionAddressRegisterFormValue = {
                address: companyDivisionAddressFormValue.address,
                additionalAddressDetails: companyDivisionAddressFormValue.additionalAddressDetails,
                city: companyDivisionAddressFormValue.city,
                zipPostalCode: companyDivisionAddressFormValue.zipPostalCode,
                stateProvinceCounty: companyDivisionAddressFormValue.stateProvinceCounty,
                country: companyDivisionAddressFormValue.country,
                // formattedAddress:
                //     companyDivisionAddressFormValue.address +
                //     ', ' +
                //     companyDivisionAddressFormValue.additionalAddressDetails +
                //     ', ' +
                //     companyDivisionAddressFormValue.city +
                //     ', ' +
                //     companyDivisionAddressFormValue.zipPostalCode +
                //     ' ' +
                //     companyDivisionAddressFormValue.stateProvinceCounty +
                //     ', ' +
                //     companyDivisionAddressFormValue.country,
                companyDivisionId: this.companyDivisionId
            };
            // log data
            console.log({ 'companyDivisionAddressComponent registerCompanyDivisionAddress:': companyDivisionAddressRegisterFormValue });
            // register the company division address via the API
            this.companyApiService.registerCompanyDivisionAddress(companyDivisionAddressRegisterFormValue);
        }
    };
    // delete company division address from form
    CompanyDivisionAddressComponent.prototype.deleteCompanyDivisionAddress = function () {
        // delete company division address via the API
        this.companyApiService.deleteCompanyDivision(this.companyDivisionAddress.id);
    };
    // dev mode helpers
    CompanyDivisionAddressComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    CompanyDivisionAddressComponent.prototype.testRegisterCompanyDivisionAddress = function () {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var addressHash = '';
        for (var i = 0; i < 12; i++) {
            addressHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var cityHash = '';
        for (var i = 0; i < 9; i++) {
            cityHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var stateProvinceCountyHash = '';
        for (var i = 0; i < 9; i++) {
            stateProvinceCountyHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var zipPostalCodeHash = '';
        for (var i = 0; i < 9; i++) {
            zipPostalCodeHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var countryHash = '';
        for (var i = 0; i < 5; i++) {
            countryHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        // set form values
        var companyDivisionAddressRegisterFormValue = {
            address: addressHash,
            additionalAddressDetails: '',
            city: cityHash,
            zipPostalCode: zipPostalCodeHash,
            stateProvinceCounty: stateProvinceCountyHash,
            country: countryHash,
            // formattedAddress:
            //     addressHash +
            //     ', ' +
            //     cityHash +
            //     ', ' +
            //     zipPostalCodeHash +
            //     ' ' +
            //     stateProvinceCountyHash +
            //     ', ' +
            //     countryHash,
            companyDivisionId: this.companyDivisionId
        };
        // register company division via the API
        this.companyApiService.registerCompanyDivisionAddress(companyDivisionAddressRegisterFormValue);
    };
    // delete company division address from form
    CompanyDivisionAddressComponent.prototype.testDeleteCompanyDivisionAddress = function () {
        // delete company division address via the API
        this.companyApiService.deleteCompanyDivisionAddress(this.companyDivisionAddress.id, this.companyDivisionId);
    };
    /** Private **/
    CompanyDivisionAddressComponent.prototype.createCompanyDivisionAddressForm = function () {
        // update
        if (this.companyDivisionAddressId) {
            return this.formBuilder.group({
                address: [
                    this.companyDivisionAddress.address, [
                        forms_1.Validators.required
                    ]
                ],
                additionalAddressDetails: [
                    this.companyDivisionAddress.additionalAddressDetails
                ],
                city: [
                    this.companyDivisionAddress.city, [
                        forms_1.Validators.required
                    ]
                ],
                zipPostalCode: [
                    this.companyDivisionAddress.zipPostalCode, [
                        forms_1.Validators.required
                    ]
                ],
                stateProvinceCounty: [
                    this.companyDivisionAddress.stateProvinceCounty, [
                        forms_1.Validators.required
                    ]
                ],
                country: [
                    this.companyDivisionAddress.country, [
                        forms_1.Validators.required
                    ]
                ]
            });
        }
        // register
        else {
            return this.formBuilder.group({
                address: [
                    '', [
                        forms_1.Validators.required
                    ]
                ],
                additionalAddressDetails: [
                    ''
                ],
                city: [
                    '', [
                        forms_1.Validators.required
                    ]
                ],
                zipPostalCode: [
                    '', [
                        forms_1.Validators.required
                    ]
                ],
                stateProvinceCounty: [
                    '', [
                        forms_1.Validators.required
                    ]
                ],
                country: [
                    '', [
                        forms_1.Validators.required
                    ]
                ]
            });
        }
    };
    CompanyDivisionAddressComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company-division-address',
            templateUrl: './company-division-address.component.html',
            styleUrls: ['./company-division-address.component.scss']
        })
    ], CompanyDivisionAddressComponent);
    return CompanyDivisionAddressComponent;
}());
exports.CompanyDivisionAddressComponent = CompanyDivisionAddressComponent;
