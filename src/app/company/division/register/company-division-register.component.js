"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDivisionRegisterComponent = void 0;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CompanyDivisionRegisterComponent = /** @class */ (function () {
    // public email;
    // public firstName;
    // public lastName;
    //
    // public company: Company;
    // public controls: FormArray;
    // public userId: number;
    // form: FormGroup;
    // submitted = false;
    // public userCompanyId;
    // public emailCompanyId;
    // public divisionList;
    // public loaded;
    // private currentUserData;
    function CompanyDivisionRegisterComponent(companyApiService, formBuilder, storageService) {
        this.companyApiService = companyApiService;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        // create company division registration form
        this.companyDivisionRegistrationForm = this.createCompanyDivisionRegistrationForm();
    }
    Object.defineProperty(CompanyDivisionRegisterComponent.prototype, "f", {
        /** Public **/
        // convenience getter for easy access to form fields
        get: function () {
            return this.companyDivisionRegistrationForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    CompanyDivisionRegisterComponent.prototype.ngOnInit = function () {
    };
    // register company division
    CompanyDivisionRegisterComponent.prototype.registerCompanyDivision = function (companyDivisionRegisterFormValue) {
        // log data
        console.log({ 'division-register component registerDivision:': companyDivisionRegisterFormValue });
        // register the company division via the API
        this.companyApiService.registerCompanyDivision(companyDivisionRegisterFormValue);
    };
    // dev mode helpers
    CompanyDivisionRegisterComponent.prototype.isDevMode = function () {
        return (0, core_1.isDevMode)();
    };
    CompanyDivisionRegisterComponent.prototype.testRegisterCompanyDivision = function () {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var nameHash = '';
        for (var i = 0; i < 12; i++) {
            nameHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var einHash = '';
        for (var i = 0; i < 9; i++) {
            einHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var dunsNumberHash = '';
        for (var i = 0; i < 9; i++) {
            dunsNumberHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        var cageCodeHash = '';
        for (var i = 0; i < 5; i++) {
            cageCodeHash += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        // set form values
        var companyDivisionRegisterFormValue = {
            name: nameHash,
            website: '',
            email: '',
            phone: '',
            fax: '',
            logoUrl: '',
            linkedinUrl: '',
            twitterUrl: '',
            ein: einHash,
            dunsNumber: dunsNumberHash,
            cageCode: cageCodeHash,
            about: '',
            companyId: this.storageService.getCompanyId(),
            userId: this.storageService.getUserId()
        };
        // register company division via the API
        this.companyApiService.registerCompanyDivision(companyDivisionRegisterFormValue);
    };
    /** Private **/
    CompanyDivisionRegisterComponent.prototype.createCompanyDivisionRegistrationForm = function () {
        return this.formBuilder.group({
            name: [
                '', [
                    forms_1.Validators.required
                ]
            ],
            website: [
                ''
            ],
            email: [
                ''
            ],
            phone: [
                ''
            ],
            fax: [
                ''
            ],
            ein: [
                '', [
                    forms_1.Validators.minLength(9),
                    forms_1.Validators.maxLength(9)
                ]
            ],
            dunsNumber: [
                '', [
                    forms_1.Validators.minLength(9),
                    forms_1.Validators.maxLength(9)
                ]
            ],
            cageCode: [
                '', [
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(5)
                ]
            ],
            about: [
                ''
            ],
            logoUrl: [
                ''
            ],
            linkedinUrl: [
                ''
            ],
            twitterUrl: [
                ''
            ]
        });
    };
    CompanyDivisionRegisterComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-company-division-register',
            templateUrl: './company-division-register.component.html',
            styleUrls: ['./company-division-register.component.scss']
        })
    ], CompanyDivisionRegisterComponent);
    return CompanyDivisionRegisterComponent;
}());
exports.CompanyDivisionRegisterComponent = CompanyDivisionRegisterComponent;
